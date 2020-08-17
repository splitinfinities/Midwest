import { newSpecPage } from '@stencil/core/testing';
import { Autocomplete } from '../autocomplete';

describe('midwest-autocomplete', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Autocomplete],
      html: `<midwest-autocomplete></midwest-autocomplete>`,
    });
    expect(page.root).toEqualHtml(`
      <midwest-autocomplete position="down">
        <mock:shadow-root>
          <midwest-input name="post[assigned_to_id]" type="hidden"></midwest-input>
          <div class="relative">
            <midwest-input label="Choose a user" novalidate="" type="search"></midwest-input>
            <midwest-form-rollup placeholder="Search for a User..." verbiage="User"></midwest-form-rollup>
            <div class="list no-query no-results"></div>
            <div hidden=""></div>
          </div>
        </mock:shadow-root>
      </midwest-autocomplete>
    `);
  });
});
