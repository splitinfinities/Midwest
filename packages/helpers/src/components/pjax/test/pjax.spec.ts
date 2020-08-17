import { newSpecPage } from '@stencil/core/testing';
import { StellarPjax } from './pjax';

describe('midwest-pjax', () => {
	xit('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [StellarPjax],
			html: `<midwest-pjax></midwest-pjax>`,
		});

		expect(page.root).toEqualHtml(`
			<midwest-pjax></midwest-pjax>
		`);
	});
})