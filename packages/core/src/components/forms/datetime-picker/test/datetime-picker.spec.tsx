import { newSpecPage } from '@stencil/core/testing';
import { DateTimePicker } from '../datetime-picker';

describe('midwest-time-picker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DateTimePicker],
      html: `<midwest-datetime-picker></midwest-datetime-picker>`,
    });
    expect(page.root).toEqualHtml(`
      <midwest-time-picker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </midwest-time-picker>
    `);
  });
});
