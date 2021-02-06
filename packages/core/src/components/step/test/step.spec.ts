import { newSpecPage } from '@stencil/core/testing';
import { Step } from '../step';

describe('midwest-step', () => {
  // Copy and paste this as often as you need to test the different variations
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Step],
      html: `<midwest-step></midwest-step>`,
    });

    expect(page.root).toEqualHtml(`<midwest-step class="theme-undefined" href=\"#\">
    <mock:shadow-root>
      <context-consumer></context-consumer>
      <button aria-selected=\"false\" class=\"step-button\" role=\"tab\" tabindex=\"0\">
        <midwest-label>
          <span class=\"title\">
            <slot></slot>
          </span>
        </midwest-label>
      </button>
    </mock:shadow-root>
  </midwest-step>`);
  });
});