import { newSpecPage } from '@stencil/core/testing';
import { Map } from '../map';

describe('midwest-map', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Map],
      html: `<midwest-map></midwest-map>`,
    });
    expect(page.root).toEqualHtml(`
       <midwest-map></midwest-map>
    `);
  });
})