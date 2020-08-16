import { Component, Element, Prop, h } from '@stencil/core';
export class Scatter {
    constructor() {
        this.float = false;
        this.min = 0;
        this.max = 100;
        this.sizes = false;
        this.colors = false;
    }
    componentWillLoad() {
        const particles = this.element.querySelectorAll('*');
        Array.from(particles).forEach((element) => {
            const top = this.randomFloat();
            const left = this.randomFloat();
            element.setAttribute('style', `top: ${top}%; left: ${left}%`);
            if (this.colors) {
                element.classList.add(`fs${this.fontScale()}`);
            }
            if (this.sizes) {
                element.classList.add(`theme-${this.colorSwatch()}${this.colorScale()}`);
            }
        });
    }
    randomFloat() {
        return this.min + Math.random() * (this.max + 1 - this.min);
    }
    randomNumber(max = 2) {
        return Math.floor(Math.random() * max) + 1;
    }
    fontScale() {
        return this.randomNumber(6);
    }
    colorScale() {
        return this.randomNumber(10);
    }
    colorSwatch() {
        return this.randomNumber() === 1 ? "base" : "complement";
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "midwest-scatter"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["scatter.css"]
    }; }
    static get styleUrls() { return {
        "$": ["scatter.css"]
    }; }
    static get properties() { return {
        "float": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "float",
            "reflect": true,
            "defaultValue": "false"
        },
        "min": {
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
            "attribute": "min",
            "reflect": false,
            "defaultValue": "0"
        },
        "max": {
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
            "attribute": "max",
            "reflect": false,
            "defaultValue": "100"
        },
        "sizes": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "sizes",
            "reflect": false,
            "defaultValue": "false"
        },
        "colors": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "colors",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get elementRef() { return "element"; }
}
