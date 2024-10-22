(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [1945], {

        /***/
        594750: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(686040);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var D = __c.D;
                var y = __c.y;
                var tAb = function(a, b, c, d) {
                        c = new sAb(c, d);
                        y(1 === a.count(), "Only single widget root element is supported");
                        a = a.first();
                        y(null != a && "layout" === a.type, `Unexpected widget root found: ${null===a||void 0===a?void 0:a.type}`);
                        c.C8(a, b)
                    },
                    vAb = function(a) {
                        return { ...__c.zJ,
                            ...C6,
                            top: 0,
                            left: 0,
                            width: a.width,
                            height: a.height,
                            viewBox: {
                                top: 0,
                                left: 0,
                                width: a.z8.width,
                                height: a.z8.height
                            },
                            Za: a.Za.map(uAb)
                        }
                    },
                    wAb = function(a) {
                        switch (a.DF) {
                            case 0:
                                var b = __c.gj.yc().attrs({
                                    "font-size": a.fontSize,
                                    leading: a.lineHeight ? 1E3 * a.lineHeight : void 0,
                                    "text-align": a.textAlign || "start",
                                    "font-weight": a.fontWeight,
                                    "font-family": a.fontFamily,
                                    "font-kerning": "normal",
                                    "font-feature-liga": "on",
                                    "font-feature-clig": "on",
                                    "font-feature-calt": "on"
                                });
                                a.color && b.Xg("color", a.color);
                                b = b.Yb(a.text.endsWith("\n") ? a.text : `${a.text}\n`).build();
                                var c;
                                return { ...__c.xM,
                                    ...D6,
                                    ...C6,
                                    La: null !== (c = a.La) && void 0 !== c ? c : 0,
                                    text: b,
                                    Wg: 2
                                };
                            case 1:
                                return b = a.text, { ...__c.xM,
                                    ...D6,
                                    ...C6,
                                    text: b,
                                    Wg: 2
                                };
                            default:
                                throw new D(a);
                        }
                    },
                    H6 = function({
                        content: a,
                        fill: b,
                        border: c,
                        N: d
                    }) {
                        b = { ...__c.WUa,
                            fill: E6(b),
                            border: F6(c),
                            N: G6(d)
                        };
                        switch (a.type) {
                            case "shape":
                                return { ...b,
                                    element: vAb(a)
                                };
                            case "text":
                                return { ...b,
                                    element: wAb(a)
                                };
                            case "layout":
                                return { ...b,
                                    element: xAb(a)
                                };
                            default:
                                throw new D(a);
                        }
                    },
                    xAb = function({
                        cells: a,
                        border: b,
                        fill: c,
                        N: d,
                        gridTemplateColumns: e,
                        gridTemplateRows: f,
                        columnGap: g,
                        rowGap: h
                    }) {
                        return { ...__c.XUa,
                            ...D6,
                            ...C6,
                            G: D6.width,
                            P: D6.height,
                            fill: E6(c),
                            border: F6(b),
                            direction: 1,
                            N: G6(d),
                            cells: new Map(a.map(k => [k.id, H6(k)])),
                            behavior: {
                                rules: [{
                                    Ef: void 0,
                                    grid: {
                                        gridTemplateColumns: e,
                                        gridTemplateRows: f,
                                        columnGap: null !== g && void 0 !== g ? g : 0,
                                        rowGap: null !== h && void 0 !== h ? h : 0,
                                        eg: yAb(a)
                                    }
                                }]
                            },
                            $e: void 0
                        }
                    },
                    yAb = function(a) {
                        return new Map(a.map(b => [b.id, zAb(b)]))
                    },
                    zAb = function(a) {
                        const b = a.placement.padding;
                        return { ...__c.$A,
                            ...a.placement,
                            alignSelf: "center",
                            padding: { ...__c.TR,
                                ...(null != b ? "number" === typeof b ? {
                                    all: b
                                } : b : {})
                            }
                        }
                    },
                    F6 = function(a) {
                        var b;
                        const c = null !== (b = null === a || void 0 === a ? void 0 : a.color) && void 0 !== b ? b : "#000000";
                        var d;
                        return { ...__c.RR,
                            all: a ? { ...__c.UR,
                                weight: null !== (d = a.weight) && void 0 !==
                                    d ? d : 1,
                                color: c,
                                jg: !0
                            } : void 0
                        }
                    },
                    G6 = function(a) {
                        return { ...__c.SR,
                            ...(null != a ? "number" === typeof a ? {
                                all: a
                            } : a : {})
                        }
                    },
                    uAb = function(a) {
                        return { ...__c.AJ,
                            ...a,
                            fill: E6(a.fill),
                            stroke: AAb(a.stroke)
                        }
                    },
                    AAb = function(a) {
                        return a ? { ...__c.UR,
                            color: a.color,
                            weight: a.weight
                        } : void 0
                    },
                    E6 = function(a) {
                        var b;
                        return { ...__c.CJ,
                            color: null === a || void 0 === a ? void 0 : a.color,
                            La: null !== (b = null === a || void 0 === a ? void 0 : a.La) && void 0 !== b ? b : 0
                        }
                    },
                    GAb = function(a, b) {
                        const c = new Map(b.cells.map(e => [e.id, e]));
                        BAb(a.cells, c, (e, f) => {
                            let g = !1;
                            CAb(e.element,
                                f.content, () => {
                                    a.cells.delete(f.id);
                                    a.cells.set(f.id, H6(f));
                                    g = !0
                                });
                            g || (I6(e.fill, f.fill), DAb(e.border, f.border), EAb(e.N, f.N))
                        }, e => H6(e));
                        FAb(a.behavior, b, c);
                        I6(a.fill, b.fill);
                        EAb(a.N, b.N);
                        DAb(a.border, b.border);
                        var d;
                        a.La = null !== (d = b.La) && void 0 !== d ? d : 0
                    },
                    FAb = function(a, b, c) {
                        J6(a.rules, [b], d => {
                            HAb(d.grid.gridTemplateColumns, b.gridTemplateColumns) || (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                            HAb(d.grid.gridTemplateRows, b.gridTemplateRows) || (d.grid.gridTemplateRows = b.gridTemplateRows);
                            var e;
                            d.grid.columnGap =
                                null !== (e = b.columnGap) && void 0 !== e ? e : 0;
                            var f;
                            d.grid.rowGap = null !== (f = b.rowGap) && void 0 !== f ? f : 0;
                            BAb(d.grid.eg, c, (g, h) => {
                                const k = h.placement.padding,
                                    l = h.placement.gridColumnEnd,
                                    m = h.placement.gridRowStart,
                                    n = h.placement.gridRowEnd,
                                    p = h.placement.alignSelf;
                                g.gridColumnStart = h.placement.gridColumnStart;
                                g.gridColumnEnd = l;
                                g.gridRowStart = m;
                                g.gridRowEnd = n;
                                "number" === typeof k && g.padding.all !== k ? g.padding.all = k : "number" !== typeof k && (g.padding.ra = null === k || void 0 === k ? void 0 : k.ra, g.padding.Ea = null === k || void 0 ===
                                    k ? void 0 : k.Ea, g.padding.qa = null === k || void 0 === k ? void 0 : k.qa, g.padding.Ja = null === k || void 0 === k ? void 0 : k.Ja);
                                g.alignSelf = p
                            }, g => zAb(g))
                        }, d => {
                            var e, f;
                            return {
                                Ef: void 0,
                                grid: {
                                    gridTemplateColumns: b.gridTemplateColumns,
                                    gridTemplateRows: b.gridTemplateRows,
                                    columnGap: null !== (e = b.columnGap) && void 0 !== e ? e : 0,
                                    rowGap: null !== (f = b.rowGap) && void 0 !== f ? f : 0,
                                    eg: yAb(d.cells)
                                }
                            }
                        })
                    },
                    IAb = function(a, b) {
                        J6(a.Za, b.Za, (e, f) => {
                            e.d = f.d;
                            I6(e.fill, f.fill);
                            e.stroke.ref && f.stroke ? (e = e.stroke.ref, f = f.stroke, e.color = f.color, e.weight = f.weight) :
                                e.stroke.set(AAb(f.stroke))
                        }, e => uAb(e));
                        const {
                            viewBox: c,
                            width: d
                        } = vAb(b);
                        a.width = d;
                        __c.Dr(a.viewBox).equals(__c.Dr(c)) || (a.viewBox = c)
                    },
                    CAb = function(a, b, c) {
                        switch (b.type) {
                            case "shape":
                                "shape" === a.type ? IAb(a, b) : c();
                                break;
                            case "text":
                                "text" === a.type && __c.gj.domain.Ob(__c.gj.va(a.text), wAb(b).text) || c();
                                break;
                            case "layout":
                                "layout" === a.type ? GAb(a, b) : c();
                                break;
                            default:
                                throw new D(b);
                        }
                    },
                    BAb = function(a, b, c, d) {
                        const e = new Set(a.keys());
                        for (const [f, g] of b)(b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
                        e.forEach(f =>
                            a.delete(f))
                    },
                    J6 = function(a, b, c, d) {
                        const e = a.toArray();
                        for (let f = 0; f < Math.max(e.length, b.length); f++)
                            if (f < e.length && f < b.length) c(e[f], b[f]);
                            else if (f < e.length && f >= b.length) a.delete(e[f]);
                        else if (f >= e.length && f < b.length) {
                            const g = d(b[f]);
                            a.append(g)
                        }
                    },
                    I6 = function(a, b) {
                        a.color = null === b || void 0 === b ? void 0 : b.color;
                        var c;
                        a.La = null !== (c = null === b || void 0 === b ? void 0 : b.La) && void 0 !== c ? c : 0
                    },
                    EAb = function(a, b) {
                        b = G6(b);
                        a.all = b.all;
                        a.Wz = b.Wz;
                        a.Uz = b.Uz;
                        a.Vz = b.Vz;
                        a.Tz = b.Tz
                    },
                    DAb = function(a, b) {
                        b = F6(b).all;
                        var c;
                        if (c =
                            b) c = a.all.ref, c = !(c && b ? __c.IQ.domain.Ob(__c.IQ.va(c), b) : !c && !b);
                        c && a.all.set(b)
                    },
                    HAb = function(a, b) {
                        return a.length === b.length && a.every(c => b.includes(c))
                    },
                    KAb = function(a, b, c, d) {
                        let e = a.HDa.get(b);
                        if (e) return e;
                        e = {
                            Oh: new JAb(c.Xv, b, d, c.qfa),
                            lqa: void 0,
                            fza: void 0,
                            Wza: __c.XU.mode
                        };
                        a.HDa.set(b, e);
                        return e
                    },
                    MAb = function(a, b, c, d, e) {
                        var f, g;
                        e = KAb(a, c, b, e);
                        const h = e.Oh,
                            k = e.fza,
                            l = e.lqa,
                            m = e.Wza;
                        c = __c.CR.va(c);
                        const n = (null === (f = (g = a.Bw).bwa) || void 0 === f ? void 0 : f.call(g, d)) || __c.XU;
                        h.Kg === k && LAb.structural(c,
                            l) && n.mode === m || (e.lqa = c, e.fza = h.Kg, e.Wza = n.mode, b = b.render(h, n), a.FZa.update(d, b), tAb(d, b, (p, q) => a.kK.Cfa.set(p, q), (p, q, r) => a.kK.refs.set(p, {
                            ref: q,
                            key: r
                        })))
                    },
                    OAb = function(a, b) {
                        return {
                            IL: ({
                                $j: c
                            }) => {
                                var d;
                                const {
                                    Oh: e
                                } = KAb(a.renderer, c, b, a.zU), f = __c.GR.create([]), g = [];
                                g.push(NAb(() => {
                                    var k, l;
                                    return [null === (k = (l = a.Bw).bwa) || void 0 === k ? void 0 : k.call(l, f), __c.CR.va(c), e.Kg]
                                }, () => {
                                    MAb(a.renderer, b, c, f, a.zU)
                                }, {
                                    fireImmediately: !0,
                                    equals: LAb.structural
                                }));
                                const h = null === (d = b.UU) || void 0 === d ? void 0 : d.call(b, {
                                    Oh: e
                                });
                                h && g.push(h);
                                return {
                                    fb: f,
                                    dr: () => {
                                        g.forEach(k => k())
                                    }
                                }
                            }
                        }
                    },
                    QAb = function(a, b) {
                        let c = a.VY.get(b);
                        c || (c = PAb("weakKey"), a.VY.set(b, c));
                        c.reportObserved()
                    },
                    K6 = __webpack_require__(42782),
                    L6 = K6.LO,
                    RAb = K6.Fl,
                    LAb = K6.p6,
                    NAb = K6.U5,
                    PAb = K6.cp;
                var SAb = class {
                    static A(a) {
                        __c.P(a, {
                            T0a: L6.ref,
                            UU: L6.ref
                        })
                    }
                    constructor() {
                        SAb.A(this)
                    }
                };
                var TAb = class {
                        constructor() {
                            this.sources = new WeakMap
                        }
                    },
                    JAb = class {
                        static A(a) {
                            __c.P(a, {
                                uj: RAb
                            })
                        }
                        get Oga() {
                            var a = this.zU,
                                b = this.$j,
                                c = this.qfa;
                            let d = a.sources.get(b);
                            d || (d = L6.box(c), a.sources.set(b, d));
                            return d
                        }
                        get Kg() {
                            return this.Oga.get()
                        }
                        get uj() {
                            return this.Xv.Lr({
                                type: "dict",
                                value: this.$j
                            })
                        }
                        Sm(a) {
                            a instanceof Function ? this.Oga.set(a(this.Kg)) : this.Oga.set(a)
                        }
                        constructor(a, b, c, d) {
                            JAb.A(this);
                            this.Xv = a;
                            this.$j = b;
                            this.zU = c;
                            this.qfa = d
                        }
                    };
                var sAb = class {
                    aY(a, b) {
                        this.ADa(a, b);
                        b.ref && this.hka(a, b.ref, b.key)
                    }
                    E8(a, b) {
                        b.ref && this.hka(a.text, b.ref, b.key)
                    }
                    Hna(a, b) {
                        switch (b.content.type) {
                            case "shape":
                                y("shape" === a.element.type);
                                this.aY(a.element, b.content);
                                break;
                            case "text":
                                y("text" === a.element.type);
                                this.E8(a.element, b.content);
                                break;
                            case "layout":
                                y("layout" === a.element.type);
                                this.C8(a.element, b.content);
                                break;
                            default:
                                throw new D(b.content);
                        }
                    }
                    C8(a, b) {
                        this.ADa(a, b);
                        b.ref && this.hka(a, b.ref, b.key);
                        for (const [c, d] of a.cells) a = b.cells.find(e =>
                            e.id === c), y(!!d && !!a), this.Hna(d, a)
                    }
                    constructor(a, b) {
                        this.ADa = a;
                        this.hka = b
                    }
                };
                var C6 = {
                        locked: !0,
                        Oo: {
                            Qba: !1,
                            D7: !1
                        },
                        ei: !0
                    },
                    D6 = {
                        top: 0,
                        left: 0,
                        width: 1,
                        height: 1
                    };
                var UAb = class {
                    constructor(a) {
                        this.Ll = a;
                        this.update = (b, c) => {
                            J6(b, [c], (d, e) => {
                                switch (d.type) {
                                    case "layout":
                                        GAb(d, e);
                                        d.width = c.minWidth;
                                        d.height = c.minHeight;
                                        d.G = c.minWidth;
                                        d.P = c.minHeight;
                                        this.Ll.fka(d);
                                        break;
                                    default:
                                        throw Error(`Not supported element type: ${d.type}`);
                                }
                            }, d => {
                                a: switch (d.type) {
                                    case "layout":
                                        d = { ...xAb(d),
                                            width: d.minWidth,
                                            height: d.minHeight,
                                            G: d.minWidth,
                                            P: d.minHeight,
                                            locked: !1,
                                            ei: !1,
                                            Oo: void 0
                                        };
                                        break a;
                                    default:
                                        throw new D(d.type);
                                }
                                return d
                            })
                        }
                    }
                };
                var VAb = class {
                    constructor(a, b, c) {
                        this.FZa = a;
                        this.kK = b;
                        this.Bw = c;
                        this.HDa = new WeakMap
                    }
                };
                var WAb = !1,
                    XAb = class {
                        register(a, b) {
                            this.cA.has(a) || (this.cA.set(a, b), WAb || (__c.FR.set(a, OAb(this, b)), WAb = !0))
                        }
                        get(a) {
                            return this.cA.get(a)
                        }
                        constructor(a, b, c) {
                            this.renderer = a;
                            this.zU = b;
                            this.Bw = c;
                            this.cA = new Map
                        }
                    };
                var YAb = class {
                    delete(a) {
                        var b;
                        const c = this.map.delete(a);
                        c && (null === (b = this.VY.get(a)) || void 0 === b ? void 0 : b.reportChanged());
                        return c
                    }
                    get(a) {
                        QAb(this, a);
                        return this.map.get(a)
                    }
                    has(a) {
                        QAb(this, a);
                        return this.map.has(a)
                    }
                    set(a, b) {
                        if (!this.map.has(a) || this.map.get(a) !== b) {
                            var c;
                            this.map.set(a, b);
                            null === (c = this.VY.get(a)) || void 0 === c ? void 0 : c.reportChanged()
                        }
                        return this
                    }
                    constructor() {
                        this.VY = new WeakMap;
                        this.map = new WeakMap
                    }
                };
                var ZAb = class {
                        constructor() {
                            this.Cfa = new YAb;
                            this.refs = new YAb
                        }
                    },
                    $Ab = class {
                        getContext(a) {
                            return this.kK.refs.get(a)
                        }
                        LM(a) {
                            return this.kK.Cfa.get(a)
                        }
                        constructor(a, b, c) {
                            this.kK = a;
                            this.zU = b;
                            this.renderer = c
                        }
                    };
                __c.nsa = {
                    MWa: function(a) {
                        const b = new SAb;
                        switch (a.Kc) {
                            case "fixed":
                                const c = new ZAb;
                                a = new VAb(new UAb(a.Ll), c, b);
                                const d = new TAb;
                                return {
                                    Bw: b,
                                    Drb: new $Ab(c, d, a),
                                    c8a: new XAb(a, d, b),
                                    kK: c
                                };
                            case "responsive":
                                throw Error("Not implemented");
                            default:
                                throw new D(a);
                        }
                    }
                };
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/5089899fdeb794c9.js.map