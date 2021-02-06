import notes from './readme.md';
import { text, withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { html } from 'lit-html';
import { spreadProps } from '@open-wc/lit-helpers';

export default {
  title: "Forms/Box",
  component: "midwest-accordion",
  decorators: [withKnobs, withA11y],
  notes: {
    markdown: notes,
  },
  argTypes: {
    focused: {
      control: { type: 'boolean' }
    },
    radio: {
      control: { type: 'boolean' }
    },
    checked: {
      control: { type: 'boolean' }
    },
    dark: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
  }
};

export const basic = ({ content, title, ...args }) => html`<midwest-box ...="${spreadProps(args)}"></midwest-box>`;