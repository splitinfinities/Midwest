import { newSpecPage } from '@stencil/core/testing';
import { Image360 } from '../360-image';

describe('midwest-360-image', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Image360],
			html: `<midwest-360-image></midwest-360-image>`,
		});

		expect(page.root).toEqualHtml(`
			<midwest-360-image height=\"720\" width=\"1280\">
				<div>
					<div class=\"image\"></div>
					<div class=\"overlay\"></div>
					<midwest-intersection margin=\"50%\" multiple=\"\"></midwest-intersection>
					<skeleton-img height=\"720\" width=\"1280\"></skeleton-img>
				</div>
			</midwest-360-image>
		`);
	});
})