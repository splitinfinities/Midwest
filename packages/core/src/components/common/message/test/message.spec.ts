import { newSpecPage } from '@stencil/core/testing';
import { Message } from '../message';

describe('midwest-message', () => {
  // Copy and paste this as often as you need to test the different variations
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Message],
      html: `<midwest-message></midwest-message>`,
    });

    expect(page.root).toEqualHtml(`<midwest-message class=\"db theme-gray\" name=\"social-assurance_\" shown=\"\">
      <mock:shadow-root>
        <div class=\"wrap\">
          <slot></slot>
          <button aria-label=\"Close\">
            <ion-icon name=\"close\"/>
          </button>
        </div>
      </mock:shadow-root>
    </midwest-message>`);
  });
});