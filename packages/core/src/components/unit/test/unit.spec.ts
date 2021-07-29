import { newSpecPage } from '@stencil/core/testing';
import { Unit } from '../unit';

describe('midwest-unit', () => {
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Unit],
      html: `<midwest-unit></midwest-unit>`,
    });

    expect(page.root).toEqualHtml(`<midwest-unit decimals=\"2\" from=\"B\" to=\"KB\" value=\"1000\" style=\"all: inherit; display: inline !important;\">
    0.98 KB
  </midwest-unit>`);
  });
});
