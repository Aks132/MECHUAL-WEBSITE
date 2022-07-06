"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [9512], {
        yTkX: (n, t, e) => {
            e.d(t, {
                PF: () => u,
                UW: () => a,
                L0: () => c,
                wv: () => i,
                eF: () => d,
                QG: () => h,
                IO: () => s
            });
            var o = e("HPk7"),
                r = e("g/7r");

            function u(n) {
                return n.preventDefault(), n
            }

            function a(n) {
                return n.stopPropagation(), n
            }

            function c(n) {
                return {
                    eventName: n.split(" ")[0],
                    selector: n.split(" ").slice(1).join(" ")
                }
            }

            function i(n) {
                var t = n.originalEvent || n;
                return {
                    x: t.type.match(/^touch/) ? t.changedTouches[0] ? t.changedTouches[0].pageX : 0 : t.clientX,
                    y: t.type.match(/^touch/) ? t.changedTouches[0] ? t.changedTouches[0].pageY : 0 : t.clientY
                }
            }

            function d(n, t) {
                return t.velocity = function(n, t) {
                    var e = i(t),
                        o = n ? i(n) : e;
                    return {
                        x: e.x - o.x,
                        y: e.y - o.y
                    }
                }(n, t), t
            }
            var g = function(n) {
                    var t = i(n),
                        e = t.x,
                        o = t.y;
                    return n.dragX = e, n.dragY = o, n
                },
                v = function(n, t, e) {
                    return function(u) {
                        var a = !1,
                            c = !1,
                            i = (0, o.Z)((0, r.Rp)(d, void 0, (function(n) {
                                a = !0, c || e.onDrag(g(n))
                            })), 16);
                        window.addEventListener(n, i), window.addEventListener(t, (function o(r) {
                            c = !0, a && e.onDragEnd(g(r)), window.removeEventListener(n, i), window.removeEventListener(t, o)
                        })), e.onDragStart(g(u))
                    }
                },
                h = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = n.onDrag,
                        e = n.onDragStart,
                        o = void 0 === e ? function(n) {
                            return n
                        } : e,
                        r = n.onDragEnd,
                        u = void 0 === r ? function(n) {
                            return n
                        } : r;
                    return {
                        onMouseDown: v("mousemove", "mouseup", {
                            onDrag: t,
                            onDragStart: o,
                            onDragEnd: u
                        }),
                        onTouchStart: v("touchmove", "touchend", {
                            onDrag: t,
                            onDragStart: o,
                            onDragEnd: u
                        })
                    }
                },
                s = function(n) {
                    return function(t) {
                        13 === function(n) {
                            return n.which || n.keyCode
                        }(t) && n(t)
                    }
                }
        }
    }
]);