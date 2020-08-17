import { newSpecPage } from '@stencil/core/testing';
import { Theme } from '../theme';

describe('midwest-theme', () => {
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Theme],
      html: `<midwest-theme></midwest-theme>`,
    });

    expect(page.root).toEqualHtml(`<midwest-theme class=\"complement-indigo theme-red\">\n\n</midwest-theme>`);
  });
});