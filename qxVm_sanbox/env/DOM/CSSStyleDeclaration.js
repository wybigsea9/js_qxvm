CSSStyleDeclaration = function CSSStyleDeclaration(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(CSSStyleDeclaration);

; (function () {
    const $safe_get_attribute = ['height', 'width', 'cssFloat', 'cssText', 'length', 'parentRule'];
    const $safe_set_attribute = ['height', 'width', 'cssFloat', 'cssText'];
    const $safe_func_attribute = ['getPropertyPriority', 'getPropertyValue', 'item', 'removeProperty', 'setProperty'];
    CSSStyleDeclaration.prototype = {
        get height() {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).height, 0);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CSSStyleDeclaration', 'height', arguments, result);
            return result;
        },
        set height(value) {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CSSStyleDeclaration', 'height', arguments);
            debugger;
            lwVm.memory.private_data.get(this).height = value;
        },
        get width() {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).width, 0);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CSSStyleDeclaration', 'width', arguments, result);
            return result;
        },
        set width(value) {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CSSStyleDeclaration', 'width', arguments);
            lwVm.memory.private_data.get(this).width = value;
        },
        get cssFloat() {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).cssFloat, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CSSStyleDeclaration', 'cssFloat', arguments, result);
            return result;
        },
        set cssFloat(value) {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CSSStyleDeclaration', 'cssFloat', arguments);
            lwVm.memory.private_data.get(this).cssFloat = value + "";
        },
        get cssText() {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).cssText, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CSSStyleDeclaration', 'cssText', arguments, result);
            return result;
        },
        set cssText(value) {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CSSStyleDeclaration', 'cssText', arguments);
            lwVm.memory.private_data.get(this).cssText = value + "";
        },
        getPropertyPriority() {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CSSStyleDeclaration', 'getPropertyPriority', arguments, result);
            return result;
        },
        getPropertyValue() {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CSSStyleDeclaration', 'getPropertyValue', arguments, result);
            return result;
        },
        item() {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CSSStyleDeclaration', 'item', arguments, result);
            return result;
        },
        get length() {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).length, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CSSStyleDeclaration', 'length', arguments, result);
            return result;
        },
        get parentRule() {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).parentRule, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CSSStyleDeclaration', 'parentRule', arguments, result);
            return result;
        },
        removeProperty() {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CSSStyleDeclaration', 'removeProperty', arguments, result);
            return result;
        },
        setProperty() {
            if (!CSSStyleDeclaration.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CSSStyleDeclaration', 'setProperty', arguments, result);
            return result;
        }
    }

    lwVm.rename(CSSStyleDeclaration.prototype, "CSSStyleDeclaration");
    lwVm.safeDescriptor_addConstructor(CSSStyleDeclaration);
    lwVm.safe_Objattribute(CSSStyleDeclaration, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

