import { newE2EPage } from '@stencil/core/testing';

describe('midwest-interstitial', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-interstitial></midwest-interstitial>');

    const element = await page.find('midwest-interstitial');
    expect(element).toHaveClass('hydrated');
  });
});
