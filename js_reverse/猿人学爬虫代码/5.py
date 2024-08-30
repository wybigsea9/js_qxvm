import execjs
import requests
import json
import time

et = execjs.compile("""
    _$8K = {};
    
    function f(q) {
        var k, w, j = "0123456789abcdef", h = "";
        for (w = 0; w < q["length"]; w += 1) {
            k = q["charCodeAt"](w), h += j.charAt(k >>> 4 & 15) + j.charAt(15 & k)
        }
        return h
    }
    
    function a(w, j, z, h, q, x, k) {
        return i(j & z | ~j & h, w, j, q, x, k)
    }
    
    function r(w, j, z, h, q, x, k) {
        return i(j & h | z & ~h, w, j, q, x, k)
    }
    
    function o(w, j, z, h, q, x, k) {
        return i(j ^ z ^ h, w, j, q, x, k)
    }
    
    function s(w, j, z, h, q, x, k) {
        return i(z ^ (j | ~h), w, j, q, x, k)
    }
    
    function i(w, j, h, q, x, k) {
        return t(n(t(t(j, w), t(q, k)), x), h)
    }
    
    function t(j, h) {
        var k = (65535 & j) + (65535 & h);
        return (j >> 16) + (h >> 16) + (k >> 16) << 16 | 65535 & k
    }
    
    function n(j, h) {
        return j << h | j >>> 32 - h
    }
    
    function p(h) {
        return unescape(encodeURIComponent(h))
    }
    
    function l(e, n) {
        e[n >> 5] |= 128 << n % 32, e[14 + (n + 64 >>> 9 << 4)] = n;
        try {
            var $_XML = 16
        } catch (e) {
            var $_XML = 1
        }
        try {
            _$8K.$_z2[0] = "Q"
        } catch (e) {
            try {
                op = 26
            } catch (e) {
                var total = 0;
                for (var i = 0; i < 1000000; i++) {
                    total = total + i["toString"]()
                }
            }
            if (26 > 20) {
                eval("b64pad = 1")
            } else {
                if (op < 10) {
                    _$8K["$_zw"] = [1, 8, 2, 4, 23, 45, 8, 15, 81, 68, 13, 72, 70]
                }
            }
        }
        var i, l, c, d, u, h = 1732584193, f = -271733879, p = -1732584194, m = 271733878;
        try {
            if (_$8K["_$6_"]) {
            } else {
                _$8K["_$6_"] = 8821003647
            }
        } catch (e) {
            _$8K["_$6_"] = 37885443
        }
        for (i = 0; i < e["length"]; i += $_XML) {
            l = h, c = f, d = p, u = m, h = a(h, f, p, m, e[i], 7, 513548), m = a(m, h, f, p, e[i + 1], 12, -389564586), p = a(p, m, h, f, e[i + 2], 17, 606105819), f = a(f, p, m, h, e[i + 3], 22, -1044525330), h = a(h, f, p, m, e[i + 4], 7, -176418897), m = a(m, h, f, p, e[i + 5], 12, 1200080426), p = a(p, m, h, f, e[i + 6], 17, -1473231341), f = a(f, p, m, h, e[i + 7], 22, -45705983), h = a(h, f, p, m, e[i + 8], 7, 1770035416), m = a(m, h, f, p, e[i + 9], 12, -1958414417), p = a(p, m, h, f, e[i + 10], 17, -42063), f = a(f, p, m, h, e[i + 11], 22, -1990404162), h = a(h, f, p, m, e[i + 12], 7, 1804603682), m = a(m, h, f, p, e[i + 13], 12, -40341101), p = a(p, m, h, f, e[i + 14], 17, -1502882290), f = a(f, p, m, h, e[i + 15], 22, 1236535329), h = r(h, f, p, m, e[i + 1], 5, -165796510), m = r(m, h, f, p, e[i + 6], 9, -1069501632), p = r(p, m, h, f, e[i + 11], 14, 643717713), f = r(f, p, m, h, e[i], 20, -373897302), h = r(h, f, p, m, e[i + 5], 5, -701558691), m = r(m, h, f, p, e[i + 10], 9, 38016083), p = r(p, m, h, f, e[i + 15], 14, -660478335), f = r(f, p, m, h, e[i + 4], 20, -405537848), h = r(h, f, p, m, e[i + 9], 5, 568446438), m = r(m, h, f, p, e[i + 14], 9, -1019783690), p = r(p, m, h, f, e[i + 3], 14, -187363961), f = r(f, p, m, h, e[i + 8], 20, 1163531501), h = r(h, f, p, m, e[i + 13], 5, -1554681467), m = r(m, h, f, p, e[i + 2], 9, -51403784), p = r(p, m, h, f, e[i + 7], 14, 1735328473), f = r(f, p, m, h, e[i + 12], 20, -1926607734), h = o(h, f, p, m, e[i + 5], 4, -37824558), m = o(m, h, f, p, e[i + 8], 11, -2022574463), p = o(p, m, h, f, e[i + 11], 16, 1839030562), f = o(f, p, m, h, e[i + 14], 23, -35309556), h = o(h, f, p, m, e[i + 1], 4, -1530992060 * (b64pad)), m = o(m, h, f, p, e[i + 4], 11, 1272893353), p = o(p, m, h, f, e[i + 7], 16, -155497632), f = o(f, p, m, h, e[i + 10], 23, -1094730640), h = o(h, f, p, m, e[i + 13], 4, 681279174), m = o(m, h, f, p, e[i], 11, -358537222), p = o(p, m, h, f, e[i + 3], 16, -722521979), f = o(f, p, m, h, e[i + 6], 23, 760291289), h = o(h, f, p, m, e[i + 9], 4, -64036887), m = o(m, h, f, p, e[i + 12], 11, -421815835), p = o(p, m, h, f, e[i + 15], 16, 530742520), f = o(f, p, m, h, e[i + 2], 23, -995338651), h = s(h, f, p, m, e[i], 6, -198630844), m = s(m, h, f, p, e[i + 7], 10, 1126891415), p = s(p, m, h, f, e[i + 14], 15, -1416354905), f = s(f, p, m, h, e[i + 5], 21, -57434055), h = s(h, f, p, m, e[i + 12], 6, 1700485571), m = s(m, h, f, p, e[i + 3], 10, -1894746606), p = s(p, m, h, f, e[i + 10], 15, -105181523), f = s(f, p, m, h, e[i + 1], 21, -2054922799), h = s(h, f, p, m, e[i + 8], 6, 1873313359), m = s(m, h, f, p, e[i + 15], 10, -30611744), p = s(p, m, h, f, e[i + 6], 15, -1560198380), f = s(f, p, m, h, e[i + 13], 21, 1309151649), h = s(h, f, p, m, e[i + 4], 6, -145523070), m = s(m, h, f, p, e[i + 11], 10, -1120210379), p = s(p, m, h, f, e[i + 2], 15, 718787259), f = s(f, p, m, h, e[i + 9], 21, -343485441), h = t(h, l), f = t(f, c), p = t(p, d), m = t(m, u)
        }
        return [h, f, p, m]
    }
    
    function d(k) {
        var j, q = [];
        for (q[(k["length"] >> 2) - 1] = void 0, j = 0; j < q["length"]; j += 1) {
            q[j] = 0
        }
        var h = 8 * k["length"];
        for (j = 0; j < h; j += 8) {
            q[j >> 5] |= (255 & k["charCodeAt"](j / 8)) << j % 32
        }
        return q
    }
    
    function c(k) {
        var j, q = "", h = 32 * k["length"];
        for (j = 0; j < h; j += 8) {
            q += String["fromCharCode"](k[j >> 5] >>> j % 32 & 255)
        }
        return q
    }
    
    function u(h) {
        return c(l(d(h), 8 * h["length"]))
    }
    
    function m(h) {
        return u(p(h))
    }
    
    function g(h) {
        return f(m(h))
    }
    
    function b(j, h, k) {
        return h ? k ? v(h, j) : y(h, j) : k ? m(j) : g(j)
    }
    
    
    
    
    var CryptoJS = CryptoJS || (function (Math, undefined) {
        var C = {};
        var C_lib = C.lib = {};
        var Base = C_lib.Base = (function () {
            function F() {};
            return {
                extend: function (overrides) {
                    F.prototype = this;
                    var subtype = new F();
                    if (overrides) {
                        subtype.mixIn(overrides);
                    }
                    if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
                        subtype.init = function () {
                            subtype.$super.init.apply(this, arguments);
                        };
                    }
                    subtype.init.prototype = subtype;
                    subtype.$super = this;
                    return subtype;
                }, create: function () {
                    var instance = this.extend();
                    instance.init.apply(instance, arguments);
                    return instance;
                }, init: function () {}, mixIn: function (properties) {
                    for (var propertyName in properties) {
                        if (properties.hasOwnProperty(propertyName)) {
                            this[propertyName] = properties[propertyName];
                        }
                    }
                    if (properties.hasOwnProperty('toString')) {
                        this.toString = properties.toString;
                    }
                }, clone: function () {
                    return this.init.prototype.extend(this);
                }
            };
        }());
        var WordArray = C_lib.WordArray = Base.extend({
            init: function (words, sigBytes) {
                words = this.words = words || [];
                if (sigBytes != undefined) {
                    this.sigBytes = sigBytes;
                } else {
                    this.sigBytes = words.length * 4;
                }
            }, toString: function (encoder) {
                return (encoder || Hex).stringify(this);
            }, concat: function (wordArray) {
                var thisWords = this.words;
                var thatWords = wordArray.words;
                var thisSigBytes = this.sigBytes;
                var thatSigBytes = wordArray.sigBytes;
                this.clamp();
                if (thisSigBytes % 4) {
                    for (var i = 0; i < thatSigBytes; i++) {
                        var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                        thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
                    }
                } else if (thatWords.length > 0xffff) {
                    for (var i = 0; i < thatSigBytes; i += 4) {
                        thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
                    }
                } else {
                    thisWords.push.apply(thisWords, thatWords);
                }
                this.sigBytes += thatSigBytes;
                return this;
            }, clamp: function () {
                var words = this.words;
                var sigBytes = this.sigBytes;
                words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
                words.length = Math.ceil(sigBytes / 4);
            }, clone: function () {
                var clone = Base.clone.call(this);
                clone.words = this.words.slice(0);
                return clone;
            }, random: function (nBytes) {
                var words = [];
                var r = (function (m_w) {
                    var m_w = m_w;
                    var m_z = 0x3ade68b1;
                    var mask = 0xffffffff;
                    return function () {
                        m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
                        m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
                        var result = ((m_z << 0x10) + m_w) & mask;
                        result /= 0x100000000;
                        result += 0.5;
                        return result * (Math.random() > .5 ? 1 : -1);
                    }
                });
                for (var i = 0, rcache; i < nBytes; i += 4) {
                    var _r = r((rcache || Math.random()) * 0x100000000);
                    rcache = _r() * 0x3ade67b7;
                    words.push((_r() * 0x100000000) | 0);
                }
                return new WordArray.init(words, nBytes);
            }
        });
        var C_enc = C.enc = {};
        var Hex = C_enc.Hex = {
            stringify: function (wordArray) {
                var words = wordArray.words;
                var sigBytes = wordArray.sigBytes;
                var hexChars = [];
                for (var i = 0; i < sigBytes; i++) {
                    var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                    hexChars.push((bite >>> 4).toString(16));
                    hexChars.push((bite & 0x0f).toString(16));
                }
                return hexChars.join('');
            }, parse: function (hexStr) {
                var hexStrLength = hexStr.length;
                var words = [];
                for (var i = 0; i < hexStrLength; i += 2) {
                    words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
                }
                return new WordArray.init(words, hexStrLength / 2);
            }
        };
        var Latin1 = C_enc.Latin1 = {
            stringify: function (wordArray) {
                var words = wordArray.words;
                var sigBytes = wordArray.sigBytes;
                var latin1Chars = [];
                for (var i = 0; i < sigBytes; i++) {
                    var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                    latin1Chars.push(String.fromCharCode(bite));
                }
                return latin1Chars.join('');
            }, parse: function (latin1Str) {
                var latin1StrLength = latin1Str.length;
                var words = [];
                for (var i = 0; i < latin1StrLength; i++) {
                    words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
                }
                return new WordArray.init(words, latin1StrLength);
            }
        };
        var Utf8 = C_enc.Utf8 = {
            stringify: function (wordArray) {
                try {
                    return decodeURIComponent(escape(Latin1.stringify(wordArray)));
                } catch (e) {
                    throw new Error('Malformed UTF-8 data');
                }
            }, parse: function (utf8Str) {
                return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
            }
        };
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
            reset: function () {
                this._data = new WordArray.init();
                this._nDataBytes = 0;
            }, _append: function (data) {
                if (typeof data == 'string') {
                    data = Utf8.parse(data);
                }
                this._data.concat(data);
                this._nDataBytes += data.sigBytes;
            }, _process: function (doFlush) {
                var data = this._data;
                var dataWords = data.words;
                var dataSigBytes = data.sigBytes;
                var blockSize = this.blockSize;
                var blockSizeBytes = blockSize * 4;
                var nBlocksReady = dataSigBytes / blockSizeBytes;
                if (doFlush) {
                    nBlocksReady = Math.ceil(nBlocksReady);
                } else {
                    nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
                }
                var nWordsReady = nBlocksReady * blockSize;
                var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
                if (nWordsReady) {
                    for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                        this._doProcessBlock(dataWords, offset);
                    }
                    var processedWords = dataWords.splice(0, nWordsReady);
                    data.sigBytes -= nBytesReady;
                }
                return new WordArray.init(processedWords, nBytesReady);
            }, clone: function () {
                var clone = Base.clone.call(this);
                clone._data = this._data.clone();
                return clone;
            }, _minBufferSize: 0
        });
        var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
            cfg: Base.extend(),
            init: function (cfg) {
                this.cfg = this.cfg.extend(cfg);
                this.reset();
            }, reset: function () {
                BufferedBlockAlgorithm.reset.call(this);
                this._doReset();
            }, update: function (messageUpdate) {
                this._append(messageUpdate);
                this._process();
                return this;
            }, finalize: function (messageUpdate) {
                if (messageUpdate) {
                    this._append(messageUpdate);
                }
                var hash = this._doFinalize();
                return hash;
            }, blockSize: 512 / 32,
            _createHelper: function (hasher) {
                return function (message, cfg) {
                    return new hasher.init(cfg).finalize(message);
                };
            }, _createHmacHelper: function (hasher) {
                return function (message, key) {
                    return new C_algo.HMAC.init(hasher, key).finalize(message);
                };
            }
        });
        var C_algo = C.algo = {};
        return C;
    }(Math));
    
    (function () {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        var Base64 = C_enc.Base64 = {
            stringify: function (wordArray) {
                var words = wordArray.words;
                var sigBytes = wordArray.sigBytes;
                var map = this._map;
                wordArray.clamp();
                var base64Chars = [];
                for (var i = 0; i < sigBytes; i += 3) {
                    var byte1 = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                    var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
                    var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;
                    var triplet = (byte1 << 16) | (byte2 << 8) | byte3;
                    for (var j = 0;
                         (j < 4) && (i + j * 0.75 < sigBytes); j++) {
                        base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
                    }
                }
                var paddingChar = map.charAt(64);
                if (paddingChar) {
                    while (base64Chars.length % 4) {
                        base64Chars.push(paddingChar);
                    }
                }
                return base64Chars.join('');
            }, parse: function (base64Str) {
                var base64StrLength = base64Str.length;
                var map = this._map;
                var reverseMap = this._reverseMap;
                if (!reverseMap) {
                    reverseMap = this._reverseMap = [];
                    for (var j = 0; j < map.length; j++) {
                        reverseMap[map.charCodeAt(j)] = j;
                    }
                }
                var paddingChar = map.charAt(64);
                if (paddingChar) {
                    var paddingIndex = base64Str.indexOf(paddingChar);
                    if (paddingIndex !== -1) {
                        base64StrLength = paddingIndex;
                    }
                }
                return parseLoop(base64Str, base64StrLength, reverseMap);
            }, _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
            var words = [];
            var nBytes = 0;
            for (var i = 0; i < base64StrLength; i++) {
                if (i % 4) {
                    var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
                    var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
                    words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
                    nBytes++;
                }
            }
            return WordArray.create(words, nBytes);
        }
    }());
    
    CryptoJS.lib.Cipher || (function (undefined) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
        var C_enc = C.enc;
        var Utf8 = C_enc.Utf8;
        var Base64 = C_enc.Base64;
        var C_algo = C.algo;
        var EvpKDF = C_algo.EvpKDF;
        var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
            cfg: Base.extend(),
            createEncryptor: function (key, cfg) {
                return this.create(this._ENC_XFORM_MODE, key, cfg);
            }, createDecryptor: function (key, cfg) {
                return this.create(this._DEC_XFORM_MODE, key, cfg);
            }, init: function (xformMode, key, cfg) {
                this.cfg = this.cfg.extend(cfg);
                this._xformMode = xformMode;
                this._key = key;
                this.reset();
            }, reset: function () {
                BufferedBlockAlgorithm.reset.call(this);
                this._doReset();
            }, process: function (dataUpdate) {
                this._append(dataUpdate);
                return this._process();
            }, finalize: function (dataUpdate) {
                if (dataUpdate) {
                    this._append(dataUpdate);
                }
                var finalProcessedData = this._doFinalize();
                return finalProcessedData;
            }, keySize: 128 / 32,
            ivSize: 128 / 32,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: (function () {
                function selectCipherStrategy(key) {
                    if (typeof key == 'string') {
                        return PasswordBasedCipher;
                    } else {
                        return SerializableCipher;
                    }
                }
                return function (cipher) {
                    return {
                        encrypt: function (message, key, cfg) {
                            return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
                        }, decrypt: function (ciphertext, key, cfg) {
                            return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
                        }
                    };
                };
            }())
        });
        var StreamCipher = C_lib.StreamCipher = Cipher.extend({
            _doFinalize: function () {
                var finalProcessedBlocks = this._process(!!'flush');
                return finalProcessedBlocks;
            }, blockSize: 1
        });
        var C_mode = C.mode = {};
        var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
            createEncryptor: function (cipher, iv) {
                return this.Encryptor.create(cipher, iv);
            }, createDecryptor: function (cipher, iv) {
                return this.Decryptor.create(cipher, iv);
            }, init: function (cipher, iv) {
                this._cipher = cipher;
                this._iv = iv;
            }
        });
        var CBC = C_mode.CBC = (function () {
            var CBC = BlockCipherMode.extend();
            CBC.Encryptor = CBC.extend({
                processBlock: function (words, offset) {
                    var cipher = this._cipher;
                    var blockSize = cipher.blockSize;
                    xorBlock.call(this, words, offset, blockSize);
                    cipher.encryptBlock(words, offset);
                    this._prevBlock = words.slice(offset, offset + blockSize);
                }
            });
            CBC.Decryptor = CBC.extend({
                processBlock: function (words, offset) {
                    var cipher = this._cipher;
                    var blockSize = cipher.blockSize;
                    var thisBlock = words.slice(offset, offset + blockSize);
                    cipher.decryptBlock(words, offset);
                    xorBlock.call(this, words, offset, blockSize);
                    this._prevBlock = thisBlock;
                }
            });
    
            function xorBlock(words, offset, blockSize) {
                var iv = this._iv;
                if (iv) {
                    var block = iv;
                    this._iv = undefined;
                } else {
                    var block = this._prevBlock;
                }
                for (var i = 0; i < blockSize; i++) {
                    words[offset + i] ^= block[i];
                }
            }
            return CBC;
        }());
        var C_pad = C.pad = {};
        var Pkcs7 = C_pad.Pkcs7 = {
            pad: function (data, blockSize) {
                var blockSizeBytes = blockSize * 4;
                var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
                var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;
                var paddingWords = [];
                for (var i = 0; i < nPaddingBytes; i += 4) {
                    paddingWords.push(paddingWord);
                }
                var padding = WordArray.create(paddingWords, nPaddingBytes);
                data.concat(padding);
            }, unpad: function (data) {
                var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;
                data.sigBytes -= nPaddingBytes;
            }
        };
        var BlockCipher = C_lib.BlockCipher = Cipher.extend({
            cfg: Cipher.cfg.extend({
                mode: CBC,
                padding: Pkcs7
            }),
            reset: function () {
                Cipher.reset.call(this);
                var cfg = this.cfg;
                var iv = cfg.iv;
                var mode = cfg.mode;
                if (this._xformMode == this._ENC_XFORM_MODE) {
                    var modeCreator = mode.createEncryptor;
                } else {
                    var modeCreator = mode.createDecryptor;
                    this._minBufferSize = 1;
                } if (this._mode && this._mode.__creator == modeCreator) {
                    this._mode.init(this, iv && iv.words);
                } else {
                    this._mode = modeCreator.call(mode, this, iv && iv.words);
                    this._mode.__creator = modeCreator;
                }
            }, _doProcessBlock: function (words, offset) {
                this._mode.processBlock(words, offset);
            }, _doFinalize: function () {
                var padding = this.cfg.padding;
                if (this._xformMode == this._ENC_XFORM_MODE) {
                    padding.pad(this._data, this.blockSize);
                    var finalProcessedBlocks = this._process(!!'flush');
                } else {
                    var finalProcessedBlocks = this._process(!!'flush');
                    padding.unpad(finalProcessedBlocks);
                }
                return finalProcessedBlocks;
            }, blockSize: 128 / 32
        });
        var CipherParams = C_lib.CipherParams = Base.extend({
            init: function (cipherParams) {
                this.mixIn(cipherParams);
            }, toString: function (formatter) {
                return (formatter || this.formatter).stringify(this);
            }
        });
        var C_format = C.format = {};
        var OpenSSLFormatter = C_format.OpenSSL = {
            stringify: function (cipherParams) {
                var ciphertext = cipherParams.ciphertext;
                var salt = cipherParams.salt;
                if (salt) {
                    var wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
                } else {
                    var wordArray = ciphertext;
                }
                return wordArray.toString(Base64);
            }, parse: function (openSSLStr) {
                var ciphertext = Base64.parse(openSSLStr);
                var ciphertextWords = ciphertext.words;
                if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
                    var salt = WordArray.create(ciphertextWords.slice(2, 4));
                    ciphertextWords.splice(0, 4);
                    ciphertext.sigBytes -= 16;
                }
                return CipherParams.create({
                    ciphertext: ciphertext,
                    salt: salt
                });
            }
        };
        var SerializableCipher = C_lib.SerializableCipher = Base.extend({
            cfg: Base.extend({
                format: OpenSSLFormatter
            }),
            encrypt: function (cipher, message, key, cfg) {
                cfg = this.cfg.extend(cfg);
                var encryptor = cipher.createEncryptor(key, cfg);
                var ciphertext = encryptor.finalize(message);
                var cipherCfg = encryptor.cfg;
                return CipherParams.create({
                    ciphertext: ciphertext,
                    key: key,
                    iv: cipherCfg.iv,
                    algorithm: cipher,
                    mode: cipherCfg.mode,
                    padding: cipherCfg.padding,
                    blockSize: cipher.blockSize,
                    formatter: cfg.format
                });
            }, decrypt: function (cipher, ciphertext, key, cfg) {
                cfg = this.cfg.extend(cfg);
                ciphertext = this._parse(ciphertext, cfg.format);
                var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
                return plaintext;
            }, _parse: function (ciphertext, format) {
                if (typeof ciphertext == 'string') {
                    return format.parse(ciphertext, this);
                } else {
                    return ciphertext;
                }
            }
        });
        var C_kdf = C.kdf = {};
        var OpenSSLKdf = C_kdf.OpenSSL = {
            execute: function (password, keySize, ivSize, salt) {
                if (!salt) {
                    salt = WordArray.random(64 / 8);
                }
                var key = EvpKDF.create({
                    keySize: keySize + ivSize
                }).compute(password, salt);
                var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
                key.sigBytes = keySize * 4;
                return CipherParams.create({
                    key: key,
                    iv: iv,
                    salt: salt
                });
            }
        };
        var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
            cfg: SerializableCipher.cfg.extend({
                kdf: OpenSSLKdf
            }),
            encrypt: function (cipher, message, password, cfg) {
                cfg = this.cfg.extend(cfg);
                var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);
                cfg.iv = derivedParams.iv;
                var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);
                ciphertext.mixIn(derivedParams);
                return ciphertext;
            }, decrypt: function (cipher, ciphertext, password, cfg) {
                cfg = this.cfg.extend(cfg);
                ciphertext = this._parse(ciphertext, cfg.format);
                var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);
                cfg.iv = derivedParams.iv;
                var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
                return plaintext;
            }
        });
    }());
    
    CryptoJS.mode.ECB = (function () {
        var ECB = CryptoJS.lib.BlockCipherMode.extend();
        ECB.Encryptor = ECB.extend({
            processBlock: function (words, offset) {
                this._cipher.encryptBlock(words, offset);
            }
        });
        ECB.Decryptor = ECB.extend({
            processBlock: function (words, offset) {
                this._cipher.decryptBlock(words, offset);
            }
        });
        return ECB;
    }());
    
    (function () {
        var C = CryptoJS;
        var C_lib = C.lib;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        var SBOX = [];
        var INV_SBOX = [];
        var SUB_MIX_0 = [];
        var SUB_MIX_1 = [];
        var SUB_MIX_2 = [];
        var SUB_MIX_3 = [];
        var INV_SUB_MIX_0 = [];
        var INV_SUB_MIX_1 = [];
        var INV_SUB_MIX_2 = [];
        var INV_SUB_MIX_3 = [];
        (function () {
            var d = [];
            for (var i = 0; i < 256; i++) {
                if (i < 128) {
                    d[i] = i << 1;
                } else {
                    d[i] = (i << 1) ^ 0x11b;
                }
            }
            var x = 0;
            var xi = 0;
            for (var i = 0; i < 256; i++) {
                var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
                sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
                SBOX[x] = sx;
                INV_SBOX[sx] = x;
                var x2 = d[x];
                var x4 = d[x2];
                var x8 = d[x4];
                var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
                SUB_MIX_0[x] = (t << 24) | (t >>> 8);
                SUB_MIX_1[x] = (t << 16) | (t >>> 16);
                SUB_MIX_2[x] = (t << 8) | (t >>> 24);
                SUB_MIX_3[x] = t;
                var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
                INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
                INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
                INV_SUB_MIX_2[sx] = (t << 8) | (t >>> 24);
                INV_SUB_MIX_3[sx] = t;
                if (!x) {
                    x = xi = 1;
                } else {
                    x = x2 ^ d[d[d[x8 ^ x2]]];
                    xi ^= d[d[xi]];
                }
            }
        }());
        var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
        var AES = C_algo.AES = BlockCipher.extend({
            _doReset: function () {
                if (this._nRounds && this._keyPriorReset === this._key) {
                    return;
                }
                var key = this._keyPriorReset = this._key;
                var keyWords = key.words;
                var keySize = key.sigBytes / 4;
                var nRounds = this._nRounds = keySize + 6;
                var ksRows = (nRounds + 1) * 4;
                var keySchedule = this._keySchedule = [];
                for (var ksRow = 0; ksRow < ksRows; ksRow++) {
                    if (ksRow < keySize) {
                        keySchedule[ksRow] = keyWords[ksRow];
                    } else {
                        var t = keySchedule[ksRow - 1];
                        if (!(ksRow % keySize)) {
                            t = (t << 8) | (t >>> 24);
                            t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
                            t ^= RCON[(ksRow / keySize) | 0] << 24;
                        } else if (keySize > 6 && ksRow % keySize == 4) {
                            t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
                        }
                        keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
                    }
                }
                var invKeySchedule = this._invKeySchedule = [];
                for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
                    var ksRow = ksRows - invKsRow;
                    if (invKsRow % 4) {
                        var t = keySchedule[ksRow];
                    } else {
                        var t = keySchedule[ksRow - 4];
                    } if (invKsRow < 4 || ksRow <= 4) {
                        invKeySchedule[invKsRow] = t;
                    } else {
                        invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^ INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
                    }
                }
            }, encryptBlock: function (M, offset) {
                this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
            }, decryptBlock: function (M, offset) {
                var t = M[offset + 1];
                M[offset + 1] = M[offset + 3];
                M[offset + 3] = t;
                this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);
                var t = M[offset + 1];
                M[offset + 1] = M[offset + 3];
                M[offset + 3] = t;
            }, _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
                var nRounds = this._nRounds;
                var s0 = M[offset] ^ keySchedule[0];
                var s1 = M[offset + 1] ^ keySchedule[1];
                var s2 = M[offset + 2] ^ keySchedule[2];
                var s3 = M[offset + 3] ^ keySchedule[3];
                var ksRow = 4;
                for (var round = 1; round < nRounds; round++) {
                    var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
                    var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
                    var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
                    var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];
                    s0 = t0;
                    s1 = t1;
                    s2 = t2;
                    s3 = t3;
                }
                var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
                var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
                var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
                var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];
                M[offset] = t0;
                M[offset + 1] = t1;
                M[offset + 2] = t2;
                M[offset + 3] = t3;
            }, keySize: 256 / 32
        });
        C.AES = BlockCipher._createHelper(AES);
    }());
    
      function btoa(r) {
        e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        for (var o, n, a = String(r), i = 0, c = e, d = ""; a.charAt(0 | i) || (c = "=", i % 1); d += c.charAt(63 & o >> 8 - i % 1 * 8)) {
            if (n = a.charCodeAt(i += .75), n > 255)throw new t("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
            o = o << 8 | n
        }
        return d
    }
    
    function AES_Encrypt(word, e) {
        var key = CryptoJS.enc.Utf8.parse(btoa(e).slice(0, 16));
        var srcs = CryptoJS.enc.Utf8.parse(word);
        var encrypted = CryptoJS.AES.encrypt(srcs, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    }
    
    function AES_Decrypt(word) {
        var srcs = word;
        var decrypt = CryptoJS.AES.decrypt(srcs, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    }
""")

k = []
tt = int(time.time())
for i in range(0, 4):
    k.append(et.call('b', int(str(tt) + '000') + i * 2000))

e = int(time.time() * 1000)
h = et.call('b', e)
k.append(h)
RM4hZBv0dDon443M = et.call('AES_Encrypt', ",".join(k), e)
print(RM4hZBv0dDon443M)

sum_list = []
for i in range(1, 6):
    response = requests.get(
        url=f"http://match.yuanrenxue.com/api/match/5?page={i}&m={e}&f={int(str(int(time.time())) + '000')}", cookies={
            'RM4hZBv0dDon443M': RM4hZBv0dDon443M
        }).text
    print(response)
    res = json.loads(response)

    for _i in res['data']:
        value = _i['value']
        sum_list.append(value)

print(sum(sorted(sum_list, reverse=True)[0:5]))
