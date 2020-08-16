import { newSpecPage } from '@stencil/core/testing';
import { SaCalendarEvent } from './midwest-calendar-event';

describe('midwest-calendar-event', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SaCalendarEvent],
      html: `<midwest-calendar-event></midwest-calendar-event>`,
    });
    expect(page.root).toEqualHtml(`
      <midwest-calendar-event>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </midwest-calendar-event>
    `);
  });
});
