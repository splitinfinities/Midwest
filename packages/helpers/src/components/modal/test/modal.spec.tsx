import { newSpecPage } from '@stencil/core/testing';
import { Modal } from '../modal';

describe('midwest-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Modal],
      html: `<midwest-modal></midwest-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <midwest-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </midwest-modal>
    `);
  });
});
