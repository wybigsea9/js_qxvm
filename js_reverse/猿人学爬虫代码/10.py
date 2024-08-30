# -*- coding: UTF-8 -*-
# @author: zhulw
# @file: 10
# @time: 2020-10-17
# @desc:

import requests
import execjs
import re


def decrypt(code, num):
    js_code = """
        function decrypt(aaa, bbb){
            var _0x468f64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            atob = function (_0x3fb744) {
                var _0x36e2d8 = String(_0x3fb744)["replace"](/=+$/, "");
            
                for (var _0x4fe29d = 0x0, _0x2e85b9, _0x5d837b, _0x27a534 = 0x0, _0x29b5d2 = ""; _0x5d837b = _0x36e2d8["charAt"](_0x27a534++); ~_0x5d837b && (_0x2e85b9 = _0x4fe29d % 0x4 ? _0x2e85b9 * 0x40 + _0x5d837b : _0x5d837b, _0x4fe29d++ % 0x4) ? _0x29b5d2 += String["fromCharCode"](0xff & _0x2e85b9 >> (-0x2 * _0x4fe29d & 0x6)) : 0x0) {
                    _0x5d837b = _0x468f64["indexOf"](_0x5d837b);
                }
            
                return _0x29b5d2;
            }
            
            _$iL = ""
            for (let li1 = 0x0; li1 < aaa["length"]; li1++) {
                _$iL += String["fromCharCode"](aaa[li1]["charCodeAt"]() - li1 % bbb - 0x32);
            }
            _$_X = atob(_$iL);
            return _$_X
        }
    """
    _ctx = execjs.compile(js_code)
    aaa = _ctx.call("decrypt", code, num)
    return aaa


session = requests.session()
headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Host": "match.yuanrenxue.com",
    "Referer": "http://match.yuanrenxue.com/match/10",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest"
}
session.headers = headers
sum_ = 0
all_ = []
for i in range(1, 6):
    url_index = "http://match.yuanrenxue.com/match/10"
    r = session.get(url_index)
    tnum = re.findall('var _\$uf=(\d+)', r.text)[0]

    url_offset = "http://match.yuanrenxue.com/api/offset"
    r = session.get(url_offset)
    num1 = re.findall(r"\d+", r.text)[0]

    url_rs = "http://match.yuanrenxue.com/stati/mu/rsnkw2ksph"
    r = session.get(url_rs)
    rs_code = re.findall(r"\$_ts\[\'dfe1683\'\]=\'([\s\S]+)\'", r.text)[0]
    rs_code = decrypt(rs_code, tnum)

    num2 = re.findall(r"var _yrxmbl=(\d+)", rs_code)[0]
    num3 = re.findall(r"_yrxVhD\(_yrxtJ1\)\{return (\d+)", rs_code)[0]
    num4 = re.findall(r"var _yrxC2_=(\d+)", rs_code)[0]

    with open("js/10.js", "r") as f:
        js_code = f.read()
    ctx = execjs.compile(js_code)
    url = "http://match.yuanrenxue.com" + ctx.call("get_url", i, int(num1), int(num2), int(num3), int(num4))
    r = session.get(url, headers=headers)
    data = r.json()["data"]
    print(data)
    for dd in data:
        all_.append(dd["value"])
print(all_)
print(sum(all_))
