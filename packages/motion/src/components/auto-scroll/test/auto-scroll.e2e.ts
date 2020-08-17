import { newE2EPage } from '@stencil/core/testing';

describe('midwest-auto-scroll', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-auto-scroll></midwest-auto-scroll>');

    const element = await page.find('midwest-auto-scroll');
    expect(element).toHaveClass('hydrated');
  });
});
