import { Component, ComponentInterface, State, Prop, Element, Method, Event, EventEmitter, Host, h } from '@stencil/core';
import Validator, { getParents } from './lib/validator';

@Component({
  tag: 'midwest-validate',
  styleUrl: 'validate.css'
})
export class Validate implements ComponentInterface {
  @Element() el: HTMLElement;
  @Prop() name: string;
  @Prop() element: ValidatableElements;
  @Prop() check: CustomFunction;
  @Prop() size: string;
  @Prop() color: string;
  @Prop() silent: boolean;

  @State() connected: boolean = true;

  @Prop() customRender: (message: string[]) => any;

  @State() errors: string[];
  @State() results: any;

  @Event() test: EventEmitter;
  @Event() incorrect: EventEmitter;
  @Event() correct: EventEmitter;

  hookedFieldGroups: HTMLMidwestFieldGroupElement[];
  hookedForm: HTMLMidwestFormElement;
  validator: Validator

  disconnectedCallback() {
    if (this.hookedFieldGroups) {
      this.hookedFieldGroups.forEach((item) => {
        item.removeElement(this.element);
      });
    }

    this.connected = false;
  }

  componentWillLoad() {
    this.hookedFieldGroups = getParents(this.element, 'midwest-field-group')
    this.hookedForm = this.element.closest('midwest-form')
    this.validator = new Validator(this.element, this.check);

    if (this.hookedFieldGroups.length > 0) {
      this.hookedFieldGroups.forEach((form) => {
        form.addElement(this.element);
      });
    } else if (this.hookedFieldGroups.length === 0 && this.hookedForm) {
      this.hookedForm.addElement(this.element);
    } else {
      if (!this.silent) {
        console.info("Validation added without associated form");
      }
    }
  }

  @Method()
  async validate(set = true): Promise<FormResult> {
    if (this.connected) {
      const results = await this.validator.validate(this.element);

      if (set) {
        this.results = results;
      }

      this.test.emit({ results });

      if (results.valid) {
        this.correct.emit({ results });
      } else {
        this.incorrect.emit({ results });
      }

      return results;
    } else {
      this.hookedFieldGroups?.forEach((form) => {
        form.removeElement(this.element);
      });

      this.hookedForm?.removeElement(this.element);
    }
  }

  @Method()
  async get() {
    return this.validator.validate(this.element);
  }

  render() {
    if (this.results && this.results.errors && this.results.errors.length !== 0) {
      if(this.customRender) {
        return this.customRender(this.results.errors);
      } else {
        return <Host>
          <midwest-label size={this.size}>
            <span>{this.results.errors[this.results.errors.length - 1].message}</span>
          </midwest-label>
        </Host>
      }
    }
  }
}


