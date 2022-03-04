import notes from './readme.md';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { html } from 'lit-html';
import { spreadProps } from '@open-wc/lit-helpers';

export default {
  title: '@midwest-design/core/sidebar',
  component: 'midwest-sidebar',
  decorators: [withKnobs, withA11y],
  notes: {
    markdown: notes,
  },
  argTypes: {
    content: {
      type: 'text',
      defaultValue: 'Default text.',
    },
  },
};

export const WebComponent = ({ content, title, ...args }) => html`<midwest-sidebar ...="${spreadProps(args)}"><p>${content}</p></midwest-sidebar>`;
