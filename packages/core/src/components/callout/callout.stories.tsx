import notes from './readme.md';
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { html } from 'lit-html';
import { spreadProps } from '@open-wc/lit-helpers';

export default {
	title: "Common/Callout",
	component: "midwest-callout",
	decorators: [withKnobs, withA11y],
	notes: {
		markdown: notes,
	},
  argTypes: {
    content: {
      defaultValue: "Button!",
			control: { type: 'text' } 
    },
    link: {
      defaultValue: "Button!",
			control: { type: 'text' } 
    }
  }
};

export const basic = ({ content, link, ...args }) => html`<midwest-callout ...="${spreadProps(args)}"><p>${content} <a href="#">${link}</a></p></midwest-callout>`;