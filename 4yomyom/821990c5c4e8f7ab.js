(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [7477], {

        /***/
        225503: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(784117);
            __web_req__(365119);
            __web_req__(688487);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var jv;
                var D = __c.D;
                var B = __c.B;
                var scb, UX, vcb, wcb, xcb, ycb, rcb, zcb, Bcb, Ccb, Ecb;
                __c.TX = function(a, b, c) {
                    b = a.gba(b, c);
                    return __c.EV(a, b.span.Qc, b.span.Rc)
                };
                scb = function(a, b) {
                    var c, d;
                    a = null === (d = a.Fa) || void 0 === d ? void 0 : null === (c = d.Ca) || void 0 === c ? void 0 : c.mc;
                    c = rcb(b, a);
                    "date" === c.type ? (c = {
                        year: c.date.getUTCFullYear(),
                        month: c.date.getUTCMonth() + 1,
                        day: c.date.getUTCDate()
                    }, b = {
                        type: 2,
                        value: b,
                        date: c
                    }) : b = {
                        type: 1,
                        value: b
                    };
                    return b
                };
                UX = function(a, b, c = {
                    efa: !1,
                    ffa: !1
                }) {
                    var d = tcb;
                    b = B(__c.PX(b.format));
                    const e = b.decimal;
                    var f;
                    if (e && c.efa) {
                        var g;
                        var h;
                        b: {
                            var k = a.toString().trim().replace(/\\/g, "").replace(/"/g, ""),
                                l = d.Ed,
                                m = d.De;
                            if (k = k.match(ucb)) {
                                var [, n, p, q, , r] = k;
                                l = q.split(l);
                                if (!(2 < l.length)) {
                                    var [t, u] = l;
                                    l = t.includes(m);
                                    for (k = t; k.includes(m);) k = k.replace(m, "");
                                    var w = parseFloat(`${k}${u?`.${u}`:""}`) * ("-" === n ? -1 : 1);
                                    m = {};
                                    k = {};
                                    if (p.trim()) switch (p.trim()) {
                                        case "$":
                                            m = {
                                                type: "currency",
                                                symbol: "$",
                                                position: "prefix",
                                                hj: !0
                                            };
                                            break;
                                        default:
                                            w =
                                                void 0;
                                            break b
                                    } else if (r.trim()) switch (r.trim()) {
                                        case "%":
                                            k = {
                                                type: "percentage"
                                            };
                                            break;
                                        default:
                                            w = void 0;
                                            break b
                                    }
                                    w = {
                                        value: w,
                                        format: {
                                            type: "plain",
                                            OL: null !== (g = null === u || void 0 === u ? void 0 : u.length) && void 0 !== g ? g : 0,
                                            hj: l,
                                            ...m,
                                            ...k
                                        }
                                    };
                                    break b
                                }
                            }
                            w = void 0
                        }
                        if (g = w) {
                            var x;
                            g = null !== (x = null === (h = g.format) || void 0 === h ? void 0 : h.OL) && void 0 !== x ? x : 0
                        } else g = void 0;
                        e.length = null !== (f = g) && void 0 !== f ? f : 0
                    }
                    return __c.QX(a, { ...b,
                        decimal: e,
                        hj: c.ffa ? !1 : b.hj
                    }, d)
                };
                vcb = function(a) {
                    var b = B(__c.PX(a.format));
                    a = b.decimal;
                    b = b.hj;
                    var c;
                    return {
                        type: "plain",
                        OL: null !== (c = null === a || void 0 === a ? void 0 : a.length) && void 0 !== c ? c : 0,
                        hj: b
                    }
                };
                wcb = function(a) {
                    a = B(__c.PX(a.format));
                    const b = a.decimal,
                        c = a.hj,
                        d = a.locale,
                        {
                            symbol: e,
                            position: f
                        } = B(a.currency);
                    var g;
                    return {
                        type: "currency",
                        symbol: e,
                        position: f,
                        locale: d,
                        OL: null !== (g = null === b || void 0 === b ? void 0 : b.length) && void 0 !== g ? g : 0,
                        hj: c
                    }
                };
                xcb = function(a) {
                    a = B(__c.PX(a.format));
                    const b = a.decimal,
                        c = a.hj;
                    __c.y(a.percent, "Percentage format string should have a percent symbol");
                    var d;
                    return {
                        type: "percentage",
                        OL: null !== (d = null === b || void 0 === b ? void 0 : b.length) && void 0 !== d ? d : 0,
                        hj: c
                    }
                };
                ycb = function(a) {
                    if (a) switch (a.type) {
                        case "plain":
                            return vcb(a);
                        case "currency":
                            return wcb(a);
                        case "percentage":
                            return xcb(a);
                        case "date":
                            return {
                                type: "date"
                            };
                        default:
                            throw new D(a);
                    }
                };
                rcb = function(a, b) {
                    if (null == b) return b = a.toString(), {
                        type: "plain",
                        YX: b,
                        z0: b
                    };
                    switch (b.type) {
                        case "plain":
                            var c = UX(a, b);
                            b = UX(a, b, {
                                efa: !0,
                                ffa: !0
                            });
                            return {
                                type: "plain",
                                YX: c,
                                z0: b
                            };
                        case "percentage":
                            return c = UX(a, b), b = UX(a, b, {
                                efa: !0,
                                ffa: !0
                            }), {
                                type: "percentage",
                                YX: c,
                                z0: b
                            };
                        case "currency":
                            return {
                                type: "currency",
                                YX: UX(a, b),
                                z0: a.toString()
                            };
                        case "date":
                            return a = new Date(864E5 * a - __c.bcb), b = B(__c.RX(b.format)), b = __c.SX(a, b), {
                                type: "date",
                                date: a,
                                YX: b,
                                z0: b
                            };
                        default:
                            throw new D(b);
                    }
                };
                zcb = function(a) {
                    if (null != a) switch (a.type) {
                        case "plain_number":
                            return {
                                type: a.type,
                                mc: vcb(a.mc)
                            };
                        case "currency":
                            return {
                                type: a.type,
                                mc: wcb(a.mc)
                            };
                        case "percentage":
                            return {
                                type: a.type,
                                mc: xcb(a.mc)
                            };
                        case "date":
                            return {
                                type: a.type,
                                mc: {
                                    type: "date"
                                }
                            };
                        case "select":
                            return {
                                type: a.type,
                                mc: ycb(a.mc),
                                options: a.options
                            };
                        default:
                            throw new D(a);
                    }
                };
                __c.Acb = function(a, b) {
                    var c = b.bC;
                    var d = a.tla.aw.get(c);
                    null != d ? c = d.sheet : (__c.wx(a.tla, a.document), d = a.tla.aw.get(c), c = B(null === d || void 0 === d ? void 0 : d.sheet, "no sheet with id {}", c));
                    a = a.eta.I4a(c, b);
                    return {
                        sheet: c,
                        range: a
                    }
                };
                Bcb = function(a) {
                    switch (a.type) {
                        case 0:
                            return a.value.column;
                        case 1:
                            return a.value;
                        case 2:
                            break;
                        default:
                            throw new D(a);
                    }
                };
                __c.Dcb = function(a, b) {
                    return a === b ? !0 : null == a || null == b || a.sheet !== b.sheet ? !1 : a.range === b.range ? !0 : null == a.range || null == b.range ? !1 : Ccb(a.range.start, b.range.start) && Ccb(a.range.end, b.range.end)
                };
                Ccb = function(a, b) {
                    if (a === b) return !0;
                    switch (a.type) {
                        case 0:
                            return 0 === b.type && a.value.column.id === b.value.column.id && a.value.Da.id === b.value.Da.id;
                        case 1:
                            return 1 === b.type && a.value.id === b.value.id;
                        case 2:
                            return 2 === b.type && a.value.id === b.value.id;
                        default:
                            throw new D(a);
                    }
                };
                Ecb = function(a) {
                    switch (a.type) {
                        case 0:
                            return a.value.Da;
                        case 1:
                            break;
                        case 2:
                            return a.value;
                        default:
                            throw new D(a);
                    }
                };
                __c.LP.prototype.Ci = __c.ea(3, function(a, b) {
                    const c = this.predicate;
                    __c.v(c(a));
                    __c.v(c(b));
                    return this.base.Ci(a, b)
                });
                __c.Kf.prototype.Ci = __c.ea(2, function(a, b) {
                    return this.values.Ci(a, b)
                });
                __c.MP.prototype.Ci = __c.ea(1, function(a, b) {
                    a = this.JT.get(a);
                    b = this.JT.get(b);
                    __c.v(null != a);
                    __c.v(null != b);
                    return a < b ? -1 : a > b ? 1 : 0
                });
                __c.NP.prototype.Ci = __c.ea(0, function(a, b) {
                    return this.list.Ci(a, b)
                });
                var VX = __webpack_require__(42782).Fl;
                var Fcb = __webpack_require__(854928).Om;
                var Gcb = class extends __c.By {
                    get aw() {
                        this.cC = this.yV = 0;
                        return this.E6
                    }
                    cJa(a) {
                        this.sD && this.E6.set(a.id, {
                            sheet: a.config,
                            cC: this.cC++,
                            parent: this.sD
                        })
                    }
                    bJa(a) {
                        this.sD && this.E6.set(a.id, {
                            sheet: a.config,
                            cC: this.cC++,
                            parent: this.sD
                        })
                    }
                    yw(a) {
                        this.cC = 0;
                        this.sD = {
                            type: "page",
                            page: a,
                            yV: this.yV++
                        };
                        super.yw(a);
                        __c.Si(a) && (__c.y(null != a.id), this.sD && this.E6.set(a.id, {
                            sheet: a.sheet,
                            cC: this.cC++,
                            parent: this.sD
                        }))
                    }
                    $X(a) {
                        this.cC = 0;
                        this.sD = {
                            type: "body",
                            body: a,
                            yV: this.yV++
                        };
                        super.$X(a)
                    }
                    constructor() {
                        super();
                        this.E6 =
                            new Map;
                        this.sD = void 0;
                        this.cC = this.yV = 0
                    }
                };
                var Hcb, Icb;
                Hcb = Object.freeze({
                    type: 6,
                    value: void 0
                });
                Icb = class {
                    static A(a) {
                        __c.P(a, {
                            zx: VX,
                            lu: VX,
                            isEmpty: VX,
                            Ca: VX
                        })
                    }
                    get Bg() {
                        return this.Fa.content
                    }
                    get zx() {
                        var a;
                        switch (null === (a = this.Bg) || void 0 === a ? void 0 : a.type) {
                            case void 0:
                                return Hcb;
                            case "number":
                                return scb(this, this.Bg.value);
                            case "boolean":
                                return {
                                    type: 3,
                                    value: this.Bg.value
                                };
                            case "plaintext":
                                return {
                                    type: 4,
                                    value: this.Bg.value
                                };
                            case "media":
                                return {
                                    type: 5,
                                    value: this.Bg.value.map(c => __c.DQa.va(c))
                                };
                            case "text2":
                                return {
                                    type: 4,
                                    value: this.Bg.value.ba
                                };
                            case "text3":
                                const b = [];
                                this.Bg.value.forEach({
                                    ba: c =>
                                        b.push(c),
                                    item: () => {
                                        throw Error();
                                    }
                                });
                                return {
                                    type: 4,
                                    value: b.join("")
                                };
                            case "formula":
                                switch (a = this.Am.evaluate(this.sheet, this.Bg.value), a.type) {
                                    case 0:
                                        return Hcb;
                                    case 1:
                                        return scb(this, a.value);
                                    case 2:
                                        return {
                                            type: 3,
                                            value: a.value
                                        };
                                    case 3:
                                        return {
                                            type: 4,
                                            value: a.value
                                        };
                                    case 4:
                                        return {
                                            type: 0,
                                            error: a.value
                                        };
                                    case 5:
                                        throw Error();
                                    default:
                                        throw new D(a);
                                }
                            default:
                                throw new D(this.Bg);
                        }
                    }
                    get OSa() {
                        var a;
                        switch (null === (a = this.Bg) || void 0 === a ? void 0 : a.type) {
                            case void 0:
                            case "number":
                            case "boolean":
                            case "plaintext":
                            case "media":
                            case "text2":
                            case "text3":
                                var b;
                                return null === (b = this.Fa) || void 0 === b ? void 0 : b.Ca;
                            case "formula":
                                switch (a = this.Am.evaluate(this.sheet, this.Bg.value), a.type) {
                                    case 0:
                                    case 2:
                                    case 3:
                                    case 4:
                                    case 5:
                                        var c;
                                        return null === (c = this.Fa) || void 0 === c ? void 0 : c.Ca;
                                    case 1:
                                        var d, e;
                                        return null !== (e = null === (d = this.Fa) || void 0 === d ? void 0 : d.Ca) && void 0 !== e ? e : a.Ca;
                                    default:
                                        throw new D(a);
                                }
                            default:
                                throw new D(this.Bg);
                        }
                    }
                    get lu() {
                        const a = this.zx,
                            b = this.OSa;
                        switch (a.type) {
                            case 1:
                            case 2:
                                return rcb(a.value, null === b || void 0 === b ? void 0 : b.mc).YX;
                            case 3:
                                return a.value ?
                                    "TRUE" : "FALSE";
                            case 4:
                                return a.value;
                            case 5:
                            case 6:
                                return "";
                            case 0:
                                return __c.Eab[a.error];
                            default:
                                throw new D(a);
                        }
                    }
                    get isEmpty() {
                        var a;
                        return "media" === (null === (a = this.Bg) || void 0 === a ? void 0 : a.type) ? 0 === this.Bg.value.count() : 0 === this.lu.length
                    }
                    get Ca() {
                        var a = (a = this.sheet.layout.cells.get(this.Fa.span.Rc, this.Fa.span.Qc)) ? zcb(a.ref.Ca.ref) : void 0;
                        return a
                    }
                    constructor(a, b, c, d) {
                        Icb.A(this);
                        this.Am = a;
                        this.yva = b;
                        this.sheet = c;
                        this.Fa = d
                    }
                };
                __c.Kcb = class {
                    forEach(a, b, c) {
                        if (a.rows.has(b.Rc) && a.rows.has(b.Vf) && a.cols.has(b.Qc) && a.cols.has(b.Uf) && !(0 < a.rows.Ci(b.Rc, b.Vf) || 0 < a.cols.Ci(b.Qc, b.Uf))) {
                            var d = b.Vf && a.rows.next(b.Vf),
                                e = b.Uf && a.cols.next(b.Uf);
                            for (let g = b.Rc; null != g && g !== d; g = a.rows.next(g))
                                for (let h = b.Qc; null != h && h !== e; h = a.cols.next(h)) {
                                    var f = __c.TX(a.cells, h, g);
                                    f && f.span.Rc === g && f.span.Qc === h && (f = this.KA(a, g, h)) && c(f, g, h)
                                }
                        }
                    }
                    constructor(a) {
                        var b = new Jcb;
                        this.Am = a;
                        this.yva = b;
                        this.KA = Fcb((c, d, e) => (d = __c.TX(c.cells, e, d)) && new Icb(this.Am,
                            this.yva, c, d))
                    }
                };
                __c.RX("dd mmm yyyy");
                var ucb = RegExp("^(-?)([^0-9\\.,\u2019+\\-\\/]{0,50})([+-]?[0-9 \\.,\u2019]*[0-9\\.,])([eE][+-]?[0-9]*)?([^0-9\\.,\u2019+\\-\\/]{0,50})$");
                var tcb = {
                        De: ",",
                        Ed: "."
                    },
                    Jcb = class {};
                __c.WX = class {
                    constructor(a) {
                        this.Fp = new __c.Kcb(a)
                    }
                };
                __c.WX.prototype.mT = __c.da(29);
                __c.ZX = class {
                    getCells(a) {
                        var b = __c.Acb(this, a);
                        if (null == b.range) return {
                            columns: [],
                            rows: []
                        };
                        a = b.sheet;
                        b = b.range;
                        return {
                            columns: (new __c.XX(a, b)).toArray(),
                            rows: (new __c.YX(a, b)).toArray()
                        }
                    }
                    constructor(a, b, c, d) {
                        this.document = a;
                        this.tla = b;
                        this.F6 = c;
                        this.eta = d
                    }
                };
                __c.ZX.prototype.mT = __c.da(28);
                __c.XX = class {*[Symbol.iterator]() {
                        var a = this.Qc;
                        const b = this.RSa,
                            c = this.sheet;
                        for (; null != a && a !== b; a = c.layout.cols.next(a)) yield a
                    }
                    toArray() {
                        const a = [];
                        for (const b of this) a.push(b);
                        return a
                    }
                    first(a) {
                        for (const b of this)
                            if (a(b)) return b
                    }
                    findIndex(a) {
                        let b = 0;
                        for (const c of this) {
                            if (a(c)) return b;
                            ++b
                        }
                        return -1
                    }
                    constructor(a, b) {
                        this.sheet = a;
                        var c;
                        this.Qc = b ? null !== (c = Bcb(b.start)) && void 0 !== c ? c : a.layout.cols.first() : B(a.layout.cols.first());
                        var d;
                        this.RSa = (b = b ? null !== (d = Bcb(b.end)) && void 0 !== d ? d : a.layout.cols.last() :
                            a.layout.cols.last()) && a.layout.cols.next(b)
                    }
                };
                __c.YX = class {*[Symbol.iterator]() {
                        var a = this.Rc;
                        const b = this.SSa,
                            c = this.sheet;
                        for (; null != a && a !== b; a = c.layout.rows.next(a)) yield a
                    }
                    toArray() {
                        const a = [];
                        for (const b of this) a.push(b);
                        return a
                    }
                    first(a) {
                        for (const b of this)
                            if (a(b)) return b
                    }
                    findIndex(a) {
                        let b = 0;
                        for (const c of this) {
                            if (a(c)) return b;
                            ++b
                        }
                        return -1
                    }
                    constructor(a, b) {
                        this.sheet = a;
                        var c;
                        this.Rc = b ? null !== (c = Ecb(b.start)) && void 0 !== c ? c : a.layout.rows.first() : B(a.layout.rows.first());
                        var d;
                        this.SSa = (b = b ? null !== (d = Ecb(b.end)) && void 0 !== d ? d : a.layout.rows.last() :
                            a.layout.rows.last()) && a.layout.rows.next(b)
                    }
                };
                jv = __c.jv = {};
                jv.F9a = __c.XX;
                jv.e$a = __c.ZX;
                jv.Ucb = __c.YX;
                jv.OPa = (a, b, c) => new __c.ZX(a, new Gcb, new __c.WX(b), c);
                jv.kob = __c.Dcb;
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/821990c5c4e8f7ab.js.map