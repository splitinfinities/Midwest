import { newSpecPage } from '@stencil/core/testing';
import { Keyframes } from '../keyframes';

describe('midwest-keyframes', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Keyframes],
			html: `<midwest-keyframes></midwest-keyframes>`,
		});

		expect(page.root).toEqualHtml(`
			<midwest-keyframes frame=\"1\" style=\"--width: 400px; --height: 400px; --aspect-ratio: 100%; --position: 0 0px;\">
				<mock:shadow-root>
					<div class=\"background\" style=\"background-image: url(undefined);\"></div>
				</mock:shadow-root>
			</midwest-keyframes>
		`);
	});
})