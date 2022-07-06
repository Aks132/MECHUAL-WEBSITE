"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [9249], {
        JVQt: (e, r, n) => {
            n.d(r, {
                Z: () => p
            });
            var t = n("sGMM"),
                i = n("L0SH"),
                u = n("xKIK"),
                o = n("D7W8"),
                c = n("JGf+"),
                s = n("MndH"),
                a = n("RyS8"),
                f = n("zIYZ"),
                d = n("Oyie");

            function l(e, r) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), n.push.apply(n, t)
                }
                return n
            }

            function v(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? l(Object(n), !0).forEach((function(r) {
                        (0, u.Z)(e, r, n[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                    }))
                }
                return e
            }

            function b(e, r) {
                return Object.keys(e).reduce((function(n, t) {
                    return n[t] = r(e[t], t), n
                }), {})
            }
            var h = function(e) {
                    return b(e.fields, (function(e) {
                        return e.value
                    }))
                },
                O = function(e, r, n) {
                    var t = h(r);
                    return b(r.fields, (function(r, i) {
                        var u = function(e, r) {
                            return "function" == typeof e ? e(r).validators : e.validators
                        }(e[i], n);
                        return function(e, r, n) {
                            return e.reduce((function(e, t) {
                                return e || t(r, n) || ""
                            }), "")
                        }(u, r.value, t)
                    }))
                },
                S = function(e, r, n) {
                    return v(v({}, e), {}, {
                        fields: v(v({}, e.fields), {}, (0, u.Z)({}, r, v(v({}, e.fields[r]), n)))
                    })
                };
            const p = function(e, r, n, u) {
                var l = function(e, r) {
                        n((function(n) {
                            return S(n, e, r)
                        }))
                    },
                    p = function(e, r) {
                        n({
                            hasSucceeded: !1
                        }), n((function(n) {
                            return S(n, e, {
                                value: r,
                                serverSideError: ""
                            })
                        }))
                    },
                    j = function() {
                        return b(e, (function(e, r) {
                            var n = function(e, r) {
                                return "function" == typeof e ? e(r).initialValue : e.initialValue
                            }(e, u());
                            return {
                                value: n,
                                savedValue: n,
                                isTouched: !1,
                                onChange: function(e) {
                                    return p(r, e)
                                },
                                onBlur: function() {
                                    return function(e) {
                                        l(e, {
                                            isTouched: !0
                                        })
                                    }(r)
                                },
                                serverSideError: ""
                            }
                        }))
                    },
                    g = function(t) {
                        var s = r();
                        Object.keys(s.fields).forEach((function(e) {
                            l(e, {
                                isTouched: !0,
                                serverSideError: ""
                            })
                        })), (0, o.Z)((0, f.Gj)(O(e, s, u()))) && (n({
                            isSubmitting: !0
                        }), d.resolve(t(h(s))).then((function() {
                            n({
                                hasSucceeded: !0,
                                isSubmitting: !1
                            }), Object.keys(s.fields).forEach((function(e) {
                                l(e, {
                                    isTouched: !1,
                                    savedValue: s.fields[e].value,
                                    serverSideError: ""
                                })
                            }))
                        })).catch((function(e) {
                            if (n({
                                    hasSucceeded: !1,
                                    isSubmitting: !1
                                }), "object" !== (0, i.Z)(e) || !e) throw e;
                            var r, t = (0, a.Oe)(e) ? b(e.response.data.detail, c.Z) : b(e, (function(e) {
                                return Array.isArray(e) ? e[0] : e
                            }));
                            if (Object.keys(s.fields).filter((function(e) {
                                    return t[e]
                                })).forEach((function(e) {
                                    l(e, {
                                        serverSideError: t[e]
                                    })
                                })), null !== (r = e.response.data.detail) && void 0 !== r && r.__all__ && s.fields.global) {
                                var u = e.response.data.detail.__all__.join(",");
                                l("global", {
                                    serverSideError: u
                                })
                            }
                        })))
                    },
                    y = function() {
                        n((function(e) {
                            return v(v({}, e), {}, {
                                fields: j(),
                                isSubmitting: !1
                            })
                        }))
                    },
                    E = function(e) {
                        Object.entries(e).forEach((function(e) {
                            var r = (0, t.Z)(e, 2),
                                n = r[0],
                                i = r[1];
                            p(n, i)
                        }))
                    };
                return {
                    initialState: {
                        fields: j(),
                        isSubmitting: !1,
                        hasSucceeded: !1
                    },
                    getProps: function() {
                        var n = r(),
                            t = function(e, r) {
                                return b(r.fields, (function(r, n) {
                                    return e[n] || r.serverSideError
                                }))
                            }(O(e, n, u()), n);
                        return {
                            fields: b(n.fields, (function(e, r) {
                                var n = t[r] || "";
                                return v(v({}, (0, s.Z)(e, ["serverSideError", "savedValue"])), {}, {
                                    error: n,
                                    hasError: !!n,
                                    hasChanged: e.value !== e.savedValue
                                })
                            })),
                            data: h(n),
                            errors: t,
                            hasErrors: Object.values(t).some(Boolean),
                            isTouched: Object.values(n.fields).some((function(e) {
                                return e.isTouched
                            })),
                            hasChanged: Object.values(n.fields).some((function(e) {
                                return e.savedValue !== e.value
                            })),
                            isSubmitting: n.isSubmitting,
                            hasSucceeded: n.hasSucceeded,
                            onSubmit: g,
                            onReset: y,
                            onFieldsChange: E
                        }
                    }
                }
            }
        }
    }
]);