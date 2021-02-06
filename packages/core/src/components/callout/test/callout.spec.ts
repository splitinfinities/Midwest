import { newSpecPage } from '@stencil/core/testing';
import { Callout } from '../callout';

describe('midwest-callout', () => {
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Callout],
      html: `<midwest-callout></midwest-callout>`,
    });

    expect(page.root).toEqualHtml(`<midwest-callout aria-label=\"An default message. \" aria-role=\"status\" class=\"theme-gray\" tabindex=\"0\">
    <mock:shadow-root>
      <div class=\"callout-wrap\">
        <slot></slot>
      </div>
    </mock:shadow-root>
  </midwest-callout>`);
  });
});