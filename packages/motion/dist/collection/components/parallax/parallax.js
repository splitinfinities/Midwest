import { Component, h, Prop, Element, State } from '@stencil/core';
import basicScroll from 'basicscroll';
export class Parallax {
    constructor() {
        this.center = false;
        this.horizontal = false;
        this.easeBoxes = [];
    }
    componentWillLoad() {
        document.querySelectorAll('midwest-parallax-section').forEach((elem) => {
            if (basicScroll) {
                this.easeBoxes.push(basicScroll.create({
                    elem,
                    from: 'top-bottom',
                    to: 'bottom-top',
                    direct: true,
                    props: {
                        '--ty': {
                            from: `${-2 * elem.speed}%`,
                            to: `${2 * elem.speed}%`
                        }
                    }
                }));
            }
        });
        this.easeBoxes.forEach((instance) => {
            instance.start();
        });
        window.onresize = () => {
            this.easeBoxes.forEach((instance) => {
                instance.calculate();
                instance.update();
            });
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "midwest-parallax"; }
    static get originalStyleUrls() { return {
        "$": ["parallax.css"]
    }; }
    static get styleUrls() { return {
        "$": ["parallax.css"]
    }; }
    static get properties() { return {
        "center": {
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
            "attribute": "center",
            "reflect": false,
            "defaultValue": "false"
        },
        "horizontal": {
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
            "attribute": "horizontal",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "easeBoxes": {}
    }; }
    static get elementRef() { return "el"; }
}
