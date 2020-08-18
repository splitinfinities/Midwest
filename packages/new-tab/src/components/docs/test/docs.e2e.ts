import { newE2EPage } from '@stencil/core/testing';

describe('stencil-docs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-docs></stencil-docs>');

    const element = await page.find('stencil-docs');
    expect(element).toHaveClass('hydrated');
  });
});
