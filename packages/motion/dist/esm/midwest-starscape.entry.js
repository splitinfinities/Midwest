import { r as registerInstance, h, H as Host, g as getElement } from './index-1f198cf0.js';

const starscapeCss = ":host,:host *,:host *::before,:host *::after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block}midwest-starscape{contain:content;background:linear-gradient(50deg, var(--theme-base7), var(--theme-complement7), var(--theme-base7), var(--theme-complement7));background-size:400% 400%;position:absolute;top:0;left:0;bottom:0;right:0;z-index:-1;overflow:hidden}midwest-starscape .stars{position:absolute;height:200vh;width:200vw;top:-10vh;left:0;bottom:0;right:0;z-index:1;opacity:0.75;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAgMAAADQNkYNAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMACzOmUnwDAAABMklEQVR4Ae1ZB05FMQyrLIUNvZpZ97/COwLaCBN2Kur+Wqt7OqNNO5oiNC9laPU4KrtMgKjvsjD4bvvY17EqpaXwSOoxu0jyNxwXFPUOlZdKdJ1lRtTfzATgT9iLZgw3y9u/PwLKthMDb5+aT5UzLIQ2kgtioxwiSheaV4eNVDLhmxQN30uEpx7rFV02DMAf+WTYxtJ8N/sJyUJXIkcf5F08fyGV27Vllkoaw13V1E8bkuVbnsNSzzGVWEzp6RcchDmprRCf7xpDzp3CHZyY4V3fF6cwIaRIOOZt0+OV0CgjVh/2p8RvBu+wZNhwIzIuhLIOBq4RQ3mTUxzzuv//6KPEJ+oAzlaU4l0Y7OS7N4MJV18/lL9Xv39hKccetI2KqqbWKnr+Kri+Z66+vVvMqvRfAGkGHx/jJEqXAAAAAElFTkSuQmCC') 50% 50% / 100px 100px}midwest-starscape midwest-parallax-section:nth-of-type(1) .stars{opacity:0.25;left:17px}midwest-starscape midwest-parallax-section:nth-of-type(2) .stars{opacity:0.45;left:24px}";

const Starscape = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h(Host, null, h("midwest-parallax", { horizontal: true }, h("midwest-parallax-section", { speed: 5 }, h("div", { class: "stars" })), h("midwest-parallax-section", { speed: -10 }, h("div", { class: "stars" })), h("midwest-parallax-section", { speed: -4 }, h("div", { class: "stars" }))));
    }
    get element() { return getElement(this); }
};
Starscape.style = starscapeCss;

export { Starscape as midwest_starscape };
