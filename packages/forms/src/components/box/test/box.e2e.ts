import { newE2EPage } from '@stencil/core/testing';

describe('midwest-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-box></midwest-box>');

    const element = await page.find('midwest-box');
    expect(element).toHaveClass('hydrated');
  });
});
