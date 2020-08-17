import { Component, Prop, State, Element, Event, EventEmitter, h, Host, Method, Watch, Listen } from '@stencil/core'
import { asyncForEach } from '@midwest-design/common';
import Tunnel from '../../../tunnels/theme';

@Component({
  tag: 'midwest-step',
  styleUrl: 'step.css',
  shadow: true
})
export class Step {
  @Element() element: HTMLElement

  @Prop({reflect: true}) base: ThemeableColors;
  @Prop({reflect: true}) dark: boolean;

  @Prop({ mutable: true, reflect: true }) href: string = "#"
  @Prop() disabled: boolean = false
  @Prop({ mutable: true, reflect: true }) open: boolean = false
  @Prop({ mutable: true, reflect: true }) complete: boolean = false
  @Prop({ mutable: true, reflect: true }) error: boolean = false

  @Prop({ mutable: true, reflect: true }) past: boolean = false
  @Prop({ mutable: true, reflect: true }) current: boolean = false

  @Prop({ mutable: true, reflect: true }) export: boolean = false

  @Prop({ reflect: true }) validate: boolean
  @Prop({ reflect: true }) order: number
  @Prop({ reflect: true }) tabCount: number

  @State() parent: HTMLMidwestStepsElement
  @State() contentEl: HTMLMidwestContentElement
  @State() valid: boolean;
  @State() ready: boolean = false;

  @Event() contentChange: EventEmitter;
  @Event() updated: EventEmitter;

  // @ts-ignore
  validatables: HTMLMidwestFormElement[]|HTMLMidwestFieldGroupElement[] = []

  componentWillLoad() {
    if (this.past) {
      this.complete = this.past
    }

    if (this.current) {
      this.open = this.current
      this.ready = true;
    }

    this.parent = this.element.closest('midwest-steps');
    this.contentEl = document.querySelector(`midwest-content${this.href}[for="${this.parent.name}"]`);

    if (this.validate) {
      this.disabled = !this.complete;
      this.prepareValidation();
    }
  }

  async componentDidLoad() {
    if (this.open) {
      this.ready = true;
    }

    if (this.validate) {
      if (this.complete) {
        this.ready = true;
      }
      // await delay(500);
      await this.isValid();
    }
  }

  @Watch("open")
  observeOpen() {
    this.prepareValidation();

    if (this.open) {
      this.ready = true;
      this.disabled = false;
    }

    this.updated.emit();
  }

  @Listen("update", {target: "document"})
  handleAddedForm() {
    this.prepareValidation();

    if (this.open) {
      this.ready = true;
    }

    this.updated.emit();
  }

  @Method()
  async isValid() {
    if (this.ready && this.validatables) {
      const results = [];

      await asyncForEach(this.validatables, async (form) => {
        const state = await form.state(false);
        results.push(state.valid);
      });

      this.valid = results.length > 0 ? results.every(r => r === true) : false;
      this.disabled = !this.valid;

      return this.valid
    } else {
      console.log("not ready yet.", this.element)
    }
  }

  @Method()
  async show_validation() {
    if (this.validatables) {
      await asyncForEach(this.validatables, async (form) => {
        await form.state();
      })
    }
  }

  @Method()
  async activate() {
    await this.handleClick(true);
  }

  async prepareValidation() {
    if (this.contentEl) {
      const validatables = Array.from(this.contentEl?.querySelectorAll("midwest-form,midwest-field-group") ?? []) as any[];
      // const validatables = Array.from(this.contentEl?.querySelectorAll("midwest-form,midwest-field-group") ?? []) as HTMLMidwestFormElement[]|HTMLMidwestFieldGroupElement[];

      if (validatables && this.validatables.length !== validatables.length) {
        this.validatables = validatables;
        await this.isValid();

        const eventCb = async () => {
          await this.isValid()
        }

        this.validatables.forEach((form) => {
          form.removeEventListener("updated", eventCb)
          form.addEventListener("updated", eventCb)
        })
      }
    }
  }

  async handleClick(force = false) {
    if (!this.disabled || force) {
      this.ready = true;
      this.parent.switch(this.element as HTMLMidwestStepElement);

      this.contentChange.emit({
        parent: this.parent,
        name: this.href.replace(/[#]/g, "")
      });
    }
  }

  renderTitle() {
    return <span class="title">
      {this.validate && this.valid && <ion-icon name="valid" class="valid" />}
      <slot></slot>
    </span>
  }

  render() {
    return <Host>
      <button role="tab" aria-selected={this.open ? "true" : "false"} disabled={this.disabled} aria-setsize={this.tabCount} aria-posinset={this.order} tabindex="0" class="step-button" onClick={() => this.handleClick()}>
        <midwest-label>
          {this.renderTitle()}
        </midwest-label>
      </button>
      {this.export && <export-to-figma />}
    </Host>
  }
}

Tunnel.injectProps(Step, ["dark"])