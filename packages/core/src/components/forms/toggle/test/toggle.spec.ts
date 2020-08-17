import { newSpecPage } from '@stencil/core/testing';
import { Toggle } from '../toggle';

describe('midwest-toggle', () => {
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Toggle],
      html: `<midwest-toggle></midwest-toggle>`,
    });

    expect(page.root).toEqualHtml(`<midwest-toggle class="theme-undefined">
      <context-consumer></context-consumer>
      <div data-type="checkbox">
        <midwest-validate></midwest-validate>
      </div>`);
  });
});