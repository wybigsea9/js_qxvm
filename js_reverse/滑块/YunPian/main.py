import json
import random
from utils import encrypt
from utils import rsa_encrypt
from utils import get_md5_value
import requests
import execjs
from loguru import logger
import asyncio
import aiofiles
from crack import GapLocater


async def get_fp():
    async with aiofiles.open('getFP.js', 'r', encoding='utf-8') as f:
        js = await f.read()
    return execjs.compile(js).call("get_fp")


def save_img(path, img):
    with open(f'images/{path}.jpg', 'wb') as f:
        f.write(img)


class YunPian:
    def __init__(self):
        self.session = requests.session()
        self.headers = {
            "Referer": "https://www.yunpian.com/product/captcha",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36 Edg/83.0.478.56"
        }
        self.token = ""
        self.fp = asyncio.run(get_fp())

    def random_key_iv(self):
        ctx = execjs.compile('getRandomStr=function(t){for(var e="";e.length<t;)e+=Math.random().toString(36).substr(2);return e=e.slice(0,t)};'
                             'function get_key(){var e=getRandomStr(16),n=getRandomStr(16);return e+"|"+n;};')
        result = ctx.call("get_key").split("|")
        key = result[0]
        iv = result[1]
        return key, iv

    def get_pic(self):
        cb = execjs.eval('Math.random().toString(32).replace("0.", "")')
        # logger.info(cb)
        # logger.info(self.fp)
        key, iv = self.random_key_iv()
        # logger.info(key)
        # logger.info(iv)
        i_data = {"browserInfo": [{"key": "userAgent", "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36 Edg/83.0.478.56"},
                                  {"key": "language", "value": "zh-CN"}, {"key": "hardware_concurrency", "value": 36}, {"key": "resolution", "value": [2560, 1080]},
                                  {"key": "navigator_platform", "value": "Win32"}], "mobile": "", "nativeInfo": {}, "username": "",
                  "options": {"sdk": "https://www.yunpian.com/static/official/js/libs/riddler-sdk-0.2.2.js"}, "fp": self.fp, "address": "https://www.yunpian.com",
                  "yp_riddler_id": ""}
        i = encrypt(key, iv, json.dumps(i_data))
        # logger.info(i)
        k = rsa_encrypt(key + iv)
        # logger.info(k)

        params = {
            "cb": cb,
            "i": i,
            "k": k,
            "token": get_md5_value(str(random.random())),
            "captchaId": "b68fba1577964dc59c10a46c142b12ac"
        }

        resp = self.session.get(url="https://captcha.yunpian.com//v1/jsonp/captcha/get", headers=self.headers, params=params)
        _ = json.loads(resp.text[8:-1])
        bg_url = _.get("data").get("bg")
        front_url = _.get("data").get("front")
        self.token = _.get("data").get("token")
        # logger.info(bg_url)
        # logger.info(self.token)

        img = self.session.get(url=bg_url, headers=self.headers)
        block = self.session.get(url=front_url, headers=self.headers)
        ttt = GapLocater(block.content, img.content)
        x = asyncio.run(ttt.run())
        # logger.info(x)
        return self.verify(x)

    def verify(self, x):
        logger.debug("*" * 60 + "进入验证流程" + "*" * 60)
        cb = execjs.eval('Math.random().toString(32).replace("0.", "")')
        # logger.info(cb)
        with open('getTrack.js', 'r', encoding='utf-8') as f:
            js = f.read()
        ctx = execjs.compile(js.encode().decode("gbk", 'ignore'))
        tracks = ctx.call("get_track", x)
        data = '{"points":%s,"distanceX":%s,"fp":"%s","address":"https://www.yunpian.com","yp_riddler_id":""}' % (tracks, str(x / 480), self.fp)
        # logger.info(data)
        # logger.info(type(data))
        key, iv = self.random_key_iv()
        # logger.info(key)
        # logger.info(iv)
        i = encrypt(key, iv, data)
        # logger.info(i)
        k = rsa_encrypt(key + iv)
        # logger.info(k)
        params = {
            "cb": cb,
            "i": i,
            "k": k,
            "token": self.token,
            "captchaId": "b68fba1577964dc59c10a46c142b12ac"
        }

        resp = self.session.get(url='https://captcha.yunpian.com//v1/jsonp/captcha/verify', params=params, headers=self.headers)
        _ = json.loads(resp.text[8:-1])
        result = _.get("data").get("result")
        logger.info(resp.text)
        if result:
            return True


if __name__ == '__main__':
    a = YunPian()
    counts = 10
    total = 0

    for i in range(counts):
        if a.get_pic():
            total += 1
    logger.info(f"合计测试{counts}次 通过{total}次,成功率:{total / counts * 100}%")
