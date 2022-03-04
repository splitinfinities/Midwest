import { Component, Prop, Element, Method, Listen, Event, EventEmitter, h, State, Host } from '@stencil/core';
import { asyncForEach, form2js, addDataToForm } from '@midwest-design/common';
import Debounce from 'debounce-decorator';
import delay from 'async-delay';

@Component({
  tag: 'midwest-form',
  shadow: true,
})
export class Form {
  @Element() element: HTMLElement;

  @Prop() ajax: boolean = false;
  @Prop() perform: boolean = false;
  @Prop() autosave: boolean = false;

  @Prop() action: string;
  @Prop() method: string = 'get';
  @Prop() acceptCharset: string;
  @Prop() autocomplete: string = 'on';
  @Prop() enctype: string = 'multipart/form-data';
  @Prop() name: string;
  @Prop() validate: boolean = true;
  @Prop() target: string;
  @Prop() closeModalOnSuccess: boolean;

  @State() clickedButton: any;
  @State() error: string;

  @Event() submitted: EventEmitter;
  @Event() updated: EventEmitter;
  @Event({ eventName: 'fastUpdates' }) updatedFast: EventEmitter;

  @Event({ bubbles: true, composed: true, eventName: 'modalOpen' }) openModal: EventEmitter;
  @Event({ bubbles: true, composed: true, eventName: 'modalClose' }) closeModal: EventEmitter;

  @State() pjax: any = document.querySelector('midwest-pjax');

  @State() submitting: boolean;

  autosaveEl: any;
  formEl: HTMLFormElement;
  els: HTMLElement[] = [];
  fieldGroups: HTMLMidwestFieldGroupElement[] = [];

  componentWillLoad() {
    if (this.autosave) {
      this.autosaveEl = this.element.querySelector("midwest-button[for='autosave']");
      this.autosaveEl.disabled = true;
    }
  }

  @Method()
  async addFieldGroup(el: any) {
    this.fieldGroups = [...this.fieldGroups, el];

    el.addEventListener('fastUpdates', this.handleFastUpdates.bind(this));
    el.addEventListener('updated', this.handleChildUpdates.bind(this));
  }

  @Method()
  async removeFieldGroup(el: any) {
    this.fieldGroups = this.fieldGroups.filter(x => x !== el);

    el.removeEventListener('fastUpdates', this.handleFastUpdates.bind(this));
    el.removeEventListener('updated', this.handleChildUpdates.bind(this));
  }

  @Method()
  async addElement(el: HTMLElement) {
    this.els = [...this.els, el];
  }

  @Method()
  async removeElement(el: HTMLElement) {
    this.els = this.els.filter(x => x !== el);
  }

  get allElementsHydrated() {
    return this.els.every(el => el.classList.contains('hydrated'));
  }

  @Listen('update')
  @Debounce(10)
  async handleFastUpdates() {
    if ((this.els.length > 0 || this.fieldGroups.length > 0) && this.allElementsHydrated) {
      const state = await this.state(false);
      this.updatedFast.emit({ ...state });
    }
  }

  @Listen('update')
  @Debounce(400)
  async handleChildUpdates() {
    if ((this.els.length > 0 || this.fieldGroups.length > 0) && this.allElementsHydrated) {
      const state = await this.state(false);
      this.updated.emit({ ...state });

      if (this.autosave) {
        this.autosaveChanges();
      }
    }
  }

  @Listen('keydown')
  handleEnter(event: KeyboardEvent) {
    if (event.key === 'enter') {
      this.submitForm();
    }
  }

  @Method()
  async get(
    name?: string,
    validate: boolean = false,
  ): Promise<{ els: any; json: any; results: FormResult[]; namedResults: { [name: string]: string }; formData: any; valid: boolean }> {
    return this.returnValue(
      validate,
      this.els.filter(el => {
        return (el as HTMLInputElement).name === name;
      }),
    );
  }

  @Method()
  async state(validate = true): Promise<{ els: any; json: any; results: FormResult[]; namedResults: { [name: string]: string }; formData: any; valid: boolean }> {
    return this.returnValue(validate);
  }

  async autosaveChanges() {
    const originalLabel = this.autosaveEl.label;
    this.autosaveEl.label = 'One moment...';
    this.autosaveEl.processing = true;
    await this.submitForm();
    this.autosaveEl.label = 'Done!';
    this.autosaveEl.processing = false;
    await delay(2000);
    this.autosaveEl.label = originalLabel;
  }

  async returnValue(validate: boolean, els?: HTMLElement[]) {
    const formData = new FormData();
    let namedResults: { [name: string]: string } = {};
    let results: any[] = [];
    let valid = true;

    await asyncForEach(els ? els : this.els, async (element: any) => {
      try {
        const result = await element.validate(validate);
        namedResults[result.name] = result.value;
        results.push(result);
      } catch (e: any) {
        namedResults[`${element.name}`] = undefined;
        results.push({
          name: `${element.name}`,
          value: undefined,
          valid: false,
          errors: [e.message],
        });
      }
    });

    const extraHidden = this.element.querySelectorAll("form > input[type='hidden']") as NodeListOf<HTMLInputElement>;

    if (extraHidden.length !== 0) {
      extraHidden.forEach(el => {
        namedResults[`${el.name}`] = `${el.value}`;
        results.push({
          name: `${el.name}`,
          value: `${el.value}`,
          valid: true,
          errors: [],
        });
      });
    }

    if (this.clickedButton) {
      namedResults[this.clickedButton.name] = this.clickedButton.value;
      results.push({
        name: this.clickedButton.name,
        value: this.clickedButton.value,
        valid: true,
      });
    }

    await asyncForEach(this.fieldGroups, async (group: any) => {
      const groupState = await group.state(validate);
      results = [...results, ...groupState.results];
      namedResults = { ...namedResults, ...groupState.namedResults };
    });

    results.forEach(result => {
      if (result?.name) {
        formData.append(result.name.toString(), result.value);
      }

      if (!result?.valid) {
        valid = false;
      }
    });

    const json = form2js(results.filter(i => i && i.name));

    return {
      els: [...this.els, ...this.fieldGroups],
      json,
      namedResults,
      results,
      formData,
      valid,
    };
  }

  @Method()
  @Debounce(200)
  async submitForm(button?: any) {
    if (!this.submitting) {
      this.submitting = true;
      this.error = undefined;

      if (button) {
        button.disabled = true;
        button.processing = true;
        this.clickedButton = button.name && button.value ? button : undefined;
      }

      const state = await this.state();

      if (state.valid) {
        if (this.ajax) {
          this.submitted.emit(state);
        } else {
          addDataToForm(this.formEl, state.namedResults);
          this.formEl.submit();
        }

        if (this.closeModalOnSuccess && !this.error) {
          this.closeModal.emit({});
        }
      }

      if (button) {
        setTimeout(() => {
          button.disabled = false;
          button.processing = false;
          this.submitting = false;
        }, 350);
      }
    }
  }

  render() {
    return (
      <Host style={{ display: 'block' }}>
        <form
          action={this.action}
          method={this.method}
          accept-charset={this.acceptCharset}
          autocomplete={this.autocomplete}
          enctype={this.enctype}
          name={this.name}
          novalidate={!!this.validate}
          target={this.target}
          style={{ margin: '0' }}
          ref={el => {
            this.formEl = el;
          }}
          onSubmit={e => {
            e.preventDefault();
            this.submitForm();
          }}
        >
          {this.error && (
            <midwest-callout type="error" class="mb-4">
              <copy-wrap>
                <h3 class="text-white">{this.error}</h3>
                <p class="text-white">Please try again later.</p>
              </copy-wrap>
            </midwest-callout>
          )}
          <slot />
        </form>
      </Host>
    );
  }
}
