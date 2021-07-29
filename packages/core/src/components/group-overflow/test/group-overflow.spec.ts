import { newSpecPage } from '@stencil/core/testing';
import { GroupOverflow } from '../group-overflow';

describe('midwest-group-overflow', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [GroupOverflow],
      html: `<midwest-group-overflow></midwest-group-overflow>`,
    });

    expect(page.root).toEqualHtml(`<midwest-group-overflow>
      <mock:shadow-root>
        <midwest-label class=\"count cursor-pointer\">
          + more
        </midwest-label>
      </mock:shadow-root>
    </midwest-group-overflow>`);
  });
});
