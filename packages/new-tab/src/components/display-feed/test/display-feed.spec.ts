import { render } from '@stencil/core/testing';
import { DisplayFeed } from '../display-feed';

describe('my-app', () => {
  it('should build', () => {
    expect(new DisplayFeed()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [DisplayFeed],
        html: '<display-feed></display-feed>'
      });
    });
  });
});
