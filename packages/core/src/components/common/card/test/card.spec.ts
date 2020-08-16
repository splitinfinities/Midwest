import { newSpecPage } from '@stencil/core/testing';
import { Card } from '../card';
import delay from 'async-delay';

describe('midwest-card', () => {
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<midwest-card></midwest-card>`,
    });

    expect(page.root).toEqualHtml(`<midwest-card padding=\"medium\">
    <mock:shadow-root>
      <div class=\"wrap\" href=\"#\" url=\"#\" value=\"#\">
        <slot></slot>
      </div>
    </mock:shadow-root>
  </midwest-card>`);
  });

  it('renders with headers and footers', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<midwest-card>
        <header></header>
        <section></section>
        <footer></footer>
      </midwest-card>`,
    });

    expect(page.root).toEqualHtml(`<midwest-card padding=\"medium\">
    <mock:shadow-root>
      <div class=\"wrap\" href=\"#\" url=\"#\" value=\"#\">
        <slot></slot>
      </div>
    </mock:shadow-root>
    <header></header>
    <section></section>
    <footer></footer>
  </midwest-card>`);
  });

  it('renders flippable', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<midwest-card flippable>
        <header></header>
        <section></section>
        <footer></footer>
        <header slot="back"></header>
        <section slot="back"></section>
        <footer slot="back"></footer>
      </midwest-card>`,
    });

    expect(page.root).toEqualHtml(`<midwest-card flippable=\"\" padding=\"medium\" style="--min-height: undefinedpx; --flipped-min-height: undefinedpx;">
      <mock:shadow-root>
        <div class=\"wrap\" href=\"#\" url=\"#\" value=\"#\">
          <midwest-button class=\"flip-button\" ghost=\"\" tag=\"button\">
            <ion-icon class=\"ma0\" name=\"md-create\"/>
          </midwest-button>
          <div class=\"front\">
            <slot></slot>
          </div>
          <div class=\"back\">
            <slot name=\"back\"></slot>
          </div>
        </div>
      </mock:shadow-root>
      <header></header>
      <section></section>
      <footer></footer>
      <header slot=\"back\"></header>
      <section slot=\"back\"></section>
      <footer slot=\"back\"></footer>
    </midwest-card>`);

    await page.root.flip_card();
    await delay(200);

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`<midwest-card flip-ready=\"\" flippable=\"\" flipped=\"\" padding=\"medium\" style="--min-height: undefinedpx; --flipped-min-height: undefinedpx;">
      <mock:shadow-root>
        <div class=\"wrap\" href=\"#\" url=\"#\" value=\"#\">
          <midwest-button class=\"flip-button\" ghost=\"\" tag=\"button\">
            <ion-icon class=\"ma0\" name=\"close\"/>
          </midwest-button>
          <div class=\"front\">
            <slot></slot>
          </div>
          <div class=\"back\">
            <slot name=\"back\"></slot>
          </div>
        </div>
      </mock:shadow-root>
      <header></header>
      <section></section>
      <footer></footer>
      <header slot=\"back\"></header>
      <section slot=\"back\"></section>
      <footer slot=\"back\"></footer>
    </midwest-card>`);

    page.root.flippable = false;

    await page.waitForChanges();
    await delay(100);
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`<midwest-card padding=\"medium\">
      <mock:shadow-root>
        <div class=\"wrap\" href=\"#\" url=\"#\" value=\"#\">
          <slot></slot>
        </div>
      </mock:shadow-root>
      <header></header>
      <section></section>
      <footer></footer>
      <header slot=\"back\"></header>
      <section slot=\"back\"></section>
      <footer slot=\"back\"></footer>
    </midwest-card>`);


    page.root.flippable = true;

    await page.waitForChanges();
    await delay(100);
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`<midwest-card flippable=\"\" padding=\"medium\" style=\"--min-height: undefinedpx; --flipped-min-height: undefinedpx;\">
    <mock:shadow-root>
      <div class=\"wrap\" href=\"#\" url=\"#\" value=\"#\">
        <midwest-button class=\"flip-button\" ghost=\"\" tag=\"button\">
          <ion-icon class=\"ma0\" name=\"md-create\"/>
        </midwest-button>
        <div class=\"front\">
          <slot></slot>
        </div>
        <div class=\"back\">
          <slot name=\"back\"></slot>
        </div>
      </div>
    </mock:shadow-root>
    <header></header>
    <section></section>
    <footer></footer>
    <header slot=\"back\"></header>
    <section slot=\"back\"></section>
    <footer slot=\"back\"></footer>
  </midwest-card>`);
  });
});