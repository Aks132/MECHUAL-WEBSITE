/*! For license information please see 7e4e9f7fca943df32465f0e0dbc3aac2-v2.js.LICENSE.txt */
"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [3453], {
        "NZ+i": (t, r, e) => {
            e.d(r, {
                ZT: () => o,
                pi: () => i,
                _T: () => c,
                XA: () => f,
                CR: () => a,
                fl: () => l
            });
            e("Oyie");
            var n = function(t, r) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, r) {
                    t.__proto__ = r
                } || function(t, r) {
                    for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
                }, n(t, r)
            };

            function o(t, r) {
                function e() {
                    this.constructor = t
                }
                n(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
            }
            var i = function() {
                return i = Object.assign || function(t) {
                    for (var r, e = 1, n = arguments.length; e < n; e++)
                        for (var o in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
                    return t
                }, i.apply(this, arguments)
            };

            function c(t, r) {
                var e = {};
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(t); o < n.length; o++) r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (e[n[o]] = t[n[o]])
                }
                return e
            }

            function f(t) {
                var r = "function" == typeof Symbol && Symbol.iterator,
                    e = r && t[r],
                    n = 0;
                if (e) return e.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && n >= t.length && (t = void 0), {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                };
                throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function a(t, r) {
                var e = "function" == typeof Symbol && t[Symbol.iterator];
                if (!e) return t;
                var n, o, i = e.call(t),
                    c = [];
                try {
                    for (;
                        (void 0 === r || r-- > 0) && !(n = i.next()).done;) c.push(n.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (e = i.return) && e.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return c
            }

            function l() {
                for (var t = [], r = 0; r < arguments.length; r++) t = t.concat(a(arguments[r]));
                return t
            }
        }
    }
]);