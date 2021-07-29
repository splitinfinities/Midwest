import { newSpecPage } from '@stencil/core/testing';
import { Content } from '../content';

describe('midwest-content', () => {
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Content],
      html: `<midwest-content></midwest-content>`,
    });

    expect(page.root).toEqualHtml(`<midwest-content aria-hidden="true" class="hidden" role="tabpanel">
    <mock:shadow-root>
      <animate-presence>
        <slot></slot>
      </animate-presence>
    </mock:shadow-root>
  </midwest-content>`);
  });
});
