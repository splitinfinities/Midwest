import { newE2EPage } from '@stencil/core/testing';

describe('midwest-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/design-system.css" rel="stylesheet" /><midwest-tooltip></midwest-tooltip>');
    const element = await page.find('midwest-tooltip');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0.2 })
  });
});
