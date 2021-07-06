import notes from './readme.md';
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { html } from 'lit-html';

export default {
  title: "@midwest/core/tabs",
  component: "midwest-tabs",
  decorators: [withKnobs, withA11y],
  notes: {
    markdown: notes,
  },
  argTypes: {}
};

export const basic = ({ content, title, ...args }) => html`<midwest-tabs>
	<midwest-tab>one</midwest-tab>
	<midwest-tab>two</midwest-tab>
	<midwest-tab>three</midwest-tab>
</midwest-tabs>`;
