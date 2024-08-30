(function() {
    'use strict';
    Object.defineProperty(ei, 'push', {
        set: function(val) {
            console.log(val)
            debugger;
            return val;
        },
        get: function() {
            debugger;
        }
    });
})();