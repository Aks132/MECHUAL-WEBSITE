(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [8430], {
        Kjxj: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var i = n("L0SH"),
                o = n("Hjnd"),
                a = n.n(o),
                r = n("k46e"),
                s = n("eKF4");
            const l = {
                name: "DragAndDrop",
                dependencies: ["WithOptionTypes"],
                _dragAndDropEnabled: !1,
                initializeDragAndDrop: function(e) {
                    var t = "boolean" == typeof this.options.dragAndDrop ? {
                        enabled: this.options.dragAndDrop
                    } : this.options.dragAndDrop || {};
                    this.options.dragAndDrop = (0, r.Z)({}, t, e), this._dragAndDropEnabled = void 0 === this.options.dragAndDrop.enabled || this.options.dragAndDrop.enabled, this.onDragEnter = this.onDragEnter.bind(this), this.onDragOver = this.onDragOver.bind(this), this.onDragEnd = this.onDragEnd.bind(this), this.onDrop = this.onDrop.bind(this), this.onDragLeave = this.onDragLeave.bind(this), this._dragAndDropInitialized = !0, this.delegateDragAndDrop()
                },
                getDragAndDropEnabled: function() {
                    return this._dragAndDropEnabled
                },
                setDragAndDropElements: function() {
                    this.setDragAndDropTargetElement(), this.setDragAndDropDropboxElement()
                },
                setDragAndDropTargetElement: function() {
                    this.options.dragAndDrop.target ? "object" === (0, i.Z)(this.options.dragAndDrop.target) || this.options.dragAndDrop.external ? this._$dragAndDropTarget = a()(this.options.dragAndDrop.target) : this.options.dragAndDrop.external || (this._$dragAndDropTarget = this.$(this.options.dragAndDrop.target)) : this._$dragAndDropTarget = this.$el
                },
                getDragAndDropTarget: function() {
                    return this._$dragAndDropTarget
                },
                getDragAndDropDropbox: function() {
                    return this._$dropbox
                },
                setDragAndDropDropboxElement: function() {
                    if (this.options.dragAndDrop.dropbox) {
                        var e = this.options.dragAndDrop.dropbox,
                            t = (0, i.Z)(e);
                        this._$dropbox = "string" === t ? this.$(e) : "function" === t ? a()(e.call(this)) : a()(e)
                    } else this._$dropbox = this._$dragAndDropTarget
                },
                delegateDragAndDrop: function() {
                    this._dragAndDropInitialized && (this.setDragAndDropElements(), this._$dragAndDropTarget && s.Z.me().isAuthenticated() && this.getDragAndDropEnabled() && (this._$dragAndDropTarget.on("dragenter", this.onDragEnter), this._$dragAndDropTarget.on("dragover", this.onDragOver), this._$dragAndDropTarget.on("drop", this.onDrop), this._$dragAndDropTarget.on("dragend", this.onDragEnd), this._$dragAndDropTarget.on("dragleave", this.onDragLeave)))
                },
                undelegateDragAndDrop: function() {
                    this._$dragAndDropTarget && (this._$dragAndDropTarget.off("dragenter", this.onDragEnter), this._$dragAndDropTarget.off("dragover", this.onDragOver), this._$dragAndDropTarget.off("drop", this.onDrop), this._$dragAndDropTarget.off("dragend", this.onDragEnd), this._$dragAndDropTarget.off("dragleave", this.onDragLeave))
                },
                isNotDraggingFile: function(e) {
                    var t = (e.originalEvent ? e.originalEvent : e).dataTransfer;
                    return t && t.types && t.types.concat && -1 === t.types.indexOf("Files")
                },
                isDropPending: function() {
                    return !1
                },
                onDragEnter: function(e) {
                    if (!this.isNotDraggingFile(e) && !this.isDropPending()) {
                        e.preventDefault();
                        var t = this.getDragAndDropDropbox();
                        t.addClass("file-upload-drag"), e.target === t[0] && t.addClass("accepting")
                    }
                },
                onDragEnd: function(e) {
                    var t = this.getDragAndDropDropbox(),
                        n = this.getDragAndDropTarget();
                    e.target === t[0] && t.removeClass("accepting"), e.target === n[0] && t.removeClass("file-upload-drag"), e.preventDefault()
                },
                onDragOver: function(e) {
                    e.preventDefault()
                },
                onDragLeave: function(e) {
                    e.preventDefault(), this.onDragEnd(e)
                },
                onDrop: function(e) {
                    e.preventDefault();
                    var t = (e = e.originalEvent ? e.originalEvent : e).dataTransfer.files,
                        n = this.getDragAndDropDropbox();
                    n.removeClass("file-upload-drag accepting"), t && t.length && e.target === n[0] && this.onFilesDrop(t)
                },
                onFilesDrop: function(e) {
                    console.info(e.length + " files were dropped on the following element : ", this._$dropbox, " nothing has been done with them.")
                }
            }
        },
        "7txH": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var i, o = n("MQQR"),
                a = [{
                    type: "VERTEX_SHADER",
                    text: ["attribute vec3 aPosition;", "void main() {", "gl_Position = vec4(aPosition, 1.0);", "}"].join("\n")
                }, {
                    type: "FRAGMENT_SHADER",
                    text: ["#version 100", "#ifdef GL_FRAGMENT_PRECISION_HIGH", "  precision highp float;", "#else", " precision mediump float;", "#endif", "uniform sampler2D uT0;", "uniform sampler2D uT1;", "uniform sampler2D uT2;", "uniform sampler2D uT3;", "uniform ivec4 uR;", "varying vec2 vT;", "varying vec3 vC;", "varying vec3 vColor;", "varying vec4 vColor2;", "void f(in vec3 a, out vec3 b) {", "b = 2.0 * a;", "}", "#define LIN_SRGB(x) x < 0.0031308 ? x * 12.92 : 1.055 * pow(x, 1.0/2.4) - 0.055", "#define SRGB_LIN(x) x < 0.04045 ? x * (1.0 / 12.92) : pow((x + 0.055) * (1.0 / 1.055), 2.4)", "float linearTosRGB(const in float color) { return LIN_SRGB(color); }", "vec3 linearTosRGB(const in vec3 color) { return vec3(LIN_SRGB(color.r), LIN_SRGB(color.g), LIN_SRGB(color.b)); }", "vec4 linearTosRGB(const in vec4 color) { return vec4(LIN_SRGB(color.r), LIN_SRGB(color.g), LIN_SRGB(color.b), color.a); }", "void main(void) {", "vec4 col;", "col.r = linearTosRGB(vColor2.r);", "col.rgb = linearTosRGB(vColor);", "f(vC, col.xyz);", "if ( uR.x == 3 ) {", "  col.rgb = texture2D( uT0, vT ).aaa;", "  col.a = uR.y == 0 ? texture2D( uT1, vT ).r : texture2D( uT1, vT ).a;", "} else if ( uR.x == 2 ) {", "  col.rgb = texture2D( uT0, vT ).rgb;", "  col.a = uR.y == 0 ? texture2D( uT1, vT ).r : texture2D( uT1, vT ).a;", "} else {", "  col.r = uR.x == 0 ? texture2D( uT0, vT ).r : texture2D( uT0, vT ).a;", "  col.g = uR.y == 0 ? texture2D( uT1, vT ).r : texture2D( uT1, vT ).a;", "  col.b = uR.z == 0 ? texture2D( uT2, vT ).r : texture2D( uT2, vT ).a;", "  col.a = uR.w == 0 ? texture2D( uT3, vT ).r : texture2D( uT3, vT ).a;", "}", "gl_FragColor = gl_FrontFacing ? vec4(col.rgb, 1.0) : col;", "}"].join("\n")
                }];

            function r(e) {
                var t = e && e.getExtension("WEBGL_lose_context");
                return t && t.loseContext(), !0
            }

            function s() {
                if (void 0 !== window.sketchfabWebGLSupport) return window.sketchfabWebGLSupport;
                if (i = !1, window.sketchfabWebGLSupport = i, !window.Set || !window.Map || !window.Uint8ClampedArray) return !1;
                var e = null;
                try {
                    var t = ["webgl", "experimental-webgl"],
                        n = {
                            antialias: !1
                        },
                        s = document.createElement("canvas");
                    if (!s || !s.getContext) return !1;
                    for (var l = 0; l < t.length && !(e = s.getContext(t[l], n)); l++);
                    if (!(e && e.getParameter && e.getExtension && e.getShaderPrecisionFormat)) return r(e) && !1;
                    var c = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS);
                    if (!c || c < 64) return r(e) && !1;
                    var d = e.getParameter(e.MAX_VARYING_VECTORS);
                    if (!d || d < 8) return r(e) && !1;
                    var u = e.getExtension("WEBGL_debug_renderer_info");
                    if (u && "Google SwiftShader" === e.getParameter(u.UNMASKED_RENDERER_WEBGL) && !(0, o.Z)().allowSwiftShader) return r(e) && !1;
                    i = a.every((function(t) {
                        return function(e, t, n) {
                            var i = t;
                            "string" == typeof i && (i = e[t]);
                            var o = e.createShader(i);
                            return e.shaderSource(o, n), e.compileShader(o), !(!e.getShaderParameter(o, e.COMPILE_STATUS) && !e.isContextLost() && (console.warn("Could't compile shader " + n), console.warn(e.getShaderInfoLog(o)), console.warn("You may want to consider a browser that fully supports WebGL."), 1))
                        }(e, t.type, t.text)
                    })), r(e)
                } catch (t) {
                    return r(e) && !1
                }
                return window.sketchfabWebGLSupport = i, i
            }
        },
        WGQk: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var i = !1;
            const o = function(e) {
                return void 0 !== e && (i = e), i
            }
        },
        ZGp8: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var i = n("KDlt"),
                o = n("g6dK");
            n("qpAZ");
            const a = o.Z.extend({
                template: function() {
                    return i.Z.get("skfb_front/popups/missing-webgl", {
                        buttons: this.options.buttons
                    })
                }
            })
        },
        ejdl: (e, t, n) => {
            "use strict";
            n.d(t, {
                $u: () => s,
                fN: () => l
            });
            var i = n("JBVY"),
                o = n("MQQR"),
                a = n("mSEu");

            function r() {
                var e;
                try {
                    if (!(e = window.location !== window.parent.location ? document.referrer : document.location.href)) throw new Error("url is not defined")
                } catch (t) {
                    e = document.referrer
                }
                var t = document.createElement("a");
                return t.href = e, t
            }

            function s() {
                return r().hostname.replace(/^www\./, "")
            }

            function l(e) {
                var t = r().host,
                    n = !1;
                t === window.location.host ? n = !0 : a.Z.internalDomains.forEach((function(e) {
                    (t === e.domain || e.allowSubdomains && t && t.endsWith("." + e.domain)) && (n = !0)
                })), (0, o.Z)().internal && !n ? document.location.replace(i.ZP.craft("?", i.ZP.reset(window.location.search.substr(1), {
                    internal: null
                }))) : e()
            }
        },
        "8xE2": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var i = n("sQwH"),
                o = n("qD8I"),
                a = n("CUcO"),
                r = n("8N4v"),
                s = n("Zfzx"),
                l = n("FUT3"),
                c = n("hayj"),
                d = n("xKIK"),
                u = n("3Z9q"),
                p = n("X40V"),
                m = n("g/7r");

            function v(e) {
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
                    var n, i = (0, c.Z)(e);
                    if (t) {
                        var o = (0, c.Z)(this).constructor;
                        n = Reflect.construct(i, arguments, o)
                    } else n = i.apply(this, arguments);
                    return (0, l.Z)(this, n)
                }
            }
            var f = function(e) {
                (0, s.Z)(n, e);
                var t = v(n);

                function n() {
                    var e;
                    (0, o.Z)(this, n);
                    for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(a)), (0, d.Z)((0, r.Z)(e), "onClickIfSpacebar", (function(t) {
                        var n = t.keyCode || t.which;
                        0 !== n && 32 !== n || e.onClick(t)
                    })), (0, d.Z)((0, r.Z)(e), "onClick", (function(t) {
                        t.preventDefault(), e.props.disabled || e.props.onChange(!e.props.isChecked, t)
                    })), e
                }
                return (0, a.Z)(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.isChecked,
                            n = e.isIndeterminate,
                            o = e.name,
                            a = e.isTouched,
                            r = e.error,
                            s = e.disabled,
                            l = void 0 !== s && s,
                            c = e.color,
                            d = void 0 === c ? p.O9.skfbBlue : c,
                            v = e.label,
                            f = void 0 === v ? "" : v,
                            g = e.className,
                            h = void 0 === g ? "" : g,
                            Z = e.children,
                            b = e.title;
                        return u.createElement(u.Fragment, null, (0, i.Z)("div", {
                            onKeyDown: this.onClickIfSpacebar,
                            onClick: this.onClick,
                            className: "c-checkbox ".concat(h, " ").concat(l ? "--disabled" : "", " ").concat(n ? "--indeterminate" : "", " ").concat(t ? "--active" : ""),
                            title: b
                        }, void 0, (0, i.Z)("input", {
                            id: o,
                            className: "c-checkbox__input",
                            type: "checkbox",
                            name: o,
                            checked: t,
                            onChange: m.EI,
                            disabled: l
                        }), (0, i.Z)("div", {
                            "data-selenium": "checkbox-".concat(o),
                            className: "c-checkbox__actor",
                            style: {
                                backgroundColor: !l && t ? d : void 0
                            }
                        }), (0, i.Z)("label", {
                            tabIndex: 0,
                            className: (0, p.AK)("c-checkbox__label", {
                                "--disabled": l
                            }),
                            htmlFor: o
                        }, void 0, Z || f)), a && r ? (0, i.Z)("label", {
                            className: "form-error"
                        }, void 0, r) : null)
                    }
                }]), n
            }(u.Component)
        },
        "Dc+D": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var i = n("D4hk"),
                o = n("sQwH"),
                a = n("3MRe"),
                r = n("3Z9q"),
                s = n("8xE2"),
                l = n("X40V"),
                c = ["theme", "values", "color", "options", "onToggleOption", "maxSelectedCount"];
            const d = function(e) {
                var t = e.theme,
                    n = e.values,
                    d = e.color,
                    u = e.options,
                    p = e.onToggleOption,
                    m = e.maxSelectedCount,
                    v = void 0 === m ? 1 / 0 : m,
                    f = (0, a.Z)(e, c),
                    g = r.useCallback((function(e) {
                        e.currentTarget.style.color = d
                    }), [d]),
                    h = r.useCallback((function(e) {
                        e.currentTarget.style.color = ""
                    }), []);
                return (0, o.Z)("ul", {
                    className: "c-dropdown-select ".concat(t ? "--" + t + "-theme" : "")
                }, void 0, u.map((function(e) {
                    var t = n.includes(e.value),
                        a = e.disabled || void 0 !== v && n.length >= v && !t,
                        c = "function" == typeof e.title ? e.title() : null;
                    return r.createElement("li", (0, i.Z)({
                        key: e.value,
                        className: (0, l.AK)("c-dropdown-select__option", {
                            "--disabled": Boolean(e.disabled)
                        }),
                        onMouseEnter: g,
                        onMouseLeave: h
                    }, f), (0, o.Z)(s.Z, {
                        name: e.value,
                        label: e.title,
                        isChecked: t,
                        onChange: function() {
                            return p(e.value)
                        },
                        color: d,
                        disabled: a
                    }, void 0, c))
                })))
            }
        },
        nxOG: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var i = n("sQwH"),
                o = n("3Z9q");
            const a = function(e) {
                var t = e.values,
                    n = e.itemProps;
                return o.createElement(o.Fragment, null, t.map((function(e, t) {
                    return (0, i.Z)(o.Fragment, {}, t, t > 0 && ", ", "function" == typeof e ? e(n) : e)
                })))
            }
        },
        h4jM: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var i = n("sQwH"),
                o = n("qD8I"),
                a = n("CUcO"),
                r = n("8N4v"),
                s = n("Zfzx"),
                l = n("FUT3"),
                c = n("hayj"),
                d = n("xKIK"),
                u = n("3Z9q"),
                p = n("RYQm"),
                m = n("UnUI"),
                v = n("Dc+D"),
                f = n("nxOG");

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
                    var n, i = (0, c.Z)(e);
                    if (t) {
                        var o = (0, c.Z)(this).constructor;
                        n = Reflect.construct(i, arguments, o)
                    } else n = i.apply(this, arguments);
                    return (0, l.Z)(this, n)
                }
            }
            var h = function(e) {
                (0, s.Z)(n, e);
                var t = g(n);

                function n() {
                    var e;
                    (0, o.Z)(this, n);
                    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++) s[l] = arguments[l];
                    return e = t.call.apply(t, [this].concat(s)), (0, d.Z)((0, r.Z)(e), "getDefaultValues", (function() {
                        return e.props.options.filter((function(e) {
                            return e.default
                        })).map((function(e) {
                            return e.value
                        }))
                    })), (0, d.Z)((0, r.Z)(e), "getSelectedOptions", (function() {
                        var t = e.props.value;
                        return e.props.options.filter((function(e) {
                            return (0, p.Z)(t, e.value)
                        }))
                    })), (0, d.Z)((0, r.Z)(e), "getLabelValue", (function() {
                        var t = e.getSelectedOptions().map((function(e) {
                            return e.title
                        }));
                        return (0, i.Z)(f.Z, {
                            values: t,
                            itemProps: {
                                isLabel: !0
                            }
                        })
                    })), (0, d.Z)((0, r.Z)(e), "onToggleOption", (function(t) {
                        var n = e.props.value;
                        e.props.onChange((0, p.Z)(n, t) ? n.filter((function(e) {
                            return e !== t
                        })) : n.concat(t))
                    })), e
                }
                return (0, a.Z)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this.getDefaultValues();
                        !this.props.value.length && e.length && this.props.onChange(e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.title,
                            o = t.labelValue,
                            a = t.placeholder,
                            r = t.color,
                            s = t.className,
                            l = t.disabled,
                            c = t.theme,
                            d = t.menuAlign,
                            u = t.options,
                            p = t.value,
                            f = t.maxSelectedCount;
                        return (0, i.Z)(m.Z, {
                            labelTitle: n,
                            labelValue: o || this.getLabelValue(),
                            placeholder: a,
                            color: r,
                            className: s,
                            disabled: l,
                            theme: c,
                            menuAlign: d,
                            "data-selenium": this.props["data-selenium"]
                        }, void 0, (function() {
                            return (0, i.Z)(v.Z, {
                                maxSelectedCount: f,
                                options: u,
                                values: p,
                                color: r,
                                onToggleOption: e.onToggleOption
                            })
                        }))
                    }
                }]), n
            }(u.Component);
            (0, d.Z)(h, "defaultProps", {
                title: "",
                theme: "light",
                labelValue: "",
                maxSelectedCount: 1 / 0
            })
        },
        Q0AI: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var i = n("sQwH"),
                o = (n("3Z9q"), n("X40V"));

            function a(e) {
                var t = e.error,
                    n = e.isTouched,
                    a = e.label,
                    r = e.children,
                    s = e.className,
                    l = e.labelClassName,
                    c = e.htmlFor,
                    d = void 0 === c ? "" : c,
                    u = e.direction,
                    p = void 0 === u ? "vertical" : u,
                    m = e["data-selenium"];
                return (0, i.Z)("div", {
                    className: (0, o.AK)("c-form-field", s, {
                        "--vertical": "vertical" === p
                    }),
                    "data-selenium": m
                }, void 0, a ? (0, i.Z)("label", {
                    htmlFor: d,
                    className: (0, o.AK)("form-label", l)
                }, void 0, a) : null, r, t && n ? (0, i.Z)("p", {
                    className: "form-error"
                }, void 0, t) : null)
            }
        },
        rzLk: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var i = n("D4hk"),
                o = n("sQwH"),
                a = n("3MRe"),
                r = n("3Z9q"),
                s = n("X40V"),
                l = ["message", "className", "direction"];
            const c = function(e) {
                var t = e.message,
                    n = e.className,
                    c = e.direction,
                    d = void 0 === c ? "up" : c,
                    u = (0, a.Z)(e, l);
                return r.createElement("a", (0, i.Z)({
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: (0, s.AK)("help", "fa", "fa-question-circle", n)
                }, u), (0, o.Z)("span", {
                    className: "tooltip tooltip-".concat(d)
                }, void 0, t))
            }
        },
        yd36: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var i, o, a = n("sQwH"),
                r = (n("3Z9q"), n("X40V"));

            function s(e) {
                var t = e.className,
                    n = e.type,
                    s = void 0 === n ? "viewer" : n;
                return (0, a.Z)("div", {
                    "data-selenium": "processing-placeholder",
                    className: (0, r.AK)("c-processing-viewer-placeholder", t, "--".concat(s))
                }, void 0, i || (i = (0, a.Z)("svg", {
                    className: "c-processing-viewer-placeholder__logo",
                    viewBox: "0 0 36 42"
                }, void 0, (0, a.Z)("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, (0, a.Z)("path", {
                    d: "M20 42V24.5L36 15v17.5L20 42zM0 15l15.5 9.5V42L0 32.5V15zm35-5L18 20.5 1 10 18 0l17 10z",
                    fill: "#DBE3F4",
                    fillRule: "nonzero"
                }), (0, a.Z)("path", {
                    d: "M-12-9h60v60h-60z"
                })))), o || (o = (0, a.Z)("div", {
                    className: "c-processing-viewer-placeholder__loader"
                })))
            }
        },
        UQ3Q: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => U,
                I: () => M
            });
            var i, o, a, r, s, l, c, d = n("sQwH"),
                u = n("xKIK"),
                p = n("7isf"),
                m = n("Bpah"),
                v = n("3Z9q"),
                f = n("xIYY"),
                g = n("CfKk"),
                h = n("LLYa"),
                Z = n("7txH"),
                b = n("iu9k"),
                w = n("MjD7"),
                y = n("gyKT"),
                _ = n("k3DV"),
                k = n("Wch8"),
                N = n("eLCO"),
                C = n.n(N),
                D = n("RyS8"),
                x = n("e1Pq"),
                P = n("pLUK"),
                E = n("vkRz"),
                S = n("ZGp8"),
                O = n("fBod"),
                T = n("zIQK"),
                A = n("h9M4"),
                L = n("V29b"),
                F = n("pgZm"),
                R = n("h0W9");

            function j(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(n), !0).forEach((function(t) {
                        (0, u.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var M = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                    n = (0, x.Z)(),
                    i = n.Popups,
                    o = (0, L.Z)(),
                    a = o.list.filter((function(e) {
                        return (0, F.oF)(e.role, "contributor")
                    })).length > 0 && !e.org,
                    r = a && "store" !== e.downloadType,
                    s = (0, P.Z)(v.useCallback((function() {
                        return i.loadModelTransferPopup().then((function(n) {
                            return new n({
                                model: e,
                                onTransferModelSuccess: t
                            }).open()
                        }))
                    }), [e, t, i]));
                return {
                    showTransferOption: a,
                    canTransfer: r,
                    openModelTransferPopup: s
                }
            };
            const U = function(e) {
                var t = e.model,
                    n = e.direction,
                    u = e.className,
                    N = e.withProperties,
                    L = void 0 === N || N,
                    F = e.withPublish,
                    j = void 0 === F || F,
                    U = e.with3DSettings,
                    K = void 0 === U || U,
                    z = e.onTransferModelSuccess,
                    q = void 0 === z ? function() {} : z,
                    B = e.onDeleteModelSuccess,
                    V = void 0 === B ? function() {} : B,
                    Q = e.onDeleteModelError,
                    H = void 0 === Q ? function(e) {
                        throw e
                    } : Q,
                    G = (0, f.v9)(g.wl.authUser.user),
                    Y = (0, f.I0)(),
                    $ = (0, x.Z)(),
                    W = $.History,
                    X = $.Popups,
                    J = v.useCallback((function() {
                        Y(A.Nw.update({
                            models: [t]
                        })), Y(g.Nw.models.tryPublish(t.uid))
                    }), [t.uid, Y]),
                    ee = v.useCallback((function() {
                        var e = (0, h.nR)(t);
                        W.pushRoute.apply(W, (0, p.Z)(e))
                    }), [W, t]),
                    te = v.useCallback((function(e) {
                        (0, Z.Z)() || (e.preventDefault(), (new S.Z).open())
                    }), []),
                    ne = v.useCallback((function() {
                        return X.openAddToCollectionPopup(new m.Z(t))
                    }), [t, X]),
                    ie = (0, E.Z)(t),
                    oe = (0, _.Z)(t),
                    ae = v.useCallback((function() {
                        (0, O.loadReportPopup)().then((function(e) {
                            new e({
                                model: new m.Z(t)
                            })
                        }))
                    }), [t]),
                    re = (0, P.Z)(v.useCallback((function() {
                        return X.openDownloadPopup(t)
                    }), [t, X])),
                    se = M(t, q),
                    le = se.showTransferOption,
                    ce = se.canTransfer,
                    de = se.openModelTransferPopup,
                    ue = function(e) {
                        var t = (0, x.Z)(),
                            n = t.Api,
                            i = t.Popups;
                        return v.useCallback((0, k.Z)(C().mark((function t() {
                            var o;
                            return C().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, n.getModelManagement(e.uid);
                                    case 2:
                                        o = t.sent, i.loadDownloadOwnModelPopup().then((function(t) {
                                            return new t({
                                                model: new m.Z(e),
                                                archivesDetails: o.archivesDetails
                                            }).open()
                                        })).catch((0, D.KQ)(D.ud));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), [n, i, e])
                    }(t),
                    pe = (0, h.Ov)("pro", t) || G.isStaff;
                return (0, d.Z)(w.ZP, {
                    className: u,
                    direction: n
                }, void 0, (0, h.ON)(t) ? v.createElement(v.Fragment, null, 2 === t.processingStatus && !t.publishedAt && j && (0, h.qS)(t, I(I({}, t), {}, {
                    isPublished: !0
                }), G) && v.createElement(v.Fragment, null, (0, d.Z)(w.Lz, {
                    name: "Publish",
                    onClick: J
                }), i || (i = (0, d.Z)(w.Z0, {}))), 2 === t.processingStatus && v.createElement(v.Fragment, null, L && (0, d.Z)(w.Lz, {
                    name: "Properties",
                    onClick: ee,
                    iconClassName: "fa-gear"
                }), K && (0, d.Z)(w.Lz, {
                    name: "3D settings",
                    href: t.editorUrl,
                    onClick: te,
                    iconClassName: "fa-sliders"
                }), t.publishedAt && (0, d.Z)(w.Lz, {
                    name: "Add to collection",
                    onClick: ne,
                    iconClassName: "fa-table"
                }), t.user.uid !== G.uid && (0, h.Rn)(G, t) && (0, d.Z)(w.Lz, {
                    name: "Download",
                    onClick: re,
                    iconClassName: "fa-download"
                }), o || (o = (0, d.Z)(w.Z0, {}))), t.user.uid === G.uid && t.isPublished ? v.createElement(v.Fragment, null, (0, d.Z)(w.Lz, {
                    name: "Download",
                    onClick: ue,
                    disabled: !pe,
                    className: "download-own-model",
                    iconClassName: "fa-download"
                }, void 0, pe ? null : (0, d.Z)("a", {
                    href: (0, b.HQ)("pages:plans"),
                    className: "help fa fa-question-circle"
                }, void 0, a || (a = (0, d.Z)(T.Z, {
                    text: "Pro members and above can download all their own models, even when they are not allowed to be downloaded publicly"
                })))), r || (r = (0, d.Z)(w.Z0, {}))) : null, t.processingStatus > 1 && v.createElement(v.Fragment, null, (0, d.Z)(w.Lz, {
                    name: "Reupload",
                    onClick: ie,
                    "data-selenium": "open-reupload-popup",
                    iconClassName: "fa-upload"
                }), (0, d.Z)(y.Z, {
                    model: t
                }, void 0, (function(e) {
                    var t = e.canDuplicate,
                        n = e.duplicate;
                    return (0, d.Z)(w.Lz, {
                        name: t ? "Duplicate" : s || (s = (0, d.Z)("span", {}, void 0, "Duplicate", " ", (0, d.Z)("span", {
                            className: "flag --pro"
                        }, void 0, "pro"))),
                        onClick: n,
                        disabled: !t,
                        "data-selenium": "open-reupload-popup",
                        iconClassName: "fa-copy"
                    })
                })), le ? (0, d.Z)(w.Lz, {
                    name: "Transfer",
                    onClick: de,
                    iconClassName: "fa-exchange",
                    "data-selenium": "open-transfer-popup",
                    disabled: !ce
                }, void 0, ce ? null : l || (l = (0, d.Z)("a", {
                    className: "help fa fa-question-circle",
                    href: R.transferHelpUrl,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, void 0, (0, d.Z)(T.Z, {
                    text: (0, d.Z)("span", {}, void 0, "Transfer is not possible ", (0, d.Z)("u", {}, void 0, "Why ?"))
                })))) : null, (0, d.Z)(w.Lz, {
                    name: "Delete",
                    className: "--red",
                    onClick: function() {
                        return oe().then(V, H)
                    },
                    "data-selenium": "delete-model",
                    iconClassName: "fa-trash"
                }), c || (c = (0, d.Z)(w.Z0, {})))) : null, (0, d.Z)(w.Lz, {
                    name: "Report an issue",
                    onClick: ae,
                    iconClassName: "fa-flag"
                }))
            }
        },
        MjD7: (e, t, n) => {
            "use strict";
            n.d(t, {
                Lz: () => c,
                Z0: () => d,
                ZP: () => u
            });
            var i, o = n("sQwH"),
                a = n("3MRe"),
                r = n("3Z9q"),
                s = n("X40V"),
                l = ["className", "name", "onClick", "href", "children", "disabled", "iconClassName"],
                c = function(e) {
                    var t = e.className,
                        n = e.name,
                        i = e.onClick,
                        c = e.href,
                        d = e.children,
                        u = e.disabled,
                        p = void 0 !== u && u,
                        m = e.iconClassName,
                        v = void 0 === m ? "" : m,
                        f = (0, a.Z)(e, l);
                    return r.createElement("li", f, (0, o.Z)("a", {
                        className: (0, s.AK)("quicksettings-item", t, {
                            disabled: p
                        }),
                        href: c,
                        onClick: p ? void 0 : i
                    }, void 0, v ? (0, o.Z)("i", {
                        className: (0, s.AK)("quicksettings-icon fa", v)
                    }) : null, n), d)
                },
                d = function() {
                    return i || (i = (0, o.Z)("li", {
                        className: "separator"
                    }))
                };
            const u = function(e) {
                var t = e.children,
                    n = e.direction,
                    i = e.className;
                return (0, o.Z)("ul", {
                    className: (0, s.AK)("hover-menu", "quicksettings", "corner", n ? "--".concat(n) : "", i)
                }, void 0, t)
            }
        },
        "+TPG": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var i = n("sQwH"),
                o = n("3Z9q"),
                a = n("X40V"),
                r = n("g/7r"),
                s = n("RA37");
            const l = function(e) {
                var t = e.onChange,
                    n = e.value,
                    l = e.label,
                    c = void 0 === l ? "" : l,
                    d = e.className,
                    u = void 0 === d ? "" : d,
                    p = e.color,
                    m = void 0 === p ? "skfbBlue" : p,
                    v = e.disabled,
                    f = void 0 !== v && v,
                    g = e.isChecked,
                    h = e.name,
                    Z = e.isTouched,
                    b = e.error,
                    w = e["data-selenium"],
                    y = function(e) {
                        e.preventDefault(), f || t(n)
                    },
                    _ = "".concat(h, "-").concat(n),
                    k = o.useContext(s.w).colors;
                return o.createElement(o.Fragment, null, (0, i.Z)("div", {
                    "data-selenium": w,
                    onKeyDown: function(e) {
                        var t = e.keyCode || e.which;
                        0 !== t && 32 !== t || y(e)
                    },
                    onClick: y,
                    className: (0, a.AK)("c-radio", u, {
                        "--disabled": f,
                        "--active": g
                    })
                }, void 0, (0, i.Z)("input", {
                    id: _,
                    className: "c-radio__input",
                    type: "radio",
                    name: h,
                    checked: g,
                    onChange: r.EI
                }), (0, i.Z)("div", {
                    className: "c-radio__actor",
                    style: {
                        backgroundColor: !f && g ? k[m] : void 0
                    }
                }), (0, i.Z)("label", {
                    tabIndex: 0,
                    className: "c-radio__label",
                    htmlFor: _
                }, void 0, c)), Z && b ? (0, i.Z)("label", {
                    className: "form-error"
                }, void 0, b) : null)
            }
        },
        JT1T: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            var i = n("sQwH"),
                o = (n("3Z9q"), n("X40V")),
                a = n("+TPG");
            const r = function(e) {
                var t = e.name,
                    n = e.value,
                    r = e.className,
                    s = e.options,
                    l = e.onChange,
                    c = e.disabled;
                return (0, i.Z)("div", {
                    className: (0, o.AK)("c-radio-list", r)
                }, void 0, s.map((function(e) {
                    return (0, i.Z)("div", {
                        className: (0, o.AK)("c-radio-list__item ", {
                            "--active": n === e.value
                        }),
                        onClick: function() {
                            c || l(e.value)
                        }
                    }, "".concat(t, "-").concat(e.value), (0, i.Z)(a.Z, {
                        name: t,
                        label: e.title,
                        isChecked: n === e.value,
                        onChange: function() {},
                        value: e.value,
                        disabled: c || e.disabled
                    }), e.action, e.description && (0, i.Z)("div", {
                        className: "c-radio__description"
                    }, void 0, e.description))
                })))
            }
        },
        KGKI: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var i = n("D4hk"),
                o = n("sQwH"),
                a = n("3MRe"),
                r = n("3Z9q"),
                s = n("X40V"),
                l = ["onChange", "value", "name", "disabled", "className", "data-selenium", "children"];
            const c = function(e) {
                var t = e.onChange,
                    n = e.value,
                    c = e.name,
                    d = void 0 === c ? "" : c,
                    u = e.disabled,
                    p = void 0 !== u && u,
                    m = e.className,
                    v = e["data-selenium"],
                    f = e.children,
                    g = (0, a.Z)(e, l);
                return r.createElement("div", (0, i.Z)({
                    onClick: function(e) {
                        p || (e.preventDefault(), t(!n))
                    },
                    className: (0, s.AK)(m, "form-onoff-wrapper", {
                        "--checked": n
                    }),
                    "data-selenium": "switch-".concat(v)
                }, g), (0, o.Z)("input", {
                    className: "form-onoff",
                    type: "checkbox",
                    "data-ref": "input",
                    checked: n,
                    onChange: function(e) {
                        return t(e.target.checked)
                    }
                }), (0, o.Z)("label", {
                    className: (0, s.AK)({
                        "form-onoff-actor": !0,
                        disabled: p
                    }),
                    htmlFor: d
                }), (0, o.Z)("div", {
                    className: (0, s.AK)("form-onoff__label", {
                        "--disabled": p
                    })
                }, void 0, f))
            }
        },
        "1xsz": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var i, o = n("sQwH"),
                a = (n("3Z9q"), n("iu9k")),
                r = n("zIQK"),
                s = n("LoVS"),
                l = n("X40V");
            const c = function(e) {
                var t = e.tooltipText,
                    n = e.className,
                    c = e.referer,
                    d = e.tooltipDirection;
                return (0, o.Z)(r.Z, {
                    text: t,
                    direction: d
                }, void 0, (0, o.Z)("div", {}, void 0, (0, o.Z)("a", {
                    href: (0, a.HQ)("pages:plans", {}, {
                        ref: c
                    }),
                    className: (0, l.AK)(s.Z.view, n),
                    target: "_blank"
                }, void 0, i || (i = (0, o.Z)("i", {
                    className: "fa fa-lock"
                })), "upgrade now")))
            }
        },
        TlsM: (e, t, n) => {
            "use strict";
            n.d(t, {
                mX: () => h,
                gb: () => Z,
                km: () => b,
                ZP: () => w
            });
            var i, o, a, r = n("sQwH"),
                s = n("3Z9q"),
                l = n("xIYY"),
                c = n("mSEu"),
                d = n("CfKk"),
                u = n("iu9k"),
                p = n("TUor"),
                m = n("vAnt"),
                v = n("rzLk"),
                f = n("GKm7"),
                g = function(e) {
                    var t = e.viewOnlyLimit,
                        n = "".concat(c.Z.hosts.faq, "/articles/360031770411-Upload-Limits?utm_source=website&utm_campaign=view-only-warning");
                    return (0, r.Z)(v.Z, {
                        className: "c-view-only-limit__understand-limits",
                        direction: "up",
                        message: "unlimited" === t.type ? "Learn more about the credit system" : s.createElement(s.Fragment, null, "Your monthly limit will reset on", " ", (0, r.Z)("strong", {}, void 0, (0, p.p6)(t.renews_at, "MMM Do")), ".", i || (i = (0, r.Z)("br", {})), "Click to learn more about the credit system."),
                        href: n
                    })
                },
                h = function(e) {
                    var t = e.children,
                        n = (e.currentPlan, e.urlRef),
                        i = e.className,
                        o = {
                            ref: n
                        };
                    return (0, r.Z)("a", {
                        className: i,
                        href: (0, u.HQ)("pages:plans", {}, o)
                    }, void 0, t)
                },
                Z = function(e) {
                    var t = e.text;
                    return (0, r.Z)("span", {
                        className: "help c-view-only-limit__view-only-tooltip"
                    }, void 0, (0, r.Z)("span", {
                        className: "c-view-only-limit__dotted"
                    }, void 0, t), (0, r.Z)("span", {
                        className: "tooltip tooltip-up",
                        style: {
                            width: 220
                        }
                    }, void 0, "A model that is downloadable or in the Store doesn't count against this limit."))
                },
                b = function(e) {
                    var t = e.viewOnlyLimit;
                    return (0, r.Z)("p", {
                        className: "c-view-only-limit__left"
                    }, void 0, "unlimited" === t.type ? s.createElement(s.Fragment, null, "You can upload an unlimited number of models.") : s.createElement(s.Fragment, null, t.remaining, " ", (0, r.Z)(Z, {
                        text: "upload credit".concat(1 === t.remaining ? "" : "s")
                    }), " ", "left"), " ", (0, r.Z)(g, {
                        viewOnlyLimit: t
                    }))
                };
            const w = function(e) {
                var t = e.isPublished,
                    n = (0, l.v9)((function(e) {
                        return d.wl.authUser.user(e)
                    }));
                if (!n.viewOnlyLimit || "unlimited" === n.viewOnlyLimit.type) return null;
                var i, c = n.viewOnlyLimit;
                return (0, r.Z)(f.Z, {
                    center: !0,
                    type: c.remaining ? "warning" : "error"
                }, void 0, s.createElement(s.Fragment, null, (0, r.Z)("strong", {}, void 0, (0, r.Z)(b, {
                    viewOnlyLimit: c
                })), c.remaining ? s.createElement(s.Fragment, null, o || (o = (0, r.Z)("p", {}, void 0, "Models set to downloadable do not count towards your upload limit.")), (0, r.Z)("p", {}, void 0, (0, r.Z)(h, {
                    currentPlan: n.account,
                    urlRef: "manage_model"
                }, void 0, "Upgrade to increase your limit"))) : s.createElement(s.Fragment, null, (0, r.Z)("p", {}, void 0, t ? "To make this model not publicly downloadable" : "To publish this model", ", you must wait until", " ", (0, r.Z)("strong", {}, void 0, (i = c.renews_at, Math.abs(Date.now() - new Date(i).getTime()) < 864e5 ? "today at ".concat((0, p.p6)(c.renews_at, "h:mm A")) : (0, p.p6)(c.renews_at, "MMM Do"))), ", set it to downloadable or upgrade your account."), (0, r.Z)("p", {}, void 0, (0, r.Z)(h, {
                    currentPlan: n.account,
                    urlRef: "manage_model"
                }, void 0, a || (a = (0, r.Z)(m.Z, {
                    size: "small",
                    type: "important",
                    text: "upgrade your account"
                })))))))
            }
        },
        tgOb: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var i = n("sQwH"),
                o = (n("3Z9q"), n("KUFO")),
                a = function(e, t) {
                    if (t) return "inactive";
                    switch (e) {
                        case "org":
                            return "sketchfab";
                        case "public":
                            return "active";
                        case "private":
                            return "pending";
                        case "protected":
                            return "error";
                        default:
                            return "inactive"
                    }
                },
                r = function(e) {
                    switch (e) {
                        case "private":
                            return {
                                classname: "fa fa-eye-slash"
                            };
                        case "protected":
                            return {
                                classname: "fa fa-lock"
                            };
                        default:
                            return
                    }
                };

            function s(e) {
                var t = e.visibility,
                    n = e.disabled;
                return (0, i.Z)(o.Z, {
                    type: a(t, n),
                    leftIcon: r(t)
                }, void 0, "public" === t ? "public" : "org" === t ? "This project" : "private" === t ? "private" : "protected" === t ? "password" : "")
            }
        },
        "1Nxi": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            var i = n("D4hk"),
                o = n("sQwH"),
                a = n("3Z9q");
            const r = function(e) {
                return a.createElement("svg", (0, i.Z)({
                    viewBox: "0 0 14 14"
                }, e), (0, o.Z)("path", {
                    fill: e.color,
                    d: "M9.206 0H2.263C1.568 0 1 .573 1 1.273V9.55a.632.632 0 101.263 0V1.273h6.943a.636.636 0 100-1.273zm2.53 2.545H4.79c-.694 0-1.263.573-1.263 1.273v8.91c0 .7.569 1.272 1.263 1.272h6.948c.695 0 1.263-.573 1.263-1.273V3.818c0-.7-.568-1.273-1.263-1.273zm0 10.182H4.79V3.818h6.948v8.91z"
                }))
            }
        },
        gyKT: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => F
            });
            var i, o = n("sGMM"),
                a = n("Wch8"),
                r = n("qD8I"),
                s = n("CUcO"),
                l = n("8N4v"),
                c = n("Zfzx"),
                d = n("FUT3"),
                u = n("hayj"),
                p = n("xKIK"),
                m = n("sQwH"),
                v = n("eLCO"),
                f = n.n(v),
                g = n("ULsr"),
                h = n("3Z9q"),
                Z = n("jQKg"),
                b = n("fBod"),
                w = n("CfKk"),
                y = n("xovo"),
                _ = n("LLYa"),
                k = n("RyS8"),
                N = n("lrhy"),
                C = n("iu9k"),
                D = n("1nxQ"),
                x = n("vAnt"),
                P = n("l1Cg"),
                E = n("A2i4"),
                S = n("ZZB/"),
                O = n("Oyie");

            function T(e) {
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
                    var n, i = (0, u.Z)(e);
                    if (t) {
                        var o = (0, u.Z)(this).constructor;
                        n = Reflect.construct(i, arguments, o)
                    } else n = i.apply(this, arguments);
                    return (0, d.Z)(this, n)
                }
            }
            var A = (0, g.Z)(x.Z),
                L = function(e) {
                    var t = e.model;
                    return (0, m.Z)("div", {
                        className: "c-duplicate-model-container__loading-popup"
                    }, void 0, i || (i = (0, m.Z)(P.Z, {
                        type: "small"
                    })), (0, m.Z)(E.ZP, {
                        alt: "Thumbnail for ".concat(t.name, " 3D model"),
                        images: t.thumbnails,
                        width: 100,
                        height: 56.25
                    }), (0, m.Z)(S.Z, {
                        model: t
                    }))
                },
                F = function(e) {
                    (0, c.Z)(n, e);
                    var t = T(n);

                    function n(e) {
                        var i;
                        return (0, r.Z)(this, n), i = t.call(this, e), (0, p.Z)((0, l.Z)(i), "popup", void 0), (0, p.Z)((0, l.Z)(i), "canDuplicate", (function() {
                            return i.props.model.processingStatus === y.J.SUCCEEDED && (0, _.Ov)("pro", i.props.model)
                        })), (0, p.Z)((0, l.Z)(i), "duplicate", (function() {
                            return i.canDuplicate() ? Z.Z.duplicateModel(i.props.model.uid).then((function(e) {
                                var t = e.model.uid;
                                return (0, b.loadMessagePopup)().then((function(e) {
                                    return i.popup = new e({
                                        title: "Your model is being duplicated.",
                                        children: {
                                            viewClass: (0, g.Z)(L),
                                            options: {
                                                model: i.props.model
                                            }
                                        }
                                    }), i.popup.open(), i.popup
                                })), i.pollDuplicatedModelStatus(t).then((function() {
                                    return Z.Z.getModel(t).then(function() {
                                        var e = (0, a.Z)(f().mark((function e(n) {
                                            var o, a;
                                            return f().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, w.n2.store.dispatch(w.Nw.entities.update({
                                                            models: [n]
                                                        }));
                                                    case 2:
                                                        null === (o = (a = i.props).onDuplicate) || void 0 === o || o.call(a, n), i.popup.close(), i.openDuplicationSucceededPopup(t);
                                                    case 5:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }())
                                })).catch((function(e) {
                                    throw i.popup.close(), e
                                }))
                            })).catch((function(e) {
                                return console.error(e), i.openDuplicationFailedPopup(), O.resolve()
                            })) : O.resolve()
                        })), (0, p.Z)((0, l.Z)(i), "pollDuplicatedModelStatus", (function(e) {
                            return Z.Z.getModelStatus(e).then((function(t) {
                                return ["FAILED", "SUCCEEDED"].includes(t.processing) ? "FAILED" === t.processing ? O.reject(t.processing) : O.resolve(t.processing) : (0, N.gw)(2e3).then((function() {
                                    return i.pollDuplicatedModelStatus(e)
                                }))
                            }))
                        })), (0, p.Z)((0, l.Z)(i), "openDuplicationFailedPopup", (function() {
                            return (0, b.loadMessagePopup)().then((function(e) {
                                return new e({
                                    title: "Duplication failed",
                                    html: "\n                <p>The duplication of your model <strong>failed</strong>.</p>\n            ",
                                    renderButtons: function(e) {
                                        return [{
                                            viewClass: A,
                                            options: {
                                                text: "cancel",
                                                key: "cancel",
                                                type: "tertiary",
                                                onClick: function() {
                                                    return e.cancel()
                                                }
                                            }
                                        }, {
                                            viewClass: A,
                                            options: {
                                                text: "retry",
                                                key: "retry",
                                                type: "primary",
                                                onClick: function() {
                                                    e.continue(), i.duplicate()
                                                }
                                            }
                                        }]
                                    }
                                }).open().catch((0, k.KQ)(k.ud))
                            }))
                        })), (0, p.Z)((0, l.Z)(i), "openDuplicationSucceededPopup", (function(e) {
                            return (0, b.loadMessagePopup)().then((function(t) {
                                return new t({
                                    title: "Model Duplicated",
                                    shouldRejectOnCancel: !0,
                                    html: (0, D.sanitize)("\n                <p>\n                    <span>Your model </span>\n                    <strong>“".concat(i.props.model.name, "”</strong>\n                    <span> has been succesfully duplicated!</span>\n                </p>\n            ")),
                                    width: 560,
                                    renderButtons: function(e) {
                                        return [{
                                            viewClass: A,
                                            options: {
                                                type: "tertiary",
                                                text: "close",
                                                key: "cancel",
                                                onClick: function() {
                                                    return e.cancel()
                                                }
                                            }
                                        }, {
                                            viewClass: A,
                                            options: {
                                                type: "primary",
                                                text: "go to the duplicated model",
                                                key: "continue",
                                                onClick: function() {
                                                    return e.continue()
                                                }
                                            }
                                        }]
                                    }
                                }).open().then((function() {
                                    var t = {
                                            uid: e,
                                            org: i.props.model.org,
                                            slug: ""
                                        },
                                        n = t.org ? (0, _.IL)(t) : (0, _.U3)(t),
                                        a = (0, o.Z)(n, 2),
                                        r = a[0],
                                        s = a[1];
                                    window.location.assign((0, C.HQ)(r, s))
                                })).catch((0, k.KQ)(k.ud))
                            }))
                        })), i.duplicate = N.iB(i.duplicate.bind((0, l.Z)(i))), i
                    }
                    return (0, s.Z)(n, [{
                        key: "render",
                        value: function() {
                            return this.props.children({
                                canDuplicate: this.canDuplicate(),
                                duplicate: this.duplicate.bind(this)
                            })
                        }
                    }]), n
                }(h.Component)
        },
        k3DV: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var i = n("3Z9q"),
                o = n("xIYY"),
                a = n("Bpah"),
                r = n("fBod"),
                s = n("CfKk"),
                l = n("Oyie");

            function c(e) {
                var t = (0, o.v9)(s.wl.authUser.canAccessFeature("ff_read_only_mode"));
                return i.useCallback((function() {
                    return t ? ((0, r.openMaintenancePopup)("Sketchfab is undergoing maintenance. Deleting models is currently disabled."), l.reject(new Error)) : (0, r.loadDeletePopup)().then((function(t) {
                        return new t({
                            model: new a.Z(e)
                        }).promise
                    }))
                }), [e, t])
            }
        },
        vkRz: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var i = n("Wch8"),
                o = n("eLCO"),
                a = n.n(o),
                r = n("3Z9q"),
                s = n("Bpah"),
                l = n("RyS8"),
                c = n("xIYY"),
                d = n("CfKk"),
                u = n("LLYa"),
                p = n("e1Pq");

            function m(e) {
                var t = (0, c.v9)(d.wl.authUser.canAccessFeature("ff_read_only_mode")),
                    n = (0, p.Z)(),
                    o = n.Api,
                    m = n.Popups;
                return r.useCallback((0, i.Z)(a().mark((function n() {
                    var i;
                    return a().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if (!t) {
                                    n.next = 4;
                                    break
                                }
                                m.openMaintenancePopup("Sketchfab is undergoing maintenance. Reuploading models is currently disabled."), n.next = 13;
                                break;
                            case 4:
                                if (!(0, u.aI)(e)) {
                                    n.next = 8;
                                    break
                                }
                                n.t0 = e, n.next = 11;
                                break;
                            case 8:
                                return n.next = 10, o.getModel(e.uid);
                            case 10:
                                n.t0 = n.sent;
                            case 11:
                                i = n.t0, m.loadUploadPopup().then((function(t) {
                                    return new t({
                                        org: e.org,
                                        project: e.orgProject,
                                        model: new s.Z(i)
                                    }).open()
                                })).catch((0, l.KQ)(l.ud));
                            case 13:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                }))), [e, t, o, m])
            }
        },
        RI22: (e, t, n) => {
            "use strict";
            n.d(t, {
                U: () => b
            });
            var i, o, a, r = n("sQwH"),
                s = n("xKIK"),
                l = n("3Z9q"),
                c = n("Yxa5"),
                d = n("X40V"),
                u = n("KUFO"),
                p = n("vAnt"),
                m = n("Di7Z"),
                v = n("EA64"),
                f = n("1U5U"),
                g = {
                    Pending: "pending",
                    Processing: "pending",
                    Failed: "error"
                },
                h = function(e, t) {
                    return e[t.type].label
                },
                Z = function(e, t) {
                    return e[t.type].description
                },
                b = function(e) {
                    var t = e.archives,
                        n = e.model,
                        b = e.withTitle,
                        w = void 0 === b || b,
                        y = e.withBorder,
                        _ = void 0 === y || y,
                        k = function(e) {
                            var t = e.ext ? "(.".concat(e.ext, ")") : "";
                            return {
                                source: {
                                    label: "Original format",
                                    description: "".concat(t)
                                },
                                gltf: {
                                    label: "glTF",
                                    description: "(Converted)"
                                },
                                usdz: {
                                    label: "USDZ",
                                    description: "(Converted AR format)"
                                },
                                uasset: {
                                    label: "uasset",
                                    description: "(Converted by Datasmith)"
                                }
                            }
                        }(n),
                        N = (0, v.O)(t);
                    return (0, r.Z)("div", {
                        className: (0, d.AK)(f.Z.view, (0, s.Z)({}, (0, d.c6)(f.Z, "with-border"), _))
                    }, void 0, w && (0, r.Z)("p", {
                        className: f.Z.title
                    }, void 0, "Download your model"), (0, r.Z)("div", {
                        className: f.Z.contents
                    }, void 0, n.isPublished ? N.map((function(e, t) {
                        return (0, r.Z)(l.Fragment, {}, t, (0, r.Z)("div", {
                            className: f.Z.option
                        }, void 0, (0, r.Z)("div", {
                            className: f.Z.type
                        }, void 0, (0, r.Z)("span", {
                            className: f.Z.label
                        }, void 0, h(k, e), " "), (0, r.Z)("span", {
                            className: f.Z.description
                        }, void 0, Z(k, e))), (0, r.Z)("div", {
                            className: f.Z.status
                        }, void 0, e.exists && e.status ? "Succeeded" === e.status ? (0, r.Z)(p.Z, {
                            text: "Download",
                            size: "small",
                            type: "primary",
                            onClick: function() {
                                return c.Z.poll(e.url).then((function(e) {
                                    var t = e.url;
                                    window.location.href = t
                                })).catch((function(e) {
                                    console.error(e)
                                }))
                            }
                        }) : l.createElement(l.Fragment, null, (0, r.Z)(u.Z, {
                            type: g["".concat(e.status)],
                            label: "Pending" === e.status || "Processing" === e.status ? "source" === e.type ? "Zipping..." : "Converting..." : "Conversion failed"
                        }), "Failed" === e.status ? (0, r.Z)(m.D, {
                            className: f.Z.report,
                            model: n
                        }) : null) : (0, r.Z)(u.Z, {
                            type: "informative",
                            label: "unavailable",
                            rightIcon: {
                                classname: "fa fa-question-circle",
                                message: "Model is not compatible with ".concat(k[e.type].label, " feature or conversion has not started yet"),
                                messagePosition: "up-left"
                            }
                        }))))
                    })) : t.map((function(e, t) {
                        return (0, r.Z)(l.Fragment, {}, t, (0, r.Z)("div", {
                            className: f.Z.option
                        }, void 0, (0, r.Z)("div", {
                            className: f.Z.type
                        }, void 0, (0, r.Z)("span", {
                            className: f.Z.label
                        }, void 0, h(k, e), " "), (0, r.Z)("span", {
                            className: f.Z.description
                        }, void 0, Z(k, e))), (0, r.Z)("div", {
                            className: f.Z.status
                        }, void 0, n.org ? i || (i = (0, r.Z)(u.Z, {
                            type: "pending",
                            label: "processing"
                        })) : o || (o = (0, r.Z)(u.Z, {
                            type: "inactive",
                            label: "waiting for publish"
                        })))))
                    }))), n.isPublished ? (0, r.Z)("div", {
                        className: f.Z.tips
                    }, void 0, a || (a = (0, r.Z)("p", {}, void 0, "Changing 3D settings will re-run conversion"))) : null)
                }
        },
        aZj5: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var i, o, a, r = n("sQwH");
            n("3Z9q");

            function s(e) {
                var t = e.onBack,
                    n = e.onClose;
                return (0, r.Z)("header", {
                    className: "c-model-properties__header"
                }, void 0, t ? (0, r.Z)("a", {
                    className: "c-model-properties__header-back skfb-link",
                    "data-selenium": "properties-back",
                    onClick: function() {
                        return t()
                    }
                }, void 0, "‹ ", i || (i = (0, r.Z)("span", {
                    className: "c-model-properties__header-back__text"
                }, void 0, "Back"))) : null, o || (o = (0, r.Z)("h1", {
                    className: "c-model-properties__header-title"
                }, void 0, "Edit model")), n ? (0, r.Z)("div", {
                    className: "c-model-properties__close"
                }, void 0, (0, r.Z)("a", {
                    "aria-label": "Close popup",
                    "data-selenium": "close-popup",
                    className: "c-model-properties__close-icon",
                    onClick: n
                }, void 0, a || (a = (0, r.Z)("i", {
                    className: "fa fa-times"
                })))) : null)
            }
        },
        Di7Z: (e, t, n) => {
            "use strict";
            n.d(t, {
                m: () => f,
                D: () => g
            });
            var i, o = n("sQwH"),
                a = n("3Z9q"),
                r = n("Bpah"),
                s = n("e1Pq"),
                l = n("k3DV"),
                c = n("WA+4"),
                d = n("LLYa"),
                u = n("fBod"),
                p = n("xIYY"),
                m = n("CfKk"),
                v = n("4sJl");

            function f(e) {
                var t = e.model,
                    n = e.authUser,
                    f = e.className,
                    g = (0, s.Z)().History,
                    h = (0, p.I0)(),
                    Z = (0, l.Z)(t),
                    b = a.useCallback((function() {
                        (0, u.loadReportPopup)().then((function(e) {
                            new e({
                                model: new r.Z(t)
                            })
                        }))
                    }), [t]),
                    w = !!(0, d.aI)(t) && (0, d.$y)(t),
                    y = (0, p.v9)(m.wl.authUser.getOrgRole(t.org ? t.org.uid : "")),
                    _ = (0, c.w)(t, "org") ? (0, v.Bl)(t, n, y) : t.user.uid === n.uid || n.isStaff;
                return (0, o.Z)("div", {
                    className: f
                }, void 0, w || !_ ? null : (0, o.Z)("div", {
                    className: "c-model-properties__link-container"
                }, void 0, (0, o.Z)("a", {
                    className: "c-model-properties__delete cell",
                    "data-selenium": "delete-model",
                    onClick: function() {
                        return Z().then((function() {
                            t.org ? (h(m.Nw.orgSearch.deleteModel(t.uid)), h(m.Nw.orgProjectSearch.deleteModel(t.uid)), g.pushRoute("orgs:all_models", {
                                username: t.org.username
                            })) : g.pushRoute("users:profile_models", {
                                username: n.username
                            })
                        }))
                    }
                }, void 0, "Delete this model")), (0, o.Z)("div", {
                    className: "c-model-properties__link-container"
                }, void 0, (0, o.Z)("a", {
                    className: "c-model-properties__report cell skfb-link",
                    onClick: b
                }, void 0, i || (i = (0, o.Z)("i", {
                    className: "icon fa fa-flag"
                })), " Report an issue")))
            }
            var g = function(e) {
                var t = e.model,
                    n = e.className,
                    i = a.useCallback((function() {
                        (0, u.loadReportPopup)().then((function(e) {
                            new e({
                                model: new r.Z(t)
                            })
                        }))
                    }), [t]);
                return (0, o.Z)("div", {
                    className: n
                }, void 0, (0, o.Z)("a", {
                    className: "skfb-link",
                    onClick: i
                }, void 0, "Report the issue"))
            }
        },
        hK4n: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => P
            });
            var i, o, a, r, s, l, c, d, u, p = n("D4hk"),
                m = n("7isf"),
                v = n("sQwH"),
                f = n("xKIK"),
                g = n("3Z9q"),
                h = n("LLYa"),
                Z = n("iu9k"),
                b = n("RA37"),
                w = n("vAnt"),
                y = n("GR31"),
                _ = n("JT1T"),
                k = n("1xsz"),
                N = n("tgOb"),
                C = n("e1Pq");

            function D(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? D(Object(n), !0).forEach((function(t) {
                        (0, f.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function P(e) {
                var t = e.models,
                    n = e.form,
                    f = e.disabled,
                    D = (0, C.Z)().Popups,
                    P = g.useContext(b.w).colors,
                    E = Boolean(t[0].downloadType),
                    S = !E || (0, h.Ov)("pro", t[0]),
                    O = g.useCallback((function(e) {
                        var i = n.fields.visibility.value,
                            o = [];
                        if (n.fields.visibility.onChange(e), i !== e) {
                            if (E) {
                                if (t.find((function(e) {
                                        return e.isUploading || !e.isPublished
                                    }))) return;
                                o = t.map((function(t) {
                                    return (0, h.wo)(x(x({}, t), {}, {
                                        visibility: i
                                    }), x(x({}, t), {}, {
                                        visibility: e
                                    }))
                                }))
                            }
                            return D.loadVisibilityPopup().then((function(a) {
                                return new a({
                                    doesRequireCredits: !!E && o.filter((function(e) {
                                        return e
                                    })).length > 0,
                                    visibility: e,
                                    previousVisibility: i,
                                    itemsLength: t.length
                                }).open().catch((function() {
                                    n.fields.visibility.onChange(i)
                                }))
                            }))
                        }
                    }), [n.fields.visibility, t, D]);
                return g.createElement(g.Fragment, null, g.createElement(y.Z, (0, p.Z)({
                    className: "c-visibility-select above-mobile"
                }, n.fields.visibility, {
                    onChange: O,
                    menuAlign: "right",
                    theme: "white-background",
                    color: P.skfbBlue,
                    "data-selenium": "visibility-select",
                    autoScale: !0,
                    disabled: f,
                    belowSlot: S ? null : i || (i = (0, v.Z)("div", {
                        className: "c-visibility-select__upgrade-slot"
                    }, void 0, (0, v.Z)("div", {
                        className: "upgrade-label"
                    }, void 0, "Upgrade to unlock more privacy options"), (0, v.Z)("div", {
                        className: "upgrade-button"
                    }, void 0, (0, v.Z)(k.Z, {})))),
                    options: [].concat((0, m.Z)(E ? [{
                        title: o || (o = (0, v.Z)("div", {
                            className: "c-visibility-select__text",
                            "data-selenium": "org-option"
                        }, void 0, (0, v.Z)("div", {}, void 0, "All members of the project"), (0, v.Z)(N.Z, {
                            visibility: "org"
                        }))),
                        value: "org"
                    }] : []), [{
                        title: a || (a = (0, v.Z)("div", {
                            className: "c-visibility-select__text",
                            "data-selenium": "public-option"
                        }, void 0, (0, v.Z)("div", {}, void 0, "Anyone on Sketchfab.com"), (0, v.Z)(N.Z, {
                            visibility: "public"
                        }))),
                        value: "public"
                    }, {
                        title: (0, v.Z)("div", {
                            className: "c-visibility-select__text",
                            "data-selenium": "private-option"
                        }, void 0, r || (r = (0, v.Z)("div", {}, void 0, "Anyone with the link")), (0, v.Z)(N.Z, {
                            visibility: "private",
                            disabled: !S
                        })),
                        value: "private",
                        disabled: !S
                    }, {
                        title: (0, v.Z)("div", {
                            className: "c-visibility-select__text",
                            "data-selenium": "protected-option"
                        }, void 0, s || (s = (0, v.Z)("div", {}, void 0, "Anyone with the link & password ")), (0, v.Z)(N.Z, {
                            visibility: "protected",
                            disabled: !S
                        }), " "),
                        value: "protected",
                        disabled: !S
                    }])
                })), g.createElement(_.Z, (0, p.Z)({
                    name: "visibility",
                    className: "c-visibility-radio-list mobile-and-below"
                }, n.fields.visibility, {
                    onChange: O,
                    "data-selenium": "visibility-select",
                    disabled: f,
                    options: [].concat((0, m.Z)(E ? [{
                        title: l || (l = (0, v.Z)("div", {
                            className: "c-visibility-radio-list__text",
                            "data-selenium": "org-option"
                        }, void 0, (0, v.Z)(N.Z, {
                            visibility: "org"
                        }))),
                        value: "org"
                    }] : []), [{
                        title: c || (c = (0, v.Z)("div", {
                            className: "c-visibility-radio-list__text",
                            "data-selenium": "public-option"
                        }, void 0, (0, v.Z)(N.Z, {
                            visibility: "public"
                        }))),
                        value: "public"
                    }, {
                        title: d || (d = (0, v.Z)("div", {
                            className: "c-visibility-radio-list__text",
                            "data-selenium": "private-option"
                        }, void 0, (0, v.Z)(N.Z, {
                            visibility: "private"
                        }))),
                        action: g.createElement(g.Fragment, null, S ? null : (0, v.Z)(w.Z, {
                            className: "c-visibility-radio-list__action",
                            size: "small",
                            href: (0, Z.HQ)("pages:plans")
                        }, void 0, "Upgrade")),
                        value: "private",
                        disabled: !S
                    }, {
                        title: u || (u = (0, v.Z)("div", {
                            className: "c-visibility-radio-list__text",
                            "data-selenium": "protected-option"
                        }, void 0, (0, v.Z)(N.Z, {
                            visibility: "protected"
                        }))),
                        action: g.createElement(g.Fragment, null, S ? null : (0, v.Z)(w.Z, {
                            className: "c-visibility-radio-list__action",
                            size: "small",
                            href: (0, Z.HQ)("pages:plans")
                        }, void 0, "Upgrade")),
                        value: "protected",
                        disabled: !S
                    }])
                })))
            }
        },
        NDtu: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Z
            });
            var i, o = n("sQwH"),
                a = n("Wch8"),
                r = n("zoaa"),
                s = n("7isf"),
                l = n("sGMM"),
                c = n("eLCO"),
                d = n.n(c),
                u = n("Hjnd"),
                p = n.n(u),
                m = n("3Z9q"),
                v = n("R276"),
                f = n("e1Pq"),
                g = n("X40V"),
                h = n("Oyie");

            function Z(e) {
                var t = e.value,
                    c = e.orgUid,
                    u = e.onChange,
                    Z = e["data-selenium"],
                    b = m.useRef(null),
                    w = m.useState(""),
                    y = (0, l.Z)(w, 2),
                    _ = y[0],
                    k = y[1],
                    N = m.useState(!1),
                    C = (0, l.Z)(N, 2),
                    D = C[0],
                    x = C[1],
                    P = (0, f.Z)().Api,
                    E = (0, v.Z)((function(e) {
                        var t = e.Api;
                        return c ? h.resolve([]) : t.getTagSuggestions().then((function(e) {
                            return e.results
                        }))
                    }), [], []),
                    S = (0, l.Z)(E, 1)[0],
                    O = m.useCallback((function() {
                        return u(t.slice(0, t.length - 1))
                    }), [u, t]),
                    T = m.useCallback((function(e) {
                        return u(t.filter((function(t) {
                            return t !== e
                        })))
                    }), [u, t]),
                    A = m.useCallback((function(e) {
                        u(!e.length || !e[0] || e[0] && t.includes(e[0]) ? t : [].concat((0, s.Z)(t), (0, s.Z)(e)))
                    }), [u, t]),
                    L = function(e) {
                        var n = e.target.value.split(/[\s,]+/).reverse(),
                            i = (0, r.Z)(n),
                            o = i[0],
                            a = i.slice(1).filter((function(e) {
                                return !t.includes(e)
                            }));
                        A(a), k(o)
                    },
                    F = m.useCallback((function(e) {
                        ("Enter" === e.key || "," === e.key || " " === e.key) && b.current && b.current.value && (e.preventDefault(), A([b.current.value]), k("")), "Backspace" === e.key && b.current && !b.current.value && O()
                    }), [A, O]),
                    R = m.useRef(L);
                m.useEffect((function() {
                    R.current = L
                }), [L]), m.useEffect((function() {
                    b.current && n.e(5271).then(n.t.bind(n, "KcXp", 23)).then((function() {
                        var e;
                        p()(b.current).textcomplete([{
                            match: /\b([\w-]{2,})$/,
                            search: (e = (0, a.Z)(d().mark((function e(t, n) {
                                var i, o;
                                return d().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!c) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 3, P.getTagOrgAutocomplete(c, t);
                                        case 3:
                                            e.t0 = e.sent, e.next = 9;
                                            break;
                                        case 6:
                                            return e.next = 8, P.getTagAutocomplete(t);
                                        case 8:
                                            e.t0 = e.sent;
                                        case 9:
                                            i = e.t0, o = i.results, n(o);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))), function(t, n) {
                                return e.apply(this, arguments)
                            }),
                            replace: function(e) {
                                return "".concat(e, " ")
                            },
                            index: 1
                        }], {
                            debounce: 300
                        }).on("change", (function(e) {
                            R.current(e)
                        }))
                    }))
                }), []);
                var j = S.filter((function(e) {
                    return !t.includes(e)
                }));
                return (0, o.Z)("div", {
                    className: "c-tag-input"
                }, void 0, (0, o.Z)("div", {
                    className: (0, g.AK)("form-input", "--border", {
                        focused: D
                    })
                }, void 0, t.map((function(e) {
                    return (0, o.Z)("div", {
                        className: "c-tag-input__tag",
                        onClick: function() {
                            return T(e)
                        }
                    }, e, (0, o.Z)("div", {
                        className: "c-tag-input__tag-text"
                    }, void 0, e), i || (i = (0, o.Z)("i", {
                        className: "icon fa fa-close"
                    })))
                })), m.createElement("textarea", {
                    className: "c-tag-input__textarea",
                    ref: b,
                    value: _,
                    onChange: L,
                    onKeyDown: F,
                    maxLength: 47,
                    onFocus: function() {
                        return x(!0)
                    },
                    onBlur: function() {
                        return x(!1)
                    },
                    placeholder: t.length ? "Add another" : "Add tags",
                    "data-selenium": Z
                })), j.length ? (0, o.Z)("p", {
                    className: "c-tag-input__suggestions"
                }, void 0, "Suggested tags:", " ", j.map((function(e, t) {
                    return (0, o.Z)(m.Fragment, {}, e, t ? ", " : null, (0, o.Z)("span", {
                        className: "skfb-link",
                        onClick: function() {
                            return A([e])
                        }
                    }, void 0, e))
                }))) : null)
            }
        },
        "yfT+": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Fn
            });
            var i = n("D4hk"),
                o = n("sQwH"),
                a = n("7isf"),
                r = n("Wch8"),
                s = n("xKIK"),
                l = n("3MRe"),
                c = n("sGMM"),
                d = n("eLCO"),
                u = n.n(d),
                p = n("3Z9q"),
                m = n("xIYY"),
                v = n("5hHH"),
                f = n("CfKk"),
                g = n("LLYa"),
                h = n("X40V"),
                Z = n("pgZm"),
                b = n("1nxQ"),
                w = n("hDfq"),
                y = n("oR9T"),
                _ = n("vAnt"),
                k = function(e) {
                    return String(e ? (e / 100).toFixed(2) : "")
                },
                N = function(e) {
                    return Math.round(100 * Number(e) || 0)
                },
                C = function(e, t) {
                    return Boolean(!e && t || e && !t || e && t && (e.name !== t.name || e.size !== t.size))
                },
                D = n("h4jM"),
                x = n("Q0AI"),
                P = n("V4X4"),
                E = n("e1Pq"),
                S = n("i2hM"),
                O = n("TC9H");

            function T(e) {
                var t = p.useRef(e);
                return p.useEffect((function() {
                    t.current = e
                }), [e]), t
            }
            var A = n("Oyie");
            const L = function(e) {
                var t = e.className,
                    a = e.value,
                    r = e.label,
                    s = e.onChange,
                    l = e.selectedTab,
                    d = e.onTabChange,
                    u = e.textAreaProps,
                    m = e.maxLength,
                    v = void 0 === m ? 1024 : m,
                    f = e.generateMarkdownPreview,
                    g = p.useRef(null),
                    Z = p.useRef(null),
                    b = p.useState(!0),
                    w = (0, c.Z)(b, 2),
                    y = w[0],
                    _ = w[1],
                    k = p.useRef(null),
                    N = p.useState(null),
                    C = (0, c.Z)(N, 2),
                    D = C[0],
                    x = C[1],
                    P = p.useState(""),
                    E = (0, c.Z)(P, 2),
                    L = E[0],
                    F = E[1];
                p.useLayoutEffect((function() {
                    g.current && (g.current.value = a)
                }), [a]), p.useLayoutEffect((function() {
                    k.current && D && k.current.appendChild(D)
                }), [D]);
                var R = T(s),
                    j = T(v);
                p.useEffect((function() {
                    _(!0), A.all([n.e(5189).then(n.t.bind(n, "Fi04", 23)), n.e(5189).then(n.t.bind(n, "ExF7", 23)), n.e(5189).then(n.t.bind(n, "eNCp", 23))]).then((function(e) {
                        var t = (0, c.Z)(e, 1)[0].default.fromTextArea(g.current, {
                            mode: "gfm",
                            theme: "neo",
                            highlightFormatting: !0,
                            lineWrapping: !0,
                            extraKeys: S.Z.getShortcuts(),
                            screenReaderLabel: r
                        });
                        S.Z.setEditor(t), x(S.Z.initializeToolbar({})), _(!1), t.on("change", (function(e) {
                            e.getTextArea().value = e.getValue(), R.current(e.getValue())
                        }))
                    }))
                }), []);
                var I = function() {
                    _(!0), F("<div>Loading preview...</div>");
                    var e = S.Z.getMarkdownEditorValue() || (g.current ? g.current.value : "");
                    (e ? f(e) : A.resolve("")).then((function(e) {
                        _(!1), F(e)
                    }))
                };
                return (0, O.Z)(Z), (0, o.Z)("div", {
                    className: (0, h.AK)("c-markdown-editor", t, {
                        "--preview": "preview" === l,
                        "--edit": "edit" === l
                    })
                }, void 0, (0, o.Z)("div", {
                    className: "c-markdown-editor__header"
                }, void 0, p.createElement("div", {
                    className: "c-markdown-editor__toolbar",
                    ref: k
                }), (0, o.Z)("div", {
                    className: "c-markdown-editor__right"
                }, void 0, (0, o.Z)("div", {
                    className: "c-markdown-editor__tab-buttons"
                }, void 0, (0, o.Z)("button", {
                    onClick: function() {
                        return d("edit")
                    },
                    className: (0, h.AK)("edit", {
                        "--selected": "edit" === l
                    })
                }, void 0, "edit"), (0, o.Z)("button", {
                    onClick: function() {
                        d("preview"), I()
                    },
                    className: (0, h.AK)("preview", {
                        "--selected": "preview" === l
                    })
                }, void 0, "preview")))), (0, o.Z)("div", {
                    className: "c-markdown-editor__textarea-container"
                }, void 0, p.createElement("textarea", (0, i.Z)({}, u, {
                    ref: g,
                    className: (0, h.AK)("c-markdown-editor__textarea", {
                        "--loading-editor": y
                    }),
                    maxLength: 1024,
                    "aria-label": r,
                    value: a,
                    onChange: function(e) {
                        return s(e.target.value)
                    }
                }))), p.createElement("div", {
                    className: (0, h.AK)("c-markdown-editor__rendered", "markdown-rendered-content"),
                    ref: Z,
                    dangerouslySetInnerHTML: {
                        __html: L
                    }
                }), (0, o.Z)("p", {
                    className: "c-markdown-editor__chars-count"
                }, void 0, (0, o.Z)("span", {
                    className: (0, h.AK)("count", {
                        "--error": a.length > 1024
                    })
                }, void 0, j.current - a.length)))
            };

            function F(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? F(Object(n), !0).forEach((function(t) {
                        (0, s.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function j(e) {
                var t = e.value,
                    n = e.onChange,
                    i = e.onBlur,
                    a = e.error,
                    r = e.isTouched,
                    s = e.label,
                    l = e.className,
                    d = e.textAreaProps,
                    u = void 0 === d ? {} : d,
                    m = p.useState("edit"),
                    v = (0, c.Z)(m, 2),
                    f = v[0],
                    g = v[1],
                    Z = p.useState(!1),
                    b = (0, c.Z)(Z, 2),
                    w = b[0],
                    y = b[1],
                    _ = (0, E.Z)().Api,
                    k = Boolean(a && r);
                return (0, o.Z)(L, {
                    className: (0, h.AK)(l, {
                        "--error": k,
                        "--focus": w
                    }),
                    value: t,
                    onChange: n,
                    selectedTab: f,
                    onTabChange: g,
                    label: s,
                    textAreaProps: R(R({}, u), {}, {
                        onFocus: function() {
                            y(!0)
                        },
                        onBlur: function(e) {
                            y(!1), i(e)
                        }
                    }),
                    generateMarkdownPreview: function(e) {
                        return _.getMarkdownPreview(e).then((function(e) {
                            return e.result
                        })).catch((function() {
                            return "Failed to load preview"
                        }))
                    }
                })
            }
            var I = n("yd36"),
                M = n("e+fc"),
                U = n("xtQ3"),
                K = n("RA37");
            var z, q = n("R276"),
                B = n("c2Jd"),
                V = n("kN3w"),
                Q = n("mSEu"),
                H = n("p5Lb");

            function G(e) {
                var t = function(e) {
                    return 10 + (0, H.zy)([0, 20], [0, 20], e.description.length) + (0, H.zy)([20, 100], [0, 20], e.description.length) + (e.categories.length >= 1 ? 25 : 0) + (e.tags.length >= 2 ? 25 : 0)
                }(e.form);
                return (0, o.Z)("div", {
                    className: "c-discoverability"
                }, void 0, (0, o.Z)("label", {
                    className: "c-model-properties__label"
                }, void 0, "Discoverability", " ", (0, o.Z)("span", {
                    className: "c-model-properties__thumb-up"
                }, void 0, 100 === t ? "👍" : "")), (0, o.Z)("div", {
                    className: "progression small"
                }, void 0, (0, o.Z)("div", {
                    className: "progressbar"
                }, void 0, (0, o.Z)("div", {
                    className: (0, h.AK)("status", t < 20 ? "status-danger" : t >= 30 && t < 70 ? "status-warning" : t >= 70 ? "status-success" : null),
                    style: {
                        width: "".concat(t, "%")
                    }
                }))), z || (z = (0, o.Z)("p", {}, void 0, "Write a good description, add categories and tags to help your model get discovered.")), (0, o.Z)("p", {}, void 0, (0, o.Z)("a", {
                    className: "skfb-link",
                    href: "".concat(Q.Z.hosts.faq, "/articles/210273623-Discoverability"),
                    target: "_blank",
                    rel: "noreferrer noopener"
                }, void 0, "More tips to get exposure")))
            }
            var Y, $, W = n("RI22"),
                X = n("iu9k");

            function J() {
                var e = (0, E.Z)().History;
                return (0, o.Z)("div", {
                    className: "c-model-download__upgrade"
                }, void 0, Y || (Y = (0, o.Z)("h2", {
                    className: "c-model-download__title"
                }, void 0, "Unlock conversion & import")), $ || ($ = (0, o.Z)("div", {
                    className: "c-model-download__contents"
                }, void 0, (0, o.Z)("div", {
                    className: "c-model-download__label"
                }, void 0, (0, o.Z)("i", {
                    className: "icon fa fa-check"
                }), (0, o.Z)("p", {
                    className: "label_contents"
                }, void 0, "Download your own model")), (0, o.Z)("div", {
                    className: "c-model-download__label"
                }, void 0, (0, o.Z)("i", {
                    className: "icon fa fa-check"
                }), (0, o.Z)("p", {
                    className: "label_contents"
                }, void 0, "Convert it to glTF & USDZ")), (0, o.Z)("div", {
                    className: "c-model-download__label"
                }, void 0, (0, o.Z)("i", {
                    className: "icon fa fa-check"
                }), (0, o.Z)("p", {
                    className: "label_contents"
                }, void 0, "Import it into your favorite 3D software")))), (0, o.Z)("div", {
                    className: "c-model-download__action"
                }, void 0, (0, o.Z)(_.Z, {
                    type: "important",
                    size: "large",
                    text: "Upgrade your account",
                    onClick: function() {
                        e.push((0, X.HQ)("pages:plans"))
                    }
                })))
            }
            var ee = n("KUFO"),
                te = n("KGKI"),
                ne = n("GKm7"),
                ie = {
                    gltf: "Android",
                    usdz: "iOS"
                };
            var oe, ae, re, se, le = n("Di7Z"),
                ce = n("rzLk"),
                de = n("EA64"),
                ue = {
                    gltf: {
                        label: "glTF",
                        description: "(Converted)"
                    },
                    usdz: {
                        label: "USDZ",
                        description: "(Converted AR format)"
                    }
                },
                pe = {
                    not_published: {
                        type: "inactive",
                        label: "waiting for publish"
                    },
                    source_blocked: {
                        type: "inactive",
                        label: "model undownloable"
                    },
                    Succeeded: {
                        type: "active",
                        label: "converted"
                    },
                    Pending: {
                        type: "pending",
                        label: "converting..."
                    },
                    Processing: {
                        type: "pending",
                        label: "converting..."
                    },
                    Failed: {
                        type: "error",
                        label: "conversion failed"
                    }
                },
                me = function(e, t) {
                    return e[t.type].label
                },
                ve = function(e, t) {
                    return e[t.type].description
                };
            const fe = function(e) {
                var t, n = e.form,
                    i = e.management,
                    a = e.model,
                    r = i.archivesDetails,
                    s = i.downloadStatus,
                    l = "?utm_source=website&utm_campaign=properties-enterprise-ar",
                    c = "Your model will be automatically converted to glTF and USDZ formats and made available for AR on Android and iOS.",
                    d = "".concat(Q.Z.hosts.faq, "/articles/360046289571-App-free-AR").concat(l),
                    u = (0, de.O)(r);
                return (0, o.Z)("div", {
                    className: "c-enterprise-ar"
                }, void 0, (0, o.Z)("div", {
                    className: (0, h.AK)("c-enterprise-ar__title", {
                        "--arEnabled": n.data.isArEnabled
                    })
                }, void 0, (0, o.Z)("div", {
                    className: "c-enterprise-ar__title__label"
                }, void 0, oe || (oe = (0, o.Z)("p", {
                    className: "title"
                }, void 0, "Allow AR")), (0, o.Z)(ce.Z, {
                    href: d,
                    message: c
                })), p.createElement(te.Z, n.fields.isArEnabled)), n.data.isArEnabled ? p.createElement(p.Fragment, null, (0, o.Z)("div", {
                    className: "c-enterprise-ar__contents"
                }, void 0, "not_published" === s || "source_blocked" === s ? u.map((function(e, t) {
                    return ["source", "uasset"].includes(e.type) ? null : (0, o.Z)(p.Fragment, {}, t, (0, o.Z)("div", {
                        className: "c-enterprise-ar__option"
                    }, void 0, (0, o.Z)("div", {
                        className: "c-enterprise-ar__type"
                    }, void 0, (0, o.Z)("span", {
                        className: "label"
                    }, void 0, me(ue, e), " "), (0, o.Z)("span", {
                        className: "description"
                    }, void 0, ve(ue, e))), (0, o.Z)("div", {
                        className: "c-enterprise-ar__status"
                    }, void 0, (0, o.Z)(ee.Z, {
                        type: pe[s].type,
                        label: pe[s].label
                    }))), ae || (ae = (0, o.Z)("div", {
                        className: "c-side-settings__separator"
                    })))
                })) : (0, o.Z)("div", {}, void 0, function(e, t) {
                    var n = "",
                        i = "";
                    return e.filter((function(e) {
                        return "source" !== e.type && "Failed" === e.status
                    })).map((function(e) {
                        "" === n ? (n = e.type, i = ie[e.type]) : (n = "".concat(n, " & ").concat(e.type), i = "".concat(i, " or ").concat(ie[e.type]))
                    })), n ? (0, o.Z)(ne.Z, {
                        center: !0,
                        type: "warning"
                    }, void 0, (0, o.Z)("p", {}, void 0, (0, o.Z)("strong", {}, void 0, "The ", n, " conversion failed.")), (0, o.Z)("p", {}, void 0, "Your model will not be AR-compatible on ".concat(i, ". Read our "), (0, o.Z)("span", {}, void 0, (0, o.Z)("a", {
                        href: "".concat(Q.Z.hosts.faq, "/articles/360046421631-glTF-and-USDZ").concat(t),
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, void 0, "AR guidelines")), " to find out more, or report the issue below.")) : null
                }(u, l), u.map((function(e, n) {
                    return ["source", "uasset"].includes(e.type) ? null : (0, o.Z)(p.Fragment, {}, n, (0, o.Z)("div", {
                        className: "c-enterprise-ar__option"
                    }, void 0, (0, o.Z)("div", {
                        className: "c-enterprise-ar__type"
                    }, void 0, (0, o.Z)("span", {
                        className: "label"
                    }, void 0, me(ue, e), " "), (0, o.Z)("span", {
                        className: "description"
                    }, void 0, ve(ue, e))), (0, o.Z)("div", {
                        className: "c-enterprise-ar__status"
                    }, void 0, e.exists && e.status ? "Failed" === e.status ? p.createElement(p.Fragment, null, (0, o.Z)(ee.Z, {
                        type: pe[e.status].type,
                        label: pe[e.status].label
                    }), t || (t = (0, o.Z)(le.D, {
                        className: "c-enterprise-ar__report-issues",
                        model: a
                    }))) : (0, o.Z)(ee.Z, {
                        type: pe[e.status].type,
                        label: pe[e.status].label
                    }) : (0, o.Z)(ee.Z, {
                        type: "informative",
                        label: "unavailable",
                        rightIcon: {
                            classname: "fa fa-question-circle",
                            message: "Model is not compatible with ".concat(ue[e.type].label, " feature or conversion has not started yet"),
                            messagePosition: "up"
                        }
                    }))), re || (re = (0, o.Z)("div", {
                        className: "c-side-settings__separator"
                    })))
                })))), (0, o.Z)("div", {
                    className: "c-enterprise-ar__tips"
                }, void 0, (0, o.Z)("p", {}, void 0, c), se || (se = (0, o.Z)("p", {}, void 0, "Changing 3D settings will re-run conversion.")), (0, o.Z)("p", {}, void 0, (0, o.Z)("a", {
                    href: d,
                    target: "_blank",
                    className: "skfb-link",
                    rel: "noopener noreferrer"
                }, void 0, "Learn more here"), "."))) : null)
            };
            var ge, he = n("1bEe"),
                Ze = n("MndH"),
                be = n("TlsM"),
                we = n("RyS8");
            ! function(e) {
                e.Initial = "Initial", e.Reprocess = "Reprocess", e.None = "None"
            }(ge || (ge = {}));
            const ye = function(e, t, n) {
                var i = (0, m.I0)(),
                    o = p.useState(t.hasProcessingVersion ? "SUCCEEDED" === e.status.processing ? ge.Reprocess : ge.Initial : ge.None),
                    a = (0, c.Z)(o, 2),
                    r = a[0],
                    s = a[1],
                    l = p.useCallback((function() {
                        return i(f.Nw.models.pollVersions(e.uid)).then((function() {
                            s(ge.None)
                        }))
                    }), [e.uid, i]),
                    d = p.useCallback((function() {
                        return s(ge.Reprocess), i(f.Nw.models.reprocess(e.uid, !0)).then((function() {
                            s(ge.None), n && n()
                        }))
                    }), [i, e.uid]);
                return p.useEffect((function() {
                    if (r !== ge.None) {
                        var e = l();
                        return e.catch((0, we.KQ)(we.FU)),
                            function() {
                                return e.cancel()
                            }
                    }
                }), []), {
                    processingType: r,
                    reprocess: d
                }
            };
            var _e, ke, Ne, Ce, De, xe, Pe, Ee, Se, Oe, Te, Ae, Le, Fe, Re, je, Ie, Me, Ue = n("fBod");

            function Ke(e) {
                var t = e.selectedLicense,
                    n = e.licenseField,
                    i = p.useCallback((function() {
                        (0, Ue.loadLicensesPopup)().then((function(e) {
                            new e({
                                selectedLicense: t
                            }).open().then((function(e) {
                                n.onChange(e.uid)
                            })).catch((0, we.KQ)(we.FU))
                        }))
                    }), [t, n]);
                return (0, o.Z)("div", {
                    className: "c-model-management-download__row"
                }, void 0, _e || (_e = (0, o.Z)("span", {
                    className: "c-model-management-download__label"
                }, void 0, "License")), (0, o.Z)("div", {
                    className: "c-model-management-download__right",
                    onClick: i
                }, void 0, (0, o.Z)("p", {
                    className: "c-model-management-download__text"
                }, void 0, t ? t.label : null), ke || (ke = (0, o.Z)("a", {
                    className: "c-model-management-download__link"
                }, void 0, "Change license"))))
            }
            var ze, qe, Be, Ve, Qe, He, Ge, Ye, $e, We, Xe, Je, et, tt, nt, it, ot = function(e) {
                    var t = e.downloadType;
                    return (0, o.Z)(ne.Z, {
                        center: !0,
                        type: "warning",
                        className: "c-model-management-download__column"
                    }, void 0, (0, o.Z)("p", {}, void 0, "The model needs to be reprocessed to", " ", "store" === t ? "appear in the store" : "be downloadable", "."), Ne || (Ne = (0, o.Z)("p", {}, void 0, (0, o.Z)("strong", {}, void 0, "This can change how the model is rendered"), ". Please check the model once it has been re-processed.")), (0, o.Z)("p", {}, void 0, (0, o.Z)("a", {
                        className: "skfb-link",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "".concat(Q.Z.hosts.faq, "/articles/115005521546-Model-Reprocessing?utm_source=website&utm_campaign=model-management")
                    }, void 0, "Learn more")))
                },
                at = function() {
                    return Ce || (Ce = (0, o.Z)(ne.Z, {
                        center: !0,
                        type: "warning"
                    }, void 0, (0, o.Z)("p", {}, void 0, "We are preparing your model so it can be downloaded."), (0, o.Z)("p", {}, void 0, (0, o.Z)("strong", {}, void 0, "This may take a few minutes.")), (0, o.Z)("p", {}, void 0, (0, o.Z)("span", {
                        className: "spinner-small --centered"
                    }))))
                },
                rt = function() {
                    return De || (De = (0, o.Z)(ne.Z, {
                        center: !0,
                        type: "error",
                        className: "c-model-management-download__column"
                    }, void 0, (0, o.Z)("p", {}, void 0, (0, o.Z)("strong", {}, void 0, "An error occured while preparing your download.")), (0, o.Z)("p", {}, void 0, "Your model won't appear as downloadable."), (0, o.Z)("p", {}, void 0, "We have been notified and will fix it as soon as possible.")))
                },
                st = function() {
                    return (0, o.Z)(ne.Z, {
                        center: !0,
                        type: "error",
                        className: "c-model-management-download__column"
                    }, void 0, xe || (xe = (0, o.Z)("p", {}, void 0, (0, o.Z)("strong", {}, void 0, "Downloading is disabled for this model."))), Pe || (Pe = (0, o.Z)("p", {}, void 0, "This model has been uploaded with software that does not allow downloading.")), (0, o.Z)("p", {}, void 0, (0, o.Z)("a", {
                        className: "skfb-link",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "".concat(Q.Z.hosts.faq, "/articles/201368589-Downloading-Models?utm_source=website&utm_campaign=model-management#disabled")
                    }, void 0, "Learn more")))
                },
                lt = function() {
                    return (0, o.Z)(ne.Z, {
                        center: !0,
                        type: "warning"
                    }, void 0, Ee || (Ee = (0, o.Z)("p", {}, void 0, "Your models will appear in the store once your PayPal account is connected.")), (0, o.Z)("p", {}, void 0, "Go to", " ", (0, o.Z)("a", {
                        className: "skfb-link",
                        href: (0, X.HQ)("users:settings_account")
                    }, void 0, "Account Settings"), "."))
                },
                ct = function() {
                    return (0, o.Z)(ne.Z, {
                        center: !0,
                        type: "warning"
                    }, void 0, Se || (Se = (0, o.Z)("p", {}, void 0, (0, o.Z)("strong", {}, void 0, "Your PayPal account is pending verification."))), Oe || (Oe = (0, o.Z)("p", {}, void 0, "Your models will appear in the store once your PayPal account has been verified (you will be notified by e-mail).")), (0, o.Z)("p", {}, void 0, (0, o.Z)("a", {
                        className: "skfb-link",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "".concat(Q.Z.hosts.faq, "/articles/115005848123-Getting-paid-with-Sketchfab?utm_source=website&utm_campaign=model-management#link-paypal")
                    }, void 0, "Learn more")))
                },
                dt = function() {
                    return (0, o.Z)(ne.Z, {
                        center: !0,
                        type: "warning"
                    }, void 0, Te || (Te = (0, o.Z)("p", {}, void 0, (0, o.Z)("strong", {}, void 0, "Your PayPal account is not properly configured."))), (0, o.Z)("p", {}, void 0, "Make sure to read the", " ", (0, o.Z)("a", {
                        className: "skfb-link",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "".concat(Q.Z.hosts.faq, "/articles/115005848123-Getting-paid-with-Sketchfab?utm_source=website&utm_campaign=model-management#link-paypal")
                    }, void 0, "guidelines"), " ", "and", " ", (0, o.Z)("a", {
                        className: "skfb-link",
                        href: (0, X.HQ)("users:settings_account")
                    }, void 0, "reconnect your PayPal account"), "."), Ae || (Ae = (0, o.Z)("p", {}, void 0, "Your models wont be available in the store until you resolve this issue.")))
                },
                ut = function() {
                    return (0, o.Z)(ne.Z, {
                        center: !0,
                        type: "warning"
                    }, void 0, Le || (Le = (0, o.Z)("p", {}, void 0, (0, o.Z)("strong", {}, void 0, "Your seller account has been suspended."))), Fe || (Fe = (0, o.Z)("p", {}, void 0, "Your models will no longer appear in the store.")), (0, o.Z)("p", {}, void 0, (0, o.Z)("a", {
                        className: "skfb-link",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "".concat(Q.Z.hosts.faq, "/requests/new?type=store_selling&utm_source=website&utm_campaign=model-management")
                    }, void 0, "Contact support")))
                },
                pt = function() {
                    return Re || (Re = (0, o.Z)(ne.Z, {
                        center: !0,
                        type: "warning"
                    }, void 0, (0, o.Z)("p", {}, void 0, "We are checking the integrity of your additional file."), (0, o.Z)("p", {}, void 0, (0, o.Z)("strong", {}, void 0, "This may take a few minutes.")), (0, o.Z)("p", {}, void 0, (0, o.Z)("span", {
                        className: "spinner-small --centered"
                    }))))
                },
                mt = function(e) {
                    var t = e.downloadType;
                    return (0, o.Z)(ne.Z, {
                        center: !0,
                        type: "warning"
                    }, void 0, (0, o.Z)("p", {}, void 0, "Your model will not", " ", "store" === t ? "appear in the store" : "be downloadable", " until you publish it."))
                },
                vt = function() {
                    return je || (je = (0, o.Z)(ne.Z, {
                        center: !0,
                        type: "warning"
                    }, void 0, (0, o.Z)("p", {}, void 0, (0, o.Z)("b", {}, void 0, "Your model is reprocessing.")), (0, o.Z)("p", {}, void 0, "Editing some properties is unavailable during reprocess."), (0, o.Z)("p", {}, void 0, "This page will refresh automatically when the reprocessing is finished."), (0, o.Z)("p", {}, void 0, (0, o.Z)("span", {
                        className: "spinner-small --centered"
                    }))))
                },
                ft = function() {
                    return Ie || (Ie = (0, o.Z)(ne.Z, {
                        center: !0,
                        type: "error",
                        className: "c-model-management-download__column"
                    }, void 0, (0, o.Z)("p", {}, void 0, (0, o.Z)("strong", {}, void 0, "You cannot add this model to the Sketchfab Store because it is private.")), (0, o.Z)("p", {}, void 0, "Please make it public if you would like it published in the Store.")))
                },
                gt = function() {
                    return (0, o.Z)(ne.Z, {
                        className: "c-model-management-download__column",
                        center: !0,
                        type: "warning"
                    }, void 0, Me || (Me = (0, o.Z)("p", {}, void 0, (0, o.Z)("b", {}, void 0, "You need to become a seller to sell on the store."))), (0, o.Z)("p", {}, void 0, (0, o.Z)(_.Z, {
                        size: "medium",
                        type: "store",
                        target: "_blank",
                        href: "".concat(Q.Z.hosts.faq, "/articles/115004259063-Selling-3D-Models?utm_source=website&utm_campaign=model_management"),
                        text: "Become a seller"
                    })))
                },
                ht = n("f49s"),
                Zt = n("zIQK");

            function bt(e) {
                var t, n = e.priceField,
                    a = e.licenseField,
                    r = e.licenseOptions,
                    s = e.isLicenceLocked;
                return (0, o.Z)("span", {}, void 0, (0, o.Z)("div", {
                    className: "c-model-management-download__row"
                }, void 0, (0, o.Z)("span", {
                    className: "c-model-management-download__label --centered"
                }, void 0, "Price", " ", (0, o.Z)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "".concat(Q.Z.hosts.faq, "/articles/115004276366-Seller-Guidelines?utm_source=website&utm_campaign=model-management"),
                    className: "help"
                }, void 0, ze || (ze = (0, o.Z)("i", {
                    className: "fa fa-question-circle"
                })), qe || (qe = (0, o.Z)("div", {
                    className: "tooltip tooltip-up"
                }, void 0, "Learn more")))), (0, o.Z)("div", {
                    className: "c-model-management-download__right"
                }, void 0, p.createElement(x.Z, n, p.createElement(P.Z, (0, i.Z)({}, n, {
                    value: (t = n.value, "$ " + t),
                    onChange: function(e) {
                        return n.onChange(e.replace(/\$\s*/g, ""))
                    },
                    grey: !0,
                    className: "form-input c-model-management-download__price-input"
                }))))), (0, o.Z)("div", {
                    className: "c-model-management-download__row"
                }, void 0, Be || (Be = (0, o.Z)("span", {
                    className: "c-model-management-download__label --centered"
                }, void 0, "License")), (0, o.Z)("div", {
                    className: "c-model-management-download__right"
                }, void 0, p.createElement(x.Z, a, (0, o.Z)(Zt.Z, {
                    direction: "up",
                    text: s ? "License locked by our team" : null
                }, void 0, p.createElement(ht.Z, (0, i.Z)({
                    disabled: s,
                    icon: s ? "fa-lock" : void 0,
                    className: "c-model-management-download__license-select"
                }, a, {
                    options: r,
                    grey: !0
                })))))))
            }

            function wt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function yt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? wt(Object(n), !0).forEach((function(t) {
                        (0, s.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var _t = function(e, t) {
                    return yt(yt({}, (0, Ze.Z)(e, ["license", "price"])), {}, {
                        downloadType: t.downloadType
                    })
                },
                kt = function(e, t, n) {
                    return (0, g.wo)(t, n) && e.viewOnlyLimit && "limited" === e.viewOnlyLimit.type
                },
                Nt = function(e, t) {
                    return "no" !== e && "should_reprocess" === t.downloadStatus || "store" === e && !t.hasStats && "archives_broken" !== t.downloadStatus
                },
                Ct = function(e) {
                    return function(t) {
                        return Nt(t, e) ? "Your model needs to be reprocessed." : ""
                    }
                },
                Dt = function(e) {
                    return function(t) {
                        return "store" === t && [null, "skfb_revoked", "not_a_seller"].includes(e.sellerStatus) ? "You can not sell models on the Store anymore" : ""
                    }
                },
                xt = function(e, t) {
                    return function(n, i) {
                        if (!kt(e, t, _t(t, i))) return "";
                        var o = e.viewOnlyLimit && "limited" === e.viewOnlyLimit.type && !e.viewOnlyLimit.remaining;
                        return "no" === n && o ? "non-downloadable uploads limit reached" : ""
                    }
                },
                Pt = "?utm_source=website&utm_campaign=model-management",
                Et = function(e) {
                    return [{
                        title: "Choose a license",
                        value: ""
                    }].concat(e.map((function(e) {
                        return {
                            value: e.uid,
                            title: e.label
                        }
                    })))
                };

            function St(e) {
                var t = e.model,
                    n = e.management,
                    i = e.form,
                    a = e.freeLicenses,
                    r = e.paidLicenses,
                    s = e.processingType,
                    l = e.isExtraFileProcessing,
                    c = e.onChangeDownloadType,
                    d = e.reprocess,
                    u = (0, m.v9)(f.wl.authUser.user),
                    v = t.org ? ["no", "free"] : ["no", "free", "store"],
                    Z = Nt(i.data.downloadType, n),
                    b = (0, g.hv)(t.visibility) && "store" === i.data.downloadType,
                    w = kt(u, t, yt(yt({}, _t(t, i.data)), {}, {
                        isPublished: !0
                    })),
                    y = (0, g.a8)(t, yt(yt({}, _t(t, i.data)), {}, {
                        isPublished: !0,
                        downloadType: "free"
                    })) > 0;
                return (0, o.Z)("div", {
                    "data-selenium": "download-section",
                    className: "c-model-management-download"
                }, void 0, (0, o.Z)("header", {
                    className: "c-model-management-download__header"
                }, void 0, (0, o.Z)("div", {
                    className: "c-model-management-download__tabs"
                }, void 0, v.map((function(e) {
                    return (0, o.Z)("div", {
                        className: (0, h.AK)("c-model-management-download__tab", {
                            "--active": i.data.downloadType === e
                        }),
                        onClick: function() {
                            return c(e)
                        },
                        "data-selenium": "download-tab-".concat(e)
                    }, e, e)
                })))), (0, o.Z)("div", {
                    className: "c-model-management-download__content"
                }, void 0, u.viewOnlyLimit && "limited" === u.viewOnlyLimit.type && y ? Ve || (Ve = (0, o.Z)("p", {
                    className: "c-model-management-download__tip"
                }, void 0, (0, o.Z)("strong", {}, void 0, "Tip:"), " Set your model to downloadable or for sale to gain 1 credit for the current month.")) : null, s === ge.Reprocess ? Qe || (Qe = (0, o.Z)(vt, {})) : null, "no" !== i.data.downloadType && "archives_processing" === n.downloadStatus ? He || (He = (0, o.Z)(at, {})) : "no" !== i.data.downloadType && "not_published" === n.downloadStatus ? (0, o.Z)(mt, {
                    downloadType: i.data.downloadType
                }) : null, w ? (0, o.Z)(be.ZP, {
                    isPublished: t.isPublished
                }) : null, "archives_broken" === n.downloadStatus ? Ge || (Ge = (0, o.Z)(rt, {})) : "source_blocked" === n.downloadStatus ? Ye || (Ye = (0, o.Z)(st, {})) : "free" === i.data.downloadType ? (0, o.Z)(Ke, {
                    licenseField: i.fields.freeLicense,
                    selectedLicense: a.find((function(e) {
                        return e.uid === i.fields.freeLicense.value
                    }))
                }) : "store" === i.data.downloadType ? p.createElement(p.Fragment, null, null === n.sellerStatus || "paypal_revoked" === n.sellerStatus ? $e || ($e = (0, o.Z)(lt, {})) : "paypal_pending" === n.sellerStatus ? We || (We = (0, o.Z)(ct, {})) : ["paypal_misconfigured", "paypal_unconfigured"].includes(n.sellerStatus) ? Xe || (Xe = (0, o.Z)(dt, {})) : null, (0, g.hv)(i.data.visibility) ? Je || (Je = (0, o.Z)(ft, {})) : null, "not_a_seller" === n.sellerStatus ? et || (et = (0, o.Z)(gt, {})) : "skfb_revoked" === n.sellerStatus ? tt || (tt = (0, o.Z)(ut, {})) : (0, o.Z)(bt, {
                    isLicenceLocked: t.isStoreLicenseLocked,
                    licenseOptions: Et(r),
                    priceField: i.fields.price,
                    licenseField: i.fields.paidLicense,
                    fileField: i.fields.extraFile
                }), l ? nt || (nt = (0, o.Z)(pt, {}, "NotPublishedMessage")) : null, t.isStoreLicenseLocked ? (0, o.Z)("div", {
                    className: "c-model-management-download__tips"
                }, void 0, (0, o.Z)("p", {}, void 0, "Your asset ", it || (it = (0, o.Z)("strong", {}, void 0, "contains third-party Intellectual Property (IP) and must be licensed as Editorial content. ")), "If you have any questions, please", " ", (0, o.Z)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "".concat(Q.Z.hosts.faq, "/requests/new").concat(Pt, "&type=store_selling&subject=License%20Locked&model=").concat(t.uid)
                }, void 0, "reach out to us."))) : "not_a_seller" !== n.sellerStatus && "skfb_revoked" !== n.sellerStatus ? (0, o.Z)("div", {
                    className: "c-model-management-download__tips"
                }, void 0, (0, o.Z)("p", {}, void 0, "Not sure which license is right for you?", " ", (0, o.Z)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "".concat(Q.Z.hosts.faq, "/articles/360000696123-Choosing-your-model-s-license").concat(Pt)
                }, void 0, "Read more here"))) : null) : null, Z ? (0, o.Z)("div", {}, void 0, s !== ge.Reprocess ? (0, o.Z)(ot, {
                    downloadType: i.data.downloadType
                }) : null, (0, o.Z)(_.Z, {
                    text: s === ge.Reprocess ? "reprocessing model..." : "reprocess model",
                    subtext: s === ge.Reprocess ? "it may take a few minutes" : "",
                    onClick: d,
                    disabled: b,
                    size: "large",
                    className: "c-model-management-download__main-button",
                    loading: s === ge.Reprocess
                })) : null))
            }

            function Ot(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function Tt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ot(Object(n), !0).forEach((function(t) {
                        (0, s.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ot(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var At, Lt = "******",
                Ft = Tt(Tt(Tt({}, {
                    downloadType: function(e) {
                        var t = e.model,
                            n = e.management,
                            i = e.authUser;
                        return {
                            initialValue: n ? n.selectedDownloadType : t ? (0, g.Gq)(t) : "no",
                            validators: [(0, he.kw)(["no", "free", "store"])].concat((0, a.Z)(n ? [Dt(n), Ct(n)] : []), (0, a.Z)(t ? [xt(i, t), function(e, t) {
                                return "store" === e && "public" !== t.visibility ? "Models on the store must be public" : ""
                            }] : []))
                        }
                    },
                    freeLicense: function(e) {
                        var t = e.model;
                        return {
                            initialValue: t && t.license && t.license.free ? t.license.uid : "",
                            validators: [(0, he.Ml)((function(e, t) {
                                return "free" === t.downloadType
                            }), [(0, he.C1)("License is required.")])]
                        }
                    },
                    paidLicense: function(e) {
                        var t = e.model;
                        return {
                            initialValue: t && t.license && !t.license.free ? t.license.uid : "",
                            validators: [(0, he.Ml)((function(e, t) {
                                return "store" === t.downloadType
                            }), [(0, he.C1)("License is required.")])]
                        }
                    },
                    price: function(e) {
                        var t = e.model;
                        return {
                            initialValue: t && t.price ? k(t.price) : "25",
                            validators: [(0, he.Ml)((function(e, t) {
                                return "store" === t.downloadType
                            }), [(0, he.C1)("The price is required."), (0, he.Oi)(/^[^,]*$/, "Comma is an invalid character. Please use a dot to separate dollars from cents."), (0, he.Oi)(/^[0-9]+(\.[0-9][0-9]?)?$/, "Invalid price."), (0, he.VV)(Q.Z.modelMinPrice / 100, "Must be between " + (0, H.T4)(Q.Z.modelMinPrice) + " and $10000."), (0, he.Fp)(1e4, "Must be between " + (0, H.T4)(Q.Z.modelMinPrice) + " and $10000.")])]
                        }
                    },
                    extraFile: function(e) {
                        var t = e.management;
                        return {
                            initialValue: t ? t.extraFile : null,
                            validators: [(0, he.dg)(Q.Z.maxExtraArchiveSize, "Additional file is too big")]
                        }
                    },
                    visibility: function(e) {
                        var t = e.model;
                        return {
                            validators: [(0, he.kw)(["public", "private", "protected", "org"])],
                            initialValue: t && t.visibility || "public"
                        }
                    }
                }), {
                    isArEnabled: function(e) {
                        var t = e.model;
                        return {
                            initialValue: !(!t || !t.isArEnabled) && t.isArEnabled,
                            validators: []
                        }
                    }
                }), {}, {
                    name: function(e) {
                        return {
                            validators: [(0, he.C1)(), (0, he.BS)(48)],
                            initialValue: e.model.name
                        }
                    },
                    description: function(e) {
                        return {
                            validators: [(0, he.BS)(1024)],
                            initialValue: e.model.description
                        }
                    },
                    orgProject: function(e) {
                        return {
                            validators: e.model.org ? [(0, he.C1)()] : [],
                            initialValue: e.model.orgProject
                        }
                    },
                    categories: function(e) {
                        return {
                            validators: [],
                            initialValue: e.model.categories ? e.model.categories.map((function(e) {
                                return e.uid
                            })) : []
                        }
                    },
                    tags: function(e) {
                        var t = e.model;
                        return {
                            validators: [],
                            initialValue: t.org ? t.orgTags : t.tags
                        }
                    },
                    visibility: function(e) {
                        return {
                            validators: [(0, he.kw)(["public", "private", "protected", "org"]), function(t) {
                                return !(0, g.Ov)("pro", e.model) && (0, g.hv)(t) ? "You need to upgrade to Pro to have private and password protected models." : ""
                            }],
                            initialValue: e.model.visibility
                        }
                    },
                    password: function(e) {
                        return {
                            validators: [function(e, t) {
                                return e || "protected" !== t.visibility ? void 0 : "This field is required"
                            }],
                            initialValue: e.model.isUploading || "protected" !== e.model.visibility ? "" : Lt
                        }
                    },
                    isInspectable: function(e) {
                        return {
                            validators: [function(e, t) {
                                return e || "no" === t.downloadType ? void 0 : "Downloadable and store models must be inspectable."
                            }],
                            initialValue: e.model.isInspectable
                        }
                    },
                    isRestricted: function(e) {
                        return {
                            validators: [],
                            initialValue: e.model.isRestricted
                        }
                    }
                }),
                Rt = n("vkRz"),
                jt = n("gyKT"),
                It = n("1Nxi"),
                Mt = n("UQ3Q");

            function Ut(e) {
                var t = e.model,
                    n = e.hasChanged,
                    i = (0, Rt.Z)(t),
                    a = (0, g.$y)(t) && "FAILED" !== t.status.processing,
                    r = (0, Mt.I)(t),
                    s = r.canTransfer,
                    l = r.openModelTransferPopup,
                    c = p.useContext(K.w).colors;
                return p.createElement(p.Fragment, null, (0, o.Z)(_.Z, {
                    disabled: a,
                    size: "large",
                    type: "primary",
                    text: "Edit 3D settings",
                    href: t.editorUrl
                }), (0, o.Z)("div", {
                    className: "c-model-properties__buttons c-model-properties__edit-buttons"
                }, void 0, (0, o.Z)(jt.Z, {
                    model: t
                }, void 0, (function(e) {
                    var t = e.canDuplicate,
                        n = e.duplicate;
                    return (0, o.Z)(_.Z, {
                        htmlType: "button",
                        disabled: !t || a,
                        onClick: n,
                        size: "large",
                        type: "primary-inverted-border",
                        text: t ? "Duplicate" : "Duplicate (Pro)",
                        icon: (0, o.Z)(It.Z, {
                            color: c.skfbBlue,
                            width: 14,
                            height: 14
                        })
                    })
                })), (0, o.Z)("div", {
                    className: "help"
                }, void 0, (0, o.Z)(_.Z, {
                    htmlType: "button",
                    disabled: a || n,
                    size: "large",
                    type: "primary-inverted-border",
                    text: "Reupload",
                    iconClassName: "fa fa-arrow-up",
                    onClick: i,
                    "data-selenium": "open-reupload-popup"
                }), n ? At || (At = (0, o.Z)("div", {
                    className: "tooltip tooltip-down"
                }, void 0, "You have unsaved changes, please save them before reuploading a model")) : null), s ? (0, o.Z)(_.Z, {
                    htmlType: "button",
                    disabled: a || n,
                    size: "large",
                    type: "primary-inverted-border",
                    text: "Transfer",
                    onClick: l,
                    iconClassName: "fa fa-exchange",
                    "data-selenium": "open-transfer-popup"
                }) : null))
            }
            var Kt = n("JGf+");
            const zt = function(e, t) {
                var n = (0, m.I0)(),
                    i = t.extraFile ? t.extraFile.status : "",
                    o = ["processing", "pending"].includes(i),
                    a = p.useCallback((function() {
                        return n(f.Nw.models.pollExtraFileProcessingStatus(e.uid))
                    }), [n, e.uid]);
                return p.useEffect((function() {
                    if (o) {
                        var e = a();
                        return function() {
                            return e.cancel()
                        }
                    }
                }), [o, a]), [o, a]
            };
            var qt, Bt, Vt, Qt = n("d94b"),
                Ht = function(e) {
                    var t = e.disableInfo,
                        n = e.sellerStatus,
                        i = e.modelIsPrivate;
                    return p.createElement(p.Fragment, null, qt || (qt = (0, o.Z)("p", {}, void 0, (0, o.Z)("strong", {}, void 0, "This model has been disabled because it uses features not supported by your current plan:"))), (0, o.Z)("ul", {
                        className: "--disc"
                    }, void 0, t.detail.map((function(e, t) {
                        return (0, o.Z)("li", {}, t, e)
                    }))), (0, o.Z)("p", {}, void 0, " ", "Upgrade to ", (0, o.Z)("strong", {}, void 0, (0, Qt.Z)((0, w.w8)(t.requiredPlan))), " to reactivate this model."), (0, o.Z)("a", {
                        className: "button btn-medium btn-plan-".concat(t.requiredPlan),
                        target: "_blank",
                        rel: "noreferrer noopener",
                        href: "https://sketchfab.com/plans?ref=model-management"
                    }, void 0, "Upgrade to ", (0, Qt.Z)((0, w.w8)(t.requiredPlan))), !i && (0, o.Z)("p", {}, void 0, "You can also reactivate your model by removing paid features", "confirmed" === n ? ", adding it to the Store," : "", " ", "or making it downloadable."))
                },
                Gt = function() {
                    return p.createElement(p.Fragment, null, Bt || (Bt = (0, o.Z)("p", {}, void 0, (0, o.Z)("strong", {}, void 0, "This model has been disabled by Sketchfab staff. Please check your email or visit ", (0, o.Z)("a", {
                        className: "skfb-link",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        href: "https://help.sketchfab.com/hc/en-us/articles/360016172711-Disabled-Models#reactivate"
                    }, void 0, "the help center"), " for more details."))))
                };

            function Yt(e) {
                return (0, o.Z)("div", {
                    className: "disable-section"
                }, void 0, (0, o.Z)("div", {
                    className: "disable-section__content"
                }, void 0, (0, o.Z)(ne.Z, {
                    center: !0,
                    type: "error"
                }, void 0, "disabled_by_staff" === e.disableInfo.type ? Vt || (Vt = (0, o.Z)(Gt, {})) : "wrong_plan" === e.disableInfo.type ? p.createElement(Ht, (0, i.Z)({}, e, {
                    disableInfo: e.disableInfo
                })) : null)))
            }
            var $t, Wt, Xt, Jt, en, tn, nn = n("hK4n"),
                on = n("l9Gv"),
                an = n("LH8s"),
                rn = n("WA+4"),
                sn = function(e) {
                    var t = e.form,
                        n = e.model,
                        i = e.management,
                        a = (0, q.Z)((function(e) {
                            return e.Api.getLicenses().then((function(e) {
                                return e.results
                            }))
                        }), [], []),
                        r = (0, c.Z)(a, 1)[0],
                        s = ye(n, i),
                        l = s.processingType,
                        d = s.reprocess,
                        u = zt(n, i),
                        p = (0, c.Z)(u, 1)[0],
                        m = r.filter((function(e) {
                            return e.free
                        })),
                        v = r.filter((function(e) {
                            return !e.free
                        }));
                    return i ? (0, o.Z)(St, {
                        form: t,
                        model: n,
                        management: i,
                        freeLicenses: m,
                        paidLicenses: v,
                        processingType: l,
                        isExtraFileProcessing: p,
                        reprocess: d,
                        onChangeDownloadType: function(e) {
                            var o = (0, Kt.Z)(m) || {
                                    uid: ""
                                },
                                a = (0, Kt.Z)(v) || {
                                    uid: ""
                                },
                                r = v.find((function(e) {
                                    return "ed" === e.slug
                                })) || {
                                    uid: ""
                                };
                            t.onFieldsChange({
                                downloadType: e,
                                price: n.price ? k(n.price) : "25",
                                freeLicense: n.license && n.license.free ? n.license.uid : o.uid,
                                paidLicense: n.license && !n.license.free ? n.license.uid : n.isStoreLicenseLocked ? r.uid : a.uid,
                                extraFile: i.extraFile,
                                isInspectable: "no" !== e || n.isInspectable
                            })
                        }
                    }) : null
                };

            function ln(e) {
                var t, n = e.form,
                    r = e.model,
                    s = e.management,
                    l = p.useRef(!0),
                    d = p.useState(!1),
                    u = (0, c.Z)(d, 2),
                    m = u[0],
                    f = u[1];
                return p.useEffect((function() {
                    l.current || f(!0), l.current = !1
                }), [n.fields.visibility.value]), (0, o.Z)("div", {
                    className: "c-side-settings"
                }, void 0, (0, rn.w)(r, "org") ? r.isUploading ? null : "org" !== r.visibility ? (0, o.Z)("div", {
                    className: "c-side-settings__flex"
                }, void 0, (0, o.Z)(_.Z, {
                    size: "small",
                    type: "primary-inverted-border",
                    text: "view as team",
                    onClick: function() {
                        return v.Z.pushRoute.apply(v.Z, (0, a.Z)((0, g.IL)(r)))
                    },
                    "data-selenium": "see-model"
                }), (0, o.Z)(_.Z, {
                    size: "small",
                    type: "primary",
                    text: "view as ".concat(r.visibility),
                    href: r.viewerUrl,
                    "data-selenium": "see-model"
                })) : (0, o.Z)(_.Z, {
                    size: "small",
                    type: "primary",
                    text: "view model",
                    href: r.viewerUrl,
                    "data-selenium": "see-model"
                }) : p.createElement(p.Fragment, null, (0, o.Z)("div", {
                    className: "c-side-settings__flex"
                }, void 0, (0, o.Z)("div", {
                    className: "c-side-settings__status"
                }, void 0, "Status:", " ", (0, o.Z)("strong", {}, void 0, r.isUploading ? "Uploading" : r.isPublished ? "Published" : "Draft", " ")), r.isUploading ? null : (0, o.Z)(_.Z, {
                    size: "small",
                    type: "primary",
                    text: "view my model",
                    href: r.viewerUrl,
                    "data-selenium": "see-model"
                })), r.isUploading || r.isPublished ? null : (0, o.Z)(on.Z, {}, void 0, (function() {
                    return t || (t = (0, o.Z)(an.Z, {
                        model: r
                    }))
                }))), $t || ($t = (0, o.Z)("div", {
                    className: "c-side-settings__separator"
                })), p.createElement(x.Z, (0, i.Z)({}, n.fields.visibility, {
                    label: "Who can see?",
                    labelClassName: "c-model-properties__label",
                    isTouched: !0
                }), (0, o.Z)(nn.Z, {
                    models: [r],
                    form: n
                })), "protected" === n.fields.visibility.value ? p.createElement(x.Z, (0, i.Z)({}, n.fields.password, {
                    label: "Password"
                }), p.createElement(P.Z, (0, i.Z)({}, n.fields.password, {
                    autoFocus: m,
                    placeholder: "******",
                    border: !0,
                    type: "password"
                }))) : null, Wt || (Wt = (0, o.Z)("div", {
                    className: "c-side-settings__visibility-info-link"
                }, void 0, (0, o.Z)("a", {
                    className: "skfb-link",
                    href: "https://help.sketchfab.com/hc/en-us/articles/115000422206-Private-Models"
                }, void 0, "Learn about visibility settings ", (0, o.Z)("i", {
                    className: "help fa fa-question-circle"
                })))), (0, o.Z)("div", {
                    className: "c-side-settings__flex"
                }, void 0, (0, o.Z)("div", {
                    className: "c-model-properties__label"
                }, void 0, "Allow texture inspection", " ", (0, o.Z)(ce.Z, {
                    href: "".concat(Q.Z.hosts.faq, "/articles/115004862686-Inspector"),
                    message: "Allow people to inspect unwrapped textures in Model Inspector"
                })), p.createElement(te.Z, (0, i.Z)({
                    "data-selenium": "inspectable-checkbox"
                }, n.fields.isInspectable))), n.fields.isInspectable.hasError ? (0, o.Z)("p", {
                    className: "form-error"
                }, void 0, n.fields.isInspectable.error) : null, (0, o.Z)("div", {
                    className: "c-side-settings__flex"
                }, void 0, (0, o.Z)("div", {
                    className: "c-model-properties__label"
                }, void 0, "Age-restricted content", " ", (0, o.Z)(ce.Z, {
                    href: "".concat(Q.Z.hosts.faq, "/articles/214867883-What-is-Restricted-Content"),
                    message: p.createElement(p.Fragment, null, "Content that is not appropriate for all audiences, like nudity or suggestive content.", Xt || (Xt = (0, o.Z)("br", {})), "Click for content guidelines")
                })), p.createElement(te.Z, (0, i.Z)({
                    "data-selenium": "restricted-checkbox"
                }, n.fields.isRestricted))), n.fields.isRestricted.hasError ? (0, o.Z)("p", {
                    className: "form-error"
                }, void 0, n.fields.isRestricted.error) : null, Jt || (Jt = (0, o.Z)("div", {
                    className: "c-side-settings__separator"
                })), s && !r.isUploading && r.isDisabled ? p.createElement(p.Fragment, null, (0, o.Z)(Yt, {
                    sellerStatus: s.sellerStatus,
                    modelIsPrivate: (0, g.hv)(r.visibility),
                    disableInfo: s.disableInfo
                }), en || (en = (0, o.Z)("div", {
                    className: "c-side-settings__separator"
                }))) : null, "org" === n.data.visibility || r.isUploading || r.isDisabled && (0, g.hv)(r.visibility) || !s ? null : p.createElement(p.Fragment, null, tn || (tn = (0, o.Z)("div", {
                    className: "c-model-properties__label"
                }, void 0, "Download")), (0, o.Z)(sn, {
                    form: n,
                    model: r,
                    management: s
                })))
            }
            var cn, dn, un, pn, mn, vn, fn = n("PgVJ"),
                gn = n("1xsz"),
                hn = n("UnUI"),
                Zn = n("wExz");
            const bn = function(e) {
                var t = e.fileField,
                    n = e.allowed,
                    i = e.downloadTips,
                    a = e.hasChanged,
                    r = e.error,
                    s = e.isUploading,
                    l = ["application/zip", "application/x-7z-compressed", "application/x-rar-compressed"].join(","),
                    c = function() {
                        var e;
                        null === (e = document.getElementById("upfile")) || void 0 === e || e.click()
                    };
                return (0, o.Z)("span", {}, void 0, (0, o.Z)("div", {
                    className: fn.Z["c-extrafile"]
                }, void 0, (0, o.Z)("span", {
                    className: fn.Z.title
                }, void 0, "Attach additional file", (0, o.Z)(ce.Z, {
                    message: 'Additional File can only contain 3D files or other files that pertain to the 3D file itself, such as additional hi-res texture maps, additional file formats, model resolutions, "Read Me" documents, etc.',
                    className: fn.Z.help
                }), (0, o.Z)("span", {
                    className: fn.Z.subtitle
                }, void 0, "Accepted formats: ", [".zip", ".rar", ".7z"].join(", ")), (0, o.Z)("span", {
                    className: fn.Z.subtitle
                }, void 0, "Max size: ", (0, H.$B)(Q.Z.maxExtraArchiveSize)), n ? (0, o.Z)(_.Z, {
                    className: fn.Z.browse,
                    onClick: c,
                    text: "Upload file",
                    size: "small",
                    disabled: !n,
                    icon: cn || (cn = (0, o.Z)("i", {
                        title: "remove",
                        className: "fa fa-paperclip"
                    }))
                }) : (0, o.Z)("div", {
                    className: fn.Z.upgrade
                }, void 0, dn || (dn = (0, o.Z)(gn.Z, {
                    tooltipText: "Upgrade your plan to Pro or Enterprise to attach an extra archive.",
                    referer: "embed_popup"
                })))), (0, o.Z)("input", {
                    className: fn.Z["input-file"],
                    accept: l,
                    id: "upfile",
                    type: "file",
                    onChange: function(e) {
                        var n = e.target.files[0];
                        t.onChange && t.onChange(n)
                    }
                }), t.value && t.value.name ? (0, o.Z)("div", {
                    className: fn.Z["file-box"]
                }, void 0, (0, o.Z)("div", {
                    className: fn.Z.file
                }, void 0, r ? (0, o.Z)(ce.Z, {
                    message: r,
                    className: (0, h.AK)(fn.Z.statusIcon, fn.Z["--error"])
                }) : (0, o.Z)("span", {
                    className: fn.Z.statusIcon
                }, void 0, s ? un || (un = (0, o.Z)(Zn.Z, {})) : a ? pn || (pn = (0, o.Z)("i", {
                    className: "fa fa-arrow-up"
                })) : mn || (mn = (0, o.Z)("i", {
                    className: "fa fa-check"
                }))), (0, o.Z)("div", {
                    className: fn.Z["file-content"]
                }, void 0, (0, o.Z)("div", {}, void 0, t.value.name), (0, o.Z)("div", {
                    className: fn.Z["file-size"]
                }, void 0, (0, H.$B)(t.value.size))), (0, o.Z)("span", {
                    className: fn.Z.actions
                }, void 0, (0, o.Z)(hn.Z, {
                    hideArrow: !0,
                    menuAlign: "right",
                    labelTitle: (0, o.Z)("i", {
                        className: (0, h.AK)("fa fa-ellipsis-v", fn.Z.ellipsis)
                    })
                }, void 0, (function() {
                    return (0, o.Z)("ul", {}, void 0, n ? (0, o.Z)("li", {
                        onClick: c
                    }, void 0, (0, o.Z)("i", {
                        className: (0, h.AK)("fa fa-arrow-up", fn.Z["action-icon"])
                    }), " ", "Change file") : null, (0, o.Z)("li", {
                        onClick: function() {
                            return t.onChange(null)
                        }
                    }, void 0, (0, o.Z)("i", {
                        className: (0, h.AK)("fa fa-trash-o", fn.Z["action-icon"])
                    }), " ", "Delete"))
                }))))) : null, i ? (0, o.Z)("div", {
                    className: fn.Z.tips
                }, void 0, vn || (vn = (0, o.Z)("p", {}, void 0, "Change the model download setting to ", (0, o.Z)("u", {}, void 0, "Free"), " or ", (0, o.Z)("u", {}, void 0, "Store"), " to view the additional file."))) : null))
            };
            var wn = n("NDtu"),
                yn = ["uploading", "pending", "processing", "ready"],
                _n = function(e, t) {
                    return yn.indexOf(t) > yn.indexOf(e)
                };

            function kn(e) {
                var t = e.step,
                    n = e.isPublished,
                    i = e.isDatasmith,
                    a = (0, m.v9)(f.wl.authUser.canAccessFeature("ff_datasmith_pipeline"));
                return (0, o.Z)("div", {
                    className: "c-upload-status"
                }, void 0, (0, o.Z)("div", {
                    className: (0, h.AK)("c-upload-status__row", {
                        "--green": _n("uploading", t)
                    })
                }, void 0, (0, o.Z)("div", {
                    className: "c-upload-status__dot"
                }, void 0, _n("uploading", t) ? "✓" : "1"), (0, o.Z)("span", {
                    className: "c-upload-status__step-title"
                }, void 0, "uploading" === t ? "uploading" : "upload"), (0, o.Z)("span", {
                    className: "c-upload-status__step-status"
                }, void 0, _n("uploading", t) ? "Finished" : "")), (0, o.Z)("div", {
                    className: (0, h.AK)("c-upload-status__row", {
                        "--green": _n("processing", t),
                        "--grey": !_n("uploading", t)
                    })
                }, void 0, (0, o.Z)("div", {
                    className: "c-upload-status__dot"
                }, void 0, _n("processing", t) ? "✓" : "2"), (0, o.Z)("span", {
                    className: "c-upload-status__step-title"
                }, void 0, _n("uploading", t) && _n("pending", t) ? _n("processing", t) ? "processed" : "processing" : "Waiting to start"), (0, o.Z)("span", {
                    className: "c-upload-status__step-status"
                }, void 0, _n("processing", t) ? "Finished" : "processing" === t ? a ? "Your file is being processed by ".concat(i ? "Datasmith" : "Sketchfab") : "Our 3d elves are working hard…" : "")), (0, o.Z)("div", {
                    className: (0, h.AK)("c-upload-status__row", {
                        "--green": "ready" === t,
                        "--grey": "ready" !== t
                    })
                }, void 0, (0, o.Z)("div", {
                    className: "c-upload-status__dot"
                }, void 0, "ready" === t ? "✓" : "3"), (0, o.Z)("span", {
                    className: "c-upload-status__step-title"
                }, void 0, n ? "Published" : "Ready to publish")))
            }
            var Nn, Cn, Dn, xn = n("ULsr"),
                Pn = n("Oyie"),
                En = ["name", "downloadType", "price", "visibility", "password", "paidLicense", "freeLicense", "orgProject"];

            function Sn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function On(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Sn(Object(n), !0).forEach((function(t) {
                        (0, s.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Tn = (0, U.Z)(Ft),
                An = {
                    autostart: "0",
                    ui_inspector: "0"
                };

            function Ln(e) {
                var t = !e.isUploading && (0, g.Eu)(e),
                    n = !e.isUploading && (0, g.pe)(e);
                return e.isUploading ? "uploading" : n ? "pending" : t ? "processing" : "ready"
            }
            const Fn = Tn((function(e) {
                var t, s = e.model,
                    d = e.authUser,
                    k = e.management,
                    S = e.form,
                    O = e.onCancelUpload;
                ! function(e) {
                    var t = (0, E.Z)().History;
                    p.useEffect((function() {
                        if (e) return t.enableConfirmNavigation(),
                            function() {
                                t.disableConfirmNavigation()
                            }
                    }), [e, t])
                }(S.hasChanged);
                var T = p.useRef(null),
                    A = p.useRef(null),
                    L = (0, m.I0)(),
                    F = p.useState("save"),
                    R = (0, c.Z)(F, 2),
                    U = R[0],
                    z = R[1],
                    Q = (0, q.Z)((function(e) {
                        return e.Api.getCategories().then((function(e) {
                            return e.results.map((function(e) {
                                return {
                                    value: e.uid,
                                    title: e.name
                                }
                            }))
                        }))
                    }), [], []),
                    H = (0, c.Z)(Q, 1)[0],
                    Y = p.useState(s.isUploading),
                    $ = (0, c.Z)(Y, 2),
                    X = $[0],
                    ee = $[1];
                p.useEffect((function() {
                    X || ee(s.isUploading)
                }), [s, X]);
                var te = (0, m.v9)(f.wl.authUser.canAccessFeature("ff_datasmith_pipeline")),
                    ne = p.useContext(K.w).colors,
                    ie = function(e, t, i) {
                        var o = (0, m.I0)(),
                            a = (0, E.Z)().Popups,
                            r = p.useCallback((function(n) {
                                return C(i ? i.extraFile : null, e.fields.extraFile.value) ? e.fields.extraFile.value instanceof File ? o(f.Nw.models.updateExtraFile(t, e.fields.extraFile.value)).then((function() {
                                    return o(f.Nw.models.pollExtraFileProcessingStatus(t))
                                })) : o(f.Nw.models.removeExtraFile(t)) : Pn.resolve(void 0)
                            }), [o, e.fields.extraFile.value, i, t]),
                            s = p.useCallback((function(e) {
                                return o(f.Nw.models.update(t, e)).then((function() {
                                    e.license && o(f.Nw.models.pollVersions(t))
                                }))
                            }), [o, t]),
                            l = p.useCallback((function(t) {
                                if (console.error("submit error:", t), t instanceof we.p9);
                                else if (i && (o = t) && o.detail && o.detail.extraFile && o.detail.extraFile.some((function(e) {
                                        return e.match("file size is too big")
                                    }))) Pn.all([n.e(2852), n.e(3085)]).then(n.bind(n, "BcSh")).then((function(t) {
                                    new(0, t.default)({
                                        fileSize: e.fields.extraFile.value ? e.fields.extraFile.value.size : 0
                                    }).open(), e.fields.extraFile.onChange(i.extraFile)
                                }));
                                else {
                                    if ((0, we.Oe)(t)) return Pn.reject(t);
                                    a.loadMessagePopup().then((function(e) {
                                        return new e({
                                            title: "Error while saving settings",
                                            html: '\n                    An unexpected error occured while saving settings.\n                    <br>\n                    If the error persists, please contact our <a class="skfb-link" target="_blank" href="https://help.sketchfab.com/hc/requests/new?type=store_selling&utm_source=website&utm_campaign=download-manage-error">Support Team</a>.\n                ',
                                            renderButtons: function(e) {
                                                return [{
                                                    viewClass: (0, xn.Z)(_.Z),
                                                    options: {
                                                        key: "ok",
                                                        type: "tertiary",
                                                        text: "Ok",
                                                        onClick: function() {
                                                            return e.continue()
                                                        }
                                                    }
                                                }]
                                            }
                                        }).open()
                                    }))
                                }
                                var o;
                                return Pn.reject({})
                            }), [e.fields.extraFile, i]);
                        return {
                            extraFileUpload: (0, m.v9)((function(e) {
                                return f.wl.models.extraFileUpload(t, e)
                            })),
                            onUpdateArchive: r,
                            onUpdateModel: s,
                            onSaveError: l
                        }
                    }(S, s.isUploading ? "nouid" : s.uid, k),
                    oe = ie.extraFileUpload,
                    ae = ie.onUpdateArchive,
                    re = ie.onUpdateModel,
                    se = ie.onSaveError,
                    ce = (0, h.aj)("breakpointXSmall");
                p.useLayoutEffect((function() {
                    var e = T.current,
                        t = A.current;
                    if (!ce && e && A) {
                        var n = new window.IntersectionObserver((function(t) {
                            if (e && e.classList) {
                                var n, i = null == t || null === (n = t[0]) || void 0 === n ? void 0 : n.isIntersecting;
                                e.classList.toggle("--sticky", !i)
                            }
                        }));
                        return t && setTimeout((function() {
                                return n.observe(t)
                            })),
                            function() {
                                return n.disconnect()
                            }
                    }
                    e && e.classList.add("--sticky")
                }), [T, A, ce]);
                var ue = p.useCallback((function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.shouldPublish,
                            n = void 0 !== t && t;
                        if (!s.isUploading) {
                            var i = function(e) {
                                var t = e.name,
                                    n = e.downloadType,
                                    i = e.price,
                                    o = e.visibility,
                                    a = e.password,
                                    r = e.paidLicense,
                                    s = e.freeLicense,
                                    c = e.orgProject;
                                return On(On({}, (0, l.Z)(e, En)), {}, {
                                    orgProject: null == c ? void 0 : c.uid,
                                    name: (0, b.sanitize)(t),
                                    downloadType: n,
                                    price: "store" === n ? N(i) : null,
                                    password: "protected" === o && a !== Lt ? a : void 0,
                                    visibility: o,
                                    license: "store" === n ? r : "free" === n ? s : null
                                })
                            };
                            S.onSubmit(function() {
                                var e = (0, r.Z)(u().mark((function e(t) {
                                    var o, r;
                                    return u().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (e.prev = 0, !n) {
                                                    e.next = 6;
                                                    break
                                                }
                                                return e.next = 4, L(f.Nw.models.tryPublish(s.uid, i(t))).then((function(e) {
                                                    e.caseOf({
                                                        Left: function(e) {
                                                            throw e
                                                        },
                                                        Right: function() {}
                                                    })
                                                }));
                                            case 4:
                                                e.next = 10;
                                                break;
                                            case 6:
                                                return o = i(t), e.next = 9, re(o);
                                            case 9:
                                                o.name !== s.name && (r = (0, g.nR)({
                                                    slug: (0, b.slugify)(o.name),
                                                    uid: s.uid,
                                                    org: s.org
                                                }, {
                                                    silent: !0
                                                }), v.Z.replaceRoute.apply(v.Z, (0, a.Z)(r)));
                                            case 10:
                                                return e.next = 12, ae(t);
                                            case 12:
                                                e.next = 18;
                                                break;
                                            case 14:
                                                throw e.prev = 14, e.t0 = e.catch(0), se(e.t0), e.t0;
                                            case 18:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 14]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }())
                        }
                    }), [s, L, S, ae, re, se]),
                    pe = s.org ? s.org.uid : "",
                    me = (0, m.v9)(f.wl.authUser.getOrgRole(pe)),
                    ve = d.account && (0, w.Di)(d.account, "pro") || "store" === S.data.downloadType || !!s.org || d.isStaff,
                    ge = d.isStaff || me.caseOf({
                        Some: function(e) {
                            return (0, Z.oF)(e, "admin")
                        },
                        None: function() {
                            return !1
                        }
                    });
                if (d.isAnonymous) return null;
                var he, Ze = "no" !== S.data.downloadType && ("archives_broken" === (null == k ? void 0 : k.downloadStatus) || "source_blocked" === (null == k ? void 0 : k.downloadStatus)),
                    be = s.isUploading || S.hasErrors || !S.hasChanged || Ze,
                    ye = (0, g.qS)(s, On(On({}, s), {}, {
                        visibility: S.data.visibility,
                        price: void 0,
                        license: void 0,
                        downloadType: S.data.downloadType,
                        isPublished: !0
                    }), d),
                    _e = !s.isUploading && ye,
                    ke = !s.isUploading && (0, g.$y)(s),
                    Ne = (!s.isUploading && (0, g.Eu)(s), s.isUploading || Ze || !_e || "wrong_plan" === (null == k ? void 0 : k.disableInfo.type) && !(0, g.Ov)(k.disableInfo.requiredPlan, s) || (0, g.hv)(S.data.visibility) && !(0, g.Ov)("pro", s)),
                    Ce = "publish" === U && (S.isSubmitting || S.hasSucceeded),
                    De = "save" === U && (S.isSubmitting || S.hasSucceeded),
                    xe = "org" === S.data.visibility || s.isUploading || s.isPublished && !Ce,
                    Pe = !s.isUploading && "FAILED" === s.status.processing,
                    Ee = (0, g.Ov)("pro", s);
                return (0, o.Z)("form", {
                    className: "c-model-properties",
                    "data-selenium": "properties-form"
                }, void 0, (0, o.Z)("div", {
                    className: "c-model-properties__container g-container"
                }, void 0, (0, o.Z)("div", {
                    className: "c-model-properties__side --left"
                }, void 0, (0, o.Z)("div", {
                    className: "c-model-properties__viewer-container"
                }, void 0, Pe && !s.isUploading ? (0, o.Z)(B.Z, {
                    model: s,
                    type: "small"
                }) : p.createElement(p.Fragment, null, s.isUploading || ke ? Nn || (Nn = (0, o.Z)(I.Z, {})) : (0, o.Z)(M.Z, {
                    model: s,
                    embedOptions: An
                }), X ? (0, o.Z)(kn, {
                    isDatasmith: te && (0, y._)(s),
                    isPublished: !s.isUploading && s.isPublished,
                    step: Ln(s)
                }) : null), s.isUploading ? null : (0, o.Z)(Ut, {
                    hasChanged: S.hasChanged,
                    model: s
                }), te && (0, y.X)(s) ? Cn || (Cn = (0, o.Z)("div", {
                    className: "c-model-properties__processed-by"
                }, void 0, (0, o.Z)("i", {
                    className: "fa fa-cogs"
                }), (0, o.Z)("span", {}, void 0, "Processed by ", (0, o.Z)("span", {
                    className: "pipeline"
                }, void 0, "Datasmith")))) : null)), (0, o.Z)("div", {
                    className: "c-model-properties__center"
                }, void 0, p.createElement(x.Z, (0, i.Z)({
                    label: "Title",
                    labelClassName: "c-model-properties__label"
                }, S.fields.name), p.createElement(P.Z, (0, i.Z)({
                    border: !0
                }, S.fields.name, {
                    tabIndex: 0,
                    "aria-label": "Title",
                    "data-selenium": "model-name-input"
                }))), p.createElement(x.Z, (0, i.Z)({
                    label: "Description",
                    htmlFor: "description",
                    labelClassName: "c-model-properties__label",
                    "data-selenium": "model-description-input"
                }, S.fields.description), p.createElement(j, (0, i.Z)({}, S.fields.description, {
                    textAreaProps: {
                        id: "description"
                    },
                    label: "Markdown Description"
                }))), s.org && s.orgProject ? p.createElement(x.Z, (0, i.Z)({
                    label: "Location",
                    labelClassName: "c-model-properties__label",
                    "data-selenium": "model-project-dropdown"
                }, S.fields.orgProject), p.createElement(V.Z, (0, i.Z)({}, S.fields.orgProject, {
                    disabled: !ge,
                    className: "c-model-properties__folder-dropdown",
                    orgUid: s.org.uid,
                    onChange: function(e) {
                        return S.fields.orgProject.onChange(e)
                    }
                }))) : null, "org" !== S.data.visibility ? p.createElement(x.Z, (0, i.Z)({
                    label: "Categories",
                    labelClassName: "c-model-properties__label"
                }, S.fields.categories), p.createElement(D.Z, (0, i.Z)({}, S.fields.categories, {
                    color: ne.skfbBlue,
                    theme: "white-background",
                    className: "c-model-properties__categories-dropdown",
                    placeholder: "Select up to 2 categories",
                    options: H,
                    maxSelectedCount: 2,
                    "data-selenium": "model-categories-select"
                }))) : null, p.createElement(x.Z, (0, i.Z)({
                    labelClassName: "c-model-properties__label",
                    label: "Tags"
                }, S.fields.tags), p.createElement(wn.Z, (0, i.Z)({}, S.fields.tags, {
                    orgUid: null == s || null === (t = s.org) || void 0 === t ? void 0 : t.uid,
                    "data-selenium": "model-tags-input"
                }))), "public" === S.data.visibility ? (0, o.Z)(G, {
                    form: S.data
                }) : null), (0, o.Z)("div", {
                    className: "c-model-properties__side"
                }, void 0, (0, o.Z)(ln, {
                    management: k,
                    model: s,
                    form: S
                }), !s.isUploading && k && (0, g.Ov)("prem", s) ? (0, o.Z)(fe, {
                    form: S,
                    management: k,
                    model: s
                }) : null, (0, o.Z)(bn, {
                    fileField: S.fields.extraFile,
                    allowed: ve,
                    downloadTips: "no" === S.data.downloadType && !s.org,
                    error: S.errors.extraFile,
                    hasChanged: C(k ? k.extraFile : null, S.fields.extraFile.value),
                    isUploading: "uploading" === oe.type
                }), (0, o.Z)("div", {
                    className: "c-model-properties__own-download"
                }, void 0, s.isUploading || !k || "source_blocked" === k.downloadStatus ? null : Ee ? (0, o.Z)(W.U, {
                    archives: k.archivesDetails,
                    model: s
                }) : Dn || (Dn = (0, o.Z)(J, {}))))), p.createElement("div", {
                    className: "c-model-properties__footer",
                    ref: T
                }, (0, o.Z)("div", {
                    className: "g-container"
                }, void 0, s.isUploading ? null : (0, o.Z)(le.m, {
                    className: "c-model-properties__links",
                    authUser: d,
                    model: s
                }), (0, o.Z)("div", {
                    className: "c-model-properties__buttons c-model-properties__footer-right"
                }, void 0, s.isUploading && O ? (0, o.Z)(_.Z, {
                    size: "large",
                    type: "tertiary",
                    text: "Cancel",
                    onClick: O
                }) : null, (he = De ? (0, de.F)("Save", "saved", "saving...", S, oe) : {
                    text: "Save",
                    disabled: !1
                }, (0, o.Z)("div", {
                    className: "c-model-properties__actions"
                }, void 0, (0, o.Z)("span", {
                    className: "help"
                }, void 0, p.createElement(_.Z, (0, i.Z)({}, he, {
                    type: xe ? "important" : "primary",
                    size: "large",
                    "data-selenium": "save-button",
                    onClick: function() {
                        z("save"), ue()
                    },
                    disabled: he.disabled || be,
                    htmlType: "submit"
                })), S.hasSucceeded ? null : (0, o.Z)("div", {
                    className: "tooltip tooltip-up"
                }, void 0, S.hasChanged ? S.hasErrors ? Object.values(S.errors).filter(Boolean).join(".\n") : be ? "You can not save these changes to your model" : "Save changes to your model" : "There were no changes to the model")))), xe ? null : function() {
                    var e = (0, g.hv)(S.data.visibility) ? "".concat(S.hasChanged ? "Save & " : "", "Publish privately") : "".concat(S.hasChanged ? "Save & " : "", "Publish"),
                        t = Ce ? (0, de.F)(e, "Published", "Publishing...", S, oe) : {
                            disabled: !1,
                            text: e
                        };
                    return (0, o.Z)("span", {
                        className: "help"
                    }, void 0, p.createElement(_.Z, (0, i.Z)({}, t, {
                        "data-selenium": "publish",
                        type: "important",
                        size: "large",
                        disabled: t.disabled || ke || S.hasChanged && be || Ne,
                        onClick: function() {
                            z("publish"), ue({
                                shouldPublish: !0
                            })
                        }
                    })), (0, o.Z)("div", {
                        className: "tooltip tooltip-up"
                    }, void 0, s.isPublished ? "Your model was successfully published" : ke ? "You won't be able to publish this model until the processing has finished" : s.isUploading ? "Please wait until the model has finished uploading." : S.hasErrors ? Object.values(S.errors).filter(Boolean).join(".\n") : Ze ? "There was an issue processing your model. Please reprocess your model." : ye ? "wrong_plan" === (null == k ? void 0 : k.disableInfo.type) ? "This model is disabled because it uses features not supported by your current plan." : (0, g.hv)(S.data.visibility) && !(0, g.Ov)("pro", s) ? "You need at least a pro account to publish private models." : "protected" === S.data.visibility ? "Only people with password and link will have access. No notifications will be sent." : "private" === S.data.visibility ? "Only people with link will have access. No notifications will be sent." : s.org && "org" === S.data.visibility ? "Everyone in this project will have access." : "Everyone will have access. Followers will be notified." : "You need a credit to publish this model."))
                }()))), p.createElement("div", {
                    className: "c-model-properties__sentinel",
                    ref: A
                }))
            }))
        },
        EA64: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => a,
                O: () => r
            });
            var i = n("p5Lb"),
                o = n("X40V"),
                a = function(e, t, n, a, r) {
                    return {
                        text: a.hasSucceeded ? t : a.isSubmitting ? "uploading" === r.type ? "Upload in progress..." : n : e,
                        subtext: a.isSubmitting ? (s = r, "uploading" === s.type ? "".concat(Math.round(s.loaded / s.total * 100), "% — ").concat((0, i.$B)(s.loaded, !0), " / ").concat((0, i.$B)(s.total, !0)) : "") : "",
                        loading: a.isSubmitting,
                        success: a.hasSucceeded,
                        progress: "uploading" === r.type ? r.loaded / r.total : void 0,
                        disabled: a.hasErrors || a.isSubmitting,
                        style: !a.isSubmitting && a.hasSucceeded ? {
                            backgroundColor: o.O9.skfbBrightGreen,
                            opacity: 1,
                            cursor: "default",
                            pointerEvents: "none"
                        } : {}
                    };
                    var s
                },
                r = function(e) {
                    var t = e.find((function(e) {
                        return "gltf" === e.type
                    }));
                    if (t && t.exists && ("Processing" === t.status || "Pending" === t.status)) {
                        var n = e.find((function(e) {
                            return "usdz" === e.type
                        }));
                        n && (n.status = "Pending", n.exists = !0)
                    }
                    return e
                }
        },
        c2Jd: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var i, o = n("sQwH"),
                a = n("3Z9q"),
                r = n("mSEu");
            const s = function(e) {
                var t = e.model,
                    n = e.type,
                    s = void 0 === n ? "regular" : n,
                    l = {
                        10: "We do not support this file format",
                        11: "We do not recognize this file format",
                        13: "We could not read the model file, or there is no data to display",
                        20: "Something went wrong while reading the file",
                        21: "Something went wrong while processing textures",
                        31: "Something went wrong while processing materials",
                        33: "Something went wrong while processing materials",
                        50: "This model file is too complex (too many polygons, meshes, or textures)"
                    },
                    c = "?&utm_source=website&utm_campaign=upload_error&model=" + t.uid,
                    d = r.Z.hosts.faq + "/articles/218054783-Processing-Error-Codes" + c + "#" + t.status.code,
                    u = r.Z.hosts.faq + "/requests/new" + c + "&status=" + t.status.processing + "&reason=Error_" + t.status.code;
                return (0, o.Z)("div", {
                    className: "c-model-error"
                }, void 0, (0, o.Z)("div", {
                    className: "c-model-error__content"
                }, void 0, (0, o.Z)("div", {
                    className: "c-model-error__info"
                }, void 0, "small" === s ? (0, o.Z)("div", {
                    className: "c-model-error__info-type"
                }, void 0, "Error".concat(t.status.code ? " " + t.status.code : "", ": "), t.status.code && l[t.status.code] ? l[t.status.code] : "Something went wrong") : a.createElement(a.Fragment, null, i || (i = (0, o.Z)("h2", {
                    className: "c-model-error__info-title"
                }, void 0, "Processing Failed")), (0, o.Z)("div", {
                    className: "c-model-error__info-type"
                }, void 0, "Error".concat(t.status.code ? " " + t.status.code : "", ": "), t.status.code && l[t.status.code] ? l[t.status.code] : "Something went wrong"), (0, o.Z)("div", {
                    className: "c-model-error__info-help"
                }, void 0, (0, o.Z)("a", {
                    className: "button btn-primary btn-small",
                    href: "".concat(d),
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, void 0, "learn more"), (0, o.Z)("a", {
                    className: "button btn-contact btn-small",
                    href: "".concat(u),
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, void 0, "contact us"))))))
            }
        },
        h0W9: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                transferHelpUrl: () => $,
                default: () => te
            });
            var i, o, a, r, s, l, c, d, u, p, m, v, f, g, h = n("D4hk"),
                Z = n("xKIK"),
                b = n("Wch8"),
                w = n("sGMM"),
                y = n("sQwH"),
                _ = n("eLCO"),
                k = n.n(_),
                N = n("3Z9q"),
                C = n("mSEu"),
                D = n("YpOo"),
                x = n("IDtV"),
                P = n("hK4n"),
                E = n("e1Pq"),
                S = n("1bEe"),
                O = n("xtQ3"),
                T = n("Ug0r"),
                A = n("mwAa"),
                L = n("kN3w"),
                F = n("UzvP"),
                R = n("vAnt"),
                j = n("xIYY"),
                I = n("CfKk"),
                M = n("wExz"),
                U = n("RyS8"),
                K = n("X40V"),
                z = n("V4X4"),
                q = n("FbSi"),
                B = n("V29b"),
                V = n("I0q+"),
                Q = n("pgZm"),
                H = n("2bV5");

            function G(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function Y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? G(Object(n), !0).forEach((function(t) {
                        (0, Z.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var $ = "".concat(C.Z.hosts.faq, "/articles/360056541812"),
                W = {
                    org: function(e) {
                        var t, n, i = e.model;
                        return {
                            validators: [(0, S.C1)()],
                            initialValue: null !== (t = null === (n = i.org) || void 0 === n ? void 0 : n.uid) && void 0 !== t ? t : ""
                        }
                    },
                    orgProject: function() {
                        return {
                            validators: [(0, S.C1)("There is no project or folder selected.")],
                            initialValue: void 0
                        }
                    },
                    visibility: function() {
                        return {
                            validators: [(0, S.kw)(["public", "private", "protected", "org"])],
                            initialValue: "org"
                        }
                    },
                    password: function() {
                        return {
                            validators: [function(e, t) {
                                return e || "protected" !== t.visibility ? void 0 : "A password is required for visibility protected."
                            }],
                            initialValue: ""
                        }
                    }
                },
                X = function(e) {
                    var t = e.value,
                        n = e.onChange,
                        i = e.disabled,
                        o = e.filter,
                        a = void 0 === o ? function() {
                            return !0
                        } : o,
                        r = (0, B.Z)(),
                        s = r.list.filter(a);
                    N.useEffect((function() {
                        s.length && !t && n(s[0].org)
                    }), [s, t, n]);
                    var l = N.useMemo((function() {
                        return function(e) {
                            return e.map((function(e) {
                                return {
                                    value: e.org.uid,
                                    title: (0, y.Z)("div", {
                                        "data-selenium": "option-".concat(e.org.displayName),
                                        className: T.Z.orgSelectOption
                                    }, void 0, (0, y.Z)(V.Z, {
                                        alt: "avatar",
                                        avatars: e.org.avatars,
                                        size: 16
                                    }), (0, y.Z)("div", {}, void 0, e.org.displayName))
                                }
                            }))
                        }(s)
                    }), [s]);
                    return (0, y.Z)(A.U_, {
                        value: t,
                        onChange: function(e) {
                            var t = r.list.find((function(t) {
                                return t.org.uid === e
                            }));
                            t && n(t.org)
                        },
                        options: l,
                        pagination: r,
                        disabled: i
                    })
                },
                J = function(e) {
                    return (0, Q.oF)(e.role, "contributor")
                },
                ee = (0, O.Z)(W);
            const te = (0, x.Z)(ee((function(e) {
                var t = e.popup,
                    n = e.model,
                    _ = e.form,
                    C = e.onTransferModelSuccess,
                    x = void 0 === C ? function() {} : C,
                    S = N.useState(!1),
                    O = (0, w.Z)(S, 2),
                    A = O[0],
                    B = O[1],
                    V = (0, E.Z)().Api,
                    Q = (0, j.I0)(),
                    G = _.fields.org.value,
                    W = (0, j.v9)(I.wl.authUser.user),
                    ee = (0, q.Z)(G),
                    te = {
                        uid: G,
                        displayName: "",
                        avatars: {
                            uid: "",
                            images: []
                        },
                        username: "",
                        samlIdpName: ""
                    },
                    ne = N.useState(n.org || te),
                    ie = (0, w.Z)(ne, 2),
                    oe = ie[0],
                    ae = ie[1],
                    re = W.isStaff || "admin" === ee,
                    se = (0, F.Z)(G),
                    le = N.useCallback(function() {
                        var e = (0, b.Z)(k().mark((function e(t) {
                            return k().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        se.onReset(), se.onLoadFirst(), _.fields.orgProject.onChange(t);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [se, _.fields.orgProject.value]),
                    ce = ((0, H.Q)(G, le), N.useCallback((function(e) {
                        e.preventDefault(), _.onSubmit(function() {
                            var e = (0, b.Z)(k().mark((function e(i) {
                                var o, a, r, s, l, c, d;
                                return k().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (a = i.org, r = i.orgProject, s = i.visibility, l = i.password, c = null !== (o = null == r ? void 0 : r.uid) && void 0 !== o ? o : "", e.prev = 2, B(!0), !n.org) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.next = 7, Q(I.Nw.models.update(n.uid, {
                                                orgProject: c
                                            }));
                                        case 7:
                                            return e.next = 9, Q(I.Nw.orgs.invalidateESCache(/^\/i\/orgs\/\w*\/models.*/));
                                        case 9:
                                            e.next = 15;
                                            break;
                                        case 11:
                                            return e.next = 13, V.transferModel(n.uid, a, c, s, l);
                                        case 13:
                                            return e.next = 15, Q(I.Nw.orgs.invalidateESCache(/^\/i\/me\/models.*/));
                                        case 15:
                                            return e.next = 17, Q(I.Nw.messages.add({
                                                level: "success",
                                                type: "modelTransfer",
                                                model: Y(Y({}, n), {}, {
                                                    org: oe
                                                })
                                            }));
                                        case 17:
                                            B(!1), x(n.uid, c), t.continue(), e.next = 28;
                                            break;
                                        case 22:
                                            return e.prev = 22, e.t0 = e.catch(2), B(!1), d = (0, U.Oe)(e.t0) ? (0, U.wp)(e.t0) : "The model could not be ".concat(n.org ? "moved" : "transferred", ". Please try again later."), e.next = 28, Q(I.Nw.messages.add({
                                                level: "error",
                                                message: d
                                            }));
                                        case 28:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 22]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }())
                    }), [V, Q, _, n.uid, x, t]));
                return (0, y.Z)(D.Z, {
                    className: T.Z.transferPopup,
                    title: n.org ? "Move model" : "Transfer model",
                    onClose: function() {
                        return t.continue()
                    },
                    footer: N.createElement(N.Fragment, null, (0, y.Z)("a", {
                        className: T.Z.info,
                        href: $,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, void 0, i || (i = (0, y.Z)("i", {
                        className: "icon fa fa-info-circle"
                    })), o || (o = (0, y.Z)("div", {}, void 0, "about model transfer"))), (0, y.Z)("div", {
                        className: T.Z.actions
                    }, void 0, (0, y.Z)(R.Z, {
                        size: "medium",
                        type: "tertiary",
                        text: "Cancel",
                        onClick: function() {
                            return t.continue()
                        },
                        disabled: A
                    }), (0, y.Z)(R.Z, {
                        size: "medium",
                        type: "primary",
                        text: n.org ? "Move" : "Transfer",
                        onClick: ce,
                        disabled: _.hasErrors || A
                    })))
                }, void 0, (0, y.Z)("div", {
                    className: (0, K.AK)(T.Z.formContent, (0, Z.Z)({}, (0, K.c6)(T.Z, "loading"), se.isLoading))
                }, void 0, (0, y.Z)("div", {
                    className: T.Z.formFields
                }, void 0, n.org ? null : N.createElement(N.Fragment, null, a || (a = (0, y.Z)("div", {}, void 0, "Account")), N.createElement(X, (0, h.Z)({}, _.fields.org, {
                    onChange: function(e) {
                        _.onReset(), oe.uid !== e.uid && se.onReset(), _.fields.org.onChange(e.uid), ae(e)
                    },
                    disabled: A,
                    filter: J
                }))), r || (r = (0, y.Z)("div", {}, void 0, "Project")), G ? (0, y.Z)(L.Z, {
                    className: "c-project-select__dropdown",
                    value: _.fields.orgProject.value,
                    orgUid: G,
                    onChange: function(e) {
                        return _.fields.orgProject.onChange(e)
                    }
                }) : s || (s = (0, y.Z)("select", {})), l || (l = (0, y.Z)("div", {}, void 0, "Model visibility")), (0, y.Z)(P.Z, {
                    models: [Y(Y({}, n), {}, {
                        org: te
                    })],
                    form: _,
                    disabled: A
                }), "protected" === _.fields.visibility.value ? N.createElement(N.Fragment, null, c || (c = (0, y.Z)("div", {}, void 0, "Password")), N.createElement(z.Z, (0, h.Z)({}, _.fields.password, {
                    autoFocus: !0,
                    placeholder: "******",
                    border: !0,
                    type: "password",
                    disabled: A
                }))) : null), (0, y.Z)("div", {
                    className: (0, K.AK)(T.Z.formMessage, (0, Z.Z)({}, (0, K.c6)(T.Z, "warning"), _.hasErrors))
                }, void 0, A ? N.createElement(N.Fragment, null, d || (d = (0, y.Z)(M.Z, {})), (0, y.Z)("div", {}, void 0, (0, y.Z)("div", {}, void 0, (0, y.Z)("b", {}, void 0, "Model is being ", n.org ? "moved" : "transferred", ".")), u || (u = (0, y.Z)("div", {}, void 0, "You can close this window while you wait.")))) : 0 === se.list.length ? N.createElement(N.Fragment, null, p || (p = (0, y.Z)("i", {
                    className: "icon fa fa-exclamation-triangle"
                })), (0, y.Z)("div", {}, void 0, "There is no project available to move your model.", m || (m = (0, y.Z)("br", {})), re ? "Please create a project" : "Ask your organization admin to create a project.")) : _.hasErrors ? N.createElement(N.Fragment, null, v || (v = (0, y.Z)("i", {
                    className: "icon fa fa-exclamation-triangle"
                })), (0, y.Z)("div", {}, void 0, Object.values(_.errors).filter(Boolean).join(".\n"))) : n.org ? null : N.createElement(N.Fragment, null, f || (f = (0, y.Z)("i", {
                    className: "icon fa fa-info-circle"
                })), g || (g = (0, y.Z)("div", {}, void 0, "Please note that the transfer of a model to an organization cannot be canceled."))))))
            })))
        },
        qpAZ: (e, t, n) => {
            n("jX4j"), (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["skfb_front/popups/missing-webgl.jinja"] = {
                b_popup_content: function(e, t, n, i, o) {
                    var a = "";
                    try {
                        n = n.push(!0), o(null, a += '\n\n    Sorry, your browser is not compatible with the 3D settings editor. <br>\n    Please use a WebGL-enabled browser to edit your 3D settings. <br>\n    See the <a href="https://help.sketchfab.com/hc/en-us/articles/203059088-Compatibility?utm_source=website&utm_campaign=error_webgl" target="_blank" rel="noopener noreferrer">Help Center</a> for more information.\n\n')
                    } catch (e) {
                        o(i.handleError(e, null, null))
                    }
                },
                b_popup_footer: function(e, t, n, i, o) {
                    var a = "";
                    try {
                        n = n.push(!0), a += '\n    <div class="actions">\n\n    <button class="button btn-medium btn-primary submit" type="submit">', a += i.suppressValue(e.getFilter("default").call(t, i.memberLookup(i.contextOrFrameLookup(t, n, "buttons"), "okLabel"), "OK"), e.opts.autoescape), o(null, a += "</button>\n\n    </div>\n")
                    } catch (e) {
                        o(i.handleError(e, null, null))
                    }
                },
                root: function(e, t, n, i, o) {
                    var a = "";
                    try {
                        var r = null;
                        e.getTemplate("skfb_front/layouts/popup.jinja", !0, "skfb_front/popups/missing-webgl.jinja", !1, (function(s, l) {
                            if (s) o(s);
                            else {
                                for (var c in (r = l).blocks) t.addBlock(c, r.blocks[c]);
                                var d, u;
                                a += "\n\n", d = "Compatibility error", n.set("popupTitle", d, !0), n.topLevel && t.setVariable("popupTitle", d), n.topLevel && t.addExport("popupTitle", d), a += "\n", u = "popup-message", n.set("popupClass", u, !0), n.topLevel && t.setVariable("popupClass", u), n.topLevel && t.addExport("popupClass", u), a += "\n\n", (r ? function(e, t, n, i, o) {
                                    o("")
                                } : t.getBlock("popup_content"))(e, t, n, i, (function(s, l) {
                                    s ? o(s) : (a += l, a += "\n\n", (r ? function(e, t, n, i, o) {
                                        o("")
                                    } : t.getBlock("popup_footer"))(e, t, n, i, (function(s, l) {
                                        s ? o(s) : (a += l, a += "\n", r ? r.rootRenderFunc(e, t, n, i, o) : o(null, a))
                                    })))
                                }))
                            }
                        }))
                    } catch (e) {
                        o(i.handleError(e, null, null))
                    }
                }
            }
        },
        ng3c: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            const i = function(e) {
                var t = e || {};
                return window.location && window.location.hash ? (window.location.hash.substr(1).split(",").forEach((function(e) {
                    var n = e.split("="),
                        i = n[0],
                        o = n[1];
                    if ("debug3d" === i && (t.debug3D = !0), "stats" === i && (t.stats = !0), "inspector" === i && (t.inspector = !0), i.match("material_")) switch (i = i.substr(9)) {
                        case "showcase":
                            t.materialShowcase = void 0 === o ? t.materialShowcase : "0" !== o;
                            break;
                        case "names":
                            t.materialNames = o;
                            break;
                        case "normal":
                            t.materialNormal = o;
                            break;
                        case "emissive":
                            t.materialEmissive = o;
                            break;
                        case "transparency":
                            t.materialTransparency = o;
                            break;
                        case "diffuse":
                            t.materialDiffuse = o;
                            break;
                        case "metalness":
                            t.materialMetalness = o;
                            break;
                        case "roughness":
                            t.materialRoughness = o;
                            break;
                        case "glossiness":
                            t.materialGlossiness = o;
                            break;
                        case "specular":
                            t.materialSpecular = o;
                            break;
                        case "cavity":
                            t.materialCavity = o;
                            break;
                        case "f0":
                            t.materialF0 = o;
                            break;
                        case "ao":
                            t.materialAO = o;
                            break;
                        case "displacement":
                            t.materialDisplacement = o;
                            break;
                        case "displacement_factor":
                            t.materialDisplacementFactor = void 0 === o ? t.materialDisplacementFactor : Number(o)
                    }
                })), t) : t
            }
        },
        MQQR: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var i, o = n("mSEu"),
                a = n("43iM"),
                r = n("a261"),
                s = n("ejdl"),
                l = n("WGQk"),
                c = n("JBVY"),
                d = n("ng3c"),
                u = n("z1JG"),
                p = n("JueD"),
                m = n("eKF4"),
                v = function(e) {
                    if (null != e) return "+Infinity" === e || "Infinity" === e ? 1 / 0 : "-Infinity" === e ? -1 / 0 : e
                };
            const f = function() {
                if (i) return i;
                if (window.prefetchedData.embedOptions)
                    for (var e in i = window.prefetchedData.embedOptions) i[e] = v(i[e]);
                else i = function() {
                    var e = {};
                    for (var t in r) {
                        var n = r[t],
                            i = v(n.defaultValue),
                            o = void 0;
                        if (void 0 !== n.alias)
                            for (var s in n.alias)
                                if (void 0 !== (o = c.ZP[n.type](s))) break;
                        e[(0, a.Z)(t)] = void 0 !== o ? o : c.ZP[n.type](t, i)
                    }
                    return e
                }();
                try {
                    m.Z.me().get("isStaff") && void 0 === i.webgl2 && (i.webgl2 = !0)
                } catch (e) {
                    console.warn("Prefetching failure while trying to reach User.me(). This is probably because this code has been run in a non web context where prefetchdata are unusable.")
                }
                if (i.apiId = c.ZP.string("api_id", void 0), i.uiInspector) {
                    var t = (0, s.$u)();
                    i.uiInspector = -1 === o.Z.competitorDomains.indexOf(t)
                }
                i.annotationCycleAutostart = void 0 !== i.annotationCycle, i.annotationCycleDuration = 5e3, void 0 !== i.annotationCycle && (i.annotationCycleDuration = 1e3 * i.annotationCycle, delete i.annotationCycle), (i.cardboard || i.annotation || (0, l.Z)()) && (i.camera = !1), i.stats && (i.continuousRender = !0), i.processOptions && (0, u.Z)(!0), i.processOptions && (i.processMaterial = !0), i.stats && (i.webglTimerGpu = !1);
                var n = (!i.apiVersion || "1.1.0" === i.apiVersion) && !i.materialShowcase,
                    f = !(0, u.Z)() && !(0, l.Z)() && n;
                return void 0 === i.mergeMaterials && (i.mergeMaterials = f), void 0 === i.graphOptimizer && (i.graphOptimizer = f), void 0 === i.materialPacking && (i.materialPacking = n), void 0 === i.imageCompression && (i.imageCompression = !(0, l.Z)()), i.shadowAtlas = i.shadowAtlas && !(0, l.Z)(), navigator && /OculusBrowser/i.test(navigator.userAgent) && (/Quest/i.test(navigator.userAgent) && (i.taa = 0), void 0 === i.vrQuality && (/Quest/i.test(navigator.userAgent) && (i.vrQuality = 1.5), console.log("forcing VR quality to", i.vrQuality))), void 0 !== i.vrQuality && (i.vrScaleRtt = 1, i.maxDevicePixelRatio = i.vrQuality), (0, p.Z)(i.maxDevicePixelRatio), void 0 === i.drsMin && (i.drsMin = 1 / (0, p.Z)()), i.sssKernel % 2 == 0 && i.sssKernel++, i.sssHalfKernel = 1 + (i.sssKernel >> 1), (0, d.Z)(i), void 0 === i.zz && (i.zz = !(0, l.Z)()), void 0 === i.forceTriangles && (i.forceTriangles = -1 !== navigator.userAgent.indexOf("Firefox/62.0")), i
            }
        },
        JueD: (e, t, n) => {
            "use strict";
            var i;
            n.d(t, {
                Z: () => o
            });
            const o = function(e) {
                if (i) return i;
                if (void 0 !== e) {
                    var t = e,
                        n = window.devicePixelRatio || 1;
                    return i = -1 !== t ? Math.min(t, n) : n
                }
                return console.warn("getPixelRatio call before getOptions() "), 1
            }
        },
        z1JG: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var i = !1;
            const o = function(e) {
                return void 0 !== e && (i = e), i
            }
        },
        i2hM: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            for (var i, o, a = n("Hjnd"), r = n.n(a), s = {
                    bold: "**",
                    code: "```",
                    italic: "*",
                    quote: "> ",
                    "unordered-list": "* ",
                    "ordered-list": "1. "
                }, l = ["[", "](#url#)"], c = ["![", "](#url#)"], d = /Mac/.test(navigator.platform), u = [].concat([{
                    action: "toggleBold",
                    shortcut: "Cmd-B",
                    title: "Bold",
                    icon: "fa-bold"
                }, {
                    action: "toggleItalic",
                    shortcut: "Cmd-I",
                    title: "Italic",
                    icon: "fa-italic"
                }, {
                    action: "drawLink",
                    shortcut: "Cmd-K",
                    title: "Link",
                    icon: "fa-link"
                }, {
                    action: "toggleHeading",
                    shortcut: "Cmd-H",
                    title: "Heading",
                    icon: "fa-header"
                }, {
                    action: "drawImage",
                    shortcut: "Cmd-Alt-I",
                    title: "Insert Image",
                    icon: "fa-picture-o"
                }, {
                    action: "toggleBlockquote",
                    shortcut: "Cmd-'",
                    title: "Quote",
                    icon: "fa-quote-left"
                }, {
                    action: "toggleOrderedList",
                    shortcut: "Cmd-Alt-L",
                    title: "Numbered List",
                    icon: "fa-list-ol"
                }, {
                    action: "toggleUnorderedList",
                    shortcut: "Cmd-L",
                    title: "Generic List",
                    icon: "fa-list-ul"
                }]), p = "", m = {}, v = {
                    initializeToolbar: function(e) {
                        var t, n = (new DOMParser).parseFromString((t = p, '<div class="editor-toolbar">' + t + "</div>"), "text/html").body.firstChild;
                        return r()(n).on("mousedown", "[data-action]", function(e) {
                            e.stopImmediatePropagation(), e.preventDefault(), this[e.currentTarget.getAttribute("data-action")]()
                        }.bind(this)), r()(e.container).prepend(n), n
                    },
                    getEditor: function() {
                        return this.__editorInstance
                    },
                    setEditor: function(e) {
                        this.__editorInstance = e
                    },
                    getShortcuts: function() {
                        return m
                    },
                    getMarkdownEditorValue: function() {
                        var e = this.getEditor();
                        return e ? e.getValue() : ""
                    },
                    toggleBold: function() {
                        this._toggleBlock("bold", s.bold)
                    },
                    toggleItalic: function() {
                        this._toggleBlock("italic", s.italic)
                    },
                    toggleHeading: function() {
                        this._toggleHeading()
                    },
                    toggleBlockquote: function() {
                        this._toggleLine("quote")
                    },
                    toggleOrderedList: function() {
                        this._toggleLine("ordered-list")
                    },
                    toggleUnorderedList: function() {
                        this._toggleLine("unordered-list")
                    },
                    drawLink: function() {
                        var e = this._getCodemirrorState();
                        this._replaceSelection(e.link, l, "http://")
                    },
                    drawImage: function() {
                        var e = this._getCodemirrorState();
                        this._replaceSelection(e.image, c, "http://")
                    },
                    _getCodemirrorState: function(e) {
                        var t = this.getEditor();
                        e = e || t.getCursor("start");
                        var n = t.getTokenAt(e);
                        if (!n.type) return {};
                        for (var i, o, a = n.type.split(" "), r = {}, s = 0; s < a.length; s++) "strong" === (i = a[s]) ? r.bold = !0 : "variable-2" === i ? (o = t.getLine(e.line), /^\s*\d+\.\s/.test(o) ? r["ordered-list"] = !0 : r["unordered-list"] = !0) : "atom" === i ? r.quote = !0 : "em" === i ? r.italic = !0 : "quote" === i ? r.quote = !0 : "strikethrough" === i ? r.strikethrough = !0 : "comment" === i ? r.code = !0 : "link" === i ? r.link = !0 : "tag" === i ? r.image = !0 : i.match(/^header(\-[1-6])?$/) && (r[i.replace("header", "heading")] = !0);
                        return r
                    },
                    _toggleBlock: function(e, t, n) {
                        if (!/editor-preview-active/.test(this.getEditor().getWrapperElement().lastChild.className)) {
                            n = void 0 === n ? t : n;
                            var i, o = this.getEditor(),
                                a = this._getCodemirrorState(),
                                r = t,
                                s = n,
                                l = o.getCursor("start"),
                                c = o.getCursor("end");
                            a[e] ? (r = (i = o.getLine(l.line)).slice(0, l.ch), s = i.slice(l.ch), "bold" === e ? (r = r.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/, ""), s = s.replace(/(\*\*|__)/, "")) : "italic" === e ? (r = r.replace(/(\*|_)(?![\s\S]*(\*|_))/, ""), s = s.replace(/(\*|_)/, "")) : "strikethrough" === e && (r = r.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/, ""), s = s.replace(/(\*\*|~~)/, "")), o.replaceRange(r + s, {
                                line: l.line,
                                ch: 0
                            }, {
                                line: l.line,
                                ch: 99999999999999
                            }), "bold" === e || "strikethrough" === e ? (l.ch -= 2, l !== c && (c.ch -= 2)) : "italic" === e && (l.ch -= 1, l !== c && (c.ch -= 1))) : (i = o.getSelection(), "bold" === e ? i = (i = i.split("**").join("")).split("__").join("") : "italic" === e ? i = (i = i.split("*").join("")).split("_").join("") : "strikethrough" === e && (i = i.split("~~").join("")), o.replaceSelection(r + i + s), l.ch += t.length, c.ch = l.ch + i.length), o.setSelection(l, c), o.focus()
                        }
                    },
                    _toggleHeading: function() {
                        var e = this.getEditor();
                        if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) {
                            for (var t = e.getCursor("start"), n = e.getCursor("end"), i = t.line; i <= n.line; i++) ! function(t) {
                                var n = e.getLine(t),
                                    i = n.search(/[^#]/);
                                n = i <= 0 ? "# " + n : 6 === i ? n.substr(7) : "#" + n, e.replaceRange(n, {
                                    line: t,
                                    ch: 0
                                }, {
                                    line: t,
                                    ch: 99999999999999
                                })
                            }(i);
                            e.focus()
                        }
                    },
                    _toggleLine: function(e) {
                        var t = this.getEditor();
                        if (!/editor-preview-active/.test(t.getWrapperElement().lastChild.className)) {
                            for (var n = this._getCodemirrorState(), i = t.getCursor("start"), o = t.getCursor("end"), a = {
                                    quote: /^(\s*)\>\s+/,
                                    "unordered-list": /^(\s*)(\*|\-|\+)\s+/,
                                    "ordered-list": /^(\s*)\d+\.\s+/
                                }, r = i.line; r <= o.line; r++) ! function(i) {
                                var o = t.getLine(i);
                                o = n[e] ? o.replace(a[e], "$1") : s[e] + o, t.replaceRange(o, {
                                    line: i,
                                    ch: 0
                                }, {
                                    line: i,
                                    ch: 99999999999999
                                })
                            }(r);
                            t.focus()
                        }
                    },
                    _replaceSelection: function(e, t, n) {
                        var i = this.getEditor();
                        if (!/editor-preview-active/.test(i.getWrapperElement().lastChild.className)) {
                            var o, a = t[0],
                                r = t[1],
                                s = i.getCursor("start"),
                                l = i.getCursor("end");
                            n && (r = r.replace("#url#", n)), e ? (a = (o = i.getLine(s.line)).slice(0, s.ch), r = o.slice(s.ch), i.replaceRange(a + r, {
                                line: s.line,
                                ch: 0
                            })) : (o = i.getSelection(), i.replaceSelection(a + o + r), s.ch += a.length, s !== l && (l.ch += a.length)), i.setSelection(s, l), i.focus()
                        }
                    },
                    _tabAndIndentMarkdownList: function(e) {
                        var t = e.listSelections()[0].head;
                        if (!1 !== e.getStateAfter(t.line).list) e.execCommand("indentMore");
                        else if (e.options.indentWithTabs) e.execCommand("insertTab");
                        else {
                            var n = Array(e.options.tabSize + 1).join(" ");
                            e.replaceSelection(n)
                        }
                    },
                    _shiftTabAndUnindentMarkdownList: function(e) {
                        var t = e.listSelections()[0].head;
                        if (!1 !== e.getStateAfter(t.line).list) e.execCommand("indentLess");
                        else if (e.options.indentWithTabs) e.execCommand("insertTab");
                        else {
                            var n = Array(e.options.tabSize + 1).join(" ");
                            e.replaceSelection(n)
                        }
                    }
                }, f = 0; f < u.length; f++) u[f].action && v[u[f].action] && (p += '<a title="' + (o = u[f]).title + " (" + o.shortcut + ')" data-action="' + o.action + '" tabindex="-1" class="fa ' + o.icon + '"></a>', m[(i = u[f].shortcut, d ? i.replace("Ctrl", "Cmd") : i.replace("Cmd", "Ctrl"))] = function(e) {
                return v[e.action]()
            }.bind(v, u[f]));
            m.Enter = "newlineAndIndentContinueMarkdownList", m.Tab = v._tabAndIndentMarkdownList.bind(v), m["Shift-Tab"] = v._shiftTabAndUnindentMarkdownList.bind(v);
            const g = v
        }
    }
]);