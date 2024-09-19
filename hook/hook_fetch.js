(function hookFetch() {
    // 原始的fetch函数
    const realFetch = window.fetch;

    // 重写window.fetch函数
    window.fetch = function(input, init) {
        // 发送的请求体参数
        console.log(`%c微信: ZWL10203040  社会你霖哥`, "color:green;font-size:40px");
        console.log('发送请求之前执行的代码',init.body);

        // 在控制台记录请求的URL和选项
        console.log('请求地址是：', input);
        console.log('请求选项:', init);

        // 调用原始的fetch函数，并传入所有参数
        return realFetch.apply(this, arguments).then(response => {
            console.log('响应状态码:', response.status);

            // 如果需要，可以对响应进行额外的处理
            // 例如，根据状态码决定是否抛出错误
            if (response.ok) {
                return response.json(); // 打印返回数据，假设数据是json
            } else {
                return response.text().then(text => {
                    throw new Error(`请求失败: ${text}`);        });      }    });  };})();