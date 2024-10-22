(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [2708], {

        /***/
        493471: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(784117);
            __web_req__(225503);
            __web_req__(365119);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var gc = __c.gc;
                var Oc = __c.Oc;
                var Ss = __c.Ss;
                var v = __c.v;
                var P = __c.P;
                var Av = __c.Av;
                var TX = __c.TX;
                var B = __c.B;
                var Me = __c.Me;
                var Dr = __c.Dr;
                var ye = __c.ye;
                var y = __c.y;
                var D = __c.D;
                var N = __c.N;
                var hyb = function(a) {
                        switch (a) {
                            case 4:
                                return N("9ND0kg");
                            case 2:
                                return N("ibdecg");
                            case 7:
                                return N("446quA");
                            case 5:
                                return N("j1fbqg");
                            case 1:
                                return N("O5i4AQ");
                            case 6:
                                return N("C0VHsg");
                            case 3:
                                return N("+IXmVg");
                            default:
                                throw new D(a);
                        }
                    },
                    F5 = function(a) {
                        return b => b in a
                    },
                    G5 = function(a) {
                        return b => ({
                            type: "react",
                            node: (0, __c.M)(a, { ...b
                            })
                        })
                    },
                    H5 = function(a, b, c, d) {
                        if (a && "auto" !== a) return a;
                        if (!b || "date" === c || "select" === c) return "start";
                        switch (b) {
                            case "boolean":
                                return "center";
                            case "number":
                                return "end";
                            case "formula":
                                if (d) a: switch (d()) {
                                    case 3:
                                        a =
                                            "center";
                                        break a;
                                    case 1:
                                        a = "end";
                                        break a;
                                    default:
                                        a = "start"
                                } else a = "start";
                                return a;
                            default:
                                return "start"
                        }
                    },
                    iyb = function(a, b) {
                        b = "rtl" === b;
                        return a && "center" !== a ? "end" === a ? b ? "left" : "right" : b ? "right" : "left" : "center"
                    },
                    jyb = function(a) {
                        return a && "center" !== a ? "end" === a ? "flex-end" : "flex-start" : a
                    },
                    lyb = function(a) {
                        var b, c = a.Ht,
                            d = a.content;
                        a = a.context;
                        y("formula" === (null === d || void 0 === d ? void 0 : null === (b = d.Bg) || void 0 === b ? void 0 : b.type));
                        b = d.Bg.value;
                        switch (b.type) {
                            case "invalid":
                                b = b.E5;
                                break;
                            case "canonical":
                                b =
                                    b.wG;
                                break;
                            default:
                                throw new D(b);
                        }
                        y(b.startsWith("="));
                        const e = d.zx;
                        b = {
                            type: "dom",
                            render: h => h.innerText = ""
                        };
                        let f;
                        switch (e.type) {
                            case 6:
                                f = b;
                                break;
                            case 1:
                            case 3:
                            case 4:
                            case 2:
                            case 5:
                                f = kyb(c, a, d.lu);
                                break;
                            case 0:
                                f = {
                                    type: "react",
                                    node: I5(__c.KS, {
                                        label: hyb(e.error),
                                        children: I5(__c.fN, {
                                            width: "full",
                                            display: "flex",
                                            justifyContent: "center",
                                            children: I5(__c.C9a, {
                                                tone: "critical"
                                            })
                                        })
                                    })
                                };
                                break;
                            default:
                                throw new D(e);
                        }
                        if (!f) return b;
                        c = ye(__c.lR, a.attrs);
                        d = H5(a.attrs.textAlign, "formula", void 0, () => e.type);
                        const g = {
                            textAlign: iyb(d, c.direction),
                            justifyContent: jyb(d)
                        };
                        switch (f.type) {
                            case "dom":
                                return {
                                    type: "dom",
                                    render: h => {
                                        Object.assign(h.style, g);
                                        f.render(h)
                                    }
                                };
                            case "react":
                                return {
                                    type: "react",
                                    node: I5("div", {
                                        style: g,
                                        children: f.node
                                    })
                                };
                            default:
                                throw new D(f);
                        }
                    },
                    kyb = function(a, b, c) {
                        var d;
                        return null === (d = a.U9) || void 0 === d ? void 0 : d.call(a, {
                            context: b,
                            value: c
                        })
                    },
                    tyb = function(a, b) {
                        const c = myb(a, b),
                            d = nyb(a, b),
                            e = oyb(a),
                            f = pyb(a, b),
                            g = qyb(a, b),
                            h = ryb(a, b),
                            k = syb(a, b);
                        return function({
                            context: l,
                            NI: m,
                            oi: n
                        }) {
                            var p;
                            const q = b.KA(l.sheet,
                                l.Da, l.col);
                            y(null != q);
                            const r = null === (p = q.Bg) || void 0 === p ? void 0 : p.type;
                            if (null == r || q.isEmpty) return c(l);
                            switch (r) {
                                case "number":
                                    var t;
                                    switch (null === (t = q.Ca) || void 0 === t ? void 0 : t.type) {
                                        case "plain_number":
                                        case "currency":
                                        case "percentage":
                                            return d(l);
                                        case "date":
                                        case "select":
                                            return e(l);
                                        default:
                                            return d(l)
                                    }
                                case "boolean":
                                case "plaintext":
                                    var u;
                                    switch (null === (u = q.Ca) || void 0 === u ? void 0 : u.type) {
                                        case "select":
                                            return e(l);
                                        default:
                                            return d(l)
                                    }
                                case "formula":
                                    var w;
                                    switch (null === (w = q.Ca) || void 0 === w ?
                                        void 0 : w.type) {
                                        case "date":
                                        case "select":
                                            return e(l);
                                        default:
                                            return f(l)
                                    }
                                case "media":
                                    return g(l, m);
                                case "text2":
                                    var x;
                                    switch (null === (x = q.Ca) || void 0 === x ? void 0 : x.type) {
                                        case "select":
                                            return e(l);
                                        default:
                                            return h(l, n)
                                    }
                                case "text3":
                                    var z;
                                    switch (null === (z = q.Ca) || void 0 === z ? void 0 : z.type) {
                                        case "select":
                                            return e(l);
                                        default:
                                            return k(l, n)
                                    }
                                default:
                                    throw new D(r);
                            }
                        }
                    },
                    myb = function(a, b) {
                        const c = oyb(a);
                        return function(d) {
                            var e;
                            const f = b.KA(d.sheet, d.Da, d.col);
                            y(null != f);
                            switch (null === (e = f.Ca) || void 0 === e ? void 0 :
                                e.type) {
                                case "plain_number":
                                case "currency":
                                case "percentage":
                                case void 0:
                                    break;
                                case "date":
                                case "select":
                                    return c(d);
                                default:
                                    throw new D(f.Ca);
                            }
                        }
                    },
                    nyb = function(a, b) {
                        return function(c) {
                            var d;
                            const e = b.KA(c.sheet, c.Da, c.col);
                            y(null != e);
                            return null === (d = a.U9) || void 0 === d ? void 0 : d.call(a, {
                                context: c,
                                value: e.lu
                            })
                        }
                    },
                    oyb = function(a) {
                        return function(b) {
                            var c;
                            return null === (c = a.gpa) || void 0 === c ? void 0 : c.call(a, {
                                context: b
                            })
                        }
                    },
                    pyb = function(a, b) {
                        return function(c) {
                            var d, e;
                            const f = b.KA(c.sheet, c.Da, c.col);
                            y("formula" ===
                                (null === f || void 0 === f ? void 0 : null === (d = f.Bg) || void 0 === d ? void 0 : d.type));
                            return null === (e = a.epa) || void 0 === e ? void 0 : e.call(a, {
                                context: c,
                                content: f
                            })
                        }
                    },
                    qyb = function(a, b) {
                        return function(c, d) {
                            var e, f;
                            const g = b.KA(c.sheet, c.Da, c.col);
                            y("media" === (null === g || void 0 === g ? void 0 : null === (e = g.Bg) || void 0 === e ? void 0 : e.type));
                            return null === (f = a.fpa) || void 0 === f ? void 0 : f.call(a, {
                                content: g.Bg,
                                context: c,
                                NI: d
                            })
                        }
                    },
                    ryb = function(a, b) {
                        return function(c, d) {
                            var e, f;
                            const g = b.KA(c.sheet, c.Da, c.col);
                            y("text2" === (null === g ||
                                void 0 === g ? void 0 : null === (e = g.Bg) || void 0 === e ? void 0 : e.type));
                            return null === (f = a.hpa) || void 0 === f ? void 0 : f.call(a, {
                                content: g.Bg,
                                context: c,
                                oi: d
                            })
                        }
                    },
                    syb = function(a, b) {
                        return function(c, d) {
                            var e, f;
                            const g = b.KA(c.sheet, c.Da, c.col);
                            y("text3" === (null === g || void 0 === g ? void 0 : null === (e = g.Bg) || void 0 === e ? void 0 : e.type));
                            return null === (f = a.ipa) || void 0 === f ? void 0 : f.call(a, {
                                content: g.Bg,
                                context: c,
                                oi: d
                            })
                        }
                    },
                    J5 = function(a, b, c) {
                        const d = uyb();
                        vyb(() => {
                            const e = d.current;
                            e && c(e, b) || a();
                            d.current = b
                        }, [b, c, a])
                    },
                    yyb = function(a) {
                        const b =
                            a.Ht,
                            c = a.cq;
                        a = new __c.Kcb(a.Am);
                        b.U9 = wyb;
                        b.epa = d => lyb({ ...d,
                            Ht: b
                        });
                        b.fpa = G5(xyb(c));
                        b.hpa = G5(K5);
                        b.ipa = G5(L5);
                        return {
                            zQ: tyb(b, a),
                            kz: a
                        }
                    },
                    zyb = function(a, b, c) {
                        const d = [a];
                        for (; null != a && a !== b;)(a = c.next(a)) && d.push(a);
                        return d
                    },
                    Ayb = function({
                        label: a,
                        width: b,
                        height: c,
                        scale: d,
                        highlight: e,
                        selected: f
                    }) {
                        return I5("div", {
                            style: {
                                width: b,
                                height: c,
                                transform: `scale(${d})`
                            },
                            className: "bx74uQ",
                            children: I5(__c.Gu, {
                                className: M5({
                                    yiml1g: e,
                                    oYlhXA: f
                                }),
                                size: "small",
                                alignment: "center",
                                children: a
                            })
                        })
                    },
                    Cyb = function({
                        qd: a,
                        highlight: b,
                        scale: c,
                        Su: d,
                        Cm: e,
                        placement: f,
                        fJa: g
                    }) {
                        const h = N5(() => {
                                const n = null === d || void 0 === d ? void 0 : d.get();
                                if (null != n && 0 !== n.length) return new __c.pB(n)
                            }, [d]),
                            k = e(1),
                            l = e(c),
                            m = {
                                ssE9Tg: !a,
                                OkifGQ: a
                            };
                        return I5(__c.Hu, {
                            Hn: "light",
                            light: "light",
                            uq: "light",
                            dark: "light",
                            children: n => I5("div", {
                                className: M5("ze9QCQ", m, n.className, {
                                    _rPu0g: "absolute" === f
                                }),
                                style: {
                                    width: l,
                                    height: l,
                                    transform: "absolute" === f ? `translate(${l*(a?1:-1)}px, ${-l}px)` : void 0
                                },
                                children: I5("div", {
                                    style: {
                                        width: k,
                                        height: k,
                                        transform: `scale(${c})`
                                    },
                                    className: M5("N7J3UA", m),
                                    ref: null === h || void 0 === h ? void 0 : h.Of,
                                    children: I5(__c.gN, {
                                        className: M5("m8CFdg", m, {
                                            G6wL4w: g,
                                            W_E0wA: b
                                        }),
                                        ariaLabel: N("ruWN9A"),
                                        children: I5(Byb, {
                                            size: "tiny"
                                        })
                                    })
                                })
                            })
                        })
                    },
                    Eyb = function() {
                        const a = new Dyb,
                            b = new __c.NX,
                            c = O5(f => {
                                const {
                                    scale: g = 1,
                                    size: h = "small",
                                    fJa: k = !0
                                } = f, l = P5(m => a.Cm(m, h), [h]);
                                return I5(Cyb, { ...f,
                                    scale: g,
                                    qd: "rtl" === f.sheet.direction,
                                    highlight: null != f.selection && a.BXa(f.sheet, f.selection),
                                    Cm: l,
                                    fJa: k
                                })
                            }),
                            d = O5(f => {
                                const {
                                    scale: g = 1,
                                    size: h = "small"
                                } = f, k = P5(n => a.Cm(n, h), [h]),
                                    l = P5(n => null != f.selection && a.zEa(f.selection).has(n), [f.selection]), m = P5(n => null != f.selection && a.LVa(f.sheet, f.selection).has(n), [f.sheet, f.selection]);
                                return I5(Q5, { ...f,
                                    scale: g,
                                    Cm: k,
                                    Jxa: l,
                                    rFa: m,
                                    ON: b
                                })
                            }),
                            e = O5(f => {
                                const {
                                    scale: g = 1,
                                    size: h = "small"
                                } = f, k = P5(n => a.Cm(n, h), [h]), l = P5(n => null != f.selection && a.BEa(f.selection).has(n), [f.selection]), m = P5(n => null != f.selection && a.MVa(f.sheet, f.selection).has(n), [f.sheet, f.selection]);
                                return I5(R5, { ...f,
                                    scale: g,
                                    Cm: k,
                                    sFa: m,
                                    eya: l,
                                    ON: b
                                })
                            });
                        return {
                            CJa: c,
                            BJa: d,
                            DJa: e
                        }
                    },
                    Fyb = function(a, b, c) {
                        const d = a.width,
                            e = a.height;
                        var f = __c.Lr(Dr({
                            top: a.ra,
                            left: a.qa,
                            width: d,
                            height: e
                        }).scale(b));
                        a = Math.floor(f.left);
                        f = f.left - a;
                        return {
                            transform: 1E-10 < Math.abs(f) ? `translateX(${("ltr"===c?1:-1)*f}px) scale(${b})` : `scale(${b})`,
                            insetInlineStart: a,
                            width: d,
                            height: e
                        }
                    },
                    Hyb = function(a) {
                        return 1 < a.span.columns.size || 1 < a.span.rows.size ? !1 : Gyb(a)
                    },
                    Gyb = function(a) {
                        if (!a.content) {
                            if (!a.Ca) return !0;
                            switch (a.Ca.type) {
                                case "plain_number":
                                case "currency":
                                case "percentage":
                                    return !0;
                                case "date":
                                case "select":
                                    return !1;
                                default:
                                    throw new D(a.Ca);
                            }
                        }
                        switch (a.content.type) {
                            case "formula":
                            case "number":
                            case "boolean":
                            case "media":
                                return !1;
                            case "plaintext":
                                return "" === a.content.value;
                            case "text2":
                                return a.content.value.isEmpty;
                            case "text3":
                                return a.content.value.isEmpty;
                            default:
                                throw new D(a.content);
                        }
                    },
                    Iyb = function(a, b) {
                        const c = {};
                        c[b("BlockStart")] = `${a.ra}${"px"}`;
                        c[b("InlineStart")] = `${a.qa}${"px"}`;
                        c[b("BlockEnd")] = `${a.Ea}${"px"}`;
                        c[b("InlineEnd")] = `${a.Ja}${"px"}`;
                        return c
                    },
                    Jyb = function(a, b, c, d, e, f) {
                        var g;
                        let h =
                            "none";
                        "strikethrough" === a.Kp && "underline" === a.Qf ? h = "underline line-through" : "strikethrough" === a.Kp ? h = "line-through" : "underline" === a.Qf && (h = "underline");
                        b = H5(b, c, d);
                        c = jyb(b);
                        f = f ? f.cW(a.fontFamily) : void 0;
                        return {
                            Fa: {
                                fontWeight: null === (g = __c.lA(a.fontWeight)) || void 0 === g ? void 0 : g.toString(),
                                fontStyle: a.fontStyle,
                                color: a.color,
                                textDecoration: h,
                                fontFamily: f,
                                fontSize: `${a.fontSize}px`,
                                textAlign: iyb(b, a.direction),
                                letterSpacing: `${a.letterSpacing}em`,
                                lineHeight: `${a.lineHeight}`
                            },
                            qR: {
                                justifyContent: c,
                                direction: a.direction,
                                overflow: null === e || void 0 === e ? void 0 : e.overflow
                            }
                        }
                    },
                    Lyb = function({
                        DW: a,
                        zQ: b,
                        aC: c
                    }) {
                        const d = window.document.body.appendChild(document.createElement("div"));
                        d.classList.add("BghEng");
                        return {
                            lOa: new Kyb(d, a, b, c)
                        }
                    },
                    Nyb = function(a, b, c) {
                        for (c = c.map(({
                                Da: d,
                                column: e
                            }) => {
                                const {
                                    renderer: f,
                                    cX: g
                                } = Myb(a, b, d, e);
                                if (f && "react" !== f.type) {
                                    var h, k, l;
                                    d = document.createElement("div");
                                    e = d.appendChild(document.createElement("div"));
                                    const p = e.appendChild(document.createElement("div"));
                                    d.className = "imy9ug";
                                    e.className = "pDMp7w";
                                    p.className = "_30B9pw";
                                    Object.assign(d.style, (null === (h = g.style) || void 0 === h ? void 0 : h.cD) || {});
                                    Object.assign(e.style, (null === (k = g.style) || void 0 === k ? void 0 : k.Fa) || {});
                                    Object.assign(p.style, (null === (l = g.style) || void 0 === l ? void 0 : l.qR) || {});
                                    var {
                                        hL: m,
                                        dA: n
                                    } = {
                                        hL: d,
                                        dA: p
                                    };
                                    f.render(n);
                                    a.container.appendChild(m);
                                    h = n.childNodes[0];
                                    return h instanceof HTMLElement ? h : void 0
                                }
                            }).map(d => {
                                if (d) return {
                                    width: d.clientWidth,
                                    height: d.clientHeight
                                }
                            }); a.container.lastChild;) a.container.lastChild.remove();
                        return c
                    },
                    Myb = function(a,
                        b, c, d) {
                        const e = {
                                sheet: b,
                                col: d,
                                Da: c,
                                attrs: b.layout.attrs.get(F5({
                                    hg: void 0,
                                    textAlign: void 0,
                                    direction: void 0
                                }), c, d) || {}
                            },
                            f = a.zQ({
                                context: e,
                                NI: () => {},
                                oi: a.GLa
                            }),
                            {
                                hg: g
                            } = ye(Me, e.attrs);
                        a = new S5(a.aC, b, Oyb(a, b), d, c, Pyb, () => ({
                            hg: "overflow" === g ? "clip" : g
                        }), () => {});
                        return {
                            renderer: f,
                            cX: a
                        }
                    },
                    Oyb = function(a, b) {
                        const c = a.DW.qva(b);
                        return {
                            width: c.width,
                            height: c.height,
                            nq: d => {
                                const {
                                    height: e,
                                    width: f
                                } = c.nq(d);
                                return {
                                    ra: 0,
                                    qa: 0,
                                    width: f,
                                    height: e
                                }
                            }
                        }
                    },
                    Ryb = function(a) {
                        const b = a.bq,
                            c = a.$c,
                            d = O5(e => I5(Qyb, { ...e,
                                $c: c
                            }));
                        return __c.qt(e =>
                            I5(T5, { ...e,
                                bq: b,
                                oi: d
                            }))
                    },
                    Uyb = function({
                        onScroll: a
                    }) {
                        const b = new Syb(a);
                        return {
                            iF: b,
                            B9: O5(c => I5(Tyb, {
                                sheet: c.sheet,
                                iF: b,
                                children: c.children
                            }))
                        }
                    },
                    Wyb = function(a) {
                        const b = a.bq,
                            c = a.$c,
                            d = a.jFa,
                            e = ({
                                children: k
                            }) => I5(U5, {
                                children: k
                            }),
                            {
                                iF: f,
                                B9: g
                            } = Uyb({
                                onScroll: a.onScroll
                            });
                        class h extends Vyb {
                            get eG() {
                                const k = this.props.Ub.YL;
                                switch (k) {
                                    case "screen":
                                        return g;
                                    case "print":
                                        return e;
                                    default:
                                        throw new D(k);
                                }
                            }
                            componentWillUnmount() {
                                d.yOa(this.props.item, {
                                    tc: this.props.tc,
                                    Ub: this.props.Ub,
                                    Jg: this.props.Jg
                                })
                            }
                            render() {
                                d.y4a(this.props.item, {
                                    tc: this.props.tc,
                                    Ub: this.props.Ub,
                                    Jg: this.props.Jg
                                });
                                return I5(V5, { ...this.props,
                                    scaleFactor: this.scaleFactor,
                                    bq: b,
                                    $c: c,
                                    eG: this.eG,
                                    jFa: d
                                })
                            }
                            constructor(...k) {
                                super(...k);
                                this.scaleFactor = W5(() => {
                                    const l = this.props.item;
                                    var m = this.props.Ub,
                                        n = m.YL;
                                    m = m.zoom;
                                    switch (n) {
                                        case "screen":
                                            return 1;
                                        case "print":
                                            n = d.dVa(l);
                                            if (!n) return 1;
                                            ({
                                                width: n
                                            } = new __c.Zv(l, n.tc, {
                                                zoom: m
                                            }));
                                            return n / l.config.width;
                                        default:
                                            throw new D(n);
                                    }
                                })
                            }
                        }
                        return {
                            yLa: h,
                            iF: f
                        }
                    },
                    Xyb = function(a, b) {
                        if (null != b && null != b.Qc && null != b.Rc && null != b.Uf &&
                            null != b.Vf) {
                            var c = a.qa(b.Qc),
                                d = a.ra(b.Rc),
                                e = a.qa(b.Uf) + b.Uf.width - c;
                            a = a.ra(b.Vf) + b.Vf.height - d;
                            return Dr({
                                top: d,
                                left: c,
                                width: e,
                                height: a
                            })
                        }
                    },
                    Zyb = function(a) {
                        const b = a.bq,
                            c = a.$c,
                            d = O5(e => I5(Qyb, { ...e,
                                $c: c
                            }));
                        return e => I5(Yyb, { ...e,
                            bq: b,
                            oi: d
                        })
                    },
                    czb = function(a, b, c, d, e) {
                        if (0 === c.length || 0 === d.length) return [];
                        const f = $yb(a, b, c, d, e);
                        e = azb(a, b, c, d, e);
                        const g = bzb(a, b, c, d),
                            h = a.aVa(b),
                            k = a.AUa(b),
                            l = "rtl" === b.direction;
                        a = f.map(m => {
                            var n, p, q = m.e5a,
                                r = m.uda,
                                t = m.$Da;
                            const u = m.color,
                                w = m.weight;
                            m = m.Hb;
                            const x = l ? -1 : 1,
                                z = null === (n = g.get(X5(q, t))) || void 0 === n ? void 0 : n.Ja;
                            n = null === (p = g.get(X5(r, t))) || void 0 === p ? void 0 : p.qa;
                            if (null != z && null != n) {
                                p = B(h.get(t.Da));
                                var A = B(k.get(q.column));
                                q = B(k.get(r.column));
                                t = "start" === t.boundary ? p.start : p.end;
                                p = A.start;
                                r = "start" === r.boundary ? q.start : q.end;
                                return {
                                    color: u,
                                    weight: w,
                                    Hb: m,
                                    p1: new __c.dr(p + z * x, t),
                                    p2: new __c.dr(r + n * x, t),
                                    ...__c.Cv((r - p) * x, m * w, z)
                                }
                            }
                        }).filter(__c.sb);
                        return [...e.map(m => {
                            var n, p, q = m.Ura,
                                r = m.j5a,
                                t = m.wda;
                            const u = m.color,
                                w = m.weight;
                            m = m.Hb;
                            const x = null === (n = g.get(X5(q,
                                r))) || void 0 === n ? void 0 : n.Ea;
                            n = null === (p = g.get(X5(q, t))) || void 0 === p ? void 0 : p.ra;
                            if (null != x && null != n) {
                                p = B(k.get(q.column));
                                var z = B(h.get(r.Da));
                                r = B(h.get(t.Da));
                                q = "start" === q.boundary ? p.start : p.end;
                                p = z.start;
                                t = "start" === t.boundary ? r.start : r.end;
                                return {
                                    color: u,
                                    weight: w,
                                    Hb: m,
                                    p1: new __c.dr(q, p + x),
                                    p2: new __c.dr(q, t + n),
                                    ...__c.Cv(t - p, m * w, x)
                                }
                            }
                        }).filter(__c.sb), ...a]
                    },
                    dzb = function(a) {
                        const b = [];
                        a = a.filter(c => 0 !== c.weight && null != c.color);
                        a = __c.yd(a, c => c.weight);
                        a = Array.from(a.entries()).sort(([c], [d]) => c -
                            d);
                        for (const [c, d] of a) {
                            a = __c.yd(d, e => `${e.Fi}_${e.Gi}`);
                            for (const [, e] of a) {
                                const {
                                    Gi: f,
                                    Fi: g
                                } = e[0];
                                a = __c.yd(e, h => h.color);
                                for (const [h, k] of a) b.push({
                                    weight: c,
                                    color: h,
                                    lines: k,
                                    Fi: g,
                                    Gi: f
                                })
                            }
                        }
                        return b
                    },
                    fzb = function(a, b, c, d) {
                        var e = ezb;
                        b = b.flatMap(f => a.rows.last() === f ? [{
                            Da: f,
                            boundary: "start"
                        }, {
                            Da: f,
                            boundary: "end"
                        }] : [{
                            Da: f,
                            boundary: "start"
                        }]);
                        c = c.flatMap(f => a.cols.last() === f ? [{
                            column: f,
                            boundary: "start"
                        }, {
                            column: f,
                            boundary: "end"
                        }] : [{
                            column: f,
                            boundary: "start"
                        }]);
                        d = czb(e, a, b, c, e.VOa(d));
                        return dzb(d)
                    },
                    $yb =
                    function(a, b, c, d, e) {
                        const f = [];
                        for (const l of c)
                            for (const m of d) {
                                c = l.Da;
                                var g = m.column,
                                    h = TX(b.cells, g, c);
                                if (!h || h.span.Rc === c)
                                    if (c = Y5(a.DJ, b, g, c, e), c = "start" === l.boundary ? null === c || void 0 === c ? void 0 : c.ra : null === c || void 0 === c ? void 0 : c.Ea) {
                                        h = f[f.length - 1];
                                        g = (g = b.cols.next(g)) ? {
                                            column: g,
                                            boundary: "start"
                                        } : {
                                            column: B(b.cols.last()),
                                            boundary: "end"
                                        };
                                        var k;
                                        if (k = h) k = h.uda, k = k.column === m.column && k.boundary === m.boundary;
                                        k && (k = h.$Da, k = k.Da === l.Da && k.boundary === l.boundary);
                                        k && h.color === c.color && h.weight === c.weight &&
                                            h.Hb === c.Hb && 0 === h.Hb ? h.uda = g : f.push({
                                                $Da: l,
                                                e5a: m,
                                                uda: g,
                                                color: c.color,
                                                weight: c.weight,
                                                Hb: c.Hb
                                            })
                                    }
                            }
                        return f
                    },
                    azb = function(a, b, c, d, e) {
                        const f = [];
                        for (const l of d)
                            for (const m of c) {
                                var g = m.Da;
                                d = l.column;
                                var h = TX(b.cells, d, g);
                                if (!h || h.span.Qc === d)
                                    if (d = Y5(a.DJ, b, d, g, e), d = "start" === l.boundary ? null === d || void 0 === d ? void 0 : d.qa : null === d || void 0 === d ? void 0 : d.Ja) {
                                        h = f[f.length - 1];
                                        g = (g = b.rows.next(g)) ? {
                                            Da: g,
                                            boundary: "start"
                                        } : {
                                            Da: B(b.rows.last()),
                                            boundary: "end"
                                        };
                                        var k;
                                        if (k = h) k = h.Ura, k = k.column === l.column && k.boundary ===
                                            l.boundary;
                                        k && (k = h.wda, k = k.Da === m.Da && k.boundary === m.boundary);
                                        k && h.color === d.color && h.weight === d.weight && h.Hb === d.Hb && 0 === h.Hb ? h.wda = g : f.push({
                                            Ura: l,
                                            j5a: m,
                                            wda: g,
                                            color: d.color,
                                            weight: d.weight,
                                            Hb: d.Hb
                                        })
                                    }
                            }
                        return f
                    },
                    bzb = function(a, b, c, d) {
                        const e = (p, q) => {
                                var r = a.DJ.FPa(b);
                                const t = r.get(p) || 0;
                                r = r.get(q) || 0;
                                return t <= r ? p : q
                            },
                            f = new Map;
                        if (0 === c.length || 0 === d.length) return f;
                        var g = [],
                            h = b.cols.oc(d[0].column);
                        h && g.push({
                            column: h,
                            boundary: "start"
                        });
                        g.push(...d);
                        (d = b.cols.next(d[d.length - 1].column)) && g.push({
                            column: d,
                            boundary: "start"
                        });
                        d = [];
                        (h = b.rows.oc(c[0].Da)) && d.push({
                            Da: h,
                            boundary: "start"
                        });
                        d.push(...c);
                        (c = b.rows.next(c[c.length - 1].Da)) && d.push({
                            Da: c,
                            boundary: "start"
                        });
                        for (const p of g) {
                            c = (g = "start" === p.boundary ? p.column : void 0) ? b.cols.oc(g) : b.cols.last();
                            for (const q of d) {
                                var k = "start" === q.boundary ? q.Da : void 0;
                                h = k ? b.rows.oc(k) : b.rows.last();
                                var l = Y5(a.DJ, b, g, k),
                                    m = Y5(a.DJ, b, g, h);
                                k = Y5(a.DJ, b, c, k);
                                var n = Y5(a.DJ, b, c, h);
                                h = "end" === p.boundary ? null === k || void 0 === k ? void 0 : k.Ja : null === l || void 0 === l ? void 0 : l.qa;
                                l =
                                    "end" === q.boundary ? null === m || void 0 === m ? void 0 : m.Ea : null === l || void 0 === l ? void 0 : l.ra;
                                m = "end" === p.boundary ? null === n || void 0 === n ? void 0 : n.Ja : null === m || void 0 === m ? void 0 : m.qa;
                                k = "end" === q.boundary ? null === n || void 0 === n ? void 0 : n.Ea : null === k || void 0 === k ? void 0 : k.ra;
                                n = __c.zv({
                                    ra: m,
                                    Ea: h,
                                    qa: k,
                                    Ja: l
                                }, e);
                                let r;
                                switch (n) {
                                    case "blockStart":
                                        r = m;
                                        break;
                                    case "blockEnd":
                                        r = h;
                                        break;
                                    case "inlineStart":
                                        r = k;
                                        break;
                                    case "inlineEnd":
                                        r = l;
                                        break;
                                    default:
                                        r = void 0
                                }
                                const {
                                    height: t,
                                    width: u
                                } = 1 === (null === r || void 0 === r ? void 0 : r.Hb) ? {
                                    height: r.weight,
                                    width: r.weight
                                } : {
                                    height: Math.max((null === k || void 0 === k ? void 0 : k.weight) || 0, (null === l || void 0 === l ? void 0 : l.weight) || 0),
                                    width: Math.max((null === m || void 0 === m ? void 0 : m.weight) || 0, (null === h || void 0 === h ? void 0 : h.weight) || 0)
                                };
                                f.set(X5(p, q), __c.wv(n, t / 2, u / 2))
                            }
                        }
                        return f
                    },
                    Y5 = function(a, b, c, d, e) {
                        if (c && d) return a.u3a(b, e).get(`${c.id}:${d.id}`)
                    },
                    gzb = function(a, b, c) {
                        var d, e = b ? a.layout.attrs.get(F5({
                            tZ: void 0,
                            BZ: void 0,
                            xZ: void 0
                        }), b.span.Rc, b.span.Qc) || {} : void 0;
                        if (b && e) {
                            b = (null === c || void 0 === c ? void 0 : null === (d =
                                c.get(`${b.span.Qc.id}:${b.span.Rc.id}`)) || void 0 === d ? void 0 : d.Ea) || !1;
                            d = {
                                color: a.Ph.color,
                                weight: a.Ph.weight,
                                Hb: Av(a.Ph.od)
                            };
                            c = Z5(e.tZ);
                            var f = $5(e.BZ);
                            e = a6(e.xZ);
                            return null == c && null == f && null == e ? a.gp ? void 0 : {
                                borderStyle: d,
                                TA: !0,
                                hidden: b
                            } : {
                                borderStyle: {
                                    color: null !== c && void 0 !== c ? c : d.color,
                                    weight: null !== f && void 0 !== f ? f : d.weight,
                                    Hb: e ? Av(e) : d.Hb
                                },
                                TA: !1,
                                hidden: b
                            }
                        }
                    },
                    hzb = function(a, b, c) {
                        var d, e = b ? a.layout.attrs.get(F5({
                            uZ: void 0,
                            CZ: void 0,
                            yZ: void 0
                        }), b.span.Rc, b.span.Qc) || {} : void 0;
                        if (b && e) {
                            b = (null === c ||
                                void 0 === c ? void 0 : null === (d = c.get(`${b.span.Qc.id}:${b.span.Rc.id}`)) || void 0 === d ? void 0 : d.ra) || !1;
                            d = {
                                color: a.Ph.color,
                                weight: a.Ph.weight,
                                Hb: Av(a.Ph.od)
                            };
                            c = Z5(e.uZ);
                            var f = $5(e.CZ);
                            e = a6(e.yZ);
                            return null == c && null == f && null == e ? a.gp ? void 0 : {
                                borderStyle: d,
                                TA: !0,
                                hidden: b
                            } : {
                                borderStyle: {
                                    color: null !== c && void 0 !== c ? c : d.color,
                                    weight: null !== f && void 0 !== f ? f : d.weight,
                                    Hb: e ? Av(e) : d.Hb
                                },
                                TA: !1,
                                hidden: b
                            }
                        }
                    },
                    b6 = function(a, b, c, d) {
                        if (!a.hidden && !c.hidden) {
                            var e = a.TA ? c.TA ? void 0 : c : a;
                            return __c.yv(a.borderStyle, c.borderStyle,
                                b, d, null === e || void 0 === e ? void 0 : e.borderStyle)
                        }
                    },
                    izb = function(a, b, c) {
                        var d, e = b ? a.layout.attrs.get(F5({
                            vZ: void 0,
                            DZ: void 0,
                            zZ: void 0
                        }), b.span.Rc, b.span.Qc) || {} : void 0;
                        if (b && e) {
                            b = (null === c || void 0 === c ? void 0 : null === (d = c.get(`${b.span.Qc.id}:${b.span.Rc.id}`)) || void 0 === d ? void 0 : d.Ja) || !1;
                            d = {
                                color: a.Ph.color,
                                weight: a.Ph.weight,
                                Hb: Av(a.Ph.od)
                            };
                            c = Z5(e.vZ);
                            var f = $5(e.DZ);
                            e = a6(e.zZ);
                            return null == c && null == f && null == e ? a.gp ? void 0 : {
                                borderStyle: d,
                                TA: !0,
                                hidden: b
                            } : {
                                borderStyle: {
                                    color: null !== c && void 0 !== c ? c : d.color,
                                    weight: null !== f && void 0 !== f ? f : d.weight,
                                    Hb: e ? Av(e) : d.Hb
                                },
                                TA: !1,
                                hidden: b
                            }
                        }
                    },
                    jzb = function(a, b, c) {
                        var d, e = b ? a.layout.attrs.get(F5({
                            wZ: void 0,
                            EZ: void 0,
                            AZ: void 0
                        }), b.span.Rc, b.span.Qc) || {} : void 0;
                        if (b && e) {
                            b = (null === c || void 0 === c ? void 0 : null === (d = c.get(`${b.span.Qc.id}:${b.span.Rc.id}`)) || void 0 === d ? void 0 : d.qa) || !1;
                            d = {
                                color: a.Ph.color,
                                weight: a.Ph.weight,
                                Hb: Av(a.Ph.od)
                            };
                            c = Z5(e.wZ);
                            var f = $5(e.EZ);
                            e = a6(e.AZ);
                            return null == c && null == f && null == e ? a.gp ? void 0 : {
                                borderStyle: d,
                                TA: !0,
                                hidden: b
                            } : {
                                borderStyle: {
                                    color: null !==
                                        c && void 0 !== c ? c : d.color,
                                    weight: null !== f && void 0 !== f ? f : d.weight,
                                    Hb: e ? Av(e) : d.Hb
                                },
                                TA: !1,
                                hidden: b
                            }
                        }
                    },
                    kzb = function(a, b, c) {
                        var d = b.column,
                            e = b.Da;
                        if (b = TX(a.cells, d, e)) {
                            var f = d === b.span.Qc,
                                g = d === b.span.Uf,
                                h = e === b.span.Rc,
                                k = e === b.span.Vf;
                            if (f || g || h || k) {
                                var l = a.rows.oc(e),
                                    m = l ? TX(a.cells, d, l) : void 0,
                                    n = (l = a.rows.next(e)) ? TX(a.cells, d, l) : void 0,
                                    p = (l = a.cols.oc(d)) ? TX(a.cells, l, e) : void 0;
                                l = (l = a.cols.next(d)) ? TX(a.cells, l, e) : void 0;
                                var q = a.rows.first(),
                                    r = e === q;
                                q = a.rows.last();
                                q = e === q;
                                e = a.cols.first();
                                e = d === e;
                                var t =
                                    a.cols.last();
                                d = d === t;
                                var u = gzb(a, m, c);
                                t = hzb(a, b, c);
                                var w;
                                h = h ? !r && u && t ? b6(u, [...(null !== (w = null === m || void 0 === m ? void 0 : m.span.columns) && void 0 !== w ? w : [])].map(C => a.vq(C)), t, [...b.span.columns].map(C => a.vq(C))) : null === t || void 0 === t ? void 0 : t.borderStyle : void 0;
                                w = gzb(a, b, c);
                                m = hzb(a, n, c);
                                var x;
                                k = k ? !q && w && m ? b6(w, [...b.span.columns].map(C => a.vq(C)), m, [...(null !== (x = null === n || void 0 === n ? void 0 : n.span.columns) && void 0 !== x ? x : [])].map(C => a.vq(C))) : null === w || void 0 === w ? void 0 : w.borderStyle : void 0;
                                w = izb(a, p, c);
                                x = jzb(a, b, c);
                                var z;
                                f = f ? !e && w && x ? b6(w, [...(null !== (z = null === p || void 0 === p ? void 0 : p.span.rows) && void 0 !== z ? z : [])].map(C => a.xr(C)), x, [...b.span.rows].map(C => a.xr(C))) : null === x || void 0 === x ? void 0 : x.borderStyle : void 0;
                                z = izb(a, b, c);
                                c = jzb(a, l, c);
                                var A;
                                c = g ? !d && z && c ? b6(z, [...b.span.rows].map(C => a.xr(C)), c, [...(null !== (A = null === l || void 0 === l ? void 0 : l.span.rows) && void 0 !== A ? A : [])].map(C => a.xr(C))) : null === z || void 0 === z ? void 0 : z.borderStyle : void 0;
                                return {
                                    ra: h,
                                    Ea: k,
                                    qa: f,
                                    Ja: c
                                }
                            }
                        }
                    },
                    Z5 = function(a) {
                        return null == a ||
                            "inherit" === a ? void 0 : a
                    },
                    $5 = function(a) {
                        return null == a || "inherit" === a ? void 0 : Number(a.split("px")[0])
                    },
                    a6 = function(a) {
                        return null == a || "inherit" === a ? void 0 : a.split(" ").map(b => {
                            b = Number(b);
                            return 0 < b ? b : void 0
                        }).filter(__c.sb)
                    },
                    lzb = function(a, b, c) {
                        return a < c && c < b
                    },
                    nzb = function(a) {
                        const b = {
                                transform: "translate(-1000px, -1000px) scale(0)"
                            },
                            c = {
                                rra: b,
                                cD: b,
                                Fa: {},
                                qR: {}
                            },
                            d = c6(() => ({
                                style: a.cX.style || c,
                                WT: a.WT
                            }), ({
                                style: f,
                                WT: g
                            }) => {
                                var h;
                                Object.assign(a.eba.style, f.rra);
                                Object.assign(a.hL.style, f.cD);
                                Object.assign(a.dD.style,
                                    f.Fa);
                                Object.assign(a.dA.style, f.qR);
                                ({
                                    textDecoration: f
                                } = (null === (h = a.cX.style) || void 0 === h ? void 0 : h.Fa) || {});
                                a.dD.classList.toggle("OQx3PQ", "underline" === f);
                                a.dD.classList.toggle("_99ezUA", "line-through" === f);
                                a.dD.classList.toggle("kppAqQ", "underline line-through" === f);
                                a.dD.style.display = g ? "none" : "unset"
                            }, {
                                fireImmediately: !0,
                                equals: d6.structural
                            }),
                            e = c6(() => a.WT ? void 0 : a.renderer, f => {
                                a.L_ && "react" !== (null === f || void 0 === f ? void 0 : f.type) ? (a.L_ = void 0, a.EV.remove()) : a.dA.innerHTML = "";
                                switch (null === f ||
                                    void 0 === f ? void 0 : f.type) {
                                    case "react":
                                        a.L_ = mzb(f.node, a.EV);
                                        a.dA.appendChild(a.EV);
                                        break;
                                    case "dom":
                                        f.render(a.dA);
                                        break;
                                    case void 0:
                                        break;
                                    default:
                                        throw new D(f);
                                }
                                a.WU()
                            }, {
                                fireImmediately: !0
                            });
                        return () => {
                            d();
                            e()
                        }
                    },
                    ozb = function(a) {
                        const b = a.DW,
                            c = a.aC,
                            d = a.$F;
                        return e => I5(e6, { ...e,
                            $F: d,
                            It: b.qva(e.sheet),
                            aC: c
                        })
                    },
                    pzb = class {
                        equals(a) {
                            return this.type === a.type && this.sheet === a.sheet && this.container.equals(a.container)
                        }
                        constructor(a, b) {
                            this.container = a;
                            this.sheet = b;
                            this.type = "sheet-item"
                        }
                    },
                    qzb = class {
                        get sheet() {
                            return this.container.sheet
                        }
                        get items() {
                            return this.text.items
                        }
                        equals(a) {
                            return this.type ===
                                a.type && this.Da === a.Da && this.column === a.column && this.container.equals(a.container)
                        }
                        constructor(a, b, c) {
                            P(this, {
                                items: __c.S
                            });
                            var d;
                            this.container = a;
                            this.column = b;
                            this.Da = c;
                            this.type = "sheet-item-cell";
                            a = B(TX(a.sheet.config.cells, b, c));
                            v("text3" === (null === (d = a.content) || void 0 === d ? void 0 : d.type));
                            this.text = a.content.value
                        }
                    },
                    f6 = __webpack_require__(443763),
                    I5 = f6.jsx,
                    U5 = f6.Fragment,
                    g6 = f6.jsxs;
                var O5 = __webpack_require__(736241).Pi;
                var h6 = __webpack_require__(854928),
                    i6 = h6.kq,
                    j6 = h6.Om,
                    k6 = h6.YN;
                var l6 = __webpack_require__(42782),
                    W5 = l6.Fl,
                    d6 = l6.p6,
                    m6 = l6.LO,
                    n6 = l6.aD,
                    o6 = l6.EH,
                    c6 = l6.U5;
                var p6 = __webpack_require__(875604),
                    P5 = p6.useCallback,
                    q6 = p6.Component,
                    Vyb = p6.PureComponent,
                    N5 = p6.useMemo,
                    rzb = p6.useState,
                    szb = p6.createRef,
                    uyb = p6.useRef,
                    vyb = p6.useLayoutEffect;
                var r6 = __webpack_require__(240236).gn;
                var tzb = __webpack_require__,
                    uzb = tzb(993864),
                    M5 = tzb.n_x(uzb)();
                var vzb = __webpack_require__(358579).Z;
                var mzb = __webpack_require__(204358).createPortal;
                var wzb = O5(a => {
                        var b, c, d = "rtl" === a.sheet.direction;
                        d = {
                            H2wykw: !d,
                            UweldA: d
                        };
                        const [e] = rzb(() => Ss()), f = {
                            get: P5(() => {
                                var g;
                                const h = null === e || void 0 === e ? void 0 : null === (g = e.current) || void 0 === g ? void 0 : g.getBoundingClientRect();
                                var k, l;
                                g = {
                                    top: 0,
                                    left: 0,
                                    width: null !== (k = null === h || void 0 === h ? void 0 : h.width) && void 0 !== k ? k : 0,
                                    height: null !== (l = null === h || void 0 === h ? void 0 : h.height) && void 0 !== l ? l : 0
                                };
                                return Dr(g)
                            }, [e])
                        };
                        return g6("div", {
                            className: M5("nMvVqA", d),
                            children: [g6("div", {
                                ref: vzb(a.pe, e),
                                className: "_0YOFPg",
                                children: [I5(a.bq, { ...a,
                                    viewport: f
                                }), I5("div", {
                                    className: M5("Gdl7fQ", d),
                                    children: null === (c = a.Loa) || void 0 === c ? void 0 : null === (b = c.get()) || void 0 === b ? void 0 : b.map((g, h) => I5(g, {}, h))
                                })]
                            }), "visible" === a.skb && g6(U5, {
                                children: [I5("div", {
                                    className: M5("_32sKQw", d),
                                    children: I5(a.vLa, { ...a
                                    })
                                }), I5("div", {
                                    className: M5("xdIsTQ", d),
                                    children: I5(a.zLa, { ...a
                                    })
                                }), I5("div", {
                                    className: M5("rsTRSA", d),
                                    children: I5(a.xLa, { ...a
                                    })
                                })]
                            })]
                        })
                    }),
                    xzb = O5(a => {
                        a = a.content;
                        v("text2" === a.type || "text3" === a.type);
                        switch (a.type) {
                            case "text2":
                                return I5(U5, {
                                    children: a.value.ba
                                });
                            case "text3":
                                return I5(U5, {
                                    children: __c.Ap.va(a.value).cells.ba()
                                });
                            default:
                                throw new D(a);
                        }
                    });
                var s6 = parseInt("12px", 10);
                var yzb = parseInt("6px", 10),
                    xyb = a => b => I5(zzb, { ...b,
                        fm: a
                    }),
                    zzb = O5(a => {
                        const b = a.content;
                        var c = a.context;
                        const d = c.col,
                            e = c.Da,
                            f = c.sheet;
                        c = a.NI;
                        const g = a.fm;
                        J5(c, __c.iR.va(b.value), (h, k) => __c.iR.domain.Ob(h, k));
                        J5(c, e.height, (h, k) => h === k);
                        return b.value.map((h, k) => I5("div", {
                            className: "_088g1Q",
                            children: I5(Azb, {
                                media: h,
                                Da: e,
                                col: d,
                                sheet: f,
                                marginInlineStart: h === b.value.first() ? 0 : yzb,
                                marginInlineEnd: h === b.value.last() ? 0 : yzb,
                                fm: g
                            })
                        }, k))
                    }),
                    Azb = O5(a => {
                        const b = a.media,
                            c = a.Da,
                            d = a.col,
                            e = a.sheet,
                            f = a.marginInlineStart,
                            g = a.marginInlineEnd;
                        a = a.fm;
                        const h = Bzb(b),
                            k = N5(() => W5(() => (c.height - 2 * s6) / h.height), [c, h]),
                            l = N5(() => ({
                                type: 3,
                                media: b,
                                Da: c,
                                column: d,
                                sheet: e,
                                page: void 0
                            }), [b, c, d, e]);
                        return I5("div", {
                            className: "qJNLGw",
                            style: {
                                marginInlineStart: f,
                                marginInlineEnd: g,
                                width: h.width * k.get(),
                                height: h.height * k.get()
                            },
                            children: I5(a, {
                                fill: b.fill,
                                Sd: l,
                                zD: !0,
                                eP: !1,
                                scaleFactor: k,
                                Mc: h.width,
                                md: h.height
                            })
                        })
                    }),
                    Bzb = a => {
                        var b;
                        if (a.xu) return a.xu;
                        a = B(null === (b = (a.fill.image || a.fill.video).ref) || void 0 === b ? void 0 : b.cb);
                        return {
                            width: a.width,
                            height: a.height
                        }
                    };
                var wyb = function(a) {
                    return b => ({
                        type: "dom",
                        render: c => a(b, c)
                    })
                }((a, b) => {
                    const c = a.value;
                    ({
                        hg: a
                    } = ye(Me, a.context.attrs));
                    const d = document.createElement("div");
                    "wrap" === a && (d.className = "dt4Dlg", d.style.overflowWrap = "break-word");
                    d.innerText = c;
                    b.appendChild(d)
                });
                var K5 = class a extends q6 {
                    static A(b) {
                        P(b, {
                            hg: W5
                        })
                    }
                    constructor(...b) {
                        super(...b);
                        a.A(this)
                    }
                    get hg() {
                        return ye(Me, this.props.context.attrs).hg
                    }
                    render() {
                        var b = this.props.content;
                        const c = this.props.context;
                        if (b.value.isEmpty) return null;
                        b = I5(this.props.oi, {
                            content: b,
                            Da: c.Da,
                            col: c.col,
                            hg: this.hg
                        });
                        return "wrap" === this.hg ? I5("div", {
                            className: "dt4Dlg",
                            children: b
                        }) : I5(U5, {
                            children: b
                        })
                    }
                };
                K5 = r6([Oc], K5);
                var L5 = class a extends q6 {
                    static A(b) {
                        P(b, {
                            hg: W5
                        })
                    }
                    get hg() {
                        return ye(Me, this.props.context.attrs).hg
                    }
                    render() {
                        var b = this.props.content;
                        const c = this.props.context;
                        if (b.value.isEmpty) return null;
                        b = I5(this.props.oi, {
                            content: b,
                            Da: c.Da,
                            col: c.col,
                            hg: this.hg
                        }, this.key++);
                        return "wrap" === this.hg ? I5("div", {
                            className: "dt4Dlg",
                            children: b
                        }) : I5(U5, {
                            children: b
                        })
                    }
                    constructor(...b) {
                        super(...b);
                        a.A(this);
                        this.key = 0
                    }
                };
                L5 = r6([Oc], L5);
                var Czb = 4 * __c.vu,
                    Dzb = 3 * __c.vu;
                var Dyb = class {
                    Cm(a, b) {
                        return "large" === b ? Czb * a : Dzb * a
                    }
                    constructor() {
                        this.BXa = j6((a, b) => {
                            var c, d;
                            b = b.get();
                            return null != b && a.layout.rows.count() === ((null === (c = b.rows) || void 0 === c ? void 0 : c.size) || 0) && a.layout.cols.count() === ((null === (d = b.columns) || void 0 === d ? void 0 : d.size) || 0)
                        });
                        this.zEa = i6(a => {
                            var b;
                            return new Set((null === (b = a.get()) || void 0 === b ? void 0 : b.columns) || [])
                        }, {
                            equals: __c.Jh
                        });
                        this.BEa = i6(a => {
                            var b;
                            return new Set((null === (b = a.get()) || void 0 === b ? void 0 : b.rows) || [])
                        }, {
                            equals: __c.Jh
                        });
                        this.LVa =
                            j6((a, b) => {
                                var {
                                    cells: c
                                } = b.get() || {};
                                if (!c || 0 === c.size) return new Set;
                                b = this.zEa(b);
                                const d = new Set;
                                for (const e of c) {
                                    c = a.layout.cells.get(e.Da, e.column);
                                    for (const f of zyb(c ? c.span.Qc : e.column, c ? c.span.Uf : e.column, a.layout.cols))(0 === b.size || b.has(f)) && d.add(f)
                                }
                                return d
                            }, {
                                equals: __c.Jh
                            });
                        this.MVa = j6((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c || 0 === c.size) return new Set;
                            b = this.BEa(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.Da, e.column);
                                for (const f of zyb(c ? c.span.Rc : e.Da, c ? c.span.Vf :
                                        e.Da, a.layout.rows))(0 === b.size || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.Jh
                        })
                    }
                };
                var Q5 = class a extends q6 {
                    static A(b) {
                        P(b, {
                            qd: W5,
                            Sn: W5
                        })
                    }
                    get qd() {
                        return "rtl" === this.props.sheet.direction
                    }
                    get Sn() {
                        var b;
                        const c = null === (b = this.props.Su) || void 0 === b ? void 0 : b.get();
                        if (null != c && 0 !== c.length) return new __c.pB(c)
                    }
                    render() {
                        return I5(__c.Hu, {
                            Hn: "light",
                            light: "light",
                            uq: "light",
                            dark: "light",
                            children: this.T5a
                        })
                    }
                    constructor(...b) {
                        super(...b);
                        a.A(this);
                        this.onMouseMove = n6(c => {
                            const {
                                onMouseMove: d,
                                sheet: e,
                                scale: f = 1
                            } = this.props;
                            null === d || void 0 === d ? void 0 : d(c, e, "column", f)
                        });
                        this.onMouseLeave =
                            n6(c => {
                                var d, e;
                                null === (d = (e = this.props).onMouseLeave) || void 0 === d ? void 0 : d.call(e, c)
                            });
                        this.T5a = c => {
                            var d;
                            const {
                                sheet: e,
                                rFa: f,
                                Jxa: g,
                                Cm: h,
                                placement: k,
                                scale: l = 1
                            } = this.props;
                            var m = h(l);
                            m = "absolute" === k ? {
                                transform: `translateY(${-m}px)`
                            } : {};
                            let n = 0;
                            return I5("div", {
                                className: M5("Vt2_4w", {
                                    jNbTIg: !this.qd,
                                    gtA7Dw: this.qd
                                }, c.className, {
                                    iXSdpQ: "absolute" === k
                                }),
                                style: m,
                                onMouseMove: this.onMouseMove,
                                onMouseLeave: this.onMouseLeave,
                                ref: null === (d = this.Sn) || void 0 === d ? void 0 : d.Of,
                                children: e.cols.map(p => I5(Ezb, {
                                    col: p,
                                    label: __c.xX(n++),
                                    xla: f,
                                    Wq: g,
                                    Cm: h,
                                    scale: l
                                }, p.id))
                            })
                        }
                    }
                };
                Q5 = r6([Oc], Q5);
                var R5 = class a extends q6 {
                    static A(b) {
                        P(b, {
                            qd: W5,
                            Sn: W5
                        })
                    }
                    get qd() {
                        return "rtl" === this.props.sheet.direction
                    }
                    get Sn() {
                        var b;
                        const c = null === (b = this.props.Su) || void 0 === b ? void 0 : b.get();
                        if (null != c && 0 !== c.length) return new __c.pB(c)
                    }
                    render() {
                        return I5(__c.Hu, {
                            Hn: "light",
                            light: "light",
                            uq: "light",
                            dark: "light",
                            children: this.U5a
                        })
                    }
                    constructor(...b) {
                        super(...b);
                        a.A(this);
                        this.onMouseMove = n6(c => {
                            const {
                                onMouseMove: d,
                                sheet: e,
                                scale: f = 1
                            } = this.props;
                            null === d || void 0 === d ? void 0 : d(c, e, "row", f)
                        });
                        this.onMouseLeave =
                            n6(c => {
                                var d, e;
                                null === (d = (e = this.props).onMouseLeave) || void 0 === d ? void 0 : d.call(e, c)
                            });
                        this.U5a = c => {
                            var d;
                            const {
                                sheet: e,
                                sFa: f,
                                eya: g,
                                Cm: h,
                                placement: k,
                                scale: l = 1
                            } = this.props;
                            var m = h(l);
                            m = "absolute" === k ? {
                                transform: `translateX(${m*(this.qd?1:-1)}px)`
                            } : {};
                            let n = 0;
                            return I5("div", {
                                className: M5("_93roJg", {
                                    jNbTIg: !this.qd,
                                    gtA7Dw: this.qd
                                }, c.className, {
                                    KUsGaw: "absolute" === k
                                }),
                                style: m,
                                onMouseMove: this.onMouseMove,
                                onMouseLeave: this.onMouseLeave,
                                ref: null === (d = this.Sn) || void 0 === d ? void 0 : d.Of,
                                children: e.rows.map(p => {
                                    var q = `${n++ +1}`;
                                    return I5(Fzb, {
                                        Da: p,
                                        label: q,
                                        xla: f,
                                        Wq: g,
                                        Cm: h,
                                        scale: l
                                    }, p.id)
                                })
                            })
                        }
                    }
                };
                R5 = r6([Oc], R5);
                var Ezb = O5(a => {
                        const {
                            label: b,
                            col: c,
                            xla: d,
                            Wq: e,
                            Cm: f,
                            scale: g = 1
                        } = a;
                        a = f(g);
                        const h = k6(() => d(c)),
                            k = k6(() => e(c));
                        return I5("div", {
                            className: M5("_83Rssw", "d2uLIA", {
                                YbLr8g: h,
                                sTqdww: k
                            }),
                            style: {
                                width: c.width * g,
                                height: a
                            },
                            children: I5(Ayb, {
                                label: b,
                                width: c.width,
                                height: f(1),
                                scale: g,
                                highlight: h,
                                selected: k
                            })
                        })
                    }),
                    Fzb = O5(a => {
                        const {
                            label: b,
                            Da: c,
                            xla: d,
                            Wq: e,
                            Cm: f,
                            scale: g = 1
                        } = a;
                        a = f(g);
                        const h = k6(() => d(c)),
                            k = k6(() => e(c));
                        return I5("div", {
                            className: M5("_83Rssw", "JhBzyw", {
                                YbLr8g: h,
                                sTqdww: k
                            }),
                            style: {
                                width: a,
                                height: c.height *
                                    g
                            },
                            children: I5(Ayb, {
                                label: b,
                                width: f(1),
                                height: c.height,
                                scale: g,
                                highlight: h,
                                selected: k
                            })
                        })
                    });
                var Gzb = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
                var Hzb = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
                var Byb = __c.DS({
                    Vl: Gzb,
                    medium: Hzb
                });
                var S5 = class {
                    static A(a) {
                        P(a, {
                            Da: m6.ref,
                            Fa: W5,
                            style: W5,
                            attrs: W5({
                                equals: d6.shallow
                            }),
                            qsa: W5({
                                equals: d6.shallow
                            }),
                            vra: W5({
                                equals: d6.shallow
                            }),
                            tra: W5({
                                equals: d6.shallow
                            }),
                            Nba: W5({
                                equals: d6.shallow
                            }),
                            padding: W5({
                                equals: d6.shallow
                            }),
                            bma: W5.struct,
                            dma: W5
                        })
                    }
                    get Fa() {
                        if (this.sheet.rows.has(this.Da) && this.sheet.cols.has(this.col)) return __c.EV(this.sheet.cells, this.col, this.Da)
                    }
                    get style() {
                        var a, b, c, d, e, f, g, h;
                        const k = this.attrs;
                        var l = this.qsa,
                            m = this.vra;
                        const n = this.tra,
                            p = this.padding;
                        if (k && l && m && n && p) {
                            var q = {};
                            __c.re(__c.lR, k, "all", (t, u) => {
                                q[u] = t
                            });
                            var r = "text2" === (null === (b = this.Fa) || void 0 === b ? void 0 : null === (a = b.content) || void 0 === a ? void 0 : a.type) || "text3" === (null === (d = this.Fa) || void 0 === d ? void 0 : null === (c = d.content) || void 0 === c ? void 0 : c.type);
                            a = Jyb(ye(__c.lR, r ? {} : q), k.textAlign, null === (f = this.Fa) || void 0 === f ? void 0 : null === (e = f.content) || void 0 === e ? void 0 : e.type, null === (h = this.Fa) || void 0 === h ? void 0 : null === (g = h.Ca) || void 0 === g ? void 0 : g.type, this.bma, this.aC);
                            e = {
                                insetInlineStart: `${n.insetInlineStart}px`,
                                width: `${n.width}px`,
                                height: `${n.height}px`,
                                transform: n.transform,
                                backgroundColor: k.dba
                            };
                            l = {
                                insetInlineStart: `${l.insetInlineStart}px`,
                                width: `${l.width}px`,
                                height: `${l.height}px`,
                                transform: l.transform
                            };
                            m = { ...Iyb(p, t => `padding${t}`),
                                ...a.Fa,
                                insetInlineStart: `${m.insetInlineStart}px`,
                                width: `${m.width}px`,
                                overflow: "overflow" === k.hg ? null : "hidden"
                            };
                            return {
                                rra: e,
                                cD: l,
                                Fa: m,
                                qR: {
                                    whiteSpace: "wrap" === k.hg ? "normal" : "pre",
                                    ...a.qR
                                }
                            }
                        }
                    }
                    get attrs() {
                        const a = this.Fa;
                        if (a) return ye(Me, { ...this.sheet.layout.attrs.get(Me.yl,
                                a.span.Rc, a.span.Qc),
                            ...this.Hx(a.span.Rc, a.span.Qc)
                        })
                    }
                    get qsa() {
                        const a = this.sheet;
                        var b = this.Fa;
                        if (b) return b = { ...this.It.nq(b),
                            ...this.Nba
                        }, Fyb(b, this.zpa.get(), a.direction)
                    }
                    get vra() {
                        const a = this.Fa,
                            b = this.Nba;
                        if (a && b) {
                            var {
                                qa: c,
                                width: d
                            } = this.It.nq(a);
                            return {
                                insetInlineStart: c - b.qa,
                                width: d
                            }
                        }
                    }
                    get tra() {
                        const a = this.sheet,
                            b = this.Fa;
                        if (b) return Fyb(this.It.nq(b), this.zpa.get(), a.direction)
                    }
                    get Nba() {
                        var a = this.attrs,
                            b = this.It;
                        const c = this.Fa;
                        if (a && c) {
                            if (Gyb(c) || 1 < c.span.columns.size || 1 < c.span.rows.size ||
                                "overflow" !== a.hg) {
                                const {
                                    qa: d,
                                    width: e
                                } = b.nq(c);
                                return {
                                    qa: d,
                                    width: e
                                }
                            }
                            a = this.dma.next;
                            b = (b = this.dma.oc) ? this.sheet.qa(b) + b.width : 0;
                            a = a ? this.sheet.qa(a) : this.sheet.width;
                            return {
                                qa: b,
                                width: a - b
                            }
                        }
                    }
                    get padding() {
                        var a = this.Fa,
                            b = this.bma;
                        if (this.attrs && a) {
                            var {
                                width: c,
                                height: d
                            } = this.It.nq(a), e = [s6];
                            v(0 < e.length && 4 >= e.length);
                            var f, g, h, k;
                            a = {
                                ra: e[0],
                                qa: null !== (f = e[1]) && void 0 !== f ? f : e[0],
                                Ea: null !== (g = e[2]) && void 0 !== g ? g : e[0],
                                Ja: null !== (k = null !== (h = e[3]) && void 0 !== h ? h : e[1]) && void 0 !== k ? k : e[0]
                            };
                            if (null === b ||
                                void 0 === b ? 0 : b.paddingInlineEnd) a.Ja += null === b || void 0 === b ? void 0 : b.paddingInlineEnd;
                            a.qa + a.Ja > c && (b = c / (a.qa + a.Ja), a.qa *= b, a.Ja *= b);
                            a.ra + a.Ea > d && (b = d / (a.ra + a.Ea), a.ra *= b, a.Ea *= b);
                            return a
                        }
                    }
                    get bma() {
                        return this.Nx(this.Da, this.col)
                    }
                    get dma() {
                        const a = b => {
                            b = __c.EV(this.sheet.cells, b, this.Da);
                            return b === this.Fa ? !0 : b && Hyb(b)
                        };
                        return {
                            next: this.sheet.cols.next(this.col, b => !a(b)),
                            oc: this.sheet.cols.oc(this.col, b => !a(b))
                        }
                    }
                    constructor(a, b, c, d, e, f, g, h) {
                        S5.A(this);
                        this.aC = a;
                        this.sheet = b;
                        this.It = c;
                        this.col = d;
                        this.zpa = f;
                        this.Hx = g;
                        this.Nx = h;
                        this.Da = e
                    }
                };
                var Kyb = class {
                        measure(a, b, c) {
                            return Nyb(this, a, [{
                                Da: b,
                                column: c
                            }])[0]
                        }
                        constructor(a, b, c, d) {
                            this.container = a;
                            this.DW = b;
                            this.zQ = c;
                            this.aC = d;
                            this.GLa = () => null
                        }
                    },
                    Pyb = {
                        get: () => 1
                    };
                var Qyb = O5(a => {
                    const b = a.$c,
                        c = a.content,
                        d = a.hg;
                    a = a.NI;
                    v("text2" === c.type);
                    J5(a, __c.gj.va(c.value), (e, f) => __c.gj.domain.Ob(e, f));
                    a = N5(() => {
                        if ("wrap" === d) return [];
                        const e = c.value.ba.split("\n").map(f => f.length + 1);
                        e.pop();
                        return e
                    }, [c, d]);
                    return I5(b, {
                        text: c.value,
                        ph: a,
                        Ga: void 0,
                        animation: void 0,
                        writingMode: 1,
                        Ad: "start",
                        Tc: void 0,
                        jj: !0,
                        Eo: !1
                    })
                });
                var T5 = class a extends q6 {
                    static A(b) {
                        P(b, {
                            Vc: W5.struct
                        })
                    }
                    constructor(...b) {
                        super(...b);
                        a.A(this)
                    }
                    render() {
                        return I5(this.props.bq, {
                            sheet: this.props.element.config,
                            Su: this.props.Su,
                            Hx: this.props.Hx,
                            Nx: this.props.Nx,
                            scaleFactor: this.props.scaleFactor,
                            Vc: this.Vc,
                            oi: this.props.oi,
                            tQ: void 0,
                            mQ: void 0
                        })
                    }
                    get Vc() {
                        const b = this.props.Cd,
                            c = this.props.element.altText;
                        return c ? c.Fd && !b ? {
                            "aria-hidden": !0
                        } : {
                            "aria-label": c.text
                        } : {}
                    }
                };
                T5 = r6([Oc], T5);
                var Izb = class {
                    cW(a) {
                        if (null != this.Ya) {
                            var b = __c.vt(a);
                            b && __c.zt(this.Ya, [b], {
                                Ws: !0
                            })
                        }
                        b = ["auto"];
                        this.Gd && b.unshift(this.Gd);
                        return [__c.wt(a), ...b.map(c => `"${c}"`)].join()
                    }
                    constructor(a, b) {
                        this.Ya = a;
                        this.Gd = b
                    }
                };
                var Kzb = class {
                        constructor() {
                            this.qva = i6(a => new Jzb(a))
                        }
                    },
                    Jzb = class {
                        static A(a) {
                            P(a, {
                                height: W5,
                                width: W5
                            })
                        }
                        get height() {
                            const a = this.sheet.rows.last();
                            return null == a ? 0 : this.sheet.ra(a) + a.height
                        }
                        get width() {
                            const a = this.sheet.cols.last();
                            return null == a ? 0 : this.sheet.qa(a) + a.width
                        }
                        constructor(a) {
                            Jzb.A(this);
                            this.sheet = a;
                            this.nq = i6(b => {
                                var c = b.span.Qc,
                                    d = b.span.Uf,
                                    e = b.span.Vf;
                                b = this.sheet.ra(b.span.Rc);
                                e = this.sheet.ra(e) + e.height;
                                c = this.sheet.qa(c);
                                d = this.sheet.qa(d) + d.width;
                                return {
                                    ra: b,
                                    qa: c,
                                    width: d - c,
                                    height: e -
                                        b
                                }
                            }, {
                                equals: d6.shallow
                            })
                        }
                    };
                var Lzb = class {
                    constructor() {
                        this.H6 = new WeakMap;
                        this.dVa = a => this.H6.get(a);
                        this.y4a = (a, b) => {
                            this.H6.set(a, b)
                        };
                        this.yOa = (a, b) => {
                            const c = this.H6.get(a);
                            c && c.Ub === b.Ub && c.tc === b.tc && c.Jg === b.Jg && this.H6.delete(a)
                        }
                    }
                };
                var Nzb = O5(a => {
                        const b = a.Ub,
                            c = a.item,
                            d = a.Jg,
                            e = a.tc,
                            f = a.$c,
                            g = a.col,
                            h = a.Da;
                        var k = a.content;
                        const l = a.hg;
                        a = a.NI;
                        v("text3" === k.type);
                        J5(a, __c.Ap.va(k.value), (n, p) => __c.Ap.domain.Ob(n, p));
                        [k] = rzb(() => new Mzb(c, e, W5(() => b.zoom)));
                        const m = N5(() => new pzb(d, c), [d, c]);
                        a = N5(() => new qzb(m, g, h), [m, g, h]);
                        return I5(f, {
                            Ub: b,
                            Xj: a,
                            text: a.text,
                            tc: k,
                            ph: "wrap" === l ? "pre-wrap" : "nowrap"
                        })
                    }),
                    Mzb = class extends __c.hS {
                        static A(a) {
                            P(a, {
                                width: m6.ref,
                                ZX: W5
                            })
                        }
                        get ZC() {
                            return this.G6.ZC
                        }
                        get ZX() {
                            const a = (this.hga.width - this.G6.width) /
                                2;
                            return {
                                left: -a,
                                right: this.G6.width + a
                            }
                        }
                        constructor(a, b, c) {
                            super();
                            Mzb.A(this);
                            this.sheet = a;
                            this.G6 = b;
                            this.zoom = c;
                            this.width = 0;
                            this.marginWidth = void 0;
                            this.hga = new __c.Zv(this.sheet, this.G6, {
                                zoom: this.zoom.get()
                            })
                        }
                    };
                var Tyb = O5(({
                        sheet: a,
                        children: b,
                        iF: c
                    }) => {
                        const d = P5(f => {
                                c.jla(a, f)
                            }, [c, a]),
                            e = P5(f => {
                                null != f ? c.kF.set(a, f) : c.kF.delete(a)
                            }, [c, a]);
                        return I5(__c.y5a, {
                            direction: "rtl" === a.config.direction ? "rtl" : "ltr",
                            onScroll: d,
                            At: e,
                            children: b
                        })
                    }),
                    Syb = class {
                        jla(a, b) {
                            this.onScroll && this.onScroll(a);
                            this.kW.set(a, b)
                        }
                        constructor(a) {
                            this.onScroll = a;
                            this.kF = new WeakMap;
                            this.kW = m6.map(new Map, {
                                deep: !1
                            });
                            this.scrollTo = n6((b, c) => {
                                b = this.kF.get(b);
                                null === b || void 0 === b ? void 0 : b.scrollTo({
                                    left: Math.floor(c)
                                })
                            })
                        }
                    };
                var V5 = class a extends q6 {
                    static A(b) {
                        P(b, {
                            Vc: W5.struct
                        })
                    }
                    render() {
                        const b = this.props.item;
                        return I5("div", {
                            ref: this.props.measureRef,
                            className: "E8r86A",
                            style: {
                                width: Math.min(this.props.tc.width, b.G)
                            },
                            children: I5(this.props.eG, {
                                sheet: b,
                                children: I5("div", {
                                    ref: this.props.xWa,
                                    className: "cXTiJA",
                                    style: {
                                        width: b.G,
                                        height: b.P
                                    },
                                    children: I5(this.props.bq, {
                                        sheet: b.config,
                                        Su: this.props.Su,
                                        scaleFactor: this.props.scaleFactor,
                                        Hx: this.props.Hx,
                                        Nx: this.props.Nx,
                                        Vc: this.Vc,
                                        oi: this.oi,
                                        tQ: void 0,
                                        mQ: void 0
                                    })
                                })
                            })
                        })
                    }
                    get Vc() {
                        const b =
                            this.props.Cd,
                            c = this.props.item.altText;
                        return c ? c.Fd && !b ? {
                            "aria-hidden": !0
                        } : {
                            "aria-label": c.text
                        } : {}
                    }
                    constructor(...b) {
                        super(...b);
                        a.A(this);
                        this.oi = O5(c => I5("div", {
                            className: "wKvivQ",
                            children: I5(Nzb, { ...this.props,
                                ...c,
                                $c: this.props.$c
                            })
                        }))
                    }
                };
                V5 = r6([Oc], V5);
                var Ozb = O5(({
                    page: a,
                    range: b,
                    uoa: c
                }) => {
                    if (null != c) {
                        var d = Xyb(a.sheet, b);
                        return I5("div", {
                            className: "Gi9pfA",
                            children: a.elements.map((e, f) => null == d ? I5(c, {
                                element: e
                            }, f) : __c.Br(Dr(e)).Zn(d) && I5(c, {
                                element: e
                            }, f))
                        })
                    }
                });
                var Pzb = new __c.NX,
                    t6 = a => Czb * a,
                    u6 = () => !1,
                    Yyb = O5(({
                        page: a,
                        Su: b,
                        Hx: c,
                        Nx: d,
                        H1: e,
                        scaleFactor: f,
                        viewport: g,
                        S4a: h,
                        bq: k,
                        oi: l,
                        uoa: m,
                        iab: n,
                        hab: p
                    }) => {
                        var q = "rtl" === a.sheet.direction,
                            r;
                        const t = null !== (r = null === f || void 0 === f ? void 0 : f.get()) && void 0 !== r ? r : 1;
                        r = N5(() => ({
                            range: w
                        }) => g6(U5, {
                            children: [m && I5(Ozb, {
                                page: a,
                                uoa: m,
                                range: w
                            }), p && I5(p, {})]
                        }), [a, m, p]);
                        const u = N5(() => ({
                            range: w
                        }) => {
                            if (null != w && null != n) return I5(n, {
                                range: w
                            })
                        }, [n]);
                        b = I5(k, {
                            sheet: a.sheet,
                            Su: b,
                            Hx: c,
                            Nx: d,
                            H1: e,
                            scaleFactor: f,
                            viewport: g,
                            oi: l,
                            tQ: u,
                            mQ: r
                        });
                        q = g6("div", {
                            className: "OsKKIQ",
                            children: [I5("div", {
                                className: "VDFv_A",
                                children: b
                            }), I5("div", {
                                className: "_688KWg",
                                children: I5(Cyb, {
                                    qd: q,
                                    highlight: !1,
                                    Cm: t6,
                                    scale: t
                                })
                            }), I5("div", {
                                className: "m0cT1w",
                                children: I5(Q5, {
                                    sheet: a.sheet,
                                    scale: t,
                                    Cm: t6,
                                    Jxa: u6,
                                    rFa: u6,
                                    ON: Pzb
                                })
                            }), I5("div", {
                                className: "zm537g",
                                children: I5(R5, {
                                    sheet: a.sheet,
                                    scale: t,
                                    Cm: t6,
                                    eya: u6,
                                    sFa: u6,
                                    ON: Pzb
                                })
                            })]
                        });
                        return h ? q : b
                    });
                var X5 = (a, b) => `${a.column.id}-${a.boundary}:${b.Da.id}-${b.boundary}`,
                    Rzb = class {
                        constructor() {
                            this.DJ = Qzb;
                            this.VOa = j6(a => {
                                const b = new Map;
                                for (const {
                                        column: c,
                                        Da: d,
                                        edge: e
                                    } of a) {
                                    switch (e) {
                                        case "blockStart":
                                            a = {
                                                ra: !0
                                            };
                                            break;
                                        case "blockEnd":
                                            a = {
                                                Ea: !0
                                            };
                                            break;
                                        case "inlineStart":
                                            a = {
                                                qa: !0
                                            };
                                            break;
                                        case "inlineEnd":
                                            a = {
                                                Ja: !0
                                            };
                                            break;
                                        default:
                                            throw new D(e);
                                    }
                                    const f = `${c.id}:${d.id}`;
                                    b.set(f, { ...b.get(f),
                                        ...a
                                    })
                                }
                                return b
                            });
                            this.aVa = j6(a => {
                                const b = new Map;
                                let c = 0;
                                a.rows.forEach(d => {
                                    const e = c,
                                        f = e + d.height;
                                    b.set(d, {
                                        start: e,
                                        end: f
                                    });
                                    c = f
                                });
                                return b
                            });
                            this.AUa = j6(a => {
                                const b = new Map;
                                var c = "rtl" === a.direction;
                                const d = c ? -1 : 1;
                                let e = 0;
                                c && (c = a.cols.last(), e = null != c ? a.qa(c) + c.width : 0);
                                a.cols.forEach(f => {
                                    const g = e,
                                        h = g + f.width * d;
                                    b.set(f, {
                                        start: g,
                                        end: h
                                    });
                                    e = h
                                });
                                return b
                            })
                        }
                    },
                    Szb = class {
                        constructor() {
                            this.u3a = j6((a, b) => {
                                const c = new Map;
                                for (const d of a.rows)
                                    for (const e of a.cols) {
                                        const f = `${e.id}:${d.id}`,
                                            g = kzb(a, {
                                                column: e,
                                                Da: d
                                            }, b);
                                        g && c.set(f, g)
                                    }
                                return c
                            }, {
                                equals: d6.identity
                            });
                            this.FPa = j6(a => {
                                const b = new Map;
                                for (const d of a.cols)
                                    for (const e of a.rows) {
                                        var c =
                                            Y5(this, a, d, e);
                                        if (!c) continue;
                                        const f = c.qa,
                                            g = c.Ja,
                                            h = c.ra;
                                        c = c.Ea;
                                        f && b.set(f.color, (b.get(f.color) || 0) + 1);
                                        h && b.set(h.color, (b.get(h.color) || 0) + 1);
                                        g && d === a.cols.last() && b.set(g.color, (b.get(g.color) || 0) + 1);
                                        c && e === a.rows.last() && b.set(c.color, (b.get(c.color) || 0) + 1)
                                    }
                                return b
                            }, {
                                equals: d6.identity
                            })
                        }
                    },
                    Qzb = new Szb,
                    ezb = new Rzb;
                var Tzb = class {
                    constructor() {
                        this.mOa = s6;
                        this.KUa = j6((a, b, c, d) => {
                            const e = [];
                            d = this.SUa(a, b, c, d);
                            b = (k, l) => (k = __c.EV(a.cells, l, k)) && Hyb(k);
                            for (const {
                                    Da: k,
                                    column: l,
                                    textAlign: m,
                                    nPa: n
                                } of d) {
                                var f = n.width + ("center" === m ? 0 : this.mOa),
                                    g = void 0;
                                switch (m) {
                                    case "start":
                                    case "justify":
                                        d = a.qa(l);
                                        g = d + f;
                                        break;
                                    case "center":
                                        g = a.qa(l) + l.width / 2;
                                        d = g - f / 2;
                                        g += f / 2;
                                        break;
                                    case "end":
                                        g = a.qa(l) + l.width;
                                        d = g - f;
                                        break;
                                    default:
                                        throw new D(m);
                                }
                                for (f = c.indexOf(l) - 1; 0 <= f; f--) {
                                    var h = c[f];
                                    if (h !== l && !b(k, h) || !lzb(d, g, a.qa(h) + h.width)) break;
                                    e.push({
                                        Da: k,
                                        column: h,
                                        edge: "inlineEnd"
                                    })
                                }
                                for (f = c.indexOf(l) + 1; f < c.length; f++) {
                                    h = c[f];
                                    if (h !== l && !b(k, h) || !lzb(d, g, a.qa(h))) break;
                                    e.push({
                                        Da: k,
                                        column: h,
                                        edge: "inlineStart"
                                    })
                                }
                            }
                            return e
                        }, {
                            equals: d6.structural
                        });
                        this.SUa = j6((a, b, c, d) => {
                            const e = [];
                            for (const g of c)
                                for (const h of b) {
                                    var f;
                                    c = a.layout.cells.get(h, g);
                                    if (!c || !c.ref.content.ref || c.span.Rc !== c.span.Vf || c.span.Qc !== c.span.Uf) continue;
                                    const {
                                        hg: k,
                                        textAlign: l
                                    } = ye(Me, a.layout.attrs.get(F5({
                                        hg: void 0,
                                        textAlign: void 0
                                    }), h, g) || {});
                                    c = H5(l, c.ref.content.ref.type,
                                        null === (f = c.ref.Ca.ref) || void 0 === f ? void 0 : f.type);
                                    const m = d(h, g);
                                    "overflow" === k && m && c && e.push({
                                        Da: h,
                                        column: g,
                                        textAlign: c,
                                        nPa: m
                                    })
                                }
                            return e
                        }, {
                            equals: d6.structural
                        })
                    }
                };
                var v6 = class a extends q6 {
                    static A(b) {
                        P(b, {
                            Hla: W5({
                                equals: d6.shallow
                            }),
                            Ila: W5({
                                equals: d6.shallow
                            }),
                            Fxa: W5({
                                equals: d6.structural
                            })
                        })
                    }
                    componentDidMount() {
                        const b = B(this.ref.current);
                        gc(this, o6(() => {
                            var c = this.props.scaleFactor;
                            const d = this.props.It;
                            var e;
                            c = null !== (e = null === c || void 0 === c ? void 0 : c.get()) && void 0 !== e ? e : 1;
                            e = d.height;
                            b.style.width = `${d.width*c}px`;
                            b.style.height = `${e*c}px`
                        }))
                    }
                    get Hla() {
                        const b = this.props.sheet;
                        return [...this.props.O7a].sort((c, d) => b.cols.Ci(c, d))
                    }
                    get Ila() {
                        const b = this.props.sheet;
                        return [...this.props.xw].sort((c, d) => b.rows.Ci(c, d))
                    }
                    get Fxa() {
                        return Uzb.KUa(this.props.sheet, this.Ila, this.Hla, this.props.bT)
                    }
                    render() {
                        var b = this.props.sheet,
                            c = this.props.It;
                        const d = fzb(b, this.Ila, this.Hla, this.Fxa),
                            e = c.width;
                        c = c.height;
                        b = "rtl" === b.direction;
                        return I5("svg", {
                            ref: this.ref,
                            role: "presentation",
                            className: M5("c6a1eQ", {
                                H_CtIQ: !b,
                                _8_56PQ: b
                            }),
                            viewBox: `0 0 ${e} ${c}`,
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            children: d.map(({
                                lines: f,
                                color: g,
                                weight: h,
                                Fi: k,
                                Gi: l
                            }) => I5("path", {
                                stroke: g,
                                strokeDasharray: k,
                                strokeDashoffset: l,
                                strokeWidth: h,
                                d: f.map(({
                                    p1: m,
                                    p2: n
                                }) => `M ${m.x} ${m.y} L ${n.x} ${n.y}`).join(" ")
                            }, `${g}-${h}-${k}-${l}`))
                        })
                    }
                    constructor(...b) {
                        super(...b);
                        a.A(this);
                        this.ref = szb()
                    }
                };
                v6 = r6([Oc], v6);
                var Uzb = new Tzb;
                var x6 = class a extends q6 {
                    static A(b) {
                        P(b, {
                            R0: W5,
                            eIa: W5
                        })
                    }
                    render() {
                        var b;
                        const c = this.props.iUa;
                        return g6("div", {
                            ref: this.mFa,
                            className: M5("ZTz_iA", "ltr" === this.props.sheet.direction ? "TA4X7w" : "WvuqMw"),
                            children: [(null === c || void 0 === c ? void 0 : c.zNa) && I5(w6, { ...this.props,
                                range: c.zNa.range,
                                VS: !0,
                                WS: !0,
                                className: "_0C8M3w",
                                e_: this.R0
                            }), (null === c || void 0 === c ? void 0 : c.C7a) && I5(w6, { ...this.props,
                                range: c.C7a.range,
                                VS: !1,
                                WS: !0,
                                className: "_7n44yg",
                                e_: this.R0
                            }), (null === c || void 0 === c ? void 0 : c.NVa) && I5(w6, { ...this.props,
                                range: c.NVa.range,
                                VS: !0,
                                WS: !1,
                                className: "fF5r6w",
                                e_: this.R0
                            }), I5(w6, { ...this.props,
                                range: null === c || void 0 === c ? void 0 : null === (b = c.b7a) || void 0 === b ? void 0 : b.range,
                                VS: !1,
                                WS: !1,
                                className: "llILYw",
                                e_: this.eIa
                            })]
                        })
                    }
                    componentDidMount() {
                        const b = o6(() => {
                            var c = this.props,
                                d = c.scaleFactor;
                            c = c.geometry;
                            const e = this.mFa.current;
                            e && (d = d ? d.get() : 1, e.style.width = `${c.width*d}px`, e.style.height = `${c.height*d}px`)
                        });
                        gc(this, [b])
                    }
                    get R0() {
                        return {
                            type: "excluded"
                        }
                    }
                    get eIa() {
                        return {
                            type: "hidden",
                            eL: this.YNa
                        }
                    }
                    constructor(...b) {
                        super(...b);
                        a.A(this);
                        this.mFa = Ss();
                        this.YNa = (c, d) => {
                            var e;
                            const f = this.props.sheet;
                            var g = this.props.iUa;
                            g = null === g || void 0 === g ? void 0 : null === (e = g.b7a) || void 0 === e ? void 0 : e.range;
                            return null == g ? !0 : 0 <= f.cols.Ci(c, g.Qc) && 0 >= f.cols.Ci(c, g.Uf) && 0 <= f.rows.Ci(d, g.Rc) && 0 >= f.rows.Ci(d, g.Vf)
                        }
                    }
                };
                x6 = r6([Oc], x6);
                var w6 = class a extends q6 {
                    static A(b) {
                        P(b, {
                            kFa: W5
                        })
                    }
                    get kFa() {
                        const b = this.props.viewport,
                            c = this.props.VS,
                            d = this.props.WS;
                        return null == b || !c && !d ? b : W5(() => {
                            const e = __c.Lr(b.get());
                            return Dr({
                                top: d ? 0 : e.top,
                                left: c ? 0 : e.left,
                                width: e.width,
                                height: e.height
                            })
                        })
                    }
                    render() {
                        const b = this.props.range,
                            c = this.props.e_,
                            d = this.props.tQ,
                            e = this.props.mQ,
                            f = "ltr" === this.props.sheet.direction ? "TA4X7w" : "WvuqMw";
                        return I5("div", {
                            ref: this.cja,
                            className: M5("i0YQww", this.props.className),
                            children: g6("div", {
                                ref: this.YBa,
                                children: [g6("div", {
                                    ref: this.XBa,
                                    className: "vUKoKg",
                                    children: [I5(y6, { ...this.props,
                                        viewport: this.kFa,
                                        bounds: "hidden" === (null === c || void 0 === c ? void 0 : c.type) ? void 0 : b,
                                        eL: "hidden" === (null === c || void 0 === c ? void 0 : c.type) ? c.eL : void 0
                                    }), I5("div", {
                                        className: M5("DC3n2A", f),
                                        children: e && I5(e, {
                                            range: b
                                        })
                                    })]
                                }), I5("div", {
                                    className: M5("DC3n2A", f),
                                    children: d && I5(d, {
                                        range: b
                                    })
                                })]
                            })
                        })
                    }
                    componentDidMount() {
                        const b = o6(() => {
                                var h = this.props,
                                    k = h.scaleFactor,
                                    l = h.sheet;
                                const m = h.range;
                                var n = h.geometry,
                                    p = this.cja.current;
                                const q = this.XBa.current;
                                h = this.YBa.current;
                                k = k ? k.get() : 1;
                                const r = m ? l.qa(m.Uf) + m.Uf.width - l.qa(m.Qc) : n.width;
                                n = m ? l.ra(m.Vf) + m.Vf.height - l.ra(m.Rc) : n.height;
                                p && (p.style.width = `${r*k}px`, p.style.height = `${n*k}px`);
                                q && (q.style.width = `${r*k}px`, q.style.height = `${n*k}px`);
                                h && (p = "rtl" === l.direction, p = m ? l.qa(m.Qc) * k * (p ? 1 : -1) : 0, l = m ? -l.ra(m.Rc) * k : 0, h.style.transform = `translate(${p}px, ${l}px)`)
                            }),
                            c = this.props.sheet;
                        var d = this.props.H1;
                        const e = this.props.VS,
                            f = this.props.WS,
                            g = null === d || void 0 === d ? void 0 : d(c, e, f);
                        d = o6(() => {
                            const h = this.cja.current;
                            if (null != h) {
                                var k = e || f ? "sticky" : "relative",
                                    l = f ? "0px" : "unset",
                                    m = e ? "0px" : "unset",
                                    n = e ? "0px" : "unset",
                                    p = "rtl" === c.direction;
                                if (null == g) h.style.position = k, h.style.top = l, h.style.left = p ? "unset" : m, h.style.right = p ? n : "unset";
                                else {
                                    const x = g.get();
                                    var q;
                                    h.style.position = null !== (q = x.position) && void 0 !== q ? q : k;
                                    var r;
                                    h.style.top = null !== (r = x.top) && void 0 !== r ? r : l;
                                    var t;
                                    h.style.left = p ? "unset" : null !== (t = x.left) && void 0 !== t ? t : m;
                                    var u;
                                    h.style.right = p ? null !== (u = x.right) && void 0 !== u ? u : n : "unset";
                                    var w;
                                    h.style.transform = null !==
                                        (w = x.transform) && void 0 !== w ? w : "unset"
                                }
                            }
                        });
                        gc(this, [b, d])
                    }
                    constructor(...b) {
                        super(...b);
                        a.A(this);
                        this.cja = Ss();
                        this.YBa = Ss();
                        this.XBa = Ss()
                    }
                };
                w6 = r6([Oc], w6);
                var Vzb = class {
                        constructor() {
                            this.rR = new Map;
                            this.g8a = (a, b, c, d) => {
                                const e = new Vzb;
                                for (const [f, g] of this.rR) c.has(g.Da) && e.rR.set(f, g);
                                c = `${b.id}:${a.id}`;
                                d ? e.rR.set(c, {
                                    width: d.width,
                                    height: d.height,
                                    Da: a,
                                    column: b
                                }) : e.rR.delete(c);
                                return e
                            };
                            this.bT = (a, b) => this.rR.get(`${b.id}:${a.id}`)
                        }
                    },
                    y6 = class a extends q6 {
                        static A(b) {
                            P(b, {
                                lK: m6.shallow,
                                Sn: W5,
                                bounds: W5,
                                xw: W5({
                                    equals: d6.shallow
                                }),
                                Ana: W5({
                                    equals: d6.shallow
                                }),
                                rqa: n6,
                                U_: n6.bound
                            })
                        }
                        get Sn() {
                            var b;
                            const c = null === (b = this.props.Su) || void 0 === b ? void 0 : b.get();
                            if (null != c && 0 !== c.length) return new __c.pB(c)
                        }
                        render() {
                            var b;
                            return g6("div", {
                                ref: vzb(this.pe, null === (b = this.Sn) || void 0 === b ? void 0 : b.Of),
                                children: [I5("div", {
                                    ref: this.sra,
                                    className: "_5YlOqQ"
                                }), I5("div", {
                                    ref: this.Bra,
                                    className: "_XCmKw"
                                }), this.lK.map(c => c.Z1a), I5(this.D9, {
                                    bT: this.state.bT
                                })]
                            })
                        }
                        componentDidMount() {
                            const b = c6(() => [this.Ana, this.xw], ([e, f]) => this.rqa(e, f), {
                                    fireImmediately: !0
                                }),
                                c = o6(() => {
                                    var e = this.props,
                                        f = e.scaleFactor;
                                    e = e.geometry;
                                    const g = this.pe.current;
                                    g && (f = f ? f.get() : 1, g.style.width =
                                        `${e.width*f}px`, g.style.height = `${e.height*f}px`)
                                }),
                                d = this.lK.map(e => nzb(e));
                            gc(this, [c, b, ...d])
                        }
                        get bounds() {
                            const b = this.props.sheet,
                                c = this.props.bounds;
                            var d, e, f, g;
                            return {
                                Qc: null !== (d = null === c || void 0 === c ? void 0 : c.Qc) && void 0 !== d ? d : b.cols.first(),
                                Uf: null !== (e = null === c || void 0 === c ? void 0 : c.Uf) && void 0 !== e ? e : b.cols.last(),
                                Rc: null !== (f = null === c || void 0 === c ? void 0 : c.Rc) && void 0 !== f ? f : b.rows.first(),
                                Vf: null !== (g = null === c || void 0 === c ? void 0 : c.Vf) && void 0 !== g ? g : b.rows.last()
                            }
                        }
                        get xw() {
                            const b = this.bounds,
                                c = this.props.sheet;
                            var d = this.props.viewport;
                            const e = this.props.scaleFactor.get();
                            var f = 500 * e,
                                g = null === d || void 0 === d ? void 0 : d.get();
                            d = g ? g.tl.y - f : b.Rc ? c.ra(b.Rc) : 0;
                            f = g ? g.br.y + f : b.Vf ? c.ra(b.Vf) + b.Vf.height : 0;
                            g = new Map;
                            for (let h = b.Rc; null != h && null != b.Vf && 0 >= c.rows.Ci(h, b.Vf); h = c.rows.next(h)) {
                                const k = c.ra(h);
                                if (!(k + h.height < d)) {
                                    if (k > f) break;
                                    g.set(h, k * e)
                                }
                            }
                            return g
                        }
                        get Ana() {
                            const b = this.bounds,
                                c = this.props.sheet;
                            var d = this.props.viewport;
                            const e = this.props.scaleFactor.get();
                            var f = 100 * e,
                                g = null === d || void 0 ===
                                d ? void 0 : d.get();
                            d = g ? g.tl.x - f : b.Qc ? c.qa(b.Qc) : 0;
                            f = g ? g.br.x + f : b.Uf ? c.qa(b.Uf) + b.Uf.width : 0;
                            g = new Map;
                            for (let h = b.Qc; null != h && null != b.Uf && 0 >= c.cols.Ci(h, b.Uf); h = c.cols.next(h)) {
                                const k = c.qa(h);
                                if (!(k + h.width < d)) {
                                    if (k > f) break;
                                    g.set(h, k * e)
                                }
                            }
                            return g
                        }
                        rqa(b, c) {
                            const d = B(this.sra.current),
                                e = B(this.Bra.current),
                                f = [],
                                g = new Map;
                            for (const h of this.YIa) c.has(h.Da) ? g.set(h.Da, h) : f.push(h);
                            for (const [h, k] of c) c = g.get(h) || f.pop(), c || (c = new Wzb(this.U_, h), d.appendChild(c.b_), e.appendChild(c.d_), this.YIa.push(c)),
                                c.update(k, h, b);
                            for (const h of f) h.hide()
                        }
                        U_(b, c) {
                            const d = this.props.Wba,
                                e = this.props.sheet,
                                f = this.props.eL;
                            b = new Xzb(this.props.$F, this.props.oi, d(b, c), e, b, c, f, this.WU);
                            gc(this, nzb(b));
                            this.lK.push(b);
                            return b
                        }
                        constructor(b) {
                            super(b);
                            a.A(this);
                            this.pe = Ss();
                            this.sra = Ss();
                            this.Bra = Ss();
                            this.YIa = [];
                            this.lK = [];
                            this.D9 = O5(c => {
                                const d = [...this.xw.keys()],
                                    e = [...this.Ana.keys()];
                                return I5(this.props.uLa, {
                                    xw: d,
                                    O7a: e,
                                    bT: c.bT
                                })
                            });
                            this.WU = (c, d, e) => {
                                this.setState(f => {
                                    const g = e();
                                    return f.g8a(d, c, this.xw, g)
                                })
                            };
                            this.state = new Vzb
                        }
                    };
                y6 = r6([Oc], y6);
                var Wzb = class {
                        static A(a) {
                            P(a, {
                                update: n6
                            })
                        }
                        update(a, b, c) {
                            [this.b_, this.d_].forEach(d => {
                                d.style.transform = `translateY(${a}px)`;
                                d.classList.add("FPpqvg")
                            });
                            this.Da = b;
                            for (const [d] of c) c = this.lK.get(d), c || (c = this.U_(d, b), this.lK.set(d, c), this.b_.appendChild(c.eba), this.d_.appendChild(c.hL)), c.update(b)
                        }
                        hide() {
                            [this.b_, this.d_].forEach(a => {
                                a.style.transform = "translate(-1000px, -1000px) scale(0)"
                            })
                        }
                        constructor(a, b) {
                            Wzb.A(this);
                            this.U_ = a;
                            this.Da = b;
                            this.b_ = document.createElement("div");
                            this.d_ = document.createElement("div");
                            this.lK = new Map
                        }
                    },
                    Xzb = class {
                        static A(a) {
                            P(a, {
                                L_: m6.ref,
                                Da: m6.ref,
                                Fa: W5,
                                attrs: W5,
                                WT: W5,
                                renderer: W5,
                                update: n6
                            })
                        }
                        get Z1a() {
                            return this.L_
                        }
                        get Fa() {
                            return __c.EV(this.sheet.cells, this.col, this.Da)
                        }
                        get attrs() {
                            return this.sheet.layout.attrs.get(F5({
                                hg: 0,
                                textAlign: 0,
                                direction: 0
                            }), this.Da, this.col) || {}
                        }
                        get WT() {
                            return this.eL ? !this.eL(this.col, this.Da) : !1
                        }
                        get renderer() {
                            const a = this.Fa;
                            if (a && (a.content || a.Ca)) return this.$F({
                                context: {
                                    Da: this.Da,
                                    col: this.col,
                                    sheet: this.sheet,
                                    attrs: this.attrs
                                },
                                NI: this.WU,
                                oi: this.oi
                            })
                        }
                        update(a) {
                            this.Da = a;
                            this.cX.Da = a
                        }
                        constructor(a, b, c, d, e, f, g, h) {
                            Xzb.A(this);
                            var k, l, m, n, p, q;
                            this.$F = a;
                            this.cX = c;
                            this.sheet = d;
                            this.col = e;
                            this.eL = g;
                            this.eba = document.createElement("div");
                            this.hL = document.createElement("div");
                            this.dD = document.createElement("div");
                            this.dA = document.createElement("div");
                            this.EV = document.createElement("div");
                            this.gZa = () => {
                                if (this.renderer) {
                                    var r = "react" === this.renderer.type ? this.EV : this.dA;
                                    if (0 !== r.childNodes.length && (r = r.childNodes[0], r instanceof HTMLElement)) return {
                                        width: r.clientWidth,
                                        height: r.clientHeight
                                    }
                                }
                            };
                            this.Da = f;
                            this.eba.className = "_2JFriw";
                            this.hL.className = "imy9ug";
                            this.dD.className = M5("pDMp7w", {
                                _0yZ6Qg: "text3" !== (null === (l = this.Fa) || void 0 === l ? void 0 : null === (k = l.content) || void 0 === k ? void 0 : k.type),
                                qhF5uA: "text3" !== (null === (n = this.Fa) || void 0 === n ? void 0 : null === (m = n.content) || void 0 === m ? void 0 : m.type) && "text2" !== (null === (q = this.Fa) || void 0 === q ? void 0 : null === (p = q.content) || void 0 === p ? void 0 : p.type)
                            });
                            this.dA.className = "_30B9pw";
                            this.dD.appendChild(this.dA);
                            this.hL.appendChild(this.dD);
                            this.EV.className = "G7zH2w";
                            this.WU = () => {
                                h(this.col, this.Da, this.gZa)
                            };
                            this.oi = r => I5(b, { ...r,
                                NI: this.WU
                            })
                        }
                    };
                var e6 = class extends q6 {
                    render() {
                        const a = this.props.sheet,
                            b = this.props.Su,
                            c = this.props.H1,
                            d = this.props.$F,
                            e = this.props.Vc,
                            f = this.props.oi,
                            g = this.props.It,
                            h = this.props.viewport,
                            k = this.props.tQ,
                            l = this.props.mQ;
                        return I5("div", {
                            className: M5("SNkrHw", "ltr" === a.direction ? "TA4X7w" : "WvuqMw"),
                            ...e,
                            children: I5(x6, {
                                $F: d,
                                oi: f,
                                uLa: this.D9,
                                Wba: this.Wba,
                                sheet: a,
                                Su: b,
                                H1: c,
                                scaleFactor: this.scaleFactor,
                                viewport: h,
                                geometry: g,
                                tQ: k,
                                mQ: l
                            })
                        })
                    }
                    get scaleFactor() {
                        return this.props.scaleFactor ? this.props.scaleFactor : W5(() =>
                            1)
                    }
                    constructor(...a) {
                        super(...a);
                        this.D9 = O5(b => I5(v6, { ...b,
                            sheet: this.props.sheet,
                            scaleFactor: this.scaleFactor,
                            It: this.props.It
                        }));
                        this.Wba = (b, c) => new S5(this.props.aC, this.props.sheet, this.props.It, b, c, this.scaleFactor, this.Hx, this.Nx);
                        this.Hx = (b, c) => {
                            var d, e;
                            return null === (d = (e = this.props).Hx) || void 0 === d ? void 0 : d.call(e, this.props.sheet, b, c)
                        };
                        this.Nx = (b, c) => {
                            var d, e;
                            return null === (d = (e = this.props).Nx) || void 0 === d ? void 0 : d.call(e, this.props.sheet, b, c)
                        }
                    }
                };
                e6 = r6([Oc], e6);
                __c.rqa = {
                    HWa: function(a) {
                        var b = new Kzb;
                        const c = a.Rn,
                            d = a.Sf,
                            e = a.$c;
                        var f = a.Ud;
                        const g = a.zt;
                        var h = a.Gd;
                        const k = a.Ya,
                            {
                                zQ: l,
                                kz: m
                            } = yyb({
                                Ht: a.Ht,
                                Am: a.Am,
                                cq: a.cq
                            });
                        h = new Izb(k, h);
                        ({
                            lOa: a
                        } = Lyb({
                            DW: b,
                            zQ: l,
                            aC: h
                        }));
                        const n = ozb({
                            DW: b,
                            $F: l,
                            aC: h
                        });
                        c.Y9 = Zyb({
                            bq: n,
                            $c: e
                        });
                        d.E9 = Ryb({
                            bq: n,
                            $c: e
                        });
                        ({
                            yLa: b
                        } = Wyb({
                            bq: n,
                            $c: g(),
                            jFa: new Lzb
                        }));
                        f.lm.X9 = b;
                        const {
                            CJa: p,
                            DJa: q,
                            BJa: r
                        } = Eyb();
                        f = O5(t => I5(wzb, { ...t,
                            bq: n,
                            xLa: p,
                            zLa: q,
                            vLa: r,
                            oi: xzb
                        }));
                        return {
                            kz: m,
                            Voa: f,
                            iFa: a
                        }
                    }
                };
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/d1e4db25fe2d09ae.js.map