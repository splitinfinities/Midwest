import { Component, Prop, Element, h, Method, State, Host } from '@stencil/core';
import { animations } from "./lib/animations";
import properties from 'css-custom-properties';
export class AnimateText {
    constructor() {
        this.delay = 50;
        this.duration = 1000;
        this.method = "lettering";
        this.words = false;
        this.phrase = false;
        this.onlyIn = false;
    }
    componentWillLoad() {
        this.originalText = this.element.textContent;
        if (this.words) {
            this.incomingHTML = this.originalText.replace(/[^, ]+/g, "<span class='letter' aria-hidden='true'>$&</span>");
        }
        else if (this.phrase) {
            this.incomingHTML = `<span class='letter' aria-hidden='true'>${this.originalText}</span>`;
        }
        else {
            this.incomingHTML = this.originalText.replace(/([^\x00-\x80]|\w)/g, "<span class='letter' aria-hidden='true'>$&</span>");
        }
        if (this.method === "retro") {
            this.element.innerHTML = this.incomingHTML.repeat(11);
        }
        else {
            this.element.innerHTML = this.incomingHTML;
        }
        this.letters = this.element.querySelectorAll('.letter');
        this.letters.forEach((e, i) => {
            properties.set({ "--iteration": ((i - 1) <= 0) ? 0 : (i - 2) }, e);
        });
    }
    async in() {
        animations[this.method].in(this.letters, this.delay, this.duration);
    }
    async out() {
        if (!this.onlyIn) {
            animations[this.method].out(this.letters, this.delay, this.duration);
        }
    }
    render() {
        return h(Host, { role: "text", ariaLabel: this.originalText },
            h("midwest-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this) }));
    }
    static get is() { return "midwest-animate-text"; }
    static get originalStyleUrls() { return {
        "$": ["animate-text.css"]
    }; }
    static get styleUrls() { return {
        "$": ["animate-text.css"]
    }; }
    static get properties() { return {
        "delay": {
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
            "attribute": "delay",
            "reflect": false,
            "defaultValue": "50"
        },
        "duration": {
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
            "attribute": "duration",
            "reflect": false,
            "defaultValue": "1000"
        },
        "method": {
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
            "attribute": "method",
            "reflect": false,
            "defaultValue": "\"lettering\""
        },
        "words": {
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
            "attribute": "words",
            "reflect": false,
            "defaultValue": "false"
        },
        "phrase": {
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
            "attribute": "phrase",
            "reflect": false,
            "defaultValue": "false"
        },
        "onlyIn": {
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
            "attribute": "only-in",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "letters": {},
        "originalText": {},
        "incomingHTML": {}
    }; }
    static get methods() { return {
        "in": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "out": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
}
