import { newSpecPage } from '@stencil/core/testing';
import { Comments } from '../comments';

describe('midwest-comments', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Comments],
      html: `<midwest-comments></midwest-comments>`,
    });

    expect(page.root).toEqualHtml(`
      <midwest-comments>
        <mock:shadow-root>
          <section>
            <slot></slot>
          </section>
        </mock:shadow-root>
      </midwest-comments>
    `);
  });
})