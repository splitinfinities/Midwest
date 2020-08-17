import { newSpecPage } from '@stencil/core/testing';
import { Starscape } from '../starscape';

describe('midwest-starscape', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Starscape],
			html: `<midwest-starscape></midwest-starscape>`,
		});

		expect(page.root).toEqualHtml(`
		<midwest-starscape>
			<midwest-parallax horizontal=\"\">
				<midwest-parallax-section speed=\"5\">
					<div class=\"stars\"></div>
				</midwest-parallax-section>
				<midwest-parallax-section speed=\"-10\">
					<div class=\"stars\"></div>
				</midwest-parallax-section>
				<midwest-parallax-section speed=\"-4\">
					<div class=\"stars\"></div>
				</midwest-parallax-section>
			</midwest-parallax>
		</midwest-starscape>
		`);
	});
})