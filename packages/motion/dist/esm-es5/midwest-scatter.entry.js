import { r as registerInstance, h, g as getElement } from './index-1f198cf0.js';
var scatterCss = ":host,:host *,:host *::before,:host *::after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}:host{contain:content;position:relative;display:contents;width:100%;height:100%}:host ::slotted(*){position:absolute}:host([float]) ::slotted(*:nth-of-type(3n+1)){-webkit-animation-direction:alternate;animation-direction:alternate}:host([float]) ::slotted(*:nth-of-type(3n+2)){animation-direction:reverse}:host([float]) ::slotted(*:nth-of-type(3n+3)){animation-direction:alternate-reverse}:host([float]) ::slotted(*:nth-of-type(5n+1)){-webkit-animation:floating-x 10s infinite;animation:floating-x 10s infinite}:host([float]) ::slotted(*:nth-of-type(5n+2)){-webkit-animation:floating-x-spin 15s infinite;animation:floating-x-spin 15s infinite}:host([float]) ::slotted(*:nth-of-type(5n+3)){-webkit-animation:floating-x-full-spin 35s infinite;animation:floating-x-full-spin 35s infinite}:host([float]) ::slotted(*:nth-of-type(5n+4)){-webkit-animation:floating-x-full-spin-rel 20s infinite;animation:floating-x-full-spin-rel 20s infinite}:host([float]) ::slotted(*:nth-of-type(5n+5)){-webkit-animation:floating-x-full-spin 25s infinite;animation:floating-x-full-spin 25s infinite}";
var Scatter = /** @class */ (function () {
    function Scatter(hostRef) {
        registerInstance(this, hostRef);
        this.float = false;
        this.min = 0;
        this.max = 100;
        this.sizes = false;
        this.colors = false;
    }
    Scatter.prototype.componentWillLoad = function () {
        var _this = this;
        var particles = this.element.querySelectorAll('*');
        Array.from(particles).forEach(function (element) {
            var top = _this.randomFloat();
            var left = _this.randomFloat();
            element.setAttribute('style', "top: " + top + "%; left: " + left + "%");
            if (_this.colors) {
                element.classList.add("fs" + _this.fontScale());
            }
            if (_this.sizes) {
                element.classList.add("theme-" + _this.colorSwatch() + _this.colorScale());
            }
        });
    };
    Scatter.prototype.randomFloat = function () {
        return this.min + Math.random() * (this.max + 1 - this.min);
    };
    Scatter.prototype.randomNumber = function (max) {
        if (max === void 0) { max = 2; }
        return Math.floor(Math.random() * max) + 1;
    };
    Scatter.prototype.fontScale = function () {
        return this.randomNumber(6);
    };
    Scatter.prototype.colorScale = function () {
        return this.randomNumber(10);
    };
    Scatter.prototype.colorSwatch = function () {
        return this.randomNumber() === 1 ? "base" : "complement";
    };
    Scatter.prototype.render = function () {
        return (h("slot", null));
    };
    Object.defineProperty(Scatter.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return Scatter;
}());
Scatter.style = scatterCss;
export { Scatter as midwest_scatter };
