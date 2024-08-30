
// 极验轨迹加密

var dd = [["move", [340, 391],0], ["move", [2, 0], 8], ["move", [0,0],5], ["move", [1, 0], 12], ["move", [1,0 ],4 ], ["move", [2, 0], 25], ["move", [2, 0], 16], ["move", [2, 0], 9], ["move", [0, 0], 16], ["move", [4, 0], 7], ["move", [4, -1], 10], ["move", [4, -2], 7], ["move", [4, -1], 10], ["move", [3, -2], 5], ["move", [4, -3], 10], ["move", [2, -1], 6], ["move", [0, -1], 10], ["move", [2, -2], 6], ["move", [1, -1], 16], ["move", [-3, 1], 16], ["move", [-2, 2], 16], ["move", [-1, 1], 1], ["move", [-1, 0], 11], ["move", [0, 1], 128], ["move", [-1, 1], 8], ["move", [-1, 3], 6], ["move", [-1, 2], 9], ["move", [0, 0], 5], ["move", [0, 1], 17], ["move", [0, 1], 10], ["move", [0, 2], 16], ["move", [0, 0], 6], ["move", [0, 1], 8], ["move", [0, 1], 7], ["move", [1, 2], 8], ["move", [1, 2], 9], ["move", [0, 2], 63], ["move", [0, 1], 8], ["move", [-1, 1], 17], ["move", [-3, 1], 24], ["move", [0, 1], 7], ["move", [0, 0], 49], ["move", [0, 1], 23], ["move", [0, 0], 41], ["move", [2, 0], 22], ["move", [2, -1], 28], ["move", [0, 0], 14], ["move", [3, 0], 7], ["move", [2, -1], 10], ["move", [3, -1], 7], ["move", [2, 0], 8], ["move", [8, -3], 18], ["move", [5, -2], 7], ["blur", 1262], ["move", [1, -3], 768], ["move", [-11, 0], 7], ["move", [-12, 2], 9], ["move", [-12, 3], 12], ["move", [-12, 2], 4], ["move", [-12, 2], 8], ["move", [-11, 2], 9], ["move", [-10, 3], 14], ["move", [-10, 1], 3], ["move", [-10, 3], 9], ["move", [-9, 2], 8], ["move", [-8, 1], 5], ["move", [-9, 2], 9], ["move", [-6, 2], 6], ["move", [-5, 1], 9], ["move", [-6, 3], 7], ["move", [-5, 1], 10], ["move", [-4, 2], 6], ["move", [-4, 1], 11], ["move", [-4, 0], 5], ["move", [-4, 0], 11], ["move", [-4, 0], 5], ["move", [-4, 0], 11], ["move", [-3, 0], 5], ["move", [-4, 0], 10], ["move", [-4, 0], 7], ["move", [-3, 0], 8], ["move", [-2, 0], 8], ["move", [-4, 0], 7], ["move", [-4, 0], 9], ["move", [-4, 0], 7], ["move", [-3, 0], 9], ["move", [-2, 0], 7], ["move", [-3, 1], 9], ["move", [-1, 0], 7], ["move", [-2, 0], 18], ["move", [-1, 1], 7], ["move", [-1, 1], 7], ["focus", 114], ["down", [-1, 0], 1], ["focus", 1], ["up", [0, 0], 110]]

var p = {
    "\u006d\u006f\u0076\u0065": 0,
    "\u0064\u006f\u0077\u006e": 1,
    "\u0075\u0070": 2,
    "\u0073\u0063\u0072\u006f\u006c\u006c": 3,
    "\u0066\u006f\u0063\u0075\u0073": 4,
    "\u0062\u006c\u0075\u0072": 5,
    "\u0075\u006e\u006c\u006f\u0061\u0064": 6,
    "\u0075\u006e\u006b\u006e\u006f\u0077\u006e": 7
};
var d = 8;
function Tr_F(e, t) {
    var r = e.toString(2);
    var n = r.length;
    var i = "";
    for (var o = n + 1; o <= t; o = o + 1) {
        i += "0";
    }
    r = i + r;
    return r;

}
function g(e) {
    var t = [];
    var r = e.length;
    var n = 0;
    while (n < r) {
        var i = e[n];
        var o = 0;
        while (true) {
            if (o >= 1 << 4) {
                break;
            }
            var a = n + o + 1;
            if (a >= r) {
                break;
            }
            var s = e[a];
            if (s !== i) {
                break;
            }
            o += 1;
        }
        n = n + 1 + o;
        var _ = p[i];
        if (o != 0) {
            t.push(_ | d);
            t.push(o - 1);
        } else {
            t.push(_);
        }
    }
    var c = Tr_F(r | 32768, 16);
    var l = "";
    for (var u = 0, f = t.length; u < f; u = u + 1) {
        l += Tr_F(t[u], 4);
    }
    return c + l;

}
function WaSD(e) {

    var t = (1 << 15) - 1;
    e = UyHc(e, function(e) {

        if (e > t) {
            return t;
        } else if (e < -t) {
            return -t;
        }
        return e;
    });
    var r = e.length;
    var n = 0;
    var i = [];
    while (n < r) {
        var o = 1;
        var a = e[n];
        var s = Math.abs(a);
        while (true) {
            if (n + o >= r) {
                break;
            }
            if (e[n + o] !== a) {
                break;
            }
            if (s >= 127 || o >= 127) {
                break;
            }
            o += 1;
        }
        if (o > 1) {
            i.push((a < 0 ? 49152 : 32768) | o << 7 | s);
        } else {
            i.push(a);
        }
        n += o;
    }
    return i;

}
function UyHc(e, t) {

    var r = [];
    for (var n = 0, i = e.length; n < i; n = n + 1) {
        r.push(t(e[n]));
    }
    return r;

}
function XyMI(e, t) {

    if (e === 0) {
        return 0;
    }
    return Math.log(e) / Math.log(t);

}
function VySC(e, t) {

    var r = [];
    UyHc(e, function(e) {

        if (t(e)) {
            r.push(e);
        }
    });
    return r;

}
function YlIj(e, t) {
    e = WaSD(e);
    var r = [], n = [], i;
    UyHc(e, function(e) {

        var t = Math.ceil(XyMI(Math.abs(e) + 1, 16));
        if (t === 0) {
            t = 1;
        }
        r.push(Tr_F(t - 1, 2));
        n.push(Tr_F(Math.abs(e), t * 4));
    });
    var o = r.join("");
    var a = n.join("");
    if (!t) {
        i = "";
    } else {
        i = UyHc(VySC(e, function(e) {

            return e != 0 && e >> 15 != 1;
        }), function(e) {

            return e < 0 ? "1" : "0";
        })["join"]("");
    }
    var s = Tr_F(e.length | 32768, 16);
    return s + o + a + i;


}
function SwsR(e) {
    var i = "()*,-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~"
    var t = "";
    var r = e.length / 6;
    for (var n = 0; n < r; n = n + 1) {
        t += i.charAt(parseInt(e.slice(n * 6, (n + 1) * 6), 2));
    }
    return t;

}
function tt(e) {
    var t = [];
    var r = [];
    var n = [];
    var i = [];
    for (var o = 0, a = e.length; o < a; o = o + 1) {
        var s = e[o];
        var _ = s.length;
        t.push(s[0]);
        r.push(_ === 2 ? s[1] : s[2]);
        if (_ === 3) {
            n.push(s[1][0]);
            i.push(s[1][1]);
        }
    }
    var c = g(t);
    var l = YlIj(r, false);
    var u = YlIj(n, true);
    var f = YlIj(i, true);
    var p = c + l + u + f;
    var d = p.length;
    if (d % 6 != 0) {
        p += Tr_F(0, 6 - d % 6);
    }
    return SwsR(p);
}
console.log(tt(dd))


