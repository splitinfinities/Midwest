import { newSpecPage } from '@stencil/core/testing';
import { SaRepeatableFields } from './midwest-repeatable-fields';

describe('midwest-repeatable-fields', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SaRepeatableFields],
      html: `<midwest-repeatable-fields></midwest-repeatable-fields>`,
    });
    expect(page.root).toEqualHtml(`
      <midwest-repeatable-fields>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </midwest-repeatable-fields>
    `);
  });
});
