"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [3642], {
        ayc9: (e, t, r) => {
            var p = r("lmwt"),
                o = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                s = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                y = {};

            function c(e) {
                return p.isMemo(e) ? s : y[e.$$typeof] || o
            }
            y[p.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, y[p.Memo] = s;
            var n = Object.defineProperty,
                f = Object.getOwnPropertyNames,
                i = Object.getOwnPropertySymbols,
                l = Object.getOwnPropertyDescriptor,
                m = Object.getPrototypeOf,
                u = Object.prototype;
            e.exports = function e(t, r, p) {
                if ("string" != typeof r) {
                    if (u) {
                        var o = m(r);
                        o && o !== u && e(t, o, p)
                    }
                    var s = f(r);
                    i && (s = s.concat(i(r)));
                    for (var y = c(t), d = c(r), b = 0; b < s.length; ++b) {
                        var g = s[b];
                        if (!(a[g] || p && p[g] || d && d[g] || y && y[g])) {
                            var O = l(r, g);
                            try {
                                n(t, g, O)
                            } catch (e) {}
                        }
                    }
                }
                return t
            }
        }
    }
]);