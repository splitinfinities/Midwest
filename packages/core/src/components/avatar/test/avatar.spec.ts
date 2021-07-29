import { newSpecPage } from '@stencil/core/testing';
import { Avatar } from '../avatar';

describe('midwest-avatar', () => {
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Avatar],
      html: `<midwest-avatar></midwest-avatar>`,
    });

    expect(page.root).toEqualHtml(`<midwest-avatar class=\"theme-red\" color=\"red\" initials=\"MI\" name=\"Midwest Design\" shape=\"square\">
    <mock:shadow-root>
      <button class=\"wrapper\" title=\"You tabbed on an Avatar for Midwest Design\">
        <div class=\"content\">
          <div class=\"spacer\"></div>
          <div class=\"letter\" title=\"Midwest Design\">
            MI
          </div>
        </div>
        <midwest-tooltip>
          Midwest Design
        </midwest-tooltip>
      </button>
    </mock:shadow-root>
  </midwest-avatar>`);
  });

  it('renders a name', async () => {
    const page = await newSpecPage({
      components: [Avatar],
      html: `<midwest-avatar name="William Riley"></midwest-avatar>`,
    });

    expect(page.root).toEqualHtml(`<midwest-avatar class=\"theme-gray\" color=\"gray\" initials=\"WI\" name=\"William Riley\" shape=\"square\">
      <mock:shadow-root>
        <button class=\"wrapper\" title=\"You tabbed on an Avatar for William Riley\">
          <div class=\"content\">
            <div class=\"spacer\"></div>
            <div class=\"letter\" title=\"William Riley\">
              WI
            </div>
          </div>
          <midwest-tooltip>
            William Riley
          </midwest-tooltip>
        </button>
      </mock:shadow-root>
    </midwest-avatar>`);
  });
});
