import { newSpecPage } from '@stencil/core/testing';
import { Tooltip } from '../tooltip';

describe('midwest-tooltip', () => {
  // Copy and paste this as often as you need to test the different variations
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<midwest-tooltip>nice</midwest-tooltip>`,
    });

    expect(page.root).toEqualHtml(`<midwest-tooltip align=\"center\">
    <mock:shadow-root>
      <div class=\"wrap\">
        <div class=\"after\"></div>
        <slot></slot>
      </div>
    </mock:shadow-root>
    nice
  </midwest-tooltip>`);
  });
});