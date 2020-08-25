import notes from './readme.md';
import { text, withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { html } from 'lit-html';
import { spreadProps } from '@open-wc/lit-helpers';

export default {
	title: "Common/Breadcrumb",
	component: "midwest-breadcrumb",
	decorators: [withKnobs, withA11y],
	notes: {
		markdown: notes,
	},
  argTypes: {
    title: {
      defaultValue: "Breadcrumb!",
			control: { type: 'text' } 
    }
  }
};

export const basic = ({ title, ...args }) => html`<midwest-breadcrumb ...="${spreadProps(args)}">${title}</midwest-breadcrumb>`;