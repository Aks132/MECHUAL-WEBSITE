"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [4139], {
        CuwS: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r;
            var a = "undefined" == typeof document ? void 0 : document,
                i = !!a && "content" in a.createElement("template"),
                o = !!a && a.createRange && "createContextualFragment" in a.createRange();

            function d(e) {
                return e = e.trim(), i ? function(e) {
                    var t = a.createElement("template");
                    return t.innerHTML = e, t.content.childNodes[0]
                }(e) : o ? function(e) {
                    return r || (r = a.createRange()).selectNode(a.body), r.createContextualFragment(e).childNodes[0]
                }(e) : function(e) {
                    var t = a.createElement("body");
                    return t.innerHTML = e, t.childNodes[0]
                }(e)
            }

            function l(e, t) {
                var n, r, a = e.nodeName,
                    i = t.nodeName;
                return a === i || (n = a.charCodeAt(0), r = i.charCodeAt(0), n <= 90 && r >= 97 ? a === i.toUpperCase() : r <= 90 && n >= 97 && i === a.toUpperCase())
            }

            function u(e, t, n) {
                e[n] !== t[n] && (e[n] = t[n], e[n] ? e.setAttribute(n, "") : e.removeAttribute(n))
            }
            var f = {
                OPTION: function(e, t) {
                    var n = e.parentNode;
                    if (n) {
                        var r = n.nodeName.toUpperCase();
                        "OPTGROUP" === r && (r = (n = n.parentNode) && n.nodeName.toUpperCase()), "SELECT" !== r || n.hasAttribute("multiple") || (e.hasAttribute("selected") && !t.selected && (e.setAttribute("selected", "selected"), e.removeAttribute("selected")), n.selectedIndex = -1)
                    }
                    u(e, t, "selected")
                },
                INPUT: function(e, t) {
                    u(e, t, "checked"), u(e, t, "disabled"), e.value !== t.value && (e.value = t.value), t.hasAttribute("value") || e.removeAttribute("value")
                },
                TEXTAREA: function(e, t) {
                    var n = t.value;
                    e.value !== n && (e.value = n);
                    var r = e.firstChild;
                    if (r) {
                        var a = r.nodeValue;
                        if (a == n || !n && a == e.placeholder) return;
                        r.nodeValue = n
                    }
                },
                SELECT: function(e, t) {
                    if (!t.hasAttribute("multiple")) {
                        for (var n, r, a = -1, i = 0, o = e.firstChild; o;)
                            if ("OPTGROUP" === (r = o.nodeName && o.nodeName.toUpperCase())) o = (n = o).firstChild;
                            else {
                                if ("OPTION" === r) {
                                    if (o.hasAttribute("selected")) {
                                        a = i;
                                        break
                                    }
                                    i++
                                }!(o = o.nextSibling) && n && (o = n.nextSibling, n = null)
                            }
                        e.selectedIndex = a
                    }
                }
            };

            function c() {}

            function s(e) {
                if (e) return e.getAttribute && e.getAttribute("id") || e.id
            }
            var v = function(e) {
                return function(t, n, r) {
                    if (r || (r = {}), "string" == typeof n)
                        if ("#document" === t.nodeName || "HTML" === t.nodeName || "BODY" === t.nodeName) {
                            var i = n;
                            (n = a.createElement("html")).innerHTML = i
                        } else n = d(n);
                    var o = r.getNodeKey || s,
                        u = r.onBeforeNodeAdded || c,
                        v = r.onNodeAdded || c,
                        p = r.onBeforeElUpdated || c,
                        m = r.onElUpdated || c,
                        h = r.onBeforeNodeDiscarded || c,
                        N = r.onNodeDiscarded || c,
                        b = r.onBeforeElChildrenUpdated || c,
                        C = !0 === r.childrenOnly,
                        A = Object.create(null),
                        T = [];

                    function g(e) {
                        T.push(e)
                    }

                    function S(e, t) {
                        if (1 === e.nodeType)
                            for (var n = e.firstChild; n;) {
                                var r = void 0;
                                t && (r = o(n)) ? g(r) : (N(n), n.firstChild && S(n, t)), n = n.nextSibling
                            }
                    }

                    function E(e, t, n) {
                        !1 !== h(e) && (t && t.removeChild(e), N(e), S(e, n))
                    }

                    function x(e) {
                        v(e);
                        for (var t = e.firstChild; t;) {
                            var n = t.nextSibling,
                                r = o(t);
                            if (r) {
                                var a = A[r];
                                a && l(t, a) ? (t.parentNode.replaceChild(a, t), y(a, t)) : x(t)
                            } else x(t);
                            t = n
                        }
                    }

                    function y(t, n, r) {
                        var i = o(n);
                        if (i && delete A[i], !r) {
                            if (!1 === p(t, n)) return;
                            if (e(t, n), m(t), !1 === b(t, n)) return
                        }
                        "TEXTAREA" !== t.nodeName ? function(e, t) {
                            var n, r, i, d, c, s = t.firstChild,
                                v = e.firstChild;
                            e: for (; s;) {
                                for (d = s.nextSibling, n = o(s); v;) {
                                    if (i = v.nextSibling, s.isSameNode && s.isSameNode(v)) {
                                        s = d, v = i;
                                        continue e
                                    }
                                    r = o(v);
                                    var p = v.nodeType,
                                        m = void 0;
                                    if (p === s.nodeType && (1 === p ? (n ? n !== r && ((c = A[n]) ? i === c ? m = !1 : (e.insertBefore(c, v), r ? g(r) : E(v, e, !0), v = c) : m = !1) : r && (m = !1), (m = !1 !== m && l(v, s)) && y(v, s)) : 3 !== p && 8 != p || (m = !0, v.nodeValue !== s.nodeValue && (v.nodeValue = s.nodeValue))), m) {
                                        s = d, v = i;
                                        continue e
                                    }
                                    r ? g(r) : E(v, e, !0), v = i
                                }
                                if (n && (c = A[n]) && l(c, s)) e.appendChild(c), y(c, s);
                                else {
                                    var h = u(s);
                                    !1 !== h && (h && (s = h), s.actualize && (s = s.actualize(e.ownerDocument || a)), e.appendChild(s), x(s))
                                }
                                s = d, v = i
                            }! function(e, t, n) {
                                for (; t;) {
                                    var r = t.nextSibling;
                                    (n = o(t)) ? g(n): E(t, e, !0), t = r
                                }
                            }(e, v, r);
                            var N = f[e.nodeName];
                            N && N(e, t)
                        }(t, n) : f.TEXTAREA(t, n)
                    }! function e(t) {
                        if (1 === t.nodeType || 11 === t.nodeType)
                            for (var n = t.firstChild; n;) {
                                var r = o(n);
                                r && (A[r] = n), e(n), n = n.nextSibling
                            }
                    }(t);
                    var U, O, R = t,
                        V = R.nodeType,
                        w = n.nodeType;
                    if (!C)
                        if (1 === V) 1 === w ? l(t, n) || (N(t), R = function(e, t) {
                            for (var n = e.firstChild; n;) {
                                var r = n.nextSibling;
                                t.appendChild(n), n = r
                            }
                            return t
                        }(t, (U = n.nodeName, (O = n.namespaceURI) && "http://www.w3.org/1999/xhtml" !== O ? a.createElementNS(O, U) : a.createElement(U)))) : R = n;
                        else if (3 === V || 8 === V) {
                        if (w === V) return R.nodeValue !== n.nodeValue && (R.nodeValue = n.nodeValue), R;
                        R = n
                    }
                    if (R === n) N(t);
                    else {
                        if (n.isSameNode && n.isSameNode(R)) return;
                        if (y(R, n, C), T)
                            for (var k = 0, I = T.length; k < I; k++) {
                                var P = A[T[k]];
                                P && E(P, P.parentNode, !1)
                            }
                    }
                    return !C && R !== t && t.parentNode && (R.actualize && (R = R.actualize(t.ownerDocument || a)), t.parentNode.replaceChild(R, t)), R
                }
            }((function(e, t) {
                var n, r, a, i, o = t.attributes;
                if (11 !== t.nodeType && 11 !== e.nodeType) {
                    for (var d = o.length - 1; d >= 0; d--) r = (n = o[d]).name, a = n.namespaceURI, i = n.value, a ? (r = n.localName || r, e.getAttributeNS(a, r) !== i && ("xmlns" === n.prefix && (r = n.name), e.setAttributeNS(a, r, i))) : e.getAttribute(r) !== i && e.setAttribute(r, i);
                    for (var l = e.attributes, u = l.length - 1; u >= 0; u--) r = (n = l[u]).name, (a = n.namespaceURI) ? (r = n.localName || r, t.hasAttributeNS(a, r) || e.removeAttributeNS(a, r)) : t.hasAttribute(r) || e.removeAttribute(r)
                }
            }));
            const p = v
        }
    }
]);