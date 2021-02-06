import { newSpecPage } from '@stencil/core/testing';
import { CalendarDate } from '../calendar-date';

describe('midwest-calendar-date', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CalendarDate],
      html: `<midwest-calendar-date start="1597602600"></midwest-calendar-date>`,
    });
    expect(page.root).toEqualHtml(`
      <midwest-calendar-date>
        <mock:shadow-root>
          <div class="date-area">
            <p class="day">
              29
            </p>
            <p class="month">
              May
            </p>
          </div>
        </mock:shadow-root>
      </midwest-calendar-date>
    `);
  });
});
