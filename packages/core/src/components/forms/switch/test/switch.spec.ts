import { newSpecPage } from '@stencil/core/testing';
import { Switch } from '../switch';

describe('midwest-switch', () => {
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<midwest-switch></midwest-switch>`,
    });

    expect(page.root).toEqualHtml(`<midwest-switch class="theme-undefined" value="false" no-value=\"false\" size=\"default\" yes-value=\"true\">
      <context-consumer></context-consumer>
        <label class=\"label\">
            <div class=\"flex\">
                <input tabindex=\"-1\" type=\"hidden\" value=\"false\">
                <input tabindex=\"-1\" type=\"checkbox\" value=\"true\">
                <span class=\"button\">
                    <span>
                        <ion-icon name=\"close\"/>
                    </span>
                </span>
                <div class=\"hide yes\"></div>
                <div class=\"no show\"></div>
            </div>
            <midwest-validate></midwest-validate>
        </label>
    </midwest-switch>`);
  });
});
