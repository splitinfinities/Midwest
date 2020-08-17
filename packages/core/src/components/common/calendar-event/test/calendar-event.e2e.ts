import { newE2EPage } from '@stencil/core/testing';

describe('midwest-calendar-event', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-calendar-event></midwest-calendar-event>');

    const element = await page.find('midwest-calendar-event');
    expect(element).toHaveClass('hydrated');
  });
});
