/*! For license information please see 40911637211cf2b729f3e14e8c8267dc-v2.js.LICENSE.txt */
"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [290], {
        AO6K: e => {
            var r = Object.getOwnPropertySymbols,
                t = Object.prototype.hasOwnProperty,
                n = Object.prototype.propertyIsEnumerable;

            function c(e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }
            e.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var r = {}, t = 0; t < 10; t++) r["_" + String.fromCharCode(t)] = t;
                    if ("0123456789" !== Object.getOwnPropertyNames(r).map((function(e) {
                            return r[e]
                        })).join("")) return !1;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        n[e] = e
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (e) {
                    return !1
                }
            }() ? Object.assign : function(e, o) {
                for (var a, i, s = c(e), f = 1; f < arguments.length; f++) {
                    for (var b in a = Object(arguments[f])) t.call(a, b) && (s[b] = a[b]);
                    if (r) {
                        i = r(a);
                        for (var u = 0; u < i.length; u++) n.call(a, i[u]) && (s[i[u]] = a[i[u]])
                    }
                }
                return s
            }
        }
    }
]);