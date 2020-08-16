import { newE2EPage } from '@stencil/core/testing';

describe('midwest-rich-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-rich-text></midwest-rich-text>');

    const element = await page.find('midwest-rich-text');
    expect(element).toHaveClass('hydrated');
  });
});
