window=global;
document={};
navigator={};
location={};
history={};
screen={};

better_proxy = function (o, callerName){
    return new Proxy(o, {
            set(target, property, value){
                console.table([{"类型":"set-->","调用者":callerName,"属性":property,"值":value}]);
                return Reflect.set(...arguments);
            },
            get(target, property, receiver){
                console.table([{"类型":"get<--","调用者":callerName,"属性":property,"值":target[property]}]);
                return Reflect.get(...arguments);
            },
        }
    );
}
window = better_proxy(window, "window")
document = better_proxy(document, "document")
navigator = better_proxy(navigator, "navigator")
history = better_proxy(history, "history")
screen = better_proxy(screen, "screen")