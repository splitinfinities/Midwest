import { newE2EPage } from '@stencil/core/testing';

describe('midwest-validate', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-validate></midwest-validate>');

    const element = await page.find('midwest-validate');
    expect(element).toHaveClass('hydrated');
  });
});
