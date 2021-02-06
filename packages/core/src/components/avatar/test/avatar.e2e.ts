import { newE2EPage } from '@stencil/core/testing';

describe('midwest-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-avatar size="small"></midwest-avatar>');
    const element = await page.find('midwest-avatar');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0.2 })

  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-avatar name="William M. Riley"></midwest-avatar>');
    const element = await page.find('midwest-avatar >>> div.letter');
    expect(element.textContent).toEqual(`WM`);
  });

  it('renders avatar colors', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-avatar name="William M. Riley" color="red"></midwest-avatar><midwest-avatar name="William M. Riley" color="orange"></midwest-avatar><midwest-avatar name="William M. Riley" color="yellow"></midwest-avatar><midwest-avatar name="William M. Riley" color="lime"></midwest-avatar><midwest-avatar name="William M. Riley" color="green"></midwest-avatar><midwest-avatar name="William M. Riley" color="cyan"></midwest-avatar><midwest-avatar name="William M. Riley" color="blue"></midwest-avatar><midwest-avatar name="William M. Riley" color="indigo"></midwest-avatar><midwest-avatar name="William M. Riley" color="violet"></midwest-avatar></midwest-avatar><midwest-avatar name="William M. Riley" color="gray"></midwest-avatar>');
    await page.waitForChanges();
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0.2 })
  });

  it('renders avatar sizes', async () => {
    const page = await newE2EPage();

    await page.setContent('<midwest-avatar name="William M. Riley" size="tiny"></midwest-avatar><midwest-avatar name="William M. Riley" size="small"></midwest-avatar><midwest-avatar name="William M. Riley" size="medium"></midwest-avatar><midwest-avatar name="William M. Riley" size="large"></midwest-avatar>');
    await page.waitForChanges();
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0.2 })
  });
});
