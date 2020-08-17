import { newE2EPage } from '@stencil/core/testing';

describe('midwest-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent(`<midwest-accordion>
      <p slot="label">Title <midwest-tag size='tiny'>New</midwest-tag></p>
        <h1>Content!</h1>
        <h2>Hello!</h2>
      </midwest-accordion>
      <midwest-accordion open>
      <p slot="label">Title <midwest-tag size='tiny'>New</midwest-tag></p>
        <h1>Content!</h1>
        <h2>Hello!</h2>
      </midwest-accordion>
    `);
    const element = await page.find('midwest-accordion');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
  });
});
