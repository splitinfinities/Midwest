import notes from './readme.md';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { html } from 'lit-html';
import { spreadProps } from '@open-wc/lit-helpers';

export default {
  title: '@midwest-design/core/theme',
  component: 'midwest-theme',
  decorators: [withKnobs, withA11y],
  notes: {
    markdown: notes,
  },
  argTypes: {},
};

export const WebComponent = ({ ...args }) => html`<midwest-theme ...="${spreadProps(args)}">
  <midwest-input label="nice"></midwest-input>
  <midwest-input label="nice" type="search"></midwest-input>
  <midwest-button>nice</midwest-button>
  <midwest-tabs>
    <midwest-tab>One</midwest-tab>
    <midwest-tab>Two</midwest-tab>
    <midwest-tab>Three</midwest-tab>
  </midwest-tabs>
</midwest-theme>`;
