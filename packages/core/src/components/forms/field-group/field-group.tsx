import { Component, Element, Method, Listen, Event, EventEmitter, h, State, Host } from '@stencil/core';
import { asyncForEach, form2js } from '@midwest-design/common';
import Debounce from 'debounce-decorator';

@Component({
  tag: 'midwest-field-group',
  styleUrl: 'field-group.css',
  shadow: true,
})
export class SaFieldGroup {
  @Element() element: HTMLElement;

  @State() error: string;

  @Event({ eventName: "fast-updates" }) updatedFast: EventEmitter;
  @Event() updated: EventEmitter;
  @Event() submitted: EventEmitter;

  els: HTMLElement[] = []

  componentDidLoad() {
    this.element.closest("midwest-form").addFieldGroup(this.element)
  }

  componentWillUnload() {
    this.element.closest("midwest-form").removeFieldGroup(this.element)
  }
  
  @Method()
  async addElement(el: HTMLElement) {
    this.els = [...this.els, el]
  }

  @Method()
  async removeElement(el: HTMLElement) {
    this.els = this.els.filter(x => x !== el);
  }

  get allElementsHydrated() {
    return this.els.every((el) => el.classList.contains("hydrated"));
  }

  @Method()
  async submitForm() {
    const state = await this.state()
    if (state.valid) {
      this.submitted.emit({...state})
    }
  }

  @Listen('update')
  @Debounce(10)
  async handleFastUpdates() {
    if (this.els.length > 0 && this.allElementsHydrated) {
      const state = await this.state(false)
      this.updatedFast.emit({...state});
    }
  }

  @Listen('update')
  @Debounce(400)
  async handleUpdates() {
    if (this.els.length > 0 && this.allElementsHydrated) {
      const state = await this.state(false)
      this.updated.emit({...state});
    }
  }

  @Listen("keydown", {target: "parent"})
  async onKeyDown (e: KeyboardEvent) { 
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      this.submitForm()
    }
  }

  @Method()
  async state(validate = true): Promise<{ els: any, json: any, results: FormResult[], namedResults: {[name: string]: string}, formData: any, valid: boolean }> {
    return this.returnValue(validate);
  }

  async returnValue(validate: boolean, els?: HTMLElement[]) {
    const formData = new FormData();
    const namedResults: {[name: string]: string} = {};
    const results: any[] = [];
    let valid = true;

    await asyncForEach(els ? els : this.els, async (element: any) => {
      try {
        const result = await element.validate(validate);
        namedResults[result.name] = result.value
        results.push(result);
      } catch (e) {
        namedResults[`${element.name}`] = undefined;
        results.push({
          name: `${element.name}`,
          value: undefined,
          valid: false,
          errors: [e.message],
        })
      }
    });

    const extraHidden = this.element.querySelectorAll("form > input[type='hidden']") as NodeListOf<HTMLInputElement>;

    if (extraHidden.length !== 0) {
      extraHidden.forEach((el) => {
        namedResults[`${el.name}`] = `${el.value}`;
        results.push({
          name: `${el.name}`,
          value: `${el.value}`,
          valid: true,
          errors: [],
        })
      })
    }

    results.forEach((result) => {
      if (result) {
        if (result.name) {
          formData.append(result.name.toString(), result.value)
        }

        if (!result.valid) {
          valid = false;
        }
      }
    })

    const json = form2js(results.filter(i => i && i.name));

    return {
      els: this.els,
      json,
      namedResults,
      results,
      formData,
      valid,
    }
  }


  render() {
    return <Host>
      {this.error && <midwest-callout type="error" class="mb-4">
        <copy-wrap>
          <h3 class="text-white">{this.error}</h3>
          <p class="text-white">Please try again later.</p>
          </copy-wrap>
      </midwest-callout>}
      <slot />
    </Host>
  }
}
