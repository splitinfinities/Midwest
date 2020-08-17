import { newSpecPage } from '@stencil/core/testing';
import { Follow } from '../follow';

describe('midwest-follow', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Follow],
			html: `<midwest-follow></midwest-follow>`,
		});

		expect(page.root).toEqualHtml(`
			<midwest-follow style=\"--left: 50%; --top: -3000px;\">
				<mock:shadow-root>
					<slot></slot>
				</mock:shadow-root>
			</midwest-follow>
		`);
	});
})