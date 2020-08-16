import { Component, Prop, State, Method } from '@stencil/core';
export class StellarAutoScroll {
    constructor() {
        this.speed = 2;
        this.startPosition = 0;
        this.loop = false;
        this.autoplay = false;
    }
    componentDidLoad() {
        if (this.autoplay) {
            this.play();
        }
    }
    async play() {
        this.scroll();
    }
    async stop() {
        clearTimeout(this.timeout);
        this.timeout = undefined;
    }
    scroll() {
        window.scrollBy(0, 1);
        this.timeout = setTimeout(this.scroll.bind(this), this.speed);
        if ((document.body.scrollHeight - window.innerHeight) == window.pageYOffset) {
            if (this.loop) {
                window.scrollTo(this.startPosition, 0);
            }
            else {
                this.stop();
            }
        }
    }
    static get is() { return "midwest-auto-scroll"; }
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
            "reflect": false,
            "defaultValue": "2"
        },
        "startPosition": {
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
            "attribute": "start-position",
            "reflect": false,
            "defaultValue": "0"
        },
        "loop": {
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
            "attribute": "loop",
            "reflect": false,
            "defaultValue": "false"
        },
        "autoplay": {
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
            "attribute": "autoplay",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "timeout": {}
    }; }
    static get methods() { return {
        "play": {
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
        "stop": {
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
}
