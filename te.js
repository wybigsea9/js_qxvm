self= global;
(self.mfeModules = []).push(["shopee__web_enhance_sap",
    ["Platform"],
        Platform => () => Promise.resolve(
    (() => {
        "use strict";
        var __webpack_require__ = {
                d: (t, e) => {
                    for (var r in e) __webpack_require__.o(e, r) && !__webpack_require__.o(t, r) &&
                    Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                },
                o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
                r: t => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t,
                        Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }
            },
            __webpack_exports__ = {};
        __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
            __esModule: () => O0a,
            default: () => O0b
        });
        return __webpack_exports__
    })()).then((t => {
    Platform.setModule("shopee__web_enhance_sap", t, {
        type: "module",
        version: "2.17.9",
        isSingleton: !1,
        originalPackageName: "@shopee/web_enhance_sap"
    })
})), 2]);
console.log(self.mfeModules[0][2])
