import { newSpecPage } from '@stencil/core/testing';
import { SaShowIf } from './midwest-show-if';

describe('midwest-show-if', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SaShowIf],
      html: `<midwest-show-if></midwest-show-if>`,
    });
    expect(page.root).toEqualHtml(`
      <midwest-show-if>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </midwest-show-if>
    `);
  });
});
