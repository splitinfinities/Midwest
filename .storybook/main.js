const path = require("path");
const glob = require("glob");
const packageJson = require("../package.json");

module.exports = {
  stories: ["../packages/**/src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
    "@storybook/addon-storysource",
  ],
  webpackFinal: (config) => {
    const distDir = path.resolve(__dirname, `../dist/${packageJson.name}`);
    const files = glob.sync(`${distDir}/**/*.{js,css}`, {
      absolute: true,
      ignore: ["**/*.esm.js"],
    });
    config.entry.push(...files);
    return config;
  },
};
