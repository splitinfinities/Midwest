import notes from './readme.md';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { html } from 'lit-html';

export default {
  title: '@midwest-design/core/Button',
  component: 'midwest-button',
  decorators: [withKnobs, withA11y],
  notes: {
    markdown: notes,
  },
  argTypes: {
    content: {
      defaultValue: 'Button!',
      control: { type: 'text' },
    },
  },
};

export const WebComponent = ({ content, ...args }) => html`<midwest-button>${content}</midwest-button>`;
