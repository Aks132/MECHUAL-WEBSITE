/*! For license information please see 97d8d0947da0b59f637669dde05d5f43-v2.js.LICENSE.txt */
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [9415], {
        ggVz: function(e, r) {
            ! function(e) {
                "use strict";

                function r() {
                    for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                    if (r.length > 1) {
                        r[0] = r[0].slice(0, -1);
                        for (var n = r.length - 1, o = 1; o < n; ++o) r[o] = r[o].slice(1, -1);
                        return r[n] = r[n].slice(1), r.join("")
                    }
                    return r[0]
                }

                function t(e) {
                    return "(?:" + e + ")"
                }

                function n(e) {
                    return void 0 === e ? "undefined" : null === e ? "null" : Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase()
                }

                function o(e) {
                    return e.toUpperCase()
                }

                function a(e) {
                    return null != e ? e instanceof Array ? e : "number" != typeof e.length || e.split || e.setInterval || e.call ? [e] : Array.prototype.slice.call(e) : []
                }

                function i(e, r) {
                    var t = e;
                    if (r)
                        for (var n in r) t[n] = r[n];
                    return t
                }

                function s(e) {
                    var n = "[A-Za-z]",
                        o = "[0-9]",
                        a = r(o, "[A-Fa-f]"),
                        i = t(t("%[EFef]" + a + "%" + a + a + "%" + a + a) + "|" + t("%[89A-Fa-f]" + a + "%" + a + a) + "|" + t("%" + a + a)),
                        s = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
                        u = r("[\\:\\/\\?\\#\\[\\]\\@]", s),
                        c = e ? "[\\uE000-\\uF8FF]" : "[]",
                        p = r(n, o, "[\\-\\.\\_\\~]", e ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]"),
                        h = t(n + r(n, o, "[\\+\\-\\.]") + "*"),
                        f = t(t(i + "|" + r(p, s, "[\\:]")) + "*"),
                        l = (t(t("25[0-5]") + "|" + t("2[0-4]" + o) + "|" + t("1" + o + o) + "|" + t("[1-9]" + o) + "|" + o), t(t("25[0-5]") + "|" + t("2[0-4]" + o) + "|" + t("1" + o + o) + "|" + t("0?[1-9]" + o) + "|0?0?" + o)),
                        v = t(l + "\\." + l + "\\." + l + "\\." + l),
                        d = t(a + "{1,4}"),
                        g = t(t(d + "\\:" + d) + "|" + v),
                        m = t(t(d + "\\:") + "{6}" + g),
                        E = t("\\:\\:" + t(d + "\\:") + "{5}" + g),
                        C = t(t(d) + "?\\:\\:" + t(d + "\\:") + "{4}" + g),
                        y = t(t(t(d + "\\:") + "{0,1}" + d) + "?\\:\\:" + t(d + "\\:") + "{3}" + g),
                        S = t(t(t(d + "\\:") + "{0,2}" + d) + "?\\:\\:" + t(d + "\\:") + "{2}" + g),
                        w = t(t(t(d + "\\:") + "{0,3}" + d) + "?\\:\\:" + d + "\\:" + g),
                        D = t(t(t(d + "\\:") + "{0,4}" + d) + "?\\:\\:" + g),
                        A = t(t(t(d + "\\:") + "{0,5}" + d) + "?\\:\\:" + d),
                        b = t(t(t(d + "\\:") + "{0,6}" + d) + "?\\:\\:"),
                        O = t([m, E, C, y, S, w, D, A, b].join("|")),
                        N = t(t(p + "|" + i) + "+"),
                        x = (t(O + "\\%25" + N), t(O + t("\\%25|\\%(?!" + a + "{2})") + N)),
                        I = t("[vV]" + a + "+\\." + r(p, s, "[\\:]") + "+"),
                        F = t("\\[" + t(x + "|" + O + "|" + I) + "\\]"),
                        T = t(t(i + "|" + r(p, s)) + "*"),
                        R = t(F + "|" + v + "(?!" + T + ")|" + T),
                        _ = t(o + "*"),
                        P = t(t(f + "@") + "?" + R + t("\\:" + _) + "?"),
                        q = t(i + "|" + r(p, s, "[\\:\\@]")),
                        H = t(q + "*"),
                        U = t(q + "+"),
                        j = t(t(i + "|" + r(p, s, "[\\@]")) + "+"),
                        z = t(t("\\/" + H) + "*"),
                        L = t("\\/" + t(U + z) + "?"),
                        $ = t(j + z),
                        k = t(U + z),
                        V = "(?!" + q + ")",
                        M = (t(z + "|" + L + "|" + $ + "|" + k + "|" + V), t(t(q + "|" + r("[\\/\\?]", c)) + "*")),
                        Z = t(t(q + "|[\\/\\?]") + "*"),
                        G = t(t("\\/\\/" + P + z) + "|" + L + "|" + k + "|" + V),
                        Q = t(h + "\\:" + G + t("\\?" + M) + "?" + t("\\#" + Z) + "?"),
                        Y = t(t("\\/\\/" + P + z) + "|" + L + "|" + $ + "|" + V),
                        B = t(Y + t("\\?" + M) + "?" + t("\\#" + Z) + "?");
                    return t(Q + "|" + B), t(h + "\\:" + G + t("\\?" + M) + "?"), t(t("\\/\\/(" + t("(" + f + ")@") + "?(" + R + ")" + t("\\:(" + _ + ")") + "?)") + "?(" + z + "|" + L + "|" + k + "|" + V + ")"), t("\\?(" + M + ")"), t("\\#(" + Z + ")"), t(t("\\/\\/(" + t("(" + f + ")@") + "?(" + R + ")" + t("\\:(" + _ + ")") + "?)") + "?(" + z + "|" + L + "|" + $ + "|" + V + ")"), t("\\?(" + M + ")"), t("\\#(" + Z + ")"), t(t("\\/\\/(" + t("(" + f + ")@") + "?(" + R + ")" + t("\\:(" + _ + ")") + "?)") + "?(" + z + "|" + L + "|" + k + "|" + V + ")"), t("\\?(" + M + ")"), t("\\#(" + Z + ")"), t("(" + f + ")@"), t("\\:(" + _ + ")"), {
                        NOT_SCHEME: new RegExp(r("[^]", n, o, "[\\+\\-\\.]"), "g"),
                        NOT_USERINFO: new RegExp(r("[^\\%\\:]", p, s), "g"),
                        NOT_HOST: new RegExp(r("[^\\%\\[\\]\\:]", p, s), "g"),
                        NOT_PATH: new RegExp(r("[^\\%\\/\\:\\@]", p, s), "g"),
                        NOT_PATH_NOSCHEME: new RegExp(r("[^\\%\\/\\@]", p, s), "g"),
                        NOT_QUERY: new RegExp(r("[^\\%]", p, s, "[\\:\\@\\/\\?]", c), "g"),
                        NOT_FRAGMENT: new RegExp(r("[^\\%]", p, s, "[\\:\\@\\/\\?]"), "g"),
                        ESCAPE: new RegExp(r("[^]", p, s), "g"),
                        UNRESERVED: new RegExp(p, "g"),
                        OTHER_CHARS: new RegExp(r("[^\\%]", p, u), "g"),
                        PCT_ENCODED: new RegExp(i, "g"),
                        IPV4ADDRESS: new RegExp("^(" + v + ")$"),
                        IPV6ADDRESS: new RegExp("^\\[?(" + O + ")" + t(t("\\%25|\\%(?!" + a + "{2})") + "(" + N + ")") + "?\\]?$")
                    }
                }
                var u = s(!1),
                    c = s(!0),
                    p = function() {
                        function e(e, r) {
                            var t = [],
                                n = !0,
                                o = !1,
                                a = void 0;
                            try {
                                for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (t.push(i.value), !r || t.length !== r); n = !0);
                            } catch (e) {
                                o = !0, a = e
                            } finally {
                                try {
                                    !n && s.return && s.return()
                                } finally {
                                    if (o) throw a
                                }
                            }
                            return t
                        }
                        return function(r, t) {
                            if (Array.isArray(r)) return r;
                            if (Symbol.iterator in Object(r)) return e(r, t);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }
                    }(),
                    h = function(e) {
                        if (Array.isArray(e)) {
                            for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
                            return t
                        }
                        return Array.from(e)
                    },
                    f = 2147483647,
                    l = 36,
                    v = 1,
                    d = 26,
                    g = 38,
                    m = 700,
                    E = 72,
                    C = 128,
                    y = "-",
                    S = /^xn--/,
                    w = /[^\0-\x7E]/,
                    D = /[\x2E\u3002\uFF0E\uFF61]/g,
                    A = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    },
                    b = l - v,
                    O = Math.floor,
                    N = String.fromCharCode;

                function x(e) {
                    throw new RangeError(A[e])
                }

                function I(e, r) {
                    for (var t = [], n = e.length; n--;) t[n] = r(e[n]);
                    return t
                }

                function F(e, r) {
                    var t = e.split("@"),
                        n = "";
                    return t.length > 1 && (n = t[0] + "@", e = t[1]), n + I((e = e.replace(D, ".")).split("."), r).join(".")
                }

                function T(e) {
                    for (var r = [], t = 0, n = e.length; t < n;) {
                        var o = e.charCodeAt(t++);
                        if (o >= 55296 && o <= 56319 && t < n) {
                            var a = e.charCodeAt(t++);
                            56320 == (64512 & a) ? r.push(((1023 & o) << 10) + (1023 & a) + 65536) : (r.push(o), t--)
                        } else r.push(o)
                    }
                    return r
                }
                var R = function(e) {
                        return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : l
                    },
                    _ = function(e, r) {
                        return e + 22 + 75 * (e < 26) - ((0 != r) << 5)
                    },
                    P = function(e, r, t) {
                        var n = 0;
                        for (e = t ? O(e / m) : e >> 1, e += O(e / r); e > b * d >> 1; n += l) e = O(e / b);
                        return O(n + (b + 1) * e / (e + g))
                    },
                    q = function(e) {
                        var r = [],
                            t = e.length,
                            n = 0,
                            o = C,
                            a = E,
                            i = e.lastIndexOf(y);
                        i < 0 && (i = 0);
                        for (var s = 0; s < i; ++s) e.charCodeAt(s) >= 128 && x("not-basic"), r.push(e.charCodeAt(s));
                        for (var u = i > 0 ? i + 1 : 0; u < t;) {
                            for (var c = n, p = 1, h = l;; h += l) {
                                u >= t && x("invalid-input");
                                var g = R(e.charCodeAt(u++));
                                (g >= l || g > O((f - n) / p)) && x("overflow"), n += g * p;
                                var m = h <= a ? v : h >= a + d ? d : h - a;
                                if (g < m) break;
                                var S = l - m;
                                p > O(f / S) && x("overflow"), p *= S
                            }
                            var w = r.length + 1;
                            a = P(n - c, w, 0 == c), O(n / w) > f - o && x("overflow"), o += O(n / w), n %= w, r.splice(n++, 0, o)
                        }
                        return String.fromCodePoint.apply(String, r)
                    },
                    H = function(e) {
                        var r = [],
                            t = (e = T(e)).length,
                            n = C,
                            o = 0,
                            a = E,
                            i = !0,
                            s = !1,
                            u = void 0;
                        try {
                            for (var c, p = e[Symbol.iterator](); !(i = (c = p.next()).done); i = !0) {
                                var h = c.value;
                                h < 128 && r.push(N(h))
                            }
                        } catch (e) {
                            s = !0, u = e
                        } finally {
                            try {
                                !i && p.return && p.return()
                            } finally {
                                if (s) throw u
                            }
                        }
                        var g = r.length,
                            m = g;
                        for (g && r.push(y); m < t;) {
                            var S = f,
                                w = !0,
                                D = !1,
                                A = void 0;
                            try {
                                for (var b, I = e[Symbol.iterator](); !(w = (b = I.next()).done); w = !0) {
                                    var F = b.value;
                                    F >= n && F < S && (S = F)
                                }
                            } catch (e) {
                                D = !0, A = e
                            } finally {
                                try {
                                    !w && I.return && I.return()
                                } finally {
                                    if (D) throw A
                                }
                            }
                            var R = m + 1;
                            S - n > O((f - o) / R) && x("overflow"), o += (S - n) * R, n = S;
                            var q = !0,
                                H = !1,
                                U = void 0;
                            try {
                                for (var j, z = e[Symbol.iterator](); !(q = (j = z.next()).done); q = !0) {
                                    var L = j.value;
                                    if (L < n && ++o > f && x("overflow"), L == n) {
                                        for (var $ = o, k = l;; k += l) {
                                            var V = k <= a ? v : k >= a + d ? d : k - a;
                                            if ($ < V) break;
                                            var M = $ - V,
                                                Z = l - V;
                                            r.push(N(_(V + M % Z, 0))), $ = O(M / Z)
                                        }
                                        r.push(N(_($, 0))), a = P(o, R, m == g), o = 0, ++m
                                    }
                                }
                            } catch (e) {
                                H = !0, U = e
                            } finally {
                                try {
                                    !q && z.return && z.return()
                                } finally {
                                    if (H) throw U
                                }
                            }++o, ++n
                        }
                        return r.join("")
                    },
                    U = function(e) {
                        return F(e, (function(e) {
                            return S.test(e) ? q(e.slice(4).toLowerCase()) : e
                        }))
                    },
                    j = function(e) {
                        return F(e, (function(e) {
                            return w.test(e) ? "xn--" + H(e) : e
                        }))
                    },
                    z = {
                        version: "2.1.0",
                        ucs2: {
                            decode: T,
                            encode: function(e) {
                                return String.fromCodePoint.apply(String, h(e))
                            }
                        },
                        decode: q,
                        encode: H,
                        toASCII: j,
                        toUnicode: U
                    },
                    L = {};

                function $(e) {
                    var r = e.charCodeAt(0);
                    return r < 16 ? "%0" + r.toString(16).toUpperCase() : r < 128 ? "%" + r.toString(16).toUpperCase() : r < 2048 ? "%" + (r >> 6 | 192).toString(16).toUpperCase() + "%" + (63 & r | 128).toString(16).toUpperCase() : "%" + (r >> 12 | 224).toString(16).toUpperCase() + "%" + (r >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (63 & r | 128).toString(16).toUpperCase()
                }

                function k(e) {
                    for (var r = "", t = 0, n = e.length; t < n;) {
                        var o = parseInt(e.substr(t + 1, 2), 16);
                        if (o < 128) r += String.fromCharCode(o), t += 3;
                        else if (o >= 194 && o < 224) {
                            if (n - t >= 6) {
                                var a = parseInt(e.substr(t + 4, 2), 16);
                                r += String.fromCharCode((31 & o) << 6 | 63 & a)
                            } else r += e.substr(t, 6);
                            t += 6
                        } else if (o >= 224) {
                            if (n - t >= 9) {
                                var i = parseInt(e.substr(t + 4, 2), 16),
                                    s = parseInt(e.substr(t + 7, 2), 16);
                                r += String.fromCharCode((15 & o) << 12 | (63 & i) << 6 | 63 & s)
                            } else r += e.substr(t, 9);
                            t += 9
                        } else r += e.substr(t, 3), t += 3
                    }
                    return r
                }

                function V(e, r) {
                    function t(e) {
                        var t = k(e);
                        return t.match(r.UNRESERVED) ? t : e
                    }
                    return e.scheme && (e.scheme = String(e.scheme).replace(r.PCT_ENCODED, t).toLowerCase().replace(r.NOT_SCHEME, "")), void 0 !== e.userinfo && (e.userinfo = String(e.userinfo).replace(r.PCT_ENCODED, t).replace(r.NOT_USERINFO, $).replace(r.PCT_ENCODED, o)), void 0 !== e.host && (e.host = String(e.host).replace(r.PCT_ENCODED, t).toLowerCase().replace(r.NOT_HOST, $).replace(r.PCT_ENCODED, o)), void 0 !== e.path && (e.path = String(e.path).replace(r.PCT_ENCODED, t).replace(e.scheme ? r.NOT_PATH : r.NOT_PATH_NOSCHEME, $).replace(r.PCT_ENCODED, o)), void 0 !== e.query && (e.query = String(e.query).replace(r.PCT_ENCODED, t).replace(r.NOT_QUERY, $).replace(r.PCT_ENCODED, o)), void 0 !== e.fragment && (e.fragment = String(e.fragment).replace(r.PCT_ENCODED, t).replace(r.NOT_FRAGMENT, $).replace(r.PCT_ENCODED, o)), e
                }

                function M(e) {
                    return e.replace(/^0*(.*)/, "$1") || "0"
                }

                function Z(e, r) {
                    var t = e.match(r.IPV4ADDRESS) || [],
                        n = p(t, 2)[1];
                    return n ? n.split(".").map(M).join(".") : e
                }

                function G(e, r) {
                    var t = e.match(r.IPV6ADDRESS) || [],
                        n = p(t, 3),
                        o = n[1],
                        a = n[2];
                    if (o) {
                        for (var i = o.toLowerCase().split("::").reverse(), s = p(i, 2), u = s[0], c = s[1], h = c ? c.split(":").map(M) : [], f = u.split(":").map(M), l = r.IPV4ADDRESS.test(f[f.length - 1]), v = l ? 7 : 8, d = f.length - v, g = Array(v), m = 0; m < v; ++m) g[m] = h[m] || f[d + m] || "";
                        l && (g[v - 1] = Z(g[v - 1], r));
                        var E = g.reduce((function(e, r, t) {
                                if (!r || "0" === r) {
                                    var n = e[e.length - 1];
                                    n && n.index + n.length === t ? n.length++ : e.push({
                                        index: t,
                                        length: 1
                                    })
                                }
                                return e
                            }), []).sort((function(e, r) {
                                return r.length - e.length
                            }))[0],
                            C = void 0;
                        if (E && E.length > 1) {
                            var y = g.slice(0, E.index),
                                S = g.slice(E.index + E.length);
                            C = y.join(":") + "::" + S.join(":")
                        } else C = g.join(":");
                        return a && (C += "%" + a), C
                    }
                    return e
                }
                var Q = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,
                    Y = void 0 === "".match(/(){0}/)[1];

                function B(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = {},
                        n = !1 !== r.iri ? c : u;
                    "suffix" === r.reference && (e = (r.scheme ? r.scheme + ":" : "") + "//" + e);
                    var o = e.match(Q);
                    if (o) {
                        Y ? (t.scheme = o[1], t.userinfo = o[3], t.host = o[4], t.port = parseInt(o[5], 10), t.path = o[6] || "", t.query = o[7], t.fragment = o[8], isNaN(t.port) && (t.port = o[5])) : (t.scheme = o[1] || void 0, t.userinfo = -1 !== e.indexOf("@") ? o[3] : void 0, t.host = -1 !== e.indexOf("//") ? o[4] : void 0, t.port = parseInt(o[5], 10), t.path = o[6] || "", t.query = -1 !== e.indexOf("?") ? o[7] : void 0, t.fragment = -1 !== e.indexOf("#") ? o[8] : void 0, isNaN(t.port) && (t.port = e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? o[4] : void 0)), t.host && (t.host = G(Z(t.host, n), n)), void 0 !== t.scheme || void 0 !== t.userinfo || void 0 !== t.host || void 0 !== t.port || t.path || void 0 !== t.query ? void 0 === t.scheme ? t.reference = "relative" : void 0 === t.fragment ? t.reference = "absolute" : t.reference = "uri" : t.reference = "same-document", r.reference && "suffix" !== r.reference && r.reference !== t.reference && (t.error = t.error || "URI is not a " + r.reference + " reference.");
                        var a = L[(r.scheme || t.scheme || "").toLowerCase()];
                        if (r.unicodeSupport || a && a.unicodeSupport) V(t, n);
                        else {
                            if (t.host && (r.domainHost || a && a.domainHost)) try {
                                t.host = z.toASCII(t.host.replace(n.PCT_ENCODED, k).toLowerCase())
                            } catch (e) {
                                t.error = t.error || "Host's domain name can not be converted to ASCII via punycode: " + e
                            }
                            V(t, u)
                        }
                        a && a.parse && a.parse(t, r)
                    } else t.error = t.error || "URI can not be parsed.";
                    return t
                }

                function J(e, r) {
                    var t = !1 !== r.iri ? c : u,
                        n = [];
                    return void 0 !== e.userinfo && (n.push(e.userinfo), n.push("@")), void 0 !== e.host && n.push(G(Z(String(e.host), t), t).replace(t.IPV6ADDRESS, (function(e, r, t) {
                        return "[" + r + (t ? "%25" + t : "") + "]"
                    }))), "number" != typeof e.port && "string" != typeof e.port || (n.push(":"), n.push(String(e.port))), n.length ? n.join("") : void 0
                }
                var K = /^\.\.?\//,
                    W = /^\/\.(\/|$)/,
                    X = /^\/\.\.(\/|$)/,
                    ee = /^\/?(?:.|\n)*?(?=\/|$)/;

                function re(e) {
                    for (var r = []; e.length;)
                        if (e.match(K)) e = e.replace(K, "");
                        else if (e.match(W)) e = e.replace(W, "/");
                    else if (e.match(X)) e = e.replace(X, "/"), r.pop();
                    else if ("." === e || ".." === e) e = "";
                    else {
                        var t = e.match(ee);
                        if (!t) throw new Error("Unexpected dot segment condition");
                        var n = t[0];
                        e = e.slice(n.length), r.push(n)
                    }
                    return r.join("")
                }

                function te(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = r.iri ? c : u,
                        n = [],
                        o = L[(r.scheme || e.scheme || "").toLowerCase()];
                    if (o && o.serialize && o.serialize(e, r), e.host)
                        if (t.IPV6ADDRESS.test(e.host));
                        else if (r.domainHost || o && o.domainHost) try {
                        e.host = r.iri ? z.toUnicode(e.host) : z.toASCII(e.host.replace(t.PCT_ENCODED, k).toLowerCase())
                    } catch (t) {
                        e.error = e.error || "Host's domain name can not be converted to " + (r.iri ? "Unicode" : "ASCII") + " via punycode: " + t
                    }
                    V(e, t), "suffix" !== r.reference && e.scheme && (n.push(e.scheme), n.push(":"));
                    var a = J(e, r);
                    if (void 0 !== a && ("suffix" !== r.reference && n.push("//"), n.push(a), e.path && "/" !== e.path.charAt(0) && n.push("/")), void 0 !== e.path) {
                        var i = e.path;
                        r.absolutePath || o && o.absolutePath || (i = re(i)), void 0 === a && (i = i.replace(/^\/\//, "/%2F")), n.push(i)
                    }
                    return void 0 !== e.query && (n.push("?"), n.push(e.query)), void 0 !== e.fragment && (n.push("#"), n.push(e.fragment)), n.join("")
                }

                function ne(e, r) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = {};
                    return arguments[3] || (e = B(te(e, t), t), r = B(te(r, t), t)), !(t = t || {}).tolerant && r.scheme ? (n.scheme = r.scheme, n.userinfo = r.userinfo, n.host = r.host, n.port = r.port, n.path = re(r.path || ""), n.query = r.query) : (void 0 !== r.userinfo || void 0 !== r.host || void 0 !== r.port ? (n.userinfo = r.userinfo, n.host = r.host, n.port = r.port, n.path = re(r.path || ""), n.query = r.query) : (r.path ? ("/" === r.path.charAt(0) ? n.path = re(r.path) : (void 0 === e.userinfo && void 0 === e.host && void 0 === e.port || e.path ? e.path ? n.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + r.path : n.path = r.path : n.path = "/" + r.path, n.path = re(n.path)), n.query = r.query) : (n.path = e.path, void 0 !== r.query ? n.query = r.query : n.query = e.query), n.userinfo = e.userinfo, n.host = e.host, n.port = e.port), n.scheme = e.scheme), n.fragment = r.fragment, n
                }

                function oe(e, r, t) {
                    var n = i({
                        scheme: "null"
                    }, t);
                    return te(ne(B(e, n), B(r, n), n, !0), n)
                }

                function ae(e, r) {
                    return "string" == typeof e ? e = te(B(e, r), r) : "object" === n(e) && (e = B(te(e, r), r)), e
                }

                function ie(e, r, t) {
                    return "string" == typeof e ? e = te(B(e, t), t) : "object" === n(e) && (e = te(e, t)), "string" == typeof r ? r = te(B(r, t), t) : "object" === n(r) && (r = te(r, t)), e === r
                }

                function se(e, r) {
                    return e && e.toString().replace(r && r.iri ? c.ESCAPE : u.ESCAPE, $)
                }

                function ue(e, r) {
                    return e && e.toString().replace(r && r.iri ? c.PCT_ENCODED : u.PCT_ENCODED, k)
                }
                var ce = {
                        scheme: "http",
                        domainHost: !0,
                        parse: function(e, r) {
                            return e.host || (e.error = e.error || "HTTP URIs must have a host."), e
                        },
                        serialize: function(e, r) {
                            var t = "https" === String(e.scheme).toLowerCase();
                            return e.port !== (t ? 443 : 80) && "" !== e.port || (e.port = void 0), e.path || (e.path = "/"), e
                        }
                    },
                    pe = {
                        scheme: "https",
                        domainHost: ce.domainHost,
                        parse: ce.parse,
                        serialize: ce.serialize
                    };

                function he(e) {
                    return "boolean" == typeof e.secure ? e.secure : "wss" === String(e.scheme).toLowerCase()
                }
                var fe = {
                        scheme: "ws",
                        domainHost: !0,
                        parse: function(e, r) {
                            var t = e;
                            return t.secure = he(t), t.resourceName = (t.path || "/") + (t.query ? "?" + t.query : ""), t.path = void 0, t.query = void 0, t
                        },
                        serialize: function(e, r) {
                            if (e.port !== (he(e) ? 443 : 80) && "" !== e.port || (e.port = void 0), "boolean" == typeof e.secure && (e.scheme = e.secure ? "wss" : "ws", e.secure = void 0), e.resourceName) {
                                var t = e.resourceName.split("?"),
                                    n = p(t, 2),
                                    o = n[0],
                                    a = n[1];
                                e.path = o && "/" !== o ? o : void 0, e.query = a, e.resourceName = void 0
                            }
                            return e.fragment = void 0, e
                        }
                    },
                    le = {
                        scheme: "wss",
                        domainHost: fe.domainHost,
                        parse: fe.parse,
                        serialize: fe.serialize
                    },
                    ve = {},
                    de = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",
                    ge = "[0-9A-Fa-f]",
                    me = t(t("%[EFef]" + ge + "%" + ge + ge + "%" + ge + ge) + "|" + t("%[89A-Fa-f]" + ge + "%" + ge + ge) + "|" + t("%" + ge + ge)),
                    Ee = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]",
                    Ce = r("[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", '[\\"\\\\]'),
                    ye = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]",
                    Se = new RegExp(de, "g"),
                    we = new RegExp(me, "g"),
                    De = new RegExp(r("[^]", Ee, "[\\.]", '[\\"]', Ce), "g"),
                    Ae = new RegExp(r("[^]", de, ye), "g"),
                    be = Ae;

                function Oe(e) {
                    var r = k(e);
                    return r.match(Se) ? r : e
                }
                var Ne = {
                        scheme: "mailto",
                        parse: function(e, r) {
                            var t = e,
                                n = t.to = t.path ? t.path.split(",") : [];
                            if (t.path = void 0, t.query) {
                                for (var o = !1, a = {}, i = t.query.split("&"), s = 0, u = i.length; s < u; ++s) {
                                    var c = i[s].split("=");
                                    switch (c[0]) {
                                        case "to":
                                            for (var p = c[1].split(","), h = 0, f = p.length; h < f; ++h) n.push(p[h]);
                                            break;
                                        case "subject":
                                            t.subject = ue(c[1], r);
                                            break;
                                        case "body":
                                            t.body = ue(c[1], r);
                                            break;
                                        default:
                                            o = !0, a[ue(c[0], r)] = ue(c[1], r)
                                    }
                                }
                                o && (t.headers = a)
                            }
                            t.query = void 0;
                            for (var l = 0, v = n.length; l < v; ++l) {
                                var d = n[l].split("@");
                                if (d[0] = ue(d[0]), r.unicodeSupport) d[1] = ue(d[1], r).toLowerCase();
                                else try {
                                    d[1] = z.toASCII(ue(d[1], r).toLowerCase())
                                } catch (e) {
                                    t.error = t.error || "Email address's domain name can not be converted to ASCII via punycode: " + e
                                }
                                n[l] = d.join("@")
                            }
                            return t
                        },
                        serialize: function(e, r) {
                            var t = e,
                                n = a(e.to);
                            if (n) {
                                for (var i = 0, s = n.length; i < s; ++i) {
                                    var u = String(n[i]),
                                        c = u.lastIndexOf("@"),
                                        p = u.slice(0, c).replace(we, Oe).replace(we, o).replace(De, $),
                                        h = u.slice(c + 1);
                                    try {
                                        h = r.iri ? z.toUnicode(h) : z.toASCII(ue(h, r).toLowerCase())
                                    } catch (e) {
                                        t.error = t.error || "Email address's domain name can not be converted to " + (r.iri ? "Unicode" : "ASCII") + " via punycode: " + e
                                    }
                                    n[i] = p + "@" + h
                                }
                                t.path = n.join(",")
                            }
                            var f = e.headers = e.headers || {};
                            e.subject && (f.subject = e.subject), e.body && (f.body = e.body);
                            var l = [];
                            for (var v in f) f[v] !== ve[v] && l.push(v.replace(we, Oe).replace(we, o).replace(Ae, $) + "=" + f[v].replace(we, Oe).replace(we, o).replace(be, $));
                            return l.length && (t.query = l.join("&")), t
                        }
                    },
                    xe = /^([^\:]+)\:(.*)/,
                    Ie = {
                        scheme: "urn",
                        parse: function(e, r) {
                            var t = e.path && e.path.match(xe),
                                n = e;
                            if (t) {
                                var o = r.scheme || n.scheme || "urn",
                                    a = t[1].toLowerCase(),
                                    i = t[2],
                                    s = o + ":" + (r.nid || a),
                                    u = L[s];
                                n.nid = a, n.nss = i, n.path = void 0, u && (n = u.parse(n, r))
                            } else n.error = n.error || "URN can not be parsed.";
                            return n
                        },
                        serialize: function(e, r) {
                            var t = r.scheme || e.scheme || "urn",
                                n = e.nid,
                                o = t + ":" + (r.nid || n),
                                a = L[o];
                            a && (e = a.serialize(e, r));
                            var i = e,
                                s = e.nss;
                            return i.path = (n || r.nid) + ":" + s, i
                        }
                    },
                    Fe = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,
                    Te = {
                        scheme: "urn:uuid",
                        parse: function(e, r) {
                            var t = e;
                            return t.uuid = t.nss, t.nss = void 0, r.tolerant || t.uuid && t.uuid.match(Fe) || (t.error = t.error || "UUID is not valid."), t
                        },
                        serialize: function(e, r) {
                            var t = e;
                            return t.nss = (e.uuid || "").toLowerCase(), t
                        }
                    };
                L[ce.scheme] = ce, L[pe.scheme] = pe, L[fe.scheme] = fe, L[le.scheme] = le, L[Ne.scheme] = Ne, L[Ie.scheme] = Ie, L[Te.scheme] = Te, e.SCHEMES = L, e.pctEncChar = $, e.pctDecChars = k, e.parse = B, e.removeDotSegments = re, e.serialize = te, e.resolveComponents = ne, e.resolve = oe, e.normalize = ae, e.equal = ie, e.escapeComponent = se, e.unescapeComponent = ue, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(r)
        }
    }
]);