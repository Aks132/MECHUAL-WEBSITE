(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [307], {
        g6dK: (e, t, o) => {
            "use strict";
            o.d(t, {
                Z: () => a
            });
            o("MQFR");
            var n = o("lotc"),
                r = o("KDlt");
            const a = o("7e5f").Z.extend({
                displayName: "MessagePopup",
                optionTypes: {
                    title: n.Z.string.isRequired,
                    text: n.Z.string.isRequired,
                    buttons: n.Z.shape({
                        cancel: n.Z.bool,
                        cancelClass: n.Z.string,
                        cancelLabel: n.Z.string,
                        close: n.Z.bool,
                        closeClass: n.Z.string,
                        closeLabel: n.Z.string,
                        continue: n.Z.bool,
                        continueClass: n.Z.string,
                        continueLabel: n.Z.string,
                        ok: n.Z.bool,
                        okClass: n.Z.string,
                        okLabel: n.Z.string,
                        delete: n.Z.bool,
                        deleteClass: n.Z.string,
                        deleteLabel: n.Z.string
                    }),
                    popupClass: n.Z.string,
                    safe: n.Z.bool,
                    popupClosable: n.Z.bool,
                    shouldRejectOnCancel: n.Z.bool
                },
                defaultOptions: {
                    shouldRejectOnCancel: !0
                },
                events: {
                    "reset form": "cancel",
                    "submit form": "continue"
                },
                template: function() {
                    return r.Z.get("skfb_front/popups/message", {
                        title: this.options.title,
                        text: this.options.text,
                        buttons: this.options.buttons,
                        safe: this.options.safe,
                        popupClass: this.options.popupClass,
                        popupClosable: this.options.popupClosable
                    })
                }
            })
        },
        ULsr: (e, t, o) => {
            "use strict";
            o.d(t, {
                Z: () => c
            });
            var n = o("sQwH"),
                r = o("3MRe"),
                a = o("3Z9q"),
                s = o("AnwU"),
                u = o("CfKk"),
                i = o("QbBG"),
                l = ["el", "_isChildOfAComponent"];

            function c(e) {
                return i.Z.extend({
                    displayName: "FromReact(".concat(e.displayName || e.name, ")"),
                    optionTypes: e.propTypes,
                    initialize: function() {
                        i.Z.prototype.initialize.apply(this, arguments)
                    },
                    viewDidMount: function() {
                        this.render()
                    },
                    viewWillReceiveOptions: function(e) {
                        this.renderReact(e)
                    },
                    shouldViewUpdate: function() {
                        return !1
                    },
                    template: function() {
                        return ""
                    },
                    render: function() {
                        this.renderReact(this.options)
                    },
                    viewWillUnmount: function() {
                        this.el && (0, s.unmountComponentAtNode)(this.el)
                    },
                    renderReact: function(t) {
                        if (!this.el) throw o = this.displayName, new Error("\n\nReactDOM.render error: `".concat(o, "` Component doesn't have a valid mount point. Check its selector.\n"));
                        var o;
                        (0, s.render)((0, n.Z)(u.n2.Provider, {}, void 0, a.createElement(e, function(e) {
                            return e.el, e._isChildOfAComponent, (0, r.Z)(e, l)
                        }(t))), this.el)
                    }
                })
            }
        },
        oR9T: (e, t, o) => {
            "use strict";

            function n(e) {
                var t;
                return null == e || null === (t = e.archivesStatus) || void 0 === t ? void 0 : t.some((function(e) {
                    return "uasset" === e.type && e.exists
                }))
            }

            function r(e) {
                var t;
                return !(null == e || null === (t = e.versions) || void 0 === t || !t.some((function(e) {
                    return ["PROCESSING DATASMITH", "FAILED DATASMITH"].includes(e.status.processing)
                })))
            }
            o.d(t, {
                X: () => n,
                _: () => r
            })
        },
        olZw: (e, t, o) => {
            "use strict";
            o.d(t, {
                S: () => n
            });
            var n = function(e) {
                var t = e.dataset.uri || "",
                    o = new Image;
                o.classList.add("lazyloaded"), o.onload = o.onerror = function() {
                    var t = e.offsetWidth,
                        n = o.naturalWidth > t ? o.naturalHeight * (t / o.naturalWidth) : o.naturalHeight;
                    t ? (["transitionend", "webkittransitionend", "moztransitionend"].forEach((function(t) {
                        return e.addEventListener(t, (function() {
                            return e.replaceWith(o)
                        }))
                    }), {
                        once: !0
                    }), n !== e.offsetHeight ? e.style.minHeight = "".concat(n, "px") : e.classList.add("loaded")) : e.replaceWith(o)
                }, o.src = t
            }
        },
        KUFO: (e, t, o) => {
            "use strict";
            o.d(t, {
                Z: () => i
            });
            var n = o("sQwH"),
                r = o("xKIK"),
                a = o("3Z9q"),
                s = o("X40V"),
                u = o("CV/D");
            const i = function(e) {
                var t = e.type,
                    o = e.label,
                    i = e.leftIcon,
                    l = e.rightIcon,
                    c = e.children;
                return (0, n.Z)("div", {
                    className: (0, s.AK)(u.Z.view, (0, s.c6)(u.Z, t))
                }, void 0, i ? a.createElement(a.Fragment, null, (0, n.Z)("i", {
                    className: (0, s.AK)(u.Z.icon, i.size ? (0, s.c6)(u.Z, i.size) : "", (0, s.c6)(u.Z, "left"), i.classname, {
                        help: Boolean(i.message)
                    })
                }, void 0, i.message ? (0, n.Z)("span", {
                    className: (0, s.AK)("tooltip", u.Z.tooltip, (0, r.Z)({}, "tooltip-".concat(i.messagePosition), !!i.messagePosition))
                }, void 0, i.message) : null)) : null, (0, n.Z)("div", {
                    className: (0, s.AK)("label", u.Z.label)
                }, void 0, " ", o || c), l ? a.createElement(a.Fragment, null, (0, n.Z)("i", {
                    className: (0, s.AK)(u.Z.icon, l.size ? (0, s.c6)(u.Z, l.size) : "", (0, s.c6)(u.Z, "right"), l.classname, {
                        help: Boolean(l.message)
                    })
                }, void 0, l.message ? (0, n.Z)("span", {
                    className: (0, s.AK)("tooltip", u.Z.tooltip, (0, r.Z)({}, "tooltip-".concat(l.messagePosition), !!l.messagePosition))
                }, void 0, l.message) : null)) : null)
            }
        },
        iqY9: (e, t, o) => {
            "use strict";
            o.d(t, {
                Z: () => u
            });
            var n = o("sQwH"),
                r = o("sGMM"),
                a = o("3Z9q"),
                s = o("vAnt");
            const u = function(e) {
                var t = e.size,
                    o = e.doesFollow,
                    u = e.onToggleFollow,
                    i = (0, a.useState)(!1),
                    l = (0, r.Z)(i, 2),
                    c = l[0],
                    p = l[1];
                return (0, n.Z)(s.Z, {
                    size: t,
                    type: o ? "important" : "primary",
                    text: o ? c ? "Unfollow" : "Following" : "Follow",
                    onMouseEnter: function() {
                        return p(!0)
                    },
                    onMouseLeave: function() {
                        return p(!1)
                    },
                    onClick: u
                })
            }
        },
        "N+9a": (e, t, o) => {
            "use strict";
            o.d(t, {
                Z: () => l
            });
            var n = o("D4hk"),
                r = o("3MRe"),
                a = o("3Z9q"),
                s = o("5hHH"),
                u = o("iu9k"),
                i = ["children", "to", "params", "queryParams", "hash"];
            const l = function(e) {
                var t = e.children,
                    o = e.to,
                    l = e.params,
                    c = void 0 === l ? {} : l,
                    p = e.queryParams,
                    d = void 0 === p ? {} : p,
                    m = e.hash,
                    f = (0, r.Z)(e, i),
                    v = "".concat((0, u.HQ)(o, c, d, m));
                return a.createElement("a", (0, n.Z)({}, f, {
                    href: v,
                    onClick: function(e) {
                        f.onClick && f.onClick(e), e.ctrlKey || e.metaKey || (e.preventDefault(), e.stopPropagation(), s.Z.push(v))
                    }
                }), t)
            }
        },
        GKm7: (e, t, o) => {
            "use strict";
            o.d(t, {
                Z: () => i
            });
            var n = o("D4hk"),
                r = o("3MRe"),
                a = o("3Z9q"),
                s = o("X40V"),
                u = ["children", "className", "type", "center"];
            const i = function(e) {
                var t = e.children,
                    o = e.className,
                    i = e.type,
                    l = e.center,
                    c = void 0 !== l && l,
                    p = (0, r.Z)(e, u),
                    d = "--".concat(i);
                return a.createElement("div", (0, n.Z)({}, p, {
                    className: (0, s.AK)("c-message", o, d, {
                        "--center": c
                    })
                }), t)
            }
        },
        "ZZB/": (e, t, o) => {
            "use strict";
            o.d(t, {
                Z: () => l
            });
            var n, r, a = o("sQwH"),
                s = o("3Z9q"),
                u = o("XxrW"),
                i = function(e) {
                    var t = e.model,
                        o = e.target,
                        i = void 0 === o ? "" : o,
                        l = e.clickable,
                        c = void 0 === l || l,
                        p = e.children;
                    return s.createElement(s.Fragment, null, (0, a.Z)("span", {
                        className: "model-name c-model-name"
                    }, void 0, t.visibility ? "protected" === t.visibility ? n || (n = (0, a.Z)("i", {
                        className: "model-name__icon fa fa-lock --protected"
                    })) : "private" === t.visibility ? r || (r = (0, a.Z)("i", {
                        className: "model-name__icon custom-icons icon-private --private"
                    })) : null : null, c ? (0, a.Z)(u.Z, {
                        className: "model-name__label",
                        model: t,
                        target: i,
                        title: t.name
                    }, void 0, t.name) : (0, a.Z)("span", {
                        className: "model-name__label",
                        itemProp: "name"
                    }, void 0, t.name)), p)
                };
            const l = s.memo(i)
        },
        XxrW: (e, t, o) => {
            "use strict";
            o.d(t, {
                r: () => d,
                Z: () => m
            });
            var n = o("sQwH"),
                r = o("D4hk"),
                a = o("3MRe"),
                s = o("3Z9q"),
                u = o("R2Pi"),
                i = o("5hHH"),
                l = ["model", "children", "suffix"],
                c = s.createContext([]),
                p = c.Consumer,
                d = c.Provider;
            const m = function(e) {
                var t = e.model,
                    o = e.children,
                    c = e.suffix,
                    d = void 0 === c ? "" : c,
                    m = (0, a.Z)(e, l);
                return (0, n.Z)(p, {}, void 0, (function(e) {
                    return s.createElement("a", (0, r.Z)({}, m, {
                        href: t.viewerUrl + d,
                        onClick: function(o) {
                            var n = o.ctrlKey || o.metaKey;
                            !e || n || u.default.any || (o.preventDefault(), o.stopPropagation(), i.Z.push((t.viewerUrl + d).replace(window.location.origin, "").replace(/^\//, ""), {
                                playlist: e
                            }))
                        }
                    }), o)
                }))
            }
        },
        f49s: (e, t, o) => {
            "use strict";
            o.d(t, {
                Z: () => p
            });
            var n = o("D4hk"),
                r = o("sQwH"),
                a = o("3MRe"),
                s = o("MndH"),
                u = o("3Z9q"),
                i = o("X40V"),
                l = o("xgPS"),
                c = ["value", "onChange", "options", "className", "icon", "placeholder", "hasError", "isTouched", "disabled", "grey"];
            const p = function(e) {
                var t = e.value,
                    o = e.onChange,
                    p = e.options,
                    d = e.className,
                    m = e.icon,
                    f = e.placeholder,
                    v = void 0 === f ? "" : f,
                    b = e.hasError,
                    h = void 0 !== b && b,
                    y = e.isTouched,
                    Z = void 0 !== y && y,
                    g = e.disabled,
                    w = void 0 !== g && g,
                    k = e.grey,
                    L = void 0 !== k && k,
                    x = (0, a.Z)(e, c);
                return (0, r.Z)("span", {
                    className: (0, i.AK)("form-select", d, {
                        invalid: h && Z,
                        disabled: w,
                        "--grey": L
                    })
                }, void 0, u.createElement("select", (0, n.Z)({}, (0, s.Z)(x, "hasChanged"), {
                    value: t || p.filter((function(e) {
                        return e.default
                    })).map((function(e) {
                        return e.value
                    }))[0],
                    onChange: function(e) {
                        return o(e.target.value)
                    },
                    disabled: w
                }), v && (0, r.Z)("option", {
                    hidden: !0,
                    value: ""
                }, void 0, v), p.map((function(e) {
                    return (0, r.Z)("option", {
                        value: "".concat(e.value)
                    }, "".concat(e.value), e.title)
                }))), m ? (0, r.Z)("i", {
                    className: "".concat(l.Z.icon, " fa ").concat(m)
                }) : null)
            }
        },
        zIQK: (e, t, o) => {
            "use strict";
            o.d(t, {
                Z: () => l
            });
            var n = o("D4hk"),
                r = o("sQwH"),
                a = o("3MRe"),
                s = o("3Z9q"),
                u = o("X40V"),
                i = ["text", "direction", "children", "className"];
            const l = function(e) {
                var t = e.text,
                    o = e.direction,
                    l = void 0 === o ? "down" : o,
                    c = e.children,
                    p = e.className,
                    d = (0, a.Z)(e, i);
                return s.createElement(s.Fragment, null, t ? s.createElement("div", (0, n.Z)({
                    className: (0, u.AK)("options help", p)
                }, d), (0, r.Z)("div", {
                    className: (0, u.AK)("tooltip", "tooltip-".concat(l))
                }, void 0, t), c) : c)
            }
        },
        jyRc: (e, t, o) => {
            "use strict";
            o.d(t, {
                Z: () => a
            });
            var n = o("sQwH"),
                r = (o("3Z9q"), o("A2i4"));
            const a = function(e) {
                var t = e.user,
                    o = e.width,
                    a = void 0 === o ? 20 : o,
                    s = e.height,
                    u = void 0 === s ? 20 : s;
                return (0, n.Z)("div", {
                    className: "avatar",
                    "data-user-summary-anchor": "true",
                    "data-user": t.uid
                }, void 0, (0, n.Z)(r.ZP, {
                    alt: "Avatar of ".concat(t.username),
                    images: t.avatars,
                    width: a,
                    height: u
                }))
            }
        },
        LvQi: (e, t, o) => {
            "use strict";
            o.d(t, {
                Z: () => c
            });
            var n = o("sQwH"),
                r = (o("3Z9q"), o("mSEu")),
                a = o("X40V"),
                s = o("hDfq"),
                u = o("iu9k"),
                i = o("jyRc"),
                l = o("BNNE");
            const c = function(e) {
                var t = e.user,
                    o = e.target,
                    c = e.withAvatar,
                    p = void 0 !== c && c,
                    d = e.noLink,
                    m = void 0 !== d && d,
                    f = e.noBadgeLink,
                    v = void 0 !== f && f,
                    b = e.withoutBadge,
                    h = void 0 !== b && b,
                    y = e.tag,
                    Z = void 0 !== y && y,
                    g = e.withSummary,
                    w = void 0 === g || g,
                    k = e.by,
                    L = void 0 !== k && k,
                    x = e.className;
                return (0, n.Z)("div", {
                    className: (0, a.AK)("user-name", x, {
                        "--no-link": m,
                        "--no-badge-link": v
                    })
                }, void 0, (0, n.Z)("a", {
                    href: (0, u.HQ)("users:profile_summary", {
                        username: t.username
                    }),
                    onClick: function(e) {
                        return e.stopPropagation()
                    },
                    target: o,
                    className: "user-name__link"
                }, void 0, p && (0, n.Z)("span", {}, void 0, (0, n.Z)(l.Z, {
                    uid: t.uid,
                    disabled: !w
                }, void 0, (0, n.Z)(i.Z, {
                    user: t
                }))), (0, n.Z)("div", {
                    className: "text"
                }, void 0, L ? "by" : "", (0, n.Z)("span", {
                    "data-selenium": "username",
                    className: "username-wrapper",
                    itemProp: "name",
                    title: t.displayName
                }, void 0, t.displayName))), h ? null : function(e) {
                    return Object.prototype.hasOwnProperty.call(e, "planDetail") && Boolean(e.planDetail)
                }(t) && t.planDetail.badge ? (0, n.Z)("a", {
                    className: "user-name__flag",
                    href: "staff" === t.planDetail.badge ? (0, u.HQ)("pages:careers") + "#team" : "master" === t.planDetail.badge ? r.Z.hosts.discourse + "/g/Sketchfab-Masters?utm_source=website&utm_campaign=master-badge" : (0, u.HQ)("pages:plans", {}, {
                        ref: "plan-badge"
                    }),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-testid": "user-badge"
                }, void 0, (0, n.Z)("span", {
                    className: "flag --".concat(t.planDetail.badge)
                }, void 0, t.planDetail.title)) : "basic" === t.account ? null : (0, n.Z)("a", {
                    className: "user-name__flag",
                    href: (0, u.HQ)("pages:plans", {}, {
                        ref: "plan-badge"
                    }),
                    target: "_blank",
                    "data-testid": "user-badge"
                }, void 0, (0, n.Z)("span", {
                    className: "flag --".concat(t.account)
                }, void 0, (0, s.w8)(t.account))), Z && (0, n.Z)("span", {
                    className: "user-name__tag"
                }, void 0, " (@", t.username, ")"))
            }
        },
        "e+fc": (e, t, o) => {
            "use strict";
            o.d(t, {
                Z: () => h
            });
            var n = o("xKIK"),
                r = o("3Z9q"),
                a = o("mSEu"),
                s = o("wHg8"),
                u = o("Fnsp"),
                i = o("X40V"),
                l = o("zIYZ"),
                c = o("JBVY"),
                p = o("iu9k"),
                d = o("a261");

            function m(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, n)
                }
                return o
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(o), !0).forEach((function(t) {
                        (0, n.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : m(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var v = {
                convertVertexColor8Bit: "convert_vertex_color_8bit",
                debug3D: "debug3d",
                materialF0: "material_f0",
                shadowPCF: "shadow_PCF",
                webgl2: "webgl2"
            };

            function b(e, t) {
                var o = e.model,
                    n = e.versionUid,
                    m = e.defaultOptions,
                    b = void 0 === m ? a.Z.defaultInternalEmbedOptions : m,
                    h = e.embedOptions,
                    y = void 0 === h ? a.Z.defaultInternalEmbedOptions : h,
                    Z = e.isInspectorOpen,
                    g = void 0 !== Z && Z,
                    w = e.forwardHash,
                    k = void 0 !== w && w,
                    L = e.className,
                    x = r.useRef(null),
                    O = n ? new URL(o.embedUrl).origin + (0, p.HQ)("models:embed_specific_version", {
                        model_id: o.uid,
                        version_uid: n
                    }) : o.embedUrl,
                    C = r.useRef(!0),
                    S = function(e) {
                        if (x && x.current && x.current.contentWindow) try {
                            x.current.contentWindow.history.replaceState(void 0, "", e), x.current.contentWindow.dispatchEvent(new HashChangeEvent("hashchange"))
                        } catch (e) {}
                    };
                r.useEffect((function() {
                    var e = x.current;
                    if (e && e.contentWindow) {
                        e.focus();
                        var t = function(e) {
                            document.body.dispatchEvent(new KeyboardEvent("keydown", e))
                        };
                        return e.contentWindow.addEventListener("keydown", t),
                            function() {
                                e.contentWindow && e.contentWindow.removeEventListener("keydown", t)
                            }
                    }
                }), []), k && S(window.location.hash), r.useEffect((function() {
                    var e = function() {
                        return S(window.location.hash)
                    };
                    if (k) return window.addEventListener("hashchange", e),
                        function() {
                            return window.removeEventListener("hashchange", e)
                        }
                }), [k]), r.useEffect((function() {
                    var e = x.current;
                    e && e.contentWindow && (g && !e.contentWindow.location.hash ? S("#inspector") : e.contentWindow.location.hash && S(""))
                }), [g]);
                var F = O + function(e, t) {
                    return (0, c.cA)("?", f(f({}, e), (0, l.m_)((0, s.Z)(t, (function(e, t) {
                        return v[t] || (0, u.Z)(t)
                    })), (function(e, t) {
                        return d[t] && d[t].defaultValue !== e
                    }))))
                }(b, y);
                return r.useEffect((function() {
                    if (C.current) C.current = !1;
                    else {
                        var e = x.current;
                        if (e) {
                            var t = e.parentElement;
                            t && t.removeChild(e), requestAnimationFrame((function() {
                                return t && t.appendChild(e)
                            }))
                        }
                    }
                }), [F]), r.createElement("div", {
                    className: (0, i.AK)("c-viewer", L),
                    ref: t
                }, r.createElement("iframe", {
                    title: o.name + " 3D model - Sketchfab",
                    ref: x,
                    className: "c-viewer__iframe",
                    src: F,
                    id: "api-frame",
                    allow: "autoplay; fullscreen; xr-spatial-tracking",
                    "xr-spatial-tracking": "true",
                    "execution-while-out-of-viewport": "true",
                    "execution-while-not-rendered": "true",
                    "web-share": "true",
                    allowFullScreen: !0
                }))
            }
            const h = r.forwardRef(b)
        },
        lvYc: (e, t, o) => {
            "use strict";
            o.d(t, {
                Z: () => p
            });
            var n = o("Wch8"),
                r = o("eLCO"),
                a = o.n(r),
                s = o("eKF4"),
                u = o("3Z9q"),
                i = o("xIYY"),
                l = o("CfKk"),
                c = o("pLUK");
            const p = function(e) {
                var t = e.user,
                    o = e.children,
                    r = (0, i.I0)(),
                    p = (0, i.v9)((function(e) {
                        var o = l.wl.entities.user(t.uid, e);
                        return {
                            doesFollow: l.wl.authUser.doesFollow(t.uid, e),
                            hasEntity: !!o
                        }
                    })),
                    d = p.hasEntity,
                    m = p.doesFollow,
                    f = (0, c.Z)((function() {
                        return s.Z.authenticate((0, n.Z)(a().mark((function e() {
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return d || r(l.Nw.entities.update({
                                            users: [t]
                                        })), e.next = 3, r(l.Nw.authUser.toggleFollow(t.uid));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))))
                    })),
                    v = (0, u.useCallback)((function() {
                        return r(l.Nw.authUser.getDoesFollow(t.uid))
                    }), [r, t.uid]);
                return (0, u.useEffect)((function() {
                    v()
                }), [v, t.uid]), u.createElement(u.Fragment, null, o({
                    doesFollow: m,
                    onToggleFollow: f
                }))
            }
        },
        l9Gv: (e, t, o) => {
            "use strict";
            o.d(t, {
                Z: () => p
            });
            var n = o("qD8I"),
                r = o("CUcO"),
                a = o("8N4v"),
                s = o("Zfzx"),
                u = o("FUT3"),
                i = o("hayj"),
                l = o("xKIK");

            function c(e) {
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
                    var o, n = (0, i.Z)(e);
                    if (t) {
                        var r = (0, i.Z)(this).constructor;
                        o = Reflect.construct(n, arguments, r)
                    } else o = n.apply(this, arguments);
                    return (0, u.Z)(this, o)
                }
            }
            var p = function(e) {
                (0, s.Z)(o, e);
                var t = c(o);

                function o() {
                    var e;
                    (0, n.Z)(this, o);
                    for (var r = arguments.length, s = new Array(r), u = 0; u < r; u++) s[u] = arguments[u];
                    return e = t.call.apply(t, [this].concat(s)), (0, l.Z)((0, a.Z)(e), "state", {
                        isMounted: !1
                    }), e
                }
                return (0, r.Z)(o, [{
                    key: "componentDidMount",
                    value: function() {
                        this.setState({
                            isMounted: !0
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return (this.state.isMounted ? this.props.children() : this.props.fallback) || null
                    }
                }]), o
            }(o("3Z9q").Component)
        },
        TC9H: (e, t, o) => {
            "use strict";
            o.d(t, {
                Z: () => u
            });
            var n = o("3Z9q"),
                r = o("olZw");

            function a(e, t) {
                var o = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!o) {
                    if (Array.isArray(e) || (o = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return s(e, t);
                            var o = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === o && e.constructor && (o = e.constructor.name);
                            if ("Map" === o || "Set" === o) return Array.from(e);
                            if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return s(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        o && (e = o);
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
                var a, u = !0,
                    i = !1;
                return {
                    s: function() {
                        o = o.call(e)
                    },
                    n: function() {
                        var e = o.next();
                        return u = e.done, e
                    },
                    e: function(e) {
                        i = !0, a = e
                    },
                    f: function() {
                        try {
                            u || null == o.return || o.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                }
            }

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
                return n
            }

            function u(e, t) {
                n.useEffect((function() {
                    if (e.current) {
                        var t, o = a(Array.prototype.slice.call(e.current.getElementsByClassName("lazyload")));
                        try {
                            for (o.s(); !(t = o.n()).done;) {
                                var n = t.value;
                                if (!(n instanceof HTMLElement)) break;
                                (0, r.S)(n)
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                    }
                }), t)
            }
        },
        R276: (e, t, o) => {
            "use strict";
            o.d(t, {
                Z: () => c
            });
            var n = o("xKIK"),
                r = o("sGMM"),
                a = o("3Z9q"),
                s = o("HGbS"),
                u = o("BR/Y");

            function i(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, n)
                }
                return o
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(o), !0).forEach((function(t) {
                        (0, n.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : i(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            const c = function(e, t, o, n) {
                var i = a.useMemo((function() {
                        return n ? {
                            value: n
                        } : {
                            value: {}
                        }
                    }), [n]),
                    c = (0, u.Z)((function(e, t) {
                        return t.payload.effect.caseOf({
                            Pending: function() {
                                return l(l({}, e), {}, {
                                    loading: !0
                                })
                            },
                            Rejected: function() {
                                return l(l({}, e), {}, {
                                    loading: !1
                                })
                            },
                            Resolved: function(t) {
                                return l(l({}, e), {}, {
                                    loading: !1,
                                    value: t
                                })
                            }
                        })
                    }), {
                        value: t,
                        loading: !1
                    }, i),
                    p = (0, r.Z)(c, 2),
                    d = p[0],
                    m = p[1];
                return a.useEffect((function() {
                    var t = (0, s.GZ)({
                        type: "RUN",
                        payload: {
                            effect: e
                        }
                    });
                    m(t)
                }), o), [d.value, d.loading]
            }
        },
        LH8s: (e, t, o) => {
            "use strict";
            o.d(t, {
                Z: () => i
            });
            var n, r = o("sQwH"),
                a = (o("3Z9q"), o("TUor")),
                s = o("RfRU"),
                u = o("X40V");
            const i = function(e) {
                var t = e.model,
                    o = e.className;
                return (0, r.Z)("div", {
                    className: (0, u.AK)(s.Z.view, o)
                }, void 0, n || (n = (0, r.Z)("i", {
                    className: "icon fa fa-exclamation-triangle"
                })), (0, r.Z)("div", {}, void 0, "This draft will be automatically ", (0, r.Z)("strong", {}, void 0, "deleted on ".concat((0, a.ai)(t.createdAt))), " unless you publish it."))
            }
        },
        "4sJl": (e, t, o) => {
            "use strict";
            o.d(t, {
                tK: () => l,
                _U: () => c,
                Bl: () => p,
                M6: () => d,
                WQ: () => m,
                ZD: () => f
            });
            var n = o("7isf"),
                r = o("Wch8"),
                a = o("eLCO"),
                s = o.n(a),
                u = o("CfKk"),
                i = o("pgZm"),
                l = function() {
                    var e = (0, r.Z)(s().mark((function e(t) {
                        var o, n;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!t.isServer) {
                                        e.next = 4;
                                        break
                                    }
                                    e.t0 = t.services.Prefetching.get(t.props.orgQuery), e.next = 7;
                                    break;
                                case 4:
                                    return e.next = 6, t.services.Api.getPrivateOrgByName(t.props.routeParams.username);
                                case 6:
                                    e.t0 = e.sent;
                                case 7:
                                    return o = e.t0, e.next = 10, t.services.dispatch(u.Nw.entities.update({
                                        orgs: [o]
                                    }));
                                case 10:
                                    if (u.wl.authUser.isStaff(t.services.getState())) {
                                        e.next = 25;
                                        break
                                    }
                                    if (!t.isServer) {
                                        e.next = 16;
                                        break
                                    }
                                    e.t1 = t.services.Prefetching.get(t.props.userMemberQuery), e.next = 19;
                                    break;
                                case 16:
                                    return e.next = 18, t.services.Api.getCurrentUserOrgMember(o.uid);
                                case 18:
                                    e.t1 = e.sent;
                                case 19:
                                    if (!(n = e.t1)) {
                                        e.next = 25;
                                        break
                                    }
                                    return e.next = 23, t.services.dispatch(u.Nw.entities.update({
                                        orgMembers: [n]
                                    }));
                                case 23:
                                    return e.next = 25, t.services.dispatch(u.Nw.authUser.addMembership(o.uid, n.uid));
                                case 25:
                                    return e.abrupt("return", {
                                        uid: o.uid
                                    });
                                case 26:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                c = function() {
                    var e = (0, r.Z)(s().mark((function e(t) {
                        var o, n, r, a, i;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, l(t);
                                case 2:
                                    if (o = e.sent, n = t.services, r = n.Prefetching, a = n.Api, !t.isServer) {
                                        e.next = 8;
                                        break
                                    }
                                    e.t0 = r.get(t.props.projectQuery), e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10, a.getOrgProject(o.uid, t.props.routeParams.uid);
                                case 10:
                                    e.t0 = e.sent;
                                case 11:
                                    return i = e.t0, e.next = 14, t.services.dispatch(u.Nw.entities.update({
                                        orgProjects: [i]
                                    }));
                                case 14:
                                    return e.abrupt("return", {
                                        orgUid: o.uid,
                                        projectUid: i.uid
                                    });
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function(e, t, o) {
                    return t.isStaff || o.caseOf({
                        None: function() {
                            return !1
                        },
                        Some: function(o) {
                            return "admin" === o || "contributor" === o && e.user.uid === t.uid
                        }
                    })
                },
                d = function(e, t) {
                    return e.isStaff || t.caseOf({
                        None: function() {
                            return !1
                        },
                        Some: function(e) {
                            return (0, i.oF)(e, "contributor")
                        }
                    })
                },
                m = function(e, t) {
                    return e.isStaff || t.caseOf({
                        None: function() {
                            return !1
                        },
                        Some: function(e) {
                            return (0, i.oF)(e, "contributor")
                        }
                    })
                },
                f = function(e, t, o) {
                    return [{
                        name: e.displayName || e.username,
                        icon: e.avatars,
                        link: {
                            to: "orgs:home",
                            params: {
                                username: e.username
                            }
                        }
                    }].concat((0, n.Z)(t.breadcrumbs.map((function(e) {
                        return {
                            name: e.name,
                            icon: o,
                            link: {
                                to: "orgs:project",
                                params: {
                                    slug: e.slug,
                                    uid: e.uid,
                                    username: t.org.username
                                }
                            }
                        }
                    }))))
                }
        },
        BNNE: (e, t, o) => {
            "use strict";
            o.d(t, {
                Z: () => k
            });
            var n = o("sQwH"),
                r = o("sGMM"),
                a = o("3Z9q"),
                s = o("I0q+"),
                u = o("N+9a"),
                i = o("p5Lb"),
                l = o("1nxQ"),
                c = o("xIYY"),
                p = o("CfKk"),
                d = o("iqY9"),
                m = o("lvYc"),
                f = o("6tbf"),
                v = o("fOAt"),
                b = o("jQKg"),
                h = o("X40V"),
                y = o("AnwU"),
                Z = o("iu9k"),
                g = document.body,
                w = function(e) {
                    var t = e.children,
                        o = (0, a.useRef)(document.createElement("div"));
                    return (0, a.useEffect)((function() {
                        var e = o.current;
                        return g.appendChild(e),
                            function() {
                                g.removeChild(e)
                            }
                    }), []), y.createPortal(t, o.current)
                };
            const k = function(e) {
                var t, o, y, g = e.uid,
                    k = e.children,
                    L = e.followButton,
                    x = void 0 === L || L,
                    O = e.disabled,
                    C = (0, c.v9)(p.wl.authUser.user),
                    S = (0, a.useState)(),
                    F = (0, r.Z)(S, 2),
                    N = F[0],
                    E = F[1],
                    _ = (0, a.useState)(!1),
                    A = (0, r.Z)(_, 2),
                    j = A[0],
                    V = A[1],
                    P = (0, a.useState)(!1),
                    H = (0, r.Z)(P, 2),
                    R = H[0],
                    K = H[1],
                    M = (0, a.useRef)(null),
                    D = (0, a.useRef)(!1);
                a.useEffect((function() {
                    return function() {
                        return clearTimeout(y)
                    }
                }));
                var U = function() {
                    var e = M.current;
                    if (e) {
                        var t = e.getBoundingClientRect(),
                            o = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
                            n = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
                            r = "summary-right",
                            a = "summary-bottom",
                            s = {
                                left: "auto",
                                right: "auto",
                                top: "auto",
                                bottom: "auto"
                            };
                        return t.left + 400 > o && (r = "summary-left"), t.top + 255 > n && (a = "summary-top"), s.left = "summary-right" === r ? t.left + e.offsetWidth / 2 - 23 : t.left - 400 + e.offsetWidth + 8, s.top = "summary-bottom" === a ? t.top + e.offsetHeight + 12 + window.scrollY : t.top - 255 - e.offsetHeight / 3 + window.scrollY, {
                            position: s,
                            class: (0, h.AK)(r, a)
                        }
                    }
                };
                return a.createElement("div", {
                    ref: M,
                    onMouseEnter: function() {
                        O || (D.current = !0, K(!0), j || N || (V(!0), b.Z.getUserSummary(g).then((function(e) {
                            E(e), V(!1)
                        }))))
                    },
                    onMouseLeave: function() {
                        D.current = !1, y = setTimeout((function() {
                            K(D.current)
                        }), 300)
                    }
                }, k, N ? (0, n.Z)(w, {}, void 0, (0, n.Z)("div", {
                    className: (0, h.AK)(v.Z.profileSummaryContainer, {
                        "--active": R
                    })
                }, void 0, (0, n.Z)("div", {
                    className: (0, h.AK)("user-summary", null === (t = U()) || void 0 === t ? void 0 : t.class, v.Z.userSummary),
                    style: null === (o = U()) || void 0 === o ? void 0 : o.position
                }, void 0, (0, n.Z)("div", {
                    className: "user"
                }, void 0, (0, n.Z)(u.Z, {
                    className: v.Z.profilePictureLink,
                    "aria-label": "Visit ".concat(N.username, " profile"),
                    to: "users:profile_summary",
                    params: {
                        username: N.username
                    }
                }, void 0, (0, n.Z)(s.Z, {
                    alt: "avatar of ".concat(N.username),
                    avatars: N.avatars,
                    size: 104
                })), (0, n.Z)("div", {
                    className: "info"
                }, void 0, (0, n.Z)("p", {
                    className: "name",
                    title: N.displayName
                }, void 0, (0, n.Z)("a", {
                    href: (0, Z.HQ)("users:profile_summary", {
                        username: N.username
                    })
                }, void 0, N.displayName)), (0, n.Z)("p", {
                    className: "tagline",
                    title: N.tagline ? N.tagline : void 0
                }, void 0, (0, n.Z)("a", {
                    href: "{{ url('users:profile_summary', username=user.username) }}"
                }, void 0, N.tagline)), x && C.uid !== g ? (0, n.Z)("div", {
                    className: "follow-wrapper"
                }, void 0, (0, n.Z)(m.Z, {
                    user: N
                }, void 0, (function(e) {
                    return a.createElement(d.Z, e)
                })), (0, n.Z)("p", {
                    className: "follow-count"
                }, void 0, (0, n.Z)("a", {
                    href: (0, Z.HQ)("users:profile_followers", {
                        username: N.username
                    })
                }, void 0, (0, n.Z)("span", {}, void 0, (0, i.sH)(N.followerCount)), " ", "follower", (0, l.pluralize)(N.followerCount)))) : null)), (0, n.Z)("div", {
                    className: "models"
                }, void 0, N.thumbnails.map((function(e, t) {
                    return t < 3 ? (0, n.Z)("a", {
                        href: e.viewerUrl,
                        style: {
                            width: 133
                        }
                    }, e.viewerUrl, (0, n.Z)(f.Z, {
                        thumbnails: e.thumbnail
                    })) : null
                }))), (0, n.Z)("div", {
                    className: "stats"
                }, void 0, (0, n.Z)("p", {
                    className: "model-count"
                }, void 0, (0, i.sH)(N.modelCount), " model", (0, l.pluralize)(N.modelCount)), (0, n.Z)("p", {
                    className: "view-count"
                }, void 0, (0, i.sH)(N.stats.publicViewCount), " view", (0, l.pluralize)(N.stats.publicViewCount)), (0, n.Z)("p", {
                    className: "like-count"
                }, void 0, (0, i.sH)(N.stats.modelLikeCount), " like", (0, l.pluralize)(N.stats.modelLikeCount)))))) : null)
            }
        },
        jX4j: () => {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["skfb_front/layouts/popup.jinja"] = {
                b_popup_header: function(e, t, o, n, r) {
                    var a = "";
                    try {
                        o = o.push(!0), a += '\n                <div class="', a += n.suppressValue(n.contextOrFrameLookup(t, o, "popupTitleStyle"), e.opts.autoescape), a += '">\n                    ', a += n.suppressValue(n.contextOrFrameLookup(t, o, "popupTitle"), e.opts.autoescape), r(null, a += "\n                </div>\n            ")
                    } catch (e) {
                        r(n.handleError(e, null, null))
                    }
                },
                b_popup_content: function(e, t, o, n, r) {
                    var a = "";
                    try {
                        o = o.push(!0), r(null, a += "\n            ")
                    } catch (e) {
                        r(n.handleError(e, null, null))
                    }
                },
                b_popup_footer: function(e, t, o, n, r) {
                    var a = "";
                    try {
                        o = o.push(!0), r(null, a += "\n                ")
                    } catch (e) {
                        r(n.handleError(e, null, null))
                    }
                },
                root: function(e, t, o, n, r) {
                    var a = "";
                    try {
                        var s, u, i, l, c, p, d, m, f, v, b, h, y, Z;
                        n.contextOrFrameLookup(t, o, "isWhiteBackground") ? (a += "\n    ", s = "c-popup c-popup__container", o.set("popupStyle", s, !0), o.topLevel && t.setVariable("popupStyle", s), o.topLevel && t.addExport("popupStyle", s), a += "\n    ", u = "c-popup__header", o.set("popupHeaderStyle", u, !0), o.topLevel && t.setVariable("popupHeaderStyle", u), o.topLevel && t.addExport("popupHeaderStyle", u), a += "\n    ", i = "c-popup__title", o.set("popupTitleStyle", i, !0), o.topLevel && t.setVariable("popupTitleStyle", i), o.topLevel && t.addExport("popupTitleStyle", i), a += "\n    ", l = "c-popup__actions", o.set("popupActionsStyle", l, !0), o.topLevel && t.setVariable("popupActionsStyle", l), o.topLevel && t.addExport("popupActionsStyle", l), a += "\n    ", c = "c-popup__close", o.set("popupCloseStyle", c, !0), o.topLevel && t.setVariable("popupCloseStyle", c), o.topLevel && t.addExport("popupCloseStyle", c), a += "\n    ", p = "c-popup__content", o.set("popupContentStyle", p, !0), o.topLevel && t.setVariable("popupContentStyle", p), o.topLevel && t.addExport("popupContentStyle", p), a += "\n    ", d = "c-popup__footer", o.set("popupFooterStyle", d, !0), o.topLevel && t.setVariable("popupFooterStyle", d), o.topLevel && t.addExport("popupFooterStyle", d), a += "\n") : (a += "\n    ", m = "popup", o.set("popupStyle", m, !0), o.topLevel && t.setVariable("popupStyle", m), o.topLevel && t.addExport("popupStyle", m), a += "\n    ", f = "popup-header", o.set("popupHeaderStyle", f, !0), o.topLevel && t.setVariable("popupHeaderStyle", f), o.topLevel && t.addExport("popupHeaderStyle", f), a += "\n    ", v = "popup-title", o.set("popupTitleStyle", v, !0), o.topLevel && t.setVariable("popupTitleStyle", v), o.topLevel && t.addExport("popupTitleStyle", v), a += "\n    ", b = "popup-actions", o.set("popupActionsStyle", b, !0), o.topLevel && t.setVariable("popupActionsStyle", b), o.topLevel && t.addExport("popupActionsStyle", b), a += "\n    ", h = "popup-close", o.set("popupCloseStyle", h, !0), o.topLevel && t.setVariable("popupCloseStyle", h), o.topLevel && t.addExport("popupCloseStyle", h), a += "\n    ", y = "popup-content", o.set("popupContentStyle", y, !0), o.topLevel && t.setVariable("popupContentStyle", y), o.topLevel && t.addExport("popupContentStyle", y), a += "\n    ", Z = "popup-footer", o.set("popupFooterStyle", Z, !0), o.topLevel && t.setVariable("popupFooterStyle", Z), o.topLevel && t.addExport("popupFooterStyle", Z), a += "\n"), a += '\n\n<div class="popup-container', n.contextOrFrameLookup(t, o, "popupNeedsLoading") && (a += " popup-loading"), a += " ", a += n.suppressValue(n.contextOrFrameLookup(t, o, "popupClass"), e.opts.autoescape), a += '">\n    <form class="', a += n.suppressValue(n.contextOrFrameLookup(t, o, "popupStyle"), e.opts.autoescape), a += ' js-popup" method="post"', n.contextOrFrameLookup(t, o, "allowAutocomplete") || (a += ' autocomplete="off"'), a += " ", n.contextOrFrameLookup(t, o, "popupAction") && (a += 'action="', a += n.suppressValue(n.contextOrFrameLookup(t, o, "popupAction"), e.opts.autoescape), a += '"'), a += ">\n\n        ", n.contextOrFrameLookup(t, o, "allowAutocomplete") || (a += "\n            ", a += '\n            <input type="text" style="display:none" />\n            <input type="password" style="display:none" />\n        '), a += '\n\n        <header class="', a += n.suppressValue(n.contextOrFrameLookup(t, o, "popupHeaderStyle"), e.opts.autoescape), a += '">\n\n            ', t.getBlock("popup_header")(e, t, o, n, (function(s, u) {
                            s ? r(s) : (a += u, a += '\n\n            <div class="', a += n.suppressValue(n.contextOrFrameLookup(t, o, "popupActionsStyle"), e.opts.autoescape), a += '">\n                ', n.contextOrFrameLookup(t, o, "popupClosable") && (a += '\n                    <a class="', a += n.suppressValue(n.contextOrFrameLookup(t, o, "popupCloseStyle"), e.opts.autoescape), a += '" data-action="close" data-selenium="close-popup">\n                        <i class="fa fa-times"></i>\n                    </a>\n                '), a += '\n            </div>\n\n        </header>\n\n        <div class="', a += n.suppressValue(n.contextOrFrameLookup(t, o, "popupContentStyle"), e.opts.autoescape), a += " ", a += n.suppressValue(n.contextOrFrameLookup(t, o, "popupContentClass"), e.opts.autoescape), a += '">\n            ', t.getBlock("popup_content")(e, t, o, n, (function(s, u) {
                                s ? r(s) : (a += u, a += "\n        </div>\n\n        ", e.getFilter("default").call(t, n.contextOrFrameLookup(t, o, "withFooter"), !0) && (a += '\n            <footer class="', a += n.suppressValue(n.contextOrFrameLookup(t, o, "popupFooterStyle"), e.opts.autoescape), a += '">\n                ', t.getBlock("popup_footer")(e, t, o, n, (function(e, t) {
                                    e ? r(e) : (a += t, a += "\n            </footer>\n        ")
                                }))), r(null, a += "\n\n    </form>\n\n</div>\n"))
                            })))
                        }))
                    } catch (e) {
                        r(n.handleError(e, null, null))
                    }
                }
            }
        },
        MQFR: (e, t, o) => {
            o("jX4j"), (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["skfb_front/popups/message.jinja"] = {
                b_popup_content: function(e, t, o, n, r) {
                    var a = "";
                    try {
                        o = o.push(!0), a += "\n\n    ", n.contextOrFrameLookup(t, o, "safe") ? (a += "\n        ", a += n.suppressValue(e.getFilter("safe").call(t, n.contextOrFrameLookup(t, o, "text")), e.opts.autoescape), a += "\n    ") : (a += "\n        ", a += n.suppressValue(n.contextOrFrameLookup(t, o, "text"), e.opts.autoescape), a += "\n    "), r(null, a += "\n\n")
                    } catch (e) {
                        r(n.handleError(e, null, null))
                    }
                },
                b_popup_footer: function(e, t, o, n, r) {
                    var a = "";
                    try {
                        o = o.push(!0), a += '\n    <div class="actions">\n\n        ', a += "\n        ", a += "\n\n        ", n.memberLookup(n.contextOrFrameLookup(t, o, "buttons"), "cancel") && (a += '\n            <button class="button btn-medium btn-tertiary cancel', n.memberLookup(n.contextOrFrameLookup(t, o, "buttons"), "cancelClass") && (a += " ", a += n.suppressValue(n.memberLookup(n.contextOrFrameLookup(t, o, "buttons"), "cancelClass"), e.opts.autoescape)), a += '" type="reset">', a += n.suppressValue(e.getFilter("default").call(t, n.memberLookup(n.contextOrFrameLookup(t, o, "buttons"), "cancelLabel"), "Cancel"), e.opts.autoescape), a += "</button>\n        "), a += "\n\n        ", n.memberLookup(n.contextOrFrameLookup(t, o, "buttons"), "close") && (a += '\n            <button class="button btn-medium btn-tertiary', n.memberLookup(n.contextOrFrameLookup(t, o, "buttons"), "cancelClass") && (a += " ", a += n.suppressValue(n.memberLookup(n.contextOrFrameLookup(t, o, "buttons"), "closeClass"), e.opts.autoescape)), a += '" type="reset" data-action="close">', a += n.suppressValue(e.getFilter("default").call(t, n.memberLookup(n.contextOrFrameLookup(t, o, "buttons"), "closeLabel"), "Close"), e.opts.autoescape), a += "</button>\n        "), a += "\n\n        ", n.memberLookup(n.contextOrFrameLookup(t, o, "buttons"), "continue") && (a += '\n            <button class="button btn-medium btn-primary submit', n.memberLookup(n.contextOrFrameLookup(t, o, "buttons"), "continueClass") && (a += " ", a += n.suppressValue(n.memberLookup(n.contextOrFrameLookup(t, o, "buttons"), "continueClass"), e.opts.autoescape)), a += '" type="submit">', a += n.suppressValue(e.getFilter("default").call(t, n.memberLookup(n.contextOrFrameLookup(t, o, "buttons"), "continueLabel"), "Continue"), e.opts.autoescape), a += "</button>\n        "), a += "\n\n        ", n.memberLookup(n.contextOrFrameLookup(t, o, "buttons"), "ok") && (a += '\n            <button class="button btn-medium btn-primary submit', n.memberLookup(n.contextOrFrameLookup(t, o, "buttons"), "okClass") && (a += " ", a += n.suppressValue(n.memberLookup(n.contextOrFrameLookup(t, o, "buttons"), "okClass"), e.opts.autoescape)), a += '" type="submit">', a += n.suppressValue(e.getFilter("default").call(t, n.memberLookup(n.contextOrFrameLookup(t, o, "buttons"), "okLabel"), "OK"), e.opts.autoescape), a += "</button>\n        "), a += "\n\n        ", n.memberLookup(n.contextOrFrameLookup(t, o, "buttons"), "delete") && (a += '\n            <button class="button btn-medium btn-danger submit', n.memberLookup(n.contextOrFrameLookup(t, o, "buttons"), "deleteClass") && (a += " ", a += n.suppressValue(n.memberLookup(n.contextOrFrameLookup(t, o, "buttons"), "deleteClass"), e.opts.autoescape)), a += '" type="submit">', a += n.suppressValue(e.getFilter("default").call(t, n.memberLookup(n.contextOrFrameLookup(t, o, "buttons"), "deleteLabel"), "Delete"), e.opts.autoescape), a += "</button>\n        "), r(null, a += "\n\n    </div>\n")
                    } catch (e) {
                        r(n.handleError(e, null, null))
                    }
                },
                root: function(e, t, o, n, r) {
                    var a = "";
                    try {
                        var s = null;
                        e.getTemplate("skfb_front/layouts/popup.jinja", !0, "skfb_front/popups/message.jinja", !1, (function(u, i) {
                            if (u) r(u);
                            else {
                                for (var l in (s = i).blocks) t.addBlock(l, s.blocks[l]);
                                var c, p;
                                a += "\n\n", c = n.contextOrFrameLookup(t, o, "title"), o.set("popupTitle", c, !0), o.topLevel && t.setVariable("popupTitle", c), o.topLevel && t.addExport("popupTitle", c), a += "\n\n", n.contextOrFrameLookup(t, o, "popupClass") || (a += "\n    ", p = "popup-message", o.set("popupClass", p, !0), o.topLevel && t.setVariable("popupClass", p), o.topLevel && t.addExport("popupClass", p), a += "\n"), a += "\n\n", (s ? function(e, t, o, n, r) {
                                    r("")
                                } : t.getBlock("popup_content"))(e, t, o, n, (function(u, i) {
                                    u ? r(u) : (a += i, a += "\n\n", (s ? function(e, t, o, n, r) {
                                        r("")
                                    } : t.getBlock("popup_footer"))(e, t, o, n, (function(u, i) {
                                        u ? r(u) : (a += i, a += "\n", s ? s.rootRenderFunc(e, t, o, n, r) : r(null, a))
                                    })))
                                }))
                            }
                        }))
                    } catch (e) {
                        r(n.handleError(e, null, null))
                    }
                }
            }
        }
    }
]);