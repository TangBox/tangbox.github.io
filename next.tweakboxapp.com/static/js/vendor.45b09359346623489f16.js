webpackJsonp([0], {
    "+E39": function(e, t, n) { e.exports = !n("S82l")(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) },
    "+MLA": function(e, t, n) { var a = n("EqjI"),
            i = n("06OY").onFreeze;
        n("uqUo")("freeze", function(e) { return function(t) { return e && a(t) ? e(i(t)) : t } }) },
    "+ZMJ": function(e, t, n) { var a = n("lOnJ");
        e.exports = function(e, t, n) { if (a(e), void 0 === t) return e; switch (n) {
                case 1:
                    return function(n) { return e.call(t, n) };
                case 2:
                    return function(n, a) { return e.call(t, n, a) };
                case 3:
                    return function(n, a, i) { return e.call(t, n, a, i) } } return function() { return e.apply(t, arguments) } } },
    "+tPU": function(e, t, n) { n("xGkn"); for (var a = n("7KvD"), i = n("hJx8"), r = n("/bQp"), s = n("dSzd")("toStringTag"), o = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < o.length; l++) { var c = o[l],
                d = a[c],
                u = d && d.prototype;
            u && !u[s] && i(u, s, c), r[c] = r.Array } },
    "//Fk": function(e, t, n) { e.exports = { default: n("U5ju"), __esModule: !0 } },
    "/bQp": function(e, t) { e.exports = {} },
    "/n6Q": function(e, t, n) { n("zQR9"), n("+tPU"), e.exports = n("Kh4W").f("iterator") },
    "06OY": function(e, t, n) { var a = n("3Eo+")("meta"),
            i = n("EqjI"),
            r = n("D2L2"),
            s = n("evD5").f,
            o = 0,
            l = Object.isExtensible || function() { return !0 },
            c = !n("S82l")(function() { return l(Object.preventExtensions({})) }),
            d = function(e) { s(e, a, { value: { i: "O" + ++o, w: {} } }) },
            u = e.exports = { KEY: a, NEED: !1, fastKey: function(e, t) { if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e; if (!r(e, a)) { if (!l(e)) return "F"; if (!t) return "E";
                        d(e) } return e[a].i }, getWeak: function(e, t) { if (!r(e, a)) { if (!l(e)) return !0; if (!t) return !1;
                        d(e) } return e[a].w }, onFreeze: function(e) { return c && u.NEED && l(e) && !r(e, a) && d(e), e } } },
    "1kS7": function(e, t) { t.f = Object.getOwnPropertySymbols },
    "21It": function(e, t, n) { "use strict"; var a = n("FtD3");
        e.exports = function(e, t, n) { var i = n.config.validateStatus;
            n.status && i && !i(n.status) ? t(a("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n) } },
    "2KxR": function(e, t) { e.exports = function(e, t, n, a) { if (!(e instanceof t) || void 0 !== a && a in e) throw TypeError(n + ": incorrect invocation!"); return e } },
    "30KW": function(e, t, n) { var a = n("kM2E"),
            i = n("7KvD").isFinite;
        a(a.S, "Number", { isFinite: function(e) { return "number" == typeof e && i(e) } }) },
    "3Eo+": function(e, t) { var n = 0,
            a = Math.random();
        e.exports = function(e) { return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + a).toString(36)) } },
    "3fs2": function(e, t, n) { var a = n("RY/4"),
            i = n("dSzd")("iterator"),
            r = n("/bQp");
        e.exports = n("FeBl").getIteratorMethod = function(e) { if (void 0 != e) return e[i] || e["@@iterator"] || r[a(e)] } },
    "4mcu": function(e, t) { e.exports = function() {} },
    "52gC": function(e, t) { e.exports = function(e) { if (void 0 == e) throw TypeError("Can't call method on  " + e); return e } },
    "5PlU": function(e, t, n) { var a = n("RY/4"),
            i = n("dSzd")("iterator"),
            r = n("/bQp");
        e.exports = n("FeBl").isIterable = function(e) { var t = Object(e); return void 0 !== t[i] || "@@iterator" in t || r.hasOwnProperty(a(t)) } },
    "5QVw": function(e, t, n) { e.exports = { default: n("BwfY"), __esModule: !0 } },
    "5VQ+": function(e, t, n) { "use strict"; var a = n("cGG2");
        e.exports = function(e, t) { a.forEach(e, function(n, a) { a !== t && a.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[a]) }) } },
    "5zde": function(e, t, n) { n("zQR9"), n("qyJz"), e.exports = n("FeBl").Array.from },
    "7+uW": function(e, t, n) {
        "use strict";
        (function(e) {
            /*!
             * Vue.js v2.5.16
             * (c) 2014-2018 Evan You
             * Released under the MIT License.
             */
            var n = Object.freeze({});

            function a(e) { return void 0 === e || null === e }

            function i(e) { return void 0 !== e && null !== e }

            function r(e) { return !0 === e }

            function s(e) { return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e }

            function o(e) { return null !== e && "object" == typeof e }
            var l = Object.prototype.toString;

            function c(e) { return "[object Object]" === l.call(e) }

            function d(e) { return "[object RegExp]" === l.call(e) }

            function u(e) { var t = parseFloat(String(e)); return t >= 0 && Math.floor(t) === t && isFinite(e) }

            function p(e) { return null == e ? "" : "object" == typeof e ? JSON.stringify(e, null, 2) : String(e) }

            function h(e) { var t = parseFloat(e); return isNaN(t) ? e : t }

            function f(e, t) { for (var n = Object.create(null), a = e.split(","), i = 0; i < a.length; i++) n[a[i]] = !0; return t ? function(e) { return n[e.toLowerCase()] } : function(e) { return n[e] } }
            var v = f("slot,component", !0),
                m = f("key,ref,slot,slot-scope,is");

            function g(e, t) { if (e.length) { var n = e.indexOf(t); if (n > -1) return e.splice(n, 1) } }
            var b = Object.prototype.hasOwnProperty;

            function y(e, t) { return b.call(e, t) }

            function w(e) { var t = Object.create(null); return function(n) { return t[n] || (t[n] = e(n)) } }
            var C = /-(\w)/g,
                x = w(function(e) { return e.replace(C, function(e, t) { return t ? t.toUpperCase() : "" }) }),
                k = w(function(e) { return e.charAt(0).toUpperCase() + e.slice(1) }),
                E = /\B([A-Z])/g,
                $ = w(function(e) { return e.replace(E, "-$1").toLowerCase() });
            var S = Function.prototype.bind ? function(e, t) { return e.bind(t) } : function(e, t) {
                function n(n) { var a = arguments.length; return a ? a > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t) } return n._length = e.length, n };

            function T(e, t) { t = t || 0; for (var n = e.length - t, a = new Array(n); n--;) a[n] = e[n + t]; return a }

            function _(e, t) { for (var n in t) e[n] = t[n]; return e }

            function M(e) { for (var t = {}, n = 0; n < e.length; n++) e[n] && _(t, e[n]); return t }

            function P(e, t, n) {}
            var O = function(e, t, n) { return !1 },
                B = function(e) { return e };

            function I(e, t) { if (e === t) return !0; var n = o(e),
                    a = o(t); if (!n || !a) return !n && !a && String(e) === String(t); try { var i = Array.isArray(e),
                        r = Array.isArray(t); if (i && r) return e.length === t.length && e.every(function(e, n) { return I(e, t[n]) }); if (i || r) return !1; var s = Object.keys(e),
                        l = Object.keys(t); return s.length === l.length && s.every(function(n) { return I(e[n], t[n]) }) } catch (e) { return !1 } }

            function A(e, t) { for (var n = 0; n < e.length; n++)
                    if (I(e[n], t)) return n; return -1 }

            function L(e) { var t = !1; return function() { t || (t = !0, e.apply(this, arguments)) } }
            var D = "data-server-rendered",
                R = ["component", "directive", "filter"],
                z = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured"],
                N = { optionMergeStrategies: Object.create(null), silent: !1, productionTip: !1, devtools: !1, performance: !1, errorHandler: null, warnHandler: null, ignoredElements: [], keyCodes: Object.create(null), isReservedTag: O, isReservedAttr: O, isUnknownElement: O, getTagNamespace: P, parsePlatformTagName: B, mustUseProp: O, _lifecycleHooks: z };

            function F(e) { var t = (e + "").charCodeAt(0); return 36 === t || 95 === t }

            function H(e, t, n, a) { Object.defineProperty(e, t, { value: n, enumerable: !!a, writable: !0, configurable: !0 }) }
            var j = /[^\w.$]/;
            var V, q = "__proto__" in {},
                W = "undefined" != typeof window,
                Y = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
                U = Y && WXEnvironment.platform.toLowerCase(),
                G = W && window.navigator.userAgent.toLowerCase(),
                X = G && /msie|trident/.test(G),
                K = G && G.indexOf("msie 9.0") > 0,
                J = G && G.indexOf("edge/") > 0,
                Q = (G && G.indexOf("android"), G && /iphone|ipad|ipod|ios/.test(G) || "ios" === U),
                Z = (G && /chrome\/\d+/.test(G), {}.watch),
                ee = !1;
            if (W) try { var te = {};
                Object.defineProperty(te, "passive", { get: function() { ee = !0 } }), window.addEventListener("test-passive", null, te) } catch (e) {}
            var ne = function() { return void 0 === V && (V = !W && !Y && void 0 !== e && "server" === e.process.env.VUE_ENV), V },
                ae = W && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

            function ie(e) { return "function" == typeof e && /native code/.test(e.toString()) }
            var re, se = "undefined" != typeof Symbol && ie(Symbol) && "undefined" != typeof Reflect && ie(Reflect.ownKeys);
            re = "undefined" != typeof Set && ie(Set) ? Set : function() {
                function e() { this.set = Object.create(null) } return e.prototype.has = function(e) { return !0 === this.set[e] }, e.prototype.add = function(e) { this.set[e] = !0 }, e.prototype.clear = function() { this.set = Object.create(null) }, e }();
            var oe = P,
                le = 0,
                ce = function() { this.id = le++, this.subs = [] };
            ce.prototype.addSub = function(e) { this.subs.push(e) }, ce.prototype.removeSub = function(e) { g(this.subs, e) }, ce.prototype.depend = function() { ce.target && ce.target.addDep(this) }, ce.prototype.notify = function() { for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update() }, ce.target = null;
            var de = [];

            function ue(e) { ce.target && de.push(ce.target), ce.target = e }

            function pe() { ce.target = de.pop() }
            var he = function(e, t, n, a, i, r, s, o) { this.tag = e, this.data = t, this.children = n, this.text = a, this.elm = i, this.ns = void 0, this.context = r, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = s, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = o, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1 },
                fe = { child: { configurable: !0 } };
            fe.child.get = function() { return this.componentInstance }, Object.defineProperties(he.prototype, fe);
            var ve = function(e) { void 0 === e && (e = ""); var t = new he; return t.text = e, t.isComment = !0, t };

            function me(e) { return new he(void 0, void 0, void 0, String(e)) }

            function ge(e) { var t = new he(e.tag, e.data, e.children, e.text, e.elm, e.context, e.componentOptions, e.asyncFactory); return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.isCloned = !0, t }
            var be = Array.prototype,
                ye = Object.create(be);
            ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(e) { var t = be[e];
                H(ye, e, function() { for (var n = [], a = arguments.length; a--;) n[a] = arguments[a]; var i, r = t.apply(this, n),
                        s = this.__ob__; switch (e) {
                        case "push":
                        case "unshift":
                            i = n; break;
                        case "splice":
                            i = n.slice(2) } return i && s.observeArray(i), s.dep.notify(), r }) });
            var we = Object.getOwnPropertyNames(ye),
                Ce = !0;

            function xe(e) { Ce = e }
            var ke = function(e) {
                (this.value = e, this.dep = new ce, this.vmCount = 0, H(e, "__ob__", this), Array.isArray(e)) ? ((q ? Ee : $e)(e, ye, we), this.observeArray(e)) : this.walk(e) };

            function Ee(e, t, n) { e.__proto__ = t }

            function $e(e, t, n) { for (var a = 0, i = n.length; a < i; a++) { var r = n[a];
                    H(e, r, t[r]) } }

            function Se(e, t) { var n; if (o(e) && !(e instanceof he)) return y(e, "__ob__") && e.__ob__ instanceof ke ? n = e.__ob__ : Ce && !ne() && (Array.isArray(e) || c(e)) && Object.isExtensible(e) && !e._isVue && (n = new ke(e)), t && n && n.vmCount++, n }

            function Te(e, t, n, a, i) { var r = new ce,
                    s = Object.getOwnPropertyDescriptor(e, t); if (!s || !1 !== s.configurable) { var o = s && s.get;
                    o || 2 !== arguments.length || (n = e[t]); var l = s && s.set,
                        c = !i && Se(n);
                    Object.defineProperty(e, t, { enumerable: !0, configurable: !0, get: function() { var t = o ? o.call(e) : n; return ce.target && (r.depend(), c && (c.dep.depend(), Array.isArray(t) && function e(t) { for (var n = void 0, a = 0, i = t.length; a < i; a++)(n = t[a]) && n.__ob__ && n.__ob__.dep.depend(), Array.isArray(n) && e(n) }(t))), t }, set: function(t) { var a = o ? o.call(e) : n;
                            t === a || t != t && a != a || (l ? l.call(e, t) : n = t, c = !i && Se(t), r.notify()) } }) } }

            function _e(e, t, n) { if (Array.isArray(e) && u(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n; if (t in e && !(t in Object.prototype)) return e[t] = n, n; var a = e.__ob__; return e._isVue || a && a.vmCount ? n : a ? (Te(a.value, t, n), a.dep.notify(), n) : (e[t] = n, n) }

            function Me(e, t) { if (Array.isArray(e) && u(t)) e.splice(t, 1);
                else { var n = e.__ob__;
                    e._isVue || n && n.vmCount || y(e, t) && (delete e[t], n && n.dep.notify()) } } ke.prototype.walk = function(e) { for (var t = Object.keys(e), n = 0; n < t.length; n++) Te(e, t[n]) }, ke.prototype.observeArray = function(e) { for (var t = 0, n = e.length; t < n; t++) Se(e[t]) };
            var Pe = N.optionMergeStrategies;

            function Oe(e, t) { if (!t) return e; for (var n, a, i, r = Object.keys(t), s = 0; s < r.length; s++) a = e[n = r[s]], i = t[n], y(e, n) ? c(a) && c(i) && Oe(a, i) : _e(e, n, i); return e }

            function Be(e, t, n) { return n ? function() { var a = "function" == typeof t ? t.call(n, n) : t,
                        i = "function" == typeof e ? e.call(n, n) : e; return a ? Oe(a, i) : i } : t ? e ? function() { return Oe("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e) } : t : e }

            function Ie(e, t) { return t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e }

            function Ae(e, t, n, a) { var i = Object.create(e || null); return t ? _(i, t) : i } Pe.data = function(e, t, n) { return n ? Be(e, t, n) : t && "function" != typeof t ? e : Be(e, t) }, z.forEach(function(e) { Pe[e] = Ie }), R.forEach(function(e) { Pe[e + "s"] = Ae }), Pe.watch = function(e, t, n, a) { if (e === Z && (e = void 0), t === Z && (t = void 0), !t) return Object.create(e || null); if (!e) return t; var i = {}; for (var r in _(i, e), t) { var s = i[r],
                        o = t[r];
                    s && !Array.isArray(s) && (s = [s]), i[r] = s ? s.concat(o) : Array.isArray(o) ? o : [o] } return i }, Pe.props = Pe.methods = Pe.inject = Pe.computed = function(e, t, n, a) { if (!e) return t; var i = Object.create(null); return _(i, e), t && _(i, t), i }, Pe.provide = Be;
            var Le = function(e, t) { return void 0 === t ? e : t };

            function De(e, t, n) { "function" == typeof t && (t = t.options),
                    function(e, t) { var n = e.props; if (n) { var a, i, r = {}; if (Array.isArray(n))
                                for (a = n.length; a--;) "string" == typeof(i = n[a]) && (r[x(i)] = { type: null });
                            else if (c(n))
                                for (var s in n) i = n[s], r[x(s)] = c(i) ? i : { type: i };
                            e.props = r } }(t),
                    function(e, t) { var n = e.inject; if (n) { var a = e.inject = {}; if (Array.isArray(n))
                                for (var i = 0; i < n.length; i++) a[n[i]] = { from: n[i] };
                            else if (c(n))
                                for (var r in n) { var s = n[r];
                                    a[r] = c(s) ? _({ from: r }, s) : { from: s } } } }(t),
                    function(e) { var t = e.directives; if (t)
                            for (var n in t) { var a = t[n]; "function" == typeof a && (t[n] = { bind: a, update: a }) } }(t); var a = t.extends; if (a && (e = De(e, a, n)), t.mixins)
                    for (var i = 0, r = t.mixins.length; i < r; i++) e = De(e, t.mixins[i], n); var s, o = {}; for (s in e) l(s); for (s in t) y(e, s) || l(s);

                function l(a) { var i = Pe[a] || Le;
                    o[a] = i(e[a], t[a], n, a) } return o }

            function Re(e, t, n, a) { if ("string" == typeof n) { var i = e[t]; if (y(i, n)) return i[n]; var r = x(n); if (y(i, r)) return i[r]; var s = k(r); return y(i, s) ? i[s] : i[n] || i[r] || i[s] } }

            function ze(e, t, n, a) { var i = t[e],
                    r = !y(n, e),
                    s = n[e],
                    o = He(Boolean, i.type); if (o > -1)
                    if (r && !y(i, "default")) s = !1;
                    else if ("" === s || s === $(e)) { var l = He(String, i.type);
                    (l < 0 || o < l) && (s = !0) } if (void 0 === s) { s = function(e, t, n) { if (!y(t, "default")) return; var a = t.default;
                        0; if (e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n]) return e._props[n]; return "function" == typeof a && "Function" !== Ne(t.type) ? a.call(e) : a }(a, i, e); var c = Ce;
                    xe(!0), Se(s), xe(c) } return s }

            function Ne(e) { var t = e && e.toString().match(/^\s*function (\w+)/); return t ? t[1] : "" }

            function Fe(e, t) { return Ne(e) === Ne(t) }

            function He(e, t) { if (!Array.isArray(t)) return Fe(t, e) ? 0 : -1; for (var n = 0, a = t.length; n < a; n++)
                    if (Fe(t[n], e)) return n; return -1 }

            function je(e, t, n) { if (t)
                    for (var a = t; a = a.$parent;) { var i = a.$options.errorCaptured; if (i)
                            for (var r = 0; r < i.length; r++) try { if (!1 === i[r].call(a, e, t, n)) return } catch (e) { Ve(e, a, "errorCaptured hook") } } Ve(e, t, n) }

            function Ve(e, t, n) { if (N.errorHandler) try { return N.errorHandler.call(null, e, t, n) } catch (e) { qe(e, null, "config.errorHandler") } qe(e, t, n) }

            function qe(e, t, n) { if (!W && !Y || "undefined" == typeof console) throw e;
                console.error(e) }
            var We, Ye, Ue = [],
                Ge = !1;

            function Xe() { Ge = !1; var e = Ue.slice(0);
                Ue.length = 0; for (var t = 0; t < e.length; t++) e[t]() }
            var Ke = !1;
            if ("undefined" != typeof setImmediate && ie(setImmediate)) Ye = function() { setImmediate(Xe) };
            else if ("undefined" == typeof MessageChannel || !ie(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) Ye = function() { setTimeout(Xe, 0) };
            else { var Je = new MessageChannel,
                    Qe = Je.port2;
                Je.port1.onmessage = Xe, Ye = function() { Qe.postMessage(1) } }
            if ("undefined" != typeof Promise && ie(Promise)) { var Ze = Promise.resolve();
                We = function() { Ze.then(Xe), Q && setTimeout(P) } } else We = Ye;

            function et(e, t) { var n; if (Ue.push(function() { if (e) try { e.call(t) } catch (e) { je(e, t, "nextTick") } else n && n(t) }), Ge || (Ge = !0, Ke ? Ye() : We()), !e && "undefined" != typeof Promise) return new Promise(function(e) { n = e }) }
            var tt = new re;

            function nt(e) {! function e(t, n) { var a, i; var r = Array.isArray(t); if (!r && !o(t) || Object.isFrozen(t) || t instanceof he) return; if (t.__ob__) { var s = t.__ob__.dep.id; if (n.has(s)) return;
                        n.add(s) } if (r)
                        for (a = t.length; a--;) e(t[a], n);
                    else
                        for (i = Object.keys(t), a = i.length; a--;) e(t[i[a]], n) }(e, tt), tt.clear() }
            var at, it = w(function(e) { var t = "&" === e.charAt(0),
                    n = "~" === (e = t ? e.slice(1) : e).charAt(0),
                    a = "!" === (e = n ? e.slice(1) : e).charAt(0); return { name: e = a ? e.slice(1) : e, once: n, capture: a, passive: t } });

            function rt(e) {
                function t() { var e = arguments,
                        n = t.fns; if (!Array.isArray(n)) return n.apply(null, arguments); for (var a = n.slice(), i = 0; i < a.length; i++) a[i].apply(null, e) } return t.fns = e, t }

            function st(e, t, n, i, r) { var s, o, l, c; for (s in e) o = e[s], l = t[s], c = it(s), a(o) || (a(l) ? (a(o.fns) && (o = e[s] = rt(o)), n(c.name, o, c.once, c.capture, c.passive, c.params)) : o !== l && (l.fns = o, e[s] = l)); for (s in t) a(e[s]) && i((c = it(s)).name, t[s], c.capture) }

            function ot(e, t, n) { var s;
                e instanceof he && (e = e.data.hook || (e.data.hook = {})); var o = e[t];

                function l() { n.apply(this, arguments), g(s.fns, l) } a(o) ? s = rt([l]) : i(o.fns) && r(o.merged) ? (s = o).fns.push(l) : s = rt([o, l]), s.merged = !0, e[t] = s }

            function lt(e, t, n, a, r) { if (i(t)) { if (y(t, n)) return e[n] = t[n], r || delete t[n], !0; if (y(t, a)) return e[n] = t[a], r || delete t[a], !0 } return !1 }

            function ct(e) { return s(e) ? [me(e)] : Array.isArray(e) ? function e(t, n) { var o = []; var l, c, d, u; for (l = 0; l < t.length; l++) a(c = t[l]) || "boolean" == typeof c || (d = o.length - 1, u = o[d], Array.isArray(c) ? c.length > 0 && (dt((c = e(c, (n || "") + "_" + l))[0]) && dt(u) && (o[d] = me(u.text + c[0].text), c.shift()), o.push.apply(o, c)) : s(c) ? dt(u) ? o[d] = me(u.text + c) : "" !== c && o.push(me(c)) : dt(c) && dt(u) ? o[d] = me(u.text + c.text) : (r(t._isVList) && i(c.tag) && a(c.key) && i(n) && (c.key = "__vlist" + n + "_" + l + "__"), o.push(c))); return o }(e) : void 0 }

            function dt(e) { return i(e) && i(e.text) && !1 === e.isComment }

            function ut(e, t) { return (e.__esModule || se && "Module" === e[Symbol.toStringTag]) && (e = e.default), o(e) ? t.extend(e) : e }

            function pt(e) { return e.isComment && e.asyncFactory }

            function ht(e) { if (Array.isArray(e))
                    for (var t = 0; t < e.length; t++) { var n = e[t]; if (i(n) && (i(n.componentOptions) || pt(n))) return n } }

            function ft(e, t, n) { n ? at.$once(e, t) : at.$on(e, t) }

            function vt(e, t) { at.$off(e, t) }

            function mt(e, t, n) { at = e, st(t, n || {}, ft, vt), at = void 0 }

            function gt(e, t) { var n = {}; if (!e) return n; for (var a = 0, i = e.length; a < i; a++) { var r = e[a],
                        s = r.data; if (s && s.attrs && s.attrs.slot && delete s.attrs.slot, r.context !== t && r.fnContext !== t || !s || null == s.slot)(n.default || (n.default = [])).push(r);
                    else { var o = s.slot,
                            l = n[o] || (n[o] = []); "template" === r.tag ? l.push.apply(l, r.children || []) : l.push(r) } } for (var c in n) n[c].every(bt) && delete n[c]; return n }

            function bt(e) { return e.isComment && !e.asyncFactory || " " === e.text }

            function yt(e, t) { t = t || {}; for (var n = 0; n < e.length; n++) Array.isArray(e[n]) ? yt(e[n], t) : t[e[n].key] = e[n].fn; return t }
            var wt = null;

            function Ct(e) { for (; e && (e = e.$parent);)
                    if (e._inactive) return !0; return !1 }

            function xt(e, t) { if (t) { if (e._directInactive = !1, Ct(e)) return } else if (e._directInactive) return; if (e._inactive || null === e._inactive) { e._inactive = !1; for (var n = 0; n < e.$children.length; n++) xt(e.$children[n]);
                    kt(e, "activated") } }

            function kt(e, t) { ue(); var n = e.$options[t]; if (n)
                    for (var a = 0, i = n.length; a < i; a++) try { n[a].call(e) } catch (n) { je(n, e, t + " hook") } e._hasHookEvent && e.$emit("hook:" + t), pe() }
            var Et = [],
                $t = [],
                St = {},
                Tt = !1,
                _t = !1,
                Mt = 0;

            function Pt() { var e, t; for (_t = !0, Et.sort(function(e, t) { return e.id - t.id }), Mt = 0; Mt < Et.length; Mt++) t = (e = Et[Mt]).id, St[t] = null, e.run(); var n = $t.slice(),
                    a = Et.slice();
                Mt = Et.length = $t.length = 0, St = {}, Tt = _t = !1,
                    function(e) { for (var t = 0; t < e.length; t++) e[t]._inactive = !0, xt(e[t], !0) }(n),
                    function(e) { var t = e.length; for (; t--;) { var n = e[t],
                                a = n.vm;
                            a._watcher === n && a._isMounted && kt(a, "updated") } }(a), ae && N.devtools && ae.emit("flush") }
            var Ot = 0,
                Bt = function(e, t, n, a, i) { this.vm = e, i && (e._watcher = this), e._watchers.push(this), a ? (this.deep = !!a.deep, this.user = !!a.user, this.lazy = !!a.lazy, this.sync = !!a.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++Ot, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new re, this.newDepIds = new re, this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function(e) { if (!j.test(e)) { var t = e.split("."); return function(e) { for (var n = 0; n < t.length; n++) { if (!e) return;
                                    e = e[t[n]] } return e } } }(t), this.getter || (this.getter = function() {})), this.value = this.lazy ? void 0 : this.get() };
            Bt.prototype.get = function() { var e;
                ue(this); var t = this.vm; try { e = this.getter.call(t, t) } catch (e) { if (!this.user) throw e;
                    je(e, t, 'getter for watcher "' + this.expression + '"') } finally { this.deep && nt(e), pe(), this.cleanupDeps() } return e }, Bt.prototype.addDep = function(e) { var t = e.id;
                this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this)) }, Bt.prototype.cleanupDeps = function() { for (var e = this.deps.length; e--;) { var t = this.deps[e];
                    this.newDepIds.has(t.id) || t.removeSub(this) } var n = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0 }, Bt.prototype.update = function() { this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(e) { var t = e.id; if (null == St[t]) { if (St[t] = !0, _t) { for (var n = Et.length - 1; n > Mt && Et[n].id > e.id;) n--;
                            Et.splice(n + 1, 0, e) } else Et.push(e);
                        Tt || (Tt = !0, et(Pt)) } }(this) }, Bt.prototype.run = function() { if (this.active) { var e = this.get(); if (e !== this.value || o(e) || this.deep) { var t = this.value; if (this.value = e, this.user) try { this.cb.call(this.vm, e, t) } catch (e) { je(e, this.vm, 'callback for watcher "' + this.expression + '"') } else this.cb.call(this.vm, e, t) } } }, Bt.prototype.evaluate = function() { this.value = this.get(), this.dirty = !1 }, Bt.prototype.depend = function() { for (var e = this.deps.length; e--;) this.deps[e].depend() }, Bt.prototype.teardown = function() { if (this.active) { this.vm._isBeingDestroyed || g(this.vm._watchers, this); for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
                    this.active = !1 } };
            var It = { enumerable: !0, configurable: !0, get: P, set: P };

            function At(e, t, n) { It.get = function() { return this[t][n] }, It.set = function(e) { this[t][n] = e }, Object.defineProperty(e, n, It) }

            function Lt(e) { e._watchers = []; var t = e.$options;
                t.props && function(e, t) { var n = e.$options.propsData || {},
                        a = e._props = {},
                        i = e.$options._propKeys = [];
                    e.$parent && xe(!1); var r = function(r) { i.push(r); var s = ze(r, t, n, e);
                        Te(a, r, s), r in e || At(e, "_props", r) }; for (var s in t) r(s);
                    xe(!0) }(e, t.props), t.methods && function(e, t) { e.$options.props; for (var n in t) e[n] = null == t[n] ? P : S(t[n], e) }(e, t.methods), t.data ? function(e) { var t = e.$options.data;
                    c(t = e._data = "function" == typeof t ? function(e, t) { ue(); try { return e.call(t, t) } catch (e) { return je(e, t, "data()"), {} } finally { pe() } }(t, e) : t || {}) || (t = {}); var n = Object.keys(t),
                        a = e.$options.props,
                        i = (e.$options.methods, n.length); for (; i--;) { var r = n[i];
                        0, a && y(a, r) || F(r) || At(e, "_data", r) } Se(t, !0) }(e) : Se(e._data = {}, !0), t.computed && function(e, t) { var n = e._computedWatchers = Object.create(null),
                        a = ne(); for (var i in t) { var r = t[i],
                            s = "function" == typeof r ? r : r.get;
                        0, a || (n[i] = new Bt(e, s || P, P, Dt)), i in e || Rt(e, i, r) } }(e, t.computed), t.watch && t.watch !== Z && function(e, t) { for (var n in t) { var a = t[n]; if (Array.isArray(a))
                            for (var i = 0; i < a.length; i++) Nt(e, n, a[i]);
                        else Nt(e, n, a) } }(e, t.watch) }
            var Dt = { lazy: !0 };

            function Rt(e, t, n) { var a = !ne(); "function" == typeof n ? (It.get = a ? zt(t) : n, It.set = P) : (It.get = n.get ? a && !1 !== n.cache ? zt(t) : n.get : P, It.set = n.set ? n.set : P), Object.defineProperty(e, t, It) }

            function zt(e) { return function() { var t = this._computedWatchers && this._computedWatchers[e]; if (t) return t.dirty && t.evaluate(), ce.target && t.depend(), t.value } }

            function Nt(e, t, n, a) { return c(n) && (a = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, a) }

            function Ft(e, t) { if (e) { for (var n = Object.create(null), a = se ? Reflect.ownKeys(e).filter(function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }) : Object.keys(e), i = 0; i < a.length; i++) { for (var r = a[i], s = e[r].from, o = t; o;) { if (o._provided && y(o._provided, s)) { n[r] = o._provided[s]; break } o = o.$parent } if (!o)
                            if ("default" in e[r]) { var l = e[r].default;
                                n[r] = "function" == typeof l ? l.call(t) : l } else 0 } return n } }

            function Ht(e, t) { var n, a, r, s, l; if (Array.isArray(e) || "string" == typeof e)
                    for (n = new Array(e.length), a = 0, r = e.length; a < r; a++) n[a] = t(e[a], a);
                else if ("number" == typeof e)
                    for (n = new Array(e), a = 0; a < e; a++) n[a] = t(a + 1, a);
                else if (o(e))
                    for (s = Object.keys(e), n = new Array(s.length), a = 0, r = s.length; a < r; a++) l = s[a], n[a] = t(e[l], l, a); return i(n) && (n._isVList = !0), n }

            function jt(e, t, n, a) { var i, r = this.$scopedSlots[e]; if (r) n = n || {}, a && (n = _(_({}, a), n)), i = r(n) || t;
                else { var s = this.$slots[e];
                    s && (s._rendered = !0), i = s || t } var o = n && n.slot; return o ? this.$createElement("template", { slot: o }, i) : i }

            function Vt(e) { return Re(this.$options, "filters", e) || B }

            function qt(e, t) { return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t }

            function Wt(e, t, n, a, i) { var r = N.keyCodes[t] || n; return i && a && !N.keyCodes[t] ? qt(i, a) : r ? qt(r, e) : a ? $(a) !== t : void 0 }

            function Yt(e, t, n, a, i) { if (n)
                    if (o(n)) { var r;
                        Array.isArray(n) && (n = M(n)); var s = function(s) { if ("class" === s || "style" === s || m(s)) r = e;
                            else { var o = e.attrs && e.attrs.type;
                                r = a || N.mustUseProp(t, o, s) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {}) } s in r || (r[s] = n[s], i && ((e.on || (e.on = {}))["update:" + s] = function(e) { n[s] = e })) }; for (var l in n) s(l) } else; return e }

            function Ut(e, t) { var n = this._staticTrees || (this._staticTrees = []),
                    a = n[e]; return a && !t ? a : (Xt(a = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), a) }

            function Gt(e, t, n) { return Xt(e, "__once__" + t + (n ? "_" + n : ""), !0), e }

            function Xt(e, t, n) { if (Array.isArray(e))
                    for (var a = 0; a < e.length; a++) e[a] && "string" != typeof e[a] && Kt(e[a], t + "_" + a, n);
                else Kt(e, t, n) }

            function Kt(e, t, n) { e.isStatic = !0, e.key = t, e.isOnce = n }

            function Jt(e, t) { if (t)
                    if (c(t)) { var n = e.on = e.on ? _({}, e.on) : {}; for (var a in t) { var i = n[a],
                                r = t[a];
                            n[a] = i ? [].concat(i, r) : r } } else; return e }

            function Qt(e) { e._o = Gt, e._n = h, e._s = p, e._l = Ht, e._t = jt, e._q = I, e._i = A, e._m = Ut, e._f = Vt, e._k = Wt, e._b = Yt, e._v = me, e._e = ve, e._u = yt, e._g = Jt }

            function Zt(e, t, a, i, s) { var o, l = s.options;
                y(i, "_uid") ? (o = Object.create(i))._original = i : (o = i, i = i._original); var c = r(l._compiled),
                    d = !c;
                this.data = e, this.props = t, this.children = a, this.parent = i, this.listeners = e.on || n, this.injections = Ft(l.inject, i), this.slots = function() { return gt(a, i) }, c && (this.$options = l, this.$slots = this.slots(), this.$scopedSlots = e.scopedSlots || n), l._scopeId ? this._c = function(e, t, n, a) { var r = ln(o, e, t, n, a, d); return r && !Array.isArray(r) && (r.fnScopeId = l._scopeId, r.fnContext = i), r } : this._c = function(e, t, n, a) { return ln(o, e, t, n, a, d) } }

            function en(e, t, n, a) { var i = ge(e); return i.fnContext = n, i.fnOptions = a, t.slot && ((i.data || (i.data = {})).slot = t.slot), i }

            function tn(e, t) { for (var n in t) e[x(n)] = t[n] } Qt(Zt.prototype);
            var nn = { init: function(e, t, n, a) { if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) { var r = e;
                            nn.prepatch(r, r) } else {
                            (e.componentInstance = function(e, t, n, a) { var r = { _isComponent: !0, parent: t, _parentVnode: e, _parentElm: n || null, _refElm: a || null },
                                    s = e.data.inlineTemplate;
                                i(s) && (r.render = s.render, r.staticRenderFns = s.staticRenderFns); return new e.componentOptions.Ctor(r) }(e, wt, n, a)).$mount(t ? e.elm : void 0, t) } }, prepatch: function(e, t) { var a = t.componentOptions;! function(e, t, a, i, r) { var s = !!(r || e.$options._renderChildren || i.data.scopedSlots || e.$scopedSlots !== n); if (e.$options._parentVnode = i, e.$vnode = i, e._vnode && (e._vnode.parent = i), e.$options._renderChildren = r, e.$attrs = i.data.attrs || n, e.$listeners = a || n, t && e.$options.props) { xe(!1); for (var o = e._props, l = e.$options._propKeys || [], c = 0; c < l.length; c++) { var d = l[c],
                                        u = e.$options.props;
                                    o[d] = ze(d, u, t, e) } xe(!0), e.$options.propsData = t } a = a || n; var p = e.$options._parentListeners;
                            e.$options._parentListeners = a, mt(e, a, p), s && (e.$slots = gt(r, i.context), e.$forceUpdate()) }(t.componentInstance = e.componentInstance, a.propsData, a.listeners, t, a.children) }, insert: function(e) { var t, n = e.context,
                            a = e.componentInstance;
                        a._isMounted || (a._isMounted = !0, kt(a, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = a)._inactive = !1, $t.push(t)) : xt(a, !0)) }, destroy: function(e) { var t = e.componentInstance;
                        t._isDestroyed || (e.data.keepAlive ? function e(t, n) { if (!(n && (t._directInactive = !0, Ct(t)) || t._inactive)) { t._inactive = !0; for (var a = 0; a < t.$children.length; a++) e(t.$children[a]);
                                kt(t, "deactivated") } }(t, !0) : t.$destroy()) } },
                an = Object.keys(nn);

            function rn(e, t, s, l, c) { if (!a(e)) { var d = s.$options._base; if (o(e) && (e = d.extend(e)), "function" == typeof e) { var u; if (a(e.cid) && void 0 === (e = function(e, t, n) { if (r(e.error) && i(e.errorComp)) return e.errorComp; if (i(e.resolved)) return e.resolved; if (r(e.loading) && i(e.loadingComp)) return e.loadingComp; if (!i(e.contexts)) { var s = e.contexts = [n],
                                        l = !0,
                                        c = function() { for (var e = 0, t = s.length; e < t; e++) s[e].$forceUpdate() },
                                        d = L(function(n) { e.resolved = ut(n, t), l || c() }),
                                        u = L(function(t) { i(e.errorComp) && (e.error = !0, c()) }),
                                        p = e(d, u); return o(p) && ("function" == typeof p.then ? a(e.resolved) && p.then(d, u) : i(p.component) && "function" == typeof p.component.then && (p.component.then(d, u), i(p.error) && (e.errorComp = ut(p.error, t)), i(p.loading) && (e.loadingComp = ut(p.loading, t), 0 === p.delay ? e.loading = !0 : setTimeout(function() { a(e.resolved) && a(e.error) && (e.loading = !0, c()) }, p.delay || 200)), i(p.timeout) && setTimeout(function() { a(e.resolved) && u(null) }, p.timeout))), l = !1, e.loading ? e.loadingComp : e.resolved } e.contexts.push(n) }(u = e, d, s))) return function(e, t, n, a, i) { var r = ve(); return r.asyncFactory = e, r.asyncMeta = { data: t, context: n, children: a, tag: i }, r }(u, t, s, l, c);
                        t = t || {}, dn(e), i(t.model) && function(e, t) { var n = e.model && e.model.prop || "value",
                                a = e.model && e.model.event || "input";
                            (t.props || (t.props = {}))[n] = t.model.value; var r = t.on || (t.on = {});
                            i(r[a]) ? r[a] = [t.model.callback].concat(r[a]) : r[a] = t.model.callback }(e.options, t); var p = function(e, t, n) { var r = t.options.props; if (!a(r)) { var s = {},
                                    o = e.attrs,
                                    l = e.props; if (i(o) || i(l))
                                    for (var c in r) { var d = $(c);
                                        lt(s, l, c, d, !0) || lt(s, o, c, d, !1) }
                                return s } }(t, e); if (r(e.options.functional)) return function(e, t, a, r, s) { var o = e.options,
                                l = {},
                                c = o.props; if (i(c))
                                for (var d in c) l[d] = ze(d, c, t || n);
                            else i(a.attrs) && tn(l, a.attrs), i(a.props) && tn(l, a.props); var u = new Zt(a, l, s, r, e),
                                p = o.render.call(null, u._c, u); if (p instanceof he) return en(p, a, u.parent, o); if (Array.isArray(p)) { for (var h = ct(p) || [], f = new Array(h.length), v = 0; v < h.length; v++) f[v] = en(h[v], a, u.parent, o); return f } }(e, p, t, s, l); var h = t.on; if (t.on = t.nativeOn, r(e.options.abstract)) { var f = t.slot;
                            t = {}, f && (t.slot = f) }! function(e) { for (var t = e.hook || (e.hook = {}), n = 0; n < an.length; n++) { var a = an[n];
                                t[a] = nn[a] } }(t); var v = e.options.name || c; return new he("vue-component-" + e.cid + (v ? "-" + v : ""), t, void 0, void 0, void 0, s, { Ctor: e, propsData: p, listeners: h, tag: c, children: l }, u) } } }
            var sn = 1,
                on = 2;

            function ln(e, t, n, l, c, d) { return (Array.isArray(n) || s(n)) && (c = l, l = n, n = void 0), r(d) && (c = on),
                    function(e, t, n, s, l) { if (i(n) && i(n.__ob__)) return ve();
                        i(n) && i(n.is) && (t = n.is); if (!t) return ve();
                        0;
                        Array.isArray(s) && "function" == typeof s[0] && ((n = n || {}).scopedSlots = { default: s[0] }, s.length = 0);
                        l === on ? s = ct(s) : l === sn && (s = function(e) { for (var t = 0; t < e.length; t++)
                                if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e); return e }(s)); var c, d; if ("string" == typeof t) { var u;
                            d = e.$vnode && e.$vnode.ns || N.getTagNamespace(t), c = N.isReservedTag(t) ? new he(N.parsePlatformTagName(t), n, s, void 0, void 0, e) : i(u = Re(e.$options, "components", t)) ? rn(u, n, e, s, t) : new he(t, n, s, void 0, void 0, e) } else c = rn(t, n, e, s); return Array.isArray(c) ? c : i(c) ? (i(d) && function e(t, n, s) { t.ns = n; "foreignObject" === t.tag && (n = void 0, s = !0); if (i(t.children))
                                for (var o = 0, l = t.children.length; o < l; o++) { var c = t.children[o];
                                    i(c.tag) && (a(c.ns) || r(s) && "svg" !== c.tag) && e(c, n, s) } }(c, d), i(n) && function(e) { o(e.style) && nt(e.style);
                            o(e.class) && nt(e.class) }(n), c) : ve() }(e, t, n, l, c) }
            var cn = 0;

            function dn(e) { var t = e.options; if (e.super) { var n = dn(e.super); if (n !== e.superOptions) { e.superOptions = n; var a = function(e) { var t, n = e.options,
                                a = e.extendOptions,
                                i = e.sealedOptions; for (var r in n) n[r] !== i[r] && (t || (t = {}), t[r] = un(n[r], a[r], i[r])); return t }(e);
                        a && _(e.extendOptions, a), (t = e.options = De(n, e.extendOptions)).name && (t.components[t.name] = e) } } return t }

            function un(e, t, n) { if (Array.isArray(e)) { var a = [];
                    n = Array.isArray(n) ? n : [n], t = Array.isArray(t) ? t : [t]; for (var i = 0; i < e.length; i++)(t.indexOf(e[i]) >= 0 || n.indexOf(e[i]) < 0) && a.push(e[i]); return a } return e }

            function pn(e) { this._init(e) }

            function hn(e) { e.cid = 0; var t = 1;
                e.extend = function(e) { e = e || {}; var n = this,
                        a = n.cid,
                        i = e._Ctor || (e._Ctor = {}); if (i[a]) return i[a]; var r = e.name || n.options.name; var s = function(e) { this._init(e) }; return (s.prototype = Object.create(n.prototype)).constructor = s, s.cid = t++, s.options = De(n.options, e), s.super = n, s.options.props && function(e) { var t = e.options.props; for (var n in t) At(e.prototype, "_props", n) }(s), s.options.computed && function(e) { var t = e.options.computed; for (var n in t) Rt(e.prototype, n, t[n]) }(s), s.extend = n.extend, s.mixin = n.mixin, s.use = n.use, R.forEach(function(e) { s[e] = n[e] }), r && (s.options.components[r] = s), s.superOptions = n.options, s.extendOptions = e, s.sealedOptions = _({}, s.options), i[a] = s, s } }

            function fn(e) { return e && (e.Ctor.options.name || e.tag) }

            function vn(e, t) { return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!d(e) && e.test(t) }

            function mn(e, t) { var n = e.cache,
                    a = e.keys,
                    i = e._vnode; for (var r in n) { var s = n[r]; if (s) { var o = fn(s.componentOptions);
                        o && !t(o) && gn(n, r, a, i) } } }

            function gn(e, t, n, a) { var i = e[t];!i || a && i.tag === a.tag || i.componentInstance.$destroy(), e[t] = null, g(n, t) }! function(e) { e.prototype._init = function(e) { var t = this;
                    t._uid = cn++, t._isVue = !0, e && e._isComponent ? function(e, t) { var n = e.$options = Object.create(e.constructor.options),
                                a = t._parentVnode;
                            n.parent = t.parent, n._parentVnode = a, n._parentElm = t._parentElm, n._refElm = t._refElm; var i = a.componentOptions;
                            n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns) }(t, e) : t.$options = De(dn(t.constructor), e || {}, t), t._renderProxy = t, t._self = t,
                        function(e) { var t = e.$options,
                                n = t.parent; if (n && !t.abstract) { for (; n.$options.abstract && n.$parent;) n = n.$parent;
                                n.$children.push(e) } e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1 }(t),
                        function(e) { e._events = Object.create(null), e._hasHookEvent = !1; var t = e.$options._parentListeners;
                            t && mt(e, t) }(t),
                        function(e) { e._vnode = null, e._staticTrees = null; var t = e.$options,
                                a = e.$vnode = t._parentVnode,
                                i = a && a.context;
                            e.$slots = gt(t._renderChildren, i), e.$scopedSlots = n, e._c = function(t, n, a, i) { return ln(e, t, n, a, i, !1) }, e.$createElement = function(t, n, a, i) { return ln(e, t, n, a, i, !0) }; var r = a && a.data;
                            Te(e, "$attrs", r && r.attrs || n, null, !0), Te(e, "$listeners", t._parentListeners || n, null, !0) }(t), kt(t, "beforeCreate"),
                        function(e) { var t = Ft(e.$options.inject, e);
                            t && (xe(!1), Object.keys(t).forEach(function(n) { Te(e, n, t[n]) }), xe(!0)) }(t), Lt(t),
                        function(e) { var t = e.$options.provide;
                            t && (e._provided = "function" == typeof t ? t.call(e) : t) }(t), kt(t, "created"), t.$options.el && t.$mount(t.$options.el) } }(pn),
            function(e) { var t = { get: function() { return this._data } },
                    n = { get: function() { return this._props } };
                Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = _e, e.prototype.$delete = Me, e.prototype.$watch = function(e, t, n) { if (c(t)) return Nt(this, e, t, n);
                    (n = n || {}).user = !0; var a = new Bt(this, e, t, n); return n.immediate && t.call(this, a.value),
                        function() { a.teardown() } } }(pn),
            function(e) { var t = /^hook:/;
                e.prototype.$on = function(e, n) { if (Array.isArray(e))
                        for (var a = 0, i = e.length; a < i; a++) this.$on(e[a], n);
                    else(this._events[e] || (this._events[e] = [])).push(n), t.test(e) && (this._hasHookEvent = !0); return this }, e.prototype.$once = function(e, t) { var n = this;

                    function a() { n.$off(e, a), t.apply(n, arguments) } return a.fn = t, n.$on(e, a), n }, e.prototype.$off = function(e, t) { var n = this; if (!arguments.length) return n._events = Object.create(null), n; if (Array.isArray(e)) { for (var a = 0, i = e.length; a < i; a++) this.$off(e[a], t); return n } var r = n._events[e]; if (!r) return n; if (!t) return n._events[e] = null, n; if (t)
                        for (var s, o = r.length; o--;)
                            if ((s = r[o]) === t || s.fn === t) { r.splice(o, 1); break }
                    return n }, e.prototype.$emit = function(e) { var t = this,
                        n = t._events[e]; if (n) { n = n.length > 1 ? T(n) : n; for (var a = T(arguments, 1), i = 0, r = n.length; i < r; i++) try { n[i].apply(t, a) } catch (n) { je(n, t, 'event handler for "' + e + '"') } } return t } }(pn),
            function(e) { e.prototype._update = function(e, t) { var n = this;
                    n._isMounted && kt(n, "beforeUpdate"); var a = n.$el,
                        i = n._vnode,
                        r = wt;
                    wt = n, n._vnode = e, i ? n.$el = n.__patch__(i, e) : (n.$el = n.__patch__(n.$el, e, t, !1, n.$options._parentElm, n.$options._refElm), n.$options._parentElm = n.$options._refElm = null), wt = r, a && (a.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el) }, e.prototype.$forceUpdate = function() { this._watcher && this._watcher.update() }, e.prototype.$destroy = function() { var e = this; if (!e._isBeingDestroyed) { kt(e, "beforeDestroy"), e._isBeingDestroyed = !0; var t = e.$parent;!t || t._isBeingDestroyed || e.$options.abstract || g(t.$children, e), e._watcher && e._watcher.teardown(); for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
                        e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), kt(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null) } } }(pn),
            function(e) { Qt(e.prototype), e.prototype.$nextTick = function(e) { return et(e, this) }, e.prototype._render = function() { var e, t = this,
                        a = t.$options,
                        i = a.render,
                        r = a._parentVnode;
                    r && (t.$scopedSlots = r.data.scopedSlots || n), t.$vnode = r; try { e = i.call(t._renderProxy, t.$createElement) } catch (n) { je(n, t, "render"), e = t._vnode } return e instanceof he || (e = ve()), e.parent = r, e } }(pn);
            var bn = [String, RegExp, Array],
                yn = { KeepAlive: { name: "keep-alive", abstract: !0, props: { include: bn, exclude: bn, max: [String, Number] }, created: function() { this.cache = Object.create(null), this.keys = [] }, destroyed: function() { for (var e in this.cache) gn(this.cache, e, this.keys) }, mounted: function() { var e = this;
                            this.$watch("include", function(t) { mn(e, function(e) { return vn(t, e) }) }), this.$watch("exclude", function(t) { mn(e, function(e) { return !vn(t, e) }) }) }, render: function() { var e = this.$slots.default,
                                t = ht(e),
                                n = t && t.componentOptions; if (n) { var a = fn(n),
                                    i = this.include,
                                    r = this.exclude; if (i && (!a || !vn(i, a)) || r && a && vn(r, a)) return t; var s = this.cache,
                                    o = this.keys,
                                    l = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                                s[l] ? (t.componentInstance = s[l].componentInstance, g(o, l), o.push(l)) : (s[l] = t, o.push(l), this.max && o.length > parseInt(this.max) && gn(s, o[0], o, this._vnode)), t.data.keepAlive = !0 } return t || e && e[0] } } };
            ! function(e) { var t = { get: function() { return N } };
                Object.defineProperty(e, "config", t), e.util = { warn: oe, extend: _, mergeOptions: De, defineReactive: Te }, e.set = _e, e.delete = Me, e.nextTick = et, e.options = Object.create(null), R.forEach(function(t) { e.options[t + "s"] = Object.create(null) }), e.options._base = e, _(e.options.components, yn),
                    function(e) { e.use = function(e) { var t = this._installedPlugins || (this._installedPlugins = []); if (t.indexOf(e) > -1) return this; var n = T(arguments, 1); return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this } }(e),
                    function(e) { e.mixin = function(e) { return this.options = De(this.options, e), this } }(e), hn(e),
                    function(e) { R.forEach(function(t) { e[t] = function(e, n) { return n ? ("component" === t && c(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = { bind: n, update: n }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e] } }) }(e) }(pn), Object.defineProperty(pn.prototype, "$isServer", { get: ne }), Object.defineProperty(pn.prototype, "$ssrContext", { get: function() { return this.$vnode && this.$vnode.ssrContext } }), Object.defineProperty(pn, "FunctionalRenderContext", { value: Zt }), pn.version = "2.5.16";
            var wn = f("style,class"),
                Cn = f("input,textarea,option,select,progress"),
                xn = function(e, t, n) { return "value" === n && Cn(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e },
                kn = f("contenteditable,draggable,spellcheck"),
                En = f("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
                $n = "http://www.w3.org/1999/xlink",
                Sn = function(e) { return ":" === e.charAt(5) && "xlink" === e.slice(0, 5) },
                Tn = function(e) { return Sn(e) ? e.slice(6, e.length) : "" },
                _n = function(e) { return null == e || !1 === e };

            function Mn(e) { for (var t = e.data, n = e, a = e; i(a.componentInstance);)(a = a.componentInstance._vnode) && a.data && (t = Pn(a.data, t)); for (; i(n = n.parent);) n && n.data && (t = Pn(t, n.data)); return function(e, t) { if (i(e) || i(t)) return On(e, Bn(t)); return "" }(t.staticClass, t.class) }

            function Pn(e, t) { return { staticClass: On(e.staticClass, t.staticClass), class: i(e.class) ? [e.class, t.class] : t.class } }

            function On(e, t) { return e ? t ? e + " " + t : e : t || "" }

            function Bn(e) { return Array.isArray(e) ? function(e) { for (var t, n = "", a = 0, r = e.length; a < r; a++) i(t = Bn(e[a])) && "" !== t && (n && (n += " "), n += t); return n }(e) : o(e) ? function(e) { var t = ""; for (var n in e) e[n] && (t && (t += " "), t += n); return t }(e) : "string" == typeof e ? e : "" }
            var In = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
                An = f("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
                Ln = f("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
                Dn = function(e) { return An(e) || Ln(e) };

            function Rn(e) { return Ln(e) ? "svg" : "math" === e ? "math" : void 0 }
            var zn = Object.create(null);
            var Nn = f("text,number,password,search,email,tel,url");

            function Fn(e) { if ("string" == typeof e) { var t = document.querySelector(e); return t || document.createElement("div") } return e }
            var Hn = Object.freeze({ createElement: function(e, t) { var n = document.createElement(e); return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n) }, createElementNS: function(e, t) { return document.createElementNS(In[e], t) }, createTextNode: function(e) { return document.createTextNode(e) }, createComment: function(e) { return document.createComment(e) }, insertBefore: function(e, t, n) { e.insertBefore(t, n) }, removeChild: function(e, t) { e.removeChild(t) }, appendChild: function(e, t) { e.appendChild(t) }, parentNode: function(e) { return e.parentNode }, nextSibling: function(e) { return e.nextSibling }, tagName: function(e) { return e.tagName }, setTextContent: function(e, t) { e.textContent = t }, setStyleScope: function(e, t) { e.setAttribute(t, "") } }),
                jn = { create: function(e, t) { Vn(t) }, update: function(e, t) { e.data.ref !== t.data.ref && (Vn(e, !0), Vn(t)) }, destroy: function(e) { Vn(e, !0) } };

            function Vn(e, t) { var n = e.data.ref; if (i(n)) { var a = e.context,
                        r = e.componentInstance || e.elm,
                        s = a.$refs;
                    t ? Array.isArray(s[n]) ? g(s[n], r) : s[n] === r && (s[n] = void 0) : e.data.refInFor ? Array.isArray(s[n]) ? s[n].indexOf(r) < 0 && s[n].push(r) : s[n] = [r] : s[n] = r } }
            var qn = new he("", {}, []),
                Wn = ["create", "activate", "update", "remove", "destroy"];

            function Yn(e, t) { return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && i(e.data) === i(t.data) && function(e, t) { if ("input" !== e.tag) return !0; var n, a = i(n = e.data) && i(n = n.attrs) && n.type,
                        r = i(n = t.data) && i(n = n.attrs) && n.type; return a === r || Nn(a) && Nn(r) }(e, t) || r(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && a(t.asyncFactory.error)) }

            function Un(e, t, n) { var a, r, s = {}; for (a = t; a <= n; ++a) i(r = e[a].key) && (s[r] = a); return s }
            var Gn = { create: Xn, update: Xn, destroy: function(e) { Xn(e, qn) } };

            function Xn(e, t) {
                (e.data.directives || t.data.directives) && function(e, t) { var n, a, i, r = e === qn,
                        s = t === qn,
                        o = Jn(e.data.directives, e.context),
                        l = Jn(t.data.directives, t.context),
                        c = [],
                        d = []; for (n in l) a = o[n], i = l[n], a ? (i.oldValue = a.value, Zn(i, "update", t, e), i.def && i.def.componentUpdated && d.push(i)) : (Zn(i, "bind", t, e), i.def && i.def.inserted && c.push(i)); if (c.length) { var u = function() { for (var n = 0; n < c.length; n++) Zn(c[n], "inserted", t, e) };
                        r ? ot(t, "insert", u) : u() } d.length && ot(t, "postpatch", function() { for (var n = 0; n < d.length; n++) Zn(d[n], "componentUpdated", t, e) }); if (!r)
                        for (n in o) l[n] || Zn(o[n], "unbind", e, e, s) }(e, t) }
            var Kn = Object.create(null);

            function Jn(e, t) { var n, a, i = Object.create(null); if (!e) return i; for (n = 0; n < e.length; n++)(a = e[n]).modifiers || (a.modifiers = Kn), i[Qn(a)] = a, a.def = Re(t.$options, "directives", a.name); return i }

            function Qn(e) { return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".") }

            function Zn(e, t, n, a, i) { var r = e.def && e.def[t]; if (r) try { r(n.elm, e, n, a, i) } catch (a) { je(a, n.context, "directive " + e.name + " " + t + " hook") } }
            var ea = [jn, Gn];

            function ta(e, t) { var n = t.componentOptions; if (!(i(n) && !1 === n.Ctor.options.inheritAttrs || a(e.data.attrs) && a(t.data.attrs))) { var r, s, o = t.elm,
                        l = e.data.attrs || {},
                        c = t.data.attrs || {}; for (r in i(c.__ob__) && (c = t.data.attrs = _({}, c)), c) s = c[r], l[r] !== s && na(o, r, s); for (r in (X || J) && c.value !== l.value && na(o, "value", c.value), l) a(c[r]) && (Sn(r) ? o.removeAttributeNS($n, Tn(r)) : kn(r) || o.removeAttribute(r)) } }

            function na(e, t, n) { e.tagName.indexOf("-") > -1 ? aa(e, t, n) : En(t) ? _n(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : kn(t) ? e.setAttribute(t, _n(n) || "false" === n ? "false" : "true") : Sn(t) ? _n(n) ? e.removeAttributeNS($n, Tn(t)) : e.setAttributeNS($n, t, n) : aa(e, t, n) }

            function aa(e, t, n) { if (_n(n)) e.removeAttribute(t);
                else { if (X && !K && "TEXTAREA" === e.tagName && "placeholder" === t && !e.__ieph) { var a = function(t) { t.stopImmediatePropagation(), e.removeEventListener("input", a) };
                        e.addEventListener("input", a), e.__ieph = !0 } e.setAttribute(t, n) } }
            var ia = { create: ta, update: ta };

            function ra(e, t) { var n = t.elm,
                    r = t.data,
                    s = e.data; if (!(a(r.staticClass) && a(r.class) && (a(s) || a(s.staticClass) && a(s.class)))) { var o = Mn(t),
                        l = n._transitionClasses;
                    i(l) && (o = On(o, Bn(l))), o !== n._prevClass && (n.setAttribute("class", o), n._prevClass = o) } }
            var sa, oa, la, ca, da, ua, pa = { create: ra, update: ra },
                ha = /[\w).+\-_$\]]/;

            function fa(e) { var t, n, a, i, r, s = !1,
                    o = !1,
                    l = !1,
                    c = !1,
                    d = 0,
                    u = 0,
                    p = 0,
                    h = 0; for (a = 0; a < e.length; a++)
                    if (n = t, t = e.charCodeAt(a), s) 39 === t && 92 !== n && (s = !1);
                    else if (o) 34 === t && 92 !== n && (o = !1);
                else if (l) 96 === t && 92 !== n && (l = !1);
                else if (c) 47 === t && 92 !== n && (c = !1);
                else if (124 !== t || 124 === e.charCodeAt(a + 1) || 124 === e.charCodeAt(a - 1) || d || u || p) { switch (t) {
                        case 34:
                            o = !0; break;
                        case 39:
                            s = !0; break;
                        case 96:
                            l = !0; break;
                        case 40:
                            p++; break;
                        case 41:
                            p--; break;
                        case 91:
                            u++; break;
                        case 93:
                            u--; break;
                        case 123:
                            d++; break;
                        case 125:
                            d-- } if (47 === t) { for (var f = a - 1, v = void 0; f >= 0 && " " === (v = e.charAt(f)); f--);
                        v && ha.test(v) || (c = !0) } } else void 0 === i ? (h = a + 1, i = e.slice(0, a).trim()) : m();

                function m() {
                    (r || (r = [])).push(e.slice(h, a).trim()), h = a + 1 } if (void 0 === i ? i = e.slice(0, a).trim() : 0 !== h && m(), r)
                    for (a = 0; a < r.length; a++) i = va(i, r[a]); return i }

            function va(e, t) { var n = t.indexOf("("); if (n < 0) return '_f("' + t + '")(' + e + ")"; var a = t.slice(0, n),
                    i = t.slice(n + 1); return '_f("' + a + '")(' + e + (")" !== i ? "," + i : i) }

            function ma(e) { console.error("[Vue compiler]: " + e) }

            function ga(e, t) { return e ? e.map(function(e) { return e[t] }).filter(function(e) { return e }) : [] }

            function ba(e, t, n) {
                (e.props || (e.props = [])).push({ name: t, value: n }), e.plain = !1 }

            function ya(e, t, n) {
                (e.attrs || (e.attrs = [])).push({ name: t, value: n }), e.plain = !1 }

            function wa(e, t, n) { e.attrsMap[t] = n, e.attrsList.push({ name: t, value: n }) }

            function Ca(e, t, n, a, i, r) {
                (e.directives || (e.directives = [])).push({ name: t, rawName: n, value: a, arg: i, modifiers: r }), e.plain = !1 }

            function xa(e, t, a, i, r, s) { var o;
                (i = i || n).capture && (delete i.capture, t = "!" + t), i.once && (delete i.once, t = "~" + t), i.passive && (delete i.passive, t = "&" + t), "click" === t && (i.right ? (t = "contextmenu", delete i.right) : i.middle && (t = "mouseup")), i.native ? (delete i.native, o = e.nativeEvents || (e.nativeEvents = {})) : o = e.events || (e.events = {}); var l = { value: a.trim() };
                i !== n && (l.modifiers = i); var c = o[t];
                Array.isArray(c) ? r ? c.unshift(l) : c.push(l) : o[t] = c ? r ? [l, c] : [c, l] : l, e.plain = !1 }

            function ka(e, t, n) { var a = Ea(e, ":" + t) || Ea(e, "v-bind:" + t); if (null != a) return fa(a); if (!1 !== n) { var i = Ea(e, t); if (null != i) return JSON.stringify(i) } }

            function Ea(e, t, n) { var a; if (null != (a = e.attrsMap[t]))
                    for (var i = e.attrsList, r = 0, s = i.length; r < s; r++)
                        if (i[r].name === t) { i.splice(r, 1); break }
                return n && delete e.attrsMap[t], a }

            function $a(e, t, n) { var a = n || {},
                    i = a.number,
                    r = "$$v";
                a.trim && (r = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (r = "_n(" + r + ")"); var s = Sa(t, r);
                e.model = { value: "(" + t + ")", expression: '"' + t + '"', callback: "function ($$v) {" + s + "}" } }

            function Sa(e, t) { var n = function(e) { if (e = e.trim(), sa = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < sa - 1) return (ca = e.lastIndexOf(".")) > -1 ? { exp: e.slice(0, ca), key: '"' + e.slice(ca + 1) + '"' } : { exp: e, key: null };
                    oa = e, ca = da = ua = 0; for (; !_a();) Ma(la = Ta()) ? Oa(la) : 91 === la && Pa(la); return { exp: e.slice(0, da), key: e.slice(da + 1, ua) } }(e); return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")" }

            function Ta() { return oa.charCodeAt(++ca) }

            function _a() { return ca >= sa }

            function Ma(e) { return 34 === e || 39 === e }

            function Pa(e) { var t = 1; for (da = ca; !_a();)
                    if (Ma(e = Ta())) Oa(e);
                    else if (91 === e && t++, 93 === e && t--, 0 === t) { ua = ca; break } }

            function Oa(e) { for (var t = e; !_a() && (e = Ta()) !== t;); }
            var Ba, Ia = "__r",
                Aa = "__c";

            function La(e, t, n, a, i) { var r;
                t = (r = t)._withTask || (r._withTask = function() { Ke = !0; var e = r.apply(null, arguments); return Ke = !1, e }), n && (t = function(e, t, n) { var a = Ba; return function i() { null !== e.apply(null, arguments) && Da(t, i, n, a) } }(t, e, a)), Ba.addEventListener(e, t, ee ? { capture: a, passive: i } : a) }

            function Da(e, t, n, a) {
                (a || Ba).removeEventListener(e, t._withTask || t, n) }

            function Ra(e, t) { if (!a(e.data.on) || !a(t.data.on)) { var n = t.data.on || {},
                        r = e.data.on || {};
                    Ba = t.elm,
                        function(e) { if (i(e[Ia])) { var t = X ? "change" : "input";
                                e[t] = [].concat(e[Ia], e[t] || []), delete e[Ia] } i(e[Aa]) && (e.change = [].concat(e[Aa], e.change || []), delete e[Aa]) }(n), st(n, r, La, Da, t.context), Ba = void 0 } }
            var za = { create: Ra, update: Ra };

            function Na(e, t) { if (!a(e.data.domProps) || !a(t.data.domProps)) { var n, r, s = t.elm,
                        o = e.data.domProps || {},
                        l = t.data.domProps || {}; for (n in i(l.__ob__) && (l = t.data.domProps = _({}, l)), o) a(l[n]) && (s[n] = ""); for (n in l) { if (r = l[n], "textContent" === n || "innerHTML" === n) { if (t.children && (t.children.length = 0), r === o[n]) continue;
                            1 === s.childNodes.length && s.removeChild(s.childNodes[0]) } if ("value" === n) { s._value = r; var c = a(r) ? "" : String(r);
                            Fa(s, c) && (s.value = c) } else s[n] = r } } }

            function Fa(e, t) { return !e.composing && ("OPTION" === e.tagName || function(e, t) { var n = !0; try { n = document.activeElement !== e } catch (e) {} return n && e.value !== t }(e, t) || function(e, t) { var n = e.value,
                        a = e._vModifiers; if (i(a)) { if (a.lazy) return !1; if (a.number) return h(n) !== h(t); if (a.trim) return n.trim() !== t.trim() } return n !== t }(e, t)) }
            var Ha = { create: Na, update: Na },
                ja = w(function(e) { var t = {},
                        n = /:(.+)/; return e.split(/;(?![^(]*\))/g).forEach(function(e) { if (e) { var a = e.split(n);
                            a.length > 1 && (t[a[0].trim()] = a[1].trim()) } }), t });

            function Va(e) { var t = qa(e.style); return e.staticStyle ? _(e.staticStyle, t) : t }

            function qa(e) { return Array.isArray(e) ? M(e) : "string" == typeof e ? ja(e) : e }
            var Wa, Ya = /^--/,
                Ua = /\s*!important$/,
                Ga = function(e, t, n) { if (Ya.test(t)) e.style.setProperty(t, n);
                    else if (Ua.test(n)) e.style.setProperty(t, n.replace(Ua, ""), "important");
                    else { var a = Ka(t); if (Array.isArray(n))
                            for (var i = 0, r = n.length; i < r; i++) e.style[a] = n[i];
                        else e.style[a] = n } },
                Xa = ["Webkit", "Moz", "ms"],
                Ka = w(function(e) { if (Wa = Wa || document.createElement("div").style, "filter" !== (e = x(e)) && e in Wa) return e; for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < Xa.length; n++) { var a = Xa[n] + t; if (a in Wa) return a } });

            function Ja(e, t) { var n = t.data,
                    r = e.data; if (!(a(n.staticStyle) && a(n.style) && a(r.staticStyle) && a(r.style))) { var s, o, l = t.elm,
                        c = r.staticStyle,
                        d = r.normalizedStyle || r.style || {},
                        u = c || d,
                        p = qa(t.data.style) || {};
                    t.data.normalizedStyle = i(p.__ob__) ? _({}, p) : p; var h = function(e, t) { var n, a = {}; if (t)
                            for (var i = e; i.componentInstance;)(i = i.componentInstance._vnode) && i.data && (n = Va(i.data)) && _(a, n);
                        (n = Va(e.data)) && _(a, n); for (var r = e; r = r.parent;) r.data && (n = Va(r.data)) && _(a, n); return a }(t, !0); for (o in u) a(h[o]) && Ga(l, o, ""); for (o in h)(s = h[o]) !== u[o] && Ga(l, o, null == s ? "" : s) } }
            var Qa = { create: Ja, update: Ja };

            function Za(e, t) { if (t && (t = t.trim()))
                    if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) { return e.classList.add(t) }) : e.classList.add(t);
                    else { var n = " " + (e.getAttribute("class") || "") + " ";
                        n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim()) } }

            function ei(e, t) { if (t && (t = t.trim()))
                    if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) { return e.classList.remove(t) }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");
                    else { for (var n = " " + (e.getAttribute("class") || "") + " ", a = " " + t + " "; n.indexOf(a) >= 0;) n = n.replace(a, " ");
                        (n = n.trim()) ? e.setAttribute("class", n): e.removeAttribute("class") } }

            function ti(e) { if (e) { if ("object" == typeof e) { var t = {}; return !1 !== e.css && _(t, ni(e.name || "v")), _(t, e), t } return "string" == typeof e ? ni(e) : void 0 } }
            var ni = w(function(e) { return { enterClass: e + "-enter", enterToClass: e + "-enter-to", enterActiveClass: e + "-enter-active", leaveClass: e + "-leave", leaveToClass: e + "-leave-to", leaveActiveClass: e + "-leave-active" } }),
                ai = W && !K,
                ii = "transition",
                ri = "animation",
                si = "transition",
                oi = "transitionend",
                li = "animation",
                ci = "animationend";
            ai && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (si = "WebkitTransition", oi = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (li = "WebkitAnimation", ci = "webkitAnimationEnd"));
            var di = W ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(e) { return e() };

            function ui(e) { di(function() { di(e) }) }

            function pi(e, t) { var n = e._transitionClasses || (e._transitionClasses = []);
                n.indexOf(t) < 0 && (n.push(t), Za(e, t)) }

            function hi(e, t) { e._transitionClasses && g(e._transitionClasses, t), ei(e, t) }

            function fi(e, t, n) { var a = mi(e, t),
                    i = a.type,
                    r = a.timeout,
                    s = a.propCount; if (!i) return n(); var o = i === ii ? oi : ci,
                    l = 0,
                    c = function() { e.removeEventListener(o, d), n() },
                    d = function(t) { t.target === e && ++l >= s && c() };
                setTimeout(function() { l < s && c() }, r + 1), e.addEventListener(o, d) }
            var vi = /\b(transform|all)(,|$)/;

            function mi(e, t) { var n, a = window.getComputedStyle(e),
                    i = a[si + "Delay"].split(", "),
                    r = a[si + "Duration"].split(", "),
                    s = gi(i, r),
                    o = a[li + "Delay"].split(", "),
                    l = a[li + "Duration"].split(", "),
                    c = gi(o, l),
                    d = 0,
                    u = 0; return t === ii ? s > 0 && (n = ii, d = s, u = r.length) : t === ri ? c > 0 && (n = ri, d = c, u = l.length) : u = (n = (d = Math.max(s, c)) > 0 ? s > c ? ii : ri : null) ? n === ii ? r.length : l.length : 0, { type: n, timeout: d, propCount: u, hasTransform: n === ii && vi.test(a[si + "Property"]) } }

            function gi(e, t) { for (; e.length < t.length;) e = e.concat(e); return Math.max.apply(null, t.map(function(t, n) { return bi(t) + bi(e[n]) })) }

            function bi(e) { return 1e3 * Number(e.slice(0, -1)) }

            function yi(e, t) { var n = e.elm;
                i(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb()); var r = ti(e.data.transition); if (!a(r) && !i(n._enterCb) && 1 === n.nodeType) { for (var s = r.css, l = r.type, c = r.enterClass, d = r.enterToClass, u = r.enterActiveClass, p = r.appearClass, f = r.appearToClass, v = r.appearActiveClass, m = r.beforeEnter, g = r.enter, b = r.afterEnter, y = r.enterCancelled, w = r.beforeAppear, C = r.appear, x = r.afterAppear, k = r.appearCancelled, E = r.duration, $ = wt, S = wt.$vnode; S && S.parent;) $ = (S = S.parent).context; var T = !$._isMounted || !e.isRootInsert; if (!T || C || "" === C) { var _ = T && p ? p : c,
                            M = T && v ? v : u,
                            P = T && f ? f : d,
                            O = T && w || m,
                            B = T && "function" == typeof C ? C : g,
                            I = T && x || b,
                            A = T && k || y,
                            D = h(o(E) ? E.enter : E);
                        0; var R = !1 !== s && !K,
                            z = xi(B),
                            N = n._enterCb = L(function() { R && (hi(n, P), hi(n, M)), N.cancelled ? (R && hi(n, _), A && A(n)) : I && I(n), n._enterCb = null });
                        e.data.show || ot(e, "insert", function() { var t = n.parentNode,
                                a = t && t._pending && t._pending[e.key];
                            a && a.tag === e.tag && a.elm._leaveCb && a.elm._leaveCb(), B && B(n, N) }), O && O(n), R && (pi(n, _), pi(n, M), ui(function() { hi(n, _), N.cancelled || (pi(n, P), z || (Ci(D) ? setTimeout(N, D) : fi(n, l, N))) })), e.data.show && (t && t(), B && B(n, N)), R || z || N() } } }

            function wi(e, t) { var n = e.elm;
                i(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb()); var r = ti(e.data.transition); if (a(r) || 1 !== n.nodeType) return t(); if (!i(n._leaveCb)) { var s = r.css,
                        l = r.type,
                        c = r.leaveClass,
                        d = r.leaveToClass,
                        u = r.leaveActiveClass,
                        p = r.beforeLeave,
                        f = r.leave,
                        v = r.afterLeave,
                        m = r.leaveCancelled,
                        g = r.delayLeave,
                        b = r.duration,
                        y = !1 !== s && !K,
                        w = xi(f),
                        C = h(o(b) ? b.leave : b);
                    0; var x = n._leaveCb = L(function() { n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), y && (hi(n, d), hi(n, u)), x.cancelled ? (y && hi(n, c), m && m(n)) : (t(), v && v(n)), n._leaveCb = null });
                    g ? g(k) : k() }

                function k() { x.cancelled || (e.data.show || ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), p && p(n), y && (pi(n, c), pi(n, u), ui(function() { hi(n, c), x.cancelled || (pi(n, d), w || (Ci(C) ? setTimeout(x, C) : fi(n, l, x))) })), f && f(n, x), y || w || x()) } }

            function Ci(e) { return "number" == typeof e && !isNaN(e) }

            function xi(e) { if (a(e)) return !1; var t = e.fns; return i(t) ? xi(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1 }

            function ki(e, t) {!0 !== t.data.show && yi(t) }
            var Ei = function(e) { var t, n, o = {},
                    l = e.modules,
                    c = e.nodeOps; for (t = 0; t < Wn.length; ++t)
                    for (o[Wn[t]] = [], n = 0; n < l.length; ++n) i(l[n][Wn[t]]) && o[Wn[t]].push(l[n][Wn[t]]);

                function d(e) { var t = c.parentNode(e);
                    i(t) && c.removeChild(t, e) }

                function u(e, t, n, a, s, l, d) { if (i(e.elm) && i(l) && (e = l[d] = ge(e)), e.isRootInsert = !s, ! function(e, t, n, a) { var s = e.data; if (i(s)) { var l = i(e.componentInstance) && s.keepAlive; if (i(s = s.hook) && i(s = s.init) && s(e, !1, n, a), i(e.componentInstance)) return p(e, t), r(l) && function(e, t, n, a) { for (var r, s = e; s.componentInstance;)
                                        if (s = s.componentInstance._vnode, i(r = s.data) && i(r = r.transition)) { for (r = 0; r < o.activate.length; ++r) o.activate[r](qn, s);
                                            t.push(s); break }
                                    h(n, e.elm, a) }(e, t, n, a), !0 } }(e, t, n, a)) { var u = e.data,
                            f = e.children,
                            m = e.tag;
                        i(m) ? (e.elm = e.ns ? c.createElementNS(e.ns, m) : c.createElement(m, e), b(e), v(e, f, t), i(u) && g(e, t), h(n, e.elm, a)) : r(e.isComment) ? (e.elm = c.createComment(e.text), h(n, e.elm, a)) : (e.elm = c.createTextNode(e.text), h(n, e.elm, a)) } }

                function p(e, t) { i(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, m(e) ? (g(e, t), b(e)) : (Vn(e), t.push(e)) }

                function h(e, t, n) { i(e) && (i(n) ? n.parentNode === e && c.insertBefore(e, t, n) : c.appendChild(e, t)) }

                function v(e, t, n) { if (Array.isArray(t))
                        for (var a = 0; a < t.length; ++a) u(t[a], n, e.elm, null, !0, t, a);
                    else s(e.text) && c.appendChild(e.elm, c.createTextNode(String(e.text))) }

                function m(e) { for (; e.componentInstance;) e = e.componentInstance._vnode; return i(e.tag) }

                function g(e, n) { for (var a = 0; a < o.create.length; ++a) o.create[a](qn, e);
                    i(t = e.data.hook) && (i(t.create) && t.create(qn, e), i(t.insert) && n.push(e)) }

                function b(e) { var t; if (i(t = e.fnScopeId)) c.setStyleScope(e.elm, t);
                    else
                        for (var n = e; n;) i(t = n.context) && i(t = t.$options._scopeId) && c.setStyleScope(e.elm, t), n = n.parent;
                    i(t = wt) && t !== e.context && t !== e.fnContext && i(t = t.$options._scopeId) && c.setStyleScope(e.elm, t) }

                function y(e, t, n, a, i, r) { for (; a <= i; ++a) u(n[a], r, e, t, !1, n, a) }

                function w(e) { var t, n, a = e.data; if (i(a))
                        for (i(t = a.hook) && i(t = t.destroy) && t(e), t = 0; t < o.destroy.length; ++t) o.destroy[t](e); if (i(t = e.children))
                        for (n = 0; n < e.children.length; ++n) w(e.children[n]) }

                function C(e, t, n, a) { for (; n <= a; ++n) { var r = t[n];
                        i(r) && (i(r.tag) ? (x(r), w(r)) : d(r.elm)) } }

                function x(e, t) { if (i(t) || i(e.data)) { var n, a = o.remove.length + 1; for (i(t) ? t.listeners += a : t = function(e, t) {
                                function n() { 0 == --n.listeners && d(e) } return n.listeners = t, n }(e.elm, a), i(n = e.componentInstance) && i(n = n._vnode) && i(n.data) && x(n, t), n = 0; n < o.remove.length; ++n) o.remove[n](e, t);
                        i(n = e.data.hook) && i(n = n.remove) ? n(e, t) : t() } else d(e.elm) }

                function k(e, t, n, a) { for (var r = n; r < a; r++) { var s = t[r]; if (i(s) && Yn(e, s)) return r } }

                function E(e, t, n, s) { if (e !== t) { var l = t.elm = e.elm; if (r(e.isAsyncPlaceholder)) i(t.asyncFactory.resolved) ? T(e.elm, t, n) : t.isAsyncPlaceholder = !0;
                        else if (r(t.isStatic) && r(e.isStatic) && t.key === e.key && (r(t.isCloned) || r(t.isOnce))) t.componentInstance = e.componentInstance;
                        else { var d, p = t.data;
                            i(p) && i(d = p.hook) && i(d = d.prepatch) && d(e, t); var h = e.children,
                                f = t.children; if (i(p) && m(t)) { for (d = 0; d < o.update.length; ++d) o.update[d](e, t);
                                i(d = p.hook) && i(d = d.update) && d(e, t) } a(t.text) ? i(h) && i(f) ? h !== f && function(e, t, n, r, s) { for (var o, l, d, p = 0, h = 0, f = t.length - 1, v = t[0], m = t[f], g = n.length - 1, b = n[0], w = n[g], x = !s; p <= f && h <= g;) a(v) ? v = t[++p] : a(m) ? m = t[--f] : Yn(v, b) ? (E(v, b, r), v = t[++p], b = n[++h]) : Yn(m, w) ? (E(m, w, r), m = t[--f], w = n[--g]) : Yn(v, w) ? (E(v, w, r), x && c.insertBefore(e, v.elm, c.nextSibling(m.elm)), v = t[++p], w = n[--g]) : Yn(m, b) ? (E(m, b, r), x && c.insertBefore(e, m.elm, v.elm), m = t[--f], b = n[++h]) : (a(o) && (o = Un(t, p, f)), a(l = i(b.key) ? o[b.key] : k(b, t, p, f)) ? u(b, r, e, v.elm, !1, n, h) : Yn(d = t[l], b) ? (E(d, b, r), t[l] = void 0, x && c.insertBefore(e, d.elm, v.elm)) : u(b, r, e, v.elm, !1, n, h), b = n[++h]);
                                p > f ? y(e, a(n[g + 1]) ? null : n[g + 1].elm, n, h, g, r) : h > g && C(0, t, p, f) }(l, h, f, n, s) : i(f) ? (i(e.text) && c.setTextContent(l, ""), y(l, null, f, 0, f.length - 1, n)) : i(h) ? C(0, h, 0, h.length - 1) : i(e.text) && c.setTextContent(l, "") : e.text !== t.text && c.setTextContent(l, t.text), i(p) && i(d = p.hook) && i(d = d.postpatch) && d(e, t) } } }

                function $(e, t, n) { if (r(n) && i(e.parent)) e.parent.data.pendingInsert = t;
                    else
                        for (var a = 0; a < t.length; ++a) t[a].data.hook.insert(t[a]) } var S = f("attrs,class,staticClass,staticStyle,key");

                function T(e, t, n, a) { var s, o = t.tag,
                        l = t.data,
                        c = t.children; if (a = a || l && l.pre, t.elm = e, r(t.isComment) && i(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0; if (i(l) && (i(s = l.hook) && i(s = s.init) && s(t, !0), i(s = t.componentInstance))) return p(t, n), !0; if (i(o)) { if (i(c))
                            if (e.hasChildNodes())
                                if (i(s = l) && i(s = s.domProps) && i(s = s.innerHTML)) { if (s !== e.innerHTML) return !1 } else { for (var d = !0, u = e.firstChild, h = 0; h < c.length; h++) { if (!u || !T(u, c[h], n, a)) { d = !1; break } u = u.nextSibling } if (!d || u) return !1 } else v(t, c, n); if (i(l)) { var f = !1; for (var m in l)
                                if (!S(m)) { f = !0, g(t, n); break }!f && l.class && nt(l.class) } } else e.data !== t.text && (e.data = t.text); return !0 } return function(e, t, n, s, l, d) { if (!a(t)) { var p, h = !1,
                            f = []; if (a(e)) h = !0, u(t, f, l, d);
                        else { var v = i(e.nodeType); if (!v && Yn(e, t)) E(e, t, f, s);
                            else { if (v) { if (1 === e.nodeType && e.hasAttribute(D) && (e.removeAttribute(D), n = !0), r(n) && T(e, t, f)) return $(t, f, !0), e;
                                    p = e, e = new he(c.tagName(p).toLowerCase(), {}, [], void 0, p) } var g = e.elm,
                                    b = c.parentNode(g); if (u(t, f, g._leaveCb ? null : b, c.nextSibling(g)), i(t.parent))
                                    for (var y = t.parent, x = m(t); y;) { for (var k = 0; k < o.destroy.length; ++k) o.destroy[k](y); if (y.elm = t.elm, x) { for (var S = 0; S < o.create.length; ++S) o.create[S](qn, y); var _ = y.data.hook.insert; if (_.merged)
                                                for (var M = 1; M < _.fns.length; M++) _.fns[M]() } else Vn(y);
                                        y = y.parent } i(b) ? C(0, [e], 0, 0) : i(e.tag) && w(e) } } return $(t, f, h), t.elm } i(e) && w(e) } }({ nodeOps: Hn, modules: [ia, pa, za, Ha, Qa, W ? { create: ki, activate: ki, remove: function(e, t) {!0 !== e.data.show ? wi(e, t) : t() } } : {}].concat(ea) });
            K && document.addEventListener("selectionchange", function() { var e = document.activeElement;
                e && e.vmodel && Bi(e, "input") });
            var $i = { inserted: function(e, t, n, a) { "select" === n.tag ? (a.elm && !a.elm._vOptions ? ot(n, "postpatch", function() { $i.componentUpdated(e, t, n) }) : Si(e, t, n.context), e._vOptions = [].map.call(e.options, Mi)) : ("textarea" === n.tag || Nn(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", Pi), e.addEventListener("compositionend", Oi), e.addEventListener("change", Oi), K && (e.vmodel = !0))) }, componentUpdated: function(e, t, n) { if ("select" === n.tag) { Si(e, t, n.context); var a = e._vOptions,
                            i = e._vOptions = [].map.call(e.options, Mi); if (i.some(function(e, t) { return !I(e, a[t]) }))(e.multiple ? t.value.some(function(e) { return _i(e, i) }) : t.value !== t.oldValue && _i(t.value, i)) && Bi(e, "change") } } };

            function Si(e, t, n) { Ti(e, t, n), (X || J) && setTimeout(function() { Ti(e, t, n) }, 0) }

            function Ti(e, t, n) { var a = t.value,
                    i = e.multiple; if (!i || Array.isArray(a)) { for (var r, s, o = 0, l = e.options.length; o < l; o++)
                        if (s = e.options[o], i) r = A(a, Mi(s)) > -1, s.selected !== r && (s.selected = r);
                        else if (I(Mi(s), a)) return void(e.selectedIndex !== o && (e.selectedIndex = o));
                    i || (e.selectedIndex = -1) } }

            function _i(e, t) { return t.every(function(t) { return !I(t, e) }) }

            function Mi(e) { return "_value" in e ? e._value : e.value }

            function Pi(e) { e.target.composing = !0 }

            function Oi(e) { e.target.composing && (e.target.composing = !1, Bi(e.target, "input")) }

            function Bi(e, t) { var n = document.createEvent("HTMLEvents");
                n.initEvent(t, !0, !0), e.dispatchEvent(n) }

            function Ii(e) { return !e.componentInstance || e.data && e.data.transition ? e : Ii(e.componentInstance._vnode) }
            var Ai = { model: $i, show: { bind: function(e, t, n) { var a = t.value,
                                i = (n = Ii(n)).data && n.data.transition,
                                r = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                            a && i ? (n.data.show = !0, yi(n, function() { e.style.display = r })) : e.style.display = a ? r : "none" }, update: function(e, t, n) { var a = t.value;!a != !t.oldValue && ((n = Ii(n)).data && n.data.transition ? (n.data.show = !0, a ? yi(n, function() { e.style.display = e.__vOriginalDisplay }) : wi(n, function() { e.style.display = "none" })) : e.style.display = a ? e.__vOriginalDisplay : "none") }, unbind: function(e, t, n, a, i) { i || (e.style.display = e.__vOriginalDisplay) } } },
                Li = { name: String, appear: Boolean, css: Boolean, mode: String, type: String, enterClass: String, leaveClass: String, enterToClass: String, leaveToClass: String, enterActiveClass: String, leaveActiveClass: String, appearClass: String, appearActiveClass: String, appearToClass: String, duration: [Number, String, Object] };

            function Di(e) { var t = e && e.componentOptions; return t && t.Ctor.options.abstract ? Di(ht(t.children)) : e }

            function Ri(e) { var t = {},
                    n = e.$options; for (var a in n.propsData) t[a] = e[a]; var i = n._parentListeners; for (var r in i) t[x(r)] = i[r]; return t }

            function zi(e, t) { if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", { props: t.componentOptions.propsData }) }
            var Ni = { name: "transition", props: Li, abstract: !0, render: function(e) { var t = this,
                            n = this.$slots.default; if (n && (n = n.filter(function(e) { return e.tag || pt(e) })).length) { 0; var a = this.mode;
                            0; var i = n[0]; if (function(e) { for (; e = e.parent;)
                                        if (e.data.transition) return !0 }(this.$vnode)) return i; var r = Di(i); if (!r) return i; if (this._leaving) return zi(e, i); var o = "__transition-" + this._uid + "-";
                            r.key = null == r.key ? r.isComment ? o + "comment" : o + r.tag : s(r.key) ? 0 === String(r.key).indexOf(o) ? r.key : o + r.key : r.key; var l = (r.data || (r.data = {})).transition = Ri(this),
                                c = this._vnode,
                                d = Di(c); if (r.data.directives && r.data.directives.some(function(e) { return "show" === e.name }) && (r.data.show = !0), d && d.data && ! function(e, t) { return t.key === e.key && t.tag === e.tag }(r, d) && !pt(d) && (!d.componentInstance || !d.componentInstance._vnode.isComment)) { var u = d.data.transition = _({}, l); if ("out-in" === a) return this._leaving = !0, ot(u, "afterLeave", function() { t._leaving = !1, t.$forceUpdate() }), zi(e, i); if ("in-out" === a) { if (pt(r)) return c; var p, h = function() { p() };
                                    ot(l, "afterEnter", h), ot(l, "enterCancelled", h), ot(u, "delayLeave", function(e) { p = e }) } } return i } } },
                Fi = _({ tag: String, moveClass: String }, Li);

            function Hi(e) { e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb() }

            function ji(e) { e.data.newPos = e.elm.getBoundingClientRect() }

            function Vi(e) { var t = e.data.pos,
                    n = e.data.newPos,
                    a = t.left - n.left,
                    i = t.top - n.top; if (a || i) { e.data.moved = !0; var r = e.elm.style;
                    r.transform = r.WebkitTransform = "translate(" + a + "px," + i + "px)", r.transitionDuration = "0s" } } delete Fi.mode;
            var qi = { Transition: Ni, TransitionGroup: { props: Fi, render: function(e) { for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), a = this.prevChildren = this.children, i = this.$slots.default || [], r = this.children = [], s = Ri(this), o = 0; o < i.length; o++) { var l = i[o]; if (l.tag)
                                if (null != l.key && 0 !== String(l.key).indexOf("__vlist")) r.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = s;
                                else; } if (a) { for (var c = [], d = [], u = 0; u < a.length; u++) { var p = a[u];
                                p.data.transition = s, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? c.push(p) : d.push(p) } this.kept = e(t, null, c), this.removed = d } return e(t, null, r) }, beforeUpdate: function() { this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept }, updated: function() { var e = this.prevChildren,
                            t = this.moveClass || (this.name || "v") + "-move";
                        e.length && this.hasMove(e[0].elm, t) && (e.forEach(Hi), e.forEach(ji), e.forEach(Vi), this._reflow = document.body.offsetHeight, e.forEach(function(e) { if (e.data.moved) { var n = e.elm,
                                    a = n.style;
                                pi(n, t), a.transform = a.WebkitTransform = a.transitionDuration = "", n.addEventListener(oi, n._moveCb = function e(a) { a && !/transform$/.test(a.propertyName) || (n.removeEventListener(oi, e), n._moveCb = null, hi(n, t)) }) } })) }, methods: { hasMove: function(e, t) { if (!ai) return !1; if (this._hasMove) return this._hasMove; var n = e.cloneNode();
                            e._transitionClasses && e._transitionClasses.forEach(function(e) { ei(n, e) }), Za(n, t), n.style.display = "none", this.$el.appendChild(n); var a = mi(n); return this.$el.removeChild(n), this._hasMove = a.hasTransform } } } };
            pn.config.mustUseProp = xn, pn.config.isReservedTag = Dn, pn.config.isReservedAttr = wn, pn.config.getTagNamespace = Rn, pn.config.isUnknownElement = function(e) { if (!W) return !0; if (Dn(e)) return !1; if (e = e.toLowerCase(), null != zn[e]) return zn[e]; var t = document.createElement(e); return e.indexOf("-") > -1 ? zn[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : zn[e] = /HTMLUnknownElement/.test(t.toString()) }, _(pn.options.directives, Ai), _(pn.options.components, qi), pn.prototype.__patch__ = W ? Ei : P, pn.prototype.$mount = function(e, t) { return function(e, t, n) { return e.$el = t, e.$options.render || (e.$options.render = ve), kt(e, "beforeMount"), new Bt(e, function() { e._update(e._render(), n) }, P, null, !0), n = !1, null == e.$vnode && (e._isMounted = !0, kt(e, "mounted")), e }(this, e = e && W ? Fn(e) : void 0, t) }, W && setTimeout(function() { N.devtools && ae && ae.emit("init", pn) }, 0);
            var Wi = /\{\{((?:.|\n)+?)\}\}/g,
                Yi = /[-.*+?^${}()|[\]\/\\]/g,
                Ui = w(function(e) { var t = e[0].replace(Yi, "\\$&"),
                        n = e[1].replace(Yi, "\\$&"); return new RegExp(t + "((?:.|\\n)+?)" + n, "g") });

            function Gi(e, t) { var n = t ? Ui(t) : Wi; if (n.test(e)) { for (var a, i, r, s = [], o = [], l = n.lastIndex = 0; a = n.exec(e);) {
                        (i = a.index) > l && (o.push(r = e.slice(l, i)), s.push(JSON.stringify(r))); var c = fa(a[1].trim());
                        s.push("_s(" + c + ")"), o.push({ "@binding": c }), l = i + a[0].length } return l < e.length && (o.push(r = e.slice(l)), s.push(JSON.stringify(r))), { expression: s.join("+"), tokens: o } } }
            var Xi = { staticKeys: ["staticClass"], transformNode: function(e, t) { t.warn; var n = Ea(e, "class");
                    n && (e.staticClass = JSON.stringify(n)); var a = ka(e, "class", !1);
                    a && (e.classBinding = a) }, genData: function(e) { var t = ""; return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t } };
            var Ki, Ji = { staticKeys: ["staticStyle"], transformNode: function(e, t) { t.warn; var n = Ea(e, "style");
                        n && (e.staticStyle = JSON.stringify(ja(n))); var a = ka(e, "style", !1);
                        a && (e.styleBinding = a) }, genData: function(e) { var t = ""; return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t } },
                Qi = function(e) { return (Ki = Ki || document.createElement("div")).innerHTML = e, Ki.textContent },
                Zi = f("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
                er = f("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
                tr = f("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
                nr = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
                ar = "[a-zA-Z_][\\w\\-\\.]*",
                ir = "((?:" + ar + "\\:)?" + ar + ")",
                rr = new RegExp("^<" + ir),
                sr = /^\s*(\/?)>/,
                or = new RegExp("^<\\/" + ir + "[^>]*>"),
                lr = /^<!DOCTYPE [^>]+>/i,
                cr = /^<!\--/,
                dr = /^<!\[/,
                ur = !1;
            "x".replace(/x(.)?/g, function(e, t) { ur = "" === t });
            var pr = f("script,style,textarea", !0),
                hr = {},
                fr = { "&lt;": "<", "&gt;": ">", "&quot;": '"', "&amp;": "&", "&#10;": "\n", "&#9;": "\t" },
                vr = /&(?:lt|gt|quot|amp);/g,
                mr = /&(?:lt|gt|quot|amp|#10|#9);/g,
                gr = f("pre,textarea", !0),
                br = function(e, t) { return e && gr(e) && "\n" === t[0] };

            function yr(e, t) { var n = t ? mr : vr; return e.replace(n, function(e) { return fr[e] }) }
            var wr, Cr, xr, kr, Er, $r, Sr, Tr, _r = /^@|^v-on:/,
                Mr = /^v-|^@|^:/,
                Pr = /([^]*?)\s+(?:in|of)\s+([^]*)/,
                Or = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
                Br = /^\(|\)$/g,
                Ir = /:(.*)$/,
                Ar = /^:|^v-bind:/,
                Lr = /\.[^.]+/g,
                Dr = w(Qi);

            function Rr(e, t, n) { return { type: 1, tag: e, attrsList: t, attrsMap: function(e) { for (var t = {}, n = 0, a = e.length; n < a; n++) t[e[n].name] = e[n].value; return t }(t), parent: n, children: [] } }

            function zr(e, t) { wr = t.warn || ma, $r = t.isPreTag || O, Sr = t.mustUseProp || O, Tr = t.getTagNamespace || O, xr = ga(t.modules, "transformNode"), kr = ga(t.modules, "preTransformNode"), Er = ga(t.modules, "postTransformNode"), Cr = t.delimiters; var n, a, i = [],
                    r = !1 !== t.preserveWhitespace,
                    s = !1,
                    o = !1;

                function l(e) { e.pre && (s = !1), $r(e.tag) && (o = !1); for (var n = 0; n < Er.length; n++) Er[n](e, t) } return function(e, t) { for (var n, a, i = [], r = t.expectHTML, s = t.isUnaryTag || O, o = t.canBeLeftOpenTag || O, l = 0; e;) { if (n = e, a && pr(a)) { var c = 0,
                                d = a.toLowerCase(),
                                u = hr[d] || (hr[d] = new RegExp("([\\s\\S]*?)(</" + d + "[^>]*>)", "i")),
                                p = e.replace(u, function(e, n, a) { return c = a.length, pr(d) || "noscript" === d || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), br(d, n) && (n = n.slice(1)), t.chars && t.chars(n), "" });
                            l += e.length - p.length, e = p, S(d, l - c, l) } else { var h = e.indexOf("<"); if (0 === h) { if (cr.test(e)) { var f = e.indexOf("--\x3e"); if (f >= 0) { t.shouldKeepComment && t.comment(e.substring(4, f)), k(f + 3); continue } } if (dr.test(e)) { var v = e.indexOf("]>"); if (v >= 0) { k(v + 2); continue } } var m = e.match(lr); if (m) { k(m[0].length); continue } var g = e.match(or); if (g) { var b = l;
                                    k(g[0].length), S(g[1], b, l); continue } var y = E(); if (y) { $(y), br(a, e) && k(1); continue } } var w = void 0,
                                C = void 0,
                                x = void 0; if (h >= 0) { for (C = e.slice(h); !(or.test(C) || rr.test(C) || cr.test(C) || dr.test(C) || (x = C.indexOf("<", 1)) < 0);) h += x, C = e.slice(h);
                                w = e.substring(0, h), k(h) } h < 0 && (w = e, e = ""), t.chars && w && t.chars(w) } if (e === n) { t.chars && t.chars(e); break } }

                    function k(t) { l += t, e = e.substring(t) }

                    function E() { var t = e.match(rr); if (t) { var n, a, i = { tagName: t[1], attrs: [], start: l }; for (k(t[0].length); !(n = e.match(sr)) && (a = e.match(nr));) k(a[0].length), i.attrs.push(a); if (n) return i.unarySlash = n[1], k(n[0].length), i.end = l, i } }

                    function $(e) { var n = e.tagName,
                            l = e.unarySlash;
                        r && ("p" === a && tr(n) && S(a), o(n) && a === n && S(n)); for (var c = s(n) || !!l, d = e.attrs.length, u = new Array(d), p = 0; p < d; p++) { var h = e.attrs[p];
                            ur && -1 === h[0].indexOf('""') && ("" === h[3] && delete h[3], "" === h[4] && delete h[4], "" === h[5] && delete h[5]); var f = h[3] || h[4] || h[5] || "",
                                v = "a" === n && "href" === h[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
                            u[p] = { name: h[1], value: yr(f, v) } } c || (i.push({ tag: n, lowerCasedTag: n.toLowerCase(), attrs: u }), a = n), t.start && t.start(n, u, c, e.start, e.end) }

                    function S(e, n, r) { var s, o; if (null == n && (n = l), null == r && (r = l), e && (o = e.toLowerCase()), e)
                            for (s = i.length - 1; s >= 0 && i[s].lowerCasedTag !== o; s--);
                        else s = 0; if (s >= 0) { for (var c = i.length - 1; c >= s; c--) t.end && t.end(i[c].tag, n, r);
                            i.length = s, a = s && i[s - 1].tag } else "br" === o ? t.start && t.start(e, [], !0, n, r) : "p" === o && (t.start && t.start(e, [], !1, n, r), t.end && t.end(e, n, r)) } S() }(e, { warn: wr, expectHTML: t.expectHTML, isUnaryTag: t.isUnaryTag, canBeLeftOpenTag: t.canBeLeftOpenTag, shouldDecodeNewlines: t.shouldDecodeNewlines, shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref, shouldKeepComment: t.comments, start: function(e, r, c) { var d = a && a.ns || Tr(e);
                        X && "svg" === d && (r = function(e) { for (var t = [], n = 0; n < e.length; n++) { var a = e[n];
                                Vr.test(a.name) || (a.name = a.name.replace(qr, ""), t.push(a)) } return t }(r)); var u, p = Rr(e, r, a);
                        d && (p.ns = d), "style" !== (u = p).tag && ("script" !== u.tag || u.attrsMap.type && "text/javascript" !== u.attrsMap.type) || ne() || (p.forbidden = !0); for (var h = 0; h < kr.length; h++) p = kr[h](p, t) || p;

                        function f(e) { 0 } if (s || (! function(e) { null != Ea(e, "v-pre") && (e.pre = !0) }(p), p.pre && (s = !0)), $r(p.tag) && (o = !0), s ? function(e) { var t = e.attrsList.length; if (t)
                                    for (var n = e.attrs = new Array(t), a = 0; a < t; a++) n[a] = { name: e.attrsList[a].name, value: JSON.stringify(e.attrsList[a].value) };
                                else e.pre || (e.plain = !0) }(p) : p.processed || (Fr(p), function(e) { var t = Ea(e, "v-if"); if (t) e.if = t, Hr(e, { exp: t, block: e });
                                else { null != Ea(e, "v-else") && (e.else = !0); var n = Ea(e, "v-else-if");
                                    n && (e.elseif = n) } }(p), function(e) { null != Ea(e, "v-once") && (e.once = !0) }(p), Nr(p, t)), n ? i.length || n.if && (p.elseif || p.else) && (f(), Hr(n, { exp: p.elseif, block: p })) : (n = p, f()), a && !p.forbidden)
                            if (p.elseif || p.else) ! function(e, t) { var n = function(e) { var t = e.length; for (; t--;) { if (1 === e[t].type) return e[t];
                                        e.pop() } }(t.children);
                                n && n.if && Hr(n, { exp: e.elseif, block: e }) }(p, a);
                            else if (p.slotScope) { a.plain = !1; var v = p.slotTarget || '"default"';
                            (a.scopedSlots || (a.scopedSlots = {}))[v] = p } else a.children.push(p), p.parent = a;
                        c ? l(p) : (a = p, i.push(p)) }, end: function() { var e = i[i.length - 1],
                            t = e.children[e.children.length - 1];
                        t && 3 === t.type && " " === t.text && !o && e.children.pop(), i.length -= 1, a = i[i.length - 1], l(e) }, chars: function(e) { if (a && (!X || "textarea" !== a.tag || a.attrsMap.placeholder !== e)) { var t, n, i = a.children; if (e = o || e.trim() ? "script" === (t = a).tag || "style" === t.tag ? e : Dr(e) : r && i.length ? " " : "") !s && " " !== e && (n = Gi(e, Cr)) ? i.push({ type: 2, expression: n.expression, tokens: n.tokens, text: e }) : " " === e && i.length && " " === i[i.length - 1].text || i.push({ type: 3, text: e }) } }, comment: function(e) { a.children.push({ type: 3, text: e, isComment: !0 }) } }), n }

            function Nr(e, t) { var n, a;
                (a = ka(n = e, "key")) && (n.key = a), e.plain = !e.key && !e.attrsList.length,
                    function(e) { var t = ka(e, "ref");
                        t && (e.ref = t, e.refInFor = function(e) { var t = e; for (; t;) { if (void 0 !== t.for) return !0;
                                t = t.parent } return !1 }(e)) }(e),
                    function(e) { if ("slot" === e.tag) e.slotName = ka(e, "name");
                        else { var t; "template" === e.tag ? (t = Ea(e, "scope"), e.slotScope = t || Ea(e, "slot-scope")) : (t = Ea(e, "slot-scope")) && (e.slotScope = t); var n = ka(e, "slot");
                            n && (e.slotTarget = '""' === n ? '"default"' : n, "template" === e.tag || e.slotScope || ya(e, "slot", n)) } }(e),
                    function(e) { var t;
                        (t = ka(e, "is")) && (e.component = t);
                        null != Ea(e, "inline-template") && (e.inlineTemplate = !0) }(e); for (var i = 0; i < xr.length; i++) e = xr[i](e, t) || e;! function(e) { var t, n, a, i, r, s, o, l = e.attrsList; for (t = 0, n = l.length; t < n; t++) { if (a = i = l[t].name, r = l[t].value, Mr.test(a))
                            if (e.hasBindings = !0, (s = jr(a)) && (a = a.replace(Lr, "")), Ar.test(a)) a = a.replace(Ar, ""), r = fa(r), o = !1, s && (s.prop && (o = !0, "innerHtml" === (a = x(a)) && (a = "innerHTML")), s.camel && (a = x(a)), s.sync && xa(e, "update:" + x(a), Sa(r, "$event"))), o || !e.component && Sr(e.tag, e.attrsMap.type, a) ? ba(e, a, r) : ya(e, a, r);
                            else if (_r.test(a)) a = a.replace(_r, ""), xa(e, a, r, s, !1);
                        else { var c = (a = a.replace(Mr, "")).match(Ir),
                                d = c && c[1];
                            d && (a = a.slice(0, -(d.length + 1))), Ca(e, a, i, r, d, s) } else ya(e, a, JSON.stringify(r)), !e.component && "muted" === a && Sr(e.tag, e.attrsMap.type, a) && ba(e, a, "true") } }(e) }

            function Fr(e) { var t; if (t = Ea(e, "v-for")) { var n = function(e) { var t = e.match(Pr); if (!t) return; var n = {};
                        n.for = t[2].trim(); var a = t[1].trim().replace(Br, ""),
                            i = a.match(Or);
                        i ? (n.alias = a.replace(Or, ""), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = a; return n }(t);
                    n && _(e, n) } }

            function Hr(e, t) { e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t) }

            function jr(e) { var t = e.match(Lr); if (t) { var n = {}; return t.forEach(function(e) { n[e.slice(1)] = !0 }), n } }
            var Vr = /^xmlns:NS\d+/,
                qr = /^NS\d+:/;

            function Wr(e) { return Rr(e.tag, e.attrsList.slice(), e.parent) }
            var Yr = [Xi, Ji, { preTransformNode: function(e, t) { if ("input" === e.tag) { var n, a = e.attrsMap; if (!a["v-model"]) return; if ((a[":type"] || a["v-bind:type"]) && (n = ka(e, "type")), a.type || n || !a["v-bind"] || (n = "(" + a["v-bind"] + ").type"), n) { var i = Ea(e, "v-if", !0),
                                r = i ? "&&(" + i + ")" : "",
                                s = null != Ea(e, "v-else", !0),
                                o = Ea(e, "v-else-if", !0),
                                l = Wr(e);
                            Fr(l), wa(l, "type", "checkbox"), Nr(l, t), l.processed = !0, l.if = "(" + n + ")==='checkbox'" + r, Hr(l, { exp: l.if, block: l }); var c = Wr(e);
                            Ea(c, "v-for", !0), wa(c, "type", "radio"), Nr(c, t), Hr(l, { exp: "(" + n + ")==='radio'" + r, block: c }); var d = Wr(e); return Ea(d, "v-for", !0), wa(d, ":type", n), Nr(d, t), Hr(l, { exp: i, block: d }), s ? l.else = !0 : o && (l.elseif = o), l } } } }];
            var Ur, Gr, Xr = { expectHTML: !0, modules: Yr, directives: { model: function(e, t, n) { n; var a = t.value,
                                i = t.modifiers,
                                r = e.tag,
                                s = e.attrsMap.type; if (e.component) return $a(e, a, i), !1; if ("select" === r) ! function(e, t, n) { var a = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
                                a = a + " " + Sa(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), xa(e, "change", a, null, !0) }(e, a, i);
                            else if ("input" === r && "checkbox" === s) ! function(e, t, n) { var a = n && n.number,
                                    i = ka(e, "value") || "null",
                                    r = ka(e, "true-value") || "true",
                                    s = ka(e, "false-value") || "false";
                                ba(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === r ? ":(" + t + ")" : ":_q(" + t + "," + r + ")")), xa(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + r + "):(" + s + ");if(Array.isArray($$a)){var $$v=" + (a ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Sa(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Sa(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Sa(t, "$$c") + "}", null, !0) }(e, a, i);
                            else if ("input" === r && "radio" === s) ! function(e, t, n) { var a = n && n.number,
                                    i = ka(e, "value") || "null";
                                ba(e, "checked", "_q(" + t + "," + (i = a ? "_n(" + i + ")" : i) + ")"), xa(e, "change", Sa(t, i), null, !0) }(e, a, i);
                            else if ("input" === r || "textarea" === r) ! function(e, t, n) { var a = e.attrsMap.type,
                                    i = n || {},
                                    r = i.lazy,
                                    s = i.number,
                                    o = i.trim,
                                    l = !r && "range" !== a,
                                    c = r ? "change" : "range" === a ? Ia : "input",
                                    d = "$event.target.value";
                                o && (d = "$event.target.value.trim()"), s && (d = "_n(" + d + ")"); var u = Sa(t, d);
                                l && (u = "if($event.target.composing)return;" + u), ba(e, "value", "(" + t + ")"), xa(e, c, u, null, !0), (o || s) && xa(e, "blur", "$forceUpdate()") }(e, a, i);
                            else if (!N.isReservedTag(r)) return $a(e, a, i), !1; return !0 }, text: function(e, t) { t.value && ba(e, "textContent", "_s(" + t.value + ")") }, html: function(e, t) { t.value && ba(e, "innerHTML", "_s(" + t.value + ")") } }, isPreTag: function(e) { return "pre" === e }, isUnaryTag: Zi, mustUseProp: xn, canBeLeftOpenTag: er, isReservedTag: Dn, getTagNamespace: Rn, staticKeys: function(e) { return e.reduce(function(e, t) { return e.concat(t.staticKeys || []) }, []).join(",") }(Yr) },
                Kr = w(function(e) { return f("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (e ? "," + e : "")) });

            function Jr(e, t) { e && (Ur = Kr(t.staticKeys || ""), Gr = t.isReservedTag || O, function e(t) { t.static = function(e) { if (2 === e.type) return !1; if (3 === e.type) return !0; return !(!e.pre && (e.hasBindings || e.if || e.for || v(e.tag) || !Gr(e.tag) || function(e) { for (; e.parent;) { if ("template" !== (e = e.parent).tag) return !1; if (e.for) return !0 } return !1 }(e) || !Object.keys(e).every(Ur))) }(t); if (1 === t.type) { if (!Gr(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"]) return; for (var n = 0, a = t.children.length; n < a; n++) { var i = t.children[n];
                            e(i), i.static || (t.static = !1) } if (t.ifConditions)
                            for (var r = 1, s = t.ifConditions.length; r < s; r++) { var o = t.ifConditions[r].block;
                                e(o), o.static || (t.static = !1) } } }(e), function e(t, n) { if (1 === t.type) { if ((t.static || t.once) && (t.staticInFor = n), t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type)) return void(t.staticRoot = !0); if (t.staticRoot = !1, t.children)
                            for (var a = 0, i = t.children.length; a < i; a++) e(t.children[a], n || !!t.for); if (t.ifConditions)
                            for (var r = 1, s = t.ifConditions.length; r < s; r++) e(t.ifConditions[r].block, n) } }(e, !1)) }
            var Qr = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
                Zr = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
                es = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] },
                ts = { esc: "Escape", tab: "Tab", enter: "Enter", space: " ", up: ["Up", "ArrowUp"], left: ["Left", "ArrowLeft"], right: ["Right", "ArrowRight"], down: ["Down", "ArrowDown"], delete: ["Backspace", "Delete"] },
                ns = function(e) { return "if(" + e + ")return null;" },
                as = { stop: "$event.stopPropagation();", prevent: "$event.preventDefault();", self: ns("$event.target !== $event.currentTarget"), ctrl: ns("!$event.ctrlKey"), shift: ns("!$event.shiftKey"), alt: ns("!$event.altKey"), meta: ns("!$event.metaKey"), left: ns("'button' in $event && $event.button !== 0"), middle: ns("'button' in $event && $event.button !== 1"), right: ns("'button' in $event && $event.button !== 2") };

            function is(e, t, n) { var a = t ? "nativeOn:{" : "on:{"; for (var i in e) a += '"' + i + '":' + rs(i, e[i]) + ","; return a.slice(0, -1) + "}" }

            function rs(e, t) { if (!t) return "function(){}"; if (Array.isArray(t)) return "[" + t.map(function(t) { return rs(e, t) }).join(",") + "]"; var n = Zr.test(t.value),
                    a = Qr.test(t.value); if (t.modifiers) { var i = "",
                        r = "",
                        s = []; for (var o in t.modifiers)
                        if (as[o]) r += as[o], es[o] && s.push(o);
                        else if ("exact" === o) { var l = t.modifiers;
                        r += ns(["ctrl", "shift", "alt", "meta"].filter(function(e) { return !l[e] }).map(function(e) { return "$event." + e + "Key" }).join("||")) } else s.push(o); return s.length && (i += function(e) { return "if(!('button' in $event)&&" + e.map(ss).join("&&") + ")return null;" }(s)), r && (i += r), "function($event){" + i + (n ? "return " + t.value + "($event)" : a ? "return (" + t.value + ")($event)" : t.value) + "}" } return n || a ? t.value : "function($event){" + t.value + "}" }

            function ss(e) { var t = parseInt(e, 10); if (t) return "$event.keyCode!==" + t; var n = es[e],
                    a = ts[e]; return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(a) + ")" }
            var os = { on: function(e, t) { e.wrapListeners = function(e) { return "_g(" + e + "," + t.value + ")" } }, bind: function(e, t) { e.wrapData = function(n) { return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")" } }, cloak: P },
                ls = function(e) { this.options = e, this.warn = e.warn || ma, this.transforms = ga(e.modules, "transformCode"), this.dataGenFns = ga(e.modules, "genData"), this.directives = _(_({}, os), e.directives); var t = e.isReservedTag || O;
                    this.maybeComponent = function(e) { return !t(e.tag) }, this.onceId = 0, this.staticRenderFns = [] };

            function cs(e, t) { var n = new ls(t); return { render: "with(this){return " + (e ? ds(e, n) : '_c("div")') + "}", staticRenderFns: n.staticRenderFns } }

            function ds(e, t) { if (e.staticRoot && !e.staticProcessed) return us(e, t); if (e.once && !e.onceProcessed) return ps(e, t); if (e.for && !e.forProcessed) return function(e, t, n, a) { var i = e.for,
                        r = e.alias,
                        s = e.iterator1 ? "," + e.iterator1 : "",
                        o = e.iterator2 ? "," + e.iterator2 : "";
                    0; return e.forProcessed = !0, (a || "_l") + "((" + i + "),function(" + r + s + o + "){return " + (n || ds)(e, t) + "})" }(e, t); if (e.if && !e.ifProcessed) return hs(e, t); if ("template" !== e.tag || e.slotTarget) { if ("slot" === e.tag) return function(e, t) { var n = e.slotName || '"default"',
                            a = ms(e, t),
                            i = "_t(" + n + (a ? "," + a : ""),
                            r = e.attrs && "{" + e.attrs.map(function(e) { return x(e.name) + ":" + e.value }).join(",") + "}",
                            s = e.attrsMap["v-bind"];!r && !s || a || (i += ",null");
                        r && (i += "," + r);
                        s && (i += (r ? "" : ",null") + "," + s); return i + ")" }(e, t); var n; if (e.component) n = function(e, t, n) { var a = t.inlineTemplate ? null : ms(t, n, !0); return "_c(" + e + "," + fs(t, n) + (a ? "," + a : "") + ")" }(e.component, e, t);
                    else { var a = e.plain ? void 0 : fs(e, t),
                            i = e.inlineTemplate ? null : ms(e, t, !0);
                        n = "_c('" + e.tag + "'" + (a ? "," + a : "") + (i ? "," + i : "") + ")" } for (var r = 0; r < t.transforms.length; r++) n = t.transforms[r](e, n); return n } return ms(e, t) || "void 0" }

            function us(e, t) { return e.staticProcessed = !0, t.staticRenderFns.push("with(this){return " + ds(e, t) + "}"), "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")" }

            function ps(e, t) { if (e.onceProcessed = !0, e.if && !e.ifProcessed) return hs(e, t); if (e.staticInFor) { for (var n = "", a = e.parent; a;) { if (a.for) { n = a.key; break } a = a.parent } return n ? "_o(" + ds(e, t) + "," + t.onceId++ + "," + n + ")" : ds(e, t) } return us(e, t) }

            function hs(e, t, n, a) { return e.ifProcessed = !0,
                    function e(t, n, a, i) { if (!t.length) return i || "_e()"; var r = t.shift(); return r.exp ? "(" + r.exp + ")?" + s(r.block) + ":" + e(t, n, a, i) : "" + s(r.block);

                        function s(e) { return a ? a(e, n) : e.once ? ps(e, n) : ds(e, n) } }(e.ifConditions.slice(), t, n, a) }

            function fs(e, t) { var n = "{",
                    a = function(e, t) { var n = e.directives; if (!n) return; var a, i, r, s, o = "directives:[",
                            l = !1; for (a = 0, i = n.length; a < i; a++) { r = n[a], s = !0; var c = t.directives[r.name];
                            c && (s = !!c(e, r, t.warn)), s && (l = !0, o += '{name:"' + r.name + '",rawName:"' + r.rawName + '"' + (r.value ? ",value:(" + r.value + "),expression:" + JSON.stringify(r.value) : "") + (r.arg ? ',arg:"' + r.arg + '"' : "") + (r.modifiers ? ",modifiers:" + JSON.stringify(r.modifiers) : "") + "},") } if (l) return o.slice(0, -1) + "]" }(e, t);
                a && (n += a + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",'); for (var i = 0; i < t.dataGenFns.length; i++) n += t.dataGenFns[i](e); if (e.attrs && (n += "attrs:{" + ys(e.attrs) + "},"), e.props && (n += "domProps:{" + ys(e.props) + "},"), e.events && (n += is(e.events, !1, t.warn) + ","), e.nativeEvents && (n += is(e.nativeEvents, !0, t.warn) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function(e, t) { return "scopedSlots:_u([" + Object.keys(e).map(function(n) { return vs(n, e[n], t) }).join(",") + "])" }(e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) { var r = function(e, t) { var n = e.children[0];
                        0; if (1 === n.type) { var a = cs(n, t.options); return "inlineTemplate:{render:function(){" + a.render + "},staticRenderFns:[" + a.staticRenderFns.map(function(e) { return "function(){" + e + "}" }).join(",") + "]}" } }(e, t);
                    r && (n += r + ",") } return n = n.replace(/,$/, "") + "}", e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n }

            function vs(e, t, n) { return t.for && !t.forProcessed ? function(e, t, n) { var a = t.for,
                        i = t.alias,
                        r = t.iterator1 ? "," + t.iterator1 : "",
                        s = t.iterator2 ? "," + t.iterator2 : ""; return t.forProcessed = !0, "_l((" + a + "),function(" + i + r + s + "){return " + vs(e, t, n) + "})" }(e, t, n) : "{key:" + e + ",fn:" + ("function(" + String(t.slotScope) + "){return " + ("template" === t.tag ? t.if ? t.if+"?" + (ms(t, n) || "undefined") + ":undefined" : ms(t, n) || "undefined" : ds(t, n)) + "}") + "}" }

            function ms(e, t, n, a, i) { var r = e.children; if (r.length) { var s = r[0]; if (1 === r.length && s.for && "template" !== s.tag && "slot" !== s.tag) return (a || ds)(s, t); var o = n ? function(e, t) { for (var n = 0, a = 0; a < e.length; a++) { var i = e[a]; if (1 === i.type) { if (gs(i) || i.ifConditions && i.ifConditions.some(function(e) { return gs(e.block) })) { n = 2; break }(t(i) || i.ifConditions && i.ifConditions.some(function(e) { return t(e.block) })) && (n = 1) } } return n }(r, t.maybeComponent) : 0,
                        l = i || bs; return "[" + r.map(function(e) { return l(e, t) }).join(",") + "]" + (o ? "," + o : "") } }

            function gs(e) { return void 0 !== e.for || "template" === e.tag || "slot" === e.tag }

            function bs(e, t) { return 1 === e.type ? ds(e, t) : 3 === e.type && e.isComment ? (a = e, "_e(" + JSON.stringify(a.text) + ")") : "_v(" + (2 === (n = e).type ? n.expression : ws(JSON.stringify(n.text))) + ")"; var n, a }

            function ys(e) { for (var t = "", n = 0; n < e.length; n++) { var a = e[n];
                    t += '"' + a.name + '":' + ws(a.value) + "," } return t.slice(0, -1) }

            function ws(e) { return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") } new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");

            function Cs(e, t) { try { return new Function(e) } catch (n) { return t.push({ err: n, code: e }), P } }
            var xs, ks, Es = (xs = function(e, t) { var n = zr(e.trim(), t);!1 !== t.optimize && Jr(n, t); var a = cs(n, t); return { ast: n, render: a.render, staticRenderFns: a.staticRenderFns } }, function(e) {
                function t(t, n) { var a = Object.create(e),
                        i = [],
                        r = []; if (a.warn = function(e, t) {
                            (t ? r : i).push(e) }, n)
                        for (var s in n.modules && (a.modules = (e.modules || []).concat(n.modules)), n.directives && (a.directives = _(Object.create(e.directives || null), n.directives)), n) "modules" !== s && "directives" !== s && (a[s] = n[s]); var o = xs(t, a); return o.errors = i, o.tips = r, o } return { compile: t, compileToFunctions: function(e) { var t = Object.create(null); return function(n, a, i) {
                            (a = _({}, a)).warn, delete a.warn; var r = a.delimiters ? String(a.delimiters) + n : n; if (t[r]) return t[r]; var s = e(n, a),
                                o = {},
                                l = []; return o.render = Cs(s.render, l), o.staticRenderFns = s.staticRenderFns.map(function(e) { return Cs(e, l) }), t[r] = o } }(t) } })(Xr).compileToFunctions;

            function $s(e) { return (ks = ks || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', ks.innerHTML.indexOf("&#10;") > 0 }
            var Ss = !!W && $s(!1),
                Ts = !!W && $s(!0),
                _s = w(function(e) { var t = Fn(e); return t && t.innerHTML }),
                Ms = pn.prototype.$mount;
            pn.prototype.$mount = function(e, t) { if ((e = e && Fn(e)) === document.body || e === document.documentElement) return this; var n = this.$options; if (!n.render) { var a = n.template; if (a)
                        if ("string" == typeof a) "#" === a.charAt(0) && (a = _s(a));
                        else { if (!a.nodeType) return this;
                            a = a.innerHTML } else e && (a = function(e) { if (e.outerHTML) return e.outerHTML; var t = document.createElement("div"); return t.appendChild(e.cloneNode(!0)), t.innerHTML }(e)); if (a) { 0; var i = Es(a, { shouldDecodeNewlines: Ss, shouldDecodeNewlinesForHref: Ts, delimiters: n.delimiters, comments: n.comments }, this),
                            r = i.render,
                            s = i.staticRenderFns;
                        n.render = r, n.staticRenderFns = s } } return Ms.call(this, e, t) }, pn.compile = Es, t.a = pn
        }).call(t, n("DuR2"))
    },
    "77Pl": function(e, t, n) { var a = n("EqjI");
        e.exports = function(e) { if (!a(e)) throw TypeError(e + " is not an object!"); return e } },
    "7GwW": function(e, t, n) { "use strict"; var a = n("cGG2"),
            i = n("21It"),
            r = n("DQCr"),
            s = n("oJlt"),
            o = n("GHBc"),
            l = n("FtD3"),
            c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n("thJu");
        e.exports = function(e) { return new Promise(function(t, d) { var u = e.data,
                    p = e.headers;
                a.isFormData(u) && delete p["Content-Type"]; var h = new XMLHttpRequest,
                    f = "onreadystatechange",
                    v = !1; if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in h || o(e.url) || (h = new window.XDomainRequest, f = "onload", v = !0, h.onprogress = function() {}, h.ontimeout = function() {}), e.auth) { var m = e.auth.username || "",
                        g = e.auth.password || "";
                    p.Authorization = "Basic " + c(m + ":" + g) } if (h.open(e.method.toUpperCase(), r(e.url, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, h[f] = function() { if (h && (4 === h.readyState || v) && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) { var n = "getAllResponseHeaders" in h ? s(h.getAllResponseHeaders()) : null,
                                a = { data: e.responseType && "text" !== e.responseType ? h.response : h.responseText, status: 1223 === h.status ? 204 : h.status, statusText: 1223 === h.status ? "No Content" : h.statusText, headers: n, config: e, request: h };
                            i(t, d, a), h = null } }, h.onerror = function() { d(l("Network Error", e, null, h)), h = null }, h.ontimeout = function() { d(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", h)), h = null }, a.isStandardBrowserEnv()) { var b = n("p1b6"),
                        y = (e.withCredentials || o(e.url)) && e.xsrfCookieName ? b.read(e.xsrfCookieName) : void 0;
                    y && (p[e.xsrfHeaderName] = y) } if ("setRequestHeader" in h && a.forEach(p, function(e, t) { void 0 === u && "content-type" === t.toLowerCase() ? delete p[t] : h.setRequestHeader(t, e) }), e.withCredentials && (h.withCredentials = !0), e.responseType) try { h.responseType = e.responseType } catch (t) { if ("json" !== e.responseType) throw t }
                "function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) { h && (h.abort(), d(e), h = null) }), void 0 === u && (u = null), h.send(u) }) } },
    "7KvD": function(e, t) { var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n) },
    "7UMu": function(e, t, n) { var a = n("R9M2");
        e.exports = Array.isArray || function(e) { return "Array" == a(e) } },
    "82Mu": function(e, t, n) { var a = n("7KvD"),
            i = n("L42u").set,
            r = a.MutationObserver || a.WebKitMutationObserver,
            s = a.process,
            o = a.Promise,
            l = "process" == n("R9M2")(s);
        e.exports = function() { var e, t, n, c = function() { var a, i; for (l && (a = s.domain) && a.exit(); e;) { i = e.fn, e = e.next; try { i() } catch (a) { throw e ? n() : t = void 0, a } } t = void 0, a && a.enter() }; if (l) n = function() { s.nextTick(c) };
            else if (!r || a.navigator && a.navigator.standalone)
                if (o && o.resolve) { var d = o.resolve(void 0);
                    n = function() { d.then(c) } } else n = function() { i.call(a, c) };
            else { var u = !0,
                    p = document.createTextNode("");
                new r(c).observe(p, { characterData: !0 }), n = function() { p.data = u = !u } } return function(a) { var i = { fn: a, next: void 0 };
                t && (t.next = i), e || (e = i, n()), t = i } } },
    "880/": function(e, t, n) { e.exports = n("hJx8") },
    "8OAG": function(e, t, n) { "use strict"; var a = n("bOdI"),
            i = n.n(a),
            r = n("K6ED"),
            s = n.n(r),
            o = n("fZjL"),
            l = n.n(o),
            c = n("d7EF"),
            d = n.n(c),
            u = n("pFYg"),
            p = n.n(u),
            h = { isTrueProp: function(e) { return !0 === e || "" === e }, isStringProp: function(e) { return "string" == typeof e && "" !== e }, isObject: function(e) { return "object" === (void 0 === e ? "undefined" : p()(e)) && null !== e && e.constructor && e.constructor === Object }, now: function() { return Date.now() }, extend: function() { for (var e = !0, t = void 0, n = void 0, a = arguments.length, i = Array(a), r = 0; r < a; r++) i[r] = arguments[r]; if ("boolean" == typeof i[0]) { var o = d()(i, 2);
                        e = o[0], t = o[1], i.splice(0, 2), n = i } else { t = d()(i, 1)[0], i.splice(0, 1), n = i } for (var c = 0; c < n.length; c += 1) { var u = i[c]; if (void 0 !== u && null !== u)
                            for (var p = l()(Object(u)), f = 0, v = p.length; f < v; f += 1) { var m = p[f],
                                    g = s()(u, m);
                                void 0 !== g && g.enumerable && (e ? h.isObject(t[m]) && h.isObject(u[m]) ? h.extend(t[m], u[m]) : !h.isObject(t[m]) && h.isObject(u[m]) ? (t[m] = {}, h.extend(t[m], u[m])) : t[m] = u[m] : t[m] = u[m]) } } return t } },
            f = {};
        ["color", "color-theme", "text-color", "bg-color", "border-color", "ripple-color"].forEach(function(e) { f["f7-" + e] = function(t, n) { var a = n.value,
                    i = n.oldValue;
                a !== i && (a || i) && (i && t.classList.remove(e + "-" + i), a && t.classList.add(e + "-" + a)) } }); var v = 0,
            m = { proto: { pageComponentLoader: function(e, t, n, a, i, r) { var s = this.$el[0],
                            o = void 0; if (function e(t) { o || (t.$vnode && t.$vnode.tag && t.$vnode.tag.indexOf("f7-view") >= 0 && t.pages ? o = t : t.$children && 0 !== t.$children.length && t.$children.forEach(function(t) { e(t) })) }(s.__vue__), o && o.pages) { var c = h.now() + "_" + (v += 1),
                                d = { component: t, id: c, params: h.extend({}, a.route.params) };
                            o.$f7route = a.route, o.pages.push(d), o.$nextTick(function() { var e = s.children[s.children.length - 1];
                                d.el = e; var n = void 0; if (t.on) { for (var a = void 0, r = e.__vue__; r.$parent && !a;) r.$parent.$el === e ? r = r.$parent : a = !0;
                                    r && (n = h.extend({}, t.on), l()(n).forEach(function(e) { n[e] = n[e].bind(r) })) } i(e, { on: n }) }) } else r() }, removePage: function(e) { if (e) { var t = this.$el[0].__vue__,
                                n = void 0; if ("length" in e) { if (0 === e.length) return;
                                n = e[0] } else n = e; if (n) { var a = void 0;
                                t.pages.forEach(function(e, i) { e.el === n && (a = !0, t.pages.splice(i, 1)) }), a || n.parentNode.removeChild(n) } } }, tabComponentLoader: function(e, t, n, a, i, r) { e || r(); var s = e.__vue__;
                        s || r(); var o = h.now() + "_" + (v += 1);
                        s.$set(s, "tabContent", { id: o, component: t, params: h.extend({}, a.route.params) }); var c = void 0;
                        t.on && (c = h.extend({}, t.on), l()(c).forEach(function(e) { c[e] = c[e].bind(s) })), s.$nextTick(function() { var t = e.children[0];
                            i(t, { on: c }) }) }, removeTabContent: function(e) { if (e) { var t = e.__vue__;
                            t ? t.$set(t, "tabContent", null) : e.innerHTML = "" } }, modalComponentLoader: function(e, t, n, a, i, r) { var s = this,
                            o = document.querySelector(".framework7-modals"); if (o) { var c = o.__vue__; if (c) { var d = h.now() + "_" + (v += 1),
                                    u = { component: t, id: d, params: h.extend({}, a.route.params) };
                                c.$f7route = a.route, c.modals.push(u), c.$nextTick(function() { var e = o.children[o.children.length - 1];
                                    u.el = e; for (var n = void 0, a = void 0, r = e.__vue__; r.$parent && !a;) r.$parent.$el === e ? r = r.$parent : a = !0;
                                    t.on && r && (n = h.extend({}, t.on), l()(n).forEach(function(e) { n[e] = n[e].bind(r) })), e.addEventListener("modal:closed", function() { c.$nextTick(function() { s.removeModal(e, r) }) }), i(e, { on: n }) }) } else r() } else r() }, removeModal: function(e, t) { if (t) { var n = document.querySelector(".framework7-modals"); if (n) { var a = n.__vue__; if (a) { var i = void 0;
                                    a.modals.forEach(function(t, n) { t.el === e && (i = !0, a.modals.splice(n, 1)) }), i || e.parentNode.removeChild(e) } } } } } },
            g = { colorProps: { color: String, colorTheme: String, textColor: String, bgColor: String, borderColor: String, rippleColor: String, themeDark: Boolean }, colorClasses: function(e) { var t, n = e.color,
                        a = e.colorTheme,
                        r = e.textColor,
                        s = e.bgColor,
                        o = e.borderColor,
                        l = e.rippleColor; return t = { "theme-dark": e.themeDark }, i()(t, "color-" + n, n), i()(t, "color-theme-" + a, a), i()(t, "text-color-" + r, r), i()(t, "bg-color-" + s, s), i()(t, "border-color-" + o, o), i()(t, "ripple-color-" + l, l), t }, linkIconProps: { icon: String, iconMaterial: String, iconIon: String, iconFa: String, iconF7: String, iconIfMd: String, iconIfIos: String, iconColor: String, iconSize: [String, Number] }, linkRouterProps: { back: Boolean, external: Boolean, force: Boolean, animate: Boolean, ignoreCache: Boolean, pageName: String, reloadCurrent: Boolean, reloadAll: Boolean, reloadPrevious: Boolean, routeTabId: String, view: String }, linkRouterAttrs: function(e) { var t = e.force,
                        n = e.reloadCurrent,
                        a = e.reloadPrevious,
                        i = e.reloadAll,
                        r = e.animate,
                        s = e.ignoreCache,
                        o = e.routeTabId,
                        l = e.view; return { "data-force": t, "data-reload-current": n, "data-reload-all": i, "data-reload-previous": a, "data-animate": "animate" in e.$options.propsData ? r.toString() : void 0, "data-ignore-cache": s, "data-route-tab-id": o, "data-view": !!h.isStringProp(l) && l } }, linkRouterClasses: function(e) { var t = e.back,
                        n = e.linkBack,
                        a = e.external; return { back: t || n, external: a } }, linkActionsProps: { panelOpen: [Boolean, String], panelClose: [Boolean, String], popupOpen: [Boolean, String], popupClose: [Boolean, String], actionsOpen: [Boolean, String], actionsClose: [Boolean, String], popoverOpen: [Boolean, String], popoverClose: [Boolean, String], loginScreenOpen: [Boolean, String], loginScreenClose: [Boolean, String], sheetOpen: [Boolean, String], sheetClose: [Boolean, String], sortableEnable: [Boolean, String], sortableDisable: [Boolean, String], sortableToggle: [Boolean, String] }, linkActionsAttrs: function(e) { var t = e.panelOpen,
                        n = e.panelClose,
                        a = e.popupOpen,
                        i = e.popupClose,
                        r = e.actionsOpen,
                        s = e.actionsClose,
                        o = e.popoverOpen,
                        l = e.popoverClose,
                        c = e.loginScreenOpen,
                        d = e.loginScreenClose,
                        u = e.sheetOpen,
                        p = e.sheetClose,
                        f = e.sortableEnable,
                        v = e.sortableDisable,
                        m = e.sortableToggle; return { "data-panel": h.isStringProp(t) && t || h.isStringProp(n) && n, "data-popup": h.isStringProp(a) && a || h.isStringProp(i) && i, "data-actions": h.isStringProp(r) && r || h.isStringProp(s) && s, "data-popover": h.isStringProp(o) && o || h.isStringProp(l) && l, "data-sheet": h.isStringProp(u) && u || h.isStringProp(p) && p, "data-login-screen": h.isStringProp(c) && c || h.isStringProp(d) && d, "data-sortable": h.isStringProp(f) && f || h.isStringProp(v) && v || h.isStringProp(m) && m } }, linkActionsClasses: function(e) { var t = e.panelOpen,
                        n = e.panelClose,
                        a = e.popupOpen,
                        i = e.actionsClose,
                        r = e.actionsOpen,
                        s = e.popupClose,
                        o = e.popoverOpen,
                        l = e.popoverClose,
                        c = e.loginScreenOpen,
                        d = e.loginScreenClose,
                        u = e.sheetOpen,
                        p = e.sheetClose,
                        f = e.sortableEnable,
                        v = e.sortableDisable,
                        m = e.sortableToggle; return { "panel-close": h.isTrueProp(n), "panel-open": t || "" === t, "popup-close": h.isTrueProp(s), "popup-open": a || "" === a, "actions-close": h.isTrueProp(i), "actions-open": r || "" === r, "popover-close": h.isTrueProp(l), "popover-open": o || "" === o, "sheet-close": h.isTrueProp(p), "sheet-open": u || "" === u, "login-screen-close": h.isTrueProp(d), "login-screen-open": c || "" === c, "sortable-enable": h.isTrueProp(f), "sortable-disable": h.isTrueProp(v), "sortable-toggle": !0 === m || m.length } } },
            b = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "accordion-item-content", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], props: g.colorProps, name: "f7-accordion-content", computed: { classes: function() { return g.colorClasses(this) } } },
            y = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "accordion-item", class: this.classes, on: { "accordion:open": this.onOpen, "accordion:opened": this.onOpened, "accordion:close": this.onClose, "accordion:closed": this.onClosed } }, [this._t("default")], 2) }, staticRenderFns: [], name: "f7-accordion-item", props: h.extend({ opened: Boolean }, g.colorProps), computed: { classes: function() { return h.extend({ "accordion-item-opened": this.opened }, g.colorClasses(this)) } }, methods: { onOpen: function(e) { this.$emit("accordion:open", e) }, onOpened: function(e) { this.$emit("accordion:opened", e) }, onClose: function(e) { this.$emit("accordion:close", e) }, onClosed: function(e) { this.$emit("accordion:closed", e) } } },
            w = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "accordion-item-toggle", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], props: g.colorProps, name: "f7-accordion-toggle", computed: { classes: function() { return g.colorClasses(this) } } },
            C = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "accordion-list", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], props: g.colorProps, name: "f7-accordion", computed: { classes: function() { return g.colorClasses(this) } } },
            x = { name: "f7-actions-button", render: function(e) { var t = void 0;
                    this.$slots.media && this.$slots.media.length && (t = e("div", { staticClass: "actions-button-media" }, this.$slots.media)); var n = e("div", { staticClass: "actions-button-text" }, this.$slots.default); return e("div", { staticClass: "actions-button", class: this.classes, on: { click: this.onClick } }, [t, n]) }, props: h.extend({ bold: Boolean, close: { type: Boolean, default: !0 } }, g.colorProps), computed: { classes: function() { return h.extend({ "actions-button-bold": this.bold }, g.colorClasses(this)) } }, methods: { onClick: function(e) { var t = this.$$;
                        this.close && this.$f7 && this.$f7.actions.close(t(this.$el).parents(".actions-modal")), this.$emit("click", e) } } },
            k = { name: "f7-actions-group", render: function(e) { return e("div", { staticClass: "actions-group" }, this.$slots.default) } },
            E = { name: "f7-actions-label", render: function(e) { return e("div", { staticClass: "actions-label", class: this.classes, on: { click: this.onClick } }, this.$slots.default) }, props: h.extend({ bold: Boolean }, g.colorProps), computed: { classes: function() { return h.extend({ "actions-button-bold": this.bold }, g.colorClasses(this)) } }, methods: { onClick: function(e) { this.$emit("click", e) } } },
            $ = { name: "f7-actions", render: function(e) { return e("div", { staticClass: "actions-modal", class: this.classes, on: { "actions:open": this.onOpen, "actions:opened": this.onOpened, "actions:close": this.onClose, "actions:closed": this.onClosed } }, this.$slots.default) }, watch: { opened: function(e) { this.f7Actions && (e ? this.f7Actions.open() : this.f7Actions.close()) } }, props: h.extend({ opened: Boolean, grid: Boolean, convertToPopover: Boolean, forceToPopover: Boolean, target: [String, Object] }, g.colorProps), computed: { classes: function() { return h.extend({ "actions-grid": this.grid }, g.colorClasses(this)) } }, beforeDestroy: function() { this.f7Actions && this.f7Actions.destroy() }, methods: { onOpen: function(e) { this.$emit("actions:open", e) }, onOpened: function(e) { this.$emit("actions:opened", e) }, onClose: function(e) { this.$emit("actions:close", e) }, onClosed: function(e) { this.$emit("actions:closed", e) }, open: function(e) { if (this.$f7) return this.$f7.actions.open(this.$el, e) }, close: function(e) { if (this.$f7) return this.$f7.actions.close(this.$el, e) }, onF7Ready: function() { var e = { el: this.$el, grid: this.grid };
                        this.target && (e.targetEl = this.target), void 0 !== this.$options.propsData.convertToPopover && (e.convertToPopover = this.convertToPopover), void 0 !== this.$options.propsData.forceToPopover && (e.forceToPopover = this.forceToPopover), this.f7Actions = this.$f7.actions.create(e), this.opened && this.f7Actions.open(!1) } } },
            S = { render: function() { var e = this.$createElement; return (this._self._c || e)("span", { staticClass: "badge", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], props: g.colorProps, name: "f7-badge", computed: { classes: function() { return g.colorClasses(this) } } },
            T = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "block-footer", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], name: "f7-block-footer", props: g.colorProps, computed: { classes: function() { return g.colorClasses(this) } } },
            _ = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "block-header", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], props: g.colorProps, name: "f7-block-header", computed: { classes: function() { return g.colorClasses(this) } } },
            M = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "block-title", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], props: g.colorProps, name: "f7-block-title", computed: { classes: function() { return g.colorClasses(this) } } },
            P = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "block", class: this.classes, on: { "tab:show": this.onTabShow, "tab:hide": this.onTabHide } }, [this._t("default")], 2) }, staticRenderFns: [], name: "f7-block", props: h.extend({ inset: Boolean, tabletInset: Boolean, strong: Boolean, tabs: Boolean, tab: Boolean, tabActive: Boolean, accordionList: Boolean, noHairlines: Boolean, noHairlinesMd: Boolean, noHairlinesIos: Boolean }, g.colorProps), computed: { classes: function() { return h.extend({ inset: this.inset, "block-strong": this.strong, "accordion-list": this.accordionList, "tablet-inset": this.tabletInset, tabs: this.tabs, tab: this.tab, "tab-active": this.tabActive, "no-hairlines": this.noHairlines, "no-hairlines-md": this.noHairlinesMd, "no-hairlines-ios": this.noHairlinesIos }, g.colorClasses(this)) } }, methods: { onTabShow: function(e) { this.$emit("tab:show", e) }, onTabHide: function(e) { this.$emit("tab:hide", e) } } },
            O = { render: function() { var e = this.$createElement; return (this._self._c || e)("i", { staticClass: "icon", class: this.classes, style: { "font-size": this.sizeComputed } }, [this._v(this._s(this.iconTextComputed)), this._t("default")], 2) }, staticRenderFns: [], name: "f7-icon", props: h.extend({ material: String, f7: String, ion: String, fa: String, icon: String, ifMd: String, ifIos: String, size: [String, Number] }, g.colorProps), computed: { sizeComputed: function() { var e = this.size; return "number" != typeof e && parseFloat(e) !== 1 * e || (e += "px"), e }, iconTextComputed: function() { var e = this.material || this.f7; return this.ifMd && this.$theme.md && (this.ifMd.indexOf("material:") >= 0 || this.ifMd.indexOf("f7:") >= 0) ? e = this.ifMd.split(":")[1] : this.ifIos && this.$theme.ios && (this.ifIos.indexOf("material:") >= 0 || this.ifIos.indexOf("f7:") >= 0) && (e = this.ifIos.split(":")[1]), e }, classes: function() { var e = {}; if (this.ifMd || this.ifIos) { var t = this[this.$theme.md ? "ifMd" : "ifIos"].split(":"),
                                n = t[0],
                                a = t[1]; "material" !== n && "fa" !== n && "f7" !== n || (e.fa = "fa" === n, e["material-icons"] = "material" === n, e["f7-icons"] = "f7" === n), "fa" !== n && "ion" !== n || (e[n + "-" + a] = !0), "icon" === n && (e[a] = !0) } else e = { "material-icons": this.material, "f7-icons": this.f7, fa: this.fa }, this.ion && (e["ion-" + this.ion] = !0), this.fa && (e["fa-" + this.fa] = !0), this.icon && (e[this.icon] = !0); return h.extend(e, g.colorClasses(this)) } } },
            B = h.extend({ noFastclick: Boolean, noFastClick: Boolean, text: String, tabLink: [Boolean, String], tabLinkActive: Boolean, href: { type: [String, Boolean], default: "#" }, round: Boolean, roundMd: Boolean, roundIos: Boolean, fill: Boolean, fillMd: Boolean, fillIos: Boolean, big: Boolean, bigMd: Boolean, bigIos: Boolean, small: Boolean, smallMd: Boolean, smallIos: Boolean, raised: Boolean, outline: Boolean, active: Boolean, disabled: Boolean }, g.colorProps, g.linkIconProps, g.linkRouterProps, g.linkActionsProps),
            I = { name: "f7-button", components: { f7Icon: O }, props: B, render: function(e) { var t = void 0,
                        n = void 0; return this.text && (n = e("span", {}, this.text)), (this.icon || this.iconMaterial || this.iconIon || this.iconFa || this.iconF7 || this.iconIfMd || this.iconIfIos) && (t = e("f7-icon", { props: { material: this.iconMaterial, ion: this.iconIon, fa: this.iconFa, f7: this.iconF7, icon: this.icon, ifMd: this.iconIfMd, ifIos: this.iconIfIos, color: this.iconColor, size: this.iconSize } })), this.classes.button = !0, e("a", { class: this.classes, attrs: this.attrs, on: { click: this.onClick } }, [t, n, this.$slots.default]) }, computed: { attrs: function() { var e = this.href,
                            t = this.target,
                            n = this.tabLink,
                            a = e; return !0 === e && (a = "#"), !1 === e && (a = void 0), h.extend({ href: a, target: t, "data-tab": h.isStringProp(n) && n }, g.linkRouterAttrs(this), g.linkActionsAttrs(this)) }, classes: function() { var e = this.noFastclick,
                            t = this.noFastClick,
                            n = this.tabLink,
                            a = this.tabLinkActive,
                            i = this.round,
                            r = this.roundIos,
                            s = this.roundMd,
                            o = this.fill,
                            l = this.fillIos,
                            c = this.fillMd,
                            d = this.big,
                            u = this.bigIos,
                            p = this.bigMd,
                            f = this.small,
                            v = this.smallIos,
                            m = this.smallMd,
                            b = this.raised,
                            y = this.active,
                            w = this.outline,
                            C = this.disabled; return h.extend({ "tab-link": n || "" === n, "tab-link-active": a, "no-fastclick": e || t, "button-round": i, "button-round-ios": r, "button-round-md": s, "button-fill": o, "button-fill-ios": l, "button-fill-md": c, "button-big": d, "button-big-ios": u, "button-big-md": p, "button-small": f, "button-small-ios": v, "button-small-md": m, "button-raised": b, "button-active": y, "button-outline": w, disabled: C }, g.colorClasses(this), g.linkRouterClasses(this), g.linkActionsClasses(this)) } }, methods: { onClick: function(e) { this.$emit("click", e) } } },
            A = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "card-content", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], name: "f7-card-content", props: h.extend({ padding: { type: Boolean, default: !0 } }, g.colorProps), computed: { classes: function() { return h.extend({ "card-content-padding": this.padding }, g.colorClasses(this)) } } },
            L = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "card-footer", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], props: g.colorProps, name: "f7-card-footer", computed: { classes: function() { return g.colorClasses(this) } } },
            D = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "card-header", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], props: g.colorProps, name: "f7-card-header", computed: { classes: function() { return g.colorClasses(this) } } },
            R = h.extend({ title: [String, Number], content: [String, Number], footer: [String, Number], padding: { type: Boolean, default: !0 } }, g.colorProps),
            z = { name: "f7-card", components: { f7CardHeader: D, f7CardContent: A, f7CardFooter: L }, props: R, render: function(e) { var t = void 0,
                        n = void 0,
                        a = void 0; return (this.title || this.$slots && this.$slots.header) && (t = e("f7-card-header", [this.title, this.$slots.header])), (this.content || this.$slots && this.$slots.content) && (n = e("f7-card-content", { props: { padding: this.padding } }, [this.content, this.$slots.content])), (this.footer || this.$slots && this.$slots.footer) && (a = e("f7-card-footer", [this.footer, this.$slots.footer])), e("div", { staticClass: "card", class: this.classes }, [t, n, a, this.$slots.default]) }, computed: { classes: function() { return g.colorClasses(this) } } },
            N = { name: "f7-checkbox", props: h.extend({ checked: Boolean, name: [Number, String], value: [Number, String, Boolean], disabled: Boolean, readonly: Boolean }, g.colorProps), render: function(e) { var t = e("input", { attrs: { type: "checkbox", name: this.name }, domProps: { value: this.value, disabled: this.disabled, readonly: this.readonly, checked: this.checked }, on: { change: this.onChange } }),
                        n = e("i", { staticClass: "icon-checkbox" }); return e("label", { staticClass: "checkbox", class: this.classes }, [t, n, this.$slots.default]) }, computed: { classes: function() { return h.extend({ disabled: this.disabled }, g.colorClasses(this)) } }, methods: { onChange: function(e) { this.$emit("change", e) } } },
            F = { name: "f7-chip", props: h.extend({ media: String, text: [String, Number], deleteable: Boolean, mediaBgColor: String, mediaTextColor: String }, g.colorProps), render: function(e) { var t = void 0,
                        n = void 0,
                        a = void 0; return (this.media || this.$slots && this.$slots.media) && (t = e("div", { staticClass: "chip-media", class: this.mediaClasses }, this.media || this.$slots.media)), (this.text || this.$slots && this.$slots.text) && (n = e("div", { staticClass: "chip-label" }, [this.text, this.$slots.text])), this.deleteable && (a = e("a", { staticClass: "chip-delete", attrs: { href: "#" }, on: { click: this.onDeleteClick } })), e("div", { staticClass: "chip", class: this.classes, on: { click: this.onClick } }, [t, n, a]) }, computed: { classes: function() { return g.colorClasses(this) }, mediaClasses: function() { var e = {}; return this.mediaTextColor && (e["text-color-" + this.mediaTextColor] = !0), this.mediaBgColor && (e["bg-color-" + this.mediaBgColor] = !0), e } }, methods: { onClick: function(e) { this.$emit("click", e) }, onDeleteClick: function(e) { this.$emit("delete", e) } } },
            H = { name: "f7-col", props: h.extend({ tag: { type: String, default: "div" }, width: { type: [Number, String], default: "auto" }, tabletWidth: { type: [Number, String] }, desktopWidth: { type: [Number, String] } }, g.colorProps), render: function(e) { return e(this.tag, { class: this.classes }, [this.$slots.default]) }, computed: { classes: function() { var e; return h.extend((e = { col: "auto" === this.width }, i()(e, "col-" + this.width, "auto" !== this.width), i()(e, "tablet-" + this.tabletWidth, this.tabletWidth), i()(e, "desktop-" + this.desktopWidth, this.desktopWidth), e), g.colorClasses(this)) } } },
            j = { render: function() { var e = this.$createElement; return (this._self._c || e)("a", { class: this.classes, on: { click: this.onClick } }, [this._t("default")], 2) }, staticRenderFns: [], name: "f7-fab-button", props: h.extend({ fabClose: Boolean }, g.colorProps), computed: { classes: function() { return h.extend({ "fab-close": this.fabClose }, g.colorClasses(this)) } }, methods: { onClick: function(e) { this.$emit("click", e) } } },
            V = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "fab-buttons", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], name: "f7-fab-buttons", props: h.extend({ position: { type: String, default: "top" } }, g.colorProps), computed: { classes: function() { return h.extend(i()({}, "fab-buttons-" + this.position, !0), g.colorClasses(this)) } } },
            q = { name: "f7-fab", props: h.extend({ morphTo: String, href: [Boolean, String], position: { type: String, default: "right-bottom" } }, g.colorProps), render: function(e) { var t = this.href;!0 === t && (t = "#"), !1 === t && (t = void 0); var n = [],
                        a = []; if (this.$slots.default)
                        for (var i = 0; i < this.$slots.default.length; i += 1) { var r = this.$slots.default[i];
                            r.tag && r.tag.indexOf("fab-buttons") >= 0 ? a.push(r) : n.push(r) }
                    var s = e("a", { attrs: { href: t }, on: { click: this.onClick } }, n); return a.push(s), e("div", { staticClass: "fab", class: this.classes, attrs: { "data-morph-to": this.morphTo } }, a) }, computed: { classes: function() { return h.extend(i()({ "fab-morph": this.morphTo }, "fab-" + this.position, !0), g.colorClasses(this)) } }, methods: { onClick: function(e) { this.$emit("click", e) } } },
            W = { name: "f7-toggle", render: function(e) { return e("label", { staticClass: "toggle", class: h.extend({ disabled: this.disabled }, g.colorClasses(this)) }, [e("input", { attrs: { type: "checkbox", name: this.name }, domProps: { disabled: this.disabled, readonly: this.readonly, checked: this.checked, value: this.value }, on: { change: this.onChange } }), e("span", { staticClass: "toggle-icon" })]) }, props: h.extend({ init: { type: Boolean, default: !0 }, checked: Boolean, disabled: Boolean, readonly: Boolean, name: String, value: [String, Number, Array] }, g.colorProps), watch: { checked: function(e) { this.f7Toggle && (this.f7Toggle.checked = e) } }, beforeDestroy: function() { this.f7Toggle && this.f7Toggle.destroy && this.f7Toggle.$el && this.f7Toggle.destroy() }, methods: { toggle: function() { this.f7Toggle && this.f7Toggle.setValue && this.f7Toggle.toggle() }, onChange: function(e) { this.$emit("change", e) }, onF7Ready: function(e) { var t = this;
                        t.init && t.$nextTick(function() { t.f7Toggle = e.toggle.create({ el: t.$el, on: { change: function(e) { t.$emit("toggle:change", e.checked) } } }) }) } } },
            Y = { name: "f7-range", render: function(e) { return e("div", { staticClass: "range-slider", class: h.extend({ disabled: this.disabled }, g.colorClasses(this)) }) }, props: h.extend({ init: { type: Boolean, default: !0 }, value: { type: [Number, Array, String], default: 0 }, min: { type: [Number, String], default: 0 }, max: { type: [Number, String], default: 100 }, step: { type: [Number, String], default: 1 }, label: { type: Boolean, default: !1 }, dual: { type: Boolean, default: !1 }, disabled: Boolean, draggableBar: { type: Boolean, default: !0 } }, g.colorProps), watch: { value: function(e) { this.f7Range && this.f7Range.setValue(e) } }, beforeDestroy: function() { this.f7Range && this.f7Range.destroy && this.f7Range.destroy() }, methods: { setValue: function(e) { this.f7Range && this.f7Range.setValue && this.f7Range.setValue(e) }, getValue: function() { if (this.f7Range && this.f7Range.getValue) return this.f7Range.getValue() }, onF7Ready: function(e) { var t = this;
                        t.init && t.$nextTick(function() { t.f7Range = e.range.create({ el: t.$el, value: t.value, min: t.min, max: t.max, step: t.step, label: t.label, dual: t.dual, draggableBar: t.draggableBar, on: { change: function(e, n) { t.$emit("range:change", n) }, changed: function(e, n) { t.$emit("range:changed", n) } } }) }) } } },
            U = h.extend({ type: String, name: String, value: [String, Number, Array], placeholder: String, id: String, size: [String, Number], accept: [String, Number], autocomplete: [String], autocorrect: [String], autocapitalize: [String], spellcheck: [String], autofocus: Boolean, autosave: String, checked: Boolean, disabled: Boolean, max: [String, Number], min: [String, Number], step: [String, Number], maxlength: [String, Number], minlength: [String, Number], multiple: Boolean, readonly: Boolean, required: Boolean, inputStyle: String, pattern: String, validate: Boolean, tabindex: [String, Number], resizable: Boolean, clearButton: Boolean, errorMessage: String, info: String, wrap: { type: Boolean, default: !0 } }, g.colorProps),
            G = { name: "f7-input", components: { f7Toggle: W, f7Range: Y }, props: U, render: function(e) { var t = void 0,
                        n = { name: this.name, type: this.type, placeholder: this.placeholder, id: this.id, value: this.value, size: this.size, accept: this.accept, autocomplete: this.autocomplete, autocorrect: this.autocorrect, autocapitalize: this.autocapitalize, spellcheck: this.spellcheck, autofocus: this.autofocus, autosave: this.autosave, checked: this.checked, disabled: this.disabled, max: this.max, maxlength: this.maxlength, min: this.min, minlength: this.minlength, step: this.step, multiple: this.multiple, readonly: this.readonly, required: this.required, pattern: this.pattern, validate: this.validate, tabindex: this.tabindex, "data-error-message": this.errorMessage },
                        a = { focus: this.onFocus, blur: this.onBlur, input: this.onInput, change: this.onChange, "textarea:resize": this.onTextareaResize, "input:notempty": this.onInputNotEmpty, "input:empty": this.onInputEmpty, "input:clear": this.onInputClear }; "select" === this.type || "textarea" === this.type || "file" === this.type ? (delete n.value, t = "select" === this.type ? e("select", { attrs: n, on: a, style: this.inputStyle, domProps: { value: this.value } }, this.$slots.default) : "file" === this.type ? e("input", { attrs: n, style: this.inputStyle, on: a }, this.$slots.default) : e("textarea", { attrs: n, style: this.inputStyle, on: a, class: { resizable: this.resizable }, domProps: { value: this.value } }, this.$slots.default)) : this.$slots.default && this.$slots.default.length > 0 || !this.type ? t = this.$slots.default : "toggle" === this.type ? t = e("f7-toggle", { props: n, on: a, attrs: { id: n.id } }) : "range" === this.type ? (a["range:change"] = this.onChange, t = e("f7-range", { props: n, on: a, attrs: { id: n.id } })) : t = e("input", { attrs: n, style: this.inputStyle, on: a, domProps: { value: this.value, checked: this.checked } }); var i = void 0;
                    this.clearButton && (i = e("span", { staticClass: "input-clear-button" })); for (var r = this.$parent, s = void 0; r && !s;) { var o = r.$vnode && r.$vnode.tag;
                        o && (o.indexOf("list-item") > 0 || o.indexOf("list-item-content") > 0) && (s = r), r = r.$parent } s && (s.itemInputForced = !0), s && (this.info || this.$slots.info && this.$slots.info.length) && (s.itemInputWithInfoForced = !0); var l = void 0; return (this.info || this.$slots.info && this.$slots.info.length) && (l = e("div", { staticClass: "item-input-info" }, [this.info, this.$slots.info])), this.wrap ? e("div", { staticClass: "item-input-wrap", class: this.classes }, [t, i, l]) : t }, computed: { classes: function() { return g.colorClasses(this) } }, watch: { value: function() { var e = this; if ("range" !== e.type && "toggle" !== e.type) { var t = e.$f7; if (t) { var n = e.wrap ? e.$el.querySelector("input, select, textarea") : e.$el;
                                e.$nextTick(function() { t.input.checkEmptyState(n), e.validate && t.input.validate(n), e.resizable && t.input.resizeTextarea(n) }) } } } }, methods: { onF7Ready: function(e) { var t = this.wrap ? this.$el.querySelector("input, select, textarea") : this.$el;
                        e.input.checkEmptyState(t), this.validate && e.input.validate(t), this.resizable && e.input.resizeTextarea(t) }, onTextareaResize: function(e) { this.$emit("textarea:resize", e) }, onInputNotEmpty: function(e) { this.$emit("input:notempty", e) }, onInputEmpty: function(e) { this.$emit("input:empty", e) }, onInputClear: function(e) { this.$emit("input:clear", e) }, onInput: function(e) { this.$emit("input", e) }, onFocus: function(e) { this.$emit("focus", e) }, onBlur: function(e) { this.$emit("blur", e) }, onChange: function(e) { this.$emit("change", e) } } },
            X = { name: "f7-label", props: h.extend({ floating: Boolean, inline: Boolean }, g.colorProps), render: function(e) { if (this.inline) { for (var t = this.$parent, n = void 0; t && !n;) { var a = t.$vnode && t.$vnode.tag;
                            a && (a.indexOf("list-item") > 0 || a.indexOf("list-item-content") > 0) && (n = t), t = t.$parent } n && (n.inlineLabelForced = !0) } return e("div", { staticClass: "item-title", class: this.classes }, [this.$slots.default]) }, computed: { classes: function() { return h.extend({ "item-label": !this.floating, "item-floating-label": this.floating }, g.colorClasses(this)) } } },
            K = h.extend({ noLinkClass: Boolean, noFastClick: Boolean, noFastclick: Boolean, text: String, tabLink: [Boolean, String], tabLinkActive: Boolean, iconOnly: Boolean, badge: [String, Number], badgeColor: [String], iconBadge: [String, Number], href: { type: [String, Boolean], default: "#" } }, g.colorProps, g.linkIconProps, g.linkRouterProps, g.linkActionsProps),
            J = { name: "f7-link", components: { f7Badge: S, f7Icon: O }, props: K, render: function(e) { var t = (this.tabLink || "" === this.tabLink) && this.$parent && this.$parent.tabbar && this.$parent.labels,
                        n = void 0,
                        a = void 0,
                        i = void 0,
                        r = void 0; return this.text && (this.badge && (i = e("f7-badge", { props: { color: this.badgeColor } }, this.badge)), a = e("span", { class: { "tabbar-label": t } }, [this.text, i])), (this.icon || this.iconMaterial || this.iconIon || this.iconFa || this.iconF7 || this.iconIfMd && this.$theme.md || this.iconIfIos && this.$theme.ios) && (this.iconBadge && (r = e("f7-badge", { props: { color: this.badgeColor } }, this.iconBadge)), n = e("f7-icon", { props: { material: this.iconMaterial, ion: this.iconIon, fa: this.iconFa, f7: this.iconF7, icon: this.icon, ifMd: this.iconIfMd, ifIos: this.iconIfIos, color: this.iconColor, size: this.iconSize } }, [r])), (this.iconOnly || !this.text && this.$slots.default && 0 === this.$slots.default.length || !this.text && !this.$slots.default) && (this.classes["icon-only"] = !0), this.classes.link = !(this.noLinkClass || t), e("a", { class: this.classes, attrs: this.attrs, on: { click: this.onClick } }, [n, a, this.$slots.default]) }, computed: { attrs: function() { var e = this.href,
                            t = this.target,
                            n = this.tabLink,
                            a = e; return !0 === e && (a = "#"), !1 === e && (a = void 0), h.extend({ href: a, target: t, "data-tab": h.isStringProp(n) && n }, g.linkRouterAttrs(this), g.linkActionsAttrs(this)) }, classes: function() { var e = this.noFastclick,
                            t = this.noFastClick,
                            n = this.tabLink,
                            a = this.tabLinkActive; return h.extend({ "tab-link": n || "" === n, "tab-link-active": a, "no-fastclick": e || t }, g.colorClasses(this), g.linkRouterClasses(this), g.linkActionsClasses(this)) } }, methods: { onClick: function(e) { this.$emit("click", e) } } },
            Q = { name: "f7-list-button", render: function(e) { return e("li", {}, [e("a", { staticClass: "item-link list-button", attrs: this.attrs, class: this.classes, on: { click: this.onClick } }, [this.title || this.text, this.$slots.default])]) }, props: h.extend({ noFastclick: Boolean, noFastClick: Boolean, title: [String, Number], text: [String, Number], tabLink: [Boolean, String], tabLinkActive: Boolean, link: [Boolean, String], href: [Boolean, String], target: String }, g.colorProps, g.linkRouterProps, g.linkActionsProps), computed: { attrs: function() { var e = this.link,
                            t = this.href,
                            n = this.target,
                            a = this.tabLink; return h.extend({ href: "boolean" == typeof e && "boolean" == typeof t ? "#" : e || t, target: n, "data-tab": h.isStringProp(a) && a }, g.linkRouterAttrs(this), g.linkActionsAttrs(this)) }, classes: function() { var e = this.noFastclick,
                            t = this.noFastClick,
                            n = this.tabLink,
                            a = this.tabLinkActive; return h.extend({ "tab-link": n || "" === n, "tab-link-active": a, "no-fastclick": e || t }, g.colorClasses(this), g.linkRouterClasses(this), g.linkActionsClasses(this)) } }, methods: { onClick: function(e) { this.$emit("click", e) } } },
            Z = { render: function() { var e = this.$createElement,
                        t = this._self._c || e; return t("div", { staticClass: "list-group", class: this.classes }, [t("ul", [this._t("default")], 2)]) }, staticRenderFns: [], name: "f7-list-group", props: h.extend({ mediaList: Boolean, sortable: Boolean }, g.colorProps), computed: { classes: function() { return g.colorClasses(this) }, sortableComputed: function() { return this.sortable || this.$parent.sortable }, mediaListComputed: function() { return this.mediaList || this.$parent.mediaList } }, data: function() { return {} } },
            ee = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "list-index", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], props: h.extend({ init: { type: Boolean, default: !0 }, listEl: [String, Object], indexes: { type: [String, Array], default: "auto" }, scrollList: { type: Boolean, default: !0 }, label: { type: Boolean, default: !1 }, iosItemHeight: { type: Number, default: 14 }, mdItemHeight: { type: Number, default: 14 } }, g.colorProps), name: "f7-list-index", computed: { classes: function() { return g.colorClasses(this) } }, beforeDestroy: function() { this.init && this.f7ListIndex && this.f7ListIndex.destroy && this.f7ListIndex.destroy() }, watch: { indexes: function() { this.f7ListIndex && (this.f7ListIndex.params.indexes = this.indexes, this.update()) } }, methods: { update: function() { this.f7ListIndex && this.f7ListIndex.update() }, scrollListToIndex: function(e) { this.f7ListIndex && this.f7ListIndex.scrollListToIndex(e) }, onF7Ready: function(e) { var t = this; if (t.init) { var n = t.$el,
                                a = t.listEl,
                                i = t.indexes,
                                r = t.iosItemHeight,
                                s = t.mdItemHeight,
                                o = t.scrollList,
                                l = t.label;
                            t.f7ListIndex = e.listIndex.create({ el: n, listEl: a, indexes: i, iosItemHeight: r, mdItemHeight: s, scrollList: o, label: l, on: { select: function(e, n, a) { t.$emit("listindex:select", n, a) } } }) } } } },
            te = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "item-cell", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], name: "f7-list-item-cell", props: g.colorProps, computed: { classes: function() { return g.colorClasses(this) } } },
            ne = h.extend({ title: [String, Number], text: [String, Number], media: String, subtitle: [String, Number], header: [String, Number], footer: [String, Number], after: [String, Number], badge: [String, Number], badgeColor: String, mediaList: Boolean, itemInput: Boolean, itemInputWithInfo: Boolean, inlineLabel: Boolean, checkbox: Boolean, checked: Boolean, radio: Boolean, name: String, value: [String, Number, Array], readonly: Boolean, required: Boolean, disabled: Boolean }, g.colorProps),
            ae = { name: "f7-list-item-content", components: { f7Badge: S }, props: ne, render: function(e) { var t, n = [],
                        a = [],
                        i = [],
                        r = [],
                        s = [],
                        o = [],
                        l = [],
                        c = [],
                        d = [],
                        u = [],
                        p = [],
                        f = [],
                        v = [],
                        m = [],
                        b = [],
                        y = [],
                        w = [],
                        C = [],
                        x = C[0],
                        k = C[1],
                        E = C[2],
                        $ = C[3],
                        S = C[5],
                        T = C[6],
                        _ = C[7],
                        M = C[8],
                        P = C[9],
                        O = C[10],
                        B = C[11],
                        I = C[12]; if (this.$slots.default && this.$slots.default.length > 0)
                        for (var A = 0; A < this.$slots.default.length; A += 1) { var L = this.$slots.default[A].data ? this.$slots.default[A].data.slot : void 0;
                            L && "inner" !== L || s.push(this.$slots.default[A]), "content-start" === L && n.push(this.$slots.default[A]), "content" === L && a.push(this.$slots.default[A]), "content-end" === L && i.push(this.$slots.default[A]), "after-start" === L && l.push(this.$slots.default[A]), "after" === L && c.push(this.$slots.default[A]), "after-end" === L && d.push(this.$slots.default[A]), "media" === L && u.push(this.$slots.default[A]), "inner-start" === L && r.push(this.$slots.default[A]), "inner-end" === L && o.push(this.$slots.default[A]), "before-title" === L && p.push(this.$slots.default[A]), "title" === L && f.push(this.$slots.default[A]), "after-title" === L && v.push(this.$slots.default[A]), "subtitle" === L && m.push(this.$slots.default[A]), "text" === L && b.push(this.$slots.default[A]), "header" === L && y.push(this.$slots.default[A]), "footer" === L && w.push(this.$slots.default[A]) }
                    if ((this.radio || this.checkbox) && (P = e("input", { attrs: { value: this.value, name: this.name, checked: this.checked, readonly: this.readonly, disabled: this.disabled, required: this.required, type: this.radio ? "radio" : "checkbox" }, on: { change: this.onChange }, domProps: { checked: this.checked, disabled: this.disabled, required: this.required } }), O = e("i", { staticClass: "icon icon-" + (this.radio ? "radio" : "checkbox") })), this.media || u.length) { var D = void 0;
                        this.media && (D = e("img", { attrs: { src: this.media } })), M = e("div", { staticClass: "item-media" }, [D, u]) } return (this.header || y.length) && (B = e("div", { staticClass: "item-header" }, [this.header, y])), (this.footer || w.length) && (I = e("div", { staticClass: "item-footer" }, [this.footer, w])), (this.title || f.length) && (x = e("div", { staticClass: "item-title" }, [!this.mediaList && B, this.title, f, !this.mediaList && I])), (this.subtitle || m.length) && (T = e("div", { staticClass: "item-subtitle" }, [this.subtitle, m])), (this.text || b.length) && (_ = e("div", { staticClass: "item-text" }, [this.text, b])), (this.after || this.badge || c.length) && (this.after && (E = e("span", [this.after])), this.badge && ($ = e("f7-badge", { props: { color: this.badgeColor } }, [this.badge])), k = e("div", { staticClass: "item-after" }, [l, E, $, c, d])), this.mediaList && (S = e("div", { staticClass: "item-title-row" }, [p, x, v, k])), t = e("div", { staticClass: "item-inner" }, this.mediaList ? [r, B, S, T, _, s, I, o] : [r, p, x, v, k, s, o]), e(this.checkbox || this.radio ? "label" : "div", { staticClass: "item-content", class: h.extend({ "item-checkbox": this.checkbox, "item-radio": this.radio, "item-input": this.itemInput || this.itemInputForced, "inline-label": this.inlineLabel || this.inlineLabelForced, "item-input-with-info": this.itemInputWithInfo || this.itemInputWithInfoForced }, g.colorClasses(this)), on: { click: this.onClick } }, [n, P, O, M, t, a, i]) }, data: function() { return { itemInputForced: !1, inlineLabelForced: !1, itemInputWithInfoForced: !1 } }, methods: { onClick: function(e) { this.$emit("click", e) }, onChange: function(e) { this.$emit("change", e) }, onInput: function(e) { this.$emit("input", e) } } },
            ie = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "item-row", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], name: "f7-list-item-row", props: g.colorProps, computed: { classes: function() { return g.colorClasses(this) } } },
            re = h.extend({ title: [String, Number], text: [String, Number], media: String, subtitle: [String, Number], header: [String, Number], footer: [String, Number], link: [Boolean, String], target: String, noFastclick: Boolean, noFastClick: Boolean, after: [String, Number], badge: [String, Number], badgeColor: String, mediaItem: Boolean, mediaList: Boolean, divider: Boolean, groupTitle: Boolean, swipeout: Boolean, sortable: Boolean, accordionItem: Boolean, accordionItemOpened: Boolean, smartSelect: Boolean, smartSelectParams: Object, checkbox: Boolean, radio: Boolean, checked: Boolean, name: String, value: [String, Number, Array], readonly: Boolean, required: Boolean, disabled: Boolean, itemInput: Boolean, itemInputWithInfo: Boolean, inlineLabel: Boolean }, g.colorProps, g.linkRouterProps, g.linkActionsProps),
            se = { name: "f7-list-item", components: { f7ListItemContent: ae }, props: re, render: function(e) { var t = void 0,
                        n = void 0,
                        a = void 0; if (this.simpleListComputed || (a = e("f7-list-item-content", { props: { title: this.title, text: this.text, media: this.media, subtitle: this.subtitle, after: this.after, header: this.header, footer: this.footer, badge: this.badge, badgeColor: this.badgeColor, mediaList: this.mediaListComputed, accordionItem: this.accordionItem, checkbox: this.checkbox, checked: this.checked, radio: this.radio, name: this.name, value: this.value, readonly: this.readonly, required: this.required, disabled: this.disabled, itemInput: this.itemInput || this.itemInputForced, itemInputWithInfo: this.itemInputWithInfo || this.itemInputWithInfoForced, inlineLabel: this.inlineLabel || this.inlineLabelForced }, on: this.link || this.href || this.accordionItem || this.smartSelect ? {} : { click: this.onClick, change: this.onChange } }, [this.$slots["content-start"], this.$slots.content, this.$slots["content-end"], this.$slots.media, this.$slots["inner-start"], this.$slots.inner, this.$slots["inner-end"], this.$slots["after-start"], this.$slots.after, this.$slots["after-end"], this.$slots.header, this.$slots.footer, this.$slots["before-title"], this.$slots.title, this.$slots["after-title"], this.$slots.subtitle, this.$slots.text, this.swipeout || this.accordionItem ? [] : this.$slots.default]), (this.link || this.href || this.accordionItem || this.smartSelect) && (n = e("a", { attrs: h.extend({ href: !0 === this.link || this.accordionItem || this.smartSelect ? "#" : this.link || this.href, target: this.target }, g.linkRouterAttrs(this), g.linkActionsAttrs(this)), class: h.extend({ "item-link": !0, "no-fastclick": this.noFastclick || this.noFastClick, "smart-select": this.smartSelect }, g.linkRouterClasses(this), g.linkActionsClasses(this)), on: { click: this.onClick } }, [a]))), this.divider || this.groupTitle) t = [e("span", this.$slots.default || this.title)];
                    else if (this.simpleListComputed) t = [this.title, this.$slots.default];
                    else { var i = this.link || this.href || this.smartSelect || this.accordionItem ? n : a;
                        t = this.swipeout ? [e("div", { class: { "swipeout-content": !0 } }, [i])] : [i], this.sortableComputed && t.push(e("div", { class: { "sortable-handler": !0 } })), (this.swipeout || this.accordionItem) && t.push(this.$slots.default), t.unshift(this.$slots["root-start"]), t.push(this.$slots.root), t.push(this.$slots["root-end"]) } return e("li", { class: h.extend({ "item-divider": this.divider, "list-group-title": this.groupTitle, "media-item": this.mediaItem, swipeout: this.swipeout, "accordion-item": this.accordionItem, "accordion-item-opened": this.accordionItemOpened }, g.colorClasses(this)), on: { "swipeout:open": this.onSwipeoutOpen, "swipeout:opened": this.onSwipeoutOpened, "swipeout:close": this.onSwipeoutClose, "swipeout:closed": this.onSwipeoutClosed, "swipeout:delete": this.onSwipeoutDelete, "swipeout:deleted": this.onSwipeoutDeleted, swipeout: this.onSwipeout, "accordion:open": this.onAccOpen, "accordion:opened": this.onAccOpened, "accordion:close": this.onAccClose, "accordion:closed": this.onAccClosed } }, t) }, data: function() { return { itemInputForced: !1, inlineLabelForced: !1, itemInputWithInfoForced: !1 } }, computed: { sortableComputed: function() { return this.sortable || this.$parent.sortable || this.$parent.sortableComputed }, mediaListComputed: function() { return this.mediaList || this.mediaItem || this.$parent.mediaList || this.$parent.mediaListComputed }, simpleListComputed: function() { return this.simpleList || this.$parent.simpleList || this.$parent.$parent && this.$parent.simpleList } }, beforeDestroy: function() { this.smartSelect && this.f7SmartSelect && this.f7SmartSelect.destroy() }, methods: { onF7Ready: function(e) { if (this.smartSelect) { var t = h.extend({ el: this.$el.querySelector("a.smart-select") }, this.smartSelectParams || {});
                            this.f7SmartSelect = e.smartSelect.create(t) } }, onClick: function(e) { this.smartSelect && this.f7SmartSelect && this.f7SmartSelect.open(), "input" !== e.target.tagName.toLowerCase() && this.$emit("click", e) }, onSwipeoutDeleted: function(e) { this.$emit("swipeout:deleted", e) }, onSwipeoutDelete: function(e) { this.$emit("swipeout:delete", e) }, onSwipeoutClose: function(e) { this.$emit("swipeout:close", e) }, onSwipeoutClosed: function(e) { this.$emit("swipeout:closed", e) }, onSwipeoutOpen: function(e) { this.$emit("swipeout:open", e) }, onSwipeoutOpened: function(e) { this.$emit("swipeout:opened", e) }, onSwipeout: function(e) { this.$emit("swipeout", e) }, onAccClose: function(e) { this.$emit("accordion:close", e) }, onAccClosed: function(e) { this.$emit("accordion:closed", e) }, onAccOpen: function(e) { this.$emit("accordion:open", e) }, onAccOpened: function(e) { this.$emit("accordion:opened", e) }, onChange: function(e) { this.$emit("change", e) }, onInput: function(e) { this.$emit("input", e) } } },
            oe = { name: "f7-list", props: h.extend({ inset: Boolean, tabletInset: Boolean, mediaList: Boolean, sortable: Boolean, sortableEnabled: Boolean, accordionList: Boolean, contactsList: Boolean, simpleList: Boolean, linksList: Boolean, noHairlines: Boolean, noHairlinesBetween: Boolean, noHairlinesMd: Boolean, noHairlinesBetweenMd: Boolean, noHairlinesIos: Boolean, noHairlinesBetweenIos: Boolean, tab: Boolean, tabActive: Boolean, form: Boolean, formStoreData: Boolean, inlineLabels: Boolean, virtualList: Boolean, virtualListParams: Object }, g.colorProps), beforeDestroy: function() { this.virtualList && this.f7VirtualList && this.f7VirtualList.destroy && this.f7VirtualList.destroy() }, render: function(e) { var t = [],
                        n = this.$slots.list || []; if (this.$slots.default)
                        for (var a = 0; a < this.$slots.default.length; a += 1) { var i = this.$slots.default[a].tag;
                            i && !("li" === i || i.indexOf("list-item") >= 0 || i.indexOf("list-button") >= 0) ? t.push(this.$slots.default[a]) : i && n.push(this.$slots.default[a]) }
                    return e(this.form ? "form" : "div", { staticClass: "list", class: h.extend({ inset: this.inset, "tablet-inset": this.tabletInset, "media-list": this.mediaList, "simple-list": this.simpleList, "links-list": this.linksList, sortable: this.sortable, "accordion-list": this.accordionList, "contacts-list": this.contactsList, "virtual-list": this.virtualList, "sortable-enabled": this.sortableEnabled, tab: this.tab, "tab-active": this.tabActive, "no-hairlines": this.noHairlines, "no-hairlines-between": this.noHairlinesBetween, "no-hairlines-md": this.noHairlinesMd, "no-hairlines-between-md": this.noHairlinesBetweenMd, "no-hairlines-ios": this.noHairlinesIos, "no-hairlines-between-ios": this.noHairlinesBetweenIos, "form-store-data": this.formStoreData, "inline-labels": this.inlineLabels }, g.colorClasses(this)), on: { "sortable:enable": this.onSortableEnable, "sortable:disable": this.onSortableDisable, "sortable:sort": this.onSortableSort, "tab:show": this.onTabShow, "tab:hide": this.onTabHide } }, [n.length > 0 ? [this.$slots["before-list"], e("ul", {}, n), this.$slots["after-list"], t] : [this.$slots["before-list"], t, this.$slots["after-list"]]]) }, methods: { onSortableEnable: function(e) { this.$emit("sortable:enable", e) }, onSortableDisable: function(e) { this.$emit("sortable:disable", e) }, onSortableSort: function(e) { this.$emit("sortable:sort", e, e.detail) }, onTabShow: function(e) { this.$emit("tab:show", e) }, onTabHide: function(e) { this.$emit("tab:hide", e) }, onF7Ready: function(e) { var t = this; if (t.virtualList) { var n = (0, t.$$)(t.$el).find("script"),
                                a = n.html();!a && n.length > 0 && (a = n[0].outerHTML, a = /\<script type="text\/template7"\>(.*)<\/script>/.exec(a)[1]); var i = t.virtualListParams || {};
                            (a || i.renderItem || i.itemTemplate || i.renderExternal) && (a && (a = t.$t7.compile(a)), t.f7VirtualList = e.virtualList.create(h.extend({ el: t.$el, itemTemplate: a, on: { itemBeforeInsert: function(e, n) { t.$emit("virtual:itembeforeinsert", this, e, n) }, beforeClear: function(e) { t.$emit("virtual:beforeclear", this, e) }, itemsBeforeInsert: function(e) { t.$emit("virtual:itemsbeforeinsert", this, e) }, itemsAfterInsert: function(e) { t.$emit("virtual:itemsafterinsert", this, e) } } }, i))) } } } },
            le = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "login-screen-title", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], name: "f7-login-screen-title", props: g.colorProps, computed: { classes: function() { return g.colorClasses(this) } } },
            ce = { name: "f7-login-screen", render: function(e) { return e("div", { staticClass: "login-screen", class: this.classes, on: { "loginscreen:open": this.onOpen, "loginscreen:opened": this.onOpened, "loginscreen:close": this.onClose, "loginscreen:closed": this.onClosed } }, this.$slots.default) }, watch: { opened: function(e) { this.f7LoginScreen && (e ? this.f7LoginScreen.open() : this.f7LoginScreen.close()) } }, props: h.extend({ opened: Boolean }, g.colorProps), computed: { classes: function() { return g.colorClasses(this) } }, beforeDestroy: function() { this.f7LoginScreen && this.f7LoginScreen.destroy() }, methods: { onOpen: function(e) { this.$emit("loginscreen:open", e) }, onOpened: function(e) { this.$emit("loginscreen:opened", e) }, onClose: function(e) { this.$emit("loginscreen:close", e) }, onClosed: function(e) { this.$emit("loginscreen:closed", e) }, open: function(e) { if (this.$f7) return this.$f7.loginScreen.open(this.$el, e) }, close: function(e) { if (this.$f7) return this.$f7.loginScreen.close(this.$el, e) }, onF7Ready: function() { this.f7LoginScreen = this.$f7.loginScreen.create({ el: this.$el }), this.opened && this.f7LoginScreen.open(!1) } } },
            de = { render: function() { var e = this,
                        t = e.$createElement,
                        n = e._self._c || t; return n("div", { staticClass: "message", class: e.classes, on: { click: e.onClick } }, [e._t("start"), e._v(" "), e.avatar || e.$slots.avatar ? n("div", { staticClass: "message-avatar", style: { "background-image": e.avatar && "url(" + e.avatar + ")" }, on: { click: e.onAvatarClick } }) : e._e(), e._v(" "), n("div", { staticClass: "message-content" }, [e._t("content-start"), e._v(" "), e.name || e.$slots.name ? n("div", { staticClass: "message-name", on: { click: e.onNameClick } }, [e._t("name", [e._v(e._s(e.name))])], 2) : e._e(), e._v(" "), e.header || e.$slots.header ? n("div", { staticClass: "message-header", on: { click: e.onHeaderClick } }, [e._t("header", [e._v(e._s(e.header))])], 2) : e._e(), e._v(" "), n("div", { staticClass: "message-bubble", on: { click: e.onBubbleClick } }, [e._t("bubble-start"), e._v(" "), e.image || e.$slots.image ? n("div", { staticClass: "message-image" }, [e._t("image", [n("img", { attrs: { src: e.image } })])], 2) : e._e(), e._v(" "), e.textHeader || e.$slots["text-header"] ? n("div", { staticClass: "message-text-header" }, [e._t("text-header", [e._v(e._s(e.textHeader))])], 2) : e._e(), e._v(" "), e.text || e.$slots.text || e.typing ? n("div", { staticClass: "message-text", on: { click: e.onTextClick } }, [e._t("text", [e._v(e._s(e.text))]), e._v(" "), e.typing ? n("div", { staticClass: "message-typing-indicator" }, [n("div"), e._v(" "), n("div"), e._v(" "), n("div")]) : e._e()], 2) : e._e(), e._v(" "), e.textFooter || e.$slots["text-footer"] ? n("div", { staticClass: "message-text-footer" }, [e._t("text-footer", [e._v(e._s(e.textFooter))])], 2) : e._e(), e._v(" "), e._t("bubble-end"), e._v(" "), e._t("default")], 2), e._v(" "), e.footer || e.$slots.footer ? n("div", { staticClass: "message-footer", on: { click: e.onFooterClick } }, [e._t("footer", [e._v(e._s(e.footer))])], 2) : e._e(), e._v(" "), e._t("content-end")], 2), e._v(" "), e._t("end")], 2) }, staticRenderFns: [], name: "f7-message", props: h.extend({ text: String, name: String, avatar: String, type: { type: String, default: "sent" }, image: String, header: String, footer: String, textHeader: String, textFooter: String, first: Boolean, last: Boolean, tail: Boolean, sameName: Boolean, sameHeader: Boolean, sameFooter: Boolean, sameAvatar: Boolean, typing: Boolean }, g.colorProps), computed: { classes: function() { return h.extend({ "message-sent": "sent" === this.type, "message-received": "received" === this.type, "message-typing": this.typing, "message-first": this.first, "message-last": this.last, "message-tail": this.tail, "message-same-name": this.sameName, "message-same-header": this.sameHeader, "message-same-footer": this.sameFooter, "message-same-avatar": this.sameAvatar }, g.colorClasses(this)) } }, methods: { onClick: function(e) { this.$emit("click", e) }, onNameClick: function(e) { this.$emit("click:name", e) }, onTextClick: function(e) { this.$emit("click:text", e) }, onAvatarClick: function(e) { this.$emit("click:avatar", e) }, onHeaderClick: function(e) { this.$emit("click:header", e) }, onFooterClick: function(e) { this.$emit("click:footer", e) }, onBubbleClick: function(e) { this.$emit("click:bubble", e) } } },
            ue = { render: function() { var e = this,
                        t = e.$createElement,
                        n = e._self._c || t; return n("div", { staticClass: "messagebar-attachment", class: e.classes, on: { click: e.onClick } }, [e.image ? n("img", { attrs: { src: e.image } }) : e._e(), e._v(" "), e.deletable ? n("span", { staticClass: "messagebar-attachment-delete", on: { click: e.onDeleteClick } }) : e._e(), e._v(" "), e._t("default")], 2) }, staticRenderFns: [], props: h.extend({ image: String, deletable: { type: Boolean, default: !0 } }, g.colorProps), name: "f7-messagebar-attachment", computed: { classes: function() { return g.colorClasses(this) } }, methods: { onClick: function(e) { this.$emit("attachment:click", e) }, onDeleteClick: function(e) { this.$emit("attachment:delete", e) } } },
            pe = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "messagebar-attachments", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], props: g.colorProps, name: "f7-messagebar-attachments", computed: { classes: function() { return g.colorClasses(this) } } },
            he = { render: function() { var e = this,
                        t = e.$createElement,
                        n = e._self._c || t; return n("label", { staticClass: "messagebar-sheet-image checkbox", class: e.classes, style: { "background-image": e.image && "url(" + e.image + ")" } }, [n("input", { attrs: { type: "checkbox" }, domProps: { checked: e.checked }, on: { change: e.onChange } }), e._v(" "), n("i", { staticClass: "icon icon-checkbox" }), e._v(" "), e._t("default")], 2) }, staticRenderFns: [], props: h.extend({ image: String, checked: Boolean }, g.colorProps), name: "f7-messagebar-sheet-image", computed: { classes: function() { return g.colorClasses(this) } }, methods: { onChange: function(e) { this.checked ? this.$emit("checked", e) : this.$emit("unchecked", e), this.$emit("change", e) } } },
            fe = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "messagebar-sheet-item", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], props: g.colorProps, name: "f7-messagebar-sheet-item", computed: { classes: function() { return g.colorClasses(this) } } },
            ve = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "messagebar-sheet", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], props: g.colorProps, name: "f7-messagebar-sheet", computed: { classes: function() { return g.colorClasses(this) } } },
            me = h.extend({ sheetVisible: Boolean, attachmentsVisible: Boolean, top: Boolean, resizable: { type: Boolean, default: !0 }, bottomOffset: { type: Number, default: 0 }, topOffset: { type: Number, default: 0 }, maxHeight: Number, sendLink: String, value: [String, Number, Array], disabled: Boolean, readonly: Boolean, name: String, placeholder: { type: String, default: "Message" }, init: { type: Boolean, default: !0 } }, g.colorProps),
            ge = { name: "f7-messagebar", components: { f7Input: G, f7Link: J }, render: function(e) { var t = [],
                        n = [],
                        a = [],
                        i = [],
                        r = [],
                        s = [],
                        o = void 0;
                    (this.sendLink && this.sendLink.length > 0 || this.$slots["send-link"]) && (o = e("f7-link", { on: { click: this.onClick } }, [this.sendLink ? this.sendLink : this.$slots["send-link"]]), i.push(o)), this.$slots["before-inner"] && this.$slots["before-inner"].forEach(function(e) { t.push(e) }), this.$slots["after-inner"] && this.$slots["after-inner"].forEach(function(e) { n.push(e) }), this.$slots["inner-start"] && this.$slots["inner-start"].forEach(function(e) { a.push(e) }), this.$slots["inner-end"] && this.$slots["inner-end"].forEach(function(e) { i.push(e) }), this.$slots["before-area"] && this.$slots["before-area"].forEach(function(e) { r.push(e) }), this.$slots["after-area"] && this.$slots["after-area"].forEach(function(e) { s.push(e) }), this.$slots.default && this.$slots.default.forEach(function(e) { var t = e.tag;
                        t && t.indexOf("messagebar-attachments") >= 0 ? r.push(e) : t && t.indexOf("messagebar-sheet") >= 0 ? n.push(e) : i.push(e) }); var l = e("f7-input", { props: { type: "textarea", wrap: !1, placeholder: this.placeholder, disabled: this.disabled, name: this.name, readonly: this.readonly, resizable: this.resizable, value: this.value }, ref: "area", on: { input: this.onInput, change: this.onChange, focus: this.onFocus, blur: this.onBlur } }),
                        c = e("div", { staticClass: "messagebar-area" }, [r, l, s]),
                        d = e("div", { staticClass: "toolbar-inner" }, [a, c, i]); return e("div", { staticClass: "toolbar messagebar", class: this.classes, on: { "messagebar:attachmentdelete": this.onDeleteAttachment, "messagebar:attachmentclick": this.onClickAttachment, "messagebar:resizepage": this.onResizePage } }, [t, d, n]) }, props: me, computed: { classes: function() { return h.extend({ "messagebar-attachments-visible": this.attachmentsVisible, "messagebar-sheet-visible": this.sheetVisible }, g.colorClasses) } }, watch: { sheetVisible: function() { var e = this;
                        e.resizable && e.$nextTick(function() { e.f7Messagebar && (e.f7Messagebar.sheetVisible = e.sheetVisible, e.f7Messagebar.resizePage()) }) }, attachmentsVisible: function() { var e = this;
                        e.resizable && e.$nextTick(function() { e.f7Messagebar && (e.f7Messagebar.attachmentsVisible = e.attachmentsVisible, e.f7Messagebar.resizePage()) }) } }, beforeDestroy: function() { this.f7Messagebar && this.f7Messagebar.destroy && this.f7Messagebar.destroy() }, methods: { clear: function() { var e; if (this.f7Messagebar) return (e = this.f7Messagebar).clear.apply(e, arguments) }, getValue: function() { var e; if (this.f7Messagebar) return (e = this.f7Messagebar).getValue.apply(e, arguments) }, setValue: function() { var e; if (this.f7Messagebar) return (e = this.f7Messagebar).setValue.apply(e, arguments) }, setPlaceholder: function() { var e; if (this.f7Messagebar) return (e = this.f7Messagebar).setPlaceholder.apply(e, arguments) }, resizePage: function() { var e; if (this.f7Messagebar) return (e = this.f7Messagebar).resizePage.apply(e, arguments) }, focus: function() { var e; if (this.f7Messagebar) return (e = this.f7Messagebar).focus.apply(e, arguments) }, blur: function() { var e; if (this.f7Messagebar) return (e = this.f7Messagebar).blur.apply(e, arguments) }, attachmentsShow: function() { var e; if (this.f7Messagebar) return (e = this.f7Messagebar).attachmentsShow.apply(e, arguments) }, attachmentsHide: function() { var e; if (this.f7Messagebar) return (e = this.f7Messagebar).attachmentsHide.apply(e, arguments) }, attachmentsToggle: function() { var e; if (this.f7Messagebar) return (e = this.f7Messagebar).attachmentsToggle.apply(e, arguments) }, sheetShow: function() { var e; if (this.f7Messagebar) return (e = this.f7Messagebar).sheetShow.apply(e, arguments) }, sheetHide: function() { var e; if (this.f7Messagebar) return (e = this.f7Messagebar).sheetHide.apply(e, arguments) }, sheetToggle: function() { var e; if (this.f7Messagebar) return (e = this.f7Messagebar).sheetToggle.apply(e, arguments) }, onChange: function(e) { this.$emit("change", e) }, onInput: function(e) { this.$emit("input", e) }, onFocus: function(e) { this.$emit("focus", e) }, onBlur: function(e) { this.$emit("blur", e) }, onClick: function(e) { var t = this.$refs.area.$el.value,
                            n = this.f7Messagebar ? this.f7Messagebar.clear : function() {};
                        this.$emit("submit", t, n), this.$emit("send", t, n), this.$emit("click", e) }, onDeleteAttachment: function(e) { this.$emit("messagebar:attachmentdelete", e) }, onClickAttachment: function(e) { this.$emit("messagebar:attachmentclick", e) }, onResizePage: function(e) { this.$emit("messagebar:resizepage", e) }, onF7Ready: function() { this.init && (this.f7Messagebar = this.$f7.messagebar.create({ el: this.$el, top: this.top, resizePage: this.resizable, bottomOffset: this.bottomOffset, topOffset: this.topOffset, maxHeight: this.maxHeight })) } } },
            be = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "messages-title", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], props: g.colorProps, name: "f7-messages-title", computed: { classes: function() { return g.colorClasses(this) } } },
            ye = { name: "f7-messages", render: function(e) { return e("div", { staticClass: "messages", class: g.colorClasses(this) }, this.$slots.default) }, props: h.extend({ autoLayout: { type: Boolean, default: !1 }, messages: { type: Array, default: function() { return [] } }, newMessagesFirst: { type: Boolean, default: !1 }, scrollMessages: { type: Boolean, default: !0 }, scrollMessagesOnEdge: { type: Boolean, default: !0 }, firstMessageRule: Function, lastMessageRule: Function, tailMessageRule: Function, sameNameMessageRule: Function, sameHeaderMessageRule: Function, sameFooterMessageRule: Function, sameAvatarMessageRule: Function, customClassMessageRule: Function, renderMessage: Function, init: { type: Boolean, default: !0 } }, g.colorProps), beforeDestroy: function() { this.f7Messages && this.f7Messages.destroy && this.f7Messages.destroy() }, beforeUpdate: function() { var e = this;
                    e.init && e.$children.forEach(function(t) { e.$$(t.$el).addClass("message-appeared") }) }, updated: function() { var e = this;
                    e.init && (e.$children.forEach(function(t) { var n = e.$$(t.$el);
                        n.hasClass("message-appeared") || n.addClass("message-appear-from-bottom") }), e.f7Messages && e.f7Messages.layout && e.autoLayout && e.f7Messages.layout(), e.f7Messages && e.f7Messages.scroll && e.scrollMessages && e.f7Messages.scroll()) }, methods: { renderMessages: function(e, t) { if (this.f7Messages) return this.renderMessages(e, t) }, layout: function() { if (this.f7Messages) return this.layout() }, scroll: function(e, t) { if (this.f7Messages) return this.scroll(e, t) }, clear: function() { if (this.f7Messages) return this.clear() }, removeMessage: function(e, t) { if (this.f7Messages) return this.removeMessage(e, t) }, removeMessages: function(e, t) { if (this.f7Messages) return this.removeMessages(e, t) }, addMessage: function() { if (this.f7Messages) return this.addMessage.apply(this, arguments) }, addMessages: function() { if (this.f7Messages) return this.addMessages.apply(this, arguments) }, showTyping: function(e) { if (this.f7Messages) return this.showTyping(e) }, hideTyping: function() { if (this.f7Messages) return this.hideTyping() }, destroy: function() { if (this.f7Messages) return this.destroy() }, onF7Ready: function(e) { this.init && (this.f7Messages = e.messages.create({ el: this.$el, autoLayout: this.autoLayout, messages: this.messages, newMessagesFirst: this.newMessagesFirst, scrollMessages: this.scrollMessages, scrollMessagesOnEdge: this.scrollMessagesOnEdge, firstMessageRule: this.firstMessageRule, lastMessageRule: this.lastMessageRule, tailMessageRule: this.tailMessageRule, sameNameMessageRule: this.sameNameMessageRule, sameHeaderMessageRule: this.sameHeaderMessageRule, sameFooterMessageRule: this.sameFooterMessageRule, sameAvatarMessageRule: this.sameAvatarMessageRule, customClassMessageRule: this.customClassMessageRule, renderMessage: this.renderMessage })) } } },
            we = h.extend({ backLink: [Boolean, String], backLinkUrl: String, backLinkForce: Boolean, sliding: Boolean }, g.colorProps),
            Ce = { render: function() { var e = this,
                        t = e.$createElement,
                        n = e._self._c || t; return n("div", { staticClass: "left", class: e.classes }, [e.backLink ? n("f7-link", { class: { "icon-only": !0 === e.backLink || e.backLink && e.$theme.md }, attrs: { href: e.backLinkUrl || "#", back: "", icon: "icon-back", text: !0 === e.backLink || e.$theme.md ? void 0 : e.backLink, force: e.backLinkForce || void 0 }, on: { click: e.onBackClick } }) : e._e(), e._v(" "), e._t("default")], 2) }, staticRenderFns: [], name: "f7-nav-left", components: { f7Link: J }, props: we, computed: { classes: function() { return h.extend({ sliding: this.slidng }, g.colorClasses(this)) } }, methods: { onBackClick: function(e) { this.$emit("back-click", e), this.$emit("click:back", e) } } },
            xe = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "right", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], name: "f7-nav-right", props: h.extend({ sliding: Boolean }, g.colorProps), computed: { classes: function() { return h.extend({ sliding: this.slidng }, g.colorClasses(this)) } } },
            ke = { render: function() { var e = this,
                        t = e.$createElement,
                        n = e._self._c || t; return n("div", { staticClass: "title", class: e.classes }, [e._t("default", [e._v(e._s(e.title)), e.subtitle ? n("span", { staticClass: "subtitle" }, [e._v(e._s(e.subtitle))]) : e._e()])], 2) }, staticRenderFns: [], name: "f7-nav-title", props: h.extend({ title: String, subtitle: String, sliding: Boolean }, g.colorProps), computed: { classes: function() { return h.extend({ sliding: this.slidng }, g.colorClasses(this)) } } },
            Ee = h.extend({ backLink: [Boolean, String], backLinkUrl: String, backLinkForce: Boolean, sliding: { type: Boolean, default: !0 }, title: String, subtitle: String, hidden: Boolean, noShadow: Boolean, noHairline: Boolean, inner: { type: Boolean, default: !0 } }, g.colorProps),
            $e = { name: "f7-navbar", components: { f7NavLeft: Ce, f7NavTitle: ke }, render: function(e) { var t = void 0,
                        n = void 0,
                        a = void 0; return this.inner && (this.backLink && (n = e("f7-nav-left", { props: { backLink: this.backLink, backLinkUrl: this.backLinkUrl, backLinkForce: this.backLinkForce }, on: { "back-click": this.onBackClick } })), (this.title || this.subtitle) && (a = e("f7-nav-title", { props: { title: this.title, subtitle: this.subtitle } })), t = e("div", { ref: "inner", staticClass: "navbar-inner", class: { sliding: this.sliding } }, [n, a, this.$slots.default])), e("div", { staticClass: "navbar", class: this.classes }, [this.$slots["before-inner"], t, this.$slots["after-inner"]]) }, updated: function() { var e = this;
                    e.$f7 && e.$nextTick(function() { e.$el && e.$el.children && e.$el.children.length ? e.$f7.navbar.size(e.$el) : e.$refs.inner && e.$f7.navbar.size(e.$refs.inner) }) }, props: Ee, computed: { classes: function() { return h.extend({ "navbar-hidden": this.hidden, "no-shadow": this.noShadow, "no-hairline": this.noHairline }, g.colorClasses(this)) } }, methods: { hide: function(e) { this.$f7 && this.$f7.navbar.hide(this.$el, e) }, show: function(e) { this.$f7 && this.$f7.navbar.show(this.$el, e) }, size: function() { this.$f7 && this.$f7.navbar.size(this.$el) }, onBackClick: function(e) { this.$emit("back-click", e), this.$emit("click:back", e) } } },
            Se = { name: "f7-page-content", render: function(e) { var t = void 0,
                        n = void 0; return this.ptr && this.ptrPreloader && (t = e("div", { staticClass: "ptr-preloader" }, [e("div", { staticClass: "preloader" }), e("div", { staticClass: "ptr-arrow" })])), this.infinite && this.infinitePreloader && (n = e("div", { staticClass: "preloader infinite-scroll-preloader" })), e("div", { staticClass: "page-content", class: this.classes, attrs: { "data-ptr-distance": this.ptrDistance, "data-infinite-distance": this.infiniteDistance }, on: { "ptr:pullstart": this.onPtrPullStart, "ptr:pullmove": this.onPtrPullMove, "ptr:pullend": this.onPtrPullEnd, "ptr:refresh": this.onPtrRefresh, "ptr:done": this.onPtrRefreshDone, infinite: this.onInfinite, "tab:show": this.onTabShow, "tab:hide": this.onTabHide } }, this.infiniteTop ? [t, n, this.$slots.default] : [t, this.$slots.default, n]) }, props: h.extend({ tab: Boolean, tabActive: Boolean, ptr: Boolean, ptrDistance: Number, ptrPreloader: { type: Boolean, default: !0 }, infinite: Boolean, infiniteTop: Boolean, infiniteDistance: Number, infinitePreloader: { type: Boolean, default: !0 }, hideBarsOnScroll: Boolean, hideNavbarOnScroll: Boolean, hideToolbarOnScroll: Boolean, messagesContent: Boolean, loginScreen: Boolean }, g.colorProps), computed: { classes: function() { return h.extend({ tab: this.tab, "tab-active": this.tabActive, "ptr-content": this.ptr, "infinite-scroll-content": this.infinite, "infinite-scroll-top": this.infiniteTop, "hide-bars-on-scroll": this.hideBarsOnScroll, "hide-navbar-on-scroll": this.hideNavbarOnScroll, "hide-toolbar-on-scroll": this.hideToolbarOnScroll, "messages-content": this.messagesContent, "login-screen-content": this.loginScreen }, g.colorClasses(this)) } }, methods: { onPtrPullStart: function(e) { this.$emit("ptr:pullstart", e) }, onPtrPullMove: function(e) { this.$emit("ptr:pullmove", e) }, onPtrPullEnd: function(e) { this.$emit("ptr:pullend", e) }, onPtrRefresh: function(e) { this.$emit("ptr:refresh", e, e.detail) }, onPtrRefreshDone: function(e) { this.$emit("ptr:done", e) }, onInfinite: function(e) { this.$emit("infinite", e) }, onTabShow: function(e) { this.$emit("tab:show", e) }, onTabHide: function(e) { this.$emit("tab:hide", e) } } },
            Te = h.extend({ name: String, stacked: Boolean, withSubnavbar: Boolean, subnavbar: Boolean, noNavbar: Boolean, noToolbar: Boolean, tabs: Boolean, pageContent: { type: Boolean, default: !0 }, noSwipeback: Boolean, ptr: Boolean, ptrDistance: Number, ptrPreloader: { type: Boolean, default: !0 }, infinite: Boolean, infiniteTop: Boolean, infiniteDistance: Number, infinitePreloader: { type: Boolean, default: !0 }, hideBarsOnScroll: Boolean, hideNavbarOnScroll: Boolean, hideToolbarOnScroll: Boolean, messagesContent: Boolean, loginScreen: Boolean }, g.colorProps),
            _e = { name: "f7-page", components: { f7PageContent: Se }, render: function(e) { var t = [],
                        n = [],
                        a = void 0,
                        i = "navbar toolbar tabbar subnavbar searchbar messagebar fab list-index".split(" "),
                        r = void 0,
                        s = void 0,
                        o = void 0,
                        l = void 0,
                        c = this.$options.propsData.withMessages; if (this.$slots.default)
                        for (var d = 0; d < this.$slots.default.length; d += 1)
                            if (r = (s = this.$slots.default[d]).tag) { var u = !1;
                                r.indexOf("subnavbar") >= 0 && (o = !0), r.indexOf("searchbar") >= 0 && (l = !0), void 0 === c && r.indexOf("messages") >= 0 && (c = !0); for (var p = 0; p < i.length; p += 1) r.indexOf(i[p]) >= 0 && (u = !0);
                                u ? t.push(s) : n.push(s) } else n.push(s); if (t.length > 0 && l && t.push(e("div", { class: { "searchbar-overlay": !0 } })), this.pageContent) a = e("f7-page-content", { props: { ptr: this.ptr, ptrDistance: this.ptrDistance, ptrPreloader: this.ptrPreloader, infinite: this.infinite, infiniteTop: this.infiniteTop, infiniteDistance: this.infiniteDistance, infinitePreloader: this.infinitePreloader, hideBarsOnScroll: this.hideBarsOnScroll, hideNavbarOnScroll: this.hideNavbarOnScroll, hideToolbarOnScroll: this.hideToolbarOnScroll, messagesContent: this.messagesContent || c, loginScreen: this.loginScreen }, on: { "ptr:pullstart": this.onPtrPullStart, "ptr:pullmove": this.onPtrPullMove, "ptr:pullend": this.onPtrPullEnd, "ptr:refresh": this.onPtrRefresh, "ptr:done": this.onPtrRefreshDone, infinite: this.onInfinite } }, [this.$slots.static, n]);
                    else if (a = [], this.$slots.default && t.length > 0)
                        for (var h = 0; h < this.$slots.default.length; h += 1) t.indexOf(this.$slots.default[h]) < 0 && a.push(this.$slots.default[h]);
                    else a = [this.$slots.default]; return t.push(this.$slots.fixed), o && (this.classes["page-with-subnavbar"] = !0), e("div", { staticClass: "page", class: this.classes, attrs: { "data-name": this.name }, on: { "page:mounted": this.onPageMounted, "page:init": this.onPageInit, "page:reinit": this.onPageReinit, "page:beforein": this.onPageBeforeIn, "page:afterin": this.onPageAfterIn, "page:beforeout": this.onPageBeforeOut, "page:afterout": this.onPageAfterOut, "page:beforeremove": this.onPageBeforeRemove } }, [t, a]) }, props: Te, computed: { classes: function() { return h.extend({ stacked: this.stacked, tabs: this.tabs, "page-with-subnavbar": this.subnavbar || this.withSubnavbar, "no-navbar": this.noNavbar, "no-toolbar": this.noToolbar, "no-swipeback": this.noSwipeback }, g.colorClasses(this)) } }, methods: { onPtrPullStart: function(e) { this.$emit("ptr:pullstart", e) }, onPtrPullMove: function(e) { this.$emit("ptr:pullmove", e) }, onPtrPullEnd: function(e) { this.$emit("ptr:pullend", e) }, onPtrRefresh: function(e) { this.$emit("ptr:refresh", e, e.detail) }, onPtrRefreshDone: function(e) { this.$emit("ptr:done", e) }, onInfinite: function(e) { this.$emit("infinite", e) }, onPageMounted: function(e) { this.$emit("page:mounted", e, e.detail) }, onPageInit: function(e) { this.$emit("page:init", e, e.detail) }, onPageReinit: function(e) { this.$emit("page:reinit", e, e.detail) }, onPageBeforeIn: function(e) { this.$emit("page:beforein", e, e.detail) }, onPageBeforeOut: function(e) { this.$emit("page:beforeout", e, e.detail) }, onPageAfterOut: function(e) { this.$emit("page:afterout", e, e.detail) }, onPageAfterIn: function(e) { this.$emit("page:afterin", e, e.detail) }, onPageBeforeRemove: function(e) { this.$emit("page:beforeremove", e, e.detail) } } },
            Me = { render: function() { var e = this,
                        t = e.$createElement; return (e._self._c || t)("div", { staticClass: "panel", class: e.classes, on: { "panel:open": e.onOpen, "panel:opened": e.onOpened, "panel:close": e.onClose, "panel:closed": e.onClosed, "panel:backdrop-click": e.onBackdropClick, "panel:swipe": e.onPanelSwipe, "panel:swipeopen": e.onPanelSwipeOpen, "panel:breakpoint": e.onBreakpoint } }, [e._t("default")], 2) }, staticRenderFns: [], props: h.extend({ side: String, effect: String, cover: Boolean, reveal: Boolean, left: Boolean, right: Boolean, opened: Boolean }, g.colorProps), computed: { classes: function() { var e, t = this.side || (this.left ? "left" : "right"),
                            n = this.effect || (this.reveal ? "reveal" : "cover"); return h.extend((e = { "panel-active": this.opened }, i()(e, "panel-" + t, t), i()(e, "panel-" + n, n), e), g.colorClasses(this)) } }, watch: { opened: function(e) { if (this.$f7) { var t = this.side || (this.left ? "left" : "right");
                            this.$f7.panel.open(t) } } }, beforeDestroy: function() { this.f7Panel && this.f7Panel.destroy() }, mounted: function() { this.opened && (this.$el.style.display = "block"); var e = this.$; if (e) { var t = this.side || (this.left ? "left" : "right"),
                            n = this.effect || (this.reveal ? "reveal" : "cover");
                        this.opened && e("html").addClass("with-panel-" + t + "-" + n) } }, methods: { onOpen: function(e) { this.$emit("panel:open", e) }, onOpened: function(e) { this.$emit("panel:opened", e) }, onClose: function(e) { this.$emit("panel:close", e) }, onClosed: function(e) { this.$emit("panel:closed", e) }, onBackdropClick: function(e) { this.$emit("panel:backdrop-click", e) }, onPanelSwipe: function(e) { this.$emit("panel:swipe", e) }, onPanelSwipeOpen: function(e) { this.$emit("panel:swipeopen", e) }, onBreakpoint: function(e) { this.$emit("panel:breakpoint", e) }, onF7Ready: function() { var e = this.$$;
                        e && (0 === e(".panel-backdrop").length && e('<div class="panel-backdrop"></div>').insertBefore(this.$el), this.f7Panel = this.$f7.panel.create({ el: this.$el })) }, open: function(e) { if (this.$f7) { var t = this.side || (this.left ? "left" : "right");
                            this.$f7.panel.open(t, e) } }, close: function(e) { if (this.$f7) { var t = this.side || (this.left ? "left" : "right");
                            this.$f7.panel.close(t, e) } } } },
            Pe = { name: "f7-photo-browser", render: function() {}, beforeDestroy: function() { this.f7PhotoBrowser && this.f7PhotoBrowser.destroy && this.f7PhotoBrowser.destroy() }, watch: { photos: function(e) { var t = this.f7PhotoBrowser;
                        t && (this.f7PhotoBrowser.photos = e, t.opened && t.swiper && t.swiper.update()) } }, props: { init: { type: Boolean, default: !0 }, params: Object, photos: Array, exposition: Boolean, expositionHideCaptions: Boolean, type: String, navbar: Boolean, toolbar: Boolean, theme: String, captionsTheme: String, swipeToClose: Boolean, backLinkText: String, navbarOfText: String, iconsColor: String, swiper: Object, url: String, view: [String, Object], routableModals: Boolean, renderNavbar: Function, renderToolbar: Function, renderCaption: Function, renderObject: Function, renderLazyPhoto: Function, renderPhoto: Function, renderPage: Function, renderPopup: Function, renderStandalone: Function }, methods: { open: function(e) { return this.f7PhotoBrowser.open(e) }, close: function() { return this.f7PhotoBrowser.close() }, expositionToggle: function() { return this.f7PhotoBrowser.expositionToggle() }, expositionEnable: function() { return this.f7PhotoBrowser.expositionEnable() }, expositionDisable: function() { return this.f7PhotoBrowser.expositionDisable() }, onF7Init: function(e) { var t = this; if (t.init) { var n = void 0;
                            n = void 0 !== t.params ? t.params : t.$options.propsData, n = h.extend({}, n, { on: { open: function() { t.$emit("photobrowser:open") }, close: function() { t.$emit("photobrowser:close") }, opened: function() { t.$emit("photobrowser:opened") }, closed: function() { t.$emit("photobrowser:closed") }, swipeToClose: function() { t.$emit("photobrowser:swipetoclose") } } }), t.f7PhotoBrowser = e.photoBrowser.create(n) } } } },
            Oe = { name: "f7-popover", render: function(e) { var t = e("div", { staticClass: "popover-angle" }),
                        n = e("div", { staticClass: "popover-inner" }, this.$slots.default); return e("div", { class: this.classes, staticClass: "popover", on: { "popover:open": this.onOpen, "popover:opened": this.onOpened, "popover:close": this.onClose, "popover:closed": this.onClosed } }, [t, n]) }, watch: { opened: function(e) { this.f7Popover && (e ? this.f7Popover.open() : this.f7Popover.close()) } }, props: h.extend({ opened: Boolean, target: [String, Object] }, g.colorProps), computed: { classes: function() { return g.colorClasses(this) } }, beforeDestroy: function() { this.f7Popover && this.f7Popover.destroy() }, methods: { onOpen: function(e) { this.$emit("popover:open", e) }, onOpened: function(e) { this.$emit("popover:opened", e) }, onClose: function(e) { this.$emit("popover:close", e) }, onClosed: function(e) { this.$emit("popover:closed", e) }, open: function(e, t) { if (this.$f7) return this.$f7.popover.open(this.$el, e, t) }, close: function(e) { if (this.$f7) return this.$f7.sheet.close(this.$el, e) }, onF7Ready: function() { var e = { el: this.$el };
                        this.target && (e.targetEl = this.target), this.f7Popover = this.$f7.popover.create(e), this.opened && this.target && this.f7Popover.open(this.target, !1) } } },
            Be = { name: "f7-popup", render: function(e) { return e("div", { staticClass: "popup", class: this.classes, on: { "popup:open": this.onOpen, "popup:opened": this.onOpened, "popup:close": this.onClose, "popup:closed": this.onClosed } }, this.$slots.default) }, watch: { opened: function(e) { this.f7Popup && (e ? this.f7Popup.open() : this.f7Popup.close()) } }, props: h.extend({ "tablet-fullscreen": Boolean, opened: Boolean }, g.colorProps), computed: { classes: function() { return h.extend({ "popup-tablet-fullscreen": this.tabletFullscreen }, g.colorClasses(this)) } }, beforeDestroy: function() { this.f7Popup && this.f7Popup.destroy() }, methods: { onOpen: function(e) { this.$emit("popup:open", e) }, onOpened: function(e) { this.$emit("popup:opened", e) }, onClose: function(e) { this.$emit("popup:close", e) }, onClosed: function(e) { this.$emit("popup:closed", e) }, open: function(e) { if (this.$f7) return this.$f7.popup.open(this.$el, e) }, close: function(e) { if (this.$f7) return this.$f7.popup.close(this.$el, e) }, onF7Ready: function() { this.f7Popup = this.$f7.popup.create({ el: this.$el }), this.opened && this.f7Popup.open(!1) } } },
            Ie = { render: function() { var e = this,
                        t = e.$createElement,
                        n = e._self._c || t; return n("span", { staticClass: "preloader", class: e.classes, style: { width: e.sizeComputed ? e.sizeComputed + "px" : "", height: e.sizeComputed ? e.sizeComputed + "px" : "" } }, [e.$theme.md ? n("span", { staticClass: "preloader-inner" }, [n("span", { staticClass: "preloader-inner-gap" }), e._v(" "), e._m(0), e._v(" "), e._m(1)]) : e._e()]) }, staticRenderFns: [function() { var e = this.$createElement,
                        t = this._self._c || e; return t("span", { staticClass: "preloader-inner-left" }, [t("span", { staticClass: "preloader-inner-half-circle" })]) }, function() { var e = this.$createElement,
                        t = this._self._c || e; return t("span", { staticClass: "preloader-inner-right" }, [t("span", { staticClass: "preloader-inner-half-circle" })]) }], name: "f7-preloader", props: h.extend({ size: [Number, String] }, g.colorProps), computed: { classes: function() { return g.colorClasses(this) }, sizeComputed: function() { var e = this.size; return e && "string" == typeof e && e.indexOf("px") >= 0 && (e = e.replace("px", "")), e } } },
            Ae = { name: "f7-progressbar", render: function(e) { var t = this.progress; return e("span", { staticClass: "progressbar", class: this.classes, attrs: { "data-progress": t } }, [e("span", { style: { transform: t ? "translate3d(" + (-100 + t) + "%, 0, 0)" : "", "-webkit-transform": t ? "translate3d(" + (-100 + t) + "%, 0, 0)" : "" } })]) }, props: h.extend({ progress: Number, infinite: Boolean }, g.colorProps), computed: { classes: function() { return h.extend({ "progressbar-infinite": this.infinite }, g.colorClasses(this)) } }, methods: { set: function(e, t) { this.$f7 && this.$f7.progressbar.set(this.$el, e, t) } } },
            Le = { name: "f7-radio", props: h.extend({ checked: Boolean, name: [Number, String], value: [Number, String, Boolean], disabled: Boolean, readonly: Boolean }, g.colorProps), render: function(e) { var t = e("input", { attrs: { type: "radio", name: this.name }, domProps: { value: this.value, disabled: this.disabled, readonly: this.readonly, checked: this.checked }, on: { change: this.onChange } }),
                        n = e("i", { staticClass: "icon-radio" }); return e("label", { staticClass: "radio", class: h.extend({ disabled: this.disabled }, g.colorClasses(this)) }, [t, n, this.$slots.default]) }, methods: { onChange: function(e) { this.$emit("change", e) } } },
            De = { name: "f7-routable-modals", data: function() { return { modals: [] } }, render: function(e) { var t = this.modals.map(function(t) { return e(t.component, { tag: "component", props: t.params && t.params || {}, key: t.id }) }); return e("div", { staticClass: "framework7-modals", ref: "routableModals" }, t) } },
            Re = { name: "f7-row", props: h.extend({ noGap: Boolean, tag: { type: String, default: "div" } }, g.colorProps), render: function(e) { return e(this.tag, { staticClass: "row", class: this.classes }, [this.$slots.default]) }, computed: { classes: function() { return h.extend({ "no-gap": this.noGap }, g.colorClasses(this)) } } },
            ze = { name: "f7-searchbar", render: function(e) { var t = void 0,
                        n = void 0,
                        a = e("input", { attrs: { placeholder: this.placeholder, type: "search" }, on: { input: this.onInput, change: this.onChange, focus: this.onFocus, blur: this.onBlur } });
                    this.clearButton && (t = e("span", { staticClass: "input-clear-button", on: { click: this.onClearButtonClick } })), this.disableButton && (n = e("span", { staticClass: "searchbar-disable-button", on: { click: this.onDisableButtonClick } }, [this.disableButtonText])); var i = e("i", { staticClass: "searchbar-icon" }),
                        r = e("div", { staticClass: "searchbar-input-wrap" }, [this.$slots["input-wrap-start"], a, i, t, this.$slots["input-wrap-end"]]),
                        s = e("div", { staticClass: "searchbar-inner" }, [this.$slots["inner-start"], r, n, this.$slots["inner-end"], this.$slots.default]); return e(this.form ? "form" : "div", { staticClass: "searchbar", class: h.extend({ "no-shadow": this.noShadow, "no-hairline": this.noHairline, "searchbar-expandable": this.expandable }, g.colorClasses(this)), on: { submit: this.onSubmit } }, [this.$slots["before-inner"], s, this.$slots["after-inner"]]) }, beforeDestroy: function() { this.f7Searchbar && this.f7Searchbar.destroy && this.f7Searchbar.destroy() }, props: h.extend({ noShadow: Boolean, noHairline: Boolean, form: { type: Boolean, default: !0 }, placeholder: { type: String, default: "Search" }, disableButton: { type: Boolean, default: !0 }, disableButtonText: { type: String, default: "Cancel" }, clearButton: { type: Boolean, default: !0 }, expandable: Boolean, searchContainer: [String, Object], searchIn: { type: String, default: ".item-title" }, searchItem: { type: String, default: "li" }, foundEl: { type: [String, Object], default: ".searchbar-found" }, notFoundEl: { type: [String, Object], default: ".searchbar-not-found" }, backdrop: { type: Boolean, default: !0 }, backdropEl: [String, Object], hideOnEnableEl: { type: [String, Object], default: ".searchbar-hide-on-enable" }, hideOnSearchEl: { type: [String, Object], default: ".searchbar-hide-on-search" }, ignore: { type: String, default: ".searchbar-ignore" }, customSearch: { type: Boolean, default: !1 }, removeDiacritics: { type: Boolean, default: !1 }, hideDividers: { type: Boolean, default: !0 }, hideGroups: { type: Boolean, default: !0 }, init: { type: Boolean, default: !0 } }, g.colorProps), methods: { search: function(e) { if (this.f7Searchbar) return this.f7Searchbar.search(e) }, enable: function() { if (this.f7Searchbar) return this.f7Searchbar.enable() }, disable: function() { if (this.f7Searchbar) return this.f7Searchbar.disable() }, toggle: function() { if (this.f7Searchbar) return this.toggle.disable() }, clear: function() { if (this.f7Searchbar) return this.f7Searchbar.clear() }, onChange: function(e) { this.$emit("change", e) }, onInput: function(e) { this.$emit("input", e) }, onFocus: function(e) { this.$emit("focus", e) }, onBlur: function(e) { this.$emit("blur", e) }, onSubmit: function(e) { this.$emit("submit", e) }, onClearButtonClick: function(e) { this.$emit("click:clear", e) }, onDisableButtonClick: function(e) { this.$emit("click:disable", e) }, onF7Ready: function() { var e = this; if (e.init) { var t = { el: e.$el, searchContainer: e.searchContainer, searchIn: e.searchIn, searchItem: e.searchItem, hideOnEnableEl: e.hideOnEnableEl, hideOnSearchEl: e.hideOnSearchEl, foundEl: e.foundEl, notFoundEl: e.notFoundEl, backdrop: e.backdrop, backdropEl: e.backdropEl, disableButton: e.disableButton, ignore: e.ignore, customSearch: e.customSearch, removeDiacritics: e.removeDiacritics, hideDividers: e.hideDividers, hideGroups: e.hideGroups, on: { search: function(t, n, a) { e.$emit("searchbar:search", t, n, a) }, clear: function(t, n) { e.$emit("searchbar:clear", t, n) }, enable: function(t) { e.$emit("searchbar:enable", t) }, disable: function(t) { e.$emit("searchbar:disable", t) } } };
                            l()(t).forEach(function(e) { void 0 !== t[e] && "" !== t[e] || delete t[e] }), e.f7Searchbar = e.$f7.searchbar.create(t) } } } },
            Ne = { name: "f7-segmented", props: h.extend({ raised: Boolean, round: Boolean, tag: { type: String, default: "div" } }, g.colorProps), render: function(e) { return e(this.tag, { staticClass: "segmented", class: h.extend({ "segmented-raised": this.raised, "segmented-round": this.round }, g.colorClasses(this)) }, [this.$slots.default]) } },
            Fe = { name: "f7-sheet", render: function(e) { var t = [],
                        n = [],
                        a = "navbar toolbar tabbar subnavbar searchbar messagebar fab".split(" "),
                        i = void 0,
                        r = void 0; if (this.$slots.default)
                        for (var s = 0; s < this.$slots.default.length; s += 1)
                            if (i = (r = this.$slots.default[s]).tag) { for (var o = !1, l = 0; l < a.length; l += 1) i.indexOf(a[l]) >= 0 && (o = !0);
                                o ? t.push(r) : n.push(r) } else n.push(r); var c = e("div", { staticClass: "sheet-modal-inner" }, n); return e("div", { class: this.classes, staticClass: "sheet-modal", on: { "sheet:open": this.onOpen, "sheet:opened": this.onOpened, "sheet:close": this.onClose, "sheet:closed": this.onClosed } }, [t, c]) }, watch: { opened: function(e) { this.f7Sheet && (e ? this.f7Sheet.open() : this.f7Sheet.close()) } }, props: h.extend({ opened: Boolean, backdrop: Boolean }, g.colorProps), computed: { classes: function() { return g.colorClasses(this) } }, beforeDestroy: function() { this.f7Sheet && this.f7Sheet.destroy() }, methods: { onOpen: function(e) { this.$emit("sheet:open", e) }, onOpened: function(e) { this.$emit("sheet:opened", e) }, onClose: function(e) { this.$emit("sheet:close", e) }, onClosed: function(e) { this.$emit("sheet:closed", e) }, open: function(e) { if (this.$f7) return this.$f7.sheet.open(this.$el, e) }, close: function(e) { if (this.$f7) return this.$f7.sheet.close(this.$el, e) }, onF7Ready: function() { var e = this.backdrop; if (void 0 === this.$options.propsData.backdrop) { var t = this.$f7;
                            e = t.params.sheet && void 0 !== t.params.sheet.backdrop ? t.params.sheet.backdrop : this.$theme.md } this.f7Sheet = this.$f7.sheet.create({ el: this.$el, backdrop: e }), this.opened && this.f7Sheet.open(!1) } } },
            He = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "statusbar", class: this.classes }) }, staticRenderFns: [], name: "f7-statusbar", props: g.colorProps, computed: { classes: function() { return g.colorClasses(this) } } },
            je = { render: function() { var e = this,
                        t = e.$createElement,
                        n = e._self._c || t; return n("div", { staticClass: "stepper", class: e.classes }, [n("div", { staticClass: "stepper-button-minus", on: { click: e.onMinusClick } }), e._v(" "), e.input && !e.buttonsOnly ? n("div", { staticClass: "stepper-input-wrap" }, [n("input", { attrs: { type: e.inputType, min: "number" === e.inputType ? e.min : void 0, max: "number" === e.inputType ? e.max : void 0, step: "number" === e.inputType ? e.step : void 0, readonly: e.inputReadonly }, domProps: { value: e.value }, on: { input: e.onInput } })]) : e._e(), e._v(" "), e.input || e.buttonsOnly ? e._e() : n("div", { staticClass: "stepper-value" }, [e._v(e._s(e.value))]), e._v(" "), n("div", { staticClass: "stepper-button-plus", on: { click: e.onPlusClick } })]) }, staticRenderFns: [], props: h.extend({ init: { type: Boolean, default: !0 }, value: { type: Number, default: 0 }, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, step: { type: Number, default: 1 }, formatValue: Function, input: { type: Boolean, default: !0 }, inputType: { type: String, default: "text" }, inputReadonly: { type: Boolean, default: !0 }, autorepeat: { type: Boolean, default: !1 }, autorepeatDynamic: { type: Boolean, default: !1 }, wraps: { type: Boolean, default: !1 }, disabled: Boolean, buttonsOnly: Boolean, round: Boolean, roundMd: Boolean, roundIos: Boolean, fill: Boolean, fillMd: Boolean, fillIos: Boolean, big: Boolean, bigMd: Boolean, bigIos: Boolean, small: Boolean, smallMd: Boolean, smallIos: Boolean, raised: Boolean }, g.colorProps), computed: { classes: function() { var e = this.round,
                            t = this.roundIos,
                            n = this.roundMd,
                            a = this.fill,
                            i = this.fillIos,
                            r = this.fillMd,
                            s = this.big,
                            o = this.bigIos,
                            l = this.bigMd,
                            c = this.small,
                            d = this.smallIos,
                            u = this.smallMd,
                            p = this.raised; return h.extend({ disabled: this.disabled, "stepper-round": e, "stepper-round-ios": t, "stepper-round-md": n, "stepper-fill": a, "stepper-fill-ios": i, "stepper-fill-md": r, "stepper-big": s, "stepper-big-ios": o, "stepper-big-md": l, "stepper-small": c, "stepper-small-ios": d, "stepper-small-md": u, "stepper-raised": p }, g.colorClasses(this)) } }, beforeDestroy: function() { this.init && this.f7Stepper && this.f7Stepper.destroy && this.f7Stepper.destroy() }, methods: { increment: function() { this.f7Stepper && this.f7Stepper.increment() }, decrement: function() { this.f7Stepper && this.f7Stepper.decrement() }, setValue: function(e) { this.f7Stepper && this.f7Stepper.setValue && this.f7Stepper.setValue(e) }, getValue: function() { if (this.f7Stepper && this.f7Stepper.getValue) return this.f7Stepper.getValue() }, onInput: function(e) { this.$emit("input", e, this.f7Stepper) }, onMinusClick: function(e) { this.$emit("stepper:minusclick", e, this.f7Stepper) }, onPlusClick: function(e) { this.$emit("stepper:plusclick", e, this.f7Stepper) }, onF7Ready: function(e) { var t = this; if (t.init) { var n = t.min,
                                a = t.max,
                                i = t.value,
                                r = t.step,
                                s = t.formatValue,
                                o = t.$el,
                                l = t.autorepeat,
                                c = t.autorepeatDynamic,
                                d = t.wraps;
                            t.f7Stepper = e.stepper.create({ el: o, min: n, max: a, value: i, step: r, formatValue: s, autorepeat: l, autorepeatDynamic: c, wraps: d, on: { change: function(e, n) { t.$emit("stepper:change", n) } } }) } } } },
            Ve = { render: function() { var e = this,
                        t = e.$createElement,
                        n = e._self._c || t; return n("div", { staticClass: "subnavbar", class: e.classes }, [e.inner ? n("div", { staticClass: "subnavbar-inner" }, [e.title ? n("div", { staticClass: "title" }, [e._v(e._s(e.title))]) : e._e(), e._v(" "), e._t("default")], 2) : e._t("default")], 2) }, staticRenderFns: [], name: "f7-subnavbar", props: h.extend({ sliding: Boolean, title: String, inner: { type: Boolean, default: !0 } }, g.colorProps), computed: { classes: function() { return h.extend({ sliding: this.sliding }, g.colorClasses(this)) } } },
            qe = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], name: "f7-swipeout-actions", props: h.extend({ left: Boolean, right: Boolean, side: String }, g.colorProps), computed: { classes: function() { return h.extend(i()({}, "swipeout-actions-" + this.sideComputed, !0), g.colorClasses(this)) }, sideComputed: function() { return this.side ? this.side : this.left ? "left" : (this.right, "right") } }, data: function() { return {} } },
            We = { render: function() { var e = this.$createElement; return (this._self._c || e)("a", { class: this.classes, attrs: { "data-confirm": this.confirmText || void 0 }, on: { click: this.onClick } }, [this._t("default", [this._v(this._s(this.text))])], 2) }, staticRenderFns: [], name: "f7-swipeout-button", props: h.extend({ text: String, confirmText: String, overswipe: Boolean, close: Boolean, delete: Boolean }, g.colorProps), computed: { classes: function() { return h.extend({ "swipeout-overswipe": this.overswipe, "swipeout-delete": this.delete, "swipeout-close": this.close }, g.colorClasses(this)) } }, methods: { onClick: function(e) { this.$emit("click", e) } } },
            Ye = { render: function() { var e = this.$createElement,
                        t = this._self._c || e; return t("div", { staticClass: "swiper-slide" }, [this.zoom ? t("div", { staticClass: "swiper-zoom-container" }, [this._t("default")], 2) : this._t("default")], 2) }, staticRenderFns: [], name: "f7-swiper-slide", props: { zoom: Boolean } },
            Ue = { render: function() { var e = this,
                        t = e.$createElement,
                        n = e._self._c || t; return n("div", { staticClass: "swiper-container", class: e.classes }, [e._t("before-wrapper"), e._v(" "), n("div", { staticClass: "swiper-wrapper" }, [e._t("default")], 2), e._v(" "), !0 === e.paginationComputed ? n("div", { staticClass: "swiper-pagination" }) : e._e(), e._v(" "), !0 === e.scrollbarComputed ? n("div", { staticClass: "swiper-scrollbar" }) : e._e(), e._v(" "), !0 === e.navigationComputed ? n("div", { staticClass: "swiper-button-next" }) : e._e(), e._v(" "), !0 === e.navigationComputed ? n("div", { staticClass: "swiper-button-prev" }) : e._e(), e._v(" "), e._t("after-wrapper")], 2) }, staticRenderFns: [], name: "f7-swiper", beforeDestroy: function() { this.init && this.swiper && this.swiper.destroy && this.swiper.destroy() }, data: function() { return { initialUpdate: !1 } }, updated: function() { this.initialUpdate ? this.swiper && this.swiper.update && this.swiper.update() : this.initialUpdate = !0 }, props: h.extend({ params: Object, pagination: Boolean, scrollbar: Boolean, navigation: Boolean, init: { type: Boolean, default: !0 } }, g.colorProps), computed: { classes: function() { return g.colorClasses(this) }, paginationComputed: function() { return !!(!0 === this.pagination || this.params && this.params.pagination && !this.params.pagination.el) }, scrollbarComputed: function() { return !!(!0 === this.scrollbar || this.params && this.params.scrollbar && !this.params.scrollbar.el) }, navigationComputed: function() { return !(!0 !== this.navigation && (!this.params || !this.params.navigation || this.params.navigation.nextEl || this.params.navigation.prevEl)) } }, methods: { onF7Ready: function(e) { if (this.init) { var t = { pagination: {}, navigation: {}, scrollbar: {} };
                            this.params && h.extend(t, this.params), this.pagination && !t.pagination.el && (t.pagination.el = ".swiper-pagination"), !this.navigation || t.navigation.nextEl || t.navigation.prevEl || (t.navigation.nextEl = ".swiper-button-next", t.navigation.prevEl = ".swiper-button-prev"), this.scrollbar && !t.scrollbar.el && (t.scrollbar.el = ".swiper-scrollbar"), this.swiper = e.swiper.create(this.$el, t) } } } },
            Ge = { name: "f7-tab", props: h.extend({ tabActive: Boolean, id: String }, g.colorProps), data: function() { return { tabContent: null } }, render: function(e) { return e("div", { staticClass: "tab", attrs: { id: this.id }, class: h.extend({ "tab-active": this.tabActive }, g.colorClasses(this)), on: { "tab:show": this.onTabShow, "tab:hide": this.onTabHide } }, [this.tabContent ? e(this.tabContent.component, { tag: "component", props: this.tabContent.params, key: this.tabContent.id }) : this.$slots.default]) }, methods: { show: function(e) { this.$f7 && this.$f7.tab.show(this.$el, e) }, onTabShow: function(e) { this.$emit("tab:show", e) }, onTabHide: function(e) { this.$emit("tab:hide", e) } } },
            Xe = { name: "f7-tabs", render: function(e) { var t = e("div", { staticClass: "tabs" }, [this.$slots.default]); return this.animated || this.swipeable ? e("div", { class: this.classes }, [t]) : t }, props: h.extend({ animated: Boolean, swipeable: Boolean, routable: Boolean }, g.colorProps), computed: { classes: function() { return h.extend({ "tabs-animated-wrap": this.animated, "tabs-swipeable-wrap": this.swipeable, "tabs-routable": this.routable }, g.colorClasses(this)) } } },
            Ke = { render: function() { var e = this,
                        t = e.$createElement,
                        n = e._self._c || t; return n("div", { staticClass: "toolbar", class: e.classes }, [e._t("before-inner"), e._v(" "), e.inner ? n("div", { staticClass: "toolbar-inner" }, [e._t("default")], 2) : e._t("default"), e._v(" "), e._t("after-inner")], 2) }, staticRenderFns: [], name: "f7-toolbar", props: h.extend({ bottomMd: Boolean, tabbar: Boolean, labels: Boolean, scrollable: Boolean, hidden: Boolean, noShadow: Boolean, noHairline: Boolean, inner: { type: Boolean, default: !0 } }, g.colorProps), updated: function() { var e = this;
                    e.tabbar && e.$f7 && e.$nextTick(function() { e.$f7.toolbar.setHighlight(e.$el) }) }, computed: { classes: function() { return h.extend({ "toolbar-bottom-md": this.bottomMd, tabbar: this.tabbar, "tabbar-labels": this.labels, "tabbar-scrollable": this.scrollable, "toolbar-hidden": this.hidden, "no-shadow": this.noShadow, "no-hairline": this.noHairline }, g.colorClasses(this)) } }, methods: { hide: function(e) { this.$f7 && this.$f7.toolbar.hide(this.$el, e) }, show: function(e) { this.$f7 && this.$f7.toolbar.show(this.$el, e) }, onF7Ready: function(e) { this.tabbar && e.toolbar.setHighlight(this.$el) } } },
            Je = { name: "f7-view", props: h.extend({ tab: Boolean, tabActive: Boolean, name: String, router: Boolean, linksView: [Object, String], url: String, main: Boolean, stackPages: Boolean, xhrCache: String, xhrCacheIgnore: Array, xhrCacheIgnoreGetParameters: Boolean, xhrCacheDuration: Number, preloadPreviousPage: Boolean, uniqueHistory: Boolean, uniqueHistoryIgnoreGetParameters: Boolean, allowDuplicateUrls: Boolean, reloadPages: Boolean, removeElements: Boolean, removeElementsWithTimeout: Boolean, removeElementsTimeout: Number, restoreScrollTopOnBack: Boolean, iosSwipeBack: Boolean, iosSwipeBackAnimateShadow: Boolean, iosSwipeBackAnimateOpacity: Boolean, iosSwipeBackActiveArea: Number, iosSwipeBackThreshold: Number, pushState: Boolean, pushStateRoot: String, pushStateAnimate: Boolean, pushStateAnimateOnLoad: Boolean, pushStateSeparator: String, pushStateOnLoad: Boolean, animate: Boolean, iosDynamicNavbar: Boolean, iosSeparateDynamicNavbar: Boolean, iosAnimateNavbarBackIcon: Boolean, materialPageLoadDelay: Number, passRouteQueryToRequest: Boolean, passRouteParamsToRequest: Boolean, routes: Array, routesAdd: Array, init: { type: Boolean, default: !0 } }, g.colorProps), render: function(e) { var t = this.pages.map(function(t) { return e(t.component, { tag: "component", props: t.params && t.params || {}, key: t.id }) }); return e("div", { staticClass: "view", ref: "view", class: this.classes, on: { "swipeback:move": this.onSwipeBackMove, "swipeback:beforechange": this.onSwipeBackBeforeChange, "swipeback:afterchange": this.onSwipeBackAfterChange, "swipeback:beforereset": this.onSwipeBackBeforeReset, "swipeback:afterreset": this.onSwipeBackAfterReset, "tab:show": this.onTabShow, "tab:hide": this.onTabHide } }, [this.$slots.default, t]) }, beforeDestroy: function() { this.f7View && this.f7View.destroy && this.f7View.destroy() }, data: function() { return { pages: [] } }, computed: { classes: function() { return h.extend({ "view-main": this.main, "tab-active": this.tabActive, tab: this.tab }, g.colorClasses(this)) } }, methods: { onF7Ready: function(e) { this.init && (this.f7View = e.views.create(this.$el, this.$options.propsData)) }, onSwipeBackMove: function(e) { this.$emit("swipeback:move", e, e.detail) }, onSwipeBackBeforeChange: function(e) { this.$emit("swipeback:beforechange", e, e.detail) }, onSwipeBackAfterChange: function(e) { this.$emit("swipeback:afterchange", e, e.detail) }, onSwipeBackBeforeReset: function(e) { this.$emit("swipeback:beforereset", e, e.detail) }, onSwipeBackAfterReset: function(e) { this.$emit("swipeback:afterreset", e, e.detail) }, onTabShow: function(e) { this.$emit("tab:show", e) }, onTabHide: function(e) { this.$emit("tab:hide", e) } } },
            Qe = { render: function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "views", class: this.classes }, [this._t("default")], 2) }, staticRenderFns: [], name: "f7-views", props: h.extend({ tabs: Boolean }, g.colorProps), computed: { classes: function() { return h.extend({ tabs: this.tabs }, g.colorClasses(this)) } } },
            Ze = { install: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.Framework7; if (void 0 === t) throw new Error("Framework7 is undefined, make sure you have passed it as an argument: Vue.use(Framework7Vue, Framework7)"); var n = new e,
                        a = !1,
                        i = void 0;
                    Object.defineProperty(e.prototype, "$f7", { get: function() { return i } }); var r = {};
                    Object.defineProperty(e.prototype, "$theme", { get: function() { return { ios: i ? "ios" === i.theme : r.ios, md: i ? "md" === i.theme : r.md } } }), e.prototype.Dom7 = t.$, e.prototype.$$ = t.$, e.prototype.$device = t.device, e.prototype.$request = t.request, e.prototype.$utils = t.utils, t.Router.use(m).use({ on: { routeChange: function(e, t, a) { n.$emit("f7RouteChange", e, t, a) }, routeChanged: function(e, t, a) { n.$emit("f7RouteChanged", e, t, a) } } }), e.mixin({ directives: f, components: { f7AccordionContent: b, f7AccordionItem: y, f7AccordionToggle: w, f7Accordion: C, f7ActionsButton: x, f7ActionsGroup: k, f7ActionsLabel: E, f7Actions: $, f7Badge: S, f7BlockFooter: T, f7BlockHeader: _, f7BlockTitle: M, f7Block: P, f7Button: I, f7CardContent: A, f7CardFooter: L, f7CardHeader: D, f7Card: z, f7Checkbox: N, f7Chip: F, f7Col: H, f7FabButton: j, f7FabButtons: V, f7Fab: q, f7Icon: O, f7Input: G, f7Label: X, f7Link: J, f7ListButton: Q, f7ListGroup: Z, f7ListIndex: ee, f7ListItemCell: te, f7ListItemContent: ae, f7ListItemRow: ie, f7ListItem: se, f7List: oe, f7LoginScreenTitle: le, f7LoginScreen: ce, f7Message: de, f7MessagebarAttachment: ue, f7MessagebarAttachments: pe, f7MessagebarSheetImage: he, f7MessagebarSheetItem: fe, f7MessagebarSheet: ve, f7Messagebar: ge, f7MessagesTitle: be, f7Messages: ye, f7NavLeft: Ce, f7NavRight: xe, f7NavTitle: ke, f7Navbar: $e, f7PageContent: Se, f7Page: _e, f7Panel: Me, f7PhotoBrowser: Pe, f7Popover: Oe, f7Popup: Be, f7Preloader: Ie, f7Progressbar: Ae, f7Radio: Le, f7Range: Y, f7RoutableModals: De, f7Row: Re, f7Searchbar: ze, f7Segmented: Ne, f7Sheet: Fe, f7Statusbar: He, f7Stepper: je, f7Subnavbar: Ve, f7SwipeoutActions: qe, f7SwipeoutButton: We, f7SwiperSlide: Ye, f7Swiper: Ue, f7Tab: Ge, f7Tabs: Xe, f7Toggle: W, f7Toolbar: Ke, f7View: Je, f7Views: Qe }, beforeCreate: function() { if (this === this.$root) { var e = (this.$options.framework7 || {}).theme; "md" === e && (r.md = !0), "ios" === e && (r.ios = !0), e && "auto" !== e || (r.ios = !!(t.Device || t.device).ios, r.md = !(t.Device || t.device).ios) } for (var n = void 0, a = void 0, i = this; i && !a && !n;) i.$f7route && (n = i.$f7route), i.$f7router ? a = i.$f7router : i.f7View ? a = i.f7View.router : i.$el && i.$el.f7View && (a = i.$el.f7View.router), i = i.$parent;
                            n && a && (this.$f7route = n, this.$f7router = a, this.$f7Route = n, this.$f7Router = a) }, beforeDestroy: function() { this.$f7RouteChangeCallback && n.$off("f7RouteChange", this.$f7RouteChangeCallback), this.$f7RouteChangedCallback && n.$off("f7RouteChanged", this.$f7RouteChangedCallback) }, created: function() { var e = this,
                                t = e.onF7RouteChange || e.F7RouteChange || e.f7RouteChange || e.f7routeChange,
                                a = e.onF7RouteChanged || e.F7RouteChanged || e.f7RouteChanged || e.f7routeChanged;

                            function i(t) { return e.$f7router && t === e.$f7router || !e.$f7router && e.$f7 && e.$f7.router }

                            function r() { t && (e.$f7RouteChangeCallback = function(e, n, a) { i(a) && t(e, n, a) }, n.$on("f7RouteChange", e.$f7RouteChangeCallback)), a && (e.$f7RouteChangedCallback = function(e, t, n) { i(n) && a(e, t, n) }, n.$on("f7RouteChanged", e.$f7RouteChangedCallback)) }(t || a) && (e.$f7 ? r() : n.$once("f7Ready", r)) }, mounted: function() { var e, r, s, o;
                            this === this.$root && (e = this.$root.$el, r = this.$options.framework7, s = this.$options.routes, o = h.extend({}, r || {}, { root: e }), s && s.length && !o.routes && (o.routes = s), i = new t(o), a = !0, n.$emit("f7Ready", i)); var l = this.onF7Ready || this.onF7ready || this.onF7Init || this.onF7init || this.f7Ready || this.f7Init || this.f7ready || this.f7init;
                            l && (a ? l(i) : n.$once("f7Ready", function(e) { l(e) })) } }) } };
        t.a = Ze },
    "94VQ": function(e, t, n) { "use strict"; var a = n("Yobk"),
            i = n("X8DO"),
            r = n("e6n0"),
            s = {};
        n("hJx8")(s, n("dSzd")("iterator"), function() { return this }), e.exports = function(e, t, n) { e.prototype = a(s, { next: i(1, n) }), r(e, t + " Iterator") } },
    "9bBU": function(e, t, n) { n("mClu"); var a = n("FeBl").Object;
        e.exports = function(e, t, n) { return a.defineProperty(e, t, n) } },
    AMV0: function(e, t, n) { e.exports = { default: n("k2Ib"), __esModule: !0 } },
    BO1k: function(e, t, n) { e.exports = { default: n("fxRn"), __esModule: !0 } },
    BwfY: function(e, t, n) { n("fWfb"), n("M6a0"), n("OYls"), n("QWe/"), e.exports = n("FeBl").Symbol },
    C4MV: function(e, t, n) { e.exports = { default: n("9bBU"), __esModule: !0 } },
    CXw9: function(e, t, n) { "use strict"; var a, i, r, s, o = n("O4g8"),
            l = n("7KvD"),
            c = n("+ZMJ"),
            d = n("RY/4"),
            u = n("kM2E"),
            p = n("EqjI"),
            h = n("lOnJ"),
            f = n("2KxR"),
            v = n("NWt+"),
            m = n("t8x9"),
            g = n("L42u").set,
            b = n("82Mu")(),
            y = n("qARP"),
            w = n("dNDb"),
            C = n("iUbK"),
            x = n("fJUb"),
            k = l.TypeError,
            E = l.process,
            $ = E && E.versions,
            S = $ && $.v8 || "",
            T = l.Promise,
            _ = "process" == d(E),
            M = function() {},
            P = i = y.f,
            O = !! function() { try { var e = T.resolve(1),
                        t = (e.constructor = {})[n("dSzd")("species")] = function(e) { e(M, M) }; return (_ || "function" == typeof PromiseRejectionEvent) && e.then(M) instanceof t && 0 !== S.indexOf("6.6") && -1 === C.indexOf("Chrome/66") } catch (e) {} }(),
            B = function(e) { var t; return !(!p(e) || "function" != typeof(t = e.then)) && t },
            I = function(e, t) { if (!e._n) { e._n = !0; var n = e._c;
                    b(function() { for (var a = e._v, i = 1 == e._s, r = 0, s = function(t) { var n, r, s, o = i ? t.ok : t.fail,
                                    l = t.resolve,
                                    c = t.reject,
                                    d = t.domain; try { o ? (i || (2 == e._h && D(e), e._h = 1), !0 === o ? n = a : (d && d.enter(), n = o(a), d && (d.exit(), s = !0)), n === t.promise ? c(k("Promise-chain cycle")) : (r = B(n)) ? r.call(n, l, c) : l(n)) : c(a) } catch (e) { d && !s && d.exit(), c(e) } }; n.length > r;) s(n[r++]);
                        e._c = [], e._n = !1, t && !e._h && A(e) }) } },
            A = function(e) { g.call(l, function() { var t, n, a, i = e._v,
                        r = L(e); if (r && (t = w(function() { _ ? E.emit("unhandledRejection", i, e) : (n = l.onunhandledrejection) ? n({ promise: e, reason: i }) : (a = l.console) && a.error && a.error("Unhandled promise rejection", i) }), e._h = _ || L(e) ? 2 : 1), e._a = void 0, r && t.e) throw t.v }) },
            L = function(e) { return 1 !== e._h && 0 === (e._a || e._c).length },
            D = function(e) { g.call(l, function() { var t;
                    _ ? E.emit("rejectionHandled", e) : (t = l.onrejectionhandled) && t({ promise: e, reason: e._v }) }) },
            R = function(e) { var t = this;
                t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), I(t, !0)) },
            z = function(e) { var t, n = this; if (!n._d) { n._d = !0, n = n._w || n; try { if (n === e) throw k("Promise can't be resolved itself");
                        (t = B(e)) ? b(function() { var a = { _w: n, _d: !1 }; try { t.call(e, c(z, a, 1), c(R, a, 1)) } catch (e) { R.call(a, e) } }): (n._v = e, n._s = 1, I(n, !1)) } catch (e) { R.call({ _w: n, _d: !1 }, e) } } };
        O || (T = function(e) { f(this, T, "Promise", "_h"), h(e), a.call(this); try { e(c(z, this, 1), c(R, this, 1)) } catch (e) { R.call(this, e) } }, (a = function(e) { this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1 }).prototype = n("xH/j")(T.prototype, { then: function(e, t) { var n = P(m(this, T)); return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = _ ? E.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && I(this, !1), n.promise }, catch: function(e) { return this.then(void 0, e) } }), r = function() { var e = new a;
            this.promise = e, this.resolve = c(z, e, 1), this.reject = c(R, e, 1) }, y.f = P = function(e) { return e === T || e === s ? new r(e) : i(e) }), u(u.G + u.W + u.F * !O, { Promise: T }), n("e6n0")(T, "Promise"), n("bRrM")("Promise"), s = n("FeBl").Promise, u(u.S + u.F * !O, "Promise", { reject: function(e) { var t = P(this); return (0, t.reject)(e), t.promise } }), u(u.S + u.F * (o || !O), "Promise", { resolve: function(e) { return x(o && this === s ? T : this, e) } }), u(u.S + u.F * !(O && n("dY0y")(function(e) { T.all(e).catch(M) })), "Promise", { all: function(e) { var t = this,
                    n = P(t),
                    a = n.resolve,
                    i = n.reject,
                    r = w(function() { var n = [],
                            r = 0,
                            s = 1;
                        v(e, !1, function(e) { var o = r++,
                                l = !1;
                            n.push(void 0), s++, t.resolve(e).then(function(e) { l || (l = !0, n[o] = e, --s || a(n)) }, i) }), --s || a(n) }); return r.e && i(r.v), n.promise }, race: function(e) { var t = this,
                    n = P(t),
                    a = n.reject,
                    i = w(function() { v(e, !1, function(e) { t.resolve(e).then(n.resolve, a) }) }); return i.e && a(i.v), n.promise } }) },
    Cdx3: function(e, t, n) { var a = n("sB3e"),
            i = n("lktj");
        n("uqUo")("keys", function() { return function(e) { return i(a(e)) } }) },
    D2L2: function(e, t) { var n = {}.hasOwnProperty;
        e.exports = function(e, t) { return n.call(e, t) } },
    DQCr: function(e, t, n) { "use strict"; var a = n("cGG2");

        function i(e) { return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") } e.exports = function(e, t, n) { if (!t) return e; var r; if (n) r = n(t);
            else if (a.isURLSearchParams(t)) r = t.toString();
            else { var s = [];
                a.forEach(t, function(e, t) { null !== e && void 0 !== e && (a.isArray(e) ? t += "[]" : e = [e], a.forEach(e, function(e) { a.isDate(e) ? e = e.toISOString() : a.isObject(e) && (e = JSON.stringify(e)), s.push(i(t) + "=" + i(e)) })) }), r = s.join("&") } return r && (e += (-1 === e.indexOf("?") ? "?" : "&") + r), e } },
    DuR2: function(e, t) { var n;
        n = function() { return this }(); try { n = n || Function("return this")() || (0, eval)("this") } catch (e) { "object" == typeof window && (n = window) } e.exports = n },
    EGZi: function(e, t) { e.exports = function(e, t) { return { value: t, done: !!e } } },
    EqBC: function(e, t, n) { "use strict"; var a = n("kM2E"),
            i = n("FeBl"),
            r = n("7KvD"),
            s = n("t8x9"),
            o = n("fJUb");
        a(a.P + a.R, "Promise", { finally: function(e) { var t = s(this, i.Promise || r.Promise),
                    n = "function" == typeof e; return this.then(n ? function(n) { return o(t, e()).then(function() { return n }) } : e, n ? function(n) { return o(t, e()).then(function() { throw n }) } : e) } }) },
    EqjI: function(e, t) { e.exports = function(e) { return "object" == typeof e ? null !== e : "function" == typeof e } },
    FeBl: function(e, t) { var n = e.exports = { version: "2.5.7" }; "number" == typeof __e && (__e = n) },
    FtD3: function(e, t, n) { "use strict"; var a = n("t8qj");
        e.exports = function(e, t, n, i, r) { var s = new Error(e); return a(s, t, n, i, r) } },
    GHBc: function(e, t, n) { "use strict"; var a = n("cGG2");
        e.exports = a.isStandardBrowserEnv() ? function() { var e, t = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement("a");

            function i(e) { var a = e; return t && (n.setAttribute("href", a), a = n.href), n.setAttribute("href", a), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname } } return e = i(window.location.href),
                function(t) { var n = a.isString(t) ? i(t) : t; return n.protocol === e.protocol && n.host === e.host } }() : function() { return !0 } },
    Gu7T: function(e, t, n) { "use strict";
        t.__esModule = !0; var a, i = n("c/Tr"),
            r = (a = i) && a.__esModule ? a : { default: a };
        t.default = function(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return (0, r.default)(e) } },
    Ibhu: function(e, t, n) { var a = n("D2L2"),
            i = n("TcQ7"),
            r = n("vFc/")(!1),
            s = n("ax3d")("IE_PROTO");
        e.exports = function(e, t) { var n, o = i(e),
                l = 0,
                c = []; for (n in o) n != s && a(o, n) && c.push(n); for (; t.length > l;) a(o, n = t[l++]) && (~r(c, n) || c.push(n)); return c } },
    "JP+z": function(e, t, n) { "use strict";
        e.exports = function(e, t) { return function() { for (var n = new Array(arguments.length), a = 0; a < n.length; a++) n[a] = arguments[a]; return e.apply(t, n) } } },
    K4R9: function(e, t, n) { n("NA/8"), e.exports = n("FeBl").Number.isNaN },
    K6ED: function(e, t, n) { e.exports = { default: n("cnlX"), __esModule: !0 } },
    KCLY: function(e, t, n) { "use strict";
        (function(t) { var a = n("cGG2"),
                i = n("5VQ+"),
                r = { "Content-Type": "application/x-www-form-urlencoded" };

            function s(e, t) {!a.isUndefined(e) && a.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t) } var o, l = { adapter: ("undefined" != typeof XMLHttpRequest ? o = n("7GwW") : void 0 !== t && (o = n("7GwW")), o), transformRequest: [function(e, t) { return i(t, "Content-Type"), a.isFormData(e) || a.isArrayBuffer(e) || a.isBuffer(e) || a.isStream(e) || a.isFile(e) || a.isBlob(e) ? e : a.isArrayBufferView(e) ? e.buffer : a.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : a.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e }], transformResponse: [function(e) { if ("string" == typeof e) try { e = JSON.parse(e) } catch (e) {}
                    return e }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, validateStatus: function(e) { return e >= 200 && e < 300 } };
            l.headers = { common: { Accept: "application/json, text/plain, */*" } }, a.forEach(["delete", "get", "head"], function(e) { l.headers[e] = {} }), a.forEach(["post", "put", "patch"], function(e) { l.headers[e] = a.merge(r) }), e.exports = l }).call(t, n("W2nU")) },
    Kh4W: function(e, t, n) { t.f = n("dSzd") },
    Kh5d: function(e, t, n) { var a = n("sB3e"),
            i = n("PzxK");
        n("uqUo")("getPrototypeOf", function() { return function(e) { return i(a(e)) } }) },
    L42u: function(e, t, n) { var a, i, r, s = n("+ZMJ"),
            o = n("knuC"),
            l = n("RPLV"),
            c = n("ON07"),
            d = n("7KvD"),
            u = d.process,
            p = d.setImmediate,
            h = d.clearImmediate,
            f = d.MessageChannel,
            v = d.Dispatch,
            m = 0,
            g = {},
            b = function() { var e = +this; if (g.hasOwnProperty(e)) { var t = g[e];
                    delete g[e], t() } },
            y = function(e) { b.call(e.data) };
        p && h || (p = function(e) { for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]); return g[++m] = function() { o("function" == typeof e ? e : Function(e), t) }, a(m), m }, h = function(e) { delete g[e] }, "process" == n("R9M2")(u) ? a = function(e) { u.nextTick(s(b, e, 1)) } : v && v.now ? a = function(e) { v.now(s(b, e, 1)) } : f ? (r = (i = new f).port2, i.port1.onmessage = y, a = s(r.postMessage, r, 1)) : d.addEventListener && "function" == typeof postMessage && !d.importScripts ? (a = function(e) { d.postMessage(e + "", "*") }, d.addEventListener("message", y, !1)) : a = "onreadystatechange" in c("script") ? function(e) { l.appendChild(c("script")).onreadystatechange = function() { l.removeChild(this), b.call(e) } } : function(e) { setTimeout(s(b, e, 1), 0) }), e.exports = { set: p, clear: h } },
    LKZe: function(e, t, n) { var a = n("NpIQ"),
            i = n("X8DO"),
            r = n("TcQ7"),
            s = n("MmMw"),
            o = n("D2L2"),
            l = n("SfB7"),
            c = Object.getOwnPropertyDescriptor;
        t.f = n("+E39") ? c : function(e, t) { if (e = r(e), t = s(t, !0), l) try { return c(e, t) } catch (e) {}
            if (o(e, t)) return i(!a.f.call(e, t), e[t]) } },
    M6a0: function(e, t) {},
    MICi: function(e, t, n) { e.exports = { default: n("K4R9"), __esModule: !0 } },
    MU5D: function(e, t, n) { var a = n("R9M2");
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) { return "String" == a(e) ? e.split("") : Object(e) } },
    Mhyx: function(e, t, n) { var a = n("/bQp"),
            i = n("dSzd")("iterator"),
            r = Array.prototype;
        e.exports = function(e) { return void 0 !== e && (a.Array === e || r[i] === e) } },
    MmMw: function(e, t, n) { var a = n("EqjI");
        e.exports = function(e, t) { if (!a(e)) return e; var n, i; if (t && "function" == typeof(n = e.toString) && !a(i = n.call(e))) return i; if ("function" == typeof(n = e.valueOf) && !a(i = n.call(e))) return i; if (!t && "function" == typeof(n = e.toString) && !a(i = n.call(e))) return i; throw TypeError("Can't convert object to primitive value") } },
    "NA/8": function(e, t, n) { var a = n("kM2E");
        a(a.S, "Number", { isNaN: function(e) { return e != e } }) },
    "NWt+": function(e, t, n) { var a = n("+ZMJ"),
            i = n("msXi"),
            r = n("Mhyx"),
            s = n("77Pl"),
            o = n("QRG4"),
            l = n("3fs2"),
            c = {},
            d = {};
        (t = e.exports = function(e, t, n, u, p) { var h, f, v, m, g = p ? function() { return e } : l(e),
                b = a(n, u, t ? 2 : 1),
                y = 0; if ("function" != typeof g) throw TypeError(e + " is not iterable!"); if (r(g)) { for (h = o(e.length); h > y; y++)
                    if ((m = t ? b(s(f = e[y])[0], f[1]) : b(e[y])) === c || m === d) return m } else
                for (v = g.call(e); !(f = v.next()).done;)
                    if ((m = i(v, b, f.value, t)) === c || m === d) return m }).BREAK = c, t.RETURN = d },
    NpIQ: function(e, t) { t.f = {}.propertyIsEnumerable },
    O4R0: function(e, t, n) { n("+MLA"), e.exports = n("FeBl").Object.freeze },
    O4g8: function(e, t) { e.exports = !0 },
    ON07: function(e, t, n) { var a = n("EqjI"),
            i = n("7KvD").document,
            r = a(i) && a(i.createElement);
        e.exports = function(e) { return r ? i.createElement(e) : {} } },
    OYls: function(e, t, n) { n("crlp")("asyncIterator") },
    OvRC: function(e, t, n) { e.exports = { default: n("oM7Q"), __esModule: !0 } },
    Pf15: function(e, t, n) { "use strict";
        t.__esModule = !0; var a = s(n("kiBT")),
            i = s(n("OvRC")),
            r = s(n("pFYg"));

        function s(e) { return e && e.__esModule ? e : { default: e } } t.default = function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, r.default)(t)));
            e.prototype = (0, i.default)(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (a.default ? (0, a.default)(e, t) : e.__proto__ = t) } },
    PzxK: function(e, t, n) { var a = n("D2L2"),
            i = n("sB3e"),
            r = n("ax3d")("IE_PROTO"),
            s = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) { return e = i(e), a(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null } },
    QRG4: function(e, t, n) { var a = n("UuGF"),
            i = Math.min;
        e.exports = function(e) { return e > 0 ? i(a(e), 9007199254740991) : 0 } },
    "QWe/": function(e, t, n) { n("crlp")("observable") },
    R4wc: function(e, t, n) { var a = n("kM2E");
        a(a.S + a.F, "Object", { assign: n("To3L") }) },
    R9M2: function(e, t) { var n = {}.toString;
        e.exports = function(e) { return n.call(e).slice(8, -1) } },
    RPLV: function(e, t, n) { var a = n("7KvD").document;
        e.exports = a && a.documentElement },
    "RY/4": function(e, t, n) { var a = n("R9M2"),
            i = n("dSzd")("toStringTag"),
            r = "Arguments" == a(function() { return arguments }());
        e.exports = function(e) { var t, n, s; return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) { try { return e[t] } catch (e) {} }(t = Object(e), i)) ? n : r ? a(t) : "Object" == (s = a(t)) && "function" == typeof t.callee ? "Arguments" : s } },
    Re3r: function(e, t) {
        function n(e) { return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e) }
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        e.exports = function(e) { return null != e && (n(e) || function(e) { return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0)) }(e) || !!e._isBuffer) }
    },
    Rrel: function(e, t, n) { var a = n("TcQ7"),
            i = n("n0T6").f,
            r = {}.toString,
            s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        e.exports.f = function(e) { return s && "[object Window]" == r.call(e) ? function(e) { try { return i(e) } catch (e) { return s.slice() } }(e) : i(a(e)) } },
    S82l: function(e, t) { e.exports = function(e) { try { return !!e() } catch (e) { return !0 } } },
    SfB7: function(e, t, n) { e.exports = !n("+E39") && !n("S82l")(function() { return 7 != Object.defineProperty(n("ON07")("div"), "a", { get: function() { return 7 } }).a }) },
    TNV1: function(e, t, n) { "use strict"; var a = n("cGG2");
        e.exports = function(e, t, n) { return a.forEach(n, function(n) { e = n(e, t) }), e } },
    TcQ7: function(e, t, n) { var a = n("MU5D"),
            i = n("52gC");
        e.exports = function(e) { return a(i(e)) } },
    To3L: function(e, t, n) { "use strict"; var a = n("lktj"),
            i = n("1kS7"),
            r = n("NpIQ"),
            s = n("sB3e"),
            o = n("MU5D"),
            l = Object.assign;
        e.exports = !l || n("S82l")(function() { var e = {},
                t = {},
                n = Symbol(),
                a = "abcdefghijklmnopqrst"; return e[n] = 7, a.split("").forEach(function(e) { t[e] = e }), 7 != l({}, e)[n] || Object.keys(l({}, t)).join("") != a }) ? function(e, t) { for (var n = s(e), l = arguments.length, c = 1, d = i.f, u = r.f; l > c;)
                for (var p, h = o(arguments[c++]), f = d ? a(h).concat(d(h)) : a(h), v = f.length, m = 0; v > m;) u.call(h, p = f[m++]) && (n[p] = h[p]); return n } : l },
    U5ju: function(e, t, n) { n("M6a0"), n("zQR9"), n("+tPU"), n("CXw9"), n("EqBC"), n("jKW+"), e.exports = n("FeBl").Promise },
    UuGF: function(e, t) { var n = Math.ceil,
            a = Math.floor;
        e.exports = function(e) { return isNaN(e = +e) ? 0 : (e > 0 ? a : n)(e) } },
    V3tA: function(e, t, n) { n("R4wc"), e.exports = n("FeBl").Object.assign },
    "VU/8": function(e, t) { e.exports = function(e, t, n, a, i, r) { var s, o = e = e || {},
                l = typeof e.default; "object" !== l && "function" !== l || (s = e, o = e.default); var c, d = "function" == typeof o ? o.options : o; if (t && (d.render = t.render, d.staticRenderFns = t.staticRenderFns, d._compiled = !0), n && (d.functional = !0), i && (d._scopeId = i), r ? (c = function(e) {
                    (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), a && a.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r) }, d._ssrRegister = c) : a && (c = a), c) { var u = d.functional,
                    p = u ? d.render : d.beforeCreate;
                u ? (d._injectStyles = c, d.render = function(e, t) { return c.call(t), p(e, t) }) : d.beforeCreate = p ? [].concat(p, c) : [c] } return { esModule: s, exports: o, options: d } } },
    W2nU: function(e, t) { var n, a, i = e.exports = {};

        function r() { throw new Error("setTimeout has not been defined") }

        function s() { throw new Error("clearTimeout has not been defined") }

        function o(e) { if (n === setTimeout) return setTimeout(e, 0); if ((n === r || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0); try { return n(e, 0) } catch (t) { try { return n.call(null, e, 0) } catch (t) { return n.call(this, e, 0) } } }! function() { try { n = "function" == typeof setTimeout ? setTimeout : r } catch (e) { n = r } try { a = "function" == typeof clearTimeout ? clearTimeout : s } catch (e) { a = s } }(); var l, c = [],
            d = !1,
            u = -1;

        function p() { d && l && (d = !1, l.length ? c = l.concat(c) : u = -1, c.length && h()) }

        function h() { if (!d) { var e = o(p);
                d = !0; for (var t = c.length; t;) { for (l = c, c = []; ++u < t;) l && l[u].run();
                    u = -1, t = c.length } l = null, d = !1,
                    function(e) { if (a === clearTimeout) return clearTimeout(e); if ((a === s || !a) && clearTimeout) return a = clearTimeout, clearTimeout(e); try { a(e) } catch (t) { try { return a.call(null, e) } catch (t) { return a.call(this, e) } } }(e) } }

        function f(e, t) { this.fun = e, this.array = t }

        function v() {} i.nextTick = function(e) { var t = new Array(arguments.length - 1); if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            c.push(new f(e, t)), 1 !== c.length || d || o(h) }, f.prototype.run = function() { this.fun.apply(null, this.array) }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function(e) { return [] }, i.binding = function(e) { throw new Error("process.binding is not supported") }, i.cwd = function() { return "/" }, i.chdir = function(e) { throw new Error("process.chdir is not supported") }, i.umask = function() { return 0 } },
    X8DO: function(e, t) { e.exports = function(e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } },
    Xc4G: function(e, t, n) { var a = n("lktj"),
            i = n("1kS7"),
            r = n("NpIQ");
        e.exports = function(e) { var t = a(e),
                n = i.f; if (n)
                for (var s, o = n(e), l = r.f, c = 0; o.length > c;) l.call(e, s = o[c++]) && t.push(s); return t } },
    Xd32: function(e, t, n) { n("+tPU"), n("zQR9"), e.exports = n("5PlU") },
    XmWM: function(e, t, n) { "use strict"; var a = n("KCLY"),
            i = n("cGG2"),
            r = n("fuGk"),
            s = n("xLtR");

        function o(e) { this.defaults = e, this.interceptors = { request: new r, response: new r } } o.prototype.request = function(e) { "string" == typeof e && (e = i.merge({ url: arguments[0] }, arguments[1])), (e = i.merge(a, { method: "get" }, this.defaults, e)).method = e.method.toLowerCase(); var t = [s, void 0],
                n = Promise.resolve(e); for (this.interceptors.request.forEach(function(e) { t.unshift(e.fulfilled, e.rejected) }), this.interceptors.response.forEach(function(e) { t.push(e.fulfilled, e.rejected) }); t.length;) n = n.then(t.shift(), t.shift()); return n }, i.forEach(["delete", "get", "head", "options"], function(e) { o.prototype[e] = function(t, n) { return this.request(i.merge(n || {}, { method: e, url: t })) } }), i.forEach(["post", "put", "patch"], function(e) { o.prototype[e] = function(t, n, a) { return this.request(i.merge(a || {}, { method: e, url: t, data: n })) } }), e.exports = o },
    Ygqm: function(e, t) { e.exports = u, e.exports.parse = r, e.exports.compile = function(e, t) { return s(r(e, t)) }, e.exports.tokensToFunction = s, e.exports.tokensToRegExp = d; var n = "/",
            a = "./",
            i = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");

        function r(e, t) { for (var r, s = [], c = 0, d = 0, u = "", p = t && t.delimiter || n, h = t && t.delimiters || a, f = !1; null !== (r = i.exec(e));) { var v = r[0],
                    m = r[1],
                    g = r.index; if (u += e.slice(d, g), d = g + v.length, m) u += m[1], f = !0;
                else { var b = "",
                        y = e[d],
                        w = r[2],
                        C = r[3],
                        x = r[4],
                        k = r[5]; if (!f && u.length) { var E = u.length - 1;
                        h.indexOf(u[E]) > -1 && (b = u[E], u = u.slice(0, E)) } u && (s.push(u), u = "", f = !1); var $ = "" !== b && void 0 !== y && y !== b,
                        S = "+" === k || "*" === k,
                        T = "?" === k || "*" === k,
                        _ = b || p,
                        M = C || x;
                    s.push({ name: w || c++, prefix: b, delimiter: _, optional: T, repeat: S, partial: $, pattern: M ? l(M) : "[^" + o(_) + "]+?" }) } } return (u || d < e.length) && s.push(u + e.substr(d)), s }

        function s(e) { for (var t = new Array(e.length), n = 0; n < e.length; n++) "object" == typeof e[n] && (t[n] = new RegExp("^(?:" + e[n].pattern + ")$")); return function(n, a) { for (var i = "", r = a && a.encode || encodeURIComponent, s = 0; s < e.length; s++) { var o = e[s]; if ("string" != typeof o) { var l, c = n ? n[o.name] : void 0; if (Array.isArray(c)) { if (!o.repeat) throw new TypeError('Expected "' + o.name + '" to not repeat, but got array'); if (0 === c.length) { if (o.optional) continue; throw new TypeError('Expected "' + o.name + '" to not be empty') } for (var d = 0; d < c.length; d++) { if (l = r(c[d], o), !t[s].test(l)) throw new TypeError('Expected all "' + o.name + '" to match "' + o.pattern + '"');
                                i += (0 === d ? o.prefix : o.delimiter) + l } } else if ("string" != typeof c && "number" != typeof c && "boolean" != typeof c) { if (!o.optional) throw new TypeError('Expected "' + o.name + '" to be ' + (o.repeat ? "an array" : "a string"));
                            o.partial && (i += o.prefix) } else { if (l = r(String(c), o), !t[s].test(l)) throw new TypeError('Expected "' + o.name + '" to match "' + o.pattern + '", but got "' + l + '"');
                            i += o.prefix + l } } else i += o } return i } }

        function o(e) { return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1") }

        function l(e) { return e.replace(/([=!:$/()])/g, "\\$1") }

        function c(e) { return e && e.sensitive ? "" : "i" }

        function d(e, t, i) { for (var r = (i = i || {}).strict, s = !1 !== i.end, l = o(i.delimiter || n), d = i.delimiters || a, u = [].concat(i.endsWith || []).map(o).concat("$").join("|"), p = "", h = 0 === e.length, f = 0; f < e.length; f++) { var v = e[f]; if ("string" == typeof v) p += o(v), h = f === e.length - 1 && d.indexOf(v[v.length - 1]) > -1;
                else { var m = o(v.prefix),
                        g = v.repeat ? "(?:" + v.pattern + ")(?:" + m + "(?:" + v.pattern + "))*" : v.pattern;
                    t && t.push(v), v.optional ? v.partial ? p += m + "(" + g + ")?" : p += "(?:" + m + "(" + g + "))?" : p += m + "(" + g + ")" } } return s ? (r || (p += "(?:" + l + ")?"), p += "$" === u ? "$" : "(?=" + u + ")") : (r || (p += "(?:" + l + "(?=" + u + "))?"), h || (p += "(?=" + l + "|" + u + ")")), new RegExp("^" + p, c(i)) }

        function u(e, t, n) { return e instanceof RegExp ? function(e, t) { if (!t) return e; var n = e.source.match(/\((?!\?)/g); if (n)
                    for (var a = 0; a < n.length; a++) t.push({ name: a, prefix: null, delimiter: null, optional: !1, repeat: !1, partial: !1, pattern: null }); return e }(e, t) : Array.isArray(e) ? function(e, t, n) { for (var a = [], i = 0; i < e.length; i++) a.push(u(e[i], t, n).source); return new RegExp("(?:" + a.join("|") + ")", c(n)) }(e, t, n) : function(e, t, n) { return d(r(e, n), t, n) }(e, t, n) } },
    Yobk: function(e, t, n) { var a = n("77Pl"),
            i = n("qio6"),
            r = n("xnc9"),
            s = n("ax3d")("IE_PROTO"),
            o = function() {},
            l = function() { var e, t = n("ON07")("iframe"),
                    a = r.length; for (t.style.display = "none", n("RPLV").appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; a--;) delete l.prototype[r[a]]; return l() };
        e.exports = Object.create || function(e, t) { var n; return null !== e ? (o.prototype = a(e), n = new o, o.prototype = null, n[s] = e) : n = l(), void 0 === t ? n : i(n, t) } },
    ZaQb: function(e, t, n) { var a = n("EqjI"),
            i = n("77Pl"),
            r = function(e, t) { if (i(e), !a(t) && null !== t) throw TypeError(t + ": can't set as prototype!") };
        e.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, a) { try {
                    (a = n("+ZMJ")(Function.call, n("LKZe").f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array) } catch (e) { t = !0 } return function(e, n) { return r(e, n), t ? e.__proto__ = n : a(e, n), e } }({}, !1) : void 0), check: r } },
    Zrlr: function(e, t, n) { "use strict";
        t.__esModule = !0, t.default = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } },
    Zx67: function(e, t, n) { e.exports = { default: n("fS6E"), __esModule: !0 } },
    Zzip: function(e, t, n) { e.exports = { default: n("/n6Q"), __esModule: !0 } },
    ax3d: function(e, t, n) { var a = n("e8AB")("keys"),
            i = n("3Eo+");
        e.exports = function(e) { return a[e] || (a[e] = i(e)) } },
    bOdI: function(e, t, n) { "use strict";
        t.__esModule = !0; var a, i = n("C4MV"),
            r = (a = i) && a.__esModule ? a : { default: a };
        t.default = function(e, t, n) { return t in e ? (0, r.default)(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } },
    bRrM: function(e, t, n) { "use strict"; var a = n("7KvD"),
            i = n("FeBl"),
            r = n("evD5"),
            s = n("+E39"),
            o = n("dSzd")("species");
        e.exports = function(e) { var t = "function" == typeof i[e] ? i[e] : a[e];
            s && t && !t[o] && r.f(t, o, { configurable: !0, get: function() { return this } }) } },
    "c/Tr": function(e, t, n) { e.exports = { default: n("5zde"), __esModule: !0 } },
    cGG2: function(e, t, n) { "use strict"; var a = n("JP+z"),
            i = n("Re3r"),
            r = Object.prototype.toString;

        function s(e) { return "[object Array]" === r.call(e) }

        function o(e) { return null !== e && "object" == typeof e }

        function l(e) { return "[object Function]" === r.call(e) }

        function c(e, t) { if (null !== e && void 0 !== e)
                if ("object" != typeof e && (e = [e]), s(e))
                    for (var n = 0, a = e.length; n < a; n++) t.call(null, e[n], n, e);
                else
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e) } e.exports = { isArray: s, isArrayBuffer: function(e) { return "[object ArrayBuffer]" === r.call(e) }, isBuffer: i, isFormData: function(e) { return "undefined" != typeof FormData && e instanceof FormData }, isArrayBufferView: function(e) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer }, isString: function(e) { return "string" == typeof e }, isNumber: function(e) { return "number" == typeof e }, isObject: o, isUndefined: function(e) { return void 0 === e }, isDate: function(e) { return "[object Date]" === r.call(e) }, isFile: function(e) { return "[object File]" === r.call(e) }, isBlob: function(e) { return "[object Blob]" === r.call(e) }, isFunction: l, isStream: function(e) { return o(e) && l(e.pipe) }, isURLSearchParams: function(e) { return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams }, isStandardBrowserEnv: function() { return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document }, forEach: c, merge: function e() { var t = {};

                function n(n, a) { "object" == typeof t[a] && "object" == typeof n ? t[a] = e(t[a], n) : t[a] = n } for (var a = 0, i = arguments.length; a < i; a++) c(arguments[a], n); return t }, extend: function(e, t, n) { return c(t, function(t, i) { e[i] = n && "function" == typeof t ? a(t, n) : t }), e }, trim: function(e) { return e.replace(/^\s*/, "").replace(/\s*$/, "") } } },
    cWxy: function(e, t, n) { "use strict"; var a = n("dVOP");

        function i(e) { if ("function" != typeof e) throw new TypeError("executor must be a function."); var t;
            this.promise = new Promise(function(e) { t = e }); var n = this;
            e(function(e) { n.reason || (n.reason = new a(e), t(n.reason)) }) } i.prototype.throwIfRequested = function() { if (this.reason) throw this.reason }, i.source = function() { var e; return { token: new i(function(t) { e = t }), cancel: e } }, e.exports = i },
    cnlX: function(e, t, n) { n("iInB"); var a = n("FeBl").Object;
        e.exports = function(e, t) { return a.getOwnPropertyDescriptor(e, t) } },
    crlp: function(e, t, n) { var a = n("7KvD"),
            i = n("FeBl"),
            r = n("O4g8"),
            s = n("Kh4W"),
            o = n("evD5").f;
        e.exports = function(e) { var t = i.Symbol || (i.Symbol = r ? {} : a.Symbol || {}); "_" == e.charAt(0) || e in t || o(t, e, { value: s.f(e) }) } },
    d7EF: function(e, t, n) { "use strict";
        t.__esModule = !0; var a = r(n("us/S")),
            i = r(n("BO1k"));

        function r(e) { return e && e.__esModule ? e : { default: e } } t.default = function() { return function(e, t) { if (Array.isArray(e)) return e; if ((0, a.default)(Object(e))) return function(e, t) { var n = [],
                        a = !0,
                        r = !1,
                        s = void 0; try { for (var o, l = (0, i.default)(e); !(a = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); a = !0); } catch (e) { r = !0, s = e } finally { try {!a && l.return && l.return() } finally { if (r) throw s } } return n }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance") } }() },
    dIwP: function(e, t, n) { "use strict";
        e.exports = function(e) { return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e) } },
    dNDb: function(e, t) { e.exports = function(e) { try { return { e: !1, v: e() } } catch (e) { return { e: !0, v: e } } } },
    dSzd: function(e, t, n) { var a = n("e8AB")("wks"),
            i = n("3Eo+"),
            r = n("7KvD").Symbol,
            s = "function" == typeof r;
        (e.exports = function(e) { return a[e] || (a[e] = s && r[e] || (s ? r : i)("Symbol." + e)) }).store = a },
    dVOP: function(e, t, n) { "use strict";

        function a(e) { this.message = e } a.prototype.toString = function() { return "Cancel" + (this.message ? ": " + this.message : "") }, a.prototype.__CANCEL__ = !0, e.exports = a },
    dY0y: function(e, t, n) { var a = n("dSzd")("iterator"),
            i = !1; try { var r = [7][a]();
            r.return = function() { i = !0 }, Array.from(r, function() { throw 2 }) } catch (e) {} e.exports = function(e, t) { if (!t && !i) return !1; var n = !1; try { var r = [7],
                    s = r[a]();
                s.next = function() { return { done: n = !0 } }, r[a] = function() { return s }, e(r) } catch (e) {} return n } },
    e6n0: function(e, t, n) { var a = n("evD5").f,
            i = n("D2L2"),
            r = n("dSzd")("toStringTag");
        e.exports = function(e, t, n) { e && !i(e = n ? e : e.prototype, r) && a(e, r, { configurable: !0, value: t }) } },
    e8AB: function(e, t, n) { var a = n("FeBl"),
            i = n("7KvD"),
            r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (e.exports = function(e, t) { return r[e] || (r[e] = void 0 !== t ? t : {}) })("versions", []).push({ version: a.version, mode: n("O4g8") ? "pure" : "global", copyright: "© 2018 Denis Pushkarev (zloirock.ru)" }) },
    evD5: function(e, t, n) { var a = n("77Pl"),
            i = n("SfB7"),
            r = n("MmMw"),
            s = Object.defineProperty;
        t.f = n("+E39") ? Object.defineProperty : function(e, t, n) { if (a(e), t = r(t, !0), a(n), i) try { return s(e, t, n) } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!"); return "value" in n && (e[t] = n.value), e } },
    exh5: function(e, t, n) { var a = n("kM2E");
        a(a.S, "Object", { setPrototypeOf: n("ZaQb").set }) },
    fBQ2: function(e, t, n) { "use strict"; var a = n("evD5"),
            i = n("X8DO");
        e.exports = function(e, t, n) { t in e ? a.f(e, t, i(0, n)) : e[t] = n } },
    fJUb: function(e, t, n) { var a = n("77Pl"),
            i = n("EqjI"),
            r = n("qARP");
        e.exports = function(e, t) { if (a(e), i(t) && t.constructor === e) return t; var n = r.f(e); return (0, n.resolve)(t), n.promise } },
    fS6E: function(e, t, n) { n("Kh5d"), e.exports = n("FeBl").Object.getPrototypeOf },
    fWfb: function(e, t, n) { "use strict"; var a = n("7KvD"),
            i = n("D2L2"),
            r = n("+E39"),
            s = n("kM2E"),
            o = n("880/"),
            l = n("06OY").KEY,
            c = n("S82l"),
            d = n("e8AB"),
            u = n("e6n0"),
            p = n("3Eo+"),
            h = n("dSzd"),
            f = n("Kh4W"),
            v = n("crlp"),
            m = n("Xc4G"),
            g = n("7UMu"),
            b = n("77Pl"),
            y = n("EqjI"),
            w = n("TcQ7"),
            C = n("MmMw"),
            x = n("X8DO"),
            k = n("Yobk"),
            E = n("Rrel"),
            $ = n("LKZe"),
            S = n("evD5"),
            T = n("lktj"),
            _ = $.f,
            M = S.f,
            P = E.f,
            O = a.Symbol,
            B = a.JSON,
            I = B && B.stringify,
            A = h("_hidden"),
            L = h("toPrimitive"),
            D = {}.propertyIsEnumerable,
            R = d("symbol-registry"),
            z = d("symbols"),
            N = d("op-symbols"),
            F = Object.prototype,
            H = "function" == typeof O,
            j = a.QObject,
            V = !j || !j.prototype || !j.prototype.findChild,
            q = r && c(function() { return 7 != k(M({}, "a", { get: function() { return M(this, "a", { value: 7 }).a } })).a }) ? function(e, t, n) { var a = _(F, t);
                a && delete F[t], M(e, t, n), a && e !== F && M(F, t, a) } : M,
            W = function(e) { var t = z[e] = k(O.prototype); return t._k = e, t },
            Y = H && "symbol" == typeof O.iterator ? function(e) { return "symbol" == typeof e } : function(e) { return e instanceof O },
            U = function(e, t, n) { return e === F && U(N, t, n), b(e), t = C(t, !0), b(n), i(z, t) ? (n.enumerable ? (i(e, A) && e[A][t] && (e[A][t] = !1), n = k(n, { enumerable: x(0, !1) })) : (i(e, A) || M(e, A, x(1, {})), e[A][t] = !0), q(e, t, n)) : M(e, t, n) },
            G = function(e, t) { b(e); for (var n, a = m(t = w(t)), i = 0, r = a.length; r > i;) U(e, n = a[i++], t[n]); return e },
            X = function(e) { var t = D.call(this, e = C(e, !0)); return !(this === F && i(z, e) && !i(N, e)) && (!(t || !i(this, e) || !i(z, e) || i(this, A) && this[A][e]) || t) },
            K = function(e, t) { if (e = w(e), t = C(t, !0), e !== F || !i(z, t) || i(N, t)) { var n = _(e, t); return !n || !i(z, t) || i(e, A) && e[A][t] || (n.enumerable = !0), n } },
            J = function(e) { for (var t, n = P(w(e)), a = [], r = 0; n.length > r;) i(z, t = n[r++]) || t == A || t == l || a.push(t); return a },
            Q = function(e) { for (var t, n = e === F, a = P(n ? N : w(e)), r = [], s = 0; a.length > s;) !i(z, t = a[s++]) || n && !i(F, t) || r.push(z[t]); return r };
        H || (o((O = function() { if (this instanceof O) throw TypeError("Symbol is not a constructor!"); var e = p(arguments.length > 0 ? arguments[0] : void 0),
                t = function(n) { this === F && t.call(N, n), i(this, A) && i(this[A], e) && (this[A][e] = !1), q(this, e, x(1, n)) }; return r && V && q(F, e, { configurable: !0, set: t }), W(e) }).prototype, "toString", function() { return this._k }), $.f = K, S.f = U, n("n0T6").f = E.f = J, n("NpIQ").f = X, n("1kS7").f = Q, r && !n("O4g8") && o(F, "propertyIsEnumerable", X, !0), f.f = function(e) { return W(h(e)) }), s(s.G + s.W + s.F * !H, { Symbol: O }); for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; Z.length > ee;) h(Z[ee++]); for (var te = T(h.store), ne = 0; te.length > ne;) v(te[ne++]);
        s(s.S + s.F * !H, "Symbol", { for: function(e) { return i(R, e += "") ? R[e] : R[e] = O(e) }, keyFor: function(e) { if (!Y(e)) throw TypeError(e + " is not a symbol!"); for (var t in R)
                    if (R[t] === e) return t }, useSetter: function() { V = !0 }, useSimple: function() { V = !1 } }), s(s.S + s.F * !H, "Object", { create: function(e, t) { return void 0 === t ? k(e) : G(k(e), t) }, defineProperty: U, defineProperties: G, getOwnPropertyDescriptor: K, getOwnPropertyNames: J, getOwnPropertySymbols: Q }), B && s(s.S + s.F * (!H || c(function() { var e = O(); return "[null]" != I([e]) || "{}" != I({ a: e }) || "{}" != I(Object(e)) })), "JSON", { stringify: function(e) { for (var t, n, a = [e], i = 1; arguments.length > i;) a.push(arguments[i++]); if (n = t = a[1], (y(t) || void 0 !== e) && !Y(e)) return g(t) || (t = function(e, t) { if ("function" == typeof n && (t = n.call(this, e, t)), !Y(t)) return t }), a[1] = t, I.apply(B, a) } }), O.prototype[L] || n("hJx8")(O.prototype, L, O.prototype.valueOf), u(O, "Symbol"), u(Math, "Math", !0), u(a.JSON, "JSON", !0) },
    fZjL: function(e, t, n) { e.exports = { default: n("jFbC"), __esModule: !0 } },
    fkB2: function(e, t, n) { var a = n("UuGF"),
            i = Math.max,
            r = Math.min;
        e.exports = function(e, t) { return (e = a(e)) < 0 ? i(e + t, 0) : r(e, t) } },
    fuGk: function(e, t, n) { "use strict"; var a = n("cGG2");

        function i() { this.handlers = [] } i.prototype.use = function(e, t) { return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1 }, i.prototype.eject = function(e) { this.handlers[e] && (this.handlers[e] = null) }, i.prototype.forEach = function(e) { a.forEach(this.handlers, function(t) { null !== t && e(t) }) }, e.exports = i },
    fxRn: function(e, t, n) { n("+tPU"), n("zQR9"), e.exports = n("g8Ux") },
    g8Ux: function(e, t, n) { var a = n("77Pl"),
            i = n("3fs2");
        e.exports = n("FeBl").getIterator = function(e) { var t = i(e); if ("function" != typeof t) throw TypeError(e + " is not iterable!"); return a(t.call(e)) } },
    h65t: function(e, t, n) { var a = n("UuGF"),
            i = n("52gC");
        e.exports = function(e) { return function(t, n) { var r, s, o = String(i(t)),
                    l = a(n),
                    c = o.length; return l < 0 || l >= c ? e ? "" : void 0 : (r = o.charCodeAt(l)) < 55296 || r > 56319 || l + 1 === c || (s = o.charCodeAt(l + 1)) < 56320 || s > 57343 ? e ? o.charAt(l) : r : e ? o.slice(l, l + 2) : s - 56320 + (r - 55296 << 10) + 65536 } } },
    hJx8: function(e, t, n) { var a = n("evD5"),
            i = n("X8DO");
        e.exports = n("+E39") ? function(e, t, n) { return a.f(e, t, i(1, n)) } : function(e, t, n) { return e[t] = n, e } },
    "i/C/": function(e, t, n) { n("exh5"), e.exports = n("FeBl").Object.setPrototypeOf },
    iInB: function(e, t, n) { var a = n("TcQ7"),
            i = n("LKZe").f;
        n("uqUo")("getOwnPropertyDescriptor", function() { return function(e, t) { return i(a(e), t) } }) },
    iUbK: function(e, t, n) { var a = n("7KvD").navigator;
        e.exports = a && a.userAgent || "" },
    j5iW: function(e, t, n) { "use strict"; var a = n("MICi"),
            i = n.n(a),
            r = n("d7EF"),
            s = n.n(r),
            o = n("bOdI"),
            l = n.n(o),
            c = n("C4MV"),
            d = n.n(c),
            u = n("mvHQ"),
            p = n.n(u),
            h = n("Zx67"),
            f = n.n(h),
            v = n("zwoO"),
            m = n.n(v),
            g = n("Pf15"),
            b = n.n(g),
            y = n("Zrlr"),
            w = n.n(y),
            C = n("wxAW"),
            x = n.n(C),
            k = n("K6ED"),
            E = n.n(k),
            $ = n("pFYg"),
            S = n.n($),
            T = n("//Fk"),
            _ = n.n(T),
            M = n("fZjL"),
            P = n.n(M),
            O = n("Gu7T"),
            B = n.n(O),
            I = "undefined" == typeof document ? { body: {}, addEventListener: function() {}, removeEventListener: function() {}, activeElement: { blur: function() {}, nodeName: "" }, querySelector: function() { return null }, querySelectorAll: function() { return [] }, getElementById: function() { return null }, createEvent: function() { return { initEvent: function() {} } }, createElement: function() { return { children: [], childNodes: [], style: {}, setAttribute: function() {}, getElementsByTagName: function() { return [] } } }, location: { hash: "" } } : document,
            A = "undefined" == typeof window ? { document: I, navigator: { userAgent: "" }, location: {}, history: {}, CustomEvent: function() { return this }, addEventListener: function() {}, removeEventListener: function() {}, getComputedStyle: function() { return { getPropertyValue: function() { return "" } } }, Image: function() {}, Date: function() {}, screen: {}, setTimeout: function() {}, clearTimeout: function() {} } : window,
            L = n("woOf"),
            D = n.n(L),
            R = n("u2KI"),
            z = n.n(R),
            N = function e(t) { w()(this, e); for (var n = 0; n < t.length; n += 1) this[n] = t[n]; return this.length = t.length, this };

        function F(e, t) { var n = [],
                a = 0; if (e && !t && e instanceof N) return e; if (e)
                if ("string" == typeof e) { var i = void 0,
                        r = void 0,
                        s = e.trim(); if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) { var o = "div"; for (0 === s.indexOf("<li") && (o = "ul"), 0 === s.indexOf("<tr") && (o = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (o = "tr"), 0 === s.indexOf("<tbody") && (o = "table"), 0 === s.indexOf("<option") && (o = "select"), (r = I.createElement(o)).innerHTML = s, a = 0; a < r.childNodes.length; a += 1) n.push(r.childNodes[a]) } else
                        for (i = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || I).querySelectorAll(e.trim()) : [I.getElementById(e.trim().split("#")[1])], a = 0; a < i.length; a += 1) i[a] && n.push(i[a]) } else if (e.nodeType || e === A || e === I) n.push(e);
            else if (e.length > 0 && e[0].nodeType)
                for (a = 0; a < e.length; a += 1) n.push(e[a]); return new N(n) }

        function H(e) { for (var t = [], n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]); return t }

        function j(e) { return A.requestAnimationFrame ? A.requestAnimationFrame(e) : A.webkitRequestAnimationFrame ? A.webkitRequestAnimationFrame(e) : A.setTimeout(e, 1e3 / 60) } F.fn = N.prototype, F.Class = N, F.Dom7 = N; var V = z()({ addClass: function(e) { if (void 0 === e) return this; for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                    for (var a = 0; a < this.length; a += 1) void 0 !== this[a].classList && this[a].classList.add(t[n]); return this }, removeClass: function(e) { for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                    for (var a = 0; a < this.length; a += 1) void 0 !== this[a].classList && this[a].classList.remove(t[n]); return this }, hasClass: function(e) { return !!this[0] && this[0].classList.contains(e) }, toggleClass: function(e) { for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                    for (var a = 0; a < this.length; a += 1) void 0 !== this[a].classList && this[a].classList.toggle(t[n]); return this }, attr: function(e, t) { if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0; for (var n = 0; n < this.length; n += 1)
                    if (2 === arguments.length) this[n].setAttribute(e, t);
                    else
                        for (var a in e) this[n][a] = e[a], this[n].setAttribute(a, e[a]); return this }, removeAttr: function(e) { for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e); return this }, prop: function(e, t) { if (1 !== arguments.length || "string" != typeof e) { for (var n = 0; n < this.length; n += 1)
                        if (2 === arguments.length) this[n][e] = t;
                        else
                            for (var a in e) this[n][a] = e[a]; return this } if (this[0]) return this[0][e] }, data: function(e, t) { var n = void 0; if (void 0 !== t) { for (var a = 0; a < this.length; a += 1)(n = this[a]).dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t; return this } if (n = this[0]) { if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage) return n.dom7ElementDataStorage[e]; var i = n.getAttribute("data-" + e); return i || void 0 } }, removeData: function(e) { for (var t = 0; t < this.length; t += 1) { var n = this[t];
                    n.dom7ElementDataStorage && n.dom7ElementDataStorage[e] && (n.dom7ElementDataStorage[e] = null, delete n.dom7ElementDataStorage[e]) } }, dataset: function() { var e = this[0]; if (e) { var t, n = {}; if (e.dataset)
                        for (var a in e.dataset) n[a] = e.dataset[a];
                    else
                        for (var i = 0; i < e.attributes.length; i += 1) { var r = e.attributes[i];
                            r.name.indexOf("data-") >= 0 && (n[(t = r.name.split("data-")[1], t.toLowerCase().replace(/-(.)/g, function(e, t) { return t.toUpperCase() }))] = r.value) }
                    for (var s in n) "false" === n[s] ? n[s] = !1 : "true" === n[s] ? n[s] = !0 : parseFloat(n[s]) === 1 * n[s] && (n[s] *= 1); return n } }, val: function(e) { if (void 0 !== e) { for (var t = 0; t < this.length; t += 1) { var n = this[t]; if (Array.isArray(e) && n.multiple && "select" === n.nodeName.toLowerCase())
                            for (var a = 0; a < n.options.length; a += 1) n.options[a].selected = e.indexOf(n.options[a].value) >= 0;
                        else n.value = e } return this } if (this[0]) { if (this[0].multiple && "select" === this[0].nodeName.toLowerCase()) { for (var i = [], r = 0; r < this[0].selectedOptions.length; r += 1) i.push(this[0].selectedOptions[r].value); return i } return this[0].value } }, transform: function(e) { for (var t = 0; t < this.length; t += 1) { var n = this[t].style;
                    n.webkitTransform = e, n.transform = e } return this }, transition: function(e) { "string" != typeof e && (e += "ms"); for (var t = 0; t < this.length; t += 1) { var n = this[t].style;
                    n.webkitTransitionDuration = e, n.transitionDuration = e } return this }, on: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var a = t[0],
                    i = t[1],
                    r = t[2],
                    s = t[3];

                function o(e) { var t = e.target; if (t) { var n = e.target.dom7EventData || []; if (n.indexOf(e) < 0 && n.unshift(e), F(t).is(i)) r.apply(t, n);
                        else
                            for (var a = F(t).parents(), s = 0; s < a.length; s += 1) F(a[s]).is(i) && r.apply(a[s], n) } }

                function l(e) { var t = e && e.target && e.target.dom7EventData || [];
                    t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t) } "function" == typeof t[1] && (a = t[0], r = t[1], s = t[2], i = void 0), s || (s = !1); for (var c = a.split(" "), d = void 0, u = 0; u < this.length; u += 1) { var p = this[u]; if (i)
                        for (d = 0; d < c.length; d += 1) { var h = c[d];
                            p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[h] || (p.dom7LiveListeners[h] = []), p.dom7LiveListeners[h].push({ listener: r, proxyListener: o }), p.addEventListener(h, o, s) } else
                            for (d = 0; d < c.length; d += 1) { var f = c[d];
                                p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[f] || (p.dom7Listeners[f] = []), p.dom7Listeners[f].push({ listener: r, proxyListener: l }), p.addEventListener(f, l, s) } } return this }, off: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var a = t[0],
                    i = t[1],
                    r = t[2],
                    s = t[3]; "function" == typeof t[1] && (a = t[0], r = t[1], s = t[2], i = void 0), s || (s = !1); for (var o = a.split(" "), l = 0; l < o.length; l += 1)
                    for (var c = o[l], d = 0; d < this.length; d += 1) { var u = this[d],
                            p = void 0; if (!i && u.dom7Listeners ? p = u.dom7Listeners[c] : i && u.dom7LiveListeners && (p = u.dom7LiveListeners[c]), p && p.length)
                            for (var h = p.length - 1; h >= 0; h -= 1) { var f = p[h];
                                r && f.listener === r ? (u.removeEventListener(c, f.proxyListener, s), p.splice(h, 1)) : r || (u.removeEventListener(c, f.proxyListener, s), p.splice(h, 1)) } }
                return this }, once: function() { for (var e = this, t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a]; var i = n[0],
                    r = n[1],
                    s = n[2],
                    o = n[3]; return "function" == typeof n[1] && (i = n[0], s = n[1], o = n[2], r = void 0), e.on(i, r, function t() { for (var n = arguments.length, a = Array(n), l = 0; l < n; l++) a[l] = arguments[l];
                    s.apply(this, a), e.off(i, r, t, o) }, o) }, trigger: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; for (var a = t[0].split(" "), i = t[1], r = 0; r < a.length; r += 1)
                    for (var s = a[r], o = 0; o < this.length; o += 1) { var l = this[o],
                            c = void 0; try { c = new A.CustomEvent(s, { detail: i, bubbles: !0, cancelable: !0 }) } catch (e) {
                            (c = I.createEvent("Event")).initEvent(s, !0, !0), c.detail = i } l.dom7EventData = t.filter(function(e, t) { return t > 0 }), l.dispatchEvent(c), l.dom7EventData = [], delete l.dom7EventData }
                return this }, transitionEnd: function(e) { var t = ["webkitTransitionEnd", "transitionend"],
                    n = this,
                    a = void 0;

                function i(r) { if (r.target === this)
                        for (e.call(this, r), a = 0; a < t.length; a += 1) n.off(t[a], i) } if (e)
                    for (a = 0; a < t.length; a += 1) n.on(t[a], i); return this }, animationEnd: function(e) { var t = ["webkitAnimationEnd", "animationend"],
                    n = this,
                    a = void 0;

                function i(r) { if (r.target === this)
                        for (e.call(this, r), a = 0; a < t.length; a += 1) n.off(t[a], i) } if (e)
                    for (a = 0; a < t.length; a += 1) n.on(t[a], i); return this }, width: function() { return this[0] === A ? A.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null }, outerWidth: function(e) { if (this.length > 0) { if (e) { var t = this.styles(); return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left")) } return this[0].offsetWidth } return null }, height: function() { return this[0] === A ? A.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null }, outerHeight: function(e) { if (this.length > 0) { if (e) { var t = this.styles(); return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom")) } return this[0].offsetHeight } return null }, offset: function() { if (this.length > 0) { var e = this[0],
                        t = e.getBoundingClientRect(),
                        n = I.body,
                        a = e.clientTop || n.clientTop || 0,
                        i = e.clientLeft || n.clientLeft || 0,
                        r = e === A ? A.scrollY : e.scrollTop,
                        s = e === A ? A.scrollX : e.scrollLeft; return { top: t.top + r - a, left: t.left + s - i } } return null }, hide: function() { for (var e = 0; e < this.length; e += 1) this[e].style.display = "none"; return this }, show: function() { for (var e = 0; e < this.length; e += 1) { var t = this[e]; "none" === t.style.display && (t.style.display = ""), "none" === A.getComputedStyle(t, null).getPropertyValue("display") && (t.style.display = "block") } return this }, styles: function() { return this[0] ? A.getComputedStyle(this[0], null) : {} }, css: function(e, t) { var n = void 0; if (1 === arguments.length) { if ("string" != typeof e) { for (n = 0; n < this.length; n += 1)
                            for (var a in e) this[n].style[a] = e[a]; return this } if (this[0]) return A.getComputedStyle(this[0], null).getPropertyValue(e) } if (2 === arguments.length && "string" == typeof e) { for (n = 0; n < this.length; n += 1) this[n].style[e] = t; return this } return this }, toArray: function() { for (var e = [], t = 0; t < this.length; t += 1) e.push(this[t]); return e }, each: function(e) { if (!e) return this; for (var t = 0; t < this.length; t += 1)
                    if (!1 === e.call(this[t], t, this[t])) return this; return this }, forEach: function(e) { if (!e) return this; for (var t = 0; t < this.length; t += 1)
                    if (!1 === e.call(this[t], this[t], t)) return this; return this }, filter: function(e) { for (var t = [], n = 0; n < this.length; n += 1) e.call(this[n], n, this[n]) && t.push(this[n]); return new N(t) }, map: function(e) { for (var t = [], n = 0; n < this.length; n += 1) t.push(e.call(this[n], n, this[n])); return new N(t) }, html: function(e) { if (void 0 === e) return this[0] ? this[0].innerHTML : void 0; for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e; return this }, text: function(e) { if (void 0 === e) return this[0] ? this[0].textContent.trim() : null; for (var t = 0; t < this.length; t += 1) this[t].textContent = e; return this }, is: function(e) { var t = this[0],
                    n = void 0,
                    a = void 0; if (!t || void 0 === e) return !1; if ("string" == typeof e) { if (t.matches) return t.matches(e); if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e); if (t.msMatchesSelector) return t.msMatchesSelector(e); for (n = F(e), a = 0; a < n.length; a += 1)
                        if (n[a] === t) return !0; return !1 } if (e === I) return t === I; if (e === A) return t === A; if (e.nodeType || e instanceof N) { for (n = e.nodeType ? [e] : e, a = 0; a < n.length; a += 1)
                        if (n[a] === t) return !0; return !1 } return !1 }, indexOf: function(e) { for (var t = 0; t < this.length; t += 1)
                    if (this[t] === e) return t; return -1 }, index: function() { var e = this[0],
                    t = void 0; if (e) { for (t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (t += 1); return t } }, eq: function(e) { if (void 0 === e) return this; var t = this.length,
                    n = void 0; return new N(e > t - 1 ? [] : e < 0 ? (n = t + e) < 0 ? [] : [this[n]] : [this[e]]) }, append: function() { for (var e = void 0, t = 0; t < arguments.length; t += 1) { e = arguments.length <= t ? void 0 : arguments[t]; for (var n = 0; n < this.length; n += 1)
                        if ("string" == typeof e) { var a = I.createElement("div"); for (a.innerHTML = e; a.firstChild;) this[n].appendChild(a.firstChild) } else if (e instanceof N)
                        for (var i = 0; i < e.length; i += 1) this[n].appendChild(e[i]);
                    else this[n].appendChild(e) } return this }, appendTo: function(e) { return F(e).append(this), this }, prepend: function(e) { var t = void 0,
                    n = void 0; for (t = 0; t < this.length; t += 1)
                    if ("string" == typeof e) { var a = I.createElement("div"); for (a.innerHTML = e, n = a.childNodes.length - 1; n >= 0; n -= 1) this[t].insertBefore(a.childNodes[n], this[t].childNodes[0]) } else if (e instanceof N)
                    for (n = 0; n < e.length; n += 1) this[t].insertBefore(e[n], this[t].childNodes[0]);
                else this[t].insertBefore(e, this[t].childNodes[0]); return this }, prependTo: function(e) { return F(e).prepend(this), this }, insertBefore: function(e) { for (var t = F(e), n = 0; n < this.length; n += 1)
                    if (1 === t.length) t[0].parentNode.insertBefore(this[n], t[0]);
                    else if (t.length > 1)
                    for (var a = 0; a < t.length; a += 1) t[a].parentNode.insertBefore(this[n].cloneNode(!0), t[a]) }, insertAfter: function(e) { for (var t = F(e), n = 0; n < this.length; n += 1)
                    if (1 === t.length) t[0].parentNode.insertBefore(this[n], t[0].nextSibling);
                    else if (t.length > 1)
                    for (var a = 0; a < t.length; a += 1) t[a].parentNode.insertBefore(this[n].cloneNode(!0), t[a].nextSibling) }, next: function(e) { return this.length > 0 ? e ? this[0].nextElementSibling && F(this[0].nextElementSibling).is(e) ? new N([this[0].nextElementSibling]) : new N([]) : this[0].nextElementSibling ? new N([this[0].nextElementSibling]) : new N([]) : new N([]) }, nextAll: function(e) { var t = [],
                    n = this[0]; if (!n) return new N([]); for (; n.nextElementSibling;) { var a = n.nextElementSibling;
                    e ? F(a).is(e) && t.push(a) : t.push(a), n = a } return new N(t) }, prev: function(e) { if (this.length > 0) { var t = this[0]; return e ? t.previousElementSibling && F(t.previousElementSibling).is(e) ? new N([t.previousElementSibling]) : new N([]) : t.previousElementSibling ? new N([t.previousElementSibling]) : new N([]) } return new N([]) }, prevAll: function(e) { var t = [],
                    n = this[0]; if (!n) return new N([]); for (; n.previousElementSibling;) { var a = n.previousElementSibling;
                    e ? F(a).is(e) && t.push(a) : t.push(a), n = a } return new N(t) }, siblings: function(e) { return this.nextAll(e).add(this.prevAll(e)) }, parent: function(e) { for (var t = [], n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? F(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode)); return F(H(t)) }, parents: function(e) { for (var t = [], n = 0; n < this.length; n += 1)
                    for (var a = this[n].parentNode; a;) e ? F(a).is(e) && t.push(a) : t.push(a), a = a.parentNode; return F(H(t)) }, closest: function(e) { var t = this; return void 0 === e ? new N([]) : (t.is(e) || (t = t.parents(e).eq(0)), t) }, find: function(e) { for (var t = [], n = 0; n < this.length; n += 1)
                    for (var a = this[n].querySelectorAll(e), i = 0; i < a.length; i += 1) t.push(a[i]); return new N(t) }, children: function(e) { for (var t = [], n = 0; n < this.length; n += 1)
                    for (var a = this[n].childNodes, i = 0; i < a.length; i += 1) e ? 1 === a[i].nodeType && F(a[i]).is(e) && t.push(a[i]) : 1 === a[i].nodeType && t.push(a[i]); return new N(H(t)) }, remove: function() { for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]); return this }, detach: function() { return this.remove() }, add: function() { for (var e = void 0, t = void 0, n = arguments.length, a = Array(n), i = 0; i < n; i++) a[i] = arguments[i]; for (e = 0; e < a.length; e += 1) { var r = F(a[e]); for (t = 0; t < r.length; t += 1) this[this.length] = r[t], this.length += 1 } return this }, empty: function() { for (var e = 0; e < this.length; e += 1) { var t = this[e]; if (1 === t.nodeType) { for (var n = 0; n < t.childNodes.length; n += 1) t.childNodes[n].parentNode && t.childNodes[n].parentNode.removeChild(t.childNodes[n]);
                        t.textContent = "" } } return this } }); var q = z()({ scrollTo: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var a = t[0],
                    i = t[1],
                    r = t[2],
                    s = t[3],
                    o = t[4]; return 4 === t.length && "function" == typeof s && (o = s, a = t[0], i = t[1], r = t[2], o = t[3], s = t[4]), void 0 === s && (s = "swing"), this.each(function() { var e = this,
                        t = void 0,
                        n = void 0,
                        l = void 0,
                        c = void 0,
                        d = void 0,
                        u = void 0,
                        p = void 0,
                        h = void 0,
                        f = i > 0 || 0 === i,
                        v = a > 0 || 0 === a; if (void 0 === s && (s = "swing"), f && (t = e.scrollTop, r || (e.scrollTop = i)), v && (n = e.scrollLeft, r || (e.scrollLeft = a)), r) { f && (l = e.scrollHeight - e.offsetHeight, d = Math.max(Math.min(i, l), 0)), v && (c = e.scrollWidth - e.offsetWidth, u = Math.max(Math.min(a, c), 0)); var m = null;
                        f && d === t && (f = !1), v && u === n && (v = !1), j(function a() { var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (new Date).getTime();
                            null === m && (m = i); var l = Math.max(Math.min((i - m) / r, 1), 0),
                                c = "linear" === s ? l : .5 - Math.cos(l * Math.PI) / 2,
                                g = void 0;
                            f && (p = t + c * (d - t)), v && (h = n + c * (u - n)), f && d > t && p >= d && (e.scrollTop = d, g = !0), f && d < t && p <= d && (e.scrollTop = d, g = !0), v && u > n && h >= u && (e.scrollLeft = u, g = !0), v && u < n && h <= u && (e.scrollLeft = u, g = !0), g ? o && o() : (f && (e.scrollTop = p), v && (e.scrollLeft = h), j(a)) }) } }) }, scrollTop: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var a = t[0],
                    i = t[1],
                    r = t[2],
                    s = t[3]; return 3 === t.length && "function" == typeof r && (a = t[0], i = t[1], s = t[2], r = t[3]), void 0 === a ? this.length > 0 ? this[0].scrollTop : null : this.scrollTo(void 0, a, i, r, s) }, scrollLeft: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var a = t[0],
                    i = t[1],
                    r = t[2],
                    s = t[3]; return 3 === t.length && "function" == typeof r && (a = t[0], i = t[1], s = t[2], r = t[3]), void 0 === a ? this.length > 0 ? this[0].scrollLeft : null : this.scrollTo(a, void 0, i, r, s) } }); var W = z()({ animate: function(e, t) { var n = this,
                        a = { props: D()({}, e), params: D()({ duration: 300, easing: "swing" }, t), elements: n, animating: !1, que: [], easingProgress: function(e, t) { return "swing" === e ? .5 - Math.cos(t * Math.PI) / 2 : "function" == typeof e ? e(t) : t }, stop: function() { var e;
                                a.frameId && (e = a.frameId, A.cancelAnimationFrame ? A.cancelAnimationFrame(e) : A.webkitCancelAnimationFrame ? A.webkitCancelAnimationFrame(e) : A.clearTimeout(e)), a.animating = !1, a.elements.each(function(e, t) { delete t.dom7AnimateInstance }), a.que = [] }, done: function(e) { if (a.animating = !1, a.elements.each(function(e, t) { delete t.dom7AnimateInstance }), e && e(n), a.que.length > 0) { var t = a.que.shift();
                                    a.animate(t[0], t[1]) } }, animate: function(e, t) { if (a.animating) return a.que.push([e, t]), a; var i = [];
                                a.elements.each(function(t, n) { var r = void 0,
                                        s = void 0,
                                        o = void 0,
                                        l = void 0,
                                        c = void 0;
                                    n.dom7AnimateInstance || (a.elements[t].dom7AnimateInstance = a), i[t] = { container: n }, P()(e).forEach(function(a) { r = A.getComputedStyle(n, null).getPropertyValue(a).replace(",", "."), s = parseFloat(r), o = r.replace(s, ""), l = parseFloat(e[a]), c = e[a] + o, i[t][a] = { initialFullValue: r, initialValue: s, unit: o, finalValue: l, finalFullValue: c, currentValue: s } }) }); var r = null,
                                    s = void 0,
                                    o = 0,
                                    l = 0,
                                    c = void 0,
                                    d = !1; return a.animating = !0, a.frameId = j(function u() { s = (new Date).getTime(); var p = void 0,
                                        h = void 0;
                                    d || (d = !0, t.begin && t.begin(n)), null === r && (r = s), t.progress && t.progress(n, Math.max(Math.min((s - r) / t.duration, 1), 0), r + t.duration - s < 0 ? 0 : r + t.duration - s, r), i.forEach(function(n) { var d = n;
                                        c || d.done || P()(e).forEach(function(n) { if (!c && !d.done) { p = Math.max(Math.min((s - r) / t.duration, 1), 0), h = a.easingProgress(t.easing, p); var u = d[n],
                                                    f = u.initialValue,
                                                    v = u.finalValue,
                                                    m = u.unit;
                                                d[n].currentValue = f + h * (v - f); var g = d[n].currentValue;
                                                (v > f && g >= v || v < f && g <= v) && (d.container.style[n] = v + m, (l += 1) === P()(e).length && (d.done = !0, o += 1), o === i.length && (c = !0)), c ? a.done(t.complete) : d.container.style[n] = g + m } }) }), c || (a.frameId = j(u)) }), a } }; if (0 === a.elements.length) return n; for (var i = void 0, r = 0; r < a.elements.length; r += 1) a.elements[r].dom7AnimateInstance ? i = a.elements[r].dom7AnimateInstance : a.elements[r].dom7AnimateInstance = a; return i || (i = a), "stop" === e ? i.stop() : i.animate(a.props, a.params), n }, stop: function() { for (var e = 0; e < this.length; e += 1) this[e].dom7AnimateInstance && this[e].dom7AnimateInstance.stop() } }),
            Y = "resize scroll".split(" ");

        function U(e) { for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a]; if (void 0 === n[0]) { for (var i = 0; i < this.length; i += 1) Y.indexOf(e) < 0 && (e in this[i] ? this[i][e]() : F(this[i]).trigger(e)); return this } return this.on.apply(this, [e].concat(n)) }[V, q, W, z()({ click: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["click"].concat(t)) }, blur: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["blur"].concat(t)) }, focus: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["focus"].concat(t)) }, focusin: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["focusin"].concat(t)) }, focusout: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["focusout"].concat(t)) }, keyup: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["keyup"].concat(t)) }, keydown: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["keydown"].concat(t)) }, keypress: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["keypress"].concat(t)) }, submit: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["submit"].concat(t)) }, change: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["change"].concat(t)) }, mousedown: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["mousedown"].concat(t)) }, mousemove: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["mousemove"].concat(t)) }, mouseup: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["mouseup"].concat(t)) }, mouseenter: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["mouseenter"].concat(t)) }, mouseleave: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["mouseleave"].concat(t)) }, mouseout: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["mouseout"].concat(t)) }, mouseover: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["mouseover"].concat(t)) }, touchstart: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["touchstart"].concat(t)) }, touchend: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["touchend"].concat(t)) }, touchmove: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["touchmove"].concat(t)) }, resize: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["resize"].concat(t)) }, scroll: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return U.bind(this).apply(void 0, ["scroll"].concat(t)) } })].forEach(function(e) { P()(e).forEach(function(t) { F.fn[t] = e[t] }) }); var G = F,
            X = n("wLac"),
            K = n("Ygqm"),
            J = n.n(K);
        n.d(t, !1, function() { return G }), n.d(t, !1, function() { return X.a }); var Q = 4,
            Z = .001,
            ee = 1e-7,
            te = 10,
            ne = 11,
            ae = 1 / (ne - 1),
            ie = "function" == typeof Float32Array;

        function re(e, t) { return 1 - 3 * t + 3 * e }

        function se(e, t) { return 3 * t - 6 * e }

        function oe(e) { return 3 * e }

        function le(e, t, n) { return ((re(t, n) * e + se(t, n)) * e + oe(t)) * e }

        function ce(e, t, n) { return 3 * re(t, n) * e * e + 2 * se(t, n) * e + oe(t) }

        function de(e, t, n, a) { if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range"); var i = ie ? new Float32Array(ne) : new Array(ne); if (e !== t || n !== a)
                for (var r = 0; r < ne; ++r) i[r] = le(r * ae, e, n);

            function s(t) { for (var a = 0, r = 1, s = ne - 1; r !== s && i[r] <= t; ++r) a += ae; var o = a + (t - i[--r]) / (i[r + 1] - i[r]) * ae,
                    l = ce(o, e, n); return l >= Z ? function(e, t, n, a) { for (var i = 0; i < Q; ++i) { var r = ce(t, n, a); if (0 === r) return t;
                        t -= (le(t, n, a) - e) / r } return t }(t, o, e, n) : 0 === l ? o : function(e, t, n, a, i) { var r, s, o = 0;
                    do {
                        (r = le(s = t + (n - t) / 2, a, i) - e) > 0 ? n = s : t = s } while (Math.abs(r) > ee && ++o < te); return s }(t, a, a + ae, e, n) } return function(i) { return e === t && n === a ? i : 0 === i ? 0 : 1 === i ? 1 : le(s(i), t, a) } } for (var ue = [{ base: "A", letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ" }, { base: "AA", letters: "Ꜳ" }, { base: "AE", letters: "ÆǼǢ" }, { base: "AO", letters: "Ꜵ" }, { base: "AU", letters: "Ꜷ" }, { base: "AV", letters: "ꜸꜺ" }, { base: "AY", letters: "Ꜽ" }, { base: "B", letters: "BⒷＢḂḄḆɃƂƁ" }, { base: "C", letters: "CⒸＣĆĈĊČÇḈƇȻꜾ" }, { base: "D", letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ" }, { base: "DZ", letters: "ǱǄ" }, { base: "Dz", letters: "ǲǅ" }, { base: "E", letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ" }, { base: "F", letters: "FⒻＦḞƑꝻ" }, { base: "G", letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ" }, { base: "H", letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ" }, { base: "I", letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ" }, { base: "J", letters: "JⒿＪĴɈ" }, { base: "K", letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ" }, { base: "L", letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ" }, { base: "LJ", letters: "Ǉ" }, { base: "Lj", letters: "ǈ" }, { base: "M", letters: "MⓂＭḾṀṂⱮƜ" }, { base: "N", letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ" }, { base: "NJ", letters: "Ǌ" }, { base: "Nj", letters: "ǋ" }, { base: "O", letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ" }, { base: "OI", letters: "Ƣ" }, { base: "OO", letters: "Ꝏ" }, { base: "OU", letters: "Ȣ" }, { base: "OE", letters: "Œ" }, { base: "oe", letters: "œ" }, { base: "P", letters: "PⓅＰṔṖƤⱣꝐꝒꝔ" }, { base: "Q", letters: "QⓆＱꝖꝘɊ" }, { base: "R", letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ" }, { base: "S", letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ" }, { base: "T", letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ" }, { base: "TZ", letters: "Ꜩ" }, { base: "U", letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ" }, { base: "V", letters: "VⓋＶṼṾƲꝞɅ" }, { base: "VY", letters: "Ꝡ" }, { base: "W", letters: "WⓌＷẀẂŴẆẄẈⱲ" }, { base: "X", letters: "XⓍＸẊẌ" }, { base: "Y", letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ" }, { base: "Z", letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ" }, { base: "a", letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ" }, { base: "aa", letters: "ꜳ" }, { base: "ae", letters: "æǽǣ" }, { base: "ao", letters: "ꜵ" }, { base: "au", letters: "ꜷ" }, { base: "av", letters: "ꜹꜻ" }, { base: "ay", letters: "ꜽ" }, { base: "b", letters: "bⓑｂḃḅḇƀƃɓ" }, { base: "c", letters: "cⓒｃćĉċčçḉƈȼꜿↄ" }, { base: "d", letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ" }, { base: "dz", letters: "ǳǆ" }, { base: "e", letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ" }, { base: "f", letters: "fⓕｆḟƒꝼ" }, { base: "g", letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ" }, { base: "h", letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ" }, { base: "hv", letters: "ƕ" }, { base: "i", letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı" }, { base: "j", letters: "jⓙｊĵǰɉ" }, { base: "k", letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ" }, { base: "l", letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ" }, { base: "lj", letters: "ǉ" }, { base: "m", letters: "mⓜｍḿṁṃɱɯ" }, { base: "n", letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ" }, { base: "nj", letters: "ǌ" }, { base: "o", letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ" }, { base: "oi", letters: "ƣ" }, { base: "ou", letters: "ȣ" }, { base: "oo", letters: "ꝏ" }, { base: "p", letters: "pⓟｐṕṗƥᵽꝑꝓꝕ" }, { base: "q", letters: "qⓠｑɋꝗꝙ" }, { base: "r", letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ" }, { base: "s", letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ" }, { base: "t", letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ" }, { base: "tz", letters: "ꜩ" }, { base: "u", letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ" }, { base: "v", letters: "vⓥｖṽṿʋꝟʌ" }, { base: "vy", letters: "ꝡ" }, { base: "w", letters: "wⓦｗẁẃŵẇẅẘẉⱳ" }, { base: "x", letters: "xⓧｘẋẍ" }, { base: "y", letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ" }, { base: "z", letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ" }], pe = {}, he = 0; he < ue.length; he += 1)
            for (var fe = ue[he].letters, ve = 0; ve < fe.length; ve += 1) pe[fe[ve]] = ue[he].base; var me = { mdPreloaderContent: '\n    <span class="preloader-inner">\n      <span class="preloader-inner-gap"></span>\n      <span class="preloader-inner-left">\n          <span class="preloader-inner-half-circle"></span>\n      </span>\n      <span class="preloader-inner-right">\n          <span class="preloader-inner-half-circle"></span>\n      </span>\n    </span>\n  '.trim(), eventNameToColonCase: function(e) { var t = void 0; return e.split("").map(function(e, n) { return e.match(/[A-Z]/) && 0 !== n && !t ? (t = !0, ":" + e.toLowerCase()) : e.toLowerCase() }).join("") }, deleteProps: function(e) { var t = e;
                    P()(t).forEach(function(e) { try { t[e] = null } catch (e) {} try { delete t[e] } catch (e) {} }) }, bezier: function() { return de.apply(void 0, arguments) }, nextTick: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; return setTimeout(e, t) }, nextFrame: function(e) { return me.requestAnimationFrame(e) }, now: function() { return Date.now() }, promise: function(e) { return A.Promise ? new _.a(e) : function(e) { var t = !1,
                            n = !1,
                            a = void 0,
                            i = void 0,
                            r = { then: void 0, catch: void 0 },
                            s = { then: function(e) { return t ? e.apply(void 0, B()(a)) : r.then = e, s }, catch: function(e) { return n ? e.apply(void 0, B()(i)) : r.catch = e, s } }; return e(function() { t = !0; for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                            r.then ? r.then.apply(r, n) : a = n }, function() { n = !0; for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                            r.catch ? r.catch.apply(r, t) : i = t }), s }(e) }, requestAnimationFrame: function(e) { return A.requestAnimationFrame ? A.requestAnimationFrame(e) : A.webkitRequestAnimationFrame ? A.webkitRequestAnimationFrame(e) : A.setTimeout(e, 1e3 / 60) }, cancelAnimationFrame: function(e) { return A.cancelAnimationFrame ? A.cancelAnimationFrame(e) : A.webkitCancelAnimationFrame ? A.webkitCancelAnimationFrame(e) : A.clearTimeout(e) }, removeDiacritics: function(e) { return e.replace(/[^\u0000-\u007E]/g, function(e) { return pe[e] || e }) }, parseUrlQuery: function(e) { var t = {},
                        n = e || A.location.href,
                        a = void 0,
                        i = void 0,
                        r = void 0,
                        s = void 0; if ("string" == typeof n && n.length)
                        for (s = (i = (n = n.indexOf("?") > -1 ? n.replace(/\S*\?/, "") : "").split("&").filter(function(e) { return "" !== e })).length, a = 0; a < s; a += 1) r = i[a].replace(/#\S+/g, "").split("="), t[decodeURIComponent(r[0])] = void 0 === r[1] ? void 0 : decodeURIComponent(r[1]) || ""; return t }, getTranslate: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
                        n = void 0,
                        a = void 0,
                        i = void 0,
                        r = A.getComputedStyle(e, null); return A.WebKitCSSMatrix ? ((a = r.transform || r.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function(e) { return e.replace(",", ".") }).join(", ")), i = new A.WebKitCSSMatrix("none" === a ? "" : a)) : n = (i = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (a = A.WebKitCSSMatrix ? i.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (a = A.WebKitCSSMatrix ? i.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), a || 0 }, serializeObject: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []; if ("string" == typeof e) return e; var n = [],
                        a = void 0;

                    function i(e) { if (t.length > 0) { for (var n = "", a = 0; a < t.length; a += 1) n += 0 === a ? t[a] : "[" + encodeURIComponent(t[a]) + "]"; return n + "[" + encodeURIComponent(e) + "]" } return encodeURIComponent(e) }

                    function r(e) { return encodeURIComponent(e) } return P()(e).forEach(function(s) { var o = void 0; if (Array.isArray(e[s])) { o = []; for (var l = 0; l < e[s].length; l += 1) Array.isArray(e[s][l]) || "object" !== S()(e[s][l]) ? o.push(i(s) + "[]=" + r(e[s][l])) : ((a = t.slice()).push(s), a.push(String(l)), o.push(me.serializeObject(e[s][l], a)));
                            o.length > 0 && n.push(o.join("&")) } else null === e[s] || "" === e[s] ? n.push(i(s) + "=") : "object" === S()(e[s]) ? ((a = t.slice()).push(s), "" !== (o = me.serializeObject(e[s], a)) && n.push(o)) : void 0 !== e[s] && "" !== e[s] ? n.push(i(s) + "=" + r(e[s])) : "" === e[s] && n.push(i(s)) }), n.join("&") }, isObject: function(e) { return "object" === (void 0 === e ? "undefined" : S()(e)) && null !== e && e.constructor && e.constructor === Object }, merge: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var a = t[0];
                    t.splice(0, 1); for (var i = t, r = 0; r < i.length; r += 1) { var s = t[r]; if (void 0 !== s && null !== s)
                            for (var o = P()(Object(s)), l = 0, c = o.length; l < c; l += 1) { var d = o[l],
                                    u = E()(s, d);
                                void 0 !== u && u.enumerable && (a[d] = s[d]) } } return a }, extend: function() { for (var e = !0, t = void 0, n = void 0, a = arguments.length, i = Array(a), r = 0; r < a; r++) i[r] = arguments[r]; "boolean" == typeof i[0] ? (e = i[0], t = i[1], i.splice(0, 2), n = i) : (t = i[0], i.splice(0, 1), n = i); for (var s = 0; s < n.length; s += 1) { var o = i[s]; if (void 0 !== o && null !== o)
                            for (var l = P()(Object(o)), c = 0, d = l.length; c < d; c += 1) { var u = l[c],
                                    p = E()(o, u);
                                void 0 !== p && p.enumerable && (e ? me.isObject(t[u]) && me.isObject(o[u]) ? me.extend(t[u], o[u]) : !me.isObject(t[u]) && me.isObject(o[u]) ? (t[u] = {}, me.extend(t[u], o[u])) : t[u] = o[u] : t[u] = o[u]) } } return t } },
            ge = function() { var e = A.navigator.userAgent,
                    t = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, iphoneX: !1, ipod: !1, ipad: !1, cordova: A.cordova || A.phonegap, phonegap: A.cordova || A.phonegap },
                    n = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                    a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                    i = e.match(/(iPad).*OS\s([\d_]+)/),
                    r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                    s = !i && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    o = s && 375 === A.screen.width && 812 === A.screen.height; if (n && (t.os = "windows", t.osVersion = n[2], t.windows = !0), a && !n && (t.os = "android", t.osVersion = a[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (i || s || r) && (t.os = "ios", t.ios = !0), s && !r && (t.osVersion = s[2].replace(/_/g, "."), t.iphone = !0, t.iphoneX = o), i && (t.osVersion = i[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.webView = (s || i || r) && (e.match(/.*AppleWebKit(?!.*Safari)/i) || A.navigator.standalone), t.webview = t.webView, t.desktop = !(t.os || t.android || t.webView), t.os && "ios" === t.os) { var l = t.osVersion.split("."),
                        c = I.querySelector('meta[name="viewport"]');
                    t.minimalUi = !t.webView && (r || s) && (1 * l[0] == 7 ? 1 * l[1] >= 1 : 1 * l[0] > 7) && c && c.getAttribute("content").indexOf("minimal-ui") >= 0 } return t.needsStatusbarOverlay = function() { return !(!(t.webView || t.android && t.cordova) || A.innerWidth * A.innerHeight != A.screen.width * A.screen.height) && (!t.iphoneX || 90 !== A.orientation && -90 !== A.orientation) }, t.statusbar = t.needsStatusbarOverlay(), t.pixelRatio = A.devicePixelRatio || 1, t }(),
            be = function() {
                function e() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    w()(this, e); var a = this;
                    a.params = t, a.eventsParents = n, a.eventsListeners = {}, a.params && a.params.on && P()(a.params.on).forEach(function(e) { a.on(e, a.params.on[e]) }) } return x()(e, [{ key: "on", value: function(e, t, n) { var a = this; if ("function" != typeof t) return a; var i = n ? "unshift" : "push"; return e.split(" ").forEach(function(e) { a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t) }), a } }, { key: "once", value: function(e, t, n) { var a = this; if ("function" != typeof t) return a; return a.on(e, function n() { for (var i = arguments.length, r = Array(i), s = 0; s < i; s++) r[s] = arguments[s];
                            t.apply(a, r), a.off(e, n) }, n) } }, { key: "off", value: function(e, t) { var n = this; return n.eventsListeners ? (e.split(" ").forEach(function(e) { void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e].forEach(function(a, i) { a === t && n.eventsListeners[e].splice(i, 1) }) }), n) : n } }, { key: "emit", value: function() { var e = this; if (!e.eventsListeners) return e; for (var t = void 0, n = void 0, a = void 0, i = void 0, r = arguments.length, s = Array(r), o = 0; o < r; o++) s[o] = arguments[o]; "string" == typeof s[0] || Array.isArray(s[0]) ? (t = s[0], n = s.slice(1, s.length), a = e, i = e.eventsParents) : (t = s[0].events, n = s[0].data, a = s[0].context || e, i = s[0].local ? [] : s[0].parents || e.eventsParents); var l = Array.isArray(t) ? t : t.split(" "),
                            c = l.map(function(e) { return e.replace("local::", "") }),
                            d = l.filter(function(e) { return e.indexOf("local::") < 0 }); return c.forEach(function(t) { if (e.eventsListeners && e.eventsListeners[t]) { var i = [];
                                e.eventsListeners[t].forEach(function(e) { i.push(e) }), i.forEach(function(e) { e.apply(a, n) }) } }), i && i.length > 0 && i.forEach(function(e) { e.emit.apply(e, [d].concat(B()(n))) }), e } }, { key: "useModulesParams", value: function(e) { var t = this;
                        t.modules && P()(t.modules).forEach(function(n) { var a = t.modules[n];
                            a.params && me.extend(e, a.params) }) } }, { key: "useModules", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = this;
                        t.modules && P()(t.modules).forEach(function(n) { var a = t.modules[n],
                                i = e[n] || {};
                            a.instance && P()(a.instance).forEach(function(e) { var n = a.instance[e];
                                t[e] = "function" == typeof n ? n.bind(t) : n }), a.on && t.on && P()(a.on).forEach(function(e) { t.on(e, a.on[e]) }), a.create && a.create.bind(t)(i) }) } }], [{ key: "installModule", value: function(e) { var t = this;
                        t.prototype.modules || (t.prototype.modules = {}); var n = e.name || P()(t.prototype.modules).length + "_" + me.now(); if (t.prototype.modules[n] = e, e.proto && P()(e.proto).forEach(function(n) { t.prototype[n] = e.proto[n] }), e.static && P()(e.static).forEach(function(n) { t[n] = e.static[n] }), e.install) { for (var a = arguments.length, i = Array(a > 1 ? a - 1 : 0), r = 1; r < a; r++) i[r - 1] = arguments[r];
                            e.install.apply(t, i) } return t } }, { key: "use", value: function(e) { var t = this; if (Array.isArray(e)) return e.forEach(function(e) { return t.installModule(e) }), t; for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i]; return t.installModule.apply(t, [e].concat(a)) } }, { key: "components", set: function(e) { this.use && this.use(e) } }]), e }(),
            ye = function(e) {
                function t(e) { var n;
                    w()(this, t); var a = m()(this, (t.__proto__ || f()(t)).call(this, e)),
                        i = me.extend({}, e),
                        r = a,
                        s = { version: "1.0.0", id: "io.framework7.testapp", root: "body", theme: "auto", language: A.navigator.language, routes: [], name: "Framework7", initOnDeviceReady: !0, init: !0 };
                    r.useModulesParams(s), r.params = me.extend(s, e); var o = G(r.params.root); return me.extend(r, { id: r.params.id, name: r.params.name, version: r.params.version, routes: r.params.routes, language: r.params.language, root: o, rtl: "rtl" === o.css("direction"), theme: "auto" === r.params.theme ? ge.ios ? "ios" : "md" : r.params.theme, passedParams: i }), r.root && r.root[0] && (r.root[0].f7 = r), r.useModules(), r.params.init && (ge.cordova && r.params.initOnDeviceReady ? G(I).on("deviceready", function() { r.init() }) : r.init()), n = r, m()(a, n) } return b()(t, e), x()(t, [{ key: "init", value: function() { var e = this;
                        e.initialized || (e.root.addClass("framework7-initializing"), e.rtl && G("html").attr("dir", "rtl"), e.root.addClass("framework7-root"), G("html").removeClass("ios md").addClass(e.theme), e.data = {}, e.params.data && "function" == typeof e.params.data ? me.extend(e.data, e.params.data.bind(e)()) : e.params.data && me.extend(e.data, e.params.data), e.methods = {}, e.params.methods && me.extend(e.methods, e.params.methods), me.nextFrame(function() { e.root.removeClass("framework7-initializing") }), e.initialized = !0, e.emit("init")) } }, { key: "$", get: function() { return G } }, { key: "t7", get: function() { return X.a } }], [{ key: "Dom7", get: function() { return G } }, { key: "$", get: function() { return G } }, { key: "Template7", get: function() { return X.a } }, { key: "Class", get: function() { return be } }]), t }(be),
            we = {},
            Ce = 0;

        function xe(e) { var t = me.extend({}, we); "beforeCreate beforeOpen beforeSend error complete success statusCode".split(" ").forEach(function(e) { delete t[e] }); var n = me.extend({ url: A.location.toString(), method: "GET", data: !1, async: !0, cache: !0, user: "", password: "", headers: {}, xhrFields: {}, statusCode: {}, processData: !0, dataType: "text", contentType: "application/x-www-form-urlencoded", timeout: 0 }, t),
                a = me.extend({}, n, e);

            function i(e) { for (var t = void 0, n = void 0, i = arguments.length, r = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) r[s - 1] = arguments[s]; return we[e] && (t = we[e].apply(we, r)), a[e] && (n = a[e].apply(a, r)), "boolean" != typeof t && (t = !0), "boolean" != typeof n && (n = !0), t && n } if (!1 !== i("beforeCreate", a)) { a.type && (a.method = a.type); var r = a.url.indexOf("?") >= 0 ? "&" : "?",
                    s = a.method.toUpperCase(); if (("GET" === s || "HEAD" === s || "OPTIONS" === s || "DELETE" === s) && a.data) { var o = void 0;
                    (o = "string" == typeof a.data ? a.data.indexOf("?") >= 0 ? a.data.split("?")[1] : a.data : me.serializeObject(a.data)).length && (a.url += r + o, "?" === r && (r = "&")) } if ("json" === a.dataType && a.url.indexOf("callback=") >= 0) { var l = "f7jsonp_" + (Date.now() + (Ce += 1)),
                        c = void 0,
                        d = a.url.split("callback="),
                        u = d[0] + "callback=" + l; if (d[1].indexOf("&") >= 0) { var p = d[1].split("&").filter(function(e) { return e.indexOf("=") > 0 }).join("&");
                        p.length > 0 && (u += "&" + p) } var h = I.createElement("script"); return h.type = "text/javascript", h.onerror = function() { clearTimeout(c), i("error", null, "scripterror"), i("complete", null, "scripterror") }, h.src = u, A[l] = function(e) { clearTimeout(c), i("success", e), h.parentNode.removeChild(h), h = null, delete A[l] }, I.querySelector("head").appendChild(h), void(a.timeout > 0 && (c = setTimeout(function() { h.parentNode.removeChild(h), h = null, i("error", null, "timeout") }, a.timeout))) } "GET" !== s && "HEAD" !== s && "OPTIONS" !== s && "DELETE" !== s || !1 === a.cache && (a.url += r + "_nocache" + Date.now()); var f = new XMLHttpRequest; if (f.requestUrl = a.url, f.requestParameters = a, !1 === i("beforeOpen", f, a)) return f;
                f.open(s, a.url, a.async, a.user, a.password); var v = null; if (("POST" === s || "PUT" === s || "PATCH" === s) && a.data)
                    if (a.processData)
                        if ([ArrayBuffer, Blob, Document, FormData].indexOf(a.data.constructor) >= 0) v = a.data;
                        else { var m = "---------------------------" + Date.now().toString(16); "multipart/form-data" === a.contentType ? f.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + m) : f.setRequestHeader("Content-Type", a.contentType), v = ""; var g = me.serializeObject(a.data); if ("multipart/form-data" === a.contentType) { g = g.split("&"); for (var b = [], y = 0; y < g.length; y += 1) b.push('Content-Disposition: form-data; name="' + g[y].split("=")[0] + '"\r\n\r\n' + g[y].split("=")[1] + "\r\n");
                                v = "--" + m + "\r\n" + b.join("--" + m + "\r\n") + "--" + m + "--\r\n" } else v = g } else v = a.data, f.setRequestHeader("Content-Type", a.contentType);
                a.headers && P()(a.headers).forEach(function(e) { f.setRequestHeader(e, a.headers[e]) }), void 0 === a.crossDomain && (a.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(a.url) && RegExp.$2 !== A.location.host), a.crossDomain || f.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.xhrFields && me.extend(f, a.xhrFields); var w = void 0; return f.onload = function() { if (w && clearTimeout(w), f.status >= 200 && f.status < 300 || 0 === f.status) { var e = void 0; if ("json" === a.dataType) { var t = void 0; try { e = JSON.parse(f.responseText) } catch (e) { t = !0 } t ? i("error", f, "parseerror") : i("success", e, f.status, f) } else i("success", e = "text" === f.responseType || "" === f.responseType ? f.responseText : f.response, f.status, f) } else i("error", f, f.status);
                    a.statusCode && (we.statusCode && we.statusCode[f.status] && we.statusCode[f.status](f), a.statusCode[f.status] && a.statusCode[f.status](f)), i("complete", f, f.status) }, f.onerror = function() { w && clearTimeout(w), i("error", f, f.status), i("complete", f, "error") }, a.timeout > 0 && (f.onabort = function() { w && clearTimeout(w) }, w = setTimeout(function() { f.abort(), i("error", f, "timeout"), i("complete", f, "timeout") }, a.timeout)), !1 === i("beforeSend", f, a) ? f : (f.send(v), f) } }

        function ke(e) { for (var t = [], n = t[0], a = t[1], i = t[2], r = t[3], s = t[4], o = arguments.length, l = Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++) l[c - 1] = arguments[c]; "function" == typeof l[1] ? (n = l[0], i = l[1], r = l[2], s = l[3]) : (n = l[0], a = l[1], i = l[2], r = l[3], s = l[4]), [i, r].forEach(function(e) { "string" == typeof e && (s = e, e === i ? i = void 0 : r = void 0) }), s = s || ("json" === e || "postJSON" === e ? "json" : void 0); var d = { url: n, method: "post" === e || "postJSON" === e ? "POST" : "GET", data: a, success: i, error: r, dataType: s }; return "postJSON" === e && me.extend(d, { contentType: "application/json", processData: !1, crossDomain: !0, data: "string" == typeof a ? a : p()(a) }), xe(d) } xe.get = function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return ke.apply(void 0, ["get"].concat(t)) }, xe.post = function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return ke.apply(void 0, ["post"].concat(t)) }, xe.json = function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return ke.apply(void 0, ["json"].concat(t)) }, xe.getJSON = xe.json, xe.postJSON = function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return ke.apply(void 0, ["postJSON"].concat(t)) }, xe.setup = function(e) { e.type && !e.method && me.extend(e, { method: e.type }), me.extend(we, e) }; var Ee, $e, Se, Te, _e, Me = (Ee = !1, $e = I.createElement("div"), "sticky -webkit-sticky -moz-sticky".split(" ").forEach(function(e) { Ee || ($e.style.position = e, $e.style.position === e && (Ee = !0)) }), Te = Ee, _e = I.createElement("div"), { positionSticky: Te, touch: !!("ontouchstart" in A || A.DocumentTouch && I instanceof A.DocumentTouch), pointerEvents: !(!A.navigator.pointerEnabled && !A.PointerEvent), prefixedPointerEvents: !!A.navigator.msPointerEnabled, transition: (Se = _e.style, "transition" in Se || "webkitTransition" in Se || "MozTransition" in Se), transforms3d: A.Modernizr && !0 === A.Modernizr.csstransforms3d || function() { var e = _e.style; return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e }(), flexbox: function() { for (var e = I.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n += 1)
                        if (t[n] in e) return !0; return !1 }(), observer: "MutationObserver" in A || "WebkitMutationObserver" in A, passiveListener: function() { var e = !1; try { var t = Object.defineProperty({}, "passive", { get: function() { e = !0 } });
                        A.addEventListener("testPassiveListener", null, t) } catch (e) {} return e }(), gestures: "ongesturestart" in A }),
            Pe = { name: "device", proto: { device: ge }, static: { device: ge }, on: { init: function() { var e = [],
                            t = I.querySelector("html"); if (t) { if (e.push("device-pixel-ratio-" + Math.floor(ge.pixelRatio)), ge.pixelRatio >= 2 && e.push("device-retina"), ge.os) { if (e.push("device-" + ge.os, "device-" + ge.os + "-" + ge.osVersion.split(".")[0], "device-" + ge.os + "-" + ge.osVersion.replace(/\./g, "-")), "ios" === ge.os) { for (var n = parseInt(ge.osVersion.split(".")[0], 10) - 1; n >= 6; n -= 1) e.push("device-ios-gt-" + n);
                                    ge.iphoneX && e.push("device-iphone-x") } } else ge.desktop && e.push("device-desktop");
                            (ge.cordova || ge.phonegap) && e.push("device-cordova"), e.forEach(function(e) { t.classList.add(e) }) } } } },
            Oe = { name: "support", proto: { support: Me }, static: { support: Me }, on: { init: function() { var e = I.querySelector("html"); if (e) { var t = [];
                            Me.positionSticky && t.push("support-position-sticky"), t.forEach(function(t) { e.classList.add(t) }) } } } },
            Be = { name: "utils", proto: { utils: me }, static: { utils: me } },
            Ie = { name: "resize", instance: { getSize: function() { if (!this.root[0]) return { width: 0, height: 0, left: 0, top: 0 }; var e = this.root.offset(),
                            t = [this.root[0].offsetWidth, this.root[0].offsetHeight, e.left, e.top],
                            n = t[0],
                            a = t[1],
                            i = t[2],
                            r = t[3]; return this.width = n, this.height = a, this.left = i, this.top = r, { width: n, height: a, left: i, top: r } } }, on: { init: function() { var e = this;
                        e.getSize(), A.addEventListener("resize", function() { e.emit("resize") }, !1), A.addEventListener("orientationchange", function() { e.emit("orientationchange") }) }, orientationchange: function() { this.device && this.device.minimalUi && (90 !== A.orientation && -90 !== A.orientation || (I.body.scrollTop = 0)), this.device.ipad && (I.body.scrollLeft = 0, setTimeout(function() { I.body.scrollLeft = 0 }, 0)) }, resize: function() { this.getSize() } } },
            Ae = { name: "request", proto: { request: xe }, static: { request: xe } }; var Le = { name: "touch", params: { touch: { fastClicks: !0, fastClicksDistanceThreshold: 10, fastClicksDelayBetweenClicks: 50, fastClicksExclude: "", disableContextMenu: !0, tapHold: !1, tapHoldDelay: 750, tapHoldPreventClicks: !0, activeState: !0, activeStateElements: "a, button, label, span, .actions-button, .stepper-button, .stepper-button-plus, .stepper-button-minus", materialRipple: !0, materialRippleElements: ".ripple, .link, .item-link, .links-list a, .button, button, .input-clear-button, .dialog-button, .tab-link, .item-radio, .item-checkbox, .actions-button, .searchbar-disable-button, .fab a, .checkbox, .radio, .data-table .sortable-cell:not(.input-cell), .notification-close-button, .stepper-button, .stepper-button-minus, .stepper-button-plus" } }, instance: { touchEvents: { start: Me.touch ? "touchstart" : "mousedown", move: Me.touch ? "touchmove" : "mousemove", end: Me.touch ? "touchend" : "mouseup" } }, on: { init: function() { var e = this,
                            t = e.params.touch,
                            n = "md" === e.theme && t.materialRipple;
                        ge.ios && ge.webView && A.addEventListener("touchstart", function() {}); var a = void 0,
                            i = void 0,
                            r = void 0,
                            s = void 0,
                            o = void 0,
                            l = void 0,
                            c = void 0,
                            d = void 0,
                            u = void 0,
                            p = void 0,
                            h = void 0,
                            f = void 0,
                            v = void 0,
                            m = void 0,
                            g = void 0,
                            b = void 0,
                            y = void 0,
                            w = void 0;

                        function C(e) { var n = G(e),
                                a = n.parents(t.activeStateElements),
                                i = void 0; return n.is(t.activeStateElements) && (i = n), a.length > 0 && (i = i ? i.add(a) : a), i || n }

                        function x(e) { var t = e.parents(".page-content, .panel"); return 0 !== t.length && ("yes" !== t.prop("scrollHandlerSet") && (t.on("scroll", function() { clearTimeout(v), clearTimeout(w) }), t.prop("scrollHandlerSet", "yes")), !0) }

                        function k() { f && f.addClass("active-state") }

                        function E() { f && (f.removeClass("active-state"), f = null) }

                        function $(t, n, a) { t && (b = e.touchRipple.create(t, n, a)) }

                        function S() { b && (b.remove(), b = void 0, y = void 0) }

                        function T(e) {
                            (y = function(e) { var n = t.materialRippleElements,
                                    a = G(e); if (a.is(n)) return !a.hasClass("no-ripple") && a; if (a.parents(n).length > 0) { var i = a.parents(n).eq(0); return !i.hasClass("no-ripple") && i } return !1 }(e)) && 0 !== y.length ? x(y) ? w = setTimeout(function() { $(y, a, i) }, 80) : $(y, a, i) : y = void 0 }

                        function _() { clearTimeout(w), S() }

                        function M() { b ? S() : y && !u ? (clearTimeout(w), $(y, a, i), setTimeout(S, 0)) : S() }

                        function P(t, n) { e.emit({ events: t, data: [n] }) }

                        function O(e) { P("touchstart touchstart:active", e) }

                        function B(e) { P("touchmove touchmove:active", e) }

                        function L(e) { P("touchend touchend:active", e) }

                        function D(e) { P("touchstart:passive", e) }

                        function R(e) { P("touchmove:passive", e) }

                        function z(e) { P("touchend:passive", e) } var N = !!Me.passiveListener && { passive: !0 },
                            F = !!Me.passiveListener && { passive: !1 };
                        I.addEventListener("click", function(e) { P("click", e) }, !0), Me.passiveListener ? (I.addEventListener(e.touchEvents.start, O, F), I.addEventListener(e.touchEvents.move, B, F), I.addEventListener(e.touchEvents.end, L, F), I.addEventListener(e.touchEvents.start, D, N), I.addEventListener(e.touchEvents.move, R, N), I.addEventListener(e.touchEvents.end, z, N)) : (I.addEventListener(e.touchEvents.start, function(e) { O(e), D(e) }, !1), I.addEventListener(e.touchEvents.move, function(e) { B(e), R(e) }, !1), I.addEventListener(e.touchEvents.end, function(e) { L(e), z(e) }, !1)), Me.touch ? (e.on("click", function(e) { var n, a, i = !1; return o ? (s = null, o = !1, !0) : "submit" === e.target.type && 0 === e.detail || "file" === e.target.type || (s || (n = e.target, a = "input select textarea label".split(" "), n.nodeName && a.indexOf(n.nodeName.toLowerCase()) >= 0 || (i = !0)), m || (i = !0), I.activeElement === s && (i = !0), e.forwardedTouchEvent && (i = !0), e.cancelable || (i = !0), t.tapHold && t.tapHoldPreventClicks && p && (i = !1), i || (e.stopImmediatePropagation(), e.stopPropagation(), s ? (function(e) { var t = G(e),
                                    n = !0; return (t.is("label") || t.parents("label").length > 0) && (n = !ge.android && !(!ge.ios || !t.is("input"))), n }(s) || u) && e.preventDefault() : e.preventDefault(), s = null), g = setTimeout(function() { m = !1 }, ge.ios || ge.androidChrome ? 100 : 400), t.tapHold && (h = setTimeout(function() { p = !1 }, ge.ios || ge.androidChrome ? 100 : 400)), i) }), e.on("touchstart", function(e) { var b, y, w = this; if (u = !1, p = !1, e.targetTouches.length > 1) return f && E(), !0; if (e.touches.length > 1 && f && E(), t.tapHold && (h && clearTimeout(h), h = setTimeout(function() { e && e.touches && e.touches.length > 1 || (p = !0, e.preventDefault(), G(e.target).trigger("taphold")) }, t.tapHoldDelay)), g && clearTimeout(g), b = e.target, y = G(b), !(m = !("input" === b.nodeName.toLowerCase() && ("file" === b.type || "range" === b.type) || "select" === b.nodeName.toLowerCase() && ge.android || y.hasClass("no-fastclick") || y.parents(".no-fastclick").length > 0 || t.fastClicksExclude && y.is(t.fastClicksExclude)))) return o = !1, !0; if (ge.ios || ge.android && "getSelection" in A) { var $ = A.getSelection(); if ($.rangeCount && $.focusNode !== I.body && (!$.isCollapsed || I.activeElement === $.focusNode)) return l = !0, !0;
                                l = !1 } return ge.android && function(e) { var t = "button input textarea select".split(" "); return !(!I.activeElement || e === I.activeElement || I.activeElement === I.body || t.indexOf(e.nodeName.toLowerCase()) >= 0) }(e.target) && I.activeElement.blur(), o = !0, s = e.target, r = (new Date).getTime(), a = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY, ge.ios && (c = void 0, G(s).parents().each(function() { var e = w;
                                e.scrollHeight > e.offsetHeight && !c && ((c = e).f7ScrollTop = c.scrollTop) })), r - d < t.fastClicksDelayBetweenClicks && e.preventDefault(), t.activeState && (x(f = C(s)) ? v = setTimeout(k, 80) : k()), n && T(s), !0 }), e.on("touchmove", function(e) { if (o) { var r = t.fastClicksDistanceThreshold; if (r) { var l = e.targetTouches[0].pageX,
                                        c = e.targetTouches[0].pageY;
                                    (Math.abs(l - a) > r || Math.abs(c - i) > r) && (u = !0) } else u = !0;
                                u && (o = !1, s = null, u = !0, t.tapHold && clearTimeout(h), t.activeState && (clearTimeout(v), E()), n && _()) } }), e.on("touchend", function(a) { clearTimeout(v), clearTimeout(h); var i = (new Date).getTime(); if (!o) return !l && m && (ge.android && !a.cancelable || !a.cancelable || a.preventDefault()), !0; if (I.activeElement === a.target) return t.activeState && E(), n && M(), !0; if (l || a.preventDefault(), i - d < t.fastClicksDelayBetweenClicks) return setTimeout(E, 0), !0; if (d = i, o = !1, ge.ios && c && c.scrollTop !== c.f7ScrollTop) return !1; if (t.activeState && (k(), setTimeout(E, 0)), n && M(), function(e) { if (I.activeElement === e) return !1; var t = e.nodeName.toLowerCase(),
                                        n = "button checkbox file image radio submit".split(" "); return !e.disabled && !e.readOnly && ("textarea" === t || ("select" === t ? !ge.android : "input" === t && n.indexOf(e.type) < 0)) }(s)) { if (ge.ios && ge.webView) return s.focus(), !1;
                                s.focus() } return I.activeElement && s !== I.activeElement && I.activeElement !== I.body && "label" !== s.nodeName.toLowerCase() && I.activeElement.blur(), a.preventDefault(), !(t.tapHoldPreventClicks && p || (function(t) { var n = t.changedTouches[0],
                                    a = I.createEvent("MouseEvents"),
                                    i = "click";
                                ge.android && "select" === s.nodeName.toLowerCase() && (i = "mousedown"), a.initMouseEvent(i, !0, !0, A, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), a.forwardedTouchEvent = !0, e.device.ios && A.navigator.standalone ? setTimeout(function() {
                                    (s = I.elementFromPoint(t.changedTouches[0].clientX, t.changedTouches[0].clientY)).dispatchEvent(a) }, 10) : s.dispatchEvent(a) }(a), 1)) }), I.addEventListener("touchcancel", function() { o = !1, s = null, clearTimeout(v), clearTimeout(h), t.activeState && E(), n && M() }, { passive: !0 })) : t.activeState && (e.on("touchstart", function(e) { C(e.target).addClass("active-state"), "which" in e && 3 === e.which && setTimeout(function() { G(".active-state").removeClass("active-state") }, 0), n && (a = e.pageX, i = e.pageY, T(e.target, e.pageX, e.pageY)) }), e.on("touchmove", function() { G(".active-state").removeClass("active-state"), n && _() }), e.on("touchend", function() { G(".active-state").removeClass("active-state"), n && M() })), I.addEventListener("contextmenu", function(e) { t.disableContextMenu && (ge.ios || ge.android || ge.cordova) && e.preventDefault(), n && (f && E(), M()) }) } } },
            De = I.createElement("div"),
            Re = function e(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                w()(this, e); var a = me.extend({}, t),
                    i = me.merge(this, n, { $options: a }); "beforeCreate created beforeMount mounted beforeDestroy destroyed".split(" ").forEach(function(e) { a[e] && (a[e] = a[e].bind(i)) }), a.data && (a.data = a.data.bind(i), me.extend(i, a.data())), a.render && (a.render = a.render.bind(i)), a.methods && P()(a.methods).forEach(function(e) { i[e] = a.methods[e].bind(i) }), a.on && P()(a.on).forEach(function(e) { a.on[e] = a.on[e].bind(i) }), a.once && P()(a.once).forEach(function(e) { a.once[e] = a.once[e].bind(i) }), a.beforeCreate && a.beforeCreate(), a.watch && P()(a.watch).forEach(function(e) { var t = i[e];
                    d()(i, e, { enumerable: !0, configurable: !0, set: function(n) { var r = t;
                            t = n, r !== n && a.watch[e].call(i, n, r) }, get: function() { return t } }) }); var r = function() { var e = ""; if (a.render) e = a.render();
                    else if (a.template)
                        if ("string" == typeof a.template) try { e = X.a.compile(a.template)(i) } catch (e) { throw e } else e = a.template(i); return e }();
                r && "string" == typeof r ? (r = r.trim(), De.innerHTML = r) : r && (De.innerHTML = "", De.appendChild(r)); var s = De.children[0],
                    o = G(s);
                i.$el = o, i.el = s, i.el = s; var l = [];
                G(De).find("*").each(function(e, t) { for (var n = [], a = 0; a < t.attributes.length; a += 1) { var r = t.attributes[a];
                        0 === r.name.indexOf("@") && n.push({ name: r.name, value: r.value }) } n.forEach(function(e) { t.removeAttribute(e.name); var n = e.name.replace("@", ""),
                            a = n,
                            r = !1,
                            s = !1,
                            o = !1;
                        n.indexOf(".") >= 0 && n.split(".").forEach(function(e, t) { 0 === t ? a = e : ("stop" === e && (r = !0), "prevent" === e && (s = !0), "once" === e && (o = !0)) }); var c = e.value.toString();
                        l.push({ el: t, name: a, once: o, handler: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var a = t[0];
                                r && a.stopPropagation(), s && a.preventDefault(); var o = void 0,
                                    l = void 0,
                                    d = []; if (c.indexOf("(") < 0 ? (d = t, o = c) : (o = c.split("(")[0], c.split("(")[1].split(")")[0].split(",").forEach(function(e) { var t = e.trim(); if (isNaN(t))
                                            if ("true" === t) t = !0;
                                            else if ("false" === t) t = !1;
                                        else if ("null" === t) t = null;
                                        else if ("undefined" === t) t = void 0;
                                        else if ('"' === t[0]) t = t.replace(/"/g, "");
                                        else if ("'" === t[0]) t = t.replace(/'/g, "");
                                        else if (t.indexOf(".") > 0) { var n = void 0;
                                            t.split(".").forEach(function(e) { n || (n = i), n = n[e] }), t = n } else t = i[t];
                                        else t = parseFloat(t);
                                        d.push(t) })), o.indexOf(".") >= 0) o.split(".").forEach(function(e, t) { if (l || (l = i), !l[e]) throw new Error("Component doesn't have method \"" + o.split(".").slice(0, t + 1).join(".") + '"');
                                    l = l[e] });
                                else { if (!i[o]) throw new Error("Component doesn't have method \"" + o + '"');
                                    l = i[o] } l.apply(void 0, B()(d)) } }) }) }); var c = void 0;
                a.style && ((c = I.createElement("style")).innerHTML = a.style), a.styleScopeId && s.setAttribute("data-scope", a.styleScopeId), a.on && P()(a.on).forEach(function(e) { o.on(me.eventNameToColonCase(e), a.on[e]) }), a.once && P()(a.once).forEach(function(e) { o.once(me.eventNameToColonCase(e), a.once[e]) }), l.forEach(function(e) { G(e.el)[e.once ? "once" : "on"](e.name, e.handler) }), a.created && a.created(), i.$mount = function(e) { a.beforeMount && a.beforeMount(), c && G("head").append(c), e && e(s), a.mounted && a.mounted() }, i.$destroy = function() { a.beforeDestroy && a.beforeDestroy(), c && G(c).remove(), a.on && P()(a.on).forEach(function(e) { o.off(me.eventNameToColonCase(e), a.on[e]) }), a.once && P()(a.once).forEach(function(e) { o.off(me.eventNameToColonCase(e), a.once[e]) }), l.forEach(function(e) { G(e.el).off(e.name, e.handler) }), a.destroyed && a.destroyed(), s && s.f7Component && (s.f7Component = null, delete s.f7Component), me.deleteProps(i), i = null }; for (var u = 0; u < De.children.length; u += 1) De.children[u].f7Component = i; return i },
            ze = { parse: function(e) { var t = "f7_component_callback_" + (new Date).getTime(),
                        n = void 0;
                    e.indexOf("<template>") >= 0 && (n = e.split("<template>").filter(function(e, t) { return t > 0 }).join("<template>").split("</template>").filter(function(e, t, n) { return t < n.length - 1 }).join("</template>").replace(/{{#raw}}([ \n]*)<template/g, "{{#raw}}<template").replace(/\/template>([ \n]*){{\/raw}}/g, "/template>{{/raw}}").replace(/([ \n])<template/g, "$1{{#raw}}<template").replace(/\/template>([ \n])/g, "/template>{{/raw}}$1")); var a = void 0,
                        i = me.now();
                    e.indexOf("<style>") >= 0 ? a = e.split("<style>")[1].split("</style>")[0] : e.indexOf("<style scoped>") >= 0 && (a = (a = e.split("<style scoped>")[1].split("</style>")[0]).split("\n").map(function(e) { return e.indexOf("{") >= 0 ? e.indexOf("{{this}}") >= 0 ? e.replace("{{this}}", '[data-scope="' + i + '"]') : '[data-scope="' + i + '"] ' + e.trim() : e }).join("\n")); var r = void 0; if (e.indexOf("<script>") >= 0) { var s = e.split("<script>");
                        r = s[s.length - 1].split("<\/script>")[0].trim() } else r = "return {}";
                    r = "window." + t + " = function () {" + r + "}"; var o = I.createElement("script");
                    o.innerHTML = r, G("head").append(o); var l = A[t](); return G(o).remove(), l.template || l.render || (l.template = n), a && (l.style = a, l.styleScopeId = i), l }, create: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return new Re(e, t) } },
            Ne = { queue: [], clearQueue: function() { 0 !== Ne.queue.length && Ne.queue.shift()() }, routerQueue: [], clearRouterQueue: function() { if (0 !== Ne.routerQueue.length) { var e = Ne.routerQueue.pop(),
                            t = e.router,
                            n = e.stateUrl,
                            a = e.action,
                            i = t.params.animate;!1 === t.params.pushStateAnimate && (i = !1), "back" === a && t.back({ animate: i, pushState: !1 }), "load" === a && t.navigate(n, { animate: i, pushState: !1 }) } }, handle: function(e) { if (!Ne.blockPopstate) { var t = e.state;
                        Ne.previousState = Ne.state, Ne.state = t, Ne.allowChange = !0, Ne.clearQueue(), (t = Ne.state) || (t = {}), this.views.forEach(function(e) { var n = e.router,
                                a = t[e.id]; if (!a && e.params.pushState && (a = { url: e.router.history[0] }), a) { var i = a.url || void 0,
                                    r = n.params.animate;!1 === n.params.pushStateAnimate && (r = !1), i !== n.url && (n.history.indexOf(i) >= 0 ? n.allowPageChange ? n.back({ animate: r, pushState: !1 }) : Ne.routerQueue.push({ action: "back", router: n }) : n.allowPageChange ? n.navigate(i, { animate: r, pushState: !1 }) : Ne.routerQueue.unshift({ action: "load", stateUrl: i, router: n })) } }) } }, initViewState: function(e, t) { var n = me.extend({}, Ne.state || {}, l()({}, e, t));
                    Ne.state = n, A.history.replaceState(n, "") }, push: function(e, t, n) { if (Ne.allowChange) { Ne.previousState = Ne.state; var a = me.extend({}, Ne.previousState || {}, l()({}, e, t));
                        Ne.state = a, A.history.pushState(a, "", n) } else Ne.queue.push(function() { Ne.push(e, t, n) }) }, replace: function(e, t, n) { if (Ne.allowChange) { Ne.previousState = Ne.state; var a = me.extend({}, Ne.previousState || {}, l()({}, e, t));
                        Ne.state = a, A.history.replaceState(a, "", n) } else Ne.queue.push(function() { Ne.replace(e, t, n) }) }, go: function(e) { Ne.allowChange = !1, A.history.go(e) }, back: function() { Ne.allowChange = !1, A.history.back() }, allowChange: !0, previousState: {}, state: A.history.state, blockPopstate: !0, init: function(e) { G(A).on("load", function() { setTimeout(function() { Ne.blockPopstate = !1 }, 0) }), I.readyState && "complete" === I.readyState && (Ne.blockPopstate = !1), G(A).on("popstate", Ne.handle.bind(e)) } };

        function Fe(e, t, n) { var a = this,
                i = t.route.redirect; if (n.initial && a.params.pushState && (n.replaceState = !0, n.history = !0), "function" == typeof i) { a.allowPageChange = !1; var r = i.call(a, t, function(t) { var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    a.allowPageChange = !0, a[e](t, me.extend({}, n, i)) }, function() { a.allowPageChange = !0 }); return r && "string" == typeof r ? (a.allowPageChange = !0, a[e](r, n)) : a } return a[e](i, n) }

        function He() { return this.navigate(this.currentRoute.url, { ignoreCache: !0, reloadCurrent: !0 }) }

        function je(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = this,
                a = n.app,
                i = n.view,
                r = me.extend({ animate: n.params.animate, pushState: !0, replaceState: !1, history: !0, reloadCurrent: n.params.reloadPages, reloadPrevious: !1, reloadAll: !1, clearPreviousHistory: !1, on: {} }, t),
                s = n.dynamicNavbar,
                o = n.separateNavbar,
                l = n.$el,
                c = G(e),
                d = r.reloadPrevious || r.reloadCurrent || r.reloadAll,
                u = void 0,
                p = void 0,
                h = void 0,
                f = void 0; if (c.length && n.removeThemeElements(c), s && (h = c.children(".navbar").children(".navbar-inner"), o && (p = n.$navbarEl, h.length > 0 && c.children(".navbar").remove(), 0 === h.length && c[0].f7Page && (h = c[0].f7Page.$navbarEl))), n.allowPageChange = !1, 0 === c.length) return n.allowPageChange = !0, n; var v = l.children(".page:not(.stacked)").filter(function(e, t) { return t !== c[0] }),
                m = void 0; if (o && (m = p.children(".navbar-inner:not(.stacked)").filter(function(e, t) { return t !== h[0] })), r.reloadPrevious && v.length < 2) return n.allowPageChange = !0, n; var g = "next"; if (r.reloadCurrent || r.reloadAll ? g = "current" : r.reloadPrevious && (g = "previous"), c.addClass("page-" + g).removeClass("stacked"), s && h.length && h.addClass("navbar-" + g).removeClass("stacked"), r.reloadCurrent) u = v.eq(v.length - 1), o && (f = G(a.navbar.getElByPage(u)));
            else if (r.reloadPrevious) u = v.eq(v.length - 2), o && (f = G(a.navbar.getElByPage(u)));
            else if (r.reloadAll) u = v.filter(function(e, t) { return t !== c[0] }), o && (f = m.filter(function(e, t) { return t !== h[0] }));
            else { if (v.length > 1) { var b = 0; for (b = 0; b < v.length - 1; b += 1) { var y = a.navbar.getElByPage(v.eq(b));
                        n.params.stackPages ? (v.eq(b).addClass("stacked"), o && G(y).addClass("stacked")) : (n.pageCallback("beforeRemove", v[b], m && m[b], "previous", void 0, r), n.removePage(v[b]), o && y && n.removeNavbar(y)) } } u = l.children(".page:not(.stacked)").filter(function(e, t) { return t !== c[0] }), o && (f = p.children(".navbar-inner:not(.stacked)").filter(function(e, t) { return t !== h[0] })) } if (s && !o && (f = u.children(".navbar").children(".navbar-inner")), n.params.pushState && (r.pushState || r.replaceState) && !r.reloadPrevious) { var w = n.params.pushStateRoot || "";
                Ne[r.reloadCurrent || r.reloadAll || r.replaceState ? "replace" : "push"](i.id, { url: r.route.url }, w + n.params.pushStateSeparator + r.route.url) } r.reloadPrevious || (n.currentPageEl = c[0], s && h.length ? n.currentNavbarEl = h[0] : delete n.currentNavbarEl, n.currentRoute = r.route); var C = r.route.url;
            r.history && ((r.reloadCurrent && n.history.length) > 0 || r.replaceState ? n.history[n.history.length - (r.reloadPrevious ? 2 : 1)] = C : r.reloadPrevious ? n.history[n.history.length - 2] = C : r.reloadAll ? n.history = [C] : n.history.push(C)), n.saveHistory(); var x = c.parents(I).length > 0,
                k = c[0].f7Component; if (r.reloadPrevious ? (k && !x ? k.$mount(function(e) { G(e).insertBefore(u) }) : c.insertBefore(u), o && h.length && (f.length ? h.insertBefore(f) : (n.$navbarEl.parents(I).length || n.$el.prepend(n.$navbarEl), p.append(h)))) : (u.next(".page")[0] !== c[0] && (k && !x ? k.$mount(function(e) { l.append(e) }) : l.append(c[0])), o && h.length && (n.$navbarEl.parents(I).length || n.$el.prepend(n.$navbarEl), p.append(h[0]))), x || n.pageCallback("mounted", c, h, g, d ? g : "current", r, u), r.reloadCurrent && u.length > 0 ? n.params.stackPages && n.initialPages.indexOf(u[0]) >= 0 ? (u.addClass("stacked"), o && f.addClass("stacked")) : (n.pageCallback("beforeRemove", u, f, "previous", void 0, r), n.removePage(u), o && f && f.length && n.removeNavbar(f)) : r.reloadAll ? u.each(function(e, t) { var i = G(t),
                        s = G(a.navbar.getElByPage(i));
                    n.params.stackPages && n.initialPages.indexOf(i[0]) >= 0 ? (i.addClass("stacked"), o && s.addClass("stacked")) : (n.pageCallback("beforeRemove", i, f && f.eq(e), "previous", void 0, r), n.removePage(i), o && s.length && n.removeNavbar(s)) }) : r.reloadPrevious && (n.params.stackPages && n.initialPages.indexOf(u[0]) >= 0 ? (u.addClass("stacked"), o && f.addClass("stacked")) : (n.pageCallback("beforeRemove", u, f, "previous", void 0, r), n.removePage(u), o && f && f.length && n.removeNavbar(f))), r.route.route.tab && n.tabLoad(r.route.route.tab, me.extend({}, r, { history: !1, pushState: !1 })), n.pageCallback("init", c, h, g, d ? g : "current", r, u), r.reloadCurrent || r.reloadAll) return n.allowPageChange = !0, n.pageCallback("beforeIn", c, h, g, "current", r), n.pageCallback("afterIn", c, h, g, "current", r), r.reloadCurrent && r.clearPreviousHistory && n.clearPreviousHistory(), n; if (r.reloadPrevious) return n.allowPageChange = !0, n;

            function E() { var e = "page-previous page-current page-next",
                    t = "navbar-previous navbar-current navbar-next";
                c.removeClass(e).addClass("page-current").removeAttr("aria-hidden"), u.removeClass(e).addClass("page-previous").attr("aria-hidden", "true"), s && (h.removeClass(t).addClass("navbar-current").removeAttr("aria-hidden"), f.removeClass(t).addClass("navbar-previous").attr("aria-hidden", "true")), n.allowPageChange = !0, n.pageCallback("afterIn", c, h, "next", "current", r), n.pageCallback("afterOut", u, f, "current", "previous", r); var i = "ios" === a.theme ? n.params.preloadPreviousPage || n.params.iosSwipeBack : n.params.preloadPreviousPage;
                i || (c.hasClass("smart-select-page") || c.hasClass("photo-browser-page") || c.hasClass("autocomplete-page")) && (i = !0), i || (n.params.stackPages ? (u.addClass("stacked"), o && f.addClass("stacked")) : c.attr("data-name") && "smart-select-page" === c.attr("data-name") || (n.pageCallback("beforeRemove", u, f, "previous", void 0, r), n.removePage(u), o && f.length && n.removeNavbar(f))), r.clearPreviousHistory && n.clearPreviousHistory(), n.emit("routeChanged", n.currentRoute, n.previousRoute, n), n.params.pushState && Ne.clearRouterQueue() }

            function $() { var e = "page-previous page-current page-next",
                    t = "navbar-previous navbar-current navbar-next";
                u.removeClass(e).addClass("page-current").removeAttr("aria-hidden"), c.removeClass(e).addClass("page-next").removeAttr("aria-hidden"), s && (f.removeClass(t).addClass("navbar-current").removeAttr("aria-hidden"), h.removeClass(t).addClass("navbar-next").removeAttr("aria-hidden")) } if (n.pageCallback("beforeIn", c, h, "next", "current", r), n.pageCallback("beforeOut", u, f, "current", "previous", r), r.animate) { var S = "md" === n.app.theme ? n.params.materialPageLoadDelay : n.params.iosPageLoadDelay;
                S ? setTimeout(function() { $(), n.animate(u, c, f, h, "forward", function() { E() }) }, S) : ($(), n.animate(u, c, f, h, "forward", function() { E() })) } else E(); return n }

        function Ve() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments[2],
                a = this; if (!a.allowPageChange && !n) return a; var i = e,
                r = t,
                s = i.url,
                o = i.content,
                l = i.el,
                c = i.pageName,
                d = i.template,
                u = i.templateUrl,
                p = i.component,
                h = i.componentUrl; if (!r.reloadCurrent && r.route && r.route.route && r.route.route.parentPath && a.currentRoute.route && a.currentRoute.route.parentPath === r.route.route.parentPath) { if (r.route.url === a.url) return !1; var f = P()(r.route.params).length === P()(a.currentRoute.params).length; if (f && P()(r.route.params).forEach(function(e) { e in a.currentRoute.params && a.currentRoute.params[e] === r.route.params[e] || (f = !1) }), f) return !!r.route.route.tab && a.tabLoad(r.route.route.tab, r) } if (r.route && r.route.url && a.url === r.route.url && !r.reloadCurrent && !r.reloadPrevious && !a.params.allowDuplicateUrls) return a.allowPageChange = !0, !1;

            function v(e, t) { return a.forward(e, me.extend(r, t)) }

            function m() { return a.allowPageChange = !0, a } if (!r.route && s && (r.route = a.parseRouteUrl(s), me.extend(r.route, { route: { url: s, path: s } })), (s || u || h) && (a.allowPageChange = !1), o) a.forward(a.getPageEl(o), r);
            else if (d || u) try { a.pageTemplateLoader(d, u, r, v, m) } catch (e) { throw a.allowPageChange = !0, e } else if (l) a.forward(a.getPageEl(l), r);
                else if (c) a.forward(a.$el.children('.page[data-name="' + c + '"]').eq(0), r);
            else if (p || h) try { a.pageComponentLoader(a.el, p, h, r, v, m) } catch (e) { throw a.allowPageChange = !0, e } else s && (a.xhr && (a.xhr.abort(), a.xhr = !1), a.xhrRequest(s, r).then(function(e) { a.forward(a.getPageEl(e), r) }).catch(function() { a.allowPageChange = !0 })); return a }

        function qe(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = this,
                a = void 0,
                i = void 0; "string" == typeof e ? a = e : (a = e.url, i = e.route); var r = n.app; if (!n.view) return r.views.main && r.views.main.router.navigate(a, t), n; if ("#" === a || "" === a) return n; var s = a.replace("./", ""); if ("/" !== s[0] && 0 !== s.indexOf("#")) { var o = n.currentRoute.parentPath || n.currentRoute.path;
                s = ((o ? o + "/" : "/") + s).replace("///", "/").replace("//", "/") } var c = void 0; if (!(c = i ? me.extend(n.parseRouteUrl(s), { route: me.extend({}, i) }) : n.findMatchingRoute(s))) return n; if (c.route.redirect) return Fe.call(n, "navigate", c, t); var d = {}; return c.route.options ? me.extend(d, c.route.options, t, { route: c }) : me.extend(d, t, { route: c }), d && d.context && (c.context = d.context, d.route.context = d.context), "popup popover sheet loginScreen actions customModal".split(" ").forEach(function(e) { c.route[e] && n.modalLoad(e, c, d) }), "url content component pageName el componentUrl template templateUrl".split(" ").forEach(function(e) { c.route[e] && n.load(l()({}, e, c.route[e]), d) }), c.route.async && (n.allowPageChange = !1, c.route.async.call(n, c, n.currentRoute, function(e, t) { n.allowPageChange = !1; var a = !1;
                t && t.context && (c.context ? c.context = me.extend({}, c.context, t.context) : c.context = t.context, d.route.context = c.context), "popup popover sheet loginScreen actions customModal".split(" ").forEach(function(i) { if (e[i]) { a = !0; var r = me.extend({}, c, { route: e });
                        n.allowPageChange = !0, n.modalLoad(i, r, me.extend(d, t)) } }), a || n.load(e, me.extend(d, t), !0) }, function() { n.allowPageChange = !0 })), n }

        function We(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = this,
                a = me.extend({ animate: n.params.animate, pushState: !0, history: !0, parentPageEl: null, preload: !1, on: {} }, t),
                i = void 0,
                r = void 0;
            a.route && (a.preload || a.route === n.currentRoute || (r = n.previousRoute, n.currentRoute = a.route), a.preload ? (i = a.route, r = n.currentRoute) : (i = n.currentRoute, r || (r = n.previousRoute)), n.params.pushState && a.pushState && !a.reloadPrevious && Ne.replace(n.view.id, { url: a.route.url }, (n.params.pushStateRoot || "") + n.params.pushStateSeparator + a.route.url), a.history && (n.history[Math.max(n.history.length - 1, 0)] = a.route.url, n.saveHistory())); var s = G(a.parentPageEl || n.currentPageEl),
                o = void 0;
            o = s.length && s.find("#" + e.id).length ? s.find("#" + e.id).eq(0) : n.view.selector ? n.view.selector + " #" + e.id : "#" + e.id; var c = n.app.tab.show({ tabEl: o, animate: a.animate, tabRoute: a.route }),
                d = c.$newTabEl,
                u = c.$oldTabEl,
                p = c.animated,
                h = c.onTabsChanged; if (d && d.parents(".page").length > 0 && a.route) { var f = d.parents(".page")[0].f7Page;
                f && a.route && (f.route = a.route) } if (!n.params.unloadTabContent && d[0].f7RouterTabLoaded) return n;

            function v(t, a) { var i = t.url,
                    r = t.content,
                    s = t.el,
                    o = t.template,
                    l = t.templateUrl,
                    c = t.component,
                    f = t.componentUrl;

                function v(t) { n.allowPageChange = !0, t && ("string" == typeof t ? d.html(t) : (d.html(""), t.f7Component ? t.f7Component.$mount(function(e) { d.append(e) }) : d.append(t)), n.params.unloadTabContent || (d[0].f7RouterTabLoaded = !0), function(t) { n.removeThemeElements(d); var a = d; "string" != typeof t && (a = G(t)), a.trigger("tab:init tab:mounted", e), n.emit("tabInit tabMounted", d[0], e), u && n.params.unloadTabContent && (p ? h(function() { n.tabRemove(u, d, e) }) : n.tabRemove(u, d, e)) }(t)) }

                function m() { return n.allowPageChange = !0, n } if (r) v(r);
                else if (o || l) try { n.tabTemplateLoader(o, l, a, v, m) } catch (e) { throw n.allowPageChange = !0, e } else if (s) v(s);
                    else if (c || f) try { n.tabComponentLoader(d[0], c, f, a, v, m) } catch (e) { throw n.allowPageChange = !0, e } else i && (n.xhr && (n.xhr.abort(), n.xhr = !1), n.xhrRequest(i, a).then(function(e) { v(e) }).catch(function() { n.allowPageChange = !0 })) } return "url content component el componentUrl template templateUrl".split(" ").forEach(function(t) { e[t] && v(l()({}, t, e[t]), a) }), e.async && e.async.call(n, i, r, function(e, t) { v(e, me.extend(a, t)) }, function() { n.allowPageChange = !0 }), n }

        function Ye(e, t, n) { var a = void 0;
            e.children().each(function(e, t) { t.f7Component && (a = !0, G(t).trigger("tab:beforeremove", n), t.f7Component.$destroy()) }), a || e.trigger("tab:beforeremove", n), this.emit("tabBeforeRemove", e[0], t[0], n), this.removeTabContent(e[0], n) }

        function Ue(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = this,
                i = a.app,
                r = me.extend({ animate: a.params.animate, pushState: !0, history: !0, on: {} }, n),
                s = me.extend({}, t.route[e]),
                o = t.route;

            function c() { var n = i[e].create(s);
                o.modalInstance = n; var l = n.el;

                function c() { n.close() } n.on("modalOpen", function() { l || (a.removeThemeElements(n.el), n.$el.trigger(e.toLowerCase() + ":init " + e.toLowerCase() + ":mounted", t, n), a.emit("modalInit " + e + "Init " + e + "Mounted", n.el, t, n)), a.once("swipeBackMove", c) }), n.on("modalClose", function() { a.off("swipeBackMove", c), n.closeByRouter || a.back() }), n.on("modalClosed", function() { n.$el.trigger(e.toLowerCase() + ":beforeremove", t, n), n.emit("modalBeforeRemove " + e + "BeforeRemove", n.el, t, n); var i = n.el.f7Component;
                    i && i.$destroy(), me.nextTick(function() {
                        (i || s.component) && a.removeModal(n.el), n.destroy(), delete o.modalInstance }) }), r.route && (a.params.pushState && r.pushState && Ne.push(a.view.id, { url: r.route.url, modal: e }, (a.params.pushStateRoot || "") + a.params.pushStateSeparator + r.route.url), r.route !== a.currentRoute && (a.currentRoute = me.extend(r.route, { modal: n })), r.history && (a.history.push(r.route.url), a.saveHistory())), l && (a.removeThemeElements(n.el), n.$el.trigger(e.toLowerCase() + ":init " + e.toLowerCase() + ":mounted", t, n), a.emit("modalInit " + e + "Init " + e + "Mounted", n.el, t, n)), n.open() }

            function d(e, t) { var n = e.url,
                    r = e.content,
                    o = e.template,
                    l = e.templateUrl,
                    d = e.component,
                    u = e.componentUrl;

                function p(e) { e && ("string" == typeof e ? s.content = e : e.f7Component ? e.f7Component.$mount(function(e) { s.el = e, i.root.append(e) }) : s.el = e, c()) }

                function h() { return a.allowPageChange = !0, a } if (r) p(r);
                else if (o || l) try { a.modalTemplateLoader(o, l, t, p, h) } catch (e) { throw a.allowPageChange = !0, e } else if (d || u) try { a.modalComponentLoader(i.root[0], d, u, t, p, h) } catch (e) { throw a.allowPageChange = !0, e } else n ? (a.xhr && (a.xhr.abort(), a.xhr = !1), a.xhrRequest(n, t).then(function(e) { s.content = e, c() }).catch(function() { a.allowPageChange = !0 })) : c() } var u = void 0; return "url content component el componentUrl template templateUrl".split(" ").forEach(function(e) { s[e] && !u && (u = !0, d(l()({}, e, s[e]), r)) }), u || "actions" !== e || c(), s.async && s.async.call(a, r.route, a.currentRoute, function(e, t) { d(e, me.extend(r, t)) }, function() { a.allowPageChange = !0 }), a }

        function Ge(e) { me.extend(e, { closeByRouter: !0 }), e.close() }

        function Xe(e, t) { var n = this,
                a = n.app,
                i = n.view,
                r = me.extend({ animate: n.params.animate, pushState: !0 }, t),
                s = n.dynamicNavbar,
                o = n.separateNavbar,
                l = G(e),
                c = n.$el.children(".page-current");
            l.length && n.removeThemeElements(l); var d = void 0,
                u = void 0,
                p = void 0; if (s && (u = l.children(".navbar").children(".navbar-inner"), o ? (d = n.$navbarEl, u.length > 0 && l.children(".navbar").remove(), 0 === u.length && l[0].f7Page && (u = l[0].f7Page.$navbarEl), p = d.find(".navbar-current")) : p = c.children(".navbar").children(".navbar-inner")), n.allowPageChange = !1, 0 === l.length || 0 === c.length) return n.allowPageChange = !0, n;
            n.removeThemeElements(l), l.addClass("page-previous").removeClass("stacked").removeAttr("aria-hidden"), s && u.length > 0 && u.addClass("navbar-previous").removeClass("stacked").removeAttr("aria-hidden"); var h = void 0; if (r.force && (c.prev(".page-previous:not(.stacked)").length > 0 || 0 === c.prev(".page-previous").length))
                if (n.history.indexOf(r.route.url) >= 0 ? (h = n.history.length - n.history.indexOf(r.route.url) - 1, n.history = n.history.slice(0, n.history.indexOf(r.route.url) + 2), i.history = n.history) : n.history[[n.history.length - 2]] ? n.history[n.history.length - 2] = r.route.url : n.history.unshift(n.url), h && n.params.stackPages) c.prevAll(".page-previous").each(function(e, t) { var i = G(t),
                        s = void 0;
                    o && (s = G(a.navbar.getElByPage(i))), i[0] !== l[0] && i.index() > l.index() && (n.initialPages.indexOf(i[0]) >= 0 ? (i.addClass("stacked"), o && s.addClass("stacked")) : (n.pageCallback("beforeRemove", i, s, "previous", void 0, r), n.removePage(i), o && s.length > 0 && n.removeNavbar(s))) });
                else { var f = c.prev(".page-previous:not(.stacked)"),
                        v = void 0;
                    o && (v = G(a.navbar.getElByPage(f))), n.params.stackPages && n.initialPages.indexOf(f[0]) >= 0 ? (f.addClass("stacked"), v.addClass("stacked")) : f.length > 0 && (n.pageCallback("beforeRemove", f, v, "previous", void 0, r), n.removePage(f), o && v.length && n.removeNavbar(v)) }
            var m, g, b = l.parents(I).length > 0,
                y = l[0].f7Component;

            function w() { 0 === l.next(c).length && (!b && y ? y.$mount(function(e) { G(e).insertBefore(c) }) : l.insertBefore(c)), o && u.length && (u.insertBefore(p), p.length > 0 ? u.insertBefore(p) : (n.$navbarEl.parents(I).length || n.$el.prepend(n.$navbarEl), d.append(u))), b || n.pageCallback("mounted", l, u, "previous", "current", r, c) } if (r.preload) return w(), r.route.route.tab && n.tabLoad(r.route.route.tab, me.extend({}, r, { history: !1, pushState: !1, preload: !0 })), n.pageCallback("init", l, u, "previous", "current", r, c), l.prevAll(".page-previous:not(.stacked)").length > 0 && l.prevAll(".page-previous:not(.stacked)").each(function(e, t) { var i = G(t),
                    r = void 0;
                o && (r = G(a.navbar.getElByPage(i))), n.params.stackPages && n.initialPages.indexOf(t) >= 0 ? (i.addClass("stacked"), o && r.addClass("stacked")) : (n.pageCallback("beforeRemove", i, r, "previous", void 0), n.removePage(i), o && r.length && n.removeNavbar(r)) }), n.allowPageChange = !0, n;

            function C() { var e = "page-previous page-current page-next",
                    t = "navbar-previous navbar-current navbar-next";
                l.removeClass(e).addClass("page-current").removeAttr("aria-hidden"), c.removeClass(e).addClass("page-next").attr("aria-hidden", "true"), s && (u.removeClass(t).addClass("navbar-current").removeAttr("aria-hidden"), p.removeClass(t).addClass("navbar-next").attr("aria-hidden", "true")), n.pageCallback("afterIn", l, u, "previous", "current", r), n.pageCallback("afterOut", c, p, "current", "next", r), n.params.stackPages && n.initialPages.indexOf(c[0]) >= 0 ? (c.addClass("stacked"), o && p.addClass("stacked")) : (n.pageCallback("beforeRemove", c, p, "next", void 0, r), n.removePage(c), o && p.length && n.removeNavbar(p)), n.allowPageChange = !0, n.emit("routeChanged", n.currentRoute, n.previousRoute, n), ("ios" === a.theme ? n.params.preloadPreviousPage || n.params.iosSwipeBack : n.params.preloadPreviousPage) && n.back(n.history[n.history.length - 2], { preload: !0 }), n.params.pushState && Ne.clearRouterQueue() } return n.params.pushState && r.pushState && (h ? Ne.go(-h) : Ne.back()), 1 === n.history.length && n.history.unshift(n.url), n.history.pop(), n.saveHistory(), n.currentPageEl = l[0], s && u.length ? n.currentNavbarEl = u[0] : delete n.currentNavbarEl, n.currentRoute = r.route, w(), r.route.route.tab && n.tabLoad(r.route.route.tab, me.extend({}, r, { history: !1, pushState: !1 })), n.pageCallback("init", l, u, "previous", "current", r, c), n.pageCallback("beforeIn", l, u, "previous", "current", r), n.pageCallback("beforeOut", c, p, "current", "next", r), r.animate ? (m = "page-previous page-current page-next", g = "navbar-previous navbar-current navbar-next", c.removeClass(m).addClass("page-current"), l.removeClass(m).addClass("page-previous").removeAttr("aria-hidden"), s && (p.removeClass(g).addClass("navbar-current"), u.removeClass(g).addClass("navbar-previous").removeAttr("aria-hidden")), n.animate(c, l, p, u, "backward", function() { C() })) : C(), n }

        function Ke(e, t, n) { var a = this; if (!a.allowPageChange && !n) return a; var i = e,
                r = t,
                s = i.url,
                o = i.content,
                l = i.el,
                c = i.pageName,
                d = i.template,
                u = i.templateUrl,
                p = i.component,
                h = i.componentUrl; if (r.route.url && a.url === r.route.url && !r.reloadCurrent && !r.reloadPrevious && !a.params.allowDuplicateUrls) return !1;

            function f(e, t) { return a.backward(e, me.extend(r, t)) }

            function v() { return a.allowPageChange = !0, a } if (!r.route && s && (r.route = a.parseRouteUrl(s)), (s || u || h) && (a.allowPageChange = !1), o) a.backward(a.getPageEl(o), r);
            else if (d || u) try { a.pageTemplateLoader(d, u, r, f, v) } catch (e) { throw a.allowPageChange = !0, e } else if (l) a.backward(a.getPageEl(l), r);
                else if (c) a.backward(a.$el.children('.page[data-name="' + c + '"]').eq(0), r);
            else if (p || h) try { a.pageComponentLoader(a.el, p, h, r, f, v) } catch (e) { throw a.allowPageChange = !0, e } else s && (a.xhr && (a.xhr.abort(), a.xhr = !1), a.xhrRequest(s, r).then(function(e) { a.backward(a.getPageEl(e), r) }).catch(function() { a.allowPageChange = !0 })); return a }

        function Je() { var e = void 0,
                t = void 0; "object" === S()(arguments.length <= 0 ? void 0 : arguments[0]) ? t = (arguments.length <= 0 ? void 0 : arguments[0]) || {} : (e = arguments.length <= 0 ? void 0 : arguments[0], t = (arguments.length <= 1 ? void 0 : arguments[1]) || {}); var n = this,
                a = n.app; if (!n.view) return a.views.main.router.back(e, t), n; var i = n.currentRoute.modal,
                r = void 0; if (i || "popup popover sheet loginScreen actions customModal".split(" ").forEach(function(e) { n.currentRoute.route[e] && (i = !0, r = e) }), i) { var s = n.currentRoute.modal || n.currentRoute.route.modalInstance || a[r].get(),
                    o = n.history[n.history.length - 2],
                    c = n.findMatchingRoute(o); return !c && o && (c = { url: o, path: o.split("?")[0], query: me.parseUrlQuery(o), route: { path: o.split("?")[0], url: o } }), c && s ? (n.params.pushState && !1 !== t.pushState && Ne.back(), n.currentRoute = c, n.history.pop(), n.saveHistory(), n.modalRemove(s), n) : n } var d = n.$el.children(".page-current").prevAll(".page-previous").eq(0); if (!t.force && d.length > 0) return n.params.pushState && d[0].f7Page && n.history[n.history.length - 2] !== d[0].f7Page.route.url ? (n.back(n.history[n.history.length - 2], me.extend(t, { force: !0 })), n) : (n.loadBack({ el: d }, me.extend(t, { route: d[0].f7Page.route })), n); "#" === e && (e = void 0), e && "/" !== e[0] && 0 !== e.indexOf("#") && (e = ((n.path || "/") + e).replace("//", "/")), !e && n.history.length > 1 && (e = n.history[n.history.length - 2]); var u = n.findMatchingRoute(e); if (u || e && (u = { url: e, path: e.split("?")[0], query: me.parseUrlQuery(e), route: { path: e.split("?")[0], url: e } }), !u) return n; if (u.route.redirect) return Fe.call(n, "back", u, t); var p = {}; return u.route.options ? me.extend(p, u.route.options, t, { route: u }) : me.extend(p, t, { route: u }), p && p.context && (u.context = p.context, p.route.context = p.context), p.force && n.params.stackPages && n.$el.children(".page-previous.stacked").each(function(e, t) { t.f7Page && t.f7Page.route && t.f7Page.route.url === u.url && n.loadBack({ el: t }, p) }), "url content component pageName el componentUrl template templateUrl".split(" ").forEach(function(e) { u.route[e] && n.loadBack(l()({}, e, u.route[e]), p) }), u.route.async && (n.allowPageChange = !1, u.route.async.call(n, u, n.currentRoute, function(e, t) { n.allowPageChange = !1, t && t.context && (u.context ? u.context = me.extend({}, u.context, t.context) : u.context = t.context, p.route.context = u.context), n.loadBack(e, me.extend(p, t), !0) }, function() { n.allowPageChange = !0 })), n }

        function Qe() { var e = this,
                t = e.app,
                n = e.separateNavbar,
                a = e.history[e.history.length - 1],
                i = G(e.currentPageEl);
            e.$el.children(".page:not(.stacked)").filter(function(e, t) { return t !== i[0] }).each(function(a, i) { var r = G(i),
                    s = G(t.navbar.getElByPage(r));
                e.params.stackPages && e.initialPages.indexOf(r[0]) >= 0 ? (r.addClass("stacked"), n && s.addClass("stacked")) : (e.pageCallback("beforeRemove", r, s, "previous", void 0, {}), e.removePage(r), n && s.length && e.removeNavbar(s)) }), e.history = [a], e.view.history = [a], e.saveHistory() } var Ze = function(e) {
                function t(e, n) { var a;
                    w()(this, t); var i = m()(this, (t.__proto__ || f()(t)).call(this, {}, [void 0 === n ? e : n])),
                        r = i;
                    r.isAppRouter = void 0 === n, r.isAppRouter ? me.extend(!1, r, { app: e, params: e.params.view, routes: e.routes || [], cache: e.cache }) : me.extend(!1, r, { app: e, view: n, viewId: n.id, params: n.params, routes: n.routes, $el: n.$el, el: n.el, $navbarEl: n.$navbarEl, navbarEl: n.navbarEl, history: n.history, scrollHistory: n.scrollHistory, cache: e.cache, dynamicNavbar: "ios" === e.theme && n.params.iosDynamicNavbar, separateNavbar: "ios" === e.theme && n.params.iosDynamicNavbar && n.params.iosSeparateDynamicNavbar, initialPages: [], initialNavbars: [] }), r.useModules(), r.tempDom = I.createElement("div"), r.allowPageChange = !0; var s = {},
                        o = {}; return Object.defineProperty(r, "currentRoute", { enumerable: !0, configurable: !0, set: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            o = me.extend({}, s), (s = e) && (r.url = s.url, r.emit("routeChange", e, o, r)) }, get: function() { return s } }), Object.defineProperty(r, "previousRoute", { enumerable: !0, configurable: !0, get: function() { return o }, set: function(e) { o = e } }), me.extend(r, { forward: je, load: Ve, navigate: qe, refreshPage: He, tabLoad: We, tabRemove: Ye, modalLoad: Ue, modalRemove: Ge, backward: Xe, loadBack: Ke, back: Je, clearPreviousHistory: Qe }), a = r, m()(i, a) } return b()(t, e), x()(t, [{ key: "animatableNavElements", value: function(e, t) { var n = this.dynamicNavbar,
                            a = this.params.iosAnimateNavbarBackIcon,
                            i = void 0,
                            r = void 0;

                        function s(e, t) { var n = G(e),
                                i = n.hasClass("sliding") || t.hasClass("sliding"),
                                r = n.hasClass("subnavbar"),
                                s = !i || !r,
                                o = i && a && n.hasClass("left") && n.find(".back .icon").length > 0,
                                l = void 0; return o && (l = n.find(".back .icon")), { $el: n, $iconEl: l, hasIcon: o, leftOffset: n[0].f7NavbarLeftOffset, rightOffset: n[0].f7NavbarRightOffset, isSliding: i, isSubnavbar: r, needsOpacityTransition: s } } return n && (i = [], r = [], e.children(".left, .right, .title, .subnavbar").each(function(t, n) { i.push(s(n, e)) }), t.children(".left, .right, .title, .subnavbar").each(function(e, n) { r.push(s(n, t)) }), [r, i].forEach(function(e) { e.forEach(function(t) { var n = t,
                                    a = t.isSliding,
                                    s = t.$el,
                                    o = e === r ? i : r;
                                a && s.hasClass("title") && o && o.forEach(function(e) { if (e.$el.hasClass("left") && e.hasIcon) { var t = e.$el.find(".back span")[0];
                                        n.leftOffset += t ? t.offsetLeft : 0 } }) }) })), { newNavEls: i, oldNavEls: r } } }, { key: "animateWithCSS", value: function(e, t, n, a, i, r) { var s = this,
                            o = s.dynamicNavbar,
                            l = s.separateNavbar,
                            c = "ios" === s.app.theme,
                            d = "router-transition-" + i + " router-transition-css-" + i,
                            u = void 0,
                            p = void 0,
                            h = 0; if (c && o) { l || (h = a[0].offsetWidth); var f = s.animatableNavElements(a, n);
                            u = f.newNavEls, p = f.oldNavEls }

                        function v(e) { c && o && (u.forEach(function(t) { var n = t.$el,
                                    a = "forward" === i ? t.rightOffset : t.leftOffset;
                                t.isSliding && n.transform("translate3d(" + a * (1 - e) + "px,0,0)"), t.hasIcon && ("forward" === i ? t.$iconEl.transform("translate3d(" + (-a - h) * (1 - e) + "px,0,0)") : t.$iconEl.transform("translate3d(" + (h / 5 - a) * (1 - e) + "px,0,0)")) }), p.forEach(function(t) { var n = t.$el,
                                    a = "forward" === i ? t.leftOffset : t.rightOffset;
                                t.isSliding && n.transform("translate3d(" + a * e + "px,0,0)"), t.hasIcon && ("forward" === i ? t.$iconEl.transform("translate3d(" + (h / 5 - a) * e + "px,0,0)") : t.$iconEl.transform("translate3d(" + (-a - h) * e + "px,0,0)")) })) }("forward" === i ? t : e).animationEnd(function() { s.dynamicNavbar && (a.hasClass("sliding") ? a.find(".title, .left, .right, .left .icon, .subnavbar").transform("") : a.find(".sliding").transform(""), n.hasClass("sliding") ? n.find(".title, .left, .right, .left .icon, .subnavbar").transform("") : n.find(".sliding").transform("")), s.$el.removeClass(d), r && r() }), o ? (v(0), me.nextTick(function() { v(1), s.$el.addClass(d) })) : s.$el.addClass(d) } }, { key: "animateWithJS", value: function(e, t, n, a, i, r) { var s = this,
                            o = s.dynamicNavbar,
                            l = s.separateNavbar,
                            c = "ios" === s.app.theme,
                            d = c ? 400 : 250,
                            u = "router-transition-" + i + " router-transition-js-" + i,
                            p = null,
                            h = !1,
                            f = void 0,
                            v = void 0,
                            m = 0; if (c && o) { l || (m = a[0].offsetWidth); var g = s.animatableNavElements(a, n);
                            f = g.newNavEls, v = g.oldNavEls } var b = void 0,
                            y = void 0;
                        c && (b = G('<div class="page-shadow-effect"></div>'), y = G('<div class="page-opacity-effect"></div>'), "forward" === i ? (t.append(b), e.append(y)) : (t.append(y), e.append(b))); var w = me.bezier(.25, .1, .25, 1);
                        s.$el.addClass(u), me.nextFrame(function n() { var a = me.now();
                            p || (p = a); var l = Math.max(Math.min((a - p) / d, 1), 0),
                                g = w(l);
                            l >= 1 && (h = !0); var C = s.app.rtl ? -1 : 1; if (c ? ("forward" === i ? (t.transform("translate3d(" + 100 * (1 - g) * C + "%,0,0)"), e.transform("translate3d(" + 20 * -g * C + "%,0,0)"), b[0].style.opacity = g, y[0].style.opacity = g) : (t.transform("translate3d(" + 20 * -(1 - g) * C + "%,0,0)"), e.transform("translate3d(" + 100 * g * C + "%,0,0)"), b[0].style.opacity = 1 - g, y[0].style.opacity = 1 - g), o && (f.forEach(function(e) { var t = e.$el,
                                        n = "forward" === i ? e.rightOffset : e.leftOffset;
                                    e.needsOpacityTransition && (t[0].style.opacity = g), e.isSliding && t.transform("translate3d(" + n * (1 - g) + "px,0,0)"), e.hasIcon && ("forward" === i ? e.$iconEl.transform("translate3d(" + (-n - m) * (1 - g) + "px,0,0)") : e.$iconEl.transform("translate3d(" + (m / 5 - n) * (1 - g) + "px,0,0)")) }), v.forEach(function(e) { var t = e.$el,
                                        n = "forward" === i ? e.leftOffset : e.rightOffset;
                                    e.needsOpacityTransition && (t[0].style.opacity = 1 - g), e.isSliding && t.transform("translate3d(" + n * g + "px,0,0)"), e.hasIcon && ("forward" === i ? e.$iconEl.transform("translate3d(" + (m / 5 - n) * g + "px,0,0)") : e.$iconEl.transform("translate3d(" + (-n - m) * g + "px,0,0)")) }))) : "forward" === i ? (t.transform("translate3d(0, " + 56 * (1 - g) + "px,0)"), t.css("opacity", g)) : (e.transform("translate3d(0, " + 56 * g + "px,0)"), e.css("opacity", 1 - g)), h) return t.transform("").css("opacity", ""), e.transform("").css("opacity", ""), c && (b.remove(), y.remove(), o && (f.forEach(function(e) { e.$el.transform(""), e.$el.css("opacity", "") }), v.forEach(function(e) { e.$el.transform(""), e.$el.css("opacity", "") }), f = [], v = [])), s.$el.removeClass(u), void(r && r());
                            me.nextFrame(n) }) } }, { key: "animate", value: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        this.params.animateCustom ? this.params.animateCustom.apply(this, t) : this.params.animateWithJS ? this.animateWithJS.apply(this, t) : this.animateWithCSS.apply(this, t) } }, { key: "removeModal", value: function(e) { this.removeEl(e) } }, { key: "removeTabContent", value: function(e) { G(e).html("") } }, { key: "removeNavbar", value: function(e) { this.removeEl(e) } }, { key: "removePage", value: function(e) { this.removeEl(e) } }, { key: "removeEl", value: function(e) { if (e) { var t = G(e);
                            0 !== t.length && (t[0].f7Component && t[0].f7Component.$destroy && t[0].f7Component.$destroy(), t.find(".tab").each(function(e, t) { G(t).children().each(function(e, t) { t.f7Component && (G(t).trigger("tab:beforeremove"), t.f7Component.$destroy()) }) }), this.params.removeElements && (this.params.removeElementsWithTimeout ? setTimeout(function() { t.remove() }, this.params.removeElementsTimeout) : t.remove())) } } }, { key: "getPageEl", value: function(e) { if ("string" == typeof e) this.tempDom.innerHTML = e;
                        else { if (G(e).hasClass("page")) return e;
                            this.tempDom.innerHTML = "", G(this.tempDom).append(e) } return this.findElement(".page", this.tempDom) } }, { key: "findElement", value: function(e, t, n) { var a = this.view,
                            i = this.app,
                            r = G(t),
                            s = e;
                        n && (s += ":not(.stacked)"); var o = r.find(s).filter(function(e, t) { return 0 === G(t).parents(".popup, .dialog, .popover, .actions-modal, .sheet-modal, .login-screen, .page").length }); return o.length > 1 && ("string" == typeof a.selector && (o = r.find(a.selector + " " + s)), o.length > 1 && (o = r.find("." + i.params.viewMainClass + " " + s))), 1 === o.length ? o : (n || (o = this.findElement(s, r, !0)), o && 1 === o.length ? o : o && o.length > 1 ? G(o[0]) : void 0) } }, { key: "flattenRoutes", value: function() { var e = this,
                            t = []; return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.routes).forEach(function(n) { if ("routes" in n) { var a = n.routes.map(function(e) { var t = me.extend({}, e); return t.path = (n.path + "/" + t.path).replace("///", "/").replace("//", "/"), t });
                                t = t.concat(n, e.flattenRoutes(a)) } else if ("tabs" in n && n.tabs) { var i = n.tabs.map(function(e) { var t = me.extend({}, n, { path: (n.path + "/" + e.path).replace("///", "/").replace("//", "/"), parentPath: n.path, tab: e }); return delete t.tabs, t });
                                t = t.concat(e.flattenRoutes(i)) } else t.push(n) }), t } }, { key: "parseRouteUrl", value: function(e) { if (!e) return {}; return { query: me.parseUrlQuery(e), hash: e.split("#")[1], params: {}, url: e, path: e.split("#")[0].split("?")[0] } } }, { key: "findTabRoute", value: function(e) { var t = G(e),
                            n = this.currentRoute.route.parentPath,
                            a = t.attr("id"),
                            i = void 0; return this.flattenRoutes(this.routes).forEach(function(e) { e.parentPath === n && e.tab && e.tab.id === a && (i = e) }), i } }, { key: "findRouteByKey", value: function(e, t) { var n = this.routes,
                            a = void 0; return this.flattenRoutes(n).forEach(function(n) { a || n[e] === t && (a = n) }), a } }, { key: "findMatchingRoute", value: function(e) { if (e) { var t = this.routes,
                                n = this.flattenRoutes(t),
                                a = this.parseRouteUrl(e),
                                i = a.path,
                                r = a.query,
                                s = a.hash,
                                o = a.params,
                                l = void 0; return n.forEach(function(t) { if (!l) { var n = [],
                                        a = [t.path];
                                    t.alias && ("string" == typeof t.alias ? a.push(t.alias) : Array.isArray(t.alias) && t.alias.forEach(function(e) { a.push(e) })); var c = void 0; if (a.forEach(function(e) { c || (c = J()(e, n).exec(i)) }), c) { n.forEach(function(e, t) { var n = c[t + 1];
                                            o[e.name] = n }); var d = void 0;
                                        t.parentPath && (d = i.split("/").slice(0, t.parentPath.split("/").length - 1).join("/")), l = { query: r, hash: s, params: o, url: e, path: i, parentPath: d, route: t, name: t.name } } } }), l } } }, { key: "removeFromXhrCache", value: function(e) { for (var t = this.cache.xhr, n = !1, a = 0; a < t.length; a += 1) t[a].url === e && (n = a);!1 !== n && t.splice(n, 1) } }, { key: "xhrRequest", value: function(e, t) { var n = this,
                            a = n.params,
                            i = t.ignoreCache,
                            r = e,
                            s = r.indexOf("?") >= 0; return a.passRouteQueryToRequest && t && t.route && t.route.query && P()(t.route.query).length && (r += (s ? "&" : "?") + me.serializeObject(t.route.query), s = !0), a.passRouteParamsToRequest && t && t.route && t.route.params && P()(t.route.params).length && (r += (s ? "&" : "?") + me.serializeObject(t.route.params), s = !0), r.indexOf("{{") >= 0 && t && t.route && t.route.params && P()(t.route.params).length && P()(t.route.params).forEach(function(e) { var n = new RegExp("{{" + e + "}}", "g");
                            r = r.replace(n, t.route.params[e] || "") }), a.xhrCacheIgnoreGetParameters && r.indexOf("?") >= 0 && (r = r.split("?")[0]), me.promise(function(e, s) { if (a.xhrCache && !i && r.indexOf("nocache") < 0 && a.xhrCacheIgnore.indexOf(r) < 0)
                                for (var o = 0; o < n.cache.xhr.length; o += 1) { var l = n.cache.xhr[o]; if (l.url === r && me.now() - l.time < a.xhrCacheDuration) return void e(l.content) } n.xhr = n.app.request({ url: r, method: "GET", beforeSend: function(e) { n.emit("routerAjaxStart", e, t) }, complete: function(i, o) { n.emit("routerAjaxComplete", i), "error" !== o && "timeout" !== o && i.status >= 200 && i.status < 300 || 0 === i.status ? (a.xhrCache && "" !== i.responseText && (n.removeFromXhrCache(r), n.cache.xhr.push({ url: r, time: me.now(), content: i.responseText })), n.emit("routerAjaxSuccess", i, t), e(i.responseText)) : (n.emit("routerAjaxError", i, t), s(i)) }, error: function(e) { n.emit("routerAjaxError", e, t), s(e) } }) }) } }, { key: "removeThemeElements", value: function(e) { var t = this.app.theme;
                        G(e).find("." + ("md" === t ? "ios" : "md") + "-only, .if-" + ("md" === t ? "ios" : "md")).remove() } }, { key: "templateLoader", value: function(e, t, n, a, i) { var r = this;

                        function s(e) { var t = void 0,
                                s = void 0; try { if ("function" == typeof(s = n.context || {})) s = s.call(r);
                                else if ("string" == typeof s) try { s = JSON.parse(s) } catch (e) { throw i(), e } t = "function" == typeof e ? e(s) : X.a.compile(e)(me.extend({}, s || {}, { $app: r.app, $root: me.extend({}, r.app.data, r.app.methods), $route: n.route, $router: r, $theme: { ios: "ios" === r.app.theme, md: "md" === r.app.theme } })) } catch (e) { throw i(), e } a(t, { context: s }) } t ? (r.xhr && (r.xhr.abort(), r.xhr = !1), r.xhrRequest(t, n).then(function(e) { s(e) }).catch(function() { i() })) : s(e) } }, { key: "modalTemplateLoader", value: function(e, t, n, a, i) { return this.templateLoader(e, t, n, function(e) { a(e) }, i) } }, { key: "tabTemplateLoader", value: function(e, t, n, a, i) { return this.templateLoader(e, t, n, function(e) { a(e) }, i) } }, { key: "pageTemplateLoader", value: function(e, t, n, a, i) { var r = this; return r.templateLoader(e, t, n, function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            a(r.getPageEl(e), t) }, i) } }, { key: "componentLoader", value: function(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            a = arguments[3],
                            i = arguments[4],
                            r = this,
                            s = "string" == typeof e ? e : t;

                        function o(e) { var t = n.context || {}; if ("function" == typeof t) t = t.call(r);
                            else if ("string" == typeof t) try { t = JSON.parse(t) } catch (e) { throw i(), e }
                            var s = me.merge({}, t, { $: G, $$: G, $app: r.app, $root: me.merge({}, r.app.data, r.app.methods), $route: n.route, $router: r, $dom7: G, $theme: { ios: "ios" === r.app.theme, md: "md" === r.app.theme } }),
                                o = ze.create(e, s);
                            a(o.el) } s ? (r.xhr && (r.xhr.abort(), r.xhr = !1), r.xhrRequest(s, n).then(function(e) { o(ze.parse(e)) }).catch(function(e) { throw i(), e })) : o(e) } }, { key: "modalComponentLoader", value: function(e, t, n, a, i, r) { this.componentLoader(t, n, a, function(e) { i(e) }, r) } }, { key: "tabComponentLoader", value: function(e, t, n, a, i, r) { this.componentLoader(t, n, a, function(e) { i(e) }, r) } }, { key: "pageComponentLoader", value: function(e, t, n, a, i, r) { this.componentLoader(t, n, a, function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            i(e, t) }, r) } }, { key: "getPageData", value: function(e, t, n, a) { var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                            r = arguments[5],
                            s = G(e),
                            o = G(t),
                            l = s[0].f7Page || {},
                            c = void 0,
                            d = void 0; if (("next" === n && "current" === a || "current" === n && "previous" === a) && (c = "forward"), ("current" === n && "next" === a || "previous" === n && "current" === a) && (c = "backward"), l && !l.fromPage) { var u = G(r);
                            u.length && (d = u[0].f7Page) }(d = l.pageFrom || d) && d.pageFrom && (d.pageFrom = null); var p = { app: this.app, view: this.view, router: this, $el: s, el: s[0], $pageEl: s, pageEl: s[0], $navbarEl: o, navbarEl: o[0], name: s.attr("data-name"), position: n, from: n, to: a, direction: c, route: l.route ? l.route : i, pageFrom: d }; return o && o[0] && (o[0].f7Page = p), s[0].f7Page = p, p } }, { key: "pageCallback", value: function(e, t, n, a, i) { var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                            s = arguments[6]; if (t) { var o = this,
                                l = G(t); if (l.length) { var c = r.route,
                                    d = o.params.restoreScrollTopOnBack,
                                    u = "page" + (e[0].toUpperCase() + e.slice(1, e.length)),
                                    p = "page:" + e.toLowerCase(),
                                    h = {};
                                (h = "beforeRemove" === e && l[0].f7Page ? me.extend(l[0].f7Page, { from: a, to: i, position: a }) : o.getPageData(t, n, a, i, c, s)).swipeBack = !!r.swipeBack; var f = r.route ? r.route.route : {},
                                    v = f.on,
                                    m = void 0 === v ? {} : v,
                                    g = f.once,
                                    b = void 0 === g ? {} : g; if (r.on && me.extend(m, r.on), r.once && me.extend(b, r.once), "mounted" === e && C(), "init" === e) { if (d && ("previous" === a || !a) && "current" === i && o.scrollHistory[h.route.url] && !l.hasClass("no-restore-scroll")) { var y = l.find(".page-content");
                                        y.length > 0 && (y = y.filter(function(e, t) { return 0 === G(t).parents(".tab:not(.tab-active)").length && !G(t).is(".tab:not(.tab-active)") })), y.scrollTop(o.scrollHistory[h.route.url]) } if (C(), l[0].f7PageInitialized) return l.trigger("page:reinit", h), void o.emit("pageReinit", h);
                                    l[0].f7PageInitialized = !0 } if (d && "beforeOut" === e && "current" === a && "previous" === i) { var w = l.find(".page-content");
                                    w.length > 0 && (w = w.filter(function(e, t) { return 0 === G(t).parents(".tab:not(.tab-active)").length && !G(t).is(".tab:not(.tab-active)") })), o.scrollHistory[h.route.url] = w.scrollTop() } d && "beforeOut" === e && "current" === a && "next" === i && delete o.scrollHistory[h.route.url], l.trigger(p, h), o.emit(u, h), "beforeRemove" === e && (l[0].f7RouteEventsAttached && (l[0].f7RouteEventsOn && P()(l[0].f7RouteEventsOn).forEach(function(e) { l.off(me.eventNameToColonCase(e), l[0].f7RouteEventsOn[e]) }), l[0].f7RouteEventsOnce && P()(l[0].f7RouteEventsOnce).forEach(function(e) { l.off(me.eventNameToColonCase(e), l[0].f7RouteEventsOnce[e]) }), l[0].f7RouteEventsAttached = null, l[0].f7RouteEventsOn = null, l[0].f7RouteEventsOnce = null, delete l[0].f7RouteEventsAttached, delete l[0].f7RouteEventsOn, delete l[0].f7RouteEventsOnce), l[0].f7Page = null) } }

                        function C() { l[0].f7RouteEventsAttached || (l[0].f7RouteEventsAttached = !0, m && P()(m).length > 0 && (l[0].f7RouteEventsOn = m, P()(m).forEach(function(e) { m[e] = m[e].bind(o), l.on(me.eventNameToColonCase(e), m[e]) })), b && P()(b).length > 0 && (l[0].f7RouteEventsOnce = b, P()(b).forEach(function(e) { b[e] = b[e].bind(o), l.once(me.eventNameToColonCase(e), b[e]) }))) } } }, { key: "saveHistory", value: function() { this.view.history = this.history, this.params.pushState && (A.localStorage["f7router-" + this.view.id + "-history"] = p()(this.history)) } }, { key: "restoreHistory", value: function() { this.params.pushState && A.localStorage["f7router-" + this.view.id + "-history"] && (this.history = JSON.parse(A.localStorage["f7router-" + this.view.id + "-history"]), this.view.history = this.history) } }, { key: "clearHistory", value: function() { this.history = [], this.view && (this.view.history = []), this.saveHistory() } }, { key: "init", value: function() { var e = this,
                            t = e.app,
                            n = e.view;
                        (n && e.params.iosSwipeBack && "ios" === t.theme || n && e.params.mdSwipeBack && "md" === t.theme) && function(e) { var t, n = e,
                                a = n.$el,
                                i = n.$navbarEl,
                                r = n.app,
                                s = n.params,
                                o = !1,
                                l = !1,
                                c = {},
                                d = void 0,
                                u = [],
                                p = [],
                                h = void 0,
                                f = void 0,
                                v = !0,
                                m = void 0,
                                g = [],
                                b = [],
                                y = void 0,
                                w = void 0,
                                C = void 0,
                                x = void 0,
                                k = void 0,
                                E = void 0,
                                $ = void 0,
                                S = void 0,
                                T = void 0,
                                _ = void 0,
                                M = s[r.theme + "SwipeBackAnimateShadow"],
                                P = s[r.theme + "SwipeBackAnimateOpacity"],
                                O = s[r.theme + "SwipeBackActiveArea"],
                                B = s[r.theme + "SwipeBackThreshold"];

                            function I(e) { var t = s[r.theme + "SwipeBack"];!v || !t || o || r.swipeout && r.swipeout.el || !n.allowPageChange || G(e.target).closest(".range-slider, .calendar-months").length > 0 || (l = !1, o = !0, d = void 0, c.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, c.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, m = me.now(), E = n.dynamicNavbar, $ = n.separateNavbar) }

                            function A(e) { if (o) { var t = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                        v = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY; if (void 0 === d && (d = !!(d || Math.abs(v - c.y) > Math.abs(t - c.x)) || t < c.x), d || e.f7PreventSwipeBack || r.preventSwipeBack) o = !1;
                                    else { if (!l) { var m = !1,
                                                I = G(e.target),
                                                A = I.closest(".swipeout"); if (A.length > 0 && (!r.rtl && A.find(".swipeout-actions-left").length > 0 && (m = !0), r.rtl && A.find(".swipeout-actions-right").length > 0 && (m = !0)), ((u = I.closest(".page")).hasClass("no-swipeback") || I.closest(".no-swipeback").length > 0) && (m = !0), p = a.find(".page-previous:not(.stacked)"), c.x, a.offset().left, h = a.width(), (r.rtl ? c.x < a.offset().left - a[0].scrollLeft + (h - O) : c.x - a.offset().left > O) && (m = !0), 0 !== p.length && 0 !== u.length || (m = !0), m) return void(o = !1);
                                            M && 0 === (S = u.find(".page-shadow-effect")).length && (S = G('<div class="page-shadow-effect"></div>'), u.append(S)), P && 0 === (T = p.find(".page-opacity-effect")).length && (T = G('<div class="page-opacity-effect"></div>'), p.append(T)), E && ($ ? (g = i.find(".navbar-current:not(.stacked)"), b = i.find(".navbar-previous:not(.stacked)")) : (g = u.children(".navbar").children(".navbar-inner"), b = p.children(".navbar").children(".navbar-inner")), _ = i[0].offsetWidth, y = g.children(".left, .title, .right, .subnavbar, .fading"), w = b.children(".left, .title, .right, .subnavbar, .fading"), s.iosAnimateNavbarBackIcon && (g.hasClass("sliding") ? (C = g.children(".left").find(".back .icon"), x = g.children(".left").find(".back span").eq(0)) : (C = g.children(".left.sliding").find(".back .icon"), x = g.children(".left.sliding").find(".back span").eq(0)), k = b.hasClass("sliding") ? b.children(".left").find(".back .icon") : b.children(".left.sliding").find(".back .icon"))), G(".sheet.modal-in").length > 0 && r.sheet && r.sheet.close(G(".sheet.modal-in")) } e.f7PreventPanelSwipe = !0, l = !0, r.preventSwipePanelBySwipeBack = !0, e.preventDefault(); var L = r.rtl ? -1 : 1;
                                        (f = (t - c.x - B) * L) < 0 && (f = 0); var D = f / h,
                                            R = { percentage: D, currentPageEl: u[0], previousPageEl: p[0], currentNavbarEl: g[0], previousNavbarEl: b[0] };
                                        a.trigger("swipeback:move", R), n.emit("swipebackMove", R); var z = f * L,
                                            N = (f / 5 - h / 5) * L;
                                        1 === ge.pixelRatio && (z = Math.round(z), N = Math.round(N)), u.transform("translate3d(" + z + "px,0,0)"), M && (S[0].style.opacity = 1 - 1 * D), "md" !== r.theme && p.transform("translate3d(" + N + "px,0,0)"), P && (T[0].style.opacity = 1 - 1 * D), E && (y.each(function(e, t) { var n = G(t); if (n.is(".subnavbar") || (n[0].style.opacity = 1 - Math.pow(D, .33)), n[0].className.indexOf("sliding") >= 0 || g.hasClass("sliding")) { var a = D * n[0].f7NavbarRightOffset; if (1 === ge.pixelRatio && (a = Math.round(a)), n.transform("translate3d(" + a + "px,0,0)"), s.iosAnimateNavbarBackIcon && n[0].className.indexOf("left") >= 0 && C.length > 0) { var i = -a;
                                                    $ || (i -= _ * D), C.transform("translate3d(" + i + "px,0,0)") } } }), w.each(function(e, t) { var n = G(t); if (n.is(".subnavbar") || (n[0].style.opacity = Math.pow(D, 3)), n[0].className.indexOf("sliding") >= 0 || b.hasClass("sliding")) { var a = n[0].f7NavbarLeftOffset * (1 - D); if (a = n[0].className.indexOf("title") >= 0 && C && C.length && x.length ? (n[0].f7NavbarLeftOffset + x[0].offsetLeft) * (1 - D) : n[0].f7NavbarLeftOffset * (1 - D), 1 === ge.pixelRatio && (a = Math.round(a)), n.transform("translate3d(" + a + "px,0,0)"), s.iosAnimateNavbarBackIcon && n[0].className.indexOf("left") >= 0 && k.length > 0) { var i = -a;
                                                    $ || (i += _ / 5 * (1 - D)), k.transform("translate3d(" + i + "px,0,0)") } } })) } } }

                            function L() { if (r.preventSwipePanelBySwipeBack = !1, !o || !l) return o = !1, void(l = !1); if (o = !1, l = !1, 0 === f) return G([u[0], p[0]]).transform(""), S && S.length > 0 && S.remove(), T && T.length > 0 && T.remove(), void(E && (y.transform("").css({ opacity: "" }), w.transform("").css({ opacity: "" }), C && C.length > 0 && C.transform(""), k && C.length > 0 && k.transform(""))); var e = me.now() - m,
                                    t = !1;
                                (e < 300 && f > 10 || e >= 300 && f > h / 2) && (u.removeClass("page-current").addClass("page-next" + ("md" === r.theme ? " page-next-on-right" : "")), p.removeClass("page-previous").addClass("page-current").removeAttr("aria-hidden"), S && (S[0].style.opacity = ""), T && (T[0].style.opacity = ""), E && (g.removeClass("navbar-current").addClass("navbar-next"), b.removeClass("navbar-previous").addClass("navbar-current").removeAttr("aria-hidden")), t = !0), G([u[0], p[0]]).addClass("page-transitioning page-transitioning-swipeback").transform(""), E && (y.css({ opacity: "" }).each(function(e, n) { var a = t ? n.f7NavbarRightOffset : 0,
                                        i = G(n),
                                        r = t ? -a : 0;!$ && t && (r -= _), i.transform("translate3d(" + a + "px,0,0)"), s.iosAnimateNavbarBackIcon && i.hasClass("left") && C.length > 0 && C.addClass("navbar-transitioning").transform("translate3d(" + r + "px,0,0)") }).addClass("navbar-transitioning"), w.transform("").css({ opacity: "" }).each(function(e, n) { var a = t ? 0 : n.f7NavbarLeftOffset,
                                        i = G(n),
                                        r = t ? 0 : -a;
                                    $ || t || (r += _ / 5), i.transform("translate3d(" + a + "px,0,0)"), s.iosAnimateNavbarBackIcon && i.hasClass("left") && k.length > 0 && k.addClass("navbar-transitioning").transform("translate3d(" + r + "px,0,0)") }).addClass("navbar-transitioning")), v = !1, n.allowPageChange = !1; var i = { currentPage: u[0], previousPage: p[0], currentNavbar: g[0], previousNavbar: b[0] };
                                t ? (n.currentRoute = p[0].f7Page.route, n.currentPage = p[0], n.pageCallback("beforeOut", u, g, "current", "next", { route: u[0].f7Page.route, swipeBack: !0 }), n.pageCallback("beforeIn", p, b, "previous", "current", { route: p[0].f7Page.route, swipeBack: !0 }), a.trigger("swipeback:beforechange", i), n.emit("swipebackBeforeChange", i)) : (a.trigger("swipeback:beforereset", i), n.emit("swipebackBeforeReset", i)), u.transitionEnd(function() { G([u[0], p[0]]).removeClass("page-transitioning page-transitioning-swipeback"), E && (y.removeClass("navbar-transitioning").css({ opacity: "" }).transform(""), w.removeClass("navbar-transitioning").css({ opacity: "" }).transform(""), C && C.length > 0 && C.removeClass("navbar-transitioning"), k && k.length > 0 && k.removeClass("navbar-transitioning")), v = !0, n.allowPageChange = !0, t ? (1 === n.history.length && n.history.unshift(n.url), n.history.pop(), n.saveHistory(), s.pushState && Ne.back(), n.pageCallback("afterOut", u, g, "current", "next", { route: u[0].f7Page.route, swipeBack: !0 }), n.pageCallback("afterIn", p, b, "previous", "current", { route: p[0].f7Page.route, swipeBack: !0 }), s.stackPages && n.initialPages.indexOf(u[0]) >= 0 ? (u.addClass("stacked"), $ && g.addClass("stacked")) : (n.pageCallback("beforeRemove", u, g, "next", { swipeBack: !0 }), n.removePage(u), $ && n.removeNavbar(g)), a.trigger("swipeback:afterchange", i), n.emit("swipebackAfterChange", i), n.emit("routeChanged", n.currentRoute, n.previousRoute, n), s.preloadPreviousPage && n.back(n.history[n.history.length - 2], { preload: !0 })) : (a.trigger("swipeback:afterreset", i), n.emit("swipebackAfterReset", i)), S && S.length > 0 && S.remove(), T && T.length > 0 && T.remove() }) } t = !("touchstart" !== r.touchEvents.start || !Me.passiveListener) && { passive: !0, capture: !1 }, a.on(r.touchEvents.start, I, t), r.on("touchmove:active", A), r.on("touchend:passive", L), n.on("routerDestroy", function() { var e = !("touchstart" !== r.touchEvents.start || !Me.passiveListener) && { passive: !0, capture: !1 };
                                a.off(r.touchEvents.start, I, e), r.off("touchmove:active", A), r.off("touchend:passive", L) }) }(e), e.dynamicNavbar && !e.separateNavbar && e.$el.addClass("router-dynamic-navbar-inside"); var a = e.params.url,
                            i = I.location.href.split(I.location.origin)[1],
                            r = void 0;
                        e.params.pushState && e.params.pushStateOnLoad ? (e.params.pushStateRoot && i.indexOf(e.params.pushStateRoot) >= 0 && "" === (i = i.split(e.params.pushStateRoot)[1]) && (i = "/"), a = e.params.pushStateSeparator.length > 0 && i.indexOf(e.params.pushStateSeparator) >= 0 ? i.split(e.params.pushStateSeparator)[1] : i, e.restoreHistory(), e.history.indexOf(a) >= 0 ? e.history = e.history.slice(0, e.history.indexOf(a) + 1) : e.params.url === a ? e.history = [a] : Ne.state && Ne.state[n.id] && Ne.state[n.id].url === e.history[e.history.length - 1] ? a = e.history[e.history.length - 1] : e.history = [i.split(e.params.pushStateSeparator)[0] || "/", a], e.history.length > 1 ? r = !0 : e.history = [], e.saveHistory()) : (a || (a = i), I.location.search && a.indexOf("?") < 0 && (a += I.location.search), I.location.hash && a.indexOf("#") < 0 && (a += I.location.hash)); var s = void 0; if (e.history.length > 1 ? (s = e.findMatchingRoute(e.history[0])) || (s = me.extend(e.parseRouteUrl(e.history[0]), { route: { url: e.history[0], path: e.history[0].split("?")[0] } })) : (s = e.findMatchingRoute(a)) || (s = me.extend(e.parseRouteUrl(a), { route: { url: a, path: a.split("?")[0] } })), e.params.stackPages && e.$el.children(".page").each(function(t, n) { var a = G(n);
                                e.initialPages.push(a[0]), e.separateNavbar && a.children(".navbar").length > 0 && e.initialNavbars.push(a.children(".navbar").find(".navbar-inner")[0]) }), 0 === e.$el.children(".page:not(.stacked)").length && a) e.navigate(a, { initial: !0, reloadCurrent: !0, pushState: !1 });
                        else { var o = void 0;
                            e.currentRoute = s, e.$el.children(".page:not(.stacked)").each(function(t, n) { var a = G(n),
                                    i = void 0;
                                a.addClass("page-current"), e.separateNavbar && ((i = a.children(".navbar").children(".navbar-inner")).length > 0 ? (e.$navbarEl.parents(I).length || e.$el.prepend(e.$navbarEl), e.$navbarEl.append(i), a.children(".navbar").remove()) : e.$navbarEl.addClass("navbar-hidden")); var r = { route: e.currentRoute };
                                e.currentRoute && e.currentRoute.route && e.currentRoute.route.options && me.extend(r, e.currentRoute.route.options), e.currentPageEl = a[0], e.dynamicNavbar && i.length && (e.currentNavbarEl = i[0]), e.removeThemeElements(a), e.dynamicNavbar && i.length && e.removeThemeElements(i), r.route.route.tab && (o = !0, e.tabLoad(r.route.route.tab, me.extend({}, r))), e.pageCallback("init", a, i, "current", void 0, r) }), r && e.navigate(a, { initial: !0, pushState: !1, history: !1, animate: e.params.pushStateAnimateOnLoad, once: { pageAfterIn: function() { e.history.length > 2 && e.back({ preload: !0 }) } } }), r || o || (e.history.push(a), e.saveHistory()) }!(a && e.params.pushState && e.params.pushStateOnLoad) || Ne.state && Ne.state[n.id] || Ne.initViewState(n.id, { url: a }), e.emit("local::init routerInit", e) } }, { key: "destroy", value: function() { var e = this;
                        e.emit("local::destroy routerDestroy", e), P()(e).forEach(function(t) { e[t] = null, delete e[t] }), e = null } }]), t }(be),
            et = { name: "router", static: { Router: Ze }, instance: { cache: { xhr: [], templates: [], components: [] } }, create: function() { this.app ? this.params.router && (this.router = new Ze(this.app, this)) : this.router = new Ze(this) } },
            tt = function(e) {
                function t(e, n) { var a, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    w()(this, t); var r = m()(this, (t.__proto__ || f()(t)).call(this, i, [e])),
                        s = e,
                        o = G(n),
                        l = r;
                    l.params = me.extend({ routes: [], routesAdd: [] }, s.params.view, i), l.params.routes.length > 0 ? l.routes = l.params.routes : l.routes = [].concat(s.routes, l.params.routesAdd); var c = void 0;
                    c = "string" == typeof n ? n : (o.attr("id") ? "#" + o.attr("id") : "") + (o.attr("class") ? "." + o.attr("class").replace(/ /g, ".").replace(".active", "") : ""); var d = void 0; "ios" === s.theme && l.params.iosDynamicNavbar && l.params.iosSeparateDynamicNavbar && 0 === (d = o.children(".navbar").eq(0)).length && (d = G('<div class="navbar"></div>')), me.extend(!1, l, { app: s, $el: o, el: o[0], name: l.params.name, main: l.params.main || o.hasClass("view-main"), $navbarEl: d, navbarEl: d ? d[0] : void 0, selector: c, history: [], scrollHistory: {} }), o[0].f7View = l, l.useModules(), s.views.push(l), l.main && (s.views.main = l), l.name && (s.views[l.name] = l), l.index = s.views.indexOf(l); var u = void 0; return u = l.name ? "view_" + l.name : l.main ? "view_main" : "view_" + l.index, l.id = u, s.initialized ? l.init() : s.on("init", function() { l.init() }), a = l, m()(r, a) } return b()(t, e), x()(t, [{ key: "destroy", value: function() { var e = this,
                            t = e.app;
                        e.$el.trigger("view:beforedestroy", e), e.emit("local::beforeDestroy viewBeforeDestroy", e), e.main ? (t.views.main = null, delete t.views.main) : e.name && (t.views[e.name] = null, delete t.views[e.name]), e.$el[0].f7View = null, delete e.$el[0].f7View, t.views.splice(t.views.indexOf(e), 1), e.params.router && e.router && e.router.destroy(), e.emit("local::destroy viewDestroy", e), P()(e).forEach(function(t) { e[t] = null, delete e[t] }), e = null } }, { key: "init", value: function() { this.params.router && this.router.init() } }]), t }(be);
        tt.use(et); var nt = { name: "clicks", params: { clicks: { externalLinks: ".external" } }, on: { init: function() {! function(e) { if (e.on("click", function(t) { var n = G(t.target),
                                        a = n.closest("a"),
                                        i = a.length > 0,
                                        r = i && a.attr("href"),
                                        s = i && a.hasClass("tab-link") && (a.attr("data-tab") || r && 0 === r.indexOf("#")); if (i && (a.is(e.params.clicks.externalLinks) || r && r.indexOf("javascript:") >= 0)) { var o = a.attr("target");!r || "_system" !== o && "_blank" !== o && "_browser" !== o || (t.preventDefault(), "_browser" !== o && A.cordova && A.cordova.InAppBrowser ? A.cordova.InAppBrowser.open(r, o) : A.open(r, o)) } else { P()(e.modules).forEach(function(t) { var a = e.modules[t].clicks;
                                            a && P()(a).forEach(function(t) { var i = n.closest(t).eq(0);
                                                i.length > 0 && a[t].call(e, i, i.dataset()) }) }); var l = {};
                                        i && (t.preventDefault(), l = a.dataset()); var c = r && r.length > 0 && "#" !== r && !s,
                                            d = l.template; if (c || a.hasClass("back") || d) { var u = void 0; if (l.view ? u = G(l.view)[0].f7View : (u = n.parents(".view")[0] && n.parents(".view")[0].f7View, !a.hasClass("back") && u && u.params.linksView && ("string" == typeof u.params.linksView ? u = G(u.params.linksView)[0].f7View : u.params.linksView instanceof tt && (u = u.params.linksView))), u || e.views.main && (u = e.views.main), !u || !u.router) return; if (l.context && "string" == typeof l.context) try { l.context = JSON.parse(l.context) } catch (e) {} a.hasClass("back") ? u.router.back(r, l) : u.router.navigate(r, l) } } }), Me.touch && !ge.android) { var t = !!Me.passiveListener && { passive: !1, capture: !1 };
                                G(I).on(e.params.touch.fastClicks ? "touchstart" : "touchmove", ".panel-backdrop, .dialog-backdrop, .preloader-backdrop, .popup-backdrop, .searchbar-backdrop", function(e) { e.preventDefault() }, t) } }(this) } } },
            at = { name: "history", static: { history: Ne }, on: { init: function() { Ne.init(this) } } },
            it = { get: function(e) { return me.promise(function(t, n) { try { t(JSON.parse(A.localStorage.getItem("f7storage-" + e))) } catch (e) { n(e) } }) }, set: function(e, t) { return me.promise(function(n, a) { try { A.localStorage.setItem("f7storage-" + e, p()(t)), n() } catch (e) { a(e) } }) }, remove: function(e) { return me.promise(function(t, n) { try { A.localStorage.removeItem("f7storage-" + e), t() } catch (e) { n(e) } }) }, clear: function() {}, length: function() {}, keys: function() { return me.promise(function(e, t) { try { e(P()(A.localStorage).filter(function(e) { return 0 === e.indexOf("f7storage-") }).map(function(e) { return e.replace("f7storage-", "") })) } catch (e) { t(e) } }) }, forEach: function(e) { return me.promise(function(t, n) { try { P()(A.localStorage).filter(function(e) { return 0 === e.indexOf("f7storage-") }).forEach(function(t, n) { var a = t.replace("f7storage-", "");
                                it.get(a).then(function(t) { e(a, t, n) }) }), t() } catch (e) { n(e) } }) } },
            rt = { name: "storage", static: { Storage: it, storage: it } },
            st = { hide: function() { G("html").removeClass("with-statusbar"), ge.cordova && A.StatusBar && A.StatusBar.hide() }, show: function() { if (ge.cordova && A.StatusBar) return A.StatusBar.show(), void me.nextTick(function() { ge.needsStatusbarOverlay() && G("html").addClass("with-statusbar") });
                    G("html").addClass("with-statusbar") }, onClick: function() { var e = void 0;
                    (e = G(".popup.modal-in").length > 0 ? G(".popup.modal-in").find(".page:not(.page-previous):not(.page-next):not(.cached)").find(".page-content") : G(".panel.panel-active").length > 0 ? G(".panel.panel-active").find(".page:not(.page-previous):not(.page-next):not(.cached)").find(".page-content") : G(".views > .view.tab-active").length > 0 ? G(".views > .view.tab-active").find(".page:not(.page-previous):not(.page-next):not(.cached)").find(".page-content") : G(".views").length > 0 ? G(".views").find(".page:not(.page-previous):not(.page-next):not(.cached)").find(".page-content") : this.root.children(".view").find(".page:not(.page-previous):not(.page-next):not(.cached)").find(".page-content")) && e.length > 0 && (e.hasClass("tab") && (e = e.parent(".tabs").children(".page-content.tab-active")), e.length > 0 && e.scrollTop(0, 300)) }, setIosTextColor: function(e) { ge.cordova && A.StatusBar && ("white" === e ? A.StatusBar.styleLightContent() : A.StatusBar.styleDefault()) }, setBackgroundColor: function(e) { G(".statusbar").css("background-color", e), ge.cordova && A.StatusBar && A.StatusBar.backgroundColorByHexString(e) }, isVisible: function() { return !(!ge.cordova || !A.StatusBar) && A.StatusBar.isVisible }, iosOverlaysWebView: function() { var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    ge.ios && ge.cordova && A.StatusBar && (A.StatusBar.overlaysWebView(e), e ? G("html").addClass("with-statusbar") : G("html").removeClass("with-statusbar")) }, checkOverlay: function() { ge.needsStatusbarOverlay() ? G("html").addClass("with-statusbar") : G("html").removeClass("with-statusbar") }, init: function() { var e = this.params.statusbar;
                    e.enabled && ("auto" === e.overlay ? (ge.needsStatusbarOverlay() ? G("html").addClass("with-statusbar") : G("html").removeClass("with-statusbar"), ge.ios && (ge.cordova || ge.webView) && (0 === A.orientation && this.once("resize", function() { st.checkOverlay() }), G(I).on("resume", function() { st.checkOverlay() }, !1), this.on(ge.ios ? "orientationchange" : "orientationchange resize", function() { st.checkOverlay() }))) : !0 === e.overlay ? G("html").addClass("with-statusbar") : !1 === e.overlay && G("html").removeClass("with-statusbar"), ge.cordova && A.StatusBar && (e.scrollTopOnClick && G(A).on("statusTap", st.onClick.bind(this)), e.iosOverlaysWebView ? A.StatusBar.overlaysWebView(!0) : A.StatusBar.overlaysWebView(!1), "white" === e.iosTextColor ? A.StatusBar.styleLightContent() : A.StatusBar.styleDefault()), e.iosBackgroundColor && "ios" === this.theme && st.setBackgroundColor(e.iosBackgroundColor), e.materialBackgroundColor && "md" === this.theme && st.setBackgroundColor(e.materialBackgroundColor)) } },
            ot = { name: "statusbar", params: { statusbar: { enabled: !0, overlay: "auto", scrollTopOnClick: !0, iosOverlaysWebView: !0, iosTextColor: "black", iosBackgroundColor: null, materialBackgroundColor: null } }, create: function() { me.extend(this, { statusbar: { checkOverlay: st.checkOverlay, hide: st.hide, show: st.show, iosOverlaysWebView: st.iosOverlaysWebView, setIosTextColor: st.setIosTextColor, setBackgroundColor: st.setBackgroundColor, isVisible: st.isVisible, init: st.init.bind(this) } }) }, on: { init: function() { st.init.call(this) } }, clicks: { ".statusbar": function() { this.params.statusbar.enabled && this.params.statusbar.scrollTopOnClick && st.onClick.call(this) } } }; var lt = { name: "view", params: { view: { name: void 0, main: !1, router: !0, linksView: null, stackPages: !1, xhrCache: !0, xhrCacheIgnore: [], xhrCacheIgnoreGetParameters: !1, xhrCacheDuration: 6e5, preloadPreviousPage: !0, uniqueHistory: !1, uniqueHistoryIgnoreGetParameters: !1, allowDuplicateUrls: !1, reloadPages: !1, removeElements: !0, removeElementsWithTimeout: !1, removeElementsTimeout: 0, restoreScrollTopOnBack: !0, unloadTabContent: !0, passRouteQueryToRequest: !0, passRouteParamsToRequest: !1, iosSwipeBack: !0, iosSwipeBackAnimateShadow: !0, iosSwipeBackAnimateOpacity: !0, iosSwipeBackActiveArea: 30, iosSwipeBackThreshold: 0, mdSwipeBack: !1, mdSwipeBackAnimateShadow: !0, mdSwipeBackAnimateOpacity: !1, mdSwipeBackActiveArea: 30, mdSwipeBackThreshold: 0, pushState: !1, pushStateRoot: void 0, pushStateAnimate: !0, pushStateAnimateOnLoad: !1, pushStateSeparator: "#!", pushStateOnLoad: !0, animate: !0, animateWithJS: !1, iosDynamicNavbar: !0, iosSeparateDynamicNavbar: !0, iosAnimateNavbarBackIcon: !0, iosPageLoadDelay: 0, materialPageLoadDelay: 0 } }, static: { View: tt }, create: function() { var e = this;
                    me.extend(e, { views: me.extend([], { create: function(t, n) { return new tt(e, t, n) }, get: function(e) { var t = G(e); if (t.length && t[0].f7View) return t[0].f7View } }) }), Object.defineProperty(e.views, "current", { enumerable: !0, configurable: !0, get: function() { return function(e) { var t = G(".popover.modal-in .view"),
                                    n = G(".popup.modal-in .view"),
                                    a = G(".panel.panel-active .view"),
                                    i = G(".views");
                                0 === i.length && (i = e.root); var r = i.children(".view"); if (r.length > 1 && r.hasClass("tab") && (r = i.children(".view.tab-active")), t.length > 0 && t[0].f7View) return t[0].f7View; if (n.length > 0 && n[0].f7View) return n[0].f7View; if (a.length > 0 && a[0].f7View) return a[0].f7View; if (r.length > 0) { if (1 === r.length && r[0].f7View) return r[0].f7View; if (r.length > 1) return e.views.main } }(e) } }), e.view = e.views }, on: { init: function() { var e = this;
                        G(".view-init").each(function(t, n) { if (!n.f7View) { var a = G(n).dataset();
                                e.views.create(n, a) } }) }, modalOpen: function(e) { var t = this;
                        e.$el.find(".view-init").each(function(e, n) { if (!n.f7View) { var a = G(n).dataset();
                                t.views.create(n, a) } }) }, modalBeforeDestroy: function(e) { e && e.$el && e.$el.find(".view-init").each(function(e, t) { var n = t.f7View;
                            n && n.destroy() }) } } },
            ct = { size: function(e) { var t = this; if ("ios" === t.theme) { var n = G(e); if (n.hasClass("navbar")) n = n.children(".navbar-inner").each(function(e, n) { t.navbar.size(n) });
                        else if (!(n.hasClass("stacked") || n.parents(".stacked").length > 0 || n.parents(".tab:not(.tab-active)").length > 0 || n.parents(".popup:not(.modal-in)").length > 0)) { var a = n.parents(".view").eq(0),
                                i = t.rtl ? n.children(".right") : n.children(".left"),
                                r = t.rtl ? n.children(".left") : n.children(".right"),
                                s = n.children(".title"),
                                o = n.children(".subnavbar"),
                                l = 0 === i.length,
                                c = 0 === r.length,
                                d = l ? 0 : i.outerWidth(!0),
                                u = c ? 0 : r.outerWidth(!0),
                                p = s.outerWidth(!0),
                                h = n.styles(),
                                f = n[0].offsetWidth,
                                v = f - parseInt(h.paddingLeft, 10) - parseInt(h.paddingRight, 10),
                                m = n.hasClass("navbar-previous"),
                                g = n.hasClass("sliding"),
                                b = void 0,
                                y = void 0,
                                w = 0,
                                C = 0;
                            a.length > 0 && a[0].f7View && (y = (b = a[0].f7View.router) && b.dynamicNavbar, b && b.separateNavbar || (w = f, C = f / 5)); var x = void 0,
                                k = void 0;
                            c && (x = v - p), l && (x = 0), l || c || (x = (v - u - p + d) / 2); var E = (v - p) / 2;
                            v - d - u > p ? (E < d && (E = d), E + p > v - u && (E = v - u - p), k = E - x) : k = 0; var $ = t.rtl ? -1 : 1; if (y) { if (s.hasClass("sliding") || s.length > 0 && g) { var S = -(x + k) * $ + C,
                                        T = (v - x - k - p) * $ - w; if (m && b && b.params.iosAnimateNavbarBackIcon) { var _ = n.parent().find(".navbar-current").children(".left.sliding").find(".back .icon ~ span");
                                        _.length > 0 && (S += _[0].offsetLeft) } s[0].f7NavbarLeftOffset = S, s[0].f7NavbarRightOffset = T } l || !i.hasClass("sliding") && !g || (t.rtl ? (i[0].f7NavbarLeftOffset = -(v - i[0].offsetWidth) / 2 * $, i[0].f7NavbarRightOffset = d * $) : (i[0].f7NavbarLeftOffset = -d + C, i[0].f7NavbarRightOffset = (v - i[0].offsetWidth) / 2 - w, b && b.params.iosAnimateNavbarBackIcon && i.find(".back .icon").length > 0 && (i[0].f7NavbarRightOffset -= i.find(".back .icon")[0].offsetWidth))), c || !r.hasClass("sliding") && !g || (t.rtl ? (r[0].f7NavbarLeftOffset = -u * $, r[0].f7NavbarRightOffset = (v - r[0].offsetWidth) / 2 * $) : (r[0].f7NavbarLeftOffset = -(v - r[0].offsetWidth) / 2 + C, r[0].f7NavbarRightOffset = u - w)), o.length && (o.hasClass("sliding") || g) && (o[0].f7NavbarLeftOffset = t.rtl ? o[0].offsetWidth : -o[0].offsetWidth + C, o[0].f7NavbarRightOffset = -o[0].f7NavbarLeftOffset - w + C) } if (t.params.navbar.iosCenterTitle) { var M = k;
                                t.rtl && l && c && s.length > 0 && (M = -M), s.css({ left: M + "px" }) } } } }, hide: function(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = G(e); if (n.hasClass("navbar-inner") && (n = n.parents(".navbar")), n.length && !n.hasClass("navbar-hidden")) { var a = "navbar-hidden" + (t ? " navbar-transitioning" : "");
                        n.transitionEnd(function() { n.removeClass("navbar-transitioning") }), n.addClass(a) } }, show: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".navbar-hidden",
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = G(e);
                    n.hasClass("navbar-inner") && (n = n.parents(".navbar")), n.length && n.hasClass("navbar-hidden") && (t && (n.addClass("navbar-transitioning"), n.transitionEnd(function() { n.removeClass("navbar-transitioning") })), n.removeClass("navbar-hidden")) }, getElByPage: function(e) { var t = void 0,
                        n = void 0,
                        a = void 0; if (e.$navbarEl || e.$el ? (a = e, t = e.$el) : (t = G(e)).length > 0 && (a = t[0].f7Page), a && a.$navbarEl && a.$navbarEl.length > 0 ? n = a.$navbarEl : t && (n = t.children(".navbar").children(".navbar-inner")), n && (!n || 0 !== n.length)) return n[0] }, getPageByEl: function(e) { var t = G(e); if (!(t.hasClass("navbar") && (t = t.find(".navbar-inner")).length > 1)) return t[0].f7Page }, initHideNavbarOnScroll: function(e, t) { var n = this,
                        a = G(e),
                        i = G(t || n.navbar.getElByPage(e)).closest(".navbar"),
                        r = void 0,
                        s = void 0,
                        o = void 0,
                        l = void 0,
                        c = void 0,
                        d = void 0,
                        u = void 0;

                    function p() { a.hasClass("page-previous") || (s = this.scrollTop, o = this.scrollHeight, l = this.offsetHeight, c = s + l >= o, u = i.hasClass("navbar-hidden"), c ? n.params.navbar.showOnPageScrollEnd && (d = "show") : d = r > s ? n.params.navbar.showOnPageScrollTop || s <= 44 ? "show" : "hide" : s > 44 ? "hide" : "show", "show" === d && u ? (n.navbar.show(i), u = !1) : "hide" !== d || u || (n.navbar.hide(i), u = !0), r = s) } a.on("scroll", ".page-content", p, !0), a[0].f7ScrollNavbarHandler = p } },
            dt = { name: "navbar", create: function() { me.extend(this, { navbar: { size: ct.size.bind(this), hide: ct.hide.bind(this), show: ct.show.bind(this), getElByPage: ct.getElByPage.bind(this), initHideNavbarOnScroll: ct.initHideNavbarOnScroll.bind(this) } }) }, params: { navbar: { scrollTopOnTitleClick: !0, iosCenterTitle: !0, hideOnPageScroll: !1, showOnPageScrollEnd: !0, showOnPageScrollTop: !0 } }, on: { "panelBreakpoint resize": function() { var e = this; "ios" === e.theme && G(".navbar").each(function(t, n) { e.navbar.size(n) }) }, pageBeforeRemove: function(e) { e.$el[0].f7ScrollNavbarHandler && e.$el.off("scroll", ".page-content", e.$el[0].f7ScrollNavbarHandler, !0) }, pageBeforeIn: function(e) { if ("ios" === this.theme) { var t = void 0,
                                n = e.$el.parents(".view")[0].f7View,
                                a = this.navbar.getElByPage(e); if (t = a ? G(a).parents(".navbar") : e.$el.parents(".view").children(".navbar"), e.$el.hasClass("no-navbar") || n.router.dynamicNavbar && !a) { var i = !!(e.pageFrom && e.router.history.length > 0);
                                this.navbar.hide(t, i) } else this.navbar.show(t) } }, pageReinit: function(e) { if ("ios" === this.theme) { var t = G(this.navbar.getElByPage(e));
                            t && 0 !== t.length && this.navbar.size(t) } }, pageInit: function(e) { var t = G(this.navbar.getElByPage(e)); if (t && 0 !== t.length && ("ios" === this.theme && this.navbar.size(t), this.params.navbar.hideOnPageScroll || e.$el.find(".hide-navbar-on-scroll").length || e.$el.hasClass("hide-navbar-on-scroll") || e.$el.find(".hide-bars-on-scroll").length || e.$el.hasClass("hide-bars-on-scroll"))) { if (e.$el.find(".keep-navbar-on-scroll").length || e.$el.hasClass("keep-navbar-on-scroll") || e.$el.find(".keep-bars-on-scroll").length || e.$el.hasClass("keep-bars-on-scroll")) return;
                            this.navbar.initHideNavbarOnScroll(e.el, t[0]) } }, modalOpen: function(e) { var t = this; "ios" === t.theme && e.$el.find(".navbar:not(.navbar-previous):not(.stacked)").each(function(e, n) { t.navbar.size(n) }) }, panelOpen: function(e) { var t = this; "ios" === t.theme && e.$el.find(".navbar:not(.navbar-previous):not(.stacked)").each(function(e, n) { t.navbar.size(n) }) }, panelSwipeOpen: function(e) { var t = this; "ios" === t.theme && e.$el.find(".navbar:not(.navbar-previous):not(.stacked)").each(function(e, n) { t.navbar.size(n) }) }, tabShow: function(e) { var t = this;
                        G(e).find(".navbar:not(.navbar-previous):not(.stacked)").each(function(e, n) { t.navbar.size(n) }) } }, clicks: { ".navbar .title": function(e) { if (this.params.navbar.scrollTopOnTitleClick && !(e.closest("a").length > 0)) { var t = void 0,
                                n = e.parents(".navbar");
                            0 === (t = n.parents(".page-content")).length && (n.parents(".page").length > 0 && (t = n.parents(".page").find(".page-content")), 0 === t.length && n.nextAll(".page-current:not(.stacked)").length > 0 && (t = n.nextAll(".page-current:not(.stacked)").find(".page-content"))), t && t.length > 0 && (t.hasClass("tab") && (t = t.parent(".tabs").children(".page-content.tab-active")), t.length > 0 && t.scrollTop(0, 300)) } } } },
            ut = { setHighlight: function(e) { if ("md" === this.theme) { var t = G(e); if (0 !== t.length && (t.hasClass("tabbar") || t.hasClass("tabbar-labels"))) { 0 === t.find(".tab-link-highlight").length && t.children(".toolbar-inner").append('<span class="tab-link-highlight"></span>'); var n = t.find(".tab-link-highlight"),
                                a = t.find(".tab-link-active"),
                                i = void 0,
                                r = void 0; if (t.hasClass("tabbar-scrollable") && a && a[0]) i = a[0].offsetWidth + "px", r = a[0].offsetLeft + "px";
                            else { var s = a.index();
                                i = 100 / t.find(".tab-link").length + "%", r = 100 * (this.rtl ? -s : s) + "%" } n.css("width", i).transform("translate3d(" + r + ",0,0)") } } }, init: function(e) { this.toolbar.setHighlight(e) }, hide: function(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = G(e); if (!n.hasClass("toolbar-hidden")) { var a = "toolbar-hidden" + (t ? " toolbar-transitioning" : "");
                        n.transitionEnd(function() { n.removeClass("toolbar-transitioning") }), n.addClass(a) } }, show: function(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = G(e);
                    n.hasClass("toolbar-hidden") && (t && (n.addClass("toolbar-transitioning"), n.transitionEnd(function() { n.removeClass("toolbar-transitioning") })), n.removeClass("toolbar-hidden")) }, initHideToolbarOnScroll: function(e) { var t = this,
                        n = G(e),
                        a = n.parents(".view").children(".toolbar"); if (0 === a.length && (a = n.find(".toolbar")), 0 === a.length && (a = n.parents(".views").children(".tabbar, .tabbar-labels")), 0 !== a.length) { var i = void 0,
                            r = void 0,
                            s = void 0,
                            o = void 0,
                            l = void 0,
                            c = void 0,
                            d = void 0;
                        n.on("scroll", ".page-content", u, !0), n[0].f7ScrollToolbarHandler = u }

                    function u() { n.hasClass("page-previous") || (r = this.scrollTop, s = this.scrollHeight, o = this.offsetHeight, l = r + o >= s, d = a.hasClass("toolbar-hidden"), l ? t.params.toolbar.showOnPageScrollEnd && (c = "show") : c = i > r ? t.params.toolbar.showOnPageScrollTop || r <= 44 ? "show" : "hide" : r > 44 ? "hide" : "show", "show" === c && d ? (t.toolbar.show(a), d = !1) : "hide" !== c || d || (t.toolbar.hide(a), d = !0), i = r) } } },
            pt = { name: "toolbar", create: function() { me.extend(this, { toolbar: { hide: ut.hide.bind(this), show: ut.show.bind(this), setHighlight: ut.setHighlight.bind(this), initHideToolbarOnScroll: ut.initHideToolbarOnScroll.bind(this), init: ut.init.bind(this) } }) }, params: { toolbar: { hideOnPageScroll: !1, showOnPageScrollEnd: !0, showOnPageScrollTop: !0 } }, on: { pageBeforeRemove: function(e) { e.$el[0].f7ScrollToolbarHandler && e.$el.off("scroll", ".page-content", e.$el[0].f7ScrollToolbarHandler, !0) }, pageBeforeIn: function(e) { var t = e.$el.parents(".view").children(".toolbar");
                        0 === t.length && (t = e.$el.find(".toolbar")), 0 === t.length && (t = e.$el.parents(".views").children(".tabbar, .tabbar-labels")), 0 !== t.length && (e.$el.hasClass("no-toolbar") ? this.toolbar.hide(t) : this.toolbar.show(t)) }, pageInit: function(e) { var t = this; if (e.$el.find(".tabbar, .tabbar-labels").each(function(e, n) { t.toolbar.init(n) }), t.params.toolbar.hideOnPageScroll || e.$el.find(".hide-toolbar-on-scroll").length || e.$el.hasClass("hide-toolbar-on-scroll") || e.$el.find(".hide-bars-on-scroll").length || e.$el.hasClass("hide-bars-on-scroll")) { if (e.$el.find(".keep-toolbar-on-scroll").length || e.$el.hasClass("keep-toolbar-on-scroll") || e.$el.find(".keep-bars-on-scroll").length || e.$el.hasClass("keep-bars-on-scroll")) return;
                            t.toolbar.initHideToolbarOnScroll(e.el) } }, init: function() { var e = this;
                        e.root.find(".tabbar, .tabbar-labels").each(function(t, n) { e.toolbar.init(n) }) } } },
            ht = function() {
                function e(t, n, a) { w()(this, e); if (t) { var i = t[0].getBoundingClientRect(),
                            r = n - i.left,
                            s = a - i.top,
                            o = i.width,
                            l = i.height,
                            c = Math.max(Math.pow(Math.pow(l, 2) + Math.pow(o, 2), .5), 48); return this.$rippleWaveEl = G('<div class="ripple-wave" style="width: ' + c + "px; height: " + c + "px; margin-top:-" + c / 2 + "px; margin-left:-" + c / 2 + "px; left:" + r + "px; top:" + s + 'px;"></div>'), t.prepend(this.$rippleWaveEl), this._clientLeft = this.$rippleWaveEl[0].clientLeft, this.rippleTransform = "translate3d(" + (o / 2 - r) + "px, " + (l / 2 - s) + "px, 0) scale(1)", this.$rippleWaveEl.transform(this.rippleTransform), this } } return x()(e, [{ key: "onRemove", value: function() { var e = this;
                        e.$rippleWaveEl.remove(), P()(e).forEach(function(t) { e[t] = null, delete e[t] }), e = null } }, { key: "remove", value: function() { var e = this; if (!e.removing) { var t = this.$rippleWaveEl,
                                n = this.rippleTransform,
                                a = me.nextTick(function() { e.onRemove() }, 400);
                            e.removing = !0, t.addClass("ripple-wave-fill").transform(n.replace("scale(1)", "scale(1.01)")).transitionEnd(function() { clearTimeout(a), me.nextFrame(function() { t.addClass("ripple-wave-out").transform(n.replace("scale(1)", "scale(1.01)")), a = me.nextTick(function() { e.onRemove() }, 700), t.transitionEnd(function() { clearTimeout(a), e.onRemove() }) }) }) } } }]), e }(),
            ft = { name: "touch-ripple", static: { TouchRipple: ht }, create: function() { this.touchRipple = { create: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return new(Function.prototype.bind.apply(ht, [null].concat(B()(t)))) } } } },
            vt = [],
            mt = []; var gt = function(e) {
                function t(e, n) { var a;
                    w()(this, t); var i = m()(this, (t.__proto__ || f()(t)).call(this, n, [e])),
                        r = i,
                        s = {}; return r.useModulesParams(s), r.params = me.extend(s, n), r.useModules(), a = i, m()(i, a) } return b()(t, e), x()(t, [{ key: "onOpen", value: function() { vt.push(this), G("html").addClass("with-modal-" + this.type.toLowerCase()), this.$el.trigger("modal:open " + this.type.toLowerCase() + ":open", this), this.emit("local::open modalOpen " + this.type + "Open", this) } }, { key: "onOpened", value: function() { this.$el.trigger("modal:opened " + this.type.toLowerCase() + ":opened", this), this.emit("local::opened modalOpened " + this.type + "Opened", this) } }, { key: "onClose", value: function() { this.type && this.$el && (vt.splice(vt.indexOf(this), 1), G("html").removeClass("with-modal-" + this.type.toLowerCase()), this.$el.trigger("modal:close " + this.type.toLowerCase() + ":close", this), this.emit("local::close modalClose " + this.type + "Close", this)) } }, { key: "onClosed", value: function() { this.type && this.$el && (this.$el.removeClass("modal-out"), this.$el.hide(), this.$el.trigger("modal:closed " + this.type.toLowerCase() + ":closed", this), this.emit("local::closed modalClosed " + this.type + "Closed", this)) } }, { key: "open", value: function(e) { var t = this,
                            n = t.app,
                            a = t.$el,
                            i = t.$backdropEl,
                            r = t.type,
                            s = !0; if (void 0 !== e ? s = e : void 0 !== t.params.animate && (s = t.params.animate), !a || a.hasClass("modal-in")) return t; if ("dialog" === r && n.params.modal.queueDialogs) { var o = void 0; if (G(".dialog.modal-in").length > 0 ? o = !0 : vt.length > 0 && vt.forEach(function(e) { "dialog" === e.type && (o = !0) }), o) return mt.push(t), t } var l = a.parent(),
                            c = a.parents(I).length > 0;

                        function d() { a.hasClass("modal-out") ? t.onClosed() : a.hasClass("modal-in") && t.onOpened() } return n.params.modal.moveToRoot && !l.is(n.root) && (n.root.append(a), t.once(r + "Closed", function() { c ? l.append(a) : a.remove() })), a.show(), "dialog" === r && a.css({ marginTop: -Math.round(a.outerHeight() / 2) + "px" }), t._clientLeft = a[0].clientLeft, i && (i[s ? "removeClass" : "addClass"]("not-animated"), i.addClass("backdrop-in")), s ? (a.animationEnd(function() { d() }), a.transitionEnd(function() { d() }), a.removeClass("modal-out not-animated").addClass("modal-in"), t.onOpen()) : (a.removeClass("modal-out").addClass("modal-in not-animated"), t.onOpen(), t.onOpened()), t } }, { key: "close", value: function(e) { var t = this,
                            n = t.$el,
                            a = t.$backdropEl,
                            i = !0; if (void 0 !== e ? i = e : void 0 !== t.params.animate && (i = t.params.animate), !n || !n.hasClass("modal-in")) return t;

                        function r() { n.hasClass("modal-out") ? t.onClosed() : n.hasClass("modal-in") && t.onOpened() } return a && (a[i ? "removeClass" : "addClass"]("not-animated"), a.removeClass("backdrop-in")), n[i ? "removeClass" : "addClass"]("not-animated"), i ? (n.animationEnd(function() { r() }), n.transitionEnd(function() { r() }), n.removeClass("modal-in").addClass("modal-out"), t.onClose()) : (n.addClass("not-animated").removeClass("modal-in").addClass("modal-out"), t.onClose(), t.onClosed()), "dialog" === t.type && 0 !== mt.length && mt.shift().open(), t } }, { key: "destroy", value: function() { this.destroyed || (this.emit("local::beforeDestroy modalBeforeDestroy " + this.type + "BeforeDestroy", this), this.$el && (this.$el.trigger("modal:beforedestroy " + this.type.toLowerCase() + ":beforedestroy", this), this.$el.length && this.$el[0].f7Modal && delete this.$el[0].f7Modal), me.deleteProps(this), this.destroyed = !0) } }]), t }(be),
            bt = function(e) {
                function t(e, n) { var a;
                    w()(this, t); var i = me.extend({ backdrop: !0, closeByBackdropClick: !0, on: {} }, n),
                        r = m()(this, (t.__proto__ || f()(t)).call(this, e, i)),
                        s = r;
                    s.params = i; var o, l, c = void 0; if ((c = s.params.el ? G(s.params.el) : G(s.params.content)) && c.length > 0 && c[0].f7Modal) return o = c[0].f7Modal, m()(r, o); if (0 === c.length) return l = s.destroy(), m()(r, l); var d = void 0;

                    function u(e) { s && !s.destroyed && d && e.target === d[0] && s.close() } return s.params.backdrop && 0 === (d = e.root.children(".custom-modal-backdrop")).length && (d = G('<div class="custom-modal-backdrop"></div>'), e.root.append(d)), s.on("customModalOpened", function() { s.params.closeByBackdropClick && s.params.backdrop && e.on("click", u) }), s.on("customModalClose", function() { s.params.closeByBackdropClick && s.params.backdrop && e.off("click", u) }), me.extend(s, { app: e, $el: c, el: c[0], $backdropEl: d, backdropEl: d && d[0], type: "customModal" }), c[0].f7Modal = s, a = s, m()(r, a) } return b()(t, e), t }(gt),
            yt = { name: "modal", static: { Modal: gt, CustomModal: bt }, create: function() { var e = this;
                    e.customModal = { create: function(t) { return new bt(e, t) } } }, params: { modal: { moveToRoot: !0, queueDialogs: !0 } } },
            wt = function(e) {
                function t(e, n) { var a;
                    w()(this, t); var i = me.extend({ title: e.params.dialog.title, text: void 0, content: "", buttons: [], verticalButtons: !1, onClick: void 0, cssClass: void 0, destroyOnClose: !1, on: {} }, n);
                    void 0 === i.closeByBackdropClick && (i.closeByBackdropClick = e.params.dialog.closeByBackdropClick); var r = m()(this, (t.__proto__ || f()(t)).call(this, e, i)),
                        s = r,
                        o = i.title,
                        l = i.text,
                        c = i.content,
                        d = i.buttons,
                        u = i.verticalButtons,
                        p = i.cssClass;
                    s.params = i; var h, v, g = void 0; if (s.params.el) g = G(s.params.el);
                    else { var b = ["dialog"];
                        0 === d.length && b.push("dialog-no-buttons"), d.length > 0 && b.push("dialog-buttons-" + d.length), u && b.push("dialog-buttons-vertical"), p && b.push(p); var y = "";
                        d.length > 0 && (y = '\n          <div class="dialog-buttons">\n            ' + d.map(function(e) { return '\n              <span class="dialog-button' + (e.bold ? " dialog-button-bold" : "") + (e.color ? " color-" + e.color : "") + (e.cssClass ? " " + e.cssClass : "") + '">' + e.text + "</span>\n            " }).join("") + "\n          </div>\n        "); var C = '\n        <div class="' + b.join(" ") + '">\n          <div class="dialog-inner">\n            ' + (o ? '<div class="dialog-title">' + o + "</div>" : "") + "\n            " + (l ? '<div class="dialog-text">' + l + "</div>" : "") + "\n            " + c + "\n          </div>\n          " + y + "\n        </div>\n      ";
                        g = G(C) } if (g && g.length > 0 && g[0].f7Modal) return h = g[0].f7Modal, m()(r, h); if (0 === g.length) return v = s.destroy(), m()(r, v); var x = e.root.children(".dialog-backdrop");

                    function k(e) { var t = G(this).index(),
                            n = d[t];
                        n.onClick && n.onClick(s, e), s.params.onClick && s.params.onClick(s, t), !1 !== n.close && s.close() } 0 === x.length && (x = G('<div class="dialog-backdrop"></div>'), e.root.append(x)); var E = void 0;

                    function $(e) { var t = e.keyCode;
                        d.forEach(function(n, a) { n.keyCodes && n.keyCodes.indexOf(t) >= 0 && (I.activeElement && I.activeElement.blur(), n.onClick && n.onClick(s, e), s.params.onClick && s.params.onClick(s, a), !1 !== n.close && s.close()) }) }

                    function S(e) { var t = e.target;
                        0 === G(t).closest(s.el).length && s.params.closeByBackdropClick && s.backdropEl && s.backdropEl === t && s.close() } return d && d.length > 0 && (s.on("open", function() { g.find(".dialog-button").each(function(e, t) { d[e].keyCodes && (E = !0), G(t).on("click", k) }), !E || e.device.ios || e.device.android || e.device.cordova || G(I).on("keydown", $) }), s.on("close", function() { g.find(".dialog-button").each(function(e, t) { G(t).off("click", k) }), !E || e.device.ios || e.device.android || e.device.cordova || G(I).off("keydown", $), E = !1 })), me.extend(s, { app: e, $el: g, el: g[0], $backdropEl: x, backdropEl: x[0], type: "dialog", setProgress: function(t, n) { return e.progressbar.set(g.find(".progressbar"), t, n), s }, setText: function(e) { var t = g.find(".dialog-text"); return 0 === t.length && (t = G('<div class="dialog-text"></div>'), void 0 !== o ? t.insertAfter(g.find(".dialog-title")) : g.find(".dialog-inner").prepend(t)), t.html(e), s.params.text = e, s }, setTitle: function(e) { var t = g.find(".dialog-title"); return 0 === t.length && (t = G('<div class="dialog-title"></div>'), g.find(".dialog-inner").prepend(t)), t.html(e), s.params.title = e, s } }), s.on("opened", function() { s.params.closeByBackdropClick && e.on("click", S) }), s.on("close", function() { s.params.closeByBackdropClick && e.off("click", S) }), g[0].f7Modal = s, s.params.destroyOnClose && s.once("closed", function() { setTimeout(function() { s.destroy() }, 0) }), a = s, m()(r, a) } return b()(t, e), t }(gt);

        function Ct() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.defaultSelector,
                n = e.constructor,
                a = e.domProp,
                i = e.app,
                r = e.addMethods,
                s = { create: function() { for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a]; return i ? new(Function.prototype.bind.apply(n, [null].concat([i], B()(t)))) : new(Function.prototype.bind.apply(n, [null].concat(B()(t)))) }, get: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t; if (e instanceof n) return e; var i = G(e); return 0 !== i.length ? i[0][a] : void 0 }, destroy: function(e) { var t = s.get(e); if (t && t.destroy) return t.destroy() } }; return r && Array.isArray(r) && r.forEach(function(e) { s[e] = function() { for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i]; var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                        o = s.get(r); if (o && o[e]) return o[e].apply(o, a) } }), s }

        function xt() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.defaultSelector,
                n = e.constructor,
                a = e.app; return me.extend(Ct({ defaultSelector: t, constructor: n, app: a, domProp: "f7Modal" }), { open: function(e, t) { var i = G(e),
                        r = i[0].f7Modal; return r || (r = new n(a, { el: i })), r.open(t) }, close: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                        i = arguments[1],
                        r = G(e); if (0 !== r.length) { var s = r[0].f7Modal; return s || (s = new n(a, { el: r })), s.close(i) } } }) } var kt = { name: "dialog", params: { dialog: { title: void 0, buttonOk: "OK", buttonCancel: "Cancel", usernamePlaceholder: "Username", passwordPlaceholder: "Password", preloaderTitle: "Loading... ", progressTitle: "Loading... ", closeByBackdropClick: !1, destroyPredefinedDialogs: !0, keyboardActions: !0 } }, static: { Dialog: wt }, create: function() { var e = this,
                        t = e.params.dialog.title || e.name,
                        n = e.params.dialog.destroyPredefinedDialogs,
                        a = e.params.dialog.keyboardActions;
                    e.dialog = me.extend(xt({ app: e, constructor: wt, defaultSelector: ".dialog.modal-in" }), { alert: function() { for (var i = arguments.length, r = Array(i), o = 0; o < i; o++) r[o] = arguments[o]; var l = s()(r, 3),
                                c = l[0],
                                d = l[1],
                                u = l[2]; if (2 === r.length && "function" == typeof r[1]) { var p = s()(r, 3);
                                c = p[0], u = p[1], d = p[2] } return new wt(e, { title: void 0 === d ? t : d, text: c, buttons: [{ text: e.params.dialog.buttonOk, bold: !0, onClick: u, keyCodes: a ? [13, 27] : null }], destroyOnClose: n }).open() }, prompt: function() { for (var i = arguments.length, r = Array(i), o = 0; o < i; o++) r[o] = arguments[o]; var l = s()(r, 4),
                                c = l[0],
                                d = l[1],
                                u = l[2],
                                p = l[3]; if ("function" == typeof r[1]) { var h = s()(r, 4);
                                c = h[0], u = h[1], p = h[2], d = h[3] } return new wt(e, { title: void 0 === d ? t : d, text: c, content: '<div class="dialog-input-field item-input"><div class="item-input-wrap"><input type="text" class="dialog-input"></div></div>', buttons: [{ text: e.params.dialog.buttonCancel, keyCodes: a ? [27] : null }, { text: e.params.dialog.buttonOk, bold: !0, keyCodes: a ? [13] : null }], onClick: function(e, t) { var n = e.$el.find(".dialog-input").val();
                                    0 === t && p && p(n), 1 === t && u && u(n) }, destroyOnClose: n }).open() }, confirm: function() { for (var i = arguments.length, r = Array(i), o = 0; o < i; o++) r[o] = arguments[o]; var l = s()(r, 4),
                                c = l[0],
                                d = l[1],
                                u = l[2],
                                p = l[3]; if ("function" == typeof r[1]) { var h = s()(r, 4);
                                c = h[0], u = h[1], p = h[2], d = h[3] } return new wt(e, { title: void 0 === d ? t : d, text: c, buttons: [{ text: e.params.dialog.buttonCancel, onClick: p, keyCodes: a ? [27] : null }, { text: e.params.dialog.buttonOk, bold: !0, onClick: u, keyCodes: a ? [13] : null }], destroyOnClose: n }).open() }, login: function() { for (var i = arguments.length, r = Array(i), o = 0; o < i; o++) r[o] = arguments[o]; var l = s()(r, 4),
                                c = l[0],
                                d = l[1],
                                u = l[2],
                                p = l[3]; if ("function" == typeof r[1]) { var h = s()(r, 4);
                                c = h[0], u = h[1], p = h[2], d = h[3] } return new wt(e, { title: void 0 === d ? t : d, text: c, content: '\n              <div class="dialog-input-field dialog-input-double item-input">\n                <div class="item-input-wrap">\n                  <input type="text" name="dialog-username" placeholder="' + e.params.dialog.usernamePlaceholder + '" class="dialog-input">\n                </div>\n              </div>\n              <div class="dialog-input-field dialog-input-double item-input">\n                <div class="item-input-wrap">\n                  <input type="password" name="dialog-password" placeholder="' + e.params.dialog.passwordPlaceholder + '" class="dialog-input">\n                </div>\n              </div>', buttons: [{ text: e.params.dialog.buttonCancel, keyCodes: a ? [27] : null }, { text: e.params.dialog.buttonOk, bold: !0, keyCodes: a ? [13] : null }], onClick: function(e, t) { var n = e.$el.find('[name="dialog-username"]').val(),
                                        a = e.$el.find('[name="dialog-password"]').val();
                                    0 === t && p && p(n, a), 1 === t && u && u(n, a) }, destroyOnClose: n }).open() }, password: function() { for (var i = arguments.length, r = Array(i), o = 0; o < i; o++) r[o] = arguments[o]; var l = s()(r, 4),
                                c = l[0],
                                d = l[1],
                                u = l[2],
                                p = l[3]; if ("function" == typeof r[1]) { var h = s()(r, 4);
                                c = h[0], u = h[1], p = h[2], d = h[3] } return new wt(e, { title: void 0 === d ? t : d, text: c, content: '\n              <div class="dialog-input-field item-input">\n                <div class="item-input-wrap">\n                  <input type="password" name="dialog-password" placeholder="' + e.params.dialog.passwordPlaceholder + '" class="dialog-input">\n                </div>\n              </div>', buttons: [{ text: e.params.dialog.buttonCancel, keyCodes: a ? [27] : null }, { text: e.params.dialog.buttonOk, bold: !0, keyCodes: a ? [13] : null }], onClick: function(e, t) { var n = e.$el.find('[name="dialog-password"]').val();
                                    0 === t && p && p(n), 1 === t && u && u(n) }, destroyOnClose: n }).open() }, preloader: function(t) { var a = "md" !== e.theme ? "" : me.mdPreloaderContent; return new wt(e, { title: void 0 === t ? e.params.dialog.preloaderTitle : t, content: '<div class="preloader">' + a + "</div>", cssClass: "dialog-preloader", destroyOnClose: n }).open() }, progress: function() { for (var t = arguments.length, a = Array(t), i = 0; i < t; i++) a[i] = arguments[i]; var r = s()(a, 3),
                                o = r[0],
                                l = r[1],
                                c = r[2]; if (2 === a.length) { if ("number" == typeof a[0]) { var d = s()(a, 3);
                                    l = d[0], c = d[1], o = d[2] } else if ("string" == typeof a[0] && "string" == typeof a[1]) { var u = s()(a, 3);
                                    o = u[0], c = u[1], l = u[2] } } else if (1 === a.length && "number" == typeof a[0]) { var p = s()(a, 3);
                                l = p[0], o = p[1], c = p[2] } var h = void 0 === l,
                                f = new wt(e, { title: void 0 === o ? e.params.dialog.progressTitle : o, cssClass: "dialog-progress", content: '\n              <div class="progressbar' + (h ? "-infinite" : "") + (c ? " color-" + c : "") + '">\n                ' + (h ? "" : "<span></span>") + "\n              </div>\n            ", destroyOnClose: n }); return h || f.setProgress(l), f.open() } }) } },
            Et = function(e) {
                function t(e, n) { var a;
                    w()(this, t); var i = me.extend({ on: {} }, e.params.popup, n),
                        r = m()(this, (t.__proto__ || f()(t)).call(this, e, i)),
                        s = r;
                    s.params = i; var o, l, c = void 0; if ((c = s.params.el ? G(s.params.el) : G(s.params.content)) && c.length > 0 && c[0].f7Modal) return o = c[0].f7Modal, m()(r, o); if (0 === c.length) return l = s.destroy(), m()(r, l); var d = void 0;

                    function u(e) { var t = e.target;
                        0 === G(t).closest(s.el).length && s.params && s.params.closeByBackdropClick && s.params.backdrop && s.backdropEl && s.backdropEl === t && s.close() } return s.params.backdrop && 0 === (d = e.root.children(".popup-backdrop")).length && (d = G('<div class="popup-backdrop"></div>'), e.root.append(d)), me.extend(s, { app: e, $el: c, el: c[0], $backdropEl: d, backdropEl: d && d[0], type: "popup" }), s.on("popupOpened", function() { s.params.closeByBackdropClick && e.on("click", u) }), s.on("popupClose", function() { s.params.closeByBackdropClick && e.off("click", u) }), c[0].f7Modal = s, a = s, m()(r, a) } return b()(t, e), t }(gt),
            $t = { name: "popup", params: { popup: { backdrop: !0, closeByBackdropClick: !0 } }, static: { Popup: Et }, create: function() { this.popup = xt({ app: this, constructor: Et, defaultSelector: ".popup.modal-in" }) }, clicks: { ".popup-open": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.popup.open(t.popup, t.animate) }, ".popup-close": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.popup.close(t.popup, t.animate) } } },
            St = function(e) {
                function t(e, n) { var a;
                    w()(this, t); var i = me.extend({ on: {} }, n),
                        r = m()(this, (t.__proto__ || f()(t)).call(this, e, i)),
                        s = r;
                    s.params = i; var o, l, c = void 0; return (c = s.params.el ? G(s.params.el) : G(s.params.content)) && c.length > 0 && c[0].f7Modal ? (o = c[0].f7Modal, m()(r, o)) : 0 === c.length ? (l = s.destroy(), m()(r, l)) : (me.extend(s, { app: e, $el: c, el: c[0], type: "loginScreen" }), c[0].f7Modal = s, a = s, m()(r, a)) } return b()(t, e), t }(gt),
            Tt = { name: "loginScreen", static: { LoginScreen: St }, create: function() { this.loginScreen = xt({ app: this, constructor: St, defaultSelector: ".login-screen.modal-in" }) }, clicks: { ".login-screen-open": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.loginScreen.open(t.loginScreen, t.animate) }, ".login-screen-close": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.loginScreen.close(t.loginScreen, t.animate) } } },
            _t = function(e) {
                function t(e, n) { var a;
                    w()(this, t); var i = me.extend({ on: {} }, e.params.popover, n),
                        r = m()(this, (t.__proto__ || f()(t)).call(this, e, i)),
                        o = r;
                    o.params = i; var l, c = void 0; if ((c = o.params.el ? G(o.params.el) : G(o.params.content)) && c.length > 0 && c[0].f7Modal) return l = c[0].f7Modal, m()(r, l); var d, u = G(o.params.targetEl).eq(0); if (0 === c.length) return d = o.destroy(), m()(r, d); var p = void 0;
                    o.params.backdrop && 0 === (p = e.root.children(".popover-backdrop")).length && (p = G('<div class="popover-backdrop"></div>'), e.root.append(p)); var h = void 0;
                    0 === c.find(".popover-angle").length ? (h = G('<div class="popover-angle"></div>'), c.prepend(h)) : h = c.find(".popover-angle"); var v = o.open;

                    function g() { o.resize() }

                    function b(e) { var t = e.target;
                        0 === G(t).closest(o.el).length && (o.params.closeByBackdropClick && o.params.backdrop && o.backdropEl && o.backdropEl === t ? o.close() : o.params.closeByOutsideClick && o.close()) } return me.extend(o, { app: e, $el: c, el: c[0], $targetEl: u, targetEl: u[0], $angleEl: h, angleEl: h[0], $backdropEl: p, backdropEl: p && p[0], type: "popover", open: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var a = s()(t, 2),
                                i = a[0],
                                r = a[1]; if ("boolean" == typeof t[0]) { var l = s()(t, 2);
                                r = l[0], i = l[1] } i && (o.$targetEl = G(i), o.targetEl = o.$targetEl[0]), v.call(o, r) } }), o.on("popoverOpen", function() { o.resize(), e.on("resize", g), o.on("popoverClose popoverBeforeDestroy", function() { e.off("resize", g) }) }), o.on("popoverOpened", function() {
                        (o.params.closeByOutsideClick || o.params.closeByBackdropClick) && e.on("click", b) }), o.on("popoverClose", function() {
                        (o.params.closeByOutsideClick || o.params.closeByBackdropClick) && e.off("click", b) }), c[0].f7Modal = o, a = o, m()(r, a) } return b()(t, e), x()(t, [{ key: "resize", value: function() { var e = this.app,
                            t = this.$el,
                            n = this.$targetEl,
                            a = this.$angleEl,
                            i = this.params,
                            r = i.targetX,
                            s = i.targetY;
                        t.css({ left: "", top: "" }); var o = [t.width(), t.height()],
                            l = o[0],
                            c = o[1],
                            d = 0,
                            u = void 0,
                            p = void 0; "ios" === e.theme ? (a.removeClass("on-left on-right on-top on-bottom").css({ left: "", top: "" }), d = a.width() / 2) : t.removeClass("popover-on-left popover-on-right popover-on-top popover-on-bottom").css({ left: "", top: "" }); var h = void 0,
                            f = void 0,
                            v = void 0,
                            m = void 0; if (n && n.length > 0) { h = n.outerWidth(), f = n.outerHeight(); var g = n.offset();
                            v = g.left - e.left, m = g.top - e.top; var b = n.parents(".page");
                            b.length > 0 && (m -= b[0].scrollTop) } else void 0 !== r && "undefined" !== s && (v = r, m = s, h = this.params.targetWidth || 0, f = this.params.targetHeight || 0); var y = 0,
                            w = 0,
                            C = 0,
                            x = "md" === e.theme ? "bottom" : "top"; "md" === e.theme ? (c < e.height - m - f ? (x = "bottom", w = m) : c < m ? (w = m - c + f, x = "top") : (x = "bottom", w = m), w <= 0 ? w = 8 : w + c >= e.height && (w = e.height - c - 8), (y = v + h - l - 8) + l >= e.width - 8 && (y = v + h - l - 8), y < 8 && (y = 8), "top" === x && t.addClass("popover-on-top"), "bottom" === x && t.addClass("popover-on-bottom")) : (c + d < m ? w = m - c - d : c + d < e.height - m - f ? (x = "bottom", w = m + f + d) : (x = "middle", C = w = f / 2 + m - c / 2, w <= 0 ? w = 5 : w + c >= e.height && (w = e.height - c - 5), C -= w), "top" === x || "bottom" === x ? (C = y = h / 2 + v - l / 2, y < 5 && (y = 5), y + l > e.width && (y = e.width - l - 5), y < 0 && (y = 0), "top" === x && a.addClass("on-bottom"), "bottom" === x && a.addClass("on-top"), u = l / 2 - d + (C -= y), u = Math.max(Math.min(u, l - 2 * d - 13), 13), a.css({ left: u + "px" })) : "middle" === x && (y = v - l - d, a.addClass("on-right"), (y < 5 || y + l > e.width) && (y < 5 && (y = v + h + d), y + l > e.width && (y = e.width - l - 5), a.removeClass("on-right").addClass("on-left")), p = c / 2 - d + C, p = Math.max(Math.min(p, c - 2 * d - 13), 13), a.css({ top: p + "px" }))), t.css({ top: w + "px", left: y + "px" }) } }]), t }(gt),
            Mt = { name: "popover", params: { popover: { closeByBackdropClick: !0, closeByOutsideClick: !1, backdrop: !0 } }, static: { Popover: _t }, create: function() { var e = this;
                    e.popover = me.extend(xt({ app: e, constructor: _t, defaultSelector: ".popover.modal-in" }), { open: function(t, n, a) { var i = G(t),
                                r = i[0].f7Modal; return r || (r = new _t(e, { el: i, targetEl: n })), r.open(n, a) } }) }, clicks: { ".popover-open": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.popover.open(t.popover, e, t.animate) }, ".popover-close": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.popover.close(t.popover, t.animate) } } },
            Pt = function(e) {
                function t(e, n) { var a;
                    w()(this, t); var i = me.extend({ on: {} }, e.params.actions, n),
                        r = m()(this, (t.__proto__ || f()(t)).call(this, e, i)),
                        s = r;
                    s.params = i; var o = void 0;
                    s.params.buttons && (o = s.params.buttons, Array.isArray(o[0]) || (o = [o])), s.groups = o; var l, c, d = void 0; if (s.params.el ? d = G(s.params.el) : s.params.content ? d = G(s.params.content) : s.params.buttons && (s.params.convertToPopover && (s.popoverHtml = s.renderPopover()), s.actionsHtml = s.render()), d && d.length > 0 && d[0].f7Modal) return l = d[0].f7Modal, m()(r, l); if (d && 0 === d.length && !s.actionsHtml && !s.popoverHtml) return c = s.destroy(), m()(r, c); var u = void 0;
                    s.params.backdrop && 0 === (u = e.root.children(".actions-backdrop")).length && (u = G('<div class="actions-backdrop"></div>'), e.root.append(u)); var p = s.open,
                        h = s.close,
                        v = void 0;

                    function g(e) { var t = void 0,
                            n = void 0; if (G(this).hasClass("item-link") ? (t = G(this).parents("li").index(), n = G(this).parents(".list").index()) : (t = G(this).index(), n = G(this).parents(".actions-group").index()), void 0 !== o) { var a = o[n][t];
                            a.onClick && a.onClick(s, e), s.params.onClick && s.params.onClick(s, e), !1 !== a.close && s.close() } }

                    function b(e) { var t = e.target;
                        0 === G(t).closest(s.el).length && (s.params.closeByBackdropClick && s.params.backdrop && s.backdropEl && s.backdropEl === t ? s.close() : s.params.closeByOutsideClick && s.close()) } return s.open = function(t) { var n = !1,
                            a = s.params,
                            i = a.targetEl,
                            r = a.targetX,
                            o = a.targetY,
                            l = a.targetWidth,
                            c = a.targetHeight; return s.params.convertToPopover && (i || void 0 !== r && void 0 !== o) && (s.params.forceToPopover || e.device.ios && e.device.ipad || e.width >= 768) && (n = !0), n && s.popoverHtml ? ((v = e.popover.create({ content: s.popoverHtml, backdrop: s.params.backdrop, targetEl: i, targetX: r, targetY: o, targetWidth: l, targetHeight: c })).open(t), v.once("popoverOpened", function() { v.$el.find(".item-link").each(function(e, t) { G(t).on("click", g) }) }), v.once("popoverClosed", function() { v.$el.find(".item-link").each(function(e, t) { G(t).off("click", g) }), me.nextTick(function() { v.destroy(), v = void 0 }) })) : (s.$el = s.actionsHtml ? G(s.actionsHtml) : s.$el, s.$el[0].f7Modal = s, s.groups && (s.$el.find(".actions-button").each(function(e, t) { G(t).on("click", g) }), s.once("actionsClosed", function() { s.$el.find(".actions-button").each(function(e, t) { G(t).off("click", g) }) })), s.el = s.$el[0], p.call(s, t)), s }, s.close = function(e) { return v ? v.close(e) : h.call(s, e), s }, me.extend(s, { app: e, $el: d, el: d ? d[0] : void 0, $backdropEl: u, backdropEl: u && u[0], type: "actions" }), s.on("opened", function() {
                        (s.params.closeByBackdropClick || s.params.closeByOutsideClick) && e.on("click", b) }), s.on("close", function() {
                        (s.params.closeByBackdropClick || s.params.closeByOutsideClick) && e.off("click", b) }), d && (d[0].f7Modal = s), a = s, m()(r, a) } return b()(t, e), x()(t, [{ key: "render", value: function() { if (this.params.render) return this.params.render.call(this, this); var e = this.groups; return ('\n      <div class="actions-modal' + (this.params.grid ? " actions-grid" : "") + '">\n        ' + e.map(function(e) { return '<div class="actions-group">\n            ' + e.map(function(e) { var t = ["actions-" + (e.label ? "label" : "button")],
                                    n = e.color,
                                    a = e.bg,
                                    i = e.bold,
                                    r = e.disabled,
                                    s = e.label,
                                    o = e.text,
                                    l = e.icon; return n && t.push("color-" + n), a && t.push("bg-color-" + a), i && t.push("actions-button-bold"), r && t.push("disabled"), s ? '<div class="' + t.join(" ") + '">' + o + "</div>" : ('\n                <div class="' + t.join(" ") + '">\n                  ' + (l ? '<div class="actions-button-media">' + l + "</div>" : "") + '\n                  <div class="actions-button-text">' + o + "</div>\n                </div>").trim() }).join("") + "\n          </div>" }).join("") + "\n      </div>\n    ").trim() } }, { key: "renderPopover", value: function() { return this.params.renderPopover ? this.params.renderPopover.call(this, this) : ('\n      <div class="popover popover-from-actions">\n        <div class="popover-inner">\n          ' + this.groups.map(function(e) { return '\n            <div class="list">\n              <ul>\n                ' + e.map(function(e) { var t = [],
                                    n = e.color,
                                    a = e.bg,
                                    i = e.bold,
                                    r = e.disabled,
                                    s = e.label,
                                    o = e.text,
                                    l = e.icon; return n && t.push("color-" + n), a && t.push("bg-color-" + a), i && t.push("popover-from-actions-bold"), r && t.push("disabled"), s ? (t.push("popover-from-actions-label"), '<li class="' + t.join(" ") + '">' + o + "</li>") : (t.push("item-link"), l ? (t.push("item-content"), '\n                      <li>\n                        <a class="' + t.join(" ") + '">\n                          <div class="item-media">\n                            ' + l + '\n                          </div>\n                          <div class="item-inner">\n                            <div class="item-title">\n                              ' + o + "\n                            </div>\n                          </div>\n                        </a>\n                      </li>\n                    ") : (t.push("list-button"), '\n                    <li>\n                      <a href="#" class="list-button ' + t.join(" ") + '">' + o + "</a>\n                    </li>\n                  ")) }).join("") + "\n              </ul>\n            </div>\n          " }).join("") + "\n        </div>\n      </div>\n    ").trim() } }]), t }(gt),
            Ot = { name: "actions", params: { actions: { convertToPopover: !0, forceToPopover: !1, closeByBackdropClick: !0, render: null, renderPopover: null, backdrop: !0 } }, static: { Actions: Pt }, create: function() { this.actions = xt({ app: this, constructor: Pt, defaultSelector: ".actions-modal.modal-in" }) }, clicks: { ".actions-open": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.actions.open(t.actions, t.animate) }, ".actions-close": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.actions.close(t.actions, t.animate) } } },
            Bt = function(e) {
                function t(e, n) { var a;
                    w()(this, t); var i = me.extend({ on: {} }, e.params.sheet, n),
                        r = m()(this, (t.__proto__ || f()(t)).call(this, e, i)),
                        s = r;
                    s.params = i; var o, l, c = void 0; if ((c = s.params.el ? G(s.params.el) : G(s.params.content)) && c.length > 0 && c[0].f7Modal) return o = c[0].f7Modal, m()(r, o); if (0 === c.length) return l = s.destroy(), m()(r, l); var d = void 0;
                    s.params.backdrop && 0 === (d = e.root.children(".sheet-backdrop")).length && (d = G('<div class="sheet-backdrop"></div>'), e.root.append(d)); var u = void 0;

                    function p(e) { var t = e.target;
                        0 === G(t).closest(s.el).length && (s.params.closeByBackdropClick && s.params.backdrop && s.backdropEl && s.backdropEl === t ? s.close() : s.params.closeByOutsideClick && s.close()) } return s.on("sheetOpen", function() { s.params.scrollToEl && function() { var e = G(s.params.scrollToEl).eq(0); if (0 !== e.length && 0 !== (u = e.parents(".page-content")).length) { var t = parseInt(u.css("padding-top"), 10),
                                    n = parseInt(u.css("padding-bottom"), 10),
                                    a = u[0].offsetHeight - t - c.height(),
                                    i = u[0].scrollHeight - t - c.height(),
                                    r = u.scrollTop(),
                                    o = void 0,
                                    l = e.offset().top - t + e[0].offsetHeight; if (l > a) { var d = r + l - a;
                                    d + a > i && (o = d + a - i + n, a === i && (o = c.height()), u.css({ "padding-bottom": o + "px" })), u.scrollTop(d, 300) } } }() }), s.on("sheetOpened", function() {
                        (s.params.closeByOutsideClick || s.params.closeByBackdropClick) && e.on("click", p) }), s.on("sheetClose", function() { s.params.scrollToEl && u && u.length > 0 && u.css({ "padding-bottom": "" }), (s.params.closeByOutsideClick || s.params.closeByBackdropClick) && e.off("click", p) }), me.extend(s, { app: e, $el: c, el: c[0], $backdropEl: d, backdropEl: d && d[0], type: "sheet" }), c[0].f7Modal = s, a = s, m()(r, a) } return b()(t, e), t }(gt),
            It = { name: "sheet", params: { sheet: { closeByBackdropClick: !0, closeByOutsideClick: !1 } }, static: { Sheet: Bt }, create: function() { this.passedParams.sheet && void 0 !== this.passedParams.sheet.backdrop || (this.params.sheet.backdrop = "md" === this.theme), this.sheet = me.extend({}, xt({ app: this, constructor: Bt, defaultSelector: ".sheet-modal.modal-in" })) }, clicks: { ".sheet-open": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        G(".sheet-modal.modal-in").length > 0 && t.sheet && G(t.sheet)[0] !== G(".sheet-modal.modal-in")[0] && this.sheet.close(".sheet-modal.modal-in"), this.sheet.open(t.sheet, t.animate) }, ".sheet-close": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.sheet.close(t.sheet, t.animate) } } },
            At = function(e) {
                function t(e, n) { var a;
                    w()(this, t); var i = me.extend({ on: {} }, e.params.toast, n),
                        r = m()(this, (t.__proto__ || f()(t)).call(this, e, i)),
                        s = r;
                    s.app = e, s.params = i; var o, l, c = s.params,
                        d = c.closeButton,
                        u = c.closeTimeout,
                        p = void 0; if (s.params.el) p = G(s.params.el);
                    else { var h = s.render();
                        p = G(h) } if (p && p.length > 0 && p[0].f7Modal) return o = p[0].f7Modal, m()(r, o); if (0 === p.length) return l = s.destroy(), m()(r, l);
                    me.extend(s, { $el: p, el: p[0], type: "toast" }), p[0].f7Modal = s, d && (p.find(".toast-button").on("click", function() { s.emit("local::closeButtonClick toastCloseButtonClick", s), s.close() }), s.on("beforeDestroy", function() { p.find(".toast-button").off("click") })); var v = void 0; return s.on("open", function() { G(".toast.modal-in").each(function(t, n) { var a = e.toast.get(n);
                            n !== s.el && a && a.close() }), u && (v = me.nextTick(function() { s.close() }, u)) }), s.on("close", function() { A.clearTimeout(v) }), s.params.destroyOnClose && s.once("closed", function() { setTimeout(function() { s.destroy() }, 0) }), a = s, m()(r, a) } return b()(t, e), x()(t, [{ key: "render", value: function() { var e = this.app; if (this.params.render) return this.params.render.call(this, this); var t = this.params,
                            n = t.position,
                            a = t.cssClass,
                            i = t.icon,
                            r = t.text,
                            s = t.closeButton,
                            o = t.closeButtonColor,
                            l = t.closeButtonText; return ('\n      <div class="toast toast-' + n + " " + (a || "") + " " + (i ? "toast-with-icon" : "") + '">\n        <div class="toast-content">\n          ' + (i ? '<div class="toast-icon">' + i + "</div>" : "") + '\n          <div class="toast-text">' + r + "</div>\n          " + (s && !i ? ('\n          <a class="toast-button ' + ("md" === e.theme ? "button" : "link") + " " + (o ? "color-" + o : "") + '">' + l + "</a>\n          ").trim() : "") + "\n        </div>\n      </div>\n    ").trim() } }]), t }(gt),
            Lt = { name: "toast", static: { Toast: At }, create: function() { var e = this;
                    e.toast = me.extend({}, xt({ app: e, constructor: At, defaultSelector: ".toast.modal-in" }), { show: function(t) { return me.extend(t, { destroyOnClose: !0 }), new At(e, t).open() } }) }, params: { toast: { icon: null, text: null, position: "bottom", closeButton: !1, closeButtonColor: null, closeButtonText: "Ok", closeTimeout: null, cssClass: null, render: null } } },
            Dt = { init: function(e) { if ("md" === this.theme) { var t = G(e);
                        0 === t.length || t.children(".preloader-inner").length > 0 || t.append(me.mdPreloaderContent) } }, visible: !1, show: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "white"; if (!Dt.visible) { var t = "md" !== this.theme ? "" : me.mdPreloaderContent;
                        G("html").addClass("with-modal-preloader"), this.root.append('\n      <div class="preloader-backdrop"></div>\n      <div class="preloader-modal">\n        <div class="preloader color-' + e + '">' + t + "</div>\n      </div>\n    "), Dt.visible = !0 } }, hide: function() { Dt.visible && (G("html").removeClass("with-modal-preloader"), this.root.find(".preloader-backdrop, .preloader-modal").remove(), Dt.visible = !1) } },
            Rt = { name: "preloader", create: function() { me.extend(this, { preloader: { init: Dt.init.bind(this), show: Dt.show.bind(this), hide: Dt.hide.bind(this) } }) }, on: { photoBrowserOpen: function(e) { var t = this; "md" === t.theme && e.$el.find(".preloader").each(function(e, n) { t.preloader.init(n) }) }, pageInit: function(e) { var t = this; "md" === t.theme && e.$el.find(".preloader").each(function(e, n) { t.preloader.init(n) }) } } },
            zt = { set: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var a = s()(t, 3),
                        i = a[0],
                        r = a[1],
                        o = a[2]; if ("number" == typeof t[0]) { var l = s()(t, 2);
                        r = l[0], o = l[1], i = this.root } if (void 0 === r || null === r) return i;
                    r || (r = 0); var c = G(i || this.root); if (0 === c.length) return i; var d = Math.min(Math.max(r, 0), 100),
                        u = void 0; if (0 === (u = c.hasClass("progressbar") ? c.eq(0) : c.children(".progressbar")).length || u.hasClass("progressbar-infinite")) return u; var p = u.children("span"); return 0 === p.length && (p = G("<span></span>"), u.append(p)), p.transition(void 0 !== o ? o : "").transform("translate3d(" + (-100 + d) + "%,0,0)"), u[0] }, show: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var a = s()(t, 3),
                        i = a[0],
                        r = a[1],
                        o = a[2],
                        l = "determined"; if (2 === t.length)
                        if ("string" != typeof t[0] && "object" !== S()(t[0]) || "string" != typeof t[1]) { if ("number" == typeof t[0] && "string" == typeof t[1]) { var c = s()(t, 2);
                                r = c[0], o = c[1], i = this.root } } else { var d = s()(t, 3);
                            i = d[0], o = d[1], r = d[2], l = "infinite" } else 1 === t.length ? "number" == typeof t[0] ? (i = this.root, r = t[0]) : "string" == typeof t[0] && (l = "infinite", i = this.root, o = t[0]) : 0 === t.length && (l = "infinite", i = this.root); var u = G(i); if (0 !== u.length) { var p = void 0; return u.hasClass("progressbar") || u.hasClass("progressbar-infinite") ? p = u : 0 === (p = u.children(".progressbar:not(.progressbar-out), .progressbar-infinite:not(.progressbar-out)")).length && (p = G('\n          <span class="progressbar' + ("infinite" === l ? "-infinite" : "") + (o ? " color-" + o : "") + ' progressbar-in">\n            ' + ("infinite" === l ? "" : "<span></span>") + "\n          </span>"), u.append(p)), void 0 !== r && this.progressbar.set(p, r), p[0] } }, hide: function(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = G(e || this.root); if (0 !== n.length) { var a = void 0; return 0 === (a = n.hasClass("progressbar") || n.hasClass("progressbar-infinite") ? n : n.children(".progressbar, .progressbar-infinite")).length || !a.hasClass("progressbar-in") || a.hasClass("progressbar-out") ? a : (a.removeClass("progressbar-in").addClass("progressbar-out").animationEnd(function() { t && a.remove() }), a) } } },
            Nt = { name: "progressbar", create: function() { me.extend(this, { progressbar: { set: zt.set.bind(this), show: zt.show.bind(this), hide: zt.hide.bind(this) } }) }, on: { pageInit: function(e) { var t = this;
                        e.$el.find(".progressbar").each(function(e, n) { var a = G(n);
                            t.progressbar.set(a, a.attr("data-progress")) }) } } },
            Ft = { init: function() { var e = this,
                        t = void 0,
                        n = void 0,
                        a = void 0,
                        i = void 0,
                        r = void 0,
                        s = void 0,
                        o = void 0,
                        l = void 0,
                        c = void 0,
                        d = void 0,
                        u = void 0,
                        p = void 0,
                        h = void 0,
                        f = void 0,
                        v = void 0,
                        m = void 0,
                        g = void 0,
                        b = void 0,
                        y = void 0,
                        w = void 0; var C = !!e.support.passiveListener && { passive: !1, capture: !1 };
                    G(I).on(e.touchEvents.start, ".list.sortable .sortable-handler", function(i) { n = !1, t = !0, a = "touchstart" === i.type ? i.targetTouches[0].pageY : i.pageY, r = G(this).parent("li"), h = r.index(), o = r.parents(".sortable"); var l = r.parents(".list-group");
                        l.length && l.parents(o).length && (o = l), s = o.children("ul").children("li"), e.panel && (e.panel.allowOpen = !1), e.swipeout && (e.swipeout.allow = !1) }, C), e.on("touchmove:active", function(e) { if (t && r) { var h = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY; if (!n) { f = r.parents(".page"), v = r.parents(".page-content"); var C = parseInt(v.css("padding-top"), 10),
                                    x = parseInt(v.css("padding-bottom"), 10);
                                w = v[0].scrollTop, g = f.offset().top + C, m = f.height() - C - x, r.addClass("sorting"), o.addClass("sortable-sorting"), b = r[0].offsetTop, c = r[0].offsetTop, d = r.parent().height() - b - r.height(), l = r[0].offsetHeight, y = r.offset().top } n = !0, e.preventDefault(), e.f7PreventSwipePanel = !0, i = h - a; var k = v[0].scrollTop - w,
                                E = Math.min(Math.max(i + k, -c), d);
                            r.transform("translate3d(0," + E + "px,0)"); var $ = !0;
                            i + k + 44 < -c && ($ = !1), i + k - 44 > d && ($ = !1), p = void 0, u = void 0; var S = void 0;
                            $ && (y + i + l + 44 > g + m && (S = y + i + l + 44 - (g + m)), y + i < g + 44 && (S = y + i - g - 44), S && (v[0].scrollTop += S)), s.each(function(e, t) { var n = G(t); if (n[0] !== r[0]) { var a = n[0].offsetTop,
                                        i = n.height(),
                                        s = b + E;
                                    s >= a - i / 2 && r.index() < n.index() ? (n.transform("translate3d(0, " + -l + "px,0)"), u = n, p = void 0) : s <= a + i / 2 && r.index() > n.index() ? (n.transform("translate3d(0, " + l + "px,0)"), u = void 0, p || (p = n)) : n.transform("translate3d(0, 0%,0)") } }) } }), e.on("touchend:passive", function() { if (!t || !n) return n = !1, void((t = !1) && !n && (e.panel && (e.panel.allowOpen = !0), e.swipeout && (e.swipeout.allow = !0)));
                        e.panel && (e.panel.allowOpen = !0), e.swipeout && (e.swipeout.allow = !0), s.transform(""), r.removeClass("sorting"), o.removeClass("sortable-sorting"); var a = void 0,
                            i = void 0,
                            l = void 0;
                        u && r.insertAfter(u), p && r.insertBefore(p), r.trigger("sortable:sort", { from: h, to: r.index() }), e.emit("sortableSort", r[0], { from: h, to: r.index() }), (u || p) && o.hasClass("virtual-list") && (a = o[0].f7VirtualList, i = r[0].f7VirtualListIndex, l = p ? p[0].f7VirtualListIndex : u[0].f7VirtualListIndex, a && a.moveItem(i, l)), p = void 0, u = void 0, t = !1, n = !1 }) }, enable: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".list.sortable",
                        t = G(e);
                    0 !== t.length && (t.addClass("sortable-enabled"), t.trigger("sortable:enable"), this.emit("sortableEnable", t[0])) }, disable: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".list.sortable",
                        t = G(e);
                    0 !== t.length && (t.removeClass("sortable-enabled"), t.trigger("sortable:disable"), this.emit("sortableDisable", t[0])) }, toggle: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".list.sortable",
                        t = G(e);
                    0 !== t.length && (t.hasClass("sortable-enabled") ? this.sortable.disable(t) : this.sortable.enable(t)) } },
            Ht = { name: "sortable", params: { sortable: !0 }, create: function() { me.extend(this, { sortable: { init: Ft.init.bind(this), enable: Ft.enable.bind(this), disable: Ft.disable.bind(this), toggle: Ft.toggle.bind(this) } }) }, on: { init: function() { this.params.sortable && this.sortable.init() } }, clicks: { ".sortable-enable": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.sortable.enable(t.sortable) }, ".sortable-disable": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.sortable.disable(t.sortable) }, ".sortable-toggle": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.sortable.toggle(t.sortable) } } },
            jt = { init: function() { var e = this,
                        t = {},
                        n = void 0,
                        a = void 0,
                        i = void 0,
                        r = void 0,
                        s = void 0,
                        o = void 0,
                        l = void 0,
                        c = void 0,
                        d = void 0,
                        u = void 0,
                        p = void 0,
                        h = void 0,
                        f = void 0,
                        v = void 0,
                        m = void 0,
                        g = void 0,
                        b = void 0,
                        y = void 0,
                        w = void 0,
                        C = void 0,
                        x = void 0; var k = !!e.support.passiveListener && { passive: !0 };
                    e.on("touchstart", function(t) { if (jt.el) { var n = G(t.target);
                            G(jt.el).is(n[0]) || n.parents(".swipeout").is(jt.el) || n.hasClass("modal-in") || (n.attr("class") || "").indexOf("-backdrop") > 0 || n.hasClass("actions-modal") || n.parents(".actions-modal.modal-in, .dialog.modal-in").length > 0 || e.swipeout.close(jt.el) } }), G(I).on(e.touchEvents.start, "li.swipeout", function(e) { jt.allow && (a = !1, n = !0, i = void 0, t.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, t.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, r = (new Date).getTime(), o = G(this)) }, k), e.on("touchmove:active", function(r) { if (n) { var k = "touchmove" === r.type ? r.targetTouches[0].pageX : r.pageX,
                                E = "touchmove" === r.type ? r.targetTouches[0].pageY : r.pageY; if (void 0 === i && (i = !!(i || Math.abs(E - t.y) > Math.abs(k - t.x))), i) n = !1;
                            else { if (!a) { if (G(".list.sortable-opened").length > 0) return;
                                    l = o.find(".swipeout-content"), c = o.find(".swipeout-actions-right"), d = o.find(".swipeout-actions-left"), u = null, p = null, m = null, g = null, w = null, y = null, d.length > 0 && (u = d.outerWidth(), m = d.children("a"), y = d.find(".swipeout-overswipe")), c.length > 0 && (p = c.outerWidth(), g = c.children("a"), w = c.find(".swipeout-overswipe")), (f = o.hasClass("swipeout-opened")) && (v = o.find(".swipeout-actions-left.swipeout-actions-opened").length > 0 ? "left" : "right"), o.removeClass("swipeout-transitioning"), e.params.swipeout.noFollow || (o.find(".swipeout-actions-opened").removeClass("swipeout-actions-opened"), o.removeClass("swipeout-opened")) } if (a = !0, r.preventDefault(), s = k - t.x, h = s, f && ("right" === v ? h -= p : h += u), h > 0 && 0 === d.length || h < 0 && 0 === c.length) { if (!f) return n = !1, a = !1, l.transform(""), g && g.length > 0 && g.transform(""), void(m && m.length > 0 && m.transform(""));
                                    h = 0 } h < 0 ? b = "to-left" : h > 0 ? b = "to-right" : b || (b = "to-left"); var $ = void 0,
                                    S = void 0; if (r.f7PreventSwipePanel = !0, e.params.swipeout.noFollow) return f ? ("right" === v && s > 0 && e.swipeout.close(o), "left" === v && s < 0 && e.swipeout.close(o)) : (s < 0 && c.length > 0 && e.swipeout.open(o, "right"), s > 0 && d.length > 0 && e.swipeout.open(o, "left")), n = !1, void(a = !1); if (C = !1, x = !1, c.length > 0) { var T = h;
                                    S = T / p, T < -p && (T = -p - Math.pow(-T - p, .8), h = T, w.length > 0 && (x = !0)), "to-left" !== b && (S = 0, T = 0), g.each(function(e, t) { var n = G(t);
                                        void 0 === t.f7SwipeoutButtonOffset && (n[0].f7SwipeoutButtonOffset = t.offsetLeft), $ = t.f7SwipeoutButtonOffset, w.length > 0 && n.hasClass("swipeout-overswipe") && "to-left" === b && (n.css({ left: (x ? -$ : 0) + "px" }), x ? n.addClass("swipeout-overswipe-active") : n.removeClass("swipeout-overswipe-active")), n.transform("translate3d(" + (T - $ * (1 + Math.max(S, -1))) + "px,0,0)") }) } if (d.length > 0) { var _ = h;
                                    S = _ / u, _ > u && (_ = u + Math.pow(_ - u, .8), h = _, y.length > 0 && (C = !0)), "to-right" !== b && (_ = 0, S = 0), m.each(function(e, t) { var n = G(t);
                                        void 0 === t.f7SwipeoutButtonOffset && (n[0].f7SwipeoutButtonOffset = u - t.offsetLeft - t.offsetWidth), $ = t.f7SwipeoutButtonOffset, y.length > 0 && n.hasClass("swipeout-overswipe") && "to-right" === b && (n.css({ left: (C ? $ : 0) + "px" }), C ? n.addClass("swipeout-overswipe-active") : n.removeClass("swipeout-overswipe-active")), m.length > 1 && n.css("z-index", m.length - e), n.transform("translate3d(" + (_ + $ * (1 - Math.min(S, 1))) + "px,0,0)") }) } o.trigger("swipeout", S), e.emit("swipeout", o[0], S), l.transform("translate3d(" + h + "px,0,0)") } } }), e.on("touchend:passive", function() { if (!n || !a) return n = !1, void(a = !1);
                        n = !1, a = !1; var t = (new Date).getTime() - r,
                            i = "to-left" === b ? c : d,
                            v = "to-left" === b ? p : u,
                            y = void 0,
                            w = void 0,
                            k = void 0; if (y = t < 300 && (s < -10 && "to-left" === b || s > 10 && "to-right" === b) || t >= 300 && Math.abs(h) > v / 2 ? "open" : "close", t < 300 && (0 === Math.abs(h) && (y = "close"), Math.abs(h) === v && (y = "open")), "open" === y) { jt.el = o[0], o.trigger("swipeout:open"), e.emit("swipeoutOpen", o[0]), o.addClass("swipeout-opened swipeout-transitioning"); var E = "to-left" === b ? -v : v; if (l.transform("translate3d(" + E + "px,0,0)"), i.addClass("swipeout-actions-opened"), w = "to-left" === b ? g : m)
                                for (k = 0; k < w.length; k += 1) G(w[k]).transform("translate3d(" + E + "px,0,0)");
                            x && c.find(".swipeout-overswipe")[0].click(), C && d.find(".swipeout-overswipe")[0].click() } else o.trigger("swipeout:close"), e.emit("swipeoutClose", o[0]), jt.el = void 0, o.addClass("swipeout-transitioning").removeClass("swipeout-opened"), l.transform(""), i.removeClass("swipeout-actions-opened"); var $ = void 0;
                        m && m.length > 0 && m !== w && m.each(function(e, t) { var n = G(t);
                            void 0 === ($ = t.f7SwipeoutButtonOffset) && (n[0].f7SwipeoutButtonOffset = u - t.offsetLeft - t.offsetWidth), n.transform("translate3d(" + $ + "px,0,0)") }), g && g.length > 0 && g !== w && g.each(function(e, t) { var n = G(t);
                            void 0 === ($ = t.f7SwipeoutButtonOffset) && (n[0].f7SwipeoutButtonOffset = t.offsetLeft), n.transform("translate3d(" + -$ + "px,0,0)") }), l.transitionEnd(function() { f && "open" === y || !f && "close" === y || (o.trigger("open" === y ? "swipeout:opened" : "swipeout:closed"), e.emit("open" === y ? "swipeoutOpened" : "swipeoutClosed", o[0]), o.removeClass("swipeout-transitioning"), f && "close" === y && (c.length > 0 && g.transform(""), d.length > 0 && m.transform(""))) }) }) }, allow: !0, el: void 0, open: function() { for (var e = this, t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a]; var i = s()(n, 3),
                        r = i[0],
                        o = i[1],
                        l = i[2]; if ("function" == typeof n[1]) { var c = s()(n, 3);
                        r = c[0], l = c[1], o = c[2] } var d = G(r).eq(0); if (0 !== d.length && d.hasClass("swipeout") && !d.hasClass("swipeout-opened")) { o || (o = d.find(".swipeout-actions-right").length > 0 ? "right" : "left"); var u = d.find(".swipeout-actions-" + o),
                            p = d.find(".swipeout-content"); if (0 !== u.length) { d.trigger("swipeout:open").addClass("swipeout-opened").removeClass("swipeout-transitioning"), e.emit("swipeoutOpen", d[0]), u.addClass("swipeout-actions-opened"); var h = u.children("a"),
                                f = u.outerWidth(),
                                v = "right" === o ? -f : f;
                            h.length > 1 && h.each(function(e, t) { var n = G(t); "right" === o ? n.transform("translate3d(" + -t.offsetLeft + "px,0,0)") : n.css("z-index", h.length - e).transform("translate3d(" + (f - t.offsetWidth - t.offsetLeft) + "px,0,0)") }), d.addClass("swipeout-transitioning"), p.transitionEnd(function() { d.trigger("swipeout:opened"), e.emit("swipeoutOpened", d[0]), l && l.call(d[0]) }), me.nextFrame(function() { h.transform("translate3d(" + v + "px,0,0)"), p.transform("translate3d(" + v + "px,0,0)") }), jt.el = d[0] } } }, close: function(e, t) { var n = this,
                        a = G(e).eq(0); if (0 !== a.length && a.hasClass("swipeout-opened")) { var i = a.find(".swipeout-actions-opened").hasClass("swipeout-actions-right") ? "right" : "left",
                            r = a.find(".swipeout-actions-opened").removeClass("swipeout-actions-opened"),
                            s = r.children("a"),
                            o = r.outerWidth();
                        jt.allow = !1, a.trigger("swipeout:close"), n.emit("swipeoutClose", a[0]), a.removeClass("swipeout-opened").addClass("swipeout-transitioning"); var l = void 0;
                        a.find(".swipeout-content").transform("").transitionEnd(c), l = setTimeout(c, 500), s.each(function(e, t) { var n = G(t); "right" === i ? n.transform("translate3d(" + -t.offsetLeft + "px,0,0)") : n.transform("translate3d(" + (o - t.offsetWidth - t.offsetLeft) + "px,0,0)"), n.css({ left: "0px" }).removeClass("swipeout-overswipe-active") }), jt.el && jt.el === a[0] && (jt.el = void 0) }

                    function c() { jt.allow = !0, a.hasClass("swipeout-opened") || (a.removeClass("swipeout-transitioning"), s.transform(""), a.trigger("swipeout:closed"), n.emit("swipeoutClosed", a[0]), t && t.call(a[0]), l && clearTimeout(l)) } }, delete: function(e, t) { var n = this,
                        a = G(e).eq(0);
                    0 !== a.length && (jt.el = void 0, a.trigger("swipeout:delete"), n.emit("swipeoutDelete", a[0]), a.css({ height: a.outerHeight() + "px" }), a.transitionEnd(function() { if (a.trigger("swipeout:deleted"), n.emit("swipeoutDeleted", a[0]), t && t.call(a[0]), a.parents(".virtual-list").length > 0) { var e = a.parents(".virtual-list")[0].f7VirtualList,
                                i = a[0].f7VirtualListIndex;
                            e && void 0 !== i && e.deleteItem(i) } else n.params.swipeout.removeElements ? n.params.swipeout.removeElementsWithTimeout ? setTimeout(function() { a.remove() }, n.params.swipeout.removeElementsTimeout) : a.remove() : a.removeClass("swipeout-deleting swipeout-transitioning") }), a[0]._clientLeft = a[0].clientLeft, a.addClass("swipeout-deleting swipeout-transitioning").css({ height: "0px" }).find(".swipeout-content").transform("translate3d(-100%,0,0)")) } },
            Vt = { name: "swipeout", params: { swipeout: { actionsNoFold: !1, noFollow: !1, removeElements: !0, removeElementsWithTimeout: !1, removeElementsTimeout: 0 } }, create: function() { me.extend(this, { swipeout: { init: jt.init.bind(this), open: jt.open.bind(this), close: jt.close.bind(this), delete: jt.delete.bind(this) } }), Object.defineProperty(this.swipeout, "el", { enumerable: !0, configurable: !0, get: function() { return jt.el }, set: function(e) { jt.el = e } }), Object.defineProperty(this.swipeout, "allow", { enumerable: !0, configurable: !0, get: function() { return jt.allow }, set: function(e) { jt.allow = e } }) }, clicks: { ".swipeout-open": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.swipeout.open(t.swipeout, t.side) }, ".swipeout-close": function(e) { var t = e.closest(".swipeout");
                        0 !== t.length && this.swipeout.close(t) }, ".swipeout-delete": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = this,
                            a = e.closest(".swipeout"); if (0 !== a.length) { var i = t.confirm,
                                r = t.confirmTitle;
                            t.confirm ? n.dialog.confirm(i, r, function() { n.swipeout.delete(a) }) : n.swipeout.delete(a) } } }, on: { init: function() { this.params.swipeout && this.swipeout.init() } } },
            qt = { toggleClicked: function(e) { var t = e.closest(".accordion-item").eq(0);
                    t.length || (t = e.parents("li").eq(0)), e.parents("li").length > 1 && e.parents("li")[0] !== t[0] || this.accordion.toggle(t) }, open: function(e) { var t = this,
                        n = G(e),
                        a = n.parents(".accordion-list").eq(0),
                        i = n.children(".accordion-item-content"); if (0 === i.length && (i = n.find(".accordion-item-content")), 0 !== i.length) { var r = a.length > 0 && n.parent().children(".accordion-item-opened");
                        r.length > 0 && t.accordion.close(r), i.transitionEnd(function() { n.hasClass("accordion-item-opened") ? (i.transition(0), i.css("height", "auto"), i._clientLeft = i[0].clientLeft, i.transition(""), n.trigger("accordion:opened"), t.emit("accordionOpened", n[0])) : (i.css("height", ""), n.trigger("accordion:closed"), t.emit("accordionClosed", n[0])) }), i.css("height", i[0].scrollHeight + "px"), n.trigger("accordion:open"), n.addClass("accordion-item-opened"), t.emit("accordionOpen", n[0]) } }, close: function(e) { var t = this,
                        n = G(e),
                        a = n.children(".accordion-item-content");
                    0 === a.length && (a = n.find(".accordion-item-content")), n.removeClass("accordion-item-opened"), a.transition(0), a.css("height", a[0].scrollHeight + "px"), a._clientLeft = a[0].clientLeft, a.transition(""), a.transitionEnd(function() { n.hasClass("accordion-item-opened") ? (a.transition(0), a.css("height", "auto"), a._clientLeft = a[0].clientLeft, a.transition(""), n.trigger("accordion:opened"), t.emit("accordionOpened", n[0])) : (a.css("height", ""), n.trigger("accordion:closed"), t.emit("accordionClosed", n[0])) }), me.nextFrame(function() { a.transition(""), a.css("height", ""), n.trigger("accordion:close"), t.emit("accordionClose") }) }, toggle: function(e) { var t = G(e);
                    0 !== t.length && (t.hasClass("accordion-item-opened") ? this.accordion.close(e) : this.accordion.open(e)) } },
            Wt = { name: "accordion", create: function() { me.extend(this, { accordion: { open: qt.open.bind(this), close: qt.close.bind(this), toggle: qt.toggle.bind(this) } }) }, clicks: { ".accordion-item .item-link, .accordion-item-toggle, .links-list.accordion-list > ul > li > a": function(e) { qt.toggleClicked.call(this, e) } } },
            Yt = function(e) {
                function t(e) { var n, a, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    w()(this, t); var r = m()(this, (t.__proto__ || f()(t)).call(this, i, [e])),
                        s = r,
                        o = { cols: 1, height: "md" === e.theme ? 48 : 44, cache: !0, dynamicHeightBufferSize: 1, showFilteredItemsOnly: !1, renderExternal: void 0, setListHeight: !0, searchByItem: void 0, searchAll: void 0, itemTemplate: void 0, ul: null, createUl: !0, renderItem: function(e) { return ('\n          <li>\n            <div class="item-content">\n              <div class="item-inner">\n                <div class="item-title">' + e + "</div>\n              </div>\n            </div>\n          </li>\n        ").trim() }, on: {} }; if (s.useModulesParams(o), s.params = me.extend(o, i), void 0 !== s.params.height && s.params.height || (s.params.height = "md" === e.theme ? 48 : 44), s.$el = G(i.el), s.el = s.$el[0], 0 === s.$el.length) return n = void 0, m()(r, n);
                    s.$el[0].f7VirtualList = s, s.items = s.params.items, s.params.showFilteredItemsOnly && (s.filteredItems = []), s.params.itemTemplate ? "string" == typeof s.params.itemTemplate ? s.renderItem = X.a.compile(s.params.itemTemplate) : "function" == typeof s.params.itemTemplate && (s.renderItem = s.params.itemTemplate) : s.params.renderItem && (s.renderItem = s.params.renderItem), s.$pageContentEl = s.$el.parents(".page-content"), s.pageContentEl = s.$pageContentEl[0], void 0 !== s.params.updatableScroll ? s.updatableScroll = s.params.updatableScroll : (s.updatableScroll = !0, ge.ios && ge.osVersion.split(".")[0] < 8 && (s.updatableScroll = !1)); var l = s.params.ul;
                    s.$ul = l ? G(s.params.ul) : s.$el.children("ul"), 0 === s.$ul.length && s.params.createUl && (s.$el.append("<ul></ul>"), s.$ul = s.$el.children("ul")), s.ul = s.$ul[0]; var c = void 0;
                    c = s.ul || s.params.createUl ? s.$ul : s.$el, me.extend(s, { $itemsWrapEl: c, itemsWrapEl: c[0], domCache: {}, displayDomCache: {}, tempDomElement: I.createElement("ul"), lastRepaintY: null, fragment: I.createDocumentFragment(), pageHeight: void 0, rowsPerScreen: void 0, rowsBefore: void 0, rowsAfter: void 0, rowsToRender: void 0, maxBufferHeight: 0, listHeight: void 0, dynamicHeight: "function" == typeof s.params.height }), s.useModules(); var d = s.handleScroll.bind(s),
                        u = s.handleResize.bind(s),
                        p = void 0,
                        h = void 0,
                        v = void 0,
                        g = void 0; return s.attachEvents = function() { p = s.$el.parents(".page").eq(0), h = s.$el.parents(".tab").eq(0), v = s.$el.parents(".panel").eq(0), g = s.$el.parents(".popup").eq(0), s.$pageContentEl.on("scroll", d), p && p.on("page:reinit", u), h && h.on("tab:show", u), v && v.on("panel:open", u), g && g.on("popup:open", u), e.on("resize", u) }, s.detachEvents = function() { s.$pageContentEl.off("scroll", d), p && p.off("page:reinit", u), h && h.off("tab:show", u), v && v.off("panel:open", u), g && g.off("popup:open", u), e.off("resize", u) }, s.init(), a = s, m()(r, a) } return b()(t, e), x()(t, [{ key: "setListSize", value: function() { var e = this,
                            t = e.filteredItems || e.items; if (e.pageHeight = e.$pageContentEl[0].offsetHeight, e.dynamicHeight) { e.listHeight = 0, e.heights = []; for (var n = 0; n < t.length; n += 1) { var a = e.params.height(t[n]);
                                e.listHeight += a, e.heights.push(a) } } else e.listHeight = Math.ceil(t.length / e.params.cols) * e.params.height, e.rowsPerScreen = Math.ceil(e.pageHeight / e.params.height), e.rowsBefore = e.params.rowsBefore || 2 * e.rowsPerScreen, e.rowsAfter = e.params.rowsAfter || e.rowsPerScreen, e.rowsToRender = e.rowsPerScreen + e.rowsBefore + e.rowsAfter, e.maxBufferHeight = e.rowsBefore / 2 * e.params.height;
                        (e.updatableScroll || e.params.setListHeight) && e.$itemsWrapEl.css({ height: e.listHeight + "px" }) } }, { key: "render", value: function(e, t) { var n = this;
                        e && (n.lastRepaintY = null); var a = -(n.$el[0].getBoundingClientRect().top - n.$pageContentEl[0].getBoundingClientRect().top); if (void 0 !== t && (a = t), null === n.lastRepaintY || Math.abs(a - n.lastRepaintY) > n.maxBufferHeight || !n.updatableScroll && n.$pageContentEl[0].scrollTop + n.pageHeight >= n.$pageContentEl[0].scrollHeight) { n.lastRepaintY = a; var i = n.filteredItems || n.items,
                                r = void 0,
                                s = void 0,
                                o = 0,
                                l = 0; if (n.dynamicHeight) { var c = 0,
                                    d = void 0;
                                n.maxBufferHeight = n.pageHeight; for (var u = 0; u < n.heights.length; u += 1) d = n.heights[u], void 0 === r && (c + d >= a - 2 * n.pageHeight * n.params.dynamicHeightBufferSize ? r = u : o += d), void 0 === s && ((c + d >= a + 2 * n.pageHeight * n.params.dynamicHeightBufferSize || u === n.heights.length - 1) && (s = u + 1), l += d), c += d;
                                s = Math.min(s, i.length) } else(r = (parseInt(a / n.params.height, 10) - n.rowsBefore) * n.params.cols) < 0 && (r = 0), s = Math.min(r + n.rowsToRender * n.params.cols, i.length); var p = void 0,
                                h = [];
                            n.reachEnd = !1; var f = void 0; for (f = r; f < s; f += 1) { var v = void 0,
                                    m = n.items.indexOf(i[f]);
                                f === r && (n.currentFromIndex = m), f === s - 1 && (n.currentToIndex = m), n.filteredItems ? n.items[m] === n.filteredItems[n.filteredItems.length - 1] && (n.reachEnd = !0) : m === n.items.length - 1 && (n.reachEnd = !0), n.params.renderExternal ? h.push(i[f]) : n.domCache[m] ? (v = n.domCache[m]).f7VirtualListIndex = m : (n.renderItem ? n.tempDomElement.innerHTML = n.renderItem(i[f], m).trim() : n.tempDomElement.innerHTML = i[f].toString().trim(), v = n.tempDomElement.childNodes[0], n.params.cache && (n.domCache[m] = v), v.f7VirtualListIndex = m), f === r && (p = n.dynamicHeight ? o : f * n.params.height / n.params.cols), n.params.renderExternal || (v.style.top = p + "px", n.emit("local::itemBeforeInsert vlItemBeforeInsert", n, v, i[f]), n.fragment.appendChild(v)) } n.updatableScroll || (n.dynamicHeight ? n.itemsWrapEl.style.height = l + "px" : n.itemsWrapEl.style.height = f * n.params.height / n.params.cols + "px"), n.params.renderExternal ? i && 0 === i.length && (n.reachEnd = !0) : (n.emit("local::beforeClear vlBeforeClear", n, n.fragment), n.itemsWrapEl.innerHTML = "", n.emit("local::itemsBeforeInsert vlItemsBeforeInsert", n, n.fragment), i && 0 === i.length ? (n.reachEnd = !0, n.params.emptyTemplate && (n.itemsWrapEl.innerHTML = n.params.emptyTemplate)) : n.itemsWrapEl.appendChild(n.fragment), n.emit("local::itemsAfterInsert vlItemsAfterInsert", n, n.fragment)), void 0 !== t && e && n.$pageContentEl.scrollTop(t, 0), n.params.renderExternal && n.params.renderExternal(n, { fromIndex: r, toIndex: s, listHeight: n.listHeight, topPosition: p, items: h }) } } }, { key: "filterItems", value: function(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = this;
                        n.filteredItems = []; for (var a = 0; a < e.length; a += 1) n.filteredItems.push(n.items[e[a]]);
                        t && (n.$pageContentEl[0].scrollTop = 0), n.update() } }, { key: "resetFilter", value: function() { var e = this;
                        e.params.showFilteredItemsOnly ? e.filteredItems = [] : (e.filteredItems = null, delete e.filteredItems), e.update() } }, { key: "scrollToItem", value: function(e) { var t = this; if (e > t.items.length) return !1; var n = 0; if (t.dynamicHeight)
                            for (var a = 0; a < e; a += 1) n += t.heights[a];
                        else n = e * t.params.height; var i = t.$el[0].offsetTop; return t.render(!0, i + n - parseInt(t.$pageContentEl.css("padding-top"), 10)), !0 } }, { key: "handleScroll", value: function() { this.render() } }, { key: "isVisible", value: function() { return !!(this.el.offsetWidth || this.el.offsetHeight || this.el.getClientRects().length) } }, { key: "handleResize", value: function() { this.isVisible() && (this.setListSize(), this.render(!0)) } }, { key: "appendItems", value: function(e) { for (var t = 0; t < e.length; t += 1) this.items.push(e[t]);
                        this.update() } }, { key: "appendItem", value: function(e) { this.appendItems([e]) } }, { key: "replaceAllItems", value: function(e) { this.items = e, delete this.filteredItems, this.domCache = {}, this.update() } }, { key: "replaceItem", value: function(e, t) { this.items[e] = t, this.params.cache && delete this.domCache[e], this.update() } }, { key: "prependItems", value: function(e) { for (var t = this, n = e.length - 1; n >= 0; n -= 1) t.items.unshift(e[n]); if (t.params.cache) { var a = {};
                            P()(t.domCache).forEach(function(n) { a[parseInt(n, 10) + e.length] = t.domCache[n] }), t.domCache = a } t.update() } }, { key: "prependItem", value: function(e) { this.prependItems([e]) } }, { key: "moveItem", value: function(e, t) { var n = this,
                            a = e,
                            i = t; if (a !== i) { var r = n.items.splice(a, 1)[0]; if (i >= n.items.length ? (n.items.push(r), i = n.items.length - 1) : n.items.splice(i, 0, r), n.params.cache) { var s = {};
                                P()(n.domCache).forEach(function(e) { var t = parseInt(e, 10),
                                        r = a < i ? a : i,
                                        o = a < i ? i : a,
                                        l = a < i ? -1 : 1;
                                    (t < r || t > o) && (s[t] = n.domCache[t]), t === r && (s[o] = n.domCache[t]), t > r && t <= o && (s[t + l] = n.domCache[t]) }), n.domCache = s } n.update() } } }, { key: "insertItemBefore", value: function(e, t) { var n = this; if (0 !== e)
                            if (e >= n.items.length) n.appendItem(t);
                            else { if (n.items.splice(e, 0, t), n.params.cache) { var a = {};
                                    P()(n.domCache).forEach(function(t) { var i = parseInt(t, 10);
                                        i >= e && (a[i + 1] = n.domCache[i]) }), n.domCache = a } n.update() } else n.prependItem(t) } }, { key: "deleteItems", value: function(e) { for (var t = this, n = void 0, a = 0, i = function(i) { var r = e[i];
                                void 0 !== n && r > n && (a = -i), r += a, n = e[i]; var s = t.items.splice(r, 1)[0]; if (t.filteredItems && t.filteredItems.indexOf(s) >= 0 && t.filteredItems.splice(t.filteredItems.indexOf(s), 1), t.params.cache) { var o = {};
                                    P()(t.domCache).forEach(function(e) { var n = parseInt(e, 10);
                                        n === r ? delete t.domCache[r] : parseInt(e, 10) > r ? o[n - 1] = t.domCache[e] : o[n] = t.domCache[e] }), t.domCache = o } }, r = 0; r < e.length; r += 1) i(r);
                        t.update() } }, { key: "deleteAllItems", value: function() { var e = this;
                        e.items = [], delete e.filteredItems, e.params.cache && (e.domCache = {}), e.update() } }, { key: "deleteItem", value: function(e) { this.deleteItems([e]) } }, { key: "clearCache", value: function() { this.domCache = {} } }, { key: "update", value: function(e) { e && this.params.cache && (this.domCache = {}), this.setListSize(), this.render(!0) } }, { key: "init", value: function() { this.attachEvents(), this.setListSize(), this.render() } }, { key: "destroy", value: function() { var e = this;
                        e.detachEvents(), e.$el[0].f7VirtualList = null, delete e.$el[0].f7VirtualList, me.deleteProps(e), e = null } }]), t }(be),
            Ut = { name: "virtualList", static: { VirtualList: Yt }, create: function() { this.virtualList = Ct({ defaultSelector: ".virtual-list", constructor: Yt, app: this, domProp: "f7VirtualList" }) } },
            Gt = function(e) {
                function t(e) { var n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    w()(this, t); var i = m()(this, (t.__proto__ || f()(t)).call(this, a, [e])),
                        r = i,
                        s = { el: null, listEl: null, indexes: "auto", iosItemHeight: 14, mdItemHeight: 14, scrollList: !0, label: !1, renderItem: function(e, t) { return ("\n          <li>" + e + "</li>\n        ").trim() }, renderSkipPlaceholder: function() { return '<li class="list-index-skip-placeholder"></li>' }, on: {} };
                    r.useModulesParams(s), r.params = me.extend(s, a); var o, l, c = void 0,
                        d = void 0,
                        u = void 0,
                        p = void 0; if (!r.params.el) return o = r, m()(i, o); if (c = G(r.params.el), 0 === (p = c.find("ul")).length && (p = G("<ul></ul>"), c.append(p)), r.params.listEl && (d = G(r.params.listEl)), "auto" === r.params.indexes && !d) return l = r, m()(i, l);

                    function h() { var e = { index: r };
                        r.calcSize(), e !== r.height && r.render() }

                    function v(e) { var t = G(e.target).closest("li"); if (t.length) { var n = t.index(); if (r.skipRate > 0) { var a = n / (t.siblings("li").length - 1);
                                n = Math.round((r.indexes.length - 1) * a) } var i = r.indexes[n];
                            r.$el.trigger("listindex:click", i, n), r.emit("local::click listIndexClick", r, i, n), r.$el.trigger("listindex:select", i, n), r.emit("local::select listIndexSelect", r, i, n), r.$listEl && r.params.scrollList && r.scrollListToIndex(i, n) } } d ? u = d.parents(".page-content").eq(0) : 0 === (u = c.siblings(".page-content").eq(0)).length && (u = c.parents(".page").eq(0).find(".page-content").eq(0)), c[0].f7ListIndex = r, me.extend(r, { app: e, $el: c, el: c && c[0], $ul: p, ul: p && p[0], $listEl: d, listEl: d && d[0], $pageContentEl: u, pageContentEl: u && u[0], indexes: a.indexes, height: 0, skipRate: 0 }), r.useModules(); var g = {},
                        b = void 0,
                        y = void 0,
                        C = void 0,
                        x = void 0,
                        k = void 0,
                        E = null;

                    function $(e) { var t = p.children();
                        t.length && (C = t[0].getBoundingClientRect().top, x = t[t.length - 1].getBoundingClientRect().top + t[0].offsetHeight, g.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, g.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, b = !0, y = !1, E = null) }

                    function S(e) { if (b) {!y && r.params.label && (k = G('<span class="list-index-label"></span>'), c.append(k)), y = !0; var t = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY;
                            e.preventDefault(); var n = (t - C) / (x - C);
                            n = Math.min(Math.max(n, 0), 1); var a = Math.round((r.indexes.length - 1) * n),
                                i = r.indexes[a],
                                s = x - C,
                                o = (r.height - s) / 2 + (1 - n) * s;
                            a !== E && (r.params.label && k.html(i).transform("translateY(-" + o + "px)"), r.$listEl && r.params.scrollList && r.scrollListToIndex(i, a)), E = a, r.$el.trigger("listindex:select", r), r.emit("local::select listIndexSelect", r, i, a) } }

                    function T() { b && (b = !1, y = !1, r.params.label && (k && k.remove(), k = void 0)) } var _ = !!e.support.passiveListener && { passive: !0 }; return r.attachEvents = function() { c.parents(".tab").on("tab:show", h), c.parents(".page").on("page:reinit", h), c.parents(".panel").on("panel:open", h), c.parents(".sheet-modal, .actions-modal, .popup, .popover, .login-screen, .dialog, .toast").on("modal:open", h), e.on("resize", h), c.on("click", v), c.on(e.touchEvents.start, $, _), e.on("touchmove:active", S), e.on("touchend:passive", T) }, r.detachEvents = function() { c.parents(".tab").off("tab:show", h), c.parents(".page").off("page:reinit", h), c.parents(".panel").off("panel:open", h), c.parents(".sheet-modal, .actions-modal, .popup, .popover, .login-screen, .dialog, .toast").off("modal:open", h), e.off("resize", h), c.off("click", v), c.off(e.touchEvents.start, $, _), e.off("touchmove:active", S), e.off("touchend:passive", T) }, r.init(), n = r, m()(i, n) } return b()(t, e), x()(t, [{ key: "scrollListToIndex", value: function(e, t) { var n = this.$listEl,
                            a = this.$pageContentEl; if (!n || !a || 0 === a.length) return this; var i = void 0; if (n.find(".list-group-title, .item-divider").each(function(t, n) { if (!i) { var a = G(n);
                                    a.text() === e && (i = a) } }), !i || 0 === i.length) return this; var r = i.parent().offset().top,
                            s = parseInt(a.css("padding-top"), 10),
                            o = a[0].scrollTop,
                            l = i.offset().top; return r <= s ? a.scrollTop(r + o - s) : a.scrollTop(l + o - s), this } }, { key: "renderSkipPlaceholder", value: function() { return this.params.renderSkipPlaceholder.call(this) } }, { key: "renderItem", value: function(e, t) { return this.params.renderItem.call(this, e, t) } }, { key: "render", value: function() { var e = this,
                            t = e.$ul,
                            n = e.indexes,
                            a = e.skipRate,
                            i = void 0,
                            r = n.map(function(t, n) { if (n % a != 0 && a > 0) return i = !0, ""; var r = e.renderItem(t, n); return i && (r = e.renderSkipPlaceholder() + r), i = !1, r }).join(""); return t.html(r), e } }, { key: "calcSize", value: function() { var e = this.app,
                            t = this.params,
                            n = this.el,
                            a = this.indexes,
                            i = n.offsetHeight,
                            r = "ios" === e.theme ? t.iosItemHeight : t.mdItemHeight,
                            s = Math.floor(i / r),
                            o = a.length,
                            l = 0; return o > s && (l = Math.ceil((2 * o - 1) / s)), this.height = i, this.skipRate = l, this } }, { key: "calcIndexes", value: function() { var e = this; return "auto" === e.params.indexes ? (e.indexes = [], e.$listEl.find(".list-group-title, .item-divider").each(function(t, n) { var a = G(n).text();
                            e.indexes.indexOf(a) < 0 && e.indexes.push(a) })) : e.indexes = e.params.indexes, e } }, { key: "update", value: function() { return this.calcIndexes(), this.calcSize(), this.render(), this } }, { key: "init", value: function() { this.calcIndexes(), this.calcSize(), this.render(), this.attachEvents() } }, { key: "destroy", value: function() { var e = this;
                        e.$el.trigger("listindex:beforedestroy", e), e.emit("local::beforeDestroy listIndexBeforeDestroy", e), e.detachEvents(), e.$el[0].f7ListIndex = null, delete e.$el[0].f7ListIndex, me.deleteProps(e), e = null } }]), t }(be),
            Xt = { name: "listIndex", static: { ListIndex: Gt }, create: function() { this.listIndex = Ct({ defaultSelector: ".list-index", constructor: Gt, app: this, domProp: "f7ListIndex" }) }, on: { tabMounted: function(e) { var t = this;
                        G(e).find(".list-index-init").each(function(e, n) { var a = me.extend(G(n).dataset(), { el: n });
                            t.listIndex.create(a) }) }, tabBeforeRemove: function(e) { G(e).find(".list-index-init").each(function(e, t) { t.f7ListIndex && t.f7ListIndex.destroy() }) }, pageInit: function(e) { var t = this;
                        e.$el.find(".list-index-init").each(function(e, n) { var a = me.extend(G(n).dataset(), { el: n });
                            t.listIndex.create(a) }) }, pageBeforeRemove: function(e) { e.$el.find(".list-index-init").each(function(e, t) { t.f7ListIndex && t.f7ListIndex.destroy() }) } } },
            Kt = { show: function() { for (var e = this, t = void 0, n = void 0, a = void 0, i = void 0, r = arguments.length, o = Array(r), l = 0; l < r; l++) o[l] = arguments[l]; if (1 === o.length && o[0].constructor === Object) t = o[0].tabEl, n = o[0].tabLinkEl, a = o[0].animate, i = o[0].tabRoute;
                    else { var c = s()(o, 4); if (t = c[0], n = c[1], a = c[2], i = c[3], "boolean" == typeof o[1]) { var d = s()(o, 4); if (t = d[0], a = d[1], n = d[2], i = d[3], o.length > 2 && n.constructor === Object) { var u = s()(o, 4);
                                t = u[0], a = u[1], i = u[2], n = u[3] } } } void 0 === a && (a = !0); var p = G(t); if (i && p[0] && (p[0].f7TabRoute = i), 0 === p.length || p.hasClass("tab-active")) return { $newTabEl: p, newTabEl: p[0] }; var h = void 0;
                    n && (h = G(n)); var f = p.parent(".tabs"); if (0 === f.length) return { $newTabEl: p, newTabEl: p[0] };
                    e.swipeout && (e.swipeout.allowOpen = !0); var v = [];

                    function m() { v.forEach(function(e) { e() }) } var g = !1; if (f.parent().hasClass("tabs-animated-wrap")) { f.parent()[a ? "removeClass" : "addClass"]("not-animated"); var b = parseFloat(f.css("transition-duration").replace(",", "."));
                        a && b && (f.transitionEnd(m), g = !0); var y = 100 * (e.rtl ? p.index() : -p.index());
                        f.transform("translate3d(" + y + "%,0,0)") } if (f.parent().hasClass("tabs-swipeable-wrap") && e.swiper) { var w = f.parent()[0].swiper;
                        w && w.activeIndex !== p.index() && (g = !0, w.once("slideChangeTransitionEnd", function() { m() }).slideTo(p.index(), a ? void 0 : 0)) } var C = f.children(".tab-active"); if (C.removeClass("tab-active").trigger("tab:hide"), e.emit("tabHide", C[0]), p.addClass("tab-active").trigger("tab:show"), e.emit("tabShow", p[0]), !h && ((!(h = G("string" == typeof t ? '.tab-link[href="' + t + '"]' : '.tab-link[href="#' + p.attr("id") + '"]')) || h && 0 === h.length) && G("[data-tab]").each(function(e, t) { p.is(G(t).attr("data-tab")) && (h = G(t)) }), i && (!h || h && 0 === h.length) && 0 === (h = G('[data-route-tab-id="' + i.route.tab.id + '"]')).length && (h = G('.tab-link[href="' + i.url + '"]')), h.length > 1 && p.parents(".page").length && (h = h.filter(function(e, t) { return G(t).parents(".page")[0] === p.parents(".page")[0] }), "ios" === e.theme && 0 === h.length && i))) { var x = p.parents(".page"),
                            k = G(e.navbar.getElByPage(x));
                        0 === (h = k.find('[data-route-tab-id="' + i.route.tab.id + '"]')).length && (h = k.find('.tab-link[href="' + i.url + '"]')) } if (h.length > 0) { var E = void 0; if (C && C.length > 0) { var $ = C.attr("id");
                            $ && (!(E = G('.tab-link[href="#' + $ + '"]')) || E && 0 === E.length) && (E = G('.tab-link[data-route-tab-id="' + $ + '"]')), (!E || E && 0 === E.length) && G("[data-tab]").each(function(e, t) { C.is(G(t).attr("data-tab")) && (E = G(t)) }), (!E || E && 0 === E.length) && (E = h.siblings(".tab-link-active")) } else i && (E = h.siblings(".tab-link-active")); if (E && E.length > 1 && C && C.parents(".page").length && (E = E.filter(function(e, t) { return G(t).parents(".page")[0] === C.parents(".page")[0] })), E && E.length > 0 && E.removeClass("tab-link-active"), h && h.length > 0 && (h.addClass("tab-link-active"), "md" === e.theme && e.toolbar)) { var S = h.parents(".tabbar, .tabbar-labels");
                            S.length > 0 && e.toolbar.setHighlight(S) } } return { $newTabEl: p, newTabEl: p[0], $oldTabEl: C, oldTabEl: C[0], onTabsChanged: function(e) { v.push(e) }, animated: g } } },
            Jt = { name: "tabs", create: function() { me.extend(this, { tab: { show: Kt.show.bind(this) } }) }, clicks: { ".tab-link": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (e.attr("href") && 0 === e.attr("href").indexOf("#") || e.attr("data-tab")) && this.tab.show({ tabEl: t.tab || e.attr("href"), tabLinkEl: e, animate: t.animate }) } } }; var Qt = function(e) {
                function t(e) { var n, a, i, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    w()(this, t); var s = m()(this, (t.__proto__ || f()(t)).call(this, r, [e])),
                        o = s,
                        c = r.el,
                        d = G(c); if (0 === d.length) return n = o, m()(s, n); if (d[0].f7Panel) return a = d[0].f7Panel, m()(s, a);
                    d[0].f7Panel = o; var u = r.opened,
                        p = r.side,
                        h = r.effect;
                    void 0 === u && (u = d.hasClass("panel-active")), void 0 === p && (p = d.hasClass("panel-left") ? "left" : "right"), void 0 === h && (h = d.hasClass("panel-cover") ? "cover" : "reveal"), e.panel[p] || me.extend(e.panel, l()({}, p, o)); var v = G(".panel-backdrop"); return 0 === v.length && (v = G('<div class="panel-backdrop"></div>')).insertBefore(d), me.extend(o, { app: e, side: p, effect: h, $el: d, el: d[0], opened: u, $backdropEl: v, backdropEl: v[0] }), o.useModules(), o.init(), i = o, m()(s, i) } return b()(t, e), x()(t, [{ key: "init", value: function() { var e = this.app;
                        e.params.panel[this.side + "Breakpoint"] && this.initBreakpoints(), (e.params.panel.swipe === this.side || "both" === e.params.panel.swipe || e.params.panel.swipe && e.params.panel.swipe !== this.side && e.params.panel.swipeCloseOpposite) && this.initSwipePanel() } }, { key: "getViewEl", value: function() { var e = this.app; return e.root.children(".views").length > 0 ? e.root.children(".views")[0] : e.root.children(".view")[0] } }, { key: "setBreakpoint", value: function() { var e = this.app,
                            t = this.side,
                            n = this.$el,
                            a = G(this.getViewEl()),
                            i = e.params.panel[t + "Breakpoint"],
                            r = n.hasClass("panel-visible-by-breakpoint");
                        e.width >= i ? r || (G("html").removeClass("with-panel-" + t + "-reveal with-panel-" + t + "-cover with-panel"), n.css("display", "").addClass("panel-visible-by-breakpoint").removeClass("panel-active"), this.onOpen(), this.onOpened(), a.css(l()({}, "margin-" + t, n.width() + "px")), e.allowPanelOpen = !0, e.emit("local::breakpoint panelBreakpoint"), this.$el.trigger("panel:breakpoint", this)) : r && (n.css("display", "").removeClass("panel-visible-by-breakpoint panel-active"), this.onClose(), this.onClosed(), a.css(l()({}, "margin-" + t, "")), e.emit("local::breakpoint panelBreakpoint"), this.$el.trigger("panel:breakpoint", this)) } }, { key: "initBreakpoints", value: function() { var e = this,
                            t = e.app; return e.resizeHandler = function() { e.setBreakpoint() }, t.params.panel[e.side + "Breakpoint"] && t.on("resize", e.resizeHandler), e.setBreakpoint(), e } }, { key: "initSwipePanel", value: function() {! function(e) { var t = e.app;
                            me.extend(e, { swipeable: !0, swipeInitialized: !0 }); var n = t.params.panel,
                                a = e.$el,
                                i = e.$backdropEl,
                                r = e.side,
                                s = e.effect,
                                o = void 0,
                                l = void 0,
                                c = void 0,
                                d = void 0,
                                u = {},
                                p = void 0,
                                h = void 0,
                                f = void 0,
                                v = void 0,
                                m = void 0,
                                g = void 0,
                                b = void 0,
                                y = 0;

                            function w(i) { if (e.swipeable && t.panel.allowOpen && (n.swipe || n.swipeOnlyClose) && !l && !(G(".modal-in, .photo-browser-in").length > 0) && (o = t.panel["left" === r ? "right" : "left"] || {}, (e.opened || !o.opened) && (n.swipeCloseOpposite || n.swipeOnlyClose || !o.opened) && (!i.target || "input" !== i.target.nodeName.toLowerCase() || "range" !== i.target.type) && !(G(i.target).closest(".range-slider, .tabs-swipeable-wrap, .calendar-months, .no-swipe-panel").length > 0) && (u.x = "touchstart" === i.type ? i.targetTouches[0].pageX : i.pageX, u.y = "touchstart" === i.type ? i.targetTouches[0].pageY : i.pageY, (!n.swipeOnlyClose || e.opened) && ("both" === n.swipe || !n.swipeCloseOpposite || n.swipe === r || e.opened)))) { if (n.swipeActiveArea && !e.opened) { if ("left" === r && u.x > n.swipeActiveArea) return; if ("right" === r && u.x < t.width - n.swipeActiveArea) return } if (n.swipeCloseActiveAreaSide && e.opened) { if ("left" === r && u.x < a[0].offsetWidth - n.swipeCloseActiveAreaSide) return; if ("right" === r && u.x > t.width - a[0].offsetWidth + n.swipeCloseActiveAreaSide) return } y = 0, b = G(e.getViewEl()), c = !1, l = !0, d = void 0, p = me.now(), g = void 0 } }

                            function C(o) { if (l && !((y += 1) < 2))
                                    if (o.f7PreventSwipePanel || t.preventSwipePanelBySwipeBack || t.preventSwipePanel) l = !1;
                                    else { var w = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                                            C = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY; if (void 0 === d && (d = !!(d || Math.abs(C - u.y) > Math.abs(w - u.x))), d) l = !1;
                                        else { if (!g) { if (g = w > u.x ? "to-right" : "to-left", "both" === n.swipe && n.swipeActiveArea > 0 && !e.opened) { if ("left" === r && u.x > n.swipeActiveArea) return void(l = !1); if ("right" === r && u.x < t.width - n.swipeActiveArea) return void(l = !1) } if (a.hasClass("panel-visible-by-breakpoint")) return void(l = !1); if ("left" === r && "to-left" === g && !a.hasClass("panel-active") || "right" === r && "to-right" === g && !a.hasClass("panel-active")) return void(l = !1) } if (n.swipeNoFollow) return (new Date).getTime() - p < 300 && ("to-left" === g && ("right" === r && t.panel.open(r), "left" === r && a.hasClass("panel-active") && t.panel.close()), "to-right" === g && ("left" === r && t.panel.open(r), "right" === r && a.hasClass("panel-active") && t.panel.close())), l = !1, void(c = !1);
                                            c || (e.opened || (a.show(), i.show(), a.trigger("panel:swipeopen", e), e.emit("local::swipeOpen panelSwipeOpen", e)), m = a[0].offsetWidth, a.transition(0)), c = !0, o.preventDefault(); var x = e.opened ? 0 : -n.swipeThreshold; "right" === r && (x = -x), h = w - u.x + x, "right" === r ? "cover" === s ? ((f = h + (e.opened ? 0 : m)) < 0 && (f = 0), f > m && (f = m)) : ((f = h - (e.opened ? m : 0)) > 0 && (f = 0), f < -m && (f = -m)) : ((f = h + (e.opened ? m : 0)) < 0 && (f = 0), f > m && (f = m)), "reveal" === s ? (b.transform("translate3d(" + f + "px,0,0)").transition(0), i.transform("translate3d(" + f + "px,0,0)").transition(0), a.trigger("panel:swipe", e, Math.abs(f / m)), e.emit("local::swipe panelSwipe", e, Math.abs(f / m))) : ("left" === r && (f -= m), a.transform("translate3d(" + f + "px,0,0)").transition(0), i.transition(0), v = 1 - Math.abs(f / m), i.css({ opacity: v }), a.trigger("panel:swipe", e, Math.abs(f / m)), e.emit("local::swipe panelSwipe", e, Math.abs(f / m))) } } }

                            function x() { if (!l || !c) return l = !1, void(c = !1);
                                l = !1, c = !1; var t = (new Date).getTime() - p,
                                    o = void 0,
                                    d = 0 === f || Math.abs(f) === m,
                                    u = n.swipeThreshold || 0; if ("swap" == (o = e.opened ? "cover" === s ? 0 === f ? "reset" : t < 300 && Math.abs(f) > 0 ? "swap" : t >= 300 && Math.abs(f) < m / 2 ? "reset" : "swap" : f === -m ? "reset" : t < 300 && Math.abs(f) >= 0 || t >= 300 && Math.abs(f) <= m / 2 ? "left" === r && f === m ? "reset" : "swap" : "reset" : Math.abs(h) < u ? "reset" : "cover" === s ? 0 === f ? "swap" : t < 300 && Math.abs(f) > 0 ? "swap" : t >= 300 && Math.abs(f) < m / 2 ? "swap" : "reset" : 0 === f ? "reset" : t < 300 && Math.abs(f) > 0 || t >= 300 && Math.abs(f) >= m / 2 ? "swap" : "reset") && (e.opened ? e.close(!d) : e.open(!d)), "reset" === o && !e.opened)
                                    if (d) a.css({ display: "" });
                                    else { var v = "reveal" === s ? b : a;
                                        G("html").addClass("with-panel-transitioning"), v.transitionEnd(function() { a.hasClass("panel-active") || (a.css({ display: "" }), G("html").removeClass("with-panel-transitioning")) }) }
                                "reveal" === s && me.nextFrame(function() { b.transition(""), b.transform("") }), a.transition("").transform(""), i.css({ display: "" }).transform("").transition("").css("opacity", "") } t.on("touchstart:passive", w), t.on("touchmove:active", C), t.on("touchend:passive", x), e.on("panelDestroy", function() { t.off("touchstart:passive", w), t.off("touchmove:active", C), t.off("touchend:passive", x) }) }(this) } }, { key: "destroy", value: function() { var e = this,
                            t = e.app;
                        e.emit("local::beforeDestroy panelBeforeDestroy", e), e.$el.trigger("panel:beforedestroy", e), e.resizeHandler && t.off("resize", e.resizeHandler), e.$el.trigger("panel:destroy", e), e.emit("local::destroy panelDestroy"), delete t.panel[e.side], delete e.el.f7Panel, me.deleteProps(e), e = null } }, { key: "open", value: function() { var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            t = this,
                            n = t.app; if (!n.panel.allowOpen) return !1; var a = t.side,
                            i = t.effect,
                            r = t.$el,
                            s = t.$backdropEl; if (t.opened || r.hasClass("panel-visible-by-breakpoint") || r.hasClass("panel-active")) return !1;
                        n.panel.close("left" === a ? "right" : "left", e), n.panel.allowOpen = !1, r[e ? "removeClass" : "addClass"]("not-animated"), r.css({ display: "block" }).addClass("panel-active"), s[e ? "removeClass" : "addClass"]("not-animated"), s.show(), t._clientLeft = r[0].clientLeft, G("html").addClass("with-panel with-panel-" + a + "-" + i), t.onOpen(); var o = "reveal" === i ? r.nextAll(".view, .views").eq(0) : r; return e ? function e() { o.transitionEnd(function(n) { G(n.target).is(o) ? r.hasClass("panel-active") ? (t.onOpened(), s.css({ display: "" })) : (t.onClosed(), s.css({ display: "" })) : e() }) }() : (t.onOpened(), s.css({ display: "" })), !0 } }, { key: "close", value: function() { var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            t = this,
                            n = t.app,
                            a = t.side,
                            i = t.effect,
                            r = t.$el,
                            s = t.$backdropEl; if (!t.opened || r.hasClass("panel-visible-by-breakpoint") || !r.hasClass("panel-active")) return !1;
                        r[e ? "removeClass" : "addClass"]("not-animated"), r.removeClass("panel-active"), s[e ? "removeClass" : "addClass"]("not-animated"); var o = "reveal" === i ? r.nextAll(".view, .views").eq(0) : r; return t.onClose(), n.panel.allowOpen = !1, e ? (o.transitionEnd(function() { r.hasClass("panel-active") || (r.css({ display: "" }), G("html").removeClass("with-panel-transitioning"), t.onClosed()) }), G("html").removeClass("with-panel with-panel-" + a + "-" + i).addClass("with-panel-transitioning")) : (r.css({ display: "" }), r.removeClass("not-animated"), G("html").removeClass("with-panel with-panel-transitioning with-panel-" + a + "-" + i), t.onClosed()), !0 } }, { key: "onOpen", value: function() { this.opened = !0, this.$el.trigger("panel:open", this), this.emit("local::open panelOpen", this) } }, { key: "onOpened", value: function() { this.app.panel.allowOpen = !0, this.$el.trigger("panel:opened", this), this.emit("local::opened panelOpened", this) } }, { key: "onClose", value: function() { this.opened = !1, this.$el.addClass("panel-closing"), this.$el.trigger("panel:close", this), this.emit("local::close panelClose", this) } }, { key: "onClosed", value: function() { this.app.panel.allowOpen = !0, this.$el.removeClass("panel-closing"), this.$el.trigger("panel:closed", this), this.emit("local::closed panelClosed", this) } }]), t }(be),
            Zt = { name: "panel", params: { panel: { leftBreakpoint: 0, rightBreakpoint: 0, swipe: void 0, swipeActiveArea: 0, swipeCloseActiveAreaSide: 0, swipeCloseOpposite: !0, swipeOnlyClose: !1, swipeNoFollow: !1, swipeThreshold: 0, closeByBackdropClick: !0 } }, static: { Panel: Qt }, instance: { panel: { allowOpen: !0 } }, create: function() { var e = this;
                    me.extend(e.panel, { disableSwipe: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "both",
                                n = void 0,
                                a = []; "string" == typeof t ? "both" === t ? (n = "both", a = [e.panel.left, e.panel.right]) : (n = t, a.push(e.panel[n])) : a = [t], a.forEach(function(e) { e && me.extend(e, { swipeable: !1 }) }) }, enableSwipe: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "both",
                                n = [],
                                a = void 0; "string" == typeof t ? (a = t, "left" === e.params.panel.swipe && "right" === a || "right" === e.params.panel.swipe && "left" === a || "both" === a ? (a = "both", e.params.panel.swipe = a, n = [e.panel.left, e.panel.right]) : (e.params.panel.swipe = a, n.push(e.panel[a]))) : t && n.push(t), n.length && n.forEach(function(e) { e && (e.swipeInitialized ? me.extend(e, { swipeable: !0 }) : e.initSwipePanel()) }) }, create: function(t) { return new Qt(e, t) }, open: function(t, n) { var a = t; if (!a) { if (G(".panel").length > 1) return !1;
                                a = G(".panel").hasClass("panel-left") ? "left" : "right" } if (!a) return !1; if (e.panel[a]) return e.panel[a].open(n); var i = G(".panel-" + a); return i.length > 0 && e.panel.create({ el: i }).open(n) }, close: function(t, n) { var a = void 0,
                                i = void 0; return i ? a = G(".panel-" + (i = t)) : i = (a = G(".panel.panel-active")).hasClass("panel-left") ? "left" : "right", !!i && (e.panel[i] ? e.panel[i].close(n) : a.length > 0 && e.panel.create({ el: a }).close(n)) }, get: function(t) { var n = t; if (!n) { if (G(".panel").length > 1) return;
                                n = G(".panel").hasClass("panel-left") ? "left" : "right" } if (n) { if (e.panel[n]) return e.panel[n]; var a = G(".panel-" + n); return a.length > 0 ? e.panel.create({ el: a }) : void 0 } } }) }, on: { init: function() { var e = this;
                        G(".panel").each(function(t, n) { var a = G(n).hasClass("panel-left") ? "left" : "right";
                            e.panel[a] = e.panel.create({ el: n, side: a }) }) } }, clicks: { ".panel-open": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = "left";
                        ("right" === t.panel || 1 === G(".panel").length && G(".panel").hasClass("panel-right")) && (n = "right"), this.panel.open(n, t.animate) }, ".panel-close": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.panel;
                        this.panel.close(n, t.animate) }, ".panel-backdrop": function() { var e = G(".panel-active"),
                            t = e[0] && e[0].f7Panel;
                        e.trigger("panel:backdrop-click"), t && t.emit("backdropClick", t), this.emit("panelBackdropClick", t || e[0]), this.params.panel.closeByBackdropClick && this.panel.close() } } },
            en = { store: function(e, t) { var n = e,
                        a = G(e);
                    a.length && a.is("form") && a.attr("id") && (n = a.attr("id")), this.form.data["form-" + n] = t; try { A.localStorage["f7form-" + n] = p()(t) } catch (e) { throw e } }, get: function(e) { var t = e,
                        n = G(e);
                    n.length && n.is("form") && n.attr("id") && (t = n.attr("id")); try { if (A.localStorage["f7form-" + t]) return JSON.parse(A.localStorage["f7form-" + t]) } catch (e) { throw e } if (this.form.data["form-" + t]) return this.form.data["form-" + t] }, remove: function(e) { var t = e,
                        n = G(e);
                    n.length && n.is("form") && n.attr("id") && (t = n.attr("id")), this.form.data["form-" + t] && (this.form.data["form-" + t] = "", delete this.form.data["form-" + t]); try { A.localStorage["f7form-" + t] && (A.localStorage["f7form-" + t] = "", A.localStorage.removeItem("f7form-" + t)) } catch (e) { throw e } } },
            tn = { init: function(e) { var t = this,
                        n = G(e),
                        a = n.attr("id"); if (a) { var i = t.form.getFormData(a);
                        i && t.form.fillFromData(n, i), n.on("change submit", function() { var e = t.form.convertToData(n);
                            e && (t.form.storeFormData(a, e), n.trigger("form:storedata", e), t.emit("formStoreData", n[0], e)) }) } }, destroy: function(e) { G(e).off("change submit") } }; var nn = { name: "form", create: function() { me.extend(this, { form: { data: {}, storeFormData: en.store.bind(this), getFormData: en.get.bind(this), removeFormData: en.remove.bind(this), convertToData: function(e) { var t = G(e).eq(0); if (0 !== t.length) { var n = {},
                                        a = ["submit", "image", "button", "file"],
                                        i = []; return t.find("input, select, textarea").each(function(e, r) { var s = G(r); if (!s.hasClass("ignore-store-data") && !s.hasClass("no-store-data")) { var o = s.attr("name"),
                                                l = s.attr("type"),
                                                c = r.nodeName.toLowerCase(); if (!(a.indexOf(l) >= 0) && !(i.indexOf(o) >= 0) && o)
                                                if ("select" === c && s.prop("multiple")) i.push(o), n[o] = [], t.find('select[name="' + o + '"] option').each(function(e, t) { t.selected && n[o].push(t.value) });
                                                else switch (l) {
                                                    case "checkbox":
                                                        i.push(o), n[o] = [], t.find('input[name="' + o + '"]').each(function(e, t) { t.checked && n[o].push(t.value) }); break;
                                                    case "radio":
                                                        i.push(o), t.find('input[name="' + o + '"]').each(function(e, t) { t.checked && (n[o] = t.value) }); break;
                                                    default:
                                                        n[o] = s.val() } } }), t.trigger("form:todata", n), this.emit("formToData", t[0], n), n } }.bind(this), fillFromData: function(e, t) { var n = G(e).eq(0); if (n.length) { var a = t,
                                        i = n.attr("id"); if (!a && i && (a = this.form.getFormData(i)), a) { var r = ["submit", "image", "button", "file"],
                                            s = [];
                                        n.find("input, select, textarea").each(function(e, t) { var i = G(t); if (!i.hasClass("ignore-store-data") && !i.hasClass("no-store-data")) { var o = i.attr("name"),
                                                    l = i.attr("type"),
                                                    c = t.nodeName.toLowerCase(); if (void 0 !== a[o] && null !== a[o] && !(r.indexOf(l) >= 0) && !(s.indexOf(o) >= 0) && o) { if ("select" === c && i.prop("multiple")) s.push(o), n.find('select[name="' + o + '"] option').each(function(e, t) { var n = t;
                                                        a[o].indexOf(t.value) >= 0 ? n.selected = !0 : n.selected = !1 });
                                                    else switch (l) {
                                                        case "checkbox":
                                                            s.push(o), n.find('input[name="' + o + '"]').each(function(e, t) { var n = t;
                                                                a[o].indexOf(t.value) >= 0 ? n.checked = !0 : n.checked = !1 }); break;
                                                        case "radio":
                                                            s.push(o), n.find('input[name="' + o + '"]').each(function(e, t) { var n = t;
                                                                a[o] === t.value ? n.checked = !0 : n.checked = !1 }); break;
                                                        default:
                                                            i.val(a[o]) }
                                                    "select" !== c && "input" !== c && "textarea" !== c || i.trigger("change", "fromdata") } } }), n.trigger("form:fromdata", a), this.emit("formFromData", n[0], a) } } }.bind(this), storage: { init: tn.init.bind(this), destroy: tn.destroy.bind(this) } } }) }, on: { init: function() {
                        (function() { var e = this;
                            G(I).on("submit change", "form.form-ajax-submit, form.form-ajax-submit-onchange", function(t, n) { var a = G(this); if (("change" !== t.type || a.hasClass("form-ajax-submit-onchange")) && ("submit" === t.type && t.preventDefault(), "change" !== t.type || "fromdata" !== n)) { var i = (a.attr("method") || "GET").toUpperCase(),
                                        r = a.prop("enctype") || a.attr("enctype"),
                                        s = a.attr("action"); if (s) { var o = void 0;
                                        o = "POST" === i ? "application/x-www-form-urlencoded" === r ? e.form.convertToData(a[0]) : new A.FormData(a[0]) : me.serializeObject(e.form.convertToData(a[0])); var l = e.request({ method: i, url: s, contentType: r, data: o, beforeSend: function() { a.trigger("formajax:beforesend", o, l), e.emit("formAjaxBeforeSend", a[0], o, l) }, error: function() { a.trigger("formajax:error", o, l), e.emit("formAjaxError", a[0], o, l) }, complete: function() { a.trigger("formajax:complete", o, l), e.emit("formAjaxComplete", a[0], o, l) }, success: function() { a.trigger("formajax:success", o, l), e.emit("formAjaxSuccess", a[0], o, l) } }) } } }) }).call(this) }, tabBeforeRemove: function(e) { var t = this;
                        G(e).find(".form-store-data").each(function(e, n) { t.form.storage.destroy(n) }) }, tabMounted: function(e) { var t = this;
                        G(e).find(".form-store-data").each(function(e, n) { t.form.storage.init(n) }) }, pageBeforeRemove: function(e) { var t = this;
                        e.$el.find(".form-store-data").each(function(e, n) { t.form.storage.destroy(n) }) }, pageInit: function(e) { var t = this;
                        e.$el.find(".form-store-data").each(function(e, n) { t.form.storage.init(n) }) } } },
            an = { ignoreTypes: ["checkbox", "button", "submit", "range", "radio", "image"], createTextareaResizableShadow: function() { var e = G(I.createElement("textarea"));
                    e.addClass("textarea-resizable-shadow"), e.prop({ disabled: !0, readonly: !0 }), an.textareaResizableShadow = e }, textareaResizableShadow: void 0, resizeTextarea: function(e) { var t = G(e);
                    an.textareaResizableShadow || an.createTextareaResizableShadow(); var n = an.textareaResizableShadow; if (t.length && t.hasClass("resizable")) { 0 === an.textareaResizableShadow.parents().length && this.root.append(n); var a = A.getComputedStyle(t[0]); "padding margin width font-size font-family font-style font-weight line-height font-variant text-transform letter-spacing border box-sizing display".split(" ").forEach(function(e) { var t = a[e]; "font-size line-height letter-spacing width".split(" ").indexOf(e) >= 0 && (t = t.replace(",", ".")), n.css(e, t) }); var i = t[0].clientHeight;
                        n.val(""); var r = n[0].scrollHeight;
                        n.val(t.val()), n.css("height", 0); var s = n[0].scrollHeight;
                        i !== s && (s > r ? (t.css("height", s + "px"), t.trigger("textarea:resize", { initialHeight: r, currentHeight: i, scrollHeight: s })) : s < i && (t.css("height", ""), t.trigger("textarea:resize", { initialHeight: r, currentHeight: i, scrollHeight: s }))) } }, validate: function(e) { var t = G(e); if (t.length) { var n = t.parents(".item-input"),
                            a = t.parents(".input"),
                            i = t[0].validity,
                            r = t.dataset().errorMessage || t[0].validationMessage || ""; if (i)
                            if (i.valid) n.removeClass("item-input-invalid item-input-with-error-message"), a.removeClass("input-invalid input-with-error-message"), t.removeClass("input-invalid");
                            else { var s = t.nextAll(".item-input-error-message, .input-error-message");
                                r && (0 === s.length && (s = G('<div class="' + (a.length ? "input-error-message" : "item-input-error-message") + '"></div>')).insertAfter(t), s.text(r)), s.length > 0 && (n.addClass("item-input-with-error-message"), a.addClass("input-with-eror-message")), n.addClass("item-input-invalid"), a.addClass("input-invalid"), t.addClass("input-invalid") } } }, validateInputs: function(e) { var t = this;
                    G(e).find("input, textarea, select").each(function(e, n) { t.input.validate(n) }) }, focus: function(e) { var t = G(e),
                        n = t.attr("type");
                    an.ignoreTypes.indexOf(n) >= 0 || (t.parents(".item-input").addClass("item-input-focused"), t.parents(".input").addClass("input-focused"), t.addClass("input-focused")) }, blur: function(e) { var t = G(e);
                    t.parents(".item-input").removeClass("item-input-focused"), t.parents(".input").removeClass("input-focused"), t.removeClass("input-focused") }, checkEmptyState: function(e) { var t = G(e),
                        n = t.val(),
                        a = t.parents(".item-input"),
                        i = t.parents(".input");
                    n && "string" == typeof n && "" !== n.trim() || Array.isArray(n) && n.length > 0 ? (a.addClass("item-input-with-value"), i.addClass("input-with-value"), t.addClass("input-with-value"), t.trigger("input:notempty")) : (a.removeClass("item-input-with-value"), i.removeClass("input-with-value"), t.removeClass("input-with-value"), t.trigger("input:empty")) }, scrollIntoView: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments[2],
                        a = arguments[3],
                        i = G(e),
                        r = i.parents(".page-content, .panel").eq(0); if (!r.length) return !1; var s = r[0].offsetHeight,
                        o = r[0].scrollTop,
                        l = parseInt(r.css("padding-top"), 10),
                        c = parseInt(r.css("padding-bottom"), 10),
                        d = r.offset().top - o,
                        u = i.offset().top - d,
                        p = u + o - l,
                        h = u + o - s + c + i[0].offsetHeight,
                        f = p + (h - p) / 2; return o > p ? (r.scrollTop(n ? f : p, t), !0) : o < h ? (r.scrollTop(n ? f : h, t), !0) : (a && r.scrollTop(n ? f : h, t), !1) }, init: function() { var e = this;
                    an.createTextareaResizableShadow(), G(I).on("click", ".input-clear-button", function() { var e = G(this).siblings("input, textarea").eq(0),
                            t = e.val();
                        e.val("").trigger("change input").focus().trigger("input:clear", t) }), G(I).on("change input", "input, textarea, select", function() { var t = G(this),
                            n = t.attr("type"),
                            a = t[0].nodeName.toLowerCase();
                        an.ignoreTypes.indexOf(n) >= 0 || (e.input.checkEmptyState(t), (t.dataset().validate || null !== t.attr("validate")) && e.input.validate(t), "textarea" === a && t.hasClass("resizable") && e.input.resizeTextarea(t)) }, !0), G(I).on("focus", "input, textarea, select", function() { var t = this;
                        e.params.input.scrollIntoViewOnFocus && (ge.android ? G(A).once("resize", function() { I && I.activeElement === t && e.input.scrollIntoView(t, e.params.input.scrollIntoViewDuration, e.params.input.scrollIntoViewCentered, e.params.input.scrollIntoViewAlways) }) : e.input.scrollIntoView(t, e.params.input.scrollIntoViewDuration, e.params.input.scrollIntoViewCentered, e.params.input.scrollIntoViewAlways)), e.input.focus(t) }, !0), G(I).on("blur", "input, textarea, select", function() { var t = G(this),
                            n = t[0].nodeName.toLowerCase();
                        e.input.blur(t), (t.dataset().validate || null !== t.attr("validate")) && e.input.validate(t), "textarea" === n && t.hasClass("resizable") && an.textareaResizableShadow && an.textareaResizableShadow.remove() }, !0), G(I).on("invalid", "input, textarea, select", function(t) { var n = G(this);
                        (n.dataset().validate || null !== n.attr("validate")) && (t.preventDefault(), e.input.validate(n)) }, !0) } },
            rn = { name: "input", params: { input: { scrollIntoViewOnFocus: ge.android, scrollIntoViewCentered: !1, scrollIntoViewDuration: 0, scrollIntoViewAlways: !1 } }, create: function() { me.extend(this, { input: { scrollIntoView: an.scrollIntoView.bind(this), focus: an.focus.bind(this), blur: an.blur.bind(this), validate: an.validate.bind(this), validateInputs: an.validateInputs.bind(this), checkEmptyState: an.checkEmptyState.bind(this), resizeTextarea: an.resizeTextarea.bind(this), init: an.init.bind(this) } }) }, on: { init: function() { this.input.init() }, tabMounted: function(e) { var t = this,
                            n = G(e);
                        n.find(".item-input, .input").each(function(e, n) { G(n).find("input, select, textarea").each(function(e, n) { var a = G(n);
                                an.ignoreTypes.indexOf(a.attr("type")) >= 0 || t.input.checkEmptyState(a) }) }), n.find("textarea.resizable").each(function(e, n) { t.input.resizeTextarea(n) }) }, pageInit: function(e) { var t = this,
                            n = e.$el;
                        n.find(".item-input, .input").each(function(e, n) { G(n).find("input, select, textarea").each(function(e, n) { var a = G(n);
                                an.ignoreTypes.indexOf(a.attr("type")) >= 0 || t.input.checkEmptyState(a) }) }), n.find("textarea.resizable").each(function(e, n) { t.input.resizeTextarea(n) }) } } },
            sn = function(e) {
                function t(e) { var n, a, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    w()(this, t); var r = m()(this, (t.__proto__ || f()(t)).call(this, i, [e])),
                        s = r,
                        o = {};
                    s.useModulesParams(o), s.params = me.extend(o, i); var l = s.params.el; if (!l) return n = s, m()(r, n); var c = G(l); if (0 === c.length) return a = s, m()(r, a); var d = c.children('input[type="checkbox"]');
                    me.extend(s, { app: e, $el: c, el: c[0], $inputEl: d, inputEl: d[0], disabled: c.hasClass("disabled") || d.hasClass("disabled") || d.attr("disabled") || d[0].disabled }), Object.defineProperty(s, "checked", { enumerable: !0, configurable: !0, set: function(e) { s && void 0 !== s.$inputEl && s.checked !== e && (d[0].checked = e, s.$inputEl.trigger("change")) }, get: function() { return d[0].checked } }), c[0].f7Toggle = s; var u = void 0,
                        p = {},
                        h = void 0,
                        v = void 0,
                        g = void 0,
                        b = void 0,
                        y = void 0;

                    function C(e) { u || s.disabled || (p.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, p.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, v = 0, u = !0, h = void 0, b = me.now(), y = s.checked, g = c[0].offsetWidth, me.nextTick(function() { u && c.addClass("toggle-active-state") })) }

                    function x(t) { if (u && !s.disabled) { var n = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                                a = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                                i = e.rtl ? -1 : 1; if (void 0 === h && (h = !!(h || Math.abs(a - p.y) > Math.abs(n - p.x))), h) u = !1;
                            else { t.preventDefault(); var r = void 0;
                                (v = n - p.x) * i < 0 && Math.abs(v) > g / 3 && y && (r = !0), v * i > 0 && Math.abs(v) > g / 3 && !y && (r = !0), r && (p.x = n, s.checked = !y, y = !y) } } }

                    function k() { if (!u || s.disabled) return h && c.removeClass("toggle-active-state"), void(u = !1); var t = e.rtl ? -1 : 1;
                        u = !1, c.removeClass("toggle-active-state"); var n = void 0;
                        me.now() - b < 300 && (v * t < 0 && y && (n = !0), v * t > 0 && !y && (n = !0), n && (s.checked = !y)) }

                    function E() { s.$el.trigger("toggle:change", s), s.emit("local::change toggleChange", s) } return s.attachEvents = function() { if (Me.touch) { var t = !!Me.passiveListener && { passive: !0 };
                            c.on(e.touchEvents.start, C, t), e.on("touchmove", x), e.on("touchend:passive", k), s.$inputEl.on("change", E) } }, s.detachEvents = function() { if (Me.touch) { var t = !!Me.passiveListener && { passive: !0 };
                            c.off(e.touchEvents.start, C, t), e.off("touchmove", x), e.off("touchend:passive", k), s.$inputEl.off("change", E) } }, s.useModules(), s.init(), r } return b()(t, e), x()(t, [{ key: "toggle", value: function() { this.checked = !this.checked } }, { key: "init", value: function() { this.attachEvents() } }, { key: "destroy", value: function() { var e = this;
                        e.$el.trigger("toggle:beforedestroy", e), e.emit("local::beforeDestroy toggleBeforeDestroy", e), delete e.$el[0].f7Toggle, e.detachEvents(), me.deleteProps(e), e = null } }]), t }(be),
            on = { name: "toggle", create: function() { this.toggle = Ct({ defaultSelector: ".toggle", constructor: sn, app: this, domProp: "f7Toggle" }) }, static: { Toggle: sn }, on: { tabMounted: function(e) { var t = this;
                        G(e).find(".toggle-init").each(function(e, n) { return t.toggle.create({ el: n }) }) }, tabBeforeRemove: function(e) { G(e).find(".toggle-init").each(function(e, t) { t.f7Toggle && t.f7Toggle.destroy() }) }, pageInit: function(e) { var t = this;
                        e.$el.find(".toggle-init").each(function(e, n) { return t.toggle.create({ el: n }) }) }, pageBeforeRemove: function(e) { e.$el.find(".toggle-init").each(function(e, t) { t.f7Toggle && t.f7Toggle.destroy() }) } } },
            ln = function(e) {
                function t(e, n) { var a, i, r;
                    w()(this, t); var s = m()(this, (t.__proto__ || f()(t)).call(this, n, [e])),
                        o = s,
                        l = { el: null, inputEl: null, dual: !1, step: 1, label: !1, min: 0, max: 100, value: 0, draggableBar: !0 };
                    o.useModulesParams(l), o.params = me.extend(l, n); var c = o.params.el; if (!c) return a = o, m()(s, a); var d = G(c); if (0 === d.length) return i = o, m()(s, i); var u = d.dataset(); "step min max value".split(" ").forEach(function(e) { void 0 === n[e] && void 0 !== u[e] && (o.params[e] = parseFloat(u[e])) }), "dual label".split(" ").forEach(function(e) { void 0 === n[e] && void 0 !== u[e] && (o.params[e] = u[e]) }), o.params.value || (void 0 !== u.value && (o.params.value = u.value), void 0 !== u.valueLeft && void 0 !== u.valueRight && (o.params.value = [parseFloat(u.valueLeft), parseFloat(u.valueRight)])); var p = void 0;
                    o.params.dual || (o.params.inputEl ? p = G(o.params.inputEl) : d.find('input[type="range"]').length && (p = d.find('input[type="range"]').eq(0))); var h = o.params,
                        v = h.dual,
                        g = h.step,
                        b = h.label,
                        y = h.min,
                        C = h.max,
                        x = h.value;
                    me.extend(o, { $el: d, el: d[0], $inputEl: p, inputEl: p ? p[0] : void 0, dual: v, step: g, label: b, min: y, max: C, value: x, previousValue: x }), p && ("step min max".split(" ").forEach(function(e) {!n[e] && p.attr(e) && (o.params[e] = parseFloat(p.attr(e)), o[e] = parseFloat(p.attr(e))) }), void 0 !== p.val() && (o.params.value = parseFloat(p.val()), o.value = parseFloat(p.val()))), o.dual && d.addClass("range-slider-dual"), o.label && d.addClass("range-slider-label"); var k = G('<div class="range-bar"></div>'),
                        E = G('<div class="range-bar-active"></div>');
                    k.append(E); var $ = '\n      <div class="range-knob-wrap">\n        <div class="range-knob"></div>\n        ' + (o.label ? '<div class="range-knob-label"></div>' : "") + "\n      </div>\n    ",
                        S = [G($)],
                        T = [];
                    o.dual && S.push(G($)), d.append(k), S.forEach(function(e) { d.append(e) }), o.label && (T.push(S[0].find(".range-knob-label")), o.dual && T.push(S[1].find(".range-knob-label"))), me.extend(o, { app: e, knobs: S, labels: T, $barEl: k, $barActiveEl: E }), d[0].f7Range = o; var _ = void 0,
                        M = {},
                        P = void 0,
                        O = void 0,
                        B = void 0,
                        I = void 0,
                        A = void 0;

                    function L() { A = !0 }

                    function D(e) { if (!_ && (o.params.draggableBar || 0 !== G(e.target).closest(".range-knob").length)) { A = !1, M.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, M.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, _ = !0, P = void 0, O = d.offset().left; var t = void 0,
                                n = (t = o.app.rtl ? (O + o.rangeWidth - M.x) / o.rangeWidth : (M.x - O) / o.rangeWidth) * (o.max - o.min) + o.min;
                            o.dual ? Math.abs(o.value[0] - n) < Math.abs(o.value[1] - n) ? (I = 0, B = o.knobs[0], n = [n, o.value[1]]) : (I = 1, B = o.knobs[1], n = [o.value[0], n]) : (B = o.knobs[0], n = t * (o.max - o.min) + o.min), me.nextTick(function() { _ && B.addClass("range-knob-active-state") }, 70), o.on("change", L), o.setValue(n, !0) } }

                    function R(e) { if (_) { var t = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                n = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY; if (void 0 === P && (P = !!(P || Math.abs(n - M.y) > Math.abs(t - M.x))), P) _ = !1;
                            else { e.preventDefault(); var a = (o.app.rtl ? (O + o.rangeWidth - t) / o.rangeWidth : (t - O) / o.rangeWidth) * (o.max - o.min) + o.min; if (o.dual) { var i = void 0,
                                        r = void 0;
                                    0 === I ? (i = a) > (r = o.value[1]) && (r = i) : (r = a) < (i = o.value[0]) && (i = r), a = [i, r] } o.setValue(a, !0) } } }

                    function z() { if (!_) return P && B.removeClass("range-knob-active-state"), void(_ = !1);
                        o.off("change", L), _ = !1, B.removeClass("range-knob-active-state"), A && o.$inputEl && !o.dual && o.$inputEl.trigger("change"), A = !1, void 0 !== o.previousValue && (o.dual && (o.previousValue[0] !== o.value[0] || o.previousValue[1] !== o.value[1]) || !o.dual && o.previousValue !== o.value) && (o.$el.trigger("range:changed", o, o.value), o.emit("local::changed rangeChanged", o, o.value)) }

                    function N() { o.calcSize(), o.layout() } return o.attachEvents = function() { var t = !!Me.passiveListener && { passive: !0 };
                        o.$el.on(e.touchEvents.start, D, t), e.on("touchmove", R), e.on("touchend:passive", z), e.on("tabShow", N), e.on("resize", N), o.$el.parents(".sheet-modal, .actions-modal, .popup, .popover, .login-screen, .dialog, .toast").on("modal:open", N), o.$el.parents(".panel").on("panel:open", N) }, o.detachEvents = function() { var t = !!Me.passiveListener && { passive: !0 };
                        o.$el.off(e.touchEvents.start, D, t), e.off("touchmove", R), e.off("touchend:passive", z), e.off("tabShow", N), e.off("resize", N), o.$el.parents(".sheet-modal, .actions-modal, .popup, .popover, .login-screen, .dialog, .toast").off("modal:open", N), o.$el.parents(".panel").off("panel:open", N) }, o.useModules(), o.init(), r = o, m()(s, r) } return b()(t, e), x()(t, [{ key: "calcSize", value: function() { var e = this.$el.outerWidth();
                        0 !== e && (this.rangeWidth = e, this.knobWidth = this.knobs[0].outerWidth()) } }, { key: "layout", value: function() { var e = this.app,
                            t = this.knobWidth,
                            n = this.rangeWidth,
                            a = this.min,
                            i = this.max,
                            r = this.knobs,
                            s = this.$barActiveEl,
                            o = this.value,
                            c = this.label,
                            d = this.labels,
                            u = e.rtl ? "right" : "left"; if (this.dual) { var p, h = [(o[0] - a) / (i - a), (o[1] - a) / (i - a)];
                            s.css((p = {}, l()(p, u, 100 * h[0] + "%"), l()(p, "width", 100 * (h[1] - h[0]) + "%"), p)), r.forEach(function(e, a) { var i = n * h[a],
                                    r = n * h[a] - t / 2;
                                r < 0 && (i = t / 2), r + t > n && (i = n - t / 2), e.css(u, i + "px"), c && d[a].text(o[a]) }) } else { var f = (o - a) / (i - a);
                            s.css("width", 100 * f + "%"); var v = n * f,
                                m = n * f - t / 2;
                            m < 0 && (v = t / 2), m + t > n && (v = n - t / 2), r[0].css(u, v + "px"), c && d[0].text(o) } this.dual && o.indexOf(a) >= 0 || !this.dual && o === a ? this.$el.addClass("range-slider-min") : this.$el.removeClass("range-slider-min"), this.dual && o.indexOf(i) >= 0 || !this.dual && o === i ? this.$el.addClass("range-slider-max") : this.$el.removeClass("range-slider-max") } }, { key: "setValue", value: function(e, t) { var n = this,
                            a = n.step,
                            i = n.min,
                            r = n.max,
                            s = void 0,
                            o = void 0; if (n.dual) { o = [n.value[0], n.value[1]]; var l = e; if (Array.isArray(l) || (l = [e, e]), e[0] > e[1] && (l = [l[0], l[0]]), (l = l.map(function(e) { return Math.max(Math.min(Math.round(e / a) * a, r), i) }))[0] === n.value[0] && l[1] === n.value[1]) return n;
                            l.forEach(function(e, t) { n.value[t] = e }), s = o[0] !== l[0] || o[1] !== l[1], n.layout() } else { o = n.value; var c = Math.max(Math.min(Math.round(e / a) * a, r), i);
                            n.value = c, n.layout(), s = o !== c } return s && (n.previousValue = o), s ? (n.$el.trigger("range:change", n, n.value), n.$inputEl && !n.dual && (n.$inputEl.val(n.value), t ? n.$inputEl.trigger("input") : n.$inputEl.trigger("input change")), t || (n.$el.trigger("range:changed", n, n.value), n.emit("local::changed rangeChanged", n, n.value)), n.emit("local::change rangeChange", n, n.value), n) : n } }, { key: "getValue", value: function() { return this.value } }, { key: "init", value: function() { return this.calcSize(), this.layout(), this.attachEvents(), this } }, { key: "destroy", value: function() { var e = this;
                        e.$el.trigger("range:beforedestroy", e), e.emit("local::beforeDestroy rangeBeforeDestroy", e), delete e.$el[0].f7Range, e.detachEvents(), me.deleteProps(e), e = null } }]), t }(be),
            cn = { name: "range", create: function() { var e = this;
                    e.range = me.extend(Ct({ defaultSelector: ".range-slider", constructor: ln, app: e, domProp: "f7Range" }), { getValue: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".range-slider",
                                n = e.range.get(t); if (n) return n.getValue() }, setValue: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".range-slider",
                                n = arguments[1],
                                a = e.range.get(t); if (a) return a.setValue(n) } }) }, static: { Range: ln }, on: { tabMounted: function(e) { var t = this;
                        G(e).find(".range-slider-init").each(function(e, n) { return new ln(t, { el: n }) }) }, tabBeforeRemove: function(e) { G(e).find(".range-slider-init").each(function(e, t) { t.f7Range && t.f7Range.destroy() }) }, pageInit: function(e) { var t = this;
                        e.$el.find(".range-slider-init").each(function(e, n) { return new ln(t, { el: n }) }) }, pageBeforeRemove: function(e) { e.$el.find(".range-slider-init").each(function(e, t) { t.f7Range && t.f7Range.destroy() }) } } },
            dn = function(e) {
                function t(e, n) { var a, r, s;
                    w()(this, t); var o = m()(this, (t.__proto__ || f()(t)).call(this, n, [e])),
                        l = o,
                        c = { el: null, inputEl: null, valueEl: null, value: 0, formatValue: null, step: 1, min: 0, max: 100, watchInput: !0, autorepeat: !1, autorepeatDynamic: !1, wraps: !1 };
                    l.useModulesParams(c), l.params = me.extend(c, n), l.params.value < l.params.min && (l.params.value = l.params.min), l.params.value > l.params.max && (l.params.value = l.params.max); var d = l.params.el; if (!d) return a = l, m()(o, a); var u = G(d); if (0 === u.length) return r = l, m()(o, r); var p = void 0; if (l.params.inputEl ? p = G(l.params.inputEl) : u.find(".stepper-input-wrap").find("input, textarea").length && (p = u.find(".stepper-input-wrap").find("input, textarea").eq(0)), p && p.length) { "step min max".split(" ").forEach(function(e) {!n[e] && p.attr(e) && (l.params[e] = parseFloat(p.attr(e))) }); var h = parseFloat(p.val());
                        void 0 !== n.value || i()(h) || !h && 0 !== h || (l.params.value = h) } var v = void 0;
                    l.params.valueEl ? v = G(l.params.valueEl) : u.find(".stepper-value").length && (v = u.find(".stepper-value").eq(0)); var g = u.find(".stepper-button-plus"),
                        b = u.find(".stepper-button-minus"),
                        y = l.params,
                        C = y.step,
                        x = y.min,
                        k = y.max,
                        E = y.value;
                    me.extend(l, { app: e, $el: u, el: u[0], $buttonPlusEl: g, buttonPlusEl: g[0], $buttonMinusEl: b, buttonMinusEl: b[0], $inputEl: p, inputEl: p ? p[0] : void 0, $valueEl: v, valueEl: v ? v[0] : void 0, step: C, min: x, max: k, value: E }), u[0].f7Stepper = l; var $ = {},
                        S = void 0,
                        T = void 0,
                        _ = void 0,
                        M = void 0,
                        P = void 0,
                        O = null,
                        B = !1;

                    function I(e) { S || (G(e.target).closest(g).length ? O = "increment" : G(e.target).closest(b).length && (O = "decrement"), O && ($.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, $.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, S = !0, T = void 0, function e(t, n, a, i, r, s) { clearTimeout(P), P = setTimeout(function() { 1 === t && (_ = !0, B = !0), clearInterval(M), s(), M = setInterval(function() { s() }, r), t < n && e(t + 1, n, a, i, r / 2, s) }, 1 === t ? a : i) }(1, l.params.autorepeatDynamic ? 4 : 1, 500, 1e3, 300, function() { l[O]() }))) }

                    function A(e) { if (S) { var t = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                n = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY;
                            void 0 !== T || B || (T = !!(T || Math.abs(n - $.y) > Math.abs(t - $.x))); var a = Math.pow(Math.pow(t - $.x, 2) + Math.pow(n - $.y, 2), .5);
                            (T || a > 20) && (S = !1, clearTimeout(P), clearInterval(M)) } }

                    function L() { clearTimeout(P), clearInterval(M), O = null, B = !1, S = !1 }

                    function D() { _ ? _ = !1 : l.decrement() }

                    function R() { _ ? _ = !1 : l.increment() }

                    function z(e) { e.detail && e.detail.sentByF7Stepper || l.setValue(e.target.value, !0) } return l.attachEvents = function() { b.on("click", D), g.on("click", R), l.params.watchInput && p && p.length && p.on("input", z), l.params.autorepeat && (e.on("touchstart:passive", I), e.on("touchmove:active", A), e.on("touchend:passive", L)) }, l.detachEvents = function() { b.off("click", D), g.off("click", R), l.params.watchInput && p && p.length && p.off("input", z) }, l.useModules(), l.init(), s = l, m()(o, s) } return b()(t, e), x()(t, [{ key: "minus", value: function() { return this.decrement() } }, { key: "plus", value: function() { return this.increment() } }, { key: "decrement", value: function() { return this.setValue(this.value - this.step) } }, { key: "increment", value: function() { return this.setValue(this.value + this.step) } }, { key: "setValue", value: function(e, t) { var n = this.step,
                            a = this.min,
                            r = this.max,
                            s = this.value,
                            o = Math.round(e / n) * n; if (this.params.wraps ? (o > r && (o = a), o < a && (o = r)) : o = Math.max(Math.min(o, r), a), i()(o) && (o = s), this.value = o, !(s !== o) && !t) return this;
                        this.$el.trigger("stepper:change", this, this.value); var l = this.formatValue(this.value); return this.$inputEl && this.$inputEl.length && (this.$inputEl.val(l), this.$inputEl.trigger("input change", { sentByF7Stepper: !0 })), this.$valueEl && this.$valueEl.length && this.$valueEl.html(l), this.emit("local::change stepperChange", this, this.value), this } }, { key: "getValue", value: function() { return this.value } }, { key: "formatValue", value: function(e) { return this.params.formatValue ? this.params.formatValue.call(this, e) : e } }, { key: "init", value: function() { if (this.attachEvents(), this.$valueEl && this.$valueEl.length) { var e = this.formatValue(this.value);
                            this.$valueEl.html(e) } return this } }, { key: "destroy", value: function() { var e = this;
                        e.$el.trigger("stepper:beforedestroy", e), e.emit("local::beforeDestroy stepperBeforeDestroy", e), delete e.$el[0].f7Stepper, e.detachEvents(), me.deleteProps(e), e = null } }]), t }(be),
            un = { name: "stepper", create: function() { var e = this;
                    e.stepper = me.extend(Ct({ defaultSelector: ".stepper", constructor: dn, app: e, domProp: "f7Stepper" }), { getValue: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".stepper",
                                n = e.stepper.get(t); if (n) return n.getValue() }, setValue: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".stepper",
                                n = arguments[1],
                                a = e.stepper.get(t); if (a) return a.setValue(n) } }) }, static: { Stepper: dn }, on: { tabMounted: function(e) { var t = this;
                        G(e).find(".stepper-init").each(function(e, n) { var a = G(n).dataset();
                            new dn(t, me.extend({ el: n }, a || {})) }) }, tabBeforeRemove: function(e) { G(e).find(".stepper-init").each(function(e, t) { t.f7Stepper && t.f7Stepper.destroy() }) }, pageInit: function(e) { var t = this;
                        e.$el.find(".stepper-init").each(function(e, n) { var a = G(n).dataset();
                            new dn(t, me.extend({ el: n }, a || {})) }) }, pageBeforeRemove: function(e) { e.$el.find(".stepper-init").each(function(e, t) { t.f7Stepper && t.f7Stepper.destroy() }) } } },
            pn = function(e) {
                function t(e) { var n, a, i, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    w()(this, t); var s = m()(this, (t.__proto__ || f()(t)).call(this, r, [e])),
                        o = s;
                    o.app = e; var l = me.extend({ on: {} }, e.params.smartSelect),
                        c = G(r.el).eq(0); if (0 === c.length) return n = o, m()(s, n); var d = c.find("select").eq(0); if (0 === d.length) return a = o, m()(s, a); var u = G(r.valueEl);
                    0 === u.length && (u = c.find(".item-after")), 0 === u.length && (u = G('<div class="item-after"></div>')).insertAfter(c.find(".item-title")), o.useModulesParams(l); var p = r.view; if (p || (p = c.parents(".view").length && c.parents(".view")[0].f7View), !p) throw Error("Smart Select requires initialized View"); var h = r.url;
                    h || (h = c.attr("href") && "#" !== c.attr("href") ? c.attr("href") : d.attr("name").toLowerCase() + "-select/"), h || (h = o.params.url); var v = d[0].multiple,
                        g = v ? "checkbox" : "radio",
                        b = me.now();

                    function y() { o.open() }

                    function C() { o.setValue() }

                    function x() { var e = void 0,
                            t = void 0,
                            n = this.value,
                            a = [],
                            i = void 0; if ("checkbox" === this.type) { for (var r = 0; r < o.selectEl.options.length; r += 1)(e = o.selectEl.options[r]).value === n && (e.selected = this.checked), e.selected && (t = (i = e.dataset ? e.dataset.displayAs : G(e).data("display-value-as")) && void 0 !== i ? i : e.textContent, a.push(t.trim()));
                            o.maxLength && o.checkMaxLength() } else a = [t = (i = (e = o.$selectEl.find('option[value="' + n + '"]')[0]).dataset ? e.dataset.displayAs : G(e).data("display-as")) && void 0 !== i ? i : e.textContent], o.selectEl.value = n;
                        o.$selectEl.trigger("change"), o.$valueEl.text(a.join(", ")), o.params.closeOnSelect && "radio" === o.inputType && o.close() } return me.extend(o, { params: me.extend(l, r), $el: c, el: c[0], $selectEl: d, selectEl: d[0], $valueEl: u, valueEl: u[0], url: h, multiple: v, inputType: g, id: b, view: p, inputName: g + "-" + b, selectName: d.attr("name"), maxLength: d.attr("maxlength") || r.maxLength }), c[0].f7SmartSelect = o, o.attachEvents = function() { c.on("click", y), c.on("change", "select", C) }, o.detachEvents = function() { c.off("click", y), c.off("change", "select", C) }, o.attachInputsEvents = function() { o.$containerEl.on("change", 'input[type="checkbox"], input[type="radio"]', x) }, o.detachInputsEvents = function() { o.$containerEl.off("change", 'input[type="checkbox"], input[type="radio"]', x) }, o.useModules(), o.init(), i = o, m()(s, i) } return b()(t, e), x()(t, [{ key: "checkMaxLength", value: function() { var e = this.$containerEl;
                        this.selectEl.selectedOptions.length >= this.maxLength ? e.find('input[type="checkbox"]').each(function(e, t) { t.checked ? G(t).parents("li").removeClass("disabled") : G(t).parents("li").addClass("disabled") }) : e.find(".disabled").removeClass("disabled") } }, { key: "setValue", value: function(e) { var t = [];
                        void 0 !== e ? t = Array.isArray(e) ? e : [e] : this.$selectEl.find("option").each(function(e, n) { var a = G(n); if (n.selected) { var i = n.dataset ? n.dataset.displayAs : a.data("display-value-as");
                                i && void 0 !== i ? t.push(i) : t.push(n.textContent.trim()) } }), this.$valueEl.text(t.join(", ")) } }, { key: "getItemsData", value: function() { var e = this,
                            t = [],
                            n = void 0; return e.$selectEl.find("option").each(function(a, i) { var r = G(i),
                                s = r.dataset(),
                                o = s.optionImage || e.params.optionImage,
                                l = s.optionIcon || e.params.optionIcon,
                                c = o || l,
                                d = s.optionColor,
                                u = s.optionClass || "";
                            r[0].disabled && (u += " disabled"); var p = r.parent("optgroup")[0],
                                h = p && p.label,
                                f = !1;
                            p && p !== n && (f = !0, n = p, t.push({ groupLabel: h, isLabel: f })), t.push({ value: r[0].value, text: r[0].textContent.trim(), selected: r[0].selected, groupEl: p, groupLabel: h, image: o, icon: l, color: d, className: u, disabled: r[0].disabled, id: e.id, hasMedia: c, checkbox: "checkbox" === e.inputType, radio: "radio" === e.inputType, inputName: e.inputName, inputType: e.inputType }) }), e.items = t, t } }, { key: "renderSearchbar", value: function() { var e = this; return e.params.renderSearchbar ? e.params.renderSearchbar.call(e) : '\n      <form class="searchbar">\n        <div class="searchbar-inner">\n          <div class="searchbar-input-wrap">\n            <input type="search" placeholder="' + e.params.searchbarPlaceholder + '"/>\n            <i class="searchbar-icon"></i>\n            <span class="input-clear-button"></span>\n          </div>\n          <span class="searchbar-disable-button">' + e.params.searchbarDisableText + "</span>\n        </div>\n      </form>\n    " } }, { key: "renderItem", value: function(e, t) { if (this.params.renderItem) return this.params.renderItem.call(this, e, t); return e.isLabel ? '<li class="item-divider">' + e.groupLabel + "</li>" : '\n        <li class="' + (e.className || "") + '">\n          <label class="item-' + e.inputType + ' item-content">\n            <input type="' + e.inputType + '" name="' + e.inputName + '" value="' + e.value + '" ' + (e.selected ? "checked" : "") + '/>\n            <i class="icon icon-' + e.inputType + '"></i>\n            ' + (e.hasMedia ? '\n              <div class="item-media">\n                ' + (e.icon ? '<i class="icon ' + e.icon + '"></i>' : "") + "\n                " + (e.image ? '<img src="' + e.image + '">' : "") + "\n              </div>\n            " : "") + '\n            <div class="item-inner">\n              <div class="item-title' + (e.color ? " color-" + e.color : "") + '">' + e.text + "</div>\n            </div>\n          </label>\n        </li>\n      " } }, { key: "renderItems", value: function() { var e = this; return e.params.renderItems ? e.params.renderItems.call(e, e.items) : "\n      " + e.items.map(function(t, n) { return "" + e.renderItem(t, n) }).join("") + "\n    " } }, { key: "renderPage", value: function() { var e = this; if (e.params.renderPage) return e.params.renderPage.call(e, e.items); var t = e.params.pageTitle; return void 0 === t && (t = e.$el.find(".item-title").text().trim()), '\n      <div class="page smart-select-page" data-name="smart-select-page" data-select-name="' + e.selectName + '">\n        <div class="navbar ' + (e.params.navbarColorTheme ? "color-theme-" + e.params.navbarColorTheme : "") + '">\n          <div class="navbar-inner sliding ' + (e.params.navbarColorTheme ? "color-theme-" + e.params.navbarColorTheme : "") + '">\n            <div class="left">\n              <a href="#" class="link back">\n                <i class="icon icon-back"></i>\n                <span class="ios-only">' + e.params.pageBackLinkText + "</span>\n              </a>\n            </div>\n            " + (t ? '<div class="title">' + t + "</div>" : "") + "\n            " + (e.params.searchbar ? '<div class="subnavbar">' + e.renderSearchbar() + "</div>" : "") + "\n          </div>\n        </div>\n        " + (e.params.searchbar ? '<div class="searchbar-backdrop"></div>' : "") + '\n        <div class="page-content">\n          <div class="list smart-select-list-' + e.id + " " + (e.params.virtualList ? " virtual-list" : "") + " " + (e.params.formColorTheme ? "color-theme-" + e.params.formColorTheme : "") + '">\n            <ul>' + (!e.params.virtualList && e.renderItems(e.items)) + "</ul>\n          </div>\n        </div>\n      </div>\n    " } }, { key: "renderPopup", value: function() { var e = this; if (e.params.renderPopup) return e.params.renderPopup.call(e, e.items); var t = e.params.pageTitle; return void 0 === t && (t = e.$el.find(".item-title").text().trim()), '\n      <div class="popup smart-select-popup" data-select-name="' + e.selectName + '">\n        <div class="view">\n          <div class="page smart-select-page ' + (e.params.searchbar ? "page-with-subnavbar" : "") + '" data-name="smart-select-page">\n            <div class="navbar' + (e.params.navbarColorTheme ? "theme-" + e.params.navbarColorTheme : "") + '">\n              <div class="navbar-inner sliding">\n                <div class="left">\n                  <a href="#" class="link popup-close">\n                    <i class="icon icon-back"></i>\n                    <span class="ios-only">' + e.params.popupCloseLinkText + "</span>\n                  </a>\n                </div>\n                " + (t ? '<div class="title">' + t + "</div>" : "") + "\n                " + (e.params.searchbar ? '<div class="subnavbar">' + e.renderSearchbar() + "</div>" : "") + "\n              </div>\n            </div>\n            " + (e.params.searchbar ? '<div class="searchbar-backdrop"></div>' : "") + '\n            <div class="page-content">\n              <div class="list smart-select-list-' + e.id + " " + (e.params.virtualList ? " virtual-list" : "") + (e.params.formColorTheme ? "theme-" + e.params.formColorTheme : "") + '">\n                <ul>' + (!e.params.virtualList && e.renderItems(e.items)) + "</ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    " } }, { key: "renderSheet", value: function() { var e = this; return e.params.renderSheet ? e.params.renderSheet.call(e, e.items) : '\n      <div class="sheet-modal smart-select-sheet" data-select-name="' + e.selectName + '">\n        <div class="toolbar ' + (e.params.toolbarColorTheme ? "theme-" + e.params.toolbarColorTheme : "") + '">\n          <div class="toolbar-inner">\n            <div class="left"></div>\n            <div class="right">\n              <a class="link sheet-close">' + e.params.sheetCloseLinkText + '</a>\n            </div>\n          </div>\n        </div>\n        <div class="sheet-modal-inner">\n          <div class="page-content">\n            <div class="list smart-select-list-' + e.id + " " + (e.params.virtualList ? " virtual-list" : "") + (e.params.formColorTheme ? "theme-" + e.params.formColorTheme : "") + '">\n              <ul>' + (!e.params.virtualList && e.renderItems(e.items)) + "</ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    " } }, { key: "renderPopover", value: function() { var e = this; return e.params.renderPopover ? e.params.renderPopover.call(e, e.items) : '\n      <div class="popover smart-select-popover" data-select-name="' + e.selectName + '">\n        <div class="popover-inner">\n          <div class="list smart-select-list-' + e.id + " " + (e.params.virtualList ? " virtual-list" : "") + (e.params.formColorTheme ? "theme-" + e.params.formColorTheme : "") + '">\n            <ul>' + (!e.params.virtualList && e.renderItems(e.items)) + "</ul>\n          </div>\n        </div>\n      </div>\n    " } }, { key: "onOpen", value: function(e, t) { var n = this,
                            a = n.app,
                            i = G(t); if (n.$containerEl = i, n.openedIn = e, n.opened = !0, n.params.virtualList && (n.vl = a.virtualList.create({ el: i.find(".virtual-list"), items: n.items, renderItem: n.renderItem.bind(n), height: n.params.virtualListHeight, searchByItem: function(e, t) { return !!(t.text && t.text.toLowerCase().indexOf(e.trim().toLowerCase()) >= 0) } })), n.params.searchbar) { var r = i.find(".searchbar"); "page" === e && "ios" === a.theme && (r = G(a.navbar.getElByPage(i)).find(".searchbar")), n.searchbar = a.searchbar.create({ el: r, backdropEl: i.find(".searchbar-backdrop"), searchContainer: ".smart-select-list-" + n.id, searchIn: ".item-title" }) } n.maxLength && n.checkMaxLength(), n.params.closeOnSelect && n.$containerEl.find('input[type="radio"][name="' + n.inputName + '"]:checked').parents("label").once("click", function() { n.close() }), n.attachInputsEvents(), n.$el.trigger("smartselect:open", n), n.emit("local::open smartSelectOpen", n) } }, { key: "onOpened", value: function() { this.$el.trigger("smartselect:opened", this), this.emit("local::opened smartSelectOpened", this) } }, { key: "onClose", value: function() { var e = this;
                        e.destroyed || (e.vl && e.vl.destroy && (e.vl.destroy(), e.vl = null, delete e.vl), e.searchbar && e.searchbar.destroy && (e.searchbar.destroy(), e.searchbar = null, delete e.searchbar), e.detachInputsEvents(), e.$el.trigger("smartselect:close", e), e.emit("local::close smartSelectClose", e)) } }, { key: "onClosed", value: function() { var e = this;
                        e.destroyed || (e.opened = !1, e.$containerEl = null, delete e.$containerEl, e.$el.trigger("smartselect:closed", e), e.emit("local::closed smartSelectClosed", e)) } }, { key: "openPage", value: function() { var e = this; if (e.opened) return e;
                        e.getItemsData(); var t = e.renderPage(e.items); return e.view.router.navigate({ url: e.url, route: { content: t, path: e.url, on: { pageBeforeIn: function(t, n) { e.onOpen("page", n.el) }, pageAfterIn: function(t, n) { e.onOpened("page", n.el) }, pageBeforeOut: function(t, n) { e.onClose("page", n.el) }, pageAfterOut: function(t, n) { e.onClosed("page", n.el) } } } }), e } }, { key: "openPopup", value: function() { var e = this; if (e.opened) return e;
                        e.getItemsData(); var t = { content: e.renderPopup(e.items), on: { popupOpen: function(t) { e.onOpen("popup", t.el) }, popupOpened: function(t) { e.onOpened("popup", t.el) }, popupClose: function(t) { e.onClose("popup", t.el) }, popupClosed: function(t) { e.onClosed("popup", t.el) } } }; return e.params.routableModals ? e.view.router.navigate({ url: e.url, route: { path: e.url, popup: t } }) : e.modal = e.app.popup.create(t).open(), e } }, { key: "openSheet", value: function() { var e = this; if (e.opened) return e;
                        e.getItemsData(); var t = { content: e.renderSheet(e.items), backdrop: !1, scrollToEl: e.$el, closeByOutsideClick: !0, on: { sheetOpen: function(t) { e.onOpen("sheet", t.el) }, sheetOpened: function(t) { e.onOpened("sheet", t.el) }, sheetClose: function(t) { e.onClose("sheet", t.el) }, sheetClosed: function(t) { e.onClosed("sheet", t.el) } } }; return e.params.routableModals ? e.view.router.navigate({ url: e.url, route: { path: e.url, sheet: t } }) : e.modal = e.app.sheet.create(t).open(), e } }, { key: "openPopover", value: function() { var e = this; if (e.opened) return e;
                        e.getItemsData(); var t = { content: e.renderPopover(e.items), targetEl: e.$el, on: { popoverOpen: function(t) { e.onOpen("popover", t.el) }, popoverOpened: function(t) { e.onOpened("popover", t.el) }, popoverClose: function(t) { e.onClose("popover", t.el) }, popoverClosed: function(t) { e.onClosed("popover", t.el) } } }; return e.params.routableModals ? e.view.router.navigate({ url: e.url, route: { path: e.url, popover: t } }) : e.modal = e.app.popover.create(t).open(), e } }, { key: "open", value: function(e) { var t = this; return t.opened ? t : (t["open" + (e || t.params.openIn).split("").map(function(e, t) { return 0 === t ? e.toUpperCase() : e }).join("")](), t) } }, { key: "close", value: function() { var e = this; return e.opened ? (e.params.routableModals || "page" === e.openedIn ? e.view.router.back() : (e.modal.once("modalClosed", function() { me.nextTick(function() { e.modal.destroy(), delete e.modal }) }), e.modal.close()), e) : e } }, { key: "init", value: function() { this.attachEvents(), this.setValue() } }, { key: "destroy", value: function() { var e = this;
                        e.emit("local::beforeDestroy smartSelectBeforeDestroy", e), e.$el.trigger("smartselect:beforedestroy", e), e.detachEvents(), delete e.$el[0].f7SmartSelect, me.deleteProps(e), e.destroyed = !0 } }]), t }(be),
            hn = { name: "smartSelect", params: { smartSelect: { el: void 0, valueEl: void 0, openIn: "page", pageTitle: void 0, pageBackLinkText: "Back", popupCloseLinkText: "Close", sheetCloseLinkText: "Done", searchbar: !1, searchbarPlaceholder: "Search", searchbarDisableText: "Cancel", closeOnSelect: !1, virtualList: !1, virtualListHeight: void 0, formColorTheme: void 0, navbarColorTheme: void 0, routableModals: !0, url: "select/", renderPage: void 0, renderPopup: void 0, renderSheet: void 0, renderPopover: void 0, renderItems: void 0, renderItem: void 0, renderSearchbar: void 0 } }, static: { SmartSelect: pn }, create: function() { var e = this;
                    e.smartSelect = me.extend(Ct({ defaultSelector: ".smart-select", constructor: pn, app: e, domProp: "f7SmartSelect" }), { open: function(t) { var n = e.smartSelect.get(t); if (n && n.open) return n.open() }, close: function(t) { var n = e.smartSelect.get(t); if (n && n.close) return n.close() } }) }, on: { tabMounted: function(e) { var t = this;
                        G(e).find(".smart-select-init").each(function(e, n) { t.smartSelect.create(me.extend({ el: n }, G(n).dataset())) }) }, tabBeforeRemove: function(e) { G(e).find(".smart-select-init").each(function(e, t) { t.f7SmartSelect && t.f7SmartSelect.destroy && t.f7SmartSelect.destroy() }) }, pageInit: function(e) { var t = this;
                        e.$el.find(".smart-select-init").each(function(e, n) { t.smartSelect.create(me.extend({ el: n }, G(n).dataset())) }) }, pageBeforeRemove: function(e) { e.$el.find(".smart-select-init").each(function(e, t) { t.f7SmartSelect && t.f7SmartSelect.destroy && t.f7SmartSelect.destroy() }) } }, clicks: { ".smart-select": function(e, t) { e[0].f7SmartSelect || this.smartSelect.create(me.extend({ el: e }, t)).open() } } },
            fn = function(e) {
                function t(e) { var n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    w()(this, t); var i = m()(this, (t.__proto__ || f()(t)).call(this, a, [e])),
                        r = i;
                    r.params = me.extend({}, e.params.calendar, a); var s, o = void 0; if (r.params.containerEl && 0 === (o = G(r.params.containerEl)).length) return s = r, m()(i, s); var l = void 0;
                    r.params.inputEl && (l = G(r.params.inputEl)); var c = void 0;
                    l && (c = l.parents(".view").length && l.parents(".view")[0].f7View), c || (c = e.views.main); var d = "horizontal" === r.params.direction,
                        u = 1;

                    function p() { r.open() }

                    function h(e) { e.preventDefault() }

                    function v(e) { var t = G(e.target);
                        r.isPopover() || r.opened && (t.closest('[class*="backdrop"]').length || (l && l.length > 0 ? t[0] !== l[0] && 0 === t.closest(".sheet-modal, .calendar-modal").length && r.close() : 0 === G(e.target).closest(".sheet-modal, .calendar-modal").length && r.close())) } return d && (u = e.rtl ? -1 : 1), me.extend(r, { app: e, $containerEl: o, containerEl: o && o[0], inline: o && o.length > 0, $inputEl: l, inputEl: l && l[0], initialized: !1, opened: !1, url: r.params.url, isHorizontal: d, inverter: u, view: c, animating: !1 }), me.extend(r, { attachInputEvents: function() { r.$inputEl.on("click", p), r.params.inputReadOnly && r.$inputEl.on("focus mousedown", h) }, detachInputEvents: function() { r.$inputEl.off("click", p), r.params.inputReadOnly && r.$inputEl.off("focus mousedown", h) }, attachHtmlEvents: function() { e.on("click", v) }, detachHtmlEvents: function() { e.off("click", v) } }), r.attachCalendarEvents = function() { var t = !0,
                            n = void 0,
                            a = void 0,
                            i = void 0,
                            s = void 0,
                            o = void 0,
                            l = void 0,
                            c = void 0,
                            d = void 0,
                            u = void 0,
                            p = void 0,
                            h = void 0,
                            f = void 0,
                            v = void 0,
                            m = r.$el,
                            g = r.$wrapperEl;

                        function b(e) { a || n || (n = !0, i = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, o = i, s = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, l = s, c = (new Date).getTime(), h = 0, t = !0, v = void 0, d = r.monthsTranslate) }

                        function y(e) { if (n) { var c = r.isHorizontal;
                                o = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, l = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, void 0 === v && (v = !!(v || Math.abs(l - s) > Math.abs(o - i))), c && v ? n = !1 : (e.preventDefault(), r.animating ? n = !1 : (t = !1, a || (a = !0, u = g[0].offsetWidth, p = g[0].offsetHeight, g.transition(0)), h = (f = c ? o - i : l - s) / (c ? u : p), d = 100 * (r.monthsTranslate * r.inverter + h), g.transform("translate3d(" + (c ? d : 0) + "%, " + (c ? 0 : d) + "%, 0)"))) } }

                        function w() { if (!n || !a) return n = !1, void(a = !1);
                            n = !1, a = !1, (new Date).getTime() - c < 300 ? Math.abs(f) < 10 ? r.resetMonth() : f >= 10 ? e.rtl ? r.nextMonth() : r.prevMonth() : e.rtl ? r.prevMonth() : r.nextMonth() : h <= -.5 ? e.rtl ? r.prevMonth() : r.nextMonth() : h >= .5 ? e.rtl ? r.nextMonth() : r.prevMonth() : r.resetMonth(), setTimeout(function() { t = !0 }, 100) }

                        function C(e) { if (t) { var n = G(e.target).parents(".calendar-day"); if (0 === n.length && G(e.target).hasClass("calendar-day") && (n = G(e.target)), 0 !== n.length && !n.hasClass("calendar-day-disabled")) { r.params.rangePicker || (n.hasClass("calendar-day-next") && r.nextMonth(), n.hasClass("calendar-day-prev") && r.prevMonth()); var a = n.attr("data-year"),
                                        i = n.attr("data-month"),
                                        s = n.attr("data-day");
                                    r.emit("local::dayClick calendarDayClick", r, n[0], a, i, s), (!n.hasClass("calendar-day-selected") || r.params.multiple || r.params.rangePicker) && r.addValue(new Date(a, i, s, 0, 0, 0)), r.params.closeOnSelect && (r.params.rangePicker && 2 === r.value.length || !r.params.rangePicker) && r.close() } } }

                        function x() { r.nextMonth() }

                        function k() { r.prevMonth() }

                        function E() { r.nextYear() }

                        function $() { r.prevYear() } var S = !("touchstart" !== e.touchEvents.start || !e.support.passiveListener) && { passive: !0, capture: !1 };
                        m.find(".calendar-prev-month-button").on("click", k), m.find(".calendar-next-month-button").on("click", x), m.find(".calendar-prev-year-button").on("click", $), m.find(".calendar-next-year-button").on("click", E), g.on("click", C), r.params.touchMove && (g.on(e.touchEvents.start, b, S), e.on("touchmove:active", y), e.on("touchend:passive", w)), r.detachCalendarEvents = function() { m.find(".calendar-prev-month-button").off("click", k), m.find(".calendar-next-month-button").off("click", x), m.find(".calendar-prev-year-button").off("click", $), m.find(".calendar-next-year-button").off("click", E), g.off("click", C), r.params.touchMove && (g.off(e.touchEvents.start, b, S), e.off("touchmove:active", y), e.off("touchend:passive", w)) } }, r.init(), n = r, m()(i, n) } return b()(t, e), x()(t, [{ key: "normalizeDate", value: function(e) { var t = new Date(e); return new Date(t.getFullYear(), t.getMonth(), t.getDate()) } }, { key: "normalizeValues", value: function(e) { var t = this,
                            n = []; return e && Array.isArray(e) && (n = e.map(function(e) { return t.normalizeDate(e) })), n } }, { key: "initInput", value: function() { this.$inputEl && this.params.inputReadOnly && this.$inputEl.prop("readOnly", !0) } }, { key: "isPopover", value: function() { var e = this.app,
                            t = this.modal,
                            n = this.params; if ("sheet" === n.openIn) return !1; if (t && "popover" !== t.type) return !1; if (!this.inline && this.inputEl) { if ("popover" === n.openIn) return !0; if (e.device.ios) return !!e.device.ipad; if (e.width >= 768) return !0 } return !1 } }, { key: "formatDate", value: function(e) { var t = new Date(e),
                            n = t.getFullYear(),
                            a = t.getMonth(),
                            i = a + 1,
                            r = t.getDate(),
                            s = t.getDay(),
                            o = this.params,
                            l = o.dateFormat,
                            c = o.monthNames,
                            d = o.monthNamesShort,
                            u = o.dayNames,
                            p = o.dayNamesShort; return l.replace(/yyyy/g, n).replace(/yy/g, String(n).substring(2)).replace(/mm/g, i < 10 ? "0" + i : i).replace(/m(\W+)/g, i + "$1").replace(/MM/g, c[a]).replace(/M(\W+)/g, d[a] + "$1").replace(/dd/g, r < 10 ? "0" + r : r).replace(/d(\W+)/g, r + "$1").replace(/DD/g, u[s]).replace(/D(\W+)/g, p[s] + "$1") } }, { key: "formatValue", value: function() { var e = this,
                            t = e.value; return e.params.formatValue ? e.params.formatValue.call(e, t) : t.map(function(t) { return e.formatDate(t) }).join(e.params.rangePicker ? " - " : ", ") } }, { key: "addValue", value: function(e) { var t = this.params,
                            n = t.multiple,
                            a = t.rangePicker; if (n) { this.value || (this.value = []); for (var i = void 0, r = 0; r < this.value.length; r += 1) new Date(e).getTime() === new Date(this.value[r]).getTime() && (i = r);
                            void 0 === i ? this.value.push(e) : this.value.splice(i, 1), this.updateValue() } else a ? (this.value || (this.value = []), 2 !== this.value.length && 0 !== this.value.length || (this.value = []), this.value[0] !== e ? this.value.push(e) : this.value = [], this.value.sort(function(e, t) { return e - t }), this.updateValue()) : (this.value = [e], this.updateValue()) } }, { key: "setValue", value: function(e) { this.value = e, this.updateValue() } }, { key: "getValue", value: function() { return this.value } }, { key: "updateValue", value: function(e) { var t = this.$el,
                            n = this.$wrapperEl,
                            a = this.$inputEl,
                            i = this.value,
                            r = this.params,
                            s = void 0; if (t && t.length > 0) { n.find(".calendar-day-selected").removeClass("calendar-day-selected"); var o = void 0; if (r.rangePicker && 2 === i.length)
                                for (s = new Date(i[0]).getTime(); s <= new Date(i[1]).getTime(); s += 864e5) o = new Date(s), n.find('.calendar-day[data-date="' + o.getFullYear() + "-" + o.getMonth() + "-" + o.getDate() + '"]').addClass("calendar-day-selected");
                            else
                                for (s = 0; s < this.value.length; s += 1) o = new Date(i[s]), n.find('.calendar-day[data-date="' + o.getFullYear() + "-" + o.getMonth() + "-" + o.getDate() + '"]').addClass("calendar-day-selected") } if (e || this.emit("local::change calendarChange", this, i), a && a.length || r.header) { var l = this.formatValue(i);
                            r.header && t && t.length && t.find(".calendar-selected-date").text(l), a && a.length && !e && (a.val(l), a.trigger("change")) } } }, { key: "updateCurrentMonthYear", value: function(e) { var t = this.$months,
                            n = this.$el,
                            a = this.params;
                        void 0 === e ? (this.currentMonth = parseInt(t.eq(1).attr("data-month"), 10), this.currentYear = parseInt(t.eq(1).attr("data-year"), 10)) : (this.currentMonth = parseInt(t.eq("next" === e ? t.length - 1 : 0).attr("data-month"), 10), this.currentYear = parseInt(t.eq("next" === e ? t.length - 1 : 0).attr("data-year"), 10)), n.find(".current-month-value").text(a.monthNames[this.currentMonth]), n.find(".current-year-value").text(this.currentYear) } }, { key: "update", value: function() { var e = this,
                            t = e.currentYear,
                            n = e.currentMonth,
                            a = e.$wrapperEl,
                            i = new Date(t, n),
                            r = e.renderMonth(i, "prev"),
                            s = e.renderMonth(i),
                            o = e.renderMonth(i, "next");
                        a.transition(0).html("" + r + s + o).transform("translate3d(0,0,0)"), e.$months = a.find(".calendar-month"), e.monthsTranslate = 0, e.setMonthsTranslate(), e.$months.each(function(t, n) { e.emit("local::monthAdd calendarMonthAdd", n) }) } }, { key: "onMonthChangeStart", value: function(e) { var t = this.$months,
                            n = this.currentYear,
                            a = this.currentMonth;
                        this.updateCurrentMonthYear(e), t.removeClass("calendar-month-current calendar-month-prev calendar-month-next"); var i = "next" === e ? t.length - 1 : 0;
                        t.eq(i).addClass("calendar-month-current"), t.eq("next" === e ? i - 1 : i + 1).addClass("next" === e ? "calendar-month-prev" : "calendar-month-next"), this.emit("local::monthYearChangeStart calendarMonthYearChangeStart", this, n, a) } }, { key: "onMonthChangeEnd", value: function(e, t) { var n = this.currentYear,
                            a = this.currentMonth,
                            i = this.$wrapperEl,
                            r = this.monthsTranslate;
                        this.animating = !1; var s = void 0,
                            o = void 0,
                            l = void 0;
                        i.find(".calendar-month:not(.calendar-month-prev):not(.calendar-month-current):not(.calendar-month-next)").remove(), void 0 === e && (e = "next", t = !0), t ? (i.find(".calendar-month-next, .calendar-month-prev").remove(), o = this.renderMonth(new Date(n, a), "prev"), s = this.renderMonth(new Date(n, a), "next")) : l = this.renderMonth(new Date(n, a), e), ("next" === e || t) && i.append(l || s), ("prev" === e || t) && i.prepend(l || o); var c = i.find(".calendar-month");
                        this.$months = c, this.setMonthsTranslate(r), this.emit("local::monthAdd calendarMonthAdd", this, "next" === e ? c.eq(c.length - 1)[0] : c.eq(0)[0]), this.emit("local::monthYearChangeEnd calendarMonthYearChangeEnd", this, n, a) } }, { key: "setMonthsTranslate", value: function(e) { var t = this.$months,
                            n = this.isHorizontal,
                            a = this.inverter;
                        e = e || this.monthsTranslate || 0, void 0 === this.monthsTranslate && (this.monthsTranslate = e), t.removeClass("calendar-month-current calendar-month-prev calendar-month-next"); var i = 100 * -(e + 1) * a,
                            r = 100 * -e * a,
                            s = 100 * -(e - 1) * a;
                        t.eq(0).transform("translate3d(" + (n ? i : 0) + "%, " + (n ? 0 : i) + "%, 0)").addClass("calendar-month-prev"), t.eq(1).transform("translate3d(" + (n ? r : 0) + "%, " + (n ? 0 : r) + "%, 0)").addClass("calendar-month-current"), t.eq(2).transform("translate3d(" + (n ? s : 0) + "%, " + (n ? 0 : s) + "%, 0)").addClass("calendar-month-next") } }, { key: "nextMonth", value: function(e) { var t = this,
                            n = t.params,
                            a = t.$wrapperEl,
                            i = t.inverter,
                            r = t.isHorizontal;
                        void 0 !== e && "object" !== (void 0 === e ? "undefined" : S()(e)) || (e = "", n.animate || (e = 0)); var s = parseInt(t.$months.eq(t.$months.length - 1).attr("data-month"), 10),
                            o = parseInt(t.$months.eq(t.$months.length - 1).attr("data-year"), 10),
                            l = new Date(o, s).getTime(),
                            c = !t.animating; if (n.maxDate && l > new Date(n.maxDate).getTime()) t.resetMonth();
                        else { if (t.monthsTranslate -= 1, s === t.currentMonth) { var d = 100 * -t.monthsTranslate * i,
                                    u = G(t.renderMonth(l, "next")).transform("translate3d(" + (r ? d : 0) + "%, " + (r ? 0 : d) + "%, 0)").addClass("calendar-month-next");
                                a.append(u[0]), t.$months = a.find(".calendar-month"), t.emit("local::monthAdd calendarMonthAdd", t.$months.eq(t.$months.length - 1)[0]) } t.animating = !0, t.onMonthChangeStart("next"); var p = 100 * t.monthsTranslate * i;
                            a.transition(e).transform("translate3d(" + (r ? p : 0) + "%, " + (r ? 0 : p) + "%, 0)"), c && a.transitionEnd(function() { t.onMonthChangeEnd("next") }), n.animate || t.onMonthChangeEnd("next") } } }, { key: "prevMonth", value: function(e) { var t = this,
                            n = t.params,
                            a = t.$wrapperEl,
                            i = t.inverter,
                            r = t.isHorizontal;
                        void 0 !== e && "object" !== (void 0 === e ? "undefined" : S()(e)) || (e = "", n.animate || (e = 0)); var s = parseInt(t.$months.eq(0).attr("data-month"), 10),
                            o = parseInt(t.$months.eq(0).attr("data-year"), 10),
                            l = new Date(o, s + 1, -1).getTime(),
                            c = !t.animating; if (n.minDate && l < new Date(n.minDate).getTime()) t.resetMonth();
                        else { if (t.monthsTranslate += 1, s === t.currentMonth) { var d = 100 * -t.monthsTranslate * i,
                                    u = G(t.renderMonth(l, "prev")).transform("translate3d(" + (r ? d : 0) + "%, " + (r ? 0 : d) + "%, 0)").addClass("calendar-month-prev");
                                a.prepend(u[0]), t.$months = a.find(".calendar-month"), t.emit("local::monthAdd calendarMonthAdd", t.$months.eq(0)[0]) } t.animating = !0, t.onMonthChangeStart("prev"); var p = 100 * t.monthsTranslate * i;
                            a.transition(e).transform("translate3d(" + (r ? p : 0) + "%, " + (r ? 0 : p) + "%, 0)"), c && a.transitionEnd(function() { t.onMonthChangeEnd("prev") }), n.animate || t.onMonthChangeEnd("prev") } } }, { key: "resetMonth", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = this.$wrapperEl,
                            n = this.inverter,
                            a = this.isHorizontal,
                            i = 100 * this.monthsTranslate * n;
                        t.transition(e).transform("translate3d(" + (a ? i : 0) + "%, " + (a ? 0 : i) + "%, 0)") } }, { key: "setYearMonth", value: function(e, t, n) { var a = this,
                            i = a.params,
                            r = a.isHorizontal,
                            s = a.$wrapperEl,
                            o = a.inverter;
                        void 0 === e && (e = a.currentYear), void 0 === t && (t = a.currentMonth), void 0 !== n && "object" !== (void 0 === n ? "undefined" : S()(n)) || (n = "", i.animate || (n = 0)); var l = void 0; if (l = e < a.currentYear ? new Date(e, t + 1, -1).getTime() : new Date(e, t).getTime(), i.maxDate && l > new Date(i.maxDate).getTime()) return !1; if (i.minDate && l < new Date(i.minDate).getTime()) return !1; var c = new Date(a.currentYear, a.currentMonth).getTime(),
                            d = l > c ? "next" : "prev",
                            u = a.renderMonth(new Date(e, t));
                        a.monthsTranslate = a.monthsTranslate || 0; var p = a.monthsTranslate,
                            h = void 0,
                            f = !a.animating;
                        l > c ? (a.monthsTranslate -= 1, a.animating || a.$months.eq(a.$months.length - 1).remove(), s.append(u), a.$months = s.find(".calendar-month"), h = 100 * -(p - 1) * o, a.$months.eq(a.$months.length - 1).transform("translate3d(" + (r ? h : 0) + "%, " + (r ? 0 : h) + "%, 0)").addClass("calendar-month-next")) : (a.monthsTranslate += 1, a.animating || a.$months.eq(0).remove(), s.prepend(u), a.$months = s.find(".calendar-month"), h = 100 * -(p + 1) * o, a.$months.eq(0).transform("translate3d(" + (r ? h : 0) + "%, " + (r ? 0 : h) + "%, 0)").addClass("calendar-month-prev")), a.emit("local::monthAdd calendarMonthAdd", "next" === d ? a.$months.eq(a.$months.length - 1)[0] : a.$months.eq(0)[0]), a.animating = !0, a.onMonthChangeStart(d); var v = 100 * a.monthsTranslate * o;
                        s.transition(n).transform("translate3d(" + (r ? v : 0) + "%, " + (r ? 0 : v) + "%, 0)"), f && s.transitionEnd(function() { a.onMonthChangeEnd(d, !0) }), i.animate || a.onMonthChangeEnd(d) } }, { key: "nextYear", value: function() { this.setYearMonth(this.currentYear + 1) } }, { key: "prevYear", value: function() { this.setYearMonth(this.currentYear - 1) } }, { key: "dateInRange", value: function(e, t) { var n = !1,
                            a = void 0; if (!t) return !1; if (Array.isArray(t))
                            for (a = 0; a < t.length; a += 1) t[a].from || t[a].to ? t[a].from && t[a].to ? e <= new Date(t[a].to).getTime() && e >= new Date(t[a].from).getTime() && (n = !0) : t[a].from ? e >= new Date(t[a].from).getTime() && (n = !0) : t[a].to && e <= new Date(t[a].to).getTime() && (n = !0) : e === new Date(t[a]).getTime() && (n = !0);
                        else t.from || t.to ? t.from && t.to ? e <= new Date(t.to).getTime() && e >= new Date(t.from).getTime() && (n = !0) : t.from ? e >= new Date(t.from).getTime() && (n = !0) : t.to && e <= new Date(t.to).getTime() && (n = !0) : "function" == typeof t && (n = t(new Date(e))); return n } }, { key: "daysInMonth", value: function(e) { var t = new Date(e); return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate() } }, { key: "renderMonths", value: function(e) { return this.params.renderMonths ? this.params.renderMonths.call(this, e) : ('\n      <div class="calendar-months-wrapper">\n        ' + this.renderMonth(e, "prev") + "\n        " + this.renderMonth(e) + "\n        " + this.renderMonth(e, "next") + "\n      </div>\n    ").trim() } }, { key: "renderMonth", value: function(e, t) { var n = this.params,
                            a = this.value; if (n.renderMonth) return n.renderMonth.call(this, e, t); var i = new Date(e),
                            r = i.getFullYear(),
                            s = i.getMonth(); "next" === t && (i = 11 === s ? new Date(r + 1, 0) : new Date(r, s + 1, 1)), "prev" === t && (i = 0 === s ? new Date(r - 1, 11) : new Date(r, s - 1, 1)), "next" !== t && "prev" !== t || (s = i.getMonth(), r = i.getFullYear()); var o = [],
                            l = (new Date).setHours(0, 0, 0, 0),
                            c = n.minDate ? new Date(n.minDate).getTime() : null,
                            d = n.maxDate ? new Date(n.maxDate).getTime() : null,
                            u = this.daysInMonth(new Date(i.getFullYear(), i.getMonth()).getTime() - 864e6),
                            p = this.daysInMonth(i),
                            h = 6 === n.firstDay ? 0 : 1,
                            f = "",
                            v = n.firstDay - 1 + 0,
                            m = void 0,
                            g = void 0,
                            b = new Date(i.getFullYear(), i.getMonth()).getDay(); if (0 === b && (b = 7), a && a.length)
                            for (var y = 0; y < a.length; y += 1) o.push(new Date(a[y]).setHours(0, 0, 0, 0)); for (var w = 1; w <= 6; w += 1) { for (var C = "", x = 1; x <= 7; x += 1) { var k = void 0,
                                    E = (v += 1) - b,
                                    $ = "";
                                1 === w && 1 === x && E > h && 1 !== n.firstDay && (E = (v -= 7) - b); var S = x - 1 + n.firstDay > 6 ? x - 1 - 7 + n.firstDay : x - 1 + n.firstDay; if (E < 0 ? (E = u + E + 1, $ += " calendar-day-prev", k = new Date(s - 1 < 0 ? r - 1 : r, s - 1 < 0 ? 11 : s - 1, E).getTime()) : (E += 1) > p ? (E -= p, $ += " calendar-day-next", k = new Date(s + 1 > 11 ? r + 1 : r, s + 1 > 11 ? 0 : s + 1, E).getTime()) : k = new Date(r, s, E).getTime(), k === l && ($ += " calendar-day-today"), n.rangePicker && 2 === o.length ? k >= o[0] && k <= o[1] && ($ += " calendar-day-selected") : o.indexOf(k) >= 0 && ($ += " calendar-day-selected"), n.weekendDays.indexOf(S) >= 0 && ($ += " calendar-day-weekend"), g = !1, n.events && this.dateInRange(k, n.events) && (g = !0), g && ($ += " calendar-day-has-events"), n.rangesClasses)
                                    for (var T = 0; T < n.rangesClasses.length; T += 1) this.dateInRange(k, n.rangesClasses[T].range) && ($ += " " + n.rangesClasses[T].cssClass);
                                m = !1, (c && k < c || d && k > d) && (m = !0), n.disabled && this.dateInRange(k, n.disabled) && (m = !0), m && ($ += " calendar-day-disabled"); var _ = (k = new Date(k)).getFullYear(),
                                    M = k.getMonth();
                                C += ('\n          <div data-year="' + _ + '" data-month="' + M + '" data-day="' + E + '" class="calendar-day' + $ + '" data-date="' + _ + "-" + M + "-" + E + '">\n            <span>' + E + "</span>\n          </div>").trim() } f += '<div class="calendar-row">' + C + "</div>" } return f = '<div class="calendar-month" data-year="' + r + '" data-month="' + s + '">' + f + "</div>" } }, { key: "renderWeekHeader", value: function() { if (this.params.renderWeekHeader) return this.params.renderWeekHeader.call(this); for (var e = this.params, t = "", n = 0; n < 7; n += 1) { var a = n + e.firstDay > 6 ? n - 7 + e.firstDay : n + e.firstDay;
                            t += '<div class="calendar-week-day">' + e.dayNamesShort[a] + "</div>" } return ('\n      <div class="calendar-week-header">\n        ' + t + "\n      </div>\n    ").trim() } }, { key: "renderMonthSelector", value: function() { var e = this.app; if (this.params.renderMonthSelector) return this.params.renderMonthSelector.call(this); var t = void 0;
                        this.inline && 0 === this.$containerEl.closest(".theme-dark").length ? t = !0 : 0 === e.root.closest(".theme-dark").length && (t = !0); var n = "md" === e.theme && t ? "color-black" : ""; return ('\n      <div class="calendar-month-selector">\n        <a href="#" class="link icon-only calendar-prev-month-button">\n          <i class="icon icon-prev ' + n + '"></i>\n        </a>\n        <span class="current-month-value"></span>\n        <a href="#" class="link icon-only calendar-next-month-button">\n          <i class="icon icon-next ' + n + '"></i>\n        </a>\n      </div>\n    ').trim() } }, { key: "renderYearSelector", value: function() { var e = this.app; if (this.params.renderYearSelector) return this.params.renderYearSelector.call(this); var t = void 0;
                        this.inline && 0 === this.$containerEl.closest(".theme-dark").length ? t = !0 : 0 === e.root.closest(".theme-dark").length && (t = !0); var n = "md" === e.theme && t ? "color-black" : ""; return ('\n      <div class="calendar-year-selector">\n        <a href="#" class="link icon-only calendar-prev-year-button">\n          <i class="icon icon-prev ' + n + '"></i>\n        </a>\n        <span class="current-year-value"></span>\n        <a href="#" class="link icon-only calendar-next-year-button">\n          <i class="icon icon-next ' + n + '"></i>\n        </a>\n      </div>\n    ').trim() } }, { key: "renderHeader", value: function() { return this.params.renderHeader ? this.params.renderHeader.call(this) : ('\n      <div class="calendar-header">\n        <div class="calendar-selected-date">' + this.params.headerPlaceholder + "</div>\n      </div>\n    ").trim() } }, { key: "renderFooter", value: function() { var e = this.app; return this.params.renderFooter ? this.params.renderFooter.call(this) : ('\n      <div class="calendar-footer">\n        <a href="#" class="' + ("md" === e.theme ? "button" : "link") + ' calendar-close sheet-close popover-close">' + this.params.toolbarCloseText + "</a>\n      </div>\n    ").trim() } }, { key: "renderToolbar", value: function() { return this.params.renderToolbar ? this.params.renderToolbar.call(this, this) : ('\n      <div class="toolbar no-shadow">\n        <div class="toolbar-inner">\n          ' + this.renderMonthSelector() + "\n          " + this.renderYearSelector() + "\n        </div>\n      </div>\n    ").trim() } }, { key: "renderInline", value: function() { var e = this.params,
                            t = e.cssClass,
                            n = e.toolbar,
                            a = e.header,
                            i = e.footer,
                            r = e.rangePicker,
                            s = e.weekHeader,
                            o = this.value,
                            l = o && o.length ? o[0] : (new Date).setHours(0, 0, 0); return ('\n      <div class="calendar calendar-inline ' + (r ? "calendar-range" : "") + " " + (t || "") + '">\n        ' + (a ? this.renderHeader() : "") + "\n        " + (n ? this.renderToolbar() : "") + "\n        " + (s ? this.renderWeekHeader() : "") + '\n        <div class="calendar-months">\n          ' + this.renderMonths(l) + "\n        </div>\n        " + (i ? this.renderFooter() : "") + "\n      </div>\n    ").trim() } }, { key: "renderCustomModal", value: function() { var e = this.params,
                            t = e.cssClass,
                            n = e.toolbar,
                            a = e.header,
                            i = e.footer,
                            r = e.rangePicker,
                            s = e.weekHeader,
                            o = this.value,
                            l = o && o.length ? o[0] : (new Date).setHours(0, 0, 0); return ('\n      <div class="calendar calendar-modal ' + (r ? "calendar-range" : "") + " " + (t || "") + '">\n        ' + (a ? this.renderHeader() : "") + "\n        " + (n ? this.renderToolbar() : "") + "\n        " + (s ? this.renderWeekHeader() : "") + '\n        <div class="calendar-months">\n          ' + this.renderMonths(l) + "\n        </div>\n        " + (i ? this.renderFooter() : "") + "\n      </div>\n    ").trim() } }, { key: "renderSheet", value: function() { var e = this.params,
                            t = e.cssClass,
                            n = e.toolbar,
                            a = e.header,
                            i = e.footer,
                            r = e.rangePicker,
                            s = e.weekHeader,
                            o = this.value,
                            l = o && o.length ? o[0] : (new Date).setHours(0, 0, 0); return ('\n      <div class="sheet-modal calendar calendar-sheet ' + (r ? "calendar-range" : "") + " " + (t || "") + '">\n        ' + (a ? this.renderHeader() : "") + "\n        " + (n ? this.renderToolbar() : "") + "\n        " + (s ? this.renderWeekHeader() : "") + '\n        <div class="sheet-modal-inner calendar-months">\n          ' + this.renderMonths(l) + "\n        </div>\n        " + (i ? this.renderFooter() : "") + "\n      </div>\n    ").trim() } }, { key: "renderPopover", value: function() { var e = this.params,
                            t = e.cssClass,
                            n = e.toolbar,
                            a = e.header,
                            i = e.footer,
                            r = e.rangePicker,
                            s = e.weekHeader,
                            o = this.value,
                            l = o && o.length ? o[0] : (new Date).setHours(0, 0, 0); return ('\n      <div class="popover calendar-popover">\n        <div class="popover-inner">\n          <div class="calendar ' + (r ? "calendar-range" : "") + " " + (t || "") + '">\n            ' + (a ? this.renderHeader() : "") + "\n            " + (n ? this.renderToolbar() : "") + "\n            " + (s ? this.renderWeekHeader() : "") + '\n            <div class="calendar-months">\n              ' + this.renderMonths(l) + "\n            </div>\n            " + (i ? this.renderFooter() : "") + "\n          </div>\n        </div>\n      </div>\n    ").trim() } }, { key: "render", value: function() { var e = this.params; if (e.render) return e.render.call(this); if (!this.inline) { var t = e.openIn; return "auto" === t && (t = this.isPopover() ? "popover" : "sheet"), "popover" === t ? this.renderPopover() : "sheet" === t ? this.renderSheet() : this.renderCustomModal() } return this.renderInline() } }, { key: "onOpen", value: function() { var e = this,
                            t = e.initialized,
                            n = e.$el,
                            a = e.app,
                            i = e.$inputEl,
                            r = e.inline,
                            s = e.value,
                            o = e.params;
                        e.opened = !0, e.attachCalendarEvents(); var l = !s && o.value;
                        t ? s && e.setValue(s, 0) : s ? e.setValue(s, 0) : o.value && e.setValue(e.normalizeValues(o.value), 0), e.updateCurrentMonthYear(), e.monthsTranslate = 0, e.setMonthsTranslate(), l ? e.updateValue() : o.header && s && e.updateValue(!0), !r && i.length && "md" === a.theme && i.trigger("focus"), e.initialized = !0, e.$months.each(function(t, n) { e.emit("local::monthAdd calendarMonthAdd", n) }), n && n.trigger("calendar:open", e), i && i.trigger("calendar:open", e), e.emit("local::open calendarOpen", e) } }, { key: "onOpened", value: function() { this.$el && this.$el.trigger("calendar:opened", this), this.$inputEl && this.$inputEl.trigger("calendar:opened", this), this.emit("local::opened calendarOpened", this) } }, { key: "onClose", value: function() { var e = this.app;
                        this.$inputEl && "md" === e.theme && this.$inputEl.trigger("blur"), this.detachCalendarEvents && this.detachCalendarEvents(), this.$el && this.$el.trigger("calendar:close", this), this.$inputEl && this.$inputEl.trigger("calendar:close", this), this.emit("local::close calendarClose", this) } }, { key: "onClosed", value: function() { var e = this;
                        e.opened = !1, e.inline || me.nextTick(function() { e.modal && e.modal.el && e.modal.destroy && (e.params.routableModals || e.modal.destroy()), delete e.modal }), e.$el && e.$el.trigger("calendar:closed", e), e.$inputEl && e.$inputEl.trigger("calendar:closed", e), e.emit("local::closed calendarClosed", e) } }, { key: "open", value: function() { var e = this,
                            t = e.app,
                            n = e.opened,
                            a = e.inline,
                            i = e.$inputEl,
                            r = e.params; if (!n) { if (a) return e.$el = G(e.render()), e.$el[0].f7Calendar = e, e.$wrapperEl = e.$el.find(".calendar-months-wrapper"), e.$months = e.$wrapperEl.find(".calendar-month"), e.$containerEl.append(e.$el), e.onOpen(), void e.onOpened(); var s = r.openIn; "auto" === s && (s = e.isPopover() ? "popover" : "sheet"); var o = e.render(),
                                c = { targetEl: i, scrollToEl: e.params.scrollToInput ? i : void 0, content: o, backdrop: "popover" === s && !1 !== t.params.popover.backdrop, on: { open: function() { e.modal = this, e.$el = "popover" === s ? this.$el.find(".calendar") : this.$el, e.$wrapperEl = e.$el.find(".calendar-months-wrapper"), e.$months = e.$wrapperEl.find(".calendar-month"), e.$el[0].f7Calendar = e, "customModal" === s && G(e.$el).find(".calendar-close").once("click", function() { e.close() }), e.onOpen() }, opened: function() { e.onOpened() }, close: function() { e.onClose() }, closed: function() { e.onClosed() } } };
                            e.params.routableModals ? e.view.router.navigate({ url: e.url, route: l()({ path: e.url }, s, c) }) : (e.modal = t[s].create(c), e.modal.open()) } } }, { key: "close", value: function() { var e = this.opened,
                            t = this.inline; if (e) return t ? (this.onClose(), void this.onClosed()) : void(this.params.routableModals ? this.view.router.back() : this.modal.close()) } }, { key: "init", value: function() { if (this.initInput(), this.inline) return this.open(), void this.emit("local::init calendarInit", this);!this.initialized && this.params.value && this.setValue(this.normalizeValues(this.params.value)), this.$inputEl && this.attachInputEvents(), this.params.closeByOutsideClick && this.attachHtmlEvents(), this.emit("local::init calendarInit", this) } }, { key: "destroy", value: function() { if (!this.destroyed) { var e = this.$el;
                            this.emit("local::beforeDestroy calendarBeforeDestroy", this), e && e.trigger("calendar:beforedestroy", this), this.close(), this.$inputEl && this.detachInputEvents(), this.params.closeByOutsideClick && this.detachHtmlEvents(), e && e.length && delete this.$el[0].f7Calendar, me.deleteProps(this), this.destroyed = !0 } } }]), t }(be),
            vn = { name: "calendar", static: { Calendar: fn }, create: function() { this.calendar = Ct({ defaultSelector: ".calendar", constructor: fn, app: this, domProp: "f7Calendar" }), this.calendar.close = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".calendar",
                            t = G(e); if (0 !== t.length) { var n = t[0].f7Calendar;!n || n && !n.opened || n.close() } } }, params: { calendar: { monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], firstDay: 1, weekendDays: [0, 6], multiple: !1, rangePicker: !1, dateFormat: "yyyy-mm-dd", direction: "horizontal", minDate: null, maxDate: null, disabled: null, events: null, rangesClasses: null, touchMove: !0, animate: !0, closeOnSelect: !1, monthSelector: !0, yearSelector: !0, weekHeader: !0, value: null, containerEl: null, openIn: "auto", formatValue: null, inputEl: null, inputReadOnly: !0, closeByOutsideClick: !0, scrollToInput: !0, header: !1, headerPlaceholder: "Select date", footer: !1, toolbar: !0, toolbarCloseText: "Done", cssClass: null, routableModals: !0, view: null, url: "date/", renderWeekHeader: null, renderMonths: null, renderMonth: null, renderMonthSelector: null, renderYearSelector: null, renderHeader: null, renderFooter: null, renderToolbar: null, renderInline: null, renderPopover: null, renderSheet: null, render: null } } }; var mn = function(e) {
                function t(e) { var n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    w()(this, t); var i = m()(this, (t.__proto__ || f()(t)).call(this, a, [e])),
                        r = i;
                    r.params = me.extend({}, e.params.picker, a); var s, o = void 0; if (r.params.containerEl && 0 === (o = G(r.params.containerEl)).length) return s = r, m()(i, s); var l = void 0;
                    r.params.inputEl && (l = G(r.params.inputEl)); var c = void 0;

                    function d() { r.resizeCols() }

                    function u() { r.open() }

                    function p(e) { e.preventDefault() }

                    function h(e) { var t = G(e.target);
                        r.isPopover() || r.opened && (t.closest('[class*="backdrop"]').length || (l && l.length > 0 ? t[0] !== l[0] && 0 === t.closest(".sheet-modal").length && r.close() : 0 === G(e.target).closest(".sheet-modal").length && r.close())) } return l && (c = l.parents(".view").length && l.parents(".view")[0].f7View), c || (c = e.views.main), me.extend(r, { app: e, $containerEl: o, containerEl: o && o[0], inline: o && o.length > 0, needsOriginFix: e.device.ios || A.navigator.userAgent.toLowerCase().indexOf("safari") >= 0 && A.navigator.userAgent.toLowerCase().indexOf("chrome") < 0 && !e.device.android, cols: [], $inputEl: l, inputEl: l && l[0], initialized: !1, opened: !1, url: r.params.url, view: c }), me.extend(r, { attachResizeEvent: function() { e.on("resize", d) }, detachResizeEvent: function() { e.off("resize", d) }, attachInputEvents: function() { r.$inputEl.on("click", u), r.params.inputReadOnly && r.$inputEl.on("focus mousedown", p) }, detachInputEvents: function() { r.$inputEl.off("click", u), r.params.inputReadOnly && r.$inputEl.off("focus mousedown", p) }, attachHtmlEvents: function() { e.on("click", h) }, detachHtmlEvents: function() { e.off("click", h) } }), r.init(), n = r, m()(i, n) } return b()(t, e), x()(t, [{ key: "initInput", value: function() { this.$inputEl && this.params.inputReadOnly && this.$inputEl.prop("readOnly", !0) } }, { key: "resizeCols", value: function() { if (this.opened)
                            for (var e = 0; e < this.cols.length; e += 1) this.cols[e].divider || (this.cols[e].calcSize(), this.cols[e].setValue(this.cols[e].value, 0, !1)) } }, { key: "isPopover", value: function() { var e = this.app,
                            t = this.modal,
                            n = this.params; if ("sheet" === n.openIn) return !1; if (t && "popover" !== t.type) return !1; if (!this.inline && this.inputEl) { if ("popover" === n.openIn) return !0; if (e.device.ios) return !!e.device.ipad; if (e.width >= 768) return !0 } return !1 } }, { key: "formatValue", value: function() { var e = this.value,
                            t = this.displayValue; return this.params.formatValue ? this.params.formatValue.call(this, e, t) : e.join(" ") } }, { key: "setValue", value: function(e, t) { var n = 0; if (0 === this.cols.length) return this.value = e, void this.updateValue(e); for (var a = 0; a < this.cols.length; a += 1) this.cols[a] && !this.cols[a].divider && (this.cols[a].setValue(e[n], t), n += 1) } }, { key: "getValue", value: function() { return this.value } }, { key: "updateValue", value: function(e) { var t = e || [],
                            n = [],
                            a = void 0; if (0 === this.cols.length)
                            for (var i = this.params.cols.filter(function(e) { return !e.divider }), r = 0; r < i.length; r += 1) void 0 !== (a = i[r]).displayValues && void 0 !== a.values && -1 !== a.values.indexOf(t[r]) ? n.push(a.displayValues[a.values.indexOf(t[r])]) : n.push(t[r]);
                        else
                            for (var s = 0; s < this.cols.length; s += 1) this.cols[s].divider || (t.push(this.cols[s].value), n.push(this.cols[s].displayValue));
                        t.indexOf(void 0) >= 0 || (this.value = t, this.displayValue = n, this.emit("local::change pickerChange", this, this.value, this.displayValue), this.inputEl && (this.$inputEl.val(this.formatValue()), this.$inputEl.trigger("change"))) } }, { key: "initColumn", value: function(e, t) {
                        (function(e, t) { var n = this,
                                a = n.app,
                                i = G(e),
                                r = i.index(),
                                s = n.cols[r]; if (!s.divider) { s.$el = i, s.el = i[0], s.$itemsEl = s.$el.find(".picker-items"), s.items = s.$itemsEl.find(".picker-item"); var o = void 0,
                                    l = void 0,
                                    c = void 0,
                                    d = void 0,
                                    u = void 0;
                                s.replaceValues = function(e, t) { s.detachEvents(), s.values = e, s.displayValues = t, s.$itemsEl.html(n.renderColumn(s, !0)), s.items = s.$itemsEl.find(".picker-item"), s.calcSize(), s.setValue(s.values[0], 0, !0), s.attachEvents() }, s.calcSize = function() { n.params.rotateEffect && (s.$el.removeClass("picker-column-absolute"), s.width || s.$el.css({ width: "" })); var e = 0,
                                        t = s.$el[0].offsetHeight;
                                    o = s.items[0].offsetHeight, l = o * s.items.length, c = t / 2 - l + o / 2, d = t / 2 - o / 2, s.width && (e = s.width, parseInt(e, 10) === e && (e += "px"), s.$el.css({ width: e })), n.params.rotateEffect && (s.width || (s.items.each(function(t, n) { var a = G(n).children("span");
                                        e = Math.max(e, a[0].offsetWidth) }), s.$el.css({ width: e + 2 + "px" })), s.$el.addClass("picker-column-absolute")) }, s.setValue = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                        a = arguments[2],
                                        i = s.$itemsEl.find('.picker-item[data-picker-value="' + e + '"]').index(); if (void 0 !== i && -1 !== i) { var r = -i * o + d;
                                        s.$itemsEl.transition(t), s.$itemsEl.transform("translate3d(0," + r + "px,0)"), n.params.updateValuesOnMomentum && s.activeIndex && s.activeIndex !== i && (me.cancelAnimationFrame(u), s.$itemsEl.transitionEnd(function() { me.cancelAnimationFrame(u) }), E()), s.updateItems(i, r, t, a) } }, s.updateItems = function(e, t, a, i) { void 0 === t && (t = me.getTranslate(s.$itemsEl[0], "y")), void 0 === e && (e = -Math.round((t - d) / o)), e < 0 && (e = 0), e >= s.items.length && (e = s.items.length - 1); var r = s.activeIndex;
                                    s.activeIndex = e, s.$itemsEl.find(".picker-item-selected").removeClass("picker-item-selected"), s.items.transition(a); var l = s.items.eq(e).addClass("picker-item-selected").transform("");
                                    n.params.rotateEffect && s.items.each(function(e, a) { var i = G(a),
                                            r = (i.index() * o - (d - t)) / o,
                                            l = Math.ceil(s.height / o / 2) + 1,
                                            c = -18 * r;
                                        c > 180 && (c = 180), c < -180 && (c = -180), Math.abs(r) > l ? i.addClass("picker-item-far") : i.removeClass("picker-item-far"), i.transform("translate3d(0, " + (-t + d) + "px, " + (n.needsOriginFix ? -110 : 0) + "px) rotateX(" + c + "deg)") }), (i || void 0 === i) && (s.value = l.attr("data-picker-value"), s.displayValue = s.displayValues ? s.displayValues[e] : s.value, r !== e && (s.onChange && s.onChange(n, s.value, s.displayValue), n.updateValue())) }; var p = !0,
                                    h = void 0,
                                    f = void 0,
                                    v = void 0,
                                    m = void 0,
                                    g = void 0,
                                    b = void 0,
                                    y = void 0,
                                    w = void 0,
                                    C = void 0,
                                    x = void 0,
                                    k = !!a.support.passiveListener && { passive: !1, capture: !1 };
                                s.attachEvents = function() { s.$el.on(a.touchEvents.start, $, k), a.on("touchmove:active", S), a.on("touchend:passive", T), s.items.on("click", _) }, s.detachEvents = function() { s.$el.off(a.touchEvents.start, $, k), a.off("touchmove:active", S), a.off("touchend:passive", T), s.items.off("click", _) }, s.init = function() { s.calcSize(), s.$itemsEl.transform("translate3d(0," + d + "px,0)").transition(0), 0 === r && s.$el.addClass("picker-column-first"), r === n.cols.length - 1 && s.$el.addClass("picker-column-last"), t && s.updateItems(0, d, 0), s.attachEvents() }, s.destroy = function() { s.detachEvents() }, s.init() }

                            function E() { u = me.requestAnimationFrame(function() { s.updateItems(void 0, void 0, 0), E() }) }

                            function $(e) { f || h || (e.preventDefault(), h = !0, v = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, m = v, g = (new Date).getTime(), p = !0, b = me.getTranslate(s.$itemsEl[0], "y"), w = b) }

                            function S(e) { h && (e.preventDefault(), p = !1, m = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, f || (me.cancelAnimationFrame(u), f = !0, b = me.getTranslate(s.$itemsEl[0], "y"), w = b, s.$itemsEl.transition(0)), y = void 0, (w = b + (m - v)) < c && (w = c - Math.pow(c - w, .8), y = "min"), w > d && (w = d + Math.pow(w - d, .8), y = "max"), s.$itemsEl.transform("translate3d(0," + w + "px,0)"), s.updateItems(void 0, w, 0, n.params.updateValuesOnTouchmove), x = w - C || w, C = w) }

                            function T() { if (!h || !f) return h = !1, void(f = !1);
                                h = !1, f = !1, s.$itemsEl.transition(""), y && ("min" === y ? s.$itemsEl.transform("translate3d(0," + c + "px,0)") : s.$itemsEl.transform("translate3d(0," + d + "px,0)")); var e = void 0;
                                e = (new Date).getTime() - g > 300 ? w : w + x * n.params.momentumRatio, e = Math.max(Math.min(e, d), c); var t = -Math.floor((e - d) / o);
                                n.params.freeMode || (e = -t * o + d), s.$itemsEl.transform("translate3d(0," + parseInt(e, 10) + "px,0)"), s.updateItems(t, e, "", !0), n.params.updateValuesOnMomentum && (E(), s.$itemsEl.transitionEnd(function() { me.cancelAnimationFrame(u) })), setTimeout(function() { p = !0 }, 100) }

                            function _() { if (p) { me.cancelAnimationFrame(u); var e = G(this).attr("data-picker-value");
                                    s.setValue(e) } } }).call(this, e, t) } }, { key: "destroyColumn", value: function(e) { var t = G(e).index();
                        this.cols[t] && this.cols[t].destroy && this.cols[t].destroy() } }, { key: "renderToolbar", value: function() { return this.params.renderToolbar ? this.params.renderToolbar.call(this, this) : ('\n      <div class="toolbar no-shadow">\n        <div class="toolbar-inner">\n          <div class="left"></div>\n          <div class="right">\n            <a href="#" class="link sheet-close popover-close">' + this.params.toolbarCloseText + "</a>\n          </div>\n        </div>\n      </div>\n    ").trim() } }, { key: "renderColumn", value: function(e, t) { var n = "picker-column " + (e.textAlign ? "picker-column-" + e.textAlign : "") + " " + (e.cssClass || ""),
                            a = void 0,
                            i = void 0; return a = e.divider ? '\n        <div class="' + n + ' picker-column-divider">' + e.content + "</div>\n      " : '\n        <div class="' + n + '">\n          <div class="picker-items">' + (i = e.values.map(function(t, n) { return '\n        <div class="picker-item" data-picker-value="' + t + '">\n          <span>' + (e.displayValues ? e.displayValues[n] : t) + "</span>\n        </div>\n      " }).join("")) + "</div>\n        </div>\n      ", t ? i.trim() : a.trim() } }, { key: "renderInline", value: function() { var e = this,
                            t = e.params,
                            n = t.rotateEffect,
                            a = t.cssClass,
                            i = t.toolbar; return ('\n      <div class="picker picker-inline ' + (n ? "picker-3d" : "") + " " + (a || "") + '">\n        ' + (i ? e.renderToolbar() : "") + '\n        <div class="picker-columns">\n          ' + e.cols.map(function(t) { return e.renderColumn(t) }).join("") + '\n          <div class="picker-center-highlight"></div>\n        </div>\n      </div>\n    ').trim() } }, { key: "renderSheet", value: function() { var e = this,
                            t = e.params,
                            n = t.rotateEffect,
                            a = t.cssClass,
                            i = t.toolbar; return ('\n      <div class="sheet-modal picker picker-sheet ' + (n ? "picker-3d" : "") + " " + (a || "") + '">\n        ' + (i ? e.renderToolbar() : "") + '\n        <div class="sheet-modal-inner picker-columns">\n          ' + e.cols.map(function(t) { return e.renderColumn(t) }).join("") + '\n          <div class="picker-center-highlight"></div>\n        </div>\n      </div>\n    ').trim() } }, { key: "renderPopover", value: function() { var e = this,
                            t = e.params,
                            n = t.rotateEffect,
                            a = t.cssClass,
                            i = t.toolbar; return ('\n      <div class="popover picker-popover">\n        <div class="popover-inner">\n          <div class="picker ' + (n ? "picker-3d" : "") + " " + (a || "") + '">\n            ' + (i ? e.renderToolbar() : "") + '\n            <div class="picker-columns">\n              ' + e.cols.map(function(t) { return e.renderColumn(t) }).join("") + '\n              <div class="picker-center-highlight"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    ').trim() } }, { key: "render", value: function() { return this.params.render ? this.params.render.call(this) : this.inline ? this.renderInline() : this.isPopover() ? this.renderPopover() : this.renderSheet() } }, { key: "onOpen", value: function() { var e = this,
                            t = e.initialized,
                            n = e.$el,
                            a = e.app,
                            i = e.$inputEl,
                            r = e.inline,
                            s = e.value,
                            o = e.params;
                        e.opened = !0, e.attachResizeEvent(), n.find(".picker-column").each(function(n, a) { var i = !0;
                            (!t && o.value || t && s) && (i = !1), e.initColumn(a, i) }), t ? s && e.setValue(s, 0) : s ? e.setValue(s, 0) : o.value && e.setValue(o.value, 0), !r && i.length && "md" === a.theme && i.trigger("focus"), e.initialized = !0, n && n.trigger("picker:open", e), i && i.trigger("picker:open", e), e.emit("local::open pickerOpen", e) } }, { key: "onOpened", value: function() { this.$el && this.$el.trigger("picker:opened", this), this.$inputEl && this.$inputEl.trigger("picker:opened", this), this.emit("local::opened pickerOpened", this) } }, { key: "onClose", value: function() { var e = this.app;
                        this.detachResizeEvent(), this.cols.forEach(function(e) { e.destroy && e.destroy() }), this.$inputEl && "md" === e.theme && this.$inputEl.trigger("blur"), this.$el && this.$el.trigger("picker:close", this), this.$inputEl && this.$inputEl.trigger("picker:close", this), this.emit("local::close pickerClose", this) } }, { key: "onClosed", value: function() { var e = this;
                        e.opened = !1, e.inline || me.nextTick(function() { e.modal && e.modal.el && e.modal.destroy && (e.params.routableModals || e.modal.destroy()), delete e.modal }), e.$el && e.$el.trigger("picker:closed", e), e.$inputEl && e.$inputEl.trigger("picker:closed", e), e.emit("local::closed pickerClosed", e) } }, { key: "open", value: function() { var e = this,
                            t = e.app,
                            n = e.opened,
                            a = e.inline,
                            i = e.$inputEl; if (!n) { if (0 === e.cols.length && e.params.cols.length && e.params.cols.forEach(function(t) { e.cols.push(t) }), a) return e.$el = G(e.render()), e.$el[0].f7Picker = e, e.$containerEl.append(e.$el), e.onOpen(), void e.onOpened(); var r = e.isPopover(),
                                s = r ? "popover" : "sheet",
                                o = { targetEl: i, scrollToEl: e.params.scrollToInput ? i : void 0, content: e.render(), backdrop: r, on: { open: function() { e.modal = this, e.$el = r ? this.$el.find(".picker") : this.$el, e.$el[0].f7Picker = e, e.onOpen() }, opened: function() { e.onOpened() }, close: function() { e.onClose() }, closed: function() { e.onClosed() } } };
                            e.params.routableModals ? e.view.router.navigate({ url: e.url, route: l()({ path: e.url }, s, o) }) : (e.modal = t[s].create(o), e.modal.open()) } } }, { key: "close", value: function() { var e = this.opened,
                            t = this.inline; if (e) return t ? (this.onClose(), void this.onClosed()) : void(this.params.routableModals ? this.view.router.back() : this.modal.close()) } }, { key: "init", value: function() { if (this.initInput(), this.inline) return this.open(), void this.emit("local::init pickerInit", this);!this.initialized && this.params.value && this.setValue(this.params.value), this.$inputEl && this.attachInputEvents(), this.params.closeByOutsideClick && this.attachHtmlEvents(), this.emit("local::init pickerInit", this) } }, { key: "destroy", value: function() { if (!this.destroyed) { var e = this.$el;
                            this.emit("local::beforeDestroy pickerBeforeDestroy", this), e && e.trigger("picker:beforedestroy", this), this.close(), this.$inputEl && this.detachInputEvents(), this.params.closeByOutsideClick && this.detachHtmlEvents(), e && e.length && delete this.$el[0].f7Picker, me.deleteProps(this), this.destroyed = !0 } } }]), t }(be),
            gn = { name: "picker", static: { Picker: mn }, create: function() { this.picker = Ct({ defaultSelector: ".picker", constructor: mn, app: this, domProp: "f7Picker" }), this.picker.close = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".picker",
                            t = G(e); if (0 !== t.length) { var n = t[0].f7Picker;!n || n && !n.opened || n.close() } } }, params: { picker: { updateValuesOnMomentum: !1, updateValuesOnTouchmove: !0, rotateEffect: !1, momentumRatio: 7, freeMode: !1, cols: [], containerEl: null, openIn: "auto", formatValue: null, inputEl: null, inputReadOnly: !0, closeByOutsideClick: !0, scrollToInput: !0, toolbar: !0, toolbarCloseText: "Done", cssClass: null, routableModals: !0, view: null, url: "select/", renderToolbar: null, render: null } } },
            bn = { handleScroll: function(e, t) { var n = G(e),
                        a = n[0].scrollTop,
                        i = n[0].scrollHeight,
                        r = n[0].offsetHeight,
                        s = n[0].getAttribute("data-infinite-distance"),
                        o = n.find(".virtual-list"),
                        l = void 0,
                        c = n.hasClass("infinite-scroll-top"); if (s || (s = 50), "string" == typeof s && s.indexOf("%") >= 0 && (s = parseInt(s, 10) / 100 * r), s > r && (s = r), c) a < s && (n.trigger("infinite", t), this.emit("infinite", n[0], t));
                    else if (a + r >= i - s) { if (o.length > 0 && (l = o.eq(-1)[0].f7VirtualList) && !l.reachEnd && !l.params.updatableScroll) return;
                        n.trigger("infinite", t), this.emit("infinite", n[0], t) } }, create: function(e) { var t = this;
                    G(e).on("scroll", function(e) { t.infiniteScroll.handle(this, e) }) }, destroy: function(e) { G(e).off("scroll") } },
            yn = { name: "infiniteScroll", create: function() { me.extend(this, { infiniteScroll: { handle: bn.handleScroll.bind(this), create: bn.create.bind(this), destroy: bn.destroy.bind(this) } }) }, on: { tabMounted: function(e) { var t = this;
                        G(e).find(".infinite-scroll-content").each(function(e, n) { t.infiniteScroll.create(n) }) }, tabBeforeRemove: function(e) { var t = this;
                        G(e).find(".infinite-scroll-content").each(function(e, n) { t.infiniteScroll.destroy(n) }) }, pageInit: function(e) { var t = this;
                        e.$el.find(".infinite-scroll-content").each(function(e, n) { t.infiniteScroll.create(n) }) }, pageBeforeRemove: function(e) { var t = this;
                        e.$el.find(".infinite-scroll-content").each(function(e, n) { t.infiniteScroll.destroy(n) }) } } },
            wn = function(e) {
                function t(e, n) { var a, i;
                    w()(this, t); var r = m()(this, (t.__proto__ || f()(t)).call(this, {}, [e])),
                        s = r,
                        o = G(n),
                        l = o.find(".ptr-preloader");
                    s.$el = o, s.el = o[0], s.app = e, s.useModulesParams({}); var c = "md" === e.theme;
                    s.done = function() { return (c ? l : o).transitionEnd(function() { o.removeClass("ptr-transitioning ptr-pull-up ptr-pull-down"), o.trigger("ptr:done"), s.emit("local::done ptrDone", o[0]) }), o.removeClass("ptr-refreshing").addClass("ptr-transitioning"), s }, s.refresh = function() { return o.hasClass("ptr-refreshing") ? s : (o.addClass("ptr-transitioning ptr-refreshing"), o.trigger("ptr:refresh", s.done), s.emit("local::refresh ptrRefresh", o[0], s.done), s) }; var d = void 0,
                        u = void 0,
                        p = void 0,
                        h = {},
                        v = void 0,
                        g = void 0,
                        b = !1,
                        y = !1,
                        C = 0,
                        x = void 0,
                        k = void 0,
                        E = void 0,
                        $ = void 0,
                        S = void 0,
                        T = void 0,
                        _ = !1,
                        M = o.parents(".page");

                    function P(e) { if (u) { if ("android" !== ge.os) return; if ("targetTouches" in e && e.targetTouches.length > 1) return } o.hasClass("ptr-refreshing") || G(e.target).closest(".sortable-handler").length || (p = !1, T = !1, u = !0, v = void 0, E = void 0, "touchstart" === e.type && (d = e.targetTouches[0].identifier), h.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, h.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY) }

                    function O(e) { if (u) { var t = void 0,
                                n = void 0,
                                a = void 0; if ("touchmove" === e.type) { if (d && e.touches)
                                    for (var i = 0; i < e.touches.length; i += 1) e.touches[i].identifier === d && (a = e.touches[i]);
                                a || (a = e.targetTouches[0]), t = a.pageX, n = a.pageY } else t = e.pageX, n = e.pageY; if (t && n)
                                if (void 0 === v && (v = !!(v || Math.abs(n - h.y) > Math.abs(t - h.x))), v) { if (k = o[0].scrollTop, void 0 === E && 0 !== k && (E = !0), !p) { if (o.removeClass("ptr-transitioning"), k > o[0].offsetHeight) return void(u = !1);
                                        S && ($ = o.attr("data-ptr-distance")).indexOf("%") >= 0 && ($ = o[0].offsetHeight * parseInt($, 10) / 100), C = o.hasClass("ptr-refreshing") ? $ : 0, y = !(o[0].scrollHeight !== o[0].offsetHeight && "ios" === ge.os && !c) } p = !0, (g = n - h.y) > 0 && k <= 0 || k < 0 ? ("ios" === ge.os && parseInt(ge.osVersion.split(".")[0], 10) > 7 && 0 === k && !E && (y = !0), y && (e.preventDefault(), x = Math.pow(g, .85) + C, c ? l.transform("translate3d(0," + x + "px,0)").find(".ptr-arrow").transform("rotate(" + (g / 66 * 180 + 100) + "deg)") : o.transform("translate3d(0," + x + "px,0)")), y && Math.pow(g, .85) > $ || !y && g >= 2 * $ ? (b = !0, o.addClass("ptr-pull-up").removeClass("ptr-pull-down")) : (b = !1, o.removeClass("ptr-pull-up").addClass("ptr-pull-down")), T || (o.trigger("ptr:pullstart"), s.emit("local::pullStart ptrPullStart", o[0]), T = !0), o.trigger("ptr:pullmove", { event: e, scrollTop: k, translate: x, touchesDiff: g }), s.emit("local::pullMove ptrPullMove", o[0], { event: e, scrollTop: k, translate: x, touchesDiff: g })) : (T = !1, o.removeClass("ptr-pull-up ptr-pull-down"), b = !1) } else u = !1 } }

                    function B(e) { return "touchend" === e.type && e.changedTouches && e.changedTouches.length > 0 && d && e.changedTouches[0].identifier !== d ? (u = !1, v = !1, p = !1, void(d = null)) : u && p ? (x && (o.addClass("ptr-transitioning"), x = 0), c ? l.transform("").find(".ptr-arrow").transform("") : o.transform(""), b ? (o.addClass("ptr-refreshing"), o.trigger("ptr:refresh", s.done), s.emit("local::refresh ptrRefresh", o[0], s.done)) : o.removeClass("ptr-pull-down"), u = !1, p = !1, void(T && (o.trigger("ptr:pullend"), s.emit("local::pullEnd ptrPullEnd", o[0])))) : (u = !1, void(p = !1)) } return (M.find(".navbar").length > 0 || M.parents(".view").children(".navbar").length > 0) && (_ = !0), M.hasClass("no-navbar") && (_ = !1), _ || o.addClass("ptr-no-navbar"), o.attr("data-ptr-distance") ? S = !0 : $ = c ? 66 : 44, M.length && o.length ? (o[0].f7PullToRefresh = s, s.attachEvents = function() { var t = !!Me.passiveListener && { passive: !0 };
                        o.on(e.touchEvents.start, P, t), e.on("touchmove", O), e.on("touchend:passive", B) }, s.detachEvents = function() { var t = !!Me.passiveListener && { passive: !0 };
                        o.off(e.touchEvents.start, P, t), e.off("touchmove", O), e.off("touchend:passive", B) }, s.useModules(), s.init(), i = s, m()(r, i)) : (a = s, m()(r, a)) } return b()(t, e), x()(t, [{ key: "init", value: function() { this.attachEvents() } }, { key: "destroy", value: function() { var e = this;
                        e.emit("local::beforeDestroy ptrBeforeDestroy", e), e.$el.trigger("ptr:beforedestroy", e), delete e.el.f7PullToRefresh, e.detachEvents(), me.deleteProps(e), e = null } }]), t }(be),
            Cn = { name: "pullToRefresh", create: function() { var e = this;
                    e.ptr = me.extend(Ct({ defaultSelector: ".ptr-content", constructor: wn, app: e, domProp: "f7PullToRefresh" }), { done: function(t) { var n = e.ptr.get(t); if (n) return n.done() }, refresh: function(t) { var n = e.ptr.get(t); if (n) return n.refresh() } }) }, static: { PullToRefresh: wn }, on: { tabMounted: function(e) { var t = this;
                        G(e).find(".ptr-content").each(function(e, n) { t.ptr.create(n) }) }, tabBeforeRemove: function(e) { var t = this;
                        G(e).find(".ptr-content").each(function(e, n) { t.ptr.destroy(n) }) }, pageInit: function(e) { var t = this;
                        e.$el.find(".ptr-content").each(function(e, n) { t.ptr.create(n) }) }, pageBeforeRemove: function(e) { var t = this;
                        e.$el.find(".ptr-content").each(function(e, n) { t.ptr.destroy(n) }) } } },
            xn = { destroy: function(e) { var t = G(e).closest(".page");
                    t.length && t[0].f7LazyDestroy && t[0].f7LazyDestroy() }, create: function(e) { var t = this,
                        n = G(e).closest(".page").eq(0),
                        a = n.find(".lazy"); if (0 !== a.length || n.hasClass("lazy")) { var i = t.params.lazy.placeholder;!1 !== i && a.each(function(e, t) { G(t).attr("data-src") && !G(t).attr("src") && G(t).attr("src", i) }); var r = [],
                            s = !1;
                        n[0].f7LazyDestroy || (n[0].f7LazyDestroy = function() { n[0].f7LazyAttached = !1, delete n[0].f7LazyAttached, n.off("lazy", l), n.off("scroll", l, !0), n.find(".tab").off("tab:mounted tab:show", l), t.off("resize", l) }), n[0].f7LazyAttached || (n[0].f7LazyAttached = !0, n.on("lazy", l), n.on("scroll", l, !0), n.find(".tab").on("tab:mounted tab:show", l), t.on("resize", l)), l() }

                    function o(e) { r.indexOf(e) >= 0 && r.splice(r.indexOf(e), 1), s = !1, t.params.lazy.sequential && r.length > 0 && (s = !0, t.lazy.loadImage(r[0], o)) }

                    function l() { t.lazy.load(n, function(e) { t.params.lazy.sequential && s ? r.indexOf(e) < 0 && r.push(e) : (s = !0, t.lazy.loadImage(e, o)) }) } }, isInViewport: function(e) { var t = e.getBoundingClientRect(),
                        n = this.params.lazy.threshold || 0; return t.top >= 0 - n && t.left >= 0 - n && t.top <= this.height + n && t.left <= this.width + n }, loadImage: function(e, t) { var n = this,
                        a = G(e),
                        i = a.attr("data-background"),
                        r = i || a.attr("data-src"); if (r) { var s = new A.Image;
                        s.onload = function() { a.removeClass("lazy").addClass("lazy-loaded"), i ? a.css("background-image", "url(" + r + ")") : a.attr("src", r), t && t(e), a.trigger("lazy:loaded"), n.emit("lazyLoaded", a[0]) }, s.onerror = function() { a.removeClass("lazy").addClass("lazy-loaded"), i ? a.css("background-image", "url(" + (n.params.lazy.placeholder || "") + ")") : a.attr("src", n.params.lazy.placeholder || ""), t && t(e), a.trigger("lazy:error"), n.emit("lazyError", a[0]) }, s.src = r, a.removeAttr("data-src").removeAttr("data-background"), a.trigger("lazy:load"), n.emit("lazyLoad", a[0]) } }, load: function(e, t) { var n = this,
                        a = G(e);
                    a.hasClass("page") || (a = a.parents(".page").eq(0)), 0 !== a.length && a.find(".lazy").each(function(e, a) { G(a).parents(".tab:not(.tab-active)").length > 0 || n.lazy.isInViewport(a) && (t ? t(a) : n.lazy.loadImage(a)) }) } },
            kn = { name: "lazy", params: { lazy: { placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXCwsK592mkAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==", threshold: 0, sequential: !0 } }, create: function() { me.extend(this, { lazy: { create: xn.create.bind(this), destroy: xn.destroy.bind(this), loadImage: xn.loadImage.bind(this), load: xn.load.bind(this), isInViewport: xn.isInViewport.bind(this) } }) }, on: { pageInit: function(e) {
                        (e.$el.find(".lazy").length > 0 || e.$el.hasClass("lazy")) && this.lazy.create(e.$el) }, pageAfterIn: function(e) {
                        (e.$el.find(".lazy").length > 0 || e.$el.hasClass("lazy")) && this.lazy.create(e.$el) }, pageBeforeRemove: function(e) {
                        (e.$el.find(".lazy").length > 0 || e.$el.hasClass("lazy")) && this.lazy.destroy(e.$el) }, tabMounted: function(e) { var t = G(e);
                        (t.find(".lazy").length > 0 || t.hasClass("lazy")) && this.lazy.create(t) }, tabBeforeRemove: function(e) { var t = G(e);
                        (t.find(".lazy").length > 0 || t.hasClass("lazy")) && this.lazy.destroy(t) } } },
            En = function(e) {
                function t(e) { var n, a, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    w()(this, t); var r = m()(this, (t.__proto__ || f()(t)).call(this, i, [e])),
                        s = r,
                        o = {};
                    s.useModulesParams(o), s.params = me.extend(o, i); var l = G(s.params.el); if (0 === l.length) return n = void 0, m()(r, n); if (s.$el = l, s.el = l[0], s.$el[0].f7DataTable) { var c, d = s.$el[0].f7DataTable; return s.destroy(), c = d, m()(r, c) }

                    function u(e) { if (!e.detail || !e.detail.sentByF7DataTable) { var t = G(this),
                                n = t[0].checked,
                                a = t.parents("td,th").index();
                            t.parents("thead").length > 0 ? (0 === a && l.find("tbody tr")[n ? "addClass" : "removeClass"]("data-table-row-selected"), l.find("tbody tr td:nth-child(" + (a + 1) + ") input").prop("checked", n).trigger("change", { sentByF7DataTable: !0 })) : (0 === a && t.parents("tr")[n ? "addClass" : "removeClass"]("data-table-row-selected"), n ? l.find("tbody .checkbox-cell:nth-child(" + (a + 1) + ') input[type="checkbox"]:checked').length === l.find("tbody tr").length && l.find("thead .checkbox-cell:nth-child(" + (a + 1) + ') input[type="checkbox"]').prop("checked", !0).trigger("change", { sentByF7DataTable: !0 }) : l.find("thead .checkbox-cell:nth-child(" + (a + 1) + ') input[type="checkbox"]').prop("checked", !1)), s.checkSelectedHeader() } }

                    function p() { var e = G(this),
                            t = e.hasClass("sortable-cell-active"),
                            n = e.hasClass("sortable-desc") ? "desc" : "asc",
                            a = void 0;
                        t ? (a = "desc" === n ? "asc" : "desc", e.removeClass("sortable-desc sortable-asc").addClass("sortable-" + a)) : (l.find("thead .sortable-cell-active").removeClass("sortable-cell-active"), e.addClass("sortable-cell-active"), a = n), e.trigger("datatable:sort", a), s.emit("local::sort dataTableSort", s, a) } return s.$el[0].f7DataTable = s, me.extend(s, { collapsible: l.hasClass("data-table-collapsible"), $headerEl: l.find(".data-table-header"), $headerSelectedEl: l.find(".data-table-header-selected") }), s.attachEvents = function() { s.$el.on("change", '.checkbox-cell input[type="checkbox"]', u), s.$el.find("thead .sortable-cell").on("click", p) }, s.detachEvents = function() { s.$el.off("change", '.checkbox-cell input[type="checkbox"]', u), s.$el.find("thead .sortable-cell").off("click", p) }, s.useModules(), s.init(), a = s, m()(r, a) } return b()(t, e), x()(t, [{ key: "setCollapsibleLabels", value: function() { var e = this;
                        e.collapsible && e.$el.find("tbody td:not(.checkbox-cell)").each(function(t, n) { var a = G(n),
                                i = a.index(),
                                r = a.attr("data-collapsible-title");
                            r || "" === r || a.attr("data-collapsible-title", e.$el.find("thead th").eq(i).text()) }) } }, { key: "checkSelectedHeader", value: function() { if (this.$headerEl.length > 0 && this.$headerSelectedEl.length > 0) { var e = this.$el.find("tbody .checkbox-cell input:checked").length;
                            this.$el[e > 0 ? "addClass" : "removeClass"]("data-table-has-checked"), this.$headerSelectedEl.find(".data-table-selected-count").text(e) } } }, { key: "init", value: function() { this.attachEvents(), this.setCollapsibleLabels(), this.checkSelectedHeader() } }, { key: "destroy", value: function() { var e = this;
                        e.$el.trigger("datatable:beforedestroy", e), e.emit("local::beforeDestroy datatableBeforeDestroy", e), e.attachEvents(), e.$el[0].f7DataTable = null, delete e.$el[0].f7DataTable, me.deleteProps(e), e = null } }]), t }(be),
            $n = { name: "dataTable", static: { DataTable: En }, create: function() { this.dataTable = Ct({ defaultSelector: ".data-table", constructor: En, app: this, domProp: "f7DataTable" }) }, on: { tabBeforeRemove: function(e) { var t = this;
                        G(e).find(".data-table-init").each(function(e, n) { t.dataTable.destroy(n) }) }, tabMounted: function(e) { var t = this;
                        G(e).find(".data-table-init").each(function(e, n) { t.dataTable.create({ el: n }) }) }, pageBeforeRemove: function(e) { var t = this;
                        e.$el.find(".data-table-init").each(function(e, n) { t.dataTable.destroy(n) }) }, pageInit: function(e) { var t = this;
                        e.$el.find(".data-table-init").each(function(e, n) { t.dataTable.create({ el: n }) }) } }, clicks: {} },
            Sn = { morphOpen: function(e, t) { var n = this,
                        a = G(e),
                        i = G(t); if (0 !== i.length) { i.transition(0).addClass("fab-morph-target-visible"); var r = { width: i[0].offsetWidth, height: i[0].offsetHeight, offset: i.offset(), borderRadius: i.css("border-radius"), zIndex: i.css("z-index") },
                            s = { width: a[0].offsetWidth, height: a[0].offsetHeight, offset: a.offset(), translateX: me.getTranslate(a[0], "x"), translateY: me.getTranslate(a[0], "y") };
                        a[0].f7FabMorphData = { $targetEl: i, target: r, fab: s }; var o = s.offset.left + s.width / 2 - (r.offset.left + r.width / 2) - s.translateX,
                            l = s.offset.top + s.height / 2 - (r.offset.top + r.height / 2) - s.translateY,
                            c = r.width / s.width,
                            d = r.height / s.height,
                            u = Math.ceil(parseInt(r.borderRadius, 10) / Math.max(c, d));
                        u > 0 && (u += 2), a[0].f7FabMorphResizeHandler = function() { a.transition(0).transform(""), i.transition(0), r.width = i[0].offsetWidth, r.height = i[0].offsetHeight, r.offset = i.offset(), s.offset = a.offset(); var e = s.offset.left + s.width / 2 - (r.offset.left + r.width / 2) - s.translateX,
                                t = s.offset.top + s.height / 2 - (r.offset.top + r.height / 2) - s.translateY,
                                n = r.width / s.width,
                                o = r.height / s.height;
                            a.transform("translate3d(" + -e + "px, " + -t + "px, 0) scale(" + n + ", " + o + ")") }, i.css("opacity", 0).transform("scale(" + 1 / c + ", " + 1 / d + ")"), a.addClass("fab-opened").css("z-index", r.zIndex - 1).transform("translate3d(" + -o + "px, " + -l + "px, 0)"), a.transitionEnd(function() { i.transition(""), me.nextTick(function() { i.css("opacity", 1).transform("scale(1,1)") }), a.transform("translate3d(" + -o + "px, " + -l + "px, 0) scale(" + c + ", " + d + ")").css("border-radius", u + "px").css("box-shadow", "none"), n.on("resize", a[0].f7FabMorphResizeHandler), i.parents(".page-content").length > 0 && i.parents(".page-content").on("scroll", a[0].f7FabMorphResizeHandler) }) } }, morphClose: function(e) { var t = G(e),
                        n = t[0].f7FabMorphData; if (n) { var a = n.$targetEl,
                            i = n.target,
                            r = n.fab; if (0 !== a.length) { var s = r.offset.left + r.width / 2 - (i.offset.left + i.width / 2) - r.translateX,
                                o = r.offset.top + r.height / 2 - (i.offset.top + i.height / 2) - r.translateY,
                                l = i.width / r.width,
                                c = i.height / r.height;
                            this.off("resize", t[0].f7FabMorphResizeHandler), a.parents(".page-content").length > 0 && a.parents(".page-content").off("scroll", t[0].f7FabMorphResizeHandler), a.css("opacity", 0).transform("scale(" + 1 / l + ", " + 1 / c + ")"), t.transition("").css("box-shadow", "").css("border-radius", "").transform("translate3d(" + -s + "px, " + -o + "px, 0)"), t.transitionEnd(function() { t.css("z-index", "").removeClass("fab-opened").transform(""), me.nextTick(function() { t.transitionEnd(function() { a.removeClass("fab-morph-target-visible").css("opacity", "").transform("").transition("") }) }) }) } } }, open: function(e, t) { var n = G(e).eq(0),
                        a = n.find(".fab-buttons"); if (n.length && !n.hasClass("fab-opened") && (a.length || n.hasClass("fab-morph"))) { if (this.fab.openedEl) { if (this.fab.openedEl === n[0]) return;
                            this.fab.close(this.fab.openedEl) } this.fab.openedEl = n[0], n.hasClass("fab-morph") ? this.fab.morphOpen(n, t || n.attr("data-morph-to")) : n.addClass("fab-opened"), n.trigger("fab:open") } }, close: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".fab-opened",
                        t = G(e).eq(0),
                        n = t.find(".fab-buttons");
                    t.length && t.hasClass("fab-opened") && (n.length || t.hasClass("fab-morph")) && (this.fab.openedEl = null, t.hasClass("fab-morph") ? this.fab.morphClose(t) : t.removeClass("fab-opened"), t.trigger("fab:close")) }, toggle: function(e) { G(e).hasClass("fab-opened") ? this.fab.close(e) : this.fab.open(e) } },
            Tn = { name: "fab", create: function() { me.extend(this, { fab: { openedEl: null, morphOpen: Sn.morphOpen.bind(this), morphClose: Sn.morphClose.bind(this), open: Sn.open.bind(this), close: Sn.close.bind(this), toggle: Sn.toggle.bind(this) } }) }, clicks: { ".fab > a": function(e) { this.fab.toggle(e.parents(".fab")) }, ".fab-open": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.fab.open(t.fab) }, ".fab-close": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.fab.close(t.fab) } } },
            _n = function(e) {
                function t(e) { var n, a, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    w()(this, t); var r = m()(this, (t.__proto__ || f()(t)).call(this, i, [e])),
                        s = r,
                        o = { el: void 0, inputEl: void 0, disableButton: !0, disableButtonEl: void 0, backdropEl: void 0, searchContainer: void 0, searchItem: "li", searchIn: void 0, ignore: ".searchbar-ignore", foundEl: ".searchbar-found", notFoundEl: ".searchbar-not-found", hideOnEnableEl: ".searchbar-hide-on-enable", hideOnSearchEl: ".searchbar-hide-on-search", backdrop: !0, removeDiacritics: !0, customSearch: !1, hideDividers: !0, hideGroups: !0, disableOnBackdropClick: !0, expandable: !1 };
                    s.useModulesParams(o), s.params = me.extend(o, i); var l = G(s.params.el); if (0 === l.length) return n = s, m()(r, n);
                    l[0].f7Searchbar = s; var c = void 0,
                        d = void 0; if (l.parents(".page").length > 0) c = l.parents(".page");
                    else if ((d = l.parents(".navbar-inner")).length > 0)
                        if (d[0].f7Page) c = d[0].f7Page.$el;
                        else { var u = l.parents(".view").find(".page-current");
                            u[0] && u[0].f7Page && u[0].f7Page.navbarEl === d[0] && (c = u) }
                    var p = void 0;
                    i.foundEl ? p = G(i.foundEl) : "string" == typeof s.params.foundEl && c && (p = c.find(s.params.foundEl)); var h = void 0;
                    i.notFoundEl ? h = G(i.notFoundEl) : "string" == typeof s.params.notFoundEl && c && (h = c.find(s.params.notFoundEl)); var v = void 0;
                    i.hideOnEnableEl ? v = G(i.hideOnEnableEl) : "string" == typeof s.params.hideOnEnableEl && c && (v = c.find(s.params.hideOnEnableEl)); var g = void 0;
                    i.hideOnSearchEl ? g = G(i.hideOnSearchEl) : "string" == typeof s.params.hideOnSearchEl && c && (g = c.find(s.params.hideOnSearchEl)); var b = void 0;
                    s.params.backdrop && 0 === (b = s.params.backdropEl ? G(s.params.backdropEl) : c && c.length > 0 ? c.find(".searchbar-backdrop") : l.siblings(".searchbar-backdrop")).length && (b = G('<div class="searchbar-backdrop"></div>'), c && c.length ? l.parents(c).length > 0 && d && 0 === l.parents(d).length ? b.insertBefore(l) : b.insertBefore(c.find(".page-content").eq(0)) : b.insertBefore(l)); var y = void 0;
                    s.params.searchContainer && (y = G(s.params.searchContainer)); var C = void 0;
                    C = s.params.inputEl ? G(s.params.inputEl) : l.find('input[type="search"]').eq(0); var x = void 0;

                    function k(e) { e.preventDefault() }

                    function E(e) { s.enable(e), s.$el.addClass("searchbar-focused") }

                    function $() { s.$el.removeClass("searchbar-focused") }

                    function S() { var e = s.$inputEl.val().trim();
                        (s.$searchContainer && s.$searchContainer.length > 0 && (s.params.searchIn || s.isVirtualList || s.params.searchIn === s.params.searchItem) || s.params.customSearch) && s.search(e, !0) }

                    function T(e, t) { s.$el.trigger("searchbar:clear", t), s.emit("local::clear searchbarClear", s, t) }

                    function _(e) { s.disable(e) }

                    function M() {!s || s && !s.$el || s.enabled && s.$el.removeClass("searchbar-enabled") }

                    function P() {!s || s && !s.$el || s.enabled && s.$el.addClass("searchbar-enabled") } return s.params.disableButton && (x = s.params.disableButtonEl ? G(s.params.disableButtonEl) : l.find(".searchbar-disable-button")), me.extend(s, { app: e, view: e.views.get(l.parents(".view")), $el: l, el: l[0], $backdropEl: b, backdropEl: b && b[0], $searchContainer: y, searchContainer: y && y[0], $inputEl: C, inputEl: C[0], $disableButtonEl: x, disableButtonEl: x && x[0], disableButtonHasMargin: !1, $pageEl: c, pageEl: c && c[0], $navbarEl: d, navbarEl: d && d[0], $foundEl: p, foundEl: p && p[0], $notFoundEl: h, notFoundEl: h && h[0], $hideOnEnableEl: v, hideOnEnableEl: v && v[0], $hideOnSearchEl: g, hideOnSearchEl: g && g[0], previousQuery: "", query: "", isVirtualList: y && y.hasClass("virtual-list"), virtualList: void 0, enabled: !1, expandable: s.params.expandable || l.hasClass("searchbar-expandable") }), s.attachEvents = function() { l.on("submit", k), s.params.disableButton && s.$disableButtonEl.on("click", _), s.params.disableOnBackdropClick && s.$backdropEl && s.$backdropEl.on("click", _), s.expandable && "ios" === e.theme && s.view && d && s.$pageEl && (s.$pageEl.on("page:beforeout", M), s.$pageEl.on("page:beforein", P)), s.$inputEl.on("focus", E), s.$inputEl.on("blur", $), s.$inputEl.on("change input compositionend", S), s.$inputEl.on("input:clear", T) }, s.detachEvents = function() { l.off("submit", k), s.params.disableButton && s.$disableButtonEl.off("click", _), s.params.disableOnBackdropClick && s.$backdropEl && s.$backdropEl.off("click", _), s.expandable && "ios" === e.theme && s.view && d && s.$pageEl && (s.$pageEl.on("page:beforeout", M), s.$pageEl.on("page:beforein", P)), s.$inputEl.off("focus", E), s.$inputEl.off("blur", $), s.$inputEl.off("change input compositionend", S), s.$inputEl.off("input:clear", T) }, s.useModules(), s.init(), a = s, m()(r, a) } return b()(t, e), x()(t, [{ key: "clear", value: function(e) { var t = this; if (!t.query && e && G(e.target).hasClass("searchbar-clear")) return t.disable(), t; var n = t.value; return t.$inputEl.val("").trigger("change").focus(), t.$el.trigger("searchbar:clear", n), t.emit("local::clear searchbarClear", t, n), t } }, { key: "setDisableButtonMargin", value: function() { var e = this; if (!e.expandable) { var t = e.app;
                            e.$disableButtonEl.transition(0).show(), e.$disableButtonEl.css("margin-" + (t.rtl ? "left" : "right"), -e.disableButtonEl.offsetWidth + "px"), e._clientLeft = e.$disableButtonEl[0].clientLeft, e.$disableButtonEl.transition(""), e.disableButtonHasMargin = !0 } } }, { key: "enable", value: function(e) { var t = this; if (t.enabled) return t; var n = t.app;

                        function a() { t.$backdropEl && (t.$searchContainer && t.$searchContainer.length || t.params.customSearch) && !t.$el.hasClass("searchbar-enabled") && !t.query && t.backdropShow(), t.$el.addClass("searchbar-enabled"), !t.expandable && t.$disableButtonEl && t.$disableButtonEl.length > 0 && "ios" === n.theme && (t.disableButtonHasMargin || t.setDisableButtonMargin(), t.$disableButtonEl.css("margin-" + (n.rtl ? "left" : "right"), "0px")), t.$hideOnEnableEl && t.$hideOnEnableEl.addClass("hidden-by-searchbar"), t.$el.trigger("searchbar:enable"), t.emit("local::enable searchbarEnable", t) } t.enabled = !0; var i = !1; return !0 === e && I.activeElement !== t.inputEl && (i = !0), n.device.ios && "ios" === n.theme ? t.expandable ? (i && t.$inputEl.focus(), a()) : (i && t.$inputEl.focus(), !e || "focus" !== e.type && !0 !== e ? a() : me.nextTick(function() { a() }, 400)) : (i && t.$inputEl.focus(), "md" === n.theme && t.expandable && t.$el.parents(".page, .view, .navbar-inner").scrollLeft(0), a()), t } }, { key: "disable", value: function() { var e = this; if (!e.enabled) return e; var t = e.app; return e.$inputEl.val("").trigger("change"), e.$el.removeClass("searchbar-enabled"), e.$el.removeClass("searchbar-focused"), !e.expandable && e.$disableButtonEl && e.$disableButtonEl.length > 0 && "ios" === t.theme && e.$disableButtonEl.css("margin-" + (t.rtl ? "left" : "right"), -e.disableButtonEl.offsetWidth + "px"), e.$backdropEl && (e.$searchContainer && e.$searchContainer.length || e.params.customSearch) && e.backdropHide(), e.enabled = !1, e.$inputEl.blur(), e.$hideOnEnableEl && e.$hideOnEnableEl.removeClass("hidden-by-searchbar"), e.$el.trigger("searchbar:disable"), e.emit("local::disable searchbarDisable", e), e } }, { key: "toggle", value: function() { return this.enabled ? this.disable() : this.enable(!0), this } }, { key: "backdropShow", value: function() { return this.$backdropEl && this.$backdropEl.addClass("searchbar-backdrop-in"), this } }, { key: "backdropHide", value: function() { return this.$backdropEl && this.$backdropEl.removeClass("searchbar-backdrop-in"), this } }, { key: "search", value: function(e, t) { var n = this; if (n.previousQuery && e.trim() === n.previousQuery) return n; if (void 0 !== n.previousQuery && "" === n.previousQuery.trim() && "" === e.trim()) return n;
                        n.previousQuery = e.trim(), t || (n.enabled || n.enable(), n.$inputEl.val(e)), n.query = e, n.value = e; var a = n.$searchContainer,
                            i = n.$el,
                            r = n.$backdropEl,
                            s = n.$foundEl,
                            o = n.$notFoundEl,
                            l = n.$hideOnSearchEl,
                            c = n.isVirtualList; if (e.length > 0 && l ? l.addClass("hidden-by-searchbar") : l && l.removeClass("hidden-by-searchbar"), 0 === e.length ? a && a.length && i.hasClass("searchbar-enabled") && r && n.backdropShow() : a && a.length && i.hasClass("searchbar-enabled") && n.backdropHide(), n.params.customSearch) return i.trigger("searchbar:search", e, n.previousQuery), n.emit("local::search searchbarSearch", n, e, n.previousQuery), n; var d = [],
                            u = void 0; if (c) { if (n.virtualList = a[0].f7VirtualList, "" === e.trim()) return n.virtualList.resetFilter(), o && o.hide(), s && s.show(), n; if (u = n.params.removeDiacritics ? me.removeDiacritics(e) : e, n.virtualList.params.searchAll) d = n.virtualList.params.searchAll(u, n.virtualList.items) || [];
                            else if (n.virtualList.params.searchByItem)
                                for (var p = 0; p < n.virtualList.items.length; p += 1) n.virtualList.params.searchByItem(u, n.virtualList.params.items[p], p) && d.push(p) } else { var h = void 0;
                            h = n.params.removeDiacritics ? me.removeDiacritics(e.trim().toLowerCase()).split(" ") : e.trim().toLowerCase().split(" "), a.find(n.params.searchItem).removeClass("hidden-by-searchbar").each(function(e, t) { var a = G(t),
                                    i = [],
                                    r = n.params.searchIn ? a.find(n.params.searchIn) : a;
                                n.params.searchIn === n.params.searchItem && (r = a), r.each(function(e, t) { var a = G(t).text().trim().toLowerCase();
                                    n.params.removeDiacritics && (a = me.removeDiacritics(a)), i.push(a) }), i = i.join(" "); for (var s = 0, o = 0; o < h.length; o += 1) i.indexOf(h[o]) >= 0 && (s += 1);
                                s === h.length || n.params.ignore && a.is(n.params.ignore) ? d.push(a[0]) : a.addClass("hidden-by-searchbar") }), n.params.hideDividers && a.find(".item-divider, .list-group-title").each(function(e, t) { for (var a = G(t), i = a.nextAll("li"), r = !0, s = 0; s < i.length; s += 1) { var o = i.eq(s); if (o.hasClass("list-group-title") || o.hasClass("item-divider")) break;
                                    o.hasClass("hidden-by-searchbar") || (r = !1) } var l = n.params.ignore && a.is(n.params.ignore);
                                r && !l ? a.addClass("hidden-by-searchbar") : a.removeClass("hidden-by-searchbar") }), n.params.hideGroups && a.find(".list-group").each(function(e, t) { var a = G(t),
                                    i = n.params.ignore && a.is(n.params.ignore);
                                0 !== a.find("li:not(.hidden-by-searchbar)").length || i ? a.removeClass("hidden-by-searchbar") : a.addClass("hidden-by-searchbar") }) } return 0 === d.length ? (o && o.show(), s && s.hide()) : (o && o.hide(), s && s.show()), c && n.virtualList && n.virtualList.filterItems(d), i.trigger("searchbar:search", e, n.previousQuery, d), n.emit("local::search searchbarSearch", n, e, n.previousQuery, d), n } }, { key: "init", value: function() { this.attachEvents() } }, { key: "destroy", value: function() { var e = this;
                        e.emit("local::beforeDestroy searchbarBeforeDestroy", e), e.$el.trigger("searchbar:beforedestroy", e), e.detachEvents(), delete e.$el.f7Searchbar, me.deleteProps(e) } }]), t }(be),
            Mn = { name: "searchbar", static: { Searchbar: _n }, create: function() { this.searchbar = Ct({ defaultSelector: ".searchbar", constructor: _n, app: this, domProp: "f7Searchbar", addMethods: "clear enable disable toggle search".split(" ") }) }, on: { tabMounted: function(e) { var t = this;
                        G(e).find(".searchbar-init").each(function(e, n) { var a = G(n);
                            t.searchbar.create(me.extend(a.dataset(), { el: n })) }) }, tabBeforeRemove: function(e) { G(e).find(".searchbar-init").each(function(e, t) { t.f7Searchbar && t.f7Searchbar.destroy && t.f7Searchbar.destroy() }) }, pageInit: function(e) { var t = this;
                        e.$el.find(".searchbar-init").each(function(e, n) { var a = G(n);
                            t.searchbar.create(me.extend(a.dataset(), { el: n })) }), "ios" === t.theme && e.view && e.view.router.separateNavbar && e.$navbarEl && e.$navbarEl.length > 0 && e.$navbarEl.find(".searchbar-init").each(function(e, n) { var a = G(n);
                            t.searchbar.create(me.extend(a.dataset(), { el: n })) }) }, pageBeforeRemove: function(e) { e.$el.find(".searchbar-init").each(function(e, t) { t.f7Searchbar && t.f7Searchbar.destroy && t.f7Searchbar.destroy() }), "ios" === this.theme && e.view && e.view.router.separateNavbar && e.$navbarEl && e.$navbarEl.length > 0 && e.$navbarEl.find(".searchbar-init").each(function(e, t) { t.f7Searchbar && t.f7Searchbar.destroy && t.f7Searchbar.destroy() }) } }, clicks: { ".searchbar-clear": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = this.searchbar.get(t.searchbar);
                        n && n.clear() }, ".searchbar-enable": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = this.searchbar.get(t.searchbar);
                        n && n.enable(!0) }, ".searchbar-disable": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = this.searchbar.get(t.searchbar);
                        n && n.disable() }, ".searchbar-toggle": function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = this.searchbar.get(t.searchbar);
                        n && n.toggle() } } },
            Pn = function(e) {
                function t(e) { var n, a, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    w()(this, t); var r = m()(this, (t.__proto__ || f()(t)).call(this, i, [e])),
                        s = r,
                        o = { autoLayout: !0, messages: [], newMessagesFirst: !1, scrollMessages: !0, scrollMessagesOnEdge: !0, firstMessageRule: void 0, lastMessageRule: void 0, tailMessageRule: void 0, sameNameMessageRule: void 0, sameHeaderMessageRule: void 0, sameFooterMessageRule: void 0, sameAvatarMessageRule: void 0, customClassMessageRule: void 0, renderMessage: void 0 };
                    s.useModulesParams(o), s.params = me.extend(o, i); var l = G(i.el).eq(0); if (0 === l.length) return n = s, m()(r, n);
                    l[0].f7Messages = s; var c = l.closest(".page-content").eq(0); return me.extend(s, { messages: s.params.messages, $el: l, el: l[0], $pageContentEl: c, pageContentEl: c[0] }), s.useModules(), s.init(), a = s, m()(r, a) } return b()(t, e), x()(t, [{ key: "getMessageData", value: function(e) { var t = G(e),
                            n = { name: t.find(".message-name").html(), header: t.find(".message-header").html(), textHeader: t.find(".message-text-header").html(), textFooter: t.find(".message-text-footer").html(), footer: t.find(".message-footer").html(), isTitle: t.hasClass("messages-title"), type: t.hasClass("message-sent") ? "sent" : "received", text: t.find(".message-text").html(), image: t.find(".message-image").html(), imageSrc: t.find(".message-image img").attr("src"), typing: t.hasClass("message-typing") };
                        n.isTitle && (n.text = t.html()), n.text && n.textHeader && (n.text = n.text.replace('<div class="message-text-header">' + n.textHeader + "</div>", "")), n.text && n.textFooter && (n.text = n.text.replace('<div class="message-text-footer">' + n.textFooter + "</div>", "")); var a = t.find(".message-avatar").css("background-image"); return "none" !== a && "" !== a || (a = void 0), a = a && "string" == typeof a ? a.replace("url(", "").replace(")", "").replace(/"/g, "").replace(/'/g, "") : void 0, n.avatar = a, n } }, { key: "getMessagesData", value: function() { var e = this,
                            t = []; return e.$el.find(".message, .messages-title").each(function(n, a) { t.push(e.getMessageData(a)) }), t } }, { key: "renderMessage", value: function(e) { var t = this,
                            n = me.extend({ type: "sent" }, e); return t.params.renderMessage ? t.params.renderMessage.call(t, n) : n.isTitle ? '<div class="messages-title">' + n.text + "</div>" : '\n      <div class="message message-' + n.type + " " + (n.isTyping ? "message-typing" : "") + '">\n        ' + (n.avatar ? '\n        <div class="message-avatar" style="background-image:url(' + n.avatar + ')"></div>\n        ' : "") + '\n        <div class="message-content">\n          ' + (n.name ? '<div class="message-name">' + n.name + "</div>" : "") + "\n          " + (n.header ? '<div class="message-header">' + n.header + "</div>" : "") + '\n          <div class="message-bubble">\n            ' + (n.textHeader ? '<div class="message-text-header">' + n.textHeader + "</div>" : "") + "\n            " + (n.image ? '<div class="message-image">' + n.image + "</div>" : "") + "\n            " + (n.imageSrc && !n.image ? '<div class="message-image"><img src="' + n.imageSrc + '"></div>' : "") + "\n            " + (n.text || n.isTyping ? '<div class="message-text">' + (n.text || "") + (n.isTyping ? '<div class="message-typing-indicator"><div></div><div></div><div></div></div>' : "") + "</div>" : "") + "\n            " + (n.textFooter ? '<div class="message-text-footer">' + n.textFooter + "</div>" : "") + "\n          </div>\n          " + (n.footer ? '<div class="message-footer">' + n.footer + "</div>" : "") + "\n        </div>\n      </div>\n    " } }, { key: "renderMessages", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.messages,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.newMessagesFirst ? "prepend" : "append",
                            n = this,
                            a = e.map(function(e) { return n.renderMessage(e) }).join("");
                        n.$el[t](a) } }, { key: "isFirstMessage", value: function() { var e; return !!this.params.firstMessageRule && (e = this.params).firstMessageRule.apply(e, arguments) } }, { key: "isLastMessage", value: function() { var e; return !!this.params.lastMessageRule && (e = this.params).lastMessageRule.apply(e, arguments) } }, { key: "isTailMessage", value: function() { var e; return !!this.params.tailMessageRule && (e = this.params).tailMessageRule.apply(e, arguments) } }, { key: "isSameNameMessage", value: function() { var e; return !!this.params.sameNameMessageRule && (e = this.params).sameNameMessageRule.apply(e, arguments) } }, { key: "isSameHeaderMessage", value: function() { var e; return !!this.params.sameHeaderMessageRule && (e = this.params).sameHeaderMessageRule.apply(e, arguments) } }, { key: "isSameFooterMessage", value: function() { var e; return !!this.params.sameFooterMessageRule && (e = this.params).sameFooterMessageRule.apply(e, arguments) } }, { key: "isSameAvatarMessage", value: function() { var e; return !!this.params.sameAvatarMessageRule && (e = this.params).sameAvatarMessageRule.apply(e, arguments) } }, { key: "isCustomClassMessage", value: function() { var e; if (this.params.customClassMessageRule) return (e = this.params).customClassMessageRule.apply(e, arguments) } }, { key: "layout", value: function() { var e = this;
                        e.$el.find(".message, .messages-title").each(function(t, n) { var a = G(n);
                            e.messages || (e.messages = e.getMessagesData()); var i = [],
                                r = e.messages[t],
                                s = e.messages[t - 1],
                                o = e.messages[t + 1];
                            e.isFirstMessage(r, s, o) && i.push("message-first"), e.isLastMessage(r, s, o) && i.push("message-last"), e.isTailMessage(r, s, o) && i.push("message-tail"), e.isSameNameMessage(r, s, o) && i.push("message-same-name"), e.isSameHeaderMessage(r, s, o) && i.push("message-same-header"), e.isSameFooterMessage(r, s, o) && i.push("message-same-footer"), e.isSameAvatarMessage(r, s, o) && i.push("message-same-avatar"); var l = e.isCustomClassMessage(r, s, o);
                            l && l.length && ("string" == typeof l && (l = l.split(" ")), l.forEach(function(e) { i.push(e) })), a.removeClass("message-first message-last message-tail message-same-name message-same-header message-same-footer message-same-avatar"), i.forEach(function(e) { a.addClass(e) }) }) } }, { key: "clear", value: function() { this.messages = [], this.$el.html("") } }, { key: "removeMessage", value: function(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = this,
                            a = void 0,
                            i = void 0; return "number" == typeof e ? (a = e, i = n.$el.find(".message, .messages-title").eq(a)) : n.messages && n.messages.indexOf(e) >= 0 ? (a = n.messages.indexOf(e), i = n.$el.children().eq(a)) : a = (i = G(e)).index(), 0 === i.length ? n : (i.remove(), n.messages.splice(a, 1), n.params.autoLayout && t && n.layout(), n) } }, { key: "removeMessages", value: function(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = this; if (Array.isArray(e)) { var a = [];
                            e.forEach(function(e) { a.push(n.$el.find(".message, .messages-title").eq(e)) }), a.forEach(function(e) { n.removeMessage(e, !1) }) } else G(e).each(function(e, t) { n.removeMessage(t, !1) }); return n.params.autoLayout && t && n.layout(), n } }, { key: "addMessage", value: function() { for (var e = void 0, t = void 0, n = void 0, a = arguments.length, i = Array(a), r = 0; r < a; r++) i[r] = arguments[r]; return "boolean" == typeof i[1] ? (e = i[0], t = i[1], n = i[2]) : (e = i[0], n = i[1], t = i[2]), void 0 === t && (t = !0), void 0 === n && (n = this.params.newMessagesFirst ? "prepend" : "append"), this.addMessages([e], t, n) } }, { key: "addMessages", value: function() { for (var e = this, t = void 0, n = void 0, a = void 0, i = arguments.length, r = Array(i), s = 0; s < i; s++) r[s] = arguments[s]; "boolean" == typeof r[1] ? (t = r[0], n = r[1], a = r[2]) : (t = r[0], a = r[1], n = r[2]), void 0 === n && (n = !0), void 0 === a && (a = e.params.newMessagesFirst ? "prepend" : "append"); var o = e.pageContentEl.scrollHeight,
                            l = e.pageContentEl.offsetHeight,
                            c = e.pageContentEl.scrollTop,
                            d = "",
                            u = e.messages.filter(function(e) { return e.isTyping })[0];
                        t.forEach(function(t) { u ? "append" === a ? e.messages.splice(e.messages.indexOf(u), 0, t) : e.messages.splice(e.messages.indexOf(u) + 1, 0, t) : e.messages["append" === a ? "push" : "unshift"](t), d += e.renderMessage(t) }); var p = G(d); if (n && ("append" !== a || e.params.newMessagesFirst || p.addClass("message-appear-from-bottom"), "prepend" === a && e.params.newMessagesFirst && p.addClass("message-appear-from-top")), u ? "append" === a ? p.insertBefore(e.$el.find(".message-typing")) : p.insertAfter(e.$el.find(".message-typing")) : e.$el[a](p), e.params.autoLayout && e.layout(), "prepend" !== a || u || (e.pageContentEl.scrollTop = c + (e.pageContentEl.scrollHeight - o)), e.params.scrollMessages && ("append" === a && !e.params.newMessagesFirst || "prepend" === a && e.params.newMessagesFirst && !u))
                            if (e.params.scrollMessagesOnEdge) { var h = !1;
                                e.params.newMessagesFirst && 0 === c && (h = !0), !e.params.newMessagesFirst && c - (o - l) >= -10 && (h = !0), h && e.scroll(n ? void 0 : 0) } else e.scroll(n ? void 0 : 0); return e } }, { key: "showTyping", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = this,
                            n = t.messages.filter(function(e) { return e.isTyping })[0]; return n && t.removeMessage(t.messages.indexOf(n)), t.addMessage(me.extend({ type: "received", isTyping: !0 }, e)), t } }, { key: "hideTyping", value: function() { var e = this,
                            t = void 0,
                            n = void 0; if (e.messages.forEach(function(e, n) { e.isTyping && (t = n) }), void 0 !== t && e.$el.find(".message").eq(t).hasClass("message-typing") && (n = !0, e.removeMessage(t)), !n) { var a = e.$el.find(".message-typing");
                            a.length && e.removeMessage(a) } return e } }, { key: "scroll", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 300,
                            t = arguments[1],
                            n = this,
                            a = n.pageContentEl.scrollTop,
                            i = void 0; if (void 0 !== t) i = t;
                        else if ((i = n.params.newMessagesFirst ? 0 : n.pageContentEl.scrollHeight - n.pageContentEl.offsetHeight) === a) return n; return n.$pageContentEl.scrollTop(i, e), n } }, { key: "init", value: function() { var e = this;
                        e.messages && 0 !== e.messages.length || (e.messages = e.getMessagesData()), e.params.messages && e.params.messages.length && e.renderMessages(), e.params.autoLayout && e.layout(), e.params.scrollMessages && e.scroll(0) } }, { key: "destroy", value: function() { var e = this;
                        e.emit("local::beforeDestroy messagesBeforeDestroy", e), e.$el.trigger("messages:beforedestroy", e), e.$el[0].f7Messages = null, delete e.$el[0].f7Messages, me.deleteProps(e) } }]), t }(be),
            On = { name: "messages", static: { Messages: Pn }, create: function() { this.messages = Ct({ defaultSelector: ".messages", constructor: Pn, app: this, domProp: "f7Messages", addMethods: "renderMessages layout scroll clear removeMessage removeMessages addMessage addMessages".split(" ") }) }, on: { tabBeforeRemove: function(e) { var t = this;
                        G(e).find(".messages-init").each(function(e, n) { t.messages.destroy(n) }) }, tabMounted: function(e) { var t = this;
                        G(e).find(".messages-init").each(function(e, n) { t.messages.create({ el: n }) }) }, pageBeforeRemove: function(e) { var t = this;
                        e.$el.find(".messages-init").each(function(e, n) { t.messages.destroy(n) }) }, pageInit: function(e) { var t = this;
                        e.$el.find(".messages-init").each(function(e, n) { t.messages.create({ el: n }) }) } }, clicks: {} },
            Bn = function(e) {
                function t(e) { var n, a, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    w()(this, t); var r = m()(this, (t.__proto__ || f()(t)).call(this, i, [e])),
                        s = r,
                        o = { top: !1, topOffset: 0, bottomOffset: 0, attachments: [], renderAttachments: void 0, renderAttachment: void 0, maxHeight: null, resizePage: !0 };
                    s.useModulesParams(o), s.params = me.extend(o, i); var l = G(s.params.el); if (0 === l.length) return n = s, m()(r, n);
                    l[0].f7Messagebar = s; var c = l.parents(".page").eq(0),
                        d = c.find(".page-content").eq(0),
                        u = l.find(".messagebar-area"),
                        p = void 0;
                    p = s.params.textareaEl ? G(s.params.textareaEl) : l.find("textarea"); var h = l.find(".messagebar-attachments"),
                        v = l.find(".messagebar-sheet");

                    function g() { s.params.resizePage && s.resizePage() }

                    function b(e) { e.preventDefault() }

                    function y(e) { var t = G(this).index();
                        G(e.target).closest(".messagebar-attachment-delete").length ? (G(this).trigger("messagebar:attachmentdelete", t), s.emit("local::attachmentDelete messagebarAttachmentDelete", s, this, t)) : (G(this).trigger("messagebar:attachmentclick", t), s.emit("local::attachmentClick messagebarAttachmentClick", s, this, t)) }

                    function C() { s.checkEmptyState(), s.$el.trigger("messagebar:change"), s.emit("local::change messagebarChange", s) }

                    function x() { s.sheetHide(), s.$el.addClass("messagebar-focused"), s.$el.trigger("messagebar:focus"), s.emit("local::focus messagebarFocus", s) }

                    function k() { s.$el.removeClass("messagebar-focused"), s.$el.trigger("messagebar:blur"), s.emit("local::blur messagebarBlur", s) } return s.params.top && l.addClass("messagebar-top"), me.extend(s, { $el: l, el: l[0], $areaEl: u, areaEl: u[0], $textareaEl: p, textareaEl: p[0], $attachmentsEl: h, attachmentsEl: h[0], attachmentsVisible: h.hasClass("messagebar-attachments-visible"), $sheetEl: v, sheetEl: v[0], sheetVisible: v.hasClass("messagebar-sheet-visible"), $pageEl: c, pageEl: c[0], $pageContentEl: d, pageContentEl: d, top: l.hasClass("messagebar-top") || s.params.top, attachments: [] }), s.attachEvents = function() { l.on("textarea:resize", g), l.on("submit", b), l.on("click", ".messagebar-attachment", y), p.on("change input", C), p.on("focus", x), p.on("blur", k), e.on("resize", g) }, s.detachEvents = function() { l.off("textarea:resize", g), l.off("submit", b), l.off("click", ".messagebar-attachment", y), p.off("change input", C), p.off("focus", x), p.off("blur", k), e.off("resize", g) }, s.useModules(), s.init(), a = s, m()(r, a) } return b()(t, e), x()(t, [{ key: "focus", value: function() { return this.$textareaEl.focus(), this } }, { key: "blur", value: function() { return this.$textareaEl.blur(), this } }, { key: "clear", value: function() { return this.$textareaEl.val("").trigger("change"), this } }, { key: "getValue", value: function() { return this.$textareaEl.val().trim() } }, { key: "setValue", value: function(e) { return this.$textareaEl.val(e).trigger("change"), this } }, { key: "setPlaceholder", value: function(e) { return this.$textareaEl.attr("placeholder", e), this } }, { key: "resizePage", value: function() { var e = this.params,
                            t = this.$el,
                            n = this.top,
                            a = this.$pageEl,
                            i = this.$pageContentEl,
                            r = this.$areaEl,
                            s = this.$textareaEl,
                            o = this.$sheetEl,
                            l = this.$attachmentsEl,
                            c = t[0].offsetHeight,
                            d = e.maxHeight; if (n);
                        else { var u = parseInt(i.css("padding-bottom"), 10),
                                p = c + e.bottomOffset; if (p !== u && i.length) { var h = parseInt(i.css("padding-top"), 10),
                                    f = i[0].scrollHeight,
                                    v = i[0].offsetHeight,
                                    m = i[0].scrollTop === f - v;
                                d || (d = a[0].offsetHeight - h - o.outerHeight() - l.outerHeight() - parseInt(r.css("margin-top"), 10) - parseInt(r.css("margin-bottom"), 10)), s.css("max-height", d + "px"), i.css("padding-bottom", p + "px"), m && i.scrollTop(i[0].scrollHeight - v), t.trigger("messagebar:resizepage"), this.emit("local::resizePage messagebarResizePage", this) } } } }, { key: "checkEmptyState", value: function() { var e = this.$el,
                            t = this.$textareaEl.val().trim();
                        t && t.length ? e.addClass("messagebar-with-value") : e.removeClass("messagebar-with-value") } }, { key: "attachmentsCreate", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = G('<div class="messagebar-attachments">' + e + "</div>"); return t.insertBefore(this.$textareaEl), me.extend(this, { $attachmentsEl: t, attachmentsEl: t[0] }), this } }, { key: "attachmentsShow", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; return this.$attachmentsEl = this.$el.find(".messagebar-attachments"), 0 === this.$attachmentsEl.length && this.attachmentsCreate(e), this.$el.addClass("messagebar-attachments-visible"), this.attachmentsVisible = !0, this.params.resizePage && this.resizePage(), this } }, { key: "attachmentsHide", value: function() { return this.$el.removeClass("messagebar-attachments-visible"), this.attachmentsVisible = !1, this.params.resizePage && this.resizePage(), this } }, { key: "attachmentsToggle", value: function() { return this.attachmentsVisible ? this.attachmentsHide() : this.attachmentsShow(), this } }, { key: "renderAttachment", value: function(e) { return this.params.renderAttachment ? this.params.renderAttachment.call(this, e) : '\n      <div class="messagebar-attachment">\n        <img src="' + e + '">\n        <span class="messagebar-attachment-delete"></span>\n      </div>\n    ' } }, { key: "renderAttachments", value: function() { var e = this,
                            t = void 0;
                        t = e.params.renderAttachments ? e.params.renderAttachments.call(e, e.attachments) : "" + e.attachments.map(function(t) { return e.renderAttachment(t) }).join(""), 0 === e.$attachmentsEl.length ? e.attachmentsCreate(t) : e.$attachmentsEl.html(t) } }, { key: "sheetCreate", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = G('<div class="messagebar-sheet">' + e + "</div>"); return this.$el.append(t), me.extend(this, { $sheetEl: t, sheetEl: t[0] }), this } }, { key: "sheetShow", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; return this.$sheetEl = this.$el.find(".messagebar-sheet"), 0 === this.$sheetEl.length && this.sheetCreate(e), this.$el.addClass("messagebar-sheet-visible"), this.sheetVisible = !0, this.params.resizePage && this.resizePage(), this } }, { key: "sheetHide", value: function() { return this.$el.removeClass("messagebar-sheet-visible"), this.sheetVisible = !1, this.params.resizePage && this.resizePage(), this } }, { key: "sheetToggle", value: function() { return this.sheetVisible ? this.sheetHide() : this.sheetShow(), this } }, { key: "init", value: function() { return this.attachEvents(), this.checkEmptyState(), this } }, { key: "destroy", value: function() { this.emit("local::beforeDestroy messagebarBeforeDestroy", this), this.$el.trigger("messagebar:beforedestroy", this), this.detachEvents(), this.$el[0].f7Messagebar = null, delete this.$el[0].f7Messagebar, me.deleteProps(this) } }]), t }(be),
            In = { name: "messagebar", static: { Messagebar: Bn }, create: function() { this.messagebar = Ct({ defaultSelector: ".messagebar", constructor: Bn, app: this, domProp: "f7Messagebar", addMethods: "clear getValue setValue setPlaceholder resizePage focus blur attachmentsCreate attachmentsShow attachmentsHide attachmentsToggle renderAttachments sheetCreate sheetShow sheetHide sheetToggle".split(" ") }) }, on: { tabBeforeRemove: function(e) { var t = this;
                        G(e).find(".messagebar-init").each(function(e, n) { t.messagebar.destroy(n) }) }, tabMounted: function(e) { var t = this;
                        G(e).find(".messagebar-init").each(function(e, n) { t.messagebar.create(me.extend({ el: n }, G(n).dataset())) }) }, pageBeforeRemove: function(e) { var t = this;
                        e.$el.find(".messagebar-init").each(function(e, n) { t.messagebar.destroy(n) }) }, pageInit: function(e) { var t = this;
                        e.$el.find(".messagebar-init").each(function(e, n) { t.messagebar.create(me.extend({ el: n }, G(n).dataset())) }) } } }; var An = { updateSize: function() { var e = void 0,
                    t = void 0,
                    n = this.$el;
                e = void 0 !== this.params.width ? this.params.width : n[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : n[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10), t = t - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10), me.extend(this, { width: e, height: t, size: this.isHorizontal() ? e : t })) }, updateSlides: function() { var e = this.params,
                    t = this.$wrapperEl,
                    n = this.size,
                    a = this.rtlTranslate,
                    i = this.wrongRTL,
                    r = t.children("." + this.params.slideClass),
                    s = this.virtual && e.virtual.enabled ? this.virtual.slides.length : r.length,
                    o = [],
                    l = [],
                    c = [],
                    d = e.slidesOffsetBefore; "function" == typeof d && (d = e.slidesOffsetBefore.call(this)); var u = e.slidesOffsetAfter; "function" == typeof u && (u = e.slidesOffsetAfter.call(this)); var p = s,
                    h = this.snapGrid.length,
                    f = this.snapGrid.length,
                    v = e.spaceBetween,
                    m = -d,
                    g = 0,
                    b = 0; if (void 0 !== n) { "string" == typeof v && v.indexOf("%") >= 0 && (v = parseFloat(v.replace("%", "")) / 100 * n), this.virtualSize = -v, a ? r.css({ marginLeft: "", marginTop: "" }) : r.css({ marginRight: "", marginBottom: "" }); var y = void 0;
                    e.slidesPerColumn > 1 && (y = Math.floor(s / e.slidesPerColumn) === s / this.params.slidesPerColumn ? s : Math.ceil(s / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (y = Math.max(y, e.slidesPerView * e.slidesPerColumn))); for (var w = void 0, C = e.slidesPerColumn, x = y / C, k = x - (e.slidesPerColumn * x - s), E = 0; E < s; E += 1) { w = 0; var $ = r.eq(E); if (e.slidesPerColumn > 1) { var S = void 0,
                                T = void 0,
                                _ = void 0; "column" === e.slidesPerColumnFill ? (_ = E - (T = Math.floor(E / C)) * C, (T > k || T === k && _ === C - 1) && (_ += 1) >= C && (_ = 0, T += 1), S = T + _ * y / C, $.css({ "-webkit-box-ordinal-group": S, "-moz-box-ordinal-group": S, "-ms-flex-order": S, "-webkit-order": S, order: S })) : T = E - (_ = Math.floor(E / x)) * x, $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== _ && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", T).attr("data-swiper-row", _) } if ("none" !== $.css("display")) { if ("auto" === e.slidesPerView) { var M = A.getComputedStyle($[0], null),
                                    P = $[0].style.transform,
                                    O = $[0].style.webkitTransform;
                                P && ($[0].style.transform = "none"), O && ($[0].style.webkitTransform = "none"), w = this.isHorizontal() ? $[0].getBoundingClientRect().width + parseFloat(M.getPropertyValue("margin-left")) + parseFloat(M.getPropertyValue("margin-right")) : $[0].getBoundingClientRect().height + parseFloat(M.getPropertyValue("margin-top")) + parseFloat(M.getPropertyValue("margin-bottom")), P && ($[0].style.transform = P), O && ($[0].style.webkitTransform = O), e.roundLengths && (w = Math.floor(w)) } else w = (n - (e.slidesPerView - 1) * v) / e.slidesPerView, e.roundLengths && (w = Math.floor(w)), r[E] && (this.isHorizontal() ? r[E].style.width = w + "px" : r[E].style.height = w + "px");
                            r[E] && (r[E].swiperSlideSize = w), c.push(w), e.centeredSlides ? (m = m + w / 2 + g / 2 + v, 0 === g && 0 !== E && (m = m - n / 2 - v), 0 === E && (m = m - n / 2 - v), Math.abs(m) < .001 && (m = 0), b % e.slidesPerGroup == 0 && o.push(m), l.push(m)) : (b % e.slidesPerGroup == 0 && o.push(m), l.push(m), m = m + w + v), this.virtualSize += w + v, g = w, b += 1 } } this.virtualSize = Math.max(this.virtualSize, n) + u; var B = void 0; if (a && i && ("slide" === e.effect || "coverflow" === e.effect) && t.css({ width: this.virtualSize + e.spaceBetween + "px" }), Me.flexbox && !e.setWrapperSize || (this.isHorizontal() ? t.css({ width: this.virtualSize + e.spaceBetween + "px" }) : t.css({ height: this.virtualSize + e.spaceBetween + "px" })), e.slidesPerColumn > 1 && (this.virtualSize = (w + e.spaceBetween) * y, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? t.css({ width: this.virtualSize + e.spaceBetween + "px" }) : t.css({ height: this.virtualSize + e.spaceBetween + "px" }), e.centeredSlides)) { B = []; for (var I = 0; I < o.length; I += 1) o[I] < this.virtualSize + o[0] && B.push(o[I]);
                        o = B } if (!e.centeredSlides) { B = []; for (var L = 0; L < o.length; L += 1) o[L] <= this.virtualSize - n && B.push(o[L]);
                        o = B, Math.floor(this.virtualSize - n) - Math.floor(o[o.length - 1]) > 1 && o.push(this.virtualSize - n) } 0 === o.length && (o = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? r.css({ marginLeft: v + "px" }) : r.css({ marginRight: v + "px" }) : r.css({ marginBottom: v + "px" })), me.extend(this, { slides: r, snapGrid: o, slidesGrid: l, slidesSizesGrid: c }), s !== p && this.emit("slidesLengthChange"), o.length !== h && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), l.length !== f && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset() } }, updateAutoHeight: function(e) { var t = [],
                    n = 0,
                    a = void 0; if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                    for (a = 0; a < Math.ceil(this.params.slidesPerView); a += 1) { var i = this.activeIndex + a; if (i > this.slides.length) break;
                        t.push(this.slides.eq(i)[0]) } else t.push(this.slides.eq(this.activeIndex)[0]); for (a = 0; a < t.length; a += 1)
                    if (void 0 !== t[a]) { var r = t[a].offsetHeight;
                        n = r > n ? r : n }
                n && this.$wrapperEl.css("height", n + "px") }, updateSlidesOffset: function() { for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop }, updateSlidesProgress: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this && this.translate || 0,
                    t = this.params,
                    n = this.slides,
                    a = this.rtlTranslate; if (0 !== n.length) { void 0 === n[0].swiperSlideOffset && this.updateSlidesOffset(); var i = -e;
                    a && (i = e), n.removeClass(t.slideVisibleClass); for (var r = 0; r < n.length; r += 1) { var s = n[r],
                            o = (i + (t.centeredSlides ? this.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + t.spaceBetween); if (t.watchSlidesVisibility) { var l = -(i - s.swiperSlideOffset),
                                c = l + this.slidesSizesGrid[r];
                            (l >= 0 && l < this.size || c > 0 && c <= this.size || l <= 0 && c >= this.size) && n.eq(r).addClass(t.slideVisibleClass) } s.progress = a ? -o : o } } }, updateProgress: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this && this.translate || 0,
                    t = this.params,
                    n = this.maxTranslate() - this.minTranslate(),
                    a = this.progress,
                    i = this.isBeginning,
                    r = this.isEnd,
                    s = i,
                    o = r;
                0 === n ? (a = 0, i = !0, r = !0) : (i = (a = (e - this.minTranslate()) / n) <= 0, r = a >= 1), me.extend(this, { progress: a, isBeginning: i, isEnd: r }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), i && !s && this.emit("reachBeginning toEdge"), r && !o && this.emit("reachEnd toEdge"), (s && !i || o && !r) && this.emit("fromEdge"), this.emit("progress", a) }, updateSlidesClasses: function() { var e = this.slides,
                    t = this.params,
                    n = this.$wrapperEl,
                    a = this.activeIndex,
                    i = this.realIndex,
                    r = this.virtual && t.virtual.enabled;
                e.removeClass(t.slideActiveClass + " " + t.slideNextClass + " " + t.slidePrevClass + " " + t.slideDuplicateActiveClass + " " + t.slideDuplicateNextClass + " " + t.slideDuplicatePrevClass); var s = void 0;
                (s = r ? this.$wrapperEl.find("." + t.slideClass + '[data-swiper-slide-index="' + a + '"]') : e.eq(a)).addClass(t.slideActiveClass), t.loop && (s.hasClass(t.slideDuplicateClass) ? n.children("." + t.slideClass + ":not(." + t.slideDuplicateClass + ')[data-swiper-slide-index="' + i + '"]').addClass(t.slideDuplicateActiveClass) : n.children("." + t.slideClass + "." + t.slideDuplicateClass + '[data-swiper-slide-index="' + i + '"]').addClass(t.slideDuplicateActiveClass)); var o = s.nextAll("." + t.slideClass).eq(0).addClass(t.slideNextClass);
                t.loop && 0 === o.length && (o = e.eq(0)).addClass(t.slideNextClass); var l = s.prevAll("." + t.slideClass).eq(0).addClass(t.slidePrevClass);
                t.loop && 0 === l.length && (l = e.eq(-1)).addClass(t.slidePrevClass), t.loop && (o.hasClass(t.slideDuplicateClass) ? n.children("." + t.slideClass + ":not(." + t.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(t.slideDuplicateNextClass) : n.children("." + t.slideClass + "." + t.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(t.slideDuplicateNextClass), l.hasClass(t.slideDuplicateClass) ? n.children("." + t.slideClass + ":not(." + t.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(t.slideDuplicatePrevClass) : n.children("." + t.slideClass + "." + t.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(t.slideDuplicatePrevClass)) }, updateActiveIndex: function(e) { var t = this.rtlTranslate ? this.translate : -this.translate,
                    n = this.slidesGrid,
                    a = this.snapGrid,
                    i = this.params,
                    r = this.activeIndex,
                    s = this.realIndex,
                    o = this.snapIndex,
                    l = e,
                    c = void 0; if (void 0 === l) { for (var d = 0; d < n.length; d += 1) void 0 !== n[d + 1] ? t >= n[d] && t < n[d + 1] - (n[d + 1] - n[d]) / 2 ? l = d : t >= n[d] && t < n[d + 1] && (l = d + 1) : t >= n[d] && (l = d);
                    i.normalizeSlideIndex && (l < 0 || void 0 === l) && (l = 0) } if ((c = a.indexOf(t) >= 0 ? a.indexOf(t) : Math.floor(l / i.slidesPerGroup)) >= a.length && (c = a.length - 1), l !== r) { var u = parseInt(this.slides.eq(l).attr("data-swiper-slide-index") || l, 10);
                    me.extend(this, { snapIndex: c, realIndex: u, previousIndex: r, activeIndex: l }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), s !== u && this.emit("realIndexChange"), this.emit("slideChange") } else c !== o && (this.snapIndex = c, this.emit("snapIndexChange")) }, updateClickedSlide: function(e) { var t = this.params,
                    n = G(e.target).closest("." + t.slideClass)[0],
                    a = !1; if (n)
                    for (var i = 0; i < this.slides.length; i += 1) this.slides[i] === n && (a = !0); if (!n || !a) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
                this.clickedSlide = n, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(G(n).attr("data-swiper-slide-index"), 10) : this.clickedIndex = G(n).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide() } }; var Ln = { getTranslate: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isHorizontal() ? "x" : "y",
                    t = this.params,
                    n = this.rtlTranslate,
                    a = this.translate,
                    i = this.$wrapperEl; if (t.virtualTranslate) return n ? -a : a; var r = me.getTranslate(i[0], e); return n && (r = -r), r || 0 }, setTranslate: function(e, t) { var n = this.rtlTranslate,
                    a = this.params,
                    i = this.$wrapperEl,
                    r = this.progress,
                    s = 0,
                    o = 0;
                this.isHorizontal() ? s = n ? -e : e : o = e, a.roundLengths && (s = Math.floor(s), o = Math.floor(o)), a.virtualTranslate || (Me.transforms3d ? i.transform("translate3d(" + s + "px, " + o + "px, 0px)") : i.transform("translate(" + s + "px, " + o + "px)")), this.translate = this.isHorizontal() ? s : o; var l = this.maxTranslate() - this.minTranslate();
                (0 === l ? 0 : (e - this.minTranslate()) / l) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t) }, minTranslate: function() { return -this.snapGrid[0] }, maxTranslate: function() { return -this.snapGrid[this.snapGrid.length - 1] } }; var Dn = { setTransition: function(e, t) { this.$wrapperEl.transition(e), this.emit("setTransition", e, t) }, transitionStart: function() { var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = arguments[1],
                    n = this.activeIndex,
                    a = this.params,
                    i = this.previousIndex;
                a.autoHeight && this.updateAutoHeight(); var r = t; if (r || (r = n > i ? "next" : n < i ? "prev" : "reset"), this.emit("transitionStart"), e && n !== i) { if ("reset" === r) return void this.emit("slideResetTransitionStart");
                    this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart") } }, transitionEnd: function() { var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = arguments[1],
                    n = this.activeIndex,
                    a = this.previousIndex;
                this.animating = !1, this.setTransition(0); var i = t; if (i || (i = n > a ? "next" : n < a ? "prev" : "reset"), this.emit("transitionEnd"), e && n !== a) { if ("reset" === i) return void this.emit("slideResetTransitionEnd");
                    this.emit("slideChangeTransitionEnd"), "next" === i ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd") } } }; var Rn = { slideTo: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    a = arguments[3],
                    i = this,
                    r = e;
                r < 0 && (r = 0); var s = i.params,
                    o = i.snapGrid,
                    l = i.slidesGrid,
                    c = i.previousIndex,
                    d = i.activeIndex,
                    u = i.rtlTranslate; if (i.animating && s.preventIntercationOnTransition) return !1; var p = Math.floor(r / s.slidesPerGroup);
                p >= o.length && (p = o.length - 1), (d || s.initialSlide || 0) === (c || 0) && n && i.emit("beforeSlideChangeStart"); var h = -o[p]; if (i.updateProgress(h), s.normalizeSlideIndex)
                    for (var f = 0; f < l.length; f += 1) - Math.floor(100 * h) >= Math.floor(100 * l[f]) && (r = f); if (i.initialized && r !== d) { if (!i.allowSlideNext && h < i.translate && h < i.minTranslate()) return !1; if (!i.allowSlidePrev && h > i.translate && h > i.maxTranslate() && (d || 0) !== r) return !1 } var v = void 0; return v = r > d ? "next" : r < d ? "prev" : "reset", u && -h === i.translate || !u && h === i.translate ? (i.updateActiveIndex(r), s.autoHeight && i.updateAutoHeight(), i.updateSlidesClasses(), "slide" !== s.effect && i.setTranslate(h), "reset" !== v && (i.transitionStart(n, v), i.transitionEnd(n, v)), !1) : (0 !== t && Me.transition ? (i.setTransition(t), i.setTranslate(h), i.updateActiveIndex(r), i.updateSlidesClasses(), i.emit("beforeTransitionStart", t, a), i.transitionStart(n, v), i.animating || (i.animating = !0, i.onSlideToWrapperTransitionEnd || (i.onSlideToWrapperTransitionEnd = function(e) { i && !i.destroyed && e.target === this && (i.$wrapperEl[0].removeEventListener("transitionend", i.onSlideToWrapperTransitionEnd), i.$wrapperEl[0].removeEventListener("webkitTransitionEnd", i.onSlideToWrapperTransitionEnd), i.transitionEnd(n, v)) }), i.$wrapperEl[0].addEventListener("transitionend", i.onSlideToWrapperTransitionEnd), i.$wrapperEl[0].addEventListener("webkitTransitionEnd", i.onSlideToWrapperTransitionEnd))) : (i.setTransition(0), i.setTranslate(h), i.updateActiveIndex(r), i.updateSlidesClasses(), i.emit("beforeTransitionStart", t, a), i.transitionStart(n, v), i.transitionEnd(n, v)), !0) }, slideToLoop: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    a = arguments[3],
                    i = e; return this.params.loop && (i += this.loopedSlides), this.slideTo(i, t, n, a) }, slideNext: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                    t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = arguments[2],
                    a = this.params,
                    i = this.animating; return a.loop ? !i && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + a.slidesPerGroup, e, t, n)) : this.slideTo(this.activeIndex + a.slidesPerGroup, e, t, n) }, slidePrev: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                    t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = arguments[2],
                    a = this.params,
                    i = this.animating,
                    r = this.snapGrid,
                    s = this.slidesGrid,
                    o = this.rtlTranslate; if (a.loop) { if (i) return !1;
                    this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft } var l = o ? this.translate : -this.translate,
                    c = l < 0 ? -Math.floor(Math.abs(l)) : Math.floor(l),
                    d = r.map(function(e) { return Math.floor(e) }),
                    u = (s.map(function(e) { return Math.floor(e) }), r[d.indexOf(c)], r[d.indexOf(c) - 1]),
                    p = void 0; return void 0 !== u && (p = s.indexOf(u)) < 0 && (p = this.activeIndex - 1), this.slideTo(p, e, t, n) }, slideReset: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                    t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = arguments[2]; return this.slideTo(this.activeIndex, e, t, n) }, slideToClosest: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                    t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = arguments[2],
                    a = this.activeIndex,
                    i = Math.floor(a / this.params.slidesPerGroup); if (i < this.snapGrid.length - 1) { var r = this.rtlTranslate ? this.translate : -this.translate,
                        s = this.snapGrid[i];
                    r - s > (this.snapGrid[i + 1] - s) / 2 && (a = this.params.slidesPerGroup) } return this.slideTo(a, e, t, n) }, slideToClickedSlide: function() { var e = this,
                    t = e.params,
                    n = e.$wrapperEl,
                    a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView,
                    i = e.clickedIndex,
                    r = void 0; if (t.loop) { if (e.animating) return;
                    r = parseInt(G(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? i < e.loopedSlides - a / 2 || i > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), i = n.children("." + t.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + t.slideDuplicateClass + ")").eq(0).index(), me.nextTick(function() { e.slideTo(i) })) : e.slideTo(i) : i > e.slides.length - a ? (e.loopFix(), i = n.children("." + t.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + t.slideDuplicateClass + ")").eq(0).index(), me.nextTick(function() { e.slideTo(i) })) : e.slideTo(i) } else e.slideTo(i) } }; var zn = { loopCreate: function() { var e = this,
                    t = e.params,
                    n = e.$wrapperEl;
                n.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(); var a = n.children("." + t.slideClass); if (t.loopFillGroupWithBlank) { var i = t.slidesPerGroup - a.length % t.slidesPerGroup; if (i !== t.slidesPerGroup) { for (var r = 0; r < i; r += 1) { var s = G(I.createElement("div")).addClass(t.slideClass + " " + t.slideBlankClass);
                            n.append(s) } a = n.children("." + t.slideClass) } } "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = a.length), e.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length); var o = [],
                    l = [];
                a.each(function(t, n) { var i = G(n);
                    t < e.loopedSlides && l.push(n), t < a.length && t >= a.length - e.loopedSlides && o.push(n), i.attr("data-swiper-slide-index", t) }); for (var c = 0; c < l.length; c += 1) n.append(G(l[c].cloneNode(!0)).addClass(t.slideDuplicateClass)); for (var d = o.length - 1; d >= 0; d -= 1) n.prepend(G(o[d].cloneNode(!0)).addClass(t.slideDuplicateClass)) }, loopFix: function() { var e = this.params,
                    t = this.activeIndex,
                    n = this.slides,
                    a = this.loopedSlides,
                    i = this.allowSlidePrev,
                    r = this.allowSlideNext,
                    s = this.snapGrid,
                    o = this.rtlTranslate,
                    l = void 0;
                this.allowSlidePrev = !0, this.allowSlideNext = !0; var c = -s[t] - this.getTranslate();
                t < a ? (l = n.length - 3 * a + t, l += a, this.slideTo(l, 0, !1, !0) && 0 !== c && this.setTranslate((o ? -this.translate : this.translate) - c)) : ("auto" === e.slidesPerView && t >= 2 * a || t > n.length - 2 * e.slidesPerView) && (l = -n.length + t + a, l += a, this.slideTo(l, 0, !1, !0) && 0 !== c && this.setTranslate((o ? -this.translate : this.translate) - c));
                this.allowSlidePrev = i, this.allowSlideNext = r }, loopDestroy: function() { var e = this.$wrapperEl,
                    t = this.params,
                    n = this.slides;
                e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), n.removeAttr("data-swiper-slide-index") } }; var Nn = { setGrabCursor: function(e) { if (!(Me.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) { var t = this.el;
                    t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab" } }, unsetGrabCursor: function() { Me.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "") } }; var Fn = { appendSlide: function(e) { var t = this.$wrapperEl,
                    n = this.params; if (n.loop && this.loopDestroy(), "object" === (void 0 === e ? "undefined" : S()(e)) && "length" in e)
                    for (var a = 0; a < e.length; a += 1) e[a] && t.append(e[a]);
                else t.append(e);
                n.loop && this.loopCreate(), n.observer && Me.observer || this.update() }, prependSlide: function(e) { var t = this.params,
                    n = this.$wrapperEl,
                    a = this.activeIndex;
                t.loop && this.loopDestroy(); var i = a + 1; if ("object" === (void 0 === e ? "undefined" : S()(e)) && "length" in e) { for (var r = 0; r < e.length; r += 1) e[r] && n.prepend(e[r]);
                    i = a + e.length } else n.prepend(e);
                t.loop && this.loopCreate(), t.observer && Me.observer || this.update(), this.slideTo(i, 0, !1) }, removeSlide: function(e) { var t = this.params,
                    n = this.$wrapperEl,
                    a = this.activeIndex;
                t.loop && (this.loopDestroy(), this.slides = n.children("." + t.slideClass)); var i = a,
                    r = void 0; if ("object" === (void 0 === e ? "undefined" : S()(e)) && "length" in e) { for (var s = 0; s < e.length; s += 1) r = e[s], this.slides[r] && this.slides.eq(r).remove(), r < i && (i -= 1);
                    i = Math.max(i, 0) } else r = e, this.slides[r] && this.slides.eq(r).remove(), r < i && (i -= 1), i = Math.max(i, 0);
                t.loop && this.loopCreate(), t.observer && Me.observer || this.update(), t.loop ? this.slideTo(i + this.loopedSlides, 0, !1) : this.slideTo(i, 0, !1) }, removeAllSlides: function() { for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e) } };

        function Hn() { var e = this.params,
                t = this.el; if (!t || 0 !== t.offsetWidth) { e.breakpoints && this.setBreakpoint(); var n = this.allowSlideNext,
                    a = this.allowSlidePrev,
                    i = this.snapGrid; if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) { var r = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
                    this.setTranslate(r), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight() } else this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
                this.allowSlidePrev = a, this.allowSlideNext = n, this.params.watchOverflow && i !== this.snapGrid && this.checkOverflow() } } var jn = { attachEvents: function() { var e = this.params,
                    t = this.touchEvents,
                    n = this.el,
                    a = this.wrapperEl;
                this.onTouchStart = function(e) { var t = this.touchEventsData,
                        n = this.params,
                        a = this.touches; if (!this.animating || !n.preventIntercationOnTransition) { var i = e; if (i.originalEvent && (i = i.originalEvent), t.isTouchEvent = "touchstart" === i.type, (t.isTouchEvent || !("which" in i) || 3 !== i.which) && (!t.isTouched || !t.isMoved))
                            if (n.noSwiping && G(i.target).closest(n.noSwipingSelector ? n.noSwipingSelector : "." + n.noSwipingClass)[0]) this.allowClick = !0;
                            else if (!n.swipeHandler || G(i).closest(n.swipeHandler)[0]) { a.currentX = "touchstart" === i.type ? i.targetTouches[0].pageX : i.pageX, a.currentY = "touchstart" === i.type ? i.targetTouches[0].pageY : i.pageY; var r = a.currentX,
                                s = a.currentY; if (!ge.ios || ge.cordova || !n.iOSEdgeSwipeDetection || !(r <= n.iOSEdgeSwipeThreshold || r >= A.screen.width - n.iOSEdgeSwipeThreshold)) { if (me.extend(t, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), a.startX = r, a.startY = s, t.touchStartTime = me.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, n.threshold > 0 && (t.allowThresholdMove = !1), "touchstart" !== i.type) { var o = !0;
                                    G(i.target).is(t.formElements) && (o = !1), I.activeElement && G(I.activeElement).is(t.formElements) && I.activeElement !== i.target && I.activeElement.blur(), o && this.allowTouchMove && i.preventDefault() } this.emit("touchStart", i) } } } }.bind(this), this.onTouchMove = function(e) { var t = this.touchEventsData,
                        n = this.params,
                        a = this.touches,
                        i = this.rtlTranslate,
                        r = e; if (r.originalEvent && (r = r.originalEvent), t.isTouched) { if (!t.isTouchEvent || "mousemove" !== r.type) { var s = "touchmove" === r.type ? r.targetTouches[0].pageX : r.pageX,
                                o = "touchmove" === r.type ? r.targetTouches[0].pageY : r.pageY; if (r.preventedByNestedSwiper) return a.startX = s, void(a.startY = o); if (!this.allowTouchMove) return this.allowClick = !1, void(t.isTouched && (me.extend(a, { startX: s, startY: o, currentX: s, currentY: o }), t.touchStartTime = me.now())); if (t.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                                if (this.isVertical()) { if (o < a.startY && this.translate <= this.maxTranslate() || o > a.startY && this.translate >= this.minTranslate()) return t.isTouched = !1, void(t.isMoved = !1) } else if (s < a.startX && this.translate <= this.maxTranslate() || s > a.startX && this.translate >= this.minTranslate()) return; if (t.isTouchEvent && I.activeElement && r.target === I.activeElement && G(r.target).is(t.formElements)) return t.isMoved = !0, void(this.allowClick = !1); if (t.allowTouchCallbacks && this.emit("touchMove", r), !(r.targetTouches && r.targetTouches.length > 1)) { a.currentX = s, a.currentY = o; var l = a.currentX - a.startX,
                                    c = a.currentY - a.startY; if (void 0 === t.isScrolling) { var d = void 0;
                                    this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? t.isScrolling = !1 : l * l + c * c >= 25 && (d = 180 * Math.atan2(Math.abs(c), Math.abs(l)) / Math.PI, t.isScrolling = this.isHorizontal() ? d > n.touchAngle : 90 - d > n.touchAngle) } if (t.isScrolling && this.emit("touchMoveOpposite", r), "undefined" == typeof startMoving && (a.currentX === a.startX && a.currentY === a.startY || (t.startMoving = !0)), t.isScrolling) t.isTouched = !1;
                                else if (t.startMoving) { this.allowClick = !1, r.preventDefault(), n.touchMoveStopPropagation && !n.nested && r.stopPropagation(), t.isMoved || (n.loop && this.loopFix(), t.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), t.allowMomentumBounce = !1, !n.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", r)), this.emit("sliderMove", r), t.isMoved = !0; var u = this.isHorizontal() ? l : c;
                                    a.diff = u, u *= n.touchRatio, i && (u = -u), this.swipeDirection = u > 0 ? "prev" : "next", t.currentTranslate = u + t.startTranslate; var p = !0,
                                        h = n.resistanceRatio; if (n.touchReleaseOnEdges && (h = 0), u > 0 && t.currentTranslate > this.minTranslate() ? (p = !1, n.resistance && (t.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + t.startTranslate + u, h))) : u < 0 && t.currentTranslate < this.maxTranslate() && (p = !1, n.resistance && (t.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - t.startTranslate - u, h))), p && (r.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && t.currentTranslate < t.startTranslate && (t.currentTranslate = t.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && t.currentTranslate > t.startTranslate && (t.currentTranslate = t.startTranslate), n.threshold > 0) { if (!(Math.abs(u) > n.threshold || t.allowThresholdMove)) return void(t.currentTranslate = t.startTranslate); if (!t.allowThresholdMove) return t.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, t.currentTranslate = t.startTranslate, void(a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY) } n.followFinger && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), n.freeMode && (0 === t.velocities.length && t.velocities.push({ position: a[this.isHorizontal() ? "startX" : "startY"], time: t.touchStartTime }), t.velocities.push({ position: a[this.isHorizontal() ? "currentX" : "currentY"], time: me.now() })), this.updateProgress(t.currentTranslate), this.setTranslate(t.currentTranslate)) } } } } else t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", r) }.bind(this), this.onTouchEnd = function(e) { var t = this,
                        n = t.touchEventsData,
                        a = t.params,
                        i = t.touches,
                        r = t.rtlTranslate,
                        s = t.$wrapperEl,
                        o = t.slidesGrid,
                        l = t.snapGrid,
                        c = e; if (c.originalEvent && (c = c.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", c), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && a.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
                    a.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1); var d = me.now(),
                        u = d - n.touchStartTime; if (t.allowClick && (t.updateClickedSlide(c), t.emit("tap", c), u < 300 && d - n.lastClickTime > 300 && (n.clickTimeout && clearTimeout(n.clickTimeout), n.clickTimeout = me.nextTick(function() { t && !t.destroyed && t.emit("click", c) }, 300)), u < 300 && d - n.lastClickTime < 300 && (n.clickTimeout && clearTimeout(n.clickTimeout), t.emit("doubleTap", c))), n.lastClickTime = me.now(), me.nextTick(function() { t.destroyed || (t.allowClick = !0) }), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === i.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
                    n.isTouched = !1, n.isMoved = !1, n.startMoving = !1; var p = void 0; if (p = a.followFinger ? r ? t.translate : -t.translate : -n.currentTranslate, a.freeMode) { if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex); if (p > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1)); if (a.freeModeMomentum) { if (n.velocities.length > 1) { var h = n.velocities.pop(),
                                    f = n.velocities.pop(),
                                    v = h.position - f.position,
                                    m = h.time - f.time;
                                t.velocity = v / m, t.velocity /= 2, Math.abs(t.velocity) < a.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || me.now() - h.time > 300) && (t.velocity = 0) } else t.velocity = 0;
                            t.velocity *= a.freeModeMomentumVelocityRatio, n.velocities.length = 0; var g = 1e3 * a.freeModeMomentumRatio,
                                b = t.velocity * g,
                                y = t.translate + b;
                            r && (y = -y); var w = !1,
                                C = void 0,
                                x = 20 * Math.abs(t.velocity) * a.freeModeMomentumBounceRatio,
                                k = void 0; if (y < t.maxTranslate()) a.freeModeMomentumBounce ? (y + t.maxTranslate() < -x && (y = t.maxTranslate() - x), C = t.maxTranslate(), w = !0, n.allowMomentumBounce = !0) : y = t.maxTranslate(), a.loop && a.centeredSlides && (k = !0);
                            else if (y > t.minTranslate()) a.freeModeMomentumBounce ? (y - t.minTranslate() > x && (y = t.minTranslate() + x), C = t.minTranslate(), w = !0, n.allowMomentumBounce = !0) : y = t.minTranslate(), a.loop && a.centeredSlides && (k = !0);
                            else if (a.freeModeSticky) { for (var E = void 0, $ = 0; $ < l.length; $ += 1)
                                    if (l[$] > -y) { E = $; break }
                                y = -(y = Math.abs(l[E] - y) < Math.abs(l[E - 1] - y) || "next" === t.swipeDirection ? l[E] : l[E - 1]) } if (k && t.once("transitionEnd", function() { t.loopFix() }), 0 !== t.velocity) g = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
                            else if (a.freeModeSticky) return void t.slideToClosest();
                            a.freeModeMomentumBounce && w ? (t.updateProgress(C), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, s.transitionEnd(function() { t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(a.speed), t.setTranslate(C), s.transitionEnd(function() { t && !t.destroyed && t.transitionEnd() })) })) : t.velocity ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, s.transitionEnd(function() { t && !t.destroyed && t.transitionEnd() }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses() } else if (a.freeModeSticky) return void t.slideToClosest();
                        (!a.freeModeMomentum || u >= a.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()) } else { for (var S = 0, T = t.slidesSizesGrid[0], _ = 0; _ < o.length; _ += a.slidesPerGroup) void 0 !== o[_ + a.slidesPerGroup] ? p >= o[_] && p < o[_ + a.slidesPerGroup] && (S = _, T = o[_ + a.slidesPerGroup] - o[_]) : p >= o[_] && (S = _, T = o[o.length - 1] - o[o.length - 2]); var M = (p - o[S]) / T; if (u > a.longSwipesMs) { if (!a.longSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && (M >= a.longSwipesRatio ? t.slideTo(S + a.slidesPerGroup) : t.slideTo(S)), "prev" === t.swipeDirection && (M > 1 - a.longSwipesRatio ? t.slideTo(S + a.slidesPerGroup) : t.slideTo(S)) } else { if (!a.shortSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && t.slideTo(S + a.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(S) } } }.bind(this), this.onClick = function(e) { this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation())) }.bind(this); var i = "container" === e.touchEventsTarget ? n : a,
                    r = !!e.nested; if (Me.touch || !Me.pointerEvents && !Me.prefixedPointerEvents) { if (Me.touch) { var s = !("touchstart" !== t.start || !Me.passiveListener || !e.passiveListeners) && { passive: !0, capture: !1 };
                        i.addEventListener(t.start, this.onTouchStart, s), i.addEventListener(t.move, this.onTouchMove, Me.passiveListener ? { passive: !1, capture: r } : r), i.addEventListener(t.end, this.onTouchEnd, s) }(e.simulateTouch && !ge.ios && !ge.android || e.simulateTouch && !Me.touch && ge.ios) && (i.addEventListener("mousedown", this.onTouchStart, !1), I.addEventListener("mousemove", this.onTouchMove, r), I.addEventListener("mouseup", this.onTouchEnd, !1)) } else i.addEventListener(t.start, this.onTouchStart, !1), I.addEventListener(t.move, this.onTouchMove, r), I.addEventListener(t.end, this.onTouchEnd, !1);
                (e.preventClicks || e.preventClicksPropagation) && i.addEventListener("click", this.onClick, !0), this.on(ge.ios || ge.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Hn, !0) }, detachEvents: function() { var e = this.params,
                    t = this.touchEvents,
                    n = this.el,
                    a = this.wrapperEl,
                    i = "container" === e.touchEventsTarget ? n : a,
                    r = !!e.nested; if (Me.touch || !Me.pointerEvents && !Me.prefixedPointerEvents) { if (Me.touch) { var s = !("onTouchStart" !== t.start || !Me.passiveListener || !e.passiveListeners) && { passive: !0, capture: !1 };
                        i.removeEventListener(t.start, this.onTouchStart, s), i.removeEventListener(t.move, this.onTouchMove, r), i.removeEventListener(t.end, this.onTouchEnd, s) }(e.simulateTouch && !ge.ios && !ge.android || e.simulateTouch && !Me.touch && ge.ios) && (i.removeEventListener("mousedown", this.onTouchStart, !1), I.removeEventListener("mousemove", this.onTouchMove, r), I.removeEventListener("mouseup", this.onTouchEnd, !1)) } else i.removeEventListener(t.start, this.onTouchStart, !1), I.removeEventListener(t.move, this.onTouchMove, r), I.removeEventListener(t.end, this.onTouchEnd, !1);
                (e.preventClicks || e.preventClicksPropagation) && i.removeEventListener("click", this.onClick, !0), this.off(ge.ios || ge.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Hn) } }; var Vn = { setBreakpoint: function() { var e = this.activeIndex,
                        t = this.initialized,
                        n = this.loopedSlides,
                        a = void 0 === n ? 0 : n,
                        i = this.params,
                        r = i.breakpoints; if (r && (!r || 0 !== P()(r).length)) { var s = this.getBreakpoint(r); if (s && this.currentBreakpoint !== s) { var o = s in r ? r[s] : this.originalParams,
                                l = i.loop && o.slidesPerView !== i.slidesPerView;
                            me.extend(this.params, o), me.extend(this, { allowTouchMove: this.params.allowTouchMove, allowSlideNext: this.params.allowSlideNext, allowSlidePrev: this.params.allowSlidePrev }), this.currentBreakpoint = s, l && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - a + this.loopedSlides, 0, !1)), this.emit("breakpoint", o) } } }, getBreakpoint: function(e) { if (e) { var t = !1,
                            n = [];
                        P()(e).forEach(function(e) { n.push(e) }), n.sort(function(e, t) { return parseInt(e, 10) - parseInt(t, 10) }); for (var a = 0; a < n.length; a += 1) { var i = n[a];
                            i >= A.innerWidth && !t && (t = i) } return t || "max" } } },
            qn = function() { return { isIE: !!A.navigator.userAgent.match(/Trident/g) || !!A.navigator.userAgent.match(/MSIE/g), isSafari: (e = A.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(A.navigator.userAgent) }; var e }(); var Wn = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, preventIntercationOnTransition: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !0, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0 },
            Yn = { update: An, translate: Ln, transition: Dn, slide: Rn, loop: zn, grabCursor: Nn, manipulation: Fn, events: jn, breakpoints: Vn, checkOverflow: { checkOverflow: function() { var e = this.isLocked;
                        this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update()) } }, classes: { addClasses: function() { var e = this.classNames,
                            t = this.params,
                            n = this.rtl,
                            a = this.$el,
                            i = [];
                        i.push(t.direction), t.freeMode && i.push("free-mode"), Me.flexbox || i.push("no-flexbox"), t.autoHeight && i.push("autoheight"), n && i.push("rtl"), t.slidesPerColumn > 1 && i.push("multirow"), ge.android && i.push("android"), ge.ios && i.push("ios"), qn.isIE && (Me.pointerEvents || Me.prefixedPointerEvents) && i.push("wp8-" + t.direction), i.forEach(function(n) { e.push(t.containerModifierClass + n) }), a.addClass(e.join(" ")) }, removeClasses: function() { var e = this.$el,
                            t = this.classNames;
                        e.removeClass(t.join(" ")) } }, images: { loadImage: function(e, t, n, a, i, r) { var s = void 0;

                        function o() { r && r() } e.complete && i ? o() : t ? ((s = new A.Image).onload = o, s.onerror = o, a && (s.sizes = a), n && (s.srcset = n), t && (s.src = t)) : o() }, preloadImages: function() { var e = this;

                        function t() { void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady"))) } e.imagesToLoad = e.$el.find("img"); for (var n = 0; n < e.imagesToLoad.length; n += 1) { var a = e.imagesToLoad[n];
                            e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t) } } } },
            Un = {},
            Gn = function(e) {
                function t() { var e;
                    w()(this, t); for (var n = void 0, a = void 0, i = arguments.length, r = Array(i), s = 0; s < i; s++) r[s] = arguments[s];
                    1 === r.length && r[0].constructor && r[0].constructor === Object ? a = r[0] : (n = r[0], a = r[1]), a || (a = {}), a = me.extend({}, a), n && !a.el && (a.el = n); var o = m()(this, (t.__proto__ || f()(t)).call(this, a));
                    P()(Yn).forEach(function(e) { P()(Yn[e]).forEach(function(n) { t.prototype[n] || (t.prototype[n] = Yn[e][n]) }) }); var l = o;
                    void 0 === l.modules && (l.modules = {}), P()(l.modules).forEach(function(e) { var t = l.modules[e]; if (t.params) { var n = P()(t.params)[0],
                                i = t.params[n]; if ("object" !== (void 0 === i ? "undefined" : S()(i))) return; if (!(n in a && "enabled" in i)) return;!0 === a[n] && (a[n] = { enabled: !0 }), "object" !== S()(a[n]) || "enabled" in a[n] || (a[n].enabled = !0), a[n] || (a[n] = { enabled: !1 }) } }); var c = me.extend({}, Wn);
                    l.useModulesParams(c), l.params = me.extend({}, c, Un, a), l.originalParams = me.extend({}, l.params), l.passedParams = me.extend({}, a), l.$ = G; var d = G(l.params.el); if (!(n = d[0])) return void 0, m()(o, void 0); if (d.length > 1) { var u, p = []; return d.each(function(e, n) { var i = me.extend({}, a, { el: n });
                            p.push(new t(i)) }), u = p, m()(o, u) } n.swiper = l, d.data("swiper", l); var h, v, g = d.children("." + l.params.wrapperClass); return me.extend(l, { $el: d, el: n, $wrapperEl: g, wrapperEl: g[0], classNames: [], slides: G(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function() { return "horizontal" === l.params.direction }, isVertical: function() { return "vertical" === l.params.direction }, rtl: "rtl" === n.dir.toLowerCase() || "rtl" === d.css("direction"), rtlTranslate: "horizontal" === l.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === d.css("direction")), wrongRTL: "-webkit-box" === g.css("display"), activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: l.params.allowSlideNext, allowSlidePrev: l.params.allowSlidePrev, touchEvents: (h = ["touchstart", "touchmove", "touchend"], v = ["mousedown", "mousemove", "mouseup"], Me.pointerEvents ? v = ["pointerdown", "pointermove", "pointerup"] : Me.prefixedPointerEvents && (v = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = { start: h[0], move: h[1], end: h[2] }, l.touchEventsDesktop = { start: v[0], move: v[1], end: v[2] }, Me.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video", lastClickTime: me.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: l.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), l.useModules(), l.params.init && l.init(), e = l, m()(o, e) } return b()(t, e), x()(t, [{ key: "slidesPerViewDynamic", value: function() { var e = this.params,
                            t = this.slides,
                            n = this.slidesGrid,
                            a = this.size,
                            i = this.activeIndex,
                            r = 1; if (e.centeredSlides) { for (var s = t[i].swiperSlideSize, o = void 0, l = i + 1; l < t.length; l += 1) t[l] && !o && (r += 1, (s += t[l].swiperSlideSize) > a && (o = !0)); for (var c = i - 1; c >= 0; c -= 1) t[c] && !o && (r += 1, (s += t[c].swiperSlideSize) > a && (o = !0)) } else
                            for (var d = i + 1; d < t.length; d += 1) n[d] - n[i] < a && (r += 1); return r } }, { key: "update", value: function() { var e = this; if (e && !e.destroyed) { var t = e.snapGrid,
                                n = e.params;
                            n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
                            e.params.freeMode ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || a(), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update") }

                        function a() { var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                                n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses() } } }, { key: "init", value: function() { this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init")) } }, { key: "destroy", value: function() { var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = this,
                            a = n.params,
                            i = n.$el,
                            r = n.$wrapperEl,
                            s = n.slides; return void 0 === n.params || n.destroyed ? null : (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), a.loop && n.loopDestroy(), t && (n.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), s && s.length && s.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), n.emit("destroy"), P()(n.eventsListeners).forEach(function(e) { n.off(e) }), !1 !== e && (n.$el[0].swiper = null, n.$el.data("swiper", null), me.deleteProps(n)), n.destroyed = !0, null) } }], [{ key: "extendDefaults", value: function(e) { me.extend(Un, e) } }, { key: "extendedDefaults", get: function() { return Un } }, { key: "defaults", get: function() { return Wn } }, { key: "Class", get: function() { return be } }, { key: "$", get: function() { return G } }]), t }(be),
            Xn = { name: "device", proto: { device: ge }, static: { device: ge } },
            Kn = { name: "support", proto: { support: Me }, static: { support: Me } },
            Jn = { name: "browser", proto: { browser: qn }, static: { browser: qn } },
            Qn = { name: "resize", create: function() { var e = this;
                    me.extend(e, { resize: { resizeHandler: function() { e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize")) }, orientationChangeHandler: function() { e && !e.destroyed && e.initialized && e.emit("orientationchange") } } }) }, on: { init: function() { A.addEventListener("resize", this.resize.resizeHandler), A.addEventListener("orientationchange", this.resize.orientationChangeHandler) }, destroy: function() { A.removeEventListener("resize", this.resize.resizeHandler), A.removeEventListener("orientationchange", this.resize.orientationChangeHandler) } } },
            Zn = { func: A.MutationObserver || A.WebkitMutationObserver, attach: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = this,
                        a = new(0, Zn.func)(function(e) { e.forEach(function(e) { n.emit("observerUpdate", e) }) });
                    a.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), n.observer.observers.push(a) }, init: function() { if (Me.observer && this.params.observer) { if (this.params.observeParents)
                            for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                        this.observer.attach(this.$el[0], { childList: !1 }), this.observer.attach(this.$wrapperEl[0], { attributes: !1 }) } }, destroy: function() { this.observer.observers.forEach(function(e) { e.disconnect() }), this.observer.observers = [] } },
            ea = { name: "observer", params: { observer: !1, observeParents: !1 }, create: function() { me.extend(this, { observer: { init: Zn.init.bind(this), attach: Zn.attach.bind(this), destroy: Zn.destroy.bind(this), observers: [] } }) }, on: { init: function() { this.observer.init() }, destroy: function() { this.observer.destroy() } } },
            ta = { update: function(e) { var t = this,
                        n = t.params,
                        a = n.slidesPerView,
                        i = n.slidesPerGroup,
                        r = n.centeredSlides,
                        s = t.virtual,
                        o = s.from,
                        l = s.to,
                        c = s.slides,
                        d = s.slidesGrid,
                        u = s.renderSlide,
                        p = s.offset;
                    t.updateActiveIndex(); var h = t.activeIndex || 0,
                        f = void 0;
                    f = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"; var v = void 0,
                        m = void 0;
                    r ? (v = Math.floor(a / 2) + i, m = Math.floor(a / 2) + i) : (v = a + (i - 1), m = i); var g = Math.max((h || 0) - m, 0),
                        b = Math.min((h || 0) + v, c.length - 1),
                        y = (t.slidesGrid[g] || 0) - (t.slidesGrid[0] || 0);

                    function w() { t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load() } if (me.extend(t.virtual, { from: g, to: b, offset: y, slidesGrid: t.slidesGrid }), o === g && l === b && !e) return t.slidesGrid !== d && y !== p && t.slides.css(f, y + "px"), void t.updateProgress(); if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, { offset: y, from: g, to: b, slides: function() { for (var e = [], t = g; t <= b; t += 1) e.push(c[t]); return e }() }), void w(); var C = [],
                        x = []; if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                    else
                        for (var k = o; k <= l; k += 1)(k < g || k > b) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + k + '"]').remove(); for (var E = 0; E < c.length; E += 1) E >= g && E <= b && (void 0 === l || e ? x.push(E) : (E > l && x.push(E), E < o && C.push(E)));
                    x.forEach(function(e) { t.$wrapperEl.append(u(c[e], e)) }), C.sort(function(e, t) { return e < t }).forEach(function(e) { t.$wrapperEl.prepend(u(c[e], e)) }), t.$wrapperEl.children(".swiper-slide").css(f, y + "px"), w() }, renderSlide: function(e, t) { var n = this.params.virtual; if (n.cache && this.virtual.cache[t]) return this.virtual.cache[t]; var a = n.renderSlide ? G(n.renderSlide.call(this, e, t)) : G('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>"); return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), n.cache && (this.virtual.cache[t] = a), a }, appendSlide: function(e) { this.virtual.slides.push(e), this.virtual.update(!0) }, prependSlide: function(e) { if (this.virtual.slides.unshift(e), this.params.virtual.cache) { var t = this.virtual.cache,
                            n = {};
                        P()(t).forEach(function(e) { n[e + 1] = t[e] }), this.virtual.cache = n } this.virtual.update(!0), this.slideNext(0) } },
            na = { name: "virtual", params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null } }, create: function() { me.extend(this, { virtual: { update: ta.update.bind(this), appendSlide: ta.appendSlide.bind(this), prependSlide: ta.prependSlide.bind(this), renderSlide: ta.renderSlide.bind(this), slides: this.params.virtual.slides, cache: {} } }) }, on: { beforeInit: function() { if (this.params.virtual.enabled) { this.classNames.push(this.params.containerModifierClass + "virtual"); var e = { watchSlidesProgress: !0 };
                            me.extend(this.params, e), me.extend(this.originalParams, e), this.virtual.update() } }, setTranslate: function() { this.params.virtual.enabled && this.virtual.update() } } },
            aa = { update: function() { var e = this.params.navigation; if (!this.params.loop) { var t = this.navigation,
                            n = t.$nextEl,
                            a = t.$prevEl;
                        a && a.length > 0 && (this.isBeginning ? a.addClass(e.disabledClass) : a.removeClass(e.disabledClass), a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), n && n.length > 0 && (this.isEnd ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass), n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)) } }, init: function() { var e = this,
                        t = e.params.navigation; if (t.nextEl || t.prevEl) { var n = void 0,
                            a = void 0;
                        t.nextEl && (n = G(t.nextEl), e.params.uniqueNavElements && "string" == typeof t.nextEl && n.length > 1 && 1 === e.$el.find(t.nextEl).length && (n = e.$el.find(t.nextEl))), t.prevEl && (a = G(t.prevEl), e.params.uniqueNavElements && "string" == typeof t.prevEl && a.length > 1 && 1 === e.$el.find(t.prevEl).length && (a = e.$el.find(t.prevEl))), n && n.length > 0 && n.on("click", function(t) { t.preventDefault(), e.isEnd && !e.params.loop || e.slideNext() }), a && a.length > 0 && a.on("click", function(t) { t.preventDefault(), e.isBeginning && !e.params.loop || e.slidePrev() }), me.extend(e.navigation, { $nextEl: n, nextEl: n && n[0], $prevEl: a, prevEl: a && a[0] }) } }, destroy: function() { var e = this.navigation,
                        t = e.$nextEl,
                        n = e.$prevEl;
                    t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), n && n.length && (n.off("click"), n.removeClass(this.params.navigation.disabledClass)) } },
            ia = { name: "navigation", params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } }, create: function() { me.extend(this, { navigation: { init: aa.init.bind(this), update: aa.update.bind(this), destroy: aa.destroy.bind(this) } }) }, on: { init: function() { this.navigation.init(), this.navigation.update() }, toEdge: function() { this.navigation.update() }, fromEdge: function() { this.navigation.update() }, destroy: function() { this.navigation.destroy() }, click: function(e) { var t = this.navigation,
                            n = t.$nextEl,
                            a = t.$prevEl;!this.params.navigation.hideOnClick || G(e.target).is(a) || G(e.target).is(n) || (n && n.toggleClass(this.params.navigation.hiddenClass), a && a.toggleClass(this.params.navigation.hiddenClass)) } } },
            ra = { update: function() { var e = this.rtl,
                        t = this.params.pagination; if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) { var n = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                            a = this.pagination.$el,
                            i = void 0,
                            r = this.params.loop ? Math.ceil((n - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length; if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > n - 1 - 2 * this.loopedSlides && (i -= n - 2 * this.loopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) { var s = this.pagination.bullets,
                                o = void 0,
                                l = void 0,
                                c = void 0; if (t.dynamicBullets && (this.pagination.bulletSize = s.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, c = ((l = o + (Math.min(s.length, t.dynamicMainBullets) - 1)) + o) / 2), s.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), a.length > 1) s.each(function(e, n) { var a = G(n),
                                    r = a.index();
                                r === i && a.addClass(t.bulletActiveClass), t.dynamicBullets && (r >= o && r <= l && a.addClass(t.bulletActiveClass + "-main"), r === o && a.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), r === l && a.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")) });
                            else if (s.eq(i).addClass(t.bulletActiveClass), t.dynamicBullets) { for (var d = s.eq(o), u = s.eq(l), p = o; p <= l; p += 1) s.eq(p).addClass(t.bulletActiveClass + "-main");
                                d.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), u.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next") } if (t.dynamicBullets) { var h = Math.min(s.length, t.dynamicMainBullets + 4),
                                    f = (this.pagination.bulletSize * h - this.pagination.bulletSize) / 2 - c * this.pagination.bulletSize,
                                    v = e ? "right" : "left";
                                s.css(this.isHorizontal() ? v : "top", f + "px") } } if ("fraction" === t.type && (a.find("." + t.currentClass).text(i + 1), a.find("." + t.totalClass).text(r)), "progressbar" === t.type) { var m = void 0;
                            m = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical"; var g = (i + 1) / r,
                                b = 1,
                                y = 1; "horizontal" === m ? b = g : y = g, a.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + b + ") scaleY(" + y + ")").transition(this.params.speed) } "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", this, a[0])) : this.emit("paginationUpdate", this, a[0]), a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass) } }, render: function() { var e = this.params.pagination; if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) { var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                            n = this.pagination.$el,
                            a = ""; if ("bullets" === e.type) { for (var i = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < i; r += 1) e.renderBullet ? a += e.renderBullet.call(this, r, e.bulletClass) : a += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                            n.html(a), this.pagination.bullets = n.find("." + e.bulletClass) } "fraction" === e.type && (a = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', n.html(a)), "progressbar" === e.type && (a = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', n.html(a)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]) } }, init: function() { var e = this,
                        t = e.params.pagination; if (t.el) { var n = G(t.el);
                        0 !== n.length && (e.params.uniqueNavElements && "string" == typeof t.el && n.length > 1 && 1 === e.$el.find(t.el).length && (n = e.$el.find(t.el)), "bullets" === t.type && t.clickable && n.addClass(t.clickableClass), n.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (n.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && n.addClass(t.progressbarOppositeClass), t.clickable && n.on("click", "." + t.bulletClass, function(t) { t.preventDefault(); var n = G(this).index() * e.params.slidesPerGroup;
                            e.params.loop && (n += e.loopedSlides), e.slideTo(n) }), me.extend(e.pagination, { $el: n, el: n[0] })) } }, destroy: function() { var e = this.params.pagination; if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) { var t = this.pagination.$el;
                        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass) } } },
            sa = { name: "pagination", params: { pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", progressbarOppositeClass: "swiper-pagination-progressbar-opposite", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } }, create: function() { me.extend(this, { pagination: { init: ra.init.bind(this), render: ra.render.bind(this), update: ra.update.bind(this), destroy: ra.destroy.bind(this), dynamicBulletIndex: 0 } }) }, on: { init: function() { this.pagination.init(), this.pagination.render(), this.pagination.update() }, activeIndexChange: function() { this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update() }, snapIndexChange: function() { this.params.loop || this.pagination.update() }, slidesLengthChange: function() { this.params.loop && (this.pagination.render(), this.pagination.update()) }, snapGridLengthChange: function() { this.params.loop || (this.pagination.render(), this.pagination.update()) }, destroy: function() { this.pagination.destroy() }, click: function(e) { this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !G(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass) } } },
            oa = { setTranslate: function() { if (this.params.scrollbar.el && this.scrollbar.el) { var e = this.scrollbar,
                            t = this.rtlTranslate,
                            n = this.progress,
                            a = e.dragSize,
                            i = e.trackSize,
                            r = e.$dragEl,
                            s = e.$el,
                            o = this.params.scrollbar,
                            l = a,
                            c = (i - a) * n;
                        t ? (c = -c) > 0 ? (l = a - c, c = 0) : -c + a > i && (l = i + c) : c < 0 ? (l = a + c, c = 0) : c + a > i && (l = i - c), this.isHorizontal() ? (Me.transforms3d ? r.transform("translate3d(" + c + "px, 0, 0)") : r.transform("translateX(" + c + "px)"), r[0].style.width = l + "px") : (Me.transforms3d ? r.transform("translate3d(0px, " + c + "px, 0)") : r.transform("translateY(" + c + "px)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), s[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() { s[0].style.opacity = 0, s.transition(400) }, 1e3)) } }, setTransition: function(e) { this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e) }, updateSize: function() { if (this.params.scrollbar.el && this.scrollbar.el) { var e = this.scrollbar,
                            t = e.$dragEl,
                            n = e.$el;
                        t[0].style.width = "", t[0].style.height = ""; var a = this.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight,
                            i = this.size / this.virtualSize,
                            r = i * (a / this.size),
                            s = void 0;
                        s = "auto" === this.params.scrollbar.dragSize ? a * i : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", n[0].style.display = i >= 1 ? "none" : "", this.params.scrollbarHide && (n[0].style.opacity = 0), me.extend(e, { trackSize: a, divider: i, moveDivider: r, dragSize: s }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass) } }, setDragPosition: function(e) { var t = this.scrollbar,
                        n = this.rtlTranslate,
                        a = t.$el,
                        i = t.dragSize,
                        r = t.trackSize,
                        s = void 0;
                    s = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[this.isHorizontal() ? "left" : "top"] - i / 2) / (r - i), s = Math.max(Math.min(s, 1), 0), n && (s = 1 - s); var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * s;
                    this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses() }, onDragStart: function(e) { var t = this.params.scrollbar,
                        n = this.scrollbar,
                        a = this.$wrapperEl,
                        i = n.$el,
                        r = n.$dragEl;
                    this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), a.transition(100), r.transition(100), n.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), i.transition(0), t.hide && i.css("opacity", 1), this.emit("scrollbarDragStart", e) }, onDragMove: function(e) { var t = this.scrollbar,
                        n = this.$wrapperEl,
                        a = t.$el,
                        i = t.$dragEl;
                    this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), n.transition(0), a.transition(0), i.transition(0), this.emit("scrollbarDragMove", e)) }, onDragEnd: function(e) { var t = this.params.scrollbar,
                        n = this.scrollbar.$el;
                    this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = me.nextTick(function() { n.css("opacity", 0), n.transition(400) }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest()) }, enableDraggable: function() { if (this.params.scrollbar.el) { var e = this.scrollbar,
                            t = this.touchEvents,
                            n = this.touchEventsDesktop,
                            a = this.params,
                            i = e.$el[0],
                            r = !(!Me.passiveListener || !a.passiveListener) && { passive: !1, capture: !1 },
                            s = !(!Me.passiveListener || !a.passiveListener) && { passive: !0, capture: !1 };
                        Me.touch || !Me.pointerEvents && !Me.prefixedPointerEvents ? (Me.touch && (i.addEventListener(t.start, this.scrollbar.onDragStart, r), i.addEventListener(t.move, this.scrollbar.onDragMove, r), i.addEventListener(t.end, this.scrollbar.onDragEnd, s)), (a.simulateTouch && !ge.ios && !ge.android || a.simulateTouch && !Me.touch && ge.ios) && (i.addEventListener("mousedown", this.scrollbar.onDragStart, r), I.addEventListener("mousemove", this.scrollbar.onDragMove, r), I.addEventListener("mouseup", this.scrollbar.onDragEnd, s))) : (i.addEventListener(n.start, this.scrollbar.onDragStart, r), I.addEventListener(n.move, this.scrollbar.onDragMove, r), I.addEventListener(n.end, this.scrollbar.onDragEnd, s)) } }, disableDraggable: function() { if (this.params.scrollbar.el) { var e = this.scrollbar,
                            t = this.touchEvents,
                            n = this.touchEventsDesktop,
                            a = this.params,
                            i = e.$el[0],
                            r = !(!Me.passiveListener || !a.passiveListener) && { passive: !1, capture: !1 },
                            s = !(!Me.passiveListener || !a.passiveListener) && { passive: !0, capture: !1 };
                        Me.touch || !Me.pointerEvents && !Me.prefixedPointerEvents ? (Me.touch && (i.removeEventListener(t.start, this.scrollbar.onDragStart, r), i.removeEventListener(t.move, this.scrollbar.onDragMove, r), i.removeEventListener(t.end, this.scrollbar.onDragEnd, s)), (a.simulateTouch && !ge.ios && !ge.android || a.simulateTouch && !Me.touch && ge.ios) && (i.removeEventListener("mousedown", this.scrollbar.onDragStart, r), I.removeEventListener("mousemove", this.scrollbar.onDragMove, r), I.removeEventListener("mouseup", this.scrollbar.onDragEnd, s))) : (i.removeEventListener(n.start, this.scrollbar.onDragStart, r), I.removeEventListener(n.move, this.scrollbar.onDragMove, r), I.removeEventListener(n.end, this.scrollbar.onDragEnd, s)) } }, init: function() { if (this.params.scrollbar.el) { var e = this.scrollbar,
                            t = this.$el,
                            n = this.params.scrollbar,
                            a = G(n.el);
                        this.params.uniqueNavElements && "string" == typeof n.el && a.length > 1 && 1 === t.find(n.el).length && (a = t.find(n.el)); var i = a.find("." + this.params.scrollbar.dragClass);
                        0 === i.length && (i = G('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(i)), me.extend(e, { $el: a, el: a[0], $dragEl: i, dragEl: i[0] }), n.draggable && e.enableDraggable() } }, destroy: function() { this.scrollbar.disableDraggable() } },
            la = { name: "scrollbar", params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } }, create: function() { me.extend(this, { scrollbar: { init: oa.init.bind(this), destroy: oa.destroy.bind(this), updateSize: oa.updateSize.bind(this), setTranslate: oa.setTranslate.bind(this), setTransition: oa.setTransition.bind(this), enableDraggable: oa.enableDraggable.bind(this), disableDraggable: oa.disableDraggable.bind(this), setDragPosition: oa.setDragPosition.bind(this), onDragStart: oa.onDragStart.bind(this), onDragMove: oa.onDragMove.bind(this), onDragEnd: oa.onDragEnd.bind(this), isTouched: !1, timeout: null, dragTimeout: null } }) }, on: { init: function() { this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate() }, update: function() { this.scrollbar.updateSize() }, resize: function() { this.scrollbar.updateSize() }, observerUpdate: function() { this.scrollbar.updateSize() }, setTranslate: function() { this.scrollbar.setTranslate() }, setTransition: function(e) { this.scrollbar.setTransition(e) }, destroy: function() { this.scrollbar.destroy() } } },
            ca = { setTransform: function(e, t) { var n = this.rtl,
                        a = G(e),
                        i = n ? -1 : 1,
                        r = a.attr("data-swiper-parallax") || "0",
                        s = a.attr("data-swiper-parallax-x"),
                        o = a.attr("data-swiper-parallax-y"),
                        l = a.attr("data-swiper-parallax-scale"),
                        c = a.attr("data-swiper-parallax-opacity"); if (s || o ? (s = s || "0", o = o || "0") : this.isHorizontal() ? (s = r, o = "0") : (o = r, s = "0"), s = s.indexOf("%") >= 0 ? parseInt(s, 10) * t * i + "%" : s * t * i + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px", void 0 !== c && null !== c) { var d = c - (c - 1) * (1 - Math.abs(t));
                        a[0].style.opacity = d } if (void 0 === l || null === l) a.transform("translate3d(" + s + ", " + o + ", 0px)");
                    else { var u = l - (l - 1) * (1 - Math.abs(t));
                        a.transform("translate3d(" + s + ", " + o + ", 0px) scale(" + u + ")") } }, setTranslate: function() { var e = this,
                        t = e.$el,
                        n = e.slides,
                        a = e.progress,
                        i = e.snapGrid;
                    t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, n) { e.parallax.setTransform(n, a) }), n.each(function(t, n) { var r = n.progress;
                        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(t / 2) - a * (i.length - 1)), r = Math.min(Math.max(r, -1), 1), G(n).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, n) { e.parallax.setTransform(n, r) }) }) }, setTransition: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed;
                    this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, n) { var a = G(n),
                            i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (i = 0), a.transition(i) }) } },
            da = { name: "parallax", params: { parallax: { enabled: !1 } }, create: function() { me.extend(this, { parallax: { setTransform: ca.setTransform.bind(this), setTranslate: ca.setTranslate.bind(this), setTransition: ca.setTransition.bind(this) } }) }, on: { beforeInit: function() { this.params.parallax.enabled && (this.params.watchSlidesProgress = !0) }, init: function() { this.params.parallax && this.parallax.setTranslate() }, setTranslate: function() { this.params.parallax && this.parallax.setTranslate() }, setTransition: function(e) { this.params.parallax && this.parallax.setTransition(e) } } },
            ua = { getDistanceBetweenTouches: function(e) { if (e.targetTouches.length < 2) return 1; var t = e.targetTouches[0].pageX,
                        n = e.targetTouches[0].pageY,
                        a = e.targetTouches[1].pageX,
                        i = e.targetTouches[1].pageY; return Math.sqrt(Math.pow(a - t, 2) + Math.pow(i - n, 2)) }, onGestureStart: function(e) { var t = this.params.zoom,
                        n = this.zoom,
                        a = n.gesture; if (n.fakeGestureTouched = !1, n.fakeGestureMoved = !1, !Me.gestures) { if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                        n.fakeGestureTouched = !0, a.scaleStart = ua.getDistanceBetweenTouches(e) } a.$slideEl && a.$slideEl.length || (a.$slideEl = G(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0 }, onGestureChange: function(e) { var t = this.params.zoom,
                        n = this.zoom,
                        a = n.gesture; if (!Me.gestures) { if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        n.fakeGestureMoved = !0, a.scaleMove = ua.getDistanceBetweenTouches(e) } a.$imageEl && 0 !== a.$imageEl.length && (Me.gestures ? this.zoom.scale = e.scale * n.currentScale : n.scale = a.scaleMove / a.scaleStart * n.currentScale, n.scale > a.maxRatio && (n.scale = a.maxRatio - 1 + Math.pow(n.scale - a.maxRatio + 1, .5)), n.scale < t.minRatio && (n.scale = t.minRatio + 1 - Math.pow(t.minRatio - n.scale + 1, .5)), a.$imageEl.transform("translate3d(0,0,0) scale(" + n.scale + ")")) }, onGestureEnd: function(e) { var t = this.params.zoom,
                        n = this.zoom,
                        a = n.gesture; if (!Me.gestures) { if (!n.fakeGestureTouched || !n.fakeGestureMoved) return; if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !ge.android) return;
                        n.fakeGestureTouched = !1, n.fakeGestureMoved = !1 } a.$imageEl && 0 !== a.$imageEl.length && (n.scale = Math.max(Math.min(n.scale, a.maxRatio), t.minRatio), a.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + n.scale + ")"), n.currentScale = n.scale, n.isScaling = !1, 1 === n.scale && (a.$slideEl = void 0)) }, onTouchStart: function(e) { var t = this.zoom,
                        n = t.gesture,
                        a = t.image;
                    n.$imageEl && 0 !== n.$imageEl.length && (a.isTouched || (ge.android && e.preventDefault(), a.isTouched = !0, a.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)) }, onTouchMove: function(e) { var t = this.zoom,
                        n = t.gesture,
                        a = t.image,
                        i = t.velocity; if (n.$imageEl && 0 !== n.$imageEl.length && (this.allowClick = !1, a.isTouched && n.$slideEl)) { a.isMoved || (a.width = n.$imageEl[0].offsetWidth, a.height = n.$imageEl[0].offsetHeight, a.startX = me.getTranslate(n.$imageWrapEl[0], "x") || 0, a.startY = me.getTranslate(n.$imageWrapEl[0], "y") || 0, n.slideWidth = n.$slideEl[0].offsetWidth, n.slideHeight = n.$slideEl[0].offsetHeight, n.$imageWrapEl.transition(0), this.rtl && (a.startX = -a.startX, a.startY = -a.startY)); var r = a.width * t.scale,
                            s = a.height * t.scale; if (!(r < n.slideWidth && s < n.slideHeight)) { if (a.minX = Math.min(n.slideWidth / 2 - r / 2, 0), a.maxX = -a.minX, a.minY = Math.min(n.slideHeight / 2 - s / 2, 0), a.maxY = -a.minY, a.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !a.isMoved && !t.isScaling) { if (this.isHorizontal() && (Math.floor(a.minX) === Math.floor(a.startX) && a.touchesCurrent.x < a.touchesStart.x || Math.floor(a.maxX) === Math.floor(a.startX) && a.touchesCurrent.x > a.touchesStart.x)) return void(a.isTouched = !1); if (!this.isHorizontal() && (Math.floor(a.minY) === Math.floor(a.startY) && a.touchesCurrent.y < a.touchesStart.y || Math.floor(a.maxY) === Math.floor(a.startY) && a.touchesCurrent.y > a.touchesStart.y)) return void(a.isTouched = !1) } e.preventDefault(), e.stopPropagation(), a.isMoved = !0, a.currentX = a.touchesCurrent.x - a.touchesStart.x + a.startX, a.currentY = a.touchesCurrent.y - a.touchesStart.y + a.startY, a.currentX < a.minX && (a.currentX = a.minX + 1 - Math.pow(a.minX - a.currentX + 1, .8)), a.currentX > a.maxX && (a.currentX = a.maxX - 1 + Math.pow(a.currentX - a.maxX + 1, .8)), a.currentY < a.minY && (a.currentY = a.minY + 1 - Math.pow(a.minY - a.currentY + 1, .8)), a.currentY > a.maxY && (a.currentY = a.maxY - 1 + Math.pow(a.currentY - a.maxY + 1, .8)), i.prevPositionX || (i.prevPositionX = a.touchesCurrent.x), i.prevPositionY || (i.prevPositionY = a.touchesCurrent.y), i.prevTime || (i.prevTime = Date.now()), i.x = (a.touchesCurrent.x - i.prevPositionX) / (Date.now() - i.prevTime) / 2, i.y = (a.touchesCurrent.y - i.prevPositionY) / (Date.now() - i.prevTime) / 2, Math.abs(a.touchesCurrent.x - i.prevPositionX) < 2 && (i.x = 0), Math.abs(a.touchesCurrent.y - i.prevPositionY) < 2 && (i.y = 0), i.prevPositionX = a.touchesCurrent.x, i.prevPositionY = a.touchesCurrent.y, i.prevTime = Date.now(), n.$imageWrapEl.transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)") } } }, onTouchEnd: function() { var e = this.zoom,
                        t = e.gesture,
                        n = e.image,
                        a = e.velocity; if (t.$imageEl && 0 !== t.$imageEl.length) { if (!n.isTouched || !n.isMoved) return n.isTouched = !1, void(n.isMoved = !1);
                        n.isTouched = !1, n.isMoved = !1; var i = 300,
                            r = 300,
                            s = a.x * i,
                            o = n.currentX + s,
                            l = a.y * r,
                            c = n.currentY + l;
                        0 !== a.x && (i = Math.abs((o - n.currentX) / a.x)), 0 !== a.y && (r = Math.abs((c - n.currentY) / a.y)); var d = Math.max(i, r);
                        n.currentX = o, n.currentY = c; var u = n.width * e.scale,
                            p = n.height * e.scale;
                        n.minX = Math.min(t.slideWidth / 2 - u / 2, 0), n.maxX = -n.minX, n.minY = Math.min(t.slideHeight / 2 - p / 2, 0), n.maxY = -n.minY, n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX), n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY), t.$imageWrapEl.transition(d).transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)") } }, onTransitionEnd: function() { var e = this.zoom,
                        t = e.gesture;
                    t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1) }, toggle: function(e) { var t = this.zoom;
                    t.scale && 1 !== t.scale ? t.out() : t.in(e) }, in: function(e) { var t = this.zoom,
                        n = this.params.zoom,
                        a = t.gesture,
                        i = t.image; if (a.$slideEl || (a.$slideEl = this.clickedSlide ? G(this.clickedSlide) : this.slides.eq(this.activeIndex), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + n.containerClass)), a.$imageEl && 0 !== a.$imageEl.length) { a.$slideEl.addClass("" + n.zoomedSlideClass); var r = void 0,
                            s = void 0,
                            o = void 0,
                            l = void 0,
                            c = void 0,
                            d = void 0,
                            u = void 0,
                            p = void 0,
                            h = void 0,
                            f = void 0,
                            v = void 0,
                            m = void 0,
                            g = void 0,
                            b = void 0,
                            y = void 0,
                            w = void 0;
                        void 0 === i.touchesStart.x && e ? (r = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, s = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (r = i.touchesStart.x, s = i.touchesStart.y), t.scale = a.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, t.currentScale = a.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, e ? (y = a.$slideEl[0].offsetWidth, w = a.$slideEl[0].offsetHeight, o = a.$slideEl.offset().left + y / 2 - r, l = a.$slideEl.offset().top + w / 2 - s, u = a.$imageEl[0].offsetWidth, p = a.$imageEl[0].offsetHeight, h = u * t.scale, f = p * t.scale, g = -(v = Math.min(y / 2 - h / 2, 0)), b = -(m = Math.min(w / 2 - f / 2, 0)), c = o * t.scale, d = l * t.scale, c < v && (c = v), c > g && (c = g), d < m && (d = m), d > b && (d = b)) : (c = 0, d = 0), a.$imageWrapEl.transition(300).transform("translate3d(" + c + "px, " + d + "px,0)"), a.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + t.scale + ")") } }, out: function() { var e = this.zoom,
                        t = this.params.zoom,
                        n = e.gesture;
                    n.$slideEl || (n.$slideEl = this.clickedSlide ? G(this.clickedSlide) : this.slides.eq(this.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + t.containerClass)), n.$imageEl && 0 !== n.$imageEl.length && (e.scale = 1, e.currentScale = 1, n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), n.$slideEl.removeClass("" + t.zoomedSlideClass), n.$slideEl = void 0) }, enable: function() { var e = this.zoom; if (!e.enabled) { e.enabled = !0; var t = !("touchstart" !== this.touchEvents.start || !Me.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 };
                        Me.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove) } }, disable: function() { var e = this.zoom; if (e.enabled) { this.zoom.enabled = !1; var t = !("touchstart" !== this.touchEvents.start || !Me.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 };
                        Me.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove) } } },
            pa = { name: "zoom", params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }, create: function() { var e = this,
                        t = { enabled: !1, scale: 1, currentScale: 1, isScaling: !1, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } }; "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(n) { t[n] = ua[n].bind(e) }), me.extend(e, { zoom: t }) }, on: { init: function() { this.params.zoom.enabled && this.zoom.enable() }, destroy: function() { this.zoom.disable() }, touchStart: function(e) { this.zoom.enabled && this.zoom.onTouchStart(e) }, touchEnd: function(e) { this.zoom.enabled && this.zoom.onTouchEnd(e) }, doubleTap: function(e) { this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e) }, transitionEnd: function() { this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd() } } },
            ha = { loadInSlide: function(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = this,
                        a = n.params.lazy; if (void 0 !== e && 0 !== n.slides.length) { var i = n.virtual && n.params.virtual.enabled ? n.$wrapperEl.children("." + n.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : n.slides.eq(e),
                            r = i.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");!i.hasClass(a.elementClass) || i.hasClass(a.loadedClass) || i.hasClass(a.loadingClass) || (r = r.add(i[0])), 0 !== r.length && r.each(function(e, r) { var s = G(r);
                            s.addClass(a.loadingClass); var o = s.attr("data-background"),
                                l = s.attr("data-src"),
                                c = s.attr("data-srcset"),
                                d = s.attr("data-sizes");
                            n.loadImage(s[0], l || o, c, d, !1, function() { if (void 0 !== n && null !== n && n && (!n || n.params) && !n.destroyed) { if (o ? (s.css("background-image", 'url("' + o + '")'), s.removeAttr("data-background")) : (c && (s.attr("srcset", c), s.removeAttr("data-srcset")), d && (s.attr("sizes", d), s.removeAttr("data-sizes")), l && (s.attr("src", l), s.removeAttr("data-src"))), s.addClass(a.loadedClass).removeClass(a.loadingClass), i.find("." + a.preloaderClass).remove(), n.params.loop && t) { var e = i.attr("data-swiper-slide-index"); if (i.hasClass(n.params.slideDuplicateClass)) { var r = n.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + n.params.slideDuplicateClass + ")");
                                            n.lazy.loadInSlide(r.index(), !1) } else { var u = n.$wrapperEl.children("." + n.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            n.lazy.loadInSlide(u.index(), !1) } } n.emit("lazyImageReady", i[0], s[0]) } }), n.emit("lazyImageLoad", i[0], s[0]) }) } }, load: function() { var e = this,
                        t = e.$wrapperEl,
                        n = e.params,
                        a = e.slides,
                        i = e.activeIndex,
                        r = e.virtual && n.virtual.enabled,
                        s = n.lazy,
                        o = n.slidesPerView;

                    function l(e) { if (r) { if (t.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0 } else if (a[e]) return !0; return !1 }

                    function c(e) { return r ? G(e).attr("data-swiper-slide-index") : G(e).index() } if ("auto" === o && (o = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + n.slideVisibleClass).each(function(t, n) { var a = r ? G(n).attr("data-swiper-slide-index") : G(n).index();
                        e.lazy.loadInSlide(a) });
                    else if (o > 1)
                        for (var d = i; d < i + o; d += 1) l(d) && e.lazy.loadInSlide(d);
                    else e.lazy.loadInSlide(i); if (s.loadPrevNext)
                        if (o > 1 || s.loadPrevNextAmount && s.loadPrevNextAmount > 1) { for (var u = s.loadPrevNextAmount, p = o, h = Math.min(i + p + Math.max(u, p), a.length), f = Math.max(i - Math.max(p, u), 0), v = i + o; v < h; v += 1) l(v) && e.lazy.loadInSlide(v); for (var m = f; m < i; m += 1) l(m) && e.lazy.loadInSlide(m) } else { var g = t.children("." + n.slideNextClass);
                            g.length > 0 && e.lazy.loadInSlide(c(g)); var b = t.children("." + n.slidePrevClass);
                            b.length > 0 && e.lazy.loadInSlide(c(b)) } } },
            fa = { name: "lazy", params: { lazy: { enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }, create: function() { me.extend(this, { lazy: { initialImageLoaded: !1, load: ha.load.bind(this), loadInSlide: ha.loadInSlide.bind(this) } }) }, on: { beforeInit: function() { this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1) }, init: function() { this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load() }, scroll: function() { this.params.freeMode && !this.params.freeModeSticky && this.lazy.load() }, resize: function() { this.params.lazy.enabled && this.lazy.load() }, scrollbarDragMove: function() { this.params.lazy.enabled && this.lazy.load() }, transitionStart: function() { this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load() }, transitionEnd: function() { this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load() } } },
            va = { LinearSpline: function(e, t) { var n, a, i, r = (n = void 0, a = void 0, i = void 0, function(e, t) { for (a = -1, n = e.length; n - a > 1;) e[i = n + a >> 1] <= t ? a = i : n = i; return n });
                    this.x = e, this.y = t, this.lastIndex = e.length - 1; var s = void 0,
                        o = void 0; return this.interpolate = function(e) { return e ? (o = r(this.x, e), s = o - 1, (e - this.x[s]) * (this.y[o] - this.y[s]) / (this.x[o] - this.x[s]) + this.y[s]) : 0 }, this }, getInterpolateFunction: function(e) { this.controller.spline || (this.controller.spline = this.params.loop ? new va.LinearSpline(this.slidesGrid, e.slidesGrid) : new va.LinearSpline(this.snapGrid, e.snapGrid)) }, setTranslate: function(e, t) { var n = this,
                        a = n.controller.control,
                        i = void 0,
                        r = void 0;

                    function s(e) { var t = n.rtlTranslate ? -n.translate : n.translate; "slide" === n.params.controller.by && (n.controller.getInterpolateFunction(e), r = -n.controller.spline.interpolate(-t)), r && "container" !== n.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (n.maxTranslate() - n.minTranslate()), r = (t - n.minTranslate()) * i + e.minTranslate()), n.params.controller.inverse && (r = e.maxTranslate() - r), e.updateProgress(r), e.setTranslate(r, n), e.updateActiveIndex(), e.updateSlidesClasses() } if (Array.isArray(a))
                        for (var o = 0; o < a.length; o += 1) a[o] !== t && a[o] instanceof Gn && s(a[o]);
                    else a instanceof Gn && t !== a && s(a) }, setTransition: function(e, t) { var n = this,
                        a = n.controller.control,
                        i = void 0;

                    function r(t) { t.setTransition(e, n), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function() { a && (t.params.loop && "slide" === n.params.controller.by && t.loopFix(), t.transitionEnd()) })) } if (Array.isArray(a))
                        for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof Gn && r(a[i]);
                    else a instanceof Gn && t !== a && r(a) } },
            ma = { name: "controller", params: { controller: { control: void 0, inverse: !1, by: "slide" } }, create: function() { me.extend(this, { controller: { control: this.params.controller.control, getInterpolateFunction: va.getInterpolateFunction.bind(this), setTranslate: va.setTranslate.bind(this), setTransition: va.setTransition.bind(this) } }) }, on: { update: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, resize: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, observerUpdate: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, setTranslate: function(e, t) { this.controller.control && this.controller.setTranslate(e, t) }, setTransition: function(e, t) { this.controller.control && this.controller.setTransition(e, t) } } },
            ga = { makeElFocusable: function(e) { return e.attr("tabIndex", "0"), e }, addElRole: function(e, t) { return e.attr("role", t), e }, addElLabel: function(e, t) { return e.attr("aria-label", t), e }, disableEl: function(e) { return e.attr("aria-disabled", !0), e }, enableEl: function(e) { return e.attr("aria-disabled", !1), e }, onEnterKey: function(e) { var t = this.params.a11y; if (13 === e.keyCode) { var n = G(e.target);
                        this.navigation && this.navigation.$nextEl && n.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && n.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && n.is("." + this.params.pagination.bulletClass) && n[0].click() } }, notify: function(e) { var t = this.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e)) }, updateNavigation: function() { if (!this.params.loop) { var e = this.navigation,
                            t = e.$nextEl,
                            n = e.$prevEl;
                        n && n.length > 0 && (this.isBeginning ? this.a11y.disableEl(n) : this.a11y.enableEl(n)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t)) } }, updatePagination: function() { var e = this,
                        t = e.params.a11y;
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function(n, a) { var i = G(a);
                        e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.paginationBulletMessage.replace(/{{index}}/, i.index() + 1)) }) }, init: function() { this.$el.append(this.a11y.liveRegion); var e = this.params.a11y,
                        t = void 0,
                        n = void 0;
                    this.navigation && this.navigation.$nextEl && (t = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (n = this.navigation.$prevEl), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, e.nextSlideMessage), t.on("keydown", this.a11y.onEnterKey)), n && (this.a11y.makeElFocusable(n), this.a11y.addElRole(n, "button"), this.a11y.addElLabel(n, e.prevSlideMessage), n.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey) }, destroy: function() { this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(); var e = void 0,
                        t = void 0;
                    this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey) } },
            ba = { name: "a11y", params: { a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}" } }, create: function() { var e = this;
                    me.extend(e, { a11y: { liveRegion: G('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }), P()(ga).forEach(function(t) { e.a11y[t] = ga[t].bind(e) }) }, on: { init: function() { this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation()) }, toEdge: function() { this.params.a11y.enabled && this.a11y.updateNavigation() }, fromEdge: function() { this.params.a11y.enabled && this.a11y.updateNavigation() }, paginationUpdate: function() { this.params.a11y.enabled && this.a11y.updatePagination() }, destroy: function() { this.params.a11y.enabled && this.a11y.destroy() } } },
            ya = { run: function() { var e = this,
                        t = e.slides.eq(e.activeIndex),
                        n = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = me.nextTick(function() { e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) }, n) }, start: function() { return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)) }, stop: function() { return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)) }, pause: function(e) { this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run()))) } },
            wa = { name: "autoplay", params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } }, create: function() { var e = this;
                    me.extend(e, { autoplay: { running: !1, paused: !1, run: ya.run.bind(e), start: ya.start.bind(e), stop: ya.stop.bind(e), pause: ya.pause.bind(e), onTransitionEnd: function(t) { e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop()) } } }) }, on: { init: function() { this.params.autoplay.enabled && this.autoplay.start() }, beforeTransitionStart: function(e, t) { this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop()) }, sliderFirstMove: function() { this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause()) }, destroy: function() { this.autoplay.running && this.autoplay.stop() } } },
            Ca = { setTranslate: function() { for (var e = this.slides, t = 0; t < e.length; t += 1) { var n = this.slides.eq(t),
                            a = -n[0].swiperSlideOffset;
                        this.params.virtualTranslate || (a -= this.translate); var i = 0;
                        this.isHorizontal() || (i = a, a = 0); var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(n[0].progress), 0) : 1 + Math.min(Math.max(n[0].progress, -1), 0);
                        n.css({ opacity: r }).transform("translate3d(" + a + "px, " + i + "px, 0px)") } }, setTransition: function(e) { var t = this,
                        n = t.slides,
                        a = t.$wrapperEl; if (n.transition(e), t.params.virtualTranslate && 0 !== e) { var i = !1;
                        n.transitionEnd(function() { if (!i && t && !t.destroyed) { i = !0, t.animating = !1; for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) a.trigger(e[n]) } }) } } },
            xa = { name: "effect-fade", params: { fadeEffect: { crossFade: !1 } }, create: function() { me.extend(this, { fadeEffect: { setTranslate: Ca.setTranslate.bind(this), setTransition: Ca.setTransition.bind(this) } }) }, on: { beforeInit: function() { if ("fade" === this.params.effect) { this.classNames.push(this.params.containerModifierClass + "fade"); var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                            me.extend(this.params, e), me.extend(this.originalParams, e) } }, setTranslate: function() { "fade" === this.params.effect && this.fadeEffect.setTranslate() }, setTransition: function(e) { "fade" === this.params.effect && this.fadeEffect.setTransition(e) } } },
            ka = { setTranslate: function() { var e = this.$el,
                        t = this.$wrapperEl,
                        n = this.slides,
                        a = this.width,
                        i = this.height,
                        r = this.rtlTranslate,
                        s = this.size,
                        o = this.params.cubeEffect,
                        l = this.isHorizontal(),
                        c = this.virtual && this.params.virtual.enabled,
                        d = 0,
                        u = void 0;
                    o.shadow && (l ? (0 === (u = t.find(".swiper-cube-shadow")).length && (u = G('<div class="swiper-cube-shadow"></div>'), t.append(u)), u.css({ height: a + "px" })) : 0 === (u = e.find(".swiper-cube-shadow")).length && (u = G('<div class="swiper-cube-shadow"></div>'), e.append(u))); for (var p = 0; p < n.length; p += 1) { var h = n.eq(p),
                            f = p;
                        c && (f = parseInt(h.attr("data-swiper-slide-index"), 10)); var v = 90 * f,
                            m = Math.floor(v / 360);
                        r && (v = -v, m = Math.floor(-v / 360)); var g = Math.max(Math.min(h[0].progress, 1), -1),
                            b = 0,
                            y = 0,
                            w = 0;
                        f % 4 == 0 ? (b = 4 * -m * s, w = 0) : (f - 1) % 4 == 0 ? (b = 0, w = 4 * -m * s) : (f - 2) % 4 == 0 ? (b = s + 4 * m * s, w = s) : (f - 3) % 4 == 0 && (b = -s, w = 3 * s + 4 * s * m), r && (b = -b), l || (y = b, b = 0); var C = "rotateX(" + (l ? 0 : -v) + "deg) rotateY(" + (l ? v : 0) + "deg) translate3d(" + b + "px, " + y + "px, " + w + "px)"; if (g <= 1 && g > -1 && (d = 90 * f + 90 * g, r && (d = 90 * -f - 90 * g)), h.transform(C), o.slideShadows) { var x = l ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
                                k = l ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
                            0 === x.length && (x = G('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), h.append(x)), 0 === k.length && (k = G('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), h.append(k)), x.length && (x[0].style.opacity = Math.max(-g, 0)), k.length && (k[0].style.opacity = Math.max(g, 0)) } } if (t.css({ "-webkit-transform-origin": "50% 50% -" + s / 2 + "px", "-moz-transform-origin": "50% 50% -" + s / 2 + "px", "-ms-transform-origin": "50% 50% -" + s / 2 + "px", "transform-origin": "50% 50% -" + s / 2 + "px" }), o.shadow)
                        if (l) u.transform("translate3d(0px, " + (a / 2 + o.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + o.shadowScale + ")");
                        else { var E = Math.abs(d) - 90 * Math.floor(Math.abs(d) / 90),
                                $ = 1.5 - (Math.sin(2 * E * Math.PI / 360) / 2 + Math.cos(2 * E * Math.PI / 360) / 2),
                                S = o.shadowScale,
                                T = o.shadowScale / $,
                                _ = o.shadowOffset;
                            u.transform("scale3d(" + S + ", 1, " + T + ") translate3d(0px, " + (i / 2 + _) + "px, " + -i / 2 / T + "px) rotateX(-90deg)") }
                    var M = qn.isSafari || qn.isUiWebView ? -s / 2 : 0;
                    t.transform("translate3d(0px,0," + M + "px) rotateX(" + (this.isHorizontal() ? 0 : d) + "deg) rotateY(" + (this.isHorizontal() ? -d : 0) + "deg)") }, setTransition: function(e) { var t = this.$el;
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e) } },
            Ea = { name: "effect-cube", params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 } }, create: function() { me.extend(this, { cubeEffect: { setTranslate: ka.setTranslate.bind(this), setTransition: ka.setTransition.bind(this) } }) }, on: { beforeInit: function() { if ("cube" === this.params.effect) { this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d"); var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                            me.extend(this.params, e), me.extend(this.originalParams, e) } }, setTranslate: function() { "cube" === this.params.effect && this.cubeEffect.setTranslate() }, setTransition: function(e) { "cube" === this.params.effect && this.cubeEffect.setTransition(e) } } },
            $a = { setTranslate: function() { for (var e = this.slides, t = this.rtlTranslate, n = 0; n < e.length; n += 1) { var a = e.eq(n),
                            i = a[0].progress;
                        this.params.flipEffect.limitRotation && (i = Math.max(Math.min(a[0].progress, 1), -1)); var r = -180 * i,
                            s = 0,
                            o = -a[0].swiperSlideOffset,
                            l = 0; if (this.isHorizontal() ? t && (r = -r) : (l = o, o = 0, s = -r, r = 0), a[0].style.zIndex = -Math.abs(Math.round(i)) + e.length, this.params.flipEffect.slideShadows) { var c = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                                d = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                            0 === c.length && (c = G('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(c)), 0 === d.length && (d = G('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(d)), c.length && (c[0].style.opacity = Math.max(-i, 0)), d.length && (d[0].style.opacity = Math.max(i, 0)) } a.transform("translate3d(" + o + "px, " + l + "px, 0px) rotateX(" + s + "deg) rotateY(" + r + "deg)") } }, setTransition: function(e) { var t = this,
                        n = t.slides,
                        a = t.activeIndex,
                        i = t.$wrapperEl; if (n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) { var r = !1;
                        n.eq(a).transitionEnd(function() { if (!r && t && !t.destroyed) { r = !0, t.animating = !1; for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) i.trigger(e[n]) } }) } } },
            Sa = { name: "effect-flip", params: { flipEffect: { slideShadows: !0, limitRotation: !0 } }, create: function() { me.extend(this, { flipEffect: { setTranslate: $a.setTranslate.bind(this), setTransition: $a.setTransition.bind(this) } }) }, on: { beforeInit: function() { if ("flip" === this.params.effect) { this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d"); var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                            me.extend(this.params, e), me.extend(this.originalParams, e) } }, setTranslate: function() { "flip" === this.params.effect && this.flipEffect.setTranslate() }, setTransition: function(e) { "flip" === this.params.effect && this.flipEffect.setTransition(e) } } },
            Ta = { setTranslate: function() { for (var e = this.width, t = this.height, n = this.slides, a = this.$wrapperEl, i = this.slidesSizesGrid, r = this.params.coverflowEffect, s = this.isHorizontal(), o = this.translate, l = s ? e / 2 - o : t / 2 - o, c = s ? r.rotate : -r.rotate, d = r.depth, u = 0, p = n.length; u < p; u += 1) { var h = n.eq(u),
                            f = i[u],
                            v = (l - h[0].swiperSlideOffset - f / 2) / f * r.modifier,
                            m = s ? c * v : 0,
                            g = s ? 0 : c * v,
                            b = -d * Math.abs(v),
                            y = s ? 0 : r.stretch * v,
                            w = s ? r.stretch * v : 0;
                        Math.abs(w) < .001 && (w = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(m) < .001 && (m = 0), Math.abs(g) < .001 && (g = 0); var C = "translate3d(" + w + "px," + y + "px," + b + "px)  rotateX(" + g + "deg) rotateY(" + m + "deg)"; if (h.transform(C), h[0].style.zIndex = 1 - Math.abs(Math.round(v)), r.slideShadows) { var x = s ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
                                k = s ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
                            0 === x.length && (x = G('<div class="swiper-slide-shadow-' + (s ? "left" : "top") + '"></div>'), h.append(x)), 0 === k.length && (k = G('<div class="swiper-slide-shadow-' + (s ? "right" : "bottom") + '"></div>'), h.append(k)), x.length && (x[0].style.opacity = v > 0 ? v : 0), k.length && (k[0].style.opacity = -v > 0 ? -v : 0) } }(Me.pointerEvents || Me.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = l + "px 50%") }, setTransition: function(e) { this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e) } },
            _a = { name: "effect-coverflow", params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } }, create: function() { me.extend(this, { coverflowEffect: { setTranslate: Ta.setTranslate.bind(this), setTransition: Ta.setTransition.bind(this) } }) }, on: { beforeInit: function() { "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0) }, setTranslate: function() { "coverflow" === this.params.effect && this.coverflowEffect.setTranslate() }, setTransition: function(e) { "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e) } } };

        function Ma(e) { var t = this,
                n = G(e); if (0 !== n.length && !n[0].swiper) { var a = void 0,
                    i = {},
                    r = void 0,
                    s = void 0;
                n.hasClass("tabs-swipeable-wrap") && (n.addClass("swiper-container").children(".tabs").addClass("swiper-wrapper").children(".tab").addClass("swiper-slide"), a = n.children(".tabs").children(".tab-active").index(), r = !0, s = n.find(".tabs-routable").length > 0), n.attr("data-swiper") ? i = JSON.parse(n.attr("data-swiper")) : (i = n.dataset(), P()(i).forEach(function(e) { var t = i[e]; if ("string" == typeof t && 0 === t.indexOf("{") && t.indexOf("}") > 0) try { i[e] = JSON.parse(t) } catch (e) {} })), void 0 === i.initialSlide && void 0 !== a && (i.initialSlide = a); var o = t.swiper.create(n[0], i);
                r && o.on("slideChange", function() { if (s) { var e = t.views.get(n.parents(".view"));
                        e || (e = t.views.main); var a = e.router,
                            i = a.findTabRoute(o.slides.eq(o.activeIndex)[0]);
                        i && a.navigate(i.path) } else t.tab.show({ tabEl: o.slides.eq(o.activeIndex) }) }) } } Gn.use([Xn, Jn, Kn, Qn, ea, na, ia, sa, la, da, pa, fa, ma, ba, wa, xa, Ea, Sa, _a]); var Pa = { name: "swiper", static: { Swiper: Gn }, create: function() { this.swiper = Ct({ defaultSelector: ".swiper-container", constructor: Gn, domProp: "swiper" }) }, on: { pageBeforeRemove: function(e) { var t = this;
                        e.$el.find(".swiper-init, .tabs-swipeable-wrap").each(function(e, n) { t.swiper.destroy(n) }) }, pageMounted: function(e) { var t = this;
                        e.$el.find(".tabs-swipeable-wrap").each(function(e, n) { Ma.call(t, n) }) }, pageInit: function(e) { var t = this;
                        e.$el.find(".swiper-init, .tabs-swipeable-wrap").each(function(e, n) { Ma.call(t, n) }) }, pageReinit: function(e) { var t = this;
                        e.$el.find(".swiper-init, .tabs-swipeable-wrap").each(function(e, n) { var a = t.swiper.get(n);
                            a && a.update && a.update() }) }, tabMounted: function(e) { var t = this;
                        G(e).find(".swiper-init, .tabs-swipeable-wrap").each(function(e, n) { Ma.call(t, n) }) }, tabShow: function(e) { var t = this;
                        G(e).find(".swiper-init, .tabs-swipeable-wrap").each(function(e, n) { var a = t.swiper.get(n);
                            a && a.update && a.update() }) }, tabBeforeRemove: function(e) { var t = this;
                        G(e).find(".swiper-init, .tabs-swipeable-wrap").each(function(e, n) { t.swiper.destroy(n) }) } } },
            Oa = function(e) {
                function t(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    w()(this, t); var a = m()(this, (t.__proto__ || f()(t)).call(this, n, [e])),
                        i = a;
                    i.app = e; var r = me.extend({ on: {} }, e.params.photoBrowser); return i.useModulesParams(r), i.params = me.extend(r, n), me.extend(i, { exposed: !1, opened: !1, activeIndex: i.params.swiper.initialSlide, url: i.params.url, view: i.params.view || e.views.main, swipeToClose: { allow: !0, isTouched: !1, diff: void 0, start: void 0, current: void 0, started: !1, activeSlide: void 0, timeStart: void 0 } }), i.useModules(), i.init(), a } return b()(t, e), x()(t, [{ key: "onSlideChange", value: function(e) { var t = this;
                        t.activeIndex = e.activeIndex; var n = e.activeIndex + 1,
                            a = t.params.virtualSlides ? t.params.photos.length : e.slides.length;
                        e.params.loop && (a -= 2, (n -= e.loopedSlides) < 1 && (n = a + n), n > a && (n -= a)); var i = t.params.virtualSlides ? e.$wrapperEl.find('.swiper-slide[data-swiper-slide-index="' + e.activeIndex + '"]') : e.slides.eq(e.activeIndex),
                            r = t.params.virtualSlides ? e.$wrapperEl.find('.swiper-slide[data-swiper-slide-index="' + e.previousIndex + '"]') : e.slides.eq(e.previousIndex),
                            s = t.$el.find(".photo-browser-current"),
                            o = t.$el.find(".photo-browser-total"); if ("page" === t.params.type && t.params.navbar && 0 === s.length && "ios" === t.app.theme) { var l = t.app.navbar.getElByPage(t.$el);
                            l && (s = G(l).find(".photo-browser-current"), o = G(l).find(".photo-browser-total")) } if (s.text(n), o.text(a), t.captions.length > 0) { var c = e.params.loop ? i.attr("data-swiper-slide-index") : t.activeIndex;
                            t.$captionsContainerEl.find(".photo-browser-caption-active").removeClass("photo-browser-caption-active"), t.$captionsContainerEl.find('[data-caption-index="' + c + '"]').addClass("photo-browser-caption-active") } var d = r.find("video");
                        d.length > 0 && "pause" in d[0] && d[0].pause() } }, { key: "onTouchStart", value: function() { var e = this.swipeToClose;
                        e.allow && (e.isTouched = !0) } }, { key: "onTouchMove", value: function(e) { var t = this,
                            n = t.swipeToClose; if (n.isTouched) { n.started || (n.started = !0, n.start = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, t.params.virtualSlides ? n.activeSlide = t.swiper.$wrapperEl.children(".swiper-slide-active") : n.activeSlide = t.swiper.slides.eq(t.swiper.activeIndex), n.timeStart = me.now()), e.preventDefault(), n.current = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, n.diff = n.start - n.current; var a = 1 - Math.abs(n.diff) / 300,
                                i = t.exposed || "dark" === t.params.theme ? 0 : 255;
                            n.activeSlide.transform("translate3d(0," + -n.diff + "px,0)"), t.swiper.$el.css("background-color", "rgba(" + i + ", " + i + ", " + i + ", " + a + ")").transition(0) } } }, { key: "onTouchEnd", value: function() { var e = this,
                            t = e.swipeToClose; if (t.isTouched = !1, t.started) { t.started = !1, t.allow = !1; var n = Math.abs(t.diff),
                                a = (new Date).getTime() - t.timeStart;
                            a < 300 && n > 20 || a >= 300 && n > 100 ? me.nextTick(function() { e.$el && (t.diff < 0 ? e.$el.addClass("swipe-close-to-bottom") : e.$el.addClass("swipe-close-to-top")), e.emit("local::swipeToClose", e), e.close(), t.allow = !0 }) : (0 !== n ? t.activeSlide.addClass("photo-browser-transitioning").transitionEnd(function() { t.allow = !0, t.activeSlide.removeClass("photo-browser-transitioning") }) : t.allow = !0, e.swiper.$el.transition("").css("background-color", ""), t.activeSlide.transform("")) } else t.started = !1 } }, { key: "renderNavbar", value: function() { var e = this; if (e.params.renderNavbar) return e.params.renderNavbar.call(e); var t = e.params.iconsColor;
                        e.params.iconsColor || "dark" !== e.params.theme || (t = "white"); var n = "ios" === e.app.theme && e.params.backLinkText ? e.params.backLinkText : "",
                            a = "page" !== e.params.type; return ('\n      <div class="navbar">\n        <div class="navbar-inner sliding">\n          <div class="left">\n            <a href="#" class="link ' + (a ? "popup-close" : "") + " " + (n ? "" : "icon-only") + " " + (a ? "" : "back") + '" ' + (a ? 'data-popup=".photo-browser-popup"' : "") + '>\n              <i class="icon icon-back ' + (t ? "color-" + t : "") + '"></i>\n              ' + (n ? "<span>" + n + "</span>" : "") + '\n            </a>\n          </div>\n          <div class="title">\n            <span class="photo-browser-current"></span>\n            <span class="photo-browser-of">' + e.params.navbarOfText + '</span>\n            <span class="photo-browser-total"></span>\n          </div>\n          <div class="right"></div>\n        </div>\n      </div>\n    ').trim() } }, { key: "renderToolbar", value: function() { var e = this; if (e.params.renderToolbar) return e.params.renderToolbar.call(e); var t = e.params.iconsColor; return e.params.iconsColor || "dark" !== e.params.theme || (t = "white"), ('\n      <div class="toolbar tabbar toolbar-bottom-md">\n        <div class="toolbar-inner">\n          <a href="#" class="link photo-browser-prev">\n            <i class="icon icon-back ' + (t ? "color-" + t : "") + '"></i>\n          </a>\n          <a href="#" class="link photo-browser-next">\n            <i class="icon icon-forward ' + (t ? "color-" + t : "") + '"></i>\n          </a>\n        </div>\n      </div>\n    ').trim() } }, { key: "renderCaption", value: function(e, t) { return this.params.renderCaption ? this.params.renderCaption.call(this, e, t) : ('\n      <div class="photo-browser-caption" data-caption-index="' + t + '">\n        ' + e + "\n      </div>\n    ").trim() } }, { key: "renderObject", value: function(e, t) { return this.params.renderObject ? this.params.renderObject.call(this, e, t) : '\n      <div class="photo-browser-slide photo-browser-object-slide swiper-slide" data-swiper-slide-index="' + t + '">' + (e.html ? e.html : e) + "</div>\n    " } }, { key: "renderLazyPhoto", value: function(e, t) { var n = this; return n.params.renderLazyPhoto ? n.params.renderLazyPhoto.call(n, e, t) : ('\n      <div class="photo-browser-slide photo-browser-slide-lazy swiper-slide" data-swiper-slide-index="' + t + '">\n          <div class="preloader swiper-lazy-preloader ' + ("dark" === n.params.theme ? "color-white" : "") + '">' + ("md" === n.app.theme ? me.mdPreloaderContent : "") + '</div>\n          <span class="swiper-zoom-container">\n              <img data-src="' + (e.url ? e.url : e) + '" class="swiper-lazy">\n          </span>\n      </div>\n    ').trim() } }, { key: "renderPhoto", value: function(e, t) { return this.params.renderPhoto ? this.params.renderPhoto.call(this, e, t) : ('\n      <div class="photo-browser-slide swiper-slide" data-swiper-slide-index="' + t + '">\n        <span class="swiper-zoom-container">\n          <img src="' + (e.url ? e.url : e) + '">\n        </span>\n      </div>\n    ').trim() } }, { key: "render", value: function() { var e = this; return e.params.render ? e.params.render.call(e, e.params) : ('\n      <div class="photo-browser photo-browser-' + e.params.theme + '">\n        <div class="view">\n          <div class="page photo-browser-page photo-browser-page-' + e.params.theme + " no-toolbar " + (e.params.navbar ? "" : "no-navbar") + '" data-name="photo-browser-page">\n            ' + (e.params.navbar ? e.renderNavbar() : "") + "\n            " + (e.params.toolbar ? e.renderToolbar() : "") + '\n            <div class="photo-browser-captions photo-browser-captions-' + (e.params.captionsTheme || e.params.theme) + '">\n              ' + e.params.photos.map(function(t, n) { return t.caption ? e.renderCaption(t.caption, n) : "" }).join(" ") + '\n            </div>\n            <div class="photo-browser-swiper-container swiper-container">\n              <div class="photo-browser-swiper-wrapper swiper-wrapper">\n                ' + (e.params.virtualSlides ? "" : e.params.photos.map(function(t, n) { return t.html || ("string" == typeof t || t instanceof String) && t.indexOf("<") >= 0 && t.indexOf(">") >= 0 ? e.renderObject(t, n) : !0 === e.params.swiper.lazy || e.params.swiper.lazy && e.params.swiper.lazy.enabled ? e.renderLazyPhoto(t, n) : e.renderPhoto(t, n) }).join(" ")) + "\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    ").trim() } }, { key: "renderStandalone", value: function() { return this.params.renderStandalone ? this.params.renderStandalone.call(this) : '<div class="popup photo-browser-popup photo-browser-standalone popup-tablet-fullscreen">' + this.render() + "</div>" } }, { key: "renderPage", value: function() { return this.params.renderPage ? this.params.renderPage.call(this) : this.render() } }, { key: "renderPopup", value: function() { return this.params.renderPopup ? this.params.renderPopup.call(this) : '<div class="popup photo-browser-popup">' + this.render() + "</div>" } }, { key: "onOpen", value: function(e, t) { var n = this,
                            a = n.app,
                            i = G(t);
                        i[0].f7PhotoBrowser = n, n.$el = i, n.el = i[0], n.openedIn = e, n.opened = !0, n.$swiperContainerEl = n.$el.find(".photo-browser-swiper-container"), n.$swiperWrapperEl = n.$el.find(".photo-browser-swiper-wrapper"), n.slides = n.$el.find(".photo-browser-slide"), n.$captionsContainerEl = n.$el.find(".photo-browser-captions"), n.captions = n.$el.find(".photo-browser-caption"); var r = me.extend({}, n.params.swiper, { initialSlide: n.activeIndex, on: { tap: function(e) { n.emit("local::tap", e) }, click: function(e) { n.params.exposition && n.expositionToggle(), n.emit("local::click", e) }, doubleTap: function(e) { n.emit("local::doubleTap", e) }, slideChange: function() { n.onSlideChange(this); for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                                    n.emit.apply(n, ["local::slideChange"].concat(B()(t))) }, transitionStart: function() { for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                                    n.emit.apply(n, ["local::transitionStart"].concat(B()(t))) }, transitionEnd: function() { for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                                    n.emit.apply(n, ["local::transitionEnd"].concat(B()(t))) }, slideChangeTransitionStart: function() { for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                                    n.emit.apply(n, ["local::slideChangeTransitionStart"].concat(B()(t))) }, slideChangeTransitionEnd: function() { for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                                    n.emit.apply(n, ["local::slideChangeTransitionEnd"].concat(B()(t))) }, lazyImageLoad: function() { for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                                    n.emit.apply(n, ["local::lazyImageLoad"].concat(B()(t))) }, lazyImageReady: function() { for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a]; var i = t[0];
                                    G(i).removeClass("photo-browser-slide-lazy"), n.emit.apply(n, ["local::lazyImageReady"].concat(B()(t))) } } });
                        n.params.swipeToClose && "page" !== n.params.type && me.extend(r.on, { touchStart: function(e) { n.onTouchStart(e), n.emit("local::touchStart", e) }, touchMoveOpposite: function(e) { n.onTouchMove(e), n.emit("local::touchMoveOpposite", e) }, touchEnd: function(e) { n.onTouchEnd(e), n.emit("local::touchEnd", e) } }), n.params.virtualSlides && me.extend(r, { virtual: { slides: n.params.photos, renderSlide: function(e, t) { return e.html || ("string" == typeof e || e instanceof String) && e.indexOf("<") >= 0 && e.indexOf(">") >= 0 ? n.renderObject(e, t) : !0 === n.params.swiper.lazy || n.params.swiper.lazy && n.params.swiper.lazy.enabled ? n.renderLazyPhoto(e, t) : n.renderPhoto(e, t) } } }), n.swiper = a.swiper.create(n.$swiperContainerEl, r), 0 === n.activeIndex && n.onSlideChange(n.swiper), n.$el && n.$el.trigger("photobrowser:open"), n.emit("local::open photoBrowserOpen", n) } }, { key: "onOpened", value: function() { this.$el && this.$el.trigger("photobrowser:opened"), this.emit("local::opened photoBrowserOpened", this) } }, { key: "onClose", value: function() { var e = this;
                        e.destroyed || (e.swiper && e.swiper.destroy && (e.swiper.destroy(!0, !1), e.swiper = null, delete e.swiper), e.$el && e.$el.trigger("photobrowser:close"), e.emit("local::close photoBrowserClose", e)) } }, { key: "onClosed", value: function() { var e = this;
                        e.destroyed || (e.opened = !1, e.$el = null, e.el = null, delete e.$el, delete e.el, e.$el && e.$el.trigger("photobrowser:closed"), e.emit("local::closed photoBrowserClosed", e)) } }, { key: "openPage", value: function() { var e = this; if (e.opened) return e; var t = e.renderPage(); return e.view.router.navigate({ url: e.url, route: { content: t, path: e.url, on: { pageBeforeIn: function(t, n) { e.view.$el.addClass("with-photo-browser-page with-photo-browser-page-" + e.params.theme), e.onOpen("page", n.el) }, pageAfterIn: function(t, n) { e.onOpened("page", n.el) }, pageBeforeOut: function(t, n) { e.view.$el.removeClass("with-photo-browser-page with-photo-browser-page-exposed with-photo-browser-page-" + e.params.theme), e.onClose("page", n.el) }, pageAfterOut: function(t, n) { e.onClosed("page", n.el) } } } }), e } }, { key: "openStandalone", value: function() { var e = this; if (e.opened) return e; var t = { backdrop: !1, content: e.renderStandalone(), on: { popupOpen: function(t) { e.onOpen("popup", t.el) }, popupOpened: function(t) { e.onOpened("popup", t.el) }, popupClose: function(t) { e.onClose("popup", t.el) }, popupClosed: function(t) { e.onClosed("popup", t.el) } } }; return e.params.routableModals ? e.view.router.navigate({ url: e.url, route: { path: e.url, popup: t } }) : e.modal = e.app.popup.create(t).open(), e } }, { key: "openPopup", value: function() { var e = this; if (e.opened) return e; var t = { content: e.renderPopup(), on: { popupOpen: function(t) { e.onOpen("popup", t.el) }, popupOpened: function(t) { e.onOpened("popup", t.el) }, popupClose: function(t) { e.onClose("popup", t.el) }, popupClosed: function(t) { e.onClosed("popup", t.el) } } }; return e.params.routableModals ? e.view.router.navigate({ url: e.url, route: { path: e.url, popup: t } }) : e.modal = e.app.popup.create(t).open(), e } }, { key: "expositionEnable", value: function() { var e = this; return "page" === e.params.type && e.view.$el.addClass("with-photo-browser-page-exposed"), e.$el && e.$el.addClass("photo-browser-exposed"), e.params.expositionHideCaptions && e.$captionsContainerEl.addClass("photo-browser-captions-exposed"), e.exposed = !0, e } }, { key: "expositionDisable", value: function() { var e = this; return "page" === e.params.type && e.view.$el.removeClass("with-photo-browser-page-exposed"), e.$el && e.$el.removeClass("photo-browser-exposed"), e.params.expositionHideCaptions && e.$captionsContainerEl.removeClass("photo-browser-captions-exposed"), e.exposed = !1, e } }, { key: "expositionToggle", value: function() { var e = this; return "page" === e.params.type && e.view.$el.toggleClass("with-photo-browser-page-exposed"), e.$el && e.$el.toggleClass("photo-browser-exposed"), e.params.expositionHideCaptions && e.$captionsContainerEl.toggleClass("photo-browser-captions-exposed"), e.exposed = !e.exposed, e } }, { key: "open", value: function(e) { var t = this,
                            n = t.params.type; return t.opened ? (t.swiper && void 0 !== e && t.swiper.slideTo(parseInt(e, 10)), t) : (void 0 !== e && (t.activeIndex = e), "standalone" === n && t.openStandalone(), "page" === n && t.openPage(), "popup" === n && t.openPopup(), t) } }, { key: "close", value: function() { var e = this; return e.opened ? (e.params.routableModals || "page" === e.openedIn ? e.view && e.view.router.back() : (e.modal.once("modalClosed", function() { me.nextTick(function() { e.modal.destroy(), delete e.modal }) }), e.modal.close()), e) : e } }, { key: "init", value: function() {} }, { key: "destroy", value: function() { var e = this;
                        e.emit("local::beforeDestroy photoBrowserBeforeDestroy", e), e.$el && (e.$el.trigger("photobrowser:beforedestroy"), delete e.$el[0].f7PhotoBrowser), me.deleteProps(e), e = null } }]), t }(be),
            Ba = { name: "photoBrowser", params: { photoBrowser: { photos: [], exposition: !0, expositionHideCaptions: !1, type: "standalone", navbar: !0, toolbar: !0, theme: "light", captionsTheme: void 0, iconsColor: void 0, swipeToClose: !0, backLinkText: "Close", navbarOfText: "of", view: void 0, url: "photos/", routableModals: !0, virtualSlides: !0, renderNavbar: void 0, renderToolbar: void 0, renderCaption: void 0, renderObject: void 0, renderLazyPhoto: void 0, renderPhoto: void 0, renderPage: void 0, renderPopup: void 0, renderStandalone: void 0, swiper: { initialSlide: 0, spaceBetween: 20, speed: 300, loop: !1, preloadImages: !0, navigation: { nextEl: ".photo-browser-next", prevEl: ".photo-browser-prev" }, zoom: { enabled: !0, maxRatio: 3, minRatio: 1 }, lazy: { enabled: !0 } } } }, create: function() { this.photoBrowser = Ct({ defaultSelector: ".photo-browser", constructor: Oa, app: this, domProp: "f7PhotoBrowser" }) }, static: { PhotoBrowser: Oa } },
            Ia = function(e) {
                function t(e, n) { var a;
                    w()(this, t); var i = me.extend({ on: {} }, e.params.notification, n),
                        r = m()(this, (t.__proto__ || f()(t)).call(this, e, i)),
                        s = r;
                    s.app = e, s.params = i; var o, l, c = s.params,
                        d = c.icon,
                        u = c.title,
                        p = c.titleRightText,
                        h = c.subtitle,
                        v = c.text,
                        g = c.closeButton,
                        b = c.closeTimeout,
                        y = c.cssClass,
                        C = c.closeOnClick,
                        x = void 0; if (s.params.el) x = G(s.params.el);
                    else { var k = s.render({ icon: d, title: u, titleRightText: p, subtitle: h, text: v, closeButton: g, cssClass: y });
                        x = G(k) } if (x && x.length > 0 && x[0].f7Modal) return o = x[0].f7Modal, m()(r, o); if (0 === x.length) return l = s.destroy(), m()(r, l);
                    me.extend(s, { $el: x, el: x[0], type: "notification" }), x[0].f7Modal = s, g && x.find(".notification-close-button").on("click", function() { s.close() }), x.on("click", function(e) { g && G(e.target).closest(".notification-close-button").length || (s.emit("local::click notificationClick", s), C && s.close()) }), s.on("beforeDestroy", function() { x.off("click") }); var E = void 0,
                        $ = void 0,
                        S = void 0,
                        T = void 0,
                        _ = void 0,
                        M = void 0,
                        P = {};

                    function O(e) { E || (E = !0, $ = !1, S = void 0, _ = me.now(), P.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, P.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY) }

                    function B(e) { if (E) { var t = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                n = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY; if (void 0 === S && (S = !!(S || Math.abs(n - P.y) < Math.abs(t - P.x))), S) E = !1;
                            else { e.preventDefault(), $ || (s.$el.removeClass("notification-transitioning"), s.$el.transition(0), M = s.$el[0].offsetHeight / 2), $ = !0; var a = T = n - P.y;
                                T > 0 && (a = Math.pow(T, .8)), s.$el.transform("translate3d(0, " + a + "px, 0)") } } }

                    function I() { if (!E || !$) return E = !1, void($ = !1); if (E = !1, $ = !1, 0 !== T) { var e = me.now() - _;
                            s.$el.transition(""), s.$el.addClass("notification-transitioning"), s.$el.transform(""), (T < -10 && e < 300 || -T >= M / 1) && s.close() } } var L = void 0; return s.on("open", function() { s.params.swipeToClose && (s.$el.on(e.touchEvents.start, O, { passive: !0 }), e.on("touchmove:active", B), e.on("touchend:passive", I)), G(".notification.modal-in").each(function(t, n) { var a = e.notification.get(n);
                            n !== s.el && a && a.close() }), b && function e() { L = me.nextTick(function() { E && $ ? e() : s.close() }, b) }() }), s.on("close beforeDestroy", function() { s.params.swipeToClose && (s.$el.off(e.touchEvents.start, O, { passive: !0 }), e.off("touchmove:active", B), e.off("touchend:passive", I)), A.clearTimeout(L) }), a = s, m()(r, a) } return b()(t, e), x()(t, [{ key: "render", value: function() { if (this.params.render) return this.params.render.call(this, this); var e = this.params,
                            t = e.icon,
                            n = e.title,
                            a = e.titleRightText,
                            i = e.subtitle,
                            r = e.text,
                            s = e.closeButton; return ('\n      <div class="notification ' + (e.cssClass || "") + '">\n        <div class="notification-header">\n          ' + (t ? '<div class="notification-icon">' + t + "</div>" : "") + "\n          " + (n ? '<div class="notification-title">' + n + "</div>" : "") + "\n          " + (a ? '<div class="notification-title-right-text">' + a + "</div>" : "") + "\n          " + (s ? '<span class="notification-close-button"></span>' : "") + '\n        </div>\n        <div class="notification-content">\n          ' + (i ? '<div class="notification-subtitle">' + i + "</div>" : "") + "\n          " + (r ? '<div class="notification-text">' + r + "</div>" : "") + "\n        </div>\n      </div>\n    ").trim() } }]), t }(gt),
            Aa = { name: "notification", static: { Notification: Ia }, create: function() { this.notification = me.extend({}, xt({ app: this, constructor: Ia, defaultSelector: ".notification.modal-in" })) }, params: { notification: { icon: null, title: null, titleRightText: null, subtitle: null, text: null, closeButton: !1, closeTimeout: null, closeOnClick: !1, swipeToClose: !0, cssClass: null, render: null } } },
            La = function(e) {
                function t(e) { var n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    w()(this, t); var i = m()(this, (t.__proto__ || f()(t)).call(this, a, [e])),
                        r = i;
                    r.app = e; var s = me.extend({ on: {} }, e.params.autocomplete);
                    r.useModulesParams(s), r.params = me.extend(s, a); var o = void 0;
                    r.params.openerEl && (o = G(r.params.openerEl)).length && (o[0].f7Autocomplete = r); var l = void 0;
                    r.params.inputEl && (l = G(r.params.inputEl)).length && (l[0].f7Autocomplete = r); var c = void 0;
                    r.params.view ? c = r.params.view : (o || l) && (c = e.views.get(o || l)), c || (c = e.views.main); var d = me.now(),
                        u = a.url;!u && o && o.length && (o.attr("href") ? u = o.attr("href") : o.find("a").length > 0 && (u = o.find("a").attr("href"))), u && "#" !== u && "" !== u || (u = r.params.url); var p = r.params.multiple ? "checkbox" : "radio";
                    me.extend(r, { $openerEl: o, openerEl: o && o[0], $inputEl: l, inputEl: l && l[0], id: d, view: c, url: u, value: r.params.value || [], inputType: p, inputName: p + "-" + d, $modalEl: void 0, $dropdownEl: void 0 }); var h = "";

                    function v() { var e = r.$inputEl.val().trim();
                        r.params.source && r.params.source.call(r, e, function(t) { var n = "",
                                a = r.params.limit ? Math.min(r.params.limit, t.length) : t.length;
                            r.items = t; var i = void 0;
                            r.params.highlightMatches && (e = e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), i = new RegExp("(" + e + ")", "i")); for (var s = void 0, o = void 0, c = 0; c < a; c += 1) { var d = "object" === S()(t[c]) ? t[c][r.params.valueProperty] : t[c],
                                    u = "object" === S()(t[c]) ? t[c][r.params.textProperty] : t[c];
                                0 === c && (s = d, o = r.items[c]), n += r.renderItem({ value: d, text: r.params.highlightMatches ? u.replace(i, "<b>$1</b>") : u }, c) } if ("" === n && "" === e && r.params.dropdownPlaceholderText && (n += r.renderItem({ placeholder: !0, text: r.params.dropdownPlaceholderText })), r.$dropdownEl.find("ul").html(n), r.params.typeahead) { if (!s || !o) return; if (0 !== s.toLowerCase().indexOf(e.toLowerCase())) return; if (h.toLowerCase() === e.toLowerCase()) return void(r.value = []); if (0 === h.toLowerCase().indexOf(e.toLowerCase())) return h = e, void(r.value = []);
                                l.val(s), l[0].setSelectionRange(e.length, s.length); var p = "object" === S()(r.value[0]) ? r.value[0][r.params.valueProperty] : r.value[0];
                                p && s.toLowerCase() === p.toLowerCase() || (r.value = [o], r.emit("local::change autocompleteChange", [o])) } h = e }) }

                    function g() { var e = this.value,
                            t = void 0,
                            n = void 0,
                            a = void 0; if (G(this).parents(".autocomplete-values").length > 0) { if ("checkbox" === r.inputType && !this.checked) { for (var i = 0; i < r.value.length; i += 1)(a = "string" == typeof r.value[i] ? r.value[i] : r.value[i][r.params.valueProperty]) !== e && 1 * a != 1 * e || r.value.splice(i, 1);
                                r.updateValues(), r.emit("local::change autocompleteChange", r.value) } } else { for (var s = 0; s < r.items.length; s += 1)(n = "object" === S()(r.items[s]) ? r.items[s][r.params.valueProperty] : r.items[s]) !== e && 1 * n != 1 * e || (t = r.items[s]); if ("radio" === r.inputType) r.value = [t];
                            else if (this.checked) r.value.push(t);
                            else
                                for (var o = 0; o < r.value.length; o += 1)(a = "object" === S()(r.value[o]) ? r.value[o][r.params.valueProperty] : r.value[o]) !== e && 1 * a != 1 * e || r.value.splice(o, 1);
                            r.updateValues(), ("radio" === r.inputType && this.checked || "checkbox" === r.inputType) && r.emit("local::change autocompleteChange", r.value) } }

                    function b(e) { var t = G(e.target);
                        t.is(r.$inputEl[0]) || r.$dropdownEl && t.closest(r.$dropdownEl[0]).length || r.close() }

                    function y() { r.open() }

                    function C() { r.open() }

                    function x() { r.$dropdownEl.find("label.active-state").length > 0 || r.close() }

                    function k() { r.positionDropdown() }

                    function E(e) { r.opened && 13 === e.keyCode && (e.preventDefault(), r.$inputEl.blur()) }

                    function $() { for (var e = G(this), t = void 0, n = 0; n < r.items.length; n += 1) { var a = "object" === S()(r.items[n]) ? r.items[n][r.params.valueProperty] : r.items[n],
                                i = e.attr("data-value");
                            a !== i && 1 * a != 1 * i || (t = r.items[n]) } r.params.updateInputValueOnSelect && (r.$inputEl.val("object" === (void 0 === t ? "undefined" : S()(t)) ? t[r.params.valueProperty] : t), r.$inputEl.trigger("input change")), r.value = [t], r.emit("local::change autocompleteChange", [t]), r.close() } return r.attachEvents = function() { "dropdown" !== r.params.openIn && r.$openerEl && r.$openerEl.on("click", y), "dropdown" === r.params.openIn && r.$inputEl && (r.$inputEl.on("focus", C), r.$inputEl.on(r.params.inputEvents, v), e.device.android ? G("html").on("click", b) : r.$inputEl.on("blur", x), r.params.typeahead && r.$inputEl.on("keydown", E)) }, r.detachEvents = function() { "dropdown" !== r.params.openIn && r.$openerEl && r.$openerEl.off("click", y), "dropdown" === r.params.openIn && r.$inputEl && (r.$inputEl.off("focus", C), r.$inputEl.off(r.params.inputEvents, v), e.device.android ? G("html").off("click", b) : r.$inputEl.off("blur", x), r.params.typeahead && r.$inputEl.off("keydown", E)) }, r.attachDropdownEvents = function() { r.$dropdownEl.on("click", "label", $), e.on("resize", k) }, r.detachDropdownEvents = function() { r.$dropdownEl.off("click", "label", $), e.off("resize", k) }, r.attachPageEvents = function() { r.$el.on("change", 'input[type="radio"], input[type="checkbox"]', g), r.params.closeOnSelect && !r.params.multiple && r.$el.once("click", ".list label", function() { me.nextTick(function() { r.close() }) }) }, r.detachPageEvents = function() { r.$el.off("change", 'input[type="radio"], input[type="checkbox"]', g) }, r.useModules(), r.init(), n = r, m()(i, n) } return b()(t, e), x()(t, [{ key: "positionDropdown", value: function() { var e = this,
                            t = e.$inputEl,
                            n = e.app,
                            a = e.$dropdownEl,
                            i = t.parents(".page-content"); if (0 !== i.length) { var r = t.offset(),
                                s = t[0].offsetWidth,
                                o = t[0].offsetHeight,
                                c = t.parents(".list"),
                                d = void 0;
                            c.parents().each(function(e, t) { if (!d) { var n = G(t);
                                    n.parent(i).length && (d = n) } }); var u = c.offset(),
                                p = parseInt(i.css("padding-bottom"), 10),
                                h = c.length > 0 ? u.left - i.offset().left : 0,
                                f = r.left - (c.length > 0 ? u.left : 0) - (n.rtl, 0),
                                v = r.top - (i.offset().top - i[0].scrollTop),
                                m = i[0].scrollHeight - p - (v + i[0].scrollTop) - t[0].offsetHeight,
                                g = n.rtl ? "padding-right" : "padding-left",
                                b = void 0;
                            c.length && !e.params.expandInput && (b = (n.rtl ? c[0].offsetWidth - f - s : f) - ("md" === n.theme ? 16 : 15)), a.css({ left: (c.length > 0 ? h : f) + "px", top: v + i[0].scrollTop + o + "px", width: (c.length > 0 ? c[0].offsetWidth : s) + "px" }), a.children(".autocomplete-dropdown-inner").css(l()({ maxHeight: m + "px" }, g, c.length > 0 && !e.params.expandInput ? b + "px" : "")) } } }, { key: "focus", value: function() { this.$el.find("input[type=search]").focus() } }, { key: "source", value: function(e) { var t = this; if (t.params.source) { var n = t.$el;
                            t.params.source.call(t, e, function(a) { var i = "",
                                    r = t.params.limit ? Math.min(t.params.limit, a.length) : a.length;
                                t.items = a; for (var s = 0; s < r; s += 1) { for (var o = !1, l = "object" === S()(a[s]) ? a[s][t.params.valueProperty] : a[s], c = 0; c < t.value.length; c += 1) { var d = "object" === S()(t.value[c]) ? t.value[c][t.params.valueProperty] : t.value[c];
                                        d !== l && 1 * d != 1 * l || (o = !0) } i += t.renderItem({ value: l, text: "object" === S()(a[s]) ? a[s][t.params.textProperty] : a[s], inputType: t.inputType, id: t.id, inputName: t.inputName, selected: o }, s) } n.find(".autocomplete-found ul").html(i), 0 === a.length ? 0 !== e.length ? (n.find(".autocomplete-not-found").show(), n.find(".autocomplete-found, .autocomplete-values").hide()) : (n.find(".autocomplete-values").show(), n.find(".autocomplete-found, .autocomplete-not-found").hide()) : (n.find(".autocomplete-found").show(), n.find(".autocomplete-not-found, .autocomplete-values").hide()) }) } } }, { key: "updateValues", value: function() { for (var e = this, t = "", n = 0; n < e.value.length; n += 1) t += e.renderItem({ value: "object" === S()(e.value[n]) ? e.value[n][e.params.valueProperty] : e.value[n], text: "object" === S()(e.value[n]) ? e.value[n][e.params.textProperty] : e.value[n], inputType: e.inputType, id: e.id, inputName: e.inputName + "-checked}", selected: !0 }, n);
                        e.$el.find(".autocomplete-values ul").html(t) } }, { key: "preloaderHide", value: function() { "dropdown" === this.params.openIn && this.$dropdownEl ? this.$dropdownEl.find(".autocomplete-preloader").removeClass("autocomplete-preloader-visible") : G(".autocomplete-preloader").removeClass("autocomplete-preloader-visible") } }, { key: "preloaderShow", value: function() { "dropdown" === this.params.openIn && this.$dropdownEl ? this.$dropdownEl.find(".autocomplete-preloader").addClass("autocomplete-preloader-visible") : G(".autocomplete-preloader").addClass("autocomplete-preloader-visible") } }, { key: "renderPreloader", value: function() { return ('\n      <div class="autocomplete-preloader preloader ' + (this.params.preloaderColor ? "color-" + this.params.preloaderColor : "") + '">' + ("md" === this.app.theme ? me.mdPreloaderContent : "") + "</div>\n    ").trim() } }, { key: "renderSearchbar", value: function() { var e = this; return e.params.renderSearchbar ? e.params.renderSearchbar.call(e) : ('\n      <form class="searchbar">\n        <div class="searchbar-inner">\n          <div class="searchbar-input-wrap">\n            <input type="search" placeholder="' + e.params.searchbarPlaceholder + '"/>\n            <i class="searchbar-icon"></i>\n            <span class="input-clear-button"></span>\n          </div>\n          <span class="searchbar-disable-button">' + e.params.searchbarDisableText + "</span>\n        </div>\n      </form>\n    ").trim() } }, { key: "renderItem", value: function(e, t) { if (this.params.renderItem) return this.params.renderItem.call(this, e, t); return ("dropdown" !== this.params.openIn ? '\n        <li>\n          <label class="item-' + e.inputType + ' item-content">\n            <input type="' + e.inputType + '" name="' + e.inputName + '" value="' + e.value + '" ' + (e.selected ? "checked" : "") + '>\n            <i class="icon icon-' + e.inputType + '"></i>\n            <div class="item-inner">\n              <div class="item-title">' + e.text + "</div>\n            </div>\n          </label>\n        </li>\n      " : e.placeholder ? '\n        <li class="autocomplete-dropdown-placeholder">\n          <div class="item-content">\n            <div class="item-inner">\n              <div class="item-title">' + e.text + "</div>\n            </div>\n          </label>\n        </li>\n      " : '\n        <li>\n          <label class="item-radio item-content" data-value="' + e.value + '">\n            <div class="item-inner">\n              <div class="item-title">' + e.text + "</div>\n            </div>\n          </label>\n        </li>\n      ").trim() } }, { key: "renderNavbar", value: function() { var e = this; if (e.params.renderNavbar) return e.params.renderNavbar.call(e); var t = e.params.pageTitle; return void 0 === t && e.$openerEl && e.$openerEl.length && (t = e.$openerEl.find(".item-title").text().trim()), ('\n      <div class="navbar ' + (e.params.navbarColorTheme ? "color-theme-" + e.params.navbarColorTheme : "") + '">\n        <div class="navbar-inner ' + (e.params.navbarColorTheme ? "color-theme-" + e.params.navbarColorTheme : "") + '">\n          <div class="left sliding">\n            <a href="#" class="link ' + ("page" === e.params.openIn ? "back" : "popup-close") + '" ' + ("popup" === e.params.openIn ? 'data-popup=".autocomplete-popup"' : "") + '>\n              <i class="icon icon-back"></i>\n              <span class="ios-only">' + ("page" === e.params.openIn ? e.params.pageBackLinkText : e.params.popupCloseLinkText) + "</span>\n            </a>\n          </div>\n          " + (t ? '<div class="title sliding">' + t + "</div>" : "") + "\n          " + (e.params.preloader ? '\n          <div class="right">\n            ' + e.renderPreloader() + "\n          </div>\n          " : "") + '\n          <div class="subnavbar sliding">' + e.renderSearchbar() + "</div>\n        </div>\n      </div>\n    ").trim() } }, { key: "renderDropdown", value: function() { var e = this; return e.params.renderDropdown ? e.params.renderDropdown.call(e, e.items) : ('\n      <div class="autocomplete-dropdown">\n        <div class="autocomplete-dropdown-inner">\n          <div class="list ' + (e.params.expandInput ? "" : "no-ios-edge") + '">\n            <ul></ul>\n          </div>\n        </div>\n        ' + (e.params.preloader ? e.renderPreloader() : "") + "\n      </div>\n    ").trim() } }, { key: "renderPage", value: function() { var e = this; return e.params.renderPage ? e.params.renderPage.call(e, e.items) : ('\n      <div class="page page-with-subnavbar autocomplete-page" data-name="autocomplete-page">\n        ' + e.renderNavbar() + '\n        <div class="searchbar-backdrop"></div>\n        <div class="page-content">\n          <div class="list autocomplete-list autocomplete-found autocomplete-list-' + e.id + " " + (e.params.formColorTheme ? "color-theme-" + e.params.formColorTheme : "") + '">\n            <ul></ul>\n          </div>\n          <div class="list autocomplete-not-found">\n            <ul>\n              <li class="item-content"><div class="item-inner"><div class="item-title">' + e.params.notFoundText + '</div></div></li>\n            </ul>\n          </div>\n          <div class="list autocomplete-values">\n            <ul></ul>\n          </div>\n        </div>\n      </div>\n    ').trim() } }, { key: "renderPopup", value: function() { var e = this; return e.params.renderPopup ? e.params.renderPopup.call(e, e.items) : ('\n      <div class="popup autocomplete-popup">\n        <div class="view">\n          ' + e.renderPage() + ";\n        </div>\n      </div>\n    ").trim() } }, { key: "onOpen", value: function(e, t) { var n = this,
                            a = n.app,
                            i = G(t); if (n.$el = i, n.el = i[0], n.openedIn = e, n.opened = !0, "dropdown" === n.params.openIn) n.attachDropdownEvents(), n.$dropdownEl.addClass("autocomplete-dropdown-in"), n.$inputEl.trigger("input");
                        else { var r = i.find(".searchbar"); "page" === n.params.openIn && "ios" === a.theme && 0 === r.length && (r = G(a.navbar.getElByPage(i)).find(".searchbar")), n.searchbar = a.searchbar.create({ el: r, backdropEl: i.find(".searchbar-backdrop"), customSearch: !0, on: { searchbarSearch: function(e, t) { 0 === t.length && n.searchbar.enabled ? n.searchbar.backdropShow() : n.searchbar.backdropHide(), n.source(t) } } }), n.attachPageEvents(), n.updateValues(), n.params.requestSourceOnOpen && n.source("") } n.emit("local::open autocompleteOpen", n) } }, { key: "onOpened", value: function() { var e = this; "dropdown" !== e.params.openIn && e.params.autoFocus && e.autoFocus(), e.emit("local::opened autocompleteOpened", e) } }, { key: "onClose", value: function() { var e = this;
                        e.destroyed || (e.searchbar && e.searchbar.destroy && (e.searchbar.destroy(), e.searchbar = null, delete e.searchbar), "dropdown" === e.params.openIn ? (e.detachDropdownEvents(), e.$dropdownEl.removeClass("autocomplete-dropdown-in").remove(), e.$inputEl.parents(".item-content-dropdown-expanded").removeClass("item-content-dropdown-expanded")) : e.detachPageEvents(), e.emit("local::close autocompleteClose", e)) } }, { key: "onClosed", value: function() { var e = this;
                        e.destroyed || (e.opened = !1, e.$el = null, e.el = null, delete e.$el, delete e.el, e.emit("local::closed autocompleteClosed", e)) } }, { key: "openPage", value: function() { var e = this; if (e.opened) return e; var t = e.renderPage(); return e.view.router.navigate({ url: e.url, route: { content: t, path: e.url, on: { pageBeforeIn: function(t, n) { e.onOpen("page", n.el) }, pageAfterIn: function(t, n) { e.onOpened("page", n.el) }, pageBeforeOut: function(t, n) { e.onClose("page", n.el) }, pageAfterOut: function(t, n) { e.onClosed("page", n.el) } }, options: { animate: e.params.animate } } }), e } }, { key: "openPopup", value: function() { var e = this; if (e.opened) return e; var t = { content: e.renderPopup(), animate: e.params.animate, on: { popupOpen: function(t) { e.onOpen("popup", t.el) }, popupOpened: function(t) { e.onOpened("popup", t.el) }, popupClose: function(t) { e.onClose("popup", t.el) }, popupClosed: function(t) { e.onClosed("popup", t.el) } } }; return e.params.routableModals ? e.view.router.navigate({ url: e.url, route: { path: e.url, popup: t } }) : e.modal = e.app.popup.create(t).open(e.params.animate), e } }, { key: "openDropdown", value: function() { var e = this;
                        e.$dropdownEl || (e.$dropdownEl = G(e.renderDropdown())), e.$inputEl.parents(".list").length && e.$inputEl.parents(".item-content").length > 0 && e.params.expandInput && e.$inputEl.parents(".item-content").addClass("item-content-dropdown-expanded"); var t = e.$inputEl.parents(".page-content");
                        e.params.dropdownContainerEl ? G(e.params.dropdownContainerEl).append(e.$dropdownEl) : 0 === t.length ? e.$dropdownEl.insertAfter(e.$inputEl) : (e.positionDropdown(), t.append(e.$dropdownEl)), e.onOpen("dropdown", e.$dropdownEl), e.onOpened("dropdown", e.$dropdownEl) } }, { key: "open", value: function() { var e = this; return e.opened ? e : (e["open" + e.params.openIn.split("").map(function(e, t) { return 0 === t ? e.toUpperCase() : e }).join("")](), e) } }, { key: "close", value: function() { var e = this; return e.opened ? ("dropdown" === e.params.openIn ? (e.onClose(), e.onClosed()) : e.params.routableModals || "page" === e.openedIn ? e.view.router.back({ animate: e.params.animate }) : (e.modal.once("modalClosed", function() { me.nextTick(function() { e.modal.destroy(), delete e.modal }) }), e.modal.close()), e) : e } }, { key: "init", value: function() { this.attachEvents() } }, { key: "destroy", value: function() { var e = this;
                        e.emit("local::beforeDestroy autocompleteBeforeDestroy", e), e.detachEvents(), e.$inputEl && e.$inputEl[0] && delete e.$inputEl[0].f7Autocomplete, e.$openerEl && e.$openerEl[0] && delete e.$openerEl[0].f7Autocomplete, me.deleteProps(e), e.destroyed = !0 } }]), t }(be),
            Da = { name: "autocomplete", params: { autocomplete: { openerEl: void 0, inputEl: void 0, view: void 0, dropdownContainerEl: void 0, dropdownPlaceholderText: void 0, typeahead: !1, highlightMatches: !0, expandInput: !1, updateInputValueOnSelect: !0, inputEvents: "input", value: void 0, multiple: !1, source: void 0, limit: void 0, valueProperty: "id", textProperty: "text", openIn: "page", pageBackLinkText: "Back", popupCloseLinkText: "Close", pageTitle: void 0, searchbarPlaceholder: "Search...", searchbarDisableText: "Cancel", animate: !0, autoFocus: !1, closeOnSelect: !1, notFoundText: "Nothing found", requestSourceOnOpen: !1, preloaderColor: void 0, preloader: !1, formColorTheme: void 0, navbarColorTheme: void 0, routableModals: !0, url: "select/", renderDropdown: void 0, renderPage: void 0, renderPopup: void 0, renderItem: void 0, renderSearchbar: void 0, renderNavbar: void 0 } }, static: { Autocomplete: La }, create: function() { var e = this;
                    e.autocomplete = me.extend(Ct({ defaultSelector: void 0, constructor: La, app: e, domProp: "f7Autocomplete" }), { open: function(t) { var n = e.autocomplete.get(t); if (n && n.open) return n.open() }, close: function(t) { var n = e.autocomplete.get(t); if (n && n.close) return n.close() } }) } },
            Ra = function(e) {
                function t(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    w()(this, t); var a = m()(this, (t.__proto__ || f()(t)).call(this, n, [e])),
                        i = a; if (!A.vi) throw new Error("f7:vi SDK not found."); var r = void 0;
                    void 0 !== A.orientation && (r = -90 === A.orientation || 90 === A.orientation ? "horizontal" : "vertical"); var s = me.extend({}, e.params.vi, { appId: e.id, appVer: e.version, language: e.language, width: e.width, height: e.height, os: ge.os, osVersion: ge.osVersion, orientation: r });
                    i.useModulesParams(s), i.params = me.extend(s, n); var o = {},
                        l = "on autoplay fallbackOverlay fallbackOverlayText enabled".split(" "); if (P()(i.params).forEach(function(e) { if (!(l.indexOf(e) >= 0)) { var t = i.params[e];
                                [null, void 0].indexOf(t) >= 0 || (o[e] = t) } }), !i.params.appId) throw new Error('Framework7:"app.id" is required to display an ad. Make sure you have specified it on app initialization.'); if (!i.params.placementId) throw new Error('Framework7:"placementId" is required to display an ad.');

                    function c() { var t = G("iframe#viAd");
                        0 !== t.length && t.css({ width: e.width + "px", height: e.height + "px" }) }

                    function d() { i.$overlayEl && (i.$overlayEl.off("click touchstart"), i.$overlayEl.remove()) } return i.ad = new A.vi.Ad(o), me.extend(i.ad, { onAdReady: function() { e.on("resize", c), i.emit("local::ready"), i.params.autoplay && i.start() }, onAdStarted: function() { i.emit("local::started") }, onAdClick: function(e) { i.emit("local::click", e) }, onAdImpression: function() { i.emit("local::impression") }, onAdStopped: function(t) { e.off("resize", c), d(), i.emit("local::stopped", t), "complete" === t && (i.emit("local::complete"), i.emit("local::completed")), "userexit" === t && i.emit("local::userexit"), i.destroyed = !0 }, onAutoPlayFailed: function(t, n) { i.emit("local::autoplayFailed", t, n), t && t.name && -1 !== t.name.indexOf("NotAllowedError") && i.params.fallbackOverlay && function(t) { if (t) { i.$overlayEl = G(('\n        <div class="vi-overlay no-fastclick">\n          ' + (i.params.fallbackOverlayText ? '<div class="vi-overlay-text">' + i.params.fallbackOverlayText + "</div>" : "") + '\n          <div class="vi-overlay-play-button"></div>\n        </div>\n      ').trim()); var n = void 0;
                                    i.$overlayEl.on("touchstart", function() { n = me.now() }), i.$overlayEl.on("click", function() { if (!(me.now() - n > 300)) { if (t) return t.play(), void d();
                                            i.start(), d() } }), e.root.append(i.$overlayEl) } }(n) }, onAdError: function(t) { d(), e.off("resize", c), i.emit("local::error", t), i.destroyed = !0 } }), i.init(), me.extend(i, { app: e }), a } return b()(t, e), x()(t, [{ key: "start", value: function() { this.destroyed || this.ad && this.ad.startAd() } }, { key: "pause", value: function() { this.destroyed || this.ad && this.ad.pauseAd() } }, { key: "resume", value: function() { this.destroyed || this.ad && this.ad.resumeAd() } }, { key: "stop", value: function() { this.destroyed || this.ad && this.ad.stopAd() } }, { key: "init", value: function() { this.destroyed || this.ad && this.ad.initAd() } }, { key: "destroy", value: function() { this.destroyed = !0, this.emit("local::beforeDestroy"), me.deleteProps(this) } }]), t }(be),
            za = { name: "vi", params: { vi: { enabled: !1, autoplay: !0, fallbackOverlay: !0, fallbackOverlayText: "Please watch this ad", showMute: !0, startMuted: (ge.ios || ge.android) && !ge.cordova, appId: null, appVer: null, language: null, width: null, height: null, placementId: "pltd4o7ibb9rc653x14", placementType: "interstitial", videoSlot: null, showProgress: !0, showBranding: !0, os: null, osVersion: null, orientation: null, age: null, gender: null, advertiserId: null, latitude: null, longitude: null, accuracy: null, storeId: null, ip: null, manufacturer: null, model: null, connectionType: null, connectionProvider: null } }, create: function() { var e = this;
                    e.vi = { sdkReady: !1, createAd: function(t) { return new Ra(e, t) }, loadSdk: function() { if (!e.vi.skdReady) { var t = I.createElement("script");
                                t.onload = function() { e.emit("viSdkReady"), e.vi.skdReady = !0 }, t.src = "https://c.vi-serve.com/viadshtml/vi.min.js", G("head").append(t) } } } }, on: { init: function() {
                        (this.params.vi.enabled || this.passedParams.vi && !1 !== this.passedParams.vi.enabled) && this.vi.loadSdk() } } };
        ye.use([Pe, Oe, Be, Ie, Ae, Le, nt, et, at, rt, ot, lt, dt, pt, { name: "subnavbar", on: { pageInit: function(e) { e.$navbarEl && e.$navbarEl.length && e.$navbarEl.find(".subnavbar").length && e.$el.addClass("page-with-subnavbar"), e.$el.find(".subnavbar").length && e.$el.addClass("page-with-subnavbar") } } }, ft, yt, kt, $t, Tt, Mt, Ot, It, Lt, Rt, Nt, Ht, Vt, Wt, Ut, Xt, { name: "timeline" }, Jt, Zt, { name: "card" }, { name: "chip" }, nn, rn, { name: "checkbox" }, { name: "radio" }, on, cn, un, hn, { name: "grid" }, vn, gn, yn, Cn, kn, $n, Tn, Mn, On, In, Pa, Ba, Aa, Da, za, { name: "typography" }]);
        t.a = ye },
    jFbC: function(e, t, n) { n("Cdx3"), e.exports = n("FeBl").Object.keys },
    "jKW+": function(e, t, n) { "use strict"; var a = n("kM2E"),
            i = n("qARP"),
            r = n("dNDb");
        a(a.S, "Promise", { try: function(e) { var t = i.f(this),
                    n = r(e); return (n.e ? t.reject : t.resolve)(n.v), t.promise } }) },
    k2Ib: function(e, t, n) { n("30KW"), e.exports = n("FeBl").Number.isFinite },
    kM2E: function(e, t, n) { var a = n("7KvD"),
            i = n("FeBl"),
            r = n("+ZMJ"),
            s = n("hJx8"),
            o = n("D2L2"),
            l = function(e, t, n) { var c, d, u, p = e & l.F,
                    h = e & l.G,
                    f = e & l.S,
                    v = e & l.P,
                    m = e & l.B,
                    g = e & l.W,
                    b = h ? i : i[t] || (i[t] = {}),
                    y = b.prototype,
                    w = h ? a : f ? a[t] : (a[t] || {}).prototype; for (c in h && (n = t), n)(d = !p && w && void 0 !== w[c]) && o(b, c) || (u = d ? w[c] : n[c], b[c] = h && "function" != typeof w[c] ? n[c] : m && d ? r(u, a) : g && w[c] == u ? function(e) { var t = function(t, n, a) { if (this instanceof e) { switch (arguments.length) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(t);
                                case 2:
                                    return new e(t, n) } return new e(t, n, a) } return e.apply(this, arguments) }; return t.prototype = e.prototype, t }(u) : v && "function" == typeof u ? r(Function.call, u) : u, v && ((b.virtual || (b.virtual = {}))[c] = u, e & l.R && y && !y[c] && s(y, c, u))) };
        l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l },
    kiBT: function(e, t, n) { e.exports = { default: n("i/C/"), __esModule: !0 } },
    knuC: function(e, t) { e.exports = function(e, t, n) { var a = void 0 === n; switch (t.length) {
                case 0:
                    return a ? e() : e.call(n);
                case 1:
                    return a ? e(t[0]) : e.call(n, t[0]);
                case 2:
                    return a ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                case 3:
                    return a ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                case 4:
                    return a ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]) } return e.apply(n, t) } },
    lOnJ: function(e, t) { e.exports = function(e) { if ("function" != typeof e) throw TypeError(e + " is not a function!"); return e } },
    lktj: function(e, t, n) { var a = n("Ibhu"),
            i = n("xnc9");
        e.exports = Object.keys || function(e) { return a(e, i) } },
    mClu: function(e, t, n) { var a = n("kM2E");
        a(a.S + a.F * !n("+E39"), "Object", { defineProperty: n("evD5").f }) },
    msXi: function(e, t, n) { var a = n("77Pl");
        e.exports = function(e, t, n, i) { try { return i ? t(a(n)[0], n[1]) : t(n) } catch (t) { var r = e.return; throw void 0 !== r && a(r.call(e)), t } } },
    mtWM: function(e, t, n) { e.exports = n("tIFN") },
    mvHQ: function(e, t, n) { e.exports = { default: n("qkKv"), __esModule: !0 } },
    n0T6: function(e, t, n) { var a = n("Ibhu"),
            i = n("xnc9").concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function(e) { return a(e, i) } },
    oJlt: function(e, t, n) { "use strict"; var a = n("cGG2"),
            i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function(e) { var t, n, r, s = {}; return e ? (a.forEach(e.split("\n"), function(e) { if (r = e.indexOf(":"), t = a.trim(e.substr(0, r)).toLowerCase(), n = a.trim(e.substr(r + 1)), t) { if (s[t] && i.indexOf(t) >= 0) return;
                    s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n } }), s) : s } },
    oM7Q: function(e, t, n) { n("sF+V"); var a = n("FeBl").Object;
        e.exports = function(e, t) { return a.create(e, t) } },
    p1b6: function(e, t, n) { "use strict"; var a = n("cGG2");
        e.exports = a.isStandardBrowserEnv() ? { write: function(e, t, n, i, r, s) { var o = [];
                o.push(e + "=" + encodeURIComponent(t)), a.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), a.isString(i) && o.push("path=" + i), a.isString(r) && o.push("domain=" + r), !0 === s && o.push("secure"), document.cookie = o.join("; ") }, read: function(e) { var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return t ? decodeURIComponent(t[3]) : null }, remove: function(e) { this.write(e, "", Date.now() - 864e5) } } : { write: function() {}, read: function() { return null }, remove: function() {} } },
    p3jY: function(e, t, n) {
        /**
         * vue-meta v1.5.0
         * (c) 2018 Declan de Wet & Atinux
         * @license MIT
         */
        var a;
        a = function() { "use strict";
            /*
            object-assign
            (c) Sindre Sorhus
            @license MIT
            */
            var e = Object.getOwnPropertySymbols,
                t = Object.prototype.hasOwnProperty,
                n = Object.prototype.propertyIsEnumerable; var a = function() { try { if (!Object.assign) return !1; var e = new String("abc"); if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1; for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n; if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) { return t[e] }).join("")) return !1; var a = {}; return "abcdefghijklmnopqrst".split("").forEach(function(e) { a[e] = e }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, a)).join("") } catch (e) { return !1 } }() ? Object.assign : function(a, i) { for (var r, s, o = arguments, l = function(e) { if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined"); return Object(e) }(a), c = 1; c < arguments.length; c++) { for (var d in r = Object(o[c])) t.call(r, d) && (l[d] = r[d]); if (e) { s = e(r); for (var u = 0; u < s.length; u++) n.call(r, s[u]) && (l[s[u]] = r[s[u]]) } } return l },
                i = function(e) { return function(e) { return !!e && "object" == typeof e }(e) && ! function(e) { var t = Object.prototype.toString.call(e); return "[object RegExp]" === t || "[object Date]" === t || function(e) { return e.$$typeof === r }(e) }(e) }; var r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function s(e, t) { var n; return (!t || !1 !== t.clone) && i(e) ? l((n = e, Array.isArray(n) ? [] : {}), e, t) : e }

            function o(e, t, n) { return e.concat(t).map(function(e) { return s(e, n) }) }

            function l(e, t, n) { var a = Array.isArray(t); return a === Array.isArray(e) ? a ? ((n || { arrayMerge: o }).arrayMerge || o)(e, t, n) : function(e, t, n) { var a = {}; return i(e) && Object.keys(e).forEach(function(t) { a[t] = s(e[t], n) }), Object.keys(t).forEach(function(r) { i(t[r]) && e[r] ? a[r] = l(e[r], t[r], n) : a[r] = s(t[r], n) }), a }(e, t, n) : s(t, n) } l.all = function(e, t) { if (!Array.isArray(e)) throw new Error("first argument should be an array"); return e.reduce(function(e, n) { return l(e, n, t) }, {}) }; var c = l,
                d = "[object Object]"; var u, p, h = Function.prototype,
                f = Object.prototype,
                v = h.toString,
                m = f.hasOwnProperty,
                g = v.call(Object),
                b = f.toString,
                y = (u = Object.getPrototypeOf, p = Object, function(e) { return u(p(e)) }); var w = function(e) { if (! function(e) { return !!e && "object" == typeof e }(e) || b.call(e) != d || function(e) { var t = !1; if (null != e && "function" != typeof e.toString) try { t = !!(e + "") } catch (e) {}
                        return t }(e)) return !1; var t = y(e); if (null === t) return !0; var n = m.call(t, "constructor") && t.constructor; return "function" == typeof n && n instanceof n && v.call(n) == g }; var C = function(e) { return "undefined" == typeof window ? String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;") : String(e).replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g, '"').replace(/'/g, "'") };

            function x(e) { void 0 === e && (e = {}); var t = e.keyName,
                    n = e.tagIDKeyName,
                    a = e.metaTemplateKeyName; return function(e) { var i = function e(t, n) { void 0 === n && (n = {}); var a = t.component,
                            i = t.option,
                            r = t.deep,
                            s = t.arrayMerge,
                            o = t.metaTemplateKeyName,
                            l = a.$options; if (a._inactive) return n; if (void 0 !== l[i] && null !== l[i]) { var d = l[i]; "function" == typeof d && (d = d.call(a)), n = "object" == typeof d ? c(n, d, { arrayMerge: s }) : d } return r && a.$children.length && a.$children.forEach(function(t) { n = e({ component: t, option: i, deep: r, arrayMerge: s }, n) }), o && n.hasOwnProperty("meta") && (n.meta = Object.keys(n.meta).map(function(e) { var t = n.meta[e]; if (!t.hasOwnProperty(o) || !t.hasOwnProperty("content") || void 0 === t[o]) return n.meta[e]; var a = t[o]; return delete t[o], a && (t.content = "function" == typeof a ? a(t.content) : a.replace(/%s/g, t.content)), t })), n }({ component: e, option: t, deep: !0, metaTemplateKeyName: a, arrayMerge: function(e, t) { var a = []; for (var i in e) { var r = e[i],
                                    s = !1; for (var o in t) { var l = t[o]; if (r[n] && r[n] === l[n]) { s = !0; break } } s || a.push(r) } return a.concat(t) } });
                    i.title && (i.titleChunk = i.title), i.titleTemplate && ("function" == typeof i.titleTemplate ? i.title = i.titleTemplate.call(e, i.titleChunk) : i.title = i.titleTemplate.replace(/%s/g, i.titleChunk)), i.base && (i.base = Object.keys(i.base).length ? [i.base] : []); var r = i.__dangerouslyDisableSanitizers,
                        s = i.__dangerouslyDisableSanitizersByTagID,
                        o = function(e) { return Object.keys(e).reduce(function(t, a) { var i = r && r.indexOf(a) > -1,
                                    l = e[n];!i && l && (i = s && s[l] && s[l].indexOf(a) > -1); var c, d = e[a]; return t[a] = d, "__dangerouslyDisableSanitizers" === a || "__dangerouslyDisableSanitizersByTagID" === a ? t : (i ? t[a] = d : "string" == typeof d ? t[a] = C(d) : w(d) ? t[a] = o(d) : (c = d, (Array.isArray ? Array.isArray(c) : "[object Array]" === Object.prototype.toString.call(c)) ? t[a] = d.map(o) : t[a] = d), t) }, {}) }; return i = c({ title: "", titleChunk: "", titleTemplate: "%s", htmlAttrs: {}, bodyAttrs: {}, headAttrs: {}, meta: [], base: [], link: [], style: [], script: [], noscript: [], __dangerouslyDisableSanitizers: [], __dangerouslyDisableSanitizersByTagID: {} }, i), i = o(i) } }

            function k(e) { return void 0 === e && (e = {}),
                    function(t, n) { switch (t) {
                            case "title":
                                return function(e) { void 0 === e && (e = {}); var t = e.attribute; return function(e, n) { return { text: function() { return "<" + e + " " + t + '="true">' + n + "</" + e + ">" } } } }(e)(t, n);
                            case "htmlAttrs":
                            case "bodyAttrs":
                            case "headAttrs":
                                return function(e) { void 0 === e && (e = {}); var t = e.attribute; return function(e, n) { return { text: function() { var e = "",
                                                    a = []; for (var i in n) n.hasOwnProperty(i) && (a.push(i), e += (void 0 !== n[i] ? i + '="' + n[i] + '"' : i) + " "); return (e += t + '="' + a.join(",") + '"').trim() } } } }(e)(t, n);
                            default:
                                return function(e) { void 0 === e && (e = {}); var t = e.attribute; return function(n, a) { return { text: function(i) { void 0 === i && (i = {}); var r = i.body; return void 0 === r && (r = !1), a.reduce(function(a, i) { if (!!i.body !== r) return a; var s = Object.keys(i).reduce(function(t, n) { switch (n) {
                                                                case "innerHTML":
                                                                case "cssText":
                                                                case "once":
                                                                    return t;
                                                                default:
                                                                    return -1 !== [e.tagIDKeyName, "body"].indexOf(n) ? t + " data-" + n + '="' + i[n] + '"' : void 0 === i[n] ? t + " " + n : t + " " + n + '="' + i[n] + '"' } }, "").trim(),
                                                        o = i.innerHTML || i.cssText || "",
                                                        l = -1 === ["noscript", "script", "style"].indexOf(n),
                                                        c = i.once ? "" : t + '="true" '; return l ? a + "<" + n + " " + c + s + "/>" : a + "<" + n + " " + c + s + ">" + o + "</" + n + ">" }, "") } } } }(e)(t, n) } } }

            function E(e) { void 0 === e && (e = {}); var t = e.attribute; return function(e, n) { var a = n.getAttribute(t),
                        i = a ? a.split(",") : [],
                        r = [].concat(i); for (var s in e)
                        if (e.hasOwnProperty(s)) { var o = e[s] || "";
                            n.setAttribute(s, o), -1 === i.indexOf(s) && i.push(s); var l = r.indexOf(s); - 1 !== l && r.splice(l, 1) }
                    for (var c = r.length - 1; c >= 0; c--) n.removeAttribute(r[c]);
                    i.length === r.length ? n.removeAttribute(t) : n.setAttribute(t, i.join(",")) } } var $ = Function.prototype.call.bind(Array.prototype.slice);

            function S(e) { void 0 === e && (e = {}); var t = e.ssrAttribute; return function(n) { var a = document.getElementsByTagName("html")[0]; if (null === a.getAttribute(t)) { var i = {},
                            r = {};
                        Object.keys(n).forEach(function(t) { switch (t) {
                                case "title":
                                    void 0 === (u = n.title) && (u = document.title), document.title = u; break;
                                case "htmlAttrs":
                                    E(e)(n[t], a); break;
                                case "bodyAttrs":
                                    E(e)(n[t], document.getElementsByTagName("body")[0]); break;
                                case "headAttrs":
                                    E(e)(n[t], document.getElementsByTagName("head")[0]); break;
                                case "titleChunk":
                                case "titleTemplate":
                                case "changed":
                                case "__dangerouslyDisableSanitizers":
                                    break;
                                default:
                                    var s = document.getElementsByTagName("head")[0],
                                        o = document.getElementsByTagName("body")[0],
                                        l = function(e) { void 0 === e && (e = {}); var t = e.attribute; return function(n, a, i, r) { var s, o = $(i.querySelectorAll(n + "[" + t + "]")),
                                                    l = $(r.querySelectorAll(n + "[" + t + '][data-body="true"]')),
                                                    c = []; if (a.length > 1) { var d = [];
                                                    a = a.map(function(e) { var t = JSON.stringify(e); if (d.indexOf(t) < 0) return d.push(t), e }).filter(function(e) { return e }) } a && a.length && a.forEach(function(a) { var i = document.createElement(n),
                                                        r = !0 !== a.body ? o : l; for (var d in a)
                                                        if (a.hasOwnProperty(d))
                                                            if ("innerHTML" === d) i.innerHTML = a.innerHTML;
                                                            else if ("cssText" === d) i.styleSheet ? i.styleSheet.cssText = a.cssText : i.appendChild(document.createTextNode(a.cssText));
                                                    else if (-1 !== [e.tagIDKeyName, "body"].indexOf(d)) { var u = "data-" + d,
                                                            p = void 0 === a[d] ? "" : a[d];
                                                        i.setAttribute(u, p) } else { var h = void 0 === a[d] ? "" : a[d];
                                                        i.setAttribute(d, h) } i.setAttribute(t, "true"), r.some(function(e, t) { return s = t, i.isEqualNode(e) }) ? r.splice(s, 1) : c.push(i) }); var u = o.concat(l); return u.forEach(function(e) { return e.parentNode.removeChild(e) }), c.forEach(function(e) { "true" === e.getAttribute("data-body") ? r.appendChild(e) : i.appendChild(e) }), { oldTags: u, newTags: c } } }(e)(t, n[t], s, o),
                                        c = l.oldTags,
                                        d = l.newTags;
                                    d.length && (i[t] = d, r[t] = c) } var u }), "function" == typeof n.changed && n.changed.call(this, n, i, r) } else a.removeAttribute(t) } }

            function T(e) { return void 0 === e && (e = {}),
                    function() { return { inject: function(e) { return void 0 === e && (e = {}),
                                    function() { var t = x(e)(this.$root); for (var n in t) t.hasOwnProperty(n) && "titleTemplate" !== n && "titleChunk" !== n && (t[n] = k(e)(n, t[n])); return t } }(e).bind(this), refresh: function(e) { return void 0 === e && (e = {}),
                                    function() { var t = x(e)(this.$root); return S(e).call(this, t), t } }(e).bind(this) } } } var _ = ("undefined" != typeof window ? window.cancelAnimationFrame : null) || clearTimeout,
                M = ("undefined" != typeof window ? window.requestAnimationFrame : null) || function(e) { return setTimeout(e, 0) };

            function P(e, t) { return _(e), M(function() { e = null, t() }) } var O = "metaInfo",
                B = "data-vue-meta",
                I = "data-vue-meta-server-rendered",
                A = "vmid",
                L = "template";

            function D(e, t) { void 0 === t && (t = {}), t = a({ keyName: O, metaTemplateKeyName: L, attribute: B, ssrAttribute: I, tagIDKeyName: A }, t), e.prototype.$meta = T(t); var n = null;
                e.mixin({ beforeCreate: function() { void 0 !== this.$options[t.keyName] && (this._hasMetaInfo = !0), "function" == typeof this.$options[t.keyName] && (void 0 === this.$options.computed && (this.$options.computed = {}), this.$options.computed.$metaInfo = this.$options[t.keyName]) }, created: function() { var e = this;!this.$isServer && this.$metaInfo && this.$watch("$metaInfo", function() { n = P(n, function() { return e.$meta().refresh() }) }) }, activated: function() { var e = this;
                        this._hasMetaInfo && (n = P(n, function() { return e.$meta().refresh() })) }, deactivated: function() { var e = this;
                        this._hasMetaInfo && (n = P(n, function() { return e.$meta().refresh() })) }, beforeMount: function() { var e = this;
                        this._hasMetaInfo && (n = P(n, function() { return e.$meta().refresh() })) }, destroyed: function() { var e = this; if (!this.$isServer && this._hasMetaInfo) var t = setInterval(function() { e.$el && null !== e.$el.offsetParent || (clearInterval(t), n = P(n, function() { return e.$meta().refresh() })) }, 50) } }) } "undefined" != typeof window && void 0 !== window.Vue && Vue.use(D); return D.version = "1.5.0", D }, e.exports = a() },
    pBtG: function(e, t, n) { "use strict";
        e.exports = function(e) { return !(!e || !e.__CANCEL__) } },
    pFYg: function(e, t, n) { "use strict";
        t.__esModule = !0; var a = s(n("Zzip")),
            i = s(n("5QVw")),
            r = "function" == typeof i.default && "symbol" == typeof a.default ? function(e) { return typeof e } : function(e) { return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : typeof e };

        function s(e) { return e && e.__esModule ? e : { default: e } } t.default = "function" == typeof i.default && "symbol" === r(a.default) ? function(e) { return void 0 === e ? "undefined" : r(e) } : function(e) { return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : void 0 === e ? "undefined" : r(e) } },
    pxG4: function(e, t, n) { "use strict";
        e.exports = function(e) { return function(t) { return e.apply(null, t) } } },
    qARP: function(e, t, n) { "use strict"; var a = n("lOnJ");
        e.exports.f = function(e) { return new function(e) { var t, n;
                this.promise = new e(function(e, a) { if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                    t = e, n = a }), this.resolve = a(t), this.reject = a(n) }(e) } },
    qRfI: function(e, t, n) { "use strict";
        e.exports = function(e, t) { return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e } },
    qio6: function(e, t, n) { var a = n("evD5"),
            i = n("77Pl"),
            r = n("lktj");
        e.exports = n("+E39") ? Object.defineProperties : function(e, t) { i(e); for (var n, s = r(t), o = s.length, l = 0; o > l;) a.f(e, n = s[l++], t[n]); return e } },
    qkKv: function(e, t, n) { var a = n("FeBl"),
            i = a.JSON || (a.JSON = { stringify: JSON.stringify });
        e.exports = function(e) { return i.stringify.apply(i, arguments) } },
    qyJz: function(e, t, n) { "use strict"; var a = n("+ZMJ"),
            i = n("kM2E"),
            r = n("sB3e"),
            s = n("msXi"),
            o = n("Mhyx"),
            l = n("QRG4"),
            c = n("fBQ2"),
            d = n("3fs2");
        i(i.S + i.F * !n("dY0y")(function(e) { Array.from(e) }), "Array", { from: function(e) { var t, n, i, u, p = r(e),
                    h = "function" == typeof this ? this : Array,
                    f = arguments.length,
                    v = f > 1 ? arguments[1] : void 0,
                    m = void 0 !== v,
                    g = 0,
                    b = d(p); if (m && (v = a(v, f > 2 ? arguments[2] : void 0, 2)), void 0 == b || h == Array && o(b))
                    for (n = new h(t = l(p.length)); t > g; g++) c(n, g, m ? v(p[g], g) : p[g]);
                else
                    for (u = b.call(p), n = new h; !(i = u.next()).done; g++) c(n, g, m ? s(u, v, [i.value, g], !0) : i.value); return n.length = g, n } }) },
    sB3e: function(e, t, n) { var a = n("52gC");
        e.exports = function(e) { return Object(a(e)) } },
    "sF+V": function(e, t, n) { var a = n("kM2E");
        a(a.S, "Object", { create: n("Yobk") }) },
    t8qj: function(e, t, n) { "use strict";
        e.exports = function(e, t, n, a, i) { return e.config = t, n && (e.code = n), e.request = a, e.response = i, e } },
    t8x9: function(e, t, n) { var a = n("77Pl"),
            i = n("lOnJ"),
            r = n("dSzd")("species");
        e.exports = function(e, t) { var n, s = a(e).constructor; return void 0 === s || void 0 == (n = a(s)[r]) ? t : i(n) } },
    tIFN: function(e, t, n) { "use strict"; var a = n("cGG2"),
            i = n("JP+z"),
            r = n("XmWM"),
            s = n("KCLY");

        function o(e) { var t = new r(e),
                n = i(r.prototype.request, t); return a.extend(n, r.prototype, t), a.extend(n, t), n } var l = o(s);
        l.Axios = r, l.create = function(e) { return o(a.merge(s, e)) }, l.Cancel = n("dVOP"), l.CancelToken = n("cWxy"), l.isCancel = n("pBtG"), l.all = function(e) { return Promise.all(e) }, l.spread = n("pxG4"), e.exports = l, e.exports.default = l },
    thJu: function(e, t, n) { "use strict"; var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        function i() { this.message = "String contains an invalid character" } i.prototype = new Error, i.prototype.code = 5, i.prototype.name = "InvalidCharacterError", e.exports = function(e) { for (var t, n, r = String(e), s = "", o = 0, l = a; r.charAt(0 | o) || (l = "=", o % 1); s += l.charAt(63 & t >> 8 - o % 1 * 8)) { if ((n = r.charCodeAt(o += .75)) > 255) throw new i;
                t = t << 8 | n } return s } },
    u2KI: function(e, t, n) { e.exports = { default: n("O4R0"), __esModule: !0 } },
    uqUo: function(e, t, n) { var a = n("kM2E"),
            i = n("FeBl"),
            r = n("S82l");
        e.exports = function(e, t) { var n = (i.Object || {})[e] || Object[e],
                s = {};
            s[e] = t(n), a(a.S + a.F * r(function() { n(1) }), "Object", s) } },
    "us/S": function(e, t, n) { e.exports = { default: n("Xd32"), __esModule: !0 } },
    "vFc/": function(e, t, n) { var a = n("TcQ7"),
            i = n("QRG4"),
            r = n("fkB2");
        e.exports = function(e) { return function(t, n, s) { var o, l = a(t),
                    c = i(l.length),
                    d = r(s, c); if (e && n != n) { for (; c > d;)
                        if ((o = l[d++]) != o) return !0 } else
                    for (; c > d; d++)
                        if ((e || d in l) && l[d] === n) return e || d || 0; return !e && -1 } } },
    "vIB/": function(e, t, n) { "use strict"; var a = n("O4g8"),
            i = n("kM2E"),
            r = n("880/"),
            s = n("hJx8"),
            o = n("/bQp"),
            l = n("94VQ"),
            c = n("e6n0"),
            d = n("PzxK"),
            u = n("dSzd")("iterator"),
            p = !([].keys && "next" in [].keys()),
            h = function() { return this };
        e.exports = function(e, t, n, f, v, m, g) { l(n, t, f); var b, y, w, C = function(e) { if (!p && e in $) return $[e]; switch (e) {
                        case "keys":
                        case "values":
                            return function() { return new n(this, e) } } return function() { return new n(this, e) } },
                x = t + " Iterator",
                k = "values" == v,
                E = !1,
                $ = e.prototype,
                S = $[u] || $["@@iterator"] || v && $[v],
                T = S || C(v),
                _ = v ? k ? C("entries") : T : void 0,
                M = "Array" == t && $.entries || S; if (M && (w = d(M.call(new e))) !== Object.prototype && w.next && (c(w, x, !0), a || "function" == typeof w[u] || s(w, u, h)), k && S && "values" !== S.name && (E = !0, T = function() { return S.call(this) }), a && !g || !p && !E && $[u] || s($, u, T), o[t] = T, o[x] = h, v)
                if (b = { values: k ? T : C("values"), keys: m ? T : C("keys"), entries: _ }, g)
                    for (y in b) y in $ || r($, y, b[y]);
                else i(i.P + i.F * (p || E), t, b); return b } },
    wLac: function(module, __webpack_exports__, __webpack_require__) { "use strict";
        (function(global) { var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr"),
                __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__),
                __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW"),
                __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__),
                __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__ = __webpack_require__("fZjL"),
                __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__),
                __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_finite__ = __webpack_require__("AMV0"),
                __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_finite___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_finite__),
                __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ"),
                __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify__),
                t7ctx = void 0;
            t7ctx = "undefined" != typeof window ? window : void 0 !== global ? global : void 0; var Template7Context = t7ctx,
                Template7Utils = { quoteSingleRexExp: new RegExp("'", "g"), quoteDoubleRexExp: new RegExp('"', "g"), isFunction: function(e) { return "function" == typeof e }, escape: function(e) { return void 0 !== Template7Context && Template7Context.escape ? Template7Context.escape(e) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }, helperToSlices: function(e) { var t = Template7Utils.quoteDoubleRexExp,
                            n = Template7Utils.quoteSingleRexExp,
                            a = e.replace(/[{}#}]/g, "").trim().split(" "),
                            i = [],
                            r = void 0,
                            s = void 0,
                            o = void 0; for (s = 0; s < a.length; s += 1) { var l = a[s],
                                c = void 0,
                                d = void 0; if (0 === s) i.push(l);
                            else if (0 === l.indexOf('"') || 0 === l.indexOf("'"))
                                if (c = 0 === l.indexOf('"') ? t : n, d = 0 === l.indexOf('"') ? '"' : "'", 2 === l.match(c).length) i.push(l);
                                else { for (r = 0, o = s + 1; o < a.length; o += 1)
                                        if (l += " " + a[o], a[o].indexOf(d) >= 0) { r = o, i.push(l); break }
                                    r && (s = r) } else if (l.indexOf("=") > 0) { var u = l.split("="),
                                    p = u[0],
                                    h = u[1]; if (c || (c = 0 === h.indexOf('"') ? t : n, d = 0 === h.indexOf('"') ? '"' : "'"), 2 !== h.match(c).length) { for (r = 0, o = s + 1; o < a.length; o += 1)
                                        if (h += " " + a[o], a[o].indexOf(d) >= 0) { r = o; break }
                                    r && (s = r) } var f = [p, h.replace(c, "")];
                                i.push(f) } else i.push(l) } return i }, stringToBlocks: function(e) { var t = [],
                            n = void 0,
                            a = void 0; if (!e) return []; var i = e.split(/({{[^{^}]*}})/); for (n = 0; n < i.length; n += 1) { var r = i[n]; if ("" !== r)
                                if (r.indexOf("{{") < 0) t.push({ type: "plain", content: r });
                                else { if (r.indexOf("{/") >= 0) continue; if ((r = r.replace(/{{([#/])*([ ])*/, "{{$1").replace(/([ ])*}}/, "}}")).indexOf("{#") < 0 && r.indexOf(" ") < 0 && r.indexOf("else") < 0) { t.push({ type: "variable", contextName: r.replace(/[{}]/g, "") }); continue } var s = Template7Utils.helperToSlices(r),
                                        o = s[0],
                                        l = ">" === o,
                                        c = [],
                                        d = {}; for (a = 1; a < s.length; a += 1) { var u = s[a];
                                        Array.isArray(u) ? d[u[0]] = "false" !== u[1] && u[1] : c.push(u) } if (r.indexOf("{#") >= 0) { var p = "",
                                            h = "",
                                            f = 0,
                                            v = void 0,
                                            m = !1,
                                            g = !1,
                                            b = 0; for (a = n + 1; a < i.length; a += 1)
                                            if (i[a].indexOf("{{#") >= 0 && (b += 1), i[a].indexOf("{{/") >= 0 && (b -= 1), i[a].indexOf("{{#" + o) >= 0) p += i[a], g && (h += i[a]), f += 1;
                                            else if (i[a].indexOf("{{/" + o) >= 0) { if (!(f > 0)) { v = a, m = !0; break } f -= 1, p += i[a], g && (h += i[a]) } else i[a].indexOf("else") >= 0 && 0 === b ? g = !0 : (g || (p += i[a]), g && (h += i[a]));
                                        m && (v && (n = v), "raw" === o ? t.push({ type: "plain", content: p }) : t.push({ type: "helper", helperName: o, contextName: c, content: p, inverseContent: h, hash: d })) } else r.indexOf(" ") > 0 && (l && (o = "_partial", c[0] && (0 === c[0].indexOf("[") ? c[0] = c[0].replace(/[[\]]/g, "") : c[0] = '"' + c[0].replace(/"|'/g, "") + '"')), t.push({ type: "helper", helperName: o, contextName: c, hash: d })) } } return t }, parseJsVariable: function(e, t, n) { return e.split(/([+ -*/^])/g).map(function(e) { if (e.indexOf(t) < 0) return e; if (!n) return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(""); var a = n; return e.indexOf(t + ".") >= 0 && e.split(t + ".")[1].split(".").forEach(function(e) { a = a[e] ? a[e] : "undefined" }), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(a) }).join("") }, parseJsParents: function(e, t) { return e.split(/([+ -*^])/g).map(function(e) { if (e.indexOf("../") < 0) return e; if (!t || 0 === t.length) return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(""); var n = e.split("../").length - 1,
                                a = n > t.length ? t[t.length - 1] : t[n - 1]; return e.replace(/..\//g, "").split(".").forEach(function(e) { a = a[e] ? a[e] : "undefined" }), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(a) }).join("") }, getCompileVar: function(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "data_1",
                            a = t,
                            i = void 0,
                            r = 0,
                            s = void 0;
                        0 === e.indexOf("../") ? (r = e.split("../").length - 1, a = "ctx_" + ((s = a.split("_")[1] - r) >= 1 ? s : 1), i = e.split("../")[r].split(".")) : 0 === e.indexOf("@global") ? (a = "Template7.global", i = e.split("@global.")[1].split(".")) : 0 === e.indexOf("@root") ? (a = "root", i = e.split("@root.")[1].split(".")) : i = e.split("."); for (var o = 0; o < i.length; o += 1) { var l = i[o]; if (0 === l.indexOf("@")) { var c = n.split("_")[1];
                                r > 0 && (c = s), o > 0 ? a += "[(data_" + c + " && data_" + c + "." + l.replace("@", "") + ")]" : a = "(data_" + c + " && data_" + c + "." + l.replace("@", "") + ")" } else(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_finite___default.a ? __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_finite___default()(l) : Template7Context.isFinite(l)) ? a += "[" + l + "]" : "this" === l || l.indexOf("this.") >= 0 || l.indexOf("this[") >= 0 || l.indexOf("this(") >= 0 ? a = l.replace("this", t) : a += "." + l } return a }, getCompiledArguments: function(e, t, n) { for (var a = [], i = 0; i < e.length; i += 1) /^['"]/.test(e[i]) ? a.push(e[i]) : /^(true|false|\d+)$/.test(e[i]) ? a.push(e[i]) : a.push(Template7Utils.getCompileVar(e[i], t, n)); return a.join(", ") } },
                Template7Helpers = { _partial: function(e, t) { var n = this,
                            a = Template7Class.partials[e]; return !a || a && !a.template ? "" : (a.compiled || (a.compiled = new Template7Class(a.template).compile()), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(t.hash).forEach(function(e) { n[e] = t.hash[e] }), a.compiled(n, t.data, t.root)) }, escape: function(e) { if ("string" != typeof e) throw new Error('Template7: Passed context to "escape" helper should be a string'); return Template7Utils.escape(e) }, if: function(e, t) { var n = e; return Template7Utils.isFunction(n) && (n = n.call(this)), n ? t.fn(this, t.data) : t.inverse(this, t.data) }, unless: function(e, t) { var n = e; return Template7Utils.isFunction(n) && (n = n.call(this)), n ? t.inverse(this, t.data) : t.fn(this, t.data) }, each: function(e, t) { var n = e,
                            a = "",
                            i = 0; if (Template7Utils.isFunction(n) && (n = n.call(this)), Array.isArray(n)) { for (t.hash.reverse && (n = n.reverse()), i = 0; i < n.length; i += 1) a += t.fn(n[i], { first: 0 === i, last: i === n.length - 1, index: i });
                            t.hash.reverse && (n = n.reverse()) } else
                            for (var r in n) i += 1, a += t.fn(n[r], { key: r }); return i > 0 ? a : t.inverse(this) }, with: function(e, t) { var n = e; return Template7Utils.isFunction(n) && (n = e.call(this)), t.fn(n) }, join: function(e, t) { var n = e; return Template7Utils.isFunction(n) && (n = n.call(this)), n.join(t.hash.delimiter || t.hash.delimeter) }, js: function js(expression, options) { var data = options.data,
                            func = void 0,
                            execute = expression; return "index first last key".split(" ").forEach(function(e) { if (void 0 !== data[e]) { var t = new RegExp("this.@" + e, "g"),
                                    n = new RegExp("@" + e, "g");
                                execute = execute.replace(t, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(data[e])).replace(n, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(data[e])) } }), options.root && execute.indexOf("@root") >= 0 && (execute = Template7Utils.parseJsVariable(execute, "@root", options.root)), execute.indexOf("@global") >= 0 && (execute = Template7Utils.parseJsVariable(execute, "@global", Template7Context.Template7.global)), execute.indexOf("../") >= 0 && (execute = Template7Utils.parseJsParents(execute, options.parents)), func = execute.indexOf("return") >= 0 ? "(function(){" + execute + "})" : "(function(){return (" + execute + ")})", eval(func).call(this) }, js_if: function js_if(expression, options) { var data = options.data,
                            func = void 0,
                            execute = expression; "index first last key".split(" ").forEach(function(e) { if (void 0 !== data[e]) { var t = new RegExp("this.@" + e, "g"),
                                    n = new RegExp("@" + e, "g");
                                execute = execute.replace(t, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(data[e])).replace(n, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(data[e])) } }), options.root && execute.indexOf("@root") >= 0 && (execute = Template7Utils.parseJsVariable(execute, "@root", options.root)), execute.indexOf("@global") >= 0 && (execute = Template7Utils.parseJsVariable(execute, "@global", Template7Class.global)), execute.indexOf("../") >= 0 && (execute = Template7Utils.parseJsParents(execute, options.parents)), func = execute.indexOf("return") >= 0 ? "(function(){" + execute + "})" : "(function(){return (" + execute + ")})"; var condition = eval(func).call(this); return condition ? options.fn(this, options.data) : options.inverse(this, options.data) } };
            Template7Helpers.js_compare = Template7Helpers.js_if; var Template7Options = {},
                Template7Partials = {},
                script = Template7Context.document.createElement("script");
            Template7Context.document.head.appendChild(script); var Template7Class = function() {
                function Template7Class(e) { __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Template7Class);
                    this.template = e } return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Template7Class, [{ key: "compile", value: function compile() { var template = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.template,
                            depth = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                            t = this; if (t.compiled) return t.compiled; if ("string" != typeof template) throw new Error("Template7: Template must be a string"); var stringToBlocks = Template7Utils.stringToBlocks,
                            getCompileVar = Template7Utils.getCompileVar,
                            getCompiledArguments = Template7Utils.getCompiledArguments,
                            blocks = stringToBlocks(template),
                            ctx = "ctx_" + depth,
                            data = "data_" + depth; if (0 === blocks.length) return function() { return "" };

                        function getCompileFn(e, n) { return e.content ? t.compile(e.content, n) : function() { return "" } }

                        function getCompileInverse(e, n) { return e.inverseContent ? t.compile(e.inverseContent, n) : function() { return "" } } var resultString = "";
                        resultString += 1 === depth ? "(function (" + ctx + ", " + data + ", root) {\n" : "(function (" + ctx + ", " + data + ") {\n", 1 === depth && (resultString += "function isArray(arr){return Array.isArray(arr);}\n", resultString += "function isFunction(func){return (typeof func === 'function');}\n", resultString += 'function c(val, ctx) {if (typeof val !== "undefined" && val !== null) {if (isFunction(val)) {return val.call(ctx);} else return val;} else return "";}\n', resultString += "root = root || ctx_1 || {};\n"), resultString += "var r = '';\n"; var i = void 0; for (i = 0; i < blocks.length; i += 1) { var block = blocks[i]; if ("plain" !== block.type) { var variable = void 0,
                                    compiledArguments = void 0; if ("variable" === block.type && (variable = getCompileVar(block.contextName, ctx, data), resultString += "r += c(" + variable + ", " + ctx + ");"), "helper" === block.type) { var parents = void 0; if ("ctx_1" !== ctx) { for (var level = ctx.split("_")[1], parentsString = "ctx_" + (level - 1), j = level - 2; j >= 1; j -= 1) parentsString += ", ctx_" + j;
                                        parents = "[" + parentsString + "]" } else parents = "[" + ctx + "]"; var dynamicHelper = void 0; if (0 === block.helperName.indexOf("[") && (block.helperName = getCompileVar(block.helperName.replace(/[[\]]/g, ""), ctx, data), dynamicHelper = !0), dynamicHelper || block.helperName in Template7Helpers) compiledArguments = getCompiledArguments(block.contextName, ctx, data), resultString += "r += (Template7Helpers" + (dynamicHelper ? "[" + block.helperName + "]" : "." + block.helperName) + ").call(" + ctx + ", " + (compiledArguments && compiledArguments + ", ") + "{hash:" + __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(block.hash) + ", data: " + data + " || {}, fn: " + getCompileFn(block, depth + 1) + ", inverse: " + getCompileInverse(block, depth + 1) + ", root: root, parents: " + parents + "});";
                                    else { if (block.contextName.length > 0) throw new Error('Template7: Missing helper: "' + block.helperName + '"');
                                        variable = getCompileVar(block.helperName, ctx, data), resultString += "if (" + variable + ") {", resultString += "if (isArray(" + variable + ")) {", resultString += "r += (Template7Helpers.each).call(" + ctx + ", " + variable + ", {hash:" + __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(block.hash) + ", data: " + data + " || {}, fn: " + getCompileFn(block, depth + 1) + ", inverse: " + getCompileInverse(block, depth + 1) + ", root: root, parents: " + parents + "});", resultString += "}else {", resultString += "r += (Template7Helpers.with).call(" + ctx + ", " + variable + ", {hash:" + __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(block.hash) + ", data: " + data + " || {}, fn: " + getCompileFn(block, depth + 1) + ", inverse: " + getCompileInverse(block, depth + 1) + ", root: root, parents: " + parents + "});", resultString += "}}" } } } else resultString += "r +='" + block.content.replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/'/g, "\\'") + "';" } return resultString += "\nreturn r;})", 1 === depth ? (t.compiled = eval(resultString), t.compiled) : resultString } }], [{ key: "options", get: function() { return Template7Options } }, { key: "partials", get: function() { return Template7Partials } }, { key: "helpers", get: function() { return Template7Helpers } }]), Template7Class }();

            function Template7() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var a = t[0],
                    i = t[1]; if (2 === t.length) { var r = new Template7Class(a),
                        s = r.compile()(i); return r = null, s } return new Template7Class(a) } Template7.registerHelper = function(e, t) { Template7Class.helpers[e] = t }, Template7.unregisterHelper = function(e) { Template7Class.helpers[e] = void 0, delete Template7Class.helpers[e] }, Template7.registerPartial = function(e, t) { Template7Class.partials[e] = { template: t } }, Template7.unregisterPartial = function(e) { Template7Class.partials[e] && (Template7Class.partials[e] = void 0, delete Template7Class.partials[e]) }, Template7.compile = function(e, t) { return new Template7Class(e, t).compile() }, Template7.options = Template7Class.options, Template7.helpers = Template7Class.helpers, Template7.partials = Template7Class.partials, __webpack_exports__.a = Template7 }).call(__webpack_exports__, __webpack_require__("DuR2")) },
    woOf: function(e, t, n) { e.exports = { default: n("V3tA"), __esModule: !0 } },
    wxAW: function(e, t, n) { "use strict";
        t.__esModule = !0; var a, i = n("C4MV"),
            r = (a = i) && a.__esModule ? a : { default: a };
        t.default = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, r.default)(e, a.key, a) } } return function(t, n, a) { return n && e(t.prototype, n), a && e(t, a), t } }() },
    xGkn: function(e, t, n) { "use strict"; var a = n("4mcu"),
            i = n("EGZi"),
            r = n("/bQp"),
            s = n("TcQ7");
        e.exports = n("vIB/")(Array, "Array", function(e, t) { this._t = s(e), this._i = 0, this._k = t }, function() { var e = this._t,
                t = this._k,
                n = this._i++; return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]) }, "values"), r.Arguments = r.Array, a("keys"), a("values"), a("entries") },
    "xH/j": function(e, t, n) { var a = n("hJx8");
        e.exports = function(e, t, n) { for (var i in t) n && e[i] ? e[i] = t[i] : a(e, i, t[i]); return e } },
    xLtR: function(e, t, n) { "use strict"; var a = n("cGG2"),
            i = n("TNV1"),
            r = n("pBtG"),
            s = n("KCLY"),
            o = n("dIwP"),
            l = n("qRfI");

        function c(e) { e.cancelToken && e.cancelToken.throwIfRequested() } e.exports = function(e) { return c(e), e.baseURL && !o(e.url) && (e.url = l(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), e.headers = a.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) { delete e.headers[t] }), (e.adapter || s.adapter)(e).then(function(t) { return c(e), t.data = i(t.data, t.headers, e.transformResponse), t }, function(t) { return r(t) || (c(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t) }) } },
    xnc9: function(e, t) { e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") },
    zQR9: function(e, t, n) { "use strict"; var a = n("h65t")(!0);
        n("vIB/")(String, "String", function(e) { this._t = String(e), this._i = 0 }, function() { var e, t = this._t,
                n = this._i; return n >= t.length ? { value: void 0, done: !0 } : (e = a(t, n), this._i += e.length, { value: e, done: !1 }) }) },
    zwoO: function(e, t, n) { "use strict";
        t.__esModule = !0; var a, i = n("pFYg"),
            r = (a = i) && a.__esModule ? a : { default: a };
        t.default = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" !== (void 0 === t ? "undefined" : (0, r.default)(t)) && "function" != typeof t ? e : t } }
});
//# sourceMappingURL=vendor.45b09359346623489f16.js.map