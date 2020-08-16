import { r as registerInstance, h, g as getElement } from './index-1f198cf0.js';
import './_commonjsHelpers-4cfcaab1.js';
import { p as properties } from './css-custom-properties.min-dc1a55f4.js';

const followCss = ":host,:host *,:host *::before,:host *::after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}:host{--translate-y:calc(-50% + var(--top));--translate-x:calc(-50% + var(--left));position:fixed;top:0;left:0;z-index:20;-webkit-transform:translate3d(var(--translate-x), var(--translate-y), 0);transform:translate3d(var(--translate-x), var(--translate-y), 0);pointer-events:none;contain:content}";

const Follow = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = "cursor";
        this.distance = 0.5;
        this.padding = 40;
    }
    componentWillLoad() {
        this.update();
        properties.properties.set({ "--left": `50%`, "--top": `-3000px` }, this.element);
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
        properties.properties.set({ "--top": `${window.pageYOffset + this.offset}px` }, this.element);
        // @ts-ignore
        window.addEventListener("scroll", () => {
            properties.properties.set({ "--top": `${window.pageYOffset + this.offset}px` }, this.element);
        }, { passive: true });
    }
    attachCursor() {
        // @ts-ignore
        window.addEventListener("mousemove", (e) => {
            properties.properties.set({ "--top": `${e.clientY}px` }, this.element);
            properties.properties.set({ "--left": `${this.minmaxx(e.clientX)}px` }, this.element);
        }, { passive: true });
        window.addEventListener("deviceorientation", (e) => {
            const z = Math.abs(e.alpha);
            const value = z / 360;
            const percentage = value * 100;
            properties.properties.set({ "--left": `${this.minmaxx(percentage)}px` }, this.element);
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
        return h("slot", null);
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "type": ["update"],
        "distance": ["update"]
    }; }
};
Follow.style = followCss;

export { Follow as midwest_follow };
