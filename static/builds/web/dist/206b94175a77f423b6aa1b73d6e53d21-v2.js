/*! For license information please see 206b94175a77f423b6aa1b73d6e53d21-v2.js.LICENSE.txt */
"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [9220], {
        "VyA/": (e, t) => {
            var r = 60103,
                n = 60106,
                o = 60107,
                c = 60108,
                a = 60114,
                s = 60109,
                f = 60110,
                u = 60112,
                i = 60113,
                l = 60120,
                p = 60115,
                y = 60116,
                m = 60121,
                $ = 60122,
                d = 60117,
                b = 60129,
                h = 60131;
            if ("function" == typeof Symbol && Symbol.for) {
                var w = Symbol.for;
                r = w("react.element"), n = w("react.portal"), o = w("react.fragment"), c = w("react.strict_mode"), a = w("react.profiler"), s = w("react.provider"), f = w("react.context"), u = w("react.forward_ref"), i = w("react.suspense"), l = w("react.suspense_list"), p = w("react.memo"), y = w("react.lazy"), m = w("react.block"), $ = w("react.server.block"), d = w("react.fundamental"), b = w("react.debug_trace_mode"), h = w("react.legacy_hidden")
            }

            function C(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case r:
                            switch (e = e.type) {
                                case o:
                                case a:
                                case c:
                                case i:
                                case l:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case f:
                                        case u:
                                        case y:
                                        case p:
                                        case s:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case n:
                            return t
                    }
                }
            }
            var k = s,
                v = r,
                S = u,
                g = o,
                x = y,
                M = p,
                P = n,
                _ = a,
                F = c,
                j = i;
            t.ContextConsumer = f, t.ContextProvider = k, t.Element = v, t.ForwardRef = S, t.Fragment = g, t.Lazy = x, t.Memo = M, t.Portal = P, t.Profiler = _, t.StrictMode = F, t.Suspense = j, t.isAsyncMode = function() {
                return !1
            }, t.isConcurrentMode = function() {
                return !1
            }, t.isContextConsumer = function(e) {
                return C(e) === f
            }, t.isContextProvider = function(e) {
                return C(e) === s
            }, t.isElement = function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
            }, t.isForwardRef = function(e) {
                return C(e) === u
            }, t.isFragment = function(e) {
                return C(e) === o
            }, t.isLazy = function(e) {
                return C(e) === y
            }, t.isMemo = function(e) {
                return C(e) === p
            }, t.isPortal = function(e) {
                return C(e) === n
            }, t.isProfiler = function(e) {
                return C(e) === a
            }, t.isStrictMode = function(e) {
                return C(e) === c
            }, t.isSuspense = function(e) {
                return C(e) === i
            }, t.isValidElementType = function(e) {
                return "string" == typeof e || "function" == typeof e || e === o || e === a || e === b || e === c || e === i || e === l || e === h || "object" == typeof e && null !== e && (e.$$typeof === y || e.$$typeof === p || e.$$typeof === s || e.$$typeof === f || e.$$typeof === u || e.$$typeof === d || e.$$typeof === m || e[0] === $)
            }, t.typeOf = C
        },
        lmwt: (e, t, r) => {
            e.exports = r("VyA/")
        }
    }
]);