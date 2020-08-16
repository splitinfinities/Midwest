import { newSpecPage } from '@stencil/core/testing';
import { ParallaxSection } from '../parallax-section';

describe('midwest-item', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [ParallaxSection],
			html: `<midwest-parallax-section><p>nice</p></midwest-parallax-section>`,
		});

		expect(page.root).toEqualHtml(`
			<midwest-parallax-section speed=\"1\">
				<p>nice</p>
			</midwest-parallax-section>
		`);
	});
})