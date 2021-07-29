import { newSpecPage } from '@stencil/core/testing';
import { Breadcrumbs } from '../breadcrumbs';

describe('midwest-breadcrumbs', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Breadcrumbs],
      html: `<midwest-breadcrumbs></midwest-breadcrumbs>`,
    });

    expect(page.root).toEqualHtml(`
            <midwest-breadcrumbs>
                <mock:shadow-root>
                    <div class=\"breadcrumbs\" id=\"breadcumb_wrapper\">
                    <div class=\"flush-left\"></div>
                    <slot></slot>
                    <div class=\"flush-right\"></div>
                    </div>
                </mock:shadow-root>
            </midwest-breadcrumbs>
        `);
  });
});
