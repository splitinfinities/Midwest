import { newSpecPage } from '@stencil/core/testing';
import { ScrollZRoot } from '../scroll-z-root';

describe('midwest-scroll-z-root', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [ScrollZRoot],
			html: `<midwest-scroll-z-root></midwest-scroll-z-root>`,
		});

		expect(page.root).toEqualHtml(`
			<midwest-scroll-z-root>
				<mock:shadow-root>
					<div class=\"container\">
					<div class=\"scene\">
						<slot></slot>
					</div>
					</div>
				</mock:shadow-root>
			</midwest-scroll-z-root>
		`);
	});
})