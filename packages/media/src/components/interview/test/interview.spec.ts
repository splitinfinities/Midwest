import { newSpecPage } from '@stencil/core/testing';
import { Interview } from '../interview';

describe('midwest-interview', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Interview],
			html: `<midwest-interview></midwest-interview>`,
		});

		expect(page.root).toEqualHtml(`
			<midwest-interview style=\"--width: 800px; --height: 800px; --aspectRatio: 100%;\">
				<div class=\"card\">
					<div>
					<skeleton-img height=\"800\" loading=\"\" width=\"800\"></skeleton-img>
					<div style=\"display: none;\"></div>
					</div>
					<midwest-intersection multiple=\"\"></midwest-intersection>
				</div>
			</midwest-interview>
		`);
	});
})