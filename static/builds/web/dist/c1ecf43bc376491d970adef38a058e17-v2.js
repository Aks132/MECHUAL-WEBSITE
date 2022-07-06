"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [986], {
        "1bEe": (n, t, e) => {
            e.d(t, {
                Ei: () => o,
                BS: () => f,
                kE: () => s,
                C1: () => a,
                Oi: () => h,
                Rx: () => b,
                VV: () => d,
                Fp: () => l,
                kw: () => g,
                Do: () => m,
                Ml: () => v,
                dg: () => S,
                FA: () => k
            });
            var r = e("RYQm"),
                u = e("X40V"),
                i = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,15}$/i;
            var c = function(n) {
                return !1 === n || null == n || "string" == typeof n && "" === n.trim()
            };

            function o(n, t) {
                return function(e) {
                    if (!c(e) && e.length < n) return t || "Must be at least " + n + " characters"
                }
            }

            function f(n, t) {
                return function(e) {
                    if (!c(e) && e.length > n) return t || "Must be no more than " + n + " characters"
                }
            }

            function s(n, t) {
                return function(e) {
                    if (!c(e) && e.length !== n) return t || "Must contain exactly " + n + " characters"
                }
            }

            function a() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "This field is required";
                return function(t) {
                    return c(t) ? n : ""
                }
            }

            function h(n, t) {
                return function(e) {
                    if (!c(e) && !n.test(e)) return t || "Do not match the the regular expression"
                }
            }

            function b(n) {
                return function(t) {
                    if (String(Number(t)) !== t) return n || "Must be an number"
                }
            }

            function d(n, t) {
                return function(e) {
                    if (!isNaN(Number(e)) && Number(e) < n) return t || "Must be at least " + n
                }
            }

            function l(n, t) {
                return function(e) {
                    if (!isNaN(Number(e)) && Number(e) > n) return t || "Must be no more than " + n
                }
            }

            function g(n, t) {
                return function(e) {
                    if (!(0, r.Z)(n, e)) return t || "Must be one of: " + n.join(", ")
                }
            }

            function m(n) {
                return function(t) {
                    if (!c(t) && !i.test(t)) return n || "Invalid email address"
                }
            }

            function v(n, t) {
                return function(e, r) {
                    if (n(e, r)) return function(n, t, e) {
                        return n.reduce((function(n, r) {
                            return n || r(t, e)
                        }), "")
                    }(t, e, r)
                }
            }

            function S(n, t) {
                return function(e) {
                    if (e && e.size > n) return t
                }
            }
            var k = function(n) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Save",
                    e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Saved",
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Saving...";
                return {
                    text: n.hasSucceeded ? e : n.isSubmitting ? r : t,
                    loading: n.isSubmitting,
                    success: n.hasSucceeded,
                    disabled: n.hasErrors || n.isSubmitting,
                    style: !n.isSubmitting && n.hasSucceeded ? {
                        backgroundColor: u.O9.skfbBrightGreen,
                        opacity: 1,
                        cursor: "default",
                        pointerEvents: "none"
                    } : {}
                }
            }
        }
    }
]);