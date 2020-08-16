import { r as registerInstance, h, H as Host, g as getElement } from './index-1f198cf0.js';

const blurCss = ":host,:host *,:host *::before,:host *::after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}midwest-blur,midwest-blur *,midwest-blur *::before,midwest-blur *::after{-webkit-box-sizing:border-box;box-sizing:border-box}midwest-blur{-webkit-filter:var(--blur-url);filter:var(--blur-url);display:block;overflow:initial}midwest-blur .blur-svg{display:none}@media (prefers-reduced-motion: reduce){midwest-blur{-webkit-filter:none !important;filter:none !important}}";

const Blur = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vertical = 0;
        this.horizontal = 0;
    }
    componentWillLoad() {
        if (this.supported()) {
            this.generatedId = this.element.id || this.generateId();
        }
    }
    supported_match() {
        return navigator.userAgent.toLowerCase().indexOf('firefox') === -1 &&
            !(/iPad|iPhone|iPod/.test(navigator.platform));
    }
    supported() {
        const criteria = () => {
            let result;
            try {
                if (sessionStorage.getItem('blur-supported') === "true") {
                    return sessionStorage.getItem('blur-supported') === "true";
                }
                result = this.supported_match();
                sessionStorage.setItem('blur-supported', result ? "true" : "false");
            }
            catch (e) {
                result = this.supported_match();
            }
            return result;
        };
        try {
            sessionStorage.clear();
        }
        catch (e) { }
        return criteria();
    }
    generateId() {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        return `blur-${getRandomInt(0, 1000)}`;
    }
    render() {
        return this.supported() ? h(Host, { id: this.element.id || this.generatedId, style: { "--blur-url": `url('#${this.generatedId}-filter')` } }, h("slot", null), h("svg", { class: "blur-svg" }, h("defs", null, h("filter", { id: this.generatedId + "-filter" }, h("feGaussianBlur", { id: this.generatedId + "-gaussian", in: "SourceGraphic", stdDeviation: `${this.horizontal},${this.vertical}` }))))) : h("slot", null);
    }
    get element() { return getElement(this); }
};
Blur.style = blurCss;

export { Blur as midwest_blur };
