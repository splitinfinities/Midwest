import { newSpecPage } from '@stencil/core/testing';
import { Video360 } from '../360-video';

describe('midwest-360-video', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Video360],
			html: `<midwest-360-video></midwest-360-video>`,
		});

		expect(page.root).toEqualHtml(`
			<midwest-360-video height=\"720\" width=\"1280\">
				<div class=\"video\"></div>
				<div class=\"overlay\"></div>
			</midwest-360-video>
		`);
	});
})