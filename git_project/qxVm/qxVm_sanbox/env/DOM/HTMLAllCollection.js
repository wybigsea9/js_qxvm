HTMLAllCollection = function HTMLAllCollection(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLAllCollection);

; (function () {
    const $safe_get_attribute = ['length'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['item', 'namedItem'];

    HTMLAllCollection.prototype = {
        item(nameOrIndex) {
            debugger;
            if (!HTMLAllCollection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            lwVm.memory.private_data.get(this).version = nameOrIndex + "";
            if (lwVm.config.logOpen=== true) lwVm.logAdd('func', 'HTMLAllCollection', 'item', arguments, result);
        },
        get length() {
            if (!HTMLAllCollection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            let result = lwVm.default_envs.document.cookie
            debugger
            result = 61;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAllCollection', 'length', arguments, result);
            return result;
        },
        set length(value) {
            if (!HTMLAllCollection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            lwVm.memory.private_data.get(this).version = value + "";
            if (lwVm.config.logOpen=== true) lwVm.logAdd('set', 'HTMLAllCollection', 'length', arguments, result);
        },
        namedItem(name) {
            debugger;
            if (!HTMLAllCollection.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            let result = lwVm.abs(lwVm.memory.private_data.get(this).version, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAllCollection', 'version', arguments, result);
            return result;
        },
    };
    lwVm.set_iterator(HTMLAllCollection);
    lwVm.rename(HTMLAllCollection.prototype, "Object");
    lwVm.safeDescriptor_addConstructor(HTMLAllCollection);
    lwVm.safe_Objattribute(HTMLAllCollection, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLAllCollection.prototype, Object.prototype);
})();


