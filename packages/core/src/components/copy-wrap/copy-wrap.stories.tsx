import notes from './readme.md';
import { text, withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { html } from 'lit-html';
import { spreadProps } from '@open-wc/lit-helpers';

export default {
	title: "@midwest-design/core/accordion",
	component: "copy-wrap",
	decorators: [withKnobs, withA11y],
	notes: {
		markdown: notes,
	},
	argTypes: {

	}
};

export const basic = ({ ...args }) => html`
<copy-wrap  ...="${spreadProps(args)}">
<h1>nice</h1>
<p>siiick</p>
</copy-wrap>`;