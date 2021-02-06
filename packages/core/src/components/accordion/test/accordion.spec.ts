
import { newSpecPage } from '@stencil/core/testing';
import { Accordion } from '../accordion';

describe('midwest-accordion', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Accordion],
      html: `<midwest-accordion></midwest-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <midwest-accordion style=\"--accordion-height: undefinedpx;\">
        <mock:shadow-root>
          <div class=\"wrap\">
            <div class=\"button-wrap\" title=\"Selecting this opens the content of this accordion\">
              <slot name=\"label\">
                <midwest-button ghost=\"\" id=\"button\" label=\"More Details\" tag=\"button\">
                  More Details
                </midwest-button>
              </slot>
              <ion-icon class=\"chevron\" name=\"arrow-down\"></ion-icon>
            </div>
            <midwest-blur vertical=\"0\">
              <div class=\"expander\" tabindex=\"-1\">
                <slot></slot>
              </div>
            </midwest-blur>
          </div>
        </mock:shadow-root>
      </midwest-accordion>
    `);
  });
})