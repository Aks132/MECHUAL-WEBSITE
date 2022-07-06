"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [9794], {
        xIYY: (n, e, r) => {
            r.d(e, {
                zt: () => f,
                $j: () => K,
                I0: () => V,
                v9: () => Q,
                oR: () => _
            });
            var t = r("3Z9q"),
                o = (r("dwup"), t.createContext(null));
            var u = function(n) {
                    n()
                },
                a = function() {
                    return u
                };
            var i = {
                notify: function() {},
                get: function() {
                    return []
                }
            };

            function c(n, e) {
                var r, t = i;

                function o() {
                    c.onStateChange && c.onStateChange()
                }

                function u() {
                    r || (r = e ? e.addNestedSub(o) : n.subscribe(o), t = function() {
                        var n = a(),
                            e = null,
                            r = null;
                        return {
                            clear: function() {
                                e = null, r = null
                            },
                            notify: function() {
                                n((function() {
                                    for (var n = e; n;) n.callback(), n = n.next
                                }))
                            },
                            get: function() {
                                for (var n = [], r = e; r;) n.push(r), r = r.next;
                                return n
                            },
                            subscribe: function(n) {
                                var t = !0,
                                    o = r = {
                                        callback: n,
                                        next: null,
                                        prev: r
                                    };
                                return o.prev ? o.prev.next = o : e = o,
                                    function() {
                                        t && null !== e && (t = !1, o.next ? o.next.prev = o.prev : r = o.prev, o.prev ? o.prev.next = o.next : e = o.next)
                                    }
                            }
                        }
                    }())
                }
                var c = {
                    addNestedSub: function(n) {
                        return u(), t.subscribe(n)
                    },
                    notifyNestedSubs: function() {
                        t.notify()
                    },
                    handleChangeWrapper: o,
                    isSubscribed: function() {
                        return Boolean(r)
                    },
                    trySubscribe: u,
                    tryUnsubscribe: function() {
                        r && (r(), r = void 0, t.clear(), t = i)
                    },
                    getListeners: function() {
                        return t
                    }
                };
                return c
            }
            var s = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? t.useLayoutEffect : t.useEffect;
            const f = function(n) {
                var e = n.store,
                    r = n.context,
                    u = n.children,
                    a = (0, t.useMemo)((function() {
                        var n = c(e);
                        return n.onStateChange = n.notifyNestedSubs, {
                            store: e,
                            subscription: n
                        }
                    }), [e]),
                    i = (0, t.useMemo)((function() {
                        return e.getState()
                    }), [e]);
                s((function() {
                    var n = a.subscription;
                    return n.trySubscribe(), i !== e.getState() && n.notifyNestedSubs(),
                        function() {
                            n.tryUnsubscribe(), n.onStateChange = null
                        }
                }), [a, i]);
                var f = r || o;
                return t.createElement(f.Provider, {
                    value: a
                }, u)
            };
            var p = r("D4hk"),
                d = r("ZIdS"),
                l = r("ayc9"),
                v = r.n(l),
                m = r("lmwt"),
                h = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"],
                y = ["reactReduxForwardedRef"],
                b = [],
                P = [null, null];

            function g(n, e) {
                var r = n[1];
                return [e.payload, r + 1]
            }

            function w(n, e, r) {
                s((function() {
                    return n.apply(void 0, e)
                }), r)
            }

            function S(n, e, r, t, o, u, a) {
                n.current = t, e.current = o, r.current = !1, u.current && (u.current = null, a())
            }

            function C(n, e, r, t, o, u, a, i, c, s) {
                if (n) {
                    var f = !1,
                        p = null,
                        d = function() {
                            if (!f) {
                                var n, r, d = e.getState();
                                try {
                                    n = t(d, o.current)
                                } catch (n) {
                                    r = n, p = n
                                }
                                r || (p = null), n === u.current ? a.current || c() : (u.current = n, i.current = n, a.current = !0, s({
                                    type: "STORE_UPDATED",
                                    payload: {
                                        error: r
                                    }
                                }))
                            }
                        };
                    r.onStateChange = d, r.trySubscribe(), d();
                    return function() {
                        if (f = !0, r.tryUnsubscribe(), r.onStateChange = null, p) throw p
                    }
                }
            }
            var O = function() {
                return [null, 0]
            };

            function E(n, e) {
                void 0 === e && (e = {});
                var r = e,
                    u = r.getDisplayName,
                    a = void 0 === u ? function(n) {
                        return "ConnectAdvanced(" + n + ")"
                    } : u,
                    i = r.methodName,
                    s = void 0 === i ? "connectAdvanced" : i,
                    f = r.renderCountProp,
                    l = void 0 === f ? void 0 : f,
                    E = r.shouldHandleStateChanges,
                    M = void 0 === E || E,
                    x = r.storeKey,
                    N = void 0 === x ? "store" : x,
                    R = (r.withRef, r.forwardRef),
                    T = void 0 !== R && R,
                    q = r.context,
                    D = void 0 === q ? o : q,
                    k = (0, d.Z)(r, h),
                    Z = D;
                return function(e) {
                    var r = e.displayName || e.name || "Component",
                        o = a(r),
                        u = (0, p.Z)({}, k, {
                            getDisplayName: a,
                            methodName: s,
                            renderCountProp: l,
                            shouldHandleStateChanges: M,
                            storeKey: N,
                            displayName: o,
                            wrappedComponentName: r,
                            WrappedComponent: e
                        }),
                        i = k.pure;
                    var f = i ? t.useMemo : function(n) {
                        return n()
                    };

                    function h(r) {
                        var o = (0, t.useMemo)((function() {
                                var n = r.reactReduxForwardedRef,
                                    e = (0, d.Z)(r, y);
                                return [r.context, n, e]
                            }), [r]),
                            a = o[0],
                            i = o[1],
                            s = o[2],
                            l = (0, t.useMemo)((function() {
                                return a && a.Consumer && (0, m.isContextConsumer)(t.createElement(a.Consumer, null)) ? a : Z
                            }), [a, Z]),
                            v = (0, t.useContext)(l),
                            h = Boolean(r.store) && Boolean(r.store.getState) && Boolean(r.store.dispatch);
                        Boolean(v) && Boolean(v.store);
                        var E = h ? r.store : v.store,
                            x = (0, t.useMemo)((function() {
                                return function(e) {
                                    return n(e.dispatch, u)
                                }(E)
                            }), [E]),
                            N = (0, t.useMemo)((function() {
                                if (!M) return P;
                                var n = c(E, h ? null : v.subscription),
                                    e = n.notifyNestedSubs.bind(n);
                                return [n, e]
                            }), [E, h, v]),
                            R = N[0],
                            T = N[1],
                            q = (0, t.useMemo)((function() {
                                return h ? v : (0, p.Z)({}, v, {
                                    subscription: R
                                })
                            }), [h, v, R]),
                            D = (0, t.useReducer)(g, b, O),
                            k = D[0][0],
                            B = D[1];
                        if (k && k.error) throw k.error;
                        var j = (0, t.useRef)(),
                            F = (0, t.useRef)(s),
                            U = (0, t.useRef)(),
                            H = (0, t.useRef)(!1),
                            A = f((function() {
                                return U.current && s === F.current ? U.current : x(E.getState(), s)
                            }), [E, k, s]);
                        w(S, [F, j, H, s, A, U, T]), w(C, [M, E, R, x, F, j, H, U, T, B], [E, R, x]);
                        var I = (0, t.useMemo)((function() {
                            return t.createElement(e, (0, p.Z)({}, A, {
                                ref: i
                            }))
                        }), [i, e, A]);
                        return (0, t.useMemo)((function() {
                            return M ? t.createElement(l.Provider, {
                                value: q
                            }, I) : I
                        }), [l, I, q])
                    }
                    var E = i ? t.memo(h) : h;
                    if (E.WrappedComponent = e, E.displayName = h.displayName = o, T) {
                        var x = t.forwardRef((function(n, e) {
                            return t.createElement(E, (0, p.Z)({}, n, {
                                reactReduxForwardedRef: e
                            }))
                        }));
                        return x.displayName = o, x.WrappedComponent = e, v()(x, e)
                    }
                    return v()(E, e)
                }
            }

            function M(n, e) {
                return n === e ? 0 !== n || 0 !== e || 1 / n == 1 / e : n != n && e != e
            }

            function x(n, e) {
                if (M(n, e)) return !0;
                if ("object" != typeof n || null === n || "object" != typeof e || null === e) return !1;
                var r = Object.keys(n),
                    t = Object.keys(e);
                if (r.length !== t.length) return !1;
                for (var o = 0; o < r.length; o++)
                    if (!Object.prototype.hasOwnProperty.call(e, r[o]) || !M(n[r[o]], e[r[o]])) return !1;
                return !0
            }

            function N(n) {
                return function(e, r) {
                    var t = n(e, r);

                    function o() {
                        return t
                    }
                    return o.dependsOnOwnProps = !1, o
                }
            }

            function R(n) {
                return null !== n.dependsOnOwnProps && void 0 !== n.dependsOnOwnProps ? Boolean(n.dependsOnOwnProps) : 1 !== n.length
            }

            function T(n, e) {
                return function(e, r) {
                    r.displayName;
                    var t = function(n, e) {
                        return t.dependsOnOwnProps ? t.mapToProps(n, e) : t.mapToProps(n)
                    };
                    return t.dependsOnOwnProps = !0, t.mapToProps = function(e, r) {
                        t.mapToProps = n, t.dependsOnOwnProps = R(n);
                        var o = t(e, r);
                        return "function" == typeof o && (t.mapToProps = o, t.dependsOnOwnProps = R(o), o = t(e, r)), o
                    }, t
                }
            }
            const q = [function(n) {
                return "function" == typeof n ? T(n) : void 0
            }, function(n) {
                return n ? void 0 : N((function(n) {
                    return {
                        dispatch: n
                    }
                }))
            }, function(n) {
                return n && "object" == typeof n ? N((function(e) {
                    return function(n, e) {
                        var r = {},
                            t = function(t) {
                                var o = n[t];
                                "function" == typeof o && (r[t] = function() {
                                    return e(o.apply(void 0, arguments))
                                })
                            };
                        for (var o in n) t(o);
                        return r
                    }(n, e)
                })) : void 0
            }];
            const D = [function(n) {
                return "function" == typeof n ? T(n) : void 0
            }, function(n) {
                return n ? void 0 : N((function() {
                    return {}
                }))
            }];

            function k(n, e, r) {
                return (0, p.Z)({}, r, n, e)
            }
            const Z = [function(n) {
                return "function" == typeof n ? function(n) {
                    return function(e, r) {
                        r.displayName;
                        var t, o = r.pure,
                            u = r.areMergedPropsEqual,
                            a = !1;
                        return function(e, r, i) {
                            var c = n(e, r, i);
                            return a ? o && u(c, t) || (t = c) : (a = !0, t = c), t
                        }
                    }
                }(n) : void 0
            }, function(n) {
                return n ? void 0 : function() {
                    return k
                }
            }];
            var B = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];

            function j(n, e, r, t) {
                return function(o, u) {
                    return r(n(o, u), e(t, u), u)
                }
            }

            function F(n, e, r, t, o) {
                var u, a, i, c, s, f = o.areStatesEqual,
                    p = o.areOwnPropsEqual,
                    d = o.areStatePropsEqual,
                    l = !1;

                function v(o, l) {
                    var v, m, h = !p(l, a),
                        y = !f(o, u);
                    return u = o, a = l, h && y ? (i = n(u, a), e.dependsOnOwnProps && (c = e(t, a)), s = r(i, c, a)) : h ? (n.dependsOnOwnProps && (i = n(u, a)), e.dependsOnOwnProps && (c = e(t, a)), s = r(i, c, a)) : y ? (v = n(u, a), m = !d(v, i), i = v, m && (s = r(i, c, a)), s) : s
                }
                return function(o, f) {
                    return l ? v(o, f) : (i = n(u = o, a = f), c = e(t, a), s = r(i, c, a), l = !0, s)
                }
            }

            function U(n, e) {
                var r = e.initMapStateToProps,
                    t = e.initMapDispatchToProps,
                    o = e.initMergeProps,
                    u = (0, d.Z)(e, B),
                    a = r(n, u),
                    i = t(n, u),
                    c = o(n, u);
                return (u.pure ? F : j)(a, i, c, n, u)
            }
            var H = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];

            function A(n, e, r) {
                for (var t = e.length - 1; t >= 0; t--) {
                    var o = e[t](n);
                    if (o) return o
                }
                return function(e, t) {
                    throw new Error("Invalid value of type " + typeof n + " for " + r + " argument when connecting component " + t.wrappedComponentName + ".")
                }
            }

            function I(n, e) {
                return n === e
            }

            function W(n) {
                var e = void 0 === n ? {} : n,
                    r = e.connectHOC,
                    t = void 0 === r ? E : r,
                    o = e.mapStateToPropsFactories,
                    u = void 0 === o ? D : o,
                    a = e.mapDispatchToPropsFactories,
                    i = void 0 === a ? q : a,
                    c = e.mergePropsFactories,
                    s = void 0 === c ? Z : c,
                    f = e.selectorFactory,
                    l = void 0 === f ? U : f;
                return function(n, e, r, o) {
                    void 0 === o && (o = {});
                    var a = o,
                        c = a.pure,
                        f = void 0 === c || c,
                        v = a.areStatesEqual,
                        m = void 0 === v ? I : v,
                        h = a.areOwnPropsEqual,
                        y = void 0 === h ? x : h,
                        b = a.areStatePropsEqual,
                        P = void 0 === b ? x : b,
                        g = a.areMergedPropsEqual,
                        w = void 0 === g ? x : g,
                        S = (0, d.Z)(a, H),
                        C = A(n, u, "mapStateToProps"),
                        O = A(e, i, "mapDispatchToProps"),
                        E = A(r, s, "mergeProps");
                    return t(l, (0, p.Z)({
                        methodName: "connect",
                        getDisplayName: function(n) {
                            return "Connect(" + n + ")"
                        },
                        shouldHandleStateChanges: Boolean(n),
                        initMapStateToProps: C,
                        initMapDispatchToProps: O,
                        initMergeProps: E,
                        pure: f,
                        areStatesEqual: m,
                        areOwnPropsEqual: y,
                        areStatePropsEqual: P,
                        areMergedPropsEqual: w
                    }, S))
                }
            }
            const K = W();

            function L() {
                return (0, t.useContext)(o)
            }

            function Y(n) {
                void 0 === n && (n = o);
                var e = n === o ? L : function() {
                    return (0, t.useContext)(n)
                };
                return function() {
                    return e().store
                }
            }
            var _ = Y();

            function z(n) {
                void 0 === n && (n = o);
                var e = n === o ? _ : Y(n);
                return function() {
                    return e().dispatch
                }
            }
            var V = z(),
                $ = function(n, e) {
                    return n === e
                };

            function G(n) {
                void 0 === n && (n = o);
                var e = n === o ? L : function() {
                    return (0, t.useContext)(n)
                };
                return function(n, r) {
                    void 0 === r && (r = $);
                    var o = e(),
                        u = function(n, e, r, o) {
                            var u, a = (0, t.useReducer)((function(n) {
                                    return n + 1
                                }), 0)[1],
                                i = (0, t.useMemo)((function() {
                                    return c(r, o)
                                }), [r, o]),
                                f = (0, t.useRef)(),
                                p = (0, t.useRef)(),
                                d = (0, t.useRef)(),
                                l = (0, t.useRef)(),
                                v = r.getState();
                            try {
                                if (n !== p.current || v !== d.current || f.current) {
                                    var m = n(v);
                                    u = void 0 !== l.current && e(m, l.current) ? l.current : m
                                } else u = l.current
                            } catch (n) {
                                throw f.current && (n.message += "\nThe error may be correlated with this previous error:\n" + f.current.stack + "\n\n"), n
                            }
                            return s((function() {
                                p.current = n, d.current = v, l.current = u, f.current = void 0
                            })), s((function() {
                                function n() {
                                    try {
                                        var n = r.getState();
                                        if (n === d.current) return;
                                        var t = p.current(n);
                                        if (e(t, l.current)) return;
                                        l.current = t, d.current = n
                                    } catch (n) {
                                        f.current = n
                                    }
                                    a()
                                }
                                return i.onStateChange = n, i.trySubscribe(), n(),
                                    function() {
                                        return i.tryUnsubscribe()
                                    }
                            }), [r, i]), u
                        }(n, r, o.store, o.subscription);
                    return (0, t.useDebugValue)(u), u
                }
            }
            var J, Q = G(),
                X = r("AnwU");
            J = X.unstable_batchedUpdates, u = J
        }
    }
]);