import { newSpecPage } from '@stencil/core/testing';
import { Form } from '../form';

describe('midwest-form', () => {
  it('should render and respond to changes appropriately', () => {
    const form = new Form();
    expect(form).toBeInstanceOf(Form);
  });

  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Form],
      html: `<midwest-form></midwest-form>`,
    });

    expect(page.root).toEqualHtml(`
      <midwest-form>
        <form autocomplete=\"on\" enctype=\"multipart/form-data\" method=\"get\"></form>
      </midwest-form>
    `);
  });

  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Form],
      html: `<midwest-form></midwest-form>`,
    });

    expect(page.root).toEqualHtml(`
      <midwest-form>
        <form autocomplete=\"on\" enctype=\"multipart/form-data\" method=\"get\"></form>
      </midwest-form>
    `);
  });
});
