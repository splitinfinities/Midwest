import { newE2EPage } from '@stencil/core/testing';

describe('midwest-google-maps-marker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-google-maps-marker></midwest-google-maps-marker>');

    const element = await page.find('midwest-google-maps-marker');
    expect(element).toHaveClass('hydrated');
  });
});
