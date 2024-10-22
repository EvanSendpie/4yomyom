(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [7974], {

        /***/
        784117: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(365119);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var U = __c.U;
                var L = __c.L;
                var v = __c.v;
                var ea = __c.ea;
                var ybb, zbb, Cbb;
                __c.wX = function(a) {
                    return __c.rt({
                        design_id: a.Yc,
                        doctype_id: a.Rf,
                        category_id: a.Fn,
                        mode: a.mode,
                        access_role: a.eq,
                        present_session_id: a.e2a,
                        num_pages_in_design: a.Bha,
                        num_all_pages_in_design: a.h_a,
                        current_page_index: a.jA,
                        location: a.location
                    })
                };
                ybb = function(a) {
                    var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
                    try {
                        const c = __c.pw(a),
                            d = c instanceof __c.bw ? c.Op() : c;
                        return __c.iA(b, e => {
                            e = __c.pw(e);
                            e = e instanceof __c.bw ? __c.DE(e, d) : e;
                            return Math.abs(__c.Hw(e, d))
                        })
                    } catch (c) {
                        if (c instanceof Error && c.message === `unrecognized color: ${b[0]}`) return b[0];
                        throw c;
                    }
                };
                zbb = function(a) {
                    return a.trim().split(/\s+/, 2).map(b => __c.hF(b)[0]).join("")
                };
                Cbb = function(a = "") {
                    a = Abb(a);
                    a = Math.floor(a() * Bbb.length);
                    return Bbb[a]
                };
                __c.xX = function(a) {
                    let b = "";
                    for (; 0 <= a;) b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" [a % 26] + b, a = Math.floor(a / 26) - 1;
                    return b
                };
                __c.yX = function(a, b, c, d, e) {
                    d = new Date(Date.UTC(a, b, null != c ? c : 1, d || 0, e || 0));
                    d.setUTCFullYear(a, b, null !== c && void 0 !== c ? c : 1);
                    return d
                };
                __c.sL.prototype.oM = ea(24, function() {});
                __c.AN.prototype.oM = ea(23, function() {
                    this.ended || this.RF || (this.RF = !0, setTimeout(() => {
                        try {
                            this.ended = !0, __c.QGa(this), void 0
                        } catch (a) {
                            this.H.Bb(a, {
                                hf: "Error ending span in next cycle",
                                extra: new Map(__c.tN(this))
                            })
                        }
                    }))
                });
                __c.bV.prototype.Zj = ea(22, function() {});
                __c.sL.prototype.Zj = ea(21, function() {});
                __c.cV.prototype.Zj = ea(20, function() {});
                __c.AN.prototype.Zj = ea(19, function(a, b) {
                    try {
                        v(0 < a.length, "Event name cannot be empty");
                        const {
                            G3: c,
                            I3: d
                        } = __c.yN(b), e = new __c.p$a({
                            name: a,
                            lf: this,
                            Qv: this.Qv,
                            MA: this.MA,
                            jp: this.jp,
                            H: this.H,
                            startTime: null === d || void 0 === d ? void 0 : d.startTime,
                            qt: void 0,
                            Kt: "event",
                            Hf: null === d || void 0 === d ? void 0 : d.Hf,
                            getCurrentTime: this.getCurrentTime,
                            Pv: this.Pv,
                            attrs: (null === d || void 0 === d ? void 0 : d.attrs) || c,
                            eja: this.startTime
                        });
                        this.oL.push(e)
                    } catch (c) {
                        this.H.Bb(c)
                    }
                });
                __c.BN.prototype.Zj = ea(18, function(a, b) {
                    try {
                        const c = __c.zN(b);
                        this.QSa.forEach((d, e) => {
                            c.attrs.has(e) || c.attrs.set(e, d)
                        });
                        c.attrs.set("user_operation", this.name);
                        c.attrs.set("is_uop", !0);
                        c.attrs.set("sample_rate_override", 1);
                        null != this.type && c.attrs.set("uop_attr_type", this.type);
                        this.iW && c.attrs.set("uop_persist", !0);
                        this.Pr.Zj(a, c)
                    } catch (c) {
                        this.H.Bb(c, {
                            tags: new Map([
                                ["user_operation", this.name]
                            ])
                        })
                    }
                });
                __c.BV.prototype.Zj = ea(17, function(a, b) {
                    try {
                        const {
                            G3: c,
                            I3: d
                        } = __c.yN(b);
                        v(0 < a.length, "Event name cannot be empty");
                        const e = __c.B(this.jp(), "Event ({}) requires instrumentation scope", a);
                        new __c.p$a({
                            name: a,
                            Qv: this.config,
                            MA: this.MA,
                            jp: e,
                            qt: void 0,
                            H: this.H,
                            Kt: "event",
                            Hf: null === d || void 0 === d ? void 0 : d.Hf,
                            getCurrentTime: this.getCurrentTime,
                            startTime: null === d || void 0 === d ? void 0 : d.startTime,
                            Pv: this.Pv,
                            attrs: (null === d || void 0 === d ? void 0 : d.attrs) || c,
                            lf: void 0
                        })
                    } catch (c) {
                        this.H.Bb(c)
                    }
                });
                var Dbb = __webpack_require__(443763),
                    zX = Dbb.jsx,
                    AX = Dbb.jsxs;
                var Ebb = __webpack_require__,
                    Fbb = Ebb(993864),
                    BX = Ebb.n_x(Fbb)();
                var CX = __webpack_require__(875604),
                    Gbb = CX.Component,
                    Hbb = CX.memo,
                    Ibb = CX.useId;
                var DX = __webpack_require__(42782),
                    Jbb = DX.LO,
                    Kbb = DX.aD,
                    EX = DX.Fl;
                var Lbb = __webpack_require__(240236).gn;
                var Abb = __webpack_require__(503216);
                __c.Mbb = L(() => ({
                    sessionId: U(1),
                    vm: U(2)
                }));
                __c.Nbb = L(() => ({
                    sessionId: U(1),
                    vm: U(2)
                }));
                __c.Obb = L(() => ({
                    sessionId: U(1)
                }));
                __c.Pbb = __c.ib(() => [1, 2, {
                    iz: !0
                }]);
                __c.FX = L(() => ({
                    id: U(1),
                    type: __c.Va(2, __c.Pbb)
                }));
                __c.Qbb = L(() => ({
                    QFa: __c.lO(1),
                    RFa: __c.lO(2, !0)
                }));
                __c.Rbb = new Set("share acl remix view edit screen render animate watch published draft".split(" "));
                __c.Sbb = new Set("utm_source utm_medium utm_campaign utm_content utm_term gclid fbclid msclkid q query clickId referrer signup_referrer redirect origin type category schema dclid _channel_track_key callback_id channel_account_id channel_ad_id channel_adgroup_id channel_campaign_id channel_keyword channel_keyword_id channel_link_type channel_name channel_utm_campaign channel_utm_content channel_utm_medium channel_utm_source channel_utm_term hash_key sat_cf tid link_version utm_adgroup utm_keyword template media create touchpoint_label touchpoint_correlation_id cta_source".split(" "));
                __c.Tbb = {
                    xxsmall: 16,
                    xsmall: 24,
                    small: 32,
                    medium: 40,
                    large: 48,
                    xlarge: 64,
                    xxlarge: 80,
                    xxxlarge: 160
                };
                var Bbb = ["rgb(0, 126, 182)", "rgb(248, 72, 86)", "rgb(251, 190, 40)", "rgb(68, 133, 25)", "rgb(125, 42, 232)"].map(a => {
                    try {
                        return __c.iw(__c.hw(a))
                    } catch (b) {
                        return "#8e8e8e"
                    }
                });
                var Ubb = Hbb(a => {
                    const {
                        name: b,
                        borderColor: c,
                        backgroundColor: d,
                        XK: e,
                        role: f,
                        ariaLabel: g,
                        className: h,
                        style: k,
                        shape: l = "circle",
                        ...m
                    } = a;
                    d ? (a = __c.pw(d), a = a instanceof __c.bw ? __c.lw(a) : __c.iw(a)) : a = e ? Cbb(e) : "#8e8e8e";
                    var n = Ibb();
                    let p;
                    switch (l) {
                        case "circle":
                            p = zX("defs", {
                                children: zX("clipPath", {
                                    id: n,
                                    children: zX("circle", {
                                        id: `${n}-path`,
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%"
                                    })
                                })
                            });
                            break;
                        case "square":
                            p = zX("defs", {
                                children: zX("clipPath", {
                                    id: n,
                                    children: zX("rect", {
                                        id: `${n}-path`,
                                        width: "100%",
                                        height: "100%"
                                    })
                                })
                            });
                            break;
                        default:
                            throw new __c.D(l);
                    }
                    switch (l) {
                        case "circle":
                            n = zX("circle", {
                                cx: "50%",
                                cy: "50%",
                                fill: a,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${n})`,
                                stroke: c,
                                className: BX("yCT70Q", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        case "square":
                            n = zX("rect", {
                                width: "100%",
                                height: "100%",
                                fill: a,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${n})`,
                                stroke: c,
                                className: BX("cUFFRA", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        default:
                            throw new __c.D(l);
                    }
                    return zX("span", {
                        role: f,
                        "aria-label": g,
                        className: BX("VaW8_A", {
                            cUFFRA: "square" === l
                        }),
                        ...m,
                        children: AX("svg", {
                            className: h,
                            style: k,
                            children: [p, n, zX("text", {
                                x: "50%",
                                y: "50%",
                                "aria-hidden": "true",
                                textAnchor: "middle",
                                fill: ybb(a),
                                fontWeight: "500",
                                fontSize: "50%",
                                children: zX("tspan", {
                                    dy: "0.36em",
                                    letterSpacing: "0.01rem",
                                    children: zbb(b).toUpperCase()
                                })
                            })]
                        })
                    })
                });
                var Vbb = __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
                var Wbb = ({
                    borderColor: a,
                    nCa: b,
                    ariaLabel: c,
                    className: d,
                    style: e,
                    role: f,
                    ...g
                }) => zX("span", {
                    className: BX(d, {
                        JwH6AA: a,
                        QJpRHw: !a
                    }),
                    style: {
                        backgroundImage: `url(${b})`,
                        borderColor: a && `${a}`,
                        ...e
                    },
                    role: f,
                    "aria-label": "img" === f ? c : void 0,
                    ...g
                });
                __c.Xbb = ({
                    name: a,
                    TMa: b,
                    ariaLabel: c,
                    XK: d,
                    backgroundColor: e,
                    borderColor: f,
                    Ao: g,
                    className: h,
                    style: k,
                    shape: l = "circle",
                    ...m
                }) => {
                    h = BX("n8XGZg", "f4qJng fs-hide", h, {
                        P3N3Pw: "square" === l
                    });
                    b = b || "presentation";
                    return g ? zX(Wbb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        nCa: g,
                        ariaLabel: c,
                        role: b,
                        ...m
                    }) : a ? zX(Ubb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        name: a,
                        shape: l,
                        XK: d,
                        backgroundColor: e,
                        role: b,
                        ariaLabel: c,
                        ...m
                    }) : zX(Wbb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        nCa: Vbb,
                        ariaLabel: c,
                        role: b,
                        ...m
                    })
                };
                __c.GX = class a extends Gbb {
                    static A(b) {
                        __c.P(b, {
                            open: Jbb.ref,
                            rba: Jbb.ref,
                            Oha: Kbb.bound,
                            Nca: Kbb
                        })
                    }
                    render() {
                        const {
                            title: b,
                            ID: c,
                            Llb: d = "primary",
                            Hca: e = !1,
                            Ira: f,
                            role: g = "dialog",
                            mode: h,
                            HE: k,
                            Ng: l
                        } = this.props, m = void 0 === this.props.open ? this.open : this.props.open;
                        var n;
                        const p = null !== (n = this.props.buttons) && void 0 !== n ? n : [this.props.button];
                        return zX(__c.iu, {
                            count: 2,
                            children: (q, r) => zX(__c.R3a, {
                                kb: q,
                                zd: c ? r : void 0,
                                open: m,
                                Eb: e ? this.DOa : void 0,
                                mode: h,
                                HE: k,
                                role: g,
                                Ng: l,
                                children: zX(__c.fN, {
                                    className: BX("sheet" !==
                                        h && "Nu8M1g"),
                                    padding: {
                                        default: "3u",
                                        ie: "4u"
                                    },
                                    children: AX(__c.Iu, {
                                        spacing: "3u",
                                        children: [AX(__c.Iu, {
                                            align: "start",
                                            spacing: "2u",
                                            children: [zX(__c.IS, {
                                                id: q,
                                                tagName: "h1",
                                                alignment: "start",
                                                children: b
                                            }), c && ("string" === typeof c ? zX(__c.Gu, {
                                                id: r,
                                                tone: "secondary",
                                                children: c
                                            }) : zX("div", {
                                                id: r,
                                                children: c
                                            })), f && zX(__c.U9a, {
                                                label: f,
                                                onChange: this.Oha
                                            })]
                                        }), zX(__c.UM, {
                                            reversed: !0,
                                            spacing: "2u",
                                            Vra: "small",
                                            collapsed: "sheet" === h,
                                            children: p.map((t, u) => zX(__c.YM, {
                                                width: 0 === u ? "content" : "containedContent",
                                                children: zX(__c.Qu, {
                                                    stretch: !0,
                                                    variant: 0 === u ? d : "secondary",
                                                    ...t,
                                                    className: t.className,
                                                    onClick: () => this.TSa(t.onClick)
                                                })
                                            }, u))
                                        })]
                                    })
                                })
                            })
                        })
                    }
                    Oha(b, c) {
                        var d, e;
                        this.rba = c;
                        null === (d = (e = this.props).Oha) || void 0 === d ? void 0 : d.call(e, c)
                    }
                    constructor(...b) {
                        super(...b);
                        a.A(this);
                        this.open = !0;
                        this.rba = !1;
                        this.TSa = c => {
                            null === c || void 0 === c ? void 0 : c({
                                checkboxChecked: !(!this.props.Ira || !this.rba)
                            });
                            this.Nca()
                        };
                        this.DOa = () => {
                            var c, d;
                            null === (c = (d = this.props).YU) || void 0 === c ? void 0 : c.call(d);
                            this.Nca()
                        };
                        this.Nca = () => {
                            var c, d;
                            null === (c = (d =
                                this.props).onClose) || void 0 === c ? void 0 : c.call(d);
                            this.open = !1
                        }
                    }
                };
                __c.GX = Lbb([__c.Oc], __c.GX);
                __c.HX = class {
                    static A(a) {
                        __c.P(a, {
                            jq: EX,
                            PBa: EX,
                            step: EX
                        })
                    }
                    get kind() {
                        return "band"
                    }
                    clone({
                        Ab: a = this.Ab,
                        Jb: b = this.Jb,
                        zf: c = this.zf,
                        Nc: d = this.Nc
                    }) {
                        return new __c.HX({
                            Ab: a,
                            Jb: b,
                            zf: c,
                            Nc: d
                        })
                    }
                    get(a) {
                        const b = this.Ab().indexOf(a);
                        v(-1 !== b, `value ${a} must exist in domain`);
                        const [c, d] = this.Jb();
                        return c + b * this.step * Math.sign(d - c)
                    }
                    get jq() {
                        const [a, b] = this.Jb(), c = Math.abs(b - a), d = this.Ab();
                        if (1 >= d.length) return c;
                        const e = this.zf(),
                            f = (1 - e) * d.length;
                        return f / (f + e * (d.length - 1)) * c / d.length
                    }
                    get PBa() {
                        const a = this.Ab();
                        if (1 >= a.length) return 0;
                        const [b, c] = this.Jb(), d = this.zf(), e = d * (a.length - 1);
                        return e / ((1 - d) * a.length + e) * Math.abs(c - b) / (a.length - 1)
                    }
                    get step() {
                        return this.jq + this.PBa
                    }
                    C_(a, b, c) {
                        v(a.index !== b.index);
                        var d = this.zf(),
                            e = b.index - a.index,
                            f = b.index - a.index;
                        const g = (1 - d) * e;
                        d *= f;
                        e = g / (g + d) * (b.center - a.center) / e;
                        f = e + d / (g + d) * (b.center - a.center) / f;
                        return [a.center - e / 2 - f * a.index, b.center + e / 2 + f * (c - b.index - 1)]
                    }
                    B_(a, b, c) {
                        const d = this.zf();
                        var e = .5 + a.index;
                        const f = (1 - d) * e;
                        e = f / (f + d * a.index) * (a.center - b) / e;
                        return [b, a.center +
                            e / 2 + (e + e / (1 - d) * d) * (c - a.index - 1)
                        ]
                    }
                    A_(a, b, c) {
                        const d = this.zf(),
                            e = .5 + c - a.index - 1,
                            f = (1 - d) * e;
                        c = f / (f + d * (c - a.index - 1)) * (b - a.center) / e;
                        return [a.center - c / 2 - (c + c / (1 - d) * d) * a.index, b]
                    }
                    constructor({
                        Ab: a,
                        Jb: b,
                        zf: c,
                        Nc: d
                    }) {
                        __c.HX.A(this);
                        this.Ab = a;
                        this.Jb = b;
                        this.zf = c;
                        this.Nc = d
                    }
                };
                __c.IX = class {
                    static A(a) {
                        __c.P(a, {
                            step: EX
                        })
                    }
                    get kind() {
                        return "point"
                    }
                    clone({
                        Ab: a = this.Ab,
                        Jb: b = this.Jb,
                        zf: c = this.zf,
                        Nc: d = this.Nc
                    }) {
                        return new __c.IX({
                            Ab: a,
                            Jb: b,
                            zf: c,
                            Nc: d
                        })
                    }
                    va() {
                        const a = this.Ab(),
                            b = this.Jb();
                        return new __c.IX({
                            Ab: () => a,
                            Jb: () => b,
                            zf: this.zf,
                            Nc: this.Nc
                        })
                    }
                    get(a) {
                        const b = this.Ab().indexOf(a);
                        v(-1 !== b, `value ${a} must exist in domain`);
                        const [c, d] = this.Jb();
                        a = 1 === this.Ab().length ? .5 : this.zf();
                        return c + (a * this.step + b * this.step) * Math.sign(d - c)
                    }
                    get step() {
                        const a = this.Ab().length + 2 * this.zf(),
                            [b, c] = this.Jb();
                        return Math.abs(c - b) / Math.max(a - 1, 1)
                    }
                    C_(a, b, c) {
                        v(a.index !== b.index);
                        const d = this.zf(),
                            e = (b.center - a.center) / (b.index - a.index);
                        return [a.center - (d + a.index) * e, b.center + (d + c - b.index - 1) * e]
                    }
                    B_(a, b, c) {
                        const d = this.zf();
                        return [b, a.center + (a.center - b) / (a.index + d) * (d + c - a.index - 1)]
                    }
                    A_(a, b, c) {
                        const d = this.zf();
                        return [a.center - (b - a.center) / (c - a.index - 1 + d) * (d + a.index), b]
                    }
                    constructor({
                        Ab: a,
                        Jb: b,
                        zf: c,
                        Nc: d
                    }) {
                        __c.IX.A(this);
                        this.Ab = a;
                        this.Jb = b;
                        this.zf = c;
                        this.Nc = d
                    }
                };
                var JX = Math.PI / 5,
                    KX = Math.cos(JX),
                    LX = Math.sin(JX),
                    Ybb = Math.cos(JX / 2),
                    Zbb = Math.sin(JX / 2),
                    $bb = Math.atan(Math.PI / 2 - 2 * JX);
                __c.MX = {
                    [1]: function({
                        x: a,
                        y: b
                    }, c) {
                        const d = c / 2;
                        return ["M", a + d, b, "a", d, d, 0, 0, 0, -c, 0, "a", d, d, 0, 0, 0, c, 0, "Z"].join(" ")
                    },
                    [2]: function({
                        x: a,
                        y: b
                    }, c, d) {
                        c /= 2;
                        d = d || 0;
                        return ["M", a + c, b + c - d, "L", a + c, b - c + d, "A", d, d, 0, 0, 0, a + c - d, b - c, "L", a - c + d, b - c, "A", d, d, 0, 0, 0, a - c, b - c + d, "L", a - c, b + c - d, "A", d, d, 0, 0, 0, a - c + d, b + c, "L", a + c - d, b + c, "A", d, d, 0, 0, 0, a + c, b + c - d, "Z"].join(" ")
                    },
                    [3]: function({
                        x: a,
                        y: b
                    }, c) {
                        c /= 2;
                        return ["M", a, b + c, "L", a + c, b, "L", a, b - c, "L", a - c, b, "Z"].join(" ")
                    },
                    [4]: function({
                        x: a,
                        y: b
                    }, c) {
                        c /= 2;
                        return ["M", a, b - c, "L", a - c, b + c, "L",
                            a + c, b + c, "Z"
                        ].join(" ")
                    },
                    [5]: function({
                        x: a,
                        y: b
                    }, c) {
                        c /= 2;
                        const d = 2 * c * LX,
                            e = c - d * LX,
                            f = d * KX,
                            g = Math.sqrt(e * e + Math.pow($bb * d * LX, 2));
                        return ["M", a, b - c, "L", a - LX * g, b - KX * g, "L", a - f, b - e, "L", a - Ybb * g, b + Zbb * g, "L", a - d / 2, b + c * KX, "L", a, b + g, "L", a + d / 2, b + c * KX, "L", a + Ybb * g, b + Zbb * g, "L", a + f, b - e, "L", a + LX * g, b - KX * g, "Z"].join(" ")
                    }
                };
                __c.NX = class {};
                __c.hv = {};
                __c.hv.bLa = __c.NX;
                __c.hv.Qcb = {
                    c9a: 0,
                    k9a: 1,
                    Mcb: 2
                };
                __c.yX(1900, 0);
                var acb;
                acb = new Date(1899, 11, 30);
                __c.bcb = (new Date(1970, 0, 1)).getTime() - acb.getTime();
                Object.freeze({
                    type: 6,
                    value: void 0
                });
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/9c470028ea3964ff.js.map