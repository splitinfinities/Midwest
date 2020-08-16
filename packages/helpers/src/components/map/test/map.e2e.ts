import { newE2EPage } from '@stencil/core/testing';

describe('midwest-map', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-map></midwest-map>');

    const element = await page.find('midwest-map');
    expect(element).toHaveClass('hydrated');
  });
});
