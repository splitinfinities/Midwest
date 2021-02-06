import { newSpecPage } from '@stencil/core/testing';
import { SaInputTags } from '../input-tags';

describe('midwest-input-tags', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SaInputTags],
      html: `<midwest-input-tags></midwest-input-tags>`,
    });
    
    expect(page.root).toEqualHtml(`
      <midwest-input-tags class="complement-undefined theme-undefined" placeholder="Enter a value" size="default">
        <mock:shadow-root>
          <context-consumer></context-consumer>
          <div class="wrapper">
            <label>
              <div class="content">
                <div class="tokenfield tokenfield-mode-tokens">
                  <input class="input" id="input" placeholder="Enter a value" tabindex="0" type="text" style="display: none;">
                  <input class="tokenfield-copy-helper" tabindex="-1" type="text" style="display: none; position: fixed; top: -1000px; right: 1000px;">
                  <div class="tokenfield-set">
                    <ul></ul>
                  </div>
                  <input class="tokenfield-input" placeholder="Enter a value" type="text" style="width: 100%;">
                  <div class="tokenfield-suggest" style="display: none;">
                    <ul class="tokenfield-suggest-list"></ul>
                  </div>
                  <div id="tokenfield-sizer" style="width: auto; height: auto; overflow: hidden; white-space: pre; max-width: NaNpx; position: fixed; top: -10000px; left: 10000px;"></div>
                </div>
              </div>
              <midwest-validate size="default"></midwest-validate>
            </label>
          </div>
          </mock:shadow-root>
        </midwest-input-tags>
    `);
  });
});
