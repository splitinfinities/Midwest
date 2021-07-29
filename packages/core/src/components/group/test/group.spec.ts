import { newSpecPage } from '@stencil/core/testing';
import { Group } from '../group';

describe('midwest-group', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Group],
      html: `<midwest-group></midwest-group>`,
    });

    expect(page.root).toEqualHtml(`
       <midwest-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </midwest-group>
    `);
  });
});
