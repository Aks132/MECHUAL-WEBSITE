"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [7411, 109], {
        pfBE: (e, t, a) => {
            a.d(t, {
                Z: () => u
            });
            var n, r = a("HPk7"),
                i = a("/K0U"),
                o = a("eKF4"),
                s = a("cSHm"),
                c = a("jQKg"),
                l = i.Z.extend({
                    defaults: {
                        activitiesCount: 0,
                        modelsCount: 0
                    },
                    initialize: function() {
                        var e = this,
                            t = o.Z.me();
                        t.isAuthenticated() && t.canAccessFeature("ff_newsfeed_v2") && Promise.all([a.e(8807), a.e(1840)]).then(a.bind(a, "Afu4")).then((function(t) {
                            t.default.subscribeToActivities((0, r.Z)(e.refreshUnseenActivitiesCount.bind(e), 5e3)), setTimeout(e.refreshUnseenActivitiesCount.bind(e), 100)
                        }))
                    },
                    refreshUnseenActivitiesCount: function() {
                        var e = this;
                        l.getUnseenActivitiesCount().then((function(t) {
                            t !== e.get("activitiesCount") && (s.ZP.invalidate("/i/feeds"), e.set("activitiesCount", t))
                        }))
                    },
                    hasNewActivities: function() {
                        return Boolean(this.get("activitiesCount"))
                    }
                }, {
                    getSingleton: function() {
                        return n || (n = new l), n
                    },
                    seeActivities: function() {
                        return c.Z.seeActivities().then((function() {
                            l.getSingleton().set("activitiesCount", 0)
                        }))
                    },
                    readActivities: function(e) {
                        return c.Z.readActivities(e)
                    },
                    getUnseenActivitiesCount: function() {
                        return c.Z.getUnseenActivitiesCount()
                    }
                });
            const u = l
        },
        "560e": (e, t, a) => {
            a.d(t, {
                JM: () => m,
                n_: () => p,
                ZP: () => Z
            });
            var n, r = a("L0SH"),
                i = a("qD8I"),
                o = a("CUcO"),
                s = a("xKIK"),
                c = a("5hHH");

            function l(e, t) {
                var a = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!a) {
                    if (Array.isArray(e) || (a = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return u(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === a && e.constructor && (a = e.constructor.name);
                            if ("Map" === a || "Set" === a) return Array.from(e);
                            if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return u(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        a && (e = a);
                        var n = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, o = !0,
                    s = !1;
                return {
                    s: function() {
                        a = a.call(e)
                    },
                    n: function() {
                        var e = a.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        s = !0, i = e
                    },
                    f: function() {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function d(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(a), !0).forEach((function(t) {
                        (0, s.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : d(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }! function(e) {
                e.Push = "push", e.Replace = "replace", e.Reload = "reload", e.NoOp = "noOp"
            }(n || (n = {}));
            var f = 0,
                m = {
                    push: function(e) {
                        return {
                            type: n.Push,
                            onCreate: e
                        }
                    },
                    replace: function(e) {
                        return {
                            type: n.Replace,
                            onCreate: e
                        }
                    },
                    reload: function() {
                        return {
                            type: n.Reload
                        }
                    },
                    noOp: function() {
                        return {
                            type: n.NoOp
                        }
                    }
                },
                p = function() {
                    window.scrollTo(0, 0), window.location.reload()
                },
                Z = function() {
                    function e() {
                        var t = this;
                        (0, i.Z)(this, e), (0, s.Z)(this, "isFirstRouterRun", !0), (0, s.Z)(this, "routes", []), (0, s.Z)(this, "activeRoutesStack", []), (0, s.Z)(this, "handlingRoute", null), (0, s.Z)(this, "onHistoryChange", void 0);
                        var a = function(e, a) {
                                var n = {
                                    routeWasAdded: "ADD" === a
                                };
                                t.handlingRoute !== e && e.lifecycle.onStartHandling(n), t.handlingRoute = e
                            },
                            o = function(e) {
                                var n = t.activeRoutesStack[0];
                                n && function(e) {
                                    t.isFirstRouterRun = !1, t.handlingRoute === e && e.lifecycle.onStopHandling(), t.handlingRoute = null
                                }(n), t.activeRoutesStack.unshift(e), e.lifecycle.onCreate(), a(e, "ADD")
                            },
                            u = function(e) {
                                t.isFirstRouterRun = !1, e.lifecycle.onRemove(), t.activeRoutesStack = t.activeRoutesStack.filter((function(t) {
                                    return t !== e
                                }))
                            };
                        this.onHistoryChange = function(e, i) {
                            t.isFirstRouterRun && (t.isFirstRouterRun = ++f <= 1);
                            var s, c = l(t.routes);
                            try {
                                var d = function() {
                                    var r = s.value,
                                        c = r.name,
                                        d = r.test,
                                        f = r.handler,
                                        m = d(e).caseOf({
                                            None: function() {
                                                return !1
                                            },
                                            Some: function(e) {
                                                var r = v(v({}, i), {}, {
                                                        isHydration: function() {
                                                            return t.isFirstRouterRun
                                                        },
                                                        activeRoutes: t.activeRoutesStack
                                                    }),
                                                    s = f(e, r);
                                                switch (s.type) {
                                                    case n.Replace:
                                                    case n.Push:
                                                        return function(e, r, i) {
                                                            var s, c = l(t.activeRoutesStack);
                                                            try {
                                                                for (c.s(); !(s = c.n()).done;) {
                                                                    var d = s.value;
                                                                    if (d.test === e.test && (t.isFirstRouterRun = !1, d.lifecycle.onUpdate(r, i))) return void a(d, "UPDATE");
                                                                    (e.type === n.Replace || d.type === n.Push && i.isBack) && u(d)
                                                                }
                                                            } catch (e) {
                                                                c.e(e)
                                                            } finally {
                                                                c.f()
                                                            }
                                                            o(e)
                                                        }(function(e) {
                                                            var t = e.name,
                                                                a = e.test,
                                                                n = e.onCreate,
                                                                r = {
                                                                    type: e.type,
                                                                    name: t,
                                                                    test: a,
                                                                    lifecycle: {
                                                                        onRemove: function() {},
                                                                        onUpdate: function() {
                                                                            return !1
                                                                        },
                                                                        onStartHandling: function() {},
                                                                        onStopHandling: function() {},
                                                                        onCreate: function() {
                                                                            r.lifecycle = v(v({}, r.lifecycle), n.apply(void 0, arguments) || {})
                                                                        }
                                                                    }
                                                                };
                                                            return r
                                                        }({
                                                            type: s.type,
                                                            name: c,
                                                            test: d,
                                                            onCreate: s.onCreate
                                                        }), e, r), !0;
                                                    case "reload":
                                                        return p(), !0;
                                                    case "noOp":
                                                        return !0
                                                }
                                            }
                                        });
                                    if (m) return {
                                        v: void 0
                                    }
                                };
                                for (c.s(); !(s = c.n()).done;) {
                                    var m = d();
                                    if ("object" === (0, r.Z)(m)) return m.v
                                }
                            } catch (e) {
                                c.e(e)
                            } finally {
                                c.f()
                            }
                            i.isBack && p()
                        }, c.Z.listen(this.onHistoryChange)
                    }
                    return (0, o.Z)(e, [{
                        key: "add",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                            for (var n = 0, r = t; n < r.length; n++) {
                                var i = r[n];
                                this.routes.push(i)
                            }
                            return this
                        }
                    }, {
                        key: "start",
                        value: function() {
                            this.onHistoryChange(c.Z.getWindowUrl(), {
                                isBack: !1
                            })
                        }
                    }]), e
                }()
        },
        Foai: (e, t, a) => {
            a.d(t, {
                Bi: () => v,
                If: () => f
            });
            var n = a("orRi"),
                r = a.n(n),
                i = a("W/PJ"),
                o = a.n(i),
                s = a("eKF4"),
                c = a("oiZA"),
                l = s.Z.me().canAccessFeature("ff_theme"),
                u = ["default", "high-contrast"],
                d = void 0,
                v = function() {
                    var e = localStorage.getItem("theme");
                    d || ((d = document.createElement("style")).id = "theming", document.head.append(d));
                    var t = Object.keys(r()).reduce((function(t, a) {
                        var n = (0, c.Z)(a);
                        return "high-contrast" === e && o()[a] ? t.concat("--".concat(n, ": ").concat(o()[a], ";")) : t.concat("--".concat(n, ": ").concat(r()[a], ";"))
                    }), ":root {").concat("}");
                    d.textContent = t,
                        function(e) {
                            var t = document.getElementsByTagName("body")[0];
                            null != t && (t.classList.add("".concat(e, "-theme")), u.filter((function(t) {
                                return t !== e
                            })).forEach((function(e) {
                                t.classList.remove("".concat(e, "-theme"))
                            })))
                        }(e)
                },
                f = function(e) {
                    l && (e && localStorage.setItem("theme", e), v(), window.dispatchEvent(new Event("storage")))
                }
        },
        vxiz: (e, t, a) => {
            a.d(t, {
                K5: () => Z,
                ie: () => g,
                PW: () => _,
                no: () => N,
                ww: () => w,
                p4: () => b,
                v_: () => k
            });
            var n = a("xKIK"),
                r = a("rEmB"),
                i = a("cSHm"),
                o = a("lrhy"),
                s = a("560e"),
                c = a("3Z9q"),
                l = a("AnwU"),
                u = a("CfKk"),
                d = a("iu9k"),
                v = a("Vnou"),
                f = a("Oyie");

            function m(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(a), !0).forEach((function(t) {
                        (0, n.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : m(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var Z = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.EQ,
                        a = "string" == typeof e ? [e] : e;
                    return function(e) {
                        return a.reduce((function(a, n) {
                            return a.caseOf({
                                Some: function(e) {
                                    return (0, v.G)(e)
                                },
                                None: function() {
                                    var a = t(n, e);
                                    return a ? (0, v.G)(a) : v.Y
                                }
                            })
                        }), v.Y)
                    }
                },
                h = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z;
                    return function(a, n) {
                        return s.JM.replace((function() {
                            if (n.isHydration()) {
                                var r = f.resolve(e(a));
                                return {
                                    onStartHandling: function() {
                                        r.then((function(e) {
                                            return e.setOptions({
                                                isCurrentRoute: !0
                                            })
                                        }))
                                    },
                                    onStopHandling: function() {
                                        r.then((function(e) {
                                            return e.setOptions({
                                                isCurrentRoute: !1
                                            })
                                        }))
                                    },
                                    onUpdate: function(e) {
                                        if (t(a, e)) return !0;
                                        (0, s.n_)()
                                    },
                                    onRemove: function() {}
                                }
                            }(0, s.n_)()
                        }))
                    }
                },
                g = function(e, t) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = a.hasUpdated,
                        r = "string" == typeof e ? [e] : e;
                    return {
                        name: r.join(","),
                        test: Z(e),
                        handler: h(t, n)
                    }
                },
                _ = function(e, t) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = a.hasUpdated;
                    return {
                        name: e,
                        test: Z(e, d.KQ),
                        handler: h(t, n)
                    }
                },
                y = function(e) {
                    return function(t) {
                        return s.JM.replace((function() {
                            return e(t), {
                                onUpdate: function(t) {
                                    return e(t), !0
                                }
                            }
                        }))
                    }
                },
                N = function(e, t) {
                    return {
                        name: ("string" == typeof e ? [e] : e).join(","),
                        test: Z(e),
                        handler: y(t)
                    }
                },
                w = function(e, t) {
                    return {
                        name: e,
                        test: Z(e, d.KQ),
                        handler: y(t)
                    }
                },
                b = function(e, t) {
                    return function(a, n) {
                        return s.JM.replace((function() {
                            var d, v = {
                                    routeParams: a,
                                    isCurrentRoute: !0
                                },
                                m = function(e) {
                                    return n.isHydration() && i.ZP.hasInitialPropsOf(t) && (0, r.Z)(a, e)
                                },
                                Z = function(a) {
                                    return o.k3.fromPromise(m(a) ? f.resolve(i.ZP.getInitialPropsOf(t)) : e.prepare ? e.prepare({
                                        services: p(p({}, u.n2.services), {}, {
                                            dispatch: u.n2.store.dispatch,
                                            getState: u.n2.store.getState
                                        }),
                                        props: {
                                            routeParams: a,
                                            isCurrentRoute: !0
                                        },
                                        isServer: !1
                                    }) : f.resolve({}))
                                },
                                h = function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    v = p(p({}, v), t), d = Z(v.routeParams).then((function(t) {
                                        var r = document.getElementById("root");
                                        if (!r) return console.error("renderReactPage Error: no '#root' element found on page ".concat(name, " coming from ").concat(n.previousUrl, ". Reloading")), (0, s.n_)();
                                        var i = c.createElement(u.n2.Provider, null, c.createElement(e, p(p({}, v), t)));
                                        m(v.routeParams) ? (0, l.hydrate)(i, r) : (a && (0, l.unmountComponentAtNode)(r), (0, l.render)(i, r))
                                    })).catch((function(e) {
                                        return console.error("renderReactPage error:", e)
                                    }))
                                };
                            return {
                                onUpdate: function(e) {
                                    return h({
                                        routeParams: e
                                    }), !0
                                },
                                onStartHandling: function(e) {
                                    h({
                                        isCurrentRoute: !0
                                    }, e.routeWasAdded)
                                },
                                onStopHandling: function() {
                                    h({
                                        isCurrentRoute: !1
                                    })
                                },
                                onRemove: function() {
                                    d.cancel()
                                }
                            }
                        }))
                    }
                },
                k = function(e, t, a) {
                    return {
                        name: ("string" == typeof e ? [e] : e).join(","),
                        test: Z(e),
                        handler: b(t, a)
                    }
                }
        },
        "+Ouw": (e, t, a) => {
            a.d(t, {
                fK: () => i,
                mN: () => o,
                Cl: () => s,
                Ph: () => c,
                UY: () => l,
                oL: () => u,
                Xk: () => d,
                zZ: () => v,
                td: () => f
            });
            var n = a("TxBr"),
                r = [{
                    lowerBound: 7500,
                    minimum: 1e4,
                    save: "10",
                    coupon: "US10HBS2IU4CO"
                }, {
                    lowerBound: 17500,
                    minimum: 2e4,
                    save: "20",
                    coupon: "US20IUH4QOI7N"
                }, {
                    lowerBound: 45e3,
                    minimum: 5e4,
                    save: "25",
                    coupon: "US25QI6CONQ9S"
                }, {
                    lowerBound: 92500,
                    minimum: 1e5,
                    save: "30",
                    coupon: "US30SLJCBBQCK"
                }],
                i = function(e) {
                    return r.find((function(t) {
                        return t.save === e
                    }))
                },
                o = function(e) {
                    for (var t in r)
                        if (e >= r[t].lowerBound && e < r[t].minimum) return r[t];
                    return null
                },
                s = function() {
                    return n.ZP.get("sf_upsell_coupon")
                },
                c = function() {
                    n.ZP.get("sf_upsell_coupon") && n.ZP.remove("sf_upsell_coupon")
                },
                l = function(e) {
                    n.ZP.set("sf_upsell_coupon", e, {
                        expires: 6048e5
                    })
                },
                u = function() {
                    n.ZP.set("sf_first_purchase", "true", {
                        expires: 12096e5
                    })
                },
                d = function() {
                    return n.ZP.get("sf_first_purchase")
                },
                v = function(e, t) {
                    var a = s(),
                        n = i(a);
                    return e ? n && n.minimum <= t && Number(n.save) > 20 ? {
                        name: "upsell".concat(a),
                        value: n.coupon
                    } : {
                        name: "first purchase",
                        value: "FIRSTPURCHASE20"
                    } : n && n.minimum <= t ? {
                        name: "upsell".concat(a),
                        value: n.coupon
                    } : null
                },
                f = function(e) {
                    var t = s();
                    return t ? i(t) : o(e)
                }
        },
        pDOP: (e, t, a) => {
            a.d(t, {
                Z: () => r
            });
            var n = a("sQwH");
            a("3Z9q");
            const r = function(e) {
                var t = e.collection;
                return (0, n.Z)("span", {
                    className: "collection-name"
                }, void 0, (0, n.Z)("a", {
                    className: "label",
                    onClick: function(e) {
                        return e.stopPropagation()
                    },
                    href: t.collectionUrl,
                    title: t.name
                }, void 0, (0, n.Z)("data", {
                    itemProp: "name"
                }, void 0, t.name)))
            }
        },
        xkdo: (e, t, a) => {
            a.d(t, {
                T: () => l
            });
            var n = a("sQwH"),
                r = (a("3Z9q"), a("xIYY")),
                i = a("iu9k"),
                o = a("X40V"),
                s = a("CfKk"),
                c = a("vAnt");

            function l(e) {
                var t = e.label,
                    a = void 0 === t ? "login" : t,
                    l = e.className,
                    u = e.redirectUrl,
                    d = e.usageType,
                    v = e.buttonType,
                    f = void 0 === v ? "ninja" : v,
                    m = e.buttonSize,
                    p = void 0 === m ? "medium" : m,
                    Z = e.displayOrgSso,
                    h = (0, r.I0)();
                return (0, n.Z)(c.Z, {
                    "data-selenium": "login",
                    size: p,
                    type: f,
                    href: (0, i.HQ)("users:signin"),
                    className: (0, o.AK)("skfb-link", l),
                    onClick: function(e) {
                        e.preventDefault(), e.stopPropagation(), h(s.Nw.authUser.authenticate((function() {}), {
                            redirectUrl: u,
                            usageType: d,
                            initialForm: "login",
                            displayOrgSso: Z
                        }))
                    },
                    text: a
                })
            }
        },
        qNsD: (e, t, a) => {
            a.d(t, {
                Z: () => i
            });
            var n = a("sQwH"),
                r = (a("3Z9q"), a("X40V"));

            function i(e) {
                var t = e.className,
                    a = e.brand,
                    i = void 0 === a || a,
                    o = e.color,
                    s = void 0 === o ? "#555555" : o,
                    c = e.logoColor,
                    l = void 0 === c ? "#ffffff" : c,
                    u = e.circleColor,
                    d = void 0 === u ? r.O9.skfbBlue : u,
                    v = i ? 121 : 25;
                return (0, n.Z)("svg", {
                    className: (0, r.AK)("svg-logo", t),
                    version: "1.1",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    xmlSpace: "preserve",
                    x: "0",
                    y: "0",
                    viewBox: "0 0 ".concat(v, " 25"),
                    enableBackground: "new 0 0 ".concat(v, " 25")
                }, void 0, i ? (0, n.Z)("g", {
                    className: "logo-text"
                }, void 0, (0, n.Z)("path", {
                    fill: s,
                    d: "M36.471,7.719c-1.526,0-2.289,0.504-2.289,1.512c0,0.448,0.189,0.791,0.567,1.029 c0.378,0.238,1.263,0.582,2.656,1.029c1.393,0.448,2.37,0.956,2.93,1.522c0.56,0.567,0.84,1.438,0.84,2.615 c0,1.498-0.455,2.632-1.365,3.401c-0.911,0.771-2.1,1.155-3.57,1.155c-1.092,0-2.429-0.168-4.011-0.504l-0.756-0.147l0.294-2.247 c1.876,0.253,3.311,0.379,4.305,0.379c1.484,0,2.226-0.616,2.226-1.849c0-0.447-0.171-0.798-0.515-1.05s-1.025-0.525-2.047-0.819 c-1.624-0.462-2.769-1.011-3.434-1.648s-0.998-1.522-0.998-2.657c0-1.428,0.434-2.492,1.302-3.192c0.868-0.7,2.058-1.05,3.57-1.05 c1.036,0,2.352,0.14,3.948,0.42l0.756,0.147L40.65,8.056C38.676,7.832,37.283,7.719,36.471,7.719z"
                }), (0, n.Z)("path", {
                    fill: s,
                    d: "M46.068,19.731h-2.814v-14.7h2.814v8.358l1.071-0.189l2.079-3.969h3.15l-2.73,4.977l2.877,5.523h-3.171 l-2.121-4.095l-1.155,0.188V19.731z"
                }), (0, n.Z)("path", {
                    fill: s,
                    d: "M56.705,17.075c0.329,0.287,0.801,0.431,1.417,0.431c1.302,0,2.464-0.042,3.486-0.126l0.589-0.063 l0.041,2.079c-1.61,0.392-3.066,0.588-4.368,0.588c-1.582,0-2.73-0.42-3.444-1.26c-0.714-0.84-1.071-2.205-1.071-4.095 c0-3.766,1.547-5.649,4.641-5.649c3.052,0,4.578,1.582,4.578,4.746l-0.209,1.953H56.19C56.204,16.322,56.375,16.788,56.705,17.075z M59.802,13.536c0-0.84-0.133-1.424-0.399-1.753c-0.266-0.329-0.732-0.493-1.396-0.493c-0.666,0-1.134,0.171-1.407,0.514 c-0.273,0.343-0.417,0.921-0.431,1.732H59.802z"
                }), (0, n.Z)("path", {
                    fill: s,
                    d: "M70.407,11.625h-2.583v4.305c0,0.42,0.011,0.718,0.031,0.893c0.021,0.175,0.098,0.325,0.231,0.451 c0.133,0.126,0.339,0.189,0.619,0.189l1.596-0.042l0.126,2.246c-0.938,0.211-1.651,0.315-2.142,0.315 c-1.26,0-2.121-0.283-2.583-0.851c-0.462-0.566-0.693-1.613-0.693-3.14v-4.368h-1.238V9.231h1.238V6.312h2.814v2.919h2.583V11.625z"
                }), (0, n.Z)("path", {
                    fill: s,
                    d: "M76.161,8.979c0.729,0,1.659,0.112,2.794,0.336l0.566,0.126l-0.084,2.226 c-1.106-0.112-1.925-0.168-2.457-0.168c-0.966,0-1.606,0.207-1.921,0.62c-0.315,0.413-0.473,1.193-0.473,2.341 c0,1.148,0.157,1.937,0.473,2.363c0.314,0.427,0.962,0.641,1.942,0.641l2.436-0.168l0.084,2.246 c-1.498,0.295-2.639,0.441-3.423,0.441c-1.554,0-2.671-0.438-3.35-1.312s-1.019-2.278-1.019-4.211c0-1.932,0.35-3.328,1.05-4.189 S74.607,8.979,76.161,8.979z"
                }), (0, n.Z)("path", {
                    fill: s,
                    d: "M84.414,19.731H81.6v-14.7h2.814v4.704c0.966-0.504,1.834-0.756,2.604-0.756c1.4,0,2.366,0.413,2.898,1.239 c0.531,0.826,0.798,2.1,0.798,3.822v5.691h-2.814v-5.628c0-0.882-0.104-1.536-0.314-1.963s-0.63-0.641-1.26-0.641 c-0.546,0-1.093,0.084-1.639,0.252l-0.272,0.084V19.731z"
                }), (0, n.Z)("path", {
                    fill: s,
                    d: "M96.531,11.625v8.106h-2.814v-8.106h-1.134V9.231h1.134V8.77c0-1.512,0.224-2.555,0.672-3.129 s1.246-0.861,2.395-0.861c0.504,0,1.155,0.07,1.953,0.21l0.44,0.063l-0.042,2.289c-0.616-0.028-1.134-0.042-1.554-0.042 s-0.7,0.112-0.84,0.336c-0.141,0.224-0.21,0.609-0.21,1.155v0.441h2.541v2.394H96.531z"
                }), (0, n.Z)("path", {
                    fill: s,
                    d: "M108.753,12.507v4.368c0.028,0.337,0.084,0.571,0.168,0.704s0.259,0.228,0.525,0.283l-0.084,2.121 c-0.714,0-1.285-0.049-1.712-0.146c-0.427-0.099-0.857-0.295-1.291-0.589c-1.008,0.49-2.037,0.735-3.087,0.735 c-2.171,0-3.255-1.147-3.255-3.444c0-1.119,0.301-1.914,0.902-2.383c0.603-0.469,1.526-0.746,2.772-0.83l2.247-0.168v-0.651 c0-0.434-0.099-0.731-0.294-0.893c-0.196-0.161-0.512-0.241-0.945-0.241l-3.948,0.168l-0.084-1.953 c1.498-0.406,2.923-0.609,4.273-0.609c1.352,0,2.324,0.28,2.919,0.84C108.456,10.379,108.753,11.276,108.753,12.507z M104.028,15.279c-0.784,0.07-1.176,0.49-1.176,1.26c0,0.771,0.343,1.155,1.028,1.155c0.532,0,1.113-0.084,1.743-0.252l0.315-0.084 v-2.247L104.028,15.279z"
                }), (0, n.Z)("path", {
                    fill: s,
                    d: "M116.522,8.979c1.47,0,2.545,0.402,3.224,1.208s1.019,2.244,1.019,4.316c0,2.071-0.392,3.503-1.176,4.294 s-2.136,1.187-4.053,1.187c-0.603,0-1.701-0.07-3.298-0.21l-0.798-0.084V5.031h2.814v4.515 C115.15,9.168,115.906,8.979,116.522,8.979z M115.536,17.464c0.938,0,1.567-0.228,1.89-0.683s0.482-1.271,0.482-2.447 c0-1.89-0.588-2.834-1.764-2.834c-0.56,0-1.092,0.07-1.596,0.21l-0.294,0.063v5.607C114.898,17.436,115.325,17.464,115.536,17.464z"
                })) : null, (0, n.Z)("g", {
                    className: "logo"
                }, void 0, (0, n.Z)("path", {
                    fill: l,
                    d: "M12.5,0.833C6.056,0.833,0.834,6.057,0.834,12.5S6.056,24.167,12.5,24.167S24.167,18.943,24.167,12.5 S18.944,0.833,12.5,0.833z"
                })), (0, n.Z)("g", {
                    className: "logo-circle"
                }, void 0, (0, n.Z)("path", {
                    fill: d,
                    d: "M12.5-0.029C5.596-0.029,0,5.568,0,12.472c0,6.904,5.596,12.501,12.5,12.501s12.5-5.597,12.5-12.501 C25.001,5.568,19.405-0.029,12.5-0.029z M11.414,19.911L6.025,16.8v-6.276l5.389,2.911V19.911z M12.374,11.958l-6.376-3.38 l6.376-3.682l6.377,3.682L12.374,11.958z M18.755,16.812l-5.369,3.1v-6.452l5.369-2.901V16.812z"
                })))
            }
        },
        THSm: (e, t, a) => {
            a.d(t, {
                Z: () => m
            });
            var n, r = a("D4hk"),
                i = a("3MRe"),
                o = a("3Z9q"),
                s = a("xIYY"),
                c = a("CfKk"),
                l = a("Ixlc"),
                u = a("sQwH");
            const d = function(e) {
                return o.createElement("svg", (0, r.Z)({
                    viewBox: "0 0 16 16",
                    width: 16,
                    height: 16
                }, e), n || (n = (0, u.Z)("path", {
                    d: "M13.707 6.293l-5-5a.999.999 0 00-1.414 0l-5 5a.999.999 0 101.414 1.414L7 4.414V14a1 1 0 002 0V4.414l3.293 3.293a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                })))
            };
            var v = a("X40V"),
                f = ["gaEvent", "org", "project", "className"];

            function m(e) {
                var t = e.gaEvent,
                    a = e.org,
                    n = e.project,
                    u = e.className,
                    m = void 0 === u ? "" : u,
                    p = (0, i.Z)(e, f),
                    Z = (0, s.v9)(c.wl.authUser.canAccessFeature("ff_read_only_mode")),
                    h = (0, l.q)(a, n, t);
                return o.createElement(d, (0, r.Z)({
                    onClick: Z ? null : h,
                    className: (0, v.AK)(m, {
                        "--disabled": Z
                    })
                }, p))
            }
        },
        y7HB: (e, t, a) => {
            a.d(t, {
                Z: () => v
            });
            var n = a("zoaa"),
                r = a("sQwH"),
                i = a("D4hk"),
                o = a("3Z9q"),
                s = a("1nxQ"),
                c = a("X40V"),
                l = a("N+9a"),
                u = a("F3G7"),
                d = function(e) {
                    var t = e.href,
                        a = e.params,
                        n = e.onClick,
                        s = e.children,
                        u = {
                            className: (0, c.AK)("other", "skfb-link"),
                            children: s
                        };
                    return t ? o.createElement(l.Z, (0, i.Z)({}, u, {
                        to: t,
                        params: a
                    })) : n ? o.createElement("button", (0, i.Z)({}, u, {
                        onClick: n
                    })) : (0, r.Z)("span", {
                        className: "others"
                    }, void 0, s)
                };
            const v = function(e) {
                var t = e.totalCount,
                    a = e.names,
                    i = e.othersHref,
                    c = e.othersHrefParams,
                    l = e.onOtherClick,
                    v = e.maxDisplay,
                    f = void 0 === v ? 3 : v,
                    m = (0, u.Z)(a, f),
                    p = (0, n.Z)(m),
                    Z = p[0],
                    h = p.slice(1),
                    g = Math.max(0, t - f);
                return o.createElement(o.Fragment, null, Z, h.length ? h.map((function(e, t) {
                    return (0, r.Z)(o.Fragment, {}, t, h.length - 1 === t && 0 === g ? " and " : ", ", e)
                })) : null, g ? o.createElement(o.Fragment, null, " and ", (0, r.Z)(d, {
                    href: i,
                    params: c,
                    onClick: l
                }, void 0, "".concat(g, " other").concat((0, s.pluralize)(g)))) : null)
            }
        },
        pCyY: (e, t, a) => {
            a.d(t, {
                yc: () => N,
                VU: () => w,
                e9: () => b,
                pS: () => k
            });
            var n, r, i, o, s, c, l, u, d, v, f, m, p = a("sQwH"),
                Z = a("mSEu"),
                h = (a("3Z9q"), a("X40V")),
                g = a("iu9k"),
                _ = a("xIYY"),
                y = a("CfKk"),
                N = [{
                    title: "Best selling",
                    icon: "custom-icons icon-best-selling",
                    value: (0, g.HQ)("store:search", {}, {
                        sort_by: "-orderCount",
                        ref: "header"
                    })
                }, {
                    title: "Animated",
                    icon: "fa fa-film",
                    value: (0, g.HQ)("store:search", {}, {
                        animated: !0,
                        ref: "header"
                    })
                }, {
                    title: "PBR",
                    icon: "custom-icons icon-pbr",
                    value: (0, g.HQ)("store:search", {}, {
                        pbr: !0,
                        ref: "header"
                    })
                }, {
                    title: "Low poly",
                    icon: "custom-icons icon-low-poly",
                    value: (0, g.HQ)("store:search", {}, {
                        min_face_count: "0",
                        max_face_count: "10000",
                        ref: "header"
                    })
                }, {
                    title: "High poly",
                    icon: "custom-icons icon-high-poly",
                    value: (0, g.HQ)("store:search", {}, {
                        min_face_count: "100000",
                        ref: "header"
                    })
                }, {
                    title: "3D Printable",
                    icon: "custom-icons icon-d-printing",
                    value: (0, g.HQ)("store:search", {}, {
                        file_formats: ["stl"],
                        ref: "header"
                    })
                }, {
                    title: "3D Scan",
                    icon: "custom-icons icon-D-Scan",
                    value: (0, g.HQ)("store:search", {}, {
                        q: ["scan"],
                        sort_by: "-orderCount",
                        ref: "header"
                    })
                }];

            function w(e) {
                var t = e.categories,
                    a = e.onToggle,
                    i = e.className,
                    o = e.withDropdown,
                    s = void 0 !== o && o,
                    c = e.highLights,
                    l = void 0 === c ? N : c;
                return (0, p.Z)("div", {
                    className: (0, h.AK)({
                        "categories-navigation__dropdown-container": s
                    }, i),
                    onClick: a
                }, void 0, (0, p.Z)("div", {
                    className: (0, h.AK)("categories-navigation", "--store", {
                        "--dropdown": s
                    })
                }, void 0, (0, p.Z)("div", {
                    className: "categories-navigation__highlights-container"
                }, void 0, (0, p.Z)("ul", {
                    className: "highlights-list --store"
                }, void 0, n || (n = (0, p.Z)("span", {
                    className: "categories-navigation__title title"
                }, void 0, "Highlights")), l.map((function(e) {
                    return (0, p.Z)("li", {
                        className: "navigation-item"
                    }, e.title, (0, p.Z)("a", {
                        title: "".concat(e.title, " 3D models"),
                        href: e.value
                    }, void 0, (0, p.Z)("i", {
                        className: (0, h.AK)("icon  --translucent", e.icon)
                    }), (0, p.Z)("span", {}, void 0, e.title)))
                })))), (0, p.Z)("div", {
                    className: "categories-navigation__menu"
                }, void 0, r || (r = (0, p.Z)("span", {
                    className: "categories-navigation__title title"
                }, void 0, "Browse by category")), (0, p.Z)("ul", {
                    className: "categories-navigation__list"
                }, void 0, t.map((function(e) {
                    return (0, p.Z)("li", {
                        className: "navigation-item"
                    }, e.slug, (0, p.Z)("a", {
                        title: "".concat(e.name, " 3D models"),
                        href: (0, g.HQ)("store:search_by_keyword", {
                            keyword: e.slug
                        }, {
                            ref: "header"
                        })
                    }, void 0, (0, p.Z)("i", {
                        className: (0, h.AK)("icon", "custom-icons", "icon-category-".concat(e.slug))
                    }), (0, p.Z)("span", {}, void 0, e.name)))
                }))))))
            }

            function b(e) {
                var t = e.categories,
                    a = e.anchor,
                    n = void 0 === a ? "?ref=header" : a,
                    r = e.subdomainAnchor,
                    N = void 0 === r ? "?utm_source=website&utm_campaign=header" : r,
                    w = (0, _.v9)(y.wl.authUser.canAccessFeature("ff_masters_landing"));
                return (0, p.Z)("div", {
                    className: "categories-navigation"
                }, void 0, (0, p.Z)("div", {
                    className: "categories-navigation__highlights-container"
                }, void 0, (0, p.Z)("ul", {
                    className: "highlights-list --search"
                }, void 0, i || (i = (0, p.Z)("span", {
                    className: "categories-navigation__title title"
                }, void 0, "Highlights")), (0, p.Z)("li", {
                    className: "navigation-item"
                }, void 0, (0, p.Z)("a", {
                    title: "Popular 3D models",
                    href: (0, g.HQ)("models:popular")
                }, void 0, o || (o = (0, p.Z)("i", {
                    className: "icon --translucent custom-icons icon-popular"
                })), s || (s = (0, p.Z)("span", {}, void 0, "Popular")))), (0, p.Z)("li", {
                    className: "navigation-item"
                }, void 0, (0, p.Z)("a", {
                    title: "Staff picks 3D models",
                    href: (0, g.HQ)("models:staffpicks")
                }, void 0, c || (c = (0, p.Z)("i", {
                    className: "icon --translucent custom-icons icon-staffpicks-icon"
                })), l || (l = (0, p.Z)("span", {}, void 0, "Staff picks")))), (0, p.Z)("li", {
                    className: "navigation-item"
                }, void 0, (0, p.Z)("a", {
                    title: "Downloadable 3D models",
                    href: (0, g.HQ)("models:explore", {}, {
                        features: "downloadable",
                        date: "week",
                        sort_by: "-likeCount"
                    })
                }, void 0, u || (u = (0, p.Z)("i", {
                    className: "icon --translucent fa fa-download"
                })), d || (d = (0, p.Z)("span", {}, void 0, "Downloadable")))), (0, p.Z)("li", {
                    className: "navigation-item"
                }, void 0, (0, p.Z)("a", {
                    title: "Collections 3D models",
                    href: (0, g.HQ)("collections:popular")
                }, void 0, v || (v = (0, p.Z)("i", {
                    className: "icon --translucent custom-icons icon-collection"
                })), f || (f = (0, p.Z)("span", {}, void 0, "Collections"))))), (0, p.Z)("ul", {
                    className: (0, h.AK)("highlights-list", {
                        "--masters-page": w
                    })
                }, void 0, (0, p.Z)("li", {
                    className: "navigation-item"
                }, void 0, (0, p.Z)("a", {
                    href: Z.Z.hosts.communityBlog + n,
                    title: "Community Blog",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, void 0, "Blog")), (0, p.Z)("li", {
                    className: "navigation-item"
                }, void 0, (0, p.Z)("a", {
                    href: Z.Z.hosts.discourse + N,
                    title: "Community Forum",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, void 0, "Forum")), (0, p.Z)("li", {
                    className: "navigation-item"
                }, void 0, (0, p.Z)("a", {
                    href: Z.Z.hosts.communityBlog + "/category/challenges" + n,
                    title: "Challenges",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, void 0, "Challenges")), (0, p.Z)("li", {
                    className: "navigation-item"
                }, void 0, (0, p.Z)("a", {
                    href: (0, g.HQ)("users:explore_users"),
                    title: "Community Members"
                }, void 0, "Community members")), w ? (0, p.Z)("li", {
                    className: "navigation-item"
                }, void 0, (0, p.Z)("a", {
                    href: (0, g.HQ)("pages:masters_landing"),
                    title: "Community Members"
                }, void 0, "Sketchfab Masters")) : null)), (0, p.Z)("div", {
                    className: "categories-navigation__menu"
                }, void 0, m || (m = (0, p.Z)("span", {
                    className: "categories-navigation__title title"
                }, void 0, "Browse by category")), (0, p.Z)("ul", {
                    className: "categories-navigation__list"
                }, void 0, t.map((function(e) {
                    return (0, p.Z)("li", {
                        className: "navigation-item"
                    }, e.slug, (0, p.Z)("a", {
                        title: "".concat(e.name, " 3D models"),
                        href: (0, g.HQ)("models:explore_by_category", {
                            category: e.slug
                        }, {
                            date: "week",
                            sort_by: "-likeCount"
                        })
                    }, void 0, (0, p.Z)("i", {
                        className: (0, h.AK)("icon", "custom-icons", "icon-category-".concat(e.slug))
                    }), (0, p.Z)("span", {}, void 0, e.name)))
                })))))
            }

            function k(e) {
                var t = e.anchor,
                    a = void 0 === t ? "?ref=header" : t,
                    n = [{
                        title: "Sketchfab for Teams",
                        href: (0, g.HQ)("pages:3d_asset_management"),
                        anchor: a
                    }, {
                        title: "Augmented Reality",
                        href: (0, g.HQ)("pages:ar_landing"),
                        anchor: a
                    }, {
                        title: "3D Viewer",
                        href: (0, g.HQ)("pages:viewer"),
                        anchor: a
                    }, {
                        title: "3D eCommerce",
                        href: (0, g.HQ)("pages:ecommerce"),
                        anchor: a
                    }, {
                        title: "3D Configurators",
                        href: (0, g.HQ)("pages:configurator"),
                        anchor: a
                    }, {
                        title: "Find a Partner",
                        href: Z.Z.hosts.enterpriseBlog + "/partners-directory",
                        anchor: a
                    }, {
                        title: "Pricing",
                        href: (0, g.HQ)("pages:plans"),
                        anchor: a
                    }, {
                        title: "Customer Stories",
                        href: Z.Z.hosts.enterpriseBlog,
                        anchor: a
                    }];
                return (0, p.Z)("div", {
                    className: "community-navigation"
                }, void 0, (0, p.Z)("div", {
                    className: "community-navigation__col"
                }, void 0, (0, p.Z)("div", {
                    className: "community-navigation__list"
                }, void 0, n.map((function(e, t) {
                    return (0, p.Z)("div", {
                        className: "navigation-item"
                    }, t, (0, p.Z)("a", {
                        href: e.href + e.anchor,
                        title: e.title
                    }, void 0, e.title))
                })))))
            }
        },
        "WVN+": (e, t, a) => {
            a.d(t, {
                IA: () => c,
                zp: () => l,
                ZP: () => u
            });
            var n = a("sQwH"),
                r = a("sGMM"),
                i = a("3Z9q"),
                o = a("ZqC1"),
                s = a("45Yh"),
                c = i.createContext((function() {})),
                l = function(e) {
                    var t = e.children,
                        a = i.useState((0, s.sk)() ? "" : document.title),
                        l = (0, r.Z)(a, 2),
                        u = l[0],
                        d = l[1],
                        v = (0, o.Z)();
                    return i.useEffect((function() {
                        document.title = "".concat(v ? "(".concat(v, ") ") : "").concat(function(e) {
                            return e.replace(/^(\(\d+\)\s)/, "")
                        }(u))
                    }), [u, v]), (0, n.Z)(c.Provider, {
                        value: d
                    }, void 0, t)
                };
            const u = function(e) {
                var t = e.children,
                    a = e.context,
                    n = i.useContext(a);
                return i.useEffect((function() {
                    n(Array.isArray(t) ? t.join("") : t)
                }), [n, t]), null
            }
        },
        rv44: (e, t, a) => {
            a.d(t, {
                Z: () => x
            });
            var n = a("D4hk"),
                r = a("3MRe"),
                i = a("qD8I"),
                o = a("CUcO"),
                s = a("8N4v"),
                c = a("Zfzx"),
                l = a("FUT3"),
                u = a("hayj"),
                d = a("xKIK"),
                v = a("Hjnd"),
                f = a.n(v),
                m = a("3Z9q"),
                p = a("Idx6"),
                Z = a.n(p),
                h = a("yTkX"),
                g = a("g/7r"),
                _ = a("p5Lb"),
                y = a("sQwH"),
                N = ["identifier", "color", "size", "percentage", "onClick"];
            const w = function(e) {
                var t = e.identifier,
                    a = void 0 === t ? "skfb" : t,
                    i = e.color,
                    o = void 0 === i ? "" : i,
                    s = e.size,
                    c = void 0 === s ? 30 : s,
                    l = e.percentage,
                    u = void 0 === l ? 1 : l,
                    d = e.onClick,
                    v = void 0 === d ? g.EI : d,
                    f = (0, r.Z)(e, N);
                return m.createElement("svg", (0, n.Z)({
                    className: "c-star-rating__star",
                    width: c,
                    height: c,
                    viewBox: "0 0 20 20",
                    onClick: v
                }, f), (0, y.Z)("defs", {}, void 0, (0, y.Z)("path", {
                    d: "M19.96 7.86c0-.296-.223-.48-.67-.552l-6.023-.875-2.7-5.458c-.15-.328-.346-.492-.586-.492s-.435.164-.587.492l-2.7 5.458-6.02.875C.222 7.38 0 7.564 0 7.86c0 .168.1.36.3.576l4.367 4.247-1.032 5.998c-.016.113-.024.193-.024.24 0 .168.043.31.127.426.084.117.21.174.378.174.144 0 .304-.047.48-.143l5.386-2.832 5.387 2.832c.168.096.328.143.48.143.16 0 .282-.057.366-.174.083-.115.125-.258.125-.425 0-.103-.004-.183-.012-.24l-1.03-5.997 4.353-4.247c.207-.208.31-.4.31-.576z",
                    id: "a-".concat(a)
                })), (0, y.Z)("mask", {
                    id: "b-".concat(a),
                    fill: "#fff"
                }, void 0, (0, y.Z)("use", {
                    xlinkHref: "#a-".concat(a)
                })), (0, y.Z)("rect", {
                    className: "c-star-rating__background-rect",
                    width: "20",
                    height: "20",
                    stroke: o,
                    fill: o,
                    mask: "url(#b-".concat(a, ")")
                }), (0, y.Z)("rect", {
                    className: "c-star-rating__fill-rect",
                    width: 20 * u,
                    height: "20",
                    fill: o,
                    mask: "url(#b-".concat(a, ")")
                }))
            };
            var b = ["value", "color", "onChange", "identifier"];

            function k(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = (0, u.Z)(e);
                    if (t) {
                        var r = (0, u.Z)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return (0, l.Z)(this, a)
                }
            }
            var C = function(e) {
                (0, c.Z)(a, e);
                var t = k(a);

                function a() {
                    var e;
                    (0, i.Z)(this, a);
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(r)), (0, d.Z)((0, s.Z)(e), "container", m.createRef()), (0, d.Z)((0, s.Z)(e), "getPercentX", (function(t) {
                        return (t.dragX - f()(e.container).offset().left) / f()(e.container).width()
                    })), (0, d.Z)((0, s.Z)(e), "onDrag", (function(t) {
                        var a = (0, _.vX)(0, 5, Math.ceil(5 * t));
                        a !== e.props.value && e.props.onChange(a)
                    })), e
                }
                return (0, o.Z)(a, [{
                    key: "starSize",
                    get: function() {
                        switch (this.props.size) {
                            case "small":
                                return 10;
                            case "medium":
                            default:
                                return 16;
                            case "large":
                                return 20
                        }
                    }
                }, {
                    key: "hasClickEvent",
                    get: function() {
                        return this.props.onChange !== g.EI
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            a = t.value,
                            i = t.color,
                            o = t.onChange,
                            s = t.identifier,
                            c = (0, r.Z)(t, b),
                            l = Z()(c, ["isTouched", "hasChanged", "hasError", "error", "onBlur", "size", "children"]);
                        return m.createElement("div", (0, n.Z)({
                            ref: this.container,
                            className: "c-star-rating ".concat(this.hasClickEvent ? "--interactive" : "")
                        }, (0, h.QG)({
                            onDrag: (0, g.qC)(this.onDrag, this.getPercentX)
                        })), [1, 2, 3, 4, 5].map((function(t, r) {
                            return m.createElement(w, (0, n.Z)({
                                key: r,
                                percentage: (0, _.vX)(0, 1, (a || 0) - r),
                                color: i,
                                onClick: function() {
                                    return o(t)
                                },
                                identifier: s
                            }, l, {
                                size: e.starSize
                            }))
                        })))
                    }
                }]), a
            }(m.Component);
            (0, d.Z)(C, "defaultProps", {
                size: "medium",
                onChange: g.EI
            });
            const x = C
        },
        Ixlc: (e, t, a) => {
            a.d(t, {
                q: () => m,
                Z: () => p
            });
            var n = a("D4hk"),
                r = a("3MRe"),
                i = a("mSEu"),
                o = a("3Z9q"),
                s = a("xIYY"),
                c = a("CfKk"),
                l = a("fBod"),
                u = a("RyS8"),
                d = a("vAnt"),
                v = a("e1Pq"),
                f = ["iconClassName", "gaEvent", "org", "project"],
                m = function(e, t, a) {
                    var n = (0, s.I0)(),
                        r = (0, v.Z)().Trackers;
                    return function(o) {
                        o.preventDefault(), o.stopPropagation(), a && r.ga[a](), n(c.Nw.authUser.authenticate((function() {
                            return (0, l.loadUploadPopup)().then((function(a) {
                                return new a({
                                    org: e,
                                    project: t
                                }).open()
                            })).catch((0, u.KQ)(u.ud))
                        }), {
                            redirectUrl: "/feed#upload",
                            usageType: i.Z.userUsageTypeChoices.uploader,
                            initialForm: "signup"
                        }))
                    }
                };

            function p(e) {
                var t = e.iconClassName,
                    a = void 0 === t ? "fa fa-arrow-up" : t,
                    i = e.gaEvent,
                    l = e.org,
                    u = e.project,
                    v = (0, r.Z)(e, f),
                    p = (0, s.v9)(c.wl.authUser.canAccessFeature("ff_read_only_mode")),
                    Z = m(l, u, i);
                return o.createElement(d.Z, (0, n.Z)({
                    "data-selenium": "upload",
                    iconClassName: a,
                    text: "Upload",
                    size: "medium",
                    type: "important",
                    onClick: Z
                }, v, {
                    disabled: p || v.disabled
                }))
            }
        },
        qjDX: (e, t, a) => {
            a.d(t, {
                Z: () => l
            });
            var n = a("D4hk"),
                r = a("3MRe"),
                i = a("3Z9q"),
                o = a("jQKg"),
                s = a("X40V"),
                c = ["notificationUid", "to", "isRead"];
            const l = function(e) {
                var t = e.notificationUid,
                    a = e.to,
                    l = e.isRead,
                    u = (0, r.Z)(e, c);
                return i.createElement("a", (0, n.Z)({}, u, {
                    href: a,
                    className: (0, s.AK)("activity --notification", {
                        "--not-read": !l
                    }),
                    onClick: function() {
                        return o.Z.readActivities([t])
                    }
                }), u.children)
            }
        },
        DbQt: (e, t, a) => {
            a.d(t, {
                Z: () => p
            });
            var n, r, i = a("sQwH"),
                o = a("7isf"),
                s = (a("3Z9q"), a("TUor")),
                c = a("qjDX"),
                l = a("ZZB/"),
                u = a("y7HB"),
                d = a("I0q+"),
                v = a("LvQi"),
                f = a("N+9a"),
                m = function(e) {
                    return e.extraContext.activities ? e.extraContext.activities.reduce((function(e, t) {
                        return [].concat((0, o.Z)(e), [t.obj])
                    }), [e.obj]) : [e.obj]
                };
            const p = function(e) {
                var t = e.activity,
                    a = e.isRead,
                    o = void 0 !== a && a,
                    p = t.extraContext.count + 1;
                return (0, i.Z)(c.Z, {
                    notificationUid: t.uid,
                    to: t.target.collectionUrl,
                    isRead: o
                }, void 0, n || (n = (0, i.Z)("div", {
                    className: "activity__icon --collect"
                })), (0, i.Z)("div", {
                    className: "activity__main"
                }, void 0, (0, i.Z)("div", {
                    className: "activity__main__left"
                }, void 0, (0, i.Z)("div", {
                    className: "avatar"
                }, void 0, (0, i.Z)(f.Z, {
                    to: "users:profile_summary",
                    params: {
                        username: t.actor.username
                    }
                }, void 0, (0, i.Z)(d.Z, {
                    alt: "Avatar of ".concat(t.actor.username, " "),
                    avatars: t.actor.avatars,
                    size: 30
                })))), (0, i.Z)("div", {
                    className: "activity__main__middle"
                }, void 0, (0, i.Z)("div", {
                    className: "activity__title"
                }, void 0, (0, i.Z)(v.Z, {
                    user: t.actor,
                    withoutBadge: !0
                }), (0, i.Z)("span", {}, void 0, " added your model ", (0, i.Z)(u.Z, {
                    totalCount: p,
                    names: m(t).map((function(e) {
                        return (0, i.Z)(l.Z, {
                            model: e
                        }, e.uid)
                    }))
                })), r || (r = (0, i.Z)("span", {}, void 0, " to the collection ")), (0, i.Z)("span", {
                    className: "collection-name"
                }, void 0, (0, i.Z)("a", {
                    className: "label",
                    href: t.target.collectionUrl,
                    title: t.target.name
                }, void 0, (0, i.Z)("data", {
                    itemProp: "name"
                }, void 0, t.target.name)))), (0, i.Z)("time", {
                    className: "activity__time"
                }, void 0, (0, s.Sy)(t.timestamp)))))
            }
        },
        jtsd: (e, t, a) => {
            a.d(t, {
                Z: () => p
            });
            var n, r, i = a("sQwH"),
                o = a("3Z9q"),
                s = a("TUor"),
                c = a("qjDX"),
                l = a("ZZB/"),
                u = a("I0q+"),
                d = a("LvQi"),
                v = a("6tbf"),
                f = a("N+9a"),
                m = a("sSJZ");

            function p(e) {
                var t = e.activity,
                    a = e.isRead,
                    p = void 0 !== a && a,
                    Z = o.useContext(m.u).withDetail;
                return (0, i.Z)(c.Z, {
                    notificationUid: t.uid,
                    to: "".concat(t.target.viewerUrl, "#comments"),
                    isRead: p
                }, void 0, n || (n = (0, i.Z)("div", {
                    className: "activity__icon --comment"
                })), (0, i.Z)("div", {
                    className: "activity__main"
                }, void 0, (0, i.Z)("div", {
                    className: "activity__main__left"
                }, void 0, (0, i.Z)("div", {
                    className: "avatar"
                }, void 0, (0, i.Z)(f.Z, {
                    to: "users:profile_summary",
                    params: {
                        username: t.actor.username
                    }
                }, void 0, (0, i.Z)(u.Z, {
                    alt: "Avatar of ".concat(t.actor.username, " "),
                    avatars: t.actor.avatars,
                    size: 30
                })))), (0, i.Z)("div", {
                    className: "activity__main__middle"
                }, void 0, (0, i.Z)("div", {
                    className: "activity__title"
                }, void 0, (0, i.Z)(d.Z, {
                    user: t.actor,
                    withoutBadge: !0
                }), r || (r = (0, i.Z)("span", {}, void 0, " commented on ")), (0, i.Z)(l.Z, {
                    model: t.target
                })), (0, i.Z)("time", {
                    className: "activity__time"
                }, void 0, (0, s.Sy)(t.timestamp)), Z ? o.createElement(o.Fragment, null, (0, i.Z)("div", {
                    className: "activity__body"
                }, void 0, t.obj.body), (0, i.Z)("div", {
                    className: "activity__actions"
                }, void 0, (0, i.Z)("a", {
                    href: "".concat(t.target.viewerUrl, "#comments")
                }, void 0, "Reply"))) : null), Z ? (0, i.Z)("div", {
                    className: "activity__main__right"
                }, void 0, (0, i.Z)("div", {
                    className: "activity__thumbnail"
                }, void 0, (0, i.Z)(v.Z, {
                    alt: "".concat(t.target.name, " 3D Model"),
                    thumbnails: t.target.thumbnails,
                    deferImages: !1
                }))) : null))
            }
        },
        MWCS: (e, t, a) => {
            a.d(t, {
                Z: () => m
            });
            var n, r, i, o = a("sQwH"),
                s = a("3Z9q"),
                c = a("TUor"),
                l = a("qjDX"),
                u = a("I0q+"),
                d = a("LvQi"),
                v = a("N+9a"),
                f = a("sSJZ");
            const m = function(e) {
                var t = e.authUser,
                    a = e.activity,
                    m = e.isRead,
                    p = void 0 !== m && m,
                    Z = s.useContext(f.u).withDetail;
                return (0, o.Z)(l.Z, {
                    notificationUid: a.uid,
                    to: a.actor.profileUrl,
                    isRead: p
                }, void 0, n || (n = (0, o.Z)("div", {
                    className: "activity__icon --follow"
                })), (0, o.Z)("div", {
                    className: "activity__main"
                }, void 0, (0, o.Z)("div", {
                    className: "activity__main__left"
                }, void 0, (0, o.Z)("div", {
                    className: "avatar"
                }, void 0, (0, o.Z)(v.Z, {
                    to: "users:profile_summary",
                    params: {
                        username: a.actor.username
                    }
                }, void 0, (0, o.Z)(u.Z, {
                    alt: "Avatar of ".concat(a.actor.username, " "),
                    avatars: a.actor.avatars,
                    size: 30
                })))), (0, o.Z)("div", {
                    className: "activity__main__middle"
                }, void 0, (0, o.Z)("div", {
                    className: "activity__title"
                }, void 0, (0, o.Z)(d.Z, {
                    user: a.actor,
                    withoutBadge: !0
                }), r || (r = (0, o.Z)("span", {}, void 0, " followed ")), t.uid === a.target.uid ? i || (i = (0, o.Z)("span", {}, void 0, "you ")) : (0, o.Z)(d.Z, {
                    user: a.target,
                    withoutBadge: !0
                })), (0, o.Z)("time", {
                    className: "activity__time"
                }, void 0, (0, c.Sy)(a.timestamp))), (0, o.Z)("div", {
                    className: "activity__main__right"
                }, void 0, Z && t.uid !== a.target.uid && (0, o.Z)("div", {
                    className: "avatar"
                }, void 0, (0, o.Z)(u.Z, {
                    alt: "Avatar of ".concat(a.target.username, " "),
                    avatars: a.target.avatars,
                    size: 30
                })))))
            }
        },
        TkBM: (e, t, a) => {
            a.d(t, {
                Z: () => N
            });
            var n, r, i, o = a("sQwH"),
                s = a("7isf"),
                c = a("3Z9q"),
                l = a("TUor"),
                u = a("qjDX"),
                d = a("ZZB/"),
                v = a("y7HB"),
                f = a("I0q+"),
                m = a("LvQi"),
                p = a("6tbf"),
                Z = a("N+9a"),
                h = a("sSJZ"),
                g = a("BNNE"),
                _ = function(e) {
                    return e.extraContext.count > 0 ? e.extraContext.activities.reduce((function(e, t) {
                        return [].concat((0, s.Z)(e), [t.actor])
                    }), [e.actor]) : [e.actor]
                },
                y = function(e) {
                    return e.extraContext.count > 0 ? e.extraContext.activities.reduce((function(e, t) {
                        return [].concat((0, s.Z)(e), [t.target])
                    }), [e.target]) : [e.target]
                };
            const N = function(e) {
                var t = e.activity,
                    a = e.isRead,
                    s = void 0 !== a && a,
                    N = e.isFollowingActivity,
                    w = void 0 !== N && N,
                    b = c.useContext(h.u).withDetail,
                    k = t.extraContext.count + 1;
                return (0, o.Z)(u.Z, {
                    notificationUid: t.uid,
                    to: t.target.viewerUrl,
                    isRead: s
                }, void 0, n || (n = (0, o.Z)("div", {
                    className: "activity__icon --like"
                })), (0, o.Z)("div", {
                    className: "activity__main"
                }, void 0, (0, o.Z)("div", {
                    className: "activity__main__left"
                }, void 0, (0, o.Z)("div", {
                    className: "avatar"
                }, void 0, (0, o.Z)(g.Z, {
                    uid: t.actor.uid
                }, void 0, (0, o.Z)(Z.Z, {
                    to: "users:profile_summary",
                    params: {
                        username: t.actor.username
                    },
                    "data-user": t.actor.uid
                }, void 0, (0, o.Z)(f.Z, {
                    alt: "Avatar of ".concat(t.actor.username, " "),
                    avatars: t.actor.avatars,
                    size: 30
                }))))), (0, o.Z)("div", {
                    className: "activity__main__middle"
                }, void 0, (0, o.Z)("div", {
                    className: "activity__title"
                }, void 0, w ? c.createElement(c.Fragment, null, (0, o.Z)(m.Z, {
                    user: t.actor,
                    withoutBadge: !0
                }), r || (r = (0, o.Z)("span", {}, void 0, " liked ")), (0, o.Z)(v.Z, {
                    totalCount: k,
                    names: y(t).map((function(e) {
                        return (0, o.Z)(d.Z, {
                            model: e
                        }, e.uid)
                    })),
                    othersHref: "users:profile_likes",
                    othersHrefParams: {
                        username: t.actor.username
                    }
                })) : c.createElement(c.Fragment, null, (0, o.Z)(v.Z, {
                    totalCount: k,
                    names: _(t).map((function(e) {
                        return (0, o.Z)(m.Z, {
                            user: e
                        }, e.uid)
                    }))
                }), i || (i = (0, o.Z)("span", {}, void 0, " liked ")), (0, o.Z)(d.Z, {
                    model: t.target
                }))), (0, o.Z)("time", {
                    className: "activity__time"
                }, void 0, (0, l.Sy)(t.timestamp))), b ? (0, o.Z)("div", {
                    className: "activity__main__right"
                }, void 0, (0, o.Z)("div", {
                    className: "activity__thumbnail"
                }, void 0, (0, o.Z)(p.Z, {
                    alt: "".concat(t.target.name, " 3D Model"),
                    thumbnails: t.target.thumbnails,
                    deferImages: !1
                }))) : null))
            }
        },
        flMq: (e, t, a) => {
            a.d(t, {
                Z: () => p
            });
            var n, r, i = a("sQwH"),
                o = a("3Z9q"),
                s = a("TUor"),
                c = a("qjDX"),
                l = a("ZZB/"),
                u = a("I0q+"),
                d = a("LvQi"),
                v = a("6tbf"),
                f = a("N+9a"),
                m = a("sSJZ");
            const p = function(e) {
                var t = e.activity,
                    a = e.isRead,
                    p = void 0 !== a && a,
                    Z = o.useContext(m.u).withDetail;
                return (0, i.Z)(c.Z, {
                    notificationUid: t.uid,
                    to: "".concat(t.target.viewerUrl, "#comments"),
                    isRead: p
                }, void 0, n || (n = (0, i.Z)("div", {
                    className: "activity__icon --comment"
                })), (0, i.Z)("div", {
                    className: "activity__main"
                }, void 0, (0, i.Z)("div", {
                    className: "activity__main__left"
                }, void 0, (0, i.Z)("div", {
                    className: "avatar"
                }, void 0, (0, i.Z)(f.Z, {
                    to: "users:profile_summary",
                    params: {
                        username: t.actor.username
                    }
                }, void 0, (0, i.Z)(u.Z, {
                    alt: "Avatar of ".concat(t.actor.username, " "),
                    avatars: t.actor.avatars,
                    size: 30
                })))), (0, i.Z)("div", {
                    className: "activity__main__middle"
                }, void 0, (0, i.Z)("div", {
                    className: "activity__title"
                }, void 0, (0, i.Z)(d.Z, {
                    user: t.actor,
                    withoutBadge: !0
                }), r || (r = (0, i.Z)("span", {}, void 0, " mentioned you on ")), (0, i.Z)(l.Z, {
                    model: t.target
                })), (0, i.Z)("time", {
                    className: "activity__time"
                }, void 0, (0, s.Sy)(t.timestamp)), Z ? o.createElement(o.Fragment, null, (0, i.Z)("div", {
                    className: "activity__body"
                }, void 0, t.obj.body), (0, i.Z)("div", {
                    className: "activity__actions"
                }, void 0, (0, i.Z)("a", {
                    href: "".concat(t.target.viewerUrl, "#comments")
                }, void 0, "Reply"))) : null), Z ? (0, i.Z)("div", {
                    className: "activity__main__right"
                }, void 0, (0, i.Z)("div", {
                    className: "activity__thumbnail"
                }, void 0, (0, i.Z)(v.Z, {
                    alt: "".concat(t.target.name, " 3D Model"),
                    thumbnails: t.target.thumbnails,
                    deferImages: !1
                }))) : null))
            }
        },
        sSJZ: (e, t, a) => {
            a.d(t, {
                u: () => n
            });
            var n = a("3Z9q").createContext({
                withDetail: !1
            })
        },
        "9VL4": (e, t, a) => {
            a.d(t, {
                Z: () => Z
            });
            var n, r, i = a("sQwH"),
                o = a("3Z9q"),
                s = a("TUor"),
                c = a("qjDX"),
                l = a("ZZB/"),
                u = a("I0q+"),
                d = a("LvQi"),
                v = a("6tbf"),
                f = a("N+9a"),
                m = a("rv44"),
                p = a("sSJZ");
            const Z = function(e) {
                var t = e.activity,
                    a = e.isRead,
                    Z = void 0 !== a && a,
                    h = o.useContext(p.u).withDetail;
                return (0, i.Z)(c.Z, {
                    notificationUid: t.uid,
                    to: "".concat(t.target.viewerUrl, "#comments"),
                    isRead: Z
                }, void 0, n || (n = (0, i.Z)("div", {
                    className: "activity__icon --review"
                })), (0, i.Z)("div", {
                    className: "activity__main"
                }, void 0, (0, i.Z)("div", {
                    className: "activity__main__left"
                }, void 0, (0, i.Z)("div", {
                    className: "avatar"
                }, void 0, (0, i.Z)(f.Z, {
                    to: "users:profile_summary",
                    params: {
                        username: t.actor.username
                    }
                }, void 0, (0, i.Z)(u.Z, {
                    alt: "Avatar of ".concat(t.actor.username, " "),
                    avatars: t.actor.avatars,
                    size: 30
                })))), (0, i.Z)("div", {
                    className: "activity__main__middle"
                }, void 0, (0, i.Z)("div", {
                    className: "activity__title"
                }, void 0, (0, i.Z)(d.Z, {
                    user: t.actor,
                    withoutBadge: !0
                }), r || (r = (0, i.Z)("span", {}, void 0, " has published a review on ")), (0, i.Z)(l.Z, {
                    model: t.target
                })), (0, i.Z)("time", {
                    className: "activity__time"
                }, void 0, (0, s.Sy)(t.timestamp)), h ? o.createElement(o.Fragment, null, (0, i.Z)("div", {
                    className: "activity__body"
                }, void 0, (0, i.Z)(m.Z, {
                    value: t.obj.averageRating,
                    size: "small"
                }, "review")), (0, i.Z)("div", {
                    className: "activity__body"
                }, void 0, t.obj.body), (0, i.Z)("div", {
                    className: "activity__actions"
                }, void 0, (0, i.Z)("a", {
                    href: "".concat(t.target.viewerUrl, "#comments")
                }, void 0, "Reply"))) : null), h ? (0, i.Z)("div", {
                    className: "activity__main__right"
                }, void 0, (0, i.Z)("div", {
                    className: "activity__thumbnail"
                }, void 0, (0, i.Z)(v.Z, {
                    alt: "".concat(t.target.name, " 3D Model"),
                    thumbnails: t.target.thumbnails,
                    deferImages: !1
                }))) : null))
            }
        },
        gs0S: (e, t, a) => {
            a.d(t, {
                Z: () => p
            });
            var n, r, i = a("sQwH"),
                o = a("3Z9q"),
                s = a("TUor"),
                c = a("qjDX"),
                l = a("ZZB/"),
                u = a("I0q+"),
                d = a("LvQi"),
                v = a("6tbf"),
                f = a("N+9a"),
                m = a("sSJZ");
            const p = function(e) {
                var t = e.activity,
                    a = e.isRead,
                    p = void 0 !== a && a,
                    Z = o.useContext(m.u).withDetail;
                return (0, i.Z)(c.Z, {
                    notificationUid: t.uid,
                    to: "".concat(t.target.viewerUrl, "#comments"),
                    isRead: p
                }, void 0, n || (n = (0, i.Z)("div", {
                    className: "activity__icon -review"
                })), (0, i.Z)("div", {
                    className: "activity__main"
                }, void 0, (0, i.Z)("div", {
                    className: "activity__main__left"
                }, void 0, (0, i.Z)("div", {
                    className: "avatar"
                }, void 0, (0, i.Z)(f.Z, {
                    to: "users:profile_summary",
                    params: {
                        username: t.actor.username
                    }
                }, void 0, (0, i.Z)(u.Z, {
                    alt: "Avatar of ".concat(t.actor.username, " "),
                    avatars: t.actor.avatars,
                    size: 30
                })))), (0, i.Z)("div", {
                    className: "activity__main__middle"
                }, void 0, (0, i.Z)("div", {
                    className: "activity__title"
                }, void 0, (0, i.Z)(d.Z, {
                    user: t.actor,
                    withoutBadge: !0
                }), r || (r = (0, i.Z)("span", {}, void 0, " has replied to your review on ")), (0, i.Z)(l.Z, {
                    model: t.target
                })), (0, i.Z)("time", {
                    className: "activity__time"
                }, void 0, (0, s.Sy)(t.timestamp)), Z ? (0, i.Z)("div", {
                    className: "activity__body"
                }, void 0, t.obj.replyBody) : null), Z ? (0, i.Z)("div", {
                    className: "activity__main__right"
                }, void 0, (0, i.Z)("div", {
                    className: "activity__thumbnail"
                }, void 0, (0, i.Z)(v.Z, {
                    alt: "".concat(t.target.name, " 3D Model"),
                    thumbnails: t.target.thumbnails,
                    deferImages: !1
                }))) : null))
            }
        },
        "7bTr": (e, t, a) => {
            a.d(t, {
                Z: () => g
            });
            var n, r, i, o, s = a("sQwH"),
                c = a("3Z9q"),
                l = a("TUor"),
                u = a("qjDX"),
                d = a("ZZB/"),
                v = a("I0q+"),
                f = a("LvQi"),
                m = a("6tbf"),
                p = a("N+9a"),
                Z = a("sSJZ"),
                h = a("BNNE");
            const g = function(e) {
                var t = e.authUser,
                    a = e.activity,
                    g = e.isRead,
                    _ = void 0 !== g && g,
                    y = c.useContext(Z.u).withDetail;
                return (0, s.Z)(u.Z, {
                    notificationUid: a.uid,
                    to: a.obj.viewerUrl,
                    isRead: _
                }, void 0, n || (n = (0, s.Z)("div", {
                    className: "activity__icon --staffpick"
                })), (0, s.Z)("div", {
                    className: "activity__main"
                }, void 0, (0, s.Z)("div", {
                    className: "activity__main__left"
                }, void 0, (0, s.Z)(h.Z, {
                    uid: a.actor.uid
                }, void 0, (0, s.Z)("div", {
                    className: "avatar",
                    "data-user": t.uid
                }, void 0, (0, s.Z)(p.Z, {
                    to: "users:profile_summary",
                    params: {
                        username: a.actor.username
                    }
                }, void 0, (0, s.Z)(v.Z, {
                    alt: "Avatar of ".concat(a.actor.username, " "),
                    avatars: a.actor.avatars,
                    size: 30
                }))))), (0, s.Z)("div", {
                    className: "activity__main__middle"
                }, void 0, (0, s.Z)("div", {
                    className: "activity__title"
                }, void 0, t.uid === a.actor.uid ? c.createElement(c.Fragment, null, r || (r = (0, s.Z)("span", {}, void 0, "Your model ")), (0, s.Z)(d.Z, {
                    model: a.obj
                }), i || (i = (0, s.Z)("span", {}, void 0, " has been staff picked! Congrats!"))) : c.createElement(c.Fragment, null, (0, s.Z)(f.Z, {
                    user: a.actor,
                    withoutBadge: !0
                }), "'s model ", (0, s.Z)(d.Z, {
                    model: a.obj
                }), o || (o = (0, s.Z)("span", {}, void 0, " has been staff picked!")), (0, s.Z)("a", {
                    href: "".concat(a.obj.viewerUrl, "#comments")
                }, void 0, " Say Congrats!"))), (0, s.Z)("time", {
                    className: "activity__time"
                }, void 0, (0, l.Sy)(a.timestamp))), y ? (0, s.Z)("div", {
                    className: "activity__main__right"
                }, void 0, (0, s.Z)("div", {
                    className: "activity__thumbnail"
                }, void 0, (0, s.Z)(m.Z, {
                    alt: "".concat(a.obj.name, " 3D Model"),
                    thumbnails: a.obj.thumbnails,
                    deferImages: !1
                }))) : null))
            }
        },
        ZHun: (e, t, a) => {
            a.d(t, {
                Z: () => p
            });
            var n, r, i = a("sQwH"),
                o = a("7isf"),
                s = (a("3Z9q"), a("TUor")),
                c = a("qjDX"),
                l = a("pDOP"),
                u = a("y7HB"),
                d = a("I0q+"),
                v = a("LvQi"),
                f = a("N+9a"),
                m = function(e) {
                    return e.extraContext.count > 0 ? e.extraContext.activities.reduce((function(e, t) {
                        return [].concat((0, o.Z)(e), [t.actor])
                    }), [e.actor]) : [e.actor]
                };
            const p = function(e) {
                var t = e.activity,
                    a = e.isRead,
                    o = void 0 !== a && a,
                    p = t.extraContext.count + 1;
                return (0, i.Z)(c.Z, {
                    notificationUid: t.uid,
                    to: t.actor.profileUrl,
                    isRead: o
                }, void 0, n || (n = (0, i.Z)("div", {
                    className: "activity__icon --subscribe"
                })), (0, i.Z)("div", {
                    className: "activity__main"
                }, void 0, (0, i.Z)("div", {
                    className: "activity__main__left"
                }, void 0, (0, i.Z)("div", {
                    className: "avatar"
                }, void 0, (0, i.Z)(f.Z, {
                    to: "users:profile_summary",
                    params: {
                        username: t.actor.username
                    }
                }, void 0, (0, i.Z)(d.Z, {
                    alt: "Avatar of ".concat(t.actor.username, " "),
                    avatars: t.actor.avatars,
                    size: 30
                })))), (0, i.Z)("div", {
                    className: "activity__main__middle"
                }, void 0, (0, i.Z)("div", {
                    className: "activity__title"
                }, void 0, (0, i.Z)(u.Z, {
                    totalCount: p,
                    names: m(t).map((function(e) {
                        return (0, i.Z)(v.Z, {
                            user: e
                        }, e.uid)
                    }))
                }), r || (r = (0, i.Z)("span", {}, void 0, " subscribed to ")), (0, i.Z)(l.Z, {
                    collection: t.target
                })), (0, i.Z)("time", {
                    className: "activity__time"
                }, void 0, (0, s.Sy)(t.timestamp)))))
            }
        },
        xlyI: (e, t, a) => {
            a.d(t, {
                Z: () => i
            });
            var n, r = a("sQwH");
            a("3Z9q");
            const i = function() {
                return n || (n = (0, r.Z)("div", {
                    className: "placeholder__card"
                }, void 0, (0, r.Z)("div", {
                    className: "placeholder c-list-item-placeholder --small-activity"
                }, void 0, (0, r.Z)("div", {
                    className: "placeholder__image --rounded-corners --x-s"
                }), (0, r.Z)("div", {
                    className: "placeholder__image --rounded-corners --small"
                }), (0, r.Z)("div", {
                    className: "placeholder__container"
                }, void 0, (0, r.Z)("div", {
                    className: "placeholder__text --small --w-80"
                }), (0, r.Z)("div", {
                    className: "placeholder__text --small --w-50"
                })))))
            }
        },
        UM53: (e, t, a) => {
            a.d(t, {
                Z: () => d
            });
            var n = a("qD8I"),
                r = a("CUcO"),
                i = a("8N4v"),
                o = a("Zfzx"),
                s = a("FUT3"),
                c = a("hayj"),
                l = a("xKIK");

            function u(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = (0, c.Z)(e);
                    if (t) {
                        var r = (0, c.Z)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return (0, s.Z)(this, a)
                }
            }
            var d = function(e) {
                (0, o.Z)(a, e);
                var t = u(a);

                function a() {
                    var e;
                    (0, n.Z)(this, a);
                    for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++) o[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(o)), (0, l.Z)((0, i.Z)(e), "state", {
                        error: null
                    }), e
                }
                return (0, r.Z)(a, [{
                    key: "componentDidCatch",
                    value: function(e, t) {
                        console.error("\n            React error caugh by error boundary.\n            Component stack: ".concat(t.componentStack, "\n            "), e), this.setState({
                            error: e
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.children,
                            a = e.fallback;
                        return null !== this.state.error ? a : t || null
                    }
                }]), a
            }(a("3Z9q").Component)
        },
        wKqd: (e, t, a) => {
            a.d(t, {
                Z: () => o
            });
            var n = a("3Z9q"),
                r = a("nv4P"),
                i = a("Kjxj");
            const o = function(e, t) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    o = n.useCallback(t, a);
                n.useEffect((function() {
                    var t = new(r.Z.extend({
                        mixins: [i.Z],
                        onFilesDrop: o
                    }))({
                        el: e
                    });
                    return t.initializeDragAndDrop(),
                        function() {
                            t.undelegateDragAndDrop()
                        }
                }), [e, o])
            }
        },
        RyjW: (e, t, a) => {
            a.d(t, {
                Z: () => i
            });
            var n = a("7isf"),
                r = a("3Z9q");
            const i = function(e, t, a, i) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
                r.useEffect((function() {
                    if (e.current) {
                        var n = e.current;
                        return n.addEventListener(t, a, i),
                            function() {
                                return n.removeEventListener(t, a, i)
                            }
                    }
                }), [e.current, t].concat((0, n.Z)(o)))
            }
        },
        KiA0: (e, t, a) => {
            a.d(t, {
                Z: () => i
            });
            var n = a("3Z9q"),
                r = a("45Yh");
            const i = function(e, t) {
                n.useEffect((function() {
                    var a = function(a) {
                        (0, r.Ub)(e.current, a.target) || t()
                    };
                    return window.addEventListener("click", a),
                        function() {
                            return window.removeEventListener("click", a)
                        }
                }), [t])
            }
        },
        "/NBN": (e, t, a) => {
            a.d(t, {
                Z: () => i
            });
            var n = a("3Z9q"),
                r = a("RyjW");
            const i = function(e) {
                var t = n.useRef(0);
                (0, r.Z)(e, "wheel", (function(e) {
                    var t = -1 / 4 * e.wheelDelta;
                    t && (e.preventDefault(), e.currentTarget.scrollTop = t + e.currentTarget.scrollTop)
                })), (0, r.Z)(e, "touchstart", (function(e) {
                    t.current = e.touches[0].pageY
                })), (0, r.Z)(e, "touchmove", (function(e) {
                    e.preventDefault();
                    var a = t.current - e.touches[0].pageY;
                    t.current = e.touches[0].pageY, e.currentTarget.scrollTop = a + e.currentTarget.scrollTop
                }))
            }
        },
        ZqC1: (e, t, a) => {
            a.d(t, {
                Z: () => o
            });
            var n = a("sGMM"),
                r = a("pfBE"),
                i = a("3Z9q");
            const o = function() {
                var e = i.useState(0),
                    t = (0, n.Z)(e, 2),
                    a = t[0],
                    o = t[1];
                return i.useEffect((function() {
                    var e = r.Z.getSingleton(),
                        t = function() {
                            return o(e.get("activitiesCount"))
                        };
                    return e.get("activitiesCount") && o(e.get("activitiesCount")), e.on("change:activitiesCount", t),
                        function() {
                            return e.off("change:activitiesCount", t)
                        }
                }), []), a
            }
        },
        QCXL: (e, t, a) => {
            a.d(t, {
                Z: () => o
            });
            var n, r = a("sQwH"),
                i = (a("3Z9q"), a("KD0m"));
            const o = function(e) {
                var t = e.label;
                return (0, r.Z)("div", {
                    className: i.Z.view
                }, void 0, n || (n = (0, r.Z)("i", {
                    className: "icon custom-icons icon-tags-icon"
                })), t)
            }
        },
        wDWr: (e, t, a) => {
            a.d(t, {
                Z: () => _
            });
            var n, r = a("sQwH"),
                i = (a("3Z9q"), a("xIYY")),
                o = a("CfKk"),
                s = a("+Ouw"),
                c = a("QCXL"),
                l = a("fu+k");
            const u = function() {
                return (0, r.Z)("div", {
                    className: l.Z.view
                }, void 0, n || (n = (0, r.Z)(c.Z, {
                    label: "special"
                })), (0, r.Z)("div", {
                    className: l.Z.message
                }, void 0, " Save 20% on your first purchase! "))
            };
            var d, v = a("xKIK"),
                f = a("C24G"),
                m = a("p5Lb"),
                p = a("0dnH"),
                Z = a("X40V");
            const h = function(e) {
                var t = e.totalInCents,
                    a = (0, s.td)(t),
                    n = a && (0, m.T4)(a.minimum - t);
                return a ? (0, r.Z)("div", {
                    className: f.Z.view
                }, void 0, (0, r.Z)("div", {
                    className: f.Z.rangeAndSave
                }, void 0, d || (d = (0, r.Z)(c.Z, {
                    label: "special"
                })), (0, r.Z)(p.Z, {
                    totalPrice: t
                })), (0, r.Z)("div", {
                    className: f.Z.balance
                }, void 0, (0, r.Z)("div", {
                    className: f.Z.statusBar
                }, void 0, (0, r.Z)("div", {
                    className: (0, Z.AK)(f.Z.status, (0, v.Z)({}, f.Z["--unlocked"], t > a.minimum)),
                    style: {
                        width: "".concat(t / a.minimum * 100, "%")
                    }
                })), t < a.minimum ? (0, r.Z)("div", {
                    className: f.Z.unlock
                }, void 0, " ", "add ".concat(n, " to unlock")) : (0, r.Z)("div", {
                    className: f.Z.unlock
                }, void 0, " ", "You’ve unlocked ".concat(a.save, "%")))) : null
            };
            var g;
            const _ = function(e) {
                var t = e.totalInCents,
                    a = (0, i.v9)(o.wl.authUser.user),
                    n = !a.isBuyer || a.isAnonymous,
                    c = (0, s.td)(t);
                return n ? c && Number(c.save) > 20 ? (0, r.Z)(h, {
                    totalInCents: t
                }) : g || (g = (0, r.Z)(u, {})) : (0, r.Z)(h, {
                    totalInCents: t
                })
            }
        },
        RL7f: (e, t, a) => {
            a.d(t, {
                Z: () => v
            });
            var n, r, i, o = a("sQwH"),
                s = (a("3Z9q"), a("vAnt")),
                c = a("X40V"),
                l = a("iu9k"),
                u = a("xIYY"),
                d = a("CfKk");
            const v = function(e) {
                var t = e.size,
                    a = void 0 === t ? "normal" : t,
                    v = (0, u.v9)(d.wl.authUser.user),
                    f = !v.isBuyer || v.isAnonymous;
                return (0, o.Z)("div", {
                    className: "c-cart-empty-state"
                }, void 0, (0, o.Z)("div", {
                    className: (0, c.AK)("c-cart-empty-state__image", "--".concat(a))
                }), n || (n = (0, o.Z)("p", {
                    className: "c-cart-empty-state__text"
                }, void 0, "Your cart is empty")), f && (r || (r = (0, o.Z)("p", {
                    className: "c-cart-empty-state__firstPurchase"
                }, void 0, (0, o.Z)("span", {}, void 0, "Save 20%"), " on your first purchase"))), (0, o.Z)("a", {
                    href: (0, l.HQ)("store:search")
                }, void 0, i || (i = (0, o.Z)(s.Z, {
                    text: "browse store models",
                    type: "store",
                    size: "large"
                }))))
            }
        },
        owJ0: (e, t, a) => {
            a.d(t, {
                Z: () => r
            });
            var n = a("sQwH");
            a("3Z9q");
            const r = function(e) {
                var t = e.count,
                    a = void 0 === t ? 0 : t,
                    r = e.title,
                    i = e.action,
                    o = void 0 === i ? null : i;
                return (0, n.Z)("div", {
                    className: "c-cart-header"
                }, void 0, (0, n.Z)("p", {
                    className: "c-cart-header__title"
                }, void 0, r), a ? (0, n.Z)("span", {
                    className: "c-cart-header__count"
                }, void 0, a) : null, (0, n.Z)("div", {
                    className: "c-cart-header__action"
                }, void 0, o))
            }
        },
        "/KXD": (e, t, a) => {
            a.d(t, {
                Z: () => p
            });
            var n, r, i, o, s = a("sQwH"),
                c = a("3Z9q"),
                l = a("LLYa"),
                u = a("X40V"),
                d = a("g/7r"),
                v = a("p5Lb"),
                f = a("A2i4"),
                m = a("ZZB/");

            function p(e) {
                var t = e.model,
                    a = e.size,
                    p = e.onRemove,
                    Z = void 0 === p ? d.EI : p,
                    h = !(0, l.Ef)(t);
                return (0, s.Z)("div", {
                    className: (0, u.AK)("c-cart-row", a ? "--".concat(a) : void 0, {
                        "--disabled": h
                    })
                }, void 0, (0, s.Z)("div", {
                    className: "c-cart-row__thumbnail"
                }, void 0, (0, s.Z)("a", {
                    "data-route": !0,
                    href: t.viewerUrl
                }, void 0, (0, s.Z)(f.ZP, {
                    alt: "Thumbnail for ".concat(t.name, " 3D model"),
                    width: 70,
                    height: 40,
                    images: t.thumbnails
                }))), (0, s.Z)("div", {
                    className: "c-cart-row__content"
                }, void 0, (0, s.Z)("p", {}, void 0, (0, s.Z)("span", {
                    "data-action": "open-model",
                    className: (0, u.AK)("c-cart-row__title", {
                        "--deleted": t.isDeleted
                    })
                }, void 0, (0, s.Z)(m.Z, {
                    model: t
                })), t.isDeleted && (n || (n = (0, s.Z)("span", {
                    className: "help"
                }, void 0, (0, s.Z)("i", {
                    className: "fa fa-question-circle"
                }), (0, s.Z)("span", {
                    className: "tooltip tooltip-right"
                }, void 0, "This model was deleted")))), "store" !== t.downloadType && (r || (r = (0, s.Z)("span", {
                    className: "help"
                }, void 0, (0, s.Z)("i", {
                    className: "fa fa-question-circle"
                }), (0, s.Z)("span", {
                    className: "tooltip tooltip-right"
                }, void 0, "This model is no longer for sale")))), t.isOwned && c.createElement(c.Fragment, null, i || (i = (0, s.Z)("br", {})), (0, s.Z)("a", {
                    className: "skfb-link",
                    href: t.viewerUrl
                }, void 0, "Model already bought"))), (0, s.Z)("p", {
                    className: "c-cart-row__price"
                }, void 0, (0, v.T4)(t.price))), Z !== d.EI && (0, s.Z)("div", {
                    className: "c-cart-row__actions"
                }, void 0, (0, s.Z)("button", {
                    className: "c-cart-row__remove",
                    onClick: function(e) {
                        e.stopPropagation(), Z()
                    }
                }, void 0, o || (o = (0, s.Z)("i", {
                    className: "icon fa fa-times"
                })))))
            }
        },
        "0dnH": (e, t, a) => {
            a.d(t, {
                Z: () => d
            });
            var n = a("sQwH"),
                r = a("xKIK"),
                i = a("3Z9q"),
                o = a("+Ouw"),
                s = a("UQv7"),
                c = a("X40V"),
                l = a("xIYY"),
                u = a("CfKk");
            const d = function(e) {
                var t = e.totalPrice,
                    a = e.forceHide,
                    d = void 0 !== a && a,
                    v = e.withBorder,
                    f = void 0 !== v && v,
                    m = (0, o.Cl)(),
                    p = (0, o.td)(t),
                    Z = (0, l.v9)(u.wl.authUser.user),
                    h = !Z.isBuyer || Z.isAnonymous;
                return i.useEffect((function() {
                    !m && p && (0, o.UY)(p.save)
                }), [m, p]), p && (d && t <= p.minimum || !d) ? h && Number(p.save) <= 20 ? null : (0, n.Z)("div", {
                    className: (0, c.AK)("c-upsell-message", s.Z.view, (0, r.Z)({}, (0, c.c6)(s.Z, "with-border"), !!f))
                }, void 0, "Spend $".concat(p.minimum / 100, " or more & Save ").concat(p.save, "% Now")) : null
            }
        },
        XMho: (e, t, a) => {
            a.d(t, {
                Z: () => k
            });
            var n = a("Wch8"),
                r = a("D4hk"),
                i = a("sGMM"),
                o = a("sQwH"),
                s = a("eLCO"),
                c = a.n(s),
                l = a("3Z9q"),
                u = a("xIYY"),
                d = a("CfKk");
            const v = function(e) {
                var t = e.level,
                    a = e.uid,
                    n = e.children,
                    r = (0, u.I0)(),
                    i = l.useCallback((function() {
                        return r(d.Nw.messages.remove(a))
                    }), [a, r]);
                return (0, l.useEffect)((function() {
                    var e = setTimeout((function() {
                        return i()
                    }), 6e3);
                    return function() {
                        clearTimeout(e)
                    }
                })), (0, o.Z)("div", {
                    className: "flashmessage notification ".concat(t)
                }, void 0, (0, o.Z)("div", {
                    className: "inner"
                }, void 0, (0, o.Z)("div", {
                    className: "message"
                }, void 0, n), (0, o.Z)("button", {
                    className: "flashmessage-close",
                    onClick: i,
                    title: "Close"
                })))
            };
            var f, m, p, Z = a("xovo"),
                h = a("iu9k"),
                g = a("pgZm"),
                _ = a("LLYa"),
                y = function(e) {
                    var t = e.uid,
                        a = e.level,
                        n = void 0 === a ? "warning" : a;
                    return (0, o.Z)(v, {
                        level: n,
                        uid: t
                    }, void 0, "Important: your email hasn", "'", "t been confirmed yet. ", f || (f = (0, o.Z)("br", {})), (0, o.Z)("a", {
                        href: (0, h.HQ)("users:settings_email")
                    }, void 0, "Confirm now"))
                },
                N = function(e) {
                    var t = e.uid,
                        a = e.level,
                        n = void 0 === a ? "success" : a,
                        r = e.model,
                        s = (0, _.IL)(r),
                        c = (0, i.Z)(s, 2),
                        l = c[0],
                        u = c[1];
                    return (0, o.Z)(v, {
                        level: n,
                        uid: t
                    }, void 0, m || (m = (0, o.Z)("i", {
                        className: "fa fa-check-circle"
                    })), "The model has been transferred successfully. ", (0, o.Z)("a", {
                        href: (0, h.HQ)(l, u)
                    }, void 0, "Go to model"))
                },
                w = function(e) {
                    var t = e.uid,
                        a = e.level,
                        n = void 0 === a ? "success" : a,
                        r = e.project,
                        s = (0, g.Qs)(r),
                        c = (0, i.Z)(s, 2),
                        l = c[0],
                        u = c[1];
                    return (0, o.Z)(v, {
                        level: n,
                        uid: t
                    }, void 0, p || (p = (0, o.Z)("i", {
                        className: "fa fa-check-circle"
                    })), "Your models have been successfully transfered to ", (0, o.Z)("a", {
                        href: (0, h.HQ)(l, u)
                    }, void 0, r.name))
                },
                b = function() {
                    var e = (0, u.v9)(d.wl.messages.messages);
                    return (0, o.Z)("div", {
                        className: "flashmessage-container"
                    }, void 0, e.map((function(e) {
                        if (!(0, Z.d)(e)) return l.createElement(v, (0, r.Z)({
                            key: e.uid
                        }, e), e.message);
                        switch (e.type) {
                            case "confirmEmail":
                                return l.createElement(y, (0, r.Z)({
                                    key: e.uid
                                }, e));
                            case "modelTransfer":
                                return l.createElement(N, (0, r.Z)({
                                    key: e.uid
                                }, e));
                            case "modelsTransfer":
                                return l.createElement(w, (0, r.Z)({
                                    key: e.uid
                                }, e));
                            default:
                                (0, r.Z)({
                                    key: e.uid
                                }, e)
                        }
                    })))
                };
            b.prepare = function() {
                var e = (0, n.Z)(c().mark((function e(t) {
                    var a, n;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = t.services, n = t.props.messages, e.next = 3, a.dispatch(d.Nw.authUser.getFromPrefetched());
                            case 3:
                                n && a.dispatch(d.Nw.messages.addMultiple(n));
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            const k = b
        },
        Fexd: (e, t, a) => {
            a.d(t, {
                Z: () => v
            });
            var n = a("sQwH"),
                r = a("3Z9q"),
                i = a("xIYY"),
                o = a("iu9k"),
                s = a("vAnt"),
                c = a("CfKk"),
                l = a("l9Gv"),
                u = function(e) {
                    var t = (0, i.I0)(),
                        a = (0, i.v9)(c.wl.authUser.allowsGdpr),
                        n = r.useCallback((function() {
                            t(c.Nw.authUser.allowGdpr())
                        }), [t]);
                    return e.children({
                        allowsGdpr: a,
                        onAccept: n
                    })
                },
                d = function(e) {
                    var t = e.allowsGdpr,
                        a = e.onAccept,
                        r = void 0 === a ? function() {} : a;
                    return t ? null : (0, n.Z)("aside", {
                        className: "c-gdpr-banner"
                    }, void 0, (0, n.Z)("p", {}, void 0, "By continuing to browse Sketchfab, you agree to the use of cookies for advertising and audience measurement purposes. Learn more in our", " ", (0, n.Z)("a", {
                        target: "_blank",
                        href: (0, o.HQ)("pages:privacy")
                    }, void 0, "privacy policy"), "."), (0, n.Z)(s.Z, {
                        text: "I agree",
                        size: "medium",
                        onClick: r
                    }))
                };

            function v() {
                return (0, n.Z)(l.Z, {}, void 0, (function() {
                    return (0, n.Z)(u, {}, void 0, (function(e) {
                        return r.createElement(d, e)
                    }))
                }))
            }
        },
        bvJA: (e, t, a) => {
            a.d(t, {
                Z: () => D
            });
            var n, r = a("sQwH"),
                i = a("7isf"),
                o = a("3Z9q"),
                s = a("8nmZ"),
                c = a("iu9k"),
                l = a("X40V"),
                u = a("mSEu"),
                d = a("qNsD"),
                v = a("D4hk");
            const f = function(e) {
                return o.createElement("svg", (0, v.Z)({
                    width: 18,
                    height: 18
                }, e), n || (n = (0, r.Z)("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, (0, r.Z)("path", {
                    d: "M0 0h18v18H0z"
                }), (0, r.Z)("path", {
                    className: "prefix__social-link-path",
                    d: "M.234 18H4.1V5.848H.234V18zM4.35 2.101C4.34 1.494 4.138.992 3.747.595 3.357.198 2.838 0 2.191 0 1.545 0 1.018.198.611.595.204.992 0 1.495 0 2.101c0 .595.198 1.095.594 1.497.396.403.912.604 1.547.604h.017c.658 0 1.188-.201 1.59-.604.4-.402.601-.902.601-1.497zM14.136 18H18v-6.969c0-1.798-.407-3.157-1.221-4.08-.814-.922-1.89-1.383-3.229-1.383-1.517 0-2.682.683-3.496 2.049h.033V5.848H6.223c.034.77.034 4.821 0 12.152h3.864v-6.794c0-.443.04-.77.117-.98.168-.409.419-.756.753-1.042.335-.286.747-.43 1.238-.43 1.294 0 1.94.917 1.94 2.75V18z",
                    fill: "#999",
                    fillRule: "nonzero"
                }))))
            };
            var m;
            const p = function(e) {
                return o.createElement("svg", (0, v.Z)({
                    width: 18,
                    height: 18
                }, e), m || (m = (0, r.Z)("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, (0, r.Z)("path", {
                    d: "M0 0h18v18H0z"
                }), (0, r.Z)("path", {
                    className: "prefix__social-link-path",
                    d: "M9.318 0C4.453 0 2 3.522 2 6.459c0 1.778.667 3.36 2.097 3.95.234.096.444.003.512-.26.048-.18.16-.638.21-.829.068-.26.041-.35-.148-.576-.412-.491-.676-1.127-.676-2.028 0-2.613 1.937-4.952 5.042-4.952 2.75 0 4.26 1.697 4.26 3.963 0 2.98-1.306 5.497-3.246 5.497-1.071 0-1.873-.895-1.616-1.992.308-1.31.904-2.723.904-3.669 0-.846-.45-1.552-1.381-1.552-1.095 0-1.975 1.144-1.975 2.676 0 .976.327 1.636.327 1.636l-1.317 5.634c-.392 1.672-.06 3.722-.031 3.93.017.122.173.151.243.058.101-.133 1.406-1.758 1.849-3.383.125-.46.72-2.842.72-2.842.356.685 1.396 1.289 2.501 1.289 3.292 0 5.525-3.03 5.525-7.086C15.8 2.856 13.227 0 9.318 0",
                    fill: "#999"
                }))))
            };
            var Z;
            const h = function(e) {
                return o.createElement("svg", (0, v.Z)({
                    width: 18,
                    height: 18
                }, e), Z || (Z = (0, r.Z)("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, (0, r.Z)("path", {
                    d: "M0 0h18v18H0z"
                }), (0, r.Z)("path", {
                    className: "prefix__social-link-path",
                    d: "M10.074 18V9.787h2.747l.414-3.203h-3.161V4.541c0-.515.108-.901.324-1.16.216-.257.637-.386 1.263-.386l1.684-.013V.124C12.765.041 11.946 0 10.888 0 9.637 0 8.636.368 7.886 1.104c-.75.736-1.125 1.776-1.125 3.12v2.36H4v3.203h2.76V18h3.314z",
                    fill: "#999",
                    fillRule: "nonzero"
                }))))
            };
            var g;
            const _ = function(e) {
                return o.createElement("svg", (0, v.Z)({
                    width: 18,
                    height: 18
                }, e), g || (g = (0, r.Z)("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, (0, r.Z)("path", {
                    d: "M0 0h18v18H0z"
                }), (0, r.Z)("path", {
                    className: "prefix__social-link-path",
                    d: "M9 0C6.556 0 6.25.01 5.29.054S3.676.25 3.104.473A4.411 4.411 0 001.51 1.51c-.5.5-.809 1.002-1.039 1.594C.25 3.677.098 4.33.054 5.289.01 6.25 0 6.556 0 9s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.594.5.5 1.002.808 1.594 1.039.572.222 1.226.374 2.184.418C6.25 17.99 6.556 18 9 18s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.418a4.412 4.412 0 001.594-1.039c.5-.5.809-1.002 1.039-1.594.222-.572.374-1.226.418-2.184C17.99 11.75 18 11.444 18 9s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.418-2.185a4.412 4.412 0 00-1.039-1.594c-.5-.5-1.002-.809-1.594-1.038C14.323.25 13.67.098 12.711.054 11.75.01 11.444 0 9 0m0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67a2.79 2.79 0 01-.673 1.036c-.315.315-.615.51-1.035.673-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.671-.31a2.788 2.788 0 01-1.035-.673 2.789 2.789 0 01-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67a2.79 2.79 0 01.673-1.036c.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052M9 12a3 3 0 110-6 3 3 0 010 6m0-7.622a4.622 4.622 0 110 9.244 4.622 4.622 0 010-9.244zm5.884-.182a1.08 1.08 0 11-2.16 0 1.08 1.08 0 012.16 0z",
                    fill: "#999"
                }))))
            };
            var y;
            const N = function(e) {
                return o.createElement("svg", (0, v.Z)({
                    width: 18,
                    height: 18
                }, e), y || (y = (0, r.Z)("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, (0, r.Z)("path", {
                    d: "M0 0h18v18H0z"
                }), (0, r.Z)("path", {
                    className: "prefix__social-link-path",
                    d: "M18 3.723a7.82 7.82 0 01-2.127.597c.797-.468 1.342-1.154 1.635-2.056a7.341 7.341 0 01-2.356.896C14.438 2.387 13.541 2 12.462 2c-1.019 0-1.889.36-2.61 1.081a3.557 3.557 0 00-1.08 2.61c0 .34.029.622.087.844a10.45 10.45 0 01-4.254-1.142A10.464 10.464 0 011.23 2.668a3.656 3.656 0 00-.51 1.863c0 1.336.534 2.362 1.6 3.076-.55-.011-1.136-.164-1.757-.457v.036c0 .878.292 1.66.878 2.346.586.686 1.307 1.11 2.163 1.275-.34.093-.64.14-.897.14-.152 0-.38-.023-.686-.07a3.753 3.753 0 001.31 1.828c.627.48 1.339.727 2.136.738-1.36 1.055-2.889 1.582-4.588 1.582-.305 0-.598-.017-.879-.052a10.355 10.355 0 005.66 1.652 10.76 10.76 0 003.692-.624c1.148-.416 2.132-.973 2.953-1.67.82-.697 1.526-1.5 2.118-2.408a10.612 10.612 0 001.318-2.848c.287-.99.43-1.977.43-2.962 0-.21-.005-.369-.017-.474A7.175 7.175 0 0018 3.723z",
                    fill: "#999",
                    fillRule: "nonzero"
                }))))
            };
            var w;
            const b = function(e) {
                return o.createElement("svg", (0, v.Z)({
                    width: 18,
                    height: 18,
                    viewBox: "0 0 71 55"
                }, e), w || (w = (0, r.Z)("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, (0, r.Z)("path", {
                    d: "M0 0h18v18H0z"
                }), (0, r.Z)("path", {
                    className: "prefix__social-link-path",
                    d: "M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z",
                    fill: "#999",
                    fillRule: "nonzero"
                }))))
            };
            var k, C, x, H, S, A, Q, E = a("xIYY"),
                R = a("CfKk"),
                U = (0, s.Z)((function(e, t) {
                    return [{
                        title: "enterprise",
                        links: [{
                            href: (0, c.HQ)("pages:enterprise", {}, {
                                ref: "footer"
                            }),
                            text: "Enterprise Solutions"
                        }, {
                            href: (0, c.HQ)("pages:configurator", {}, {
                                ref: "footer"
                            }),
                            text: "3D Configurators"
                        }, {
                            href: (0, c.HQ)("pages:ecommerce", {}, {
                                ref: "footer"
                            }),
                            text: "3D eCommerce"
                        }, {
                            href: (0, c.HQ)("pages:viewer", {}, {
                                ref: "footer"
                            }),
                            text: "3D Viewer"
                        }, {
                            href: (0, c.HQ)("pages:advertising", {}, {
                                ref: "footer"
                            }),
                            text: "3D Advertising"
                        }, {
                            href: (0, c.HQ)("pages:3d_asset_management", {}, {
                                ref: "footer"
                            }),
                            text: "Sketchfab for Teams"
                        }, {
                            href: u.Z.hosts.enterpriseBlog + "?ref=footer",
                            text: "Customer Stories"
                        }, {
                            href: (0, c.HQ)("pages:plans", {}, {
                                ref: "footer"
                            }),
                            text: "Pricing"
                        }]
                    }, {
                        title: "ecosystem",
                        links: [{
                            href: (0, c.HQ)("pages:exporters", {}, {
                                ref: "footer"
                            }),
                            text: "Exporters"
                        }, {
                            href: (0, c.HQ)("pages:importers", {}, {
                                ref: "footer"
                            }),
                            text: "Importers"
                        }, {
                            href: (0, c.HQ)("pages:developers", {}, {
                                ref: "footer"
                            }),
                            text: "Developers & API"
                        }, {
                            href: (0, c.HQ)("pages:ar_landing", {}, {
                                ref: "footer"
                            }),
                            text: "Augmented Reality"
                        }, {
                            href: (0, c.HQ)("pages:virtual_reality", {}, {
                                ref: "footer"
                            }),
                            text: "Virtual Reality"
                        }, {
                            href: (0, c.HQ)("pages:mobile", {}, {
                                ref: "footer"
                            }),
                            text: "Mobile App"
                        }]
                    }, {
                        title: "store",
                        links: [{
                            href: (0, c.HQ)("store:home", {}, {
                                ref: "footer"
                            }),
                            text: "Buy 3D models"
                        }, {
                            href: (0, c.HQ)("store:search", {}, {
                                sort_by: "-orderCount",
                                ref: "footer"
                            }),
                            text: "Best Selling"
                        }, {
                            href: (0, c.HQ)("store:categories_list", {}, {
                                ref: "footer"
                            }),
                            text: "Categories"
                        }, {
                            href: u.Z.hosts.faq + "/articles/115004259063-Selling-your-3D-Models" + e,
                            text: "Become a Seller"
                        }, {
                            href: (0, c.HQ)("pages:features_download", {}, {
                                ref: "footer"
                            }),
                            text: "Free 3D Models"
                        }]
                    }, {
                        title: "community",
                        links: [{
                            href: (0, c.HQ)("models:popular", {}, {
                                ref: "footer"
                            }),
                            text: "Explore"
                        }, {
                            href: u.Z.hosts.faq + e,
                            text: "Help Center"
                        }, {
                            href: (0, c.HQ)("pages:education", {}, {
                                ref: "footer"
                            }),
                            text: "Education"
                        }, {
                            href: (0, c.HQ)("pages:museums", {}, {
                                ref: "footer"
                            }),
                            text: "Museums"
                        }, {
                            href: u.Z.hosts.communityBlog + "?ref=footer",
                            text: "Blog"
                        }, {
                            href: u.Z.hosts.discourse + e,
                            text: "Forum"
                        }, {
                            href: u.Z.hosts.communityBlog + "/category/challenges" + e,
                            text: "Challenges"
                        }].concat((0, i.Z)(t ? [{
                            href: (0, c.HQ)("pages:masters_landing"),
                            text: "Sketchfab Masters"
                        }] : []))
                    }, {
                        title: "about",
                        links: [{
                            href: (0, c.HQ)("pages:about"),
                            text: "Company"
                        }, {
                            href: (0, c.HQ)("pages:careers"),
                            text: "Careers"
                        }, {
                            href: (0, c.HQ)("pages:press"),
                            text: "Press Kit"
                        }, {
                            href: (0, c.HQ)("pages:features"),
                            text: "Features"
                        }, {
                            href: (0, c.HQ)("pages:about") + "#contact",
                            text: "Contact us",
                            className: "button btn-large btn-primary main-footer__button"
                        }]
                    }]
                }));

            function I(e) {
                var t = e.hideNavigation,
                    a = "?utm_source=website&utm_campaign=footer",
                    n = (0, E.v9)(R.wl.authUser.canAccessFeature("ff_masters_landing")),
                    i = U(a, n);
                return (0, r.Z)("footer", {
                    className: "main-footer"
                }, void 0, (0, r.Z)("div", {
                    className: "container"
                }, void 0, t ? null : (0, r.Z)("nav", {
                    className: "main-footer__navigation",
                    "aria-label": "footer navigation"
                }, void 0, i.map((function(e) {
                    return (0, r.Z)("div", {
                        className: "main-footer__col"
                    }, e.title, (0, r.Z)("span", {
                        className: "main-footer__title"
                    }, void 0, e.title), (0, r.Z)("ul", {
                        className: "main-footer__links"
                    }, void 0, e.links.map((function(e) {
                        return (0, r.Z)("li", {
                            className: "main-footer__link"
                        }, e.text, (0, r.Z)("a", {
                            className: (0, l.AK)("skfb-link", e.className),
                            href: e.href
                        }, void 0, e.text))
                    }))))
                }))), (0, r.Z)("div", {
                    className: "main-footer__copyrights-container"
                }, void 0, k || (k = (0, r.Z)("div", {
                    className: "main-footer__copyrights"
                }, void 0, (0, r.Z)(d.Z, {
                    className: "main-footer__logo",
                    brand: !1
                }), (0, r.Z)("span", {}, void 0, "© 2022, Sketchfab, Inc. All rights reserved."))), (0, r.Z)("span", {
                    className: "main-footer__copyrights-links"
                }, void 0, (0, r.Z)("a", {
                    href: (0, c.HQ)("pages:terms"),
                    className: "skfb-link"
                }, void 0, "Terms of service"), (0, r.Z)("a", {
                    href: "".concat(u.Z.hosts.faq, "/articles/115004259123-Refund-Policy").concat(a),
                    className: "skfb-link",
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, void 0, "Refund policy"), (0, r.Z)("a", {
                    href: (0, c.HQ)("pages:privacy"),
                    className: "skfb-link"
                }, void 0, "Privacy policy"), (0, r.Z)("a", {
                    href: (0, c.HQ)("pages:html_sitemap_index"),
                    className: "skfb-link"
                }, void 0, "Sitemap")), (0, r.Z)("span", {
                    className: "main-footer__social-links"
                }, void 0, C || (C = (0, r.Z)("a", {
                    href: "https://twitter.com/Sketchfab",
                    rel: "noopener noreferrer",
                    target: "_blank",
                    className: "skfb-link",
                    "aria-label": "Follow us on Twitter"
                }, void 0, (0, r.Z)(N, {}))), x || (x = (0, r.Z)("a", {
                    href: "https://www.instagram.com/sketchfab",
                    rel: "noopener noreferrer",
                    target: "_blank",
                    className: "skfb-link",
                    "aria-label": "Follow us on Instagram"
                }, void 0, (0, r.Z)(_, {}))), H || (H = (0, r.Z)("a", {
                    href: "https://www.facebook.com/Sketchfab",
                    rel: "noopener noreferrer",
                    target: "_blank",
                    className: "skfb-link",
                    "aria-label": "Follow us on Facebook"
                }, void 0, (0, r.Z)(h, {}))), (0, r.Z)("a", {
                    href: u.Z.hosts.discord,
                    rel: "noopener noreferrer",
                    target: "_blank",
                    className: "skfb-link",
                    "aria-label": "Join us on Discord"
                }, void 0, S || (S = (0, r.Z)(b, {}))), A || (A = (0, r.Z)("a", {
                    href: "https://www.pinterest.com/sketchfab",
                    rel: "noopener noreferrer",
                    target: "_blank",
                    className: "skfb-link",
                    "aria-label": "Follow us on Pinterest"
                }, void 0, (0, r.Z)(p, {}))), Q || (Q = (0, r.Z)("a", {
                    href: "https://www.linkedin.com/company/sketchfab",
                    rel: "noopener noreferrer",
                    target: "_blank",
                    className: "skfb-link",
                    "aria-label": "Follow us on Linkedin"
                }, void 0, (0, r.Z)(f, {})))))))
            }
            const D = o.memo(I)
        },
        "8Ux5": (e, t, a) => {
            a.d(t, {
                Z: () => d
            });
            var n = a("sQwH"),
                r = a("sGMM"),
                i = a("3Z9q"),
                o = a("X40V"),
                s = a("iu9k"),
                c = a("qNsD"),
                l = a("k1tG"),
                u = function(e) {
                    var t = e.className,
                        a = i.useContext(l.Z),
                        u = i.useState(!1),
                        d = (0, r.Z)(u, 2),
                        v = d[0],
                        f = d[1];
                    return (0, n.Z)("a", {
                        "aria-label": "Go to the mainpage",
                        className: t,
                        href: (0, s.HQ)("pages:index"),
                        onMouseEnter: function() {
                            return f(!0)
                        },
                        onMouseLeave: function() {
                            return f(!1)
                        }
                    }, void 0, (0, n.Z)(c.Z, {
                        color: "transparent" === a ? "white" : o.O9.skfbGrey0,
                        logoColor: "transparent" === a && v ? "white" : "transparent",
                        circleColor: "transparent" !== a || v ? o.O9.skfbBlue : "white"
                    }))
                };
            const d = i.memo(u)
        },
        k1tG: (e, t, a) => {
            a.d(t, {
                Z: () => n
            });
            const n = a("3Z9q").createContext("light")
        },
        AEj9: (e, t, a) => {
            a.d(t, {
                Z: () => N
            });
            var n, r = a("sQwH"),
                i = a("sGMM"),
                o = a("3Z9q"),
                s = a("xIYY"),
                c = a("HPk7"),
                l = a("X40V"),
                u = a("RyjW"),
                d = a("CfKk"),
                v = a("l9Gv"),
                f = o.lazy((function() {
                    return Promise.all([a.e(6952), a.e(3865), a.e(4040), a.e(397)]).then(a.bind(a, "2kxn"))
                })),
                m = (0, s.$j)((function(e) {
                    return {
                        isOpen: d.wl.search.isOpen(e)
                    }
                }));
            const p = o.memo(m((function(e) {
                var t = e.isOpen,
                    a = o.useRef(null);
                return o.useEffect((function() {
                    document.body.classList.toggle("--prevent-scroll", t)
                }), [t]), t ? o.createElement("aside", {
                    "aria-label": "Search Overlay",
                    ref: a,
                    className: (0, l.AK)("c-search-overlay", {
                        visible: t
                    })
                }, (0, r.Z)(v.Z, {}, void 0, (function() {
                    return t ? (0, r.Z)(o.Suspense, {
                        fallback: n || (n = (0, r.Z)("div", {
                            className: "spinner initial-spinner"
                        }))
                    }, void 0, (0, r.Z)(f, {
                        parentElement: a.current
                    })) : null
                }))) : null
            })));
            var Z, h, g, _ = a("Yl+r"),
                y = a("k1tG");
            const N = function(e) {
                var t = e.children,
                    a = e.isTransparent,
                    n = e.isStandalone,
                    f = void 0 !== n && n,
                    m = o.useState(!1),
                    N = (0, i.Z)(m, 2),
                    w = N[0],
                    b = N[1],
                    k = o.useRef(window),
                    C = (0, s.v9)(d.wl.search.isOpen),
                    x = o.useRef(w),
                    H = o.useRef(null);
                o.useEffect((function() {
                    x.current = w
                }), [w]), (0, u.Z)(k, "scroll", (0, c.Z)((function() {
                    var e = window.scrollY > 50;
                    x.current !== e && b(e)
                }), 100), {
                    passive: !0
                });
                var S = !a || w || C ? "light" : "transparent",
                    A = f ? Z || (Z = (0, r.Z)("main", {}, void 0, (0, r.Z)("h1", {
                        className: "c-page-header__search-overlay-title"
                    }, void 0, "Sketchfab Search"), (0, r.Z)(p, {}))) : h || (h = (0, r.Z)(p, {}));
                return (0, r.Z)(_.Js, {}, void 0, (0, r.Z)(y.Z.Provider, {
                    value: S
                }, void 0, o.createElement("header", {
                    ref: H,
                    className: (0, l.AK)("c-page-header", "responsive-navigation-slidable", {
                        "--searching": C,
                        "--scroll": w,
                        "--transparent": "transparent" === S
                    })
                }, (0, r.Z)("div", {
                    className: (0, l.AK)("c-page-header__flex-container", "container", "--fullscreen")
                }, void 0, t)), A, (0, r.Z)(v.Z, {}, void 0, (function() {
                    return g || (g = (0, r.Z)(_.t2, {}))
                }))))
            }
        },
        Vtax: (e, t, a) => {
            a.d(t, {
                Z: () => o
            });
            var n, r = a("sQwH"),
                i = (a("3Z9q"), a("leAp"));
            const o = function() {
                return (0, r.Z)("div", {
                    className: i.Z.view
                }, void 0, (0, r.Z)("div", {
                    className: i.Z.icon
                }), n || (n = (0, r.Z)("p", {
                    className: "--grey"
                }, void 0, "No notifications")))
            }
        },
        "DMv+": (e, t, a) => {
            a.d(t, {
                V: () => o,
                J: () => s
            });
            var n = a("sQwH"),
                r = a("sGMM"),
                i = a("3Z9q"),
                o = i.createContext({
                    isOpen: !1,
                    setIsOpen: function() {}
                }),
                s = function(e) {
                    var t = e.children,
                        a = i.useState(!1),
                        s = (0, r.Z)(a, 2),
                        c = s[0],
                        l = s[1];
                    return (0, n.Z)(o.Provider, {
                        value: {
                            isOpen: c,
                            setIsOpen: l
                        }
                    }, void 0, t)
                }
        },
        "Yl+r": (e, t, a) => {
            a.d(t, {
                t2: () => T,
                Js: () => H.J,
                Kw: () => S,
                B$: () => O
            });
            var n = a("sQwH"),
                r = a("3Z9q"),
                i = a("xIYY"),
                o = a("CfKk"),
                s = a("X40V"),
                c = a("iu9k"),
                l = a("KiA0"),
                u = a("pLUK"),
                d = a("D4hk"),
                v = a("mSEu"),
                f = a("sGMM");

            function m(e) {
                var t = e.className,
                    a = e.children,
                    i = e.header,
                    o = r.useRef(null),
                    c = r.useState(!1),
                    l = (0, f.Z)(c, 2),
                    u = l[0],
                    d = l[1];
                return (0, n.Z)("section", {
                    className: (0, s.AK)("c-navigation-accordion", t, {
                        "--active": u
                    })
                }, void 0, (0, n.Z)("header", {
                    onClick: function() {
                        d((function(e) {
                            return !e
                        })), o.current && (o.current.style.maxHeight ? o.current.style.maxHeight = "" : o.current.style.maxHeight = o.current.scrollHeight + "px")
                    },
                    className: "c-navigation-accordion__header"
                }, void 0, i), r.createElement("div", {
                    ref: o,
                    className: "c-navigation-accordion__panel"
                }, a))
            }
            const p = function(e) {
                var t = e.href,
                    a = e.target,
                    r = e.rel,
                    i = e.SEOTitle,
                    o = e.title,
                    c = e.icon,
                    l = e.anchor,
                    u = void 0 === l ? "" : l,
                    d = e.onClick;
                return (0, n.Z)("li", {
                    className: "responsive-navigation__link"
                }, void 0, (0, n.Z)("a", {
                    href: t + u,
                    title: i || o,
                    target: a,
                    rel: r,
                    onClick: d,
                    className: "navigation-link"
                }, void 0, c ? (0, n.Z)("i", {
                    className: (0, s.AK)("icon", "--translucent", c)
                }) : null, (0, n.Z)("span", {}, void 0, o)))
            };
            var Z, h, g, _, y, N, w, b, k, C = r.memo((function(e) {
                    var t = e.anchor,
                        a = void 0 === t ? "" : t,
                        i = [{
                            title: "Sketchfab for Teams",
                            href: (0, c.HQ)("pages:3d_asset_management"),
                            anchor: a
                        }, {
                            title: "Augmented Reality",
                            href: (0, c.HQ)("pages:ar_landing"),
                            anchor: a
                        }, {
                            title: "3D Viewer",
                            href: (0, c.HQ)("pages:viewer"),
                            anchor: a
                        }, {
                            title: "3D eCommerce",
                            href: (0, c.HQ)("pages:ecommerce"),
                            anchor: a
                        }, {
                            title: "3D Configurators",
                            href: (0, c.HQ)("pages:configurator"),
                            anchor: a
                        }, {
                            title: "Find a Partner",
                            href: v.Z.hosts.enterpriseBlog + "/partners-directory",
                            anchor: a
                        }, {
                            title: "Pricing",
                            href: (0, c.HQ)("pages:plans"),
                            anchor: a
                        }, {
                            title: "Customer Stories",
                            href: v.Z.hosts.enterpriseBlog,
                            anchor: a
                        }];
                    return (0, n.Z)(m, {
                        className: "section navigation responsive-navigation__section",
                        header: Z || (Z = (0, n.Z)("h3", {
                            className: "title"
                        }, void 0, "For business"))
                    }, void 0, (0, n.Z)("ul", {}, void 0, i.map((function(e) {
                        return r.createElement(p, (0, d.Z)({
                            key: e.title
                        }, e))
                    }))))
                })),
                x = r.memo((function(e) {
                    var t = e.anchor,
                        a = void 0 === t ? "" : t,
                        i = e.subdomainAnchor,
                        o = void 0 === i ? "" : i;
                    return (0, n.Z)(m, {
                        className: "section navigation responsive-navigation__section",
                        header: h || (h = (0, n.Z)("h3", {
                            className: "title"
                        }, void 0, "Explore"))
                    }, void 0, (0, n.Z)("ul", {}, void 0, [{
                        title: "All categories",
                        href: (0, c.HQ)("categories:list"),
                        icon: "custom-icons icon-model-icon"
                    }, {
                        title: "Popular",
                        href: (0, c.HQ)("models:popular"),
                        SEOTitle: "Popular 3D models",
                        icon: "custom-icons icon-popular"
                    }, {
                        title: "Staff picks",
                        href: (0, c.HQ)("models:staffpicks"),
                        SEOTitle: "Staff picks 3D models",
                        icon: "custom-icons icon-staffpicks-icon"
                    }, {
                        title: "Downloadable",
                        href: (0, c.HQ)("models:explore", {}, {
                            features: "downloadable",
                            date: "week",
                            sort_by: "-likeCount"
                        }),
                        SEOTitle: "Downloadable 3D models",
                        icon: "fa fa-download"
                    }, {
                        title: "Collections",
                        SEOTitle: "3D models collections",
                        href: (0, c.HQ)("collections:popular"),
                        icon: "custom-icons icon-collection"
                    }].map((function(e) {
                        return r.createElement(p, (0, d.Z)({
                            key: e.title
                        }, e))
                    })), g || (g = (0, n.Z)("li", {
                        className: "responsive-navigation__separator"
                    })), [{
                        title: "Blog",
                        href: v.Z.hosts.communityBlog,
                        target: "_blank",
                        anchor: a
                    }, {
                        title: "Forum",
                        href: v.Z.hosts.discourse,
                        target: "_blank",
                        anchor: o
                    }, {
                        title: "Challenges",
                        href: v.Z.hosts.communityBlog + "/category/challenges",
                        target: "_blank",
                        anchor: a
                    }, {
                        title: "Community members",
                        href: (0, c.HQ)("users:explore_users"),
                        target: "_blank"
                    }].map((function(e) {
                        return r.createElement(p, (0, d.Z)({
                            key: e.title
                        }, e))
                    }))))
                })),
                H = a("DMv+"),
                S = function(e) {
                    var t = e.className,
                        a = r.useContext(H.V).setIsOpen;
                    return (0, n.Z)("button", {
                        className: (0, s.AK)("c-page-header__action", t),
                        onClick: function() {
                            return a((function(e) {
                                return !e
                            }))
                        },
                        "aria-label": "navigation"
                    }, void 0, _ || (_ = (0, n.Z)("span", {
                        className: "c-page-header__action__icon-container"
                    }, void 0, (0, n.Z)("i", {
                        className: "c-page-header__action__icon fa fa-bars"
                    }))))
                },
                A = r.memo((function() {
                    return (0, n.Z)(m, {
                        className: "section navigation responsive-navigation__section",
                        header: y || (y = (0, n.Z)("h3", {
                            className: "title"
                        }, void 0, "Buy 3D models"))
                    }, void 0, (0, n.Z)("ul", {}, void 0, [{
                        title: "All categories",
                        href: (0, c.HQ)("store:categories_list"),
                        icon: "custom-icons icon-model-icon"
                    }, {
                        title: "Best selling",
                        href: (0, c.HQ)("store:search", {}, {
                            sort_by: "-orderCount"
                        }),
                        SEOTitle: "Best selling 3D models",
                        icon: "custom-icons icon-best-selling"
                    }, {
                        title: "Animated",
                        href: (0, c.HQ)("store:search", {}, {
                            animated: !0
                        }),
                        SEOTitle: "Animated 3D models",
                        icon: "fa fa-film"
                    }, {
                        title: "PBR",
                        href: (0, c.HQ)("store:search", {}, {
                            pbr: !0
                        }),
                        SEOTitle: "PBR 3D models",
                        icon: "custom-icons icon-pbr"
                    }, {
                        title: "Low poly",
                        SEOTitle: "Low poly 3D models",
                        href: (0, c.HQ)("store:search", {}, {
                            min_face_count: "0",
                            max_face_count: "10000"
                        }),
                        icon: "custom-icons icon-low-poly"
                    }, {
                        title: "High poly",
                        SEOTitle: "High poly 3D models",
                        href: (0, c.HQ)("store:search", {}, {
                            min_face_count: "100000",
                            ref: "header"
                        }),
                        icon: "custom-icons icon-high-poly"
                    }, {
                        title: "3D Printable",
                        SEOTitle: "3D Printable 3D models",
                        href: (0, c.HQ)("store:search", {}, {
                            file_formats: ["stl"],
                            ref: "header"
                        }),
                        icon: "custom-icons icon-d-printing"
                    }, {
                        title: "3D Scan",
                        SEOTitle: "3D Scan 3D models",
                        href: (0, c.HQ)("store:search", {}, {
                            q: ["scan"],
                            sort_by: "-orderCount",
                            ref: "header"
                        }),
                        icon: "custom-icons icon-D-Scan"
                    }].map((function(e) {
                        return r.createElement(p, (0, d.Z)({
                            key: e.title
                        }, e))
                    }))))
                })),
                Q = a("hDfq"),
                E = a("LvQi"),
                R = a("vAnt"),
                U = a("T+hC"),
                I = a("Ixlc"),
                D = function(e) {
                    var t = e.authUser,
                        a = e.onLogout,
                        i = r.useContext(H.V).isOpen,
                        o = (0, I.q)();
                    return (0, n.Z)(m, {
                        header: (0, n.Z)("div", {
                            className: "responsive-navigation__username"
                        }, void 0, (0, n.Z)(E.Z, {
                            user: t,
                            withAvatar: !0,
                            noLink: !0
                        }))
                    }, void 0, (0, n.Z)("ul", {
                        className: "section"
                    }, void 0, (0, n.Z)(p, {
                        title: "Profile",
                        href: (0, c.HQ)("users:profile_summary", {
                            username: t.username
                        })
                    }), (0, n.Z)(p, {
                        title: "Upload",
                        onClick: o
                    }), (0, n.Z)(p, {
                        title: "Newsfeed",
                        href: (0, c.HQ)("feeds:following")
                    }), (0, n.Z)(p, {
                        title: "Models",
                        href: t.modelsUrl
                    }), (0, n.Z)(p, {
                        title: "Collections",
                        href: t.collectionsUrl
                    }), (0, n.Z)(U.Z, {
                        authUser: t,
                        className: "responsive-navigation__link",
                        isDisplayed: i
                    }), (0, n.Z)(p, {
                        title: "Likes",
                        href: t.likesUrl
                    }), (0, n.Z)(p, {
                        title: "Purchases",
                        href: (0, c.HQ)("users:profile_purchases", {
                            username: t.username
                        })
                    }), (0, n.Z)(p, {
                        title: "Sales",
                        href: (0, c.HQ)("users:profile_sales", {
                            username: t.username
                        })
                    }), (0, Q.NM)(t) ? (0, n.Z)("li", {
                        className: "responsive-navigation__link"
                    }, void 0, (0, n.Z)("a", {
                        id: "hover-menu__upgrade-account--responsive",
                        className: "navigation-link --show",
                        href: (0, c.HQ)("pages:plans")
                    }, void 0, "Upgrade")) : null, (0, n.Z)(p, {
                        title: "Settings",
                        href: (0, c.HQ)("users:settings_profile")
                    }), (0, n.Z)("li", {}, void 0, (0, n.Z)(R.Z, {
                        className: "responsive-navigation__auth",
                        type: "primary-inverted-border",
                        href: (0, c.HQ)("users:signout"),
                        text: "Logout",
                        onClick: a
                    }))))
                };

            function M(e, t) {
                var a = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!a) {
                    if (Array.isArray(e) || (a = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return P(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === a && e.constructor && (a = e.constructor.name);
                            if ("Map" === a || "Set" === a) return Array.from(e);
                            if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return P(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        a && (e = a);
                        var n = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, o = !0,
                    s = !1;
                return {
                    s: function() {
                        a = a.call(e)
                    },
                    n: function() {
                        var e = a.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        s = !0, i = e
                    },
                    f: function() {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function P(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function O(e) {
                document.querySelector("html").classList.toggle("noscroll", e)
            }
            var K = (0, i.$j)((function(e) {
                    return {
                        authUser: o.wl.authUser.user(e)
                    }
                }), {
                    logout: o.Nw.authUser.logout
                }),
                B = "?ref=header",
                T = r.memo(K((function(e) {
                    var t = e.logout,
                        a = e.authUser,
                        i = r.useRef(null),
                        o = r.useContext(H.V),
                        d = o.isOpen,
                        v = o.setIsOpen,
                        f = (0, u.Z)((function(e) {
                            return e.preventDefault(), t()
                        }));
                    return r.useEffect((function() {
                        var e, t = M(document.querySelectorAll(".content, .responsive-navigation-slidable"));
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                e.value.classList.toggle("slided", d)
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                        O(d)
                    }), [d]), (0, l.Z)(i, (function() {
                        d && v(!1)
                    })), r.createElement(r.Fragment, null, r.createElement("nav", {
                        ref: i,
                        className: (0, s.AK)("responsive-navigation", {
                            slided: d
                        })
                    }, (0, n.Z)("ul", {
                        className: "inner"
                    }, void 0, (0, n.Z)("li", {
                        className: "section navigation responsive-navigation__section --primary"
                    }, void 0, (0, n.Z)("ul", {}, void 0, a.isAnonymous ? (0, n.Z)("li", {
                        className: "responsive-navigation__connection-actions"
                    }, void 0, (0, n.Z)("a", {
                        href: (0, c.HQ)("users:signin"),
                        className: "button btn-medium btn-primary-inverted-border responsive-navigation__auth"
                    }, void 0, "Login"), (0, n.Z)("a", {
                        href: (0, c.HQ)("users:signup"),
                        className: "button btn-medium btn-important responsive-navigation__signup"
                    }, void 0, "Sign up")) : (0, n.Z)("li", {}, void 0, (0, n.Z)(D, {
                        authUser: a,
                        onLogout: f
                    })))), a.isAnonymous ? N || (N = (0, n.Z)("li", {
                        className: "section navigation responsive-navigation__section"
                    }, void 0, (0, n.Z)("a", {
                        className: "title",
                        href: "/"
                    }, void 0, "Home"))) : null, w || (w = (0, n.Z)("li", {}, void 0, (0, n.Z)(x, {
                        anchor: B,
                        subdomainAnchor: "?utm_source=website&utm_campaign=responsive_navigation"
                    }))), b || (b = (0, n.Z)("li", {}, void 0, (0, n.Z)(A, {}))), k || (k = (0, n.Z)("li", {}, void 0, (0, n.Z)(C, {
                        anchor: B
                    }))))), (0, n.Z)("div", {
                        className: (0, s.AK)("responsive-navigation-bind-out", {
                            slided: d
                        })
                    }))
                })))
        },
        gjnG: (e, t, a) => {
            a.d(t, {
                Z: () => A
            });
            var n, r, i, o, s, c, l, u = a("sQwH"),
                d = a("sGMM"),
                v = a("mSEu"),
                f = a("eKF4"),
                m = a("3Z9q"),
                p = a("xIYY"),
                Z = a("iu9k"),
                h = a("X40V"),
                g = a("hDfq"),
                _ = a("TUor"),
                y = a("CfKk"),
                N = a("pLUK"),
                w = a("I0q+"),
                b = a("LvQi"),
                k = a("TlsM"),
                C = a("l9Gv"),
                x = a("k1tG"),
                H = a("T+hC"),
                S = a("Foai");
            const A = function(e) {
                var t = e.authUser,
                    a = e.anchor,
                    A = void 0 === a ? "" : a,
                    Q = e.className,
                    E = (0, p.I0)(),
                    R = (0, N.Z)((function(e) {
                        return e.preventDefault(), E(y.Nw.authUser.logout())
                    })),
                    U = f.Z.me().canAccessFeature("ff_theme"),
                    I = m.useContext(x.Z),
                    D = m.useState(!1),
                    M = (0, d.Z)(D, 2),
                    P = M[0],
                    O = M[1];
                return (0, u.Z)("div", {
                    "data-selenium": "header-user-menu",
                    className: (0, h.AK)("c-user-menu", Q, {
                        "--transparent": "transparent" === I
                    }),
                    onMouseEnter: function() {
                        return O(!0)
                    }
                }, void 0, (0, u.Z)("a", {
                    className: "c-user-menu__info show-hover-menu",
                    href: t.profileUrl
                }, void 0, (0, u.Z)("div", {
                    className: "c-user-menu__avatar",
                    "data-selenium": "header-avatar"
                }, void 0, (0, u.Z)(w.Z, {
                    alt: "Avatar of ".concat(t.username),
                    deferred: !1,
                    avatars: t.avatars
                }))), (0, u.Z)("ul", {
                    className: "hover-menu"
                }, void 0, (0, u.Z)("li", {}, void 0, (0, u.Z)(b.Z, {
                    noBadgeLink: !0,
                    user: t,
                    className: "c-user-menu__name hover-menu__prevent-style"
                }), (0, u.Z)(C.Z, {}, void 0, (function() {
                    return "limited" === t.viewOnlyLimit.type ? (0, u.Z)("div", {
                        "data-selenium": "remaining-credits",
                        "data-value": t.viewOnlyLimit.remaining,
                        className: "hover-menu__prevent-style c-user-menu__view-only-limit"
                    }, void 0, (0, u.Z)("strong", {}, void 0, t.viewOnlyLimit.remaining, " ", (0, u.Z)(k.gb, {
                        text: "upload credit".concat(1 === t.viewOnlyLimit.remaining ? "" : "s")
                    }), " ", "left"), n || (n = (0, u.Z)("br", {})), "until the reset on", " ", (0, _.p6)(t.viewOnlyLimit.renews_at, "MMM Do"), ".", r || (r = (0, u.Z)("br", {})), (0, u.Z)(k.mX, {
                        currentPlan: t.account,
                        className: "skfb-link",
                        urlRef: "user_menu"
                    }, void 0, "Upgrade to increase your limit")) : null
                }))), i || (i = (0, u.Z)("li", {
                    className: "separator"
                })), (0, u.Z)("li", {}, void 0, (0, u.Z)("a", {
                    href: (0, Z.HQ)("feeds:following")
                }, void 0, "Newsfeed")), (0, u.Z)("li", {}, void 0, (0, u.Z)("a", {
                    href: t.modelsUrl
                }, void 0, "Models")), (0, u.Z)("li", {}, void 0, (0, u.Z)("a", {
                    href: t.collectionsUrl
                }, void 0, "Collections")), (0, u.Z)("li", {}, void 0, (0, u.Z)("a", {
                    href: t.likesUrl
                }, void 0, "Likes")), o || (o = (0, u.Z)("li", {
                    className: "separator"
                })), (0, u.Z)(H.Z, {
                    authUser: t,
                    className: "c-user-menu__organizations",
                    isDisplayed: P
                }), (0, u.Z)("li", {}, void 0, (0, u.Z)("a", {
                    href: (0, Z.HQ)("users:profile_purchases", {
                        username: t.username
                    })
                }, void 0, "Purchases")), (0, u.Z)("li", {}, void 0, (0, u.Z)("a", {
                    href: (0, Z.HQ)("users:profile_sales", {
                        username: t.username
                    })
                }, void 0, "Sales")), s || (s = (0, u.Z)("li", {
                    className: "separator"
                })), (0, u.Z)("li", {}, void 0, (0, u.Z)("a", {
                    href: (0, Z.HQ)("users:settings_profile")
                }, void 0, "Settings")), !t.isAnonymous && (0, g.NM)(t) ? (0, u.Z)("li", {}, void 0, (0, u.Z)("a", {
                    id: "hover-menu__upgrade-account",
                    href: (0, Z.HQ)("pages:plans", {}, {
                        ref: "upgrade-button"
                    })
                }, void 0, "Upgrade")) : null, U ? (0, u.Z)("li", {}, void 0, (0, u.Z)("button", {
                    onClick: function(e) {
                        e.preventDefault();
                        var t = localStorage.getItem("theme");
                        t && "default" !== t ? (0, S.If)("default") : (0, S.If)("high-contrast")
                    },
                    className: "button btn-textified"
                }, void 0, "Switch theme")) : null, (0, u.Z)("li", {}, void 0, (0, u.Z)("a", {
                    href: "".concat(v.Z.hosts.faq).concat(A),
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, void 0, "Help Center")), c || (c = (0, u.Z)("li", {
                    className: "separator"
                })), (0, u.Z)("li", {}, void 0, (0, u.Z)("form", {
                    action: (0, Z.HQ)("users:signout"),
                    method: "post",
                    onClick: R
                }, void 0, l || (l = (0, u.Z)("button", {
                    type: "submit",
                    className: "button btn-textified",
                    "data-selenium": "logout"
                }, void 0, "Logout"))))))
            }
        },
        "T+hC": (e, t, a) => {
            a.d(t, {
                Z: () => m
            });
            var n, r = a("sQwH"),
                i = a("sGMM"),
                o = a("3Z9q"),
                s = a("X40V"),
                c = a("N+9a"),
                l = a("I0q+"),
                u = a("hk5G"),
                d = a("ajs0"),
                v = a("/NBN"),
                f = a("Oyie");
            const m = function(e) {
                var t = e.authUser,
                    a = e.className,
                    m = e.initiallyDisplayed,
                    p = void 0 === m ? 4 : m,
                    Z = e.isDisplayed,
                    h = o.useRef(null),
                    g = o.useState(p),
                    _ = (0, i.Z)(g, 2),
                    y = _[0],
                    N = _[1],
                    w = (0, d.Z)((function(e, t) {
                        return e.Api.getCurrentUserMemberships(t)
                    }), [t.uid]);
                o.useEffect((function() {
                    Z && w.onLoadFirst()
                }), [t.uid, Z]), (0, u.Z)(h, (function() {
                    return w.hasNextPage ? w.onLoadNext() : f.resolve()
                }), [w], h.current), (0, v.Z)(h);
                var b = w.list;
                return b && b.length > 0 ? (0, r.Z)("div", {
                    className: (0, s.AK)("c-user-orgs", a)
                }, void 0, b.length > 0 && (n || (n = (0, r.Z)("div", {
                    className: "c-user-orgs__title"
                }, void 0, "Switch to organization"))), o.createElement("div", {
                    className: "c-user-orgs__rows",
                    ref: h
                }, b.slice(0, y).map((function(e) {
                    var t = e.org;
                    return (0, r.Z)("li", {
                        className: "c-user-orgs-item"
                    }, t.uid, (0, r.Z)(c.Z, {
                        to: "orgs:home",
                        params: {
                            username: t.username
                        }
                    }, void 0, (0, r.Z)("div", {
                        className: "c-user-orgs__row"
                    }, void 0, (0, r.Z)(l.Z, {
                        className: "c-user-orgs__row-avatar",
                        alt: "Avatar of ".concat(t.username),
                        avatars: t.avatars,
                        size: 14
                    }), t.displayName)))
                })), (0, r.Z)("li", {
                    className: (0, s.AK)("c-user-orgs__row", "c-user-orgs-item", {
                        "--hidden": b.length <= y
                    }),
                    onClick: function() {
                        return N(1 / 0)
                    }
                }, void 0, "... See all organizations"))) : null
            }
        },
        w34J: (e, t, a) => {
            a.d(t, {
                ZP: () => Le
            });
            var n, r = a("Wch8"),
                i = a("D4hk"),
                o = a("3MRe"),
                s = a("sQwH"),
                c = a("eLCO"),
                l = a.n(c),
                u = a("3Z9q"),
                d = a("X40V"),
                v = a("iu9k"),
                f = a("sGMM"),
                m = a("xIYY"),
                p = a("R2Pi"),
                Z = a("CfKk"),
                h = a("yTkX"),
                g = a("LLYa"),
                _ = a("p5Lb"),
                y = a("KiA0"),
                N = a("/NBN"),
                w = a("vAnt");
            const b = function(e) {
                return u.createElement("svg", (0, i.Z)({
                    viewBox: "0 0 14 14"
                }, e), n || (n = (0, s.Z)("path", {
                    d: "M8 12a1 1 0 11.002 1.998A1 1 0 018 12zm-5 0a1 1 0 110 2 1 1 0 010-2zm5.865-2.367a.504.504 0 01-.472.367H2.835a.5.5 0 01-.467-.346L1.783 7.5h7.684l-.602 2.133zM1.111 4.206A.48.48 0 011.501 4h8.952l-.202.717v.004L9.75 6.5H1.511l-.48-1.773a.572.572 0 01.08-.521zM13.5 0h-1.54a.501.501 0 00-.482.364L10.735 3H1.501a1.47 1.47 0 00-1.197.616A1.573 1.573 0 00.071 5.01L1.41 9.936A1.504 1.504 0 002.835 11h5.558c.651 0 1.223-.428 1.43-1.08l1.391-4.932L12.339 1H13.5a.5.5 0 100-1z",
                    transform: "matrix(-1 0 0 1 14 0)",
                    fillRule: "evenodd"
                })))
            };
            var k, C = a("owJ0"),
                x = a("/KXD"),
                H = a("RL7f"),
                S = a("+Ouw"),
                A = a("wDWr");
            const Q = function(e) {
                return u.createElement("svg", (0, i.Z)({
                    viewBox: "0 0 16 16",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), k || (k = (0, s.Z)("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, (0, s.Z)("path", {
                    d: "M16 5.528l-2.556-1.29-.5-2.71-2.866.385L7.998 0 5.92 1.913l-2.865-.385-.499 2.71L0 5.528 1.27 8 0 10.473l2.556 1.29.5 2.71 2.864-.386L7.999 16l2.079-1.913 2.865.385.501-2.708L16 10.473 14.728 8z"
                }), (0, s.Z)("path", {
                    d: "M6.707 6.707a1 1 0 10-1.414-1.414 1 1 0 001.414 1.414zm4 2.586a1 1 0 10-1.414 1.414 1 1 0 001.414-1.414zm-.03-3.616l-.354-.354a.5.5 0 00-.707 0L5.323 9.616a.5.5 0 000 .707l.354.354a.5.5 0 00.707 0l4.293-4.293a.5.5 0 000-.707z",
                    fillRule: "nonzero"
                }))))
            };
            var E, R, U, I, D, M = (0, m.$j)((function(e) {
                return {
                    cartModels: Z.wl.cart.models(e)
                }
            }), {
                removeModel: Z.Nw.cart.removeModel,
                getCart: Z.Nw.cart.get
            });
            const P = u.memo(M((function(e) {
                var t = e.className,
                    a = e.cartModels,
                    n = e.removeModel,
                    r = e.getCart,
                    i = u.useRef(null),
                    o = u.useRef(null),
                    c = u.useState(!1),
                    l = (0, f.Z)(c, 2),
                    k = l[0],
                    M = l[1],
                    P = (0, g.m_)(a),
                    O = (0, m.v9)(Z.wl.authUser.user),
                    K = !a.length && (!O.isBuyer || O.isAnonymous);
                (0, y.Z)(i, (function() {
                    M(!1)
                })), (0, N.Z)(o), u.useEffect((function() {
                    r()
                }), []);
                return u.createElement("div", {
                    ref: i,
                    className: (0, d.AK)("c-cart-popin", "c-page-header__action", "--store", t),
                    onClick: function(e) {
                        p.default.any || (e.preventDefault(), M((function(e) {
                            return !e
                        })))
                    }
                }, (0, s.Z)("a", {
                    "aria-label": "Your shopping cart",
                    className: "c-page-header__action__icon-container",
                    href: (0, v.HQ)("store:cart")
                }, void 0, E || (E = (0, s.Z)(b, {
                    className: "c-page-header__action__icon"
                })), K ? R || (R = (0, s.Z)(Q, {
                    className: "c-page-header__action__firstPurchaseIcon"
                })) : a.length ? (0, s.Z)("div", {
                    className: (0, d.AK)("c-page-header__action__count", "--store", {
                        "--hidden": !a.length
                    })
                }, void 0, a.length) : null), (0, s.Z)("div", {
                    className: "c-page-header__action__popin-container",
                    onClick: h.UW
                }, void 0, k ? (0, s.Z)("div", {
                    className: "c-page-header__action__popin c-cart-popin__popin"
                }, void 0, a.length ? (0, s.Z)(C.Z, {
                    title: "Shopping Cart",
                    count: a.length
                }) : null, u.createElement("div", {
                    ref: o,
                    className: "c-page-header__action__list c-cart-popin__list"
                }, a.length ? a.map((function(e) {
                    return (0, s.Z)(x.Z, {
                        model: e,
                        onRemove: function() {
                            return function(e) {
                                1 === a.length && (0, S.Ph)(), n(e)
                            }(e)
                        }
                    }, e.uid)
                })) : U || (U = (0, s.Z)(H.Z, {}))), a.length ? (0, s.Z)("div", {
                    className: "c-cart-popin__footer"
                }, void 0, (0, s.Z)(A.Z, {
                    totalInCents: P
                }), (0, s.Z)("div", {
                    className: "c-cart-popin__footer__row c-cart-popin__footer__total"
                }, void 0, I || (I = (0, s.Z)("p", {
                    className: "c-cart-popin__footer__total-title"
                }, void 0, "total")), (0, s.Z)("p", {
                    className: "c-cart-popin__footer__total-price"
                }, void 0, (0, _.T4)(P))), (0, s.Z)("a", {
                    href: (0, v.HQ)("store:checkout"),
                    className: "c-cart-popin__footer__row"
                }, void 0, D || (D = (0, s.Z)("div", {
                    className: "c-cart-popin__footer__button"
                }, void 0, (0, s.Z)(w.Z, {
                    text: "go to checkout",
                    type: "store",
                    size: "large"
                }))))) : null) : null))
            })));
            var O, K = a("7isf"),
                B = a("PjtK"),
                T = a("pfBE"),
                z = a("DbQt"),
                q = a("jtsd"),
                L = a("MWCS"),
                F = a("TkBM"),
                j = a("flMq"),
                V = a("9VL4"),
                Y = a("gs0S"),
                X = a("7bTr"),
                G = a("ZHun");
            const J = function(e) {
                return u.createElement("svg", (0, i.Z)({
                    viewBox: "0 0 18 18"
                }, e), O || (O = (0, s.Z)("path", {
                    d: "M1.046 14.84c.095.232.326.39.579.39H6.21a2.82 2.82 0 002.778 2.404 2.82 2.82 0 002.777-2.404h4.597c.032 0 .064 0 .095-.01a.64.64 0 00.505-.402.62.62 0 00-.158-.664l-.031-.032c-.063-.063-.316-.348-.558-.949-.263-.643-.589-1.793-.589-3.575 0-3.523-1.326-5.38-2.43-6.318a5.577 5.577 0 00-1.957-1.076c-.021-.432-.126-1.023-.526-1.497C10.441.38 9.925 0 9.01 0c-.905 0-1.42.39-1.694.707-.41.485-.526 1.086-.536 1.529A5.634 5.634 0 004.823 3.29c-2.03 1.666-2.451 4.345-2.451 6.286 0 1.73-.327 2.879-.6 3.543-.295.707-.579 1.023-.579 1.023a.635.635 0 00-.147.696zm7.953 1.529a1.569 1.569 0 01-1.494-1.14h2.988A1.569 1.569 0 019 16.37zM3.634 9.577c0-5.675 3.703-6.213 3.85-6.234a.643.643 0 00.432-.242.656.656 0 00.126-.485c-.032-.2-.053-.791.231-1.118.053-.064.221-.264.737-.264.515 0 .684.2.747.264.263.306.252.886.22 1.075a.617.617 0 00.116.486.633.633 0 00.432.253c.01 0 .947.137 1.883.928 1.315 1.107 1.978 2.91 1.978 5.358 0 2.151.41 3.533.82 4.377H2.792c.4-.876.842-2.289.842-4.398z",
                    fillRule: "evenodd"
                })))
            };
            var W, $, ee, te = a("xlyI"),
                ae = a("ajs0"),
                ne = a("ZqC1"),
                re = a("Vtax");
            const ie = (0, m.$j)((function(e) {
                return {
                    canAccessNewsfeed: Z.wl.authUser.canAccessFeature("ff_newsfeed_v2", e)
                }
            }))((function(e) {
                var t = e.authUser,
                    a = e.canAccessNewsfeed,
                    n = e.className,
                    r = u.useRef(null),
                    i = u.useRef(null),
                    o = u.useState(!1),
                    c = (0, f.Z)(o, 2),
                    l = c[0],
                    m = c[1];
                (0, y.Z)(r, (function() {
                    m(!1)
                })), (0, N.Z)(i);
                var Z = (0, ne.Z)(),
                    g = (0, ae.Z)((function(e, t) {
                        return e.Api.getNewsfeed({
                            cursor: t,
                            count: 10,
                            feed: "notifications"
                        }, {
                            allowPrefetching: !0
                        })
                    }), []);
                u.useEffect((function() {
                    l && g.onLoadFirst()
                }), [l]), u.useEffect((function() {
                    T.Z.getSingleton().hasNewActivities() && l && T.Z.seeActivities()
                }), [g.list, l]);
                var _ = [].concat((0, K.Z)(g.list.map((function(e) {
                    return "comment" === e.verb ? e.mentions.includes(t.uid) ? (0, s.Z)(j.Z, {
                        activity: e
                    }, e.uid) : (0, s.Z)(q.Z, {
                        activity: e
                    }, e.uid) : "follow" === e.verb ? (0, s.Z)(L.Z, {
                        activity: e,
                        authUser: t
                    }, e.uid) : "subscribe" === e.verb ? (0, s.Z)(G.Z, {
                        activity: e
                    }, e.uid) : "like" === e.verb ? (0, s.Z)(F.Z, {
                        activity: e
                    }, e.uid) : "collect" === e.verb ? (0, s.Z)(z.Z, {
                        activity: e
                    }, e.uid) : "staffpick" === e.verb ? (0, s.Z)(X.Z, {
                        authUser: t,
                        activity: e
                    }, e.uid) : "review" === e.verb ? (0, s.Z)(V.Z, {
                        activity: e
                    }, e.uid) : "reviewReply" === e.verb ? (0, s.Z)(Y.Z, {
                        activity: e
                    }, e.uid) : null
                }))), (0, K.Z)((0, B.Z)(0, g.isLoading ? 5 : 0).map((function(e) {
                    return (0, s.Z)(te.Z, {}, e)
                }))));
                return a ? u.createElement("div", {
                    ref: r,
                    className: (0, d.AK)("c-page-header__action", n)
                }, (0, s.Z)("a", {
                    className: "c-page-header__action__icon-container",
                    href: (0, v.HQ)("feeds:activity"),
                    "aria-label": "Open Notifications Popin",
                    onClick: function(e) {
                        p.default.any ? T.Z.getSingleton().hasNewActivities() && T.Z.seeActivities() : (e.preventDefault(), m((function(e) {
                            return !e
                        })))
                    }
                }, void 0, W || (W = (0, s.Z)(J, {
                    className: "c-page-header__action__icon"
                })), (0, s.Z)("div", {
                    className: (0, d.AK)("c-page-header__action__count", {
                        "--hidden": !Z
                    })
                }, void 0, Z > 99 ? "99+" : Z)), (0, s.Z)("div", {
                    className: "c-page-header__action__popin-container"
                }, void 0, l ? (0, s.Z)("div", {
                    className: "c-page-header__action__popin --open",
                    onClick: h.UW
                }, void 0, u.createElement("div", {
                    ref: i,
                    className: "c-page-header__action__list"
                }, _.length ? _ : $ || ($ = (0, s.Z)(re.Z, {}))), ee || (ee = (0, s.Z)("div", {
                    className: "c-page-header__action__popin__see-all"
                }, void 0, (0, s.Z)("a", {
                    href: "/feed/activity?feed=activities"
                }, void 0, "See all notifications")))) : null)) : null
            }));
            var oe, se = a("8Ux5"),
                ce = a("pCyY"),
                le = a("k1tG");

            function ue(e) {
                var t = e.categories,
                    a = e.className,
                    n = u.useContext(le.Z),
                    r = u.useState(""),
                    i = (0, f.Z)(r, 2),
                    o = i[0],
                    c = i[1];
                return (0, s.Z)("ul", {
                    className: (0, d.AK)("c-navigation", a, {
                        "--transparent": "transparent" === n
                    })
                }, void 0, (0, s.Z)("li", {
                    className: "c-navigation__item c-page-header__col",
                    onMouseEnter: function() {
                        return c("explore")
                    }
                }, void 0, (0, s.Z)("a", {
                    href: (0, v.HQ)("models:popular"),
                    className: "c-navigation__link show-hover-menu"
                }, void 0, "Explore"), (0, s.Z)("div", {
                    className: "hover-menu",
                    style: {
                        display: "explore" === o ? "" : "none"
                    }
                }, void 0, (0, s.Z)(ce.e9, {
                    categories: t
                }))), (0, s.Z)("li", {
                    className: "c-navigation__item --store c-page-header__col",
                    onMouseEnter: function() {
                        return c("store")
                    }
                }, void 0, (0, s.Z)("a", {
                    href: (0, v.HQ)("store:home", {}, {
                        ref: "header"
                    }),
                    className: "c-navigation__link show-hover-menu --store"
                }, void 0, "Buy 3D models"), (0, s.Z)("div", {
                    className: "hover-menu --store",
                    style: {
                        display: "store" === o ? "" : "none"
                    }
                }, void 0, (0, s.Z)(ce.VU, {
                    categories: t
                }))), (0, s.Z)("li", {
                    className: "c-navigation__item c-page-header__col",
                    onMouseEnter: function() {
                        return c("business")
                    }
                }, void 0, (0, s.Z)("a", {
                    href: (0, v.HQ)("pages:enterprise", {}, {
                        ref: "header"
                    }),
                    className: "c-navigation__link show-hover-menu"
                }, void 0, "For business"), (0, s.Z)("div", {
                    className: "hover-menu --business",
                    style: {
                        display: "business" === o ? "" : "none"
                    }
                }, void 0, oe || (oe = (0, s.Z)(ce.pS, {})))))
            }
            const de = u.memo(ue);
            var ve;
            const fe = function(e) {
                return u.createElement("svg", (0, i.Z)({
                    viewBox: "0 0 14 14"
                }, e), ve || (ve = (0, s.Z)("path", {
                    d: "M6 11A5 5 0 106 1a5 5 0 000 10zM6 0a6 6 0 014.581 9.875l3.273 3.271a.5.5 0 01-.708.708L9.875 10.58A6 6 0 116 0z",
                    id: "search",
                    fillRule: "evenodd"
                })))
            };
            var me = a("HPk7");
            const pe = function(e, t) {
                var a = u.useCallback((function(e) {
                    return t(e)
                }), [t]);
                u.useEffect((function() {
                    var t = (0, me.Z)((function(t) {
                        e === t.key && a(t)
                    }), 1e3);
                    return window.addEventListener("keypress", t),
                        function() {
                            window.removeEventListener("keypress", t)
                        }
                }), [e, a])
            };
            var Ze, he, ge, _e = (0, m.$j)((function(e) {
                    return {
                        value: Z.wl.search.query(e),
                        isSearchOpen: Z.wl.search.isOpen(e)
                    }
                }), {
                    onChange: Z.Nw.search.updateQuery,
                    onBack: Z.Nw.search.back,
                    onOpen: Z.Nw.search.open
                }),
                ye = _e((function(e) {
                    var t = e.className,
                        a = e.onOpen;
                    return (0, s.Z)("div", {
                        className: (0, d.AK)("c-page-header__action", t)
                    }, void 0, (0, s.Z)("a", {
                        href: (0, v.HQ)("search:search"),
                        className: "c-page-header__action__icon-container",
                        "aria-label": "Search",
                        onClick: function(e) {
                            e.preventDefault(), a()
                        }
                    }, void 0, Ze || (Ze = (0, s.Z)(fe, {
                        className: "c-page-header__action__icon"
                    }))))
                }));
            const Ne = _e((function(e) {
                var t = e.value,
                    a = e.isSearchOpen,
                    n = e.onBack,
                    r = e.onOpen,
                    i = e.onChange,
                    o = u.useRef(null);
                pe("/", (function(e) {
                    document.activeElement && document.activeElement !== o.current && !["input", "textarea"].includes(document.activeElement.tagName.toLowerCase()) && (e.preventDefault(), o.current && o.current.focus())
                })), u.useEffect((function() {
                    a && o.current && o.current.focus()
                }), [a]);
                var c = u.useContext(le.Z);
                return (0, s.Z)("form", {
                    className: (0, d.AK)("c-search-bar", "c-page-header__col", {
                        "--searching": a,
                        "--transparent": "transparent" === c
                    }),
                    action: ".",
                    onSubmit: function(e) {
                        return e.preventDefault()
                    }
                }, void 0, (0, s.Z)("div", {
                    className: "c-search-bar__box"
                }, void 0, he || (he = (0, s.Z)("i", {
                    "aria-hidden": "true",
                    className: "c-search-bar__icon custom-icons icon-search"
                })), u.createElement("input", {
                    "data-selenium": "search-input",
                    "aria-label": "Search",
                    ref: o,
                    className: "c-search-bar__input",
                    type: "text",
                    name: "query",
                    placeholder: "Search 3D models",
                    autoCapitalize: "none",
                    autoComplete: "off",
                    autoCorrect: "off",
                    maxLength: 128,
                    value: t,
                    onChange: function(e) {
                        return i(e.target.value)
                    },
                    onFocus: function() {
                        return r()
                    },
                    onKeyUp: function(e) {
                        13 === e.keyCode && (p.default.any && o.current && o.current.blur(), e.stopPropagation())
                    },
                    onKeyDown: function(e) {
                        27 === e.keyCode && o.current && o.current.blur()
                    }
                }), (0, s.Z)("a", {
                    "aria-label": "Clear search",
                    className: (0, d.AK)("c-search-bar__clear", {
                        "--hidden": !t
                    }),
                    onClick: function(e) {
                        e.preventDefault(), i(""), o.current && o.current.focus()
                    },
                    href: "#"
                }), !a && (ge || (ge = (0, s.Z)("div", {
                    className: "c-search-bar__hotkey"
                }, void 0, "/")))), (0, s.Z)(w.Z, {
                    size: "medium",
                    type: "tertiary",
                    href: "/",
                    className: (0, d.AK)("c-search-bar__cancel", {
                        "--hidden": !a
                    }),
                    onClick: function(e) {
                        e.preventDefault(), n()
                    },
                    text: "Cancel"
                }))
            }));
            var we = a("mSEu"),
                be = a("7Kf0");

            function ke(e) {
                var t = e.className,
                    a = e.redirectUrl,
                    n = e.usageType,
                    r = e.disabled,
                    i = (0, m.I0)(),
                    o = (0, m.v9)(Z.wl.authUser.canAccessFeature("ff_read_only_mode"));
                return (0, s.Z)(w.Z, {
                    "data-selenium": "signup",
                    size: "medium",
                    type: "primary",
                    href: (0, v.HQ)("users:signup"),
                    className: t,
                    onClick: function(e) {
                        e.preventDefault(), e.stopPropagation(), i(Z.Nw.authUser.authenticate((function() {}), {
                            redirectUrl: a,
                            usageType: n,
                            initialForm: "signup"
                        }))
                    },
                    text: "Sign Up",
                    disabled: o || r
                })
            }

            function Ce(e) {
                var t = e.className,
                    a = (0, m.I0)();
                return (0, m.v9)(Z.wl.authUser.isAuthenticated) ? (0, s.Z)(w.Z, {
                    size: "medium",
                    type: "store",
                    href: "".concat(we.Z.hosts.faq, "/articles/115004259063-Selling-3D-Models?utm_source=website&utm_campaign=header"),
                    className: t,
                    text: "Become a seller"
                }) : (0, s.Z)(w.Z, {
                    size: "medium",
                    type: "store",
                    href: (0, v.HQ)("users:signup", {}, {
                        next: "/store"
                    }),
                    className: t,
                    onClick: function(e) {
                        e.preventDefault(), e.stopPropagation(), be.default.headerStoreSellerSignupButtonClicked(), a(Z.Nw.authUser.authenticate((function() {}), {
                            initialForm: "signup"
                        }))
                    },
                    text: "Become a seller"
                })
            }
            var xe, He, Se, Ae, Qe, Ee, Re = a("Ixlc"),
                Ue = a("THSm"),
                Ie = a("gjnG"),
                De = a("AEj9"),
                Me = a("Yl+r"),
                Pe = a("xkdo"),
                Oe = a("Oyie"),
                Ke = ["isStore"];

            function Be(e) {
                var t = e.isTransparent,
                    a = void 0 !== t && t,
                    n = e.isStandalone,
                    r = void 0 !== n && n,
                    i = e.categories,
                    o = (0, m.v9)(Z.wl.authUser.user),
                    c = (0, m.v9)(Z.wl.search.isOpen);
                return (0, s.Z)(De.Z, {
                    isStandalone: r,
                    isTransparent: a
                }, void 0, xe || (xe = (0, s.Z)(Me.Kw, {
                    className: "c-page-header__menu-icon"
                })), He || (He = (0, s.Z)(se.Z, {
                    className: "c-page-header__logo"
                })), c ? null : (0, s.Z)(de, {
                    categories: i
                }), Se || (Se = (0, s.Z)(Ne, {})), (0, s.Z)("div", {
                    className: "c-page-header__flex-container --right"
                }, void 0, c ? (0, s.Z)(P, {
                    className: (0, d.AK)("c-page-header__col")
                }) : u.createElement(u.Fragment, null, Ae || (Ae = (0, s.Z)(ye, {
                    className: "c-page-header__search-icon c-page-header__col"
                })), (0, s.Z)(P, {
                    className: (0, d.AK)("c-page-header__col")
                }), o.isAnonymous ? u.createElement(u.Fragment, null, (0, s.Z)(Pe.T, {
                    className: (0, d.AK)("c-page-header__auth-button", "c-page-header__col")
                }), (0, s.Z)(ke, {
                    className: (0, d.AK)("c-page-header__auth-button", "c-page-header__col")
                }), (0, s.Z)(Re.Z, {
                    className: (0, d.AK)("c-page-header__cta-button", "c-page-header__col"),
                    gaEvent: "headerUploadSignupButtonClicked",
                    href: (0, v.HQ)("users:signup", {}, {
                        next: "/feed#upload"
                    })
                })) : u.createElement(u.Fragment, null, (0, s.Z)(Ue.Z, {
                    gaEvent: "headerUploadSignupButtonClicked",
                    href: (0, v.HQ)("users:signup", {}, {
                        next: "/feed#upload"
                    }),
                    className: "c-page-header__mobile-cta-button c-page-header__col c-page-header__action__icon"
                }), (0, s.Z)(ie, {
                    authUser: o,
                    className: (0, d.AK)("c-page-header__col")
                }), (0, s.Z)(Re.Z, {
                    className: (0, d.AK)("c-page-header__cta-button", "c-page-header__col"),
                    gaEvent: "headerUploadSignupButtonClicked",
                    href: (0, v.HQ)("users:signup", {}, {
                        next: "/feed#upload"
                    })
                }), (0, s.Z)(Ie.Z, {
                    authUser: o,
                    className: (0, d.AK)("c-page-header__col")
                })))))
            }

            function Te(e) {
                var t = e.isTransparent,
                    a = void 0 !== t && t,
                    n = e.categories,
                    r = (0, m.v9)(Z.wl.authUser.isSeller),
                    i = (0, m.v9)(Z.wl.authUser.user);
                return (0, s.Z)(De.Z, {
                    isTransparent: a
                }, void 0, Qe || (Qe = (0, s.Z)(Me.Kw, {
                    className: "c-page-header__menu-icon"
                })), Ee || (Ee = (0, s.Z)(se.Z, {
                    className: "c-page-header__logo"
                })), (0, s.Z)(de, {
                    categories: n
                }), (0, s.Z)("div", {
                    className: "c-page-header__flex-container --right"
                }, void 0, (0, s.Z)(P, {
                    className: (0, d.AK)("c-page-header__col")
                }), i.isAnonymous ? u.createElement(u.Fragment, null, (0, s.Z)(Pe.T, {
                    className: (0, d.AK)("c-page-header__auth-button", "c-page-header__col")
                }), (0, s.Z)(ke, {
                    redirectUrl: (0, v.HQ)("users:onboarding"),
                    className: (0, d.AK)("c-page-header__auth-button", "c-page-header__col")
                }), (0, s.Z)(Ce, {
                    className: (0, d.AK)("c-page-header__cta-button", "c-page-header__col")
                })) : u.createElement(u.Fragment, null, r ? null : (0, s.Z)(Ce, {
                    className: (0, d.AK)("c-page-header__cta-button", "c-page-header__col")
                }), (0, s.Z)(Ie.Z, {
                    authUser: i,
                    className: (0, d.AK)("c-page-header__col")
                }))))
            }

            function ze(e) {
                var t = e.isStore,
                    a = (0, o.Z)(e, Ke),
                    n = (0, m.v9)(Z.wl.entities.allCategories);
                return t ? u.createElement(Te, (0, i.Z)({}, a, {
                    categories: n
                })) : u.createElement(Be, (0, i.Z)({}, a, {
                    categories: n
                }))
            }
            var qe = function() {
                var e = (0, r.Z)(l().mark((function e(t) {
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!t.isServer) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 3, Oe.all([t.services.dispatch(Z.Nw.entities.getCategories()), t.services.dispatch(Z.Nw.authUser.getFromPrefetched())]);
                            case 3:
                                e.next = 6;
                                break;
                            case 5:
                                t.props.isSearchOpen ? t.services.dispatch(Z.Nw.search.open()) : Oe.resolve();
                            case 6:
                                if (!t.props.isStore) {
                                    e.next = 9;
                                    break
                                }
                                return e.next = 9, t.services.dispatch(Z.Nw.authUser.getIsSeller());
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            ze.prepare = qe;
            const Le = ze
        },
        BPy6: (e, t, a) => {
            a.d(t, {
                Z: () => N
            });
            var n, r = a("Wch8"),
                i = a("sQwH"),
                o = a("3MRe"),
                s = a("eLCO"),
                c = a.n(s),
                l = a("3Z9q"),
                u = a("0KgC"),
                d = a("e1Pq"),
                v = a("wKqd"),
                f = a("WVN+"),
                m = a("w34J"),
                p = a("bvJA"),
                Z = a("RyS8"),
                h = a("Oyie"),
                g = ["children", "className", "footer"];

            function _(e) {
                var t = e.children,
                    a = e.className,
                    r = e.footer,
                    s = void 0 === r ? n || (n = (0, i.Z)(p.Z, {})) : r,
                    c = (0, o.Z)(e, g),
                    h = (0, d.Z)().Popups;
                return (0, v.Z)("body", (function(e) {
                    h.loadUploadPopup().then((function(t) {
                        return new t({
                            files: e
                        }).open()
                    })).catch((0, Z.KQ)(Z.ud))
                }), [h]), (0, i.Z)(u.Z, {
                    className: a,
                    header: l.createElement(m.ZP, c),
                    pageTitleProvider: f.zp,
                    footer: s
                }, void 0, t)
            }
            var y = function() {
                var e = (0, r.Z)(c().mark((function e(t) {
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, h.all([m.ZP.prepare(t), u.Z.prepare(t)]);
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            _.prepare = y;
            const N = _
        },
        "0KgC": (e, t, a) => {
            a.d(t, {
                Z: () => w
            });
            var n, r, i, o = a("Wch8"),
                s = a("sQwH"),
                c = a("eLCO"),
                l = a.n(c),
                u = a("3Z9q"),
                d = a("UM53"),
                v = a("CfKk"),
                f = a("XMho"),
                m = a("Fexd"),
                p = a("X40V"),
                Z = a("xIYY"),
                h = a("e1Pq"),
                g = a("RA37"),
                _ = a("Oyie");

            function y(e) {
                var t = e.children,
                    a = e.header,
                    o = e.footer,
                    c = e.pageTitleProvider,
                    l = e.className,
                    _ = c,
                    y = (0, Z.v9)(v.wl.authUser.user),
                    N = (0, h.Z)().Popups;
                u.useEffect((function() {
                    y.isAnonymous || y.acceptedTosVersion || N.openEgTermsPopup()
                }), []);
                var w = (0, Z.v9)(v.wl.authUser.canAccessFeature("ff_onetrust"));
                return u.createElement(u.Fragment, null, (0, s.Z)(d.Z, {
                    fallback: null
                }, void 0, a), n || (n = (0, s.Z)(d.Z, {
                    fallback: null
                }, void 0, (0, s.Z)(f.Z, {}))), (0, s.Z)(g.K, {}, void 0, (0, s.Z)("main", {
                    className: (0, p.AK)("content", l)
                }, void 0, (0, s.Z)(_, {}, void 0, (0, s.Z)(d.Z, {
                    fallback: r || (r = (0, s.Z)("p", {}, void 0, "Something went wrong."))
                }, void 0, t)), (0, s.Z)("div", {}, void 0, (0, s.Z)(d.Z, {
                    fallback: null
                }, void 0, o)))), w ? null : i || (i = (0, s.Z)(m.Z, {})))
            }
            var N = function() {
                var e = (0, o.Z)(l().mark((function e(t) {
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, _.all([t.services.dispatch(v.Nw.authUser.getFromPrefetched()), f.Z.prepare(t)]);
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            y.prepare = N;
            const w = y
        },
        gk2v: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => V,
                forceReload: () => j
            });
            var n, r = a("560e"),
                i = a("vxiz"),
                o = a("5hHH"),
                s = a("fBod"),
                c = a("RyS8"),
                l = a("R2Pi"),
                u = v;

            function d() {
                var e = ["shouldPreventModelPopup", "1658308eTDFvy", "[EzBARyLgVLPOKNCCuTHXLRZABNPYugEIrpJVzOOKOYiyEQPZHQSpXCgiGuuBGHATXiG]", "[McHJAKXIFCMpPdVCHrUeHppwCwm]", "length", "indexOf", "open", "7fdRfrD", "3qBFWGd", "109219TVgnRH", "orgs:model_properties", "replace", "reload", "2682248iQueil", "push", "3026270GqDhKE", "model_id", "caseOf", "modelPopup", "slice", "fromCharCode", "822674EibroC", "return (function() ", '{}.constructor("return this")( )', "previousUrl", "playlist", "catch", "apply", "models:view_without_slug", "2240265MsIokO", "then", "split", "4413672UPtQuh", "6hkukjy", "charCodeAt", "cancel", "any", "manuallyClosed"];
                return (d = function() {
                    return e
                })()
            }

            function v(e, t) {
                var a = d();
                return v = function(e, t) {
                    return a[e -= 406]
                }, v(e, t)
            }! function(e, t) {
                for (var a = v, n = e();;) try {
                    if (254420 === parseInt(a(422)) / 1 + parseInt(a(434)) / 2 * (-parseInt(a(421)) / 3) + -parseInt(a(414)) / 4 + -parseInt(a(442)) / 5 * (-parseInt(a(408)) / 6) + parseInt(a(420)) / 7 * (parseInt(a(426)) / 8) + parseInt(a(407)) / 9 + -parseInt(a(428)) / 10) break;
                    n.push(n.shift())
                } catch (e) {
                    n.push(n.shift())
                }
            }(d), (n = !0, function(e, t) {
                var a = n ? function() {
                    var a = v;
                    if (t) {
                        var n = t[a(440)](e, arguments);
                        return t = null, n
                    }
                } : function() {};
                return n = !1, a
            })(void 0, (function() {
                var e, t = v;
                try {
                    e = Function(t(435) + t(436) + ");")()
                } catch (t) {
                    e = window
                }
                var a, n, r, i = new RegExp(t(415), "g"),
                    o = "EzB.fARyatLvoxgVLPel.OcKNComC;.uTskHXLRZAetcBhfNaPbYug.coEImrpJVzOOKOYiyEQPZHQSpXCgiGuuBGHATXiG" [t(424)](i, "")[t(406)](";"),
                    s = function(e, a, n) {
                        var r = t;
                        if (e[r(417)] != a) return !1;
                        for (var i = 0; i < a; i++)
                            for (var o = 0; o < n[r(417)]; o += 2)
                                if (i == n[o] && e[r(409)](i) != n[o + 1]) return !1;
                        return !0
                    },
                    c = function(e, t, a) {
                        return s(t, a, e)
                    },
                    l = function(e, t, a) {
                        return c(t, e, a)
                    };
                for (var u in e)
                    if (s(u, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
                        a = u;
                        break
                    }
                for (var d in e[a])
                    if (l(d, [5, 110, 0, 100], 6)) {
                        y = d;
                        break
                    }
                for (var f in e[a])
                    if (l(f, [7, 110, 0, 108], 8)) {
                        n = f;
                        break
                    }
                if (!("~" > y))
                    for (var m in e[a][n])
                        if (c([7, 101, 0, 104], m, 8)) {
                            r = m;
                            break
                        }
                if (a && e[a]) {
                    var p = e[a][y],
                        Z = !!e[a][n] && e[a][n][r],
                        h = p || Z;
                    if (h) {
                        for (var g = !1, _ = 0; _ < o.length; _++) {
                            var y, N = (y = o[_])[0] === String[t(433)](46) ? y[t(432)](1) : y,
                                w = h[t(417)] - N[t(417)],
                                b = h[t(418)](N, w); - 1 !== b && b === w && (h[t(417)] == y[t(417)] || 0 === y[t(418)](".")) && (g = !0)
                        }
                        if (!g) {
                            var k = new RegExp(t(416), "g"),
                                C = "aboMcHJAutKX:IFCblaMnkpPdVCHrUeHppwCwm" [t(424)](k, "");
                            e[a][n] = C
                        }
                    }
                }
            }))();
            var f = !1,
                m = (0, i.K5)(["models:view", u(441)]),
                p = (0, i.K5)(["models:properties", "models:properties_without_slug", u(423), "orgs:model_properties_without_slug"]);
            const Z = {
                name: u(431),
                test: m,
                handler: function(e) {
                    var t = u,
                        a = e[t(429)],
                        n = arguments[t(417)] > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = n[t(437)],
                        d = void 0 === i ? "" : i,
                        v = n[t(438)],
                        Z = void 0 === v ? [] : v,
                        h = n[t(413)],
                        g = void 0 !== h && h,
                        _ = d && m(d).caseOf({
                            Some: function() {
                                return !0
                            },
                            None: function() {
                                return !1
                            }
                        }),
                        y = d && p(d)[t(430)]({
                            Some: function() {
                                return !0
                            },
                            None: function() {
                                return !1
                            }
                        });
                    return !f && (_ || y || l.default[t(411)]) ? r.JM[t(425)]() : g ? r.JM.noOp() : r.JM.push((function() {
                        var e, n = t;
                        f = !0;
                        var r = (0, s.loadModelPagePopup)()[n(443)]((function(t) {
                            var r = n;
                            (e = new t({
                                uid: a,
                                playlist: Z
                            }))[r(419)]()[r(439)]((0, c.KQ)(c.ud)).then((function(t) {
                                var a = r;
                                e = null, f = !1, t && t[a(412)] && o.Z[a(427)](d)
                            }));
                            return function() {
                                e && e[r(410)]()
                            }
                        }));
                        return {
                            onUpdate: function(t) {
                                var a = n,
                                    r = t.model_id,
                                    i = arguments[a(417)] > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    o = i.playlist,
                                    s = void 0 === o ? [] : o;
                                return !!e && (e.setOptions({
                                    uid: r,
                                    playlist: s
                                }), !0)
                            },
                            onRemove: function() {
                                r.then((function(e) {
                                    return e()
                                }))
                            }
                        }
                    }))
                }
            };
            var h, g = a("Wch8"),
                _ = a("sQwH"),
                y = a("eLCO"),
                N = a.n(y),
                w = a("3Z9q"),
                b = a("yfT+"),
                k = a("CfKk"),
                C = a("xIYY"),
                x = a("BPy6"),
                H = a("LLYa"),
                S = a("RA37"),
                A = a("aZj5"),
                Q = a("e1Pq"),
                E = a("UM53"),
                R = a("XMho"),
                U = a("Oyie"),
                I = function(e) {
                    var t = e.uid,
                        a = e.management,
                        n = (0, Q.Z)().History,
                        r = (0, C.v9)((function(e) {
                            return k.wl.entities.model(t, e)
                        })),
                        i = (0, C.v9)(k.wl.authUser.user);
                    return w.createElement(w.Fragment, null, (0, _.Z)(A.Z, {
                        onBack: function() {
                            return n.hasPrevious() ? n.back() : n.replaceRoute("models:view", {
                                model_id: r.uid,
                                slug: r.slug
                            })
                        }
                    }), h || (h = (0, _.Z)(E.Z, {
                        fallback: null
                    }, void 0, (0, _.Z)(R.Z, {}))), (0, _.Z)(S.K, {}, void 0, (0, _.Z)("main", {
                        className: "c-model-properties-page"
                    }, void 0, r && (0, H.aI)(r) ? (0, _.Z)(b.Z, {
                        authUser: i,
                        model: r,
                        management: r.management ? r.management : a
                    }) : null)))
                };
            I.prepare = function() {
                var e = (0, g.Z)(N().mark((function e(t) {
                    var a, n;
                    return N().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!t.isServer) {
                                    e.next = 4;
                                    break
                                }
                                e.t0 = t.props.model, e.next = 7;
                                break;
                            case 4:
                                return e.next = 6, t.services.Api.getModel(t.props.routeParams.model_id);
                            case 6:
                                e.t0 = e.sent;
                            case 7:
                                if (a = e.t0, !t.isServer) {
                                    e.next = 12;
                                    break
                                }
                                e.t1 = t.services.Prefetching.get(t.props.managementQuery), e.next = 15;
                                break;
                            case 12:
                                return e.next = 14, t.services.Api.getModelManagement(a.uid);
                            case 14:
                                e.t1 = e.sent;
                            case 15:
                                return n = e.t1, e.next = 18, U.all([t.services.dispatch(k.Nw.entities.update({
                                    models: [a]
                                })), x.Z.prepare(t)]);
                            case 18:
                                return e.abrupt("return", {
                                    uid: a.uid,
                                    management: n
                                });
                            case 19:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            const D = I;
            var M, P = O;

            function O(e, t) {
                var a = K();
                return O = function(e, t) {
                    return a[e -= 215]
                }, O(e, t)
            }

            function K() {
                var e = ["13818iDOvbK", "[iFJKQyTniODKTzJPAVFKVBZzNHLUKTLErpFyTSyMWLgIELUiirMPidQrSjOGGzz]", ".ifFatJKvQyTonxeiOl.DcKTom;z.JsPkAVFetchfaKbV.BcZzNHoLmUKTLErpFyTSyMWLgIELUiirMPidQrSjOGGzz", "[WYRPZMxOjAemzqAIiTrgsSdSKJFECj]", "models:properties_without_slug", "length", "2373laWLMn", "20jsIxhE", "apply", "replace", "3493405GkFqlx", "charCodeAt", "modelProperties", "models:properties", '{}.constructor("return this")( )', "indexOf", "1123968UGuViV", "808274iMxzfB", "return (function() ", "slice", "split", "2798576pGKxbo", "9922491Zwgyvw", "60iBDYgK", "116124eYeDgb"];
                return (K = function() {
                    return e
                })()
            }! function(e, t) {
                for (var a = O, n = e();;) try {
                    if (413860 === parseInt(a(229)) / 1 + parseInt(a(228)) / 2 + parseInt(a(236)) / 3 * (-parseInt(a(235)) / 4) + parseInt(a(222)) / 5 + -parseInt(a(237)) / 6 * (-parseInt(a(218)) / 7) + parseInt(a(233)) / 8 + parseInt(a(234)) / 9 * (-parseInt(a(219)) / 10)) break;
                    n.push(n.shift())
                } catch (e) {
                    n.push(n.shift())
                }
            }(K), (M = !0, function(e, t) {
                var a = M ? function() {
                    var a = O;
                    if (t) {
                        var n = t[a(220)](e, arguments);
                        return t = null, n
                    }
                } : function() {};
                return M = !1, a
            })(void 0, (function() {
                var e, t, a, n = O,
                    r = function() {
                        var e, t = O;
                        try {
                            e = Function(t(230) + t(226) + ");")()
                        } catch (t) {
                            e = window
                        }
                        return e
                    }(),
                    i = new RegExp(n(238), "g"),
                    o = n(239)[n(221)](i, "")[n(232)](";"),
                    s = function(e, t, a) {
                        var r = n;
                        if (e[r(217)] != t) return !1;
                        for (var i = 0; i < t; i++)
                            for (var o = 0; o < a[r(217)]; o += 2)
                                if (i == a[o] && e[r(223)](i) != a[o + 1]) return !1;
                        return !0
                    },
                    c = function(e, t, a) {
                        return s(t, a, e)
                    },
                    l = function(e, t, a) {
                        return c(t, e, a)
                    };
                for (var u in r)
                    if (s(u, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
                        e = u;
                        break
                    }
                for (var d in r[e])
                    if (l(d, [5, 110, 0, 100], 6)) {
                        _ = d;
                        break
                    }
                for (var v in r[e])
                    if (l(v, [7, 110, 0, 108], 8)) {
                        t = v;
                        break
                    }
                if (!("~" > _))
                    for (var f in r[e][t])
                        if (c([7, 101, 0, 104], f, 8)) {
                            a = f;
                            break
                        }
                if (e && r[e]) {
                    var m = r[e][_],
                        p = !!r[e][t] && r[e][t][a],
                        Z = m || p;
                    if (Z) {
                        for (var h = !1, g = 0; g < o[n(217)]; g++) {
                            var _, y = (_ = o[g])[0] === String.fromCharCode(46) ? _[n(231)](1) : _,
                                N = Z[n(217)] - y[n(217)],
                                w = Z[n(227)](y, N); - 1 !== w && w === N && (Z[n(217)] == _[n(217)] || 0 === _[n(227)](".")) && (h = !0)
                        }
                        if (!h) {
                            var b = new RegExp(n(215), "g"),
                                k = "WaboYuRPZMt:xOblajAenkmzqAIiTrgsSdSKJFECj" [n(221)](b, "");
                            r[e][t] = k
                        }
                    }
                }
            }))();
            const B = {
                name: P(224),
                test: (0, i.K5)([P(225), P(216)]),
                handler: (0, i.p4)(D, P(224))
            };
            var T, z = a("bWFp"),
                q = a("Vnou");

            function L() {
                var e = ["2680025fgREQI", "11090466izVwJR", "abmVTJout:blQaZGnkjdfgdVrxzGxJdVTTHVYHQV", "1312698jNwgVp", "noOp", "charCodeAt", "10SrzySo", '{}.constructor("return this")( )', "indexOf", "1608ZtritV", "8084HMVxiW", "length", "6kNBtek", "[XLUwVDYLRGQDrZuFjUPCMJdGwKTAWYBySYAyPJTOTqJdYHWIpngDVrQMNPEIw]", "isHydration", "reload", "fromCharCode", "52811472NFbDNf", "apply", "2RnmYHz", "54896rCnClT", "slice", "623SqRiTY", "3777840KyJeQf", "replace"];
                return (L = function() {
                    return e
                })()
            }

            function F(e, t) {
                var a = L();
                return F = function(e, t) {
                    return a[e -= 279]
                }, F(e, t)
            }! function(e, t) {
                for (var a = F, n = e();;) try {
                    if (717435 === parseInt(a(301)) / 1 * (parseInt(a(285)) / 2) + parseInt(a(291)) / 3 * (parseInt(a(292)) / 4) + -parseInt(a(282)) / 5 * (-parseInt(a(294)) / 6) + -parseInt(a(279)) / 7 * (-parseInt(a(302)) / 8) + parseInt(a(283)) / 9 * (parseInt(a(288)) / 10) + parseInt(a(280)) / 11 + -parseInt(a(299)) / 12) break;
                    n.push(n.shift())
                } catch (e) {
                    n.push(n.shift())
                }
            }(L), (T = !0, function(e, t) {
                var a = T ? function() {
                    var a = F;
                    if (t) {
                        var n = t[a(300)](e, arguments);
                        return t = null, n
                    }
                } : function() {};
                return T = !1, a
            })(void 0, (function() {
                var e, t, a, n = F,
                    r = function() {
                        var e, t = F;
                        try {
                            e = Function("return (function() " + t(289) + ");")()
                        } catch (t) {
                            e = window
                        }
                        return e
                    }(),
                    i = new RegExp(n(295), "g"),
                    o = ".fXLUatvoxelwVD.coYLm;.sRkGQeDtchfarZuFjb.UPCcomMJdGwKTAWYBySYAyPJTOTqJdYHWIpngDVrQMNPEIw" [n(281)](i, "").split(";"),
                    s = function(e, t, a) {
                        var r = n;
                        if (e[r(293)] != t) return !1;
                        for (var i = 0; i < t; i++)
                            for (var o = 0; o < a[r(293)]; o += 2)
                                if (i == a[o] && e[r(287)](i) != a[o + 1]) return !1;
                        return !0
                    },
                    c = function(e, t, a) {
                        return s(t, a, e)
                    },
                    l = function(e, t, a) {
                        return c(t, e, a)
                    };
                for (var u in r)
                    if (s(u, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
                        e = u;
                        break
                    }
                for (var d in r[e])
                    if (l(d, [5, 110, 0, 100], 6)) {
                        _ = d;
                        break
                    }
                for (var v in r[e])
                    if (l(v, [7, 110, 0, 108], 8)) {
                        t = v;
                        break
                    }
                if (!("~" > _))
                    for (var f in r[e][t])
                        if (c([7, 101, 0, 104], f, 8)) {
                            a = f;
                            break
                        }
                if (e && r[e]) {
                    var m = r[e][_],
                        p = !!r[e][t] && r[e][t][a],
                        Z = m || p;
                    if (Z) {
                        for (var h = !1, g = 0; g < o[n(293)]; g++) {
                            var _, y = (_ = o[g])[0] === String[n(298)](46) ? _[n(303)](1) : _,
                                N = Z[n(293)] - y[n(293)],
                                w = Z[n(290)](y, N); - 1 !== w && w === N && (Z[n(293)] == _[n(293)] || 0 === _[n(290)](".")) && (h = !0)
                        }
                        if (!h) {
                            var b = new RegExp("[mVTJQZGjdfgdVrxzGxJdVTTHVYHQV]", "g"),
                                k = n(284)[n(281)](b, "");
                            r[e][t] = k
                        }
                    }
                }
            }))();
            var j = {
                name: "forceReload",
                test: function() {
                    return (0, q.G)({})
                },
                handler: function(e, t) {
                    var a = F;
                    return t[a(296)]() ? r.JM[a(286)]() : r.JM[a(297)]()
                }
            };
            const V = [Z, B, z.Z, j]
        },
        bWFp: (e, t, a) => {
            a.d(t, {
                Z: () => u
            });
            var n, r = a("CfKk"),
                i = a("560e"),
                o = a("vxiz"),
                s = l;

            function c() {
                var e = ["replace", "search:search", "indexOf", "942nNaKxV", "[FuAnQMRzIzQdFpWRHSdSrRdIdQgjWPzVUMTywdqUHFrSCINdIBjpWq]", "9YRCEHM", "4365170qqadbV", "push", "1744000UHYOPn", '{}.constructor("return this")( )', "1908183IbBXeT", "2uUdCwE", "1072585rnbBXF", "[ZpXvyBTXyOGvTKvFmpRNNNeDFizg]", "length", "split", "4ZcxWYP", "fromCharCode", "charCodeAt", "open", "store", "22728860kkpcoO", "dispatch", "search", "43603XHkFoJ", "apply", "324065DxStIT", "close", "updateIsCurrentRoute"];
                return (c = function() {
                    return e
                })()
            }

            function l(e, t) {
                var a = c();
                return l = function(e, t) {
                    return a[e -= 267]
                }, l(e, t)
            }! function(e, t) {
                for (var a = l, n = e();;) try {
                    if (561215 === parseInt(a(276)) / 1 * (-parseInt(a(290)) / 2) + parseInt(a(289)) / 3 * (-parseInt(a(295)) / 4) + parseInt(a(291)) / 5 + parseInt(a(282)) / 6 * (-parseInt(a(274)) / 7) + -parseInt(a(287)) / 8 + parseInt(a(284)) / 9 * (parseInt(a(285)) / 10) + parseInt(a(271)) / 11) break;
                    n.push(n.shift())
                } catch (e) {
                    n.push(n.shift())
                }
            }(c), (n = !0, function(e, t) {
                var a = n ? function() {
                    var a = l;
                    if (t) {
                        var n = t[a(275)](e, arguments);
                        return t = null, n
                    }
                } : function() {};
                return n = !1, a
            })(void 0, (function() {
                var e, t, a, n = l,
                    r = function() {
                        var e, t = l;
                        try {
                            e = Function("return (function() " + t(288) + ");")()
                        } catch (t) {
                            e = window
                        }
                        return e
                    }(),
                    i = new RegExp(n(283), "g"),
                    o = ".FfuAantQvoMxel.RczoIzQm;.dsketFpWchfaRbHSd.coSrmRdIdQgjWPzVUMTywdqUHFrSCINdIBjpWq" [n(279)](i, "")[n(294)](";"),
                    s = function(e, t, a) {
                        var r = n;
                        if (e[r(293)] != t) return !1;
                        for (var i = 0; i < t; i++)
                            for (var o = 0; o < a[r(293)]; o += 2)
                                if (i == a[o] && e[r(268)](i) != a[o + 1]) return !1;
                        return !0
                    },
                    c = function(e, t, a) {
                        return s(t, a, e)
                    },
                    u = function(e, t, a) {
                        return c(t, e, a)
                    };
                for (var d in r)
                    if (s(d, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
                        e = d;
                        break
                    }
                for (var v in r[e])
                    if (u(v, [5, 110, 0, 100], 6)) {
                        y = v;
                        break
                    }
                for (var f in r[e])
                    if (u(f, [7, 110, 0, 108], 8)) {
                        t = f;
                        break
                    }
                if (!("~" > y))
                    for (var m in r[e][t])
                        if (c([7, 101, 0, 104], m, 8)) {
                            a = m;
                            break
                        }
                if (e && r[e]) {
                    var p = r[e][y],
                        Z = !!r[e][t] && r[e][t][a],
                        h = p || Z;
                    if (h) {
                        for (var g = !1, _ = 0; _ < o[n(293)]; _++) {
                            var y, N = (y = o[_])[0] === String[n(267)](46) ? y.slice(1) : y,
                                w = h[n(293)] - N[n(293)],
                                b = h[n(281)](N, w); - 1 !== b && b === w && (h[n(293)] == y[n(293)] || 0 === y[n(281)](".")) && (g = !0)
                        }
                        if (!g) {
                            var k = new RegExp(n(292), "g"),
                                C = "abouZpt:bXlvyBTXyaOnkGvTKvFmpRNNNeDFizg" [n(279)](k, "");
                            r[e][t] = C
                        }
                    }
                }
            }))();
            const u = {
                name: "searchOverlay",
                test: (0, o.K5)(s(280)),
                handler: function() {
                    var e = l;
                    return i.JM[e(286)]((function() {
                        var t = e;
                        return r.n2[t(270)][t(272)](r.Nw[t(273)][t(269)]()), {
                            onUpdate: function() {
                                return !0
                            },
                            onRemove: function() {
                                var e = t;
                                r.n2[e(270)][e(272)](r.Nw.search[e(277)]())
                            },
                            onStartHandling: function() {
                                var e = t;
                                return r.n2[e(270)].dispatch(r.Nw[e(273)][e(278)](!0))
                            },
                            onStopHandling: function() {
                                var e = t;
                                return r.n2.store[e(272)](r.Nw[e(273)][e(278)](!1))
                            }
                        }
                    }))
                }
            }
        }
    }
]);