import notes from './readme.md';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { html } from 'lit-html';
import { spreadProps } from '@open-wc/lit-helpers';

export default {
  title: '@midwest-design/core/layout',
  component: 'midwest-layout',
  decorators: [withKnobs, withA11y],
  notes: {
    markdown: notes,
  },
  argTypes: {},
};

export const WebComponent = ({ ...args }) => html`<midwest-layout ...="${spreadProps(args)}">
  <midwest-card></midwest-card>
  <midwest-card></midwest-card>
  <midwest-card></midwest-card>
</midwest-layout>`;
