import { Component, Prop } from '@stencil/core';
import parallaxis from 'parallaxis';
export class Story {
    constructor() {
        this.target = "story";
    }
    componentWillLoad() {
        parallaxis({ className: this.target });
    }
    static get is() { return "midwest-story"; }
    static get properties() { return {
        "target": {
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
            "attribute": "target",
            "reflect": false,
            "defaultValue": "\"story\""
        }
    }; }
}
