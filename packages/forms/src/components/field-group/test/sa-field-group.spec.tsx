import { newSpecPage } from '@stencil/core/testing';
import { SaFieldGroup } from './midwest-field-group';

describe('midwest-field-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SaFieldGroup],
      html: `<midwest-field-group></midwest-field-group>`,
    });
    expect(page.root).toEqualHtml(`
      <midwest-field-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </midwest-field-group>
    `);
  });
});
