"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [7001], {
        XuRc: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var o = n("7isf"),
                r = n("3Z9q"),
                i = n("g/7r");
            const a = function(e, t, n) {
                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                    c = (0, r.useRef)(e()),
                    u = function(e) {
                        return t((function(t) {
                            var o = n(t, e);
                            return c.current = o, o
                        }))
                    },
                    s = (0, r.useRef)(u);
                (0, r.useEffect)((function() {
                    s.current = u
                }));
                var l = (0, r.useMemo)((function() {
                    var e = function() {
                            throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                        },
                        t = {
                            getState: function() {
                                return c.current
                            },
                            dispatch: function() {
                                return e.apply(void 0, arguments)
                            }
                        },
                        n = a.map((function(e) {
                            return e(t)
                        }));
                    return e = i.qC.apply(void 0, (0, o.Z)(n))((function() {
                        return s.current.apply(s, arguments)
                    })), e
                }), []);
                return [e(), l]
            }
        },
        pgZm: (e, t, n) => {
            n.d(t, {
                oF: () => r,
                WQ: () => i,
                Qs: () => a,
                _f: () => c
            });
            var o = ["spectator", "contributor", "admin"];

            function r(e, t) {
                return o.indexOf(e) >= o.indexOf(t)
            }

            function i(e) {
                return r(e, "contributor")
            }
            var a = function(e, t) {
                    return e.slug ? ["orgs:project", {
                        username: e.org.username,
                        slug: e.slug,
                        uid: e.uid
                    }, t] : ["project_without_slug", {
                        username: e.org.username,
                        uid: e.uid
                    }, t]
                },
                c = function(e) {
                    return 0 === e.depth
                }
        },
        "6tbf": (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var o = n("sQwH"),
                r = (n("3Z9q"), n("X40V")),
                i = n("A2i4");
            const a = function(e) {
                var t = e.thumbnails,
                    n = e.width,
                    a = void 0 === n ? 500 : n,
                    c = e.height,
                    u = void 0 === c ? 9 * a / 16 : c,
                    s = e.deferImages,
                    l = void 0 === s || s,
                    d = e.className,
                    f = void 0 === d ? "" : d,
                    h = e.alt,
                    p = void 0 === h ? "" : h;
                return (0, o.Z)(i.ZP, {
                    className: (0, r.AK)("card-thumbnail", f),
                    alt: p,
                    images: t,
                    width: a,
                    height: u,
                    deferred: l
                })
            }
        },
        UnUI: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var o = n("sQwH"),
                r = n("qD8I"),
                i = n("CUcO"),
                a = n("8N4v"),
                c = n("Zfzx"),
                u = n("FUT3"),
                s = n("hayj"),
                l = n("xKIK"),
                d = n("3Z9q"),
                f = n("RA37"),
                h = n("X40V"),
                p = n("45Yh"),
                v = n("p5Lb"),
                Z = n("R2Pi");

            function m(e) {
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
                    var n, o = (0, s.Z)(e);
                    if (t) {
                        var r = (0, s.Z)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return (0, u.Z)(this, n)
                }
            }
            var g = function(e) {
                (0, c.Z)(n, e);
                var t = m(n);

                function n() {
                    var e;
                    (0, r.Z)(this, n);
                    for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c];
                    return e = t.call.apply(t, [this].concat(i)), (0, l.Z)((0, a.Z)(e), "el", void 0), (0, l.Z)((0, a.Z)(e), "menu", void 0), (0, l.Z)((0, a.Z)(e), "labelTitle", void 0), (0, l.Z)((0, a.Z)(e), "state", {
                        isOpen: !1
                    }), (0, l.Z)((0, a.Z)(e), "onToggle", (function() {
                        e.props.onToggle && e.props.onToggle(!e.state.isOpen), e.setState({
                            isOpen: !e.state.isOpen
                        })
                    })), (0, l.Z)((0, a.Z)(e), "onWindowClick", (function(t) {
                        e.state.isOpen && !(0, p.Ub)(e.el, t.target) && (e.props.onClose && e.props.onClose(), e.setState({
                            isOpen: !1
                        }))
                    })), (0, l.Z)((0, a.Z)(e), "setMenuPosition", (function() {
                        if (e.el && e.menu) {
                            var t = e.el.getBoundingClientRect(),
                                n = e.menu.getBoundingClientRect();
                            e.menu.style.bottom = "".concat(-Math.min(0, window.innerHeight - (t.bottom + n.height + 10)), "px"), e.menu.style.right = "right" === e.props.menuAlign ? "".concat(Math.min(0, t.right - (n.width + 10)), "px") : "auto", e.menu.style.left = "left" === e.props.menuAlign ? "".concat(Math.min(0, window.innerWidth - (t.left + n.width + 10)), "px") : "auto"
                        }
                    })), (0, l.Z)((0, a.Z)(e), "scrollToHeightPercent", (function(t) {
                        e.menu && (e.menu.scrollTop = (0, v.vX)(0, 1, t) * e.menu.scrollHeight)
                    })), e
                }
                return (0, i.Z)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.setMenuPosition(), window.addEventListener("click", this.onWindowClick), Z.default.any || window.addEventListener("resize", this.setMenuPosition)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.setMenuPosition()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        window.removeEventListener("click", this.onWindowClick), window.removeEventListener("resize", this.setMenuPosition)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.state.isOpen && !this.props.disabled,
                            n = this.context.colors.skfbBlue,
                            r = this.props,
                            i = r.labelTitle,
                            a = r.labelValue,
                            c = r.longestLabelValue,
                            u = r.placeholder,
                            s = r.color,
                            f = r.disabled,
                            p = void 0 !== f && f,
                            v = r.withBackground,
                            Z = r.hideArrow,
                            m = r.grey,
                            g = r.theme,
                            w = r.className,
                            b = r.children;
                        return d.createElement("div", {
                            ref: function(t) {
                                return e.el = t
                            },
                            className: (0, h.AK)("c-dropdown", w, (0, l.Z)({
                                "--disabled": p,
                                "--open": t,
                                "--with-background": v,
                                "--hide-arrow": Z,
                                "--grey": m
                            }, "--" + g + "-theme", Boolean(g))),
                            "data-selenium": this.props["data-selenium"]
                        }, (0, o.Z)("div", {
                            className: "c-dropdown__label",
                            onClick: function() {
                                !e.props.toggleOnLabelClick && e.state.isOpen || e.onToggle()
                            }
                        }, void 0, d.createElement("span", {
                            ref: function(t) {
                                return e.labelTitle = t
                            },
                            className: "c-dropdown__label-title"
                        }, "function" == typeof i ? i({
                            isOpen: t,
                            onToggle: this.onToggle,
                            scrollToHeightPercent: this.scrollToHeightPercent
                        }) : i || ""), (0, o.Z)("span", {
                            className: (0, h.AK)("c-dropdown__label-value", {
                                "--placeholder": !a
                            }),
                            style: {
                                color: a ? s || n : ""
                            }
                        }, void 0, (0, o.Z)("span", {
                            className: (0, h.AK)("c-dropdown__label-value__text", {
                                "--absolute": !!c
                            }),
                            "data-selenium": "dropdown-label"
                        }, void 0, a || u), (0, o.Z)("span", {
                            className: "c-dropdown__label-value__hidden"
                        }, void 0, c))), d.createElement("div", {
                            ref: function(t) {
                                return e.menu = t
                            },
                            className: "c-dropdown__menu ".concat(t ? "--open" : "")
                        }, t && b({
                            isOpen: t,
                            onToggle: this.onToggle,
                            scrollToHeightPercent: this.scrollToHeightPercent
                        })))
                    }
                }]), n
            }(d.Component);
            (0, l.Z)(g, "defaultProps", {
                color: "",
                theme: "light",
                menuAlign: "left",
                labelValue: "",
                labelTitle: "",
                placeholder: "",
                className: "",
                disabled: !1,
                withBackground: !1,
                hideArrow: !1,
                grey: !1,
                toggleOnLabelClick: !0
            }), (0, l.Z)(g, "contextType", f.w)
        },
        GR31: (e, t, n) => {
            n.d(t, {
                W: () => y,
                Z: () => N
            });
            var o = n("sQwH"),
                r = n("D4hk"),
                i = n("qD8I"),
                a = n("CUcO"),
                c = n("8N4v"),
                u = n("Zfzx"),
                s = n("FUT3"),
                l = n("hayj"),
                d = n("xKIK"),
                f = n("p7Vz"),
                h = n("HPk7"),
                p = n("3Z9q"),
                v = n("W4lT"),
                Z = n("X40V"),
                m = n("UnUI");

            function g(e) {
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
                    var n, o = (0, l.Z)(e);
                    if (t) {
                        var r = (0, l.Z)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var w = (0, f.Z)((function(e, t) {
                return e + t
            }));

            function b(e, t) {
                return (0, v.sE)(e, (function(e) {
                    return e.value === t
                }))
            }
            var y = function(e) {
                    (0, u.Z)(n, e);
                    var t = g(n);

                    function n() {
                        var e;
                        (0, i.Z)(this, n);
                        for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                        return e = t.call.apply(t, [this].concat(r)), (0, d.Z)((0, c.Z)(e), "scrollAtNextRender", !1), (0, d.Z)((0, c.Z)(e), "ref", p.createRef()), (0, d.Z)((0, c.Z)(e), "getSelectedIndex", (function() {
                            return b(e.props.options, e.props.value).caseOf({
                                Some: function(t) {
                                    return e.props.options.indexOf(t)
                                },
                                None: function() {
                                    return -1
                                }
                            })
                        })), (0, d.Z)((0, c.Z)(e), "onOptionClick", (function(t) {
                            e.props.onSelectOption(t), e.props.closeOnSelection && e.props.dropdown.isOpen && e.props.dropdown.onToggle()
                        })), (0, d.Z)((0, c.Z)(e), "onMouseEnterOption", (function(t) {
                            t.target.style.color = e.props.color
                        })), (0, d.Z)((0, c.Z)(e), "onMouseLeaveOption", (function(e, t) {
                            e || (t.target.style.color = "")
                        })), (0, d.Z)((0, c.Z)(e), "onWindowKeyDown", (function(t) {
                            e.props.dropdown.isOpen && e.props.options.length && (38 !== t.which && 40 !== t.which || t.preventDefault(), 38 === t.which && e.selectIndex(w(-1)), 40 === t.which && e.selectIndex(w(1)))
                        })), (0, d.Z)((0, c.Z)(e), "onScrollIntoView", (function(t) {
                            var n = t.target,
                                o = e.props.onBottomReached;
                            o && n.scrollHeight - n.clientHeight - n.scrollTop > 15 && o()
                        })), (0, d.Z)((0, c.Z)(e), "selectIndex", (function(t) {
                            var n = e.getSelectedIndex(),
                                o = e.props.options.length,
                                r = (o + t(n)) % o;
                            e.props.onSelectOption(e.props.options[r].value), e.scrollAtNextRender = !0
                        })), (0, d.Z)((0, c.Z)(e), "scrollToSelectedOption", (function() {
                            var t = (e.getSelectedIndex() - 1) / e.props.options.length;
                            e.props.dropdown.scrollToHeightPercent(t)
                        })), (0, d.Z)((0, c.Z)(e), "updateScrollPosition", (function() {
                            e.scrollAtNextRender && (e.scrollAtNextRender = !1, e.scrollToSelectedOption())
                        })), e
                    }
                    return (0, a.Z)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e;
                            this.updateScrollPosition(), window.addEventListener("keydown", this.onWindowKeyDown), null === (e = this.ref.current) || void 0 === e || e.addEventListener("scroll", (0, h.Z)(this.onScrollIntoView, 100))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.updateScrollPosition()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("keydown", this.onWindowKeyDown)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.options,
                                o = t.value,
                                i = t.color,
                                a = t.theme;
                            return p.createElement("ul", {
                                className: "c-dropdown-select ".concat(a ? "--" + a + "-theme" : ""),
                                ref: this.props.onBottomReached ? this.ref : null
                            }, n.map((function(t) {
                                var n = t.value === o;
                                return p.createElement("li", (0, r.Z)({
                                    key: t.value.toString(),
                                    className: (0, Z.AK)("c-dropdown-select__option", {
                                        "--active": n,
                                        "--disabled": Boolean(t.disabled)
                                    }),
                                    style: {
                                        color: n ? i : ""
                                    }
                                }, t.disabled ? {} : {
                                    onClick: function() {
                                        return e.onOptionClick(t.value)
                                    },
                                    onMouseEnter: e.onMouseEnterOption,
                                    onMouseLeave: function(t) {
                                        return e.onMouseLeaveOption(n, t)
                                    }
                                }), t.title)
                            })))
                        }
                    }]), n
                }(p.Component),
                N = function(e) {
                    (0, u.Z)(n, e);
                    var t = g(n);

                    function n() {
                        return (0, i.Z)(this, n), t.apply(this, arguments)
                    }
                    return (0, a.Z)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = (0, v.sE)(this.props.options, (function(e) {
                                return e.default
                            })).caseOf({
                                Some: function(e) {
                                    return e.value
                                },
                                None: function() {}
                            });
                            !this.props.value && e && this.props.onChange(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, n = this.props,
                                r = n.disabled,
                                i = n.title,
                                a = n.options,
                                c = n.value,
                                u = n.autoScale,
                                s = void 0 !== u && u,
                                l = n.placeholder,
                                d = n.color,
                                f = n.theme,
                                h = void 0 === f ? "light" : f,
                                v = n.className,
                                Z = void 0 === v ? "" : v,
                                g = n.closeOnSelection,
                                w = void 0 === g || g,
                                N = n.menuAlign,
                                k = n.onChange,
                                C = n.onBottomReached,
                                O = n.aboveSlot,
                                P = n.belowSlot;
                            return (0, o.Z)(m.Z, {
                                disabled: r,
                                labelTitle: i,
                                labelValue: b(a, c).caseOf({
                                    Some: function(e) {
                                        return e.title
                                    },
                                    None: function() {}
                                }),
                                longestLabelValue: s ? a.reduce((function(e, t) {
                                    return "string" == typeof t.title && e.length > t.title.length ? e : t.title
                                }), "") : "",
                                placeholder: l,
                                color: d,
                                theme: h,
                                className: Z,
                                menuAlign: N,
                                "data-selenium": this.props["data-selenium"]
                            }, void 0, (function(n) {
                                return p.createElement(p.Fragment, null, O ? e || (e = (0, o.Z)("div", {
                                    className: "c-dropdown-select__slot"
                                }, void 0, (0, o.Z)("div", {
                                    className: "c-dropdown-select__slot-container"
                                }, void 0, O))) : null, p.createElement(y, {
                                    dropdown: n,
                                    onSelectOption: k,
                                    value: c,
                                    color: d,
                                    theme: h,
                                    options: a,
                                    onBottomReached: C,
                                    closeOnSelection: w
                                }), P ? t || (t = (0, o.Z)("div", {
                                    className: "c-dropdown-select__slot"
                                }, void 0, (0, o.Z)("div", {
                                    className: "c-dropdown-select__slot-container"
                                }, void 0, P))) : null)
                            }))
                        }
                    }]), n
                }(p.Component)
        },
        A2i4: (e, t, n) => {
            n.d(t, {
                ZP: () => y
            });
            var o = n("sQwH"),
                r = n("xKIK"),
                i = n("sGMM"),
                a = n("3Z9q"),
                c = n("X40V"),
                u = n("45Yh"),
                s = n("R2Pi"),
                l = n("zIYZ"),
                d = n("lrhy");

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var p = new Map,
                v = function(e) {
                    return Boolean(!(0, u.sk)() && e.url && p.has(e.url))
                },
                Z = function(e) {
                    return !(0, u.sk)() && e.url && p.has(e.url) ? p.get(e.url).width : 0
                },
                m = function(e) {
                    return !(0, u.sk)() && e.url && p.has(e.url) ? p.get(e.url).height : 0
                },
                g = function(e, t) {
                    return e.width * e.height >= t.width * t.height
                },
                w = function(e, t, n, o) {
                    return function(e, t, n, o) {
                        var r = Math.abs(n - e.width),
                            i = Math.abs(n - t.width);
                        return r + Math.abs(o - e.height) <= i + Math.abs(o - t.height)
                    }(e, t, n, o) && (g(e, {
                        width: n,
                        height: o
                    }) || g(e, t)) && !(g(t, e) && v(t) && !v(e))
                },
                b = function(e, t, n, o) {
                    var r = function(e, t, n) {
                            return e.length ? e.reduceRight((function(e, o) {
                                return w(o, e, t, n) ? o : e
                            }), e[0]) : {
                                url: "",
                                width: 1 / 0,
                                height: 1 / 0,
                                size: 0
                            }
                        }(t, n, o),
                        c = function(e, t) {
                            var n = a.useState({
                                    isLoaded: v(t),
                                    width: Z(t),
                                    height: m(t)
                                }),
                                o = (0, i.Z)(n, 2),
                                r = o[0],
                                c = o[1];
                            return a.useEffect((function() {
                                var n = function(e) {
                                    p.set(t.url, {
                                        width: e.width,
                                        height: e.height
                                    }), c({
                                        isLoaded: !0,
                                        width: e.width,
                                        height: e.height
                                    })
                                };
                                r.isLoaded !== v(t) && c((function(e) {
                                    return h(h({}, e), {}, {
                                        isLoaded: v(t)
                                    })
                                }));
                                var o = new d.k3((function() {}));
                                if (!r.isLoaded && t.url) {
                                    if (s.default.any && e.current) {
                                        var i = (0, u.jo)(e.current, (function(e) {
                                            e && (o = d.k3.fromPromise((0, u.jF)(t.url)).then((function(e) {
                                                n(e), i && i(), i = null
                                            })).catch((function(e) {
                                                var t = e.target;
                                                console.error("Couldn't load ".concat(t.src)), i && i(), i = null
                                            })))
                                        }));
                                        return function() {
                                            i && i()
                                        }
                                    }
                                    o = d.k3.fromPromise((0, u.jF)(t.url)).then((function(e) {
                                        n(e)
                                    })).catch((function(e) {
                                        var t = e.target;
                                        return console.error("Couldn't load ".concat(t.src))
                                    }))
                                }
                                return o.cancel()
                            }), [t, r.isLoaded, e]), [r.isLoaded, r.width, r.height]
                        }(e, r),
                        l = (0, i.Z)(c, 3);
                    return [r, l[0], l[1], l[2]]
                };
            const y = function(e) {
                var t = e.images,
                    n = e.alt,
                    r = e.width,
                    s = e.height,
                    d = e.deferred,
                    f = void 0 === d || d,
                    h = e.className,
                    p = a.useRef(null),
                    v = b(p, Array.isArray(t) ? t : (0, l.vM)(t) ? t.images : [], r, s),
                    Z = (0, i.Z)(v, 2),
                    m = Z[0],
                    g = Z[1],
                    w = f && !g,
                    y = (0, u.w1)();
                return a.createElement("div", {
                    ref: p,
                    className: (0, c.AK)("image-container", h, {
                        "--loading": !g,
                        "--cover": y
                    })
                }, (0, o.Z)("div", {
                    style: {
                        paddingTop: "".concat(s / r * 100, "%")
                    }
                }), y ? (0, o.Z)("div", {
                    "data-selenium": "image",
                    className: "image-container__image",
                    "aria-label": n,
                    style: {
                        backgroundImage: w ? void 0 : "url(".concat(m.url, ")")
                    }
                }) : (0, o.Z)("img", {
                    "data-selenium": "image",
                    className: "image-container__image",
                    alt: n,
                    src: w ? void 0 : m.url
                }))
            }
        },
        V4X4: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var o = n("D4hk"),
                r = n("3MRe"),
                i = n("MndH"),
                a = n("3Z9q"),
                c = n("X40V"),
                u = ["onChange", "className", "grey", "border", "error", "hasError", "isTouched", "autoFocus"];
            const s = function(e) {
                var t = e.onChange,
                    n = e.className,
                    s = void 0 === n ? "form-input" : n,
                    l = e.grey,
                    d = void 0 !== l && l,
                    f = e.border,
                    h = void 0 !== f && f,
                    p = e.error,
                    v = void 0 === p ? "" : p,
                    Z = e.hasError,
                    m = void 0 !== Z && Z,
                    g = e.isTouched,
                    w = void 0 !== g && g,
                    b = e.autoFocus,
                    y = void 0 !== b && b,
                    N = (0, r.Z)(e, u),
                    k = a.useRef(null);
                return a.useEffect((function() {
                    y && k.current && k.current.focus()
                }), [y]), a.createElement("input", (0, o.Z)({
                    ref: k,
                    onChange: function(e) {
                        return t(e.target.value)
                    },
                    className: (0, c.AK)(s, {
                        "--grey": d,
                        "--border": h,
                        "--error": (Boolean(v) || m) && w
                    }),
                    autoFocus: y
                }, (0, i.Z)(N, "hasChanged")))
            }
        },
        gmGo: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var o, r = n("D4hk"),
                i = n("sQwH"),
                a = n("3MRe"),
                c = n("3Z9q"),
                u = n("X40V"),
                s = n("V4X4"),
                l = ["className", "placeholder", "maxLength"];

            function d(e) {
                var t = e.className,
                    n = e.placeholder,
                    d = e.maxLength,
                    f = void 0 === d ? 120 : d,
                    h = (0, a.Z)(e, l);
                return (0, i.Z)("div", {
                    className: (0, u.AK)("c-search-input", t)
                }, void 0, o || (o = (0, i.Z)("i", {
                    "aria-hidden": "true",
                    className: "c-search-input__icon custom-icons icon-search"
                })), c.createElement(s.Z, (0, r.Z)({
                    type: "text",
                    name: "query",
                    autoCapitalize: "none",
                    autoComplete: "off",
                    autoCorrect: "off",
                    className: "c-search-input__input",
                    maxLength: f,
                    placeholder: n,
                    "aria-label": n
                }, h)))
            }
        },
        "I0q+": (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var o = n("D4hk"),
                r = n("xKIK"),
                i = n("3MRe"),
                a = n("3Z9q"),
                c = n("A2i4"),
                u = n("X40V"),
                s = n("9FSv"),
                l = ["avatars", "size", "className", "shape"];
            const d = function(e) {
                var t, n = e.avatars,
                    d = e.size,
                    f = void 0 === d ? 32 : d,
                    h = e.className,
                    p = e.shape,
                    v = (0, i.Z)(e, l);
                return a.createElement(c.ZP, (0, o.Z)({
                    className: (0, u.AK)(s.Z.view, h, (t = {}, (0, r.Z)(t, s.Z.round, "round" === p), (0, r.Z)(t, s.Z.square, "square" === p), t))
                }, v, {
                    images: n,
                    height: f,
                    width: f
                }))
            }
        },
        dZlF: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var o, r = n("D4hk"),
                i = n("sQwH"),
                a = n("3Z9q");
            const c = function(e) {
                return a.createElement("svg", (0, r.Z)({
                    width: 28,
                    height: 18,
                    viewBox: "0 0 28 18"
                }, e), o || (o = (0, i.Z)("path", {
                    d: "M27.83 10.688L24.284 16.5c-.226.406-.607.758-1.14 1.055-.535.297-1.045.445-1.53.445H2.185c-.454 0-.794-.187-1.02-.563-.227-.375-.227-.75 0-1.125L4.71 10.5c.227-.406.607-.758 1.141-1.055C6.387 9.148 6.897 9 7.382 9H26.81c.453 0 .793.187 1.02.563.227.375.227.75 0 1.124zM7.389 7.508c-.551 0-1.086.094-1.604.282a4.77 4.77 0 00-1.386.774 4.759 4.759 0 00-1.045 1.197L0 15.3V2.253C0 1.627.227 1.095.68.657A2.292 2.292 0 012.334 0h7.778l3.111 3.004H21c.648 0 1.2.219 1.653.657.453.438.68.97.68 1.595V7.51H7.39z",
                    fill: "#222",
                    fillRule: "evenodd"
                })))
            }
        },
        RA37: (e, t, n) => {
            n.d(t, {
                w: () => h,
                K: () => p
            });
            var o, r = n("sQwH"),
                i = n("sGMM"),
                a = n("3Z9q"),
                c = n("orRi"),
                u = n.n(c),
                s = n("W/PJ"),
                l = n.n(s),
                d = {
                    default: u(),
                    "high-contrast": l()
                },
                f = (o = window.localStorage.getItem("theme")) ? {
                    value: o,
                    colors: d[o]
                } : {
                    value: "default",
                    colors: u()
                },
                h = a.createContext(f);

            function p(e) {
                var t = e.children,
                    n = (0, a.useState)(f),
                    o = (0, i.Z)(n, 2),
                    c = o[0],
                    s = o[1],
                    l = function() {
                        var e = window.localStorage.getItem("theme");
                        s(e ? {
                            value: e,
                            colors: d[e]
                        } : {
                            value: "default",
                            colors: u()
                        })
                    };
                return (0, a.useEffect)((function() {
                    return window.addEventListener("storage", l),
                        function() {
                            return window.removeEventListener("storage", l)
                        }
                }), []), (0, r.Z)(h.Provider, {
                    value: c
                }, void 0, t)
            }
        },
        xtQ3: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var o = n("D4hk"),
                r = n("qD8I"),
                i = n("CUcO"),
                a = n("8N4v"),
                c = n("Zfzx"),
                u = n("FUT3"),
                s = n("hayj"),
                l = n("xKIK"),
                d = n("JVQt"),
                f = n("3Z9q");

            function h(e) {
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
                    var n, o = (0, s.Z)(e);
                    if (t) {
                        var r = (0, s.Z)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return (0, u.Z)(this, n)
                }
            }

            function p(e) {
                return function(t) {
                    var n, u;
                    return u = n = function(n) {
                        (0, c.Z)(s, n);
                        var u = h(s);

                        function s(t) {
                            var n;
                            (0, r.Z)(this, s), n = u.call(this, t), (0, l.Z)((0, a.Z)(n), "getFormProps", void 0);
                            var o = (0, d.Z)(e, (function() {
                                    return n.state
                                }), n.setState.bind((0, a.Z)(n)), (function() {
                                    return n.props
                                })),
                                i = o.initialState,
                                c = o.getProps;
                            return n.state = i, n.getFormProps = c, n
                        }
                        return (0, i.Z)(s, [{
                            key: "render",
                            value: function() {
                                return f.createElement(t, (0, o.Z)({}, this.props, {
                                    form: this.getFormProps()
                                }))
                            }
                        }]), s
                    }(f.Component), (0, l.Z)(n, "displayName", "Form(".concat(t.displayName, ")")), u
                }
            }
        },
        "2bV5": (e, t, n) => {
            n.d(t, {
                Q: () => i
            });
            var o = n("3Z9q"),
                r = n("e1Pq"),
                i = function(e, t) {
                    var n = (0, r.Z)().Popups;
                    return o.useCallback((function() {
                        return n.loadCreateProjectPopup().then((function(n) {
                            return new n({
                                orgUid: e,
                                onProjectCreated: t
                            }).open()
                        }))
                    }), [e, t, n])
                }
        },
        V29b: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var o = n("3Z9q"),
                r = n("CfKk"),
                i = n("xIYY"),
                a = n("ajs0");
            const c = function() {
                var e = (0, i.v9)(r.wl.authUser.user),
                    t = (0, a.Z)((function(e, t) {
                        return e.Api.getCurrentUserMemberships(t)
                    }), [e.uid]);
                return o.useEffect((function() {
                    t.onLoadFirst()
                }), [e.uid]), t
            }
        },
        UzvP: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var o = n("Wch8"),
                r = n("eLCO"),
                i = n.n(r),
                a = n("3Z9q"),
                c = n("ajs0");
            const u = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = (0, c.Z)(function() {
                        var n = (0, o.Z)(i().mark((function n(o, r) {
                            var a;
                            return i().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return a = o.Api, n.abrupt("return", a.searchOrgProjects(e, {
                                            q: t,
                                            cursor: r
                                        }));
                                    case 2:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e, t) {
                            return n.apply(this, arguments)
                        }
                    }(), [e, t]);
                return a.useEffect((function() {
                    e && n.onLoadFirst()
                }), [e, t]), n
            }
        },
        hk5G: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var o = n("7isf"),
                r = n("lrhy"),
                i = n("3Z9q"),
                a = n("HPk7"),
                c = n("Cgfs"),
                u = n("pLUK"),
                s = n("Oyie"),
                l = function(e) {
                    return e === window ? window.scrollY : e.scrollTop
                },
                d = function(e) {
                    return e === window ? document.documentElement.scrollHeight : e.scrollHeight
                };
            const f = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : window,
                    h = i.useRef(1 / 0),
                    p = (0, u.Z)(i.useCallback((function() {
                        return l(f) > h.current ? t().then((function() {
                            return (0, r.gw)(300)
                        })) : s.resolve()
                    }), [f].concat((0, o.Z)(n))));
                i.useEffect((function() {
                    if (f) {
                        var e = (0, a.Z)(p, 200);
                        return f.addEventListener("scroll", e, {
                                passive: !0
                            }),
                            function() {
                                f.removeEventListener("scroll", e)
                            }
                    }
                }), [f, p]);
                var v = i.useMemo((function() {
                    return (0, c.Z)((function() {
                        if (e.current) {
                            var t = f ? d(f) : 0,
                                n = t - (e.current.offsetTop + e.current.offsetHeight);
                            h.current = t - (n + 2 * window.innerHeight)
                        }
                    }), 100)
                }), [f, e]);
                i.useEffect((function() {
                    return v(), window.addEventListener("resize", v),
                        function() {
                            return window.removeEventListener("resize", v)
                        }
                }))
            }
        },
        "BR/Y": (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var o = n("7isf"),
                r = n("sGMM"),
                i = n("3Z9q"),
                a = n("4fae"),
                c = n("CfKk"),
                u = n("D7W8"),
                s = n("rEmB"),
                l = n("Sbzs"),
                d = n("HGbS"),
                f = n("XuRc"),
                h = n("MBtD");
            const p = function(e, t, n) {
                var p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                    v = (0, i.useContext)(d.N1),
                    Z = (0, i.useState)(t),
                    m = (0, r.Z)(Z, 2),
                    g = m[0],
                    w = m[1],
                    b = (0, i.useRef)(t),
                    y = (0, i.useRef)({}),
                    N = (0, i.useRef)(!0),
                    k = (0, i.useCallback)((function(e) {
                        var t = (0, a.Fv)(e, n).entities;
                        (0, u.Z)(t) || (0, s.Z)(t, y.current) || (y.current = t, N.current = !0, c.n2.store.dispatch(c.Nw.entities.update(t)), N.current = !1)
                    }), [n]),
                    C = (0, i.useCallback)((function() {
                        return b.current
                    }), []),
                    O = (0, i.useCallback)((function(e) {
                        b.current = (0, l.Z)(e) ? e(b.current) : e, w(b.current), k(b.current)
                    }), [k]);
                (0, i.useEffect)((function() {
                    return (0, h.se)(c.n2.store, c.wl.entities.all, (function(e) {
                        N.current || function(e) {
                            var t = (0, a.Fv)(b.current, n).result,
                                o = (0, a.cY)(t, n, e);
                            b.current = o, w(o)
                        }(e)
                    }))
                }), [n]);
                var P = (0, i.useMemo)((function() {
                        return [(0, d.OF)(v)].concat((0, o.Z)(p))
                    }), [v]),
                    R = (0, f.Z)(C, O, e, P),
                    E = (0, r.Z)(R, 2),
                    x = E[1];
                return [g, x]
            }
        },
        pLUK: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            var o = n("3Z9q");
            const r = function(e) {
                var t = (0, o.useRef)();
                return (0, o.useCallback)((function() {
                    return t.current ? t.current : (t.current = e.apply(void 0, arguments), t.current.catch((function(e) {
                        throw t.current = void 0, e
                    })).then((function(e) {
                        return t.current = void 0, e
                    })))
                }), [e])
            }
        },
        ajs0: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var o = n("sGMM"),
                r = n("3Z9q"),
                i = n("3wYL"),
                a = n("BR/Y");

            function c(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    c = n.initialState,
                    u = void 0 === c ? i.E3 : c,
                    s = n.reducer,
                    l = void 0 === s ? i.I6 : s,
                    d = n.schema,
                    f = r.useCallback((function(t, n) {
                        return e(t, n).then((function(e) {
                            return {
                                list: e.results,
                                cursors: e.cursors
                            }
                        }))
                    }), t),
                    h = (0, a.Z)(l, u, r.useMemo((function() {
                        return d ? {
                            list: [d]
                        } : {}
                    }), [d])),
                    p = (0, o.Z)(h, 2),
                    v = p[0],
                    Z = p[1],
                    m = r.useCallback((function() {
                        return Z(i.Nw.first((function(e) {
                            return f(e, null)
                        })))
                    }), [f, Z]),
                    g = r.useCallback((function() {
                        return Z(i.Nw.next((function(e, t) {
                            return f(e, t)
                        })))
                    }), [f, Z]),
                    w = r.useCallback((function() {
                        return Z(i.Nw.previous((function(e, t) {
                            return f(e, t)
                        })))
                    }), [f, Z]),
                    b = r.useCallback((function() {
                        return Z(i.Nw.reset())
                    }), [Z]);
                return {
                    dispatch: Z,
                    onLoadFirst: m,
                    onLoadNext: g,
                    onLoadPrevious: w,
                    onReset: b,
                    list: i.wl.list(v),
                    loading: i.wl.loading(v),
                    isLoading: i.wl.isLoading(v),
                    hasPreviousPage: i.wl.hasPreviousPage(v),
                    hasNextPage: i.wl.hasNextPage(v)
                }
            }
        },
        FbSi: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var o = n("sGMM"),
                r = n("3Z9q"),
                i = n("xIYY"),
                a = n("CfKk"),
                c = n("e1Pq");
            const u = function(e) {
                var t = (0, c.Z)().Api,
                    n = (0, i.v9)(a.wl.authUser.getOrgRole(e)).caseOf({
                        None: function() {},
                        Some: function(e) {
                            return e
                        }
                    }),
                    u = r.useState("spectator"),
                    s = (0, o.Z)(u, 2),
                    l = s[0],
                    d = s[1];
                return r.useEffect((function() {
                    e && (n ? d(n) : t.getCurrentUserOrgMember(e).then((function(e) {
                        return d(e.role)
                    })))
                }), [t, n, e, l]), l
            }
        },
        kN3w: (e, t, n) => {
            n.d(t, {
                Z: () => P
            });
            var o, r, i, a = n("xKIK"),
                c = n("7isf"),
                u = n("sGMM"),
                s = n("sQwH"),
                l = n("3Z9q"),
                d = n("xIYY"),
                f = n("CfKk"),
                h = n("X40V"),
                p = n("pgZm"),
                v = n("6tbf"),
                Z = n("UnUI"),
                m = n("dZlF"),
                g = n("2bV5"),
                w = n("hk5G"),
                b = n("ajs0"),
                y = n("FbSi"),
                N = n("FFUV"),
                k = n("Oyie"),
                C = function(e) {
                    var t = e.project;
                    return (0, p._f)(t) ? (0, s.Z)(v.Z, {
                        alt: "Thumbnail of a model in the project ".concat(t.name),
                        thumbnails: t.thumbnails[0],
                        deferImages: !0,
                        width: 24,
                        height: 24,
                        className: N.Z["project-icon"]
                    }) : (0, s.Z)("div", {
                        className: N.Z.icon
                    }, void 0, o || (o = (0, s.Z)(m.Z, {
                        width: 18,
                        height: 18
                    })))
                },
                O = function(e) {
                    var t = e.orgUid,
                        n = e.onChange,
                        o = e.value,
                        v = l.useRef(null),
                        Z = l.useState([]),
                        m = (0, u.Z)(Z, 2),
                        O = m[0],
                        P = m[1],
                        R = O[O.length - 1],
                        E = (0, b.Z)((function(e, n) {
                            var o = e.Api,
                                r = R ? R.uid : void 0;
                            return o.searchOrgProjects(t, {
                                cursor: n,
                                parent: r
                            })
                        }), [null == R ? void 0 : R.uid]);
                    l.useEffect((function() {
                        E.onLoadFirst()
                    }), [null == R ? void 0 : R.uid]);
                    var x = l.useCallback((function() {
                        return E.hasNextPage ? E.onLoadNext() : k.resolve()
                    }), [E]);
                    (0, w.Z)(v, x, [x], v.current);
                    var L = function(e) {
                            n(e)
                        },
                        M = (0, d.v9)(f.wl.authUser.user),
                        S = (0, y.Z)(t),
                        j = M.isStaff || "admin" === S,
                        A = (0, g.Q)(t, (function() {
                            return E.onLoadFirst()
                        }));
                    return (0, s.Z)("div", {
                        className: N.Z.view
                    }, void 0, l.createElement("div", {
                        className: (0, h.AK)(N.Z.main, (0, a.Z)({}, (0, h.c6)(N.Z, "loading"), E.isLoading)),
                        ref: v
                    }, E.list.length > 0 ? l.createElement(l.Fragment, null, (0, s.Z)("div", {
                        className: (0, h.AK)(N.Z["back-header"], (0, a.Z)({}, (0, h.c6)(N.Z, "hidden"), 0 === O.length)),
                        onClick: function() {
                            P(O.slice(0, O.length - 1))
                        }
                    }, void 0, r || (r = (0, s.Z)("span", {
                        className: "fa fa-chevron-left"
                    })), "Choose a folder"), R ? (0, s.Z)("div", {
                        className: (0, h.AK)(N.Z["project-item"], N.Z["project-header"], (0, a.Z)({}, (0, h.c6)(N.Z, "selected"), R.uid === (null == o ? void 0 : o.uid))),
                        onClick: function() {
                            return L(R)
                        }
                    }, void 0, (0, s.Z)(C, {
                        project: R
                    }), (0, s.Z)("div", {
                        className: N.Z["project-name"]
                    }, void 0, R.name)) : null, E.list.map((function(e) {
                        var t;
                        return (0, s.Z)("div", {
                            className: (0, h.AK)(N.Z["project-item"], (t = {}, (0, a.Z)(t, (0, h.c6)(N.Z, "selected"), e.uid === (null == o ? void 0 : o.uid)), (0, a.Z)(t, (0, h.c6)(N.Z, "folder"), !(0, p._f)(e)), t))
                        }, e.uid, (0, s.Z)("div", {
                            className: N.Z["project-info"],
                            onClick: function() {
                                return L(e)
                            }
                        }, void 0, (0, p._f)(e) ? (0, s.Z)(C, {
                            project: e
                        }) : null, (0, s.Z)("div", {
                            className: N.Z["project-name"]
                        }, void 0, e.name)), e.folderCount > 0 ? (0, s.Z)("div", {
                            className: (0, h.AK)(N.Z.chevron, "fa fa-chevron-right"),
                            onClick: function() {
                                return function(e) {
                                    P([].concat((0, c.Z)(O), [e]))
                                }(e)
                            }
                        }) : null)
                    }))) : (0, s.Z)("div", {
                        className: N.Z.emptyState
                    }, void 0, "There is no project available.", i || (i = (0, s.Z)("br", {})), j ? (0, s.Z)("span", {
                        className: N.Z.newProject,
                        onClick: A
                    }, void 0, "Create a new project.") : "Ask your organization admin to create a project.")), (0, s.Z)("div", {
                        className: N.Z.footer
                    }))
                };
            const P = function(e) {
                var t = e.orgUid,
                    n = e.onChange,
                    o = e.value,
                    r = e.className,
                    i = void 0 === r ? "" : r,
                    a = e.disabled;
                return (0, s.Z)(Z.Z, {
                    labelValue: o ? o.name : "Select a project or folder",
                    className: (0, h.AK)(N.Z["folder-dropdown"], i),
                    disabled: a
                }, void 0, (function(e) {
                    return (0, s.Z)(O, {
                        orgUid: t,
                        value: o,
                        onChange: function(t) {
                            n(t), e.onToggle()
                        }
                    })
                }))
            }
        },
        mwAa: (e, t, n) => {
            n.d(t, {
                U_: () => c
            });
            var o = n("D4hk"),
                r = n("3Z9q"),
                i = n("X40V"),
                a = n("GR31"),
                c = (n("gmGo"), function(e) {
                    var t = e.pagination,
                        n = e.className;
                    return r.createElement(a.Z, (0, o.Z)({
                        className: (0, i.AK)("c-project-select__dropdown --paginated", n),
                        onBottomReached: function() {
                            t.hasNextPage && !t.isLoading && t.onLoadNext()
                        }
                    }, e))
                })
        }
    }
]);