import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-1f198cf0.js';
var slideCss = ":host,:host *,:host *::before,:host *::after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}midwest-slide{display:block;width:var(--width, 100%);height:100%;contain:content}midwest-slide midwest-image,midwest-slide midwest-video{height:100%;--object-fit:cover;--figure-height:100%}.slide-zoom{text-align:center;display:block;width:100%}.swiper-slide{text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;font-size:18px}.swiper-slide img{width:auto;max-width:100%;height:auto;max-height:100%}";
var Slide = /** @class */ (function () {
    function Slide(hostRef) {
        registerInstance(this, hostRef);
        this.switched = createEvent(this, "switched", 7);
        this.width = "auto";
        this.swiper = false;
        this.visible = false;
    }
    Slide.prototype.componentWillLoad = function () {
        if (this.el.closest('midwest-slides')) {
            this.swiper = (this.el.closest('midwest-slides').nodeName === "STELLAR-SLIDES");
        }
    };
    Slide.prototype.onVisible = function () {
        this.switched.emit({ slideId: this.slideId, visible: this.visible });
    };
    Slide.prototype.in = function () {
        this.visible = true;
    };
    Slide.prototype.out = function () {
        this.visible = false;
    };
    Slide.prototype.render = function () {
        return h(Host, { style: { '--width': this.width }, class: {
                'slide-zoom': this.swiper,
                'swiper-slide': this.swiper,
            } }, h("slot", null), h("midwest-intersection", { element: this.el, multiple: true, in: this.in.bind(this), out: this.out.bind(this) }));
    };
    Object.defineProperty(Slide.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Slide, "watchers", {
        get: function () {
            return {
                "visible": ["onVisible"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return Slide;
}());
Slide.style = slideCss;
export { Slide as midwest_slide };
