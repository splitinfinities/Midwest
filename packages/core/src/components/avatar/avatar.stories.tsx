import notes from './readme.md';
import { storyTemplate } from '@midwest-design/common';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { html } from 'lit-html';
import { spreadProps } from '@open-wc/lit-helpers';

export default {
  title: '@midwest-design/core/avatar',
  component: 'midwest-avatar',
  decorators: [withKnobs, withA11y],
  notes: {
    markdown: notes,
  },
  argTypes: {
    name: {
      defaultValue: 'William Riley',
    },
    processing: {
      defaultValue: false,
    },
    shape: {
      defaultValue: 'default',
      control: {
        type: 'select',
        options: ['default', 'circle', 'rectangle', 'star'],
      },
    },
    color: {
      defaultValue: 'red',
      control: {
        type: 'select',
        options: ['auto', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'magenta'],
      },
    },
  },
};

export const basic = args => html`<midwest-avatar ...="${spreadProps(args)}"></midwest-avatar>`;
