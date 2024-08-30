(function(){
    'use strict';
    Object.defineProperty(document, 'cookie', {
        set: function(cookie){
            console.log(cookie)
            if (cookie.indexOf("RM4hZBv0dDon443M") != -1){
                debugger;
            }
            return cookie
        },
    });
})();

