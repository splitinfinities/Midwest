import { newE2EPage } from '@stencil/core/testing';

describe('midwest-datetime-picker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-datetime-picker></midwest-datetime-picker>');

    const element = await page.find('midwest-datetime-picker');
    expect(element).toHaveClass('hydrated');
  });
});
