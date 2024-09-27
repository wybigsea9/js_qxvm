var C = t => {
    try {
        return t < 10 ? t : (t = Math.floor(t / 10) + t % 10,
            C(t))
    } catch (e) {
        console.log(e)
    }
}
    , ae = t => {
    try {
        for (var e = [], l = 0, o = 0; o < t.length; o++)
            e.push(t[o]),
                o % 2 == 0 ? l += C(e[o] * 2) : l += C(e[o] * 3);
        return C(l).toString()
    } catch (a) {
        console.log(a)
    }
}
    , ue = function() {
    var t = new Date().getTime()
        , e = Math.floor(Math.random() * 100);
    e = e < 10 ? "0" + e : e.toString();
    var l = t + e;
    return l + ae(l)
};

function getTimeStamp(){
    var res = ue();
    return res
}
console.log("getTimeStamp=", getTimeStamp())