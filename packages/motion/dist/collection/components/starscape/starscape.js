import { Component, Element, h, Host } from '@stencil/core';
export class Starscape {
    render() {
        return h(Host, null,
            h("midwest-parallax", { horizontal: true },
                h("midwest-parallax-section", { speed: 5 },
                    h("div", { class: "stars" })),
                h("midwest-parallax-section", { speed: -10 },
                    h("div", { class: "stars" })),
                h("midwest-parallax-section", { speed: -4 },
                    h("div", { class: "stars" }))));
    }
    static get is() { return "midwest-starscape"; }
    static get originalStyleUrls() { return {
        "$": ["starscape.css"]
    }; }
    static get styleUrls() { return {
        "$": ["starscape.css"]
    }; }
    static get elementRef() { return "element"; }
}
