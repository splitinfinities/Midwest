import { newSpecPage } from '@stencil/core/testing';
import { Intersection } from '../intersection';

describe('midwest-intersection', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Intersection],
			html: `<midwest-intersection></midwest-intersection>`,
		});

		expect(page.root).toEqualHtml(`
			<midwest-intersection></midwest-intersection>
		`);
	});
})