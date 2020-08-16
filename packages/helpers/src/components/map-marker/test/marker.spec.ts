import { newSpecPage } from '@stencil/core/testing';
import { Marker } from './marker';

describe('midwest-map-marker', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Marker],
      html: `<midwest-map-marker></midwest-map-marker>`,
    });

    expect(page.root).toEqualHtml(`
      <midwest-map-marker></midwest-map-marker>
    `);
  });
})