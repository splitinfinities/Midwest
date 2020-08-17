import { newE2EPage } from '@stencil/core/testing';

describe('midwest-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-modal></midwest-modal>');

    const element = await page.find('midwest-modal');
    expect(element).toHaveClass('hydrated');
  });
});
