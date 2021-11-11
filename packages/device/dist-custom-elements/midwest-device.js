/*!
 * (C) Split Infinities https://splitinfinities.com - MIT License
 */
import { attachShadow, h, Host, getAssetPath, proxyCustomElement } from '@stencil/core/internal/client';

const deviceCss = ":host,:host *,:host *::before,:host *::after{box-sizing:border-box}:host{display:inline-block}:host{display:block;position:relative}:host .device{vertical-align:top;max-width:100%;height:auto}:host .device-content-1,:host .device-content-2,:host .device-content-3{position:absolute;display:block;top:0;left:0;right:0;bottom:0;width:0;height:0;overflow:hidden}:host ::slotted(*){width:100%;height:100%;overflow:auto;display:block}:host([frame=\"apple-tv\"]),:host([frame=\"apple-tv-in-app\"]){max-width:1026px}:host([frame=\"apple-tv\"]) .device-content-1,:host([frame=\"apple-tv\"]) .device-content-2,:host([frame=\"apple-tv\"]) .device-content-3{top:0.6%;left:0.35%;width:93.6%;height:84.3%}:host([frame=\"apple-tv-in-app\"]) .device-content-1{top:0.6%;left:0.35%;width:93.6%;height:56.1%}:host([frame=\"apple-tv-in-app\"]) .device-content-2{top:57.3%;left:20.55%;width:18.1%;height:17.4%;border-radius:6px}:host([frame=\"apple-watch-42-black\"]),:host([frame=\"apple-watch-42-white\"]){max-width:512px}:host([frame=\"apple-watch-42-black\"]) .device-content-1,:host([frame=\"apple-watch-42-white\"]) .device-content-1{top:28%;left:18.35%;width:61.1%;height:44%}:host([frame=\"apple-watch-44-black\"]),:host([frame=\"apple-watch-44-white\"]){max-width:512px}:host([frame=\"apple-watch-44-black\"]) .device-content-1,:host([frame=\"apple-watch-44-white\"]) .device-content-1{top:24.85%;left:12.95%;width:72%;height:50.5%}:host([frame=\"imac\"]),:host([frame=\"imac-pro\"]){max-width:1280px}:host([frame=\"imac\"]) .device-content-1,:host([frame=\"imac-pro\"]) .device-content-1{top:5.35%;left:4.55%;width:91%;height:63.6%}:host([frame=\"ipad-pro-portrait\"]){max-width:1024px}:host([frame=\"ipad-pro-portrait\"]) .device-content-1{top:3.95%;left:5.15%;width:89.7%;height:92%}:host([frame=\"ipad-pro-landscape\"]){max-width:1366px}:host([frame=\"ipad-pro-landscape\"]) .device-content-1{top:5.25%;left:4.05%;width:91.9%;height:89.6%}:host([frame=\"iphone-8-silver\"]),:host([frame=\"iphone-8-spacegray\"]){max-width:375px}:host([frame=\"iphone-8-silver\"]) .device-content-1,:host([frame=\"iphone-8-spacegray\"]) .device-content-1{top:13.05%;left:9.35%;width:81.4%;height:74.1%}:host([frame=\"iphone-8-plus-silver\"]),:host([frame=\"iphone-8-plus-spacegray\"]){max-width:414px}:host([frame=\"iphone-8-plus-silver\"]) .device-content-1,:host([frame=\"iphone-8-plus-spacegray\"]) .device-content-1{top:12.15%;left:7.75%;width:84.5%;height:75.7%}:host([frame=\"iphone-xs\"]){max-width:375px}:host([frame=\"iphone-xs\"]) .device-content-1{top:2.95%;left:6.55%;width:86.9%;height:93.9%;border-radius:4.3em}@supports ((-webkit-mask-size: contain) or (mask-size: contain)) or (-webkit-mask-size:contain){:host([frame=\"iphone-xs\"]) .device-content-1{border-radius:0;-webkit-mask-image:var(--cutout);mask-image:var(--cutout);-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center}}:host([frame=\"iphone-xs-max\"]){max-width:414px}:host([frame=\"iphone-xs-max\"]) .device-content-1{top:2.65%;left:5.95%;width:88.1%;height:94.4%;border-radius:4.3em}@supports ((-webkit-mask-size: contain) or (mask-size: contain)) or (-webkit-mask-size:contain){:host([frame=\"iphone-xs-max\"]) .device-content-1{border-radius:0;-webkit-mask-image:var(--cutout);mask-image:var(--cutout);-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center}}:host([frame=\"ipod-touch-portrait-blue\"]),:host([frame=\"ipod-touch-portrait-silver\"]){max-width:320px}:host([frame=\"ipod-touch-portrait-blue\"]) .device-content-1,:host([frame=\"ipod-touch-portrait-silver\"]) .device-content-1{top:14.85%;left:8.75%;width:82.5%;height:70.3%}:host([frame=\"ipod-touch-landscape-blue\"]),:host([frame=\"ipod-touch-landscape-silver\"]){max-width:568px}:host([frame=\"ipod-touch-landscape-blue\"]) .device-content-1,:host([frame=\"ipod-touch-landscape-silver\"]) .device-content-1{top:8.95%;left:14.95%;width:70.2%;height:82.2%}:host([frame=\"macbook-air\"]){max-width:1440px}:host([frame=\"macbook-air\"]) .device-content-1{top:7.85%;left:13.95%;width:72.1%;height:78.3%}:host([frame=\"macbook-pro\"]){max-width:1440px}:host([frame=\"macbook-pro\"]) .device-content-1{top:7.15%;left:12.05%;width:76%;height:80.4%}";

let Devices = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    /**
     * The Device Name
     */
    this.frame = "macbook-pro";
  }
  render() {
    return h(Host, { style: { "--cutout": `url("${getAssetPath('.')}/vendor/${this.frame}-cutout.svg")` } }, h("img", { src: `${getAssetPath('.')}/vendor/${this.frame}${this.retina ? "@2x" : ""}.png`, class: "device" }), h("div", { class: "device-content-1" }, h("slot", null)), h("div", { class: "device-content-2" }, h("slot", { name: "secondary" })), h("div", { class: "device-content-3" }, h("slot", { name: "tertiary" })));
  }
  static get assetsDirs() { return ["vendor"]; }
  static get style() { return deviceCss; }
};
Devices = /*@__PURE__*/ proxyCustomElement(Devices, [1, "midwest-device", {
    "frame": [513],
    "retina": [4]
  }]);
function defineCustomElement$1() {
  const components = ["midwest-device"];
  components.forEach(tagName => { switch (tagName) {
    case "midwest-device":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Devices);
      }
      break;
  } });
}
defineCustomElement$1();

const MidwestDevice = Devices;
const defineCustomElement = defineCustomElement$1;

export { MidwestDevice, defineCustomElement };

//# sourceMappingURL=midwest-device.js.map