import { newE2EPage } from '@stencil/core/testing';

describe('midwest-clock', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-clock></midwest-clock>');

    const element = await page.find('midwest-clock');
    expect(element).toHaveClass('hydrated');
  });
});
