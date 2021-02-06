import { newE2EPage } from '@stencil/core/testing';

describe('copy-wrap', () => {
  it('renders normally', async () => {
    const page = await newE2EPage();

    await page.setContent(`
        <copy-wrap>
            <h1>Heading</h1>
            <h2>Heading</h2>
            <h3>Heading</h3>
            <h4>Heading</h4>
            <h5>Heading</h5>
            <h6>Heading</h6>
            <p>Paragraph</p>
        </copy-wrap>
    `);
    const element = await page.find('copy-wrap');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
  });

  it('renders theme', async () => {
    const page = await newE2EPage();

    await page.setContent(`
        <copy-wrap class="bg-theme-5">
            <h1>Heading</h1>
            <h2>Heading</h2>
            <h3>Heading</h3>
            <h4>Heading</h4>
            <h5>Heading</h5>
            <h6>Heading</h6>
            <p>Paragraph</p>
        </copy-wrap>
    `);
    const element = await page.find('copy-wrap');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
  });

  it('renders dark', async () => {
    const page = await newE2EPage();

    await page.setContent(`
        <copy-wrap class="bg-theme-9">
            <h1>Heading</h1>
            <h2>Heading</h2>
            <h3>Heading</h3>
            <h4>Heading</h4>
            <h5>Heading</h5>
            <h6>Heading</h6>
            <p>Paragraph</p>
        </copy-wrap>
    `);
    const element = await page.find('copy-wrap');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
  });

  it('renders light', async () => {
    const page = await newE2EPage();

    await page.setContent(`
        <copy-wrap class="bg-theme-0">
            <h1>Heading</h1>
            <h2>Heading</h2>
            <h3>Heading</h3>
            <h4>Heading</h4>
            <h5>Heading</h5>
            <h6>Heading</h6>
            <p>Paragraph</p>
        </copy-wrap>
    `);
    const element = await page.find('copy-wrap');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
  });

  it('renders on contrasting colors', async () => {
    const page = await newE2EPage();

    await page.setContent(`
    <div class="theme-indigo bg-theme-9">
        <copy-wrap class="theme-red">
            <h1>Heading</h1>
            <h2>Heading</h2>
            <h3>Heading</h3>
            <h4>Heading</h4>
            <h5>Heading</h5>
            <h6>Heading</h6>
            <p>Paragraph</p>
        </copy-wrap>
    </div>
    `);
    const element = await page.find('copy-wrap');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
  });
});
