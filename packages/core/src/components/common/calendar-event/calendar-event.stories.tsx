import notes from './readme.md';
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { html } from 'lit-html';
import { spreadProps } from '@open-wc/lit-helpers';

export default {
	title: "Common/Calendar/Event",
	component: "midwest-calendar-event",
	decorators: [withKnobs, withA11y],
	notes: {
		markdown: notes,
	},
  argTypes: {

  }
};

export const basic = ({ ...args }) => html`<midwest-calendar>
<midwest-calendar-event  ...="${spreadProps(args)}"></midwest-calendar-event>
</midwest-calendar>`;