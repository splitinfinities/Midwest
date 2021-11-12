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
  namespace: 'forms',
  devServer: {
    openBrowser: false,
    port: 3334,
  },
  outputTargets: [
    ...typicalStencilConfig.outputTargets,
    ...frameworkBindings('forms', [
      'animate-presence',
      'animated-route-switch',
      'ion-icon',
      'copy-wrap',
      'midwest-accordion',
      'midwest-avatar',
      'midwest-breadcrumb',
      'midwest-breadcrumbs',
      'midwest-button',
      'midwest-calendar-date',
      'midwest-callout',
      'midwest-card',
      'midwest-content',
      'midwest-dropdown',
      'midwest-grid',
      'midwest-group',
      'midwest-group-overflow',
      'midwest-label',
      'midwest-layout',
      'midwest-message',
      'midwest-pagination',
      'midwest-progress',
      'midwest-step',
      'midwest-steps',
      'midwest-tab',
      'midwest-tabs',
      'midwest-tag',
      'midwest-theme',
      'midwest-time',
      'midwest-tooltip',
      'midwest-unit',
    ]),
  ],

  plugins: [
    postcss({
      injectGlobalPaths: ['src/css/shared.css'],
      plugins: [postcssImport, autoprefixer, ...(process.env.NODE_ENV === 'production' ? [purgecss, require('cssnano')] : [])],
    }),
  ],
};
