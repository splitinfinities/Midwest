import { newSpecPage } from '@stencil/core/testing';
import { FormRollup } from './form-rollup';

describe('midwest-form-rollup', () => {
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [FormRollup],
      html: `<midwest-form-rollup></midwest-form-rollup>`,
    });

    expect(page.root).toEqualHtml(`<midwest-form-rollup>
      <midwest-label class=\"empty\">
        Choose something
      </midwest-label>
    </midwest-form-rollup>`);
  });
});