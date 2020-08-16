'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4bd31256.js');
const patch = require('./patch-0879b66d.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patch.patchEsm().then(() => {
  return index.bootstrapLazy([["midwest-starscape.cjs",[[0,"midwest-starscape"]]],["midwest-slides.cjs",[[1,"midwest-slides",{"pager":[4],"padding":[1],"active":[32],"first":[32],"last":[32]},[[0,"switched","handleSwitched"]]]]],["midwest-animate-text.cjs",[[0,"midwest-animate-text",{"delay":[2],"duration":[2],"method":[1],"words":[4],"phrase":[4],"onlyIn":[4,"only-in"],"letters":[32],"originalText":[32],"incomingHTML":[32],"in":[64],"out":[64]}]]],["midwest-auto-scroll.cjs",[[0,"midwest-auto-scroll",{"speed":[2],"startPosition":[2,"start-position"],"loop":[4],"autoplay":[4],"timeout":[32],"play":[64],"stop":[64]}]]],["midwest-blur.cjs",[[4,"midwest-blur",{"vertical":[1538],"horizontal":[1538]}]]],["midwest-follow.cjs",[[1,"midwest-follow",{"type":[1],"distance":[2],"padding":[2]}]]],["midwest-keyframes.cjs",[[1,"midwest-keyframes",{"src":[1],"width":[2],"height":[2],"frame":[514]}]]],["midwest-scatter.cjs",[[1,"midwest-scatter",{"float":[516],"min":[2],"max":[2],"sizes":[4],"colors":[4]}]]],["midwest-scroll-z-root.cjs",[[1,"midwest-scroll-z-root",{"initialOriginX":[2,"initial-origin-x"],"initialOriginY":[2,"initial-origin-y"],"itemZ":[2,"item-z"],"cameraSpeed":[2,"camera-speed"],"cameraZ":[2,"camera-z"],"scenePerspective":[2,"scene-perspective"],"distanceFromTop":[32],"distanceFromBottom":[32],"sections":[32],"perspectiveOrigin":[32],"scatter":[64]},[[9,"scroll","moveCamera"],[9,"mousemove","moveCameraAngle"]]]]],["midwest-scroll-z-section.cjs",[[0,"midwest-scroll-z-section"]]],["midwest-slide.cjs",[[4,"midwest-slide",{"slideId":[2,"slide-id"],"width":[1],"swiper":[32],"visible":[32]}]]],["midwest-story.cjs",[[0,"midwest-story",{"target":[1]}]]],["ion-icon.cjs",[[1,"ion-icon",{"mode":[1025],"color":[1],"ariaLabel":[1537,"aria-label"],"ios":[1],"md":[1],"flipRtl":[4,"flip-rtl"],"name":[1],"src":[1],"icon":[8],"size":[1],"lazy":[4],"svgContent":[32],"isVisible":[32]}]]],["midwest-parallax_2.cjs",[[4,"midwest-parallax",{"center":[4],"horizontal":[4],"easeBoxes":[32]}],[0,"midwest-parallax-section",{"speed":[514]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
