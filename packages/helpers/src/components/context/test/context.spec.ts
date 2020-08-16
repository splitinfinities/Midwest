import { newSpecPage } from '@stencil/core/testing';
import { Context } from '../context';

describe('midwest-context', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Context],
			html: `<midwest-context></midwest-context>`,
		});

		expect(page.root).toEqualHtml(`
			<midwest-context><mock:shadow-root></mock:shadow-root></midwest-context>
		`);
	});
})