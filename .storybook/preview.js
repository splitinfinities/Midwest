/* global window */

import {
  configure,
  addDecorator,
  addParameters,
  setCustomElements,
} from '@storybook/web-components';

import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";

import audio from '../packages/audio/custom-elements.json';
import core from '../packages/core/custom-elements.json';
import device from '../packages/device/custom-elements.json';
import exportToFigma from '../packages/export-to-figma/custom-elements.json';
import forms from '../packages/forms/custom-elements.json';
import helpers from '../packages/helpers/custom-elements.json';
import media from '../packages/media/custom-elements.json';
import motion from '../packages/motion/custom-elements.json';

setCustomElements({
  ...audio,
  ...core,
  ...device,
  ...exportToFigma,
  ...forms,
  ...helpers,
  ...media,
  ...motion,
});

addDecorator(withKnobs);
addDecorator(withA11y);

addParameters({
  docs: {
    inlineStories: false,
    iframeHeight: '200px',
  },
});

// force full reload to not reregister web components
const req = [
  require.context('../packages/audio/src', true, /\.src\.(tsx|mdx)$/),
  require.context('../packages/core/src', true, /\.src\.(tsx|mdx)$/),
  require.context('../packages/device/src', true, /\.src\.(tsx|mdx)$/),
  require.context('../packages/export-to-figma/src', true, /\.src\.(tsx|mdx)$/),
  require.context('../packages/forms/src', true, /\.src\.(tsx|mdx)$/),
  require.context('../packages/helpers/src', true, /\.src\.(tsx|mdx)$/),
  require.context('../packages/media/src', true, /\.src\.(tsx|mdx)$/),
  require.context('../packages/motion/src', true, /\.src\.(tsx|mdx)$/)
];

configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
