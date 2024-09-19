(function(){
    'use strict';
    Object.defineProperty(document, 'cookie', {
        set: function(cookie){
            console.log(cookie)
            if (cookie.indexOf("qgqp_b_id") != -1){
                debugger;
            }
            return cookie
        },
    });
})();

