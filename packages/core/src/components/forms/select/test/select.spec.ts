import { newSpecPage } from '@stencil/core/testing';
import { Select } from '../select';

describe('midwest-select', () => {
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Select],
      html: `<midwest-select></midwest-select>`,
    });

    expect(page.root).toEqualHtml(`<midwest-select align=\"left\" class=\"theme-undefined wrapper\" name=\"select\">
    <mock:shadow-root>
      <context-consumer></context-consumer>
      <div class=\"select\">
        <button class=\"title\" type=\"button\">
          <midwest-form-rollup fallback=\"Choose  items\" for=\"select\" placeholder=\"Choose something...\" verbiage=\"item\"></midwest-form-rollup>
          <midwest-icon name=\"ios-arrow-down\"/>
        </button>
        <div class=\"list\">
          <div class=\"body\">
            <slot></slot>
          </div>
        </div>
      </div>
      <midwest-validate></midwest-validate>
      <midwest-label size=\"small\" underneath=\"\"></midwest-label>
    </mock:shadow-root>
  </midwest-select>`);
  });
});