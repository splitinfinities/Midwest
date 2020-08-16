import { newSpecPage } from '@stencil/core/testing';
import { Input } from '../input';
import { Validate } from '../../validate/validate';
import { Form } from '../../form/form';

describe('midwest-input', () => {
  it('renders by default', async () => {
    const page = await newSpecPage({
      components: [Input],
      html: `<midwest-input label="Nice label!" description="Great description!" tooltip="Awesome tooltip!"><ion-icon name="nice" slot="icon"/></midwest-input>`,
    });

    expect(page.root).toEqualHtml(`
      <midwest-input class="complement-undefined theme-undefined" description="Great description!" icon="" label="Nice label!" icon="" placeholder="Enter a value" size="default" tooltip="Awesome tooltip!" type="text">
        <mock:shadow-root>
          <context-consumer></context-consumer>
          <div class="wrapper">
            <label>
              <midwest-label for="input" size="default">
                Nice label!
              </midwest-label>
              <div class="content">
                <div class="icon">
                  <slot name="icon"></slot>
                </div>
                <input autocomplete="text" class="input" id="input" maxlength="1000" placeholder="Enter a value" step="1" tabindex="0" type="text">
                  <midwest-tooltip align="bottom-left">
                    Awesome tooltip!
                  </midwest-tooltip>
                </div>
              <midwest-validate size="default"></midwest-validate>
              <midwest-label size="small" underneath="">
                Great description!
              </midwest-label>
            </label>
          </div>
        </mock:shadow-root>
        <ion-icon name="nice" slot="icon"/>
      </midwest-input>
    `);
  });

  it('renders text area', async () => {
    const page = await newSpecPage({
      components: [Input],
      html: `<midwest-input type="textarea"></midwest-input>`,
    });

    expect(page.root).toEqualHtml(`
    <midwest-input class="complement-undefined theme-undefined" placeholder="Enter a value" size="default" type="textarea">
      <mock:shadow-root>
        <context-consumer></context-consumer>
        <div class="wrapper">
          <label>
            <div class="content">
              <textarea class="input" cols="30" id="input" maxlength="1000" placeholder="Enter a value" rows="2" spellcheck="true" tabindex="0"></textarea>
            </div>
            <midwest-validate size="default"></midwest-validate>
          </label>
        </div>
      </mock:shadow-root>
    </midwest-input>
    `);

    const textareaEl = page.root.shadowRoot.querySelector('textarea');

    textareaEl.dispatchEvent(new Event('input'));
    textareaEl.dispatchEvent(new Event('change'));
    textareaEl.dispatchEvent(new Event('focus'));

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`<midwest-input class=\"complement-undefined theme-undefined\" focused=\"\" placeholder=\"Enter a value\" size=\"default\" type=\"textarea\">
      <mock:shadow-root>
        <context-consumer></context-consumer>
        <div class=\"wrapper\">
          <label>
            <div class=\"content\">
              <textarea class=\"input\" cols=\"30\" id=\"input\" maxlength=\"1000\" placeholder=\"Enter a value\" rows=\"2\" spellcheck=\"true\" tabindex=\"0\" style=\"height: undefinedpx;\"></textarea>
            </div>
            <midwest-validate size=\"default\"></midwest-validate>
          </label>
        </div>
      </mock:shadow-root>
    </midwest-input>`);

    textareaEl.dispatchEvent(new Event('blur'));

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`<midwest-input class=\"complement-undefined theme-undefined\" placeholder=\"Enter a value\" size=\"default\" type=\"textarea\">
    <mock:shadow-root>
      <context-consumer></context-consumer>
      <div class=\"wrapper\">
        <label>
          <div class=\"content\">
            <textarea class=\"input\" cols=\"30\" id=\"input\" maxlength=\"1000\" placeholder=\"Enter a value\" rows=\"2\" spellcheck=\"true\" tabindex=\"0\" style=\"height: undefinedpx;\"></textarea>
          </div>
          <midwest-validate size=\"default\"></midwest-validate>
        </label>
      </div>
    </mock:shadow-root>
  </midwest-input>`);
  });

  it('renders date picker', async () => {
    const page = await newSpecPage({
      components: [Input],
      html: `<midwest-input type="date"></midwest-input>`,
    });

    const _d = new Date(Date.now());
    const date = _d.toLocaleDateString('default', {month: 'long', day: '2-digit', year: "numeric"});
    const dateString = new Date(_d.getTime() - (_d.getTimezoneOffset() * 60000 ))
                      .toISOString()
                      .split("T")[0];

    expect(page.root).toEqualHtml(`
    <midwest-input class="complement-undefined theme-undefined" placeholder="Enter a value" size="default" type="date" value="${dateString}">
      <mock:shadow-root>
        <context-consumer></context-consumer>
        <div class="wrapper">
          <label>
            <div class="content">
              <div class="relative">
                <div class="fake-input absolute">
                  ${date}
                </div>
              </div>
              <input class="input" id="input" tabindex="0" type="text" placeholder="Enter a value" maxlength="1000" step="1" autocomplete="date" value="${dateString}">
            </div>
            <midwest-validate size="default"></midwest-validate>
          </label>
        </div>
      </mock:shadow-root>
    </midwest-input>
    `);

    page.root.dateType = "month";

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`<midwest-input class=\"complement-undefined theme-undefined\" placeholder=\"Enter a value\" size=\"default\" type=\"date\" value="${dateString}">
    <mock:shadow-root>
      <context-consumer></context-consumer>
      <div class=\"wrapper\">
        <label>
          <div class=\"content\">
            <div class=\"relative\">
              <div class=\"absolute fake-input\">
                May, 2020
              </div>
            </div>
            <input autocomplete=\"date\" class=\"input\" id=\"input\" maxlength=\"1000\" placeholder=\"Enter a value\" step=\"1\" tabindex=\"0\" type=\"text\" value="${dateString}">
          </div>
          <midwest-validate size=\"default\"></midwest-validate>
        </label>
      </div>
    </mock:shadow-root>
  </midwest-input>`);

    page.root.dateType = "year";

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`<midwest-input class=\"complement-undefined theme-undefined\" placeholder=\"Enter a value\" size=\"default\" type=\"date\" value="${dateString}">
    <mock:shadow-root>
      <context-consumer></context-consumer>
      <div class=\"wrapper\">
        <label>
          <div class=\"content\">
            <div class=\"relative\">
              <div class=\"absolute fake-input\">
                2020
              </div>
            </div>
            <input autocomplete=\"date\" class=\"input\" id=\"input\" maxlength=\"1000\" placeholder=\"Enter a value\" step=\"1\" tabindex=\"0\" type=\"text\" value="${dateString}">
          </div>
          <midwest-validate size=\"default\"></midwest-validate>
        </label>
      </div>
    </mock:shadow-root>
  </midwest-input>`);

    page.root.dateType = "default";

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`<midwest-input class=\"complement-undefined theme-undefined\" placeholder=\"Enter a value\" size=\"default\" type=\"date\" value="${dateString}">
    <mock:shadow-root>
      <context-consumer></context-consumer>
      <div class=\"wrapper\">
        <label>
          <div class=\"content\">
            <div class=\"relative\">
              <div class=\"absolute fake-input\">
                May 21, 2020
              </div>
            </div>
            <input autocomplete=\"date\" class=\"input\" id=\"input\" maxlength=\"1000\" placeholder=\"Enter a value\" step=\"1\" tabindex=\"0\" type=\"text\" value="${dateString}">
          </div>
          <midwest-validate size=\"default\"></midwest-validate>
        </label>
      </div>
    </mock:shadow-root>
  </midwest-input>`);
  });

  it('renders default', async () => {
    const page = await newSpecPage({
      components: [Input],
      html: `<midwest-input default="nice"></midwest-input>`,
    });

    expect(page.rootInstance.value).toBe("nice");

    expect(page.root).toEqualHtml(`
      <midwest-input class="complement-undefined theme-undefined" default="nice" placeholder="Enter a value" size="default" type="text" value="nice">
        <mock:shadow-root>
          <context-consumer></context-consumer>
          <div class="wrapper">
            <label>
              <div class="content">
                <input autocomplete="text" class="input" id="input" maxlength="1000" placeholder="Enter a value" step="1" tabindex="0" type="text" value="nice" />
              </div>
              <midwest-validate size="default"></midwest-validate>
            </label>
          </div>
        </mock:shadow-root>
      </midwest-input>
    `);
  });

  it('renders passwords', async () => {
    const page = await newSpecPage({
      components: [Input, Validate, Form],
      html: `<midwest-form><midwest-input type="password" show-caps-lock></midwest-input></midwest-form>`,
    });

    const element = page.root.querySelector("midwest-input");

    expect(page.body).toEqualHtml(`<midwest-form>
      <form autocomplete="on" enctype="multipart/form-data" method="get">
        <input class="clip" tabindex="-1" type="password">
        <midwest-input class="complement-undefined theme-undefined" placeholder="Enter a value" show-caps-lock="" size="default" type="password">
          <mock:shadow-root>
            <context-consumer></context-consumer>
            <div class="wrapper">
              <label>
                <div class="content">
                  <input autocomplete="password" class="input" id="input" maxlength="1000" placeholder="Enter a value" step="1" tabindex="0" type="password">
                  <ion-icon class="smile" data-level="-1" name="sad"/>
                </div>
                <midwest-validate></midwest-validate>
              </label>
            </div>
          </mock:shadow-root>
        </midwest-input>
      </form>
    </midwest-form>
    `);

    element.value = "qwertyqwerty";

    const result = await element.validate();

    await page.waitForChanges();

    expect(page.body).toEqualHtml(`<midwest-form>
      <form autocomplete="on" enctype="multipart/form-data" method="get">
        <input class="clip" tabindex="-1" type="password" value="qwertyqwerty">
        <midwest-input class="complement-undefined invalid theme-undefined" placeholder="Enter a value" show-caps-lock="" size="default" type="password" value="qwertyqwerty">
          <mock:shadow-root>
            <context-consumer></context-consumer>
            <div class="wrapper">
              <label>
                <div class="content">
                  <input autocomplete="password" class="input" id="input" maxlength="1000" placeholder="Enter a value" step="1" tabindex="0" type="password" value="qwertyqwerty">
                  <ion-icon class="smile" data-level="-1" name="sad"/>
                </div>
                <midwest-validate>
                  <midwest-label size="default">
                    <span>
                      Repeats like "abcabcabc" are only slightly harder to guess than "abc"
                    </span>
                  </midwest-label>
                </midwest-validate>
              </label>
            </div>
          </mock:shadow-root>
        </midwest-input>
      </form>
    </midwest-form>`);

    expect(result).toEqual({
      "errors": [
        {
          "message": "This password must be stonger.",
          "method": "password",
        },
        {
          "message": "Repeats like \"abcabcabc\" are only slightly harder to guess than \"abc\"",
          "method": "password_warning",
        },
      ],
      "name": undefined,
      "strength": 0,
      "valid": false,
      "value": "qwertyqwerty",
    })

  });

  it('renders matching', async () => {
    const page = await newSpecPage({
      components: [Input],
      html: `<midwest-input type="password" id="matcher" value="asdf"></midwest-input><midwest-input type="password" match="#matcher" value="asdr"></midwest-input>`,
    });

    expect(page.body).toEqualHtml(`
      <input class="clip" tabindex="-1" type="password">
      <midwest-input class="complement-undefined theme-undefined" id="matcher" placeholder="Enter a value" show-caps-lock="" size="default" type="password" value="asdf">
        <mock:shadow-root>
          <context-consumer></context-consumer>
          <div class="wrapper">
            <label>
              <div class="content">
                <input autocomplete="password" class="input" id="input" maxlength="1000" placeholder="Enter a value" step="1" tabindex="0" type="password" value="asdf">
                <ion-icon class="smile" data-level="-1" name="sad"/>
              </div>
              <midwest-validate size="default"></midwest-validate>
            </label>
          </div>
        </mock:shadow-root>
      </midwest-input>
      <input class="clip" tabindex="-1" type="password">
      <midwest-input class="complement-undefined theme-undefined" match="#matcher" placeholder="Enter a value" show-caps-lock="" size="default" type="password" value="asdr">
        <mock:shadow-root>
          <context-consumer></context-consumer>
          <div class="wrapper">
            <label>
              <div class="content">
                <input autocomplete="password" class="input" id="input" maxlength="1000" placeholder="Enter a value" step="1" tabindex="0" type="password" value="asdr">
                <ion-icon class="smile" data-level="-1" name="sad"/>
              </div>
              <midwest-validate size="default"></midwest-validate>
            </label>
          </div>
        </mock:shadow-root>
      </midwest-input>
    `);
  });

  // it('cannot render matching', async () => {
  //   const page = await newSpecPage({
  //     components: [Input],
  //     html: `<midwest-input type="password" match="#matcher" value="asdf"></midwest-input>`,
  //   });

  //   // expect(page.rootInstance).toThrow(Error);
  //   // 'Uh oh! Couldn't find element in DOM matching midwest-input#matcher'
  // });

  it('renders validation', async () => {
    const page = await newSpecPage({
      components: [Input, Validate, Form],
      html: `<midwest-form><midwest-input type="password" id="matcher" value="asdf"></midwest-input></midwest-form>`,
    });

    await page.waitForChanges();

    const element = page.root.querySelector("midwest-input");

    await element.validate();
    
    await page.waitForChanges();

    expect(element).toEqualHtml(`<midwest-input class="complement-undefined invalid theme-undefined" id="matcher" placeholder="Enter a value" show-caps-lock="" size="default" type="password" value="asdf">
      <mock:shadow-root>
        <context-consumer></context-consumer>
        <div class="wrapper">
          <label>
            <div class="content">
              <input autocomplete="password" class="input" id="input" maxlength="1000" placeholder="Enter a value" step="1" tabindex="0" type="password" value="asdf">
              <ion-icon class="smile" data-level="-1" name="sad"/>
            </div>
            <midwest-validate>
              <midwest-label size="default">
                <span>This is a very common password</span>
              </midwest-label>
            </midwest-validate>
          </label>
        </div>
      </mock:shadow-root>
    </midwest-input>
    `);
  });

  it('Helper Methods', async () => {
    const page = await newSpecPage({
      components: [Input],
      html: `<midwest-input type="password" id="matcher" value="asdf"></midwest-input>`,
    });

    expect(page.root).toEqualHtml(`<midwest-input class="complement-undefined theme-undefined" id="matcher" placeholder="Enter a value" show-caps-lock="" size="default" type="password" value="asdf">
      <mock:shadow-root>
        <context-consumer></context-consumer>
        <div class="wrapper">
          <label>
            <div class="content">
              <input autocomplete="password" class="input" id="input" maxlength="1000" placeholder="Enter a value" step="1" tabindex="0" type="password" value="asdf">
              <ion-icon class="smile" data-level="-1" name="sad"/>
            </div>
            <midwest-validate size="default"></midwest-validate>
          </label>
        </div>
      </mock:shadow-root>
    </midwest-input>
    `);
  });

  it('renders search', async () => {
    const page = await newSpecPage({
      components: [Input],
      html: `<midwest-input type="search" id="matcher" value="asdf"></midwest-input>`,
    });

    expect(page.root).toEqualHtml(`<midwest-input class="complement-undefined theme-undefined" id="matcher" placeholder="Enter a value" size="default" type="search" value="asdf">
      <mock:shadow-root>
        <context-consumer></context-consumer>
        <div class="wrapper">
          <label>
            <div class="content">
              <ion-icon class="search" name="search"/>
              <input autocomplete="search" class="input" id="input" maxlength="1000" placeholder="Enter a value" step="1" tabindex="0" type="search" value="asdf">
              <ion-icon class="close" name="close" tabindex="0" title="Reset"/>
            </div>
            <midwest-validate size="default"></midwest-validate>
          </label>
        </div>
      </mock:shadow-root>
    </midwest-input>
    `);

    // @ts-ignore
    await page.root.shadowRoot.querySelector('ion-icon.close').click();

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <midwest-input class="complement-undefined theme-undefined" id="matcher" placeholder="Enter a value" size="default" type="search">
        <mock:shadow-root>
          <context-consumer></context-consumer>
          <div class="wrapper">
            <label>
              <div class="content">
                <ion-icon class="search" name="search"/>
                <input autocomplete="search" class="input" id="input" maxlength="1000" placeholder="Enter a value" step="1" tabindex="0" type="search">
              </div>
              <midwest-validate size="default"></midwest-validate>
            </label>
          </div>
        </mock:shadow-root>
      </midwest-input>
    `);
  });

  it('test keyboard events', async () => {
    const page = await newSpecPage({
      components: [Input],
      html: `<midwest-input type="number" value="10" label="nice" required></midwest-input>`,
    });

    expect(page.root).toEqualHtml(`
      <midwest-input class="complement-undefined theme-undefined" label="nice" placeholder="Enter a value" required="" size="default" type="number" value="10">
        <mock:shadow-root>
          <context-consumer></context-consumer>
          <div class="wrapper">
            <label>
             <midwest-label for="input" size="default">
                nice
                <span class="star">*</span>
              </midwest-label>
              <div class="content">
                <input autocomplete="number" class="input" id="input" maxlength="1000" placeholder="Enter a value" required="" step="1" tabindex="0" type="number" value="10">
                <div class="incrementing">
                  <button class="increment" type="button">
                    <ion-icon name="arrow-up"/>
                  </button>
                  <button class="decrement" type="button">
                    <ion-icon name="arrow-down"/>
                  </button>
                </div>
              </div>
              <midwest-validate size="default"></midwest-validate>
            </label>
          </div>
        </mock:shadow-root>
      </midwest-input>
    `);

    const inputEl: HTMLInputElement = page.root.shadowRoot.querySelector("input.input");
    const incrementEl: HTMLAnchorElement = page.root.shadowRoot.querySelector("button.increment");
    const decrementEl: HTMLAnchorElement = page.root.shadowRoot.querySelector("button.decrement");

    expect(inputEl).toBeInstanceOf(HTMLInputElement)
    expect(incrementEl).toBeInstanceOf(HTMLButtonElement)
    expect(decrementEl).toBeInstanceOf(HTMLButtonElement)

    const focusingSpy = jest.fn(); 
    window.document.addEventListener('focusing', focusingSpy);

    inputEl.dispatchEvent(new Event("focus"));

    await page.waitForChanges();

    expect(focusingSpy).toHaveBeenCalled();

    expect(page.root).toEqualHtml(`<midwest-input class=\"complement-undefined theme-undefined\" focused="" label=\"nice\" placeholder=\"Enter a value\" required="" size=\"default\" type=\"number\" value=\"10\">
      <mock:shadow-root>
        <context-consumer></context-consumer>
        <div class=\"wrapper\">
          <label>
            <midwest-label for=\"input\" size=\"default\">
              nice
              <span class="star">*</span>
            </midwest-label>
            <div class=\"content\">
              <input autocomplete=\"number\" class=\"input\" id=\"input\" maxlength=\"1000\" placeholder=\"Enter a value\" required="" step=\"1\" tabindex=\"0\" type=\"number\" value=\"10\">
              <div class=\"incrementing\">
                <button class=\"increment\" type=\"button\">
                  <ion-icon name=\"arrow-up\"/>
                </button>
                <button class=\"decrement\" type=\"button\">
                  <ion-icon name=\"arrow-down\"/>
                </button>
              </div>
            </div>
            <midwest-validate size=\"default\"></midwest-validate>
          </label>
        </div>
      </mock:shadow-root>
    </midwest-input>`);

    // let blurringSpy = jest.fn(); 
    // window.document.addEventListener('blurring', blurringSpy);
    
    inputEl.dispatchEvent(new Event("blur"));

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`<midwest-input class=\"complement-undefined theme-undefined\" label=\"nice\" placeholder=\"Enter a value\" required="" size=\"default\" type=\"number\" value=\"10\">
      <mock:shadow-root>
        <context-consumer></context-consumer>
        <div class=\"wrapper\">
          <label>
            <midwest-label for=\"input\" size=\"default\">
              nice
              <span class="star">*</span>
            </midwest-label>
            <div class=\"content\">
              <input autocomplete=\"number\" class=\"input\" id=\"input\" maxlength=\"1000\" placeholder=\"Enter a value\" required="" step=\"1\" tabindex=\"0\" type=\"number\" value=\"10\">
              <div class=\"incrementing\">
                <button class=\"increment\" type=\"button\">
                  <ion-icon name=\"arrow-up\"/>
                </button>
                <button class=\"decrement\" type=\"button\">
                  <ion-icon name=\"arrow-down\"/>
                </button>
              </div>
            </div>
            <midwest-validate size=\"default\"></midwest-validate>
          </label>
        </div>
      </mock:shadow-root>
    </midwest-input>`);

    inputEl.value = "2";
    inputEl.dispatchEvent(new Event('keydown'))
    inputEl.dispatchEvent(new Event('input'))
    
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`<midwest-input class=\"complement-undefined theme-undefined\" label=\"nice\" placeholder=\"Enter a value\" required="" size=\"default\" type=\"number\" value=\"2\">
      <mock:shadow-root>
        <context-consumer></context-consumer>
        <div class=\"wrapper\">
          <label>
            <midwest-label for=\"input\" size=\"default\">
              nice
              <span class="star">*</span>
            </midwest-label>
            <div class=\"content\">
              <input autocomplete=\"number\" class=\"input\" id=\"input\" maxlength=\"1000\" placeholder=\"Enter a value\" required="" step=\"1\" tabindex=\"0\" type=\"number\" value=\"2\">
              <div class=\"incrementing\">
                <button class=\"increment\" type=\"button\">
                  <ion-icon name=\"arrow-up\"/>
                </button>
                <button class=\"decrement\" type=\"button\">
                  <ion-icon name=\"arrow-down\"/>
                </button>
              </div>
            </div>
            <midwest-validate size=\"default\"></midwest-validate>
          </label>
        </div>
      </mock:shadow-root>
    </midwest-input>`);

    await page.waitForChanges();

    incrementEl.dispatchEvent(new Event('focus'))
    incrementEl.click()
    await page.root.stepUp();
    let keydown = new Event('keydown');
    // @ts-ignore
    keydown.keyCode = 13
    incrementEl.dispatchEvent(keydown)
    incrementEl.dispatchEvent(new Event('blur'))
    inputEl.dispatchEvent(new Event('input'))

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`<midwest-input class=\"complement-undefined theme-undefined\" label=\"nice\" placeholder=\"Enter a value\" required="" size=\"default\" type=\"number\" value=\"2\">
    <mock:shadow-root>
      <context-consumer></context-consumer>
      <div class=\"wrapper\">
        <label>
          <midwest-label for=\"input\" size=\"default\">
            nice
            <span class="star">*</span>
          </midwest-label>
          <div class=\"content\">
            <input autocomplete=\"number\" class=\"input\" id=\"input\" maxlength=\"1000\" placeholder=\"Enter a value\" required="" step=\"1\" tabindex=\"0\" type=\"number\" value=\"2\">
            <div class=\"incrementing\">
              <button class=\"increment\" type=\"button\">
                <ion-icon name=\"arrow-up\"/>
              </button>
              <button class=\"decrement\" type=\"button\">
                <ion-icon name=\"arrow-down\"/>
              </button>
            </div>
          </div>
          <midwest-validate size=\"default\"></midwest-validate>
        </label>
      </div>
    </mock:shadow-root>
  </midwest-input>`);


    await page.waitForChanges();

    decrementEl.dispatchEvent(new Event('focus'))
    decrementEl.click()
    await page.root.stepUp();
    keydown = new Event('keydown');
    // @ts-ignore
    keydown.keyCode = 13
    decrementEl.dispatchEvent(keydown)
    decrementEl.dispatchEvent(new Event('blur'))
    inputEl.dispatchEvent(new Event('input'))

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`<midwest-input class=\"complement-undefined theme-undefined\" label=\"nice\" placeholder=\"Enter a value\" required="" size=\"default\" type=\"number\" value=\"2\">
    <mock:shadow-root>
      <context-consumer></context-consumer>
      <div class=\"wrapper\">
        <label>
          <midwest-label for=\"input\" size=\"default\">
            nice
            <span class="star">*</span>
          </midwest-label>
          <div class=\"content\">
            <input autocomplete=\"number\" class=\"input\" id=\"input\" maxlength=\"1000\" placeholder=\"Enter a value\" required="" step=\"1\" tabindex=\"0\" type=\"number\" value=\"2\">
            <div class=\"incrementing\">
              <button class=\"increment\" type=\"button\">
                <ion-icon name=\"arrow-up\"/>
              </button>
              <button class=\"decrement\" type=\"button\">
                <ion-icon name=\"arrow-down\"/>
              </button>
            </div>
          </div>
          <midwest-validate size=\"default\"></midwest-validate>
        </label>
      </div>
    </mock:shadow-root>
  </midwest-input>`);

  inputEl.dispatchEvent(new Event('change'))

  });
});
