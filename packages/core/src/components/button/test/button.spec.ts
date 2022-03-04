import { newSpecPage } from '@stencil/core/testing';
import { Button } from '../button';

describe('midwest-button', () => {
  it('builds', () => {
    expect(new Button()).toBeTruthy();
  });

  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<midwest-button></midwest-button>`,
    });

    expect(page.root).toEqualHtml(`<midwest-button class="theme-undefined">
      <mock:shadow-root>
        <context-consumer></context-consumer>
        <a class=\"button\" href=\"#\" tabindex="0" target=\"_self\">
          <slot name=\"icon\"></slot>
          <midwest-label class=\"content\">
            <slot>
              Submit
            </slot>
          </midwest-label>
        </a>
      </mock:shadow-root>
    </midwest-button>`);
  });
});