import { newE2EPage } from '@stencil/core/testing';

describe('midwest-device', () => {
  it('renders frame for default frame', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders apple-tv', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="apple-tv"><img src="https://placehold.it/1920x1080/ABC/FFF"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders apple-tv-in-app', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="apple-tv-in-app"><img src="https://placehold.it/1920x720/ABC/FFF"><img slot="secondary" src="https://placehold.it/740x444/ABC/FFF"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders apple-watch-42-black', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="apple-watch-42-black"><img src="https://placehold.it/624x780/ABC/FFF"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders apple-watch-42-white', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="apple-watch-42-white"><img src="https://placehold.it/624x780/ABC/FFF"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders apple-watch-44-black', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="apple-watch-44-black"><img src="https://placehold.it/736x896/ABC/FFF"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders apple-watch-44-white', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="apple-watch-44-white"><img src="https://placehold.it/736x896/ABC/FFF"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders imac-pro', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="imac-pro"><img src="https://placehold.it/2560x1440/ABC/FFF"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders imac', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="imac"><img src="https://placehold.it/2560x1440/ABC/FFF"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders ipad-pro-portrait', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="ipad-pro-portrait"><img src="https://placehold.it/2048x2732/ABC/FFF"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders ipad-pro-landscape', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="ipad-pro-landscape"><img src="https://placehold.it/2732x2048/ABC/FFF"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders iphone-8-silver', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="iphone-8-silver"><img src="https://placehold.it/750x1334/ABC/FFF"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders iphone-8-spacegray', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="iphone-8-spacegray"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders iphone-8-plus-silver', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="iphone-8-plus-silver"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders iphone-8-plus-spacegray', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="iphone-8-plus-spacegray"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders iphone-xs', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="iphone-xs"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders iphone-xs-max', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="iphone-xs-max"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders ipod-touch-portrait-blue', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="ipod-touch-portrait-blue"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders ipod-touch-landscape-blue', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="ipod-touch-landscape-blue"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders ipod-touch-portrait-silver', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="ipod-touch-portrait-silver"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders ipod-touch-landscape-silver', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="ipod-touch-landscape-silver"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders macbook-air', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="macbook-air"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });

  it('renders macbook-pro', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-device frame="macbook-pro"></midwest-device>');
    const element = await page.find('midwest-device');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 })
  });
});
