import { newE2EPage } from '@stencil/core/testing';

describe('midwest-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-avatar size="small"></midwest-avatar>');
    const element = await page.find('midwest-avatar');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0.2 });
  });
});
