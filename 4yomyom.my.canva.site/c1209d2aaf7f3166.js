(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [8042], {

        /***/
        686040: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var fY;
                var bY, Lcb;
                __c.$X = function(a) {
                    const b = { ...a.props
                        },
                        c = void 0 !== a.za ? a.za : a.UQ;
                    (void 0 !== a.$l ? a.$l : a.span).MK(({
                        Bu: d,
                        oD: e
                    }) => {
                        d = a.Zgb ? {} : {
                            Mj: d()
                        };
                        c.track(a.event, { ...d,
                            Pl: e(),
                            ...b
                        })
                    })
                };
                __c.aY = function(a, b, c) {
                    return 0 > c ? a : 1 < c ? b : a + (b - a) * c
                };
                bY = __webpack_require__(875604);
                Lcb = bY.createContext;
                __c.Mcb = bY.useId;
                __c.Ncb = bY.useRef;
                __c.Ocb = bY.useEffect;
                var cY;
                cY = __webpack_require__(443763);
                __c.Pcb = cY.jsxs;
                __c.Qcb = cY.Fragment;
                __c.dY = cY.jsx;
                __c.Rcb = __webpack_require__(42782).EH;
                __c.eY = {
                    BKa: 1,
                    ILa: 2,
                    CKa: 3,
                    HKa: 4,
                    KJa: 5,
                    QLa: 6
                };
                fY = __c.fY = class {
                    static AN(a, b, c) {
                        return 0 >= c ? a : 1 <= c ? b : fY.isEqual(a, b) ? a : new fY(__c.aY(a.r, b.r, c), __c.aY(a.g, b.g, c), __c.aY(a.b, b.b, c), __c.aY(a.a, b.a, c))
                    }
                    static multiply(a, b) {
                        return fY.isEqual(a, __c.gY) ? b : fY.isEqual(b, __c.gY) ? a : new fY(a.r * b.r, a.g * b.g, a.b * b.b, a.a * b.a)
                    }
                    static isEqual(a, b) {
                        return a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a
                    }
                    static fromHex(a) {
                        a = a.startsWith("#") ? a.substr(1) : a;
                        a = parseInt(a, 16);
                        return new fY(Math.floor(a / 65536) % 256 / 255, Math.floor(a / 256) % 256 / 255, a % 256 / 255, 1)
                    }
                    constructor(a = 0,
                        b = 0, c = 0, d = 0) {
                        this.r = a;
                        this.g = b;
                        this.b = c;
                        this.a = d
                    }
                };
                __c.hY = new fY(1, 1, 1, 0);
                __c.gY = new fY(1, 1, 1, 1);
                __c.iY = Lcb(window);
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/c1209d2aaf7f3166.js.map