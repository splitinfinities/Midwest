import { newE2EPage } from '@stencil/core/testing';

describe('midwest-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-card></midwest-card>');
    const element = await page.find('midwest-card');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0.2 })
  });
});
