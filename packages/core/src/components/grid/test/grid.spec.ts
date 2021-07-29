import { newSpecPage } from '@stencil/core/testing';
import { Grid } from '../grid';

describe('midwest-grid', () => {
  // Copy and paste this as often as you need to test the different variations
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Grid],
      html: `<midwest-grid></midwest-grid>`,
    });

    expect(page.root).toEqualHtml(`<midwest-grid cols="auto" column-gap="2" column-width="200" responsive="" style="--grid-width: 200px; --grid-gap: 2rem;">
    \n\n
    </midwest-grid>`);
  });
});
