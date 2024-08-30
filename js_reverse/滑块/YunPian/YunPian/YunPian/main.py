import json
import random
from utils import encrypt
from utils import rsa_encrypt
from utils import get_md5_value
import execjs
from loguru import logger
import asyncio
import aiofiles
import aiohttp
from crack import GapLocater


class YunPian:
    # 加密对象
    __TRACK_CTX = None
    __FP_CTX = None
    # 请求头
    headers = {
        "Referer": "https://www.yunpian.com/product/captcha",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36 Edg/83.0.478.56"
    }

    def __init__(self, cid: str):
        """
        初始化
        :param cid: 云片对接 id
        """
        self.cid = cid
        # 请求会话
        self.session = None

    async def reload_js(self):
        """
        加载 js
        :return:
        """
        async with aiofiles.open('getTrack.js', 'r', encoding='utf-8') as f:
            track_js = await f.read()
        self.__TRACK_CTX = execjs.compile(track_js.encode().decode("gbk", 'ignore'))
        async with aiofiles.open('getFP.js', 'r', encoding='utf-8') as f:
            fp_js = await f.read()
        self.__FP_CTX = execjs.compile(fp_js)

    @staticmethod
    async def random_key_iv():
        ctx = execjs.compile(
            """function getRandomStr(t){
                for (var e = ""; e.length < t;)
                    e += Math.random().toString(36).substr(2);
                    return e=e.slice(0,t)
            }
            function get_key(){
                var e = getRandomStr(16),
                n=getRandomStr(16);
                return e+"|"+n;
            }
            """
        )
        result = ctx.call("get_key").split("|")
        key = result[0]
        iv = result[1]
        return key, iv

    @staticmethod
    async def get_distance(bg, front):
        """
        获取缺口距离
        :param bg:
        :param front:
        :return:
        """
        distance = await GapLocater(front, bg).run()
        return distance

    async def img_download(self, url):
        """
        下载图片
        :param url: 图片地址
        :return:
        """
        img_data = await (await self.session.get(url, timeout=30)).read()
        return img_data

    async def init_captcha(self, fp):
        """
        初始化验证码
        :param fp: 指纹
        :return:
        """
        cb = execjs.eval('Math.random().toString(32).replace("0.", "")')
        key, iv = await self.random_key_iv()
        i_data = {
            "browserInfo": [{
                "key": "userAgent",
                "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36 Edg/83.0.478.56"
            }, {
                "key": "language",
                "value": "zh-CN"
            }, {
                "key": "hardware_concurrency",
                "value": 36
            }, {
                "key": "resolution",
                "value": [2560, 1080]
            }, {
                "key": "navigator_platform",
                "value": "Win32"
            }
            ],
            "mobile": "",
            "nativeInfo": {},
            "username": "",
            "options": {"sdk": "https://www.yunpian.com/static/official/js/libs/riddler-sdk-0.2.2.js"},
            "fp": fp,
            "address": "https://www.yunpian.com",
            "yp_riddler_id": ""
        }
        i = await encrypt(key, iv, json.dumps(i_data))
        k = await rsa_encrypt(key + iv)

        params = {
            "cb": cb,
            "i": i,
            "k": k,
            "token": await get_md5_value(str(random.random())),
            "captchaId": self.cid
        }

        resp = await (await self.session.get(
            url="https://captcha.yunpian.com//v1/jsonp/captcha/get",
            params=params,
            timeout=30
        )).text()
        _ = json.loads(resp[8:-1])
        bg_url = _.get("data").get("bg")
        front_url = _.get("data").get("front")

        token = _.get("data").get("token")
        bg = await self.img_download(bg_url)
        front = await self.img_download(front_url)
        return {
            'token': token,
            'bg': bg,
            'front': front
        }

    async def captcha_verify(self, fp: str, token: str, distance: int):
        """
        最终验证
        :param fp: 指纹
        :param token: 当前验证 token
        :param distance: 缺口距离
        :return:
        """
        # logger.info("*" * 60 + "进入验证流程" + "*" * 60)
        cb = execjs.eval('Math.random().toString(32).replace("0.", "")')

        tracks = self.__TRACK_CTX.call("get_track", distance)
        data = '{"points":%s,"distanceX":%s,"fp":"%s","address":"https://www.yunpian.com","yp_riddler_id":""}' % (
            tracks, str(distance / 480), fp
        )
        key, iv = await self.random_key_iv()
        i = await encrypt(key, iv, data)
        k = await rsa_encrypt(key + iv)

        params = {
            "cb": cb,
            "i": i,
            "k": k,
            "token": token,
            "captchaId": self.cid
        }

        resp = await (await self.session.get(
            url='https://captcha.yunpian.com//v1/jsonp/captcha/verify',
            params=params,
            timeout=30
        )).text()
        result = json.loads(resp[8:-1])
        logger.info("result: {}".format(result))
        return result

    async def run(self):
        async with aiohttp.ClientSession(connector=aiohttp.TCPConnector(ssl=False), headers=self.headers) as self.session:
            await self.reload_js()
            fp = self.__FP_CTX.call('get_fp')
            init_data = await self.init_captcha(fp)
            distance = await self.get_distance(init_data['bg'], init_data['front'])
            result = await self.captcha_verify(fp, init_data['token'], distance)
            if result['data']['result']:
                # logger.info('验证通过! ')
                return True
            else:
                logger.error('验证失败! ')
                return False


if __name__ == '__main__':
    success = 0
    counts = 5
    loop = asyncio.get_event_loop()
    for _ in range(counts):
        x = loop.run_until_complete(YunPian("b68fba1577964dc59c10a46c142b12ac").run())
        if x:
            success += 1
    logger.info(f"合计测试{counts}次 通过{success}次,成功率:{success / counts * 100}%")
