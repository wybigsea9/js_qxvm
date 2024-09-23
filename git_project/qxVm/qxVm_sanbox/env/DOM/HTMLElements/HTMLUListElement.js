HTMLUListElement = function HTMLUListElement(createObj_key, tagName) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {"tagName": tagName.toUpperCase()})
}; lwVm.safefunction(HTMLUListElement);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    HTMLUListElement.prototype = {};

    lwVm.rename(HTMLUListElement.prototype, "HTMLUListElement");
    lwVm.safeDescriptor_addConstructor(HTMLUListElement);
    lwVm.safe_Objattribute(HTMLUListElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLUListElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLUListElement, HTMLElement);

})();

lwVm.memory.htmlElements["ul"] = function () {
    return new HTMLUListElement(lwVm.memory.$createObj_key, "ul");
}
