(function () {
    function set_traverse_object(tarrget, obj, recursion_layers) {
        recursion_layers -= 1;
        console.log();
        for (let prop in obj) {
            const value = obj[prop];
            const tg_name = `${tarrget}.${prop.toString()}`;
            const value_type = get_value_type(value);
            if (value && value_type === "object" && recursion_layers >= 1) {
                set_traverse_object(tg_name, value, recursion_layers);
                continue
            }
            if (value && value.toString() !== '[object Object]') {
                console.log(`setter  hook->${tg_name};  value-> ${value};  typeof-> ${value_type}`);
                continue
            }
            console.log(`setter  hook->${tg_name};  value-> ${value};  typeof-> ${value_type}\n`)

        }
    }

    function new_handel(target_name, obj, number) {
        returnnewProxy(obj, my_handler(target_name, number))
    }

    function get_value_type(value) {
        if (Array.isArray(value)) {
            return'Array'
        }
        return typeof value;
    }

    function my_handler(target_name, number) {
        return {
            set: function (obj, prop, value) {
                const value_type = get_value_type(value);
                const tg_name = `${target_name}.${prop.toString()}`;

                if (value && value_type === "object") {
                    set_traverse_object(tg_name, value, number)
                } else {
                    console.log(`setter  hook->${tg_name};  value-> ${value};  typeof-> ${value_type}`)
                }
                returnReflect.set(obj, prop, value);
            },
            get: function (obj, prop) {
                const tg_name = `${target_name}.${prop.toString()}`;
                const value = Reflect.get(obj, prop);
                let value_type = get_value_type(value);
                if (value && value_type === 'object') {
                    return new_handel(tg_name, value, number)
                }
                console.log(`getter  hook->${tg_name};  value-> ${value};  typeof-> ${value_type}\n`);
                return value
            }
        }
    }

    window = newProxy(window, my_handler(Object.keys({window})[0], 30));
}());

