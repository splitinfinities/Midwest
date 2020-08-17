import { newE2EPage } from '@stencil/core/testing';

describe('midwest-autocomplete', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-autocomplete></midwest-autocomplete>');

    const element = await page.find('midwest-autocomplete');
    expect(element).toHaveClass('hydrated');
  });
});
