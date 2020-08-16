import { Component, Element, h, State, Listen, Prop, Method } from '@stencil/core';
import { properties } from 'css-custom-properties';
export class ScrollZRoot {
    constructor() {
        this.initialOriginX = 50;
        this.initialOriginY = 30;
        this.itemZ = 10;
        this.cameraSpeed = 150;
        this.cameraZ = -1;
        this.scenePerspective = 1;
        this.distanceFromTop = 0;
        this.distanceFromBottom = 0;
        this.perspectiveOrigin = { x: 0, y: 0, maxGap: 10 };
    }
    randomFloat(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    componentWillLoad() {
        this.distanceFromTop = this.element.getBoundingClientRect().top;
        this.distanceFromBottom = this.element.getBoundingClientRect().bottom;
        this.prepare();
    }
    prepare() {
        this.sections = Array.from(this.element.querySelectorAll('midwest-scroll-z-section'));
        properties.set({
            '--scenePerspective': this.scenePerspective,
            '--scenePerspectiveOriginX': this.initialOriginX,
            '--scenePerspectiveOriginY': this.initialOriginY,
            '--itemZ': this.itemZ,
            '--cameraSpeed': this.cameraSpeed,
            '--cameraZ': this.cameraZ,
            '--sectionHeight': 0
        }, document.documentElement);
        this.perspectiveOrigin = {
            x: parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspectiveOriginX")),
            y: parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspectiveOriginY")),
            maxGap: 10
        };
        this.setSceneHeight();
        this.scatter();
    }
    async scatter() {
        this.sections.forEach((section, index) => {
            const x = `calc(${this.randomFloat(-30, 30)}rem + 50%)`;
            const y = `calc(${this.randomFloat(-30, 30)}rem + 50%)`;
            const z = `calc(var(--itemZ) * var(--cameraSpeed) * ${index} * -1px)`;
            section.style.setProperty('transform', `translate3D(${x}, ${y}, ${z})`);
        });
    }
    setSceneHeight() {
        const numberOfItems = this.sections.length;
        const itemZ = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--itemZ"));
        const scenePerspective = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspective"));
        const cameraSpeed = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed"));
        const height = window.innerHeight +
            scenePerspective * cameraSpeed +
            (itemZ / 2) * cameraSpeed * numberOfItems;
        document.documentElement.style.setProperty("--sectionHeight", `${height}`);
    }
    moveCamera() {
        this.distanceFromTop = this.element.getBoundingClientRect().top;
        this.distanceFromBottom = this.element.getBoundingClientRect().bottom;
        const offset = window.pageYOffset - this.distanceFromTop;
        if (offset >= 0) {
            document.documentElement.style.setProperty("--cameraZ", `${offset}`);
        }
        else {
            document.documentElement.style.setProperty("--cameraZ", `-1`);
        }
    }
    moveCameraAngle(event) {
        const xGap = (((event.clientX - window.innerWidth / 2) * 100) / (window.innerWidth / 2)) * -1;
        const yGap = (((event.clientY - window.innerHeight / 2) * 100) / (window.innerHeight / 2)) * -1;
        const newPerspectiveOriginX = this.perspectiveOrigin.x + (xGap * this.perspectiveOrigin.maxGap) / 100;
        const newPerspectiveOriginY = this.perspectiveOrigin.y + (yGap * this.perspectiveOrigin.maxGap) / 100;
        document.documentElement.style.setProperty("--scenePerspectiveOriginX", `${newPerspectiveOriginX}`);
        document.documentElement.style.setProperty("--scenePerspectiveOriginY", `${newPerspectiveOriginY}`);
    }
    render() {
        return h("div", { class: "container" },
            h("div", { class: "scene" },
                h("slot", null)));
    }
    static get is() { return "midwest-scroll-z-root"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["scroll-z-root.css"]
    }; }
    static get styleUrls() { return {
        "$": ["scroll-z-root.css"]
    }; }
    static get properties() { return {
        "initialOriginX": {
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
            "attribute": "initial-origin-x",
            "reflect": false,
            "defaultValue": "50"
        },
        "initialOriginY": {
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
            "attribute": "initial-origin-y",
            "reflect": false,
            "defaultValue": "30"
        },
        "itemZ": {
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
            "attribute": "item-z",
            "reflect": false,
            "defaultValue": "10"
        },
        "cameraSpeed": {
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
            "attribute": "camera-speed",
            "reflect": false,
            "defaultValue": "150"
        },
        "cameraZ": {
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
            "attribute": "camera-z",
            "reflect": false,
            "defaultValue": "-1"
        },
        "scenePerspective": {
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
            "attribute": "scene-perspective",
            "reflect": false,
            "defaultValue": "1"
        }
    }; }
    static get states() { return {
        "distanceFromTop": {},
        "distanceFromBottom": {},
        "sections": {},
        "perspectiveOrigin": {}
    }; }
    static get methods() { return {
        "scatter": {
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
    static get listeners() { return [{
            "name": "scroll",
            "method": "moveCamera",
            "target": "window",
            "capture": false,
            "passive": true
        }, {
            "name": "mousemove",
            "method": "moveCameraAngle",
            "target": "window",
            "capture": false,
            "passive": true
        }]; }
}
