import notes from './readme.md';
import { text, withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { html } from 'lit-html';
import { spreadProps } from '@open-wc/lit-helpers';

export default {
	title: "Common/Accordion",
	component: "midwest-accordion",
	decorators: [withKnobs, withA11y],
	notes: {
		markdown: notes,
	},
  argTypes: {
    content: { 
			defaultValue: "Hey there! Here's the content!",
			control: { type: 'text' } 
		},
    title: { 
			defaultValue: "Here's the title!",
			control: { type: 'text' } 
		},
  }
};

export const basic = ({ content, title, ...args }) => html`
<midwest-accordion ...="${spreadProps(args)}">
	<p slot="label">${title}</p>
	${content}
</midwest-accordion>`;