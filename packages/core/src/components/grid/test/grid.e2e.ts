import { newE2EPage } from '@stencil/core/testing';

describe('midwest-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-grid><midwest-card></midwest-card><midwest-card></midwest-card><midwest-card></midwest-card><midwest-card></midwest-card></midwest-grid>');
    const element = await page.find('midwest-grid');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0.2 })
  });
});
