import { newE2EPage } from '@stencil/core/testing';

describe('midwest-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-select></midwest-select>');

    const element = await page.find('midwest-select');
    expect(element).toHaveClass('hydrated');
  });
});
