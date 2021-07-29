import { Tag } from '../tag';
import { newSpecPage } from '@stencil/core/testing';

describe('midwest-tag', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Tag],
      html: `<midwest-tag>NICE</midwest-tag>`,
    });

    expect(page.root).toEqualHtml(`<midwest-tag class="theme-gray" color="gray">
            <mock:shadow-root>
            <slot name="icon"></slot>
            <slot name="avatar"></slot>
            <midwest-label class=\"tag\">
                <slot></slot>
            </midwest-label>
            <slot name="action"></slot>
            </mock:shadow-root>
            NICE
        </midwest-tag>`);
  });
});
