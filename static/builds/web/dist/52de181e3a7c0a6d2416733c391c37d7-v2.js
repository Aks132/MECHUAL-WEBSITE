"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [9690], {
        MKPJ: r => {
            r.exports = function r(t, e) {
                if (t === e) return !0;
                if (t && e && "object" == typeof t && "object" == typeof e) {
                    if (t.constructor !== e.constructor) return !1;
                    var n, f, o;
                    if (Array.isArray(t)) {
                        if ((n = t.length) != e.length) return !1;
                        for (f = n; 0 != f--;)
                            if (!r(t[f], e[f])) return !1;
                        return !0
                    }
                    if (t.constructor === RegExp) return t.source === e.source && t.flags === e.flags;
                    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === e.valueOf();
                    if (t.toString !== Object.prototype.toString) return t.toString() === e.toString();
                    if ((n = (o = Object.keys(t)).length) !== Object.keys(e).length) return !1;
                    for (f = n; 0 != f--;)
                        if (!Object.prototype.hasOwnProperty.call(e, o[f])) return !1;
                    for (f = n; 0 != f--;) {
                        var u = o[f];
                        if (!r(t[u], e[u])) return !1
                    }
                    return !0
                }
                return t != t && e != e
            }
        }
    }
]);