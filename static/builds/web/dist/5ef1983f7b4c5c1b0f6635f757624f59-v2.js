"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [213], {
        "h4+f": (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = void 0;
            const s = r("/yXz"),
                a = r("mlrS"),
                o = r("xkoC"),
                n = r("CVUA"),
                i = ["/properties"],
                c = "http://json-schema.org/draft-07/schema";
            class d extends s.default {
                _addVocabularies() {
                    super._addVocabularies(), a.default.forEach((e => this.addVocabulary(e))), this.opts.discriminator && this.addKeyword(o.default)
                }
                _addDefaultMetaSchema() {
                    if (super._addDefaultMetaSchema(), !this.opts.meta) return;
                    const e = this.opts.$data ? this.$dataMetaSchema(n, i) : n;
                    this.addMetaSchema(e, c, !1), this.refs["http://json-schema.org/schema"] = c
                }
                defaultMeta() {
                    return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(c) ? c : void 0)
                }
            }
            e.exports = t = d, Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = d;
            var l = r("pcE6");
            Object.defineProperty(t, "KeywordCxt", {
                enumerable: !0,
                get: function() {
                    return l.KeywordCxt
                }
            });
            var u = r("mTfQ");
            Object.defineProperty(t, "_", {
                enumerable: !0,
                get: function() {
                    return u._
                }
            }), Object.defineProperty(t, "str", {
                enumerable: !0,
                get: function() {
                    return u.str
                }
            }), Object.defineProperty(t, "stringify", {
                enumerable: !0,
                get: function() {
                    return u.stringify
                }
            }), Object.defineProperty(t, "nil", {
                enumerable: !0,
                get: function() {
                    return u.nil
                }
            }), Object.defineProperty(t, "Name", {
                enumerable: !0,
                get: function() {
                    return u.Name
                }
            }), Object.defineProperty(t, "CodeGen", {
                enumerable: !0,
                get: function() {
                    return u.CodeGen
                }
            })
        },
        DpBd: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.regexpCode = t.getProperty = t.safeStringify = t.stringify = t.strConcat = t.addCodeArg = t.str = t._ = t.nil = t._Code = t.Name = t.IDENTIFIER = t._CodeOrName = void 0;
            class r {}
            t._CodeOrName = r, t.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
            class s extends r {
                constructor(e) {
                    if (super(), !t.IDENTIFIER.test(e)) throw new Error("CodeGen: name must be a valid identifier");
                    this.str = e
                }
                toString() {
                    return this.str
                }
                emptyStr() {
                    return !1
                }
                get names() {
                    return {
                        [this.str]: 1
                    }
                }
            }
            t.Name = s;
            class a extends r {
                constructor(e) {
                    super(), this._items = "string" == typeof e ? [e] : e
                }
                toString() {
                    return this.str
                }
                emptyStr() {
                    if (this._items.length > 1) return !1;
                    const e = this._items[0];
                    return "" === e || '""' === e
                }
                get str() {
                    var e;
                    return null !== (e = this._str) && void 0 !== e ? e : this._str = this._items.reduce(((e, t) => `${e}${t}`), "")
                }
                get names() {
                    var e;
                    return null !== (e = this._names) && void 0 !== e ? e : this._names = this._items.reduce(((e, t) => (t instanceof s && (e[t.str] = (e[t.str] || 0) + 1), e)), {})
                }
            }

            function o(e, ...t) {
                const r = [e[0]];
                let s = 0;
                for (; s < t.length;) c(r, t[s]), r.push(e[++s]);
                return new a(r)
            }
            t._Code = a, t.nil = new a(""), t._ = o;
            const n = new a("+");

            function i(e, ...t) {
                const r = [l(e[0])];
                let s = 0;
                for (; s < t.length;) r.push(n), c(r, t[s]), r.push(n, l(e[++s]));
                return function(e) {
                    let t = 1;
                    for (; t < e.length - 1;) {
                        if (e[t] === n) {
                            const r = d(e[t - 1], e[t + 1]);
                            if (void 0 !== r) {
                                e.splice(t - 1, 3, r);
                                continue
                            }
                            e[t++] = "+"
                        }
                        t++
                    }
                }(r), new a(r)
            }

            function c(e, t) {
                var r;
                t instanceof a ? e.push(...t._items) : t instanceof s ? e.push(t) : e.push("number" == typeof(r = t) || "boolean" == typeof r || null === r ? r : l(Array.isArray(r) ? r.join(",") : r))
            }

            function d(e, t) {
                if ('""' === t) return e;
                if ('""' === e) return t;
                if ("string" == typeof e) {
                    if (t instanceof s || '"' !== e[e.length - 1]) return;
                    return "string" != typeof t ? `${e.slice(0,-1)}${t}"` : '"' === t[0] ? e.slice(0, -1) + t.slice(1) : void 0
                }
                return "string" != typeof t || '"' !== t[0] || e instanceof s ? void 0 : `"${e}${t.slice(1)}`
            }

            function l(e) {
                return JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
            }
            t.str = i, t.addCodeArg = c, t.strConcat = function(e, t) {
                return t.emptyStr() ? e : e.emptyStr() ? t : i `${e}${t}`
            }, t.stringify = function(e) {
                return new a(l(e))
            }, t.safeStringify = l, t.getProperty = function(e) {
                return "string" == typeof e && t.IDENTIFIER.test(e) ? new a(`.${e}`) : o `[${e}]`
            }, t.regexpCode = function(e) {
                return new a(e.toString())
            }
        },
        mTfQ: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.or = t.and = t.not = t.CodeGen = t.operators = t.varKinds = t.ValueScopeName = t.ValueScope = t.Scope = t.Name = t.regexpCode = t.stringify = t.getProperty = t.nil = t.strConcat = t.str = t._ = void 0;
            const s = r("DpBd"),
                a = r("APb5");
            var o = r("DpBd");
            Object.defineProperty(t, "_", {
                enumerable: !0,
                get: function() {
                    return o._
                }
            }), Object.defineProperty(t, "str", {
                enumerable: !0,
                get: function() {
                    return o.str
                }
            }), Object.defineProperty(t, "strConcat", {
                enumerable: !0,
                get: function() {
                    return o.strConcat
                }
            }), Object.defineProperty(t, "nil", {
                enumerable: !0,
                get: function() {
                    return o.nil
                }
            }), Object.defineProperty(t, "getProperty", {
                enumerable: !0,
                get: function() {
                    return o.getProperty
                }
            }), Object.defineProperty(t, "stringify", {
                enumerable: !0,
                get: function() {
                    return o.stringify
                }
            }), Object.defineProperty(t, "regexpCode", {
                enumerable: !0,
                get: function() {
                    return o.regexpCode
                }
            }), Object.defineProperty(t, "Name", {
                enumerable: !0,
                get: function() {
                    return o.Name
                }
            });
            var n = r("APb5");
            Object.defineProperty(t, "Scope", {
                enumerable: !0,
                get: function() {
                    return n.Scope
                }
            }), Object.defineProperty(t, "ValueScope", {
                enumerable: !0,
                get: function() {
                    return n.ValueScope
                }
            }), Object.defineProperty(t, "ValueScopeName", {
                enumerable: !0,
                get: function() {
                    return n.ValueScopeName
                }
            }), Object.defineProperty(t, "varKinds", {
                enumerable: !0,
                get: function() {
                    return n.varKinds
                }
            }), t.operators = {
                GT: new s._Code(">"),
                GTE: new s._Code(">="),
                LT: new s._Code("<"),
                LTE: new s._Code("<="),
                EQ: new s._Code("==="),
                NEQ: new s._Code("!=="),
                NOT: new s._Code("!"),
                OR: new s._Code("||"),
                AND: new s._Code("&&"),
                ADD: new s._Code("+")
            };
            class i {
                optimizeNodes() {
                    return this
                }
                optimizeNames(e, t) {
                    return this
                }
            }
            class c extends i {
                constructor(e, t, r) {
                    super(), this.varKind = e, this.name = t, this.rhs = r
                }
                render({
                    es5: e,
                    _n: t
                }) {
                    const r = e ? a.varKinds.var : this.varKind,
                        s = void 0 === this.rhs ? "" : ` = ${this.rhs}`;
                    return `${r} ${this.name}${s};` + t
                }
                optimizeNames(e, t) {
                    if (e[this.name.str]) return this.rhs && (this.rhs = C(this.rhs, e, t)), this
                }
                get names() {
                    return this.rhs instanceof s._CodeOrName ? this.rhs.names : {}
                }
            }
            class d extends i {
                constructor(e, t, r) {
                    super(), this.lhs = e, this.rhs = t, this.sideEffects = r
                }
                render({
                    _n: e
                }) {
                    return `${this.lhs} = ${this.rhs};` + e
                }
                optimizeNames(e, t) {
                    if (!(this.lhs instanceof s.Name) || e[this.lhs.str] || this.sideEffects) return this.rhs = C(this.rhs, e, t), this
                }
                get names() {
                    return O(this.lhs instanceof s.Name ? {} : { ...this.lhs.names
                    }, this.rhs)
                }
            }
            class l extends d {
                constructor(e, t, r, s) {
                    super(e, r, s), this.op = t
                }
                render({
                    _n: e
                }) {
                    return `${this.lhs} ${this.op}= ${this.rhs};` + e
                }
            }
            class u extends i {
                constructor(e) {
                    super(), this.label = e, this.names = {}
                }
                render({
                    _n: e
                }) {
                    return `${this.label}:` + e
                }
            }
            class f extends i {
                constructor(e) {
                    super(), this.label = e, this.names = {}
                }
                render({
                    _n: e
                }) {
                    return `break${this.label?` ${this.label}`:""};` + e
                }
            }
            class h extends i {
                constructor(e) {
                    super(), this.error = e
                }
                render({
                    _n: e
                }) {
                    return `throw ${this.error};` + e
                }
                get names() {
                    return this.error.names
                }
            }
            class m extends i {
                constructor(e) {
                    super(), this.code = e
                }
                render({
                    _n: e
                }) {
                    return `${this.code};` + e
                }
                optimizeNodes() {
                    return `${this.code}` ? this : void 0
                }
                optimizeNames(e, t) {
                    return this.code = C(this.code, e, t), this
                }
                get names() {
                    return this.code instanceof s._CodeOrName ? this.code.names : {}
                }
            }
            class p extends i {
                constructor(e = []) {
                    super(), this.nodes = e
                }
                render(e) {
                    return this.nodes.reduce(((t, r) => t + r.render(e)), "")
                }
                optimizeNodes() {
                    const {
                        nodes: e
                    } = this;
                    let t = e.length;
                    for (; t--;) {
                        const r = e[t].optimizeNodes();
                        Array.isArray(r) ? e.splice(t, 1, ...r) : r ? e[t] = r : e.splice(t, 1)
                    }
                    return e.length > 0 ? this : void 0
                }
                optimizeNames(e, t) {
                    const {
                        nodes: r
                    } = this;
                    let s = r.length;
                    for (; s--;) {
                        const a = r[s];
                        a.optimizeNames(e, t) || (x(e, a.names), r.splice(s, 1))
                    }
                    return r.length > 0 ? this : void 0
                }
                get names() {
                    return this.nodes.reduce(((e, t) => T(e, t.names)), {})
                }
            }
            class y extends p {
                render(e) {
                    return "{" + e._n + super.render(e) + "}" + e._n
                }
            }
            class $ extends p {}
            class g extends y {}
            g.kind = "else";
            class v extends y {
                constructor(e, t) {
                    super(t), this.condition = e
                }
                render(e) {
                    let t = `if(${this.condition})` + super.render(e);
                    return this.else && (t += "else " + this.else.render(e)), t
                }
                optimizeNodes() {
                    super.optimizeNodes();
                    const e = this.condition;
                    if (!0 === e) return this.nodes;
                    let t = this.else;
                    if (t) {
                        const e = t.optimizeNodes();
                        t = this.else = Array.isArray(e) ? new g(e) : e
                    }
                    return t ? !1 === e ? t instanceof v ? t : t.nodes : this.nodes.length ? this : new v(I(e), t instanceof v ? [t] : t.nodes) : !1 !== e && this.nodes.length ? this : void 0
                }
                optimizeNames(e, t) {
                    var r;
                    if (this.else = null === (r = this.else) || void 0 === r ? void 0 : r.optimizeNames(e, t), super.optimizeNames(e, t) || this.else) return this.condition = C(this.condition, e, t), this
                }
                get names() {
                    const e = super.names;
                    return O(e, this.condition), this.else && T(e, this.else.names), e
                }
            }
            v.kind = "if";
            class _ extends y {}
            _.kind = "for";
            class w extends _ {
                constructor(e) {
                    super(), this.iteration = e
                }
                render(e) {
                    return `for(${this.iteration})` + super.render(e)
                }
                optimizeNames(e, t) {
                    if (super.optimizeNames(e, t)) return this.iteration = C(this.iteration, e, t), this
                }
                get names() {
                    return T(super.names, this.iteration.names)
                }
            }
            class b extends _ {
                constructor(e, t, r, s) {
                    super(), this.varKind = e, this.name = t, this.from = r, this.to = s
                }
                render(e) {
                    const t = e.es5 ? a.varKinds.var : this.varKind,
                        {
                            name: r,
                            from: s,
                            to: o
                        } = this;
                    return `for(${t} ${r}=${s}; ${r}<${o}; ${r}++)` + super.render(e)
                }
                get names() {
                    const e = O(super.names, this.from);
                    return O(e, this.to)
                }
            }
            class P extends _ {
                constructor(e, t, r, s) {
                    super(), this.loop = e, this.varKind = t, this.name = r, this.iterable = s
                }
                render(e) {
                    return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(e)
                }
                optimizeNames(e, t) {
                    if (super.optimizeNames(e, t)) return this.iterable = C(this.iterable, e, t), this
                }
                get names() {
                    return T(super.names, this.iterable.names)
                }
            }
            class E extends y {
                constructor(e, t, r) {
                    super(), this.name = e, this.args = t, this.async = r
                }
                render(e) {
                    return `${this.async?"async ":""}function ${this.name}(${this.args})` + super.render(e)
                }
            }
            E.kind = "func";
            class S extends p {
                render(e) {
                    return "return " + super.render(e)
                }
            }
            S.kind = "return";
            class k extends y {
                render(e) {
                    let t = "try" + super.render(e);
                    return this.catch && (t += this.catch.render(e)), this.finally && (t += this.finally.render(e)), t
                }
                optimizeNodes() {
                    var e, t;
                    return super.optimizeNodes(), null === (e = this.catch) || void 0 === e || e.optimizeNodes(), null === (t = this.finally) || void 0 === t || t.optimizeNodes(), this
                }
                optimizeNames(e, t) {
                    var r, s;
                    return super.optimizeNames(e, t), null === (r = this.catch) || void 0 === r || r.optimizeNames(e, t), null === (s = this.finally) || void 0 === s || s.optimizeNames(e, t), this
                }
                get names() {
                    const e = super.names;
                    return this.catch && T(e, this.catch.names), this.finally && T(e, this.finally.names), e
                }
            }
            class N extends y {
                constructor(e) {
                    super(), this.error = e
                }
                render(e) {
                    return `catch(${this.error})` + super.render(e)
                }
            }
            N.kind = "catch";
            class j extends y {
                render(e) {
                    return "finally" + super.render(e)
                }
            }
            j.kind = "finally";

            function T(e, t) {
                for (const r in t) e[r] = (e[r] || 0) + (t[r] || 0);
                return e
            }

            function O(e, t) {
                return t instanceof s._CodeOrName ? T(e, t.names) : e
            }

            function C(e, t, r) {
                return e instanceof s.Name ? o(e) : (a = e) instanceof s._Code && a._items.some((e => e instanceof s.Name && 1 === t[e.str] && void 0 !== r[e.str])) ? new s._Code(e._items.reduce(((e, t) => (t instanceof s.Name && (t = o(t)), t instanceof s._Code ? e.push(...t._items) : e.push(t), e)), [])) : e;
                var a;

                function o(e) {
                    const s = r[e.str];
                    return void 0 === s || 1 !== t[e.str] ? e : (delete t[e.str], s)
                }
            }

            function x(e, t) {
                for (const r in t) e[r] = (e[r] || 0) - (t[r] || 0)
            }

            function I(e) {
                return "boolean" == typeof e || "number" == typeof e || null === e ? !e : s._ `!${A(e)}`
            }
            t.CodeGen = class {
                constructor(e, t = {}) {
                    this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...t,
                        _n: t.lines ? "\n" : ""
                    }, this._extScope = e, this._scope = new a.Scope({
                        parent: e
                    }), this._nodes = [new $]
                }
                toString() {
                    return this._root.render(this.opts)
                }
                name(e) {
                    return this._scope.name(e)
                }
                scopeName(e) {
                    return this._extScope.name(e)
                }
                scopeValue(e, t) {
                    const r = this._extScope.value(e, t);
                    return (this._values[r.prefix] || (this._values[r.prefix] = new Set)).add(r), r
                }
                getScopeValue(e, t) {
                    return this._extScope.getValue(e, t)
                }
                scopeRefs(e) {
                    return this._extScope.scopeRefs(e, this._values)
                }
                scopeCode() {
                    return this._extScope.scopeCode(this._values)
                }
                _def(e, t, r, s) {
                    const a = this._scope.toName(t);
                    return void 0 !== r && s && (this._constants[a.str] = r), this._leafNode(new c(e, a, r)), a
                }
                const (e, t, r) {
                    return this._def(a.varKinds.const, e, t, r)
                }
                let (e, t, r) {
                    return this._def(a.varKinds.let, e, t, r)
                }
                var (e, t, r) {
                    return this._def(a.varKinds.var, e, t, r)
                }
                assign(e, t, r) {
                    return this._leafNode(new d(e, t, r))
                }
                add(e, r) {
                    return this._leafNode(new l(e, t.operators.ADD, r))
                }
                code(e) {
                    return "function" == typeof e ? e() : e !== s.nil && this._leafNode(new m(e)), this
                }
                object(...e) {
                    const t = ["{"];
                    for (const [r, a] of e) t.length > 1 && t.push(","), t.push(r), (r !== a || this.opts.es5) && (t.push(":"), (0, s.addCodeArg)(t, a));
                    return t.push("}"), new s._Code(t)
                }
                if (e, t, r) {
                    if (this._blockNode(new v(e)), t && r) this.code(t).else().code(r).endIf();
                    else if (t) this.code(t).endIf();
                    else if (r) throw new Error('CodeGen: "else" body without "then" body');
                    return this
                }
                elseIf(e) {
                    return this._elseNode(new v(e))
                } else() {
                    return this._elseNode(new g)
                }
                endIf() {
                    return this._endBlockNode(v, g)
                }
                _for(e, t) {
                    return this._blockNode(e), t && this.code(t).endFor(), this
                }
                for (e, t) {
                    return this._for(new w(e), t)
                }
                forRange(e, t, r, s, o = (this.opts.es5 ? a.varKinds.var : a.varKinds.let)) {
                    const n = this._scope.toName(e);
                    return this._for(new b(o, n, t, r), (() => s(n)))
                }
                forOf(e, t, r, o = a.varKinds.const) {
                    const n = this._scope.toName(e);
                    if (this.opts.es5) {
                        const e = t instanceof s.Name ? t : this.var("_arr", t);
                        return this.forRange("_i", 0, s._ `${e}.length`, (t => {
                            this.var(n, s._ `${e}[${t}]`), r(n)
                        }))
                    }
                    return this._for(new P("of", o, n, t), (() => r(n)))
                }
                forIn(e, t, r, o = (this.opts.es5 ? a.varKinds.var : a.varKinds.const)) {
                    if (this.opts.ownProperties) return this.forOf(e, s._ `Object.keys(${t})`, r);
                    const n = this._scope.toName(e);
                    return this._for(new P("in", o, n, t), (() => r(n)))
                }
                endFor() {
                    return this._endBlockNode(_)
                }
                label(e) {
                    return this._leafNode(new u(e))
                }
                break (e) {
                    return this._leafNode(new f(e))
                }
                return (e) {
                    const t = new S;
                    if (this._blockNode(t), this.code(e), 1 !== t.nodes.length) throw new Error('CodeGen: "return" should have one node');
                    return this._endBlockNode(S)
                }
                try (e, t, r) {
                    if (!t && !r) throw new Error('CodeGen: "try" without "catch" and "finally"');
                    const s = new k;
                    if (this._blockNode(s), this.code(e), t) {
                        const e = this.name("e");
                        this._currNode = s.catch = new N(e), t(e)
                    }
                    return r && (this._currNode = s.finally = new j, this.code(r)), this._endBlockNode(N, j)
                }
                throw (e) {
                    return this._leafNode(new h(e))
                }
                block(e, t) {
                    return this._blockStarts.push(this._nodes.length), e && this.code(e).endBlock(t), this
                }
                endBlock(e) {
                    const t = this._blockStarts.pop();
                    if (void 0 === t) throw new Error("CodeGen: not in self-balancing block");
                    const r = this._nodes.length - t;
                    if (r < 0 || void 0 !== e && r !== e) throw new Error(`CodeGen: wrong number of nodes: ${r} vs ${e} expected`);
                    return this._nodes.length = t, this
                }
                func(e, t = s.nil, r, a) {
                    return this._blockNode(new E(e, t, r)), a && this.code(a).endFunc(), this
                }
                endFunc() {
                    return this._endBlockNode(E)
                }
                optimize(e = 1) {
                    for (; e-- > 0;) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants)
                }
                _leafNode(e) {
                    return this._currNode.nodes.push(e), this
                }
                _blockNode(e) {
                    this._currNode.nodes.push(e), this._nodes.push(e)
                }
                _endBlockNode(e, t) {
                    const r = this._currNode;
                    if (r instanceof e || t && r instanceof t) return this._nodes.pop(), this;
                    throw new Error(`CodeGen: not in block "${t?`${e.kind}/${t.kind}`:e.kind}"`)
                }
                _elseNode(e) {
                    const t = this._currNode;
                    if (!(t instanceof v)) throw new Error('CodeGen: "else" without "if"');
                    return this._currNode = t.else = e, this
                }
                get _root() {
                    return this._nodes[0]
                }
                get _currNode() {
                    const e = this._nodes;
                    return e[e.length - 1]
                }
                set _currNode(e) {
                    const t = this._nodes;
                    t[t.length - 1] = e
                }
            }, t.not = I;
            const R = D(t.operators.AND);
            t.and = function(...e) {
                return e.reduce(R)
            };
            const M = D(t.operators.OR);

            function D(e) {
                return (t, r) => t === s.nil ? r : r === s.nil ? t : s._ `${A(t)} ${e} ${A(r)}`
            }

            function A(e) {
                return e instanceof s.Name ? e : s._ `(${e})`
            }
            t.or = function(...e) {
                return e.reduce(M)
            }
        },
        APb5: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ValueScope = t.ValueScopeName = t.Scope = t.varKinds = t.UsedValueState = void 0;
            const s = r("DpBd");
            class a extends Error {
                constructor(e) {
                    super(`CodeGen: "code" for ${e} not defined`), this.value = e.value
                }
            }
            var o;
            ! function(e) {
                e[e.Started = 0] = "Started", e[e.Completed = 1] = "Completed"
            }(o = t.UsedValueState || (t.UsedValueState = {})), t.varKinds = {
                const: new s.Name("const"),
                let: new s.Name("let"),
                var: new s.Name("var")
            };
            class n {
                constructor({
                    prefixes: e,
                    parent: t
                } = {}) {
                    this._names = {}, this._prefixes = e, this._parent = t
                }
                toName(e) {
                    return e instanceof s.Name ? e : this.name(e)
                }
                name(e) {
                    return new s.Name(this._newName(e))
                }
                _newName(e) {
                    return `${e}${(this._names[e]||this._nameGroup(e)).index++}`
                }
                _nameGroup(e) {
                    var t, r;
                    if ((null === (r = null === (t = this._parent) || void 0 === t ? void 0 : t._prefixes) || void 0 === r ? void 0 : r.has(e)) || this._prefixes && !this._prefixes.has(e)) throw new Error(`CodeGen: prefix "${e}" is not allowed in this scope`);
                    return this._names[e] = {
                        prefix: e,
                        index: 0
                    }
                }
            }
            t.Scope = n;
            class i extends s.Name {
                constructor(e, t) {
                    super(t), this.prefix = e
                }
                setValue(e, {
                    property: t,
                    itemIndex: r
                }) {
                    this.value = e, this.scopePath = s._ `.${new s.Name(t)}[${r}]`
                }
            }
            t.ValueScopeName = i;
            const c = s._ `\n`;
            t.ValueScope = class extends n {
                constructor(e) {
                    super(e), this._values = {}, this._scope = e.scope, this.opts = { ...e,
                        _n: e.lines ? c : s.nil
                    }
                }
                get() {
                    return this._scope
                }
                name(e) {
                    return new i(e, this._newName(e))
                }
                value(e, t) {
                    var r;
                    if (void 0 === t.ref) throw new Error("CodeGen: ref must be passed in value");
                    const s = this.toName(e),
                        {
                            prefix: a
                        } = s,
                        o = null !== (r = t.key) && void 0 !== r ? r : t.ref;
                    let n = this._values[a];
                    if (n) {
                        const e = n.get(o);
                        if (e) return e
                    } else n = this._values[a] = new Map;
                    n.set(o, s);
                    const i = this._scope[a] || (this._scope[a] = []),
                        c = i.length;
                    return i[c] = t.ref, s.setValue(t, {
                        property: a,
                        itemIndex: c
                    }), s
                }
                getValue(e, t) {
                    const r = this._values[e];
                    if (r) return r.get(t)
                }
                scopeRefs(e, t = this._values) {
                    return this._reduceValues(t, (t => {
                        if (void 0 === t.scopePath) throw new Error(`CodeGen: name "${t}" has no value`);
                        return s._ `${e}${t.scopePath}`
                    }))
                }
                scopeCode(e = this._values, t, r) {
                    return this._reduceValues(e, (e => {
                        if (void 0 === e.value) throw new Error(`CodeGen: name "${e}" has no value`);
                        return e.value.code
                    }), t, r)
                }
                _reduceValues(e, r, n = {}, i) {
                    let c = s.nil;
                    for (const d in e) {
                        const l = e[d];
                        if (!l) continue;
                        const u = n[d] = n[d] || new Map;
                        l.forEach((e => {
                            if (u.has(e)) return;
                            u.set(e, o.Started);
                            let n = r(e);
                            if (n) {
                                const r = this.opts.es5 ? t.varKinds.var : t.varKinds.const;
                                c = s._ `${c}${r} ${e} = ${n};${this.opts._n}`
                            } else {
                                if (!(n = null == i ? void 0 : i(e))) throw new a(e);
                                c = s._ `${c}${n}${this.opts._n}`
                            }
                            u.set(e, o.Completed)
                        }))
                    }
                    return c
                }
            }
        },
        "0iNb": (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.extendErrors = t.resetErrorsCount = t.reportExtraError = t.reportError = t.keyword$DataError = t.keywordError = void 0;
            const s = r("mTfQ"),
                a = r("QruF"),
                o = r("Ze9L");

            function n(e, t) {
                const r = e.const("err", t);
                e.if(s._ `${o.default.vErrors} === null`, (() => e.assign(o.default.vErrors, s._ `[${r}]`)), s._ `${o.default.vErrors}.push(${r})`), e.code(s._ `${o.default.errors}++`)
            }

            function i(e, t) {
                const {
                    gen: r,
                    validateName: a,
                    schemaEnv: o
                } = e;
                o.$async ? r.throw(s._ `new ${e.ValidationError}(${t})`) : (r.assign(s._ `${a}.errors`, t), r.return(!1))
            }
            t.keywordError = {
                message: ({
                    keyword: e
                }) => s.str `must pass "${e}" keyword validation`
            }, t.keyword$DataError = {
                message: ({
                    keyword: e,
                    schemaType: t
                }) => t ? s.str `"${e}" keyword must be ${t} ($data)` : s.str `"${e}" keyword is invalid ($data)`
            }, t.reportError = function(e, r = t.keywordError, a, o) {
                const {
                    it: c
                } = e, {
                    gen: l,
                    compositeRule: u,
                    allErrors: f
                } = c, h = d(e, r, a);
                (null != o ? o : u || f) ? n(l, h): i(c, s._ `[${h}]`)
            }, t.reportExtraError = function(e, r = t.keywordError, s) {
                const {
                    it: a
                } = e, {
                    gen: c,
                    compositeRule: l,
                    allErrors: u
                } = a;
                n(c, d(e, r, s)), l || u || i(a, o.default.vErrors)
            }, t.resetErrorsCount = function(e, t) {
                e.assign(o.default.errors, t), e.if(s._ `${o.default.vErrors} !== null`, (() => e.if(t, (() => e.assign(s._ `${o.default.vErrors}.length`, t)), (() => e.assign(o.default.vErrors, null)))))
            }, t.extendErrors = function({
                gen: e,
                keyword: t,
                schemaValue: r,
                data: a,
                errsCount: n,
                it: i
            }) {
                if (void 0 === n) throw new Error("ajv implementation error");
                const c = e.name("err");
                e.forRange("i", n, o.default.errors, (n => {
                    e.const(c, s._ `${o.default.vErrors}[${n}]`), e.if(s._ `${c}.instancePath === undefined`, (() => e.assign(s._ `${c}.instancePath`, (0, s.strConcat)(o.default.instancePath, i.errorPath)))), e.assign(s._ `${c}.schemaPath`, s.str `${i.errSchemaPath}/${t}`), i.opts.verbose && (e.assign(s._ `${c}.schema`, r), e.assign(s._ `${c}.data`, a))
                }))
            };
            const c = {
                keyword: new s.Name("keyword"),
                schemaPath: new s.Name("schemaPath"),
                params: new s.Name("params"),
                propertyName: new s.Name("propertyName"),
                message: new s.Name("message"),
                schema: new s.Name("schema"),
                parentSchema: new s.Name("parentSchema")
            };

            function d(e, t, r) {
                const {
                    createErrors: a
                } = e.it;
                return !1 === a ? s._ `{}` : function(e, t, r = {}) {
                    const {
                        gen: a,
                        it: n
                    } = e, i = [l(n, r), u(e, r)];
                    return function(e, {
                        params: t,
                        message: r
                    }, a) {
                        const {
                            keyword: n,
                            data: i,
                            schemaValue: d,
                            it: l
                        } = e, {
                            opts: u,
                            propertyName: f,
                            topSchemaRef: h,
                            schemaPath: m
                        } = l;
                        a.push([c.keyword, n], [c.params, "function" == typeof t ? t(e) : t || s._ `{}`]), u.messages && a.push([c.message, "function" == typeof r ? r(e) : r]);
                        u.verbose && a.push([c.schema, d], [c.parentSchema, s._ `${h}${m}`], [o.default.data, i]);
                        f && a.push([c.propertyName, f])
                    }(e, t, i), a.object(...i)
                }(e, t, r)
            }

            function l({
                errorPath: e
            }, {
                instancePath: t
            }) {
                const r = t ? s.str `${e}${(0,a.getErrorPath)(t,a.Type.Str)}` : e;
                return [o.default.instancePath, (0, s.strConcat)(o.default.instancePath, r)]
            }

            function u({
                keyword: e,
                it: {
                    errSchemaPath: t
                }
            }, {
                schemaPath: r,
                parentSchema: o
            }) {
                let n = o ? t : s.str `${t}/${e}`;
                return r && (n = s.str `${n}${(0,a.getErrorPath)(r,a.Type.Str)}`), [c.schemaPath, n]
            }
        },
        IBwq: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.resolveSchema = t.getCompilingSchema = t.resolveRef = t.compileSchema = t.SchemaEnv = void 0;
            const s = r("mTfQ"),
                a = r("Hj1T"),
                o = r("Ze9L"),
                n = r("ZEnf"),
                i = r("QruF"),
                c = r("pcE6"),
                d = r("ggVz");
            class l {
                constructor(e) {
                    var t;
                    let r;
                    this.refs = {}, this.dynamicAnchors = {}, "object" == typeof e.schema && (r = e.schema), this.schema = e.schema, this.schemaId = e.schemaId, this.root = e.root || this, this.baseId = null !== (t = e.baseId) && void 0 !== t ? t : (0, n.normalizeId)(null == r ? void 0 : r[e.schemaId || "$id"]), this.schemaPath = e.schemaPath, this.localRefs = e.localRefs, this.meta = e.meta, this.$async = null == r ? void 0 : r.$async, this.refs = {}
                }
            }

            function u(e) {
                const t = h.call(this, e);
                if (t) return t;
                const r = (0, n.getFullPath)(e.root.baseId),
                    {
                        es5: i,
                        lines: d
                    } = this.opts.code,
                    {
                        ownProperties: l
                    } = this.opts,
                    u = new s.CodeGen(this.scope, {
                        es5: i,
                        lines: d,
                        ownProperties: l
                    });
                let f;
                e.$async && (f = u.scopeValue("Error", {
                    ref: a.default,
                    code: s._ `require("ajv/dist/runtime/validation_error").default`
                }));
                const m = u.scopeName("validate");
                e.validateName = m;
                const p = {
                    gen: u,
                    allErrors: this.opts.allErrors,
                    data: o.default.data,
                    parentData: o.default.parentData,
                    parentDataProperty: o.default.parentDataProperty,
                    dataNames: [o.default.data],
                    dataPathArr: [s.nil],
                    dataLevel: 0,
                    dataTypes: [],
                    definedProperties: new Set,
                    topSchemaRef: u.scopeValue("schema", !0 === this.opts.code.source ? {
                        ref: e.schema,
                        code: (0, s.stringify)(e.schema)
                    } : {
                        ref: e.schema
                    }),
                    validateName: m,
                    ValidationError: f,
                    schema: e.schema,
                    schemaEnv: e,
                    rootId: r,
                    baseId: e.baseId || r,
                    schemaPath: s.nil,
                    errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
                    errorPath: s._ `""`,
                    opts: this.opts,
                    self: this
                };
                let y;
                try {
                    this._compilations.add(e), (0, c.validateFunctionCode)(p), u.optimize(this.opts.code.optimize);
                    const t = u.toString();
                    y = `${u.scopeRefs(o.default.scope)}return ${t}`, this.opts.code.process && (y = this.opts.code.process(y, e));
                    const r = new Function(`${o.default.self}`, `${o.default.scope}`, y)(this, this.scope.get());
                    if (this.scope.value(m, {
                            ref: r
                        }), r.errors = null, r.schema = e.schema, r.schemaEnv = e, e.$async && (r.$async = !0), !0 === this.opts.code.source && (r.source = {
                            validateName: m,
                            validateCode: t,
                            scopeValues: u._values
                        }), this.opts.unevaluated) {
                        const {
                            props: e,
                            items: t
                        } = p;
                        r.evaluated = {
                            props: e instanceof s.Name ? void 0 : e,
                            items: t instanceof s.Name ? void 0 : t,
                            dynamicProps: e instanceof s.Name,
                            dynamicItems: t instanceof s.Name
                        }, r.source && (r.source.evaluated = (0, s.stringify)(r.evaluated))
                    }
                    return e.validate = r, e
                } catch (t) {
                    throw delete e.validate, delete e.validateName, y && this.logger.error("Error compiling schema, function code:", y), t
                } finally {
                    this._compilations.delete(e)
                }
            }

            function f(e) {
                return (0, n.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : u.call(this, e)
            }

            function h(e) {
                for (const s of this._compilations)
                    if (r = e, (t = s).schema === r.schema && t.root === r.root && t.baseId === r.baseId) return s;
                var t, r
            }

            function m(e, t) {
                let r;
                for (;
                    "string" == typeof(r = this.refs[t]);) t = r;
                return r || this.schemas[t] || p.call(this, e, t)
            }

            function p(e, t) {
                const r = d.parse(t),
                    s = (0, n._getFullPath)(r);
                let a = (0, n.getFullPath)(e.baseId);
                if (Object.keys(e.schema).length > 0 && s === a) return $.call(this, r, e);
                const o = (0, n.normalizeId)(s),
                    i = this.refs[o] || this.schemas[o];
                if ("string" == typeof i) {
                    const t = p.call(this, e, i);
                    if ("object" != typeof(null == t ? void 0 : t.schema)) return;
                    return $.call(this, r, t)
                }
                if ("object" == typeof(null == i ? void 0 : i.schema)) {
                    if (i.validate || u.call(this, i), o === (0, n.normalizeId)(t)) {
                        const {
                            schema: t
                        } = i, {
                            schemaId: r
                        } = this.opts, s = t[r];
                        return s && (a = (0, n.resolveUrl)(a, s)), new l({
                            schema: t,
                            schemaId: r,
                            root: e,
                            baseId: a
                        })
                    }
                    return $.call(this, r, i)
                }
            }
            t.SchemaEnv = l, t.compileSchema = u, t.resolveRef = function(e, t, r) {
                var s;
                r = (0, n.resolveUrl)(t, r);
                const a = e.refs[r];
                if (a) return a;
                let o = m.call(this, e, r);
                if (void 0 === o) {
                    const a = null === (s = e.localRefs) || void 0 === s ? void 0 : s[r],
                        {
                            schemaId: n
                        } = this.opts;
                    a && (o = new l({
                        schema: a,
                        schemaId: n,
                        root: e,
                        baseId: t
                    }))
                }
                return void 0 !== o ? e.refs[r] = f.call(this, o) : void 0
            }, t.getCompilingSchema = h, t.resolveSchema = p;
            const y = new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);

            function $(e, {
                baseId: t,
                schema: r,
                root: s
            }) {
                var a;
                if ("/" !== (null === (a = e.fragment) || void 0 === a ? void 0 : a[0])) return;
                for (const s of e.fragment.slice(1).split("/")) {
                    if ("boolean" == typeof r) return;
                    const e = r[(0, i.unescapeFragment)(s)];
                    if (void 0 === e) return;
                    const a = "object" == typeof(r = e) && r[this.opts.schemaId];
                    !y.has(s) && a && (t = (0, n.resolveUrl)(t, a))
                }
                let o;
                if ("boolean" != typeof r && r.$ref && !(0, i.schemaHasRulesButRef)(r, this.RULES)) {
                    const e = (0, n.resolveUrl)(t, r.$ref);
                    o = p.call(this, s, e)
                }
                const {
                    schemaId: c
                } = this.opts;
                return o = o || new l({
                    schema: r,
                    schemaId: c,
                    root: s,
                    baseId: t
                }), o.schema !== o.root.schema ? o : void 0
            }
        },
        Ze9L: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("mTfQ"),
                a = {
                    data: new s.Name("data"),
                    valCxt: new s.Name("valCxt"),
                    instancePath: new s.Name("instancePath"),
                    parentData: new s.Name("parentData"),
                    parentDataProperty: new s.Name("parentDataProperty"),
                    rootData: new s.Name("rootData"),
                    dynamicAnchors: new s.Name("dynamicAnchors"),
                    vErrors: new s.Name("vErrors"),
                    errors: new s.Name("errors"),
                    this: new s.Name("this"),
                    self: new s.Name("self"),
                    scope: new s.Name("scope"),
                    json: new s.Name("json"),
                    jsonPos: new s.Name("jsonPos"),
                    jsonLen: new s.Name("jsonLen"),
                    jsonPart: new s.Name("jsonPart")
                };
            t.default = a
        },
        KmkK: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("ZEnf");
            class a extends Error {
                constructor(e, t, r) {
                    super(r || `can't resolve reference ${t} from id ${e}`), this.missingRef = (0, s.resolveUrl)(e, t), this.missingSchema = (0, s.normalizeId)((0, s.getFullPath)(this.missingRef))
                }
            }
            t.default = a
        },
        ZEnf: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getSchemaRefs = t.resolveUrl = t.normalizeId = t._getFullPath = t.getFullPath = t.inlineRef = void 0;
            const s = r("QruF"),
                a = r("MKPJ"),
                o = r("vs3H"),
                n = r("ggVz"),
                i = new Set(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum", "const"]);
            t.inlineRef = function(e, t = !0) {
                return "boolean" == typeof e || (!0 === t ? !d(e) : !!t && l(e) <= t)
            };
            const c = new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);

            function d(e) {
                for (const t in e) {
                    if (c.has(t)) return !0;
                    const r = e[t];
                    if (Array.isArray(r) && r.some(d)) return !0;
                    if ("object" == typeof r && d(r)) return !0
                }
                return !1
            }

            function l(e) {
                let t = 0;
                for (const r in e) {
                    if ("$ref" === r) return 1 / 0;
                    if (t++, !i.has(r) && ("object" == typeof e[r] && (0, s.eachItem)(e[r], (e => t += l(e))), t === 1 / 0)) return 1 / 0
                }
                return t
            }

            function u(e = "", t) {
                !1 !== t && (e = m(e));
                return f(n.parse(e))
            }

            function f(e) {
                return n.serialize(e).split("#")[0] + "#"
            }
            t.getFullPath = u, t._getFullPath = f;
            const h = /#\/?$/;

            function m(e) {
                return e ? e.replace(h, "") : ""
            }
            t.normalizeId = m, t.resolveUrl = function(e, t) {
                return t = m(t), n.resolve(e, t)
            };
            const p = /^[a-z_][-a-z0-9._]*$/i;
            t.getSchemaRefs = function(e, t) {
                if ("boolean" == typeof e) return {};
                const {
                    schemaId: r
                } = this.opts, s = m(e[r] || t), i = {
                    "": s
                }, c = u(s, !1), d = {}, l = new Set;
                return o(e, {
                    allKeys: !0
                }, ((e, t, s, a) => {
                    if (void 0 === a) return;
                    const o = c + t;
                    let u = i[a];

                    function y(t) {
                        if (t = m(u ? n.resolve(u, t) : t), l.has(t)) throw h(t);
                        l.add(t);
                        let r = this.refs[t];
                        return "string" == typeof r && (r = this.refs[r]), "object" == typeof r ? f(e, r.schema, t) : t !== m(o) && ("#" === t[0] ? (f(e, d[t], t), d[t] = e) : this.refs[t] = o), t
                    }

                    function $(e) {
                        if ("string" == typeof e) {
                            if (!p.test(e)) throw new Error(`invalid anchor "${e}"`);
                            y.call(this, `#${e}`)
                        }
                    }
                    "string" == typeof e[r] && (u = y.call(this, e[r])), $.call(this, e.$anchor), $.call(this, e.$dynamicAnchor), i[t] = u
                })), d;

                function f(e, t, r) {
                    if (void 0 !== t && !a(e, t)) throw h(r)
                }

                function h(e) {
                    return new Error(`reference "${e}" resolves to more than one schema`)
                }
            }
        },
        eDW6: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getRules = t.isJSONType = void 0;
            const r = new Set(["string", "number", "integer", "boolean", "null", "object", "array"]);
            t.isJSONType = function(e) {
                return "string" == typeof e && r.has(e)
            }, t.getRules = function() {
                const e = {
                    number: {
                        type: "number",
                        rules: []
                    },
                    string: {
                        type: "string",
                        rules: []
                    },
                    array: {
                        type: "array",
                        rules: []
                    },
                    object: {
                        type: "object",
                        rules: []
                    }
                };
                return {
                    types: { ...e,
                        integer: !0,
                        boolean: !0,
                        null: !0
                    },
                    rules: [{
                        rules: []
                    }, e.number, e.string, e.array, e.object],
                    post: {
                        rules: []
                    },
                    all: {},
                    keywords: {}
                }
            }
        },
        QruF: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.checkStrictMode = t.getErrorPath = t.Type = t.useFunc = t.setEvaluated = t.evaluatedPropsToName = t.mergeEvaluated = t.eachItem = t.unescapeJsonPointer = t.escapeJsonPointer = t.escapeFragment = t.unescapeFragment = t.schemaRefOrVal = t.schemaHasRulesButRef = t.schemaHasRules = t.checkUnknownRules = t.alwaysValidSchema = t.toHash = void 0;
            const s = r("mTfQ"),
                a = r("DpBd");

            function o(e, t = e.schema) {
                const {
                    opts: r,
                    self: s
                } = e;
                if (!r.strictSchema) return;
                if ("boolean" == typeof t) return;
                const a = s.RULES.keywords;
                for (const r in t) a[r] || m(e, `unknown keyword: "${r}"`)
            }

            function n(e, t) {
                if ("boolean" == typeof e) return !e;
                for (const r in e)
                    if (t[r]) return !0;
                return !1
            }

            function i(e) {
                return "number" == typeof e ? `${e}` : e.replace(/~/g, "~0").replace(/\//g, "~1")
            }

            function c(e) {
                return e.replace(/~1/g, "/").replace(/~0/g, "~")
            }

            function d({
                mergeNames: e,
                mergeToName: t,
                mergeValues: r,
                resultToName: a
            }) {
                return (o, n, i, c) => {
                    const d = void 0 === i ? n : i instanceof s.Name ? (n instanceof s.Name ? e(o, n, i) : t(o, n, i), i) : n instanceof s.Name ? (t(o, i, n), n) : r(n, i);
                    return c !== s.Name || d instanceof s.Name ? d : a(o, d)
                }
            }

            function l(e, t) {
                if (!0 === t) return e.var("props", !0);
                const r = e.var("props", s._ `{}`);
                return void 0 !== t && u(e, r, t), r
            }

            function u(e, t, r) {
                Object.keys(r).forEach((r => e.assign(s._ `${t}${(0,s.getProperty)(r)}`, !0)))
            }
            t.toHash = function(e) {
                const t = {};
                for (const r of e) t[r] = !0;
                return t
            }, t.alwaysValidSchema = function(e, t) {
                return "boolean" == typeof t ? t : 0 === Object.keys(t).length || (o(e, t), !n(t, e.self.RULES.all))
            }, t.checkUnknownRules = o, t.schemaHasRules = n, t.schemaHasRulesButRef = function(e, t) {
                if ("boolean" == typeof e) return !e;
                for (const r in e)
                    if ("$ref" !== r && t.all[r]) return !0;
                return !1
            }, t.schemaRefOrVal = function({
                topSchemaRef: e,
                schemaPath: t
            }, r, a, o) {
                if (!o) {
                    if ("number" == typeof r || "boolean" == typeof r) return r;
                    if ("string" == typeof r) return s._ `${r}`
                }
                return s._ `${e}${t}${(0,s.getProperty)(a)}`
            }, t.unescapeFragment = function(e) {
                return c(decodeURIComponent(e))
            }, t.escapeFragment = function(e) {
                return encodeURIComponent(i(e))
            }, t.escapeJsonPointer = i, t.unescapeJsonPointer = c, t.eachItem = function(e, t) {
                if (Array.isArray(e))
                    for (const r of e) t(r);
                else t(e)
            }, t.mergeEvaluated = {
                props: d({
                    mergeNames: (e, t, r) => e.if(s._ `${r} !== true && ${t} !== undefined`, (() => {
                        e.if(s._ `${t} === true`, (() => e.assign(r, !0)), (() => e.assign(r, s._ `${r} || {}`).code(s._ `Object.assign(${r}, ${t})`)))
                    })),
                    mergeToName: (e, t, r) => e.if(s._ `${r} !== true`, (() => {
                        !0 === t ? e.assign(r, !0) : (e.assign(r, s._ `${r} || {}`), u(e, r, t))
                    })),
                    mergeValues: (e, t) => !0 === e || { ...e,
                        ...t
                    },
                    resultToName: l
                }),
                items: d({
                    mergeNames: (e, t, r) => e.if(s._ `${r} !== true && ${t} !== undefined`, (() => e.assign(r, s._ `${t} === true ? true : ${r} > ${t} ? ${r} : ${t}`))),
                    mergeToName: (e, t, r) => e.if(s._ `${r} !== true`, (() => e.assign(r, !0 === t || s._ `${r} > ${t} ? ${r} : ${t}`))),
                    mergeValues: (e, t) => !0 === e || Math.max(e, t),
                    resultToName: (e, t) => e.var("items", t)
                })
            }, t.evaluatedPropsToName = l, t.setEvaluated = u;
            const f = {};
            var h;

            function m(e, t, r = e.opts.strictSchema) {
                if (r) {
                    if (t = `strict mode: ${t}`, !0 === r) throw new Error(t);
                    e.self.logger.warn(t)
                }
            }
            t.useFunc = function(e, t) {
                    return e.scopeValue("func", {
                        ref: t,
                        code: f[t.code] || (f[t.code] = new a._Code(t.code))
                    })
                },
                function(e) {
                    e[e.Num = 0] = "Num", e[e.Str = 1] = "Str"
                }(h = t.Type || (t.Type = {})), t.getErrorPath = function(e, t, r) {
                    if (e instanceof s.Name) {
                        const a = t === h.Num;
                        return r ? a ? s._ `"[" + ${e} + "]"` : s._ `"['" + ${e} + "']"` : a ? s._ `"/" + ${e}` : s._ `"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`
                    }
                    return r ? (0, s.getProperty)(e).toString() : "/" + i(e)
                }, t.checkStrictMode = m
        },
        m7BJ: (e, t) => {
            function r(e, t) {
                return t.rules.some((t => s(e, t)))
            }

            function s(e, t) {
                var r;
                return void 0 !== e[t.keyword] || (null === (r = t.definition.implements) || void 0 === r ? void 0 : r.some((t => void 0 !== e[t])))
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.shouldUseRule = t.shouldUseGroup = t.schemaHasRulesForType = void 0, t.schemaHasRulesForType = function({
                schema: e,
                self: t
            }, s) {
                const a = t.RULES.types[s];
                return a && !0 !== a && r(e, a)
            }, t.shouldUseGroup = r, t.shouldUseRule = s
        },
        Upkn: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.boolOrEmptySchema = t.topBoolOrEmptySchema = void 0;
            const s = r("0iNb"),
                a = r("mTfQ"),
                o = r("Ze9L"),
                n = {
                    message: "boolean schema is false"
                };

            function i(e, t) {
                const {
                    gen: r,
                    data: a
                } = e, o = {
                    gen: r,
                    keyword: "false schema",
                    data: a,
                    schema: !1,
                    schemaCode: !1,
                    schemaValue: !1,
                    params: {},
                    it: e
                };
                (0, s.reportError)(o, n, void 0, t)
            }
            t.topBoolOrEmptySchema = function(e) {
                const {
                    gen: t,
                    schema: r,
                    validateName: s
                } = e;
                !1 === r ? i(e, !1) : "object" == typeof r && !0 === r.$async ? t.return(o.default.data) : (t.assign(a._ `${s}.errors`, null), t.return(!0))
            }, t.boolOrEmptySchema = function(e, t) {
                const {
                    gen: r,
                    schema: s
                } = e;
                !1 === s ? (r.var(t, !1), i(e)) : r.var(t, !0)
            }
        },
        "0nRX": (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.reportTypeError = t.checkDataTypes = t.checkDataType = t.coerceAndCheckDataType = t.getJSONTypes = t.getSchemaTypes = t.DataType = void 0;
            const s = r("eDW6"),
                a = r("m7BJ"),
                o = r("0iNb"),
                n = r("mTfQ"),
                i = r("QruF");
            var c;

            function d(e) {
                const t = Array.isArray(e) ? e : e ? [e] : [];
                if (t.every(s.isJSONType)) return t;
                throw new Error("type must be JSONType or JSONType[]: " + t.join(","))
            }! function(e) {
                e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong"
            }(c = t.DataType || (t.DataType = {})), t.getSchemaTypes = function(e) {
                const t = d(e.type);
                if (t.includes("null")) {
                    if (!1 === e.nullable) throw new Error("type: null contradicts nullable: false")
                } else {
                    if (!t.length && void 0 !== e.nullable) throw new Error('"nullable" cannot be used without "type"');
                    !0 === e.nullable && t.push("null")
                }
                return t
            }, t.getJSONTypes = d, t.coerceAndCheckDataType = function(e, t) {
                const {
                    gen: r,
                    data: s,
                    opts: o
                } = e, i = function(e, t) {
                    return t ? e.filter((e => l.has(e) || "array" === t && "array" === e)) : []
                }(t, o.coerceTypes), d = t.length > 0 && !(0 === i.length && 1 === t.length && (0, a.schemaHasRulesForType)(e, t[0]));
                if (d) {
                    const a = f(t, s, o.strictNumbers, c.Wrong);
                    r.if(a, (() => {
                        i.length ? function(e, t, r) {
                            const {
                                gen: s,
                                data: a,
                                opts: o
                            } = e, i = s.let("dataType", n._ `typeof ${a}`), c = s.let("coerced", n._ `undefined`);
                            "array" === o.coerceTypes && s.if(n._ `${i} == 'object' && Array.isArray(${a}) && ${a}.length == 1`, (() => s.assign(a, n._ `${a}[0]`).assign(i, n._ `typeof ${a}`).if(f(t, a, o.strictNumbers), (() => s.assign(c, a)))));
                            s.if(n._ `${c} !== undefined`);
                            for (const e of r)(l.has(e) || "array" === e && "array" === o.coerceTypes) && d(e);

                            function d(e) {
                                switch (e) {
                                    case "string":
                                        return void s.elseIf(n._ `${i} == "number" || ${i} == "boolean"`).assign(c, n._ `"" + ${a}`).elseIf(n._ `${a} === null`).assign(c, n._ `""`);
                                    case "number":
                                        return void s.elseIf(n._ `${i} == "boolean" || ${a} === null
              || (${i} == "string" && ${a} && ${a} == +${a})`).assign(c, n._ `+${a}`);
                                    case "integer":
                                        return void s.elseIf(n._ `${i} === "boolean" || ${a} === null
              || (${i} === "string" && ${a} && ${a} == +${a} && !(${a} % 1))`).assign(c, n._ `+${a}`);
                                    case "boolean":
                                        return void s.elseIf(n._ `${a} === "false" || ${a} === 0 || ${a} === null`).assign(c, !1).elseIf(n._ `${a} === "true" || ${a} === 1`).assign(c, !0);
                                    case "null":
                                        return s.elseIf(n._ `${a} === "" || ${a} === 0 || ${a} === false`), void s.assign(c, null);
                                    case "array":
                                        s.elseIf(n._ `${i} === "string" || ${i} === "number"
              || ${i} === "boolean" || ${a} === null`).assign(c, n._ `[${a}]`)
                                }
                            }
                            s.else(), m(e), s.endIf(), s.if(n._ `${c} !== undefined`, (() => {
                                s.assign(a, c),
                                    function({
                                        gen: e,
                                        parentData: t,
                                        parentDataProperty: r
                                    }, s) {
                                        e.if(n._ `${t} !== undefined`, (() => e.assign(n._ `${t}[${r}]`, s)))
                                    }(e, c)
                            }))
                        }(e, t, i) : m(e)
                    }))
                }
                return d
            };
            const l = new Set(["string", "number", "integer", "boolean", "null"]);

            function u(e, t, r, s = c.Correct) {
                const a = s === c.Correct ? n.operators.EQ : n.operators.NEQ;
                let o;
                switch (e) {
                    case "null":
                        return n._ `${t} ${a} null`;
                    case "array":
                        o = n._ `Array.isArray(${t})`;
                        break;
                    case "object":
                        o = n._ `${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
                        break;
                    case "integer":
                        o = i(n._ `!(${t} % 1) && !isNaN(${t})`);
                        break;
                    case "number":
                        o = i();
                        break;
                    default:
                        return n._ `typeof ${t} ${a} ${e}`
                }
                return s === c.Correct ? o : (0, n.not)(o);

                function i(e = n.nil) {
                    return (0, n.and)(n._ `typeof ${t} == "number"`, e, r ? n._ `isFinite(${t})` : n.nil)
                }
            }

            function f(e, t, r, s) {
                if (1 === e.length) return u(e[0], t, r, s);
                let a;
                const o = (0, i.toHash)(e);
                if (o.array && o.object) {
                    const e = n._ `typeof ${t} != "object"`;
                    a = o.null ? e : n._ `!${t} || ${e}`, delete o.null, delete o.array, delete o.object
                } else a = n.nil;
                o.number && delete o.integer;
                for (const e in o) a = (0, n.and)(a, u(e, t, r, s));
                return a
            }
            t.checkDataType = u, t.checkDataTypes = f;
            const h = {
                message: ({
                    schema: e
                }) => `must be ${e}`,
                params: ({
                    schema: e,
                    schemaValue: t
                }) => "string" == typeof e ? n._ `{type: ${e}}` : n._ `{type: ${t}}`
            };

            function m(e) {
                const t = function(e) {
                    const {
                        gen: t,
                        data: r,
                        schema: s
                    } = e, a = (0, i.schemaRefOrVal)(e, s, "type");
                    return {
                        gen: t,
                        keyword: "type",
                        data: r,
                        schema: s.type,
                        schemaCode: a,
                        schemaValue: a,
                        parentSchema: s,
                        params: {},
                        it: e
                    }
                }(e);
                (0, o.reportError)(t, h)
            }
            t.reportTypeError = m
        },
        "xW/z": (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.assignDefaults = void 0;
            const s = r("mTfQ"),
                a = r("QruF");

            function o(e, t, r) {
                const {
                    gen: o,
                    compositeRule: n,
                    data: i,
                    opts: c
                } = e;
                if (void 0 === r) return;
                const d = s._ `${i}${(0,s.getProperty)(t)}`;
                if (n) return void(0, a.checkStrictMode)(e, `default is ignored for: ${d}`);
                let l = s._ `${d} === undefined`;
                "empty" === c.useDefaults && (l = s._ `${l} || ${d} === null || ${d} === ""`), o.if(l, s._ `${d} = ${(0,s.stringify)(r)}`)
            }
            t.assignDefaults = function(e, t) {
                const {
                    properties: r,
                    items: s
                } = e.schema;
                if ("object" === t && r)
                    for (const t in r) o(e, t, r[t].default);
                else "array" === t && Array.isArray(s) && s.forEach(((t, r) => o(e, r, t.default)))
            }
        },
        pcE6: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getData = t.KeywordCxt = t.validateFunctionCode = void 0;
            const s = r("Upkn"),
                a = r("0nRX"),
                o = r("m7BJ"),
                n = r("0nRX"),
                i = r("xW/z"),
                c = r("VXTP"),
                d = r("YEzs"),
                l = r("mTfQ"),
                u = r("Ze9L"),
                f = r("ZEnf"),
                h = r("QruF"),
                m = r("0iNb");

            function p({
                gen: e,
                validateName: t,
                schema: r,
                schemaEnv: s,
                opts: a
            }, o) {
                a.code.es5 ? e.func(t, l._ `${u.default.data}, ${u.default.valCxt}`, s.$async, (() => {
                    e.code(l._ `"use strict"; ${y(r,a)}`),
                        function(e, t) {
                            e.if(u.default.valCxt, (() => {
                                e.var(u.default.instancePath, l._ `${u.default.valCxt}.${u.default.instancePath}`), e.var(u.default.parentData, l._ `${u.default.valCxt}.${u.default.parentData}`), e.var(u.default.parentDataProperty, l._ `${u.default.valCxt}.${u.default.parentDataProperty}`), e.var(u.default.rootData, l._ `${u.default.valCxt}.${u.default.rootData}`), t.dynamicRef && e.var(u.default.dynamicAnchors, l._ `${u.default.valCxt}.${u.default.dynamicAnchors}`)
                            }), (() => {
                                e.var(u.default.instancePath, l._ `""`), e.var(u.default.parentData, l._ `undefined`), e.var(u.default.parentDataProperty, l._ `undefined`), e.var(u.default.rootData, u.default.data), t.dynamicRef && e.var(u.default.dynamicAnchors, l._ `{}`)
                            }))
                        }(e, a), e.code(o)
                })) : e.func(t, l._ `${u.default.data}, ${function(e){return l._`{${u.default.instancePath}="", ${u.default.parentData}, ${u.default.parentDataProperty}, ${u.default.rootData}=${u.default.data}${e.dynamicRef?l._`, ${u.default.dynamicAnchors}={}`:l.nil}}={}`}(a)}`, s.$async, (() => e.code(y(r, a)).code(o)))
            }

            function y(e, t) {
                const r = "object" == typeof e && e[t.schemaId];
                return r && (t.code.source || t.code.process) ? l._ `/*# sourceURL=${r} */` : l.nil
            }

            function $(e, t) {
                v(e) && (_(e), g(e)) ? function(e, t) {
                    const {
                        schema: r,
                        gen: s,
                        opts: a
                    } = e;
                    a.$comment && r.$comment && b(e);
                    (function(e) {
                        const t = e.schema[e.opts.schemaId];
                        t && (e.baseId = (0, f.resolveUrl)(e.baseId, t))
                    })(e),
                    function(e) {
                        if (e.schema.$async && !e.schemaEnv.$async) throw new Error("async schema in sync schema")
                    }(e);
                    const o = s.const("_errs", u.default.errors);
                    w(e, o), s.var(t, l._ `${o} === ${u.default.errors}`)
                }(e, t) : (0, s.boolOrEmptySchema)(e, t)
            }

            function g({
                schema: e,
                self: t
            }) {
                if ("boolean" == typeof e) return !e;
                for (const r in e)
                    if (t.RULES.all[r]) return !0;
                return !1
            }

            function v(e) {
                return "boolean" != typeof e.schema
            }

            function _(e) {
                (0, h.checkUnknownRules)(e),
                function(e) {
                    const {
                        schema: t,
                        errSchemaPath: r,
                        opts: s,
                        self: a
                    } = e;
                    t.$ref && s.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(t, a.RULES) && a.logger.warn(`$ref: keywords ignored in schema at path "${r}"`)
                }(e)
            }

            function w(e, t) {
                if (e.opts.jtd) return P(e, [], !1, t);
                const r = (0, a.getSchemaTypes)(e.schema);
                P(e, r, !(0, a.coerceAndCheckDataType)(e, r), t)
            }

            function b({
                gen: e,
                schemaEnv: t,
                schema: r,
                errSchemaPath: s,
                opts: a
            }) {
                const o = r.$comment;
                if (!0 === a.$comment) e.code(l._ `${u.default.self}.logger.log(${o})`);
                else if ("function" == typeof a.$comment) {
                    const r = l.str `${s}/$comment`,
                        a = e.scopeValue("root", {
                            ref: t.root
                        });
                    e.code(l._ `${u.default.self}.opts.$comment(${o}, ${r}, ${a}.schema)`)
                }
            }

            function P(e, t, r, s) {
                const {
                    gen: a,
                    schema: i,
                    data: c,
                    allErrors: d,
                    opts: f,
                    self: m
                } = e, {
                    RULES: p
                } = m;

                function y(h) {
                    (0, o.shouldUseGroup)(i, h) && (h.type ? (a.if((0, n.checkDataType)(h.type, c, f.strictNumbers)), E(e, h), 1 === t.length && t[0] === h.type && r && (a.else(), (0, n.reportTypeError)(e)), a.endIf()) : E(e, h), d || a.if(l._ `${u.default.errors} === ${s||0}`))
                }!i.$ref || !f.ignoreKeywordsWithRef && (0, h.schemaHasRulesButRef)(i, p) ? (f.jtd || function(e, t) {
                    if (e.schemaEnv.meta || !e.opts.strictTypes) return;
                    (function(e, t) {
                        if (!t.length) return;
                        if (!e.dataTypes.length) return void(e.dataTypes = t);
                        t.forEach((t => {
                            k(e.dataTypes, t) || N(e, `type "${t}" not allowed by context "${e.dataTypes.join(",")}"`)
                        })), e.dataTypes = e.dataTypes.filter((e => k(t, e)))
                    })(e, t), e.opts.allowUnionTypes || function(e, t) {
                        t.length > 1 && (2 !== t.length || !t.includes("null")) && N(e, "use allowUnionTypes to allow union type keyword")
                    }(e, t);
                    ! function(e, t) {
                        const r = e.self.RULES.all;
                        for (const s in r) {
                            const a = r[s];
                            if ("object" == typeof a && (0, o.shouldUseRule)(e.schema, a)) {
                                const {
                                    type: r
                                } = a.definition;
                                r.length && !r.some((e => S(t, e))) && N(e, `missing type "${r.join(",")}" for keyword "${s}"`)
                            }
                        }
                    }(e, e.dataTypes)
                }(e, t), a.block((() => {
                    for (const e of p.rules) y(e);
                    y(p.post)
                }))) : a.block((() => T(e, "$ref", p.all.$ref.definition)))
            }

            function E(e, t) {
                const {
                    gen: r,
                    schema: s,
                    opts: {
                        useDefaults: a
                    }
                } = e;
                a && (0, i.assignDefaults)(e, t.type), r.block((() => {
                    for (const r of t.rules)(0, o.shouldUseRule)(s, r) && T(e, r.keyword, r.definition, t.type)
                }))
            }

            function S(e, t) {
                return e.includes(t) || "number" === t && e.includes("integer")
            }

            function k(e, t) {
                return e.includes(t) || "integer" === t && e.includes("number")
            }

            function N(e, t) {
                t += ` at "${e.schemaEnv.baseId+e.errSchemaPath}" (strictTypes)`, (0, h.checkStrictMode)(e, t, e.opts.strictTypes)
            }
            t.validateFunctionCode = function(e) {
                v(e) && (_(e), g(e)) ? function(e) {
                    const {
                        schema: t,
                        opts: r,
                        gen: s
                    } = e;
                    p(e, (() => {
                        r.$comment && t.$comment && b(e),
                            function(e) {
                                const {
                                    schema: t,
                                    opts: r
                                } = e;
                                void 0 !== t.default && r.useDefaults && r.strictSchema && (0, h.checkStrictMode)(e, "default is ignored in the schema root")
                            }(e), s.let(u.default.vErrors, null), s.let(u.default.errors, 0), r.unevaluated && function(e) {
                                const {
                                    gen: t,
                                    validateName: r
                                } = e;
                                e.evaluated = t.const("evaluated", l._ `${r}.evaluated`), t.if(l._ `${e.evaluated}.dynamicProps`, (() => t.assign(l._ `${e.evaluated}.props`, l._ `undefined`))), t.if(l._ `${e.evaluated}.dynamicItems`, (() => t.assign(l._ `${e.evaluated}.items`, l._ `undefined`)))
                            }(e), w(e),
                            function(e) {
                                const {
                                    gen: t,
                                    schemaEnv: r,
                                    validateName: s,
                                    ValidationError: a,
                                    opts: o
                                } = e;
                                r.$async ? t.if(l._ `${u.default.errors} === 0`, (() => t.return(u.default.data)), (() => t.throw(l._ `new ${a}(${u.default.vErrors})`))) : (t.assign(l._ `${s}.errors`, u.default.vErrors), o.unevaluated && function({
                                    gen: e,
                                    evaluated: t,
                                    props: r,
                                    items: s
                                }) {
                                    r instanceof l.Name && e.assign(l._ `${t}.props`, r);
                                    s instanceof l.Name && e.assign(l._ `${t}.items`, s)
                                }(e), t.return(l._ `${u.default.errors} === 0`))
                            }(e)
                    }))
                }(e) : p(e, (() => (0, s.topBoolOrEmptySchema)(e)))
            };
            class j {
                constructor(e, t, r) {
                    if ((0, c.validateKeywordUsage)(e, t, r), this.gen = e.gen, this.allErrors = e.allErrors, this.keyword = r, this.data = e.data, this.schema = e.schema[r], this.$data = t.$data && e.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, h.schemaRefOrVal)(e, this.schema, r, this.$data), this.schemaType = t.schemaType, this.parentSchema = e.schema, this.params = {}, this.it = e, this.def = t, this.$data) this.schemaCode = e.gen.const("vSchema", x(this.$data, e));
                    else if (this.schemaCode = this.schemaValue, !(0, c.validSchemaType)(this.schema, t.schemaType, t.allowUndefined)) throw new Error(`${r} value must be ${JSON.stringify(t.schemaType)}`);
                    ("code" in t ? t.trackErrors : !1 !== t.errors) && (this.errsCount = e.gen.const("_errs", u.default.errors))
                }
                result(e, t, r) {
                    this.failResult((0, l.not)(e), t, r)
                }
                failResult(e, t, r) {
                    this.gen.if(e), r ? r() : this.error(), t ? (this.gen.else(), t(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else()
                }
                pass(e, t) {
                    this.failResult((0, l.not)(e), void 0, t)
                }
                fail(e) {
                    if (void 0 === e) return this.error(), void(this.allErrors || this.gen.if(!1));
                    this.gen.if(e), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else()
                }
                fail$data(e) {
                    if (!this.$data) return this.fail(e);
                    const {
                        schemaCode: t
                    } = this;
                    this.fail(l._ `${t} !== undefined && (${(0,l.or)(this.invalid$data(),e)})`)
                }
                error(e, t, r) {
                    if (t) return this.setParams(t), this._error(e, r), void this.setParams({});
                    this._error(e, r)
                }
                _error(e, t) {
                    (e ? m.reportExtraError : m.reportError)(this, this.def.error, t)
                }
                $dataError() {
                    (0, m.reportError)(this, this.def.$dataError || m.keyword$DataError)
                }
                reset() {
                    if (void 0 === this.errsCount) throw new Error('add "trackErrors" to keyword definition');
                    (0, m.resetErrorsCount)(this.gen, this.errsCount)
                }
                ok(e) {
                    this.allErrors || this.gen.if(e)
                }
                setParams(e, t) {
                    t ? Object.assign(this.params, e) : this.params = e
                }
                block$data(e, t, r = l.nil) {
                    this.gen.block((() => {
                        this.check$data(e, r), t()
                    }))
                }
                check$data(e = l.nil, t = l.nil) {
                    if (!this.$data) return;
                    const {
                        gen: r,
                        schemaCode: s,
                        schemaType: a,
                        def: o
                    } = this;
                    r.if((0, l.or)(l._ `${s} === undefined`, t)), e !== l.nil && r.assign(e, !0), (a.length || o.validateSchema) && (r.elseIf(this.invalid$data()), this.$dataError(), e !== l.nil && r.assign(e, !1)), r.else()
                }
                invalid$data() {
                    const {
                        gen: e,
                        schemaCode: t,
                        schemaType: r,
                        def: s,
                        it: a
                    } = this;
                    return (0, l.or)(function() {
                        if (r.length) {
                            if (!(t instanceof l.Name)) throw new Error("ajv implementation error");
                            const e = Array.isArray(r) ? r : [r];
                            return l._ `${(0,n.checkDataTypes)(e,t,a.opts.strictNumbers,n.DataType.Wrong)}`
                        }
                        return l.nil
                    }(), function() {
                        if (s.validateSchema) {
                            const r = e.scopeValue("validate$data", {
                                ref: s.validateSchema
                            });
                            return l._ `!${r}(${t})`
                        }
                        return l.nil
                    }())
                }
                subschema(e, t) {
                    const r = (0, d.getSubschema)(this.it, e);
                    (0, d.extendSubschemaData)(r, this.it, e), (0, d.extendSubschemaMode)(r, e);
                    const s = { ...this.it,
                        ...r,
                        items: void 0,
                        props: void 0
                    };
                    return $(s, t), s
                }
                mergeEvaluated(e, t) {
                    const {
                        it: r,
                        gen: s
                    } = this;
                    r.opts.unevaluated && (!0 !== r.props && void 0 !== e.props && (r.props = h.mergeEvaluated.props(s, e.props, r.props, t)), !0 !== r.items && void 0 !== e.items && (r.items = h.mergeEvaluated.items(s, e.items, r.items, t)))
                }
                mergeValidEvaluated(e, t) {
                    const {
                        it: r,
                        gen: s
                    } = this;
                    if (r.opts.unevaluated && (!0 !== r.props || !0 !== r.items)) return s.if(t, (() => this.mergeEvaluated(e, l.Name))), !0
                }
            }

            function T(e, t, r, s) {
                const a = new j(e, r, t);
                "code" in r ? r.code(a, s) : a.$data && r.validate ? (0, c.funcKeywordCode)(a, r) : "macro" in r ? (0, c.macroKeywordCode)(a, r) : (r.compile || r.validate) && (0, c.funcKeywordCode)(a, r)
            }
            t.KeywordCxt = j;
            const O = /^\/(?:[^~]|~0|~1)*$/,
                C = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;

            function x(e, {
                dataLevel: t,
                dataNames: r,
                dataPathArr: s
            }) {
                let a, o;
                if ("" === e) return u.default.rootData;
                if ("/" === e[0]) {
                    if (!O.test(e)) throw new Error(`Invalid JSON-pointer: ${e}`);
                    a = e, o = u.default.rootData
                } else {
                    const n = C.exec(e);
                    if (!n) throw new Error(`Invalid JSON-pointer: ${e}`);
                    const i = +n[1];
                    if (a = n[2], "#" === a) {
                        if (i >= t) throw new Error(c("property/index", i));
                        return s[t - i]
                    }
                    if (i > t) throw new Error(c("data", i));
                    if (o = r[t - i], !a) return o
                }
                let n = o;
                const i = a.split("/");
                for (const e of i) e && (o = l._ `${o}${(0,l.getProperty)((0,h.unescapeJsonPointer)(e))}`, n = l._ `${n} && ${o}`);
                return n;

                function c(e, r) {
                    return `Cannot access ${e} ${r} levels up, current level is ${t}`
                }
            }
            t.getData = x
        },
        VXTP: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.validateKeywordUsage = t.validSchemaType = t.funcKeywordCode = t.macroKeywordCode = void 0;
            const s = r("mTfQ"),
                a = r("Ze9L"),
                o = r("qeSY"),
                n = r("0iNb");

            function i(e) {
                const {
                    gen: t,
                    data: r,
                    it: a
                } = e;
                t.if(a.parentData, (() => t.assign(r, s._ `${a.parentData}[${a.parentDataProperty}]`)))
            }

            function c(e, t, r) {
                if (void 0 === r) throw new Error(`keyword "${t}" failed to compile`);
                return e.scopeValue("keyword", "function" == typeof r ? {
                    ref: r
                } : {
                    ref: r,
                    code: (0, s.stringify)(r)
                })
            }
            t.macroKeywordCode = function(e, t) {
                const {
                    gen: r,
                    keyword: a,
                    schema: o,
                    parentSchema: n,
                    it: i
                } = e, d = t.macro.call(i.self, o, n, i), l = c(r, a, d);
                !1 !== i.opts.validateSchema && i.self.validateSchema(d, !0);
                const u = r.name("valid");
                e.subschema({
                    schema: d,
                    schemaPath: s.nil,
                    errSchemaPath: `${i.errSchemaPath}/${a}`,
                    topSchemaRef: l,
                    compositeRule: !0
                }, u), e.pass(u, (() => e.error(!0)))
            }, t.funcKeywordCode = function(e, t) {
                var r;
                const {
                    gen: d,
                    keyword: l,
                    schema: u,
                    parentSchema: f,
                    $data: h,
                    it: m
                } = e;
                ! function({
                    schemaEnv: e
                }, t) {
                    if (t.async && !e.$async) throw new Error("async keyword in sync schema")
                }(m, t);
                const p = !h && t.compile ? t.compile.call(m.self, u, f, m) : t.validate,
                    y = c(d, l, p),
                    $ = d.let("valid");

                function g(r = (t.async ? s._ `await ` : s.nil)) {
                    const n = m.opts.passContext ? a.default.this : a.default.self,
                        i = !("compile" in t && !h || !1 === t.schema);
                    d.assign($, s._ `${r}${(0,o.callValidateCode)(e,y,n,i)}`, t.modifying)
                }

                function v(e) {
                    var r;
                    d.if((0, s.not)(null !== (r = t.valid) && void 0 !== r ? r : $), e)
                }
                e.block$data($, (function() {
                    if (!1 === t.errors) g(), t.modifying && i(e), v((() => e.error()));
                    else {
                        const r = t.async ? function() {
                            const e = d.let("ruleErrs", null);
                            return d.try((() => g(s._ `await `)), (t => d.assign($, !1).if(s._ `${t} instanceof ${m.ValidationError}`, (() => d.assign(e, s._ `${t}.errors`)), (() => d.throw(t))))), e
                        }() : function() {
                            const e = s._ `${y}.errors`;
                            return d.assign(e, null), g(s.nil), e
                        }();
                        t.modifying && i(e), v((() => function(e, t) {
                            const {
                                gen: r
                            } = e;
                            r.if(s._ `Array.isArray(${t})`, (() => {
                                r.assign(a.default.vErrors, s._ `${a.default.vErrors} === null ? ${t} : ${a.default.vErrors}.concat(${t})`).assign(a.default.errors, s._ `${a.default.vErrors}.length`), (0, n.extendErrors)(e)
                            }), (() => e.error()))
                        }(e, r)))
                    }
                })), e.ok(null !== (r = t.valid) && void 0 !== r ? r : $)
            }, t.validSchemaType = function(e, t, r = !1) {
                return !t.length || t.some((t => "array" === t ? Array.isArray(e) : "object" === t ? e && "object" == typeof e && !Array.isArray(e) : typeof e == t || r && void 0 === e))
            }, t.validateKeywordUsage = function({
                schema: e,
                opts: t,
                self: r,
                errSchemaPath: s
            }, a, o) {
                if (Array.isArray(a.keyword) ? !a.keyword.includes(o) : a.keyword !== o) throw new Error("ajv implementation error");
                const n = a.dependencies;
                if (null == n ? void 0 : n.some((t => !Object.prototype.hasOwnProperty.call(e, t)))) throw new Error(`parent schema must have dependencies of ${o}: ${n.join(",")}`);
                if (a.validateSchema) {
                    if (!a.validateSchema(e[o])) {
                        const e = `keyword "${o}" value is invalid at path "${s}": ` + r.errorsText(a.validateSchema.errors);
                        if ("log" !== t.validateSchema) throw new Error(e);
                        r.logger.error(e)
                    }
                }
            }
        },
        YEzs: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.extendSubschemaMode = t.extendSubschemaData = t.getSubschema = void 0;
            const s = r("mTfQ"),
                a = r("QruF");
            t.getSubschema = function(e, {
                keyword: t,
                schemaProp: r,
                schema: o,
                schemaPath: n,
                errSchemaPath: i,
                topSchemaRef: c
            }) {
                if (void 0 !== t && void 0 !== o) throw new Error('both "keyword" and "schema" passed, only one allowed');
                if (void 0 !== t) {
                    const o = e.schema[t];
                    return void 0 === r ? {
                        schema: o,
                        schemaPath: s._ `${e.schemaPath}${(0,s.getProperty)(t)}`,
                        errSchemaPath: `${e.errSchemaPath}/${t}`
                    } : {
                        schema: o[r],
                        schemaPath: s._ `${e.schemaPath}${(0,s.getProperty)(t)}${(0,s.getProperty)(r)}`,
                        errSchemaPath: `${e.errSchemaPath}/${t}/${(0,a.escapeFragment)(r)}`
                    }
                }
                if (void 0 !== o) {
                    if (void 0 === n || void 0 === i || void 0 === c) throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
                    return {
                        schema: o,
                        schemaPath: n,
                        topSchemaRef: c,
                        errSchemaPath: i
                    }
                }
                throw new Error('either "keyword" or "schema" must be passed')
            }, t.extendSubschemaData = function(e, t, {
                dataProp: r,
                dataPropType: o,
                data: n,
                dataTypes: i,
                propertyName: c
            }) {
                if (void 0 !== n && void 0 !== r) throw new Error('both "data" and "dataProp" passed, only one allowed');
                const {
                    gen: d
                } = t;
                if (void 0 !== r) {
                    const {
                        errorPath: n,
                        dataPathArr: i,
                        opts: c
                    } = t;
                    l(d.let("data", s._ `${t.data}${(0,s.getProperty)(r)}`, !0)), e.errorPath = s.str `${n}${(0,a.getErrorPath)(r,o,c.jsPropertySyntax)}`, e.parentDataProperty = s._ `${r}`, e.dataPathArr = [...i, e.parentDataProperty]
                }
                if (void 0 !== n) {
                    l(n instanceof s.Name ? n : d.let("data", n, !0)), void 0 !== c && (e.propertyName = c)
                }

                function l(r) {
                    e.data = r, e.dataLevel = t.dataLevel + 1, e.dataTypes = [], t.definedProperties = new Set, e.parentData = t.data, e.dataNames = [...t.dataNames, r]
                }
                i && (e.dataTypes = i)
            }, t.extendSubschemaMode = function(e, {
                jtdDiscriminator: t,
                jtdMetadata: r,
                compositeRule: s,
                createErrors: a,
                allErrors: o
            }) {
                void 0 !== s && (e.compositeRule = s), void 0 !== a && (e.createErrors = a), void 0 !== o && (e.allErrors = o), e.jtdDiscriminator = t, e.jtdMetadata = r
            }
        },
        "/yXz": (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = void 0;
            var s = r("pcE6");
            Object.defineProperty(t, "KeywordCxt", {
                enumerable: !0,
                get: function() {
                    return s.KeywordCxt
                }
            });
            var a = r("mTfQ");
            Object.defineProperty(t, "_", {
                enumerable: !0,
                get: function() {
                    return a._
                }
            }), Object.defineProperty(t, "str", {
                enumerable: !0,
                get: function() {
                    return a.str
                }
            }), Object.defineProperty(t, "stringify", {
                enumerable: !0,
                get: function() {
                    return a.stringify
                }
            }), Object.defineProperty(t, "nil", {
                enumerable: !0,
                get: function() {
                    return a.nil
                }
            }), Object.defineProperty(t, "Name", {
                enumerable: !0,
                get: function() {
                    return a.Name
                }
            }), Object.defineProperty(t, "CodeGen", {
                enumerable: !0,
                get: function() {
                    return a.CodeGen
                }
            });
            const o = r("Hj1T"),
                n = r("KmkK"),
                i = r("eDW6"),
                c = r("IBwq"),
                d = r("mTfQ"),
                l = r("ZEnf"),
                u = r("0nRX"),
                f = r("QruF"),
                h = r("sLTe"),
                m = (e, t) => new RegExp(e, t);
            m.code = "new RegExp";
            const p = ["removeAdditional", "useDefaults", "coerceTypes"],
                y = new Set(["validate", "serialize", "parse", "wrapper", "root", "schema", "keyword", "pattern", "formats", "validate$data", "func", "obj", "Error"]),
                $ = {
                    errorDataPath: "",
                    format: "`validateFormats: false` can be used instead.",
                    nullable: '"nullable" keyword is supported by default.',
                    jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
                    extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
                    missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
                    processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
                    sourceCode: "Use option `code: {source: true}`",
                    strictDefaults: "It is default now, see option `strict`.",
                    strictKeywords: "It is default now, see option `strict`.",
                    uniqueItems: '"uniqueItems" keyword is always validated.',
                    unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
                    cache: "Map is used as cache, schema object as key.",
                    serialize: "Map is used as cache, schema object as key.",
                    ajvErrors: "It is default now."
                },
                g = {
                    ignoreKeywordsWithRef: "",
                    jsPropertySyntax: "",
                    unicode: '"minLength"/"maxLength" account for unicode characters by default.'
                };

            function v(e) {
                var t, r, s, a, o, n, i, c, d, l, u, f, h, p, y, $, g, v, _, w, b, P, E, S;
                const k = e.strict,
                    N = null === (t = e.code) || void 0 === t ? void 0 : t.optimize,
                    j = !0 === N || void 0 === N ? 1 : N || 0,
                    T = null !== (s = null === (r = e.code) || void 0 === r ? void 0 : r.regExp) && void 0 !== s ? s : m;
                return {
                    strictSchema: null === (o = null !== (a = e.strictSchema) && void 0 !== a ? a : k) || void 0 === o || o,
                    strictNumbers: null === (i = null !== (n = e.strictNumbers) && void 0 !== n ? n : k) || void 0 === i || i,
                    strictTypes: null !== (d = null !== (c = e.strictTypes) && void 0 !== c ? c : k) && void 0 !== d ? d : "log",
                    strictTuples: null !== (u = null !== (l = e.strictTuples) && void 0 !== l ? l : k) && void 0 !== u ? u : "log",
                    strictRequired: null !== (h = null !== (f = e.strictRequired) && void 0 !== f ? f : k) && void 0 !== h && h,
                    code: e.code ? { ...e.code,
                        optimize: j,
                        regExp: T
                    } : {
                        optimize: j,
                        regExp: T
                    },
                    loopRequired: null !== (p = e.loopRequired) && void 0 !== p ? p : 200,
                    loopEnum: null !== (y = e.loopEnum) && void 0 !== y ? y : 200,
                    meta: null === ($ = e.meta) || void 0 === $ || $,
                    messages: null === (g = e.messages) || void 0 === g || g,
                    inlineRefs: null === (v = e.inlineRefs) || void 0 === v || v,
                    schemaId: null !== (_ = e.schemaId) && void 0 !== _ ? _ : "$id",
                    addUsedSchema: null === (w = e.addUsedSchema) || void 0 === w || w,
                    validateSchema: null === (b = e.validateSchema) || void 0 === b || b,
                    validateFormats: null === (P = e.validateFormats) || void 0 === P || P,
                    unicodeRegExp: null === (E = e.unicodeRegExp) || void 0 === E || E,
                    int32range: null === (S = e.int32range) || void 0 === S || S
                }
            }
            class _ {
                constructor(e = {}) {
                    this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = new Set, this._loading = {}, this._cache = new Map, e = this.opts = { ...e,
                        ...v(e)
                    };
                    const {
                        es5: t,
                        lines: r
                    } = this.opts.code;
                    this.scope = new d.ValueScope({
                        scope: {},
                        prefixes: y,
                        es5: t,
                        lines: r
                    }), this.logger = function(e) {
                        if (!1 === e) return N;
                        if (void 0 === e) return console;
                        if (e.log && e.warn && e.error) return e;
                        throw new Error("logger must implement log, warn and error methods")
                    }(e.logger);
                    const s = e.validateFormats;
                    e.validateFormats = !1, this.RULES = (0, i.getRules)(), w.call(this, $, e, "NOT SUPPORTED"), w.call(this, g, e, "DEPRECATED", "warn"), this._metaOpts = k.call(this), e.formats && E.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), e.keywords && S.call(this, e.keywords), "object" == typeof e.meta && this.addMetaSchema(e.meta), P.call(this), e.validateFormats = s
                }
                _addVocabularies() {
                    this.addKeyword("$async")
                }
                _addDefaultMetaSchema() {
                    const {
                        $data: e,
                        meta: t,
                        schemaId: r
                    } = this.opts;
                    let s = h;
                    "id" === r && (s = { ...h
                    }, s.id = s.$id, delete s.$id), t && e && this.addMetaSchema(s, s[r], !1)
                }
                defaultMeta() {
                    const {
                        meta: e,
                        schemaId: t
                    } = this.opts;
                    return this.opts.defaultMeta = "object" == typeof e ? e[t] || e : void 0
                }
                validate(e, t) {
                    let r;
                    if ("string" == typeof e) {
                        if (r = this.getSchema(e), !r) throw new Error(`no schema with key or ref "${e}"`)
                    } else r = this.compile(e);
                    const s = r(t);
                    return "$async" in r || (this.errors = r.errors), s
                }
                compile(e, t) {
                    const r = this._addSchema(e, t);
                    return r.validate || this._compileSchemaEnv(r)
                }
                compileAsync(e, t) {
                    if ("function" != typeof this.opts.loadSchema) throw new Error("options.loadSchema should be a function");
                    const {
                        loadSchema: r
                    } = this.opts;
                    return s.call(this, e, t);
                    async function s(e, t) {
                        await a.call(this, e.$schema);
                        const r = this._addSchema(e, t);
                        return r.validate || o.call(this, r)
                    }
                    async function a(e) {
                        e && !this.getSchema(e) && await s.call(this, {
                            $ref: e
                        }, !0)
                    }
                    async function o(e) {
                        try {
                            return this._compileSchemaEnv(e)
                        } catch (t) {
                            if (!(t instanceof n.default)) throw t;
                            return i.call(this, t), await c.call(this, t.missingSchema), o.call(this, e)
                        }
                    }

                    function i({
                        missingSchema: e,
                        missingRef: t
                    }) {
                        if (this.refs[e]) throw new Error(`AnySchema ${e} is loaded but ${t} cannot be resolved`)
                    }
                    async function c(e) {
                        const r = await d.call(this, e);
                        this.refs[e] || await a.call(this, r.$schema), this.refs[e] || this.addSchema(r, e, t)
                    }
                    async function d(e) {
                        const t = this._loading[e];
                        if (t) return t;
                        try {
                            return await (this._loading[e] = r(e))
                        } finally {
                            delete this._loading[e]
                        }
                    }
                }
                addSchema(e, t, r, s = this.opts.validateSchema) {
                    if (Array.isArray(e)) {
                        for (const t of e) this.addSchema(t, void 0, r, s);
                        return this
                    }
                    let a;
                    if ("object" == typeof e) {
                        const {
                            schemaId: t
                        } = this.opts;
                        if (a = e[t], void 0 !== a && "string" != typeof a) throw new Error(`schema ${t} must be string`)
                    }
                    return t = (0, l.normalizeId)(t || a), this._checkUnique(t), this.schemas[t] = this._addSchema(e, r, t, s, !0), this
                }
                addMetaSchema(e, t, r = this.opts.validateSchema) {
                    return this.addSchema(e, t, !0, r), this
                }
                validateSchema(e, t) {
                    if ("boolean" == typeof e) return !0;
                    let r;
                    if (r = e.$schema, void 0 !== r && "string" != typeof r) throw new Error("$schema must be a string");
                    if (r = r || this.opts.defaultMeta || this.defaultMeta(), !r) return this.logger.warn("meta-schema not available"), this.errors = null, !0;
                    const s = this.validate(r, e);
                    if (!s && t) {
                        const e = "schema is invalid: " + this.errorsText();
                        if ("log" !== this.opts.validateSchema) throw new Error(e);
                        this.logger.error(e)
                    }
                    return s
                }
                getSchema(e) {
                    let t;
                    for (;
                        "string" == typeof(t = b.call(this, e));) e = t;
                    if (void 0 === t) {
                        const {
                            schemaId: r
                        } = this.opts, s = new c.SchemaEnv({
                            schema: {},
                            schemaId: r
                        });
                        if (t = c.resolveSchema.call(this, s, e), !t) return;
                        this.refs[e] = t
                    }
                    return t.validate || this._compileSchemaEnv(t)
                }
                removeSchema(e) {
                    if (e instanceof RegExp) return this._removeAllSchemas(this.schemas, e), this._removeAllSchemas(this.refs, e), this;
                    switch (typeof e) {
                        case "undefined":
                            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
                        case "string":
                            {
                                const t = b.call(this, e);
                                return "object" == typeof t && this._cache.delete(t.schema),
                                delete this.schemas[e],
                                delete this.refs[e],
                                this
                            }
                        case "object":
                            {
                                const t = e;this._cache.delete(t);
                                let r = e[this.opts.schemaId];
                                return r && (r = (0, l.normalizeId)(r), delete this.schemas[r], delete this.refs[r]),
                                this
                            }
                        default:
                            throw new Error("ajv.removeSchema: invalid parameter")
                    }
                }
                addVocabulary(e) {
                    for (const t of e) this.addKeyword(t);
                    return this
                }
                addKeyword(e, t) {
                    let r;
                    if ("string" == typeof e) r = e, "object" == typeof t && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), t.keyword = r);
                    else {
                        if ("object" != typeof e || void 0 !== t) throw new Error("invalid addKeywords parameters");
                        if (r = (t = e).keyword, Array.isArray(r) && !r.length) throw new Error("addKeywords: keyword must be string or non-empty array")
                    }
                    if (T.call(this, r, t), !t) return (0, f.eachItem)(r, (e => O.call(this, e))), this;
                    x.call(this, t);
                    const s = { ...t,
                        type: (0, u.getJSONTypes)(t.type),
                        schemaType: (0, u.getJSONTypes)(t.schemaType)
                    };
                    return (0, f.eachItem)(r, 0 === s.type.length ? e => O.call(this, e, s) : e => s.type.forEach((t => O.call(this, e, s, t)))), this
                }
                getKeyword(e) {
                    const t = this.RULES.all[e];
                    return "object" == typeof t ? t.definition : !!t
                }
                removeKeyword(e) {
                    const {
                        RULES: t
                    } = this;
                    delete t.keywords[e], delete t.all[e];
                    for (const r of t.rules) {
                        const t = r.rules.findIndex((t => t.keyword === e));
                        t >= 0 && r.rules.splice(t, 1)
                    }
                    return this
                }
                addFormat(e, t) {
                    return "string" == typeof t && (t = new RegExp(t)), this.formats[e] = t, this
                }
                errorsText(e = this.errors, {
                    separator: t = ", ",
                    dataVar: r = "data"
                } = {}) {
                    return e && 0 !== e.length ? e.map((e => `${r}${e.instancePath} ${e.message}`)).reduce(((e, r) => e + t + r)) : "No errors"
                }
                $dataMetaSchema(e, t) {
                    const r = this.RULES.all;
                    e = JSON.parse(JSON.stringify(e));
                    for (const s of t) {
                        const t = s.split("/").slice(1);
                        let a = e;
                        for (const e of t) a = a[e];
                        for (const e in r) {
                            const t = r[e];
                            if ("object" != typeof t) continue;
                            const {
                                $data: s
                            } = t.definition, o = a[e];
                            s && o && (a[e] = R(o))
                        }
                    }
                    return e
                }
                _removeAllSchemas(e, t) {
                    for (const r in e) {
                        const s = e[r];
                        t && !t.test(r) || ("string" == typeof s ? delete e[r] : s && !s.meta && (this._cache.delete(s.schema), delete e[r]))
                    }
                }
                _addSchema(e, t, r, s = this.opts.validateSchema, a = this.opts.addUsedSchema) {
                    let o;
                    const {
                        schemaId: n
                    } = this.opts;
                    if ("object" == typeof e) o = e[n];
                    else {
                        if (this.opts.jtd) throw new Error("schema must be object");
                        if ("boolean" != typeof e) throw new Error("schema must be object or boolean")
                    }
                    let i = this._cache.get(e);
                    if (void 0 !== i) return i;
                    r = (0, l.normalizeId)(o || r);
                    const d = l.getSchemaRefs.call(this, e, r);
                    return i = new c.SchemaEnv({
                        schema: e,
                        schemaId: n,
                        meta: t,
                        baseId: r,
                        localRefs: d
                    }), this._cache.set(i.schema, i), a && !r.startsWith("#") && (r && this._checkUnique(r), this.refs[r] = i), s && this.validateSchema(e, !0), i
                }
                _checkUnique(e) {
                    if (this.schemas[e] || this.refs[e]) throw new Error(`schema with key or id "${e}" already exists`)
                }
                _compileSchemaEnv(e) {
                    if (e.meta ? this._compileMetaSchema(e) : c.compileSchema.call(this, e), !e.validate) throw new Error("ajv implementation error");
                    return e.validate
                }
                _compileMetaSchema(e) {
                    const t = this.opts;
                    this.opts = this._metaOpts;
                    try {
                        c.compileSchema.call(this, e)
                    } finally {
                        this.opts = t
                    }
                }
            }

            function w(e, t, r, s = "error") {
                for (const a in e) {
                    const o = a;
                    o in t && this.logger[s](`${r}: option ${a}. ${e[o]}`)
                }
            }

            function b(e) {
                return e = (0, l.normalizeId)(e), this.schemas[e] || this.refs[e]
            }

            function P() {
                const e = this.opts.schemas;
                if (e)
                    if (Array.isArray(e)) this.addSchema(e);
                    else
                        for (const t in e) this.addSchema(e[t], t)
            }

            function E() {
                for (const e in this.opts.formats) {
                    const t = this.opts.formats[e];
                    t && this.addFormat(e, t)
                }
            }

            function S(e) {
                if (Array.isArray(e)) this.addVocabulary(e);
                else {
                    this.logger.warn("keywords option as map is deprecated, pass array");
                    for (const t in e) {
                        const r = e[t];
                        r.keyword || (r.keyword = t), this.addKeyword(r)
                    }
                }
            }

            function k() {
                const e = { ...this.opts
                };
                for (const t of p) delete e[t];
                return e
            }
            t.default = _, _.ValidationError = o.default, _.MissingRefError = n.default;
            const N = {
                log() {},
                warn() {},
                error() {}
            };
            const j = /^[a-z_$][a-z0-9_$:-]*$/i;

            function T(e, t) {
                const {
                    RULES: r
                } = this;
                if ((0, f.eachItem)(e, (e => {
                        if (r.keywords[e]) throw new Error(`Keyword ${e} is already defined`);
                        if (!j.test(e)) throw new Error(`Keyword ${e} has invalid name`)
                    })), t && t.$data && !("code" in t) && !("validate" in t)) throw new Error('$data keyword must have "code" or "validate" function')
            }

            function O(e, t, r) {
                var s;
                const a = null == t ? void 0 : t.post;
                if (r && a) throw new Error('keyword with "post" flag cannot have "type"');
                const {
                    RULES: o
                } = this;
                let n = a ? o.post : o.rules.find((({
                    type: e
                }) => e === r));
                if (n || (n = {
                        type: r,
                        rules: []
                    }, o.rules.push(n)), o.keywords[e] = !0, !t) return;
                const i = {
                    keyword: e,
                    definition: { ...t,
                        type: (0, u.getJSONTypes)(t.type),
                        schemaType: (0, u.getJSONTypes)(t.schemaType)
                    }
                };
                t.before ? C.call(this, n, i, t.before) : n.rules.push(i), o.all[e] = i, null === (s = t.implements) || void 0 === s || s.forEach((e => this.addKeyword(e)))
            }

            function C(e, t, r) {
                const s = e.rules.findIndex((e => e.keyword === r));
                s >= 0 ? e.rules.splice(s, 0, t) : (e.rules.push(t), this.logger.warn(`rule ${r} is not defined`))
            }

            function x(e) {
                let {
                    metaSchema: t
                } = e;
                void 0 !== t && (e.$data && this.opts.$data && (t = R(t)), e.validateSchema = this.compile(t, !0))
            }
            const I = {
                $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
            };

            function R(e) {
                return {
                    anyOf: [e, I]
                }
            }
        },
        zfze: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("MKPJ");
            s.code = 'require("ajv/dist/runtime/equal").default', t.default = s
        },
        UToi: (e, t) => {
            function r(e) {
                const t = e.length;
                let r, s = 0,
                    a = 0;
                for (; a < t;) s++, r = e.charCodeAt(a++), r >= 55296 && r <= 56319 && a < t && (r = e.charCodeAt(a), 56320 == (64512 & r) && a++);
                return s
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = r, r.code = 'require("ajv/dist/runtime/ucs2length").default'
        },
        Hj1T: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            class r extends Error {
                constructor(e) {
                    super("validation failed"), this.errors = e, this.ajv = this.validation = !0
                }
            }
            t.default = r
        },
        EwqU: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.validateAdditionalItems = void 0;
            const s = r("mTfQ"),
                a = r("QruF"),
                o = {
                    keyword: "additionalItems",
                    type: "array",
                    schemaType: ["boolean", "object"],
                    before: "uniqueItems",
                    error: {
                        message: ({
                            params: {
                                len: e
                            }
                        }) => s.str `must NOT have more than ${e} items`,
                        params: ({
                            params: {
                                len: e
                            }
                        }) => s._ `{limit: ${e}}`
                    },
                    code(e) {
                        const {
                            parentSchema: t,
                            it: r
                        } = e, {
                            items: s
                        } = t;
                        Array.isArray(s) ? n(e, s) : (0, a.checkStrictMode)(r, '"additionalItems" is ignored when "items" is not an array of schemas')
                    }
                };

            function n(e, t) {
                const {
                    gen: r,
                    schema: o,
                    data: n,
                    keyword: i,
                    it: c
                } = e;
                c.items = !0;
                const d = r.const("len", s._ `${n}.length`);
                if (!1 === o) e.setParams({
                    len: t.length
                }), e.pass(s._ `${d} <= ${t.length}`);
                else if ("object" == typeof o && !(0, a.alwaysValidSchema)(c, o)) {
                    const o = r.var("valid", s._ `${d} <= ${t.length}`);
                    r.if((0, s.not)(o), (() => function(o) {
                        r.forRange("i", t.length, d, (t => {
                            e.subschema({
                                keyword: i,
                                dataProp: t,
                                dataPropType: a.Type.Num
                            }, o), c.allErrors || r.if((0, s.not)(o), (() => r.break()))
                        }))
                    }(o))), e.ok(o)
                }
            }
            t.validateAdditionalItems = n, t.default = o
        },
        "/xvK": (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("qeSY"),
                a = r("mTfQ"),
                o = r("Ze9L"),
                n = r("QruF"),
                i = {
                    keyword: "additionalProperties",
                    type: ["object"],
                    schemaType: ["boolean", "object"],
                    allowUndefined: !0,
                    trackErrors: !0,
                    error: {
                        message: "must NOT have additional properties",
                        params: ({
                            params: e
                        }) => a._ `{additionalProperty: ${e.additionalProperty}}`
                    },
                    code(e) {
                        const {
                            gen: t,
                            schema: r,
                            parentSchema: i,
                            data: c,
                            errsCount: d,
                            it: l
                        } = e;
                        if (!d) throw new Error("ajv implementation error");
                        const {
                            allErrors: u,
                            opts: f
                        } = l;
                        if (l.props = !0, "all" !== f.removeAdditional && (0, n.alwaysValidSchema)(l, r)) return;
                        const h = (0, s.allSchemaProperties)(i.properties),
                            m = (0, s.allSchemaProperties)(i.patternProperties);

                        function p(e) {
                            t.code(a._ `delete ${c}[${e}]`)
                        }

                        function y(s) {
                            if ("all" === f.removeAdditional || f.removeAdditional && !1 === r) p(s);
                            else {
                                if (!1 === r) return e.setParams({
                                    additionalProperty: s
                                }), e.error(), void(u || t.break());
                                if ("object" == typeof r && !(0, n.alwaysValidSchema)(l, r)) {
                                    const r = t.name("valid");
                                    "failing" === f.removeAdditional ? ($(s, r, !1), t.if((0, a.not)(r), (() => {
                                        e.reset(), p(s)
                                    }))) : ($(s, r), u || t.if((0, a.not)(r), (() => t.break())))
                                }
                            }
                        }

                        function $(t, r, s) {
                            const a = {
                                keyword: "additionalProperties",
                                dataProp: t,
                                dataPropType: n.Type.Str
                            };
                            !1 === s && Object.assign(a, {
                                compositeRule: !0,
                                createErrors: !1,
                                allErrors: !1
                            }), e.subschema(a, r)
                        }
                        t.forIn("key", c, (r => {
                            h.length || m.length ? t.if(function(r) {
                                let o;
                                if (h.length > 8) {
                                    const e = (0, n.schemaRefOrVal)(l, i.properties, "properties");
                                    o = (0, s.isOwnProperty)(t, e, r)
                                } else o = h.length ? (0, a.or)(...h.map((e => a._ `${r} === ${e}`))) : a.nil;
                                return m.length && (o = (0, a.or)(o, ...m.map((t => a._ `${(0,s.usePattern)(e,t)}.test(${r})`)))), (0, a.not)(o)
                            }(r), (() => y(r))) : y(r)
                        })), e.ok(a._ `${d} === ${o.default.errors}`)
                    }
                };
            t.default = i
        },
        YpUL: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("QruF"),
                a = {
                    keyword: "allOf",
                    schemaType: "array",
                    code(e) {
                        const {
                            gen: t,
                            schema: r,
                            it: a
                        } = e;
                        if (!Array.isArray(r)) throw new Error("ajv implementation error");
                        const o = t.name("valid");
                        r.forEach(((t, r) => {
                            if ((0, s.alwaysValidSchema)(a, t)) return;
                            const n = e.subschema({
                                keyword: "allOf",
                                schemaProp: r
                            }, o);
                            e.ok(o), e.mergeEvaluated(n)
                        }))
                    }
                };
            t.default = a
        },
        OTRz: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = {
                keyword: "anyOf",
                schemaType: "array",
                trackErrors: !0,
                code: r("qeSY").validateUnion,
                error: {
                    message: "must match a schema in anyOf"
                }
            };
            t.default = s
        },
        jWip: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("mTfQ"),
                a = r("QruF"),
                o = {
                    keyword: "contains",
                    type: "array",
                    schemaType: ["object", "boolean"],
                    before: "uniqueItems",
                    trackErrors: !0,
                    error: {
                        message: ({
                            params: {
                                min: e,
                                max: t
                            }
                        }) => void 0 === t ? s.str `must contain at least ${e} valid item(s)` : s.str `must contain at least ${e} and no more than ${t} valid item(s)`,
                        params: ({
                            params: {
                                min: e,
                                max: t
                            }
                        }) => void 0 === t ? s._ `{minContains: ${e}}` : s._ `{minContains: ${e}, maxContains: ${t}}`
                    },
                    code(e) {
                        const {
                            gen: t,
                            schema: r,
                            parentSchema: o,
                            data: n,
                            it: i
                        } = e;
                        let c, d;
                        const {
                            minContains: l,
                            maxContains: u
                        } = o;
                        i.opts.next ? (c = void 0 === l ? 1 : l, d = u) : c = 1;
                        const f = t.const("len", s._ `${n}.length`);
                        if (e.setParams({
                                min: c,
                                max: d
                            }), void 0 === d && 0 === c) return void(0, a.checkStrictMode)(i, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
                        if (void 0 !== d && c > d) return (0, a.checkStrictMode)(i, '"minContains" > "maxContains" is always invalid'), void e.fail();
                        if ((0, a.alwaysValidSchema)(i, r)) {
                            let t = s._ `${f} >= ${c}`;
                            return void 0 !== d && (t = s._ `${t} && ${f} <= ${d}`), void e.pass(t)
                        }
                        i.items = !0;
                        const h = t.name("valid");

                        function m() {
                            const e = t.name("_valid"),
                                r = t.let("count", 0);
                            p(e, (() => t.if(e, (() => function(e) {
                                t.code(s._ `${e}++`), void 0 === d ? t.if(s._ `${e} >= ${c}`, (() => t.assign(h, !0).break())) : (t.if(s._ `${e} > ${d}`, (() => t.assign(h, !1).break())), 1 === c ? t.assign(h, !0) : t.if(s._ `${e} >= ${c}`, (() => t.assign(h, !0))))
                            }(r)))))
                        }

                        function p(r, s) {
                            t.forRange("i", 0, f, (t => {
                                e.subschema({
                                    keyword: "contains",
                                    dataProp: t,
                                    dataPropType: a.Type.Num,
                                    compositeRule: !0
                                }, r), s()
                            }))
                        }
                        void 0 === d && 1 === c ? p(h, (() => t.if(h, (() => t.break())))) : 0 === c ? (t.let(h, !0), void 0 !== d && t.if(s._ `${n}.length > 0`, m)) : (t.let(h, !1), m()), e.result(h, (() => e.reset()))
                    }
                };
            t.default = o
        },
        OnPs: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.validateSchemaDeps = t.validatePropertyDeps = t.error = void 0;
            const s = r("mTfQ"),
                a = r("QruF"),
                o = r("qeSY");
            t.error = {
                message: ({
                    params: {
                        property: e,
                        depsCount: t,
                        deps: r
                    }
                }) => {
                    const a = 1 === t ? "property" : "properties";
                    return s.str `must have ${a} ${r} when property ${e} is present`
                },
                params: ({
                    params: {
                        property: e,
                        depsCount: t,
                        deps: r,
                        missingProperty: a
                    }
                }) => s._ `{property: ${e},
    missingProperty: ${a},
    depsCount: ${t},
    deps: ${r}}`
            };
            const n = {
                keyword: "dependencies",
                type: "object",
                schemaType: "object",
                error: t.error,
                code(e) {
                    const [t, r] = function({
                        schema: e
                    }) {
                        const t = {},
                            r = {};
                        for (const s in e) {
                            if ("__proto__" === s) continue;
                            (Array.isArray(e[s]) ? t : r)[s] = e[s]
                        }
                        return [t, r]
                    }(e);
                    i(e, t), c(e, r)
                }
            };

            function i(e, t = e.schema) {
                const {
                    gen: r,
                    data: a,
                    it: n
                } = e;
                if (0 === Object.keys(t).length) return;
                const i = r.let("missing");
                for (const c in t) {
                    const d = t[c];
                    if (0 === d.length) continue;
                    const l = (0, o.propertyInData)(r, a, c, n.opts.ownProperties);
                    e.setParams({
                        property: c,
                        depsCount: d.length,
                        deps: d.join(", ")
                    }), n.allErrors ? r.if(l, (() => {
                        for (const t of d)(0, o.checkReportMissingProp)(e, t)
                    })) : (r.if(s._ `${l} && (${(0,o.checkMissingProp)(e,d,i)})`), (0, o.reportMissingProp)(e, i), r.else())
                }
            }

            function c(e, t = e.schema) {
                const {
                    gen: r,
                    data: s,
                    keyword: n,
                    it: i
                } = e, c = r.name("valid");
                for (const d in t)(0, a.alwaysValidSchema)(i, t[d]) || (r.if((0, o.propertyInData)(r, s, d, i.opts.ownProperties), (() => {
                    const t = e.subschema({
                        keyword: n,
                        schemaProp: d
                    }, c);
                    e.mergeValidEvaluated(t, c)
                }), (() => r.var(c, !0))), e.ok(c))
            }
            t.validatePropertyDeps = i, t.validateSchemaDeps = c, t.default = n
        },
        Td9M: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("mTfQ"),
                a = r("QruF"),
                o = {
                    keyword: "if",
                    schemaType: ["object", "boolean"],
                    trackErrors: !0,
                    error: {
                        message: ({
                            params: e
                        }) => s.str `must match "${e.ifClause}" schema`,
                        params: ({
                            params: e
                        }) => s._ `{failingKeyword: ${e.ifClause}}`
                    },
                    code(e) {
                        const {
                            gen: t,
                            parentSchema: r,
                            it: o
                        } = e;
                        void 0 === r.then && void 0 === r.else && (0, a.checkStrictMode)(o, '"if" without "then" and "else" is ignored');
                        const i = n(o, "then"),
                            c = n(o, "else");
                        if (!i && !c) return;
                        const d = t.let("valid", !0),
                            l = t.name("_valid");
                        if (function() {
                                const t = e.subschema({
                                    keyword: "if",
                                    compositeRule: !0,
                                    createErrors: !1,
                                    allErrors: !1
                                }, l);
                                e.mergeEvaluated(t)
                            }(), e.reset(), i && c) {
                            const r = t.let("ifClause");
                            e.setParams({
                                ifClause: r
                            }), t.if(l, u("then", r), u("else", r))
                        } else i ? t.if(l, u("then")) : t.if((0, s.not)(l), u("else"));

                        function u(r, a) {
                            return () => {
                                const o = e.subschema({
                                    keyword: r
                                }, l);
                                t.assign(d, l), e.mergeValidEvaluated(o, d), a ? t.assign(a, s._ `${r}`) : e.setParams({
                                    ifClause: r
                                })
                            }
                        }
                        e.pass(d, (() => e.error(!0)))
                    }
                };

            function n(e, t) {
                const r = e.schema[t];
                return void 0 !== r && !(0, a.alwaysValidSchema)(e, r)
            }
            t.default = o
        },
        HzjV: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("EwqU"),
                a = r("6jv2"),
                o = r("0Zgp"),
                n = r("FyWv"),
                i = r("jWip"),
                c = r("OnPs"),
                d = r("9hUJ"),
                l = r("/xvK"),
                u = r("2Luf"),
                f = r("KRZH"),
                h = r("iGnP"),
                m = r("OTRz"),
                p = r("qSkY"),
                y = r("YpUL"),
                $ = r("Td9M"),
                g = r("aYbo");
            t.default = function(e = !1) {
                const t = [h.default, m.default, p.default, y.default, $.default, g.default, d.default, l.default, c.default, u.default, f.default];
                return e ? t.push(a.default, n.default) : t.push(s.default, o.default), t.push(i.default), t
            }
        },
        "0Zgp": (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.validateTuple = void 0;
            const s = r("mTfQ"),
                a = r("QruF"),
                o = r("qeSY"),
                n = {
                    keyword: "items",
                    type: "array",
                    schemaType: ["object", "array", "boolean"],
                    before: "uniqueItems",
                    code(e) {
                        const {
                            schema: t,
                            it: r
                        } = e;
                        if (Array.isArray(t)) return i(e, "additionalItems", t);
                        r.items = !0, (0, a.alwaysValidSchema)(r, t) || e.ok((0, o.validateArray)(e))
                    }
                };

            function i(e, t, r = e.schema) {
                const {
                    gen: o,
                    parentSchema: n,
                    data: i,
                    keyword: c,
                    it: d
                } = e;
                ! function(e) {
                    const {
                        opts: s,
                        errSchemaPath: o
                    } = d, n = r.length, i = n === e.minItems && (n === e.maxItems || !1 === e[t]);
                    if (s.strictTuples && !i) {
                        const e = `"${c}" is ${n}-tuple, but minItems or maxItems/${t} are not specified or different at path "${o}"`;
                        (0, a.checkStrictMode)(d, e, s.strictTuples)
                    }
                }(n), d.opts.unevaluated && r.length && !0 !== d.items && (d.items = a.mergeEvaluated.items(o, r.length, d.items));
                const l = o.name("valid"),
                    u = o.const("len", s._ `${i}.length`);
                r.forEach(((t, r) => {
                    (0, a.alwaysValidSchema)(d, t) || (o.if(s._ `${u} > ${r}`, (() => e.subschema({
                        keyword: c,
                        schemaProp: r,
                        dataProp: r
                    }, l))), e.ok(l))
                }))
            }
            t.validateTuple = i, t.default = n
        },
        FyWv: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("mTfQ"),
                a = r("QruF"),
                o = r("qeSY"),
                n = r("EwqU"),
                i = {
                    keyword: "items",
                    type: "array",
                    schemaType: ["object", "boolean"],
                    before: "uniqueItems",
                    error: {
                        message: ({
                            params: {
                                len: e
                            }
                        }) => s.str `must NOT have more than ${e} items`,
                        params: ({
                            params: {
                                len: e
                            }
                        }) => s._ `{limit: ${e}}`
                    },
                    code(e) {
                        const {
                            schema: t,
                            parentSchema: r,
                            it: s
                        } = e, {
                            prefixItems: i
                        } = r;
                        s.items = !0, (0, a.alwaysValidSchema)(s, t) || (i ? (0, n.validateAdditionalItems)(e, i) : e.ok((0, o.validateArray)(e)))
                    }
                };
            t.default = i
        },
        iGnP: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("QruF"),
                a = {
                    keyword: "not",
                    schemaType: ["object", "boolean"],
                    trackErrors: !0,
                    code(e) {
                        const {
                            gen: t,
                            schema: r,
                            it: a
                        } = e;
                        if ((0, s.alwaysValidSchema)(a, r)) return void e.fail();
                        const o = t.name("valid");
                        e.subschema({
                            keyword: "not",
                            compositeRule: !0,
                            createErrors: !1,
                            allErrors: !1
                        }, o), e.failResult(o, (() => e.reset()), (() => e.error()))
                    },
                    error: {
                        message: "must NOT be valid"
                    }
                };
            t.default = a
        },
        qSkY: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("mTfQ"),
                a = r("QruF"),
                o = {
                    keyword: "oneOf",
                    schemaType: "array",
                    trackErrors: !0,
                    error: {
                        message: "must match exactly one schema in oneOf",
                        params: ({
                            params: e
                        }) => s._ `{passingSchemas: ${e.passing}}`
                    },
                    code(e) {
                        const {
                            gen: t,
                            schema: r,
                            parentSchema: o,
                            it: n
                        } = e;
                        if (!Array.isArray(r)) throw new Error("ajv implementation error");
                        if (n.opts.discriminator && o.discriminator) return;
                        const i = r,
                            c = t.let("valid", !1),
                            d = t.let("passing", null),
                            l = t.name("_valid");
                        e.setParams({
                            passing: d
                        }), t.block((function() {
                            i.forEach(((r, o) => {
                                let i;
                                (0, a.alwaysValidSchema)(n, r) ? t.var(l, !0): i = e.subschema({
                                    keyword: "oneOf",
                                    schemaProp: o,
                                    compositeRule: !0
                                }, l), o > 0 && t.if(s._ `${l} && ${c}`).assign(c, !1).assign(d, s._ `[${d}, ${o}]`).else(), t.if(l, (() => {
                                    t.assign(c, !0), t.assign(d, o), i && e.mergeEvaluated(i, s.Name)
                                }))
                            }))
                        })), e.result(c, (() => e.reset()), (() => e.error(!0)))
                    }
                };
            t.default = o
        },
        KRZH: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("qeSY"),
                a = r("mTfQ"),
                o = r("QruF"),
                n = r("QruF"),
                i = {
                    keyword: "patternProperties",
                    type: "object",
                    schemaType: "object",
                    code(e) {
                        const {
                            gen: t,
                            schema: r,
                            data: i,
                            parentSchema: c,
                            it: d
                        } = e, {
                            opts: l
                        } = d, u = (0, s.allSchemaProperties)(r), f = u.filter((e => (0, o.alwaysValidSchema)(d, r[e])));
                        if (0 === u.length || f.length === u.length && (!d.opts.unevaluated || !0 === d.props)) return;
                        const h = l.strictSchema && !l.allowMatchingProperties && c.properties,
                            m = t.name("valid");
                        !0 === d.props || d.props instanceof a.Name || (d.props = (0, n.evaluatedPropsToName)(t, d.props));
                        const {
                            props: p
                        } = d;

                        function y(e) {
                            for (const t in h) new RegExp(e).test(t) && (0, o.checkStrictMode)(d, `property ${t} matches pattern ${e} (use allowMatchingProperties)`)
                        }

                        function $(r) {
                            t.forIn("key", i, (o => {
                                t.if(a._ `${(0,s.usePattern)(e,r)}.test(${o})`, (() => {
                                    const s = f.includes(r);
                                    s || e.subschema({
                                        keyword: "patternProperties",
                                        schemaProp: r,
                                        dataProp: o,
                                        dataPropType: n.Type.Str
                                    }, m), d.opts.unevaluated && !0 !== p ? t.assign(a._ `${p}[${o}]`, !0) : s || d.allErrors || t.if((0, a.not)(m), (() => t.break()))
                                }))
                            }))
                        }! function() {
                            for (const e of u) h && y(e), d.allErrors ? $(e) : (t.var(m, !0), $(e), t.if(m))
                        }()
                    }
                };
            t.default = i
        },
        "6jv2": (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("0Zgp"),
                a = {
                    keyword: "prefixItems",
                    type: "array",
                    schemaType: ["array"],
                    before: "uniqueItems",
                    code: e => (0, s.validateTuple)(e, "items")
                };
            t.default = a
        },
        "2Luf": (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("pcE6"),
                a = r("qeSY"),
                o = r("QruF"),
                n = r("/xvK"),
                i = {
                    keyword: "properties",
                    type: "object",
                    schemaType: "object",
                    code(e) {
                        const {
                            gen: t,
                            schema: r,
                            parentSchema: i,
                            data: c,
                            it: d
                        } = e;
                        "all" === d.opts.removeAdditional && void 0 === i.additionalProperties && n.default.code(new s.KeywordCxt(d, n.default, "additionalProperties"));
                        const l = (0, a.allSchemaProperties)(r);
                        for (const e of l) d.definedProperties.add(e);
                        d.opts.unevaluated && l.length && !0 !== d.props && (d.props = o.mergeEvaluated.props(t, (0, o.toHash)(l), d.props));
                        const u = l.filter((e => !(0, o.alwaysValidSchema)(d, r[e])));
                        if (0 === u.length) return;
                        const f = t.name("valid");
                        for (const r of u) h(r) ? m(r) : (t.if((0, a.propertyInData)(t, c, r, d.opts.ownProperties)), m(r), d.allErrors || t.else().var(f, !0), t.endIf()), e.it.definedProperties.add(r), e.ok(f);

                        function h(e) {
                            return d.opts.useDefaults && !d.compositeRule && void 0 !== r[e].default
                        }

                        function m(t) {
                            e.subschema({
                                keyword: "properties",
                                schemaProp: t,
                                dataProp: t
                            }, f)
                        }
                    }
                };
            t.default = i
        },
        "9hUJ": (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("mTfQ"),
                a = r("QruF"),
                o = {
                    keyword: "propertyNames",
                    type: "object",
                    schemaType: ["object", "boolean"],
                    error: {
                        message: "property name must be valid",
                        params: ({
                            params: e
                        }) => s._ `{propertyName: ${e.propertyName}}`
                    },
                    code(e) {
                        const {
                            gen: t,
                            schema: r,
                            data: o,
                            it: n
                        } = e;
                        if ((0, a.alwaysValidSchema)(n, r)) return;
                        const i = t.name("valid");
                        t.forIn("key", o, (r => {
                            e.setParams({
                                propertyName: r
                            }), e.subschema({
                                keyword: "propertyNames",
                                data: r,
                                dataTypes: ["string"],
                                propertyName: r,
                                compositeRule: !0
                            }, i), t.if((0, s.not)(i), (() => {
                                e.error(!0), n.allErrors || t.break()
                            }))
                        })), e.ok(i)
                    }
                };
            t.default = o
        },
        aYbo: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("QruF"),
                a = {
                    keyword: ["then", "else"],
                    schemaType: ["object", "boolean"],
                    code({
                        keyword: e,
                        parentSchema: t,
                        it: r
                    }) {
                        void 0 === t.if && (0, s.checkStrictMode)(r, `"${e}" without "if" is ignored`)
                    }
                };
            t.default = a
        },
        qeSY: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.validateUnion = t.validateArray = t.usePattern = t.callValidateCode = t.schemaProperties = t.allSchemaProperties = t.noPropertyInData = t.propertyInData = t.isOwnProperty = t.hasPropFunc = t.reportMissingProp = t.checkMissingProp = t.checkReportMissingProp = void 0;
            const s = r("mTfQ"),
                a = r("QruF"),
                o = r("Ze9L"),
                n = r("QruF");

            function i(e) {
                return e.scopeValue("func", {
                    ref: Object.prototype.hasOwnProperty,
                    code: s._ `Object.prototype.hasOwnProperty`
                })
            }

            function c(e, t, r) {
                return s._ `${i(e)}.call(${t}, ${r})`
            }

            function d(e, t, r, a) {
                const o = s._ `${t}${(0,s.getProperty)(r)} === undefined`;
                return a ? (0, s.or)(o, (0, s.not)(c(e, t, r))) : o
            }

            function l(e) {
                return e ? Object.keys(e).filter((e => "__proto__" !== e)) : []
            }
            t.checkReportMissingProp = function(e, t) {
                const {
                    gen: r,
                    data: a,
                    it: o
                } = e;
                r.if(d(r, a, t, o.opts.ownProperties), (() => {
                    e.setParams({
                        missingProperty: s._ `${t}`
                    }, !0), e.error()
                }))
            }, t.checkMissingProp = function({
                gen: e,
                data: t,
                it: {
                    opts: r
                }
            }, a, o) {
                return (0, s.or)(...a.map((a => (0, s.and)(d(e, t, a, r.ownProperties), s._ `${o} = ${a}`))))
            }, t.reportMissingProp = function(e, t) {
                e.setParams({
                    missingProperty: t
                }, !0), e.error()
            }, t.hasPropFunc = i, t.isOwnProperty = c, t.propertyInData = function(e, t, r, a) {
                const o = s._ `${t}${(0,s.getProperty)(r)} !== undefined`;
                return a ? s._ `${o} && ${c(e,t,r)}` : o
            }, t.noPropertyInData = d, t.allSchemaProperties = l, t.schemaProperties = function(e, t) {
                return l(t).filter((r => !(0, a.alwaysValidSchema)(e, t[r])))
            }, t.callValidateCode = function({
                schemaCode: e,
                data: t,
                it: {
                    gen: r,
                    topSchemaRef: a,
                    schemaPath: n,
                    errorPath: i
                },
                it: c
            }, d, l, u) {
                const f = u ? s._ `${e}, ${t}, ${a}${n}` : t,
                    h = [
                        [o.default.instancePath, (0, s.strConcat)(o.default.instancePath, i)],
                        [o.default.parentData, c.parentData],
                        [o.default.parentDataProperty, c.parentDataProperty],
                        [o.default.rootData, o.default.rootData]
                    ];
                c.opts.dynamicRef && h.push([o.default.dynamicAnchors, o.default.dynamicAnchors]);
                const m = s._ `${f}, ${r.object(...h)}`;
                return l !== s.nil ? s._ `${d}.call(${l}, ${m})` : s._ `${d}(${m})`
            };
            const u = s._ `new RegExp`;
            t.usePattern = function({
                gen: e,
                it: {
                    opts: t
                }
            }, r) {
                const a = t.unicodeRegExp ? "u" : "",
                    {
                        regExp: o
                    } = t.code,
                    i = o(r, a);
                return e.scopeValue("pattern", {
                    key: i.toString(),
                    ref: i,
                    code: s._ `${"new RegExp"===o.code?u:(0,n.useFunc)(e,o)}(${r}, ${a})`
                })
            }, t.validateArray = function(e) {
                const {
                    gen: t,
                    data: r,
                    keyword: o,
                    it: n
                } = e, i = t.name("valid");
                if (n.allErrors) {
                    const e = t.let("valid", !0);
                    return c((() => t.assign(e, !1))), e
                }
                return t.var(i, !0), c((() => t.break())), i;

                function c(n) {
                    const c = t.const("len", s._ `${r}.length`);
                    t.forRange("i", 0, c, (r => {
                        e.subschema({
                            keyword: o,
                            dataProp: r,
                            dataPropType: a.Type.Num
                        }, i), t.if((0, s.not)(i), n)
                    }))
                }
            }, t.validateUnion = function(e) {
                const {
                    gen: t,
                    schema: r,
                    keyword: o,
                    it: n
                } = e;
                if (!Array.isArray(r)) throw new Error("ajv implementation error");
                if (r.some((e => (0, a.alwaysValidSchema)(n, e))) && !n.opts.unevaluated) return;
                const i = t.let("valid", !1),
                    c = t.name("_valid");
                t.block((() => r.forEach(((r, a) => {
                    const n = e.subschema({
                        keyword: o,
                        schemaProp: a,
                        compositeRule: !0
                    }, c);
                    t.assign(i, s._ `${i} || ${c}`);
                    e.mergeValidEvaluated(n, c) || t.if((0, s.not)(i))
                })))), e.result(i, (() => e.reset()), (() => e.error(!0)))
            }
        },
        Bt7N: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = {
                keyword: "id",
                code() {
                    throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID')
                }
            };
            t.default = r
        },
        "R+AE": (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("Bt7N"),
                a = r("vg/8"),
                o = ["$schema", "$id", "$defs", "$vocabulary", {
                    keyword: "$comment"
                }, "definitions", s.default, a.default];
            t.default = o
        },
        "vg/8": (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.callRef = t.getValidate = void 0;
            const s = r("KmkK"),
                a = r("qeSY"),
                o = r("mTfQ"),
                n = r("Ze9L"),
                i = r("IBwq"),
                c = r("QruF"),
                d = {
                    keyword: "$ref",
                    schemaType: "string",
                    code(e) {
                        const {
                            gen: t,
                            schema: r,
                            it: a
                        } = e, {
                            baseId: n,
                            schemaEnv: c,
                            validateName: d,
                            opts: f,
                            self: h
                        } = a, {
                            root: m
                        } = c;
                        if (("#" === r || "#/" === r) && n === m.baseId) return function() {
                            if (c === m) return u(e, d, c, c.$async);
                            const r = t.scopeValue("root", {
                                ref: m
                            });
                            return u(e, o._ `${r}.validate`, m, m.$async)
                        }();
                        const p = i.resolveRef.call(h, m, n, r);
                        if (void 0 === p) throw new s.default(n, r);
                        return p instanceof i.SchemaEnv ? function(t) {
                            const r = l(e, t);
                            u(e, r, t, t.$async)
                        }(p) : function(s) {
                            const a = t.scopeValue("schema", !0 === f.code.source ? {
                                    ref: s,
                                    code: (0, o.stringify)(s)
                                } : {
                                    ref: s
                                }),
                                n = t.name("valid"),
                                i = e.subschema({
                                    schema: s,
                                    dataTypes: [],
                                    schemaPath: o.nil,
                                    topSchemaRef: a,
                                    errSchemaPath: r
                                }, n);
                            e.mergeEvaluated(i), e.ok(n)
                        }(p)
                    }
                };

            function l(e, t) {
                const {
                    gen: r
                } = e;
                return t.validate ? r.scopeValue("validate", {
                    ref: t.validate
                }) : o._ `${r.scopeValue("wrapper",{ref:t})}.validate`
            }

            function u(e, t, r, s) {
                const {
                    gen: i,
                    it: d
                } = e, {
                    allErrors: l,
                    schemaEnv: u,
                    opts: f
                } = d, h = f.passContext ? n.default.this : o.nil;

                function m(e) {
                    const t = o._ `${e}.errors`;
                    i.assign(n.default.vErrors, o._ `${n.default.vErrors} === null ? ${t} : ${n.default.vErrors}.concat(${t})`), i.assign(n.default.errors, o._ `${n.default.vErrors}.length`)
                }

                function p(e) {
                    var t;
                    if (!d.opts.unevaluated) return;
                    const s = null === (t = null == r ? void 0 : r.validate) || void 0 === t ? void 0 : t.evaluated;
                    if (!0 !== d.props)
                        if (s && !s.dynamicProps) void 0 !== s.props && (d.props = c.mergeEvaluated.props(i, s.props, d.props));
                        else {
                            const t = i.var("props", o._ `${e}.evaluated.props`);
                            d.props = c.mergeEvaluated.props(i, t, d.props, o.Name)
                        }
                    if (!0 !== d.items)
                        if (s && !s.dynamicItems) void 0 !== s.items && (d.items = c.mergeEvaluated.items(i, s.items, d.items));
                        else {
                            const t = i.var("items", o._ `${e}.evaluated.items`);
                            d.items = c.mergeEvaluated.items(i, t, d.items, o.Name)
                        }
                }
                s ? function() {
                    if (!u.$async) throw new Error("async schema referenced by sync schema");
                    const r = i.let("valid");
                    i.try((() => {
                        i.code(o._ `await ${(0,a.callValidateCode)(e,t,h)}`), p(t), l || i.assign(r, !0)
                    }), (e => {
                        i.if(o._ `!(${e} instanceof ${d.ValidationError})`, (() => i.throw(e))), m(e), l || i.assign(r, !1)
                    })), e.ok(r)
                }() : e.result((0, a.callValidateCode)(e, t, h), (() => p(t)), (() => m(t)))
            }
            t.getValidate = l, t.callRef = u, t.default = d
        },
        xkoC: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("mTfQ"),
                a = r("tEbP"),
                o = {
                    keyword: "discriminator",
                    type: "object",
                    schemaType: "object",
                    error: {
                        message: ({
                            params: {
                                discrError: e,
                                tagName: t
                            }
                        }) => e === a.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
                        params: ({
                            params: {
                                discrError: e,
                                tag: t,
                                tagName: r
                            }
                        }) => s._ `{error: ${e}, tag: ${r}, tagValue: ${t}}`
                    },
                    code(e) {
                        const {
                            gen: t,
                            data: r,
                            schema: o,
                            parentSchema: n,
                            it: i
                        } = e, {
                            oneOf: c
                        } = n;
                        if (!i.opts.discriminator) throw new Error("discriminator: requires discriminator option");
                        const d = o.propertyName;
                        if ("string" != typeof d) throw new Error("discriminator: requires propertyName");
                        if (o.mapping) throw new Error("discriminator: mapping is not supported");
                        if (!c) throw new Error("discriminator: requires oneOf keyword");
                        const l = t.let("valid", !1),
                            u = t.const("tag", s._ `${r}${(0,s.getProperty)(d)}`);

                        function f(r) {
                            const a = t.name("valid"),
                                o = e.subschema({
                                    keyword: "oneOf",
                                    schemaProp: r
                                }, a);
                            return e.mergeEvaluated(o, s.Name), a
                        }
                        t.if(s._ `typeof ${u} == "string"`, (() => function() {
                            const r = function() {
                                var e;
                                const t = {},
                                    r = a(n);
                                let s = !0;
                                for (let t = 0; t < c.length; t++) {
                                    const n = c[t],
                                        i = null === (e = n.properties) || void 0 === e ? void 0 : e[d];
                                    if ("object" != typeof i) throw new Error(`discriminator: oneOf schemas must have "properties/${d}"`);
                                    s = s && (r || a(n)), o(i, t)
                                }
                                if (!s) throw new Error(`discriminator: "${d}" must be required`);
                                return t;

                                function a({
                                    required: e
                                }) {
                                    return Array.isArray(e) && e.includes(d)
                                }

                                function o(e, t) {
                                    if (e.const) i(e.const, t);
                                    else {
                                        if (!e.enum) throw new Error(`discriminator: "properties/${d}" must have "const" or "enum"`);
                                        for (const r of e.enum) i(r, t)
                                    }
                                }

                                function i(e, r) {
                                    if ("string" != typeof e || e in t) throw new Error(`discriminator: "${d}" values must be unique strings`);
                                    t[e] = r
                                }
                            }();
                            t.if(!1);
                            for (const e in r) t.elseIf(s._ `${u} === ${e}`), t.assign(l, f(r[e]));
                            t.else(), e.error(!1, {
                                discrError: a.DiscrError.Mapping,
                                tag: u,
                                tagName: d
                            }), t.endIf()
                        }()), (() => e.error(!1, {
                            discrError: a.DiscrError.Tag,
                            tag: u,
                            tagName: d
                        }))), e.ok(l)
                    }
                };
            t.default = o
        },
        tEbP: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DiscrError = void 0,
                function(e) {
                    e.Tag = "tag", e.Mapping = "mapping"
                }(t.DiscrError || (t.DiscrError = {}))
        },
        mlrS: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("R+AE"),
                a = r("rfYi"),
                o = r("HzjV"),
                n = r("h/lb"),
                i = r("Vcfq"),
                c = [s.default, a.default, (0, o.default)(), n.default, i.metadataVocabulary, i.contentVocabulary];
            t.default = c
        },
        euCE: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("mTfQ"),
                a = {
                    keyword: "format",
                    type: ["number", "string"],
                    schemaType: "string",
                    $data: !0,
                    error: {
                        message: ({
                            schemaCode: e
                        }) => s.str `must match format "${e}"`,
                        params: ({
                            schemaCode: e
                        }) => s._ `{format: ${e}}`
                    },
                    code(e, t) {
                        const {
                            gen: r,
                            data: a,
                            $data: o,
                            schema: n,
                            schemaCode: i,
                            it: c
                        } = e, {
                            opts: d,
                            errSchemaPath: l,
                            schemaEnv: u,
                            self: f
                        } = c;
                        d.validateFormats && (o ? function() {
                            const o = r.scopeValue("formats", {
                                    ref: f.formats,
                                    code: d.code.formats
                                }),
                                n = r.const("fDef", s._ `${o}[${i}]`),
                                c = r.let("fType"),
                                l = r.let("format");
                            r.if(s._ `typeof ${n} == "object" && !(${n} instanceof RegExp)`, (() => r.assign(c, s._ `${n}.type || "string"`).assign(l, s._ `${n}.validate`)), (() => r.assign(c, s._ `"string"`).assign(l, n))), e.fail$data((0, s.or)(!1 === d.strictSchema ? s.nil : s._ `${i} && !${l}`, function() {
                                const e = u.$async ? s._ `(${n}.async ? await ${l}(${a}) : ${l}(${a}))` : s._ `${l}(${a})`,
                                    r = s._ `(typeof ${l} == "function" ? ${e} : ${l}.test(${a}))`;
                                return s._ `${l} && ${l} !== true && ${c} === ${t} && !${r}`
                            }()))
                        }() : function() {
                            const o = f.formats[n];
                            if (!o) return void
                            function() {
                                if (!1 === d.strictSchema) return void f.logger.warn(e());
                                throw new Error(e());

                                function e() {
                                    return `unknown format "${n}" ignored in schema at path "${l}"`
                                }
                            }();
                            if (!0 === o) return;
                            const [i, c, h] = function(e) {
                                const t = e instanceof RegExp ? (0, s.regexpCode)(e) : d.code.formats ? s._ `${d.code.formats}${(0,s.getProperty)(n)}` : void 0,
                                    a = r.scopeValue("formats", {
                                        key: n,
                                        ref: e,
                                        code: t
                                    });
                                if ("object" == typeof e && !(e instanceof RegExp)) return [e.type || "string", e.validate, s._ `${a}.validate`];
                                return ["string", e, a]
                            }(o);
                            i === t && e.pass(function() {
                                if ("object" == typeof o && !(o instanceof RegExp) && o.async) {
                                    if (!u.$async) throw new Error("async format in sync schema");
                                    return s._ `await ${h}(${a})`
                                }
                                return "function" == typeof c ? s._ `${h}(${a})` : s._ `${h}.test(${a})`
                            }())
                        }())
                    }
                };
            t.default = a
        },
        "h/lb": (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = [r("euCE").default];
            t.default = s
        },
        Vcfq: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.contentVocabulary = t.metadataVocabulary = void 0, t.metadataVocabulary = ["title", "description", "default", "deprecated", "readOnly", "writeOnly", "examples"], t.contentVocabulary = ["contentMediaType", "contentEncoding", "contentSchema"]
        },
        Uvb6: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("mTfQ"),
                a = r("QruF"),
                o = r("zfze"),
                n = {
                    keyword: "const",
                    $data: !0,
                    error: {
                        message: "must be equal to constant",
                        params: ({
                            schemaCode: e
                        }) => s._ `{allowedValue: ${e}}`
                    },
                    code(e) {
                        const {
                            gen: t,
                            data: r,
                            $data: n,
                            schemaCode: i,
                            schema: c
                        } = e;
                        n || c && "object" == typeof c ? e.fail$data(s._ `!${(0,a.useFunc)(t,o.default)}(${r}, ${i})`) : e.fail(s._ `${c} !== ${r}`)
                    }
                };
            t.default = n
        },
        S5xt: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("mTfQ"),
                a = r("QruF"),
                o = r("zfze"),
                n = {
                    keyword: "enum",
                    schemaType: "array",
                    $data: !0,
                    error: {
                        message: "must be equal to one of the allowed values",
                        params: ({
                            schemaCode: e
                        }) => s._ `{allowedValues: ${e}}`
                    },
                    code(e) {
                        const {
                            gen: t,
                            data: r,
                            $data: n,
                            schema: i,
                            schemaCode: c,
                            it: d
                        } = e;
                        if (!n && 0 === i.length) throw new Error("enum must have non-empty array");
                        const l = i.length >= d.opts.loopEnum,
                            u = (0, a.useFunc)(t, o.default);
                        let f;
                        if (l || n) f = t.let("valid"), e.block$data(f, (function() {
                            t.assign(f, !1), t.forOf("v", c, (e => t.if(s._ `${u}(${r}, ${e})`, (() => t.assign(f, !0).break()))))
                        }));
                        else {
                            if (!Array.isArray(i)) throw new Error("ajv implementation error");
                            const e = t.const("vSchema", c);
                            f = (0, s.or)(...i.map(((t, a) => function(e, t) {
                                const a = i[t];
                                return "object" == typeof a && null !== a ? s._ `${u}(${r}, ${e}[${t}])` : s._ `${r} === ${a}`
                            }(e, a))))
                        }
                        e.pass(f)
                    }
                };
            t.default = n
        },
        rfYi: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("h2F3"),
                a = r("pK+v"),
                o = r("CDbR"),
                n = r("LNIH"),
                i = r("XbDF"),
                c = r("pA75"),
                d = r("DTuA"),
                l = r("jr3H"),
                u = r("Uvb6"),
                f = r("S5xt"),
                h = [s.default, a.default, o.default, n.default, i.default, c.default, d.default, l.default, {
                    keyword: "type",
                    schemaType: ["string", "array"]
                }, {
                    keyword: "nullable",
                    schemaType: "boolean"
                }, u.default, f.default];
            t.default = h
        },
        DTuA: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("mTfQ"),
                a = {
                    keyword: ["maxItems", "minItems"],
                    type: "array",
                    schemaType: "number",
                    $data: !0,
                    error: {
                        message({
                            keyword: e,
                            schemaCode: t
                        }) {
                            const r = "maxItems" === e ? "more" : "fewer";
                            return s.str `must NOT have ${r} than ${t} items`
                        },
                        params: ({
                            schemaCode: e
                        }) => s._ `{limit: ${e}}`
                    },
                    code(e) {
                        const {
                            keyword: t,
                            data: r,
                            schemaCode: a
                        } = e, o = "maxItems" === t ? s.operators.GT : s.operators.LT;
                        e.fail$data(s._ `${r}.length ${o} ${a}`)
                    }
                };
            t.default = a
        },
        CDbR: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("mTfQ"),
                a = r("QruF"),
                o = r("UToi"),
                n = {
                    keyword: ["maxLength", "minLength"],
                    type: "string",
                    schemaType: "number",
                    $data: !0,
                    error: {
                        message({
                            keyword: e,
                            schemaCode: t
                        }) {
                            const r = "maxLength" === e ? "more" : "fewer";
                            return s.str `must NOT have ${r} than ${t} characters`
                        },
                        params: ({
                            schemaCode: e
                        }) => s._ `{limit: ${e}}`
                    },
                    code(e) {
                        const {
                            keyword: t,
                            data: r,
                            schemaCode: n,
                            it: i
                        } = e, c = "maxLength" === t ? s.operators.GT : s.operators.LT, d = !1 === i.opts.unicode ? s._ `${r}.length` : s._ `${(0,a.useFunc)(e.gen,o.default)}(${r})`;
                        e.fail$data(s._ `${d} ${c} ${n}`)
                    }
                };
            t.default = n
        },
        h2F3: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("mTfQ"),
                a = s.operators,
                o = {
                    maximum: {
                        okStr: "<=",
                        ok: a.LTE,
                        fail: a.GT
                    },
                    minimum: {
                        okStr: ">=",
                        ok: a.GTE,
                        fail: a.LT
                    },
                    exclusiveMaximum: {
                        okStr: "<",
                        ok: a.LT,
                        fail: a.GTE
                    },
                    exclusiveMinimum: {
                        okStr: ">",
                        ok: a.GT,
                        fail: a.LTE
                    }
                },
                n = {
                    message: ({
                        keyword: e,
                        schemaCode: t
                    }) => s.str `must be ${o[e].okStr} ${t}`,
                    params: ({
                        keyword: e,
                        schemaCode: t
                    }) => s._ `{comparison: ${o[e].okStr}, limit: ${t}}`
                },
                i = {
                    keyword: Object.keys(o),
                    type: "number",
                    schemaType: "number",
                    $data: !0,
                    error: n,
                    code(e) {
                        const {
                            keyword: t,
                            data: r,
                            schemaCode: a
                        } = e;
                        e.fail$data(s._ `${r} ${o[t].fail} ${a} || isNaN(${r})`)
                    }
                };
            t.default = i
        },
        XbDF: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("mTfQ"),
                a = {
                    keyword: ["maxProperties", "minProperties"],
                    type: "object",
                    schemaType: "number",
                    $data: !0,
                    error: {
                        message({
                            keyword: e,
                            schemaCode: t
                        }) {
                            const r = "maxProperties" === e ? "more" : "fewer";
                            return s.str `must NOT have ${r} than ${t} items`
                        },
                        params: ({
                            schemaCode: e
                        }) => s._ `{limit: ${e}}`
                    },
                    code(e) {
                        const {
                            keyword: t,
                            data: r,
                            schemaCode: a
                        } = e, o = "maxProperties" === t ? s.operators.GT : s.operators.LT;
                        e.fail$data(s._ `Object.keys(${r}).length ${o} ${a}`)
                    }
                };
            t.default = a
        },
        "pK+v": (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("mTfQ"),
                a = {
                    keyword: "multipleOf",
                    type: "number",
                    schemaType: "number",
                    $data: !0,
                    error: {
                        message: ({
                            schemaCode: e
                        }) => s.str `must be multiple of ${e}`,
                        params: ({
                            schemaCode: e
                        }) => s._ `{multipleOf: ${e}}`
                    },
                    code(e) {
                        const {
                            gen: t,
                            data: r,
                            schemaCode: a,
                            it: o
                        } = e, n = o.opts.multipleOfPrecision, i = t.let("res"), c = n ? s._ `Math.abs(Math.round(${i}) - ${i}) > 1e-${n}` : s._ `${i} !== parseInt(${i})`;
                        e.fail$data(s._ `(${a} === 0 || (${i} = ${r}/${a}, ${c}))`)
                    }
                };
            t.default = a
        },
        LNIH: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("qeSY"),
                a = r("mTfQ"),
                o = {
                    keyword: "pattern",
                    type: "string",
                    schemaType: "string",
                    $data: !0,
                    error: {
                        message: ({
                            schemaCode: e
                        }) => a.str `must match pattern "${e}"`,
                        params: ({
                            schemaCode: e
                        }) => a._ `{pattern: ${e}}`
                    },
                    code(e) {
                        const {
                            data: t,
                            $data: r,
                            schema: o,
                            schemaCode: n,
                            it: i
                        } = e, c = i.opts.unicodeRegExp ? "u" : "", d = r ? a._ `(new RegExp(${n}, ${c}))` : (0, s.usePattern)(e, o);
                        e.fail$data(a._ `!${d}.test(${t})`)
                    }
                };
            t.default = o
        },
        pA75: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("qeSY"),
                a = r("mTfQ"),
                o = r("QruF"),
                n = {
                    keyword: "required",
                    type: "object",
                    schemaType: "array",
                    $data: !0,
                    error: {
                        message: ({
                            params: {
                                missingProperty: e
                            }
                        }) => a.str `must have required property '${e}'`,
                        params: ({
                            params: {
                                missingProperty: e
                            }
                        }) => a._ `{missingProperty: ${e}}`
                    },
                    code(e) {
                        const {
                            gen: t,
                            schema: r,
                            schemaCode: n,
                            data: i,
                            $data: c,
                            it: d
                        } = e, {
                            opts: l
                        } = d;
                        if (!c && 0 === r.length) return;
                        const u = r.length >= l.loopRequired;
                        if (d.allErrors ? function() {
                                if (u || c) e.block$data(a.nil, f);
                                else
                                    for (const t of r)(0, s.checkReportMissingProp)(e, t)
                            }() : function() {
                                const o = t.let("missing");
                                if (u || c) {
                                    const r = t.let("valid", !0);
                                    e.block$data(r, (() => function(r, o) {
                                        e.setParams({
                                            missingProperty: r
                                        }), t.forOf(r, n, (() => {
                                            t.assign(o, (0, s.propertyInData)(t, i, r, l.ownProperties)), t.if((0, a.not)(o), (() => {
                                                e.error(), t.break()
                                            }))
                                        }), a.nil)
                                    }(o, r))), e.ok(r)
                                } else t.if((0, s.checkMissingProp)(e, r, o)), (0, s.reportMissingProp)(e, o), t.else()
                            }(), l.strictRequired) {
                            const t = e.parentSchema.properties,
                                {
                                    definedProperties: s
                                } = e.it;
                            for (const e of r)
                                if (void 0 === (null == t ? void 0 : t[e]) && !s.has(e)) {
                                    const t = `required property "${e}" is not defined at "${d.schemaEnv.baseId+d.errSchemaPath}" (strictRequired)`;
                                    (0, o.checkStrictMode)(d, t, d.opts.strictRequired)
                                }
                        }

                        function f() {
                            t.forOf("prop", n, (r => {
                                e.setParams({
                                    missingProperty: r
                                }), t.if((0, s.noPropertyInData)(t, i, r, l.ownProperties), (() => e.error()))
                            }))
                        }
                    }
                };
            t.default = n
        },
        jr3H: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r("0nRX"),
                a = r("mTfQ"),
                o = r("QruF"),
                n = r("zfze"),
                i = {
                    keyword: "uniqueItems",
                    type: "array",
                    schemaType: "boolean",
                    $data: !0,
                    error: {
                        message: ({
                            params: {
                                i: e,
                                j: t
                            }
                        }) => a.str `must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
                        params: ({
                            params: {
                                i: e,
                                j: t
                            }
                        }) => a._ `{i: ${e}, j: ${t}}`
                    },
                    code(e) {
                        const {
                            gen: t,
                            data: r,
                            $data: i,
                            schema: c,
                            parentSchema: d,
                            schemaCode: l,
                            it: u
                        } = e;
                        if (!i && !c) return;
                        const f = t.let("valid"),
                            h = d.items ? (0, s.getSchemaTypes)(d.items) : [];

                        function m(o, n) {
                            const i = t.name("item"),
                                c = (0, s.checkDataTypes)(h, i, u.opts.strictNumbers, s.DataType.Wrong),
                                d = t.const("indices", a._ `{}`);
                            t.for(a._ `;${o}--;`, (() => {
                                t.let(i, a._ `${r}[${o}]`), t.if(c, a._ `continue`), h.length > 1 && t.if(a._ `typeof ${i} == "string"`, a._ `${i} += "_"`), t.if(a._ `typeof ${d}[${i}] == "number"`, (() => {
                                    t.assign(n, a._ `${d}[${i}]`), e.error(), t.assign(f, !1).break()
                                })).code(a._ `${d}[${i}] = ${o}`)
                            }))
                        }

                        function p(s, i) {
                            const c = (0, o.useFunc)(t, n.default),
                                d = t.name("outer");
                            t.label(d).for(a._ `;${s}--;`, (() => t.for(a._ `${i} = ${s}; ${i}--;`, (() => t.if(a._ `${c}(${r}[${s}], ${r}[${i}])`, (() => {
                                e.error(), t.assign(f, !1).break(d)
                            }))))))
                        }
                        e.block$data(f, (function() {
                            const s = t.let("i", a._ `${r}.length`),
                                o = t.let("j");
                            e.setParams({
                                i: s,
                                j: o
                            }), t.assign(f, !0), t.if(a._ `${s} > 1`, (() => (h.length > 0 && !h.some((e => "object" === e || "array" === e)) ? m : p)(s, o)))
                        }), a._ `${l} === false`), e.ok(f)
                    }
                };
            t.default = i
        },
        sLTe: e => {
            e.exports = JSON.parse('{"$id":"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#","description":"Meta-schema for $data reference (JSON AnySchema extension proposal)","type":"object","required":["$data"],"properties":{"$data":{"type":"string","anyOf":[{"format":"relative-json-pointer"},{"format":"json-pointer"}]}},"additionalProperties":false}')
        },
        CVUA: e => {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"http://json-schema.org/draft-07/schema#","title":"Core schema meta-schema","definitions":{"schemaArray":{"type":"array","minItems":1,"items":{"$ref":"#"}},"nonNegativeInteger":{"type":"integer","minimum":0},"nonNegativeIntegerDefault0":{"allOf":[{"$ref":"#/definitions/nonNegativeInteger"},{"default":0}]},"simpleTypes":{"enum":["array","boolean","integer","null","number","object","string"]},"stringArray":{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]}},"type":["object","boolean"],"properties":{"$id":{"type":"string","format":"uri-reference"},"$schema":{"type":"string","format":"uri"},"$ref":{"type":"string","format":"uri-reference"},"$comment":{"type":"string"},"title":{"type":"string"},"description":{"type":"string"},"default":true,"readOnly":{"type":"boolean","default":false},"examples":{"type":"array","items":true},"multipleOf":{"type":"number","exclusiveMinimum":0},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"number"},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"number"},"maxLength":{"$ref":"#/definitions/nonNegativeInteger"},"minLength":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"pattern":{"type":"string","format":"regex"},"additionalItems":{"$ref":"#"},"items":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}],"default":true},"maxItems":{"$ref":"#/definitions/nonNegativeInteger"},"minItems":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"uniqueItems":{"type":"boolean","default":false},"contains":{"$ref":"#"},"maxProperties":{"$ref":"#/definitions/nonNegativeInteger"},"minProperties":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"required":{"$ref":"#/definitions/stringArray"},"additionalProperties":{"$ref":"#"},"definitions":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#"},"propertyNames":{"format":"regex"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/stringArray"}]}},"propertyNames":{"$ref":"#"},"const":true,"enum":{"type":"array","items":true,"minItems":1,"uniqueItems":true},"type":{"anyOf":[{"$ref":"#/definitions/simpleTypes"},{"type":"array","items":{"$ref":"#/definitions/simpleTypes"},"minItems":1,"uniqueItems":true}]},"format":{"type":"string"},"contentMediaType":{"type":"string"},"contentEncoding":{"type":"string"},"if":{"$ref":"#"},"then":{"$ref":"#"},"else":{"$ref":"#"},"allOf":{"$ref":"#/definitions/schemaArray"},"anyOf":{"$ref":"#/definitions/schemaArray"},"oneOf":{"$ref":"#/definitions/schemaArray"},"not":{"$ref":"#"}},"default":true}')
        }
    }
]);