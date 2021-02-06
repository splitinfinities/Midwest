import { newE2EPage } from '@stencil/core/testing';

describe('midwest-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setViewport({ width: 1200, height: 1200 });

    await page.setContent(`
    <midwest-layout>
        <section><midwest-card></midwest-card></section>
        <aside><midwest-card></midwest-card></aside>
    </midwest-layout>`);
    const element = await page.find('midwest-layout');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0.2 })
  });

  it('renders as a sidebar', async () => {
    const page = await newE2EPage();

    await page.setViewport({ width: 1200, height: 1200 })

    await page.setContent(`
    <midwest-layout type="sidebar">
        <section>
            <midwest-card></midwest-card>
        </section>
        <aside>
            <midwest-card></midwest-card>
        </aside>
    </midwest-layout>`);

    const element = await page.find('midwest-layout');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0.2 })
  });
});
