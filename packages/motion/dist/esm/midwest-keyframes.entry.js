import { r as registerInstance, h, g as getElement } from './index-1f198cf0.js';
import './_commonjsHelpers-4cfcaab1.js';
import { p as properties } from './css-custom-properties.min-dc1a55f4.js';

const keyframesCss = ":host,:host *,:host *::before,:host *::after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}:host{--position:var(--position, 0);display:block;width:100%;height:100%;max-width:var(--width);max-height:var(--height);contain:content}:host .background{background-position:var(--position);background-size:cover;width:var(--width);height:var(--height);display:block}";

const Keyframes = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.width = 400;
        this.height = 400;
        this.frame = 1;
    }
    componentWillLoad() {
        this.update();
    }
    update() {
        properties.properties.set({
            '--width': `${this.width}px`,
            '--height': `${this.height}px`,
            '--aspect-ratio': `${this.width / this.height * 100}%`,
            '--position': `0 ${this.height * -(this.frame - 1)}px`
        }, this.element);
    }
    render() {
        return h("div", { class: "background", style: { "background-image": `url(${this.src})` } });
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "frame": ["update"]
    }; }
};
Keyframes.style = keyframesCss;

export { Keyframes as midwest_keyframes };
