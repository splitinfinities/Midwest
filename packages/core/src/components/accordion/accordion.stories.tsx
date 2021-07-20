import notes from './readme.md';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { html } from 'lit-html';

export default {
  title: '@midwest-design/core/accordion',
  component: 'midwest-accordion',
  decorators: [withKnobs, withA11y],
  notes: {
    markdown: notes,
  },
  argTypes: {
    content: {
      defaultValue: "Hey there! Here's the content!",
      control: { type: 'text' },
    },
    title: {
      defaultValue: "Here's the title!",
      control: { type: 'text' },
    },
  },
};

export const basic = ({ content, title, ...args }) => html`<div>
  <midwest-accordion>
    <p slot="label">${title}</p>
    ${content}
  </midwest-accordion>
</div>`;
