var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, h, H as Host, g as getElement } from './index-1f198cf0.js';
var slidesCss = ":host,:host *,:host *::before,:host *::after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}:host{display:grid;grid-gap:1rem;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;contain:content;position:relative}:host .wrapper{-ms-flex-order:1;order:1;-ms-scroll-snap-type:x mandatory;-webkit-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;display:grid;grid-gap:var(--grid-gap, 2rem);grid-template-rows:1fr;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;scrollbar-width:none;-ms-overflow-style:none;grid-auto-flow:column}:host ::slotted(midwest-slide){scroll-snap-align:center;display:block;-webkit-transition:all 200ms ease 0s;transition:all 200ms ease 0s;--object-fit:cover;height:100%}:host button.nav{grid-column:1;position:absolute;z-index:999;top:50%;height:4rem;width:4rem;cursor:pointer;border:0;left:1rem;background:var(--white);opacity:1;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);-webkit-transition:all 200ms ease 0s;transition:all 200ms ease 0s;-webkit-clip-path:circle();clip-path:circle();-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host button.nav:hover,:host button.nav:focus{left:0.5rem}:host button.nav.hide{-webkit-transform:translateX(200%) translateY(-50%);transform:translateX(200%) translateY(-50%)}:host button.nav.next{right:1rem;left:auto}:host button.nav.next:hover,:host button.nav.next:focus{right:0.5rem}:host button.nav.prev.hide{-webkit-transform:translateX(-200%) translateY(-50%);transform:translateX(-200%) translateY(-50%)}:host button.nav ion-icon{font-size:3rem;color:var(--black)}:host .pager{-ms-flex-order:2;order:2;display:grid;grid-auto-flow:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;grid-gap:1rem;width:auto}:host .pager button{width:1rem;height:1rem;border-radius:100%;border:none;background:var(--theme-base5);font-size:0;text-indent:-10000px;cursor:pointer;-webkit-filter:grayscale(100%);filter:grayscale(100%);-webkit-transform:scale(0.4);transform:scale(0.4);-webkit-transition:all 75ms ease-in-out 0s;transition:all 75ms ease-in-out 0s}:host .pager button.visible{-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-filter:grayscale(0%);filter:grayscale(0%)}:host .pager button:hover,:host .pager button:focus{-webkit-transform:scale(1.2);transform:scale(1.2)}";
var Slides = /** @class */ (function () {
    function Slides(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Show or hide the pager
         */
        this.pager = false;
        /**
         * Show or hide the pager
         */
        this.padding = "1rem";
        /**
         * Show or hide the pager
         */
        this.active = [];
        /**
         * Show or hide the pager
         */
        this.first = true;
        /**
         * Show or hide the pager
         */
        this.last = false;
    }
    Slides.prototype.componentWillLoad = function () {
        this.slides = this.el.querySelectorAll("midwest-slide");
        this.slides.forEach(function (slide, index) {
            slide.setAttribute("tabIndex", "0");
            slide.slideId = index;
        });
    };
    Slides.prototype.scrollToSlide = function (element) {
        element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };
    Slides.prototype.next = function () {
        var lastVisible = Array.from(this.el.shadowRoot.querySelectorAll('.pager > button.visible'));
        var element = lastVisible[lastVisible.length - 1].nextSibling;
        // @ts-ignore
        element.click();
    };
    Slides.prototype.previous = function () {
        var firstVisible = Array.from(this.el.shadowRoot.querySelectorAll('.pager > button.visible'));
        var element = firstVisible[0].previousSibling;
        // @ts-ignore
        element.click();
    };
    Slides.prototype.handleSwitched = function (e) {
        if (this.pager) {
            if (e.detail.visible) {
                this.active = __spreadArrays(this.active, [e.detail.slideId]);
            }
            else {
                this.active = this.active.filter(function (item) {
                    return item !== e.detail.slideId;
                });
            }
        }
        if (e.detail.visible) {
            if (e.detail.slideId === 0) {
                this.first = true;
            }
            else {
                this.first = false;
            }
            if (e.detail.slideId === (this.slides.length - 1)) {
                this.last = true;
            }
            else {
                this.last = false;
            }
        }
    };
    Slides.prototype.render = function () {
        var _this = this;
        return h(Host, { tabIndex: 0, style: { '--padding': this.padding } }, h("button", { class: "nav prev " + (this.first ? "hide" : ""), onClick: this.previous.bind(this) }, h("ion-icon", { name: "arrow-round-back" })), h("button", { class: "nav next " + (this.last ? "hide" : ""), onClick: this.next.bind(this) }, h("ion-icon", { name: "arrow-round-forward" })), this.pager && this.slides && h("div", { class: "pager" }, Array.from(this.slides).map(function (e, i) { return h("button", { onClick: function () { return _this.scrollToSlide(e); }, class: _this.active.includes(i) ? "visible" : "" }, "Slide ", i); })), h("div", { class: "wrapper" }, h("slot", null)));
    };
    Object.defineProperty(Slides.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return Slides;
}());
Slides.style = slidesCss;
export { Slides as midwest_slides };
