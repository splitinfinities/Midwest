import { newSpecPage } from '@stencil/core/testing';
import { Pagination } from '../pagination';

describe('midwest-pagination', () => {
  // Copy and paste this as often as you need to test the different variations
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<midwest-pagination></midwest-pagination>`,
    });

    expect(page.root).toEqualHtml(`<midwest-pagination current=\"1\" padding=\"2\" pages=\"1\" type=\"full\">
    <mock:shadow-root>
      <span class=\"pagination-container\">
        <div class=\"pagination-wrap\">
          <a class=\"first icon\" data-hidden=\"yes\" data-page=\"1\" href=\"\">
            <ion-icon name=\"skip-backward\"/>
          </a>
          <a class=\"icon previous\" data-hidden=\"yes\" href=\"\">
            <ion-icon name=\"rewind\"/>
          </a>
          <div class=\"pages\">
            <div class=\"ellipsis previous\" data-hidden=\"yes\">
              …
            </div>
            <a class=\"current-number number\" data-current data-page=\"1\" data-visible href=\"#page-1\">
              1
            </a>
            <div class=\"ellipsis next\" data-hidden=\"yes\">
              …
            </div>
          </div>
          <a class=\"icon next\" data-hidden=\"yes\" href=\"\">
            <ion-icon name=\"fastforward\"/>
          </a>
          <a class=\"icon last\" data-hidden=\"yes\" data-page=\"1\" href=\"\">
            <ion-icon name=\"skip-forward\"/>
          </a>
        </div>
      </span>
    </mock:shadow-root>
  </midwest-pagination>`);
  });
});