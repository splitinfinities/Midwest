import { newSpecPage } from '@stencil/core/testing';
import { Layout } from '../layout';

describe('midwest-layout', () => {
  // Copy and paste this as often as you need to test the different variations
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Layout],
      html: `<midwest-layout></midwest-layout>`,
    });

    expect(page.root).toEqualHtml(`<midwest-layout align=\"top\" content=\"baseline\" padding=\"medium\" size=\"medium\" type=\"default\">
      <mock:shadow-root>
        <div class=\"layout\">
          <slot></slot>
        </div>
        <resize-observer></resize-observer>
      </mock:shadow-root>
    </midwest-layout>`);
  });
});
