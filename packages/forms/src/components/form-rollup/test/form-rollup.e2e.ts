import { newE2EPage } from '@stencil/core/testing';

describe('midwest-form-rollup', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-form-rollup></midwest-form-rollup>');

    const element = await page.find('midwest-form-rollup');
    expect(element).toHaveClass('hydrated');
  });
});
