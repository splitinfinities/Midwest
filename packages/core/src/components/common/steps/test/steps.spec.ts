import { newSpecPage } from '@stencil/core/testing';
import { Steps } from '../steps';

describe('midwest-step', () => {
  // Copy and paste this as often as you need to test the different variations
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Steps],
      html: `<midwest-steps></midwest-steps>`,
    });

    expect(page.root).toEqualHtml(`<midwest-steps>
      <mock:shadow-root>
        <div class=\"step-list\" role=\"tablist\">
          <slot></slot>
        </div>
        <export-to-figma></export-to-figma>
      </mock:shadow-root>
    </midwest-steps>`);
  });
});