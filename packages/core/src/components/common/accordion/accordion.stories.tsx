import { text, withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { html } from "lit-html";

export default {
	title: "UI|Accordion",
	component: "midwest-accordion",
	decorators: [withKnobs, withA11y]
};

export const Default = () => {
	const content = text("Inner Content", "nice");
	const title = text("Title", "Title");
	const tag = text("Tag", "New");

	return html`
		<midwest-accordion>
			<p slot="label">${title} <midwest-tag size='tiny'>${tag}</midwest-tag></p>
			${content}
		</midwest-accordion>
  `;
};
