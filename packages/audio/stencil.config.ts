import { Config } from '@stencil/core';
import { postcss } from "@stencil/postcss";
import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import";
import { frameworkBindings, typicalStencilConfig } from '@midwest-design/common';

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.tsx', './src/index.html', './src/**/*.css', , './src/**/*.scss'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

export const config: Config = {
  ...typicalStencilConfig,
  namespace: 'audio',
  devServer: {
    openBrowser: false,
    port: 3336,
  },
  outputTargets: [...typicalStencilConfig.outputTargets, ...frameworkBindings('audio')],

  plugins: [
    postcss({
      injectGlobalPaths: ['src/css/shared.css'],
      plugins: [postcssImport, autoprefixer, ...(process.env.NODE_ENV === 'production' ? [purgecss, require('cssnano')] : [])],
    }),
  ],
};
