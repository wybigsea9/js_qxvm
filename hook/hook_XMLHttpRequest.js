(function hookXMLHttpRequest() {
    // 备份一下原始open和send方法
    const realOpen = XMLHttpRequest.prototype.open;
    const realSend = XMLHttpRequest.prototype.send;

    // 重写open方法
    XMLHttpRequest.prototype.open = function(method, url) {
        console.log(`%c微信: ZWL10203040  社会你霖哥`, "color:green;font-size:40px");
        console.log('请求地址是：', url);
        console.log('请求方法类型:', method);

        // 调用原始的open方法
        realOpen.apply(this, arguments);
    };

    // 重写send方法
    XMLHttpRequest.prototype.send = function(data) {
        // 发送请求体参数
        console.log('请求体:', data);

        // 调用原始的send方法，并传入所有参数
        realSend.apply(this, arguments);

        // 监听请求状态变化
        this.addEventListener('readystatechange', () => {
            if (this.readyState === 4) { // 请求已完成
                // 请求完成后执行的代码
                console.log('获取返回的全部数据:', this.responseText);
            }
        });
    };
})();