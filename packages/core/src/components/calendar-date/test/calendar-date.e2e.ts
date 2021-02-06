import { newE2EPage } from '@stencil/core/testing';

describe('midwest-calendar-date', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-calendar-date></midwest-calendar-date>');

    const element = await page.find('midwest-calendar-date');
    expect(element).toHaveClass('hydrated');
  });
});
