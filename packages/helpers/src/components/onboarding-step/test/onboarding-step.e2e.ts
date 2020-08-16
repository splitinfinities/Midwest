import { newE2EPage } from '@stencil/core/testing';

describe('midwest-onboarding-step', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<midwest-onboarding-step></midwest-onboarding-step>');

    const element = await page.find('midwest-onboarding-step');
    expect(element).toHaveClass('hydrated');
  });
});
