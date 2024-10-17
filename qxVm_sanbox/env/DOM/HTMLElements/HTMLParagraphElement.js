HTMLParagraphElement = function HTMLParagraphElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLParagraphElement);


; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    HTMLParagraphElement.prototype = {
    };

    lwVm.rename(HTMLParagraphElement.prototype, "HTMLParagraphElement");
    lwVm.safeDescriptor_addConstructor(HTMLParagraphElement);
    lwVm.safe_Objattribute(HTMLParagraphElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLParagraphElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLParagraphElement, HTMLElement);
})();
lwVm.memory.htmlElements["p"] = function () {
    return new HTMLParagraphElement(lwVm.memory.$createObj_key);
}


