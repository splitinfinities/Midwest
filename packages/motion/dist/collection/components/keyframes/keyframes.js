import { Component, Prop, Element, Watch, h } from '@stencil/core';
import { properties } from 'css-custom-properties';
export class Keyframes {
    constructor() {
        this.width = 400;
        this.height = 400;
        this.frame = 1;
    }
    componentWillLoad() {
        this.update();
    }
    update() {
        properties.set({
            '--width': `${this.width}px`,
            '--height': `${this.height}px`,
            '--aspect-ratio': `${this.width / this.height * 100}%`,
            '--position': `0 ${this.height * -(this.frame - 1)}px`
        }, this.element);
    }
    render() {
        return h("div", { class: "background", style: { "background-image": `url(${this.src})` } });
    }
    static get is() { return "midwest-keyframes"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["keyframes.css"]
    }; }
    static get styleUrls() { return {
        "$": ["keyframes.css"]
    }; }
    static get properties() { return {
        "src": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "src",
            "reflect": false
        },
        "width": {
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
            "attribute": "width",
            "reflect": false,
            "defaultValue": "400"
        },
        "height": {
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
            "attribute": "height",
            "reflect": false,
            "defaultValue": "400"
        },
        "frame": {
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
            "attribute": "frame",
            "reflect": true,
            "defaultValue": "1"
        }
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "frame",
            "methodName": "update"
        }]; }
}
