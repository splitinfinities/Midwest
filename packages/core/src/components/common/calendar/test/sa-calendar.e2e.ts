import { newE2EPage } from '@stencil/core/testing';

describe('midwest-calendar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-calendar></midwest-calendar>');

    const element = await page.find('midwest-calendar');
    expect(element).toHaveClass('hydrated');
  });
});
