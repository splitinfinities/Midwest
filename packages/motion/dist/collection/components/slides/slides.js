import { Component, Element, Prop, State, h, Host, Listen } from '@stencil/core';
import "ionicons";
export class Slides {
    constructor() {
        /**
         * Show or hide the pager
         */
        this.pager = false;
        /**
         * Show or hide the pager
         */
        this.padding = "1rem";
        /**
         * Show or hide the pager
         */
        this.active = [];
        /**
         * Show or hide the pager
         */
        this.first = true;
        /**
         * Show or hide the pager
         */
        this.last = false;
    }
    componentWillLoad() {
        this.slides = this.el.querySelectorAll("midwest-slide");
        this.slides.forEach((slide, index) => {
            slide.setAttribute("tabIndex", "0");
            slide.slideId = index;
        });
    }
    scrollToSlide(element) {
        element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    next() {
        const lastVisible = Array.from(this.el.shadowRoot.querySelectorAll('.pager > button.visible'));
        const element = lastVisible[lastVisible.length - 1].nextSibling;
        // @ts-ignore
        element.click();
    }
    previous() {
        const firstVisible = Array.from(this.el.shadowRoot.querySelectorAll('.pager > button.visible'));
        const element = firstVisible[0].previousSibling;
        // @ts-ignore
        element.click();
    }
    handleSwitched(e) {
        if (this.pager) {
            if (e.detail.visible) {
                this.active = [...this.active, e.detail.slideId];
            }
            else {
                this.active = this.active.filter((item) => {
                    return item !== e.detail.slideId;
                });
            }
        }
        if (e.detail.visible) {
            if (e.detail.slideId === 0) {
                this.first = true;
            }
            else {
                this.first = false;
            }
            if (e.detail.slideId === (this.slides.length - 1)) {
                this.last = true;
            }
            else {
                this.last = false;
            }
        }
    }
    render() {
        return h(Host, { tabIndex: 0, style: { '--padding': this.padding } },
            h("button", { class: `nav prev ${this.first ? "hide" : ""}`, onClick: this.previous.bind(this) },
                h("ion-icon", { name: "arrow-round-back" })),
            h("button", { class: `nav next ${this.last ? "hide" : ""}`, onClick: this.next.bind(this) },
                h("ion-icon", { name: "arrow-round-forward" })),
            this.pager && this.slides && h("div", { class: "pager" }, Array.from(this.slides).map((e, i) => h("button", { onClick: () => this.scrollToSlide(e), class: this.active.includes(i) ? "visible" : "" },
                "Slide ",
                i))),
            h("div", { class: "wrapper" },
                h("slot", null)));
    }
    static get is() { return "midwest-slides"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["slides.css"]
    }; }
    static get styleUrls() { return {
        "$": ["slides.css"]
    }; }
    static get properties() { return {
        "pager": {
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
                "text": "Show or hide the pager"
            },
            "attribute": "pager",
            "reflect": false,
            "defaultValue": "false"
        },
        "padding": {
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
                "text": "Show or hide the pager"
            },
            "attribute": "padding",
            "reflect": false,
            "defaultValue": "\"1rem\""
        }
    }; }
    static get states() { return {
        "active": {},
        "first": {},
        "last": {}
    }; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "switched",
            "method": "handleSwitched",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
