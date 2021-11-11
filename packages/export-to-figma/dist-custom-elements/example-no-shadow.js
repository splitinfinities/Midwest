/*!
 * (C) Split Infinities https://splitinfinities.com - MIT License
 */
import { h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './export-to-figma2.js';

const noShadowCss = ":host,:host *,:host *::before,:host *::after{box-sizing:border-box}:host{display:inline-block}example-no-shadow{display:block}example-no-shadow p{color:blue}example-no-shadow slot-fb p{color:green}";

let NoShadow = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return h(Host, null, h("p", null, "Inner text content"), h("slot", null, h("p", null, "Fallback content")), h("export-to-figma", null));
  }
  static get style() { return noShadowCss; }
};
NoShadow = /*@__PURE__*/ proxyCustomElement(NoShadow, [4, "example-no-shadow"]);
function defineCustomElement$1() {
  const components = ["example-no-shadow", "export-to-figma"];
  components.forEach(tagName => { switch (tagName) {
    case "example-no-shadow":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NoShadow);
      }
      break;
    case "export-to-figma":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}
defineCustomElement$1();

const ExampleNoShadow = NoShadow;
const defineCustomElement = defineCustomElement$1;

export { ExampleNoShadow, defineCustomElement };

//# sourceMappingURL=example-no-shadow.js.map