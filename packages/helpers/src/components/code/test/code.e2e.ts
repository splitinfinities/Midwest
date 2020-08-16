import { newE2EPage } from '@stencil/core/testing';

describe('midwest-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/midwest-core.css" rel="stylesheet" /><midwest-card></midwest-card>');
    const element = await page.find('midwest-card');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
  });
});
