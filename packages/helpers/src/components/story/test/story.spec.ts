import { newSpecPage } from '@stencil/core/testing';
import { Story } from '../story';

describe('midwest-story', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Story],
			html: `<midwest-story></midwest-story>`,
		});

		expect(page.root).toEqualHtml(`
			<midwest-story></midwest-story>
		`);
	});
})