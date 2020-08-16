import { Component, h, Host, Prop, Element, State, Event, Watch } from '@stencil/core';
export class Slide {
    constructor() {
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
        return h(Host, { style: { '--width': this.width }, class: {
                'slide-zoom': this.swiper,
                'swiper-slide': this.swiper,
            } },
            h("slot", null),
            h("midwest-intersection", { element: this.el, multiple: true, in: this.in.bind(this), out: this.out.bind(this) }));
    }
    static get is() { return "midwest-slide"; }
    static get originalStyleUrls() { return {
        "$": ["slide.css"]
    }; }
    static get styleUrls() { return {
        "$": ["slide.css"]
    }; }
    static get properties() { return {
        "slideId": {
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
            "attribute": "slide-id",
            "reflect": false
        },
        "width": {
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
            "attribute": "width",
            "reflect": false,
            "defaultValue": "\"auto\""
        }
    }; }
    static get states() { return {
        "swiper": {},
        "visible": {}
    }; }
    static get events() { return [{
            "method": "switched",
            "name": "switched",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "visible",
            "methodName": "onVisible"
        }]; }
}
