import { newSpecPage } from '@stencil/core/testing';
import { Chart } from '../chart';

describe('midwest-chart', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Chart],
			html: `<midwest-chart></midwest-chart>`,
		});

		expect(page.root).toEqualHtml(`
			<midwest-chart>
				<mock:shadow-root>
					<div class=\"highchart\"></div>
				</mock:shadow-root>
			</midwest-chart>
		`);
	});
})