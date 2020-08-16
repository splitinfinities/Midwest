import { newSpecPage } from '@stencil/core/testing';
import { Box } from './box';

describe('midwest-box', () => {
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Box],
      html: `<midwest-box></midwest-box>`,
    });

    expect(page.root).toEqualHtml(`<midwest-box class=\"box theme-undefined\">
      <mock:shadow-root>
          <context-consumer></context-consumer>
        <div class=\"indicator\">
          <ion-icon name=\"checkmark\"/>
        </div>
      </mock:shadow-root>
    </midwest-box>`);
  });
});
