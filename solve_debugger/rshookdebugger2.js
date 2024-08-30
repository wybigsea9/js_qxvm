var _constructor = constructor;
Function.prototype.constructor = function (s){
    if (s == "debugger"){
        console.log(s);
        return null;
    }
    return _constructor(s);
}