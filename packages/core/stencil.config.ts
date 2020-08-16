import { Config } from '@stencil/core';
import { postcss } from "@stencil/postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import designTokenFunction from "postcss-design-token-function";
import { colors, generateJsonDocs } from "@midwest-design/common";
import postcssImport from "postcss-import";

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.tsx', './src/index.html', './src/**/*.css', , './src/**/*.scss'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

export const config: Config = {
  namespace: 'core',
  preamble: '(C) Split Infinities https://splitinfinities.com - MIT License',
  globalStyle: "./src/css/entry.css",
  globalScript: "./src/js/entry.ts",
  taskQueue: 'async',
  devServer: {
    openBrowser: false,
    port: 3333,
  },
  outputTargets: [
    { type: 'dist', esmLoaderPath: '../loader' },
    { type: 'dist-custom-elements-bundle' },
    { type: "docs-vscode", file: './docs/vscode/html.html-data.json', sourceCodeBaseUrl: 'https://github.com/splitinfinities/midwest/' },
    { type: 'docs-readme', dir: "./docs" },
    { type: "docs-json", file: "./docs/documentation.json" },
    { type: 'www', serviceWorker: null },
    { type: "stats", file: "./docs/stats.json" },
    {
      type: "custom",
      generator: generateJsonDocs,
      name: "custom-element-docs"
    },
  ],
  plugins: [
    postcss({
      injectGlobalPaths: [
        'src/css/shared.css',
      ],
      plugins: [
        postcssImport,
        designTokenFunction({
          name: "color",
          data: colors,
          base: 0
        }),
        tailwindcss("tailwind.config.js"),
        autoprefixer,
        ...(process.env.NODE_ENV === "production"
          ? [purgecss, require("cssnano")]
          : []),
      ]
    })
  ],
  testing: {
    emulate: [
      { viewport: { width: 320, height: 640 } },
      { viewport: { width: 720, height: 1000 } },
      { viewport: { width: 1400, height: 1200 } }
    ],
    verbose: false,
    collectCoverage: true,
    notify: true,
    coverageDirectory: "./tests/",
    coverageThreshold: {
      global: {
        branches: 90,
        functions: 80,
        lines: 80,
        statements: 70
      }
    },
    coverageReporters: [
      "lcov",
      "json-summary",
      "text",
    ]
  },
};
