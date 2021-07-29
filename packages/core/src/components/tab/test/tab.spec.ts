import { newSpecPage } from '@stencil/core/testing';
import { Tab } from '../tab';

describe('midwest-tab', () => {
  // Copy and paste this as often as you need to test the different variations
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Tab],
      html: `<midwest-tab></midwest-tab>`,
    });

    expect(page.root).toEqualHtml(`<midwest-tab size="medium">
    <mock:shadow-root>
      <div class=\"tab-wrap\">
        <button aria-selected=\"false\" class=\"tab-button\" role=\"tab\" tabindex=\"0\" type=\"button\">
          <midwest-label class=\"cursor-pointer title\" size="medium">
            <slot></slot>
          </midwest-label>
        </button>
      </div>
    </mock:shadow-root>
  </midwest-tab>`);
  });

  // Copy and paste this as often as you need to test the different variations
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Tab],
      html: `<midwest-tab tag="link"></midwest-tab>`,
    });

    expect(page.root).toEqualHtml(`<midwest-tab size="medium" tag="link">
      <mock:shadow-root>
        <div class=\"tab-wrap\">
          <a class=\"tab-button\" href=\"#\" role=\"tab\" target=\"_self\">
            <midwest-label class=\"cursor-pointer title\" size=\"medium\">
              <slot></slot>
            </midwest-label>
          </a>
        </div>
      </mock:shadow-root>
    </midwest-tab>`);
  });

  // Copy and paste this as often as you need to test the different variations
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Tab],
      html: `<midwest-tab tag="link" notifications="12"></midwest-tab>`,
    });

    expect(page.root).toEqualHtml(`<midwest-tab notifications=\"12\" size=\"medium\" tag=\"link\">
      <mock:shadow-root>
        <div class=\"tab-wrap\">
          <a class=\"tab-button\" href=\"#\" role=\"tab\" target=\"_self\">
            <midwest-tag class=\"notifications\" pill=\"\" size=\"tiny\" style=\"--background-color: var(--red--6); --color: var(--white);\">
              12
            </midwest-tag>
            <midwest-label class=\"cursor-pointer title\" size=\"medium\">
              <slot></slot>
            </midwest-label>
          </a>
        </div>
      </mock:shadow-root>
    </midwest-tab>`);
  });
});
