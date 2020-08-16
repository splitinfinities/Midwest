import notes from './readme.md';
import { storyTemplate } from '@midwest-design/common';
import { text, select, withKnobs, boolean } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { html } from "lit-html";

export default {
	title: "UI|Avatar",
	component: "midwest-avatar",
	decorators: [withKnobs, withA11y],
	notes: {
		markdown: notes,
	},
};

export const Default = () => {
	const name = text("Name", "William M. Riley");
	const shape = select("Shape", ["default", "circle", "rectangle", "star"], "default");
	const size = select("Size", ["tiny", "small", "default", "medium", "large"], "default");
	const color = select("Color", ["auto", "red", "orange", "yellow", "green", "blue", "purple", "magenta"], "auto");
	const src = text("Image URL", "");
	const processing = boolean("Processing", false);
	const noTooltip = boolean("Disable tooltip", false);

	return html`${storyTemplate("Buttons", `<midwest-avatar 
			src="${src}"
			processing="${processing}"
			no-tooltip="${noTooltip}"
			name="${name}" 
			size="${size}" 
			shape="${shape}" 
			color="${color}">
		</midwest-avatar>
	`)}`
};


