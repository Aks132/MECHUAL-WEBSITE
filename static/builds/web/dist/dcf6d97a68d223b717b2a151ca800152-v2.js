/*! For license information please see dcf6d97a68d223b717b2a151ca800152-v2.js.LICENSE.txt */
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [1377], {
        "8Vqr": function(t, e, n) {
            var r;
            r = function() {
                "use strict";

                function t(t) {
                    return "function" == typeof t
                }
                var e = Array.isArray ? Array.isArray : function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    r = 0,
                    o = void 0,
                    i = void 0,
                    s = function(t, e) {
                        p[r] = t, p[r + 1] = e, 2 === (r += 2) && (i ? i(v) : w())
                    },
                    u = "undefined" != typeof window ? window : void 0,
                    c = u || {},
                    a = c.MutationObserver || c.WebKitMutationObserver,
                    f = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
                    l = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                function h() {
                    var t = setTimeout;
                    return function() {
                        return t(v, 1)
                    }
                }
                var p = new Array(1e3);

                function v() {
                    for (var t = 0; t < r; t += 2)(0, p[t])(p[t + 1]), p[t] = void 0, p[t + 1] = void 0;
                    r = 0
                }
                var _, d, y, b, w = void 0;

                function m(t, e) {
                    var n = arguments,
                        r = this,
                        o = new this.constructor(j);
                    void 0 === o[A] && L(o);
                    var i, u = r._state;
                    return u ? (i = n[u - 1], s((function() {
                        return D(u, o, i, r._result)
                    }))) : x(r, o, t, e), o
                }

                function g(t) {
                    if (t && "object" == typeof t && t.constructor === this) return t;
                    var e = new this(j);
                    return M(e, t), e
                }
                f ? w = function() {
                    return process.nextTick(v)
                } : a ? (d = 0, y = new a(v), b = document.createTextNode(""), y.observe(b, {
                    characterData: !0
                }), w = function() {
                    b.data = d = ++d % 2
                }) : l ? ((_ = new MessageChannel).port1.onmessage = v, w = function() {
                    return _.port2.postMessage(0)
                }) : w = void 0 === u ? function() {
                    try {
                        var t = n("PEqM");
                        return o = t.runOnLoop || t.runOnContext,
                            function() {
                                o(v)
                            }
                    } catch (t) {
                        return h()
                    }
                }() : h();
                var A = Math.random().toString(36).substring(16);

                function j() {}
                var E = void 0,
                    S = new q;

                function k(t) {
                    try {
                        return t.then
                    } catch (t) {
                        return S.error = t, S
                    }
                }

                function C(e, n, r) {
                    n.constructor === e.constructor && r === m && n.constructor.resolve === g ? function(t, e) {
                        1 === e._state ? P(t, e._result) : 2 === e._state ? O(t, e._result) : x(e, void 0, (function(e) {
                            return M(t, e)
                        }), (function(e) {
                            return O(t, e)
                        }))
                    }(e, n) : r === S ? O(e, S.error) : void 0 === r ? P(e, n) : t(r) ? function(t, e, n) {
                        s((function(t) {
                            var r = !1,
                                o = function(t, e, n, r) {
                                    try {
                                        t.call(e, n, r)
                                    } catch (t) {
                                        return t
                                    }
                                }(n, e, (function(n) {
                                    r || (r = !0, e !== n ? M(t, n) : P(t, n))
                                }), (function(e) {
                                    r || (r = !0, O(t, e))
                                }), t._label);
                            !r && o && (r = !0, O(t, o))
                        }), t)
                    }(e, n, r) : P(e, n)
                }

                function M(t, e) {
                    var n;
                    t === e ? O(t, new TypeError("You cannot resolve a promise with itself")) : "function" == typeof(n = e) || "object" == typeof n && null !== n ? C(t, e, k(e)) : P(t, e)
                }

                function T(t) {
                    t._onerror && t._onerror(t._result), Y(t)
                }

                function P(t, e) {
                    t._state === E && (t._result = e, t._state = 1, 0 !== t._subscribers.length && s(Y, t))
                }

                function O(t, e) {
                    t._state === E && (t._state = 2, t._result = e, s(T, t))
                }

                function x(t, e, n, r) {
                    var o = t._subscribers,
                        i = o.length;
                    t._onerror = null, o[i] = e, o[i + 1] = n, o[i + 2] = r, 0 === i && t._state && s(Y, t)
                }

                function Y(t) {
                    var e = t._subscribers,
                        n = t._state;
                    if (0 !== e.length) {
                        for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) r = e[s], o = e[s + n], r ? D(n, r, o, i) : o(i);
                        t._subscribers.length = 0
                    }
                }

                function q() {
                    this.error = null
                }
                var F = new q;

                function D(e, n, r, o) {
                    var i = t(r),
                        s = void 0,
                        u = void 0,
                        c = void 0,
                        a = void 0;
                    if (i) {
                        if (s = function(t, e) {
                                try {
                                    return t(e)
                                } catch (t) {
                                    return F.error = t, F
                                }
                            }(r, o), s === F ? (a = !0, u = s.error, s = null) : c = !0, n === s) return void O(n, new TypeError("A promises callback cannot return that same promise."))
                    } else s = o, c = !0;
                    n._state !== E || (i && c ? M(n, s) : a ? O(n, u) : 1 === e ? P(n, s) : 2 === e && O(n, s))
                }
                var K = 0;

                function L(t) {
                    t[A] = K++, t._state = void 0, t._result = void 0, t._subscribers = []
                }

                function N(t, n) {
                    this._instanceConstructor = t, this.promise = new t(j), this.promise[A] || L(this.promise), e(n) ? (this._input = n, this.length = n.length, this._remaining = n.length, this._result = new Array(this.length), 0 === this.length ? P(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && P(this.promise, this._result))) : O(this.promise, new Error("Array Methods must be provided an Array"))
                }

                function U(t) {
                    this[A] = K++, this._result = this._state = void 0, this._subscribers = [], j !== t && ("function" != typeof t && function() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }(), this instanceof U ? function(t, e) {
                        try {
                            e((function(e) {
                                M(t, e)
                            }), (function(e) {
                                O(t, e)
                            }))
                        } catch (e) {
                            O(t, e)
                        }
                    }(this, t) : function() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }())
                }

                function V() {
                    var t = void 0;
                    if ("undefined" != typeof global) t = global;
                    else if ("undefined" != typeof self) t = self;
                    else try {
                        t = Function("return this")()
                    } catch (t) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var e = t.Promise;
                    if (e) {
                        var n = null;
                        try {
                            n = Object.prototype.toString.call(e.resolve())
                        } catch (t) {}
                        if ("[object Promise]" === n && !e.cast) return
                    }
                    t.Promise = U
                }
                return N.prototype._enumerate = function() {
                    for (var t = this.length, e = this._input, n = 0; this._state === E && n < t; n++) this._eachEntry(e[n], n)
                }, N.prototype._eachEntry = function(t, e) {
                    var n = this._instanceConstructor,
                        r = n.resolve;
                    if (r === g) {
                        var o = k(t);
                        if (o === m && t._state !== E) this._settledAt(t._state, e, t._result);
                        else if ("function" != typeof o) this._remaining--, this._result[e] = t;
                        else if (n === U) {
                            var i = new n(j);
                            C(i, t, o), this._willSettleAt(i, e)
                        } else this._willSettleAt(new n((function(e) {
                            return e(t)
                        })), e)
                    } else this._willSettleAt(r(t), e)
                }, N.prototype._settledAt = function(t, e, n) {
                    var r = this.promise;
                    r._state === E && (this._remaining--, 2 === t ? O(r, n) : this._result[e] = n), 0 === this._remaining && P(r, this._result)
                }, N.prototype._willSettleAt = function(t, e) {
                    var n = this;
                    x(t, void 0, (function(t) {
                        return n._settledAt(1, e, t)
                    }), (function(t) {
                        return n._settledAt(2, e, t)
                    }))
                }, U.all = function(t) {
                    return new N(this, t).promise
                }, U.race = function(t) {
                    var n = this;
                    return e(t) ? new n((function(e, r) {
                        for (var o = t.length, i = 0; i < o; i++) n.resolve(t[i]).then(e, r)
                    })) : new n((function(t, e) {
                        return e(new TypeError("You must pass an array to race."))
                    }))
                }, U.resolve = g, U.reject = function(t) {
                    var e = new this(j);
                    return O(e, t), e
                }, U._setScheduler = function(t) {
                    i = t
                }, U._setAsap = function(t) {
                    s = t
                }, U._asap = s, U.prototype = {
                    constructor: U,
                    then: m,
                    catch: function(t) {
                        return this.then(null, t)
                    }
                }, V(), U.polyfill = V, U.Promise = U, U
            }, t.exports = r()
        }
    }
]);