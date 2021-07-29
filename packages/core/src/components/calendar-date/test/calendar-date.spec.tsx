import { newSpecPage } from '@stencil/core/testing';
import { CalendarDate } from '../calendar-date';

describe('midwest-calendar-date', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CalendarDate],
      html: `<midwest-calendar-date start="1597602600"></midwest-calendar-date>`,
    });
    expect(page.root).toEqualHtml(`
      <midwest-calendar-date start="1597602600">
        <mock:shadow-root>
          <div class="date-area">
            <p class="day">
              26
            </p>
            <p class="month">
              Dec
            </p>
          </div>
        </mock:shadow-root>
      </midwest-calendar-date>
    `);
  });
});
