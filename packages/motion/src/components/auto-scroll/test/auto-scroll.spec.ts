import { newSpecPage } from '@stencil/core/testing';
import { StellarAutoScroll } from './auto-scroll';

describe('midwest-auto-scroll', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [StellarAutoScroll],
      html: `<midwest-auto-scroll></midwest-auto-scroll>`,
    });
    expect(page.root).toEqualHtml(`
      <midwest-auto-scroll></midwest-auto-scroll>
    `);
  });
})