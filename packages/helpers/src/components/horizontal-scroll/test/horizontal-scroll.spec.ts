import { newSpecPage } from '@stencil/core/testing';
import { HorizontalScroll } from './horizontal-scroll';

describe('midwest-horizontal-scroll', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [HorizontalScroll],
      html: `<midwest-horizontal-scroll></midwest-horizontal-scroll>`,
    });
    expect(page.root).toEqualHtml(`
       <midwest-horizontal-scroll></midwest-horizontal-scroll>
    `);
  });
})