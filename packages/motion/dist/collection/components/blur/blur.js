import { Component, Element, Prop, h, Host } from '@stencil/core';
export class Blur {
    constructor() {
        this.vertical = 0;
        this.horizontal = 0;
    }
    componentWillLoad() {
        if (this.supported()) {
            this.generatedId = this.element.id || this.generateId();
        }
    }
    supported_match() {
        return navigator.userAgent.toLowerCase().indexOf('firefox') === -1 &&
            !(/iPad|iPhone|iPod/.test(navigator.platform));
    }
    supported() {
        const criteria = () => {
            let result;
            try {
                if (sessionStorage.getItem('blur-supported') === "true") {
                    return sessionStorage.getItem('blur-supported') === "true";
                }
                result = this.supported_match();
                sessionStorage.setItem('blur-supported', result ? "true" : "false");
            }
            catch (e) {
                result = this.supported_match();
            }
            return result;
        };
        try {
            sessionStorage.clear();
        }
        catch (e) { }
        return criteria();
    }
    generateId() {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        return `blur-${getRandomInt(0, 1000)}`;
    }
    render() {
        return this.supported() ? h(Host, { id: this.element.id || this.generatedId, style: { "--blur-url": `url('#${this.generatedId}-filter')` } },
            h("slot", null),
            h("svg", { class: "blur-svg" },
                h("defs", null,
                    h("filter", { id: this.generatedId + "-filter" },
                        h("feGaussianBlur", { id: this.generatedId + "-gaussian", in: "SourceGraphic", stdDeviation: `${this.horizontal},${this.vertical}` }))))) : h("slot", null);
    }
    static get is() { return "midwest-blur"; }
    static get originalStyleUrls() { return {
        "$": ["blur.css"]
    }; }
    static get styleUrls() { return {
        "$": ["blur.css"]
    }; }
    static get properties() { return {
        "vertical": {
            "type": "number",
            "mutable": true,
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
            "attribute": "vertical",
            "reflect": true,
            "defaultValue": "0"
        },
        "horizontal": {
            "type": "number",
            "mutable": true,
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
            "attribute": "horizontal",
            "reflect": true,
            "defaultValue": "0"
        }
    }; }
    static get elementRef() { return "element"; }
}
