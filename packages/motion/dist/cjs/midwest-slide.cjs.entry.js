'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4bd31256.js');

const slideCss = ":host,:host *,:host *::before,:host *::after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}midwest-slide{display:block;width:var(--width, 100%);height:100%;contain:content}midwest-slide midwest-image,midwest-slide midwest-video{height:100%;--object-fit:cover;--figure-height:100%}.slide-zoom{text-align:center;display:block;width:100%}.swiper-slide{text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;font-size:18px}.swiper-slide img{width:auto;max-width:100%;height:auto;max-height:100%}";

const Slide = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.switched = index.createEvent(this, "switched", 7);
        this.width = "auto";
        this.swiper = false;
        this.visible = false;
    }
    componentWillLoad() {
        if (this.el.closest('midwest-slides')) {
            this.swiper = (this.el.closest('midwest-slides').nodeName === "STELLAR-SLIDES");
        }
    }
    onVisible() {
        this.switched.emit({ slideId: this.slideId, visible: this.visible });
    }
    in() {
        this.visible = true;
    }
    out() {
        this.visible = false;
    }
    render() {
        return index.h(index.Host, { style: { '--width': this.width }, class: {
                'slide-zoom': this.swiper,
                'swiper-slide': this.swiper,
            } }, index.h("slot", null), index.h("midwest-intersection", { element: this.el, multiple: true, in: this.in.bind(this), out: this.out.bind(this) }));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "visible": ["onVisible"]
    }; }
};
Slide.style = slideCss;

exports.midwest_slide = Slide;
