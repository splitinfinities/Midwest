import { newSpecPage } from '@stencil/core/testing';
import { VideoInterview } from '../video-interview';

describe('midwest-video-interview', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [VideoInterview],
			html: `<midwest-video-interview></midwest-video-interview>`,
		});

		expect(page.root).toEqualHtml(`
			<midwest-video-interview style=\"--width: 800px; --height: 800px; --aspectRatio: 100%;\">
				<mock:shadow-root>
					<div class=\"card\">
						<skeleton-img height=\"800\" loading=\"\" width=\"800\"></skeleton-img>
						<midwest-intersection multiple=\"\"></midwest-intersection>
					</div>
				</mock:shadow-root>
			</midwest-video-interview>
		`);
	});
})