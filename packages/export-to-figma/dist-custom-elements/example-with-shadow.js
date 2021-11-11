/*!
 * (C) Split Infinities https://splitinfinities.com - MIT License
 */
import { h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './export-to-figma2.js';

const withShadowCss = ":host,:host *,:host *::before,:host *::after{box-sizing:border-box}:host{display:inline-block}:host{display:block;background:red}:host p{color:yellow}:host ::slotted(p){color:pink !important}";

let WithShadow = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return h(Host, null, h("p", null, "Inner text content"), h("slot", null, h("p", null, "Fallback content")), h("export-to-figma", null));
  }
  static get style() { return withShadowCss; }
};
WithShadow = /*@__PURE__*/ proxyCustomElement(WithShadow, [1, "example-with-shadow"]);
function defineCustomElement$1() {
  const components = ["example-with-shadow", "export-to-figma"];
  components.forEach(tagName => { switch (tagName) {
    case "example-with-shadow":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, WithShadow);
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

const ExampleWithShadow = WithShadow;
const defineCustomElement = defineCustomElement$1;

export { ExampleWithShadow, defineCustomElement };

//# sourceMappingURL=example-with-shadow.js.map