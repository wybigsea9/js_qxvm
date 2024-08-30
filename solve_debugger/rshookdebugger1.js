Function.prototype.__constructor_back = Function.prototype.constructor;
Function.prototype.constructor = function (){
    if (arguments && typeof arguments[0] === "string"){
        // alert("new function: " + arguments[0]);
        if ("debugger" === arguments[0]){
            return
        }
    }
    return Function.prototype.__constructor_back.apply(this, arguments);
}