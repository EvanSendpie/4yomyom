(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [8856], {

        /***/
        906964: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(686040);
            __web_req__(784117);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var W = __c.W;
                var U = __c.U;
                var E = __c.E;
                var L = __c.L;
                var N = __c.N;
                var D = __c.D;
                var sb = __c.sb;
                var Jub = function(a) {
                        let {
                            r: b,
                            g: c,
                            b: d
                        } = __c.Dw(a);
                        c /= 255;
                        d /= 255;
                        a = b / 255;
                        return .2126 * (.03928 >= a ? a / 12.92 : ((a + .055) / 1.055) ** 2.4) + .7152 * (.03928 >= c ? c / 12.92 : ((c + .055) / 1.055) ** 2.4) + .0722 * (.03928 >= d ? d / 12.92 : ((d + .055) / 1.055) ** 2.4)
                    },
                    M4 = function(a, b) {
                        var c = a.mHa.get(b);
                        if (null != c) return c;
                        c = {
                            value: a.Xv.Pp(b)
                        };
                        a.mHa.set(b, c);
                        a.gHa.set(c, b);
                        return c
                    },
                    N4 = function(a, b) {
                        a = a.gHa.get(b);
                        if (null == a) throw new Kub("ref does not exists");
                        return a
                    },
                    Q4 = function(a) {
                        const b = (c, d) => {
                            if (null == c && null != a) return a;
                            if ("string" !==
                                (null === c || void 0 === c ? void 0 : c.type)) throw "toWidgetData" === d ? new O4("string", c) : new P4("string", c);
                            return c.value
                        };
                        return {
                            Ui: c => ({
                                type: "string",
                                value: c
                            }),
                            Qp: c => b(c, "toWidgetState"),
                            Pp: c => b(c, "toWidgetData"),
                            Lr: c => b(c, "toWidgetData")
                        }
                    },
                    S4 = function(a, b) {
                        if (0 === a.length) throw new R4("At least one value must be provided for literal types.");
                        const c = new Set(a),
                            d = (e, f) => {
                                if (null == e) return b;
                                if ("string" !== (null === e || void 0 === e ? void 0 : e.type) || !c.has(e.value)) throw "toWidgetData" === f ? new O4("literal", e) : new P4("literal",
                                    e);
                                return e.value
                            };
                        return {
                            Ui: e => ({
                                type: "string",
                                value: e
                            }),
                            Qp: e => d(e, "toWidgetState"),
                            Pp: e => d(e, "toWidgetData"),
                            Lr: e => d(e, "toWidgetData")
                        }
                    },
                    T4 = function(a) {
                        const b = (c, d) => {
                            if (null == c || !Number.isFinite(a)) return a;
                            if ("double" !== (null === c || void 0 === c ? void 0 : c.type) || !Number.isFinite(c.value)) throw "toWidgetData" === d ? new O4("double", c) : new P4("double", c);
                            return c.value
                        };
                        return {
                            Ui: c => {
                                if (!Number.isFinite(c)) throw new Lub(c);
                                return {
                                    type: "double",
                                    value: c
                                }
                            },
                            Qp: c => b(c, "toWidgetState"),
                            Pp: c => b(c, "toWidgetData"),
                            Lr: c => b(c, "toWidgetData")
                        }
                    },
                    Mub = function() {
                        const a = b => {
                            if ("fill" !== (null === b || void 0 === b ? void 0 : b.type)) throw new O4("fill", b);
                            return b.value
                        };
                        return {
                            Ui: b => ({
                                type: "fill",
                                value: b
                            }),
                            Qp: b => {
                                if ("fill" !== (null === b || void 0 === b ? void 0 : b.type)) throw new P4("fill", b);
                                return b.value
                            },
                            Pp: a,
                            Lr: a
                        }
                    },
                    U4 = function(a) {
                        const b = new Set;
                        for (const d of Object.keys(a)) {
                            const [e] = a[d];
                            if (b.has(e)) throw new R4(`Duplicate serialized keys "${e}" found in record schema.`);
                            b.add(e)
                        }
                        const c = (d, e) => {
                            if ("dict" !== (null === e || void 0 ===
                                    e ? void 0 : e.type)) throw new O4("record", e);
                            if (!e.value.every((g, h) => b.has(h))) throw new O4("record", e);
                            const f = {};
                            for (const g of Object.keys(a)) {
                                const [h, k] = a[g], l = Nub(() => {
                                    const m = e.value.get(h);
                                    return k.Pp(m)
                                }, {
                                    keepAlive: !0
                                });
                                Object.defineProperty(f, g, {
                                    get() {
                                        return l.get()
                                    },
                                    set(m) {
                                        "readonly" !== d && (m = k.Ui(m), null == m ? e.value.delete(h) : e.value.set(h, m))
                                    },
                                    enumerable: !0
                                })
                            }
                            return f
                        };
                        return {
                            Ui: d => {
                                const e = {};
                                for (const f of Object.keys(a)) {
                                    const [g, h] = a[f], k = h.Ui(d[f]);
                                    null != k && (e[g] = k)
                                }
                                return {
                                    type: "dict",
                                    value: new Map(Object.entries(e))
                                }
                            },
                            Qp: d => {
                                if ("dict" !== (null === d || void 0 === d ? void 0 : d.type)) throw new P4("record", d);
                                const e = {};
                                for (const f of Object.keys(a)) {
                                    const [g, h] = a[f], k = h.Qp(d.value.get(g));
                                    null != k && (e[f] = k)
                                }
                                return e
                            },
                            Pp: d => c("editable", d),
                            Lr: d => c("readonly", d),
                            Bc: d => U4({ ...a,
                                ...d
                            })
                        }
                    },
                    W4 = function(a) {
                        return {
                            Ui: b => ({
                                type: "list",
                                value: b.map(c => a.Ui(c))
                            }),
                            Qp: b => {
                                if ("list" !== (null === b || void 0 === b ? void 0 : b.type)) throw new P4("list", b);
                                return b.value.filter(sb).map(c => a.Qp(c))
                            },
                            Pp: b => {
                                if ("list" !==
                                    (null === b || void 0 === b ? void 0 : b.type)) throw new O4("list", b);
                                return new Oub(b, a)
                            },
                            Lr: b => {
                                if ("list" !== (null === b || void 0 === b ? void 0 : b.type)) throw new O4("list", b);
                                return new V4(b, a)
                            }
                        }
                    },
                    X4 = function(a, b) {
                        const c = new Set(Object.keys(a)),
                            d = e => {
                                var f;
                                if ("dict" !== (null === e || void 0 === e ? void 0 : e.type)) throw new O4("union", e);
                                const g = null === (f = e.value.get("k")) || void 0 === f ? void 0 : f.value;
                                f = e.value.get("v");
                                if (null == g || null == f || "string" !== typeof g || !c.has(g)) throw new O4("union", e);
                                return {
                                    $Z: a[g],
                                    a_: f
                                }
                            };
                        return {
                            Ui: e => {
                                const f = b(e);
                                return {
                                    type: "dict",
                                    value: new Map([
                                        ["k", {
                                            type: "string",
                                            value: f
                                        }],
                                        ["v", a[f].Ui(e)]
                                    ])
                                }
                            },
                            Qp: e => {
                                var f;
                                if ("dict" !== (null === e || void 0 === e ? void 0 : e.type)) throw new P4("union", e);
                                const g = null === (f = e.value.get("k")) || void 0 === f ? void 0 : f.value;
                                f = e.value.get("v");
                                if (null == g || null == f || "string" !== typeof g || !c.has(g)) throw new P4("union", e);
                                const {
                                    $Z: h,
                                    a_: k
                                } = {
                                    $Z: a[g],
                                    a_: f
                                };
                                return h.Qp(k)
                            },
                            Pp: e => {
                                const {
                                    $Z: f,
                                    a_: g
                                } = d(e);
                                return f.Pp(g)
                            },
                            Lr: e => {
                                const {
                                    $Z: f,
                                    a_: g
                                } = d(e);
                                return f.Lr(g)
                            }
                        }
                    },
                    Qub = function(a) {
                        const b =
                            a.uj,
                            c = a.Kg;
                        return {
                            Mva: function() {
                                return !(!c.mP || !b.fields.first(({
                                    value: d
                                }) => !!d.options.first(({
                                    value: e
                                }) => e.id === c.mP)))
                            },
                            PUa: function(d, e) {
                                var f = b.fields.first(({
                                    value: h
                                }) => h.id === d);
                                f = f ? Pub(c.results, f.value.options).get(d) : void 0;
                                if (!f) return 0;
                                var g;
                                e = null !== (g = f.zBa.get(e)) && void 0 !== g ? g : 0;
                                g = 0 < f.total ? e / f.total * 100 : 0;
                                Number.isInteger(g) || (g = parseFloat(g.toFixed(1)));
                                return g
                            },
                            iVa: function(d) {
                                var e = b.fields.first(({
                                    value: f
                                }) => f.id === d);
                                return e ? (e = Pub(c.results, e.value.options).get(d)) ? e.total :
                                    0 : 0
                            }
                        }
                    },
                    Xub = function(a, b, c, d, e, f, g, h, k) {
                        function l() {
                            return !z() && 0 === a.Kg.status
                        }
                        async function m() {
                            if (c && d) {
                                var {
                                    x5a: A
                                } = await c.CTa(new Rub({
                                    Qu: u,
                                    zH: w,
                                    Yc: d,
                                    Ku: f
                                }));
                                return [...A].filter(C => 1 === C.status).sort((C, F) => F.timestamp - C.timestamp)[0]
                            }
                        }
                        async function n() {
                            var A;
                            const C = q("submit_response");
                            var F = {
                                Qu: u,
                                dUa: x,
                                QC: "interacted",
                                action: "response_submitted",
                                location: "in_form"
                            };
                            g && __c.$X({
                                span: C,
                                za: g,
                                event: Sub,
                                props: F
                            });
                            const H = a.Kg.Nf;
                            F = a.Kg.results;
                            if (null != H && l()) {
                                var I = null === (A = a.uj.fields.first(({
                                    value: O
                                }) => {
                                    var R;
                                    return !(null === (R = O.options.first(({
                                        value: V
                                    }) => V.id === H)) || void 0 === R || !R.value)
                                })) || void 0 === A ? void 0 : A.value;
                                if (I) {
                                    r("selected_field_found", C);
                                    var K = a.Kg,
                                        J = Tub({
                                            xQa: F,
                                            Pn: I.id,
                                            ME: H
                                        });
                                    r("field_results_created", C);
                                    Y4(() => {
                                        a.Sm({ ...a.Kg,
                                            results: J,
                                            mP: H,
                                            zF: 0
                                        })
                                    });
                                    r("submission_set", C);
                                    C.oM();
                                    if (c && d) try {
                                        const O = [new Z4({
                                                Pn: I.id,
                                                value: H,
                                                Mda: {
                                                    id: I.id,
                                                    label: I.label.text.ba.trim(),
                                                    Mda: {
                                                        type: "SELECT_FIELD",
                                                        options: I.options.map(({
                                                            value: V
                                                        }) => ({
                                                            label: V.label.text.ba.trim(),
                                                            value: V.id
                                                        })),
                                                        multiple: !1,
                                                        arity: 1
                                                    }
                                                }
                                            })],
                                            R = await c.lgb(new Uub({
                                                VVa: __c.nA(),
                                                Qu: u,
                                                zH: w,
                                                source: new Vub({
                                                    Yc: d
                                                }),
                                                PK: O
                                            }));
                                        switch (R.type) {
                                            case "SUCCESS":
                                                break;
                                            case "ERROR":
                                                await p(c, d, R.code, O, I);
                                                break;
                                            default:
                                                throw new D(R);
                                        }
                                    } catch (O) {
                                        null === e || void 0 === e ? void 0 : __c.ud(e, {
                                            ly: N("izckBA"),
                                            group: t,
                                            NQ: {
                                                Sw: N("mQhziQ"),
                                                onClick: n
                                            }
                                        }), h.Bb(O instanceof Error ? O : Error(`Error submitting form: ${String(O)}`)), Y4(() => {
                                            a.Sm({ ...K
                                            })
                                        })
                                    }
                                }
                            }
                        }
                        async function p(A, C, F, H, I) {
                            switch (F) {
                                case 1:
                                case 2:
                                    const K = await m();
                                    if (!K || !K.PK.length) throw Error("Submission already exists, but cannot find latest live submission");
                                    const J = K.PK[0].value;
                                    if (I.options.some(({
                                            value: O
                                        }) => O.id === J)) switch (K.status) {
                                        case 1:
                                            h.Bb(Error("User tried to submit to a form that they already submitted to"));
                                            Y4(() => {
                                                a.Sm(O => ({ ...O,
                                                    mP: K.id
                                                }))
                                            });
                                            return;
                                        case 2:
                                            throw Error("A submission associated with a valid option has been found, but it's been archived");
                                        default:
                                            throw new D(K.status);
                                    }
                                    if (1 === F) throw Error(`Conflicting submission with id: ${K.id}; submission already exists`);
                                    A = await A.Wqb(new Wub({
                                        w5a: K.id,
                                        Qu: u,
                                        Yc: C,
                                        fingerprint: w,
                                        Ku: f,
                                        PK: H
                                    }));
                                    switch (A.type) {
                                        case "SUCCESS":
                                            break;
                                        case "ERROR":
                                            throw Error("Update submission failed");
                                        default:
                                            throw new D(A);
                                    }
                                    break;
                                case 3:
                                    throw Error("Submitting to an unknown form");
                                default:
                                    throw new D(F);
                            }
                        }

                        function q(A) {
                            return k.Vj(A, {
                                iC: {
                                    name: `ui.rendering.form.${A}`
                                }
                            })
                        }

                        function r(A, C) {
                            C.Zj(A);
                            C.$l().Zj(A)
                        }
                        const t = Symbol("UNABLE_TO_SUBMIT"),
                            u = a.uj.id,
                            w = a.uj.o7,
                            x = a.uj.type,
                            z = b.Mva;
                        return {
                            submit: n,
                            KZa: function() {
                                a.Sm(A => ({ ...A,
                                    zF: 1
                                }))
                            },
                            LZa: function() {
                                a.Sm(A => ({ ...A,
                                    zF: 0
                                }))
                            },
                            JZa: function() {
                                a.Sm(A => ({ ...A,
                                    zF: 2
                                }))
                            },
                            OZa: function() {
                                a.Sm(A => ({ ...A,
                                    zF: 1
                                }))
                            },
                            sHa: function(A) {
                                l() && a.uj.fields.some(({
                                    value: C
                                }) => C.options.some(({
                                    value: F
                                }) => F.id === A)) && (Y4(() => {
                                    a.Sm(C => ({ ...C,
                                        Nf: C.Nf === A ? void 0 : A
                                    }))
                                }), "poll" === x && n())
                            },
                            $za: function(A) {
                                l() && a.uj.fields.some(({
                                    value: C
                                }) => C.options.some(({
                                    value: F
                                }) => F.id === A)) && a.Sm(C => ({ ...C,
                                    RA: A
                                }))
                            },
                            aAa: function(A) {
                                0 === a.Kg.status && a.uj.fields.some(({
                                    value: C
                                }) => C.options.some(({
                                    value: F
                                }) => F.id === A)) && a.Kg.RA && a.Sm(C => ({ ...C,
                                    RA: void 0
                                }))
                            },
                            Zza: function(A) {
                                0 === a.Kg.status && a.uj.fields.some(({
                                        value: C
                                    }) =>
                                    C.options.some(({
                                        value: F
                                    }) => F.id === A)) && a.Kg.Nf !== A && !a.Kg.mP && a.Sm(C => ({ ...C,
                                    Fz: A
                                }))
                            },
                            dAa: function(A) {
                                0 === a.Kg.status && a.uj.fields.some(({
                                    value: C
                                }) => C.options.some(({
                                    value: F
                                }) => F.id === A)) && a.Kg.Fz && a.Sm(C => ({ ...C,
                                    Fz: void 0
                                }))
                            }
                        }
                    },
                    Tub = function({
                        xQa: a,
                        Pn: b,
                        ME: c
                    }) {
                        var d = a.find(e => e.Pn === b);
                        a = a.filter(e => e.Pn !== b).map(e => ({ ...e,
                            Lp: e.Lp.map(f => ({ ...f
                            }))
                        }));
                        if (d) {
                            d = { ...d,
                                Lp: d.Lp.map(f => ({ ...f
                                }))
                            };
                            const e = d.Lp.find(f => f.ME === c);
                            e ? e.count += 1 : d.Lp.push({
                                ME: c,
                                count: 1
                            });
                            return [...a, d]
                        }
                        return [...a, {
                            Pn: b,
                            version: 1,
                            Lp: [{
                                ME: c,
                                count: 1
                            }]
                        }]
                    },
                    Yub = function(a, b) {
                        const c = async () => {
                            try {
                                await b()
                            } finally {
                                a.VE && (a.VE = window.setTimeout(c, a.p5))
                            }
                        };
                        a.VE = window.setTimeout(c, a.xca ? a.p5 : 0);
                        const d = () => {
                                window.clearTimeout(a.VE);
                                a.VE = window.setTimeout(c, 2E3)
                            },
                            e = () => {
                                window.clearTimeout(a.VE);
                                a.VE = void 0
                            },
                            f = () => {
                                "visible" === document.visibilityState ? d() : e()
                            };
                        window.addEventListener("focus", d);
                        window.addEventListener("blur", e);
                        document.addEventListener("visibilitychange", f);
                        return () => {
                            window.clearTimeout(a.VE);
                            window.clearTimeout(a.ES);
                            a.VE = void 0;
                            a.ES = void 0;
                            window.removeEventListener("focus", d);
                            window.removeEventListener("blur", e);
                            document.removeEventListener("visibilitychange", f)
                        }
                    },
                    Zub = function(a) {
                        a.p5 = 2E3;
                        a.ES && window.clearTimeout(a.ES);
                        a.ES = window.setTimeout(() => {
                            a.p5 = 1E4;
                            a.ES = void 0
                        }, 6E4)
                    },
                    $ub = async function(a) {
                        a.Oh.Kg.yT || (a.z6(1), await Promise.all([a.xYa(), a.Mua()]), a.z6(0), a.REa(!0))
                    },
                    bvb = function(a) {
                        if (a.SS && "poll" === a.type) {
                            var b = new avb;
                            return Yub(b, async () => {
                                (await a.Mua()).U1 && Zub(b)
                            })
                        }
                    },
                    cvb = function(a, b) {
                        if (a.length !==
                            b.length) return !0;
                        b = new Map(b.map(d => [d.Pn, d]));
                        for (let d = 0; d < a.length; d++) {
                            const e = a[d];
                            var c = b.get(e.Pn);
                            if (!c || e.Lp.length !== c.Lp.length) return !0;
                            c = new Map(c.Lp.map(f => [f.ME, f]));
                            for (let f = 0; f < e.Lp.length; f++) {
                                const g = e.Lp[f],
                                    h = c.get(g.ME);
                                if (!h || g.count !== h.count) return !0
                            }
                        }
                        return !1
                    },
                    $4 = function({
                        direction: a,
                        gap: b,
                        padding: c,
                        background: d,
                        border: e,
                        N: f,
                        cells: g,
                        ...h
                    }) {
                        a = "vertical" === a;
                        let k = [];
                        const l = [],
                            m = b && c,
                            n = c ? 1 : 0;
                        let p = 1;
                        for (let q = 0; q < g.length; q++) {
                            const r = g[q];
                            "string" === typeof r.size ? k.push(r.size) :
                                k.push(`${r.size}px`);
                            l.push({ ...r,
                                id: r.id,
                                placement: a ? {
                                    gridColumnStart: `${n+1}`,
                                    gridColumnEnd: `${n+2}`,
                                    gridRowStart: `${n+p}`,
                                    gridRowEnd: `${n+p+1}`,
                                    padding: r.padding ? dvb(r.padding) : void 0,
                                    alignSelf: r.alignSelf
                                } : {
                                    gridColumnStart: `${n+p}`,
                                    gridColumnEnd: `${n+p+1}`,
                                    gridRowStart: `${n+1}`,
                                    gridRowEnd: `${n+2}`,
                                    padding: r.padding ? dvb(r.padding) : void 0,
                                    alignSelf: r.alignSelf
                                }
                            });
                            p += m ? 2 : 1
                        }
                        m && (k = k.join(` ${b}px `).split(" "));
                        c && (k = [`${c}px`, ...k, `${c}px`]);
                        return { ...h,
                            type: "layout",
                            cells: l,
                            fill: d,
                            border: e,
                            N: f,
                            gridTemplateColumns: a ? c ? [`${c}px`, "1fr", `${c}px`] : ["1fr"] : k,
                            gridTemplateRows: a ? k : c ? [`${c}px`, "auto", `${c}px`] : ["auto"],
                            columnGap: m || a ? void 0 : b,
                            rowGap: !m && a ? b : void 0
                        }
                    },
                    evb = function({
                        padding: a,
                        background: b,
                        N: c,
                        La: d,
                        border: e,
                        content: f,
                        ref: g,
                        key: h,
                        ...k
                    }) {
                        return { ...k,
                            type: "layout",
                            gridTemplateColumns: ["1fr"],
                            gridTemplateRows: ["1fr"],
                            fill: b,
                            N: c,
                            La: d,
                            border: e,
                            cells: [{
                                id: "_",
                                content: f,
                                placement: {
                                    gridColumnStart: "1",
                                    gridColumnEnd: "2",
                                    gridRowStart: "1",
                                    gridRowEnd: "2",
                                    alignSelf: "center",
                                    padding: a
                                }
                            }],
                            key: h,
                            ref: g
                        }
                    },
                    dvb = function(a) {
                        switch (a.length) {
                            case 0:
                                break;
                            case 1:
                                return a[0];
                            case 2:
                                return {
                                    ra: a[0],
                                    Ja: a[1],
                                    Ea: a[0],
                                    qa: a[1]
                                };
                            case 4:
                                return {
                                    ra: a[0],
                                    Ja: a[1],
                                    Ea: a[2],
                                    qa: a[3]
                                };
                            default:
                                throw Error(`Invalid padding value: ${a}`);
                        }
                    },
                    a5 = function(a, b) {
                        __c.v(0 < b.length, "zero contrast candidates received");
                        const c = new Map;
                        return __c.iA(b, d => {
                            var e;
                            if (null === (e = c.get(d)) || void 0 === e) {
                                e = Jub(d);
                                const f = Jub(a);
                                e = e > f ? (e + .05) / (f + .05) : (f + .05) / (e + .05)
                            }
                            c.set(d, e);
                            return e
                        })
                    },
                    fvb = function(a, b) {
                        __c.v(!0);
                        __c.v(!0);
                        __c.v(!0);
                        const {
                            aa: c,
                            a: d,
                            b: e
                        } = __c.xw(a), {
                            aa: f,
                            a: g,
                            b: h
                        } = __c.xw(b), k = (c + f) / 2;
                        var l = (Math.hypot(d, e) + Math.hypot(g, h)) / 2;
                        l = .5 * (1 - Math.sqrt(l ** 7 / (l ** 7 + 25 ** 7)));
                        var m = d * (1 + l),
                            n = g * (1 + l),
                            p = Math.hypot(m, e),
                            q = Math.hypot(n, h);
                        l = (p + q) / 2;
                        var r = __c.Iw(180 * Math.atan2(e, m) / Math.PI);
                        const t = __c.Iw(180 * Math.atan2(h, n) / Math.PI);
                        m = 180 < Math.abs(r - t) ? (r + t + 360) / 2 : (r + t) / 2;
                        n = q - p;
                        p = 2 * Math.sqrt(p * q) * Math.sin((180 >= Math.abs(t - r) ? t - r : t <= r ? t - r + 360 : t - r - 360) / 2 * Math.PI / 180);
                        q = 1 + .045 * l;
                        r = 1 + .015 * l * (1 - .17 * Math.cos((m - 30) * Math.PI / 180) + .24 * Math.cos(2 * m * Math.PI /
                            180) + .32 * Math.cos((3 * m + 6) * Math.PI / 180) - .2 * Math.cos((4 * m - 63) * Math.PI / 180));
                        if (3 <= Math.sqrt(((f - c) / (1 + .015 * (k - 50) ** 2 / Math.sqrt(20 + (k - 50) ** 2))) ** 2 + (n / (1 * q)) ** 2 + (p / (1 * r)) ** 2 + n / (1 * q) * (p / (1 * r)) * -(2 * Math.sqrt(l ** 7 / (l ** 7 + 25 ** 7))) * Math.sin(60 * Math.exp(-1 * ((m - 275) / 25) ** 2) * Math.PI / 180))) return a;
                        const {
                            h: u,
                            s: w,
                            aa: x
                        } = __c.Fw(b);
                        ({
                            aa: a
                        } = __c.Fw(a5(b, b5)));
                        return __c.Gw(new __c.vw(u, w, x + .5 * (a - x)))
                    },
                    gvb = function({
                        width: a,
                        height: b,
                        Ld: c,
                        color: d,
                        ZWa: e,
                        backgroundColor: f
                    }) {
                        return {
                            type: "shape",
                            width: a,
                            height: b,
                            z8: {
                                width: 16,
                                height: 16
                            },
                            Za: [{
                                d: "M 8 16 C 12.4183 16 16 12.4183 16 8 C 16 3.5817 12.4183 0 8 0 C 3.5817 0 0 3.5817 0 8 C 0 12.4183 3.5817 16 8 16 Z",
                                stroke: {
                                    weight: c,
                                    color: d
                                },
                                fill: {
                                    color: d
                                }
                            }, {
                                d: e ? "M11.9541 5.09249C11.5708 4.70916 10.9493 4.70916 10.5659 5.09249L6.84653 8.8119L5.44784 7.39414C5.23981 7.18328 4.97538 7.08048 4.70513 7.09454C4.44717 7.10796 4.22126 7.22537 4.05972 7.38474C3.89817 7.54411 3.77772 7.76841 3.76081 8.02616C3.74309 8.2962 3.8423 8.562 4.05032 8.77286L6.14306 10.8941C6.35108 11.105 6.61551 11.2078 6.88577 11.1937C7.14372 11.1803 7.36963 11.0629 7.53118 10.9035L7.53918 10.8955L11.9541 6.48064C12.3374 6.09731 12.3374 5.47582 11.9541 5.09249Z" : "M11.6813 5.85778C12.1063 5.43279 12.1063 4.74374 11.6813 4.31875C11.2564 3.89376 10.5673 3.89376 10.1423 4.31875L8.00005 6.46102L5.85777 4.31874C5.43279 3.89375 4.74374 3.89375 4.31874 4.31874C3.89375 4.74374 3.89375 5.43278 4.31874 5.85778L6.46101 8.00005L4.31883 10.1422C3.89384 10.5672 3.89384 11.2563 4.31883 11.6813C4.74383 12.1063 5.43288 12.1063 5.85786 11.6813L8.00005 9.53908L10.1422 11.6813C10.5672 12.1062 11.2563 12.1062 11.6813 11.6813C12.1062 11.2563 12.1062 10.5672 11.6813 10.1422L9.53908 8.00005L11.6813 5.85778Z",
                                fill: {
                                    color: f
                                }
                            }]
                        }
                    },
                    mvb = function(a, b, c, d, e) {
                        var f;
                        const g = a.uj,
                            h = a.Kg,
                            k = g.border,
                            l = g.N,
                            m = null === (f = g.fields.first()) || void 0 === f ? void 0 : f.value;
                        f = g.q2a.color;
                        const n = g.Q3a.color;
                        if (!m || !f || !n) return { ...$4({
                                direction: "vertical",
                                background: {
                                    color: "#ffffff"
                                },
                                cells: []
                            }),
                            minWidth: g.minWidth,
                            minHeight: g.minHeight
                        };
                        const p = c.Mva(),
                            q = !!h.Nf && m.M_.some(({
                                value: r
                            }) => r === h.Nf);
                        return {
                            minWidth: g.minWidth,
                            minHeight: g.minHeight,
                            ...$4({
                                direction: "vertical",
                                background: {
                                    color: n
                                },
                                N: l,
                                border: k,
                                cells: [g.Hwa ? void 0 : hvb({
                                    text: m.label,
                                    backgroundColor: f
                                }), "poll" === g.type ? ivb({
                                    hia: d.sHa,
                                    jia: d.$za,
                                    kia: d.aAa,
                                    iia: d.Zza,
                                    lia: d.dAa,
                                    options: m.options,
                                    RA: h.RA,
                                    Fz: h.Fz,
                                    Nf: h.Nf,
                                    aF: f,
                                    Ty: n,
                                    Nia: m.N,
                                    defaultFontFamily: g.defaultFontFamily,
                                    MW: p,
                                    Pn: m.id,
                                    cUa: c,
                                    y8: e
                                }) : jvb({
                                    hia: d.sHa,
                                    jia: d.$za,
                                    kia: d.aAa,
                                    iia: d.Zza,
                                    lia: d.dAa,
                                    options: m.options,
                                    M_: m.M_,
                                    RA: h.RA,
                                    Fz: h.Fz,
                                    Nf: h.Nf,
                                    Ty: n,
                                    Nia: m.N,
                                    MW: p,
                                    y8: e,
                                    context: b
                                }), ...("quiz" === g.type ? kvb({
                                    defaultFontFamily: g.defaultFontFamily,
                                    Sw: g.footer.label,
                                    aF: f,
                                    status: a.Kg.status,
                                    MW: p && "edit" !== b.mode,
                                    $Wa: q,
                                    backgroundColor: n,
                                    onSubmit: d.submit,
                                    Aia: d.KZa,
                                    Bia: d.LZa,
                                    zia: d.JZa,
                                    Cia: d.OZa,
                                    zF: h.zF
                                }) : lvb({
                                    defaultFontFamily: g.defaultFontFamily,
                                    k_a: c.iVa(m.id),
                                    status: a.Kg.status,
                                    backgroundColor: n
                                }))].filter(sb)
                            }),
                            ref: e.root
                        }
                    },
                    hvb = function({
                        text: a,
                        backgroundColor: b
                    }) {
                        return {
                            id: "header",
                            size: "auto",
                            fill: {
                                color: b
                            },
                            padding: [20, 20, 16, 20],
                            content: c5(a)
                        }
                    },
                    jvb = function({
                        options: a,
                        M_: b,
                        Nf: c,
                        RA: d,
                        Fz: e,
                        MW: f,
                        Ty: g,
                        Nia: h,
                        hia: k,
                        jia: l,
                        kia: m,
                        iia: n,
                        lia: p,
                        y8: q,
                        context: r
                    }) {
                        return {
                            id: "field",
                            size: "1fr",
                            padding: [16, 20],
                            alignSelf: "center",
                            content: $4({
                                direction: "vertical",
                                gap: 8,
                                cells: a.map(({
                                    value: t
                                }) => {
                                    const u = t.id === c,
                                        w = b.some(({
                                            value: A
                                        }) => A === t.id),
                                        x = t.id === d,
                                        z = t.id === e;
                                    return {
                                        id: t.id,
                                        size: "auto",
                                        alignSelf: "center",
                                        content: {
                                            ref: q.option,
                                            key: t.id,
                                            N: h,
                                            onClick: k && (() => k(t.id)),
                                            onMouseEnter: l && (() => l(t.id)),
                                            onMouseLeave: m && (() => m(t.id)),
                                            onMouseDown: n && (() => n(t.id)),
                                            onMouseUp: p && (() => p(t.id)),
                                            ...nvb({
                                                Oia: t.label,
                                                Ty: g,
                                                state: f && "edit" !== r.mode ? w ? 5 : u ? 6 : 4 : "edit" === r.mode ? w ? 5 : 4 : u ? 1 : z ? 3 : x ? 2 : 0
                                            })
                                        }
                                    }
                                })
                            })
                        }
                    },
                    ivb = function({
                        cUa: a,
                        Pn: b,
                        options: c,
                        Nf: d,
                        RA: e,
                        Fz: f,
                        defaultFontFamily: g,
                        MW: h,
                        aF: k,
                        Ty: l,
                        Nia: m,
                        hia: n,
                        jia: p,
                        kia: q,
                        iia: r,
                        lia: t,
                        y8: u
                    }) {
                        return {
                            id: "field",
                            size: "1fr",
                            padding: [16, 20],
                            alignSelf: "center",
                            content: $4({
                                direction: "vertical",
                                gap: 8,
                                cells: c.map(({
                                    value: w
                                }) => {
                                    var x = w.id === d;
                                    const z = w.id === e,
                                        A = w.id === f;
                                    x = h ? x ? 3 : 4 : A ? 2 : z ? 1 : 0;
                                    return {
                                        id: w.id,
                                        size: "auto",
                                        alignSelf: "center",
                                        content: {
                                            ref: u.option,
                                            key: w.id,
                                            N: m,
                                            onClick: n && (() => n(w.id)),
                                            onMouseEnter: p && (() => p(w.id)),
                                            onMouseLeave: q && (() => q(w.id)),
                                            onMouseDown: r && (() => r(w.id)),
                                            onMouseUp: t && (() => t(w.id)),
                                            ...ovb({
                                                Oia: w.label,
                                                defaultFontFamily: g,
                                                percentage: a.PUa(b, w.id),
                                                N: m,
                                                state: x,
                                                aF: k,
                                                Ty: l
                                            })
                                        }
                                    }
                                })
                            })
                        }
                    },
                    nvb = function({
                        Oia: a,
                        Ty: b,
                        state: c
                    }) {
                        const d = a5(b, b5);
                        return {
                            type: "layout",
                            gridTemplateRows: ["10px", "1fr", "10px"],
                            gridTemplateColumns: ["10px", "1fr", "2px", "18px", "10px"],
                            fill: pvb(c, d),
                            cells: [{
                                    id: "text",
                                    placement: {
                                        alignSelf: "center",
                                        gridColumnStart: "2",
                                        gridColumnEnd: "3",
                                        gridRowStart: "2",
                                        gridRowEnd: "3"
                                    },
                                    content: (() => {
                                        switch (c) {
                                            case 5:
                                                return d5(a, "#00873d");
                                            case 6:
                                                return d5(a, "#c8001e");
                                            case 4:
                                                return d5(a, a5(b, qvb));
                                            default:
                                                return c5(a)
                                        }
                                    })()
                                }, 5 ===
                                c || 6 === c ? {
                                    id: "validation",
                                    placement: {
                                        gridColumnStart: "4",
                                        gridColumnEnd: "5",
                                        gridRowStart: "2",
                                        gridRowEnd: "3",
                                        alignSelf: "center"
                                    },
                                    content: gvb({
                                        width: 18,
                                        height: 18,
                                        Ld: 1.6,
                                        ZWa: 5 === c,
                                        color: 5 === c ? "#00873d" : "#c8001e",
                                        backgroundColor: "#ffffff"
                                    })
                                } : void 0
                            ].filter(sb)
                        }
                    },
                    pvb = function(a, b) {
                        switch (a) {
                            case 0:
                                return {
                                    color: b,
                                    La: .95
                                };
                            case 1:
                                return {
                                    color: b,
                                    La: .8
                                };
                            case 2:
                                return {
                                    color: b,
                                    La: .9
                                };
                            case 3:
                                return {
                                    color: b,
                                    La: .85
                                };
                            case 4:
                                return {
                                    color: b,
                                    La: .9
                                };
                            case 5:
                                return {
                                    color: "#e3fff0",
                                    La: 0
                                };
                            case 6:
                                return {
                                    color: "#ffd9df",
                                    La: 0
                                };
                            default:
                                throw new D(a);
                        }
                    },
                    ovb = function({
                        Oia: a,
                        defaultFontFamily: b,
                        percentage: c,
                        N: d,
                        state: e,
                        aF: f,
                        Ty: g
                    }) {
                        const h = 0 < c;
                        var k = 100 > c;
                        const l = h && !k || !h && k,
                            m = l ? 1 : 2;
                        k = [h ? `${c}fr` : void 0, k ? `${100-c}fr` : void 0].filter(sb);
                        var n = f !== g;
                        f = n ? f : a5(g, b5);
                        var p = a5(g, b5),
                            q = fvb(f, p);
                        n = {
                            color: 3 === e && n ? q : p,
                            La: 3 === e ? n ? .5 : .9 : 2 === e ? .85 : 1 === e ? .9 : .95
                        };
                        q = fvb(f, g);
                        p = {
                            color: 3 === e ? q : p,
                            La: 3 === e ? 0 : .8
                        };
                        a = {
                            type: "layout",
                            gridTemplateRows: ["10px", "1fr", "10px"],
                            gridTemplateColumns: ["10px", "1fr", "2px", "45px", "10px"],
                            cells: [{
                                id: "text",
                                placement: {
                                    gridColumnStart: "2",
                                    gridColumnEnd: "3",
                                    gridRowStart: "2",
                                    gridRowEnd: "3",
                                    alignSelf: "center"
                                },
                                content: 3 === e ? d5(a, a5(f, b5)) : c5(a)
                            }, 3 === e || 4 === e ? {
                                id: "percentage",
                                placement: {
                                    gridColumnStart: "4",
                                    gridColumnEnd: "5",
                                    gridRowStart: "2",
                                    gridRowEnd: "3",
                                    alignSelf: "center"
                                },
                                content: {
                                    type: "text",
                                    DF: 0,
                                    fontFamily: b,
                                    fontWeight: "bold",
                                    fontSize: rvb,
                                    text: __c.yb("sUWUOA", [c]),
                                    textAlign: "end",
                                    color: 3 === e ? a5(f, b5) : a5(g, b5)
                                }
                            } : void 0].filter(sb)
                        };
                        return l ? { ...a,
                            fill: h ? p : n
                        } : {
                            type: "layout",
                            gridTemplateRows: ["1fr"],
                            gridTemplateColumns: k,
                            fill: n,
                            cells: [{
                                id: "bar",
                                N: d,
                                fill: p,
                                placement: {
                                    gridColumnStart: "1",
                                    gridColumnEnd: "2",
                                    gridRowStart: "1",
                                    gridRowEnd: "2"
                                },
                                content: evb({
                                    content: {
                                        type: "text",
                                        DF: 0,
                                        text: "",
                                        fontFamily: b,
                                        fontSize: rvb
                                    }
                                })
                            }, {
                                id: "optionTextWithPercentage",
                                placement: {
                                    gridColumnStart: "1",
                                    gridColumnEnd: `${m+1}`,
                                    gridRowStart: "1",
                                    gridRowEnd: "2"
                                },
                                content: a
                            }]
                        }
                    },
                    kvb = function({
                        defaultFontFamily: a,
                        Sw: b,
                        aF: c,
                        status: d,
                        $Wa: e,
                        backgroundColor: f,
                        MW: g,
                        zF: h,
                        onSubmit: k,
                        Aia: l,
                        Bia: m,
                        zia: n,
                        Cia: p
                    }) {
                        const q = a5(f, b5);
                        return g ? [{
                            id: "quiz_results_footer",
                            size: "auto",
                            padding: [8, 20, 24, 20],
                            content: $4({
                                direction: "vertical",
                                cells: [{
                                    id: "quiz_result",
                                    size: "auto",
                                    content: {
                                        type: "text",
                                        DF: 0,
                                        fontFamily: a,
                                        text: e ? N("i3mNPA") : N("As1GTA"),
                                        fontSize: uvb,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                        color: a5(f, b5)
                                    }
                                }, {
                                    id: "quiz_message",
                                    size: "auto",
                                    content: {
                                        type: "text",
                                        DF: 0,
                                        fontFamily: a,
                                        text: N("xSH8Og"),
                                        fontSize: e5,
                                        La: .2,
                                        textAlign: "center",
                                        color: q
                                    }
                                }]
                            })
                        }] : (c = c === f ? a5(c, b5) : c, [svb({
                            text: b,
                            NNa: c,
                            backgroundColor: f,
                            cL: h,
                            onSubmit: 0 === d ? k : void 0,
                            Aia: l,
                            Bia: m,
                            zia: n,
                            Cia: p
                        }), {
                            id: "quiz_status",
                            size: "auto",
                            padding: [10, 20, 10, 20],
                            content: tvb({
                                status: d,
                                defaultFontFamily: a,
                                backgroundColor: f
                            })
                        }])
                    },
                    svb = function({
                        text: a,
                        NNa: b,
                        cL: c,
                        onSubmit: d,
                        Aia: e,
                        Bia: f,
                        zia: g,
                        Cia: h
                    }) {
                        const k = b5.includes(b),
                            {
                                h: l,
                                s: m,
                                aa: n
                            } = __c.Fw(b);
                        var p = new __c.vw(l, m, 10 > n ? n + 6 : n - 6);
                        p = __c.Gw(p);
                        var q = new __c.vw(l, m, 10 > n ? n + 10 : n - 10);
                        q = __c.Gw(q);
                        return {
                            id: "submit",
                            size: "auto",
                            padding: [0, 20],
                            content: evb({
                                onClick: d,
                                onMouseEnter: e,
                                onMouseLeave: f,
                                onMouseDown: g,
                                onMouseUp: h,
                                background: {
                                    color: 2 === c ? q : 1 === c ? p : b,
                                    La: d ? k ? .1 : void 0 : .6
                                },
                                N: 18,
                                padding: 8,
                                content: c5(a)
                            })
                        }
                    },
                    lvb = function({
                        defaultFontFamily: a,
                        k_a: b,
                        status: c,
                        backgroundColor: d
                    }) {
                        return [{
                            id: "footer",
                            size: "auto",
                            padding: [0, 20, 20, 20],
                            content: tvb({
                                status: c,
                                statusMessage: `${N("/iw6+Q")} | ${__c.yb("6QpLYA",[b])}`,
                                defaultFontFamily: a,
                                backgroundColor: d
                            }),
                            fill: {
                                color: d
                            }
                        }]
                    },
                    tvb = function(a) {
                        const b = a.status,
                            c = a.defaultFontFamily,
                            d = a.backgroundColor;
                        switch (b) {
                            case 0:
                                var e;
                                return {
                                    type: "text",
                                    DF: 1,
                                    text: f5(null !== (e = a.statusMessage) && void 0 !== e ? e : N("/iw6+Q"), c, a5(d, vvb), a5(d, b5))
                                };
                            case 1:
                                return {
                                    type: "text",
                                    DF: 1,
                                    text: f5(N("2Q9Q+A"), c, a5(d, wvb), a5(d, b5))
                                };
                            case 2:
                                return {
                                    type: "text",
                                    DF: 1,
                                    text: f5(N("nFbxIQ"), c, a5(d, xvb), a5(d, b5))
                                };
                            default:
                                throw new D(b);
                        }
                    },
                    c5 = function(a, b) {
                        a = __c.gj.create(__c.gj.va(a.text));
                        null != b && a.Sj(b);
                        return {
                            type: "text",
                            DF: 1,
                            text: __c.gj.va(a)
                        }
                    },
                    d5 = function(a, b) {
                        return c5(a, {
                            color: b
                        })
                    },
                    Sub = {
                        Hf: "form_widget_interacted",
                        ji(a) {
                            return __c.rt({
                                form_id: a.Qu,
                                form_type: a.dUa,
                                action_group: a.QC,
                                action: a.action,
                                location: a.location,
                                toggle_value: a.uqb,
                                editing_context: null == a.Fg ? void 0 : __c.st(a.Fg),
                                performance_context: null == a.Mj ? void 0 : __c.FA(a.Mj)
                            })
                        }
                    },
                    yvb = class {
                        constructor() {
                            this.type = "layout"
                        }
                    },
                    g5 = __webpack_require__(42782),
                    zvb = g5.U5,
                    Avb = g5.aD,
                    Y4 = g5.z,
                    Nub = g5.Fl;
                var Bvb = __webpack_require__(854928).Om;
                var V4 = class {
                        static A(a) {
                            __c.P(a, {
                                uta: Nub
                            })
                        }
                        get uta() {
                            const a = [];
                            for (const b of this.list.value) {
                                const c = M4(this, b);
                                if (void 0 === c) throw new Kub("undefined value found when deserializing list.");
                                a.push(c)
                            }
                            return a
                        }
                        count() {
                            return this.list.value.count()
                        }
                        toArray() {
                            return this.uta.map(({
                                value: a
                            }) => a)
                        }
                        first(a) {
                            const b = this.list.value.first(a ? c => a(M4(this, c)) : void 0);
                            if (null != b) return M4(this, b)
                        }
                        last(a) {
                            const b = this.list.value.last(a ? c => a(M4(this, c)) : void 0);
                            if (null != b) return M4(this, b)
                        }
                        next(a, b) {
                            var c =
                                b ? d => b(M4(this, d)) : void 0;
                            a = N4(this, a);
                            c = this.list.value.next(a, c);
                            if (null != c) return M4(this, c)
                        }
                        oc(a, b) {
                            var c = b ? d => b(M4(this, d)) : void 0;
                            a = N4(this, a);
                            c = this.list.value.oc(a, c);
                            if (null != c) return M4(this, c)
                        }
                        map(a) {
                            return this.list.value.map((b, c) => a(M4(this, b), c))
                        }
                        filter(a) {
                            return this.list.value.filter((b, c) => a(M4(this, b), c)).map(b => M4(this, b))
                        }
                        forEach(a) {
                            return this.list.value.forEach((b, c) => a(M4(this, b), c))
                        }
                        some(a) {
                            return this.list.value.some(b => a(M4(this, b)))
                        }
                        constructor(a, b) {
                            V4.A(this);
                            this.Xv =
                                b;
                            this.mHa = new WeakMap;
                            this.gHa = new WeakMap;
                            __c.y("list" === a.type);
                            this.list = a
                        }
                    },
                    Oub = class extends V4 {
                        replace(a, b) {
                            a = N4(this, a);
                            b = this.list.value.replace(a, this.Xv.Ui(b));
                            return M4(this, b)
                        }
                        VH(a, b) {
                            a = null != a ? N4(this, a) : void 0;
                            b = this.list.value.VH(a, this.Xv.Ui(b));
                            return M4(this, b)
                        }
                        WH(a, b) {
                            a = null != a ? N4(this, a) : void 0;
                            return this.list.value.WH(a, b.map(c => this.Xv.Ui(c))).map(c => M4(this, c))
                        }
                        insertBefore(a, b) {
                            a = null != a ? N4(this, a) : void 0;
                            b = this.list.value.insertBefore(a, this.Xv.Ui(b));
                            return M4(this, b)
                        }
                        append(a) {
                            a =
                                this.list.value.append(this.Xv.Ui(a));
                            return M4(this, a)
                        }
                        prepend(a) {
                            a = this.list.value.prepend(this.Xv.Ui(a));
                            return M4(this, a)
                        }
                        delete(a) {
                            a = N4(this, a);
                            this.list.value.delete(a)
                        }
                    };
                var R4 = class extends Error {
                        constructor(a) {
                            super(a);
                            this.name = "SchemaError"
                        }
                    },
                    Kub = class extends R4 {
                        constructor(a) {
                            super(`ListError: ${a}`)
                        }
                    },
                    O4 = class extends R4 {
                        constructor(a, b) {
                            super(`Error transforming ${b} into type ${a} of widget data`)
                        }
                    },
                    P4 = class extends R4 {
                        constructor(a, b) {
                            super(`Error transforming ${b} into type ${a} of widget state`)
                        }
                    },
                    Lub = class extends R4 {
                        constructor(a) {
                            super(`Error transforming ${a} into type ${"double"} of document state`)
                        }
                    };
                var Cvb = U4({
                        type: ["t", S4(["text2"], "text2"), "readonly"],
                        text: ["te", function() {
                            const a = b => {
                                if ("text2" !== (null === b || void 0 === b ? void 0 : b.type)) throw new O4("text2", b);
                                return b.value
                            };
                            return {
                                Ui: b => ({
                                    type: "text2",
                                    value: b
                                }),
                                Qp: b => {
                                    if ("text2" !== (null === b || void 0 === b ? void 0 : b.type)) throw new P4("text2", b);
                                    return b.value
                                },
                                Pp: a,
                                Lr: a
                            }
                        }()]
                    }),
                    h5 = X4({
                        text2: Cvb
                    }, a => a.type),
                    Dvb = U4({
                        id: ["i", Q4("")],
                        label: ["l", h5]
                    }),
                    Evb = W4(Dvb),
                    Fvb = W4(Q4("")),
                    Gvb = U4({
                        type: ["t", S4(["select"], "select"), "readonly"],
                        id: ["i", Q4("")],
                        label: ["l",
                            h5
                        ],
                        options: ["o", Evb],
                        N: ["c", T4(0)],
                        M_: ["co", Fvb]
                    }),
                    Hvb = X4({
                        select: Gvb
                    }, a => a.type),
                    Ivb = W4(Hvb),
                    Jvb = X4({
                        select: Gvb
                    }, a => a.type),
                    Kvb = W4(Jvb),
                    Lvb = U4({
                        label: ["l", h5]
                    }),
                    Mvb = U4({}),
                    Nvb = U4({
                        minHeight: ["mh", T4(1)],
                        minWidth: ["mw", T4(1)],
                        id: ["i", Q4()],
                        o7: ["s", Q4()],
                        defaultFontFamily: ["d", Q4("")],
                        q2a: ["pf", Mub()],
                        Q3a: ["sf", Mub()],
                        border: ["b", function() {
                            const a = b => {
                                if ("stroke" !== (null === b || void 0 === b ? void 0 : b.type)) throw new O4("stroke", b);
                                return b.value
                            };
                            return {
                                Ui: b => ({
                                    type: "stroke",
                                    value: b
                                }),
                                Qp: b => {
                                    if ("stroke" !==
                                        (null === b || void 0 === b ? void 0 : b.type)) throw new P4("stroke", b);
                                    return b.value
                                },
                                Pp: a,
                                Lr: a
                            }
                        }()],
                        N: ["c", T4(0)],
                        header: ["h", function(a) {
                            return {
                                Ui: b => null == b ? b : a.Ui(b),
                                Qp: b => null == b ? b : a.Qp(b),
                                Pp: b => null == b ? b : a.Pp(b),
                                Lr: b => null == b ? b : a.Lr(b)
                            }
                        }(Mvb)],
                        Hwa: ["hh", function(a) {
                            const b = (c, d) => {
                                if (null == c) return a;
                                if ("boolean" !== (null === c || void 0 === c ? void 0 : c.type)) throw "toWidgetData" === d ? new O4("boolean", c) : new P4("boolean", c);
                                return c.value
                            };
                            return {
                                Ui: c => ({
                                    type: "boolean",
                                    value: c
                                }),
                                Qp: c => b(c, "toWidgetState"),
                                Pp: c =>
                                    b(c, "toWidgetData"),
                                Lr: c => b(c, "toWidgetData")
                            }
                        }(!1)]
                    }),
                    Ovb = Nvb.Bc({
                        type: ["t", S4(["quiz"], "quiz"), "readonly"],
                        fields: ["f", Ivb],
                        footer: ["fo", Lvb]
                    }),
                    Pvb = Nvb.Bc({
                        type: ["t", S4(["poll"], "poll"), "readonly"],
                        fields: ["f", Kvb]
                    });
                S4(["poll", "quiz"], "quiz");
                var Qvb = X4({
                    quiz: Ovb,
                    poll: Pvb
                }, a => a.type);
                var Rvb = __c.ib(() => [1, 2]);
                var i5 = () => ({
                    arity: __c.Va(1, Rvb)
                });
                var Svb = L(() => ({ ...i5(),
                    type: E("A?", 8, "EMAIL_FIELD")
                }));
                var Tvb = L(() => ({ ...i5(),
                    type: E("A?", 9, "TEXT_FIELD")
                }));
                var Uvb = L(() => ({
                    label: U(1),
                    value: U(2)
                }));
                var Vvb = L(() => ({ ...i5(),
                    type: E("A?", 10, "SELECT_FIELD"),
                    options: __c.Ua(11, Uvb),
                    multiple: __c.lO(12)
                }));
                var Wvb = __c.hb(() => ({
                    type: [8, Svb, 9, Tvb, 10, Vvb]
                }), i5);
                var Xvb = L(() => ({
                    id: U(1),
                    label: U(2),
                    Mda: __c.Ta(3, Wvb)
                }));
                var Z4 = L(() => ({
                    Pn: U(1),
                    Mda: __c.G(3, Xvb),
                    value: U(2)
                }));
                var Yvb = L(() => ({
                    type: E("A?", 1, "USER"),
                    brand: U(1),
                    user: U(2),
                    $0a: W(3)
                }));
                var Zvb = L(() => ({
                    type: E("A?", 2, "ANON"),
                    clientId: U(1)
                }));
                var $vb = __c.hb(() => ({
                    type: [1, Yvb, 2, Zvb]
                }), () => ({}));
                var Wub = L(() => ({
                    w5a: U(1),
                    Qu: U(2),
                    Yc: U(6),
                    fingerprint: U(7),
                    Ku: W(5),
                    type: E("A?", 3, "EDIT"),
                    PK: __c.Ua(10, Z4),
                    submitter: __c.G(11, $vb)
                }));
                var awb = __c.ib(() => [1, 2]);
                var bwb = __c.ib(() => [1, 2]);
                var Rub = L(() => ({
                    Sba: W(1),
                    limit: __c.dO(2, 100),
                    Ku: W(3),
                    zpb: __c.Wa(7, awb),
                    status: __c.Wa(8, bwb),
                    type: E("A?", 6, "BY_CALLER"),
                    Yc: U(11),
                    Qu: U(12),
                    zH: W(13)
                }));
                var cwb = L(() => ({
                    type: E("A?", 1, "WEBSITE"),
                    Dgb: U(1),
                    url: U(2)
                }));
                var dwb = L(() => ({
                    type: E("A?", 2, "PREVIEW")
                }));
                var Vub = L(() => ({
                    type: E("A?", 3, "DESIGN"),
                    Yc: U(1)
                }));
                var ewb = __c.hb(() => ({
                    type: [1, cwb, 2, dwb, 3, Vub]
                }), () => ({}));
                var Uub = L(() => ({
                    VVa: U(1),
                    Qu: U(2),
                    zH: U(3),
                    source: __c.Ta(4, ewb),
                    PK: __c.Ua(5, Z4),
                    Xp: W(6),
                    MZ: W(7),
                    a1a: W(8)
                }));
                var Pub = Bvb((a, b) => {
                    b = new Set(b.map(({
                        value: d
                    }) => d.id));
                    const c = new Map;
                    for (const d of a) {
                        a = c.get(d.Pn);
                        a || (a = {
                            version: d.version,
                            zBa: new Map,
                            total: 0
                        }, c.set(d.Pn, a));
                        for (const {
                                ME: e,
                                count: f
                            } of d.Lp) b.has(e) && (a.zBa.set(e, f), a.total += f)
                    }
                    return c
                });
                var fwb = L(() => ({
                    Yc: U(1),
                    Qu: U(2),
                    zH: W(3)
                }));
                var gwb = __c.ib(() => [1, 2, 3, 4, 5, 7, 8], 1);
                var hwb = L(() => ({
                    ref: __c.Ta(1, fwb),
                    u2a: __c.Xa(2, gwb),
                    Ku: W(3)
                }));
                var avb = class {
                    constructor() {
                        var {
                            xca: a
                        } = {
                            xca: !0
                        };
                        this.p5 = 1E4;
                        this.xca = null !== a && void 0 !== a ? a : !1
                    }
                };
                var iwb = class {
                    static A(a) {
                        __c.P(a, {
                            z6: Avb,
                            REa: Avb
                        })
                    }
                    get type() {
                        return this.Oh.uj.type
                    }
                    constructor(a, b, c, d, e) {
                        iwb.A(this);
                        this.Yc = a;
                        this.Oh = b;
                        this.Ku = c;
                        this.SS = d;
                        this.H = e;
                        this.Mua = async () => {
                            if (!this.SS || !this.Yc) return {
                                U1: !1
                            };
                            let f;
                            try {
                                ({
                                    form: f
                                } = await this.SS.Sjb(new hwb({
                                    ref: new fwb({
                                        Yc: this.Yc,
                                        Qu: this.Oh.uj.id,
                                        zH: this.Oh.uj.o7
                                    }),
                                    u2a: [5],
                                    Ku: this.Ku
                                })))
                            } catch (l) {
                                var g;
                                null === (g = this.H) || void 0 === g ? void 0 : g.Bb(l);
                                return {
                                    U1: !1
                                }
                            }
                            var h;
                            const k = f.njb.filter(l => "SELECT" === l.type).map(l => ({
                                version: null !==
                                    (h = l.version) && void 0 !== h ? h : 0,
                                Pn: l.Pn,
                                Lp: l.Lp.map(m => ({
                                    ME: m.qnb,
                                    count: m.Vpb
                                }))
                            }));
                            if (!cvb(this.Oh.Kg.results, k)) return {
                                U1: !1
                            };
                            Y4(() => {
                                this.Oh.Sm({ ...this.Oh.Kg,
                                    results: k
                                })
                            });
                            return {
                                U1: !0
                            }
                        };
                        this.xYa = async () => {
                            var f, g = [];
                            try {
                                g = await this.qTa()
                            } catch (n) {
                                return
                            }
                            if (0 !== g.length) {
                                var h = this.Oh.uj.id,
                                    k = this.Oh.uj.o7,
                                    l = null === (f = this.Oh.uj.fields.first()) || void 0 === f ? void 0 : f.value;
                                if (l) {
                                    f = g.sort((n, p) => p.timestamp - n.timestamp);
                                    for (const n of f) {
                                        var m;
                                        f = n.Ijb;
                                        g = n.PK;
                                        const p = n.submitter;
                                        if (f.Qu !== h || f.zH !==
                                            k || 0 === g.length || "ANON" === p.type) continue;
                                        const q = g.find(t => t.Pn === l.id);
                                        if (!q) continue;
                                        const r = null === (m = l.options.first(t => t.value.id === q.value)) || void 0 === m ? void 0 : m.value;
                                        if (r) {
                                            Y4(() => {
                                                this.Oh.Sm(t => ({ ...t,
                                                    Nf: r.id,
                                                    mP: r.id
                                                }))
                                            });
                                            break
                                        }
                                    }
                                }
                            }
                        };
                        this.z6 = f => {
                            this.Oh.Sm({ ...this.Oh.Kg,
                                status: f
                            })
                        };
                        this.REa = f => {
                            this.Oh.Sm({ ...this.Oh.Kg,
                                yT: f
                            })
                        };
                        this.qTa = async () => {
                            if (!this.SS || !this.Yc) return [];
                            const {
                                x5a: f
                            } = await this.SS.CTa(new Rub({
                                Qu: this.Oh.uj.id,
                                zH: this.Oh.uj.o7,
                                Yc: this.Yc,
                                Ku: this.Ku
                            }));
                            return [...f]
                        }
                    }
                };
                var b5 = ["#000000", "#ffffff"];
                var rvb = 9 * __c.zT,
                    qvb = ["#cccccc", "#333333"],
                    uvb = 14 * __c.zT,
                    e5 = 9 * __c.zT,
                    vvb = ["#00d200", "#00ed00"],
                    wvb = ["#ffae00", "#ffc654"],
                    xvb = ["#545454", "#c8c8c8"],
                    f5 = (a, b, c, d) => __c.gj.yc().attrs({
                        "font-size": e5,
                        leading: void 0,
                        "text-align": "center",
                        color: c
                    }).Yb("\u25cf ").attrs({
                        "font-family": b,
                        "font-size": e5,
                        color: d,
                        "font-kerning": "normal",
                        "font-feature-liga": "on",
                        "font-feature-clig": "on",
                        "font-feature-calt": "on"
                    }).Yb(a).Yb("\n").build();
                var jwb;
                jwb = {
                    Nf: void 0,
                    mP: void 0,
                    RA: void 0,
                    Fz: void 0,
                    zF: 0,
                    results: [],
                    status: 1,
                    yT: !1,
                    ufb: !1
                };
                __c.osa = {
                    VPa: function(a, b, c, d, e, f, g, h) {
                        const k = g.Uu("ui.rendering.form"),
                            l = {
                                root: new yvb,
                                option: new yvb
                            };
                        return {
                            qfa: jwb,
                            Xv: Qvb,
                            UU: ({
                                Oh: m
                            }) => {
                                const n = new iwb(a, m, b, c, f),
                                    p = zvb(() => 2 === (null === h || void 0 === h ? void 0 : h.status), r => n.z6(r ? 2 : 0));
                                $ub(n);
                                const q = bvb(n);
                                return () => {
                                    null === q || void 0 === q ? void 0 : q();
                                    p()
                                }
                            },
                            render: (m, n) => {
                                const p = Qub(m);
                                return mvb(m, n, p, Xub(m, p, c, a, d, b, e, f, k), l)
                            },
                            y8: l
                        }
                    },
                    $ob: function(a) {
                        jwb = a
                    }
                };
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/d4a21a7bd63fe8cc.js.map