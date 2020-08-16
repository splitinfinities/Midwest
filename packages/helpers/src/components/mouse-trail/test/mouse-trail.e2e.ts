import { newE2EPage } from '@stencil/core/testing';

describe('midwest-mouse-trail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-mouse-trail></midwest-mouse-trail>');

    const element = await page.find('midwest-mouse-trail');
    expect(element).toHaveClass('hydrated');
  });
});
