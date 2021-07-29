import { newSpecPage } from '@stencil/core/testing';
import { Tabs } from '../tabs';

describe('midwest-tabs', () => {
  // Copy and paste this as often as you need to test the different variations
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Tabs],
      html: `<midwest-tabs></midwest-tabs>`,
    });

    expect(page.root)
      .toEqualHtml(`<midwest-tabs style="--tab-top: undefinedpx; --tab-left: undefinedpx; --tab-width: undefinedpx; --tab-height: undefinedpx; --indicator-opacity: 0;">
    <mock:shadow-root>
      <div class=\"tab-wrap\">
        <div class=\"tab-list\" role=\"tablist\">
          <slot></slot>
          <div class=\"track\">
            <div class=\"indicator\"></div>
          </div>
        </div>
      </div>
    </mock:shadow-root>
  </midwest-tabs>`);
  });
});
