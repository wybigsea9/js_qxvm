require('./douyin_env')
require('./douyin_bdms')
t = {
    "aid": 6383,
    "pageId": 6241,
    "paths": [
        "^/webcast/",
        "^/aweme/v1/",
        "^/aweme/v2/",
        "/v1/message/send",
        "^/live/",
        "^/captcha/",
        "^/ecom/"
    ],
    "boe": false,
    "ddrt": 7
}
bdms.init(t)

console.log(get_ab)
xhr = new XMLHttpRequest()
xhr.openArgs = {
    0: "GET",
    1: "/aweme/v1/web/aweme/post/?device_platform=webapp&aid=6383&channel=channel_pc_web&sec_user_id=MS4wLjABAAAAelKmhI-fA8S2E1Jitt4SWFms57vc7IqygsAAx9BHsgLTBNV2UnO3122qrf0awzdF&max_cursor=0&locate_item_id=7411763044725935412&locate_query=false&show_live_replay_strategy=1&need_time_list=1&time_list_query=0&whale_cut_token=&cut_version=1&count=18&publish_video_strategy_type=2&update_version_code=170400&pc_client_type=1&pc_libra_divert=Windows&version_code=290100&version_name=29.1.0&cookie_enabled=true&screen_width=2560&screen_height=1440&browser_language=zh-CN&browser_platform=Win32&browser_name=Chrome&browser_version=128.0.0.0&browser_online=true&engine_name=Blink&engine_version=128.0.0.0&os_name=Windows&os_version=10&cpu_core_num=20&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7412279688401307177&verifyFp=verify_m0to9b7h_HqwDzTgk_N1WM_4lHk_9kEn_xuILLo8oINrd&fp=verify_m0to9b7h_HqwDzTgk_N1WM_4lHk_9kEn_xuILLo8oINrd",
    2: true,
    length: 3,
}
xhr.onabort = function() {
    console.log('xhr aborted');
}
xhr.onerror = function(t) {
    console.log('xhr error: ', t);
}
xhr.onload = function(t) {
    console.log('xhr loaded: ', t);
}
xhr.onloadend = function () {
    console.log('xhr end');
}
xhr.onloadstart = null;
xhr.onprogress = null;
xhr.onreadystatechange = null;
xhr.ontimeout = function () {
    console.log('xhr timeout');
}
xhr.status = 0;
xhr.statusText = "";
xhr.withCredentials = true;
args = [
    "GET",
    "/aweme/v1/web/aweme/post/?device_platform=webapp&aid=6383&channel=channel_pc_web&sec_user_id=MS4wLjABAAAAelKmhI-fA8S2E1Jitt4SWFms57vc7IqygsAAx9BHsgLTBNV2UnO3122qrf0awzdF&max_cursor=0&locate_item_id=7411763044725935412&locate_query=false&show_live_replay_strategy=1&need_time_list=1&time_list_query=0&whale_cut_token=&cut_version=1&count=18&publish_video_strategy_type=2&update_version_code=170400&pc_client_type=1&pc_libra_divert=Windows&version_code=290100&version_name=29.1.0&cookie_enabled=true&screen_width=2560&screen_height=1440&browser_language=zh-CN&browser_platform=Win32&browser_name=Chrome&browser_version=128.0.0.0&browser_online=true&engine_name=Blink&engine_version=128.0.0.0&os_name=Windows&os_version=10&cpu_core_num=20&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7412279688401307177&verifyFp=verify_m0to9b7h_HqwDzTgk_N1WM_4lHk_9kEn_xuILLo8oINrd&fp=verify_m0to9b7h_HqwDzTgk_N1WM_4lHk_9kEn_xuILLo8oINrd",
    true
]
//get_ab.apply(xhr, args)

xhr.bdmsInvokeList = [{
    "args": [
        "GET",
        "/aweme/v1/web/aweme/post/?device_platform=webapp&aid=6383&channel=channel_pc_web&sec_user_id=MS4wLjABAAAAelKmhI-fA8S2E1Jitt4SWFms57vc7IqygsAAx9BHsgLTBNV2UnO3122qrf0awzdF&max_cursor=0&locate_item_id=7411763044725935412&locate_query=false&show_live_replay_strategy=1&need_time_list=1&time_list_query=0&whale_cut_token=&cut_version=1&count=18&publish_video_strategy_type=2&update_version_code=170400&pc_client_type=1&pc_libra_divert=Windows&version_code=290100&version_name=29.1.0&cookie_enabled=true&screen_width=2560&screen_height=1440&browser_language=zh-CN&browser_platform=Win32&browser_name=Chrome&browser_version=128.0.0.0&browser_online=true&engine_name=Blink&engine_version=128.0.0.0&os_name=Windows&os_version=10&cpu_core_num=20&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7412279688401307177&verifyFp=verify_m0to9b7h_HqwDzTgk_N1WM_4lHk_9kEn_xuILLo8oINrd&fp=verify_m0to9b7h_HqwDzTgk_N1WM_4lHk_9kEn_xuILLo8oINrd",
        true
    ],
    "func": function(t, n) {
        try {
            var o = "string" == typeof n ? n : n.toString();
            if (!e(o))
                return r.apply(this, arguments);
            this._vc_status = 1,
            this._vc_actionList = [],
            this._vc_actionList.push({
                origin: r,
                fnName: "open",
                arguments: arguments
            })
        } catch (e) {
            return r.apply(this, arguments)
        }
    }
},{
    args: [
        "Accept",
        "application/json, text/plain, */*"
    ],
    func: function() {
        if (1 !== this._vc_status)
            return o.apply(this, arguments);
        this._vc_actionList.push({
            origin: o,
            fnName: "setRequestHeader",
            arguments: arguments
        })
    }
}]
args = [
    null
]
get_ab.apply(xhr, args)
//console.log(xhr)
//__process.exit(0)