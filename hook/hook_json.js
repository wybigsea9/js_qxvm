var my_stringify = JSON.stringify;
JSON.stringify = function(params) {
    console.log("hook", params);
    debugger;
    return my_stringify(params);
};

var my_parse = JSON.parse;
JSON.parse = function(params) {
    console.log("hook", params);
    debugger;
    return my_parse(params);
};