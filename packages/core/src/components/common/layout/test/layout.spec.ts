import { newSpecPage } from '@stencil/core/testing';
import { Layout } from './layout';

describe('midwest-layout', () => {
  // Copy and paste this as often as you need to test the different variations
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Layout],
      html: `<midwest-layout></midwest-layout>`,
    });

    expect(page.root).toEqualHtml(`<midwest-layout align=\"baseline\" content=\"baseline\" data-eq-pts=\"tiny: 320, small: 480, medium: 640, large: 800, massive: 1024\" padding=\"medium\" size=\"medium\" type=\"default\">
      <mock:shadow-root>
        <div class=\"layout\">
          <slot></slot>
          <slot name=\"nav\"></slot>
        </div>
      </mock:shadow-root>
    </midwest-layout>`);
  });
});