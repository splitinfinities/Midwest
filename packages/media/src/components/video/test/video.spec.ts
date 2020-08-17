import { newSpecPage } from '@stencil/core/testing';
import { Video } from '../video';

describe('midwest-video', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Video],
			html: `<midwest-video></midwest-video>`,
		});

		expect(page.root).toEqualHtml(`
			<midwest-video style=\"--width: undefined; --height: undefined; --aspect-ratio: NaN%;\">
				<video controls=\"\" preload=\"auto\"></video>
				<midwest-intersection multiple=\"\"></midwest-intersection>
			</midwest-video>
		`);
	});
})