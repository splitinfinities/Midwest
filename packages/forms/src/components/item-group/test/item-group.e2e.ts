import { newE2EPage } from '@stencil/core/testing';

describe('midwest-item-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-item-group></midwest-item-group>');

    const element = await page.find('midwest-item-group');
    expect(element).toHaveClass('hydrated');
  });
});
