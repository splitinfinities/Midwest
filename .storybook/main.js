const path = require("path");
const glob = require("glob");
const packageJson = require("../package.json");

module.exports = {
  stories: [`${__dirname}/../packages/**/src/**/*.stories.@(tsx|mdx)`],
  addons: ["@storybook/addon-essentials"],
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