(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [402], {
        FdAs: (e, n, o) => {
            var t, i = o("Hjnd"),
                a = o("Hjnd"),
                l = {
                    domainThreshold: 2,
                    secondLevelThreshold: 2,
                    topLevelThreshold: 2,
                    defaultDomains: ["msn.com", "bellsouth.net", "telus.net", "comcast.net", "optusnet.com.au", "earthlink.net", "qq.com", "sky.com", "icloud.com", "mac.com", "sympatico.ca", "googlemail.com", "att.net", "xtra.co.nz", "web.de", "cox.net", "gmail.com", "ymail.com", "aim.com", "rogers.com", "verizon.net", "rocketmail.com", "google.com", "optonline.net", "sbcglobal.net", "aol.com", "me.com", "btinternet.com", "charter.net", "shaw.ca"],
                    defaultSecondLevelDomains: ["yahoo", "hotmail", "mail", "live", "outlook", "gmx"],
                    defaultTopLevelDomains: ["com", "com.au", "com.tw", "ca", "co.nz", "co.uk", "de", "fr", "it", "ru", "net", "org", "edu", "gov", "jp", "nl", "kr", "se", "eu", "ie", "co.il", "us", "at", "be", "dk", "hk", "es", "gr", "ch", "no", "cz", "in", "net", "net.au", "info", "biz", "mil", "co.jp", "sg", "hu"],
                    run: function(e) {
                        e.domains = e.domains || l.defaultDomains, e.secondLevelDomains = e.secondLevelDomains || l.defaultSecondLevelDomains, e.topLevelDomains = e.topLevelDomains || l.defaultTopLevelDomains, e.distanceFunction = e.distanceFunction || l.sift3Distance;
                        var n = function(e) {
                                return e
                            },
                            o = e.suggested || n,
                            t = e.empty || n,
                            i = l.suggest(l.encodeEmail(e.email), e.domains, e.secondLevelDomains, e.topLevelDomains, e.distanceFunction);
                        return i ? o(i) : t()
                    },
                    suggest: function(e, n, o, t, i) {
                        e = e.toLowerCase();
                        var a = this.splitEmail(e);
                        if (o && t && -1 !== o.indexOf(a.secondLevelDomain) && -1 !== t.indexOf(a.topLevelDomain)) return !1;
                        if (r = this.findClosestDomain(a.domain, n, i, this.domainThreshold)) return r != a.domain && {
                            address: a.address,
                            domain: r,
                            full: a.address + "@" + r
                        };
                        var l = this.findClosestDomain(a.secondLevelDomain, o, i, this.secondLevelThreshold),
                            s = this.findClosestDomain(a.topLevelDomain, t, i, this.topLevelThreshold);
                        if (a.domain) {
                            var r = a.domain,
                                c = !1;
                            if (l && l != a.secondLevelDomain && (r = r.replace(a.secondLevelDomain, l), c = !0), s && s != a.topLevelDomain && (r = r.replace(a.topLevelDomain, s), c = !0), 1 == c) return {
                                address: a.address,
                                domain: r,
                                full: a.address + "@" + r
                            }
                        }
                        return !1
                    },
                    findClosestDomain: function(e, n, o, t) {
                        var i;
                        t = t || this.topLevelThreshold;
                        var a = 99,
                            l = null;
                        if (!e || !n) return !1;
                        o || (o = this.sift3Distance);
                        for (var s = 0; s < n.length; s++) {
                            if (e === n[s]) return e;
                            (i = o(e, n[s])) < a && (a = i, l = n[s])
                        }
                        return a <= t && null !== l && l
                    },
                    sift3Distance: function(e, n) {
                        if (null == e || 0 === e.length) return null == n || 0 === n.length ? 0 : n.length;
                        if (null == n || 0 === n.length) return e.length;
                        for (var o = 0, t = 0, i = 0, a = 0; o + t < e.length && o + i < n.length;) {
                            if (e.charAt(o + t) == n.charAt(o + i)) a++;
                            else {
                                t = 0, i = 0;
                                for (var l = 0; l < 5; l++) {
                                    if (o + l < e.length && e.charAt(o + l) == n.charAt(o)) {
                                        t = l;
                                        break
                                    }
                                    if (o + l < n.length && e.charAt(o) == n.charAt(o + l)) {
                                        i = l;
                                        break
                                    }
                                }
                            }
                            o++
                        }
                        return (e.length + n.length) / 2 - a
                    },
                    splitEmail: function(e) {
                        var n = e.trim().split("@");
                        if (n.length < 2) return !1;
                        for (var o = 0; o < n.length; o++)
                            if ("" === n[o]) return !1;
                        var t = n.pop(),
                            i = t.split("."),
                            a = "",
                            l = "";
                        if (0 == i.length) return !1;
                        if (1 == i.length) l = i[0];
                        else {
                            a = i[0];
                            for (o = 1; o < i.length; o++) l += i[o] + ".";
                            l = l.substring(0, l.length - 1)
                        }
                        return {
                            topLevelDomain: l,
                            secondLevelDomain: a,
                            domain: t,
                            address: n.join("@")
                        }
                    },
                    encodeEmail: function(e) {
                        var n = encodeURI(e);
                        return n = n.replace("%20", " ").replace("%25", "%").replace("%5E", "^").replace("%60", "`").replace("%7B", "{").replace("%7C", "|").replace("%7D", "}")
                    }
                };
            e.exports && (e.exports = l), void 0 === (t = function() {
                return l
            }.apply(n, [])) || (e.exports = t), "undefined" != typeof window && i && (a.fn.mailcheck = function(e) {
                var n = this;
                if (e.suggested) {
                    var o = e.suggested;
                    e.suggested = function(e) {
                        o(n, e)
                    }
                }
                if (e.empty) {
                    var t = e.empty;
                    e.empty = function() {
                        t.call(null, n)
                    }
                }
                e.email = this.val(), l.run(e)
            })
        }
    }
]);