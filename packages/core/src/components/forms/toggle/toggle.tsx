import { Component, Prop, State, Element, Method, Event, EventEmitter, h, Host, Watch, Listen } from "@stencil/core";
import { darkMode } from "@midwest-design/common";

@Component({
  tag: "midwest-toggle",
  styleUrl: 'toggle.css'
})
export class Toggle {
  @Element() element: HTMLElement;

  @Prop({reflect: true}) base: ThemeableColors;
  @Prop({reflect: true}) complement: ThemeableColors;

  @Prop({ mutable: true }) type: "checkbox" | "radio" = "checkbox";
  @Prop({ mutable: true, reflect: true }) name: string = "";
  @Prop({ reflect: true }) block: boolean = false;
  @Prop({ reflect: true }) stacked: boolean = false;
  @Prop() flip: boolean = false;
  @Prop( {reflect: true, mutable: true }) required: boolean;
  @Prop() single: boolean;
  @Prop() size: string;
  @Prop({ reflect: true }) novalidate: boolean;
  /**
   * Sets the button or link as an outlined button.
   */
  @Prop({ reflect: true }) dark: boolean = false;

  @Prop() label: string;
  @Prop({ reflect: true }) inlineLabel: boolean;

  @Prop({ mutable: true }) description: string;

  /**
   * Makes sure this element cannot be exported.
   */
  @Prop() export: boolean;

  @Prop({ mutable: true }) value: string | string[];
  @State() valid: boolean = true;
  @State() error: string;
  @State() status: FormResult;

  @Event() update: EventEmitter;

  validator: HTMLMidwestValidateElement

  componentWillLoad() {
    darkMode(this)
    this.handleOrder();
    this.handleTypeChange();
  }

  handleOrder() {
    const els = this.element.querySelectorAll(':scope > *') as NodeListOf<HTMLElement>;

    els.forEach((el, index) => {
      el.style.order = `${index}`;
    })
  }

  @Watch('type')
  handleTypeChange() {
    const options = this.element.querySelectorAll('midwest-item');
    let values: any|any[] = [];

    options.forEach((option) => {
      option.tag = this.type;
      option.block = this.block;
      option.inline = !this.block;
      option.name = this.type === "checkbox" ? `${this.name}[]` : this.name;

      if (this.type === "radio") {
        if (option.checked && values.length === 0) {
          values = option.value
        } else {
          option.checked = false;
        }
      } else {
        if (option.checked) {
          values.push(option.value)
        }
      }
    })

    // only radio toggles can be required
    if (this.required && this.type !== "radio") {
      this.required = false;
    }

    this.value = values;
  }

  @Listen('selectionChanged')
  async selectionChangedHandler() {
    const values: {value: string, checked: boolean}[] = await this.optionEls();
    
    const newValues = values.map(({value, checked}) => {
      return checked && value;
    }).filter(Boolean);

    this.value = this.type === "radio" ? newValues[0] : newValues;
    this.update.emit(this.value);
  }

  @Method()
  async optionEls() {
    return Array.from(this.element.querySelectorAll('midwest-item'));
  }

  @Method()
  async validate(set = true) {
    const results = await this.validator.validate(set);
    
    if (set) {
      this.status = results;
    }

    return results;
  }

  renderValidation() {
    return <midwest-validate
      ref={(el) => { this.validator = el; } }
      name={this.name}
      element={this.element}
      onIncorrect={() => {this.valid = false}}
      onCorrect={() => {this.valid = true}}
    />
  }

  renderBlock() {
    return <div data-type={this.type}>
      {this.renderValidation()}
      <midwest-grid columnWidth={this.stacked ? 1500 : 200} columnGap={this.stacked ? 0 : 1}>
        <slot></slot>
      </midwest-grid>
    </div>
  }

  renderPlain() {
    return <div data-type={this.type}>
      <slot></slot>
      {this.renderValidation()}
    </div>
  }

  render() {
    return <Host class={`${this.status ? this.status.valid ? "valid" : "invalid" : ""}`}>
      {this.label && <midwest-label size={this.size}>{this.label}{this.required && <span class="star">*</span>}</midwest-label>}
      {this.block && this.renderBlock()}
      {!this.block && this.renderPlain()}
      {this.description && <midwest-label size="small" underneath>{this.description}</midwest-label>}
      {this.export && <export-to-figma />}
    </Host>
  }
}
