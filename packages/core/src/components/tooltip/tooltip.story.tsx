import notes from './readme.md';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { html } from 'lit-html';
import { spreadProps } from '@open-wc/lit-helpers';

export default {
  title: '@midwest-design/core/tooltip',
  component: 'midwest-tooltip',
  decorators: [withKnobs, withA11y],
  notes: {
    markdown: notes,
  },
  argTypes: {},
};

export const WebComponent = ({ ...args }) => html`<p class="relative"><midwest-tooltip ...="${spreadProps(args)}">Sup</midwest-tooltip></p>`;
