import { newSpecPage } from '@stencil/core/testing';
import { Grid } from '../grid';

describe('midwest-grid', () => {
  // Copy and paste this as often as you need to test the different variations
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Grid],
      html: `<midwest-grid></midwest-grid>`,
    });

    expect(page.root).toEqualHtml(`<midwest-grid align=\"items-start\" class=\"items-start\" cols=\"auto\" data-eq-pts=\"tiny: 320, small: 480, medium: 640, large: 800, massive: 1024\" id="grid-0" kids="0" style=\"--grid-width: 200px; --grid-gap: 2rem;\">
    \n\n
    </midwest-grid>`);
  });
});