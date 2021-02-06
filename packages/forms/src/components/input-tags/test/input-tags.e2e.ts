import { newE2EPage } from '@stencil/core/testing';

describe('midwest-input-tags', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-input-tags></midwest-input-tags>');

    const element = await page.find('midwest-input-tags');
    expect(element).toHaveClass('hydrated');
  });
});
