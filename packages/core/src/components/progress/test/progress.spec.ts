import { newSpecPage } from '@stencil/core/testing';
import { Progress } from '../progress';

describe('midwest-progress', () => {
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Progress],
      html: `<midwest-progress></midwest-progress>`,
    });

    expect(page.root).toEqualHtml(`<midwest-progress ease=\"\" max=\"100\" secondary=\"0\" value=\"0\">
        <mock:shadow-root>
          <div class=\"progress\">
              <div class=\"status\" style=\"transform: translate(0%, 0);\"></div>
              0
          </div>
        </mock:shadow-root>
    </midwest-progress>`);
  });
});
