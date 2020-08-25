import notes from './readme.md';
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { html } from 'lit-html';
import { spreadProps } from '@open-wc/lit-helpers';

export default {
	title: "Common/Button",
	component: "midwest-button",
	decorators: [withKnobs, withA11y],
	notes: {
		markdown: notes,
	},
  argTypes: {
    content: {
      defaultValue: "Button!",
			control: { type: 'text' } 
    }
  }
};

export const basic = ({ content, ...args }) => html`<midwest-button ...="${spreadProps(args)}">${content}</midwest-button>`;