function po(e) {
    let t;
    t = e.length < 100 ? 5 : e.length >= 100 && e.length < 160 ? 47 : e.length >= 160 && e.length < 200 ? 79 : 97;
    const o = [];
    let n = ""
        , r = 0;
    for (; n = e.slice(r, r + t);)
        o.push(n),
            r += t;
    const i = o.shift()
        , a = o.shift();
    i && a && o.unshift(a, i);
    const s = {};
    // console.log(r, t, o)
    try {
        s.data = JSON.parse(atob(o.join("")))
    } catch (c) {
        s.error = c
    }
    return s
}
var e = 'C4wLjMuNjQiLCJwIjoiODg4MSIsImMiOjEzLCJyIjoiZXlKcGRpSTZJakpFTUhJMFFuWlRURW94YWtKRE1sTkpjV05XY21jOVeyJ1IjoiYW5keTAwMSIsInQiOiJkMTJmOThmYjYwODFkODIzODA4MjQyZmU0ZTRkYmUwMSIsImwiOiJ6aF9UVyIsImkiOiIxMBTSXNJblpoYkhWbElqb2lXRU0wTVc5RVNWTndUR2RtSzJ4aGQzZzFlWFZWT0Z3dmRHUXlWemN3Tm0xeWJrUTVSSGxvWTJodFZGVXJNWE0zVWxOWVdGRmNMMUYzTTNFeFRYcFdlR05TT1RaeWJsZEVNVGRDTkhvNWJuUlJjbTlzV0VwTFNWRmhNelJrTURWYVJYWTBUVnBpVFRCb2EwOWlVMk5zU20xak5YVkplV2hXVlZwaVYzTTBYQzl2YmpaRVMwVkJabFpSZEVOMWVVRkdVRUZvTjJSNVVXRmhaSFkzT0RKU1dIcERSbFZ5YkhWRk1rOWFibWMwV1dOQ1ltZE1aRzFuWm1rNGQxWmxVbWcxZGtwUWVWWlpWRFJQUWxacVhDOVpTSFZVUzJWR2VXNXVZWHAzV25vclhDOTFibE0xSzFKY0wyUmhjRWRWZWtkVllVRk9iakpTVmxsRWREVlhaMjVwY1ZOM1ZXRnhkMFpHZFN0MFlXbGFZMWN3WVRGcVRGVkxZVmxKTnpoWGRIRnVURGxuV1cxaWNFaG9PVEEwVm5adWNuUTJaWEJpYjBOSE5uaE9NbUk1ZGtOelFYYzNSbE5ZVVRGT2IxZExZazE1YW1KeVNHbFhkVWR5V1ZVM1VVUlFTbkJyY2pSbk1FWkVNSEJvWm5oMGVEWjBWamRRVjBRclZDdEVaMUJOU2xOVE5VaFNjRVExZVZrMU1tOXdaRmhOWld0c09HMWlhemQ1YldsSlIxRnFhRFZVUTIxVVhDOXZaa0ZaVkVsQlJXRTFSa3N6WVdkR2R6RmhjVThyV1ZaRWIzcE5hWE5FVDJ4VFdHcGlVSFZRUWxGSmNrc3hia2xtYjJab09FWjZOMnhJZEdacmVqTXlNSEJPTUVJeVlrZEhTVkk1T0ZSWWREZEZkRlZIZDJneVRtdGpkemROWkhGSWJEWXdiMDFOTWxWY0wwYzJhVTV3U1RST2JUVmhlVEpYUTBzM1NqWndOVXBHVEUxR2VWUnBaMUpCVldKelFtazJVa1U1UzFoaWNsTkVZMVJuYmpkaVYyZDJNSFpvVTBkY0wzZExXbnBwVDBOaWFrcFJPVXgyTWxGdVFYRkpXV1pyT1Rad1RqVjJSMVZaZVdVNVJXWXdSRk5YYWsxamRWQnFhbGh5TjNOR2RsUTJUSFI2ZUhoc1VGUnlTU3ROVlhwVVpFRndVekpvY200emVUaHRaV281T1c1b1NYWnlXbEV3TUVsbmIwSXpiR0pPWTJnM2JIcHFlVzlqWkZnNGNuVnplRm9pTENKdFlXTWlPaUl4TmpabU9XUTJNbUl3TVRVNFlUTXlOV013TVdKaVkyUmhZbVV3T1ROaE56QTNPVEpsWkRSaU5XVXpOVGRsWmpNNE5EZzNOV0prTlRFd01qUTBaVFkySW4wPSIsInoiOiJDTiIsImEiOiJodHRwczpcL1wvcGxheS5rYXNhci5saXZlIiwiYiI6ImhzIiwiZyI6Imh0dHBzOlwvXC9wbGF5Lmthc2FyLmxpdmUiLCJ0cCI6IjIuMCIsImsiOiJqRm15QW43eGUyQWM1aEQxIn0='
console.log(po(e))