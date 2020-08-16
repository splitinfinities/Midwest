'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4bd31256.js');
require('./_commonjsHelpers-4cd2b8eb.js');
const cssCustomProperties_min = require('./css-custom-properties.min-5b9a4595.js');

const followCss = ":host,:host *,:host *::before,:host *::after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}:host{--translate-y:calc(-50% + var(--top));--translate-x:calc(-50% + var(--left));position:fixed;top:0;left:0;z-index:20;-webkit-transform:translate3d(var(--translate-x), var(--translate-y), 0);transform:translate3d(var(--translate-x), var(--translate-y), 0);pointer-events:none;contain:content}";

const Follow = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.type = "cursor";
        this.distance = 0.5;
        this.padding = 40;
    }
    componentWillLoad() {
        this.update();
        cssCustomProperties_min.properties.properties.set({ "--left": `50%`, "--top": `-3000px` }, this.element);
    }
    componentDidLoad() {
        setTimeout(() => {
            this.update();
        }, 200);
    }
    get offset() {
        return window.innerHeight * this.distance;
    }
    update() {
        if (this.type === "scroll") {
            this.attachScroll();
        }
        else if (this.type === "cursor") {
            this.attachCursor();
        }
    }
    attachScroll() {
        cssCustomProperties_min.properties.properties.set({ "--top": `${window.pageYOffset + this.offset}px` }, this.element);
        // @ts-ignore
        window.addEventListener("scroll", () => {
            cssCustomProperties_min.properties.properties.set({ "--top": `${window.pageYOffset + this.offset}px` }, this.element);
        }, { passive: true });
    }
    attachCursor() {
        // @ts-ignore
        window.addEventListener("mousemove", (e) => {
            cssCustomProperties_min.properties.properties.set({ "--top": `${e.clientY}px` }, this.element);
            cssCustomProperties_min.properties.properties.set({ "--left": `${this.minmaxx(e.clientX)}px` }, this.element);
        }, { passive: true });
        window.addEventListener("deviceorientation", (e) => {
            const z = Math.abs(e.alpha);
            const value = z / 360;
            const percentage = value * 100;
            cssCustomProperties_min.properties.properties.set({ "--left": `${this.minmaxx(percentage)}px` }, this.element);
        }, true);
    }
    minmaxx(x) {
        let left = (this.padding + (this.element.offsetWidth / 2));
        let right = (window.innerWidth - left);
        if (x <= left) {
            x = left;
        }
        else if (x >= right) {
            x = right;
        }
        return x;
    }
    render() {
        return index.h("slot", null);
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "type": ["update"],
        "distance": ["update"]
    }; }
};
Follow.style = followCss;

exports.midwest_follow = Follow;
