import { newSpecPage } from '@stencil/core/testing';
import { Parallax } from '../parallax';
import { ParallaxSection } from '../../parallax-section/parallax-section';

describe('midwest-parallax', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Parallax, ParallaxSection],
			html: `<midwest-parallax><midwest-parallax-section><p>Nice</p></midwest-parallax-section></midwest-parallax>`,
		});

		expect(page.root).toEqualHtml(`
		<midwest-parallax>
			<midwest-parallax-section speed=\"1\">
				<p>Nice</p>
			</midwest-parallax-section>
		</midwest-parallax>`);
	});
})