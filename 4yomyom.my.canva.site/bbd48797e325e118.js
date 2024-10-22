(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [3369], {

        /***/
        365119: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var AW;
                var N = __c.N;
                var YV;
                var rW;
                var qW;
                var pW;
                var lW;
                var eW;
                var dW;
                var OV;
                var FV;
                var KV;
                var JV;
                var IV;
                var v = __c.v;
                var HV;
                var D = __c.D;
                var GV, F$a, J$a, G$a, H$a, I$a, LV, L$a, MV, NV, P$a, QV, RV, TV, SV, S$a, T$a, U$a, V$a, UV, W$a, VV, WV, X$a, Y$a, Z$a, $$a, aab, $V, bab, bW, cW, fW, cab, dab, fab, gW, iW, jW, kW, gab, hab, sW, tW, uW, xab, yab, zab, xW, Aab, Bab;
                __c.EV = function(a, b, c) {
                    a = a.gba(b, c);
                    if (a.span.Qc === b && a.span.Rc === c) return a
                };
                FV = __c.FV = function(a, b) {
                    if (!a) throw Error(b);
                };
                GV = function(a) {
                    return 1 === a.type || 4 === a.type
                };
                F$a = function(a, b) {
                    if (a.type !== b.type) throw Error("Token types do not match");
                };
                HV = __c.HV = function(a, b) {
                    switch (b) {
                        case 3:
                            return G$a(a);
                        case 1:
                            return H$a(a);
                        case 2:
                            return I$a(a);
                        default:
                            throw new D(b);
                    }
                };
                J$a = function(a, b) {
                    a = HV(a, b);
                    v(4 !== a.type);
                    return a
                };
                G$a = function(a) {
                    switch (a.type) {
                        case 0:
                            return IV("", a.Ca);
                        case 1:
                            return IV(a.value.toString(), a.Ca);
                        case 2:
                            return IV(a.value ? "TRUE" : "FALSE", a.Ca);
                        case 3:
                            return a;
                        default:
                            throw new D(a);
                    }
                };
                H$a = function(a) {
                    switch (a.type) {
                        case 0:
                            return JV(0, a.Ca);
                        case 1:
                            return a;
                        case 2:
                            return JV(a.value ? 1 : 0, a.Ca);
                        case 3:
                            return K$a.test(a.value) ? JV(parseFloat(a.value), a.Ca) : {
                                type: 4,
                                value: 3
                            };
                        default:
                            throw new D(a);
                    }
                };
                I$a = function(a) {
                    switch (a.type) {
                        case 0:
                            return KV(!1, a.Ca);
                        case 1:
                            return KV(0 !== a.value, a.Ca);
                        case 2:
                            return a;
                        case 3:
                            return /^(?:TRUE|FALSE)$/i.test(a.value) ? KV("TRUE" === a.value.toUpperCase(), a.Ca) : {
                                type: 4,
                                value: 3
                            };
                        default:
                            throw new D(a);
                    }
                };
                LV = function(a, b, c, d) {
                    for (const e of a) {
                        if (5 === e.type) {
                            a = L$a(e, b, c, {
                                filter: d.Mu
                            });
                            if (!a.Sb) return a;
                            c = a.result
                        } else c = b(c, e);
                        if (a = d.Tu(c)) return {
                            Sb: !1,
                            result: a
                        }
                    }
                    return {
                        Sb: !0,
                        result: c
                    }
                };
                L$a = function(a, b, c, d = {}) {
                    if (!a.size) return {
                        Sb: !1,
                        result: {
                            type: 4,
                            value: 3
                        }
                    };
                    a = a.value.flat();
                    for (const e of a)
                        if (!d.filter || d.filter(e)) c = b(c, e);
                    return {
                        Sb: !0,
                        result: c
                    }
                };
                MV = function(a, b, c) {
                    b = HV(b, 1);
                    c = HV(c, 1);
                    return 4 === b.type ? b : 4 === c.type ? c : "/" === a && 0 === c.value ? {
                        type: 4,
                        value: 2
                    } : JV(M$a[a](b.value, c.value), N$a[a](b.Ca, c.Ca))
                };
                OV = __c.OV = function(a, b, c) {
                    if (4 === b.type) return b;
                    if (4 === c.type) return c;
                    switch (a) {
                        case "+":
                        case "-":
                        case "*":
                        case "/":
                        case "^":
                            return MV(a, b, c);
                        case ">":
                        case "<":
                        case ">=":
                        case "<=":
                        case "=":
                        case "<>":
                            return NV(a, b, c);
                        case "&":
                            return a = HV(b, 3), c = HV(c, 3), IV(a.value + c.value);
                        default:
                            throw new D(a);
                    }
                };
                NV = function(a, b, c) {
                    if (b.type === c.type) switch (b.type) {
                        case 0:
                            return KV(!0);
                        case 1:
                            return FV(b.type === c.type), KV(PV[a](b.value, c.value));
                        case 3:
                            return FV(b.type === c.type), KV(PV[a](b.value.localeCompare(c.value, void 0, {
                                sensitivity: "accent"
                            }), 0));
                        case 2:
                            FV(b.type === c.type);
                            var d = HV(b, 1);
                            c = HV(c, 1);
                            return KV(PV[a](d.value, c.value));
                        default:
                            throw new D(b);
                    } else return 0 === b.type || 0 === c.type ? (0 === b.type ? (FV(0 !== c.type), d = HV(b, c.type)) : (FV(0 === c.type), d = b, c = HV(c, b.type)), NV(a, d, c)) : KV(PV[a](O$a[b.type], O$a[c.type]))
                };
                P$a = function(a, b) {
                    b = a.a2a(b);
                    return b.Sb ? {
                        Sb: a.qv(b.value),
                        value: b.value
                    } : b
                };
                QV = function(a, b, c) {
                    return new Q$a(a, b, c)
                };
                RV = function(a, b) {
                    return new R$a(a, b)
                };
                TV = function(a, b) {
                    var c = !1,
                        d = !1,
                        e = !1;
                    for (var f of b) switch (f.type) {
                        case 0:
                            v(!d && !c && !e);
                            break;
                        case 1:
                            v(!c && !e);
                            d = !0;
                            break;
                        case 3:
                            v(!d && !c && !e);
                            c = !0;
                            break;
                        case 2:
                            v(!d && !c && !e);
                            e = !0;
                            break;
                        default:
                            throw new D(f.type);
                    }
                    c = a.length;
                    e = d = 0;
                    f = !1;
                    for (var g of b) d += g.arity.min, e += g.arity.max, f || (f = g.arity.V2);
                    if (c < d || c > e || c !== d && c !== e && f && 0 !== (c - d) % 2) return SV(7);
                    a = a.slice();
                    g = [];
                    for (var h of b) {
                        if (!h.vG(a)) return SV(7);
                        b = h.consume(a);
                        if (!b.Sb) return h = b.value, 8 === h.type ? SV(7) : 4 === h.type ? SV(h.value) : SV(3);
                        g.push(b.value)
                    }
                    return {
                        Sb: !0,
                        value: g
                    }
                };
                SV = function(a) {
                    return {
                        Sb: !1,
                        value: {
                            type: 4,
                            value: a
                        }
                    }
                };
                S$a = function(a) {
                    return (b, c) => {
                        if (null == b) return c;
                        switch (a) {
                            case "AND":
                                return KV(b.value && c.value);
                            case "OR":
                                return KV(b.value || c.value);
                            default:
                                throw new D(a);
                        }
                    }
                };
                T$a = function(a, b, c) {
                    return UV(c, a, {
                        fn: (d, e) => 3 === e.type ? d : OV("+", d, e),
                        initialValue: JV(0)
                    }, b)
                };
                U$a = function(a, b) {
                    a = UV(b, a, {
                        fn: c => ++c,
                        initialValue: 0
                    });
                    return "number" === typeof a ? JV(a) : a
                };
                V$a = function(a, b, c) {
                    a = UV(c, a, {
                        fn: (f, g) => {
                            if (3 === g.type) return f;
                            const [h, k] = f;
                            f = OV("+", h, JV(1));
                            g = OV("+", k, g);
                            return [f, g]
                        },
                        initialValue: [JV(0), JV(0)]
                    }, b);
                    if (!Array.isArray(a)) return {
                        type: 4,
                        value: 2
                    };
                    const [d, e] = a;
                    return OV("/", e, d)
                };
                UV = function(a, b, c, d = b[0][0]) {
                    const e = new Map;
                    for (const [g, h] of b) {
                        if (null == d.size || null == g.size || d.size.rows !== g.size.rows || d.size.cols !== g.size.cols) return {
                            type: 4,
                            value: 3
                        };
                        a: switch (h.type) {
                            case 3:
                                var f = a(h.value);
                                break a;
                            case 1:
                            case 2:
                            case 4:
                                f = {
                                    vs: "=",
                                    valueType: h.type,
                                    value: h
                                };
                                break a;
                            case 0:
                                f = {
                                    vs: "=",
                                    valueType: 0,
                                    value: JV(0)
                                };
                                break a;
                            default:
                                throw new D(h);
                        }
                        const k = f;
                        g.value.flat().forEach((l, m) => {
                            var n;
                            W$a(k, l) && e.set(m, (null !== (n = e.get(m)) && void 0 !== n ? n : 0) + 1)
                        })
                    }
                    return d.value.flat().filter((g,
                        h) => e.get(h) === b.length).reduce(c.fn, c.initialValue)
                };
                W$a = function(a, b) {
                    const c = a.value;
                    if (0 === a.valueType && 3 === b.type) return b = HV(b, 1), 1 === b.type && W$a(a, b);
                    if (b.type !== c.type) return "<>" === a.vs;
                    if (1 === b.type) return F$a(c, b), NV(a.vs, b, c).value;
                    if (4 === b.type) return F$a(c, b), KV(PV[a.vs](b.value, c.value)).value;
                    if (4 === c.type) throw Error("Unexpected error token");
                    return 3 === b.type && VV(a) && WV(a, b.value) ? !0 : NV(a.vs, b, c).value
                };
                VV = function(a) {
                    return 3 === a.valueType && ("=" === a.vs || "<>" === a.vs) && void 0 !== (null === a || void 0 === a ? void 0 : a.yO)
                };
                WV = function(a, b) {
                    return "=" === a.vs && a.yO.test(b) || "<>" === a.vs && !a.yO.test(b)
                };
                X$a = function(a, b, c, d, e) {
                    c = c.value;
                    a = XV(a);
                    if (0 === a.type) return {
                        type: 4,
                        value: 7
                    };
                    if (null == b.size || c > b.size.cols) return {
                        type: 4,
                        value: 4
                    };
                    let f;
                    for (let h = 0; h !== b.value.length; h++) {
                        const k = b.value[h];
                        var g = k[0];
                        if (0 !== g.type && 4 !== g.type && g.type === a.type)
                            if (d ? d.value : 1)
                                if (g = OV("<=", g, a), 2 === g.type && g.value) f = k[c - 1];
                                else {
                                    if (f) break
                                }
                        else {
                            if (3 === a.type && 3 === g.type) {
                                const l = e(`=${a.value}`);
                                if (VV(l) && WV(l, g.value)) return k[c - 1]
                            }
                            g = OV("=", g, a);
                            if (2 === g.type && g.value) return k[c - 1]
                        }
                    }
                    return void 0 !== f ? f : {
                        type: 4,
                        value: 7
                    }
                };
                Y$a = function(a) {
                    var b;
                    return Math.floor(null !== (b = null === a || void 0 === a ? void 0 : a.value) && void 0 !== b ? b : 0) - 1
                };
                Z$a = function(a, b) {
                    return VV(a) && "=" === a.vs ? b.findIndex(c => 3 === c.type && WV(a, c.value)) : -1
                };
                $$a = function(a, b, c, d) {
                    let e = -1,
                        f;
                    for (let g = 0; g < b.length; g++) {
                        const h = b[g];
                        h.type === a.type && NV(c, h, a).value && (null == f || NV(d, f, h).value) && (f = h, e = g)
                    }
                    return e
                };
                aab = function(a) {
                    const b = 5 === a[0].type ? a[0].size : null;
                    return b ? a.every(c => {
                        var d, e;
                        return 5 === c.type && (null === (d = c.size) || void 0 === d ? void 0 : d.cols) === b.cols && (null === (e = c.size) || void 0 === e ? void 0 : e.rows) === b.rows
                    }) : !1
                };
                YV = __c.YV = function(a, b) {
                    a = a(b);
                    return !!a && !a.s
                };
                $V = function(a) {
                    return b => {
                        const c = a.exec(b);
                        if (c) {
                            var d = c[0].length;
                            return {
                                s: b.substring(d),
                                value: c[0],
                                length: d,
                                children: ZV
                            }
                        }
                    }
                };
                bab = function(a) {
                    return b => {
                        const c = a(b);
                        return c ? c : {
                            s: b,
                            value: void 0,
                            length: 0,
                            children: ZV
                        }
                    }
                };
                __c.aW = function(a) {
                    return b => {
                        if (a(b)) return {
                            s: b,
                            value: b,
                            length: 0,
                            children: ZV
                        }
                    }
                };
                bW = function(a) {
                    return b => {
                        if (!a(b)) return {
                            s: b,
                            value: b,
                            length: 0,
                            children: ZV
                        }
                    }
                };
                cW = function(a) {
                    return b => {
                        const c = [],
                            d = [];
                        let e = 0;
                        if ("" === b) return {
                            s: b,
                            value: c,
                            length: e,
                            children: d
                        };
                        for (;;) {
                            const f = a(b);
                            if (!f || f.s === b) return {
                                s: b,
                                value: c,
                                length: e,
                                children: d
                            };
                            c.push(f.value);
                            b = f.s;
                            e += f.length;
                            d.push({
                                length: f.length,
                                children: f.children,
                                name: f.name,
                                error: f.error
                            })
                        }
                    }
                };
                dW = __c.dW = function(a, ...b) {
                    return c => {
                        const d = [],
                            e = [];
                        let f = 0;
                        for (const g of b) {
                            const h = g(c);
                            if (!h) return;
                            c = h.s;
                            f += h.length;
                            d.push(h.value);
                            e.push({
                                length: h.length,
                                children: h.children,
                                name: h.name,
                                error: h.error
                            })
                        }
                        return {
                            s: c,
                            value: a(...d),
                            length: f,
                            children: e
                        }
                    }
                };
                eW = __c.eW = function(...a) {
                    return b => {
                        for (const c of a) {
                            const d = c(b);
                            if (d) return d
                        }
                    }
                };
                fW = function(a, b) {
                    const c = d => (d = b(d)) ? { ...d,
                        name: a
                    } : d;
                    c.G3a = a;
                    return c
                };
                cab = function(a) {
                    const b = (c, d, e) => {
                        const f = [];
                        for (const g of c) f.push({ ...g,
                            offset: d,
                            children: b(g.children, d, e),
                            text: e.substring(d, d + g.length)
                        }), d += g.length;
                        return f
                    };
                    return c => {
                        const d = a(c);
                        return d ? { ...d,
                            offset: 0,
                            children: b(d.children, 0, c),
                            text: d.s.length ? c.slice(0, -d.s.length) : c
                        } : d
                    }
                };
                dab = function(a, b) {
                    const c = d => {
                        const e = [];
                        for (const f of d) b(f) && e.push({ ...f,
                            children: c(f.children)
                        });
                        return e
                    };
                    return d => (d = a(d)) ? { ...d,
                        children: c(d.children)
                    } : d
                };
                __c.hW = function(a) {
                    v(0 < a.length);
                    const b = new __c.eab(a.length);
                    for (const d of a) switch (d.type) {
                        case 9:
                            0 === d.value.type ? b.push(gW(d)) : 3 === d.value.type ? b.push({
                                type: 4,
                                value: 5
                            }) : b.push(d);
                            break;
                        case 12:
                            switch (d.value) {
                                case ":":
                                    a = b.pop();
                                    var c = b.pop();
                                    b.push(fab(c, a));
                                    break;
                                case "+":
                                case "-":
                                case "*":
                                case "/":
                                case "^":
                                case "=":
                                case ">":
                                case "<":
                                case ">=":
                                case "<=":
                                case "<>":
                                case "&":
                                    a = b.pop();
                                    c = b.pop();
                                    9 === c.type && FV(0 !== c.value.type);
                                    9 === a.type && FV(0 !== a.value.type);
                                    b.push(c);
                                    b.push(a);
                                    b.push(d);
                                    break;
                                default:
                                    throw new D(d);
                            }
                            break;
                        case 7:
                            b.push({
                                type: 7,
                                value: d.value.map(__c.hW)
                            });
                            break;
                        case 0:
                        case 6:
                        case 8:
                        case 10:
                        case 11:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            b.push(d);
                            break;
                        default:
                            throw new D(d);
                    }
                    return b.map(d => 9 === d.type ? (FV(1 === d.value.type), {
                        type: 4,
                        value: 5
                    }) : d)
                };
                fab = function(a, b) {
                    if (9 !== a.type && 15 !== a.type || 9 !== b.type && 15 !== b.type) return 4 === a.type ? a : 4 === b.type ? 9 === a.type && 1 === a.value.type ? {
                        type: 4,
                        value: 5
                    } : b : {
                        type: 4,
                        value: 7
                    };
                    if (a.type === b.type) switch (a.type) {
                        case 9:
                            FV(a.type === b.type);
                            if (a.value.type !== b.value.type) throw Error();
                            return iW(gW(a), gW(b));
                        case 15:
                            return FV(a.type === b.type), iW(a, b);
                        default:
                            throw new D(a);
                    }
                    const c = 9 === a.type ? a : b;
                    a = 15 === a.type ? a : b;
                    FV(9 === c.type);
                    FV(15 === a.type);
                    if (0 !== c.value.type) throw Error();
                    return iW(a, gW(c))
                };
                gW = function(a) {
                    switch (a.value.type) {
                        case 1:
                            return {
                                type: 15,
                                value: {
                                    type: 3,
                                    Dg: a.value.Dg,
                                    width: 1
                                }
                            };
                        case 2:
                            return {
                                type: 15,
                                value: {
                                    type: 2,
                                    Pg: a.value.Pg,
                                    height: 1
                                }
                            };
                        case 0:
                            return {
                                type: 15,
                                value: {
                                    type: 0,
                                    Dg: a.value.Dg,
                                    Pg: a.value.Pg
                                }
                            };
                        case 3:
                            throw Error();
                        default:
                            throw new D(a.value);
                    }
                };
                iW = function(a, b) {
                    a = a.value;
                    b = b.value;
                    if (2 === a.type && 3 === b.type || 3 === a.type && 2 === b.type) throw Error();
                    const c = Math.min(jW(a), jW(b)),
                        d = Math.max(jW(a) + gab(a), jW(b) + gab(b)),
                        e = Math.min(kW(a), kW(b)),
                        f = Math.max(kW(a) + hab(a), kW(b) + hab(b));
                    if (2 === a.type || 2 === b.type) return FV(Number.isFinite(c) && Number.isFinite(d)), {
                        type: 15,
                        value: {
                            type: 2,
                            Pg: c,
                            height: d - c
                        }
                    };
                    if (3 === a.type || 3 === b.type) return FV(Number.isFinite(e) && Number.isFinite(f)), {
                        type: 15,
                        value: {
                            type: 3,
                            Dg: e,
                            width: f - e
                        }
                    };
                    if (1 === a.type || 0 === a.type || 1 === b.type ||
                        0 === b.type) return FV(Number.isFinite(c) && Number.isFinite(d)), FV(Number.isFinite(e) && Number.isFinite(f)), {
                        type: 15,
                        value: {
                            type: 1,
                            Dg: e,
                            Pg: c,
                            width: f - e,
                            height: d - c
                        }
                    };
                    throw new D(a);
                };
                jW = function(a) {
                    switch (a.type) {
                        case 0:
                        case 1:
                        case 2:
                            return a.Pg;
                        case 3:
                            return -Infinity;
                        default:
                            throw new D(a);
                    }
                };
                kW = function(a) {
                    switch (a.type) {
                        case 0:
                        case 1:
                        case 3:
                            return a.Dg;
                        case 2:
                            return -Infinity;
                        default:
                            throw new D(a);
                    }
                };
                gab = function(a) {
                    switch (a.type) {
                        case 0:
                            return 1;
                        case 1:
                        case 2:
                            return a.height;
                        case 3:
                            return Infinity;
                        default:
                            throw new D(a);
                    }
                };
                hab = function(a) {
                    switch (a.type) {
                        case 0:
                            return 1;
                        case 1:
                        case 3:
                            return a.width;
                        case 2:
                            return Infinity;
                        default:
                            throw new D(a);
                    }
                };
                __c.jab = function(a) {
                    const b = $V(new RegExp(`^(?:\\${a}\\d+|\\d+(?:\\${a}\\d*)?)(?:[eE][-+]?\\d+)?`));
                    return {
                        j7a: b,
                        qAa: dW("." === a ? parseFloat : c => parseFloat(c.replace(",", ".")), dW((c, d) => `${null!==c&&void 0!==c?c:""}${d}`, bab(iab), b))
                    }
                };
                sW = function(a, b) {
                    const c = a.zoa,
                        d = a.Toa,
                        e = a.Ioa,
                        f = a.apa,
                        g = a.woa,
                        h = a.voa;
                    let k, l;
                    b.lda ? (k = (I, K) => J => {
                        const O = I(J);
                        return O ? O : K(J)
                    }, l = I => k(I, K => ({
                        s: K,
                        value: void 0,
                        length: 0,
                        children: [],
                        name: I.G3a,
                        error: !0
                    }))) : (k = I => I, l = I => I);
                    var m = b.Pga.Ed;
                    const {
                        qAa: n,
                        j7a: p
                    } = __c.jab(m);
                    a = eW($V(/^[+]/), dW(I => I, iab, bW(p)));
                    const q = fW("comma", "." === m ? kab : lab),
                        r = (I, K) => cW(dW((J, O, R) => R, I, lW, K, lW)),
                        t = [];
                    var u = (I, K) => {
                        const J = fW(I, K);
                        return O => {
                            try {
                                return t.push(I), J(O)
                            } finally {
                                t.pop()
                            }
                        }
                    };
                    b = u("parenExpression", I => dW((K, J,
                        O) => O, fW("openParenthesis", mab), lW, H, lW, fW("closeParenthesis", l(mW)))(I));
                    const w = I => eW(fW("emptyArg", dW(() => h(), __c.aW(eW(mW, q)))), H)(I),
                        x = u("functionCall", dW((I, K, J, O, R) => c(I, null !== R && void 0 !== R ? R : []), fW("functionName", nW), lW, fW("openParenthesis", mab), lW, fW("functionArgs", bab(I => dW((K, J, O, R) => [J, ...R], bW(mW), w, lW, r(q, w))(I))), lW, fW("closeParenthesis", l(mW)))),
                        z = fW("reference", dW((I, K) => K, bW(__c.oW), eW(dW(([I, K]) => d([`${I}${K}`]), pW), dW(I => d([I]), nW), dW(I => d([I]), qW), dW((I, K, J) => d([I, J]), rW, nab,
                            rW))));
                    var A = dW((I, K) => K, oab, __c.pab, l(oab));
                    A = eW(fW("errorLiteral", __c.qab), fW("booleanLiteral", __c.oW), fW("numberLiteral", n), fW("stringLiteral", A));
                    const C = fW("arrayColumnSeparator", "." === m ? kab : rab);
                    m = fW("arrayRowSeparator", lab);
                    const F = k(A, I => {
                        var K = t.at(-1);
                        FV("arrayRow" === K);
                        var J;
                        K = null === (J = I.match(/^[^ "\\,;}]*/)) || void 0 === J ? void 0 : J[0];
                        FV(null != K);
                        return {
                            s: I.slice(K.length),
                            value: void 0,
                            length: K.length,
                            children: [],
                            error: !0
                        }
                    });
                    u = u("arrayRow", dW((I, K, J) => [I, ...J], F, lW, r(l(C), F)));
                    u = fW("arrayLiteral",
                        dW((I, K, J, O, R) => [J, ...R], fW("arrayLeftBrace", sab), lW, u, lW, r(m, u), fW("arrayRightBrace", l(tab))));
                    b = fW("operand", k(eW(dW(I => e({
                        type: 0,
                        value: I
                    }), b), dW(I => e({
                        type: 1,
                        value: I
                    }), x), dW(I => e({
                        type: 2,
                        value: I
                    }), z), dW(I => e({
                        type: 3,
                        value: I
                    }), eW(A, u))), I => {
                        var K = t.at(-1);
                        FV("arrayRow" !== K);
                        var J;
                        switch (K) {
                            case void 0:
                                K = null === (J = I.match(/^[^ \-+*/:%^<>=&"(),;{}]*[}),;]*/)) || void 0 === J ? void 0 : J[0];
                                break;
                            case "parenExpression":
                                var O;
                                K = null === (O = I.match(/^[^ \-+*/:%^<>=&"(),;{}]*[},;]*/)) || void 0 === O ? void 0 : O[0];
                                break;
                            case "functionCall":
                                var R;
                                K = null === (R = I.match(/^[^ \-+*/:%^<>=&"(),;{}]*[}]*/)) || void 0 === R ? void 0 : R[0];
                                break;
                            default:
                                throw new D(K);
                        }
                        FV(null != K);
                        J = K;
                        return {
                            s: I.slice(J.length),
                            value: void 0,
                            length: J.length,
                            children: [{
                                length: J.length,
                                children: [],
                                name: "errorLiteral",
                                error: !0
                            }],
                            name: "operand",
                            error: !0
                        }
                    }));
                    a = fW("term", dW((I, K, J, O) => f(I, K, O), cW(dW(I => I, fW("prefixOperator", a), lW)), b, lW, cW(dW(I => I, fW("postfixOperator", uab), lW))));
                    const H = fW("expression", dW((I, K, J) => g(I, J), a, lW, cW(dW((I, K, J) => [I, J],
                        l(fW("infixOperator", vab)), lW, a, lW))));
                    return {
                        JD: wab(H)
                    }
                };
                tW = function(a) {
                    v(YV(rW, a));
                    const b = a.replace("$", "");
                    return {
                        Pg: parseInt(b, 10) - 1,
                        JO: a.startsWith("$")
                    }
                };
                uW = function(a) {
                    return {
                        Dg: xab(a),
                        sL: a.startsWith("$")
                    }
                };
                xab = function(a) {
                    v(YV(qW, a), a);
                    return a.replace("$", "").split("").reduce((b, c) => 26 * b + parseInt(c, 36) - 9, 0) - 1
                };
                __c.vW = function(a) {
                    a += 1;
                    let b = "";
                    do b = String.fromCharCode((a - 1) % 26 + 65) + b, a = Math.floor((a - 1) / 26); while (0 < a);
                    return b
                };
                yab = function(a) {
                    v(YV(pW, a));
                    const [b, c] = pW(a).value;
                    return { ...tW(c),
                        ...uW(b)
                    }
                };
                __c.wW = function(a) {
                    if (YV(pW, a)) return {
                        type: 0,
                        ...yab(a)
                    };
                    if (YV(qW, a)) return {
                        type: 1,
                        ...uW(a)
                    };
                    if (YV(rW, a)) return {
                        type: 2,
                        ...tW(a)
                    };
                    if (YV(nW, a)) return {
                        type: 3,
                        name: a
                    };
                    v(!1)
                };
                zab = function(a) {
                    switch (typeof a) {
                        case "boolean":
                            return KV(a);
                        case "number":
                            return JV(a);
                        case "string":
                            return IV(a);
                        case "object":
                            return {
                                type: 4,
                                value: a.type
                            };
                        default:
                            throw Error();
                    }
                };
                xW = function(a) {
                    const b = {
                        ":": 6,
                        "u-": 5,
                        "u+": 5,
                        "u%": 5,
                        "^": 4,
                        "*": 3,
                        "/": 3,
                        "+": 2,
                        "-": 2,
                        "&": 1,
                        "=": 0,
                        "<": 0,
                        ">": 0,
                        "<=": 0,
                        ">=": 0,
                        "<>": 0
                    };
                    switch (a.type) {
                        case 10:
                        case 11:
                            return b[`u${a.value}`];
                        case 12:
                            return b[a.value];
                        default:
                            throw new D(a);
                    }
                };
                __c.yW = function(a) {
                    const b = [],
                        c = [];
                    for (const d of a) switch (d.type) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 9:
                        case 6:
                        case 8:
                            b.push(d);
                            break;
                        case 7:
                            b.push({
                                type: 7,
                                value: d.value.map(__c.yW)
                            });
                            break;
                        case 10:
                        case 11:
                        case 12:
                            for (; c.length && 13 !== c.at(-1).type && (xW(c.at(-1)) > xW(d) || xW(c.at(-1)) === xW(d) && "left" === (10 === d.type ? "right" : "left"));) a = c.pop(), FV(13 !== a.type), b.push(a);
                            c.push(d);
                            break;
                        case 13:
                            c.push(d);
                            break;
                        case 14:
                            for (; c.length && 13 !== c.at(-1).type;) a = c.pop(), FV(13 !== a.type), b.push(a);
                            FV(0 <
                                c.length);
                            a = c.pop();
                            FV(13 === a.type);
                            break;
                        default:
                            throw new D(d);
                    }
                    FV(c.every(d => 13 !== d.type));
                    b.push(...c.reverse());
                    return b
                };
                Aab = function(a) {
                    const b = a[0].length;
                    if (!a.some(c => c.length !== b)) return {
                        rows: a.length,
                        cols: b
                    }
                };
                __c.MP.prototype.Hs = __c.ea(8, function(a) {
                    return (a = this.wm[a]) && a.value
                });
                Bab = __webpack_require__(42782);
                __c.zW = Bab.Fl;
                __c.Cab = Bab.LO;
                var Dab;
                Dab = {
                    "#REF!": 4,
                    "#DIV/0!": 2,
                    "#N/A": 7,
                    "#NAME?": 5,
                    "#NULL!": 1,
                    "#NUM!": 6,
                    "#VALUE!": 3
                };
                __c.Eab = Object.fromEntries(Object.entries(Dab).map(([a, b]) => [b, a]));
                var Fab, Gab;
                Fab = a => ({
                    type: 10,
                    value: a
                });
                Gab = a => ({
                    type: 11,
                    value: a
                });
                JV = __c.JV = (a, b) => ({
                    type: 1,
                    value: Object.is(a, -0) ? 0 : a,
                    Ca: b
                });
                KV = __c.KV = (a, b) => ({
                    type: 2,
                    value: a,
                    Ca: b
                });
                IV = __c.IV = (a, b) => ({
                    type: 3,
                    value: a,
                    Ca: b
                });
                AW = __c.AW = (a, b) => ({
                    type: 5,
                    value: a,
                    size: b
                });
                var K$a = /^[-+]?(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][-+]?\d+)?$/;
                var M$a = {
                        "+": (a, b) => a + b,
                        "-": (a, b) => a - b,
                        "*": (a, b) => a * b,
                        "/": (a, b) => a / b,
                        "^": (a, b) => Math.pow(a, b)
                    },
                    N$a = {
                        "+": (a, b) => null !== a && void 0 !== a ? a : b,
                        "-": (a, b) => null !== a && void 0 !== a ? a : b,
                        "*": (a, b) => BW(a, b),
                        "/": (a, b) => BW(a, b),
                        "^": (a, b) => BW(a, b)
                    },
                    BW = (a, b) => {
                        var c, d;
                        const e = null === a || void 0 === a ? void 0 : null === (c = a.mc) || void 0 === c ? void 0 : c.type;
                        c = null === b || void 0 === b ? void 0 : null === (d = b.mc) || void 0 === d ? void 0 : d.type;
                        if ("currency" === e) return a;
                        if ("currency" === c) return b;
                        a = "percentage" !== e ? a : void 0;
                        return null !== a && void 0 !==
                            a ? a : "percentage" !== c ? b : void 0
                    },
                    PV = {
                        ">": (a, b) => a > b,
                        "<": (a, b) => a < b,
                        ">=": (a, b) => a >= b,
                        "<=": (a, b) => a <= b,
                        "=": (a, b) => a === b,
                        "<>": (a, b) => a !== b
                    },
                    O$a = {
                        [2]: 1,
                        [3]: 0,
                        [1]: -1
                    };
                var CW = class {
                        get arity() {
                            return {
                                min: 1,
                                max: 1,
                                V2: !1
                            }
                        }
                        vG(a) {
                            return 0 < a.length
                        }
                        consume(a) {
                            v(this.vG(a));
                            a = __c.B(a.shift());
                            return P$a(this, a)
                        }
                        constructor(a, b = c => ({
                            Sb: !0,
                            value: c
                        })) {
                            this.qv = a;
                            this.a2a = b;
                            this.type = 0
                        }
                    },
                    Q$a = class extends CW {
                        consume(a) {
                            a = super.consume(a);
                            return a.Sb ? {
                                Sb: !0,
                                value: this.JOa(a.value)
                            } : a
                        }
                        constructor(a, b, c) {
                            v(0 === a.type);
                            super(d => a.qv(d) && b(d), d => a.consume([d]));
                            this.JOa = c
                        }
                    },
                    DW = class extends CW {
                        get arity() {
                            return {
                                min: 0,
                                max: 1,
                                V2: !1
                            }
                        }
                        vG() {
                            return !0
                        }
                        consume(a) {
                            a = a.shift();
                            return P$a(this,
                                a)
                        }
                        constructor(a) {
                            v(0 === a.type);
                            super(b => null == b || a.qv(b), b => null == b ? {
                                Sb: !0,
                                value: void 0
                            } : a.consume([b]));
                            this.type = 1
                        }
                    },
                    EW = class extends CW {
                        get arity() {
                            return {
                                min: 2,
                                max: 2,
                                V2: !0
                            }
                        }
                        vG(a) {
                            return 2 <= a.length
                        }
                        consume(a) {
                            v(this.vG(a));
                            const b = this.NP.consume(a);
                            a = this.X6a.consume(a);
                            return b.Sb && a.Sb ? {
                                Sb: !0,
                                value: [b.value, a.value]
                            } : b.Sb ? a : b
                        }
                        constructor(a, b) {
                            v(0 === a.type);
                            v(0 === b.type);
                            super(() => {
                                v(!1)
                            });
                            this.NP = a;
                            this.X6a = b;
                            this.type = 2
                        }
                    },
                    R$a = class extends CW {
                        get arity() {
                            const a = 2 === this.NP.type;
                            return {
                                min: 0,
                                max: this.max * (a ? 2 : 1),
                                V2: a
                            }
                        }
                        vG(a) {
                            return 2 === this.NP.type ? 0 === a.length % 2 && a.length <= 2 * this.max : a.length <= this.max
                        }
                        consume(a) {
                            v(this.vG(a));
                            const b = [];
                            for (; a.length;) {
                                const c = this.NP.consume(a);
                                if (!c.Sb) return c;
                                b.push(c.value)
                            }
                            return {
                                Sb: !0,
                                value: b
                            }
                        }
                        constructor(a, b) {
                            v(0 === a.type || 2 === a.type);
                            super(c => this.NP.qv(c));
                            this.NP = a;
                            this.max = b;
                            this.type = 3
                        }
                    },
                    FW = new CW(a => 8 !== a.type),
                    GW = new CW(a => 4 !== a.type && 8 !== a.type),
                    HW = new CW(a => 5 === a.type && null != a.size),
                    IW = QV(FW, a => 5 !== a.type || null != a.size, a => 5 === a.type ?
                        a.value[0][0] : a),
                    Hab = QV(IW, a => 4 !== a.type, a => a),
                    JW = QV(Hab, a => 4 !== HV(a, 2).type, a => J$a(a, 2)),
                    KW = QV(Hab, a => 4 !== HV(a, 1).type, a => J$a(a, 1)),
                    Iab = QV(KW, a => 1 <= a.value, a => JV(Math.floor(a.value))),
                    Jab = function(a, b) {
                        v(0 === a.type);
                        v(0 === b.type);
                        return new CW(c => a.qv(c) || b.qv(c))
                    }(HW, KW);
                new EW(IW, HW);
                var LW = [Jab, RV(Jab, 254)],
                    MW = [FW, RV(FW, 254)],
                    Kab = [GW, RV(GW, 254)],
                    NW = a => [
                        [a[0], a[1]], ...a[2]
                    ],
                    OW = (a, b) => a.map((c, d) => 8 === c.type ? b(c, d) : c);
                var Lab = () => N("AytKEQ"),
                    Mab = () => N("ov07pg"),
                    Nab = () => N("0OZlXw"),
                    Oab = () => N("UNcBHQ"),
                    Pab = () => N("KyOXKw"),
                    Qab = () => N("oIv25Q"),
                    Rab = () => N("8MC7NQ"),
                    Sab = () => N("hMw7aQ"),
                    Tab = () => N("GhP5GA"),
                    Uab = () => N("kgOhOg"),
                    Vab = () => N("rOG4RQ"),
                    Wab = () => N("SRLplQ"),
                    Xab = () => N("F7KAQw"),
                    Yab = () => N("JZNFRA"),
                    Zab = () => N("z6237A"),
                    $ab = () => N("H0sxOw"),
                    abb = () => N("9Gg1Mg"),
                    bbb = () => N("MvkKiw"),
                    cbb = () => N("HSWMvg"),
                    dbb = () => N("2/8ILQ"),
                    ebb = () => N("moRadA"),
                    fbb = () => N("YAYu0Q"),
                    gbb = () => N("SUASIw"),
                    hbb = () => N("VdIrCw"),
                    ibb = () => N("kUEOwQ"),
                    jbb = () => N("h3Jymg"),
                    kbb = () => N("qpF0/Q"),
                    lbb = () => N("toEMSQ"),
                    mbb = () => N("SLojAw"),
                    nbb = () => N("XILGzw");
                var PW = class {
                    constructor(a) {
                        this.KB = a
                    }
                };
                var QW = class extends PW {
                    execute(a) {
                        a = OW(a, () => KV(!1));
                        var b = TV(a, this.args);
                        if (!b.Sb) return b.value;
                        a = S$a(QW.functionName);
                        b = [b.value[0], ...b.value[1]];
                        return this.process(a, b)
                    }
                    process(a, b) {
                        b = LV(b, (c, d) => {
                            if (null != c && 4 === c.type) return c;
                            if (4 === d.type) return d;
                            if (0 === d.type) return c;
                            d = HV(d, 2);
                            return 4 === d.type ? c : a(c, d)
                        }, void 0, {
                            Mu: () => !0,
                            Tu: c => 4 === (null === c || void 0 === c ? void 0 : c.type) ? c : void 0
                        });
                        return null == b.result ? {
                            type: 4,
                            value: 3
                        } : b.result
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = Kab;
                        this.metadata = {
                            category: 8,
                            description: Lab,
                            kf: [{
                                type: "CONDITION",
                                optional: !1
                            }, {
                                type: "CONDITIONS",
                                optional: !0
                            }],
                            jf: ["=AND(A1>0, B1<5)", "=AND(3>0, 2<5)", "=AND(TRUE, 1=1)"]
                        }
                    }
                };
                QW.functionName = "AND";
                QW.Ve = {
                    "pl-PL": "ORAZ"
                };
                var RW = class extends PW {
                    execute(a) {
                        a = OW(a, () => JV(0));
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        a = a.value;
                        a = [a[0], ...a[1]];
                        a = LV(a, (b, c) => ({
                            sum: OV("+", b.sum, c),
                            count: b.count + (0 !== c.type ? 1 : 0)
                        }), {
                            sum: JV(0),
                            count: 0
                        }, {
                            Mu: GV,
                            Tu: b => 4 === b.sum.type ? b.sum : void 0
                        });
                        return a.Sb ? OV("/", a.result.sum, JV(a.result.count)) : a.result
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = LW;
                        this.metadata = {
                            category: 11,
                            description: Mab,
                            kf: [{
                                type: "VALUE",
                                optional: !1
                            }, {
                                type: "VALUES",
                                optional: !0
                            }],
                            jf: ["=AVERAGE(A1:A10)", "=AVERAGE(1, 2, 3)",
                                "=AVERAGE(A1, 5, 10)"
                            ]
                        }
                    }
                };
                RW.functionName = "AVERAGE";
                RW.Ve = {
                    "pl-PL": "\u015aREDNIA"
                };
                var XV = a => 5 === a.type ? a.value[0][0] : a;
                var obb = (a, b, c, d = a) => T$a([
                        [a, b]
                    ], d, c),
                    pbb = (a, b, c, d = a) => V$a([
                        [a, b]
                    ], d, c);
                var SW = class extends PW {
                    execute(a) {
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        const [b, c, d = b] = a.value;
                        return pbb(b, c, this.KB.get(), d)
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = [HW, IW, new DW(HW)];
                        this.metadata = {
                            category: 11,
                            description: Nab,
                            kf: [{
                                type: "ARRAY",
                                optional: !1
                            }, {
                                type: "CONDITION",
                                optional: !1
                            }, {
                                type: "ARRAY",
                                optional: !0
                            }],
                            jf: ['=AVERAGEIF(A1:A10, ">5")', '=AVERAGEIF(B1:B10, "Apple", C1:C10)', '=AVERAGEIF(D1:D10, "<100", E1:E10)']
                        }
                    }
                };
                SW.functionName = "AVERAGEIF";
                SW.Ve = {
                    "pl-PL": "\u015aREDNIA.JE\u017bELI"
                };
                var TW = class extends PW {
                    execute(a) {
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        const [b, ...c] = a.value;
                        a = NW(c);
                        return V$a(a, b, this.KB.get())
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = [HW, HW, IW, RV(new EW(HW, IW), 126)];
                        this.metadata = {
                            category: 11,
                            description: Oab,
                            kf: [{
                                type: "ARRAY",
                                optional: !1
                            }, {
                                type: "ARRAY",
                                optional: !1
                            }, {
                                type: "CONDITION",
                                optional: !1
                            }, {
                                type: "ARRAY",
                                optional: !0
                            }, {
                                type: "CONDITION",
                                optional: !0
                            }],
                            jf: ['=AVERAGEIFS(C1:C15, A1:A15, ">=100", B1:B15, ">=50")', '=AVERAGEIFS(D1:D15, C1:C15, "Blue", B1:B15, ">=10")',
                                '=AVERAGEIFS(E1:E10, A1:A10, ">=20", B1:B1, "<30")'
                            ]
                        }
                    }
                };
                TW.functionName = "AVERAGEIFS";
                TW.Ve = {
                    "pl-PL": "\u015aREDNIA.WARUNK\u00d3W"
                };
                var UW = class extends PW {
                    execute(a) {
                        a = OW(a, () => ({
                            type: 0,
                            Ca: void 0
                        }));
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        a = [a.value[0], ...a.value[1]];
                        return LV(a, (b, c) => OV("&", b, c), IV(""), {
                            Mu: () => !0,
                            Tu: b => 4 === b.type ? b : void 0
                        }).result
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = MW;
                        this.metadata = {
                            category: 12,
                            description: Pab,
                            kf: [{
                                type: "TEXT",
                                optional: !1
                            }, {
                                type: "TEXTS",
                                optional: !0
                            }],
                            jf: ['=CONCAT(A1, " ", B1)', '=CONCAT("Hello", " ", "World")', "=CONCAT(A1, B1, C1)"]
                        }
                    }
                };
                UW.functionName = "CONCAT";
                UW.Ve = {
                    "pl-PL": "CONCAT"
                };
                var VW = class extends PW {
                    execute(a) {
                        a = OW(a, () => JV(0));
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        a = [a.value[0], ...a.value[1]];
                        a = LV(a, (b, c) => 4 === c.type || 1 !== HV(c, 1).type ? b : b + 1, 0, {
                            Mu: b => 1 === b.type,
                            Tu: () => {}
                        });
                        FV(a.Sb);
                        return JV(a.result)
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = MW;
                        this.metadata = {
                            category: 11,
                            description: Qab,
                            kf: [{
                                type: "VALUE",
                                optional: !1
                            }, {
                                type: "VALUES",
                                optional: !0
                            }],
                            jf: ["=COUNT(A1:A10)", '=COUNT(1, 2, "text", 3)', "=COUNT(A1, B1, C1)"]
                        }
                    }
                };
                VW.functionName = "COUNT";
                VW.Ve = {
                    "pl-PL": "ILE.LICZB"
                };
                var WW = class extends PW {
                    execute(a) {
                        a = OW(a, () => JV(0));
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        a = [a.value[0], ...a.value[1]];
                        a = LV(a, (b, c) => b + (0 === c.type ? 0 : 1), 0, {
                            Mu: () => !0,
                            Tu: () => {}
                        });
                        FV(a.Sb);
                        return JV(a.result)
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = MW;
                        this.metadata = {
                            category: 11,
                            description: Rab,
                            kf: [{
                                type: "VALUE",
                                optional: !1
                            }, {
                                type: "VALUES",
                                optional: !0
                            }],
                            jf: ["=COUNTA(A1:A10)", '=COUNTA(1, 2, "text", 3)', "=COUNTA(A1, B1, C1)"]
                        }
                    }
                };
                WW.functionName = "COUNTA";
                WW.Ve = {
                    "pl-PL": "ILE.NIEPUSTYCH"
                };
                var XW = class extends PW {
                    execute(a) {
                        a = OW(a, () => ({
                            type: 0,
                            Ca: void 0
                        }));
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        a = [a.value[0], ...a.value[1]];
                        a = LV(a, (b, c) => b + (0 === c.type || 3 === c.type && "" === c.value ? 1 : 0), 0, {
                            Mu: () => !0,
                            Tu: () => {}
                        });
                        FV(a.Sb);
                        return JV(a.result)
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = MW;
                        this.metadata = {
                            category: 11,
                            description: Sab,
                            kf: [{
                                type: "VALUE",
                                optional: !1
                            }, {
                                type: "VALUES",
                                optional: !0
                            }],
                            jf: ["=COUNTBLANK(A1:A10)", "=COUNTBLANK(B1:B5)"]
                        }
                    }
                };
                XW.functionName = "COUNTBLANK";
                XW.Ve = {
                    "pl-PL": "LICZ.PUSTE"
                };
                var YW = class extends PW {
                    execute(a) {
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        const [b, c] = a.value;
                        a = this.KB.get();
                        return U$a([
                            [b, c]
                        ], a)
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = [HW, IW];
                        this.metadata = {
                            category: 11,
                            description: Tab,
                            kf: [{
                                type: "ARRAY",
                                optional: !1
                            }, {
                                type: "CONDITION",
                                optional: !1
                            }],
                            jf: ['=COUNTIF(A1:A10, ">5")', '=COUNTIF(B1:B10, "Apple")', '=COUNTIF(C1:C10, "<=10")']
                        }
                    }
                };
                YW.functionName = "COUNTIF";
                YW.Ve = {
                    "pl-PL": "LICZ.JE\u017bELI"
                };
                var ZW = class extends PW {
                    execute(a) {
                        a = OW(a, (b, c) => 0 === c % 2 ? AW([
                            [JV(0)]
                        ], {
                            rows: 1,
                            cols: 1
                        }) : KV(!1));
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        a = NW(a.value);
                        return U$a(a, this.KB.get())
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = [HW, IW, RV(new EW(HW, IW), 126)];
                        this.metadata = {
                            category: 11,
                            description: Uab,
                            kf: [{
                                type: "ARRAY",
                                optional: !1
                            }, {
                                type: "CONDITION",
                                optional: !1
                            }, {
                                type: "ARRAY",
                                optional: !0
                            }, {
                                type: "CONDITION",
                                optional: !0
                            }],
                            jf: ['=COUNTIFS(A1:A10, ">5", B1:B10, "<10")', '=COUNTIFS(A1:A5, "A", B1:B5, "B")', '=COUNTIFS(A1:A10, ">=20", B1:B10, "<=30")']
                        }
                    }
                };
                ZW.functionName = "COUNTIFS";
                ZW.Ve = {
                    "pl-PL": "LICZ.WARUNKI"
                };
                var $W = class extends PW {
                    execute(a) {
                        a = OW(a, () => ({
                            type: 0,
                            Ca: void 0
                        }));
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        a = [a.value[0], ...a.value[1]];
                        const b = new Set;
                        a = LV(a, (c, d) => {
                            if (0 === d.type || 3 === d.type && "" === d.value || b.has(d.value)) return c;
                            b.add(d.value);
                            return c + 1
                        }, 0, {
                            Mu: c => 0 !== c.type,
                            Tu: () => {}
                        });
                        FV(a.Sb);
                        return JV(a.result)
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = MW;
                        this.metadata = {
                            category: 11,
                            description: Vab,
                            kf: [{
                                type: "ARRAY",
                                optional: !1
                            }],
                            jf: ["=COUNTUNIQUE(A1:A10)", '=COUNTUNIQUE(B1:B5, "Apple", "Banana")',
                                "=COUNTUNIQUE(C1, C2, C3, C4)"
                            ]
                        }
                    }
                };
                $W.functionName = "COUNTUNIQUE";
                $W.Ve = {
                    "pl-PL": "COUNTUNIQUE"
                };
                var aX = class extends PW {
                    execute(a) {
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        const [b, c, d, e] = a.value;
                        return X$a(b, c, d, e, this.KB.get())
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = [GW, HW, Iab, new DW(JW)];
                        this.metadata = {
                            category: 9,
                            description: nbb,
                            kf: [{
                                type: "LOOKUP_VALUE",
                                optional: !1
                            }, {
                                type: "ARRAYS",
                                optional: !1
                            }, {
                                type: "COL_INDEX_NUM",
                                optional: !1
                            }, {
                                type: "RANGE_LOOKUP",
                                optional: !0
                            }],
                            jf: ['=VLOOKUP("Apple", A1:B10, 2, FALSE)', "=VLOOKUP(A1, B1:C10, 2, TRUE)", "=VLOOKUP(5, A1:B10, 2, FALSE)"]
                        }
                    }
                };
                aX.functionName = "VLOOKUP";
                aX.Ve = {
                    "pl-PL": "WYSZUKAJ.PIONOWO"
                };
                var bX = class extends PW {
                    execute(a) {
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        const [b, c, d, e] = a.value;
                        a = this.KB.get(); {
                            const k = c.value;
                            var f = c.size;
                            if (f) {
                                var g = f.rows;
                                f = f.cols;
                                var h = [];
                                for (let l = 0; l < f; l++) {
                                    const m = [];
                                    for (let n = 0; n < g; n++) m.push(k[n][l]);
                                    h.push(m)
                                }
                                g = {
                                    type: 5,
                                    value: h,
                                    size: {
                                        rows: f,
                                        cols: g
                                    }
                                }
                            } else g = {
                                type: 5,
                                value: [],
                                size: void 0
                            }
                        }
                        return X$a(b, g, d, e, a)
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = [GW, HW, Iab, new DW(JW)];
                        this.metadata = {
                            category: 9,
                            description: Wab,
                            kf: [{
                                    type: "LOOKUP_VALUE",
                                    optional: !1
                                },
                                {
                                    type: "ARRAYS",
                                    optional: !1
                                }, {
                                    type: "ROW_INDEX_NUM",
                                    optional: !1
                                }, {
                                    type: "RANGE_LOOKUP",
                                    optional: !0
                                }
                            ],
                            jf: ['=HLOOKUP("Apple", A1:F10, 2, FALSE)', "=HLOOKUP(A1, B1:H10, 3, TRUE)", "=HLOOKUP(5, A1:E4, 2, FALSE)"]
                        }
                    }
                };
                bX.functionName = "HLOOKUP";
                bX.Ve = {
                    "pl-PL": "WYSZUKAJ.POZIOMO"
                };
                var cX = class extends PW {
                    execute(a) {
                        a = OW(a, (e, f) => 0 === f ? KV(!1) : JV(0));
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        const [b, c, d] = a.value;
                        return b.value ? c : d
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = [JW, FW, FW];
                        this.metadata = {
                            category: 8,
                            description: Xab,
                            kf: [{
                                type: "CONDITION",
                                optional: !1
                            }, {
                                type: "VALUE_IF_TRUE",
                                optional: !1
                            }, {
                                type: "VALUE_IF_FALSE",
                                optional: !1
                            }],
                            jf: ['=IF(A1>10, "Over 10", "10 or less")', '=IF(A1="", "Empty", "Not empty")', '=IF(A1>5, "Greater than 5", "5 or less")', '=IF(3>2, "True", "False")', '=IF(TRUE, "This is true", "This is false")']
                        }
                    }
                };
                cX.functionName = "IF";
                cX.Ve = {
                    "pl-PL": "JE\u017bELI"
                };
                var dX = class extends PW {
                    execute(a) {
                        a = OW(a, () => JV(0));
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        const [b, c] = a.value;
                        return (d => 0 === d.type ? JV(0) : d)(4 === b.type ? c : b)
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = [IW, IW];
                        this.metadata = {
                            category: 8,
                            description: Yab,
                            kf: [{
                                type: "VALUE",
                                optional: !1
                            }, {
                                type: "VALUE_IF_ERROR",
                                optional: !1
                            }],
                            jf: ['=IFERROR(A1/B1, "Error in calculation")', '=IFERROR(VLOOKUP("Apple", A1:B10, 2, FALSE), "Not Found")', '=IFERROR(TEXT(A1, "0.00"), "Invalid number")', '=IFERROR(10/0, "Division by zero")']
                        }
                    }
                };
                dX.functionName = "IFERROR";
                dX.Ve = {
                    "pl-PL": "JE\u017bELI.B\u0141\u0104D"
                };
                var eX = class extends PW {
                    execute(a) {
                        a = OW(a, () => ({
                            type: 0,
                            Ca: void 0
                        }));
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        a = [
                            [a.value[0], a.value[1]], ...a.value[2]
                        ];
                        for (const [b, c] of a) {
                            a = XV(b);
                            if (4 === a.type) return a;
                            a = HV(a, 2);
                            if (4 === a.type) return a;
                            if (a.value) return c
                        }
                        return {
                            type: 4,
                            value: 7
                        }
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = [JW, FW, RV(new EW(IW, FW), 126)];
                        this.metadata = {
                            category: 8,
                            description: Zab,
                            kf: [{
                                type: "CONDITIONS",
                                optional: !1
                            }, {
                                type: "VALUES",
                                optional: !1
                            }],
                            jf: ['=IFS(A1=1, "One", A1=2, "Two", A1=3, "Three")',
                                '=IFS(B1>10, "Above 10", B1>5, "Above 5", TRUE, "5 or less")', '=IFS(C1="Apple", "Fruit", C1="Carrot", "Vegetable", TRUE, "Other")'
                            ]
                        }
                    }
                };
                eX.functionName = "IFS";
                eX.Ve = {
                    "pl-PL": "IFS"
                };
                var fX = class extends PW {
                    execute(a) {
                        var b;
                        if (8 === (null === (b = a[0]) || void 0 === b ? void 0 : b.type)) return {
                            type: 4,
                            value: 3
                        };
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        const [c, d, e] = a.value;
                        a = Y$a(d);
                        const f = Y$a(e);
                        b = 5 === c.type ? c : AW([
                            [c]
                        ], {
                            rows: 1,
                            cols: 1
                        });
                        if (-1 > a || e && -1 > f || null == b.size) return {
                            type: 4,
                            value: 3
                        };
                        if (null == e && (1 === b.size.rows || 1 === b.size.cols)) {
                            if (-1 === a) return c;
                            b = b.value.flat(1);
                            if (a >= b.length) return {
                                type: 4,
                                value: 4
                            };
                            a = b[a];
                            return 0 === a.type ? JV(0) : a
                        }
                        if (a >= b.size.rows || f >= b.size.cols) return {
                            type: 4,
                            value: 4
                        };
                        if (-1 === f && -1 === a) return c;
                        if (-1 === a) return a = b.value.map(g => [g[f]]), AW(a, {
                            rows: a.length,
                            cols: 1
                        });
                        if (-1 === f) return a = b.value[a], AW([a], {
                            rows: 1,
                            cols: a.length
                        });
                        a = b.value[a][f];
                        return 0 === a.type ? JV(0) : a
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = [FW, KW, new DW(KW)];
                        this.metadata = {
                            category: 9,
                            description: $ab,
                            kf: [{
                                type: "ARRAY",
                                optional: !1
                            }, {
                                type: "ROW_INDEX_NUM",
                                optional: !1
                            }, {
                                type: "COL_INDEX_NUM",
                                optional: !0
                            }],
                            jf: ["=INDEX(A1:A4, 1)", "=INDEX({1, 2; 3, 4}, 1, 1)"]
                        }
                    }
                };
                fX.functionName = "INDEX";
                fX.Ve = {
                    "pl-PL": "INDEKS"
                };
                var gX = class extends PW {
                    execute(a) {
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        const [b, c, d] = a.value;
                        a = XV(b);
                        a = 0 === a.type ? JV(0) : a;
                        __c.y(4 !== a.type);
                        var e = null === d || void 0 === d ? void 0 : d.value;
                        var f = null == e || 0 < e ? 1 : 0 > e ? -1 : 0;
                        if (null == c.size || 1 !== Math.min(c.size.cols, c.size.rows)) return {
                            type: 4,
                            value: 7
                        };
                        e = c.value.flat(1);
                        switch (f) {
                            case 0:
                                if (3 === a.type && (f = this.KB.get()(`=${a.value}`), f = Z$a(f, e), -1 !== f)) return JV(f + 1);
                                a: {
                                    for (f = 0; f < e.length; f++) {
                                        const g = e[f];
                                        if (g.type === a.type && NV("=", a, g).value) {
                                            a = f;
                                            break a
                                        }
                                    }
                                    a = -1
                                }
                                if (-1 !== a) return JV(a + 1);
                                break;
                            case 1:
                                a = $$a(a, e, "<=", "<=");
                                if (-1 !== a) return JV(a + 1);
                                break;
                            case -1:
                                a = $$a(a, e, ">=", ">");
                                if (-1 !== a) return JV(a + 1);
                                break;
                            default:
                                throw new D(f);
                        }
                        return {
                            type: 4,
                            value: 7
                        }
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = [GW, HW, new DW(KW)];
                        this.metadata = {
                            category: 9,
                            description: abb,
                            kf: [{
                                type: "LOOKUP_VALUE",
                                optional: !1
                            }, {
                                type: "SEARCH_RANGE",
                                optional: !1
                            }, {
                                type: "MATCH_TYPE",
                                optional: !0
                            }],
                            jf: ["=MATCH(4, {2,4,6})", '=MATCH("Apple", A1:B10, 0)']
                        }
                    }
                };
                gX.functionName = "MATCH";
                gX.Ve = {
                    "pl-PL": "PODAJ.POZYCJ\u0118"
                };
                var hX = class extends PW {
                    execute(a) {
                        a = OW(a, () => JV(0));
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        a = a.value;
                        a = [a[0], ...a[1]];
                        return this.process("<", JV(Infinity), a)
                    }
                    process(a, b, c) {
                        return LV(c, (d, e) => {
                            if (4 === d.type) return d;
                            if (4 === e.type) return e;
                            e = HV(e, 1);
                            return 4 === e.type ? e : NV(a, d, e).value ? d : e
                        }, b, {
                            Mu: GV,
                            Tu: d => 4 === d.type ? d : void 0
                        }).result
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = LW;
                        this.metadata = {
                            category: 11,
                            description: dbb,
                            kf: [{
                                type: "VALUE",
                                optional: !1
                            }, {
                                type: "VALUES",
                                optional: !0
                            }],
                            jf: ["=MIN(A1:A10)",
                                "=MIN(1, 2, 3)", "=MIN(A1, 5, 10)"
                            ]
                        }
                    }
                };
                hX.functionName = "MIN";
                hX.Ve = {
                    "pl-PL": "MIN"
                };
                var iX = class extends hX {
                    execute(a) {
                        a = OW(a, () => JV(0));
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        a = a.value;
                        a = [a[0], ...a[1]];
                        return this.process(">", JV(-Infinity), a)
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = LW;
                        this.metadata = {
                            category: 11,
                            description: bbb,
                            kf: [{
                                type: "VALUE",
                                optional: !1
                            }, {
                                type: "VALUES",
                                optional: !0
                            }],
                            jf: ["=MAX(A1:A10)", "=MAX(1, 2, 3)", "=MAX(A1, 5, 10)"]
                        }
                    }
                };
                iX.functionName = "MAX";
                iX.Ve = {
                    "pl-PL": "MAX"
                };
                var jX = class extends PW {
                    execute(a) {
                        a = OW(a, () => JV(0));
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        a = a.value;
                        a = [a[0], ...a[1]].map(c => {
                            switch (c.type) {
                                case 3:
                                case 2:
                                    return HV(c, 1);
                                case 4:
                                case 1:
                                case 0:
                                case 5:
                                    return c;
                                default:
                                    throw new D(c);
                            }
                        });
                        a = LV(a, (c, d) => {
                            if (!Array.isArray(c)) return c;
                            switch (d.type) {
                                case 4:
                                    return d;
                                case 1:
                                    c.push(d.value);
                                    break;
                                case 3:
                                case 2:
                                case 0:
                                    break;
                                default:
                                    throw new D(d);
                            }
                            return c
                        }, [], {
                            Mu: GV,
                            Tu: c => Array.isArray(c) ? void 0 : c
                        });
                        if (!a.Sb || !Array.isArray(a.result)) return a.result;
                        if (0 ===
                            a.result.length) return {
                            type: 4,
                            value: 6
                        };
                        a = a.result.sort((c, d) => c - d);
                        const b = Math.floor(a.length / 2);
                        return JV(0 === a.length % 2 ? (a[b - 1] + a[b]) / 2 : a[b])
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = LW;
                        this.metadata = {
                            category: 11,
                            description: cbb,
                            kf: [{
                                type: "VALUE",
                                optional: !1
                            }, {
                                type: "VALUES",
                                optional: !0
                            }],
                            jf: ["=MEDIAN(A1:A10)", "=MEDIAN(1, 2, 3, 4, 5)", "=MEDIAN(A1, 5, 10)"]
                        }
                    }
                };
                jX.functionName = "MEDIAN";
                jX.Ve = {
                    "pl-PL": "MEDIANA"
                };
                var kX = class extends PW {
                    execute(a) {
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        a = XV(a.value[0]);
                        if (4 === a.type) return a;
                        a = HV(a, 2);
                        return 4 === a.type ? a : KV(!a.value)
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = [JW];
                        this.metadata = {
                            category: 8,
                            description: ebb,
                            kf: [{
                                type: "CONDITION",
                                optional: !1
                            }],
                            jf: ["=NOT(A1>10)", "=NOT(3>5)", "=NOT(FALSE)"]
                        }
                    }
                };
                kX.functionName = "NOT";
                kX.Ve = {
                    "pl-PL": "NIE"
                };
                var lX = class extends QW {
                    execute(a) {
                        a = OW(a, () => KV(!1));
                        var b = TV(a, this.args);
                        if (!b.Sb) return b.value;
                        a = S$a(lX.functionName);
                        b = [b.value[0], ...b.value[1]];
                        return this.process(a, b)
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = Kab;
                        this.metadata = {
                            category: 8,
                            description: fbb,
                            kf: [{
                                type: "CONDITION",
                                optional: !1
                            }, {
                                type: "CONDITIONS",
                                optional: !0
                            }],
                            jf: ["=OR(A1>0, B1<5)", "=OR(3>0, 5<2)", "=OR(FALSE, 1=1)"]
                        }
                    }
                };
                lX.functionName = "OR";
                lX.Ve = {
                    "pl-PL": "LUB"
                };
                var mX = class extends PW {
                    execute(a) {
                        if (0 === a.length) return {
                            type: 4,
                            value: 7
                        };
                        a = a.filter(b => 8 !== b.type);
                        if (0 === a.length) return JV(0);
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        a = a.value;
                        a = [a[0], ...a[1]];
                        return LV(a, (b, c) => OV("*", b, c), JV(1), {
                            Mu: GV,
                            Tu: b => 4 === b.type ? b : void 0
                        }).result
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = LW;
                        this.metadata = {
                            category: 10,
                            description: gbb,
                            kf: [{
                                type: "VALUE",
                                optional: !1
                            }, {
                                type: "VALUES",
                                optional: !0
                            }],
                            jf: ["=PRODUCT(A1:A3)", "=PRODUCT(2, 3, 4)", "=PRODUCT(A1, 5, 10)"]
                        }
                    }
                };
                mX.functionName = "PRODUCT";
                mX.Ve = {
                    "pl-PL": "ILOCZYN"
                };
                var nX = class extends PW {
                    execute(a) {
                        a = OW(a, () => JV(0));
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        const [b, c] = a.value;
                        return this.process(b, c, nX.functionName)
                    }
                    process(a, b, c) {
                        const d = 0 > a.value;
                        a = Math.abs(a.value);
                        const e = Math.max(a.toFixed(0).length + b.value, 15);
                        b = Math.pow(10, b.value);
                        a = parseFloat((a * b).toFixed(11));
                        switch (c) {
                            case "ROUNDDOWN":
                                a = Number((Math.floor(a) / b).toPrecision(e));
                                break;
                            case "ROUNDUP":
                                a = Number((Math.ceil(a) / b).toPrecision(e));
                                break;
                            case "ROUND":
                                a = Number((Math.round(a) / b).toPrecision(e));
                                break;
                            default:
                                throw new D(c);
                        }
                        return isFinite(a) ? JV(Number(d ? (-1 * a).toPrecision(e) : a)) : {
                            type: 4,
                            value: 6
                        }
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = [KW, KW];
                        this.metadata = {
                            category: 10,
                            description: hbb,
                            kf: [{
                                type: "VALUE",
                                optional: !1
                            }, {
                                type: "VALUE",
                                optional: !1
                            }],
                            jf: ["=ROUND(123.456, 2)", "=ROUND(A1, 0)", "=ROUND(15.7, -1)"]
                        }
                    }
                };
                nX.functionName = "ROUND";
                nX.Ve = {
                    "pl-PL": "ZAOKR"
                };
                var oX = class extends nX {
                    execute(a) {
                        a = OW(a, () => JV(0));
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        const [b, c] = a.value;
                        return this.process(b, c, oX.functionName)
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = [KW, KW];
                        this.metadata = {
                            category: 10,
                            description: ibb,
                            kf: [{
                                type: "VALUE",
                                optional: !1
                            }, {
                                type: "VALUE",
                                optional: !1
                            }],
                            jf: ["=ROUNDDOWN(123.456, 2)", "=ROUNDDOWN(A1, 0)", "=ROUNDDOWN(15.7, -1)"]
                        }
                    }
                };
                oX.functionName = "ROUNDDOWN";
                oX.Ve = {
                    "pl-PL": "ZAOKR.D\u00d3\u0141"
                };
                var pX = class extends nX {
                    execute(a) {
                        a = OW(a, () => JV(0));
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        const [b, c] = a.value;
                        return this.process(b, c, pX.functionName)
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = [KW, KW];
                        this.metadata = {
                            category: 10,
                            description: jbb,
                            kf: [{
                                type: "VALUE",
                                optional: !1
                            }, {
                                type: "VALUE",
                                optional: !1
                            }],
                            jf: ["=ROUNDDUP(123.456, 2)", "=ROUNDDUP(A1, 0)", "=ROUNDDUP(15.7, -1)"]
                        }
                    }
                };
                pX.functionName = "ROUNDUP";
                pX.Ve = {
                    "pl-PL": "ZAOKR.G\u00d3RA"
                };
                var qX = class extends PW {
                    execute(a) {
                        a = OW(a, () => JV(0));
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        a = a.value;
                        a = [a[0], ...a[1]];
                        return LV(a, (b, c) => OV("+", b, c), JV(0), {
                            Mu: GV,
                            Tu: b => 4 === b.type ? b : void 0
                        }).result
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = LW;
                        this.metadata = {
                            category: 10,
                            description: kbb,
                            kf: [{
                                type: "VALUE",
                                optional: !1
                            }, {
                                type: "VALUES",
                                optional: !0
                            }],
                            jf: ["=SUM(A1:A10)", "=SUM(1, 2, 3)", "=SUM(A1, 5, 10)"]
                        }
                    }
                };
                qX.functionName = "SUM";
                qX.Ve = {
                    "pl-PL": "SUMA"
                };
                var rX = class extends PW {
                    execute(a) {
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        const [b, c, d = b] = a.value;
                        return obb(b, c, this.KB.get(), d)
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = [HW, IW, new DW(HW)];
                        this.metadata = {
                            category: 10,
                            description: lbb,
                            kf: [{
                                type: "ARRAY",
                                optional: !1
                            }, {
                                type: "CONDITION",
                                optional: !1
                            }, {
                                type: "ARRAY",
                                optional: !0
                            }],
                            jf: ['=SUMIF(A1:A10, ">5")', '=SUMIF(B1:B10, "Apple", C1:C10)', '=SUMIF(D1:D10, "<=10", E1:E10)']
                        }
                    }
                };
                rX.functionName = "SUMIF";
                rX.Ve = {
                    "pl-PL": "SUMA.JE\u017bELI"
                };
                var sX = class extends PW {
                    execute(a) {
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        const [b, ...c] = a.value;
                        a = NW(c);
                        return T$a(a, b, this.KB.get())
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = [HW, HW, IW, RV(new EW(HW, IW), 126)];
                        this.metadata = {
                            category: 10,
                            description: Lab,
                            kf: [{
                                type: "ARRAY",
                                optional: !1
                            }, {
                                type: "ARRAY",
                                optional: !1
                            }, {
                                type: "CONDITION",
                                optional: !1
                            }, {
                                type: "ARRAY",
                                optional: !0
                            }, {
                                type: "CONDITION",
                                optional: !0
                            }],
                            jf: ['=SUMIFS(A1:A10, B1:B10, ">5")', '=SUMIFS(C1:C10, D1:D10, "Red", E1:E10, "<10")', '=SUMIFS(F1:F15, G1:G15, ">=20", H1:H15, "Completed")']
                        }
                    }
                };
                sX.functionName = "SUMIFS";
                sX.Ve = {
                    "pl-PL": "SUMA.WARUNK\u00d3W"
                };
                var tX = class extends PW {
                    execute(a) {
                        a = OW(a, () => ({
                            type: 4,
                            value: 3
                        }));
                        a = TV(a, this.args);
                        if (!a.Sb) return a.value;
                        a = [a.value[0], ...a.value[1]];
                        const b = [];
                        let c;
                        const d = (e, f) => {
                            const g = b[f] || JV(1);
                            switch (e.type) {
                                case 4:
                                    c = c || e;
                                    break;
                                case 1:
                                    b[f] = MV("*", g, e);
                                    break;
                                case 2:
                                case 3:
                                case 0:
                                    b[f] = JV(0);
                                    break;
                                default:
                                    throw new D(e);
                            }
                        };
                        aab(a) ? a.forEach(e => e.value.flat().forEach(d)) : a.every(e => 5 !== e.type) ? a.forEach(e => d(e, 0)) : c = {
                            type: 4,
                            value: 3
                        };
                        return c ? c : b.reduce((e, f) => MV("+", e, f), JV(0))
                    }
                    constructor(...a) {
                        super(...a);
                        this.args = MW;
                        this.metadata = {
                            category: 10,
                            description: mbb,
                            kf: [{
                                type: "VALUE",
                                optional: !1
                            }, {
                                type: "VALUES",
                                optional: !0
                            }],
                            jf: ["=SUMPRODUCT(A1:A3, B1:B3)"]
                        }
                    }
                };
                tX.functionName = "SUMPRODUCT";
                tX.Ve = {
                    "pl-PL": "SUMA.ILOCZYN\u00d3W"
                };
                var qbb = {
                    B8a: QW,
                    D8a: RW,
                    E8a: SW,
                    F8a: TW,
                    I9a: UW,
                    L9a: VW,
                    M9a: WW,
                    N9a: XW,
                    O9a: YW,
                    P9a: ZW,
                    Q9a: $W,
                    Eab: bX,
                    Kab: cX,
                    Lab: dX,
                    Mab: eX,
                    Nab: fX,
                    pbb: gX,
                    qbb: iX,
                    rbb: jX,
                    tbb: hX,
                    xbb: kX,
                    Ebb: lX,
                    wcb: mX,
                    Rcb: nX,
                    Scb: oX,
                    Tcb: pX,
                    pdb: qX,
                    qdb: rX,
                    rdb: sX,
                    sdb: tX,
                    Pdb: aX
                };
                Object.freeze(Object.fromEntries(Object.values(qbb).map(a => [a.functionName, a.functionName])));
                __c.rbb = Object.freeze(Object.fromEntries(Object.values(qbb).map(a => [a.functionName, a])));
                var sbb = new Map;
                for (const [a, b] of Object.entries(__c.rbb))
                    for (const c of Object.values(b.Ve)) {
                        const d = c.normalize("NFC").toLocaleUpperCase();
                        FV(!sbb.has(d), `ambiguous function translation ${d} -> ${a}`);
                        FV(0 < d.length);
                        sbb.set(d, a)
                    };
                var ZV = Object.freeze([]);
                var tbb, mab, mW, sab, tab, kab, rab, nab, lab, oab, iab, uab, vab, nW, wab, vX;
                tbb = {
                    Ed: ".",
                    erb: "en"
                };
                lW = __c.lW = $V(/^\s*/);
                __c.uX = $V(/^$/);
                mab = $V(/^\(/);
                mW = $V(/^\)/);
                sab = $V(/^{/);
                tab = $V(/^}/);
                kab = $V(/^,/);
                rab = $V(/^\\/);
                nab = $V(/^:/);
                lab = $V(/^;/);
                oab = $V(/^"/);
                iab = $V(/^[-]/);
                uab = $V(/^%/);
                vab = $V(/^(?:<=|>=|<>|[-+*/^=<>&:])/);
                qW = __c.qW = $V(/^\$?[a-z]{1,3}/i);
                rW = __c.rW = $V(/^\$?[1-9]\d*/);
                pW = __c.pW = dW((a, b) => [a, b], qW, rW);
                nW = $V(RegExp("^[\\p{L}_\\\\][\\p{L}\\p{M}\\p{N}_\\\\.?]*", "u"));
                __c.oW = dW(a => "true" === a.toLowerCase(), $V(/^(?:TRUE|FALSE)/i), bW($V(RegExp("^[\\p{L}\\p{M}\\p{N}_\\\\.?]", "u"))));
                __c.pab = dW(a => a.replace(/""/g, '"'), $V(/^(?:""|[^"])*/));
                __c.qab = dW(a => ({
                    type: __c.B(Dab[a])
                }), $V(/^#(?:REF!|DIV\/0!|N\/A|NAME\?|NULL!|NUM!|VALUE!)/i));
                wab = a => dab(cab(a), b => !(null == b.name && 0 === b.children.length && "" === b.text.trim()) || null != b.error);
                __c.ubb = sW({
                    zoa: function(a, b) {
                        return [{
                            type: 7,
                            value: b
                        }, {
                            type: 6,
                            value: a
                        }]
                    },
                    Toa: function(a) {
                        v(1 === a.length || 2 === a.length);
                        if (1 === a.length) return YV(pW, a[0]) ? [{
                            type: 9,
                            value: {
                                type: 0,
                                ...yab(a[0])
                            }
                        }] : YV(qW, a[0]) ? [{
                            type: 9,
                            value: {
                                type: 1,
                                ...uW(a[0])
                            }
                        }] : [{
                            type: 9,
                            value: {
                                type: 3,
                                name: a[0]
                            }
                        }];
                        const [b, c] = a.map(tW);
                        return [{
                            type: 9,
                            value: {
                                type: 2,
                                ...b
                            }
                        }, {
                            type: 12,
                            value: ":"
                        }, {
                            type: 9,
                            value: {
                                type: 2,
                                ...c
                            }
                        }]
                    },
                    Ioa: function(a) {
                        switch (a.type) {
                            case 0:
                                return [{
                                    type: 13
                                }, ...a.value, {
                                    type: 14
                                }];
                            case 1:
                            case 2:
                                return a.value;
                            case 3:
                                switch (typeof a.value) {
                                    case "boolean":
                                    case "number":
                                    case "string":
                                        return [zab(a.value)];
                                    case "object":
                                        if (Array.isArray(a.value)) {
                                            a = a.value.map(c => c.map(d => zab(d)));
                                            const b = Aab(a);
                                            return [AW(a, b)]
                                        }
                                        return [{
                                            type: 4,
                                            value: a.value.type
                                        }];
                                    default:
                                        throw Error();
                                }
                            default:
                                throw new D(a);
                        }
                    },
                    apa: function(a, b, c) {
                        return [...a.map(Fab), ...b, ...c.map(Gab)]
                    },
                    woa: function(a, b = []) {
                        if (!b.length) return a;
                        a = [...a];
                        for (const [c, d] of b) a.push({
                            type: 12,
                            value: c
                        }, ...d);
                        return a
                    },
                    voa: function() {
                        return [{
                            type: 8
                        }]
                    }
                }, {
                    lda: !1,
                    Pga: tbb
                });
                vX = () => {};
                __c.vbb = function(a) {
                    const b = {
                            zoa: vX,
                            Toa: vX,
                            Ioa: vX,
                            apa: vX,
                            woa: vX,
                            voa: vX
                        },
                        c = sW(b, {
                            lda: !0,
                            Pga: a
                        }),
                        d = sW(b, {
                            lda: !1,
                            Pga: a
                        });
                    return (e, f = {
                        nMa: !1
                    }) => {
                        const g = c.JD(e);
                        e = YV(d.JD, e);
                        return g && (f.nMa || e) ? e ? {
                            result: "success",
                            UR: g
                        } : (FV(0 === g.s.length, `could not parse: ${g.s}`), {
                            result: "syntax-error",
                            UR: g
                        }) : {
                            result: "error"
                        }
                    }
                }(tbb);
                __c.wbb = $V(/^(?:<=|>=|<>|[=<>])/);
                __c.xbb = Object.freeze({
                    "af-ZA": ",",
                    ar: ".",
                    "ar-AE": ".",
                    "ar-EG": ".",
                    "ar-SA": ".",
                    "as-IN": ".",
                    "az-AZ": ",",
                    "bg-BG": ",",
                    "bn-BD": ".",
                    "ca-ES": ",",
                    "ceb-PH": ".",
                    "cs-CZ": ",",
                    "cy-GB": ".",
                    "da-DK": ",",
                    "de-DE": ",",
                    "el-GR": ",",
                    en: ".",
                    "en-AU": ".",
                    "en-GB": ".",
                    "en-IN": ".",
                    "en-PH": ".",
                    "en-psaccent": ".",
                    "es-419": ".",
                    "es-AR": ",",
                    "es-CO": ",",
                    "es-ES": ",",
                    "es-MX": ".",
                    "es-US": ".",
                    "et-EE": ",",
                    "eu-ES": ",",
                    "fa-IR": ".",
                    "ff-SN": ",",
                    "fi-FI": ",",
                    "fr-BE": ",",
                    "fr-CA": ",",
                    "fr-FR": ",",
                    "gl-ES": ",",
                    "gu-IN": ".",
                    "ha-NG": ".",
                    "he-IL": ".",
                    "hi-IN": ".",
                    "hr-HR": ",",
                    "hu-HU": ",",
                    "hy-AM": ",",
                    "id-ID": ",",
                    "ig-NG": ".",
                    "it-IT": ",",
                    "ja-Hira": ".",
                    "ja-JP": ".",
                    "jv-ID": ",",
                    "ka-GE": ",",
                    "kk-KZ": ",",
                    "km-KH": ",",
                    "kn-IN": ".",
                    "ko-KR": ".",
                    "ku-TR": ",",
                    "ky-KG": ",",
                    "lt-LT": ",",
                    "lv-LV": ",",
                    "ma-IN": ".",
                    "mg-MG": ".",
                    "mk-MK": ",",
                    "ml-IN": ".",
                    "mn-MN": ".",
                    "mr-IN": ".",
                    "ms-MY": ".",
                    "my-MM": ".",
                    "nb-NO": ",",
                    "ne-NP": ".",
                    "nl-BE": ",",
                    "nl-NL": ",",
                    "om-ET": ".",
                    "pa-IN": ".",
                    "pa-PK": ".",
                    "pl-PL": ",",
                    "pt-BR": ",",
                    "pt-PT": ",",
                    "ro-RO": ",",
                    "ru-RU": ",",
                    "sd-IN": ".",
                    "si-LK": ".",
                    "sk-SK": ",",
                    "sl-SI": ",",
                    "sn-ZW": ".",
                    "so-SO": ".",
                    "sq-AL": ",",
                    "sr-RS": ",",
                    "su-ID": ",",
                    "sv-SE": ",",
                    "sw-KE": ".",
                    "ta-IN": ".",
                    "te-IN": ".",
                    "th-TH": ".",
                    "tl-PH": ".",
                    "tr-TR": ",",
                    "uk-UA": ",",
                    "ur-PK": ".",
                    "uz-UZ": ",",
                    "vi-VN": ",",
                    "wo-SN": ",",
                    "xh-ZA": ".",
                    "yo-NG": ".",
                    "zh-CN": ".",
                    "zh-HK": ".",
                    "zh-TW": ".",
                    "zu-ZA": "."
                });
                __c.eab = class {
                    push(a) {
                        this.array[++this.Lf] = a
                    }
                    pop() {
                        __c.y(!this.isEmpty());
                        return this.array[this.Lf--]
                    }
                    isEmpty() {
                        return 0 > this.Lf
                    }
                    map(a) {
                        return this.array.slice(0, this.Lf + 1).map(a)
                    }
                    constructor(a) {
                        this.Lf = -1;
                        this.array = Array(a)
                    }
                };
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/bbd48797e325e118.js.map