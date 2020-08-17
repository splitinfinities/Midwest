import { newSpecPage } from '@stencil/core/testing';
import { Content } from '../content';

describe('midwest-content', () => {
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Content],
      html: `<midwest-content></midwest-content>`,
    });

    expect(page.root).toEqualHtml(`<midwest-content>
    <mock:shadow-root>
      <div aria-hidden=\"true\" class=\"wrap\" role=\"tabpanel\">
        <slot></slot>
      </div>
    </mock:shadow-root>
  </midwest-content>`);
  });
});