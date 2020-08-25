import notes from './readme.md';
import { text, withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { html } from 'lit-html';
import { spreadProps } from '@open-wc/lit-helpers';

export default {
	title: "Common/Card",
	component: "midwest-card",
	decorators: [withKnobs, withA11y],
	notes: {
		markdown: notes,
	},
  argTypes: {
    front: {
      defaultValue: `<h6 class="text-red-5">Context</h6><h1>Nice Stuff</h1><p class="text-gray-9">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad saepe quia quos voluptatem voluptatibus error quo enim a, nihil accusantium fugiat sapiente corrupti deserunt exercitationem suscipit. Quis temporibus accusantium molestias.</p>`,
			control: { type: 'text' } 
    },
    back: {
      defaultValue: "Back",
			control: { type: 'text' } 
    }
  }
};

export const basic = ({ front, back, ...args }) => html`<midwest-card ...="${spreadProps(args)}">
  <section .innerHTML=${front}></section>
  <section slot="back" .innerHTML=${back}></section>
</midwest-card>`;

export const full = ({ front, back, ...args }) => html`<midwest-card ...="${spreadProps(args)}" style="max-width: 30rem;" class="m-auto">
  <header class="bg-gray-1 p-0">
    <img src="https://source.unsplash.com/random/300x300" class="w-full h-full" />
  </header>
  <section .innerHTML=${front}></section>
  <footer class="bg-gray-1">
    <h6 class="text-red-5">Context</h6><p class="text-gray-9">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
  </footer>
  <header slot="back" class="bg-gray-1">
    <h6>back header</h6>
  </header>
  <section slot="back" .innerHTML=${back}></section>
  <footer slot="back" class="bg-gray-1">
    <h6 class="text-red-5">Context</h6><p class="text-gray-9">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
  </footer>
</midwest-card>`

export const headers_footers = ({ front, back, ...args }) => html`<midwest-card ...="${spreadProps(args)}">
  <header>
    <h6>Header</h6>
  </header>
  <section .innerHTML=${front}></section>
  <footer>
    <h6>Footer</h6>
  </footer>
  <header slot="back">
    <h6>Back Header</h6>
  </header>
  <section slot="back" .innerHTML=${back}></section>
  <footer slot="back">
    <h6>Back Footer</h6>
  </footer>
</midwest-card>`