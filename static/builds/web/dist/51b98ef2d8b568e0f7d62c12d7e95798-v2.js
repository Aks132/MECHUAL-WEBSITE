(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [3426], {
        "5Eyw": (t, e, a) => {
            var o = a("jG2q"),
                n = function(t) {
                    var e = t,
                        a = {};
                    e.indexOf("#") > -1 && (e = e.slice(1));
                    var o = e.split(":");
                    return 1 === o.length ? a.data = o[0] : 2 === o.length ? (a.from = o[0].toUpperCase(), a.data = o[1]) : 3 === o.length && (a.from = o[0].toUpperCase(), a.to = o[1].toUpperCase(), a.data = o[2]), a.data && (a.stringData = a.data, a.data = function(t) {
                        t = t || "", t = decodeURIComponent(t);
                        var e = {};
                        return t.split("&").forEach(function(t) {
                            if (t.indexOf("=") > -1) {
                                var a = t.split("=");
                                e[a[0]] = a[1]
                            } else e = t.indexOf(",") > -1 ? t.split(",") : t
                        }.bind(this)), e
                    }(a.data)), a._originalString = t + ";", a
                },
                i = function(t) {
                    var e = t;
                    "string" == typeof t && (e = n(t)), this._msg = e, this.from = e.from, this.to = e.to, this.data = r(e.data)
                },
                r = function(t) {
                    return "string" == typeof t ? t = decodeURIComponent(t) : Array.isArray(t) ? t = t.map(decodeURIComponent) : "object" === (typeof t).toLowerCase() && Object.keys(t).forEach(function(e) {
                        "string" == typeof t[e] ? t[e] = decodeURIComponent(t[e]) : Array.isArray(t[e]) && (t[e] = t[e].map(decodeURIComponent))
                    }.bind(this)), t
                };
            i.prototype._getStringifiedData = function() {
                var t = "";
                if ("string" == typeof this.data) return encodeURIComponent(this.data);
                if (Array.isArray(this.data)) return this.data.map(encodeURIComponent).join(",");
                if ("object" == typeof this.data)
                    for (var e in this.data) {
                        var a;
                        "string" == typeof this.data[e] ? a = encodeURIComponent(this.data[e]) : Array.isArray(this.data[e]) && (a = this.data[e].map(encodeURIComponent).join(",")), t += e + "=" + a
                    }
                return t
            }, i.prototype.toString = function() {
                var t = "";
                return this.from && (t += this.from + ":"), this.to && (t += this.to + ":"), t += this._getStringifiedData() + ";"
            };
            var s = function(t) {
                if (!(t = t || {}).device) throw new Error('ViewerHashAPI options need to contain the "device" identifier property');
                t.listen && this.listen(t.listen), this.device = t.device
            };
            s.prototype.appendToHash = function(t, e) {
                t instanceof i && (t = t.toString()), "string" == typeof t && -1 === (e = p(e)).location.hash.indexOf(t) && (e.location.hash = e.location.hash + t)
            }, s.prototype.removeFromHash = function(t, e) {
                if (!(t instanceof i)) throw new Error("Please supply an instance of ViewerHashMessage");
                var a = (e = p(e)).location.hash;
                a = t._msg && t._msg._originalString ? a.replace(t._msg._originalString, "") : a.replace(t.toString(), ""), e.location.hash = a
            };
            var p = function(t) {
                if ((t = (!0 === t ? window : t) || window) && t.tagName && "iframe" === t.tagName.toLowerCase() && (t = t.contentWindow), !t.addEventListener) throw new Error("Could not bind an event to supplied target. Please supply an instance of window or an iframe.");
                return t
            };
            s.prototype.listen = function(t) {
                return (t = p(t)).addEventListener("hashchange", this._onHashChange.bind(this, t), !1)
            }, s.prototype._onHashChange = function(t) {
                (this.getMessages(t.location.hash).messages || []).forEach(function(t) {
                    if (t)
                        if (t.data && !Array.isArray(t)) {
                            var e = t.data;
                            if ("object" == typeof t.data) {
                                var a = Object.keys(t.data);
                                e = t.data._key ? t.data._key : a[0]
                            }
                            e && this.trigger("message:" + e, t)
                        } else this.trigger("message", t)
                }.bind(this))
            }, s.prototype.getMessages = function(t) {
                var e = function(t, e) {
                        var a = t;
                        a.indexOf("#") > -1 && (a = a.slice(1));
                        var o = a.split(";"),
                            r = [];
                        for (var s in o) {
                            var p = new i(n(o[s]));
                            p.from && p.from === e || !p.data || r.push(p)
                        }
                        return r
                    }(t, this.device),
                    a = t;
                for (var o in e) a = e[o]._msg && e[o]._msg._originalString ? a.replace(e[o]._msg._originalString, "") : a.replace(e[o].toString(), "");
                return {
                    messages: e,
                    hash: a
                }
            }, s.prototype.createMessage = function(t) {
                return (t = t || {}).from = this.device, new i(t)
            }, o.mixin(s.prototype), i.prototype.removeFromHash = function() {
                s.prototype.removeFromHash.call(this, this)
            }, i.prototype.appendToHash = function() {
                s.prototype.appendToHash.call(this, this)
            }, t.exports = s
        }
    }
]);