"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [623], {
        vb8h: (t, n, e) => {
            function u(t) {
                return function(n) {
                    var e = n.dispatch,
                        u = n.getState;
                    return function(n) {
                        return function(r) {
                            return "function" == typeof r ? r(e, u, t) : n(r)
                        }
                    }
                }
            }
            e.d(n, {
                Z: () => c
            });
            var r = u();
            r.withExtraArgument = u;
            const c = r
        }
    }
]);