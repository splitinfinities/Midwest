import { newE2EPage } from '@stencil/core/testing';

describe('midwest-onboarding', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-onboarding></midwest-onboarding>');

    const element = await page.find('midwest-onboarding');
    expect(element).toHaveClass('hydrated');
  });
});
