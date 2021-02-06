import { newE2EPage } from '@stencil/core/testing';

describe('midwest-field-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-field-group></midwest-field-group>');

    const element = await page.find('midwest-field-group');
    expect(element).toHaveClass('hydrated');
  });
});
