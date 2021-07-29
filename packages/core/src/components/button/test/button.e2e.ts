import { newE2EPage } from '@stencil/core/testing';

describe('midwest-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/design-system.css" rel="stylesheet" /><midwest-button></midwest-button>');
    const element = await page.find('midwest-button');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0.2 });
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/design-system.css" rel="stylesheet" /><midwest-button></midwest-button>');
    const element = await page.find('midwest-button');
    expect(element.textContent).toEqual(``);

    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0.2 });
  });
});
