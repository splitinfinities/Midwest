import notes from './readme.md';
import { text, withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { html } from 'lit-html';
import { spreadProps } from '@open-wc/lit-helpers';

export default {
	title: "Common/Calendar/Date",
	component: "midwest-calendar-date",
	decorators: [withKnobs, withA11y],
	notes: {
		markdown: notes,
	},
  argTypes: {
  }
};

export const basic = ({ content, ...args }) => html`<midwest-calendar-date ...="${spreadProps(args)}"></midwest-calendar-date>`;