import { newE2EPage } from '@stencil/core/testing';

describe('midwest-input-file', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-input-file></midwest-input-file>');

    const element = await page.find('midwest-input-file');
    expect(element).toHaveClass('hydrated');
  });
});
