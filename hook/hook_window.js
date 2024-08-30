(function() {
    Object.defineProperty(window, 'gdxidpyhxde', {
        set: function(val) {
            debugger
            console.log("Hook gdxidpyhxde", val)
            return val
        },
    });
})();

// 第二种

(function() {
    window.xxx = 1;
    xxa = Function;
    Function = function(a) {
        if (window.xxx == 2) { debugger }
        window.xxx += 1;
        return xxa(a)
    }
})();