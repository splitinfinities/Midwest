import { Config } from '@stencil/core';
import { postcss } from "@stencil/postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import designTokenFunction from "postcss-design-token-function";
import { colors, typicalStencilConfig, frameworkBindings } from '@midwest-design/common';
import postcssImport from 'postcss-import';

export const config: Config = {
  ...(typicalStencilConfig as Config),
  namespace: 'core',
  globalStyle: './src/css/entry.css',
  globalScript: './src/js/entry.ts',
  devServer: {
    openBrowser: false,
    port: 3333,
  },
  outputTargets: [...typicalStencilConfig.outputTargets, ...frameworkBindings('core', ['animate-presence', 'animated-route-switch', 'ion-icon'])],
  plugins: [
    postcss({
      injectGlobalPaths: ['src/css/shared.css'],
      plugins: [
        postcssImport,
        designTokenFunction({
          name: 'color',
          data: colors,
          base: 0,
        }),
        tailwindcss('tailwind.config.js'),
        autoprefixer,
        require('cssnano'),
      ],
    }),
  ],
};
