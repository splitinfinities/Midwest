import { newSpecPage } from '@stencil/core/testing';
import { Slide } from '../slide';

describe('midwest-slide', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Slide],
			html: `<midwest-slide></midwest-slide>`,
		});

		expect(page.root).toEqualHtml(`
			<midwest-slide style=\"--width: auto;\">
				<midwest-intersection multiple=\"\"></midwest-intersection>
			</midwest-slide>
		`);
	});
})