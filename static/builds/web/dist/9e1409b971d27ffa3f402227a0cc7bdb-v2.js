"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [6111], {
        "7NZM": e => {
            e.exports = function(e, t, r, n) {
                var o = self || window;
                try {
                    try {
                        var c;
                        try {
                            c = new o.Blob([e])
                        } catch (t) {
                            (c = new(o.BlobBuilder || o.WebKitBlobBuilder || o.MozBlobBuilder || o.MSBlobBuilder)).append(e), c = c.getBlob()
                        }
                        var a = o.URL || o.webkitURL,
                            i = a.createObjectURL(c),
                            l = new o[t](i, r);
                        return a.revokeObjectURL(i), l
                    } catch (n) {
                        return new o[t]("data:application/javascript,".concat(encodeURIComponent(e)), r)
                    }
                } catch (e) {
                    if (!n) throw Error("Inline worker is not supported");
                    return new o[t](n, r)
                }
            }
        }
    }
]);