import { newE2EPage } from '@stencil/core/testing';

describe('midwest-repeatable-fields', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-repeatable-fields></midwest-repeatable-fields>');

    const element = await page.find('midwest-repeatable-fields');
    expect(element).toHaveClass('hydrated');
  });
});
