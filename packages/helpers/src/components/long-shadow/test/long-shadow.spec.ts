import { newSpecPage } from '@stencil/core/testing';
import { LongShadow } from '../long-shadow';

describe('midwest-long-shadow', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [LongShadow],
			html: `<midwest-long-shadow></midwest-long-shadow>`,
		});

		expect(page.root).toEqualHtml(`
			<midwest-long-shadow delay=\"100\" direction=\"top-left\" length=\"100\" timing=\"50\">
				<mock:shadow-root>
					<midwest-intersection multiple=\"\">
						<slot></slot>
					</midwest-intersection>
				</mock:shadow-root>
			</midwest-long-shadow>
		`);
	});
})