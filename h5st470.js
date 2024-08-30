const crypto = require('crypto');
let my_crypto = {}

function l() {
    if (arguments[0] === 364) {
        return "string"
    } else if (arguments[0] === 360) {
        return "23k@X!"
    }
    throw new Error("1")
    console.log("l: ", arguments[0])
}

function u() {
    if (arguments[0] === 370) {
        return "envCollect"
    } else if (arguments[0] === 371) {
        return "23k@X!"
    } else if (arguments[0] === 196) {
        return "string"
    } else if (arguments[0] === 207) {
        return "flush"
    } else {
        console.log("u: ", arguments[0])
    }

}

function jg(e) {
    return jg = "function" == typeof el && "symbol" == typeof yl ? function (e) {
            return typeof e
        }
        : function (e) {
            return e && "function" == typeof el && e.constructor === el && e !== el.prototype ? "symbol" : typeof e
        }
        ,
        jg(e)
}

!function () {
    let o = function () {
        var t = t || function (r, n) {
            var a;
            if (a = crypto, !a)
                try {
                    a = WS
                } catch (e) {
                }
            let o = function () {
                if (a) {
                    if ("function" == typeof a.getRandomValues)
                        try {
                            return a.getRandomValues(new Uint32Array(1))[0]
                        } catch (e) {
                        }
                    if ("function" == typeof a.randomBytes)
                        try {
                            return a.randomBytes(4).readInt32LE()
                        } catch (e) {
                        }
                }
                throw new Error(e(362))
            }
                , u = Object.create || function () {
                function e() {
                }

                return function (t) {
                    var r;
                    return e.prototype = t,
                        r = new e,
                        e.prototype = null,
                        r
                }
            }()
                , h = {}
                , f = h.lib = {}
                , g = f.Base = {
                extend: function (e) {
                    var r = u(this);
                    return e && r.mixIn(e),
                    (!r.hasOwnProperty("init") || this.init === r.init) && (r.init = function () {
                            r.$super.init.apply(this, arguments)
                        }
                    ),
                        r.init.prototype = r,
                        r.$super = this,
                        r
                },
                create: function () {
                    var e = this.extend();
                    return e.init.apply(e, arguments),
                        e
                },
                init: function () {
                },
                mixIn: function (e) {
                    for (var r in e)
                        e.hasOwnProperty(r) && (this[r] = e[r]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                },
                clone: function () {
                    return this.init.prototype.extend(this)
                }
            }
                , p = f.WordArray = g.extend({
                init: function (e, t) {
                    e = this.words = e || [],
                        this.sigBytes = null != t ? t : 4 * e.length
                },
                toString: function (e) {
                    return (e || d).stringify(this)
                },
                concat: function (e) {
                    var t = this.words
                        , r = e.words
                        , n = this.sigBytes
                        , a = e.sigBytes;
                    if (this.clamp(),
                    n % 4)
                        for (var o = 0; o < a; o++) {
                            var i = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                            t[n + o >>> 2] |= i << 24 - (n + o) % 4 * 8
                        }
                    else
                        for (o = 0; o < a; o += 4)
                            t[n + o >>> 2] = r[o >>> 2];
                    return this.sigBytes += a,
                        this
                },
                clamp: function () {
                    var e = this.words
                        , t = this.sigBytes;
                    e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8,
                        e.length = r.ceil(t / 4)
                },
                clone: function () {
                    var e, t = g.clone.call(this);
                    return t.words = nm(e = this.words).call(e, 0),
                        t
                },
                random: function (e) {
                    for (var t = [], r = 0; r < e; r += 4)
                        t.push(o());
                    return new p.init(t, e)
                }
            })
                , v = h.enc = {}
                , d = v.Hex = {
                stringify: function (e) {
                    for (var t = e.words, r = e.sigBytes, n = [], a = 0; a < r; a++) {
                        var o = t[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                        n.push((o >>> 4).toString(16)),
                            n.push((15 & o).toString(16))
                    }
                    return n.join("")
                },
                parse: function (e) {
                    for (var t = e.length, r = [], n = 0; n < t; n += 2)
                        r[n >>> 3] |= Kk(e.substr(n, 2), 16) << 24 - n % 8 * 4;
                    return new p.init(r, t / 2)
                }
            };
            v.Utils = {
                toWordArray: function (e) {
                    for (var r = [], n = 0; n < e.length; n++)
                        r[n >>> 2] |= e[n] << 24 - n % 4 * 8;
                    return t.lib.WordArray.create(r, e.length)
                },
                fromWordArray: function (e) {
                    for (var t = new Uint8Array(e.sigBytes), r = 0; r < e.sigBytes; r++)
                        t[r] = e.words[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                    return t
                }
            };
            var b = v.Latin1 = {
                stringify: function (e) {
                    for (var t = e.words, r = e.sigBytes, n = [], a = 0; a < r; a++) {
                        var o = t[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                        n.push(String.fromCharCode(o))
                    }
                    return n.join("")
                },
                parse: function (e) {
                    for (var t = e.length, r = [], n = 0; n < t; n++)
                        r[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
                    return new p.init(r, t)
                }
            }
                , y = v.Utf8 = {
                stringify: function (e) {
                    var t = l;
                    try {
                        return decodeURIComponent(escape(b.stringify(e)))
                    } catch (e) {
                        throw new Error(t(357))
                    }
                },
                parse: function (e) {
                    return b.parse(unescape(encodeURIComponent(e)))
                }
            }
                , k = f.BufferedBlockAlgorithm = g.extend({
                reset: function () {
                    this._data = new p.init,
                        this._nDataBytes = 0
                },
                _append: function (e) {
                    var i = ['parse', '_eData', '_data', 'concat', '_nDataBytes', 'sigBytes', 'concat'];
                    for (var t, r, n = Function.prototype.call, a = [63, 12, 64, 10, 60, 11, 77, 53, 364, 99, 49, 78, 11, 30, 97, 0, 34, 97, 1, 10, 99, 99, 93, 64, 34, 37, 2, 97, 3, 10, 99, 64, 34, 41, 37, 4, 10, 37, 5, 55, 36, 4, 64, 65, 7, 10, 5, 90, 18, 0, 53, 4, 99, 360, 87, 87, 81, 2], o = [], u = 0; ;)
                        switch (a[u++]) {
                            case 10:
                                o.push(e);
                                break;
                            case 11:
                                o.push(t);
                                break;
                            case 12:
                                t = o[o.length - 1];
                                break;
                            case 30:
                                o.push(y);
                                break;
                            case 34:
                                o.push(this);
                                break;
                            case 36:
                                o[o.length - 2][i[a[u++]]] = o[o.length - 1],
                                    o[o.length - 2] = o[o.length - 1],
                                    o.length--;
                                break;
                            case 37:
                                o[o.length - 1] = o[o.length - 1][i[a[u++]]];
                                break;
                            case 41:
                                o.push(o[o.length - 1]);
                                break;
                            case 49:
                                r = o.pop(),
                                    o[o.length - 1] = o[o.length - 1] == r;
                                break;
                            case 53:
                                o.push(a[u++]);
                                break;
                            case 55:
                                r = o.pop(),
                                    o[o.length - 1] += r;
                                break;
                            case 60:
                                o[o.length - 1] = jg(o[o.length - 1]);
                                break;
                            case 63:
                                o.push(l);
                                break;
                            case 64:
                                o.pop();
                                break;
                            case 65:
                                return;
                            case 77:
                                o.push(null);
                                break;
                            case 78:
                                o[o.length - 1] ? (++u,
                                    --o.length) : u += a[u];
                                break;
                            case 93:
                                e = o[o.length - 1];
                                break;
                            case 97:
                                o.push(o[o.length - 1]),
                                    o[o.length - 2] = o[o.length - 2][i[a[u++]]];
                                break;
                            case 99:
                                null != o[o.length - 2] ? (o[o.length - 3] = n.call(o[o.length - 3], o[o.length - 2], o[o.length - 1]),
                                    o.length -= 2) : (r = o[o.length - 3],
                                    o[o.length - 3] = r(o[o.length - 1]),
                                    o.length -= 2)
                        }
                },
                _process: function (e) {
                    var t, n = this._data, a = n.words, o = n.sigBytes, i = this.blockSize, c = o / (4 * i),
                        s = (c = e ? r.ceil(c) : r.max((0 | c) - this._minBufferSize, 0)) * i, u = r.min(4 * s, o);
                    if (s) {
                        for (var l = 0; l < s; l += i)
                            this._doProcessBlock(a, l);
                        t = Tx(a).call(a, 0, s),
                            n.sigBytes -= u
                    }
                    return new p.init(t, u)
                },
                _eData: function (e) {
                    var i = ['parse', '_eData', '_data', 'concat', '_nDataBytes', 'sigBytes', 'concat'];
                    for (var t, r, n = Function.prototype.call, a = [63, 12, 64, 10, 60, 11, 77, 53, 364, 99, 49, 78, 11, 30, 97, 0, 34, 97, 1, 10, 99, 99, 93, 64, 34, 37, 2, 97, 3, 10, 99, 64, 34, 41, 37, 4, 10, 37, 5, 55, 36, 4, 64, 65, 7, 10, 5, 90, 18, 0, 53, 4, 99, 360, 87, 87, 81, 2], o = [], u = 44; ;)
                        switch (a[u++]) {
                            case 2:
                                return;
                            case 4:
                                o.push(null);
                                break;
                            case 5:
                                o.pop();
                                break;
                            case 7:
                                o.push(l);
                                break;
                            case 10:
                                t = o[o.length - 1];
                                break;
                            case 18:
                                o.push(o[o.length - 1]),
                                    o[o.length - 2] = o[o.length - 2][i[6 + a[u++]]];
                                break;
                            case 53:
                                o.push(t);
                                break;
                            case 81:
                                return o.pop();
                            case 87:
                                null != o[o.length - 2] ? (o[o.length - 3] = n.call(o[o.length - 3], o[o.length - 2], o[o.length - 1]),
                                    o.length -= 2) : (r = o[o.length - 3],
                                    o[o.length - 3] = r(o[o.length - 1]),
                                    o.length -= 2);
                                break;
                            case 90:
                                o.push(e);
                                break;
                            case 99:
                                o.push(a[u++])
                        }
                },
                clone: function () {
                    var e = g.clone.call(this);
                    return e._data = this._data.clone(),
                        e
                },
                _minBufferSize: 0
            });
            f.Hasher = k.extend({
                cfg: g.extend(),
                init: function (e) {
                    this.cfg = this.cfg.extend(e),
                        this.reset()
                },
                reset: function () {
                    k.reset.call(this),
                        this._doReset()
                },
                update: function (e) {
                    return this._append(e),
                        this._process(),
                        this
                },
                finalize: function (e) {
                    return e && this._append(e),
                        this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function (e) {
                    return function (t, r) {
                        return new e.init(r).finalize(t)
                    }
                },
                _createHmacHelper: function (e) {
                    return function (t, r) {
                        return new m.HMAC.init(e, r).finalize(t)
                    }
                }
            });
            var m = h.algo = {};
            return h
        }(Math);
        return t
    }
    my_crypto = o();
}();
!function () {
    let o = function (e) {
        e.lib.Cipher || function (t) {
            var r = e
                , n = r.lib
                , a = n.Base
                , o = n.WordArray
                , l = n.BufferedBlockAlgorithm
                , h = r.enc;
            h.Utf8;
            var f = h.Base64
                , g = r.algo.EvpKDF
                , p = n.Cipher = l.extend({
                cfg: a.extend(),
                createEncryptor: function (e, t) {
                    return this.create(this._ENC_XFORM_MODE, e, t)
                },
                createDecryptor: function (e, t) {
                    return this.create(this._DEC_XFORM_MODE, e, t)
                },
                init: function (e, t, r) {
                    let i = ['cfg', 'extend', '_xformMode', 'eKey', '_key', 'reset', 'enc', 'Utils', 'fromWordArray', 'slice', 'call', 'reverse', 'prototype', 'push', 'apply', 'toWordArray'];
                    for (var n, a = Function.prototype.call, o = [1, 1, 85, 0, 94, 1, 3, 22, 72, 0, 39, 1, 26, 72, 2, 39, 1, 1, 94, 3, 71, 22, 72, 4, 39, 1, 94, 5, 43, 39, 60, 24, 85, 0, 85, 1, 2, 2, 22, 25, 61, 99, 66, 0, 85, 3, 2, 4, 36, 25, 33, 99, 66, 0, 38, 99, 14, 50, 19, 4079, 19, -1260, 81, 19, -2818, 81, 4, 77, 99, 64, 65, 14, 2, 3, 7, 19, -2658, 19, 5911, 81, 19, -3237, 81, 4, 19, 2902, 19, -4029, 81, 19, 1128, 81, 81, 7, 19, 6309, 19, 5301, 81, 19, -11609, 81, 81, 67, 6, 99, 97, 2, 5, 34, 39, 99, 72, 85, 6, 85, 7, 2, 8, 65, 44, 67, 99, 7, 19, 521, 19, -2501, 81, 19, 1996, 81, 4, 77, 99, 7, 19, -8978, 19, -8781, 81, 19, 17759, 81, 40, 60, -75, 24, 85, 0, 85, 1, 2, 9, 65, 25, 96, 58], u = [], l = 0; ;)
                        switch (o[l++]) {
                            case 1:
                                u.push(this);
                                break;
                            case 3:
                                u.push(r);
                                break;
                            case 22:
                                null != u[u.length - 2] ? (u[u.length - 3] = a.call(u[u.length - 3], u[u.length - 2], u[u.length - 1]),
                                    u.length -= 2) : (n = u[u.length - 3],
                                    u[u.length - 3] = n(u[u.length - 1]),
                                    u.length -= 2);
                                break;
                            case 26:
                                u.push(e);
                                break;
                            case 39:
                                u.pop();
                                break;
                            case 43:
                                null != u[u.length - 1] ? u[u.length - 2] = a.call(u[u.length - 2], u[u.length - 1]) : (n = u[u.length - 2],
                                    u[u.length - 2] = n()),
                                    u.length--;
                                break;
                            case 60:
                                return;
                            case 71:
                                u.push(t);
                                break;
                            case 72:
                                u[u.length - 2][i[o[l++]]] = u[u.length - 1],
                                    u[u.length - 2] = u[u.length - 1],
                                    u.length--;
                                break;
                            case 85:
                                u[u.length - 1] = u[u.length - 1][i[o[l++]]];
                                break;
                            case 94:
                                u.push(u[u.length - 1]),
                                    u[u.length - 2] = u[u.length - 2][i[o[l++]]]
                        }
                },
                _eData: function (e) {
                    return e
                },
                reset: function () {
                    l.reset.call(this),
                        this._doReset()
                },
                eKey: function (t) {
                    let i = ['cfg', 'extend', '_xformMode', 'eKey', '_key', 'reset', 'enc', 'Utils', 'fromWordArray', 'slice', 'call', 'reverse', 'prototype', 'push', 'apply', 'toWordArray'];
                    for (var r, n, a, o, u, l, h, f = Function.prototype.call, g = [1, 1, 85, 0, 94, 1, 3, 22, 72, 0, 39, 1, 26, 72, 2, 39, 1, 1, 94, 3, 71, 22, 72, 4, 39, 1, 94, 5, 43, 39, 60, 24, 85, 0, 85, 1, 2, 2, 22, 25, 61, 99, 66, 0, 85, 3, 2, 4, 36, 25, 33, 99, 66, 0, 38, 99, 14, 50, 19, 4079, 19, -1260, 81, 19, -2818, 81, 4, 77, 99, 64, 65, 14, 2, 3, 7, 19, -2658, 19, 5911, 81, 19, -3237, 81, 4, 19, 2902, 19, -4029, 81, 19, 1128, 81, 81, 7, 19, 6309, 19, 5301, 81, 19, -11609, 81, 81, 67, 6, 99, 97, 2, 5, 34, 39, 99, 72, 85, 6, 85, 7, 2, 8, 65, 44, 67, 99, 7, 19, 521, 19, -2501, 81, 19, 1996, 81, 4, 77, 99, 7, 19, -8978, 19, -8781, 81, 19, 17759, 81, 40, 60, -75, 24, 85, 0, 85, 1, 2, 9, 65, 25, 96, 58], p = [], v = 31; ;)
                        switch (g[v++]) {
                            case 2:
                                p.push(p[p.length - 1]),
                                    p[p.length - 2] = p[p.length - 2][i[6 + g[v++]]];
                                break;
                            case 4:
                                h = p.pop(),
                                    p[p.length - 1] -= h;
                                break;
                            case 6:
                                u = p[p.length - 1];
                                break;
                            case 7:
                                p.push(o);
                                break;
                            case 14:
                                p.push(n);
                                break;
                            case 19:
                                p.push(g[v++]);
                                break;
                            case 22:
                                p.push(t);
                                break;
                            case 24:
                                p.push(e);
                                break;
                            case 25:
                                null != p[p.length - 2] ? (p[p.length - 3] = f.call(p[p.length - 3], p[p.length - 2], p[p.length - 1]),
                                    p.length -= 2) : (h = p[p.length - 3],
                                    p[p.length - 3] = h(p[p.length - 1]),
                                    p.length -= 2);
                                break;
                            case 33:
                                n = p[p.length - 1];
                                break;
                            case 34:
                                null != p[p.length - 1] ? p[p.length - 2] = f.call(p[p.length - 2], p[p.length - 1]) : (h = p[p.length - 2],
                                    p[p.length - 2] = h()),
                                    p.length--;
                                break;
                            case 36:
                                p.push(r);
                                break;
                            case 38:
                                a = p[p.length - 1];
                                break;
                            case 39:
                                l = p[p.length - 1];
                                break;
                            case 40:
                                h = p.pop(),
                                    p[p.length - 1] = p[p.length - 1] >= h;
                                break;
                            case 44:
                                p.push(l);
                                break;
                            case 50:
                                p[p.length - 1] = p[p.length - 1].length;
                                break;
                            case 58:
                                return;
                            case 60:
                                p.pop() ? v += g[v] : ++v;
                                break;
                            case 61:
                                r = p[p.length - 1];
                                break;
                            case 64:
                                v += g[v];
                                break;
                            case 65:
                                p.push(a);
                                break;
                            case 66:
                                p.push(new Array(g[v++]));
                                break;
                            case 67:
                                p[p.length - 4] = f.call(p[p.length - 4], p[p.length - 3], p[p.length - 2], p[p.length - 1]),
                                    p.length -= 3;
                                break;
                            case 72:
                                p.push(Array);
                                break;
                            case 77:
                                o = p[p.length - 1];
                                break;
                            case 81:
                                h = p.pop(),
                                    p[p.length - 1] += h;
                                break;
                            case 85:
                                p[p.length - 1] = p[p.length - 1][i[6 + g[v++]]];
                                break;
                            case 96:
                                return p.pop();
                            case 97:
                                p.push(u);
                                break;
                            case 99:
                                p.pop()
                        }
                },
                process: function (e) {
                    return this._append(e),
                        this._process()
                },
                finalize: function (e) {
                    return e && this._append(e),
                        this._doFinalize()
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function () {
                    function e(e) {
                        var t = u;
                        return jg(e) == t(196) ? x : w
                    }

                    return function (t) {
                        return {
                            encrypt: function (r, n, a) {
                                return e(n).encrypt(t, r, n, a)
                            },
                            decrypt: function (r, n, a) {
                                return e(n).decrypt(t, r, n, a)
                            }
                        }
                    }
                }()
            });
            n.StreamCipher = p.extend({
                _doFinalize: function () {
                    var e = u;
                    return this._process(!!e(207))
                },
                blockSize: 1
            });
            var v = r.mode = {}
                , d = n.BlockCipherMode = a.extend({
                createEncryptor: function (e, t) {
                    return this.Encryptor.create(e, t)
                },
                createDecryptor: function (e, t) {
                    return this.Decryptor.create(e, t)
                },
                init: function (e, t) {
                    this._cipher = e,
                        this._iv = t
                }
            })
                , b = v.CBC = function () {
                var e = d.extend();

                function t(e, t, r) {
                    var n, a = this._iv;
                    a ? (n = a,
                        this._iv = void 0) : n = this._prevBlock;
                    for (var o = 0; o < r; o++)
                        e[t + o] ^= n[o]
                }

                return e.Encryptor = e.extend({
                    processBlock: function (e, r) {
                        var n = this._cipher
                            , a = n.blockSize;
                        t.call(this, e, r, a),
                            n.encryptBlock(e, r),
                            this._prevBlock = nm(e).call(e, r, r + a)
                    }
                }),
                    e.Decryptor = e.extend({
                        processBlock: function (e, r) {
                            var n = this._cipher
                                , a = n.blockSize
                                , o = nm(e).call(e, r, r + a);
                            n.decryptBlock(e, r),
                                t.call(this, e, r, a),
                                this._prevBlock = o
                        }
                    }),
                    e
            }()
                , y = (r.pad = {}).Pkcs7 = {
                pad: function (e, t) {
                    for (var r = 4 * t, n = r - e.sigBytes % r, a = n << 24 | n << 16 | n << 8 | n, i = [], c = 0; c < n; c += 4)
                        i.push(a);
                    var s = o.create(i, n);
                    j_(e).call(e, s)
                },
                unpad: function (e) {
                    var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                    e.sigBytes -= t
                }
            };
            n.BlockCipher = p.extend({
                cfg: p.cfg.extend({
                    mode: b,
                    padding: y
                }),
                reset: function () {
                    var e;
                    p.reset.call(this);
                    var t = this.cfg
                        , r = t.iv
                        , n = t.mode;
                    this._xformMode == this._ENC_XFORM_MODE ? e = n.createEncryptor : (e = n.createDecryptor,
                        this._minBufferSize = 1),
                        this._mode && this._mode.__creator == e ? this._mode.init(this, r && r.words) : (this._mode = e.call(n, this, r && r.words),
                            this._mode.__creator = e)
                },
                _doProcessBlock: function (e, t) {
                    this._mode.processBlock(e, t)
                },
                _doFinalize: function () {
                    var e, t = u, r = this.cfg.padding;
                    return this._xformMode == this._ENC_XFORM_MODE ? (r.pad(this._data, this.blockSize),
                        e = this._process(!!t(207))) : (e = this._process(!!t(207)),
                        r.unpad(e)),
                        e
                },
                blockSize: 4
            });
            var k = n.CipherParams = a.extend({
                init: function (e) {
                    this.mixIn(e)
                },
                toString: function (e) {
                    return (e || this.formatter).stringify(this)
                }
            })
                , m = (r.format = {}).OpenSSL = {
                stringify: function (e) {
                    var t, r, n = e.ciphertext, a = e.salt;
                    return (a ? j_(t = j_(r = o.create([1398893684, 1701076831])).call(r, a)).call(t, n) : n).toString(f)
                },
                parse: function (e) {
                    var t, r = f.parse(e), n = r.words;
                    return 1398893684 == n[0] && 1701076831 == n[1] && (t = o.create(nm(n).call(n, 2, 4)),
                        Tx(n).call(n, 0, 4),
                        r.sigBytes -= 16),
                        k.create({
                            ciphertext: r,
                            salt: t
                        })
                }
            }
                , w = n.SerializableCipher = a.extend({
                cfg: a.extend({
                    format: m
                }),
                encrypt: function (e, t, r, n) {
                    n = this.cfg.extend(n);
                    var a = e.createEncryptor(r, n)
                        , o = a.finalize(t)
                        , i = a.cfg;
                    return k.create({
                        ciphertext: o,
                        key: r,
                        iv: i.iv,
                        algorithm: e,
                        mode: i.mode,
                        padding: i.padding,
                        blockSize: e.blockSize,
                        formatter: n.format
                    })
                },
                decrypt: function (e, t, r, n) {
                    return n = this.cfg.extend(n),
                        t = this._parse(t, n.format),
                        e.createDecryptor(r, n).finalize(t.ciphertext)
                },
                _parse: function (e, t) {
                    var r = u;
                    return jg(e) == r(196) ? t.parse(e, this) : e
                }
            })
                , _ = (r.kdf = {}).OpenSSL = {
                execute: function (e, t, r, n) {
                    var a;
                    !n && (n = o.random(8));
                    var i = g.create({
                        keySize: t + r
                    }).compute(e, n)
                        , c = o.create(nm(a = i.words).call(a, t), 4 * r);
                    return i.sigBytes = 4 * t,
                        k.create({
                            key: i,
                            iv: c,
                            salt: n
                        })
                }
            }
                , x = n.PasswordBasedCipher = w.extend({
                cfg: w.cfg.extend({
                    kdf: _
                }),
                encrypt: function (e, t, r, n) {
                    var a = (n = this.cfg.extend(n)).kdf.execute(r, e.keySize, e.ivSize);
                    n.iv = a.iv;
                    var o = w.encrypt.call(this, e, t, a.key, n);
                    return o.mixIn(a),
                        o
                },
                decrypt: function (e, t, r, n) {
                    n = this.cfg.extend(n),
                        t = this._parse(t, n.format);
                    var a = n.kdf.execute(r, e.keySize, e.ivSize, t.salt);
                    return n.iv = a.iv,
                        w.decrypt.call(this, e, t, a.key, n)
                }
            })
        }()
    }
    o(my_crypto);
}();
!function () {
    !function (e, t) {
        var r;
        (r = my_crypto,
            function (e) {
                var t = r
                    , n = t.lib
                    , a = n.WordArray
                    , o = n.Hasher
                    , i = t.algo
                    , c = []
                    , s = [];
                !function () {
                    function t(t) {
                        for (var r = e.sqrt(t), n = 2; n <= r; n++)
                            if (!(t % n))
                                return !1;
                        return !0
                    }

                    function r(e) {
                        return 4294967296 * (e - (0 | e)) | 0
                    }

                    for (var n = 2, a = 0; a < 64;)
                        t(n) && (a < 8 && (c[a] = r(e.pow(n, .5))),
                            s[a] = r(e.pow(n, 1 / 3)),
                            a++),
                            n++
                }();
                var u = []
                    , l = i.SHA256 = o.extend({
                    _doReset: function () {
                        this._hash = new a.init(nm(c).call(c, 0))
                    },
                    _doProcessBlock: function (e, t) {
                        for (var r = this._hash.words, n = r[0], a = r[1], o = r[2], i = r[3], c = r[4], l = r[5], h = r[6], f = r[7], g = 0; g < 64; g++) {
                            if (g < 16)
                                u[g] = 0 | e[t + g];
                            else {
                                var p = u[g - 15]
                                    , v = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3
                                    , d = u[g - 2]
                                    , b = (d << 15 | d >>> 17) ^ (d << 13 | d >>> 19) ^ d >>> 10;
                                u[g] = v + u[g - 7] + b + u[g - 16]
                            }
                            var y = n & a ^ n & o ^ a & o
                                , k = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22)
                                ,
                                m = f + ((c << 26 | c >>> 6) ^ (c << 21 | c >>> 11) ^ (c << 7 | c >>> 25)) + (c & l ^ ~c & h) + s[g] + u[g];
                            f = h,
                                h = l,
                                l = c,
                                c = i + m | 0,
                                i = o,
                                o = a,
                                a = n,
                                n = m + (k + y) | 0
                        }
                        r[0] = r[0] + n | 0,
                            r[1] = r[1] + a | 0,
                            r[2] = r[2] + o | 0,
                            r[3] = r[3] + i | 0,
                            r[4] = r[4] + c | 0,
                            r[5] = r[5] + l | 0,
                            r[6] = r[6] + h | 0,
                            r[7] = r[7] + f | 0
                    },
                    _doFinalize: function () {
                        var t = this._data
                            , r = t.words
                            , n = 8 * this._nDataBytes
                            , a = 8 * t.sigBytes;
                        return r[a >>> 5] |= 128 << 24 - a % 32,
                            r[14 + (a + 64 >>> 9 << 4)] = e.floor(n / 4294967296),
                            r[15 + (a + 64 >>> 9 << 4)] = n,
                            t.sigBytes = 4 * r.length,
                            this._process(),
                            this._hash
                    },
                    clone: function () {
                        var e = o.clone.call(this);
                        return e._hash = this._hash.clone(),
                            e
                    }
                });
                t.SHA256 = o._createHelper(l),
                    t.HmacSHA256 = o._createHmacHelper(l)
            }(Math),
            r.SHA256)
    }(my_crypto);
}();
!function () {
    let o = function (e) {
        return function (t) {
            var r = e
                , n = r.lib
                , a = n.WordArray
                , o = n.Hasher
                , l = r.algo
                , h = [];
            !function () {
                for (var e = 0; e < 64; e++)
                    h[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0
            }();
            var f = l.MD5 = o.extend({
                _doReset: function () {
                    this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878])
                },
                _doProcessBlock: function (e, t) {
                    for (var r = 0; r < 16; r++) {
                        var n = t + r
                            , a = e[n];
                        e[n] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8)
                    }
                    var o = this._hash.words
                        , i = e[t + 0]
                        , c = e[t + 1]
                        , s = e[t + 2]
                        , u = e[t + 3]
                        , l = e[t + 4]
                        , f = e[t + 5]
                        , b = e[t + 6]
                        , y = e[t + 7]
                        , k = e[t + 8]
                        , m = e[t + 9]
                        , w = e[t + 10]
                        , _ = e[t + 11]
                        , x = e[t + 12]
                        , S = e[t + 13]
                        , A = e[t + 14]
                        , E = e[t + 15]
                        , O = o[0]
                        , C = o[1]
                        , T = o[2]
                        , j = o[3];
                    O = g(O, C, T, j, i, 7, h[0]),
                        j = g(j, O, C, T, c, 12, h[1]),
                        T = g(T, j, O, C, s, 17, h[2]),
                        C = g(C, T, j, O, u, 22, h[3]),
                        O = g(O, C, T, j, l, 7, h[4]),
                        j = g(j, O, C, T, f, 12, h[5]),
                        T = g(T, j, O, C, b, 17, h[6]),
                        C = g(C, T, j, O, y, 22, h[7]),
                        O = g(O, C, T, j, k, 7, h[8]),
                        j = g(j, O, C, T, m, 12, h[9]),
                        T = g(T, j, O, C, w, 17, h[10]),
                        C = g(C, T, j, O, _, 22, h[11]),
                        O = g(O, C, T, j, x, 7, h[12]),
                        j = g(j, O, C, T, S, 12, h[13]),
                        T = g(T, j, O, C, A, 17, h[14]),
                        O = p(O, C = g(C, T, j, O, E, 22, h[15]), T, j, c, 5, h[16]),
                        j = p(j, O, C, T, b, 9, h[17]),
                        T = p(T, j, O, C, _, 14, h[18]),
                        C = p(C, T, j, O, i, 20, h[19]),
                        O = p(O, C, T, j, f, 5, h[20]),
                        j = p(j, O, C, T, w, 9, h[21]),
                        T = p(T, j, O, C, E, 14, h[22]),
                        C = p(C, T, j, O, l, 20, h[23]),
                        O = p(O, C, T, j, m, 5, h[24]),
                        j = p(j, O, C, T, A, 9, h[25]),
                        T = p(T, j, O, C, u, 14, h[26]),
                        C = p(C, T, j, O, k, 20, h[27]),
                        O = p(O, C, T, j, S, 5, h[28]),
                        j = p(j, O, C, T, s, 9, h[29]),
                        T = p(T, j, O, C, y, 14, h[30]),
                        O = v(O, C = p(C, T, j, O, x, 20, h[31]), T, j, f, 4, h[32]),
                        j = v(j, O, C, T, k, 11, h[33]),
                        T = v(T, j, O, C, _, 16, h[34]),
                        C = v(C, T, j, O, A, 23, h[35]),
                        O = v(O, C, T, j, c, 4, h[36]),
                        j = v(j, O, C, T, l, 11, h[37]),
                        T = v(T, j, O, C, y, 16, h[38]),
                        C = v(C, T, j, O, w, 23, h[39]),
                        O = v(O, C, T, j, S, 4, h[40]),
                        j = v(j, O, C, T, i, 11, h[41]),
                        T = v(T, j, O, C, u, 16, h[42]),
                        C = v(C, T, j, O, b, 23, h[43]),
                        O = v(O, C, T, j, m, 4, h[44]),
                        j = v(j, O, C, T, x, 11, h[45]),
                        T = v(T, j, O, C, E, 16, h[46]),
                        O = d(O, C = v(C, T, j, O, s, 23, h[47]), T, j, i, 6, h[48]),
                        j = d(j, O, C, T, y, 10, h[49]),
                        T = d(T, j, O, C, A, 15, h[50]),
                        C = d(C, T, j, O, f, 21, h[51]),
                        O = d(O, C, T, j, x, 6, h[52]),
                        j = d(j, O, C, T, u, 10, h[53]),
                        T = d(T, j, O, C, w, 15, h[54]),
                        C = d(C, T, j, O, c, 21, h[55]),
                        O = d(O, C, T, j, k, 6, h[56]),
                        j = d(j, O, C, T, E, 10, h[57]),
                        T = d(T, j, O, C, b, 15, h[58]),
                        C = d(C, T, j, O, S, 21, h[59]),
                        O = d(O, C, T, j, l, 6, h[60]),
                        j = d(j, O, C, T, _, 10, h[61]),
                        T = d(T, j, O, C, s, 15, h[62]),
                        C = d(C, T, j, O, m, 21, h[63]),
                        o[0] = o[0] + O | 0,
                        o[1] = o[1] + C | 0,
                        o[2] = o[2] + T | 0,
                        o[3] = o[3] + j | 0
                },
                _doFinalize: function () {
                    var e = this._data
                        , r = e.words
                        , n = 8 * this._nDataBytes
                        , a = 8 * e.sigBytes;
                    r[a >>> 5] |= 128 << 24 - a % 32;
                    var o = t.floor(n / 4294967296)
                        , i = n;
                    r[15 + (a + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                        r[14 + (a + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8),
                        e.sigBytes = 4 * (r.length + 1),
                        this._process();
                    for (var c = this._hash, s = c.words, u = 0; u < 4; u++) {
                        var l = s[u];
                        s[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
                    }
                    return c
                },
                _eData: function (e) {
                    let i = ['lastIndexOf', 'substr', 'concat'];
                    for (var t, r, n, a = Function.prototype.call, o = [19, 66, 67, 69, 12, 0, 73, 33, 23, 370, 15, 15, 10, 67, 95, 23, 6711, 23, 3912, 75, 23, -10623, 75, 18, 92, 12, 69, 12, 1, 73, 33, 23, 370, 15, 32, 15, 49, 69, 12, 2, 73, 33, 23, 371, 15, 15, 49, 74], l = [], h = 0; ;)
                        switch (o[h++]) {
                            case 10:
                                r = l[l.length - 1];
                                break;
                            case 12:
                                l.push(l[l.length - 1]),
                                    l[l.length - 2] = l[l.length - 2][i[o[h++]]];
                                break;
                            case 15:
                                null != l[l.length - 2] ? (l[l.length - 3] = a.call(l[l.length - 3], l[l.length - 2], l[l.length - 1]),
                                    l.length -= 2) : (n = l[l.length - 3],
                                    l[l.length - 3] = n(l[l.length - 1]),
                                    l.length -= 2);
                                break;
                            case 18:
                                n = l.pop(),
                                    l[l.length - 1] = l[l.length - 1] === n;
                                break;
                            case 19:
                                l.push(u);
                                break;
                            case 23:
                                l.push(o[h++]);
                                break;
                            case 32:
                                l[l.length - 1] = l[l.length - 1].length;
                                break;
                            case 33:
                                l.push(null);
                                break;
                            case 49:
                                return l.pop();
                            case 66:
                                t = l[l.length - 1];
                                break;
                            case 67:
                                l.pop();
                                break;
                            case 69:
                                l.push(e);
                                break;
                            case 73:
                                l.push(t);
                                break;
                            case 74:
                                return;
                            case 75:
                                n = l.pop(),
                                    l[l.length - 1] += n;
                                break;
                            case 92:
                                l.pop() ? ++h : h += o[h];
                                break;
                            case 95:
                                l.push(r)
                        }
                },
                clone: function () {
                    var e = o.clone.call(this);
                    return e._hash = this._hash.clone(),
                        e
                }
            });

            function g(e, t, r, n, a, o, i) {
                var c = e + (t & r | ~t & n) + a + i;
                return (c << o | c >>> 32 - o) + t
            }

            function p(e, t, r, n, a, o, i) {
                var c = e + (t & n | r & ~n) + a + i;
                return (c << o | c >>> 32 - o) + t
            }

            function v(e, t, r, n, a, o, i) {
                var c = e + (t ^ r ^ n) + a + i;
                return (c << o | c >>> 32 - o) + t
            }

            function d(e, t, r, n, a, o, i) {
                var c = e + (r ^ (t | ~n)) + a + i;
                return (c << o | c >>> 32 - o) + t
            }

            r.MD5 = o._createHelper(f),
                r.HmacMD5 = o._createHmacHelper(f)
        }(Math),
            e.MD5
    };
    o(my_crypto)
}();
!function () {
    !function (e, t) {
        var r;
        (r = my_crypto,
            function () {
                var e = r
                    , t = e.lib.BlockCipher
                    , n = e.algo
                    , a = []
                    , o = []
                    , i = []
                    , c = []
                    , s = []
                    , u = []
                    , l = []
                    , h = []
                    , f = []
                    , g = [];
                !function () {
                    for (var e = [], t = 0; t < 256; t++)
                        e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
                    var r = 0
                        , n = 0;
                    for (t = 0; t < 256; t++) {
                        var p = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                        p = p >>> 8 ^ 255 & p ^ 99,
                            a[r] = p,
                            o[p] = r;
                        var v = e[r]
                            , d = e[v]
                            , b = e[d]
                            , y = 257 * e[p] ^ 16843008 * p;
                        i[r] = y << 24 | y >>> 8,
                            c[r] = y << 16 | y >>> 16,
                            s[r] = y << 8 | y >>> 24,
                            u[r] = y,
                            y = 16843009 * b ^ 65537 * d ^ 257 * v ^ 16843008 * r,
                            l[p] = y << 24 | y >>> 8,
                            h[p] = y << 16 | y >>> 16,
                            f[p] = y << 8 | y >>> 24,
                            g[p] = y,
                            r ? (r = v ^ e[e[e[b ^ v]]],
                                n ^= e[e[n]]) : r = n = 1
                    }
                }();
                var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
                    , v = n.AES = t.extend({
                    _doReset: function () {
                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                            for (var e = this._keyPriorReset = this._key, t = e.words, r = e.sigBytes / 4, n = 4 * ((this._nRounds = r + 6) + 1), o = this._keySchedule = [], i = 0; i < n; i++)
                                i < r ? o[i] = t[i] : (u = o[i - 1],
                                    i % r ? r > 6 && i % r == 4 && (u = a[u >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & u]) : (u = a[(u = u << 8 | u >>> 24) >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & u],
                                        u ^= p[i / r | 0] << 24),
                                    o[i] = o[i - r] ^ u);
                            for (var c = this._invKeySchedule = [], s = 0; s < n; s++) {
                                if (i = n - s,
                                s % 4)
                                    var u = o[i];
                                else
                                    u = o[i - 4];
                                c[s] = s < 4 || i <= 4 ? u : l[a[u >>> 24]] ^ h[a[u >>> 16 & 255]] ^ f[a[u >>> 8 & 255]] ^ g[a[255 & u]]
                            }
                        }
                    },
                    encryptBlock: function (e, t) {
                        this._doCryptBlock(e, t, this._keySchedule, i, c, s, u, a)
                    },
                    decryptBlock: function (e, t) {
                        var r = e[t + 1];
                        e[t + 1] = e[t + 3],
                            e[t + 3] = r,
                            this._doCryptBlock(e, t, this._invKeySchedule, l, h, f, g, o),
                            r = e[t + 1],
                            e[t + 1] = e[t + 3],
                            e[t + 3] = r
                    },
                    _doCryptBlock: function (e, t, r, n, a, o, i, c) {
                        for (var s = this._nRounds, u = e[t] ^ r[0], l = e[t + 1] ^ r[1], h = e[t + 2] ^ r[2], f = e[t + 3] ^ r[3], g = 4, p = 1; p < s; p++) {
                            var v = n[u >>> 24] ^ a[l >>> 16 & 255] ^ o[h >>> 8 & 255] ^ i[255 & f] ^ r[g++]
                                , d = n[l >>> 24] ^ a[h >>> 16 & 255] ^ o[f >>> 8 & 255] ^ i[255 & u] ^ r[g++]
                                , b = n[h >>> 24] ^ a[f >>> 16 & 255] ^ o[u >>> 8 & 255] ^ i[255 & l] ^ r[g++]
                                , y = n[f >>> 24] ^ a[u >>> 16 & 255] ^ o[l >>> 8 & 255] ^ i[255 & h] ^ r[g++];
                            u = v,
                                l = d,
                                h = b,
                                f = y
                        }
                        v = (c[u >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[h >>> 8 & 255] << 8 | c[255 & f]) ^ r[g++],
                            d = (c[l >>> 24] << 24 | c[h >>> 16 & 255] << 16 | c[f >>> 8 & 255] << 8 | c[255 & u]) ^ r[g++],
                            b = (c[h >>> 24] << 24 | c[f >>> 16 & 255] << 16 | c[u >>> 8 & 255] << 8 | c[255 & l]) ^ r[g++],
                            y = (c[f >>> 24] << 24 | c[u >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & h]) ^ r[g++],
                            e[t] = v,
                            e[t + 1] = d,
                            e[t + 2] = b,
                            e[t + 3] = y
                    },
                    keySize: 8
                });
                e.AES = t._createHelper(v)
            }(),
            r.AES)
    }(my_crypto);
}();
!function () {
    let o = function (e) {
        return t = l,
            n = (r = e).lib.WordArray,
            r.enc.Base64 = {
                stringify: function (e) {
                    var t = e.words
                        , r = e.sigBytes
                        , n = this._map;
                    e.clamp();
                    for (var a = [], o = 0; o < r; o += 3)
                        for (var i = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, c = 0; c < 4 && o + .75 * c < r; c++)
                            a.push(n.charAt(i >>> 6 * (3 - c) & 63));
                    var s = n.charAt(64);
                    if (s)
                        for (; a.length % 4;)
                            a.push(s);
                    return a.join("")
                },
                parse: function (e) {
                    var t = e.length
                        , r = this._map
                        , a = this._reverseMap;
                    if (!a) {
                        a = this._reverseMap = [];
                        for (var o = 0; o < r.length; o++)
                            a[r.charCodeAt(o)] = o
                    }
                    var i = r.charAt(64);
                    if (i) {
                        var c = rm(e).call(e, i);
                        -1 !== c && (t = c)
                    }
                    return function (e, t, r) {
                        for (var a = [], o = 0, i = 0; i < t; i++)
                            if (i % 4) {
                                var c = r[e.charCodeAt(i - 1)] << i % 4 * 2 | r[e.charCodeAt(i)] >>> 6 - i % 4 * 2;
                                a[o >>> 2] |= c << 24 - o % 4 * 8,
                                    o++
                            }
                        return n.create(a, o)
                    }(e, t, a)
                },
                encode: function (t) {
                    let i = ['enc', 'Utils', 'fromWordArray', 'slice', 'call', 'prototype', 'push', 'apply', 'toWordArray', 'words', 'sigBytes', '_map1', 'clamp', 'charAt', 0.75, 'reverse', 'join', ''];
                    for (var r, n, a, o, u, l, h, f, g, p, v, d, b, y, k, m, w, _, x, S, A, E = Function.prototype.call, O = [14, 86, 0, 86, 1, 1, 2, 34, 41, 65, 81, 72, 0, 86, 3, 1, 4, 44, 41, 83, 81, 72, 0, 36, 81, 25, 86, 5, 86, 6, 1, 7, 50, 55, 76, 81, 35, -9802, 35, 5352, 61, 35, 4453, 61, 50, 15, 35, -442, 35, 3677, 61, 35, -3232, 61, 56, 92, 48, 81, 35, 6681, 35, -5651, 61, 35, -1030, 61, 74, 81, 98, 9, 50, 1, 6, 26, 41, 81, 91, 81, 68, 26, 23, 46, -12, 72, 0, 57, 81, 50, 15, 35, -4156, 35, -5570, 61, 35, 9727, 61, 92, 42, 81, 98, 47, 25, 86, 5, 86, 6, 1, 7, 49, 50, 1, 3, 78, 35, -8441, 35, 6070, 61, 35, 2373, 61, 92, 78, 35, -4608, 35, -1600, 61, 35, 6209, 61, 61, 76, 76, 81, 78, 35, -8077, 35, -2669, 61, 35, 10749, 61, 92, 42, 81, 78, 35, -1148, 35, -3641, 61, 35, 4789, 61, 96, 46, -57, 14, 86, 0, 86, 1, 1, 8, 49, 41, 63, 81, 85, 86, 9, 73, 81, 85, 86, 10, 37, 81, 59, 11, 33, 81, 85, 1, 12, 40, 81, 72, 0, 30, 81, 35, -8211, 35, 8689, 61, 35, -478, 61, 10, 81, 98, 314, 51, 66, 35, 9564, 35, 9675, 61, 35, -19237, 61, 24, 58, 35, -2570, 35, 5540, 61, 35, -2946, 61, 66, 35, -6608, 35, -9969, 61, 35, 16581, 61, 56, 35, 4192, 35, 6746, 61, 35, -10930, 61, 79, 92, 24, 35, 9241, 35, -8731, 61, 35, -255, 61, 9, 52, 81, 51, 66, 35, -579, 35, -3037, 61, 35, 3617, 61, 61, 35, -935, 35, 5808, 61, 35, -4871, 61, 24, 58, 35, -4865, 35, -7455, 61, 35, 12344, 61, 66, 35, -7024, 35, 126, 61, 35, 6899, 61, 61, 35, -7175, 35, -5194, 61, 35, 12373, 61, 56, 35, 1465, 35, 4985, 61, 35, -6442, 61, 79, 92, 24, 35, -3084, 35, 177, 61, 35, 3162, 61, 9, 94, 81, 51, 66, 35, 5672, 35, -3378, 61, 35, -2292, 61, 61, 35, 2765, 35, -5384, 61, 35, 2621, 61, 24, 58, 35, -4419, 35, 1293, 61, 35, 3150, 61, 66, 35, -3135, 35, -5566, 61, 35, 8703, 61, 61, 35, -7878, 35, 4656, 61, 35, 3226, 61, 56, 35, 3996, 35, 5731, 61, 35, -9719, 61, 79, 92, 24, 35, -4300, 35, 5568, 61, 35, -1013, 61, 9, 80, 81, 90, 35, 2184, 35, -628, 61, 35, -1540, 61, 97, 39, 35, 5963, 35, -3042, 61, 35, -2913, 61, 97, 38, 21, 38, 4, 81, 35, 7257, 35, -7704, 61, 35, 447, 61, 13, 81, 98, 42, 22, 1, 6, 28, 1, 13, 27, 35, 1915, 35, -5017, 61, 35, 3108, 61, 35, -2449, 35, 6025, 61, 35, -3573, 61, 16, 92, 79, 24, 35, 9062, 35, -3666, 61, 35, -5333, 61, 9, 41, 41, 81, 62, 81, 16, 35, -6155, 35, 263, 61, 35, 5896, 61, 23, 19, 18, 66, 16, 35, -3748, 35, 1684, 61, 35, 2064, 61, 70, 14, 61, 79, 61, 2, 23, 46, -71, 66, 35, 5365, 35, -7223, 61, 35, 1861, 61, 61, 10, 81, 66, 2, 23, 46, -317, 72, 0, 69, 81, 35, -1989, 35, -5616, 61, 35, 7605, 61, 54, 81, 98, 41, 25, 86, 5, 86, 6, 1, 7, 60, 22, 1, 3, 67, 67, 35, 8935, 35, 4781, 61, 35, -13712, 61, 61, 76, 1, 15, 40, 76, 81, 67, 35, -3142, 35, 187, 61, 35, 2959, 61, 61, 54, 81, 67, 22, 15, 23, 46, -45, 60, 1, 16, 70, 17, 41, 99, 84], C = [], T = 0; ;)
                        switch (O[T++]) {
                            case 1:
                                C.push(C[C.length - 1]),
                                    C[C.length - 2] = C[C.length - 2][i[O[T++]]];
                                break;
                            case 2:
                                C.push(p);
                                break;
                            case 4:
                                w = C[C.length - 1];
                                break;
                            case 9:
                                A = C.pop(),
                                    C[C.length - 1] &= A;
                                break;
                            case 10:
                                b = C[C.length - 1];
                                break;
                            case 13:
                                _ = C[C.length - 1];
                                break;
                            case 14:
                                C.push(e);
                                break;
                            case 15:
                                C[C.length - 1] = C[C.length - 1].length;
                                break;
                            case 16:
                                C.push(_);
                                break;
                            case 19:
                                C[C.length - 1] ? (++T,
                                    --C.length) : T += O[T];
                                break;
                            case 21:
                                C.push(m);
                                break;
                            case 22:
                                C.push(d);
                                break;
                            case 23:
                                A = C.pop(),
                                    C[C.length - 1] = C[C.length - 1] < A;
                                break;
                            case 24:
                                A = C.pop(),
                                    C[C.length - 1] >>>= A;
                                break;
                            case 25:
                                C.push(Array);
                                break;
                            case 26:
                                C.push(o);
                                break;
                            case 27:
                                C.push(w);
                                break;
                            case 28:
                                C.push(v);
                                break;
                            case 30:
                                d = C[C.length - 1];
                                break;
                            case 33:
                                v = C[C.length - 1];
                                break;
                            case 34:
                                C.push(t);
                                break;
                            case 35:
                                C.push(O[T++]);
                                break;
                            case 36:
                                a = C[C.length - 1];
                                break;
                            case 37:
                                p = C[C.length - 1];
                                break;
                            case 38:
                                A = C.pop(),
                                    C[C.length - 1] |= A;
                                break;
                            case 39:
                                C.push(k);
                                break;
                            case 40:
                                null != C[C.length - 1] ? C[C.length - 2] = E.call(C[C.length - 2], C[C.length - 1]) : (A = C[C.length - 2],
                                    C[C.length - 2] = A()),
                                    C.length--;
                                break;
                            case 41:
                                null != C[C.length - 2] ? (C[C.length - 3] = E.call(C[C.length - 3], C[C.length - 2], C[C.length - 1]),
                                    C.length -= 2) : (A = C[C.length - 3],
                                    C[C.length - 3] = A(C[C.length - 1]),
                                    C.length -= 2);
                                break;
                            case 42:
                                h = C[C.length - 1];
                                break;
                            case 44:
                                C.push(r);
                                break;
                            case 46:
                                C.pop() ? T += O[T] : ++T;
                                break;
                            case 48:
                                o = C[C.length - 1];
                                break;
                            case 49:
                                C.push(l);
                                break;
                            case 50:
                                C.push(a);
                                break;
                            case 51:
                                C.push(g);
                                break;
                            case 52:
                                y = C[C.length - 1];
                                break;
                            case 54:
                                S = C[C.length - 1];
                                break;
                            case 55:
                                C.push(n);
                                break;
                            case 56:
                                A = C.pop(),
                                    C[C.length - 1] %= A;
                                break;
                            case 57:
                                l = C[C.length - 1];
                                break;
                            case 58:
                                C[C.length - 2] = C[C.length - 2][C[C.length - 1]],
                                    C.length--;
                                break;
                            case 59:
                                C.push(this[i[O[T++]]]);
                                break;
                            case 60:
                                C.push(x);
                                break;
                            case 61:
                                A = C.pop(),
                                    C[C.length - 1] += A;
                                break;
                            case 62:
                                C.push(_++);
                                break;
                            case 63:
                                f = C[C.length - 1];
                                break;
                            case 65:
                                r = C[C.length - 1];
                                break;
                            case 66:
                                C.push(b);
                                break;
                            case 67:
                                C.push(S);
                                break;
                            case 68:
                                C.push(u);
                                break;
                            case 69:
                                x = C[C.length - 1];
                                break;
                            case 70:
                                C.push(i[O[T++]]);
                                break;
                            case 72:
                                C.push(new Array(O[T++]));
                                break;
                            case 73:
                                g = C[C.length - 1];
                                break;
                            case 74:
                                u = C[C.length - 1];
                                break;
                            case 76:
                                C[C.length - 4] = E.call(C[C.length - 4], C[C.length - 3], C[C.length - 2], C[C.length - 1]),
                                    C.length -= 3;
                                break;
                            case 78:
                                C.push(h);
                                break;
                            case 79:
                                A = C.pop(),
                                    C[C.length - 1] *= A;
                                break;
                            case 80:
                                m = C[C.length - 1];
                                break;
                            case 81:
                                C.pop();
                                break;
                            case 83:
                                n = C[C.length - 1];
                                break;
                            case 84:
                                return;
                            case 85:
                                C.push(f);
                                break;
                            case 86:
                                C[C.length - 1] = C[C.length - 1][i[O[T++]]];
                                break;
                            case 90:
                                C.push(y);
                                break;
                            case 91:
                                C.push(u++);
                                break;
                            case 92:
                                A = C.pop(),
                                    C[C.length - 1] -= A;
                                break;
                            case 94:
                                k = C[C.length - 1];
                                break;
                            case 96:
                                A = C.pop(),
                                    C[C.length - 1] = C[C.length - 1] >= A;
                                break;
                            case 97:
                                A = C.pop(),
                                    C[C.length - 1] <<= A;
                                break;
                            case 98:
                                T += O[T];
                                break;
                            case 99:
                                return C.pop()
                        }
                },
                _map1: "WVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYX",
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            },
            e.enc.Base64;
        var t, r, n
    };
    o(my_crypto);
}();


// 对时间戳 t 进行格式化
function format_t(t) {
    var date = new Date(t);

    function pad(n) {
        return n < 10 ? '0' + n : n;
    }

    var year = date.getFullYear();
    var month = pad(date.getMonth() + 1); // 月份是从0开始的
    var day = pad(date.getDate());
    var hour = pad(date.getHours());
    var minute = pad(date.getMinutes());
    var second = pad(date.getSeconds());
    var millisecond = date.getMilliseconds();

    return `${year}${month}${day}${hour}${minute}${second}${millisecond}`;  // 1715595630238 -> 20240513182030238
}


function get_fp_k(e, t) {
    var r, n = [], a = e.length
    for (let i = 0; i < e.length; i++) {
        if (Math.random() * a < t && (n.push(e[i]), 0 == --t))
            break;
        a--
    }
    for (var c = "", s = 0; s < n.length; s++) {
        var u = Math.random() * (n.length - s) | 0;
        c += n[u], n[u] = n[n.length - s - 1]
    }
    return c
}

function get_fp__(e, t) {
    // "1uct6d0jhq".indexOf("h") -> 8
    // "1uct6d0jhq".replace("h", "") -> "1uct6d0jq"
    // "1uct6d0jq".indexOf("c") -> 2
    // "1uct6d0jq".replace("c", "") -> "1ut6d0jq"
    // "1ut6d0jq".indexOf("q") -> 7
    // "1ut6d0jq".replace("q", "") -> "1ut6d0j"
    // "1ut6d0j".indexOf("j") -> 6
    // "1ut6d0j".replace("c", "") -> "1ut6d0"
    // "1ut6d0".indexOf("j") -> 2
    // "1ut6d0".replace("c", "") -> "1u6d0"
    // 返回  "1u6d0"
    let new_t = e
    for (let i of t) {
        new_t = new_t.replace(i, "")
    }
    // console.log(new_t)
    return new_t
}

function get_fp_m(num, size) {
    for (var t = size, r = num, n = ""; t--;)
        n += r[Math.random() * r.length | 0];
    return n
}

function nm(e) {
    var t = e.slice;
    return e === Array.prototype || Array.isPrototypeOf.call(Array.prototype, e) && t === Array.prototype.slice ? Array.prototype.slice : t
}

function Tx(e) {
    var t = e.splice;
    return e === Array.prototype || Array.isPrototypeOf.call(Array.prototype, e) && t === Array.prototype.splice ? Array.prototype.splice : t
}

function j_(e) {
    var t = e.concat;
    return e === Array.prototype || Array.isPrototypeOf.call(Array.prototype, e) && t === Array.prototype.concat ? Array.prototype.concat : t
}

function M_() {
    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = t.size,
        n = void 0 === r ? 10 : r, a = t.dictType, o = void 0 === a ? "number" : a, i = t.customDict, c = "";
    if (i && "string" == typeof i)
        e = i;
    else
        switch (o) {
            case "alphabet":
                e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                break;
            case "max":
                e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
                break;
            default:
                e = "0123456789"
        }
    for (; n--;)
        c += e[Math.random() * e.length | 0];
    return c
}

function sha256_digest(e) {
    function safe_add(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
    }

    function S(e, t) {
        return e >>> t | e << 32 - t
    }

    function R(e, t) {
        return e >>> t
    }

    function Ch(e, t, n) {
        return e & t ^ ~e & n
    }

    function Maj(e, t, n) {
        return e & t ^ e & n ^ t & n
    }

    function Sigma0256(e) {
        return S(e, 2) ^ S(e, 13) ^ S(e, 22)
    }

    function Sigma1256(e) {
        return S(e, 6) ^ S(e, 11) ^ S(e, 25)
    }

    function Gamma0256(e) {
        return S(e, 7) ^ S(e, 18) ^ R(e, 3)
    }

    return function binb2hex(e) {
        for (var t = "", n = 0; n < 4 * e.length; n++)
            t += "0123456789abcdef".charAt(e[n >> 2] >> 8 * (3 - n % 4) + 4 & 15) + "0123456789abcdef".charAt(e[n >> 2] >> 8 * (3 - n % 4) & 15);
        return t
    }(function core_sha256(e, t) {
        var n, r, o, a, i, c, s, u, l, p, d,
            f = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
            m = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
            g = new Array(64);
        e[t >> 5] |= 128 << 24 - t % 32,
            e[15 + (t + 64 >> 9 << 4)] = t;
        for (var y = 0; y < e.length; y += 16) {
            n = m[0],
                r = m[1],
                o = m[2],
                a = m[3],
                i = m[4],
                c = m[5],
                s = m[6],
                u = m[7];
            for (var b = 0; b < 64; b++)
                g[b] = b < 16 ? e[b + y] : safe_add(safe_add(safe_add(S(d = g[b - 2], 17) ^ S(d, 19) ^ R(d, 10), g[b - 7]), Gamma0256(g[b - 15])), g[b - 16]),
                    l = safe_add(safe_add(safe_add(safe_add(u, Sigma1256(i)), Ch(i, c, s)), f[b]), g[b]),
                    p = safe_add(Sigma0256(n), Maj(n, r, o)),
                    u = s,
                    s = c,
                    c = i,
                    i = safe_add(a, l),
                    a = o,
                    o = r,
                    r = n,
                    n = safe_add(l, p);
            m[0] = safe_add(n, m[0]),
                m[1] = safe_add(r, m[1]),
                m[2] = safe_add(o, m[2]),
                m[3] = safe_add(a, m[3]),
                m[4] = safe_add(i, m[4]),
                m[5] = safe_add(c, m[5]),
                m[6] = safe_add(s, m[6]),
                m[7] = safe_add(u, m[7])
        }
        return m
    }(function str2binb(e) {
        for (var t = Array(), n = 0; n < 8 * e.length; n += 8)
            t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << 24 - n % 32;
        return t
    }(e = function Utf8Encode(e) {
        e = e.replace(/\r\n/g, "\n");
        for (var t = "", n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192),
                t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224),
                t += String.fromCharCode(r >> 6 & 63 | 128),
                t += String.fromCharCode(63 & r | 128))
        }
        return t
    }(e)), 8 * e.length))
}

function get_fp() {
    // 这里面的随机 0-10，a值，5，和slice(0-15)可能会根据网站变化
    let a = "1uct6d0jhq";  // 不确定不同页面，不同版本这个值是否会改变
    let a_random5 = get_fp_k(a, 5); // "jcqtd" 随机的5位，这个位数也可能会变
    // console.log(a_random5)
    let a_random5_other = get_fp__(a, a_random5); // "td0hq"
    // console.log(a_random5_other)
    let size = Math.floor(Math.random() * (10 + 1)) // 随机0-10整数
    let b1 = get_fp_m(a_random5_other, size);
    let b2 = get_fp_m(a_random5_other, 10 - size);
    let c = b1 + a_random5 + b2 + (Math.floor(Math.random() * (9 - 1 + 1)) + 1);
    // console.log(c)
    let d = c.split("")
    // console.log(d)
    let e = d.slice(0, 15)
    // console.log(e)
    let f = d.slice(15)
    // console.log(f)
    let fp_array = [];
    for (; e.length > 0;) {
        fp_array.push((35 - parseInt(e.pop(), 36)).toString(36));
    }
    // console.log(fp_array)
    return fp_array.concat(f).join("")
}


function test(tk, fp, ts, ai, rd, algo) {
    // ts = "2024051614284761897"
    // rd = 'OdHwRXh7KZAm'
    // str = "tk03wb0831c7a18nTTRe7wrBt1InFibH1NjW_M-CHnCLnLF8EuCrjudNeQluMfCktiCBvvmrY3lXpXAiCh-If0sNRSe1z5y5z5znt9mi65y3202405161428476189786b9fOdHwRXh7KZAm"
    // 加密结果：'72f7270ea15da826b613fb08cbaf2bf2'
    var str = "".concat(tk).concat(fp).concat(ts).concat(ai).concat(rd);
    return algo.MD5(str);
}

function get_sha256_str(tk, fp, ts, ai, rd, body, algo) {
    // ts = "2024051615354975297"
    // let t = 1715844594800;
    // 原文："07882efb77aea55cc192dda3b682defaappid:paipai_h5&body:1ca687f017bb21febf7d0ececa5e5e9029766829921ce54d14f6def64561fa60&functionId:dbd.auction.detail.v2&t:171584459480007882efb77aea55cc192dda3b682defa"
    // 结果："e011b3bd17d399aab4af40cda69d9aa9a6f628b2051b2da1156ad06748aa60af"

    let t = Date.now();
    let test_result = test(tk, fp, ts, ai, rd, algo);
    console.log(`test_result -> ${test_result}`)
    let word = test_result + 'appid:paipai_h5&body:' + body + '&functionId:dbd.auction.detail.v2&t:' + t + test_result;
    return my_crypto.SHA256(word)
}

function get_aes_str(isLogin='jd_63d14a95d1c5c', fp) {
    // isLogin 这个参数来源于 https://api.m.jd.com/api?functionId=dbd.common.isLogin 接口
    // word 的生成位置就在  l[l.length - 3] = c(l[l.length - 1]), envCollect 函数
    // n("random", (function(e) {
    //                 return M_({
    //                     size: 12,
    //                     dictType: "max",
    //                     customDict: null
    //                 })
    //             }
    //             ))

    let random_str = M_({size: 12, dictType: "max", customDict: null});
    let key = my_crypto.enc.Utf8.parse('_M6Y?dvfN40VMF[X'); // '5f4d36593f6476664e3430564d465b58'
    let iv = my_crypto.enc.Utf8.parse('0102030405060708'); // '30313032303330343035303630373038'
    let word = `{\n  "sua": "Windows NT 10.0; Win64; x64",\n  "pp": {\n    "p2": "${isLogin}"\n  },\n  "extend": {\n    "wd": 0,\n    "l": 0,\n    "ls": 5,\n    "wk": 0,\n    "bu1": "0.1.5",\n    "bu2": -1,\n    "bu3": 47,\n    "bu4": 0,\n    "bu5": 0\n  },\n  "random": "${random_str}",\n  "v": "h5_file_v4.7.1",\n  "fp": "${fp}"\n}`
    // word = '{\n  "sua": "Windows NT 10.0; Win64; x64",\n  "pp": {\n    "p2": "jd_vMcLqwbJSYNa"\n  },\n  "extend": {\n    "wd": 0,\n    "l": 0,\n    "ls": 5,\n    "wk": 0,\n    "bu1": "0.1.5",\n    "bu2": -1,\n    "bu3": 47,\n    "bu4": 0,\n    "bu5": 0\n  },\n  "random": "bbumgQMA9ti5",\n  "v": "h5_file_v4.7.1",\n  "fp": "z5y5z5znt9mi65y3"\n}'
    console.log(`word -> ${word}`)
    console.log(`aes key: ${key.toString()}, iv: ${iv.toString()}`);
    let aes_enc_result = my_crypto.AES.encrypt(word, key, {iv});
    // console.log(my_crypto.enc.Base64.encode(aes_enc_result.ciphertext))
    return my_crypto.enc.Base64.encode(aes_enc_result.ciphertext)
}


function get_h5st(fp, tk, rd) {
    let t = Date.now();  // 1715595630238
    console.log(`t -> ${t}`);
    let format_ts = format_t(t);
    console.log(`r -> ${format_ts}`);
    let fingerprint = get_fp();  // 这个参数和request_algo有很深的联系，携带这个参数请求request_algo链接，返回值的fp就是这个参数，最后拼接的也是这个
    console.log(`this._fingerprint -> ${fingerprint}`)
    let appId = "86b9f"; // 源码里面有

    // request_algo 返回的 =================
    // let tk = "tk03w862b1bd018nTt1QsL76xDKcbY9OHhNHTUjOZ0cCJ7fEzav4Gn0eCNDTdPN7FL9iigQvaya6rQDvM6yNkVY4lbVr"
    // let fp = "n6ttgiinmzy95tt2" // 携带fingerprint参数请求request_algo链接，返回值的fp就是这个参数，最后拼接的也是这个
    // let rd = 'roT2jCgj5UeR';
    // ====================================

    let body = "{\"auctionId\":\"388197921\",\"auctionProductType\":1,\"p\":2,\"ts\":1715913148197,\"dbdApiVersion\":\"20200623\",\"mpSource\":1,\"sourceTag\":2}"
    let sha256_body = sha256_digest(body).toString();
    console.log(`sha256_body -> ${sha256_body}`)
    let ai = "86b9f"
    let sha256_str = get_sha256_str(tk, fp, format_ts + "97", ai, rd, sha256_body, my_crypto);
    console.log(`sha256_str -> ${sha256_str}`)
    let version = 4.7;
    let aes_str = get_aes_str(isLogin = 'jd_63d14a95d1c5c', fp);
    console.log(`aes_str -> ${aes_str}`)
    // let h5st = ["" + format_ts, "" + fingerprint, "" + appId, "" + token, "" + sha256_str, "" + version, "" + t, "" + aes_str].join(";")
    let h5st = ["" + format_ts, "" + fp, "" + appId, "" + tk, "" + sha256_str, "" + version, "" + t, "" + aes_str].join(";")
    console.log(h5st)
    return [h5st, t]
}
debugger
// 测试 sha256
let word = "8fc5466ceb32ef218c992951aa22ab4cappid:paipai_h5&body:fa55c9f2ce2876a2431a00d6b5110977a5ea41fcb07e41de913b37b857feecd8&functionId:dbd.auction.detail.v2&t:17158376643208fc5466ceb32ef218c992951aa22ab4c"
let result = my_crypto.SHA256(word);
if (result.toString() === "8b3b81aedf92df23eee74313a7318b6fd8a8e4a179be567d7b433d6a295dd62d") {
    console.log("sha256 success")
} else {
    console.log("sha256 false")
}
