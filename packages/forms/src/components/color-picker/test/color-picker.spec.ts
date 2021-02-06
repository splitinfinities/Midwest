import { newSpecPage } from '@stencil/core/testing';
import { ColorPicker } from '../color-picker';

describe('midwest-color-picker', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [ColorPicker],
      html: `<midwest-color-picker></midwest-color-picker>`,
    });
    expect(page.root).toEqualHtml(`
       <midwest-color-picker val=\"none\" style=\"--selected-color: var(--none5);\">
      <mock:shadow-root>
        <div class=\"wrap\">
          <button class=\"gray\" type=\"button\" value=\"gray\" style=\"background: var(--gray-5);\"></button>
          <button class=\"red\" type=\"button\" value=\"red\" style=\"background: var(--red-5);\"></button>
          <button class=\"orange\" type=\"button\" value=\"orange\" style=\"background: var(--orange-5);\"></button>
          <button class=\"yellow\" type=\"button\" value=\"yellow\" style=\"background: var(--yellow-5);\"></button>
          <button class=\"lime\" type=\"button\" value=\"lime\" style=\"background: var(--lime-5);\"></button>
          <button class=\"green\" type=\"button\" value=\"green\" style=\"background: var(--green-5);\"></button>
          <button class=\"teal\" type=\"button\" value=\"teal\" style=\"background: var(--teal-5);\"></button>
          <button class=\"cyan\" type=\"button\" value=\"cyan\" style=\"background: var(--cyan-5);\"></button>
          <button class=\"blue\" type=\"button\" value=\"blue\" style=\"background: var(--blue-5);\"></button>
          <button class=\"indigo\" type=\"button\" value=\"indigo\" style=\"background: var(--indigo-5);\"></button>
          <button class=\"violet\" type=\"button\" value=\"violet\" style=\"background: var(--violet-5);\"></button>
          <button class=\"magenta\" type=\"button\" value=\"magenta\" style=\"background: var(--magenta-5);\"></button>
          <button class=\"pink\" type=\"button\" value=\"pink\" style=\"background: var(--pink5);\"></button>
          <button class=\"none\" type=\"button\" value=\"none\" style=\"background: var(--white);\"></button>
          <div class=\"placeholder\"></div>
        </div>
      </mock:shadow-root>
    </midwest-color-picker>
    `);
  });
})