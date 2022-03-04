import { newSpecPage } from '@stencil/core/testing';
import { Sidebar } from '../sidebar';

describe('midwest-sidebar', () => {
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: `<midwest-sidebar></midwest-sidebar>`,
    });

    expect(page.root).toEqualHtml(`<midwest-sidebar aria-label=\"An default message. \" aria-role=\"status\" class=\"theme-gray\" tabindex=\"0\">
    <mock:shadow-root>
      <div class=\"sidebar-wrap\">
        <slot></slot>
      </div>
    </mock:shadow-root>
  </midwest-sidebar>`);
  });
});
