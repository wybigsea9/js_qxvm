// 保存原始方法
window.__cr_eval = window.eval;
// 重写eval方法
var myeval = function(src) {
    console.log(src);
    console.log("=============== eval end ===============");
    debugger;
    return window.__cr_eval(src);
}
var _myeval = myeval.bind(null);
// 这里主要是屏蔽js中对原生函数native属性的检测
_myeval.toString = window.__cr_eval.toString;
Object.defineProperty(window, 'eval', { value: _myeval });