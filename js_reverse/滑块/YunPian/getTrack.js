var track = [];

function setTimeout(a, b) {
    let begin = 0, end = new Date().getTime() + b;
    while (begin < end) {
        begin = new Date().getTime();
    }
    return a()
}

const Tween = {
    Linear: function (t, b, c, d) {
        return c * t / d + b;
    },
    Quad: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    Cubic: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    Quart: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    Quint: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    Sine: function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    Expo: function (t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    Circ: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    Elastic: function (t, b, c, d, a, p) {
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    Back: function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    }

};

function move(t, c, d, se) {
    const fun = Tween.Elastic;
    let left = 0, time = 0, stime = 10;
    const startTime = new Date().getTime();
    let temp = false;

    function _run() {
        const cu = Math.random();
        let current;
        if (t < d) {
            t++;
            left = Math.ceil(fun(t, 0, c, d))
            if (left > c) {
                temp = true;
                cu < 0.6 ? (stime = Math.random() * 2 + 8) : (stime = Math.random() * 4 + 15);
            } else if (left >= 0 && left <= c) {
                if (left < 1) {
                    stime = Math.random() * 23;
                } else if (left < c * se[0]) { /* 5.36 */
                    cu < 0.8 ? (stime = Math.random() * 2 + 8) : (stime = Math.random() * 2 + 15);
                } else if (left < c * se[1]) {  /* 14.74 */
                    cu < 0.6 ? (stime = Math.random() * 3 + 7) : (stime = Math.random() * 3 + 15);
                } else if (left < c * se[2]) {  /* 28.81 */
                    cu < 0.5 ? (stime = Math.random() * 4 + 7) : (stime = Math.random() * 4 + 16);
                } else if (left < c * se[3]) {  /* 52.93 */
                    cu < 0.4 ? (stime = Math.random() * 4 + 9) : (stime = Math.random() * 4 + 16);
                } else if (left < c * se[4]) {  /* 59.63 */
                    cu < 0.3 ? (stime = Math.random() * 4 + 13) : (stime = Math.random() * 23 + 17);
                } else if (left < c * se[5]) {  /* 66.93 */
                    cu < 0.2 ? (stime = Math.random() * 4 + 17) : (temp ? (stime = Math.random() * 10 + 40) : (stime = Math.random() * 6 + 17));
                } else {  /* 67 */
                    cu < 0.2 ? (stime = Math.random() * 4 + 17) : (temp ? (stime = Math.random() * 150 + 85) : (stime = Math.random() * 6 + 17));
                }
            } else {
                stime = 0
            }
            time += stime;
            current = new Date().getTime();
            track.push([left, 0, Math.ceil(time)]);
            setTimeout(_run, 0);
        } else {
            left = c;
            current = new Date().getTime();
            track.push([left, 0, Math.ceil(time)]);
        }
    }

    _run();
    return track
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function random_uniform(min, max) {
    return Math.random() * (max - min) + min;
}

// ???¨¦?¨¬??
function get_track(loc) {
    const scale_x = [
        [0.04, 0.15, 0.40, 0.76, 0.88, 0.98],
        [0.05, 0.20, 0.40, 0.78, 0.88, 0.98],
        [0.04, 0.20, 0.50, 0.70, 0.85, 0.98],
        [0.06, 0.24, 0.47, 0.80, 0.92, 0.98],
        [0.08, 0.22, 0.43, 0.79, 0.89, 0.97]
    ]
    let track = [[random(19, 33), random(20, 35), 0], [0, 0, 0]]
    if (loc / 50 < 1.5) {
        var sp = 1
    } else {
        var sp = Math.round(loc / 50)
    }
    if (sp <= 2) {
        var length = random(loc, loc * sp * 1.2)
    } else {
        var length = Math.round(loc * random_uniform(1.2, 1.5))
    }
    let scale = scale_x[random(0, 4)]
    let tracka = move(0, loc, length, scale)
    for (let i = 0; i < tracka.length; i++) {
        if (tracka[i][0] > -1) {
            track.push(tracka[i])
        }
    }
    for (let i = 0; i < track.length; i++) {
        track[i][0] += 914
        track[i][1] += 1702
    }
    while(track.length > 60){
        track.shift()
    }

    return JSON.stringify(track)
}

