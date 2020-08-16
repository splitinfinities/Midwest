import { newSpecPage } from '@stencil/core/testing';
import { SaOnboardingStep } from './midwest-onboarding-step';

describe('midwest-onboarding-step', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SaOnboardingStep],
      html: `<midwest-onboarding-step></midwest-onboarding-step>`,
    });
    expect(page.root).toEqualHtml(`
      <midwest-onboarding-step>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </midwest-onboarding-step>
    `);
  });
});
