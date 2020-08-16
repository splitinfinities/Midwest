import { Component, Prop, Element, h, Watch } from '@stencil/core';
import { properties } from 'css-custom-properties';
export class Follow {
    constructor() {
        this.type = "cursor";
        this.distance = 0.5;
        this.padding = 40;
    }
    componentWillLoad() {
        this.update();
        properties.set({ "--left": `50%`, "--top": `-3000px` }, this.element);
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
        properties.set({ "--top": `${window.pageYOffset + this.offset}px` }, this.element);
        // @ts-ignore
        window.addEventListener("scroll", () => {
            properties.set({ "--top": `${window.pageYOffset + this.offset}px` }, this.element);
        }, { passive: true });
    }
    attachCursor() {
        // @ts-ignore
        window.addEventListener("mousemove", (e) => {
            properties.set({ "--top": `${e.clientY}px` }, this.element);
            properties.set({ "--left": `${this.minmaxx(e.clientX)}px` }, this.element);
        }, { passive: true });
        window.addEventListener("deviceorientation", (e) => {
            const z = Math.abs(e.alpha);
            const value = z / 360;
            const percentage = value * 100;
            properties.set({ "--left": `${this.minmaxx(percentage)}px` }, this.element);
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
    static get is() { return "midwest-follow"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["follow.css"]
    }; }
    static get styleUrls() { return {
        "$": ["follow.css"]
    }; }
    static get properties() { return {
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"scroll\" | \"cursor\"",
                "resolved": "\"cursor\" | \"scroll\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "\"cursor\""
        },
        "distance": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "distance",
            "reflect": false,
            "defaultValue": "0.5"
        },
        "padding": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "padding",
            "reflect": false,
            "defaultValue": "40"
        }
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "type",
            "methodName": "update"
        }, {
            "propName": "distance",
            "methodName": "update"
        }]; }
}
