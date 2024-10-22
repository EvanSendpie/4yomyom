(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [3189], {

        /***/
        5845: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(784117);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var P = __c.P;
                var D = __c.D;
                var jxb = function(a, b = "medium") {
                        if (null !== a && void 0 !== a && a.length) {
                            var c = ("number" === typeof b ? b : __c.Tbb[b]) * (window.devicePixelRatio || 1);
                            return [...a].sort((d, e) => {
                                d = d.width;
                                e = e.width;
                                return d > c && e < c ? -1 : d < c && e > c ? 1 : Math.abs(d - c) - Math.abs(e - c)
                            })[0].url
                        }
                    },
                    kxb = function(a) {
                        var b = a.split("T");
                        a = b[0].split("-").map(Number);
                        b = (b[1] || "").split(":", 2).map(c => Number(c.slice(0, 2)));
                        return __c.yX(a[0], a[1] - 1, a[2], b[0] || 0, b[1] || 0)
                    },
                    lxb = function({
                        year: a,
                        month: b,
                        day: c,
                        RVa: d,
                        BZa: e
                    }) {
                        return __c.yX(a, b - 1, c || 1, d, e)
                    },
                    qxb =
                    function(a) {
                        switch (a.type) {
                            case "mention":
                                return new mxb(a);
                            case "embed":
                                return new nxb(a);
                            case "date":
                                return new oxb(a);
                            case "select":
                                return new pxb(a);
                            default:
                                throw new D(a);
                        }
                    },
                    sxb = function() {
                        const a = r5(() => new Map, []);
                        return {
                            YUa: b => {
                                if (a.has(b)) return __c.B(a.get(b));
                                const c = rxb();
                                a.set(b, c);
                                return c
                            }
                        }
                    },
                    txb = function(a, b) {
                        return r5(() => {
                            const c = new Map;
                            return d => {
                                if (c.has(d)) return __c.B(c.get(d));
                                const e = a(d);
                                c.set(d, e);
                                return e
                            }
                        }, b)
                    },
                    Axb = function({
                        children: a,
                        keyFrame: b,
                        PFa: c,
                        ariaLive: d,
                        sya: e = !1,
                        IMa: f,
                        J_: g,
                        QRa: h,
                        uhb: k,
                        nsa: l,
                        bua: m,
                        shb: n,
                        Q6a: p
                    }) {
                        const {
                            YUa: q
                        } = sxb(), {
                            gUa: r,
                            X2a: t
                        } = uxb(b, a), u = txb(w => () => {
                            (!1 === e || "function" === typeof e && !e(w)) && t(w)
                        }, [t, e]);
                        return s5("div", {
                            className: t5(g, "epgNPA", {
                                NvaaRg: "hidden" === l,
                                DiwaPA: "fill-height" === c,
                                _3pVd7A: "flex-grow" === c
                            }),
                            children: s5("div", {
                                className: t5("KhPLRA", h),
                                "aria-live": d,
                                style: k,
                                role: "region",
                                children: [...r.map(({
                                    key: w,
                                    element: x
                                }) => s5(vxb, { in: w === b,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(w),
                                    onExited: u(w),
                                    children: z =>
                                        s5(wxb.Provider, {
                                            value: z,
                                            children: s5("div", {
                                                className: t5("T3uz5Q", n, {
                                                    NvaaRg: "hidden" === m
                                                }),
                                                ref: q(w),
                                                "aria-hidden": z === xxb || z === yxb || z === zxb,
                                                children: w === b ? a : x
                                            })
                                        })
                                }, w)), r.every(w => w.key !== b) && s5(vxb, { in: !1,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(b),
                                    onExited: e ? void 0 : u(b),
                                    children: w => s5(wxb.Provider, {
                                        value: w,
                                        children: s5("div", {
                                            className: t5("T3uz5Q", n),
                                            ref: q(b),
                                            "aria-hidden": w === xxb || w === yxb || w === zxb,
                                            children: a
                                        })
                                    })
                                }, b)]
                            })
                        })
                    },
                    uxb = function(a, b) {
                        const [c, d] = Bxb(() => [{
                            key: a,
                            element: b
                        }]);
                        Cxb(() => {
                            d(f => f.every(g => g.key !== a) ? f.concat({
                                key: a,
                                element: b
                            }) : f.map(g => g.key === a ? {
                                key: a,
                                element: b
                            } : g))
                        }, [a, b]);
                        const e = Dxb(f => {
                            d(g => g.filter(h => h.key !== f))
                        }, []);
                        return {
                            gUa: c,
                            X2a: e
                        }
                    },
                    Exb = function(a) {
                        switch (a.type) {
                            case "mention":
                                return "bCAtqw";
                            case "embed":
                                return "BTcT3w";
                            case "date":
                                return "McKQgg";
                            case "select":
                                return "V2E5nQ";
                            default:
                                throw new D(a);
                        }
                    },
                    Fxb = function(a, b, c) {
                        if (c) {
                            var d = jxb(c.images, "medium"),
                                e = jxb(c.images, "xxxlarge");
                            if (d && e) {
                                c = new Image;
                                c.src = d;
                                var f = new Image;
                                f.src = e;
                                f.onload = u5(() =>
                                    a.OX.set(b, e));
                                f.onerror = u5(() => a.OX.set(b, void 0));
                                !f.complete && c.complete ? a.OX.set(b, d) : c.src = ""
                            }
                        } else a.OX.set(b, void 0)
                    },
                    Hxb = function(a, {
                        url: b,
                        id: c,
                        extension: d
                    }) {
                        if (!a.promises.has(b)) {
                            const e = new Promise(f => {
                                a.Eh ? a.Eh.Rjb(new Gxb({
                                    id: c,
                                    extension: d
                                })).then(({
                                    document: g
                                }) => {
                                    const h = g.wf.content.title;
                                    h ? (v5(() => a.ZGa.set(b, {
                                        status: 1,
                                        title: h
                                    })), f(h)) : f(void 0)
                                }).catch(() => {
                                    v5(() => a.ZGa.set(b, {
                                        status: 2
                                    }));
                                    f(void 0)
                                }) : f(void 0)
                            });
                            a.promises.set(b, e)
                        }
                        return a.promises.get(b)
                    },
                    Ixb = __c.L(() => ({
                        Skb: __c.lO(11),
                        mode: __c.E("A?", 1, "BY_USER_IDS"),
                        t7a: __c.kO(1)
                    })),
                    Gxb = __c.L(() => ({
                        id: __c.U("id", 1),
                        extension: __c.W("extension", 3),
                        E3a: __c.gO("revision", 5),
                        version: __c.gO("version", 2)
                    })),
                    Jxb = __webpack_require__(443763),
                    s5 = Jxb.jsx,
                    Kxb = Jxb.jsxs;
                var w5 = __webpack_require__(736241).Pi;
                var x5 = __webpack_require__(875604),
                    r5 = x5.useMemo,
                    y5 = x5.memo,
                    Lxb = x5.useEffect,
                    Mxb = x5.createContext,
                    Bxb = x5.useState,
                    Cxb = x5.useLayoutEffect,
                    Dxb = x5.useCallback,
                    rxb = x5.createRef;
                var z5 = __webpack_require__(42782),
                    A5 = z5.Fl,
                    u5 = z5.aD,
                    v5 = z5.z,
                    B5 = z5.vP,
                    Nxb = z5.LO;
                var Oxb = __webpack_require__,
                    Pxb = Oxb(993864),
                    t5 = Oxb.n_x(Pxb)();
                var vxb = __webpack_require__(489212).Z;
                var C5 = __webpack_require__(92009),
                    xxb = C5.Ix,
                    yxb = C5.$r,
                    zxb = C5.Wj;
                var mxb = class {
                        static A(a) {
                            P(a, {
                                text: A5,
                                user: A5,
                                brand: A5
                            })
                        }
                        get text() {
                            return this.Wk.text
                        }
                        get user() {
                            return this.Wk.user
                        }
                        get brand() {
                            return this.Wk.brand
                        }
                        constructor(a) {
                            mxb.A(this);
                            this.Wk = a;
                            this.type = "mention"
                        }
                    },
                    nxb = class {
                        static A(a) {
                            P(a, {
                                text: A5,
                                url: A5
                            })
                        }
                        get text() {
                            return this.Wk.text
                        }
                        get url() {
                            return this.Wk.url
                        }
                        constructor(a) {
                            nxb.A(this);
                            this.Wk = a;
                            this.type = "embed"
                        }
                    },
                    oxb = class {
                        static A(a) {
                            P(a, {
                                text: A5,
                                language: A5,
                                style: A5,
                                date: A5
                            })
                        }
                        get text() {
                            return this.Wk.text
                        }
                        get language() {
                            return this.Wk.language
                        }
                        get style() {
                            return this.Wk.style
                        }
                        get date() {
                            return this.Wk.date
                        }
                        constructor(a) {
                            oxb.A(this);
                            this.Wk = a;
                            this.type = "date"
                        }
                    },
                    pxb = class {
                        static A(a) {
                            P(a, {
                                text: A5,
                                options: A5,
                                Nf: A5,
                                vL: A5
                            })
                        }
                        get text() {
                            return this.Wk.text
                        }
                        get options() {
                            return this.Wk.options.map(a => a)
                        }
                        get Nf() {
                            return this.Wk.Nf
                        }
                        get vL() {
                            var a;
                            return null === (a = this.Wk.options.first(b => b.id === this.Wk.Nf)) || void 0 === a ? void 0 : a.fill.color
                        }
                        get YDa() {
                            return !1
                        }
                        constructor(a) {
                            pxb.A(this);
                            this.Wk = a;
                            this.type = "select"
                        }
                    };
                var D5 = class {
                        static A(a) {
                            P(a, {
                                style: A5,
                                date: A5
                            })
                        }
                        get style() {
                            return 2
                        }
                        get date() {
                            var a;
                            (a = this.IQa) || (a = new Date, a = a instanceof Date || "number" === typeof a ? new Date(a) : "string" === typeof a ? kxb(a) : lxb(a), a = {
                                year: a.getFullYear(),
                                month: a.getMonth() + 1,
                                day: a.getDate(),
                                RVa: a.getHours(),
                                BZa: a.getMinutes()
                            });
                            return a
                        }
                        constructor(a, b, c) {
                            D5.A(this);
                            this.text = a;
                            this.language = b;
                            this.IQa = c;
                            this.type = "date"
                        }
                    },
                    Qxb = class {
                        get id() {
                            return this.cMa
                        }
                        get label() {
                            return this.wpa.label
                        }
                        get fill() {
                            return this.wpa.fill
                        }
                        constructor(a,
                            b) {
                            this.wpa = a;
                            this.cMa = b
                        }
                    },
                    E5 = class {
                        static A(a) {
                            P(a, {
                                options: A5,
                                Nf: A5,
                                vL: A5
                            })
                        }
                        get options() {
                            return this._options.map((a, b) => new Qxb(a, b))
                        }
                        get Nf() {
                            var a;
                            return null === (a = this.options.find(b => b.label === this.text)) || void 0 === a ? void 0 : a.id
                        }
                        get vL() {
                            var a;
                            return null === (a = this.options.find(b => b.id === this.Nf)) || void 0 === a ? void 0 : a.fill.color
                        }
                        get YDa() {
                            return !1
                        }
                        constructor(a, b) {
                            E5.A(this);
                            this.text = a;
                            this._options = b;
                            this.type = "select"
                        }
                    };
                var Rxb = class {
                    Jda(a) {
                        this.taa.Jda(a)
                    }
                    xW(a, b) {
                        this.taa.xW(a, b)
                    }
                    aT(a) {
                        return this.taa.aT(a)
                    }
                    Gda(a) {
                        this.eua.Gda(a)
                    }
                    constructor(a, b, c) {
                        this.taa = a;
                        this.eua = b;
                        this.jH = c;
                        this.gna = new __c.h5a;
                        this.wUa = d => __c.ZG(this.gna, d)
                    }
                };
                var wxb = Mxb(void 0);
                var Sxb = Number.parseInt("300ms", 10),
                    Txb = {
                        enter: "gWeP3g",
                        enterActive: "YL_ApQ",
                        enterDone: void 0,
                        exitActive: "qqCHKg",
                        exitDone: "gum40Q"
                    },
                    Uxb = y5(function({
                        Gca: a = !1,
                        children: b,
                        keyFrame: c,
                        PFa: d,
                        nsa: e = "hidden",
                        bua: f = "hidden",
                        ariaLive: g,
                        sya: h,
                        tkb: k = "none"
                    }) {
                        a = __c.pb() && !a;
                        return Axb({
                            children: b,
                            keyFrame: c,
                            PFa: d,
                            ariaLive: g,
                            nsa: e,
                            bua: f,
                            sya: h,
                            IMa: a ? Sxb : 0,
                            QRa: t5({
                                _4C1vIA: a,
                                pOll6Q: "none" === k,
                                g1T5pQ: "layout" === k
                            }),
                            Q6a: Txb
                        })
                    });
                var Vxb = '<svg height="auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
                var Wxb = '<svg height="auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
                var Xxb = '<svg height="auto" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
                var Yxb = y5(a => {
                        const b = a.className,
                            c = a.ariaLabel,
                            d = a.vL,
                            e = a.gLa,
                            f = a.HLa,
                            g = a.measureRef,
                            h = t5({
                                EdewNw: !!e,
                                _6ZpPrw: !!f,
                                pzXyUA: 0 < a.text.length
                            });
                        a = 0 < a.text.length ? a.text : "\ufeff";
                        return Kxb("span", {
                            className: t5(b, "FedJ0Q"),
                            "aria-label": c || a,
                            children: [s5("span", {
                                className: t5("_2Lr6pQ", h),
                                children: s5("span", {
                                    className: "Z_WvzQ",
                                    children: a
                                })
                            }), Kxb("span", {
                                className: t5("XemTdQ", h),
                                ref: g,
                                style: d ? {
                                    color: d
                                } : void 0,
                                children: [e, s5("span", {
                                    className: "U_QH_A",
                                    children: a
                                }), f]
                            })]
                        })
                    }),
                    Zxb = y5(a => {
                        const b = a.backgroundColor,
                            c = a.Ao;
                        a = a.text;
                        const d = {
                            width: "0.9em",
                            height: "0.9em"
                        };
                        return s5(Uxb, {
                            keyFrame: c ? "show" : "hide",
                            children: a ? s5(__c.Xbb, {
                                name: a,
                                style: d,
                                backgroundColor: b,
                                Ao: c,
                                borderColor: c ? void 0 : b
                            }) : s5("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: Xxb
                                }
                            })
                        })
                    }),
                    $xb = y5(a => {
                        a = a.icon;
                        return s5(Uxb, {
                            keyFrame: a ? "favicon" : "placeholder",
                            children: a ? s5("span", {
                                className: "_tFJqA",
                                children: s5("img", {
                                    src: a,
                                    className: "qpbYdw"
                                })
                            }) : s5("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: Wxb
                                }
                            })
                        })
                    }),
                    ayb = y5(() => s5("span", {
                        "aria-hidden": "true",
                        className: "_tFJqA",
                        dangerouslySetInnerHTML: {
                            __html: Vxb
                        }
                    })),
                    byb = y5(({
                        selected: a
                    }) => s5("div", {
                        className: t5("whph4A", {
                            zgzjww: a
                        }),
                        children: s5(__c.hN, {
                            size: "medium",
                            style: {
                                width: "0.9em",
                                height: "0.9em"
                            },
                            className: "_tFJqA"
                        })
                    })),
                    cyb = w5(a => {
                        const b = a.kt,
                            c = a.mja;
                        a = a.measureRef;
                        Lxb(() => {
                            v5(() => {
                                switch (b.type) {
                                    case "mention":
                                        b.user && c.Jda(b.user);
                                        break;
                                    case "embed":
                                        c.Gda(b.url)
                                }
                            })
                        }, [b, c]);
                        var d = b.text || "\u00a0".repeat(16),
                            e = b.text || "",
                            f = Exb(b),
                            g = b.vL;
                        a: {
                            switch (b.type) {
                                case "mention":
                                    var h =
                                        s5(Zxb, {
                                            Ao: c.aT(b.user),
                                            text: b.text,
                                            backgroundColor: c.wUa(b.user).background
                                        });
                                    break a;
                                case "embed":
                                    h = s5($xb, {
                                        icon: c.eua.rS.get(b.url)
                                    });
                                    break a;
                                case "date":
                                    h = b.text ? void 0 : s5(ayb, {});
                                    break a;
                                case "select":
                                    break;
                                default:
                                    throw new D(b);
                            }
                            h = void 0
                        }
                        a: {
                            switch (b.type) {
                                case "mention":
                                case "embed":
                                case "date":
                                    break;
                                case "select":
                                    var k = s5(byb, {
                                        selected: !!b.YDa
                                    });
                                    break a;
                                default:
                                    throw new D(b);
                            }
                            k = void 0
                        }
                        return s5(Yxb, {
                            text: d,
                            ariaLabel: e,
                            className: f,
                            vL: g,
                            gLa: h,
                            HLa: k,
                            measureRef: a
                        })
                    });
                var dyb = class {
                        static A(a) {
                            P(a, {
                                hK: Nxb.shallow,
                                Oua: u5
                            })
                        }
                        aT(a) {
                            return this.Dqa.aT(a)
                        }
                        Jda(a) {
                            this.fna.has(a) || this.hK.has(a) || (this.hK.add(a), this.JQa())
                        }
                        xW(a, b) {
                            this.fna.has(a) || (this.fna.set(a, b), this.hK.delete(a), Fxb(this.Dqa, a, b))
                        }
                        async Oua() {
                            if (0 !== this.hK.size) {
                                var a = [...this.hK.values()];
                                this.hK.clear();
                                if (this.Eqa) {
                                    var b = await this.Eqa,
                                        c = new Ixb({
                                            t7a: a
                                        }),
                                        {
                                            Peb: d
                                        } = await b.tjb(c);
                                    v5(() => {
                                        a.forEach(e => this.xW(e, d.get(e)))
                                    })
                                } else a.forEach(e => this.xW(e))
                            }
                        }
                        constructor(a, b) {
                            dyb.A(this);
                            this.Eqa = a;
                            this.fna =
                                new B5;
                            this.hK = new Set;
                            this.Dqa = new eyb;
                            this.JQa = __c.Qc(() => this.Oua(), 200);
                            v5(() => {
                                null === b || void 0 === b ? void 0 : b.forEach((c, d) => this.xW(d, c))
                            })
                        }
                    },
                    eyb = class {
                        aT(a) {
                            return this.OX.get(a)
                        }
                        constructor() {
                            this.OX = new B5
                        }
                    };
                var fyb = class {
                    static A(a) {
                        P(a, {
                            rTa: u5
                        })
                    }
                    async rTa(a) {
                        if (this.Eh) {
                            var b = (new URL(a)).pathname; {
                                const c = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                                null == c || 2 > c.length ? b = void 0 : (b = c[2], (new Set(["edit", "remix", "view", "watch"])).has(c[2]) && (b = void 0), b = {
                                    id: c[1],
                                    extension: b
                                })
                            }
                            if (b) return await Hxb(this, {
                                url: a,
                                ...b
                            })
                        }
                    }
                    constructor(a) {
                        fyb.A(this);
                        this.Eh = a;
                        this.ZGa = new B5;
                        this.promises = new Map
                    }
                };
                var gyb = class {
                    static A(a) {
                        P(a, {
                            rS: Nxb.shallow
                        })
                    }
                    Gda(a) {
                        const b = new Image;
                        let c;
                        try {
                            var d;
                            c = null === (d = this.ap) || void 0 === d ? void 0 : __c.B(d.kH.get(a)).pTa
                        } catch (e) {}
                        c ? (b.src = c, b.onload = u5(() => this.rS.set(a, c)), b.onerror = u5(() => this.rS.set(a, void 0))) : this.rS.set(a, void 0)
                    }
                    constructor(a) {
                        gyb.A(this);
                        this.ap = a;
                        this.rS = new Map
                    }
                };
                __c.nna = {
                    FWa: function(a) {
                        const b = a.Kc,
                            c = a.document,
                            d = a.Eh;
                        var e = a.ap;
                        const f = a.jH;
                        var g = a.saa;
                        const h = a.Ht,
                            k = a.kz,
                            l = a.yfa;
                        g = new dyb(null === l || void 0 === l ? void 0 : l(), g);
                        e = new gyb(e);
                        new fyb(d);
                        const m = new Rxb(g, e, f);
                        switch (b) {
                            case "fixed":
                                break;
                            case "responsive":
                                a.Ud.lm.T9 = w5(({
                                    item: n,
                                    measureRef: p
                                }) => {
                                    const q = r5(() => qxb(n.kt), [n.kt]);
                                    return s5(cyb, {
                                        kt: q,
                                        mja: m,
                                        measureRef: p
                                    })
                                });
                                break;
                            default:
                                throw new D(b);
                        }
                        k.then(n => {
                            const p = w5(({
                                context: q
                            }) => {
                                var r;
                                a: {
                                    var t;
                                    const w = c.language || "en-AU";q = __c.B(n.KA(q.sheet,
                                        q.Da, q.col));
                                    if (null == (null === q || void 0 === q ? void 0 : null === (r = q.Bg) || void 0 === r ? void 0 : r.type) || q.isEmpty) b: {
                                        var u;
                                        switch (null === (u = q.Ca) || void 0 === u ? void 0 : u.type) {
                                            case "date":
                                                r = new D5("", w, void 0);
                                                break b;
                                            case "select":
                                                r = new E5("\u00a0".repeat(16), q.Ca.options);
                                                break b;
                                            case "plain_number":
                                            case "currency":
                                            case "percentage":
                                            case void 0:
                                                throw Error("Sheets only supports Date and Select pills.");
                                            default:
                                                throw new D(q.Ca);
                                        }
                                    }
                                    else switch (null === (t = q.Ca) || void 0 === t ? void 0 : t.type) {
                                        case "select":
                                            r = new E5(q.lu,
                                                q.Ca.options);
                                            break a;
                                        case "date":
                                            r = new D5(q.lu, w, 2 === q.zx.type ? q.zx.date : void 0);
                                            break a;
                                        case "plain_number":
                                        case "currency":
                                        case "percentage":
                                        case void 0:
                                            throw Error("Sheets only supports Date and Select pills.");
                                        default:
                                            throw new D(q.Ca);
                                    }
                                }
                                return s5(cyb, {
                                    kt: r,
                                    mja: m
                                })
                            });
                            h.gpa = ({
                                context: q
                            }) => ({
                                type: "react",
                                node: s5(p, {
                                    context: q
                                })
                            })
                        });
                        return {
                            mja: m
                        }
                    }
                };
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/cf9d51e7a3444616.js.map