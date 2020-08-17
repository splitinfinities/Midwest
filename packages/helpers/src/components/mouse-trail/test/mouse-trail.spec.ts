import { newSpecPage } from '@stencil/core/testing';
import { StellarMouseTrail } from './mouse-trail';

describe('midwest-mouse-trail', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [StellarMouseTrail],
      html: `<midwest-mouse-trail><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /></midwest-mouse-trail>`,
    });

    expect(page.root).toEqualHtml(`
      <midwest-mouse-trail>
        <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\">
      </midwest-mouse-trail>
    `);
  });
})