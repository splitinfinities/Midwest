import { newSpecPage } from '@stencil/core/testing';
import { Theme } from '../theme';

describe('sa-theme', () => {
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Theme],
      html: `<sa-theme></sa-theme>`,
    });

    expect(page.root).toEqualHtml(`<sa-theme class=\"complement-indigo theme-red\">\n\n</sa-theme>`);
  });
});