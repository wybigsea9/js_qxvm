# -*- coding: UTF-8 -*-
# @author: zhulw
# @file: 99
# @time: 2020-10-18
# @desc:

import re
import execjs
import requests

with open("js/9.js", "r", encoding="gbk", errors="ignore") as f:
    js_code = f.read()
session = requests.session()
session.headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "max-age=0",
    "Connection": "keep-alive",
    "Host": "match.yuanrenxue.com",
    "Referer": "http://match.yuanrenxue.com/match/9",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36"
}
url = "http://match.yuanrenxue.com/match/9"
r = session.get(url)
t_code = re.findall(r'javascript">(.*?)</script>', r.text, re.S)[0]
js_code += t_code.replace("require", 'aaa').replace("process", 'aaa').replace("global", 'aaa').replace(
    "window=new Array()", "")
ctx = execjs.compile(js_code)
m = ctx.call("get_cookie")
cookie = m[2:-8]
session.cookies.update({"m": cookie})
sum_ = 0
for i in range(1, 6):
    if i == 1:
        url = "http://match.yuanrenxue.com/api/match/9"
    else:
        url = "http://match.yuanrenxue.com/api/match/9?page={}".format(i)
    r = session.get(url)
    data = r.json()["data"]
    for dd in data:
        sum_ += dd["value"]
print(sum_)
print(sum_ / 50)
