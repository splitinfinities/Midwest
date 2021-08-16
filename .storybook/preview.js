/* global window */

import {
  configure,
  addDecorator,
  addParameters,
  setCustomElements,
} from "@storybook/web-components";

import audio from "../packages/audio/custom-elements.json";
import core from "../packages/core/custom-elements.json";
import device from "../packages/device/custom-elements.json";
import exportToFigma from "../packages/export-to-figma/custom-elements.json";
import forms from "../packages/forms/custom-elements.json";
import helpers from "../packages/helpers/custom-elements.json";
import media from "../packages/media/custom-elements.json";
import motion from "../packages/motion/custom-elements.json";

const newCore = {
  ...core,
  ...{
    tags: [
      ...core?.tags,
      ...audio?.tags,
      ...device?.tags,
      ...exportToFigma?.tags,
      ...forms?.tags,
      ...helpers?.tags,
      ...media?.tags,
      ...motion?.tags,
    ],
  },
};

setCustomElements(newCore);

export const parameters = {
  a11y: {
    element: "#root",
    config: {},
    options: {},
    manual: true,
  },
  docs: {
    inlineStories: false,
    iframeHeight: "200px",
  },
};
