(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [4663], {

        /***/
        573349: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var Yzb = class {
                        equals(a) {
                            return this.type === a.type && this.switch === a.switch && this.container.equals(a.container)
                        }
                        constructor(a, b) {
                            this.container = a;
                            this.type = "switch-item";
                            this.switch = b
                        }
                    },
                    Zzb = class {
                        get switch() {
                            return this.container.switch
                        }
                        get items() {
                            return this.text.items
                        }
                        equals(a) {
                            return this.type === a.type && this.option === a.option && this.container.equals(a.container)
                        }
                        constructor(a, b) {
                            __c.P(this, {
                                items: __c.S
                            });
                            this.container = a;
                            this.option = b;
                            this.type = "switch-item-option";
                            __c.v(a.switch.options.has(b));
                            this.text = b.text
                        }
                    },
                    $zb = class {
                        get elements() {
                            return new Set(this.switch.options.map(a => a.element))
                        }
                        equals(a) {
                            return this.type === a.type && this.switch === a.switch && this.container.equals(a.container)
                        }
                        constructor(a, b) {
                            __c.P(this, {
                                elements: __c.S
                            });
                            this.container = a;
                            this.type = "switch-element";
                            __c.v(a.elements.has(b));
                            this.switch = b
                        }
                    },
                    z6 = __webpack_require__(443763).jsx;
                var A6 = __webpack_require__(736241).Pi;
                var aAb = __webpack_require__(875604),
                    bAb = aAb.useRef,
                    cAb = aAb.useEffect;
                var dAb = __webpack_require__(42782).EH;
                var eAb = A6(({
                        element: a,
                        container: b,
                        ...c
                    }) => {
                        const d = bAb(null);
                        cAb(() => {
                            const e = d.current;
                            if (e) return dAb(() => {
                                var f, g;
                                const h = null !== (g = null === (f = c.scaleFactor) || void 0 === f ? void 0 : f.get()) && void 0 !== g ? g : 1;
                                f = a.height;
                                e.style.width = `${a.width*h}px`;
                                e.style.height = `${f*h}px`
                            }, {
                                scheduler: c.zi
                            })
                        }, [a, c.scaleFactor, c.zi]);
                        return z6("div", {
                            className: "E_yBwg",
                            ref: d,
                            children: a.kG && z6(__c.eA, { ...c,
                                element: a.kG.element,
                                container: new $zb(b, a),
                                animation: void 0,
                                zi: c.zi
                            })
                        })
                    }),
                    fAb = __c.qt(eAb);
                var gAb = A6(a => {
                    const b = a.Ub,
                        c = a.tc,
                        d = a.Jg,
                        e = a.item,
                        f = a.cu;
                    return z6("div", {
                        className: "E_yBwg",
                        ref: a.measureRef,
                        children: e.kG && z6(f, {
                            Ub: b,
                            tc: c,
                            text: e.kG.text,
                            Xj: new Zzb(new Yzb(d, e), e.kG)
                        }, e.options.Px(e.kG))
                    })
                });
                __c.tqa = {
                    IWa: function(a) {
                        switch (a.Kc) {
                            case "fixed":
                                a.Qo.H9 = d => z6(fAb, { ...d
                                });
                                break;
                            case "responsive":
                                const b = a.Ud;
                                a = a.zt;
                                const c = a();
                                b.lm.Z9 = A6(d => {
                                    __c.v("layout-item-cell" === d.Jg.type);
                                    return z6(gAb, { ...d,
                                        cu: c
                                    })
                                });
                                break;
                            default:
                                throw new __c.D(a);
                        }
                    }
                };
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/f5a0509cbb7a85e5.js.map