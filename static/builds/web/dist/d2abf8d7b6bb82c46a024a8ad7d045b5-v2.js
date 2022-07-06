(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [5701], {
        "7ae3": function(t, e) {
            ! function() {
                var n = Array.prototype.forEach,
                    r = Object.prototype.hasOwnProperty,
                    i = Array.prototype.slice,
                    s = 0;
                var c, o = {
                    keys: Object.keys || function(t) {
                        if ("object" != typeof t && "function" != typeof t || null === t) throw new TypeError("keys() called on a non-object");
                        var e, n = [];
                        for (e in t) t.hasOwnProperty(e) && (n[n.length] = e);
                        return n
                    },
                    uniqueId: function(t) {
                        var e = ++s + "";
                        return t ? t + e : e
                    },
                    has: function(t, e) {
                        return r.call(t, e)
                    },
                    each: function(t, e, r) {
                        if (null != t)
                            if (n && t.forEach === n) t.forEach(e, r);
                            else if (t.length === +t.length)
                            for (var i = 0, s = t.length; i < s; i++) e.call(r, t[i], i, t);
                        else
                            for (var c in t) this.has(t, c) && e.call(r, t[c], c, t)
                    },
                    once: function(t) {
                        var e, n = !1;
                        return function() {
                            return n || (n = !0, e = t.apply(this, arguments), t = null), e
                        }
                    }
                };
                c = {
                    on: function(t, e, n) {
                        return a(this, "on", t, [e, n]) && e ? (this._events || (this._events = {}), (this._events[t] || (this._events[t] = [])).push({
                            callback: e,
                            context: n,
                            ctx: n || this
                        }), this) : this
                    },
                    once: function(t, e, n) {
                        if (!a(this, "once", t, [e, n]) || !e) return this;
                        var r = this,
                            i = o.once((function() {
                                r.off(t, i), e.apply(this, arguments)
                            }));
                        return i._callback = e, this.on(t, i, n)
                    },
                    off: function(t, e, n) {
                        var r, i, s, c, l, f, h, u;
                        if (!this._events || !a(this, "off", t, [e, n])) return this;
                        if (!t && !e && !n) return this._events = {}, this;
                        for (l = 0, f = (c = t ? [t] : o.keys(this._events)).length; l < f; l++)
                            if (t = c[l], s = this._events[t]) {
                                if (this._events[t] = r = [], e || n)
                                    for (h = 0, u = s.length; h < u; h++) i = s[h], (e && e !== i.callback && e !== i.callback._callback || n && n !== i.context) && r.push(i);
                                r.length || delete this._events[t]
                            }
                        return this
                    },
                    trigger: function(t) {
                        if (!this._events) return this;
                        var e = i.call(arguments, 1);
                        if (!a(this, "trigger", t, e)) return this;
                        var n = this._events[t],
                            r = this._events.all;
                        return n && f(n, e), r && f(r, arguments), this
                    },
                    stopListening: function(t, e, n) {
                        var r = this._listeners;
                        if (!r) return this;
                        var i = !e && !n;
                        for (var s in "object" == typeof e && (n = this), t && ((r = {})[t._listenerId] = t), r) r[s].off(e, n, this), i && delete this._listeners[s];
                        return this
                    }
                };
                var l = /\s+/,
                    a = function(t, e, n, r) {
                        if (!n) return !0;
                        if ("object" == typeof n) {
                            for (var i in n) t[e].apply(t, [i, n[i]].concat(r));
                            return !1
                        }
                        if (l.test(n)) {
                            for (var s = n.split(l), c = 0, o = s.length; c < o; c++) t[e].apply(t, [s[c]].concat(r));
                            return !1
                        }
                        return !0
                    },
                    f = function(t, e) {
                        var n, r = -1,
                            i = t.length,
                            s = e[0],
                            c = e[1],
                            o = e[2];
                        switch (e.length) {
                            case 0:
                                for (; ++r < i;)(n = t[r]).callback.call(n.ctx);
                                return;
                            case 1:
                                for (; ++r < i;)(n = t[r]).callback.call(n.ctx, s);
                                return;
                            case 2:
                                for (; ++r < i;)(n = t[r]).callback.call(n.ctx, s, c);
                                return;
                            case 3:
                                for (; ++r < i;)(n = t[r]).callback.call(n.ctx, s, c, o);
                                return;
                            default:
                                for (; ++r < i;)(n = t[r]).callback.apply(n.ctx, e)
                        }
                    };
                o.each({
                    listenTo: "on",
                    listenToOnce: "once"
                }, (function(t, e) {
                    c[e] = function(e, n, r) {
                        return (this._listeners || (this._listeners = {}))[e._listenerId || (e._listenerId = o.uniqueId("l"))] = e, "object" == typeof n && (r = this), e[t](n, r, this), this
                    }
                })), c.bind = c.on, c.unbind = c.off, c.mixin = function(t) {
                    return o.each(["on", "once", "off", "trigger", "stopListening", "listenTo", "listenToOnce", "bind", "unbind"], (function(e) {
                        t[e] = this[e]
                    }), this), t
                }, t.exports && (e = t.exports = c), e.BackboneEvents = c
            }()
        },
        jG2q: (t, e, n) => {
            t.exports = n("7ae3")
        }
    }
]);