import { r as registerInstance, h, H as Host, g as getElement } from './index-1f198cf0.js';
var blurCss = ":host,:host *,:host *::before,:host *::after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}midwest-blur,midwest-blur *,midwest-blur *::before,midwest-blur *::after{-webkit-box-sizing:border-box;box-sizing:border-box}midwest-blur{-webkit-filter:var(--blur-url);filter:var(--blur-url);display:block;overflow:initial}midwest-blur .blur-svg{display:none}@media (prefers-reduced-motion: reduce){midwest-blur{-webkit-filter:none !important;filter:none !important}}";
var Blur = /** @class */ (function () {
    function Blur(hostRef) {
        registerInstance(this, hostRef);
        this.vertical = 0;
        this.horizontal = 0;
    }
    Blur.prototype.componentWillLoad = function () {
        if (this.supported()) {
            this.generatedId = this.element.id || this.generateId();
        }
    };
    Blur.prototype.supported_match = function () {
        return navigator.userAgent.toLowerCase().indexOf('firefox') === -1 &&
            !(/iPad|iPhone|iPod/.test(navigator.platform));
    };
    Blur.prototype.supported = function () {
        var _this = this;
        var criteria = function () {
            var result;
            try {
                if (sessionStorage.getItem('blur-supported') === "true") {
                    return sessionStorage.getItem('blur-supported') === "true";
                }
                result = _this.supported_match();
                sessionStorage.setItem('blur-supported', result ? "true" : "false");
            }
            catch (e) {
                result = _this.supported_match();
            }
            return result;
        };
        try {
            sessionStorage.clear();
        }
        catch (e) { }
        return criteria();
    };
    Blur.prototype.generateId = function () {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        return "blur-" + getRandomInt(0, 1000);
    };
    Blur.prototype.render = function () {
        return this.supported() ? h(Host, { id: this.element.id || this.generatedId, style: { "--blur-url": "url('#" + this.generatedId + "-filter')" } }, h("slot", null), h("svg", { class: "blur-svg" }, h("defs", null, h("filter", { id: this.generatedId + "-filter" }, h("feGaussianBlur", { id: this.generatedId + "-gaussian", in: "SourceGraphic", stdDeviation: this.horizontal + "," + this.vertical }))))) : h("slot", null);
    };
    Object.defineProperty(Blur.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return Blur;
}());
Blur.style = blurCss;
export { Blur as midwest_blur };
