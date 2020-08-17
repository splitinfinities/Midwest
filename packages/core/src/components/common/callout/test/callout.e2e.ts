import { newE2EPage } from '@stencil/core/testing';

describe('midwest-callout', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-callout></midwest-callout>');
    const element = await page.find('midwest-callout');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0.2 })
  });

  it('renders changes to the type', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-callout type="error"><p>Oh god no why!</p></midwest-callout>');
    const element = await page.find('midwest-callout');
    expect(element.getAttribute('aria-label')).toEqual(`An error message. Oh god no why!`);
    expect(element.getAttribute('aria-role')).toEqual(`status`);
    expect(element.getAttribute('tabindex')).toEqual('0');

    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0.2 })
  });
});
