import { newSpecPage } from '@stencil/core/testing';
import { Time } from '../time';

describe('midwest-time', () => {
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Time],
      html: `<midwest-time unix="1585935974"></midwest-time>`,
    });

    expect(page.root).toEqualHtml(`<midwest-time unix="1585935974" style="all: inherit; display: inline !important;">
      April 3 2020, 12:46:14 pm
    </midwest-time>`);
  });
});
