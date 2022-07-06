(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [1835], {
        F9s5: (t, a, n) => {
            a.glMatrix = n("Wn3h"), a.mat2 = n("0gLL"), a.mat2d = n("cN7g"), a.mat3 = n("3Hym"), a.mat4 = n("3i4J"), a.quat = n("LpTI"), a.vec2 = n("ULQE"), a.vec3 = n("6ScL"), a.vec4 = n("OUyW")
        },
        Wn3h: function(t) {
            var a = {
                EPSILON: 1e-6
            };
            a.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, a.RANDOM = Math.random, a.ENABLE_SIMD = !1, a.SIMD_AVAILABLE = a.ARRAY_TYPE === Float32Array && "SIMD" in this, a.USE_SIMD = a.ENABLE_SIMD && a.SIMD_AVAILABLE, a.setMatrixArrayType = function(t) {
                a.ARRAY_TYPE = t
            };
            var n = Math.PI / 180;
            a.toRadian = function(t) {
                return t * n
            }, a.equals = function(t, n) {
                return Math.abs(t - n) <= a.EPSILON * Math.max(1, Math.abs(t), Math.abs(n))
            }, t.exports = a
        },
        "0gLL": (t, a, n) => {
            var r = n("Wn3h"),
                o = {
                    create: function() {
                        var t = new r.ARRAY_TYPE(4);
                        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
                    },
                    clone: function(t) {
                        var a = new r.ARRAY_TYPE(4);
                        return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a
                    },
                    copy: function(t, a) {
                        return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t
                    },
                    identity: function(t) {
                        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
                    },
                    fromValues: function(t, a, n, o) {
                        var l = new r.ARRAY_TYPE(4);
                        return l[0] = t, l[1] = a, l[2] = n, l[3] = o, l
                    },
                    set: function(t, a, n, r, o) {
                        return t[0] = a, t[1] = n, t[2] = r, t[3] = o, t
                    },
                    transpose: function(t, a) {
                        if (t === a) {
                            var n = a[1];
                            t[1] = a[2], t[2] = n
                        } else t[0] = a[0], t[1] = a[2], t[2] = a[1], t[3] = a[3];
                        return t
                    },
                    invert: function(t, a) {
                        var n = a[0],
                            r = a[1],
                            o = a[2],
                            l = a[3],
                            u = n * l - o * r;
                        return u ? (u = 1 / u, t[0] = l * u, t[1] = -r * u, t[2] = -o * u, t[3] = n * u, t) : null
                    },
                    adjoint: function(t, a) {
                        var n = a[0];
                        return t[0] = a[3], t[1] = -a[1], t[2] = -a[2], t[3] = n, t
                    },
                    determinant: function(t) {
                        return t[0] * t[3] - t[2] * t[1]
                    },
                    multiply: function(t, a, n) {
                        var r = a[0],
                            o = a[1],
                            l = a[2],
                            u = a[3],
                            M = n[0],
                            e = n[1],
                            s = n[2],
                            i = n[3];
                        return t[0] = r * M + l * e, t[1] = o * M + u * e, t[2] = r * s + l * i, t[3] = o * s + u * i, t
                    }
                };
            o.mul = o.multiply, o.rotate = function(t, a, n) {
                var r = a[0],
                    o = a[1],
                    l = a[2],
                    u = a[3],
                    M = Math.sin(n),
                    e = Math.cos(n);
                return t[0] = r * e + l * M, t[1] = o * e + u * M, t[2] = r * -M + l * e, t[3] = o * -M + u * e, t
            }, o.scale = function(t, a, n) {
                var r = a[0],
                    o = a[1],
                    l = a[2],
                    u = a[3],
                    M = n[0],
                    e = n[1];
                return t[0] = r * M, t[1] = o * M, t[2] = l * e, t[3] = u * e, t
            }, o.fromRotation = function(t, a) {
                var n = Math.sin(a),
                    r = Math.cos(a);
                return t[0] = r, t[1] = n, t[2] = -n, t[3] = r, t
            }, o.fromScaling = function(t, a) {
                return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = a[1], t
            }, o.str = function(t) {
                return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            }, o.frob = function(t) {
                return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2))
            }, o.LDU = function(t, a, n, r) {
                return t[2] = r[2] / r[0], n[0] = r[0], n[1] = r[1], n[3] = r[3] - t[2] * n[1], [t, a, n]
            }, o.add = function(t, a, n) {
                return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t[2] = a[2] + n[2], t[3] = a[3] + n[3], t
            }, o.subtract = function(t, a, n) {
                return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t[2] = a[2] - n[2], t[3] = a[3] - n[3], t
            }, o.sub = o.subtract, o.exactEquals = function(t, a) {
                return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3]
            }, o.equals = function(t, a) {
                var n = t[0],
                    o = t[1],
                    l = t[2],
                    u = t[3],
                    M = a[0],
                    e = a[1],
                    s = a[2],
                    i = a[3];
                return Math.abs(n - M) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(M)) && Math.abs(o - e) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(e)) && Math.abs(l - s) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(s)) && Math.abs(u - i) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(i))
            }, o.multiplyScalar = function(t, a, n) {
                return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t[3] = a[3] * n, t
            }, o.multiplyScalarAndAdd = function(t, a, n, r) {
                return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t[2] = a[2] + n[2] * r, t[3] = a[3] + n[3] * r, t
            }, t.exports = o
        },
        cN7g: (t, a, n) => {
            var r = n("Wn3h"),
                o = {
                    create: function() {
                        var t = new r.ARRAY_TYPE(6);
                        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
                    },
                    clone: function(t) {
                        var a = new r.ARRAY_TYPE(6);
                        return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a[4] = t[4], a[5] = t[5], a
                    },
                    copy: function(t, a) {
                        return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], t
                    },
                    identity: function(t) {
                        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
                    },
                    fromValues: function(t, a, n, o, l, u) {
                        var M = new r.ARRAY_TYPE(6);
                        return M[0] = t, M[1] = a, M[2] = n, M[3] = o, M[4] = l, M[5] = u, M
                    },
                    set: function(t, a, n, r, o, l, u) {
                        return t[0] = a, t[1] = n, t[2] = r, t[3] = o, t[4] = l, t[5] = u, t
                    },
                    invert: function(t, a) {
                        var n = a[0],
                            r = a[1],
                            o = a[2],
                            l = a[3],
                            u = a[4],
                            M = a[5],
                            e = n * l - r * o;
                        return e ? (e = 1 / e, t[0] = l * e, t[1] = -r * e, t[2] = -o * e, t[3] = n * e, t[4] = (o * M - l * u) * e, t[5] = (r * u - n * M) * e, t) : null
                    },
                    determinant: function(t) {
                        return t[0] * t[3] - t[1] * t[2]
                    },
                    multiply: function(t, a, n) {
                        var r = a[0],
                            o = a[1],
                            l = a[2],
                            u = a[3],
                            M = a[4],
                            e = a[5],
                            s = n[0],
                            i = n[1],
                            c = n[2],
                            h = n[3],
                            S = n[4],
                            I = n[5];
                        return t[0] = r * s + l * i, t[1] = o * s + u * i, t[2] = r * c + l * h, t[3] = o * c + u * h, t[4] = r * S + l * I + M, t[5] = o * S + u * I + e, t
                    }
                };
            o.mul = o.multiply, o.rotate = function(t, a, n) {
                var r = a[0],
                    o = a[1],
                    l = a[2],
                    u = a[3],
                    M = a[4],
                    e = a[5],
                    s = Math.sin(n),
                    i = Math.cos(n);
                return t[0] = r * i + l * s, t[1] = o * i + u * s, t[2] = r * -s + l * i, t[3] = o * -s + u * i, t[4] = M, t[5] = e, t
            }, o.scale = function(t, a, n) {
                var r = a[0],
                    o = a[1],
                    l = a[2],
                    u = a[3],
                    M = a[4],
                    e = a[5],
                    s = n[0],
                    i = n[1];
                return t[0] = r * s, t[1] = o * s, t[2] = l * i, t[3] = u * i, t[4] = M, t[5] = e, t
            }, o.translate = function(t, a, n) {
                var r = a[0],
                    o = a[1],
                    l = a[2],
                    u = a[3],
                    M = a[4],
                    e = a[5],
                    s = n[0],
                    i = n[1];
                return t[0] = r, t[1] = o, t[2] = l, t[3] = u, t[4] = r * s + l * i + M, t[5] = o * s + u * i + e, t
            }, o.fromRotation = function(t, a) {
                var n = Math.sin(a),
                    r = Math.cos(a);
                return t[0] = r, t[1] = n, t[2] = -n, t[3] = r, t[4] = 0, t[5] = 0, t
            }, o.fromScaling = function(t, a) {
                return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = a[1], t[4] = 0, t[5] = 0, t
            }, o.fromTranslation = function(t, a) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = a[0], t[5] = a[1], t
            }, o.str = function(t) {
                return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")"
            }, o.frob = function(t) {
                return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1)
            }, o.add = function(t, a, n) {
                return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t[2] = a[2] + n[2], t[3] = a[3] + n[3], t[4] = a[4] + n[4], t[5] = a[5] + n[5], t
            }, o.subtract = function(t, a, n) {
                return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t[2] = a[2] - n[2], t[3] = a[3] - n[3], t[4] = a[4] - n[4], t[5] = a[5] - n[5], t
            }, o.sub = o.subtract, o.multiplyScalar = function(t, a, n) {
                return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t[3] = a[3] * n, t[4] = a[4] * n, t[5] = a[5] * n, t
            }, o.multiplyScalarAndAdd = function(t, a, n, r) {
                return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t[2] = a[2] + n[2] * r, t[3] = a[3] + n[3] * r, t[4] = a[4] + n[4] * r, t[5] = a[5] + n[5] * r, t
            }, o.exactEquals = function(t, a) {
                return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3] && t[4] === a[4] && t[5] === a[5]
            }, o.equals = function(t, a) {
                var n = t[0],
                    o = t[1],
                    l = t[2],
                    u = t[3],
                    M = t[4],
                    e = t[5],
                    s = a[0],
                    i = a[1],
                    c = a[2],
                    h = a[3],
                    S = a[4],
                    I = a[5];
                return Math.abs(n - s) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(o - i) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(i)) && Math.abs(l - c) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(c)) && Math.abs(u - h) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(h)) && Math.abs(M - S) <= r.EPSILON * Math.max(1, Math.abs(M), Math.abs(S)) && Math.abs(e - I) <= r.EPSILON * Math.max(1, Math.abs(e), Math.abs(I))
            }, t.exports = o
        },
        "3Hym": (t, a, n) => {
            var r = n("Wn3h"),
                o = {
                    create: function() {
                        var t = new r.ARRAY_TYPE(9);
                        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
                    },
                    fromMat4: function(t, a) {
                        return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[4], t[4] = a[5], t[5] = a[6], t[6] = a[8], t[7] = a[9], t[8] = a[10], t
                    },
                    clone: function(t) {
                        var a = new r.ARRAY_TYPE(9);
                        return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a[4] = t[4], a[5] = t[5], a[6] = t[6], a[7] = t[7], a[8] = t[8], a
                    },
                    copy: function(t, a) {
                        return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], t[6] = a[6], t[7] = a[7], t[8] = a[8], t
                    },
                    fromValues: function(t, a, n, o, l, u, M, e, s) {
                        var i = new r.ARRAY_TYPE(9);
                        return i[0] = t, i[1] = a, i[2] = n, i[3] = o, i[4] = l, i[5] = u, i[6] = M, i[7] = e, i[8] = s, i
                    },
                    set: function(t, a, n, r, o, l, u, M, e, s) {
                        return t[0] = a, t[1] = n, t[2] = r, t[3] = o, t[4] = l, t[5] = u, t[6] = M, t[7] = e, t[8] = s, t
                    },
                    identity: function(t) {
                        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
                    },
                    transpose: function(t, a) {
                        if (t === a) {
                            var n = a[1],
                                r = a[2],
                                o = a[5];
                            t[1] = a[3], t[2] = a[6], t[3] = n, t[5] = a[7], t[6] = r, t[7] = o
                        } else t[0] = a[0], t[1] = a[3], t[2] = a[6], t[3] = a[1], t[4] = a[4], t[5] = a[7], t[6] = a[2], t[7] = a[5], t[8] = a[8];
                        return t
                    },
                    invert: function(t, a) {
                        var n = a[0],
                            r = a[1],
                            o = a[2],
                            l = a[3],
                            u = a[4],
                            M = a[5],
                            e = a[6],
                            s = a[7],
                            i = a[8],
                            c = i * u - M * s,
                            h = -i * l + M * e,
                            S = s * l - u * e,
                            I = n * c + r * h + o * S;
                        return I ? (I = 1 / I, t[0] = c * I, t[1] = (-i * r + o * s) * I, t[2] = (M * r - o * u) * I, t[3] = h * I, t[4] = (i * n - o * e) * I, t[5] = (-M * n + o * l) * I, t[6] = S * I, t[7] = (-s * n + r * e) * I, t[8] = (u * n - r * l) * I, t) : null
                    },
                    adjoint: function(t, a) {
                        var n = a[0],
                            r = a[1],
                            o = a[2],
                            l = a[3],
                            u = a[4],
                            M = a[5],
                            e = a[6],
                            s = a[7],
                            i = a[8];
                        return t[0] = u * i - M * s, t[1] = o * s - r * i, t[2] = r * M - o * u, t[3] = M * e - l * i, t[4] = n * i - o * e, t[5] = o * l - n * M, t[6] = l * s - u * e, t[7] = r * e - n * s, t[8] = n * u - r * l, t
                    },
                    determinant: function(t) {
                        var a = t[0],
                            n = t[1],
                            r = t[2],
                            o = t[3],
                            l = t[4],
                            u = t[5],
                            M = t[6],
                            e = t[7],
                            s = t[8];
                        return a * (s * l - u * e) + n * (-s * o + u * M) + r * (e * o - l * M)
                    },
                    multiply: function(t, a, n) {
                        var r = a[0],
                            o = a[1],
                            l = a[2],
                            u = a[3],
                            M = a[4],
                            e = a[5],
                            s = a[6],
                            i = a[7],
                            c = a[8],
                            h = n[0],
                            S = n[1],
                            I = n[2],
                            x = n[3],
                            f = n[4],
                            D = n[5],
                            F = n[6],
                            m = n[7],
                            d = n[8];
                        return t[0] = h * r + S * u + I * s, t[1] = h * o + S * M + I * i, t[2] = h * l + S * e + I * c, t[3] = x * r + f * u + D * s, t[4] = x * o + f * M + D * i, t[5] = x * l + f * e + D * c, t[6] = F * r + m * u + d * s, t[7] = F * o + m * M + d * i, t[8] = F * l + m * e + d * c, t
                    }
                };
            o.mul = o.multiply, o.translate = function(t, a, n) {
                var r = a[0],
                    o = a[1],
                    l = a[2],
                    u = a[3],
                    M = a[4],
                    e = a[5],
                    s = a[6],
                    i = a[7],
                    c = a[8],
                    h = n[0],
                    S = n[1];
                return t[0] = r, t[1] = o, t[2] = l, t[3] = u, t[4] = M, t[5] = e, t[6] = h * r + S * u + s, t[7] = h * o + S * M + i, t[8] = h * l + S * e + c, t
            }, o.rotate = function(t, a, n) {
                var r = a[0],
                    o = a[1],
                    l = a[2],
                    u = a[3],
                    M = a[4],
                    e = a[5],
                    s = a[6],
                    i = a[7],
                    c = a[8],
                    h = Math.sin(n),
                    S = Math.cos(n);
                return t[0] = S * r + h * u, t[1] = S * o + h * M, t[2] = S * l + h * e, t[3] = S * u - h * r, t[4] = S * M - h * o, t[5] = S * e - h * l, t[6] = s, t[7] = i, t[8] = c, t
            }, o.scale = function(t, a, n) {
                var r = n[0],
                    o = n[1];
                return t[0] = r * a[0], t[1] = r * a[1], t[2] = r * a[2], t[3] = o * a[3], t[4] = o * a[4], t[5] = o * a[5], t[6] = a[6], t[7] = a[7], t[8] = a[8], t
            }, o.fromTranslation = function(t, a) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = a[0], t[7] = a[1], t[8] = 1, t
            }, o.fromRotation = function(t, a) {
                var n = Math.sin(a),
                    r = Math.cos(a);
                return t[0] = r, t[1] = n, t[2] = 0, t[3] = -n, t[4] = r, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
            }, o.fromScaling = function(t, a) {
                return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = a[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
            }, o.fromMat2d = function(t, a) {
                return t[0] = a[0], t[1] = a[1], t[2] = 0, t[3] = a[2], t[4] = a[3], t[5] = 0, t[6] = a[4], t[7] = a[5], t[8] = 1, t
            }, o.fromQuat = function(t, a) {
                var n = a[0],
                    r = a[1],
                    o = a[2],
                    l = a[3],
                    u = n + n,
                    M = r + r,
                    e = o + o,
                    s = n * u,
                    i = r * u,
                    c = r * M,
                    h = o * u,
                    S = o * M,
                    I = o * e,
                    x = l * u,
                    f = l * M,
                    D = l * e;
                return t[0] = 1 - c - I, t[3] = i - D, t[6] = h + f, t[1] = i + D, t[4] = 1 - s - I, t[7] = S - x, t[2] = h - f, t[5] = S + x, t[8] = 1 - s - c, t
            }, o.normalFromMat4 = function(t, a) {
                var n = a[0],
                    r = a[1],
                    o = a[2],
                    l = a[3],
                    u = a[4],
                    M = a[5],
                    e = a[6],
                    s = a[7],
                    i = a[8],
                    c = a[9],
                    h = a[10],
                    S = a[11],
                    I = a[12],
                    x = a[13],
                    f = a[14],
                    D = a[15],
                    F = n * M - r * u,
                    m = n * e - o * u,
                    d = n * s - l * u,
                    b = r * e - o * M,
                    v = r * s - l * M,
                    z = o * s - l * e,
                    w = i * x - c * I,
                    p = i * f - h * I,
                    E = i * D - S * I,
                    A = c * f - h * x,
                    P = c * D - S * x,
                    L = h * D - S * f,
                    q = F * L - m * P + d * A + b * E - v * p + z * w;
                return q ? (q = 1 / q, t[0] = (M * L - e * P + s * A) * q, t[1] = (e * E - u * L - s * p) * q, t[2] = (u * P - M * E + s * w) * q, t[3] = (o * P - r * L - l * A) * q, t[4] = (n * L - o * E + l * p) * q, t[5] = (r * E - n * P - l * w) * q, t[6] = (x * z - f * v + D * b) * q, t[7] = (f * d - I * z - D * m) * q, t[8] = (I * v - x * d + D * F) * q, t) : null
            }, o.str = function(t) {
                return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
            }, o.frob = function(t) {
                return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2))
            }, o.add = function(t, a, n) {
                return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t[2] = a[2] + n[2], t[3] = a[3] + n[3], t[4] = a[4] + n[4], t[5] = a[5] + n[5], t[6] = a[6] + n[6], t[7] = a[7] + n[7], t[8] = a[8] + n[8], t
            }, o.subtract = function(t, a, n) {
                return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t[2] = a[2] - n[2], t[3] = a[3] - n[3], t[4] = a[4] - n[4], t[5] = a[5] - n[5], t[6] = a[6] - n[6], t[7] = a[7] - n[7], t[8] = a[8] - n[8], t
            }, o.sub = o.subtract, o.multiplyScalar = function(t, a, n) {
                return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t[3] = a[3] * n, t[4] = a[4] * n, t[5] = a[5] * n, t[6] = a[6] * n, t[7] = a[7] * n, t[8] = a[8] * n, t
            }, o.multiplyScalarAndAdd = function(t, a, n, r) {
                return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t[2] = a[2] + n[2] * r, t[3] = a[3] + n[3] * r, t[4] = a[4] + n[4] * r, t[5] = a[5] + n[5] * r, t[6] = a[6] + n[6] * r, t[7] = a[7] + n[7] * r, t[8] = a[8] + n[8] * r, t
            }, o.exactEquals = function(t, a) {
                return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3] && t[4] === a[4] && t[5] === a[5] && t[6] === a[6] && t[7] === a[7] && t[8] === a[8]
            }, o.equals = function(t, a) {
                var n = t[0],
                    o = t[1],
                    l = t[2],
                    u = t[3],
                    M = t[4],
                    e = t[5],
                    s = t[6],
                    i = t[7],
                    c = t[8],
                    h = a[0],
                    S = a[1],
                    I = a[2],
                    x = a[3],
                    f = a[4],
                    D = a[5],
                    F = t[6],
                    m = a[7],
                    d = a[8];
                return Math.abs(n - h) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(h)) && Math.abs(o - S) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(S)) && Math.abs(l - I) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(I)) && Math.abs(u - x) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(x)) && Math.abs(M - f) <= r.EPSILON * Math.max(1, Math.abs(M), Math.abs(f)) && Math.abs(e - D) <= r.EPSILON * Math.max(1, Math.abs(e), Math.abs(D)) && Math.abs(s - F) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(F)) && Math.abs(i - m) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(m)) && Math.abs(c - d) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(d))
            }, t.exports = o
        },
        "3i4J": (t, a, n) => {
            var r = n("Wn3h"),
                o = {
                    scalar: {},
                    SIMD: {},
                    create: function() {
                        var t = new r.ARRAY_TYPE(16);
                        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                    },
                    clone: function(t) {
                        var a = new r.ARRAY_TYPE(16);
                        return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a[4] = t[4], a[5] = t[5], a[6] = t[6], a[7] = t[7], a[8] = t[8], a[9] = t[9], a[10] = t[10], a[11] = t[11], a[12] = t[12], a[13] = t[13], a[14] = t[14], a[15] = t[15], a
                    },
                    copy: function(t, a) {
                        return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], t[6] = a[6], t[7] = a[7], t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11], t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15], t
                    },
                    fromValues: function(t, a, n, o, l, u, M, e, s, i, c, h, S, I, x, f) {
                        var D = new r.ARRAY_TYPE(16);
                        return D[0] = t, D[1] = a, D[2] = n, D[3] = o, D[4] = l, D[5] = u, D[6] = M, D[7] = e, D[8] = s, D[9] = i, D[10] = c, D[11] = h, D[12] = S, D[13] = I, D[14] = x, D[15] = f, D
                    },
                    set: function(t, a, n, r, o, l, u, M, e, s, i, c, h, S, I, x, f) {
                        return t[0] = a, t[1] = n, t[2] = r, t[3] = o, t[4] = l, t[5] = u, t[6] = M, t[7] = e, t[8] = s, t[9] = i, t[10] = c, t[11] = h, t[12] = S, t[13] = I, t[14] = x, t[15] = f, t
                    },
                    identity: function(t) {
                        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                    }
                };
            o.scalar.transpose = function(t, a) {
                if (t === a) {
                    var n = a[1],
                        r = a[2],
                        o = a[3],
                        l = a[6],
                        u = a[7],
                        M = a[11];
                    t[1] = a[4], t[2] = a[8], t[3] = a[12], t[4] = n, t[6] = a[9], t[7] = a[13], t[8] = r, t[9] = l, t[11] = a[14], t[12] = o, t[13] = u, t[14] = M
                } else t[0] = a[0], t[1] = a[4], t[2] = a[8], t[3] = a[12], t[4] = a[1], t[5] = a[5], t[6] = a[9], t[7] = a[13], t[8] = a[2], t[9] = a[6], t[10] = a[10], t[11] = a[14], t[12] = a[3], t[13] = a[7], t[14] = a[11], t[15] = a[15];
                return t
            }, o.SIMD.transpose = function(t, a) {
                var n, r, o, l, u, M, e, s, i, c;
                return n = SIMD.Float32x4.load(a, 0), r = SIMD.Float32x4.load(a, 4), o = SIMD.Float32x4.load(a, 8), l = SIMD.Float32x4.load(a, 12), u = SIMD.Float32x4.shuffle(n, r, 0, 1, 4, 5), M = SIMD.Float32x4.shuffle(o, l, 0, 1, 4, 5), e = SIMD.Float32x4.shuffle(u, M, 0, 2, 4, 6), s = SIMD.Float32x4.shuffle(u, M, 1, 3, 5, 7), SIMD.Float32x4.store(t, 0, e), SIMD.Float32x4.store(t, 4, s), u = SIMD.Float32x4.shuffle(n, r, 2, 3, 6, 7), M = SIMD.Float32x4.shuffle(o, l, 2, 3, 6, 7), i = SIMD.Float32x4.shuffle(u, M, 0, 2, 4, 6), c = SIMD.Float32x4.shuffle(u, M, 1, 3, 5, 7), SIMD.Float32x4.store(t, 8, i), SIMD.Float32x4.store(t, 12, c), t
            }, o.transpose = r.USE_SIMD ? o.SIMD.transpose : o.scalar.transpose, o.scalar.invert = function(t, a) {
                var n = a[0],
                    r = a[1],
                    o = a[2],
                    l = a[3],
                    u = a[4],
                    M = a[5],
                    e = a[6],
                    s = a[7],
                    i = a[8],
                    c = a[9],
                    h = a[10],
                    S = a[11],
                    I = a[12],
                    x = a[13],
                    f = a[14],
                    D = a[15],
                    F = n * M - r * u,
                    m = n * e - o * u,
                    d = n * s - l * u,
                    b = r * e - o * M,
                    v = r * s - l * M,
                    z = o * s - l * e,
                    w = i * x - c * I,
                    p = i * f - h * I,
                    E = i * D - S * I,
                    A = c * f - h * x,
                    P = c * D - S * x,
                    L = h * D - S * f,
                    q = F * L - m * P + d * A + b * E - v * p + z * w;
                return q ? (q = 1 / q, t[0] = (M * L - e * P + s * A) * q, t[1] = (o * P - r * L - l * A) * q, t[2] = (x * z - f * v + D * b) * q, t[3] = (h * v - c * z - S * b) * q, t[4] = (e * E - u * L - s * p) * q, t[5] = (n * L - o * E + l * p) * q, t[6] = (f * d - I * z - D * m) * q, t[7] = (i * z - h * d + S * m) * q, t[8] = (u * P - M * E + s * w) * q, t[9] = (r * E - n * P - l * w) * q, t[10] = (I * v - x * d + D * F) * q, t[11] = (c * d - i * v - S * F) * q, t[12] = (M * p - u * A - e * w) * q, t[13] = (n * A - r * p + o * w) * q, t[14] = (x * m - I * b - f * F) * q, t[15] = (i * b - c * m + h * F) * q, t) : null
            }, o.SIMD.invert = function(t, a) {
                var n, r, o, l, u, M, e, s, i, c, h = SIMD.Float32x4.load(a, 0),
                    S = SIMD.Float32x4.load(a, 4),
                    I = SIMD.Float32x4.load(a, 8),
                    x = SIMD.Float32x4.load(a, 12);
                return u = SIMD.Float32x4.shuffle(h, S, 0, 1, 4, 5), r = SIMD.Float32x4.shuffle(I, x, 0, 1, 4, 5), n = SIMD.Float32x4.shuffle(u, r, 0, 2, 4, 6), r = SIMD.Float32x4.shuffle(r, u, 1, 3, 5, 7), u = SIMD.Float32x4.shuffle(h, S, 2, 3, 6, 7), l = SIMD.Float32x4.shuffle(I, x, 2, 3, 6, 7), o = SIMD.Float32x4.shuffle(u, l, 0, 2, 4, 6), l = SIMD.Float32x4.shuffle(l, u, 1, 3, 5, 7), u = SIMD.Float32x4.mul(o, l), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), M = SIMD.Float32x4.mul(r, u), e = SIMD.Float32x4.mul(n, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), M = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, u), M), e = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, u), e), e = SIMD.Float32x4.swizzle(e, 2, 3, 0, 1), u = SIMD.Float32x4.mul(r, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), M = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, u), M), i = SIMD.Float32x4.mul(n, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), M = SIMD.Float32x4.sub(M, SIMD.Float32x4.mul(l, u)), i = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, u), i), i = SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), u = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(r, 2, 3, 0, 1), l), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), o = SIMD.Float32x4.swizzle(o, 2, 3, 0, 1), M = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), M), s = SIMD.Float32x4.mul(n, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), M = SIMD.Float32x4.sub(M, SIMD.Float32x4.mul(o, u)), s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, u), s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), u = SIMD.Float32x4.mul(n, r), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, u), s), i = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, u), i), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(l, u), s), i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(o, u)), u = SIMD.Float32x4.mul(n, l), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), e = SIMD.Float32x4.sub(e, SIMD.Float32x4.mul(o, u)), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, u), s), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), e = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), e), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(r, u)), u = SIMD.Float32x4.mul(n, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), e = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, u), e), i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(r, u)), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), e = SIMD.Float32x4.sub(e, SIMD.Float32x4.mul(l, u)), i = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, u), i), c = SIMD.Float32x4.mul(n, M), c = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), c), c = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), c), u = SIMD.Float32x4.reciprocalApproximation(c), c = SIMD.Float32x4.sub(SIMD.Float32x4.add(u, u), SIMD.Float32x4.mul(c, SIMD.Float32x4.mul(u, u))), (c = SIMD.Float32x4.swizzle(c, 0, 0, 0, 0)) ? (SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(c, M)), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(c, e)), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(c, s)), SIMD.Float32x4.store(t, 12, SIMD.Float32x4.mul(c, i)), t) : null
            }, o.invert = r.USE_SIMD ? o.SIMD.invert : o.scalar.invert, o.scalar.adjoint = function(t, a) {
                var n = a[0],
                    r = a[1],
                    o = a[2],
                    l = a[3],
                    u = a[4],
                    M = a[5],
                    e = a[6],
                    s = a[7],
                    i = a[8],
                    c = a[9],
                    h = a[10],
                    S = a[11],
                    I = a[12],
                    x = a[13],
                    f = a[14],
                    D = a[15];
                return t[0] = M * (h * D - S * f) - c * (e * D - s * f) + x * (e * S - s * h), t[1] = -(r * (h * D - S * f) - c * (o * D - l * f) + x * (o * S - l * h)), t[2] = r * (e * D - s * f) - M * (o * D - l * f) + x * (o * s - l * e), t[3] = -(r * (e * S - s * h) - M * (o * S - l * h) + c * (o * s - l * e)), t[4] = -(u * (h * D - S * f) - i * (e * D - s * f) + I * (e * S - s * h)), t[5] = n * (h * D - S * f) - i * (o * D - l * f) + I * (o * S - l * h), t[6] = -(n * (e * D - s * f) - u * (o * D - l * f) + I * (o * s - l * e)), t[7] = n * (e * S - s * h) - u * (o * S - l * h) + i * (o * s - l * e), t[8] = u * (c * D - S * x) - i * (M * D - s * x) + I * (M * S - s * c), t[9] = -(n * (c * D - S * x) - i * (r * D - l * x) + I * (r * S - l * c)), t[10] = n * (M * D - s * x) - u * (r * D - l * x) + I * (r * s - l * M), t[11] = -(n * (M * S - s * c) - u * (r * S - l * c) + i * (r * s - l * M)), t[12] = -(u * (c * f - h * x) - i * (M * f - e * x) + I * (M * h - e * c)), t[13] = n * (c * f - h * x) - i * (r * f - o * x) + I * (r * h - o * c), t[14] = -(n * (M * f - e * x) - u * (r * f - o * x) + I * (r * e - o * M)), t[15] = n * (M * h - e * c) - u * (r * h - o * c) + i * (r * e - o * M), t
            }, o.SIMD.adjoint = function(t, a) {
                var n, r, o, l, u, M, e, s, i, c = SIMD.Float32x4.load(a, 0),
                    h = SIMD.Float32x4.load(a, 4),
                    S = SIMD.Float32x4.load(a, 8),
                    I = SIMD.Float32x4.load(a, 12);
                return u = SIMD.Float32x4.shuffle(c, h, 0, 1, 4, 5), r = SIMD.Float32x4.shuffle(S, I, 0, 1, 4, 5), n = SIMD.Float32x4.shuffle(u, r, 0, 2, 4, 6), r = SIMD.Float32x4.shuffle(r, u, 1, 3, 5, 7), u = SIMD.Float32x4.shuffle(c, h, 2, 3, 6, 7), l = SIMD.Float32x4.shuffle(S, I, 2, 3, 6, 7), o = SIMD.Float32x4.shuffle(u, l, 0, 2, 4, 6), l = SIMD.Float32x4.shuffle(l, u, 1, 3, 5, 7), u = SIMD.Float32x4.mul(o, l), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), M = SIMD.Float32x4.mul(r, u), e = SIMD.Float32x4.mul(n, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), M = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, u), M), e = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, u), e), e = SIMD.Float32x4.swizzle(e, 2, 3, 0, 1), u = SIMD.Float32x4.mul(r, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), M = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, u), M), i = SIMD.Float32x4.mul(n, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), M = SIMD.Float32x4.sub(M, SIMD.Float32x4.mul(l, u)), i = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, u), i), i = SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), u = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(r, 2, 3, 0, 1), l), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), o = SIMD.Float32x4.swizzle(o, 2, 3, 0, 1), M = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), M), s = SIMD.Float32x4.mul(n, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), M = SIMD.Float32x4.sub(M, SIMD.Float32x4.mul(o, u)), s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, u), s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), u = SIMD.Float32x4.mul(n, r), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, u), s), i = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, u), i), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(l, u), s), i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(o, u)), u = SIMD.Float32x4.mul(n, l), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), e = SIMD.Float32x4.sub(e, SIMD.Float32x4.mul(o, u)), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, u), s), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), e = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, u), e), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(r, u)), u = SIMD.Float32x4.mul(n, o), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), e = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, u), e), i = SIMD.Float32x4.sub(i, SIMD.Float32x4.mul(r, u)), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), e = SIMD.Float32x4.sub(e, SIMD.Float32x4.mul(l, u)), i = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, u), i), SIMD.Float32x4.store(t, 0, M), SIMD.Float32x4.store(t, 4, e), SIMD.Float32x4.store(t, 8, s), SIMD.Float32x4.store(t, 12, i), t
            }, o.adjoint = r.USE_SIMD ? o.SIMD.adjoint : o.scalar.adjoint, o.determinant = function(t) {
                var a = t[0],
                    n = t[1],
                    r = t[2],
                    o = t[3],
                    l = t[4],
                    u = t[5],
                    M = t[6],
                    e = t[7],
                    s = t[8],
                    i = t[9],
                    c = t[10],
                    h = t[11],
                    S = t[12],
                    I = t[13],
                    x = t[14],
                    f = t[15];
                return (a * u - n * l) * (c * f - h * x) - (a * M - r * l) * (i * f - h * I) + (a * e - o * l) * (i * x - c * I) + (n * M - r * u) * (s * f - h * S) - (n * e - o * u) * (s * x - c * S) + (r * e - o * M) * (s * I - i * S)
            }, o.SIMD.multiply = function(t, a, n) {
                var r = SIMD.Float32x4.load(a, 0),
                    o = SIMD.Float32x4.load(a, 4),
                    l = SIMD.Float32x4.load(a, 8),
                    u = SIMD.Float32x4.load(a, 12),
                    M = SIMD.Float32x4.load(n, 0),
                    e = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(M, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(M, 1, 1, 1, 1), o), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(M, 2, 2, 2, 2), l), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(M, 3, 3, 3, 3), u))));
                SIMD.Float32x4.store(t, 0, e);
                var s = SIMD.Float32x4.load(n, 4),
                    i = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 1, 1, 1, 1), o), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 2, 2, 2, 2), l), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 3, 3, 3, 3), u))));
                SIMD.Float32x4.store(t, 4, i);
                var c = SIMD.Float32x4.load(n, 8),
                    h = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 1, 1, 1, 1), o), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 2, 2, 2, 2), l), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 3, 3, 3, 3), u))));
                SIMD.Float32x4.store(t, 8, h);
                var S = SIMD.Float32x4.load(n, 12),
                    I = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(S, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(S, 1, 1, 1, 1), o), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(S, 2, 2, 2, 2), l), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(S, 3, 3, 3, 3), u))));
                return SIMD.Float32x4.store(t, 12, I), t
            }, o.scalar.multiply = function(t, a, n) {
                var r = a[0],
                    o = a[1],
                    l = a[2],
                    u = a[3],
                    M = a[4],
                    e = a[5],
                    s = a[6],
                    i = a[7],
                    c = a[8],
                    h = a[9],
                    S = a[10],
                    I = a[11],
                    x = a[12],
                    f = a[13],
                    D = a[14],
                    F = a[15],
                    m = n[0],
                    d = n[1],
                    b = n[2],
                    v = n[3];
                return t[0] = m * r + d * M + b * c + v * x, t[1] = m * o + d * e + b * h + v * f, t[2] = m * l + d * s + b * S + v * D, t[3] = m * u + d * i + b * I + v * F, m = n[4], d = n[5], b = n[6], v = n[7], t[4] = m * r + d * M + b * c + v * x, t[5] = m * o + d * e + b * h + v * f, t[6] = m * l + d * s + b * S + v * D, t[7] = m * u + d * i + b * I + v * F, m = n[8], d = n[9], b = n[10], v = n[11], t[8] = m * r + d * M + b * c + v * x, t[9] = m * o + d * e + b * h + v * f, t[10] = m * l + d * s + b * S + v * D, t[11] = m * u + d * i + b * I + v * F, m = n[12], d = n[13], b = n[14], v = n[15], t[12] = m * r + d * M + b * c + v * x, t[13] = m * o + d * e + b * h + v * f, t[14] = m * l + d * s + b * S + v * D, t[15] = m * u + d * i + b * I + v * F, t
            }, o.multiply = r.USE_SIMD ? o.SIMD.multiply : o.scalar.multiply, o.mul = o.multiply, o.scalar.translate = function(t, a, n) {
                var r, o, l, u, M, e, s, i, c, h, S, I, x = n[0],
                    f = n[1],
                    D = n[2];
                return a === t ? (t[12] = a[0] * x + a[4] * f + a[8] * D + a[12], t[13] = a[1] * x + a[5] * f + a[9] * D + a[13], t[14] = a[2] * x + a[6] * f + a[10] * D + a[14], t[15] = a[3] * x + a[7] * f + a[11] * D + a[15]) : (r = a[0], o = a[1], l = a[2], u = a[3], M = a[4], e = a[5], s = a[6], i = a[7], c = a[8], h = a[9], S = a[10], I = a[11], t[0] = r, t[1] = o, t[2] = l, t[3] = u, t[4] = M, t[5] = e, t[6] = s, t[7] = i, t[8] = c, t[9] = h, t[10] = S, t[11] = I, t[12] = r * x + M * f + c * D + a[12], t[13] = o * x + e * f + h * D + a[13], t[14] = l * x + s * f + S * D + a[14], t[15] = u * x + i * f + I * D + a[15]), t
            }, o.SIMD.translate = function(t, a, n) {
                var r = SIMD.Float32x4.load(a, 0),
                    o = SIMD.Float32x4.load(a, 4),
                    l = SIMD.Float32x4.load(a, 8),
                    u = SIMD.Float32x4.load(a, 12),
                    M = SIMD.Float32x4(n[0], n[1], n[2], 0);
                a !== t && (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], t[6] = a[6], t[7] = a[7], t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11]), r = SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(M, 0, 0, 0, 0)), o = SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(M, 1, 1, 1, 1)), l = SIMD.Float32x4.mul(l, SIMD.Float32x4.swizzle(M, 2, 2, 2, 2));
                var e = SIMD.Float32x4.add(r, SIMD.Float32x4.add(o, SIMD.Float32x4.add(l, u)));
                return SIMD.Float32x4.store(t, 12, e), t
            }, o.translate = r.USE_SIMD ? o.SIMD.translate : o.scalar.translate, o.scalar.scale = function(t, a, n) {
                var r = n[0],
                    o = n[1],
                    l = n[2];
                return t[0] = a[0] * r, t[1] = a[1] * r, t[2] = a[2] * r, t[3] = a[3] * r, t[4] = a[4] * o, t[5] = a[5] * o, t[6] = a[6] * o, t[7] = a[7] * o, t[8] = a[8] * l, t[9] = a[9] * l, t[10] = a[10] * l, t[11] = a[11] * l, t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15], t
            }, o.SIMD.scale = function(t, a, n) {
                var r, o, l, u = SIMD.Float32x4(n[0], n[1], n[2], 0);
                return r = SIMD.Float32x4.load(a, 0), SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(u, 0, 0, 0, 0))), o = SIMD.Float32x4.load(a, 4), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(u, 1, 1, 1, 1))), l = SIMD.Float32x4.load(a, 8), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(l, SIMD.Float32x4.swizzle(u, 2, 2, 2, 2))), t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15], t
            }, o.scale = r.USE_SIMD ? o.SIMD.scale : o.scalar.scale, o.rotate = function(t, a, n, o) {
                var l, u, M, e, s, i, c, h, S, I, x, f, D, F, m, d, b, v, z, w, p, E, A, P, L = o[0],
                    q = o[1],
                    R = o[2],
                    O = Math.sqrt(L * L + q * q + R * R);
                return Math.abs(O) < r.EPSILON ? null : (L *= O = 1 / O, q *= O, R *= O, l = Math.sin(n), M = 1 - (u = Math.cos(n)), e = a[0], s = a[1], i = a[2], c = a[3], h = a[4], S = a[5], I = a[6], x = a[7], f = a[8], D = a[9], F = a[10], m = a[11], d = L * L * M + u, b = q * L * M + R * l, v = R * L * M - q * l, z = L * q * M - R * l, w = q * q * M + u, p = R * q * M + L * l, E = L * R * M + q * l, A = q * R * M - L * l, P = R * R * M + u, t[0] = e * d + h * b + f * v, t[1] = s * d + S * b + D * v, t[2] = i * d + I * b + F * v, t[3] = c * d + x * b + m * v, t[4] = e * z + h * w + f * p, t[5] = s * z + S * w + D * p, t[6] = i * z + I * w + F * p, t[7] = c * z + x * w + m * p, t[8] = e * E + h * A + f * P, t[9] = s * E + S * A + D * P, t[10] = i * E + I * A + F * P, t[11] = c * E + x * A + m * P, a !== t && (t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]), t)
            }, o.scalar.rotateX = function(t, a, n) {
                var r = Math.sin(n),
                    o = Math.cos(n),
                    l = a[4],
                    u = a[5],
                    M = a[6],
                    e = a[7],
                    s = a[8],
                    i = a[9],
                    c = a[10],
                    h = a[11];
                return a !== t && (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[4] = l * o + s * r, t[5] = u * o + i * r, t[6] = M * o + c * r, t[7] = e * o + h * r, t[8] = s * o - l * r, t[9] = i * o - u * r, t[10] = c * o - M * r, t[11] = h * o - e * r, t
            }, o.SIMD.rotateX = function(t, a, n) {
                var r = SIMD.Float32x4.splat(Math.sin(n)),
                    o = SIMD.Float32x4.splat(Math.cos(n));
                a !== t && (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]);
                var l = SIMD.Float32x4.load(a, 4),
                    u = SIMD.Float32x4.load(a, 8);
                return SIMD.Float32x4.store(t, 4, SIMD.Float32x4.add(SIMD.Float32x4.mul(l, o), SIMD.Float32x4.mul(u, r))), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, o), SIMD.Float32x4.mul(l, r))), t
            }, o.rotateX = r.USE_SIMD ? o.SIMD.rotateX : o.scalar.rotateX, o.scalar.rotateY = function(t, a, n) {
                var r = Math.sin(n),
                    o = Math.cos(n),
                    l = a[0],
                    u = a[1],
                    M = a[2],
                    e = a[3],
                    s = a[8],
                    i = a[9],
                    c = a[10],
                    h = a[11];
                return a !== t && (t[4] = a[4], t[5] = a[5], t[6] = a[6], t[7] = a[7], t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[0] = l * o - s * r, t[1] = u * o - i * r, t[2] = M * o - c * r, t[3] = e * o - h * r, t[8] = l * r + s * o, t[9] = u * r + i * o, t[10] = M * r + c * o, t[11] = e * r + h * o, t
            }, o.SIMD.rotateY = function(t, a, n) {
                var r = SIMD.Float32x4.splat(Math.sin(n)),
                    o = SIMD.Float32x4.splat(Math.cos(n));
                a !== t && (t[4] = a[4], t[5] = a[5], t[6] = a[6], t[7] = a[7], t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]);
                var l = SIMD.Float32x4.load(a, 0),
                    u = SIMD.Float32x4.load(a, 8);
                return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(l, o), SIMD.Float32x4.mul(u, r))), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(l, r), SIMD.Float32x4.mul(u, o))), t
            }, o.rotateY = r.USE_SIMD ? o.SIMD.rotateY : o.scalar.rotateY, o.scalar.rotateZ = function(t, a, n) {
                var r = Math.sin(n),
                    o = Math.cos(n),
                    l = a[0],
                    u = a[1],
                    M = a[2],
                    e = a[3],
                    s = a[4],
                    i = a[5],
                    c = a[6],
                    h = a[7];
                return a !== t && (t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11], t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[0] = l * o + s * r, t[1] = u * o + i * r, t[2] = M * o + c * r, t[3] = e * o + h * r, t[4] = s * o - l * r, t[5] = i * o - u * r, t[6] = c * o - M * r, t[7] = h * o - e * r, t
            }, o.SIMD.rotateZ = function(t, a, n) {
                var r = SIMD.Float32x4.splat(Math.sin(n)),
                    o = SIMD.Float32x4.splat(Math.cos(n));
                a !== t && (t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11], t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]);
                var l = SIMD.Float32x4.load(a, 0),
                    u = SIMD.Float32x4.load(a, 4);
                return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.add(SIMD.Float32x4.mul(l, o), SIMD.Float32x4.mul(u, r))), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, o), SIMD.Float32x4.mul(l, r))), t
            }, o.rotateZ = r.USE_SIMD ? o.SIMD.rotateZ : o.scalar.rotateZ, o.fromTranslation = function(t, a) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = a[0], t[13] = a[1], t[14] = a[2], t[15] = 1, t
            }, o.fromScaling = function(t, a) {
                return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = a[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = a[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, o.fromRotation = function(t, a, n) {
                var o, l, u, M = n[0],
                    e = n[1],
                    s = n[2],
                    i = Math.sqrt(M * M + e * e + s * s);
                return Math.abs(i) < r.EPSILON ? null : (M *= i = 1 / i, e *= i, s *= i, o = Math.sin(a), u = 1 - (l = Math.cos(a)), t[0] = M * M * u + l, t[1] = e * M * u + s * o, t[2] = s * M * u - e * o, t[3] = 0, t[4] = M * e * u - s * o, t[5] = e * e * u + l, t[6] = s * e * u + M * o, t[7] = 0, t[8] = M * s * u + e * o, t[9] = e * s * u - M * o, t[10] = s * s * u + l, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t)
            }, o.fromXRotation = function(t, a) {
                var n = Math.sin(a),
                    r = Math.cos(a);
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = r, t[6] = n, t[7] = 0, t[8] = 0, t[9] = -n, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, o.fromYRotation = function(t, a) {
                var n = Math.sin(a),
                    r = Math.cos(a);
                return t[0] = r, t[1] = 0, t[2] = -n, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = n, t[9] = 0, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, o.fromZRotation = function(t, a) {
                var n = Math.sin(a),
                    r = Math.cos(a);
                return t[0] = r, t[1] = n, t[2] = 0, t[3] = 0, t[4] = -n, t[5] = r, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, o.fromRotationTranslation = function(t, a, n) {
                var r = a[0],
                    o = a[1],
                    l = a[2],
                    u = a[3],
                    M = r + r,
                    e = o + o,
                    s = l + l,
                    i = r * M,
                    c = r * e,
                    h = r * s,
                    S = o * e,
                    I = o * s,
                    x = l * s,
                    f = u * M,
                    D = u * e,
                    F = u * s;
                return t[0] = 1 - (S + x), t[1] = c + F, t[2] = h - D, t[3] = 0, t[4] = c - F, t[5] = 1 - (i + x), t[6] = I + f, t[7] = 0, t[8] = h + D, t[9] = I - f, t[10] = 1 - (i + S), t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t
            }, o.getTranslation = function(t, a) {
                return t[0] = a[12], t[1] = a[13], t[2] = a[14], t
            }, o.getRotation = function(t, a) {
                var n = a[0] + a[5] + a[10],
                    r = 0;
                return n > 0 ? (r = 2 * Math.sqrt(n + 1), t[3] = .25 * r, t[0] = (a[6] - a[9]) / r, t[1] = (a[8] - a[2]) / r, t[2] = (a[1] - a[4]) / r) : a[0] > a[5] & a[0] > a[10] ? (r = 2 * Math.sqrt(1 + a[0] - a[5] - a[10]), t[3] = (a[6] - a[9]) / r, t[0] = .25 * r, t[1] = (a[1] + a[4]) / r, t[2] = (a[8] + a[2]) / r) : a[5] > a[10] ? (r = 2 * Math.sqrt(1 + a[5] - a[0] - a[10]), t[3] = (a[8] - a[2]) / r, t[0] = (a[1] + a[4]) / r, t[1] = .25 * r, t[2] = (a[6] + a[9]) / r) : (r = 2 * Math.sqrt(1 + a[10] - a[0] - a[5]), t[3] = (a[1] - a[4]) / r, t[0] = (a[8] + a[2]) / r, t[1] = (a[6] + a[9]) / r, t[2] = .25 * r), t
            }, o.fromRotationTranslationScale = function(t, a, n, r) {
                var o = a[0],
                    l = a[1],
                    u = a[2],
                    M = a[3],
                    e = o + o,
                    s = l + l,
                    i = u + u,
                    c = o * e,
                    h = o * s,
                    S = o * i,
                    I = l * s,
                    x = l * i,
                    f = u * i,
                    D = M * e,
                    F = M * s,
                    m = M * i,
                    d = r[0],
                    b = r[1],
                    v = r[2];
                return t[0] = (1 - (I + f)) * d, t[1] = (h + m) * d, t[2] = (S - F) * d, t[3] = 0, t[4] = (h - m) * b, t[5] = (1 - (c + f)) * b, t[6] = (x + D) * b, t[7] = 0, t[8] = (S + F) * v, t[9] = (x - D) * v, t[10] = (1 - (c + I)) * v, t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t
            }, o.fromRotationTranslationScaleOrigin = function(t, a, n, r, o) {
                var l = a[0],
                    u = a[1],
                    M = a[2],
                    e = a[3],
                    s = l + l,
                    i = u + u,
                    c = M + M,
                    h = l * s,
                    S = l * i,
                    I = l * c,
                    x = u * i,
                    f = u * c,
                    D = M * c,
                    F = e * s,
                    m = e * i,
                    d = e * c,
                    b = r[0],
                    v = r[1],
                    z = r[2],
                    w = o[0],
                    p = o[1],
                    E = o[2];
                return t[0] = (1 - (x + D)) * b, t[1] = (S + d) * b, t[2] = (I - m) * b, t[3] = 0, t[4] = (S - d) * v, t[5] = (1 - (h + D)) * v, t[6] = (f + F) * v, t[7] = 0, t[8] = (I + m) * z, t[9] = (f - F) * z, t[10] = (1 - (h + x)) * z, t[11] = 0, t[12] = n[0] + w - (t[0] * w + t[4] * p + t[8] * E), t[13] = n[1] + p - (t[1] * w + t[5] * p + t[9] * E), t[14] = n[2] + E - (t[2] * w + t[6] * p + t[10] * E), t[15] = 1, t
            }, o.fromQuat = function(t, a) {
                var n = a[0],
                    r = a[1],
                    o = a[2],
                    l = a[3],
                    u = n + n,
                    M = r + r,
                    e = o + o,
                    s = n * u,
                    i = r * u,
                    c = r * M,
                    h = o * u,
                    S = o * M,
                    I = o * e,
                    x = l * u,
                    f = l * M,
                    D = l * e;
                return t[0] = 1 - c - I, t[1] = i + D, t[2] = h - f, t[3] = 0, t[4] = i - D, t[5] = 1 - s - I, t[6] = S + x, t[7] = 0, t[8] = h + f, t[9] = S - x, t[10] = 1 - s - c, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, o.frustum = function(t, a, n, r, o, l, u) {
                var M = 1 / (n - a),
                    e = 1 / (o - r),
                    s = 1 / (l - u);
                return t[0] = 2 * l * M, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * l * e, t[6] = 0, t[7] = 0, t[8] = (n + a) * M, t[9] = (o + r) * e, t[10] = (u + l) * s, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = u * l * 2 * s, t[15] = 0, t
            }, o.perspective = function(t, a, n, r, o) {
                var l = 1 / Math.tan(a / 2),
                    u = 1 / (r - o);
                return t[0] = l / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = l, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (o + r) * u, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * o * r * u, t[15] = 0, t
            }, o.perspectiveFromFieldOfView = function(t, a, n, r) {
                var o = Math.tan(a.upDegrees * Math.PI / 180),
                    l = Math.tan(a.downDegrees * Math.PI / 180),
                    u = Math.tan(a.leftDegrees * Math.PI / 180),
                    M = Math.tan(a.rightDegrees * Math.PI / 180),
                    e = 2 / (u + M),
                    s = 2 / (o + l);
                return t[0] = e, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = s, t[6] = 0, t[7] = 0, t[8] = -(u - M) * e * .5, t[9] = (o - l) * s * .5, t[10] = r / (n - r), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = r * n / (n - r), t[15] = 0, t
            }, o.ortho = function(t, a, n, r, o, l, u) {
                var M = 1 / (a - n),
                    e = 1 / (r - o),
                    s = 1 / (l - u);
                return t[0] = -2 * M, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * e, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * s, t[11] = 0, t[12] = (a + n) * M, t[13] = (o + r) * e, t[14] = (u + l) * s, t[15] = 1, t
            }, o.lookAt = function(t, a, n, l) {
                var u, M, e, s, i, c, h, S, I, x, f = a[0],
                    D = a[1],
                    F = a[2],
                    m = l[0],
                    d = l[1],
                    b = l[2],
                    v = n[0],
                    z = n[1],
                    w = n[2];
                return Math.abs(f - v) < r.EPSILON && Math.abs(D - z) < r.EPSILON && Math.abs(F - w) < r.EPSILON ? o.identity(t) : (h = f - v, S = D - z, I = F - w, u = d * (I *= x = 1 / Math.sqrt(h * h + S * S + I * I)) - b * (S *= x), M = b * (h *= x) - m * I, e = m * S - d * h, (x = Math.sqrt(u * u + M * M + e * e)) ? (u *= x = 1 / x, M *= x, e *= x) : (u = 0, M = 0, e = 0), s = S * e - I * M, i = I * u - h * e, c = h * M - S * u, (x = Math.sqrt(s * s + i * i + c * c)) ? (s *= x = 1 / x, i *= x, c *= x) : (s = 0, i = 0, c = 0), t[0] = u, t[1] = s, t[2] = h, t[3] = 0, t[4] = M, t[5] = i, t[6] = S, t[7] = 0, t[8] = e, t[9] = c, t[10] = I, t[11] = 0, t[12] = -(u * f + M * D + e * F), t[13] = -(s * f + i * D + c * F), t[14] = -(h * f + S * D + I * F), t[15] = 1, t)
            }, o.str = function(t) {
                return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")"
            }, o.frob = function(t) {
                return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2))
            }, o.add = function(t, a, n) {
                return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t[2] = a[2] + n[2], t[3] = a[3] + n[3], t[4] = a[4] + n[4], t[5] = a[5] + n[5], t[6] = a[6] + n[6], t[7] = a[7] + n[7], t[8] = a[8] + n[8], t[9] = a[9] + n[9], t[10] = a[10] + n[10], t[11] = a[11] + n[11], t[12] = a[12] + n[12], t[13] = a[13] + n[13], t[14] = a[14] + n[14], t[15] = a[15] + n[15], t
            }, o.subtract = function(t, a, n) {
                return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t[2] = a[2] - n[2], t[3] = a[3] - n[3], t[4] = a[4] - n[4], t[5] = a[5] - n[5], t[6] = a[6] - n[6], t[7] = a[7] - n[7], t[8] = a[8] - n[8], t[9] = a[9] - n[9], t[10] = a[10] - n[10], t[11] = a[11] - n[11], t[12] = a[12] - n[12], t[13] = a[13] - n[13], t[14] = a[14] - n[14], t[15] = a[15] - n[15], t
            }, o.sub = o.subtract, o.multiplyScalar = function(t, a, n) {
                return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t[3] = a[3] * n, t[4] = a[4] * n, t[5] = a[5] * n, t[6] = a[6] * n, t[7] = a[7] * n, t[8] = a[8] * n, t[9] = a[9] * n, t[10] = a[10] * n, t[11] = a[11] * n, t[12] = a[12] * n, t[13] = a[13] * n, t[14] = a[14] * n, t[15] = a[15] * n, t
            }, o.multiplyScalarAndAdd = function(t, a, n, r) {
                return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t[2] = a[2] + n[2] * r, t[3] = a[3] + n[3] * r, t[4] = a[4] + n[4] * r, t[5] = a[5] + n[5] * r, t[6] = a[6] + n[6] * r, t[7] = a[7] + n[7] * r, t[8] = a[8] + n[8] * r, t[9] = a[9] + n[9] * r, t[10] = a[10] + n[10] * r, t[11] = a[11] + n[11] * r, t[12] = a[12] + n[12] * r, t[13] = a[13] + n[13] * r, t[14] = a[14] + n[14] * r, t[15] = a[15] + n[15] * r, t
            }, o.exactEquals = function(t, a) {
                return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3] && t[4] === a[4] && t[5] === a[5] && t[6] === a[6] && t[7] === a[7] && t[8] === a[8] && t[9] === a[9] && t[10] === a[10] && t[11] === a[11] && t[12] === a[12] && t[13] === a[13] && t[14] === a[14] && t[15] === a[15]
            }, o.equals = function(t, a) {
                var n = t[0],
                    o = t[1],
                    l = t[2],
                    u = t[3],
                    M = t[4],
                    e = t[5],
                    s = t[6],
                    i = t[7],
                    c = t[8],
                    h = t[9],
                    S = t[10],
                    I = t[11],
                    x = t[12],
                    f = t[13],
                    D = t[14],
                    F = t[15],
                    m = a[0],
                    d = a[1],
                    b = a[2],
                    v = a[3],
                    z = a[4],
                    w = a[5],
                    p = a[6],
                    E = a[7],
                    A = a[8],
                    P = a[9],
                    L = a[10],
                    q = a[11],
                    R = a[12],
                    O = a[13],
                    N = a[14],
                    Y = a[15];
                return Math.abs(n - m) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(m)) && Math.abs(o - d) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) && Math.abs(l - b) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(b)) && Math.abs(u - v) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) && Math.abs(M - z) <= r.EPSILON * Math.max(1, Math.abs(M), Math.abs(z)) && Math.abs(e - w) <= r.EPSILON * Math.max(1, Math.abs(e), Math.abs(w)) && Math.abs(s - p) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(p)) && Math.abs(i - E) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(E)) && Math.abs(c - A) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(A)) && Math.abs(h - P) <= r.EPSILON * Math.max(1, Math.abs(h), Math.abs(P)) && Math.abs(S - L) <= r.EPSILON * Math.max(1, Math.abs(S), Math.abs(L)) && Math.abs(I - q) <= r.EPSILON * Math.max(1, Math.abs(I), Math.abs(q)) && Math.abs(x - R) <= r.EPSILON * Math.max(1, Math.abs(x), Math.abs(R)) && Math.abs(f - O) <= r.EPSILON * Math.max(1, Math.abs(f), Math.abs(O)) && Math.abs(D - N) <= r.EPSILON * Math.max(1, Math.abs(D), Math.abs(N)) && Math.abs(F - Y) <= r.EPSILON * Math.max(1, Math.abs(F), Math.abs(Y))
            }, t.exports = o
        },
        LpTI: (t, a, n) => {
            var r, o, l, u, M, e, s = n("Wn3h"),
                i = n("3Hym"),
                c = n("6ScL"),
                h = n("OUyW"),
                S = {};
            S.create = function() {
                var t = new s.ARRAY_TYPE(4);
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
            }, S.rotationTo = (r = c.create(), o = c.fromValues(1, 0, 0), l = c.fromValues(0, 1, 0), function(t, a, n) {
                var u = c.dot(a, n);
                return u < -.999999 ? (c.cross(r, o, a), c.length(r) < 1e-6 && c.cross(r, l, a), c.normalize(r, r), S.setAxisAngle(t, r, Math.PI), t) : u > .999999 ? (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t) : (c.cross(r, a, n), t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = 1 + u, S.normalize(t, t))
            }), S.setAxes = (u = i.create(), function(t, a, n, r) {
                return u[0] = n[0], u[3] = n[1], u[6] = n[2], u[1] = r[0], u[4] = r[1], u[7] = r[2], u[2] = -a[0], u[5] = -a[1], u[8] = -a[2], S.normalize(t, S.fromMat3(t, u))
            }), S.clone = h.clone, S.fromValues = h.fromValues, S.copy = h.copy, S.set = h.set, S.identity = function(t) {
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
            }, S.setAxisAngle = function(t, a, n) {
                n *= .5;
                var r = Math.sin(n);
                return t[0] = r * a[0], t[1] = r * a[1], t[2] = r * a[2], t[3] = Math.cos(n), t
            }, S.getAxisAngle = function(t, a) {
                var n = 2 * Math.acos(a[3]),
                    r = Math.sin(n / 2);
                return 0 != r ? (t[0] = a[0] / r, t[1] = a[1] / r, t[2] = a[2] / r) : (t[0] = 1, t[1] = 0, t[2] = 0), n
            }, S.add = h.add, S.multiply = function(t, a, n) {
                var r = a[0],
                    o = a[1],
                    l = a[2],
                    u = a[3],
                    M = n[0],
                    e = n[1],
                    s = n[2],
                    i = n[3];
                return t[0] = r * i + u * M + o * s - l * e, t[1] = o * i + u * e + l * M - r * s, t[2] = l * i + u * s + r * e - o * M, t[3] = u * i - r * M - o * e - l * s, t
            }, S.mul = S.multiply, S.scale = h.scale, S.rotateX = function(t, a, n) {
                n *= .5;
                var r = a[0],
                    o = a[1],
                    l = a[2],
                    u = a[3],
                    M = Math.sin(n),
                    e = Math.cos(n);
                return t[0] = r * e + u * M, t[1] = o * e + l * M, t[2] = l * e - o * M, t[3] = u * e - r * M, t
            }, S.rotateY = function(t, a, n) {
                n *= .5;
                var r = a[0],
                    o = a[1],
                    l = a[2],
                    u = a[3],
                    M = Math.sin(n),
                    e = Math.cos(n);
                return t[0] = r * e - l * M, t[1] = o * e + u * M, t[2] = l * e + r * M, t[3] = u * e - o * M, t
            }, S.rotateZ = function(t, a, n) {
                n *= .5;
                var r = a[0],
                    o = a[1],
                    l = a[2],
                    u = a[3],
                    M = Math.sin(n),
                    e = Math.cos(n);
                return t[0] = r * e + o * M, t[1] = o * e - r * M, t[2] = l * e + u * M, t[3] = u * e - l * M, t
            }, S.calculateW = function(t, a) {
                var n = a[0],
                    r = a[1],
                    o = a[2];
                return t[0] = n, t[1] = r, t[2] = o, t[3] = Math.sqrt(Math.abs(1 - n * n - r * r - o * o)), t
            }, S.dot = h.dot, S.lerp = h.lerp, S.slerp = function(t, a, n, r) {
                var o, l, u, M, e, s = a[0],
                    i = a[1],
                    c = a[2],
                    h = a[3],
                    S = n[0],
                    I = n[1],
                    x = n[2],
                    f = n[3];
                return (l = s * S + i * I + c * x + h * f) < 0 && (l = -l, S = -S, I = -I, x = -x, f = -f), 1 - l > 1e-6 ? (o = Math.acos(l), u = Math.sin(o), M = Math.sin((1 - r) * o) / u, e = Math.sin(r * o) / u) : (M = 1 - r, e = r), t[0] = M * s + e * S, t[1] = M * i + e * I, t[2] = M * c + e * x, t[3] = M * h + e * f, t
            }, S.sqlerp = (M = S.create(), e = S.create(), function(t, a, n, r, o, l) {
                return S.slerp(M, a, o, l), S.slerp(e, n, r, l), S.slerp(t, M, e, 2 * l * (1 - l)), t
            }), S.invert = function(t, a) {
                var n = a[0],
                    r = a[1],
                    o = a[2],
                    l = a[3],
                    u = n * n + r * r + o * o + l * l,
                    M = u ? 1 / u : 0;
                return t[0] = -n * M, t[1] = -r * M, t[2] = -o * M, t[3] = l * M, t
            }, S.conjugate = function(t, a) {
                return t[0] = -a[0], t[1] = -a[1], t[2] = -a[2], t[3] = a[3], t
            }, S.length = h.length, S.len = S.length, S.squaredLength = h.squaredLength, S.sqrLen = S.squaredLength, S.normalize = h.normalize, S.fromMat3 = function(t, a) {
                var n, r = a[0] + a[4] + a[8];
                if (r > 0) n = Math.sqrt(r + 1), t[3] = .5 * n, n = .5 / n, t[0] = (a[5] - a[7]) * n, t[1] = (a[6] - a[2]) * n, t[2] = (a[1] - a[3]) * n;
                else {
                    var o = 0;
                    a[4] > a[0] && (o = 1), a[8] > a[3 * o + o] && (o = 2);
                    var l = (o + 1) % 3,
                        u = (o + 2) % 3;
                    n = Math.sqrt(a[3 * o + o] - a[3 * l + l] - a[3 * u + u] + 1), t[o] = .5 * n, n = .5 / n, t[3] = (a[3 * l + u] - a[3 * u + l]) * n, t[l] = (a[3 * l + o] + a[3 * o + l]) * n, t[u] = (a[3 * u + o] + a[3 * o + u]) * n
                }
                return t
            }, S.str = function(t) {
                return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            }, S.exactEquals = h.exactEquals, S.equals = h.equals, t.exports = S
        },
        ULQE: (t, a, n) => {
            var r, o = n("Wn3h"),
                l = {};
            l.create = function() {
                var t = new o.ARRAY_TYPE(2);
                return t[0] = 0, t[1] = 0, t
            }, l.clone = function(t) {
                var a = new o.ARRAY_TYPE(2);
                return a[0] = t[0], a[1] = t[1], a
            }, l.fromValues = function(t, a) {
                var n = new o.ARRAY_TYPE(2);
                return n[0] = t, n[1] = a, n
            }, l.copy = function(t, a) {
                return t[0] = a[0], t[1] = a[1], t
            }, l.set = function(t, a, n) {
                return t[0] = a, t[1] = n, t
            }, l.add = function(t, a, n) {
                return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t
            }, l.subtract = function(t, a, n) {
                return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t
            }, l.sub = l.subtract, l.multiply = function(t, a, n) {
                return t[0] = a[0] * n[0], t[1] = a[1] * n[1], t
            }, l.mul = l.multiply, l.divide = function(t, a, n) {
                return t[0] = a[0] / n[0], t[1] = a[1] / n[1], t
            }, l.div = l.divide, l.ceil = function(t, a) {
                return t[0] = Math.ceil(a[0]), t[1] = Math.ceil(a[1]), t
            }, l.floor = function(t, a) {
                return t[0] = Math.floor(a[0]), t[1] = Math.floor(a[1]), t
            }, l.min = function(t, a, n) {
                return t[0] = Math.min(a[0], n[0]), t[1] = Math.min(a[1], n[1]), t
            }, l.max = function(t, a, n) {
                return t[0] = Math.max(a[0], n[0]), t[1] = Math.max(a[1], n[1]), t
            }, l.round = function(t, a) {
                return t[0] = Math.round(a[0]), t[1] = Math.round(a[1]), t
            }, l.scale = function(t, a, n) {
                return t[0] = a[0] * n, t[1] = a[1] * n, t
            }, l.scaleAndAdd = function(t, a, n, r) {
                return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t
            }, l.distance = function(t, a) {
                var n = a[0] - t[0],
                    r = a[1] - t[1];
                return Math.sqrt(n * n + r * r)
            }, l.dist = l.distance, l.squaredDistance = function(t, a) {
                var n = a[0] - t[0],
                    r = a[1] - t[1];
                return n * n + r * r
            }, l.sqrDist = l.squaredDistance, l.length = function(t) {
                var a = t[0],
                    n = t[1];
                return Math.sqrt(a * a + n * n)
            }, l.len = l.length, l.squaredLength = function(t) {
                var a = t[0],
                    n = t[1];
                return a * a + n * n
            }, l.sqrLen = l.squaredLength, l.negate = function(t, a) {
                return t[0] = -a[0], t[1] = -a[1], t
            }, l.inverse = function(t, a) {
                return t[0] = 1 / a[0], t[1] = 1 / a[1], t
            }, l.normalize = function(t, a) {
                var n = a[0],
                    r = a[1],
                    o = n * n + r * r;
                return o > 0 && (o = 1 / Math.sqrt(o), t[0] = a[0] * o, t[1] = a[1] * o), t
            }, l.dot = function(t, a) {
                return t[0] * a[0] + t[1] * a[1]
            }, l.cross = function(t, a, n) {
                var r = a[0] * n[1] - a[1] * n[0];
                return t[0] = t[1] = 0, t[2] = r, t
            }, l.lerp = function(t, a, n, r) {
                var o = a[0],
                    l = a[1];
                return t[0] = o + r * (n[0] - o), t[1] = l + r * (n[1] - l), t
            }, l.random = function(t, a) {
                a = a || 1;
                var n = 2 * o.RANDOM() * Math.PI;
                return t[0] = Math.cos(n) * a, t[1] = Math.sin(n) * a, t
            }, l.transformMat2 = function(t, a, n) {
                var r = a[0],
                    o = a[1];
                return t[0] = n[0] * r + n[2] * o, t[1] = n[1] * r + n[3] * o, t
            }, l.transformMat2d = function(t, a, n) {
                var r = a[0],
                    o = a[1];
                return t[0] = n[0] * r + n[2] * o + n[4], t[1] = n[1] * r + n[3] * o + n[5], t
            }, l.transformMat3 = function(t, a, n) {
                var r = a[0],
                    o = a[1];
                return t[0] = n[0] * r + n[3] * o + n[6], t[1] = n[1] * r + n[4] * o + n[7], t
            }, l.transformMat4 = function(t, a, n) {
                var r = a[0],
                    o = a[1];
                return t[0] = n[0] * r + n[4] * o + n[12], t[1] = n[1] * r + n[5] * o + n[13], t
            }, l.forEach = (r = l.create(), function(t, a, n, o, l, u) {
                var M, e;
                for (a || (a = 2), n || (n = 0), e = o ? Math.min(o * a + n, t.length) : t.length, M = n; M < e; M += a) r[0] = t[M], r[1] = t[M + 1], l(r, r, u), t[M] = r[0], t[M + 1] = r[1];
                return t
            }), l.str = function(t) {
                return "vec2(" + t[0] + ", " + t[1] + ")"
            }, l.exactEquals = function(t, a) {
                return t[0] === a[0] && t[1] === a[1]
            }, l.equals = function(t, a) {
                var n = t[0],
                    r = t[1],
                    l = a[0],
                    u = a[1];
                return Math.abs(n - l) <= o.EPSILON * Math.max(1, Math.abs(n), Math.abs(l)) && Math.abs(r - u) <= o.EPSILON * Math.max(1, Math.abs(r), Math.abs(u))
            }, t.exports = l
        },
        "6ScL": (t, a, n) => {
            var r, o = n("Wn3h"),
                l = {};
            l.create = function() {
                var t = new o.ARRAY_TYPE(3);
                return t[0] = 0, t[1] = 0, t[2] = 0, t
            }, l.clone = function(t) {
                var a = new o.ARRAY_TYPE(3);
                return a[0] = t[0], a[1] = t[1], a[2] = t[2], a
            }, l.fromValues = function(t, a, n) {
                var r = new o.ARRAY_TYPE(3);
                return r[0] = t, r[1] = a, r[2] = n, r
            }, l.copy = function(t, a) {
                return t[0] = a[0], t[1] = a[1], t[2] = a[2], t
            }, l.set = function(t, a, n, r) {
                return t[0] = a, t[1] = n, t[2] = r, t
            }, l.add = function(t, a, n) {
                return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t[2] = a[2] + n[2], t
            }, l.subtract = function(t, a, n) {
                return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t[2] = a[2] - n[2], t
            }, l.sub = l.subtract, l.multiply = function(t, a, n) {
                return t[0] = a[0] * n[0], t[1] = a[1] * n[1], t[2] = a[2] * n[2], t
            }, l.mul = l.multiply, l.divide = function(t, a, n) {
                return t[0] = a[0] / n[0], t[1] = a[1] / n[1], t[2] = a[2] / n[2], t
            }, l.div = l.divide, l.ceil = function(t, a) {
                return t[0] = Math.ceil(a[0]), t[1] = Math.ceil(a[1]), t[2] = Math.ceil(a[2]), t
            }, l.floor = function(t, a) {
                return t[0] = Math.floor(a[0]), t[1] = Math.floor(a[1]), t[2] = Math.floor(a[2]), t
            }, l.min = function(t, a, n) {
                return t[0] = Math.min(a[0], n[0]), t[1] = Math.min(a[1], n[1]), t[2] = Math.min(a[2], n[2]), t
            }, l.max = function(t, a, n) {
                return t[0] = Math.max(a[0], n[0]), t[1] = Math.max(a[1], n[1]), t[2] = Math.max(a[2], n[2]), t
            }, l.round = function(t, a) {
                return t[0] = Math.round(a[0]), t[1] = Math.round(a[1]), t[2] = Math.round(a[2]), t
            }, l.scale = function(t, a, n) {
                return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t
            }, l.scaleAndAdd = function(t, a, n, r) {
                return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t[2] = a[2] + n[2] * r, t
            }, l.distance = function(t, a) {
                var n = a[0] - t[0],
                    r = a[1] - t[1],
                    o = a[2] - t[2];
                return Math.sqrt(n * n + r * r + o * o)
            }, l.dist = l.distance, l.squaredDistance = function(t, a) {
                var n = a[0] - t[0],
                    r = a[1] - t[1],
                    o = a[2] - t[2];
                return n * n + r * r + o * o
            }, l.sqrDist = l.squaredDistance, l.length = function(t) {
                var a = t[0],
                    n = t[1],
                    r = t[2];
                return Math.sqrt(a * a + n * n + r * r)
            }, l.len = l.length, l.squaredLength = function(t) {
                var a = t[0],
                    n = t[1],
                    r = t[2];
                return a * a + n * n + r * r
            }, l.sqrLen = l.squaredLength, l.negate = function(t, a) {
                return t[0] = -a[0], t[1] = -a[1], t[2] = -a[2], t
            }, l.inverse = function(t, a) {
                return t[0] = 1 / a[0], t[1] = 1 / a[1], t[2] = 1 / a[2], t
            }, l.normalize = function(t, a) {
                var n = a[0],
                    r = a[1],
                    o = a[2],
                    l = n * n + r * r + o * o;
                return l > 0 && (l = 1 / Math.sqrt(l), t[0] = a[0] * l, t[1] = a[1] * l, t[2] = a[2] * l), t
            }, l.dot = function(t, a) {
                return t[0] * a[0] + t[1] * a[1] + t[2] * a[2]
            }, l.cross = function(t, a, n) {
                var r = a[0],
                    o = a[1],
                    l = a[2],
                    u = n[0],
                    M = n[1],
                    e = n[2];
                return t[0] = o * e - l * M, t[1] = l * u - r * e, t[2] = r * M - o * u, t
            }, l.lerp = function(t, a, n, r) {
                var o = a[0],
                    l = a[1],
                    u = a[2];
                return t[0] = o + r * (n[0] - o), t[1] = l + r * (n[1] - l), t[2] = u + r * (n[2] - u), t
            }, l.hermite = function(t, a, n, r, o, l) {
                var u = l * l,
                    M = u * (2 * l - 3) + 1,
                    e = u * (l - 2) + l,
                    s = u * (l - 1),
                    i = u * (3 - 2 * l);
                return t[0] = a[0] * M + n[0] * e + r[0] * s + o[0] * i, t[1] = a[1] * M + n[1] * e + r[1] * s + o[1] * i, t[2] = a[2] * M + n[2] * e + r[2] * s + o[2] * i, t
            }, l.bezier = function(t, a, n, r, o, l) {
                var u = 1 - l,
                    M = u * u,
                    e = l * l,
                    s = M * u,
                    i = 3 * l * M,
                    c = 3 * e * u,
                    h = e * l;
                return t[0] = a[0] * s + n[0] * i + r[0] * c + o[0] * h, t[1] = a[1] * s + n[1] * i + r[1] * c + o[1] * h, t[2] = a[2] * s + n[2] * i + r[2] * c + o[2] * h, t
            }, l.random = function(t, a) {
                a = a || 1;
                var n = 2 * o.RANDOM() * Math.PI,
                    r = 2 * o.RANDOM() - 1,
                    l = Math.sqrt(1 - r * r) * a;
                return t[0] = Math.cos(n) * l, t[1] = Math.sin(n) * l, t[2] = r * a, t
            }, l.transformMat4 = function(t, a, n) {
                var r = a[0],
                    o = a[1],
                    l = a[2],
                    u = n[3] * r + n[7] * o + n[11] * l + n[15];
                return u = u || 1, t[0] = (n[0] * r + n[4] * o + n[8] * l + n[12]) / u, t[1] = (n[1] * r + n[5] * o + n[9] * l + n[13]) / u, t[2] = (n[2] * r + n[6] * o + n[10] * l + n[14]) / u, t
            }, l.transformMat3 = function(t, a, n) {
                var r = a[0],
                    o = a[1],
                    l = a[2];
                return t[0] = r * n[0] + o * n[3] + l * n[6], t[1] = r * n[1] + o * n[4] + l * n[7], t[2] = r * n[2] + o * n[5] + l * n[8], t
            }, l.transformQuat = function(t, a, n) {
                var r = a[0],
                    o = a[1],
                    l = a[2],
                    u = n[0],
                    M = n[1],
                    e = n[2],
                    s = n[3],
                    i = s * r + M * l - e * o,
                    c = s * o + e * r - u * l,
                    h = s * l + u * o - M * r,
                    S = -u * r - M * o - e * l;
                return t[0] = i * s + S * -u + c * -e - h * -M, t[1] = c * s + S * -M + h * -u - i * -e, t[2] = h * s + S * -e + i * -M - c * -u, t
            }, l.rotateX = function(t, a, n, r) {
                var o = [],
                    l = [];
                return o[0] = a[0] - n[0], o[1] = a[1] - n[1], o[2] = a[2] - n[2], l[0] = o[0], l[1] = o[1] * Math.cos(r) - o[2] * Math.sin(r), l[2] = o[1] * Math.sin(r) + o[2] * Math.cos(r), t[0] = l[0] + n[0], t[1] = l[1] + n[1], t[2] = l[2] + n[2], t
            }, l.rotateY = function(t, a, n, r) {
                var o = [],
                    l = [];
                return o[0] = a[0] - n[0], o[1] = a[1] - n[1], o[2] = a[2] - n[2], l[0] = o[2] * Math.sin(r) + o[0] * Math.cos(r), l[1] = o[1], l[2] = o[2] * Math.cos(r) - o[0] * Math.sin(r), t[0] = l[0] + n[0], t[1] = l[1] + n[1], t[2] = l[2] + n[2], t
            }, l.rotateZ = function(t, a, n, r) {
                var o = [],
                    l = [];
                return o[0] = a[0] - n[0], o[1] = a[1] - n[1], o[2] = a[2] - n[2], l[0] = o[0] * Math.cos(r) - o[1] * Math.sin(r), l[1] = o[0] * Math.sin(r) + o[1] * Math.cos(r), l[2] = o[2], t[0] = l[0] + n[0], t[1] = l[1] + n[1], t[2] = l[2] + n[2], t
            }, l.forEach = (r = l.create(), function(t, a, n, o, l, u) {
                var M, e;
                for (a || (a = 3), n || (n = 0), e = o ? Math.min(o * a + n, t.length) : t.length, M = n; M < e; M += a) r[0] = t[M], r[1] = t[M + 1], r[2] = t[M + 2], l(r, r, u), t[M] = r[0], t[M + 1] = r[1], t[M + 2] = r[2];
                return t
            }), l.angle = function(t, a) {
                var n = l.fromValues(t[0], t[1], t[2]),
                    r = l.fromValues(a[0], a[1], a[2]);
                l.normalize(n, n), l.normalize(r, r);
                var o = l.dot(n, r);
                return o > 1 ? 0 : Math.acos(o)
            }, l.str = function(t) {
                return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            }, l.exactEquals = function(t, a) {
                return t[0] === a[0] && t[1] === a[1] && t[2] === a[2]
            }, l.equals = function(t, a) {
                var n = t[0],
                    r = t[1],
                    l = t[2],
                    u = a[0],
                    M = a[1],
                    e = a[2];
                return Math.abs(n - u) <= o.EPSILON * Math.max(1, Math.abs(n), Math.abs(u)) && Math.abs(r - M) <= o.EPSILON * Math.max(1, Math.abs(r), Math.abs(M)) && Math.abs(l - e) <= o.EPSILON * Math.max(1, Math.abs(l), Math.abs(e))
            }, t.exports = l
        },
        OUyW: (t, a, n) => {
            var r, o = n("Wn3h"),
                l = {};
            l.create = function() {
                var t = new o.ARRAY_TYPE(4);
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t
            }, l.clone = function(t) {
                var a = new o.ARRAY_TYPE(4);
                return a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = t[3], a
            }, l.fromValues = function(t, a, n, r) {
                var l = new o.ARRAY_TYPE(4);
                return l[0] = t, l[1] = a, l[2] = n, l[3] = r, l
            }, l.copy = function(t, a) {
                return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t
            }, l.set = function(t, a, n, r, o) {
                return t[0] = a, t[1] = n, t[2] = r, t[3] = o, t
            }, l.add = function(t, a, n) {
                return t[0] = a[0] + n[0], t[1] = a[1] + n[1], t[2] = a[2] + n[2], t[3] = a[3] + n[3], t
            }, l.subtract = function(t, a, n) {
                return t[0] = a[0] - n[0], t[1] = a[1] - n[1], t[2] = a[2] - n[2], t[3] = a[3] - n[3], t
            }, l.sub = l.subtract, l.multiply = function(t, a, n) {
                return t[0] = a[0] * n[0], t[1] = a[1] * n[1], t[2] = a[2] * n[2], t[3] = a[3] * n[3], t
            }, l.mul = l.multiply, l.divide = function(t, a, n) {
                return t[0] = a[0] / n[0], t[1] = a[1] / n[1], t[2] = a[2] / n[2], t[3] = a[3] / n[3], t
            }, l.div = l.divide, l.ceil = function(t, a) {
                return t[0] = Math.ceil(a[0]), t[1] = Math.ceil(a[1]), t[2] = Math.ceil(a[2]), t[3] = Math.ceil(a[3]), t
            }, l.floor = function(t, a) {
                return t[0] = Math.floor(a[0]), t[1] = Math.floor(a[1]), t[2] = Math.floor(a[2]), t[3] = Math.floor(a[3]), t
            }, l.min = function(t, a, n) {
                return t[0] = Math.min(a[0], n[0]), t[1] = Math.min(a[1], n[1]), t[2] = Math.min(a[2], n[2]), t[3] = Math.min(a[3], n[3]), t
            }, l.max = function(t, a, n) {
                return t[0] = Math.max(a[0], n[0]), t[1] = Math.max(a[1], n[1]), t[2] = Math.max(a[2], n[2]), t[3] = Math.max(a[3], n[3]), t
            }, l.round = function(t, a) {
                return t[0] = Math.round(a[0]), t[1] = Math.round(a[1]), t[2] = Math.round(a[2]), t[3] = Math.round(a[3]), t
            }, l.scale = function(t, a, n) {
                return t[0] = a[0] * n, t[1] = a[1] * n, t[2] = a[2] * n, t[3] = a[3] * n, t
            }, l.scaleAndAdd = function(t, a, n, r) {
                return t[0] = a[0] + n[0] * r, t[1] = a[1] + n[1] * r, t[2] = a[2] + n[2] * r, t[3] = a[3] + n[3] * r, t
            }, l.distance = function(t, a) {
                var n = a[0] - t[0],
                    r = a[1] - t[1],
                    o = a[2] - t[2],
                    l = a[3] - t[3];
                return Math.sqrt(n * n + r * r + o * o + l * l)
            }, l.dist = l.distance, l.squaredDistance = function(t, a) {
                var n = a[0] - t[0],
                    r = a[1] - t[1],
                    o = a[2] - t[2],
                    l = a[3] - t[3];
                return n * n + r * r + o * o + l * l
            }, l.sqrDist = l.squaredDistance, l.length = function(t) {
                var a = t[0],
                    n = t[1],
                    r = t[2],
                    o = t[3];
                return Math.sqrt(a * a + n * n + r * r + o * o)
            }, l.len = l.length, l.squaredLength = function(t) {
                var a = t[0],
                    n = t[1],
                    r = t[2],
                    o = t[3];
                return a * a + n * n + r * r + o * o
            }, l.sqrLen = l.squaredLength, l.negate = function(t, a) {
                return t[0] = -a[0], t[1] = -a[1], t[2] = -a[2], t[3] = -a[3], t
            }, l.inverse = function(t, a) {
                return t[0] = 1 / a[0], t[1] = 1 / a[1], t[2] = 1 / a[2], t[3] = 1 / a[3], t
            }, l.normalize = function(t, a) {
                var n = a[0],
                    r = a[1],
                    o = a[2],
                    l = a[3],
                    u = n * n + r * r + o * o + l * l;
                return u > 0 && (u = 1 / Math.sqrt(u), t[0] = n * u, t[1] = r * u, t[2] = o * u, t[3] = l * u), t
            }, l.dot = function(t, a) {
                return t[0] * a[0] + t[1] * a[1] + t[2] * a[2] + t[3] * a[3]
            }, l.lerp = function(t, a, n, r) {
                var o = a[0],
                    l = a[1],
                    u = a[2],
                    M = a[3];
                return t[0] = o + r * (n[0] - o), t[1] = l + r * (n[1] - l), t[2] = u + r * (n[2] - u), t[3] = M + r * (n[3] - M), t
            }, l.random = function(t, a) {
                return a = a || 1, t[0] = o.RANDOM(), t[1] = o.RANDOM(), t[2] = o.RANDOM(), t[3] = o.RANDOM(), l.normalize(t, t), l.scale(t, t, a), t
            }, l.transformMat4 = function(t, a, n) {
                var r = a[0],
                    o = a[1],
                    l = a[2],
                    u = a[3];
                return t[0] = n[0] * r + n[4] * o + n[8] * l + n[12] * u, t[1] = n[1] * r + n[5] * o + n[9] * l + n[13] * u, t[2] = n[2] * r + n[6] * o + n[10] * l + n[14] * u, t[3] = n[3] * r + n[7] * o + n[11] * l + n[15] * u, t
            }, l.transformQuat = function(t, a, n) {
                var r = a[0],
                    o = a[1],
                    l = a[2],
                    u = n[0],
                    M = n[1],
                    e = n[2],
                    s = n[3],
                    i = s * r + M * l - e * o,
                    c = s * o + e * r - u * l,
                    h = s * l + u * o - M * r,
                    S = -u * r - M * o - e * l;
                return t[0] = i * s + S * -u + c * -e - h * -M, t[1] = c * s + S * -M + h * -u - i * -e, t[2] = h * s + S * -e + i * -M - c * -u, t[3] = a[3], t
            }, l.forEach = (r = l.create(), function(t, a, n, o, l, u) {
                var M, e;
                for (a || (a = 4), n || (n = 0), e = o ? Math.min(o * a + n, t.length) : t.length, M = n; M < e; M += a) r[0] = t[M], r[1] = t[M + 1], r[2] = t[M + 2], r[3] = t[M + 3], l(r, r, u), t[M] = r[0], t[M + 1] = r[1], t[M + 2] = r[2], t[M + 3] = r[3];
                return t
            }), l.str = function(t) {
                return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            }, l.exactEquals = function(t, a) {
                return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3]
            }, l.equals = function(t, a) {
                var n = t[0],
                    r = t[1],
                    l = t[2],
                    u = t[3],
                    M = a[0],
                    e = a[1],
                    s = a[2],
                    i = a[3];
                return Math.abs(n - M) <= o.EPSILON * Math.max(1, Math.abs(n), Math.abs(M)) && Math.abs(r - e) <= o.EPSILON * Math.max(1, Math.abs(r), Math.abs(e)) && Math.abs(l - s) <= o.EPSILON * Math.max(1, Math.abs(l), Math.abs(s)) && Math.abs(u - i) <= o.EPSILON * Math.max(1, Math.abs(u), Math.abs(i))
            }, t.exports = l
        }
    }
]);