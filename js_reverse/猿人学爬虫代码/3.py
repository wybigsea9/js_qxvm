import requests

session = requests.session()

headers = {
'Host': 'match.yuanrenxue.com',
'Connection': 'keep-alive',
'Content-Length': '0',
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36',
'Accept': '*/*',
'Origin': 'http://match.yuanrenxue.com',
'Referer': 'http://match.yuanrenxue.com/match/3',
'Accept-Encoding': 'gzip, deflate',
'Accept-Language': 'zh-CN,zh;q=0.9',
}
session.headers = headers
all = {}
for i in range(1, 6):
    res = session.post('http://match.yuanrenxue.com/logo', verify=False)
    print(res.status_code)
    print(res.cookies)
    if i == 1:
        url = "http://match.yuanrenxue.com/api/match/3"
    else:
        url = "http://match.yuanrenxue.com/api/match/3?page={}".format(i)
    r = session.get(url)
    
    print(r.text)
    print()
    data = r.json()["data"]
    for dd in data:
        if dd["value"] in all:
            all[dd["value"]] += 1
        else:
            all[dd["value"]] = 1
print(all)