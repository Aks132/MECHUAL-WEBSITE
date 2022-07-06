"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [2067], {
        vAnt: (e, s, t) => {
            t.d(s, {
                Z: () => Z
            });
            var n, a, c = t("sQwH"),
                o = t("3MRe"),
                l = t("D4hk"),
                i = t("3Z9q"),
                r = t("X40V"),
                d = t("wExz"),
                u = t("lMO9"),
                b = ["subtext", "text", "onClick", "icon", "size", "type", "className", "iconClassName", "disabled", "loading", "success", "progress", "htmlType", "children"],
                m = i.forwardRef((function(e, s) {
                    return e.href && !e.disabled ? i.createElement("a", (0, l.Z)({
                        ref: s
                    }, e)) : i.createElement("button", (0, l.Z)({
                        ref: s
                    }, e))
                }));
            const Z = i.forwardRef((function(e, s) {
                var t = e.subtext,
                    Z = e.text,
                    f = e.onClick,
                    p = e.icon,
                    v = e.size,
                    h = void 0 === v ? "medium" : v,
                    k = e.type,
                    N = void 0 === k ? "primary" : k,
                    _ = e.className,
                    g = void 0 === _ ? "" : _,
                    w = e.iconClassName,
                    y = void 0 === w ? "" : w,
                    x = e.disabled,
                    C = void 0 !== x && x,
                    M = e.loading,
                    E = void 0 !== M && M,
                    z = e.success,
                    A = void 0 !== z && z,
                    H = e.progress,
                    K = e.htmlType,
                    O = e.children,
                    Q = (0, o.Z)(e, b),
                    R = C || E;
                return i.createElement(m, (0, l.Z)({
                    ref: s
                }, Q, {
                    type: K,
                    className: (0, r.AK)("button", "btn-".concat(N), "btn-".concat(h), g, {
                        "btn-loading": E,
                        "btn-disabled": R
                    }),
                    disabled: R,
                    onClick: function(e) {
                        !R && f && f(e)
                    }
                }), A ? n || (n = (0, c.Z)(u.Z, {})) : E ? a || (a = (0, c.Z)(d.Z, {})) : p ? (0, c.Z)("span", {
                    className: "icon"
                }, void 0, p) : y ? (0, c.Z)("span", {
                    className: (0, r.AK)("icon ", y)
                }) : null, (0, c.Z)("span", {
                    className: "button__text-container"
                }, void 0, Z, t ? (0, c.Z)("span", {
                    className: "button__subtext"
                }, void 0, t) : null), O, E && void 0 !== H ? (0, c.Z)("span", {
                    className: "button__progress",
                    style: {
                        width: 100 * H + "%"
                    }
                }) : null)
            }))
        },
        lMO9: (e, s, t) => {
            t.d(s, {
                Z: () => c
            });
            var n = t("sQwH"),
                a = (t("3Z9q"), t("KDlt"));
            t("bOQc");
            const c = function() {
                return (0, n.Z)("div", {
                    className: "check",
                    dangerouslySetInnerHTML: {
                        __html: a.Z.getFromMacro("skfb_front/macros/logo", "spinner_check", [])
                    }
                })
            }
        }
    }
]);