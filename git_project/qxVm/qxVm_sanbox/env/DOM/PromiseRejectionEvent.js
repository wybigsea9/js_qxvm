PromiseRejectionEvent = function PromiseRejectionEvent(type, promise) {
    if (lwVm.config.logOpen === true) lwVm.logAdd('New', 'PromiseRejectionEvent', 'reason', arguments);
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(PromiseRejectionEvent);

; (function () {
    const $safe_get_attribute = [
        'promise', 'reason'
    ];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    PromiseRejectionEvent.prototype = {
        get promise(){
            if (!PromiseRejectionEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen === true) lwVm.logAdd('Get', 'PromiseRejectionEvent', 'promise', arguments, result);
        },
        get reason(){
            if (!PromiseRejectionEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen === true) lwVm.logAdd('Get', 'PromiseRejectionEvent', 'reason', arguments, result);
        },

    };
    lwVm.rename(PromiseRejectionEvent.prototype, "PromiseRejectionEvent");
    lwVm.safeDescriptor_addConstructor(PromiseRejectionEvent);
    // debugger;
    lwVm.safe_Objattribute(PromiseRejectionEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);


    Object.setPrototypeOf(PromiseRejectionEvent.prototype, Event.prototype);
    Object.setPrototypeOf(PromiseRejectionEvent, Event);
})();
