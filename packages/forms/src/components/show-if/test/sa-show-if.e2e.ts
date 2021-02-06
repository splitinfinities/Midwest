import { newE2EPage } from '@stencil/core/testing';

describe('midwest-show-if', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-show-if></midwest-show-if>');

    const element = await page.find('midwest-show-if');
    expect(element).toHaveClass('hydrated');
  });
});
