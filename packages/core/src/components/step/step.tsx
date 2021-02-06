import { Component, Prop, State, Element, Event, EventEmitter, h, Host, Method, Watch } from '@stencil/core'
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-step',
  styleUrl: 'step.css',
  shadow: true
})
export class Step {
  @Element() element: HTMLElement

  @Prop({reflect: true}) dark: boolean;

  @Prop({ mutable: true, reflect: true }) href: string = "#"
  @Prop() disabled: boolean = false
  @Prop({ mutable: true, reflect: true }) open: boolean = false
  @Prop({ mutable: true, reflect: true }) complete: boolean = false

  @Prop({ mutable: true, reflect: true }) past: boolean = false
  @Prop({ mutable: true, reflect: true }) current: boolean = false

  @Prop({ reflect: true }) order: number
  @Prop({ reflect: true }) tabCount: number

  @State() parent: HTMLMidwestStepsElement
  @State() contentEl: HTMLMidwestContentElement
  @State() ready: boolean = false;

  @Event() contentChange: EventEmitter;

  componentWillLoad() {
    darkMode(this);
    
    if (this.past) {
      this.complete = this.past
    }

    if (this.current) {
      this.open = this.current
      this.ready = true;
    }

    this.parent = this.element.closest('midwest-steps');
    this.contentEl = document.querySelector(`midwest-content${this.href}[for="${this.parent.name}"]`);
  }

  async componentDidLoad() {
    if (this.open) {
      this.ready = true;
    }
  }

  @Watch("open")
  observeOpen() {
    if (this.open) {
      this.complete = true;
      this.ready = true;
      this.disabled = false;
    }
  }

  @Method()
  async activate() {
    await this.handleClick(true);
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

  render() {
    return <Host>
      <button
        role="tab"
        aria-selected={this.open ? "true" : "false"}
        disabled={this.disabled}
        aria-setsize={this.tabCount}
        aria-posinset={this.order}
        tabindex="0"
        class="step-button"
        onClick={() => this.handleClick()}
      >
        <midwest-label>
          <slot></slot>
        </midwest-label>
      </button>
    </Host>
  }
}

