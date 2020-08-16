import { newSpecPage } from '@stencil/core/testing';
import { Calendar } from '../midwest-calendar';

describe('midwest-calendar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Calendar],
      html: `<midwest-calendar></midwest-calendar>`,
    });
    expect(page.root).toEqualHtml(`
      <midwest-calendar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </midwest-calendar>
    `);
  });
});
