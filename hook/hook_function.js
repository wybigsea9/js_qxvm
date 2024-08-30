(function(){
    var new_r = r
    r = function(p1, p2){
        var res = new_r(p1, p2);
        console.log('加密前:', p1, p2, '加密后', res,);
        return res;
    }
})();