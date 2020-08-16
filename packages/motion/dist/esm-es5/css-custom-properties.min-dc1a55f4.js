import { c as createCommonjsModule, u as unwrapExports, a as commonjsGlobal } from './_commonjsHelpers-4cfcaab1.js';
var cssCustomProperties_min = createCommonjsModule(function (module, exports) {
    !function (t, e) { module.exports = e(); }(commonjsGlobal, function () { return function (t) { function e(n) { if (r[n])
        return r[n].exports; var o = r[n] = { i: n, l: !1, exports: {} }; return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports; } var r = {}; return e.m = t, e.c = r, e.i = function (t) { return t; }, e.d = function (t, r, n) { e.o(t, r) || Object.defineProperty(t, r, { configurable: !1, enumerable: !0, get: n }); }, e.n = function (t) { var r = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return e.d(r, "a", r), r; }, e.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, e.p = "", e(e.s = 1); }([function (t, e, r) { Object.defineProperty(e, "__esModule", { value: !0 }); var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t; } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t; }, o = (e.isArray = function (t) { return t && Array.isArray(t); }, e.isString = function (t) { return t && "string" == typeof t; }), i = e.isObject = function (t) { return t && "object" === (void 0 === t ? "undefined" : n(t)); }, u = (e.forEach = function (t, e) { if (i(t))
            for (var r in t)
                t.hasOwnProperty(r) && e(r, t[r]); }, e.set = function (t, e, r) { return i(t) ? (t[e] = r, t) : t; }, e.startsWith = function (t, e) { return o(t) && t.startsWith(e); }, e.isNumber = function (t) { return !isNaN(t) && "Infinity" !== t; }); e.formatResult = function (t) { return u(t) ? parseFloat(t, 10) : t; }, e.unprefixString = function (t, e) { return t.startsWith(e) ? t.slice(e.length) : t; }, e.prefixString = function (t, e) { return t.startsWith(e) ? t : "" + e + t; }; }, function (t, e, r) { function n(t, e, r) { return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t; } function o(t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); } Object.defineProperty(e, "__esModule", { value: !0 }); var i = function () { function t(t, e) { for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        } } return function (e, r, n) { return r && t(e.prototype, r), n && t(e, n), e; }; }(), u = r(0), f = function () { function t() { o(this, t); } return i(t, null, [{ key: "get", value: function (e) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.root; if (r && t.isValidName(e)) {
                    var n = getComputedStyle(r), o = n.getPropertyValue(t.prefix(e)), i = o && o.trim();
                    return i && "" !== i ? (0, u.formatResult)(i) : void 0;
                } } }, { key: "getAll", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.root; if (e) {
                    var r = {};
                    return (0, u.forEach)(e.style, function (n, o) { if ((0, u.startsWith)(o, "--")) {
                        var i = o;
                        (0, u.set)(r, t.unprefix(i), t.get(i, e));
                    } }), r;
                } } }, { key: "getAllPrefixed", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.root; return t.prefix(t.getAll(e)); } }, { key: "has", value: function (e) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.root; return !!t.get(e, r); } }, { key: "set", value: function (e) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.root; if (r) {
                    if (!e)
                        return {};
                    var n = {};
                    return (0, u.forEach)(e, function (e, o) { t.setProperty(e, o, r), (0, u.set)(n, t.unprefix(e), t.get(e, r)); }), n;
                } } }, { key: "setProperty", value: function (e, r) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.root; if (n && t.isValidName(e))
                    return n.style.setProperty(t.prefix(e), r), r; } }, { key: "unset", value: function (e) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.root; if (r && t.isValidName(e)) {
                    var o = t.get(e, r);
                    return t.set(n({}, e, null), r), o;
                } } }, { key: "unsetAll", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.root; if (e) {
                    var r = t.getAll(e);
                    return (0, u.forEach)(r, function (r, n) { t.unset(r, e); }), r;
                } } }, { key: "getElement", value: function (t) { return document.querySelector(t); } }, { key: "prefix", value: function (t) { if ((0, u.isString)(t))
                    return (0, u.prefixString)(t, "--"); if ((0, u.isArray)(t))
                    return t.map(function (t) { return (0, u.prefixString)(t, "--"); }); if ((0, u.isObject)(t)) {
                    var e = {};
                    return (0, u.forEach)(t, function (t, r) { (0, u.set)(e, (0, u.prefixString)(t, "--"), r); }), e;
                } } }, { key: "unprefix", value: function (t) { if ((0, u.isString)(t))
                    return (0, u.unprefixString)(t, "--"); if ((0, u.isArray)(t))
                    return t.map(function (t) { return (0, u.unprefixString)(t, "--"); }); if ((0, u.isObject)(t)) {
                    var e = {};
                    return (0, u.forEach)(t, function (t, r) { (0, u.set)(e, (0, u.unprefixString)(t, "--"), r); }), e;
                } } }, { key: "isValidName", value: function (t) { return (0, u.isString)(t); } }, { key: "root", get: function () { return t.getElement(":root"); } }]), t; }(); e.default = f, t.exports = e.default; }]); });
});
var properties = unwrapExports(cssCustomProperties_min);
export { properties as p };
