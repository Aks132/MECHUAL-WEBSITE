"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [6827], {
        "0IZU": (e, i, o) => {
            o.r(i);
            var t = o("mSEu"),
                n = o("D+1K"),
                s = o("45Yh"),
                a = o("7Kf0"),
                r = (0, s.C8)("trackers-options", "json");

            function l() {
                r && r.googleAnalytics && a.default.initialize(r.googleAnalytics)
            }
            o("eKF4").Z.me().canAccessFeature("ff_onetrust") ? window.OptanonWrapper = function() {
                var e, i;
                null !== (e = window) && void 0 !== e && null !== (i = e.OneTrust) && void 0 !== i && i.IsAlertBoxClosed() && (new RegExp(t.Z.onetrustCookieCategories.performance).test(window.OnetrustActiveGroups) && (l(), n.Z.initializeCookies()))
            } : (l(), n.Z.initializeCookies())
        }
    }
]);