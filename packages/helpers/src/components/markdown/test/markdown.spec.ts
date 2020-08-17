import { newSpecPage } from '@stencil/core/testing';
import { Markdown } from '../markdown';

describe('midwest-markdown', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Markdown],
			html: `<midwest-markdown><template>#nice</template></midwest-markdown>`,
		});

		expect(page.root).toEqualHtml(`
			<midwest-markdown>
				<template>
					#nice
				</template>
				<copy-wrap class=\"wrap\" full=\"\">
					<div>
					<h1 id=\"nice\">
						nice
					</h1>
					</div>
				</copy-wrap>
			</midwest-markdown>
		`);
	});
})