import { newSpecPage } from '@stencil/core/testing';
import { SaOnboarding } from './midwest-onboarding';

describe('midwest-onboarding', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SaOnboarding],
      html: `<midwest-onboarding></midwest-onboarding>`,
    });
    expect(page.root).toEqualHtml(`
      <midwest-onboarding>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </midwest-onboarding>
    `);
  });
});
