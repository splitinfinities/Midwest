import { newSpecPage } from '@stencil/core/testing';
import { Item } from '../item';

describe('midwest-item', () => {
  // Copy and paste this as often as you need to test the different variations
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Item],
      html: `<midwest-item></midwest-item>`,
    });

    expect(page.root).toEqualHtml(`<midwest-item avatar-shape=\"square\" avatar-size="small" class="theme-undefined" href=\"#\" name=\"item\" tabindex=\"0\" tag=\"button\" target=\"_self\" value=\"\">
      <mock:shadow-root>
        <context-consumer></context-consumer>
        <button class=\"clickable\" tabindex=\"-1\" type=\"button\">
          <midwest-label>
            <slot>
              Not selected
            </slot>
          </midwest-label>
        </button>
      </mock:shadow-root>
    </midwest-item>`);
  });
});
