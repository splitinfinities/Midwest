import { newE2EPage } from '@stencil/core/testing';
import { renderToSketch } from '../../../utils/includeSketch'

describe('midwest-blur', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/midwest-core.css" rel="stylesheet" /><midwest-blur><h1>Awesome!</h1></midwest-blur>');
    const element = await page.find('midwest-blur');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
    await renderToSketch(page, "blur", "default")
  });

  it('Blurs content vertically', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/midwest-core.css" rel="stylesheet" /><midwest-blur vertical="10"><h1>Awesome!</h1></midwest-blur>');
    const element = await page.find('midwest-blur');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()

    await renderToSketch(page, "blur", "vertical")
  });

  it('Blurs content horizontally', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/midwest-core.css" rel="stylesheet" /><midwest-blur horizontal="10"><h1>Awesome!</h1></midwest-blur>');
    const element = await page.find('midwest-blur');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()

    await renderToSketch(page, "blur", "horizontal")
  });

  it('Blurs content in both directions', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/midwest-core.css" rel="stylesheet" /><midwest-blur horizontal="10" vertical="10"><h1>Awesome!</h1></midwest-blur>');
    const element = await page.find('midwest-blur');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()

    await renderToSketch(page, "blur", "both")
  });

});
