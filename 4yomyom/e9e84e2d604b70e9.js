(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [7724], {

        /***/
        735393: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(365119);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var wW = __c.wW;
                var y = __c.y;
                var dW = __c.dW;
                var YV = __c.YV;
                var v = __c.v;
                var FV = __c.FV;
                var D = __c.D;
                var j5 = function(a, b) {
                        return a.size ? __c.AW(a.value.map(c => c.map(b)), a.size) : {
                            type: 4,
                            value: 3
                        }
                    },
                    kwb = function(a, b) {
                        if (4 === b.type) return b;
                        b = __c.HV(b, 1);
                        if (4 === b.type) return b;
                        switch (a) {
                            case "+":
                                return b;
                            case "-":
                                return __c.JV(-b.value);
                            case "%":
                                return __c.JV(b.value / 100);
                            default:
                                throw new D(a);
                        }
                    },
                    lwb = function(a, b) {
                        const c = d => kwb(a, d);
                        return 5 === b.type ? j5(b, c) : kwb(a, b)
                    },
                    mwb = function(a, b, c) {
                        if (5 !== b.type && 5 !== c.type) return __c.OV(a, b, c);
                        if (5 === b.type && 5 !== c.type) return j5(b, f => __c.OV(a, f, c));
                        if (5 !== b.type &&
                            5 === c.type) return j5(c, f => __c.OV(a, b, f));
                        FV(5 === b.type && 5 === c.type);
                        if (!b.size || !c.size) return {
                            type: 4,
                            value: 3
                        };
                        const d = {
                                rows: Math.max(b.size.rows, c.size.rows),
                                cols: Math.max(b.size.cols, c.size.cols)
                            },
                            e = Array.from({
                                length: d.rows
                            }, (f, g) => {
                                const h = b.value[1 === b.value.length ? 0 : g],
                                    k = c.value[1 === c.value.length ? 0 : g];
                                return Array.from({
                                    length: d.cols
                                }, (l, m) => __c.OV(a, h && h[1 === h.length ? 0 : m] || {
                                    type: 4,
                                    value: 7
                                }, k && k[1 === k.length ? 0 : m] || {
                                    type: 4,
                                    value: 7
                                }))
                            });
                        return __c.AW(e, d)
                    },
                    nwb = function(a, b) {
                        switch (a.type) {
                            case 15:
                                return b.zka(a.value);
                            case 7:
                                return {
                                    type: 7,
                                    value: a.value.map(c => c.map(d => nwb(d, b)))
                                };
                            case 0:
                            case 6:
                            case 10:
                            case 11:
                            case 12:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 8:
                                return a;
                            default:
                                throw new D(a);
                        }
                    },
                    owb = function(a, b) {
                        for (const c of a) switch (c.type) {
                            case 7:
                                c.value.forEach(d => owb(d, b));
                                break;
                            case 15:
                            case 0:
                            case 6:
                            case 10:
                            case 11:
                            case 12:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 8:
                                b(c);
                                break;
                            default:
                                throw new D(c);
                        }
                    },
                    k5 = function(a) {
                        return {
                            offset: a.offset,
                            length: a.length,
                            text: a.text
                        }
                    },
                    qwb = function(a) {
                        v("functionCall" === a.name);
                        v(!a.error);
                        FV(4 === a.children.length);
                        const [b, c, d, e] = a.children, f = [], g = [];
                        if (0 !== d.children.length) {
                            const [h, k] = d.children;
                            f.push(pwb(h));
                            if (k) {
                                const l = k.children.flatMap(n => n.children),
                                    m = l.filter((n, p) => 1 === p % 2).map(pwb);
                                g.push(...l.filter((n, p) => 0 === p % 2).map(k5));
                                f.push(...m)
                            }
                        }
                        return { ...k5(a),
                            wfb: {
                                name: k5(b),
                                Hlb: k5(c),
                                Fob: k5(e),
                                Aeb: g
                            },
                            name: b.text,
                            arguments: f
                        }
                    },
                    rwb = function(a) {
                        v("operand" === a.name);
                        if (a.error) return { ...k5(a),
                            error: !0,
                            type: 3
                        };
                        FV(1 === a.children.length);
                        const b = a.children[0];
                        return 3 ===
                            b.children.length && "openParenthesis" === b.children[0].name && "expression" === b.children[1].name && "closeParenthesis" === b.children[2].name ? { ...k5(a),
                                type: 0,
                                JD: l5(b.children[1])
                            } : "functionCall" === b.name ? { ...k5(a),
                                type: 1,
                                pUa: qwb(b)
                            } : "reference" === b.name ? { ...k5(a),
                                type: 2
                            } : { ...k5(a),
                                type: 3
                            }
                    },
                    m5 = function(a) {
                        v("term" === a.name);
                        v(!a.error);
                        FV(1 <= a.children.length && 3 >= a.children.length);
                        const b = [];
                        let c;
                        const d = [];
                        for (const e of a.children)
                            if ("operand" === e.name) c = rwb(e);
                            else {
                                const f = e.children.flatMap(g => g.children);
                                f.every(g => "prefixOperator" === g.name) ? b.push(...f.map(g => g.text)) : f.every(g => "postfixOperator" === g.name) ? d.push(...f.map(g => g.text)) : FV(!1)
                            }
                        FV(null != c);
                        return { ...k5(a),
                            BCa: b,
                            Jia: c,
                            xja: d
                        }
                    },
                    pwb = function(a) {
                        v("expression" === a.name || "emptyArg" === a.name);
                        switch (a.name) {
                            case "expression":
                                return l5(a);
                            case "emptyArg":
                                break;
                            default:
                                throw new D(a.name);
                        }
                    },
                    l5 = function(a) {
                        v("expression" === a.name);
                        v(!a.error);
                        v(1 === a.children.length || 2 === a.children.length);
                        const [b, c] = a.children, d = m5(b), e = c ? c.children.map(({
                            children: f
                        }) => {
                            const [g, h] = f;
                            v("infixOperator" === g.name);
                            return [g.text, m5(h)]
                        }) : [];
                        return { ...k5(a),
                            Aga: d,
                            Tv: e,
                            text: a.text
                        }
                    },
                    twb = function(a, b) {
                        switch (b.type) {
                            case 0:
                                a.gQ(b.JD);
                                break;
                            case 1:
                                swb(a, b.pUa);
                                break;
                            case 2:
                            case 3:
                                break;
                            default:
                                throw new D(b);
                        }
                    },
                    swb = function(a, b) {
                        b.arguments.forEach(c => {
                            null != c && a.gQ(c)
                        })
                    },
                    uwb = function(a) {
                        return a.toUpperCase().replace(/\$/g, "")
                    },
                    zwb = function(a) {
                        v(YV(__c.pW, a));
                        const [b, c] = (0, __c.pW)(a).value;
                        return [b, c].map(uwb)
                    },
                    n5 = function(a) {
                        v(YV(__c.qW, a) || YV(__c.rW, a));
                        return uwb(a)
                    },
                    Awb = function(a) {
                        ({
                            qAa: a
                        } = __c.jab(a));
                        const b = __c.eW(dW((d, e) => __c.JV(e), __c.lW, a, __c.lW, __c.aW(__c.uX)), dW(d => __c.KV(d), __c.oW, __c.aW(__c.uX)), dW(d => ({
                                type: 4,
                                value: d.type
                            }), __c.qab, __c.aW(__c.uX)), dW(d => __c.IV(d), __c.pab)),
                            c = dW((d, e) => [d, e], __c.wbb, b);
                        return d => {
                            let e;
                            YV(c, d) ? [e, d] = c(d).value : (FV(YV(b, d)), e = "=", d = b(d).value);
                            return 3 !== d.type || "=" !== e && "<>" !== e ? {
                                vs: e,
                                value: d,
                                valueType: d.type
                            } : {
                                vs: e,
                                valueType: 3,
                                value: d,
                                yO: new RegExp(`^${d.value.replace(/[+^${}()|[\]\\]/g,"\\$&").replace(/((?!~).|^.{0})\?/g,
"$1.").replace(/((?!~).|^.{0})\*/g,"$1.*").replace(/~([?*])/g,"\\$1")}$`, "i")
                            }
                        }
                    },
                    Bwb = function(a, b, c) {
                        y(!a.AH.has(b.functionName), `Function ${b.functionName} is already registered`);
                        a.AH.set(b.functionName, new b(c))
                    },
                    Cwb = function(a) {
                        const b = (0, __c.zW)(() => Awb(a.Qga.Ed));
                        for (const c of Object.values(__c.rbb)) Bwb(a, c, b)
                    },
                    Ewb = function(a, b, c) {
                        a = a.toLocaleUpperCase();
                        if (!c.AH.has(a)) return {
                            type: 4,
                            value: 5
                        };
                        a = c.getFunction(a);
                        b = b.value.map(d => {
                            if (d.every(e => 8 !== e.type)) return Dwb(d, c);
                            FV(1 === d.length);
                            FV(8 ===
                                d[0].type);
                            return {
                                type: 8
                            }
                        });
                        return a.execute(b)
                    },
                    Dwb = function(a, b) {
                        v(0 < a.length);
                        const c = new __c.eab(a.length);
                        for (const d of a) switch (d.type) {
                            case 0:
                            case 1:
                            case 3:
                            case 2:
                            case 4:
                            case 5:
                            case 7:
                            case 8:
                                c.push(d);
                                break;
                            case 6:
                                a = c.pop();
                                if (7 !== a.type) throw Error();
                                c.push(Ewb(d.value, a, b));
                                break;
                            case 12:
                                a = c.pop();
                                const e = c.pop();
                                if (7 === e.type || 7 === a.type) throw Error();
                                if (8 === e.type || 8 === a.type) throw Error();
                                if (":" === d.value) throw Error();
                                c.push(mwb(d.value, e, a));
                                break;
                            case 10:
                            case 11:
                                a = c.pop();
                                if (7 === a.type) throw Error();
                                if (8 === a.type) throw Error();
                                c.push(lwb(d.value, a));
                                break;
                            default:
                                throw new D(d);
                        }
                        b = c.pop();
                        if (!c.isEmpty()) throw Error("missing operators");
                        if (7 === b.type || 8 === b.type) throw Error("missing function call");
                        return 5 !== b.type || b.size ? b : {
                            type: 4,
                            value: 3
                        }
                    },
                    Gwb = function(a) {
                        const b = new WeakMap;
                        return (c, d) => {
                            let e = b.get(c);
                            null == e && (e = new WeakMap, b.set(c, e));
                            let f = e.get(d);
                            null == f && (f = Fwb(() => a(c, d)), e.set(d, f));
                            return f
                        }
                    },
                    o5 = function(a) {
                        y(Object.keys({
                            dependenciesState_: 0
                        })[0] in a);
                        return a.dependenciesState_ ===
                            Hwb
                    },
                    Iwb = function() {
                        const a = [this];
                        for (; a.length;) {
                            const b = a.pop();
                            b.lowestObserverState_ !== p5 && (b.lowestObserverState_ = p5, b.observers_.forEach(c => {
                                if (c.dependenciesState_ === Hwb)
                                    if (c[q5] === q5) a.push(c);
                                    else c.onBecomeStale_();
                                c.dependenciesState_ = p5
                            }))
                        }
                    },
                    Fwb = function(a) {
                        a = Jwb(a, {
                            keepAlive: !0,
                            name: void 0
                        });
                        Object.defineProperty(a, q5, {
                            enumerable: !1,
                            writable: !1,
                            value: q5
                        });
                        a.onBecomeStale_ = Iwb;
                        return a
                    },
                    Kwb = function(a, b) {
                        return 2 !== __c.B(a.KI).getState(b)
                    },
                    Lwb = function(a, b, c) {
                        a = a.sM(b, c);
                        y(o5(a));
                        return a.get()
                    },
                    Nwb = function(a) {
                        a = new Mwb(a);
                        Cwb(a);
                        return a
                    },
                    Owb = function(a, b, c) {
                        a.na = [];
                        a.c1a = b.text;
                        a.dS = c.dS;
                        a.visit(b);
                        return a.na.sort((d, e) => d.offset - e.offset)
                    },
                    Pwb = function({
                        offset: a,
                        length: b,
                        text: c
                    }) {
                        return {
                            offset: a,
                            length: b,
                            text: c
                        }
                    },
                    Twb = function(a, b = Nwb(a)) {
                        return new Qwb(a, b, Rwb(c => __c.vbb(c)), Rwb(c => {
                            if (c = __c.ubb.JD(c)) {
                                var d;
                                (d = c.s.length) || (d = new Swb, d.visit(c), d = !!d.n1);
                                c = d ? {
                                    result: "syntax-error",
                                    suffix: c.s
                                } : {
                                    result: "success",
                                    tokens: __c.yW(c.value)
                                }
                            } else c = {
                                result: "error"
                            };
                            return c
                        }))
                    },
                    Xwb = function(a,
                        b, c) {
                        c = c.wG.slice(1).trim();
                        a = a.fja(c);
                        y("success" === a.result);
                        const d = {
                            qDa: new Map(Uwb(a.UR, b).map(e => [e.wO, e])),
                            sheet: b
                        };
                        return Vwb(a.UR, e => Wwb(e, d))
                    },
                    Zwb = function(a, b, c) {
                        const d = new Set,
                            e = [];
                        a = __c.hW(a.parse(b, c));
                        owb(a, f => {
                            15 === f.type && (f = Ywb(b, f.value), null != f && f.forEach(g => g.forEach(({
                                col: h,
                                Da: k
                            }) => {
                                h = __c.EV(b.cells, h, k);
                                null != h && null != h.content && (h = h.content, "formula" !== h.type || d.has(h.value) || (d.add(h.value), e.push([b, h.value])))
                            })))
                        });
                        return e
                    },
                    Uwb = function(a, b) {
                        const c = new Map;
                        var d = Owb(new $wb,
                            a, {
                                dS: !1
                            });
                        for (const k of d) {
                            d = a.text.substring(k.offset, k.offset + k.length);
                            var e = wW(d);
                            switch (e.type) {
                                case 0:
                                    var f = b.base.cg.cols.Hs(e.Dg);
                                    e = b.base.cg.rows.Hs(e.Pg);
                                    if (null != f && null != e) {
                                        const [l, m] = zwb(d);
                                        c.set(l, {
                                            type: 2,
                                            id: f.id,
                                            wO: l,
                                            bC: void 0,
                                            Te: void 0
                                        });
                                        c.set(m, {
                                            type: 1,
                                            id: e.id,
                                            wO: m,
                                            bC: void 0,
                                            Te: void 0
                                        })
                                    }
                                    break;
                                case 1:
                                    var g;
                                    f = null === (g = b.base.cg.cols.Hs(e.Dg)) || void 0 === g ? void 0 : g.id;
                                    null != f && (d = n5(d), c.set(d, {
                                        type: 2,
                                        id: f,
                                        wO: d,
                                        bC: void 0,
                                        Te: void 0
                                    }));
                                    break;
                                case 2:
                                    var h;
                                    f = null === (h = b.base.cg.rows.Hs(e.Pg)) ||
                                        void 0 === h ? void 0 : h.id;
                                    null != f && (d = n5(d), c.set(d, {
                                        type: 1,
                                        id: f,
                                        wO: d,
                                        bC: void 0,
                                        Te: void 0
                                    }));
                                    break;
                                case 3:
                                    break;
                                default:
                                    throw new D(e);
                            }
                        }
                        return [...c.values()].sort((k, l) => k.type === l.type ? k.id.localeCompare(l.id) : 2 === k.type ? -1 : 1)
                    },
                    Vwb = function(a, b) {
                        var c = 0;
                        const d = a.text;
                        let e = "";
                        var f = Owb(new $wb, a, {
                            dS: !0
                        });
                        for (const g of f) {
                            e += d.substring(c, g.offset);
                            if (0 === g.type) c = a.text.substring(g.offset, g.offset + g.length), e += b(c);
                            else if (1 === g.type) {
                                const [h, k] = g.text.split(":");
                                c = b(h);
                                f = b(k);
                                c = "#REF!" === c || "#REF!" ===
                                    f ? "#REF!" : [c, f].join(":");
                                e += c
                            } else throw new D(g);
                            c = g.offset + g.length
                        }
                        return e += d.substring(c)
                    },
                    Wwb = function(a, b) {
                        const c = wW(a);
                        var d = b.qDa;
                        b = b.sheet;
                        switch (c.type) {
                            case 0:
                                var e, f;
                                const [k, l] = zwb(a);
                                var g = null === (e = d.get(k)) || void 0 === e ? void 0 : e.id;
                                d = null === (f = d.get(l)) || void 0 === f ? void 0 : f.id;
                                if (null == g || null == d) return "#REF!";
                                f = b.Dba.get(g);
                                d = b.Gka.get(d);
                                if (null == f || null == d) return "#REF!";
                                f = b.vq(f);
                                b = b.xr(d);
                                return [c.sL ? "$" : "", __c.vW(f), c.JO ? "$" : "", String(b + 1)].join("");
                            case 1:
                                f = null === (g = d.get(n5(a))) ||
                                    void 0 === g ? void 0 : g.id;
                                if (!f) return "#REF!";
                                f = b.Dba.get(f);
                                if (null == f) return "#REF!";
                                b = b.vq(f);
                                return `${c.sL?"$":""}${__c.vW(b)}`;
                            case 2:
                                var h;
                                f = null === (h = d.get(n5(a))) || void 0 === h ? void 0 : h.id;
                                if (!f) return "#REF!";
                                f = b.Gka.get(f);
                                if (null == f) return "#REF!";
                                b = b.xr(f);
                                return `${c.JO?"$":""}${String(b+1)}`;
                            case 3:
                                return c.name;
                            default:
                                throw new D(c);
                        }
                    },
                    Ywb = function(a, b) {
                        let c, d, e;
                        switch (b.type) {
                            case 0:
                                c = b.Pg;
                                d = b.Dg;
                                b = e = 1;
                                break;
                            case 1:
                                c = b.Pg;
                                d = b.Dg;
                                e = b.height;
                                b = b.width;
                                break;
                            case 2:
                                c = b.Pg;
                                d = 0;
                                e = b.height;
                                b = a.cols.count();
                                break;
                            case 3:
                                c = 0;
                                d = b.Dg;
                                e = a.rows.count();
                                b = b.width;
                                break;
                            default:
                                throw new D(b);
                        }
                        const f = [];
                        for (let g = c; g < c + e; g++) {
                            const h = a.base.cg.rows.Hs(g);
                            if (!h) return;
                            const k = [];
                            f.push(k);
                            for (let l = d; l < d + b; l++) {
                                const m = a.base.cg.cols.Hs(l);
                                if (!m) return;
                                k.push({
                                    Da: h,
                                    col: m
                                })
                            }
                        }
                        return f
                    },
                    axb = class {
                        constructor(a) {
                            this.Qga = a
                        }
                    },
                    bxb = class {
                        gQ(a) {
                            const b = a.Tv;
                            this.mK(a.Aga);
                            b.forEach(([, c]) => this.mK(c))
                        }
                        mK(a) {
                            twb(this, a.Jia)
                        }
                        visit(a) {
                            switch (a.name) {
                                case "parenExpression":
                                    a.children.forEach(b => this.visit(b));
                                    break;
                                case "expression":
                                    this.gQ(l5(a));
                                    break;
                                case "term":
                                    this.mK(m5(a));
                                    break;
                                case "operand":
                                    twb(this, rwb(a));
                                    break;
                                case "functionCall":
                                    swb(this, qwb(a));
                                    break;
                                case "emptyArg":
                                case "functionArgs":
                                case "reference":
                                case "arrayLiteral":
                                case "arrayRow":
                                    break;
                                case "functionName":
                                case "errorLiteral":
                                case "booleanLiteral":
                                case "numberLiteral":
                                case "stringLiteral":
                                case "infixOperator":
                                case "prefixOperator":
                                case "postfixOperator":
                                case "openParenthesis":
                                case "closeParenthesis":
                                case "comma":
                                case "arrayLeftBrace":
                                case "arrayRightBrace":
                                case "arrayColumnSeparator":
                                case "arrayRowSeparator":
                                case void 0:
                                    a.children.forEach(b =>
                                        this.visit(b));
                                    break;
                                default:
                                    throw new D(a.name);
                            }
                        }
                    },
                    cxb = class extends bxb {},
                    dxb = a => {
                        if (0 === a.Tv.length) return !1;
                        if (":" === a.Tv[0][0] && 0 !== a.Aga.xja.length) return !0;
                        for (let b = 1; b < a.Tv.length; b++)
                            if (":" === a.Tv[b][0] && 0 !== a.Tv[b - 1][1].xja.length) return !0;
                        return !1
                    },
                    exb = a => {
                        if (0 === a.Tv.length) return !1;
                        for (let b = 0; b < a.Tv.length; b++)
                            if (":" === a.Tv[b][0] && 0 !== a.Tv[b][1].BCa.length) return !0;
                        return !1
                    },
                    Swb = class extends cxb {
                        gQ(a) {
                            this.n1 || (this.n1 = this.dTa.some(b => b(a)));
                            this.n1 || super.gQ(a)
                        }
                        constructor() {
                            super();
                            this.n1 = !1;
                            this.dTa = [dxb, exb]
                        }
                    },
                    fxb = class {
                        get Ed() {
                            var a;
                            const b = null !== (a = this.ZQa.get()) && void 0 !== a ? a : "en";
                            var c;
                            return null !== (c = __c.xbb[b]) && void 0 !== c ? c : "."
                        }
                        constructor(a, b) {
                            this.ZQa = a;
                            this.v7a = b
                        }
                    },
                    Mwb = class {
                        static A(a) {
                            __c.P(a, {
                                AH: __c.Cab.shallow,
                                qUa: __c.zW,
                                functions: __c.zW
                            })
                        }
                        getFunction(a) {
                            return __c.B(this.AH.get(a))
                        }
                        get qUa() {
                            return [...this.AH.keys()]
                        }
                        get functions() {
                            return [...this.AH.values()]
                        }
                        constructor(a) {
                            Mwb.A(this);
                            this.Qga = a;
                            this.AH = new Map
                        }
                    },
                    Jwb = __webpack_require__(42782).Fl;
                var Rwb = __webpack_require__(854928).kq;
                var q5 = Symbol("$iterativeComputed"),
                    Hwb = 0,
                    p5 = 2;
                var hxb = class {
                        evaluate(a, b) {
                            return this.u6a(a, b).get()
                        }
                        constructor(a, b) {
                            this.USa = a;
                            this.aWa = b;
                            this.u6a = Gwb((c, d) => {
                                y(null == this.KI);
                                this.KI = new gxb;
                                const e = [];
                                for (e.push([c, d]); e.length;) {
                                    const [g, h] = e[e.length - 1];
                                    var f = this.KI.getState(h);
                                    switch (f) {
                                        case 1:
                                            e.pop();
                                            f = this.sM(g, h);
                                            f.get();
                                            FV(o5(f));
                                            f = this.KI;
                                            y(f.VL.has(h));
                                            y(!f.AS.has(h));
                                            f.VL.delete(h);
                                            f.AS.add(h);
                                            break;
                                        case 2:
                                            e.pop();
                                            break;
                                        case 0:
                                            f = this.KI;
                                            y(!f.VL.has(h));
                                            y(!f.AS.has(h));
                                            f.VL.add(h);
                                            f = this.sM(g, h);
                                            if (o5(f)) continue;
                                            f = this.aWa(g, h);
                                            for (const k of f) e.push(k);
                                            break;
                                        default:
                                            throw new D(f);
                                    }
                                }
                                c = this.sM(c, d);
                                FV(o5(c));
                                FV(this.KI.CMa);
                                this.KI = void 0;
                                return c.get()
                            });
                            this.sM = Gwb((c, d) => this.USa(c, d, this))
                        }
                    },
                    gxb = class {
                        getState(a) {
                            return this.VL.has(a) ? (y(!this.AS.has(a)), 1) : this.AS.has(a) ? 2 : 0
                        }
                        get CMa() {
                            return 0 === this.VL.size
                        }
                        constructor() {
                            this.VL = new Set;
                            this.AS = new Set
                        }
                    };
                var $wb = class extends cxb {
                        gQ(a) {
                            const b = new ixb;
                            this.Tja.push(b);
                            this.mK(a.Aga);
                            for (const [c, d] of a.Tv) 1 === b.state && ":" === c ? b.advance() : b.reset(), this.mK(d);
                            this.Tja.pop()
                        }
                        mK(a) {
                            if (2 !== a.Jia.type) super.mK(a);
                            else {
                                var b = __c.B(this.c1a),
                                    c = __c.B(this.Tja.at(-1));
                                var d = a.Jia;
                                if (d.text.includes(":")) {
                                    const f = d.text.split(":");
                                    var e = {
                                        offset: d.offset,
                                        length: f[0].length,
                                        text: f[0],
                                        type: 0,
                                        reference: wW(f[0])
                                    };
                                    d = {
                                        offset: d.offset + f[0].length + 1,
                                        length: f[1].length,
                                        text: f[1],
                                        type: 0,
                                        reference: wW(f[1])
                                    };
                                    e = [e, d]
                                } else e = [{ ...Pwb(d),
                                    text: d.text,
                                    type: 0,
                                    reference: wW(d.text)
                                }];
                                this.na.push(...e);
                                2 === e.length ? (c.reset(), c.advance(), c.advance(), c.advance()) : (FV(1 === e.length), e = c.state, d = 0 !== a.xja.length, a = 0 !== a.BCa.length, 0 === e && !d || 2 === e && !a ? c.advance() : c.reset());
                                this.dS ? 3 === c.state && (FV(2 <= this.na.length), a = this.na.pop(), e = this.na.pop(), FV(1 !== e.type), FV(1 !== a.type), e.reference.type === a.reference.type ? (b = b.slice(e.offset, a.offset + a.length), this.na.push({
                                        type: 1,
                                        start: e,
                                        end: a,
                                        offset: e.offset,
                                        length: b.length,
                                        text: b
                                    })) :
                                    (0 === e.reference.type && this.na.push(e), 0 === a.reference.type && this.na.push(a)), c.reset()) : c.reset()
                            }
                        }
                        constructor() {
                            super();
                            this.na = [];
                            this.dS = !1;
                            this.Tja = []
                        }
                    },
                    ixb = class {
                        get state() {
                            return this.yF
                        }
                        advance() {
                            y(3 !== this.yF);
                            switch (this.yF) {
                                case 0:
                                    this.yF = 1;
                                    break;
                                case 1:
                                    this.yF = 2;
                                    break;
                                case 2:
                                    this.yF = 3;
                                    break;
                                default:
                                    throw new D(this.yF);
                            }
                        }
                        reset() {
                            this.yF = 0
                        }
                        constructor() {
                            this.yF = 0
                        }
                    };
                var Qwb = class {
                    UY(a) {
                        switch ((void 0).type) {
                            case "invalid":
                                return;
                            case "canonical":
                                var b = (void 0).wG.slice(1).trim();
                                break;
                            default:
                                throw new D;
                        }
                        b = this.fja(b);
                        y("success" === b.result);
                        const c = {
                                qDa: new Map(Uwb(b.UR, a).map(e => [e.wO, e])),
                                sheet: a
                            },
                            d = Vwb(b.UR, e => {
                                e = Wwb(e, c);
                                if ("#REF!" !== e) a: switch (e = wW(e), e.type) {
                                    case 0:
                                        var f = e.Pg + (e.JO ? 0 : (void 0).CE);
                                        const g = e.Dg + (e.sL ? 0 : (void 0).SU);
                                        e = 0 > f || 0 > g || f >= a.rows.count() || g >= a.cols.count() ? "#REF!" : [e.sL ? "$" : "", __c.vW(g), e.JO ? "$" : "", String(f + 1)].join("");
                                        break a;
                                    case 1:
                                        f = e.Dg + (e.sL ? 0 : (void 0).SU);
                                        e = 0 <= f && f < a.cols.count() ? `${e.sL?"$":""}${__c.vW(f)}` : "#REF!";
                                        break a;
                                    case 2:
                                        f = e.Pg + (e.JO ? 0 : (void 0).CE);
                                        e = 0 <= f && f < a.rows.count() ? `${e.JO?"$":""}${String(f+1)}` : "#REF!";
                                        break a;
                                    case 3:
                                        e = e.name;
                                        break a;
                                    default:
                                        throw new D(e);
                                }
                                return e
                            });
                        b = this.fja(d);
                        if ("success" !== b.result) throw Error();
                        return {
                            type: "canonical",
                            wG: "=" + d
                        }
                    }
                    evaluate(a, b) {
                        return this.PSa.evaluate(a, b)
                    }
                    sM(a, b, c) {
                        b = __c.hW(this.parse(a, b)).map(d => nwb(d, {
                            zka: e => this.zka(a, e, c)
                        }));
                        b = Dwb(b, this.q1);
                        return 5 ===
                            b.type ? b.value[0][0] : b
                    }
                    parse(a, b) {
                        switch (b.type) {
                            case "invalid":
                                return [{
                                    type: 4,
                                    value: 7
                                }];
                            case "canonical":
                                break;
                            default:
                                throw new D(b);
                        }
                        a = Xwb(this, a, b);
                        a = this.G1a(a);
                        switch (a.result) {
                            case "success":
                                return a.tokens;
                            case "syntax-error":
                                return [{
                                    type: 4,
                                    value: 7
                                }];
                            case "error":
                                return [{
                                    type: 4,
                                    value: 7
                                }];
                            default:
                                throw new D(a);
                        }
                    }
                    zka(a, b, c) {
                        b = Ywb(a, b);
                        if (null == b) return {
                            type: 4,
                            value: 4
                        };
                        const d = b.map(e => e.map(({
                            col: f,
                            Da: g
                        }) => {
                            g = __c.EV(a.cells, f, g);
                            if (null == g) return {
                                type: 0,
                                Ca: void 0
                            };
                            f = g.content;
                            g = g.Ca;
                            if (null ==
                                f) return {
                                type: 0,
                                Ca: g
                            };
                            switch (f.type) {
                                case "formula":
                                    return Kwb(c, f.value) ? {
                                        type: 4,
                                        value: 4
                                    } : Lwb(c, a, f.value);
                                case "boolean":
                                    return __c.KV(f.value, g);
                                case "number":
                                    return __c.JV(f.value, g);
                                case "plaintext":
                                    return __c.IV(f.value, g);
                                case "media":
                                    return {
                                        type: 0,
                                        Ca: void 0
                                    };
                                case "text2":
                                    return __c.IV(f.value.ba, g);
                                case "text3":
                                    let h = "";
                                    f.value.forEach({
                                        ba: k => h += k,
                                        item: () => {}
                                    });
                                    return __c.IV(h, g);
                                default:
                                    throw new D(f);
                            }
                        }));
                        return __c.AW(d, {
                            rows: b.length,
                            cols: b[0].length
                        })
                    }
                    constructor(a, b, c, d) {
                        this.Qga = a;
                        this.q1 = b;
                        this.fja = c;
                        this.G1a = d;
                        this.PSa = new hxb((e, f, g) => this.sM(e, f, g), (e, f) => Zwb(this, e, f))
                    }
                };
                __c.Eka = {
                    BWa: function(a) {
                        var b;
                        const c = new fxb(Jwb(() => a.document.language), null !== (b = a.v7a) && void 0 !== b ? b : "en");
                        b = Nwb(c);
                        return {
                            Am: Twb(c, b),
                            q1: b,
                            zva: new axb(c)
                        }
                    }
                };
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/e9e84e2d604b70e9.js.map