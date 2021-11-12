import { Component, Host, h, Prop, State, Element, Event, Watch, EventEmitter } from '@stencil/core';
import delay from 'async-delay';

@Component({
  tag: 'midwest-show-if'
})
export class ShowIf {

  @Element() element: HTMLElement;

  @Prop() field: string;
  @Prop() equals: string;
  @Prop() notEquals: string;
  @Prop() triggered: string;
  @Prop() property: string;
  @Prop() selector: string;
  @Prop() present: boolean;
  @State() passes: boolean;

  @Event() update: EventEmitter;

  closestForm: HTMLMidwestFormElement;
  triggerElement: HTMLElement;
  content: string;

  componentWillLoad() {
    this.setContent()
    this.closestForm = this.element.closest("midwest-form");

    if (this.equals || this.notEquals || this.present) {
      this.closestForm.addEventListener('fastUpdates', (e: any) => this.check(e.detail));
    } else if (this.triggered) {
      this.triggerElement = this.closestForm.querySelector(this.selector)
      this.triggerElement.addEventListener("updated", this.check.bind(this));
      this.check({});
    }
  }

  async componentDidLoad () {
    const state = await this.closestForm.state(false)
    this.check(state)
  }

  setContent() {
    let code: any = this.element.querySelector('template');

    if (!code.innerHTML) {
      code = Array.from(code.children).map((node: any) => {
        return node.outerHTML
      }).join()
    } else {
      code = code.innerHTML
    }

    this.content = code;
  }

  @Watch('passes')
  async handlePasses() {
    await delay(350);
    this.update.emit({})
  }

  check(detail) {
    if (this.equals) {
      const check = this.equals === "true" ? [true, "true", 1] : this.equals === "false" ? [false, "false", 0] : this.equals;

      if (Array.isArray(detail.namedResults[this.field])) {
        this.passes = detail.namedResults[this.field].includes(check)
      } else if (Array.isArray(check)) {
        this.passes = check.includes(detail.namedResults[this.field])
      } else {
        this.passes = detail.namedResults[this.field] === check
      }
    } else if (this.notEquals) {
      const check = this.notEquals === "true" ? [true, "true", 1] : this.notEquals === "false" ? [false, "false", 0] : this.notEquals;

      if (Array.isArray(detail.namedResults[this.field])) {
        this.passes = !detail.namedResults[this.field].includes(check)
      } else if (Array.isArray(check)) {
        this.passes = !check.includes(detail.namedResults[this.field])
      } else {
        this.passes = detail.namedResults[this.field] !== check
      }
    } else if (this.triggered) {
      const check = this.triggered === "true" ? true : this.triggered === "false" ? false : this.triggered;
      if (!check) {
        this.passes = this.triggerElement[this.property] === check || this.triggerElement[this.property] === undefined;
      } else {
        this.passes = this.triggerElement[this.property] === check;
      }
    } else if (this.present) {
      // Ensure this portion of the form actually has field
      if(Object.keys(detail.namedResults).includes(this.field)) {
        this.passes = !!detail.namedResults[this.field]; 
      }
    }
  }

  render() {
    return <Host class={this.passes ? "block" : "hidden"}>
      {this.passes && <div innerHTML={this.content} />}
    </Host>
  }
}
