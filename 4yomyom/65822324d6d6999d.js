(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [3842], {

        /***/
        688487: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var dcb;
                dcb = function*(a) {
                    let b = 0;
                    for (let c = 1; c < a.length; c++) {
                        const d = a[c - 1],
                            e = a[c];
                        (ccb.has(d) || ccb.has(e)) && d !== e && (yield a.slice(b, c), b = c)
                    }
                    yield a.slice(b)
                };
                __c.OX = class {
                    static hE(a) {
                        if (null == a) return !1;
                        switch (a.type) {
                            case "google-sheets":
                            case "copy-sheets":
                                return !1;
                            case "live-sheets":
                                return !0;
                            case "app":
                                return !1;
                            default:
                                throw new __c.D(a);
                        }
                    }
                };
                __c.ecb = new Set("AED AFN ALL AMD ANG AOA ARS AUD AWG AZN BAM BBD BDT BGN BHD BIF BMD BND BOB BOV BRL BSD BTN BWP BYN BZD CAD CDF CHE CHF CHW CLF CLP CNY COP COU CRC CUC CUP CVE CZK DJF DKK DOP DZD EGP ERN ETB EUR FJD FKP GBP GEL GHS GIP GMD GNF GTQ GYD HKD HNL HRK HTG HUF IDR ILS INR IQD IRR ISK JMD JOD JPY KES KGS KHR KMF KPW KRW KWD KYD KZT LAK LBP LKR LRD LSL LYD MAD MDL MGA MKD MMK MNT MOP MRU MUR MVR MWK MXN MXV MYR MZN NAD NGN NIO NOK NPR NZD OMR PAB PEN PGK PHP PKR PLN PYG QAR RON RSD RUB RWF SAR SBD SCR SDG SEK SGD SHP SLE SOS SRD SSP STN SVC SYP SZL THB TJS TMT TND TOP TRY TTD TWD TZS UAH UGX USD USN UYI UYU UZS VED VEF VND VUV WST XAF XCD XDR XOF XPF XSU XUA YER ZAR ZMW ZWL".split(" "));
                __c.fcb = new Set([",", ".", "'", " ", "\u2019"]);
                __c.gcb = new Set([",", "."]);
                __c.hcb = RegExp("^(-?)([^0-9\\.,\u2019+\\-\\/]{0,50})([+-]?[0-9 \\.,\u2019]*[0-9\\.,])([eE][+-]?[0-9]*)?([^0-9\\.,\u2019+\\-\\/]{0,50})$");
                var icb, jcb, kcb, lcb, mcb, ncb, ocb;
                icb = RegExp('^("[^"]*" *)?(?: *\\[\\$([^-]*)?(?:-([a-z]{2}-[A-Z]{2}))?\\] *)?([#0,.]+)(E\\+0)?(\\s?%)?(?: *\\[\\$([^-]*)?(?:-([a-z]{2}-[A-Z]{2}))?\\] *)?( *"[^"]*")?$');
                jcb = /^([#0,]*)$/;
                kcb = /^([#0,.]+?)(,+)$/;
                lcb = /^([#0]+,?[#0]*)?(\.[0#]*)$/;
                mcb = /"/g;
                ncb = /0/g;
                __c.PX = a => {
                    const [, b, c, d, e = a, f, g, h, k, l] = a.match(icb) || [];
                    if (!c || !h)
                        if (!d || !k) {
                            var m = c || h;
                            if (!m || !g) {
                                var n = c ? "prefix" : h ? "suffix" : void 0;
                                a = d || k;
                                var [, p = e, q] = e.match(kcb) || [], r = p.match(jcb) || p.match(lcb);
                                if (null != r) {
                                    var [, t, u] = r;
                                    m = n && m ? {
                                        position: n,
                                        symbol: m
                                    } : void 0;
                                    return {
                                        prefix: b ? b.replace(mcb, "") : void 0,
                                        suffix: l ? l.replace(mcb, "") : void 0,
                                        gi: null != q ? q.length : 0,
                                        locale: a,
                                        hj: t ? t.includes(",") : !1,
                                        RO: null != f,
                                        decimal: u ? {
                                            length: u.length - 1,
                                            padding: (u.match(ncb) || []).length
                                        } : void 0,
                                        minimumIntegerDigits: t ? (t.match(ncb) || []).length : 0,
                                        ...(null != g ? {
                                            percent: !0
                                        } : {
                                            percent: !1,
                                            currency: m
                                        })
                                    }
                                }
                            }
                        }
                };
                ocb = /^(-?[,0-9]*)(\.[0-9]*)?(e[+-]?[0-9]*)?$/;
                __c.QX = (a, {
                    prefix: b,
                    suffix: c,
                    gi: d,
                    hj: e,
                    percent: f,
                    currency: g,
                    RO: h,
                    minimumIntegerDigits: k,
                    decimal: l = {
                        padding: 0,
                        length: 0
                    }
                }, {
                    De: m,
                    Ed: n
                }) => {
                    0 !== d && (a *= 1 / Math.pow(1E3, d));
                    f && (a *= 100);
                    d = a.toLocaleString("en-US", {
                        useGrouping: e,
                        minimumIntegerDigits: 0 === k ? void 0 : k,
                        minimumFractionDigits: l.padding,
                        maximumFractionDigits: Math.max(l.padding, l.length),
                        notation: h ? "scientific" : "standard"
                    }).toLowerCase();
                    let [, p, q, r] = __c.B(d.match(ocb), "Could not parse '{}' from input '{}'", d, a);
                    a = !1;
                    "0" === p && 0 === k ? p = "" : "-0" === p && 0 ===
                        k ? (p = "", a = null == q ? !1 : !0) : p.startsWith("-") && (a = !0, p = p.slice(1));
                    m && (p = p.replace(/,/g, m));
                    null != q && (q = q.slice(1));
                    null != r && (r = r.slice(1), r = (0 <= Number(r) ? "e+" : "e") + r);
                    k = [];
                    b && k.push(b);
                    a && k.push("-");
                    "prefix" === (null === g || void 0 === g ? void 0 : g.position) && k.push(g.symbol);
                    p && k.push(p);
                    q && k.push(n + q);
                    r && k.push(r);
                    f && k.push("%");
                    "suffix" === (null === g || void 0 === g ? void 0 : g.position) && k.push(g.symbol);
                    c && k.push(c);
                    return k.join("")
                };
                var ccb, pcb, qcb;
                ccb = new Set("ymdhs0".split(""));
                pcb = /^("[^"]*")?((?:[,.\-:/ ZTymdhs]|000)+)(am\/pm)?("[^"]*")?$/i;
                qcb = /"/g;
                __c.RX = a => {
                    const [, b, c, d, e] = a.match(pcb) || [];
                    if (null != c) {
                        a = Array.from(dcb(c));
                        d && a.push("am/pm");
                        var f = b ? b.replace(qcb, "") : void 0;
                        const h = [];
                        for (let k = 0; k < a.length; k += 2) {
                            var g = a[k];
                            const l = a[k + 1];
                            switch (g) {
                                case "ddd":
                                case "dddd":
                                    h.push({
                                        kind: "weekday",
                                        format: "ddd" === g ? "short" : "long",
                                        separator: l
                                    });
                                    break;
                                case "mmm":
                                case "mmmm":
                                    h.push({
                                        kind: "month",
                                        format: "mmm" === g ? "short" : "long",
                                        separator: l
                                    });
                                    break;
                                case "yy":
                                case "yyyy":
                                    h.push({
                                        kind: "year",
                                        format: "yy" === g ? "2-digit" : "numeric",
                                        separator: l
                                    });
                                    break;
                                case "d":
                                case "dd":
                                    h.push({
                                        kind: "day",
                                        format: "dd" === g ? "2-digit" : "numeric",
                                        separator: l
                                    });
                                    break;
                                case "h":
                                case "hh":
                                    h.push({
                                        kind: "hour",
                                        format: "hh" === g ? "2-digit" : "numeric",
                                        separator: l
                                    });
                                    break;
                                case "m":
                                case "mm":
                                    g = "mm" === g ? "2-digit" : "numeric";
                                    const m = h[h.length - 1];
                                    null != m && "hour" === m.kind ? h.push({
                                        kind: "minute",
                                        format: g,
                                        separator: l
                                    }) : h.push({
                                        kind: "month",
                                        format: g,
                                        separator: l
                                    });
                                    break;
                                case "s":
                                case "ss":
                                    h.push({
                                        kind: "second",
                                        format: "ss" === g ? "2-digit" : "numeric",
                                        separator: l
                                    });
                                    break;
                                case "000":
                                    h.push({
                                        kind: "millisecond",
                                        format: "3-digit",
                                        separator: l
                                    });
                                    break;
                                case "am/pm":
                                    h.push({
                                        kind: "ampm",
                                        separator: l
                                    });
                                    break;
                                default:
                                    throw Error(`Invalid date component format '${g}'`);
                            }
                        }
                        return {
                            prefix: f,
                            Be: h,
                            suffix: e ? e.replace(qcb, "") : void 0
                        }
                    }
                };
                __c.SX = (a, {
                    prefix: b = "",
                    suffix: c = "",
                    Be: d
                }) => {
                    var e = new Set(d.map(g => g.kind));
                    __c.y(e.size === d.length, "Duplicated date components are not supported");
                    e = d.reduce((g, h) => {
                        switch (h.kind) {
                            case "year":
                            case "day":
                                g[h.kind] = h.format;
                                break;
                            case "weekday":
                                g[h.kind] = h.format;
                                break;
                            case "hour":
                            case "minute":
                            case "second":
                                g[h.kind] = h.format;
                                break;
                            case "month":
                                g[h.kind] = h.format;
                                break;
                            case "millisecond":
                                g.fractionalSecondDigits = 3;
                                break;
                            case "ampm":
                                g.hour12 = !0;
                                break;
                            default:
                                throw new __c.D(h);
                        }
                        return g
                    }, {
                        hour12: !1,
                        timeZone: "UTC"
                    });
                    const f = (new Intl.DateTimeFormat("en", e)).formatToParts(a).reduce((g, h) => {
                        g.set(h.type, h.value);
                        return g
                    }, new Map);
                    a = d.map(g => {
                        a: {
                            var h = g.kind;
                            switch (h) {
                                case "year":
                                case "day":
                                case "weekday":
                                case "hour":
                                case "minute":
                                case "second":
                                case "month":
                                    h = f.get(h);
                                    break a;
                                case "millisecond":
                                    h = f.get("fractionalSecond");
                                    break a;
                                case "ampm":
                                    h = f.get("dayPeriod");
                                    break a;
                                default:
                                    throw new __c.D(h);
                            }
                        }
                        return __c.B(h, 'Could not find a locale config for "{}"', g.kind) + (g.separator || "")
                    });
                    return b + a.join("") +
                        c
                };
                "yyyy-mm-ddThh:mm:ss.000Z;yyyy-mm-dd hh:mm:ss.000;yyyy-mm-dd hh:mm:ss;yyyy-mm-dd hh:mm;dd/mm/yy;dd/mm/yyyy;mm/dd/yy;mm/dd/yyyy;yyyy/mm/dd;dd-mm-yy;dd-mm-yyyy;mm-dd-yy;mm-dd-yyyy;dd.mm.yy;dd.mm.yyyy;yyyy-mm-dd;dd mmm yy;dd mmm yyyy;dd mmmm yy;dd mmmm yyyy;dd-mmm-yy;dd-mmm-yyyy;dd-mmmm-yy;dd-mmmm-yyyy;mm/yy;mm/yyyy;mmm yy;mmm yyyy;mmmm yy;mmmm yyyy;dd mmm;dd mmmm;mmm dd;mmmm dd;dd-mm;mm-dd;dd/mm;mm/dd;yyyy;mmmm;mmm;h:mm:ss am/pm;hh:mm am/pm;h am/pm;hh:mm;hh:mm:ss".split(";").map(a => __c.B(__c.RX(a)));
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/65822324d6d6999d.js.map