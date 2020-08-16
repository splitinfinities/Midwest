import { Component, Prop } from '@stencil/core';
export class ParallaxSection {
    constructor() {
        this.speed = 1;
    }
    static get is() { return "midwest-parallax-section"; }
    static get originalStyleUrls() { return {
        "$": ["parallax-section.css"]
    }; }
    static get styleUrls() { return {
        "$": ["parallax-section.css"]
    }; }
    static get properties() { return {
        "speed": {
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
            "attribute": "speed",
            "reflect": true,
            "defaultValue": "1"
        }
    }; }
}
