import { newSpecPage } from '@stencil/core/testing';
import { ScrollZSection } from '../scroll-z-section';

describe('midwest-scroll-z-section', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [ScrollZSection],
			html: `<midwest-scroll-z-section></midwest-scroll-z-section>`,
		});

		expect(page.root).toEqualHtml(`<midwest-scroll-z-section></midwest-scroll-z-section>`);
	});
})