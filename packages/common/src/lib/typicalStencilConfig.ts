import { generateJsonDocs } from './customElementDocGenerator';
import type { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const frameworkBindings = (name: string): any[] => {
  return [
    angularOutputTarget({
      componentCorePackage: `@midwest-design/${name}`,
      directivesProxyFile: `../angular/projects/midwest/src/lib/stencil-bindings/midwest-${name}-components.ts`,
    }),
  ]
} 

export const typicalStencilConfig: Config = {
  preamble: '(C) Split Infinities https://splitinfinities.com - MIT License',
  taskQueue: 'async',
  sourceMap: true,
  outputTargets: [
    { type: 'dist', esmLoaderPath: '../loader' },
    { type: 'dist-custom-elements', autoDefineCustomElements: true, dir: "./dist/custom-elements" },
    {
      type: 'dist-custom-elements-bundle',
      dir: "./dist/dist-custom-elements-bundle"
    },
    {
      type: 'docs-vscode',
      file: './docs/vscode/html.html-data.json',
      sourceCodeBaseUrl: 'https://github.com/splitinfinities/midwest/'
    },
    { type: 'docs-readme', dir: './docs' },
    { type: 'docs-readme' },
    { type: 'docs-json', file: './docs/documentation.json' },
    { type: 'www', serviceWorker: null },
    { type: 'stats', file: './docs/stats.json' },
    {
      type: 'custom',
      generator: generateJsonDocs,
      name: 'custom-element-docs'
    }
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
    coverageDirectory: './tests/',
    coverageThreshold: {
      global: {
        branches: 90,
        functions: 80,
        lines: 80,
        statements: 70
      }
    },
    coverageReporters: ['lcov', 'json-summary', 'text']
  }
};
