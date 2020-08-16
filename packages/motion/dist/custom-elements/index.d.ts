/* motion custom elements bundle */

import { Components } from "../types/components";

interface MidwestAnimateText extends Components.MidwestAnimateText, HTMLElement {}
export const MidwestAnimateText: {
  prototype: MidwestAnimateText;
  new (): MidwestAnimateText;
};

interface MidwestAutoScroll extends Components.MidwestAutoScroll, HTMLElement {}
export const MidwestAutoScroll: {
  prototype: MidwestAutoScroll;
  new (): MidwestAutoScroll;
};

interface MidwestBlur extends Components.MidwestBlur, HTMLElement {}
export const MidwestBlur: {
  prototype: MidwestBlur;
  new (): MidwestBlur;
};

interface MidwestFollow extends Components.MidwestFollow, HTMLElement {}
export const MidwestFollow: {
  prototype: MidwestFollow;
  new (): MidwestFollow;
};

interface MidwestKeyframes extends Components.MidwestKeyframes, HTMLElement {}
export const MidwestKeyframes: {
  prototype: MidwestKeyframes;
  new (): MidwestKeyframes;
};

interface MidwestParallax extends Components.MidwestParallax, HTMLElement {}
export const MidwestParallax: {
  prototype: MidwestParallax;
  new (): MidwestParallax;
};

interface MidwestParallaxSection extends Components.MidwestParallaxSection, HTMLElement {}
export const MidwestParallaxSection: {
  prototype: MidwestParallaxSection;
  new (): MidwestParallaxSection;
};

interface MidwestScatter extends Components.MidwestScatter, HTMLElement {}
export const MidwestScatter: {
  prototype: MidwestScatter;
  new (): MidwestScatter;
};

interface MidwestScrollZRoot extends Components.MidwestScrollZRoot, HTMLElement {}
export const MidwestScrollZRoot: {
  prototype: MidwestScrollZRoot;
  new (): MidwestScrollZRoot;
};

interface MidwestScrollZSection extends Components.MidwestScrollZSection, HTMLElement {}
export const MidwestScrollZSection: {
  prototype: MidwestScrollZSection;
  new (): MidwestScrollZSection;
};

interface MidwestSlide extends Components.MidwestSlide, HTMLElement {}
export const MidwestSlide: {
  prototype: MidwestSlide;
  new (): MidwestSlide;
};

interface MidwestSlides extends Components.MidwestSlides, HTMLElement {}
export const MidwestSlides: {
  prototype: MidwestSlides;
  new (): MidwestSlides;
};

interface MidwestStarscape extends Components.MidwestStarscape, HTMLElement {}
export const MidwestStarscape: {
  prototype: MidwestStarscape;
  new (): MidwestStarscape;
};

interface MidwestStory extends Components.MidwestStory, HTMLElement {}
export const MidwestStory: {
  prototype: MidwestStory;
  new (): MidwestStory;
};

/**
 * Utility to define all custom elements within this package using the tag name provided in the component's source. 
 * When defining each custom element, it will also check it's safe to define by:
 *
 * 1. Ensuring the "customElements" registry is available in the global context (window).
 * 2. The component tag name is not already defined.
 *
 * Use the standard [customElements.define()](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) 
 * method instead to define custom elements individually, or to provide a different tag name.
 */
export declare const defineCustomElements: (opts?: any) => void;

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bunding, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export * from '../types';
