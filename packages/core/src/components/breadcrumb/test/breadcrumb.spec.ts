import { newSpecPage } from '@stencil/core/testing';
import { Breadcrumb } from '../breadcrumb';

describe('midwest-breadcrumb', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Breadcrumb],
      html: `<midwest-breadcrumb></midwest-breadcrumb>`,
    });

    expect(page.root).toEqualHtml(`<midwest-breadcrumb>
      <mock:shadow-root>
        <a arget=\"_self\" aria-label=\"Breadcrumb link for \" class=\"button\" href=\"/\" title=\"Breadcrumb link for \" url=\"/\">
          <slot name=\"icon\"></slot>
          <sa-label>
            <slot></slot>
          </sa-label>
        </a>
      </mock:shadow-root>
    </midwest-breadcrumb>`);

    expect(page.root.label).toBe('Breadcrumb link for ');
  });
});
