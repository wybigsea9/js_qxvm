HTMLHeadingElement = function HTMLHeadingElement(createObj_key, tagName) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {"tagName": tagName.toUpperCase()})
}; lwVm.safefunction(HTMLHeadingElement);


; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    HTMLHeadingElement.prototype = {
    };

    lwVm.rename(HTMLHeadingElement.prototype, "HTMLHeadingElement");
    lwVm.safeDescriptor_addConstructor(HTMLHeadingElement);
    lwVm.safe_Objattribute(HTMLHeadingElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLHeadingElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLHeadingElement, HTMLElement);
})();
lwVm.memory.htmlElements["h1"] = function () {
    return new HTMLHeadingElement(lwVm.memory.$createObj_key, "h1");
}
lwVm.memory.htmlElements["h2"] = function () {
    return new HTMLHeadingElement(lwVm.memory.$createObj_key, "h2");
}
lwVm.memory.htmlElements["h3"] = function () {
    return new HTMLHeadingElement(lwVm.memory.$createObj_key, "h3");
}
lwVm.memory.htmlElements["h4"] = function () {
    return new HTMLHeadingElement(lwVm.memory.$createObj_key, "h4");
}


