import { newE2EPage } from '@stencil/core/testing';

describe('midwest-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-item></midwest-item>');

    const element = await page.find('midwest-item');
    expect(element).toHaveClass('hydrated');
  });
});
