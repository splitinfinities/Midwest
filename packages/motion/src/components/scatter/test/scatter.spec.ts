import { newSpecPage } from '@stencil/core/testing';
import { Scatter } from '../scatter';

describe('midwest-item', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Scatter],
			html: `<midwest-scatter></midwest-scatter>`,
		});

		expect(page.root).toEqualHtml(`
			<midwest-scatter>
				<mock:shadow-root>
					<slot></slot>
				</mock:shadow-root>
			</midwest-scatter>
		`);
	});
})