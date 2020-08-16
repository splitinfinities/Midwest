import { newSpecPage } from '@stencil/core/testing';
import { ItemGroup } from '../item-group';

describe('midwest-item-group', () => {
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [ItemGroup],
      html: `<midwest-item-group></midwest-item-group>`,
    });

    expect(page.root).toEqualHtml(`<midwest-item-group>
    <mock:shadow-root>
      <midwest-label size=\"small\">
        <span>
          group
        </span>
      </midwest-label>
      <div class=\"list\">
        <slot></slot>
      </div>
    </mock:shadow-root>
  </midwest-item-group>`);
  });
});