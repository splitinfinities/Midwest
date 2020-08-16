import { newSpecPage } from '@stencil/core/testing';
import { Label } from './label';

describe('midwest-label', () => {
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Label],
      html: `<midwest-label></midwest-label>`,
    });

    expect(page.root).toEqualHtml(`<midwest-label>
        <mock:shadow-root>
            <label>
                <slot></slot>
            </label>
        </mock:shadow-root>
    </midwest-label>`);
  });
});