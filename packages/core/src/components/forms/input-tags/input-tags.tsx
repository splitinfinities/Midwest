import { Component, ComponentInterface, Host, h, Prop, Element, State, Event, EventEmitter, Method } from '@stencil/core';
import { Tokens } from './lib/Tokens';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-input-tags',
  styleUrl: 'input-tags.css'
})
export class SaInputTags implements ComponentInterface {

  /**
   * Instance of the custom element
   */
  @Element() element: HTMLElement

  @Prop({reflect: true, mutable: true}) base: ThemeableColors;
  @Prop({reflect: true, mutable: true}) complement: ThemeableColors;
  @Prop({ mutable: true, reflect: true }) size: "small" | "default" | "large" = "default";
  @Prop({ reflect: true }) dark: boolean = false;

  @Prop({ reflect: true }) name: string;
  @Prop() inputTabIndex: number = 0;
  @Prop() allowNewItems: boolean = false;
  @Prop({ reflect: true, mutable: true }) focused: boolean = false;

  @Prop({ mutable: true, reflect: true }) placeholder: string = "Enter a value";
  @Prop({ mutable: true, reflect: true }) label: string;
  @Prop() description: string;
  @Prop() tooltip: string;

  @Prop({ mutable: true, reflect: true }) value: any;
  @Prop() required: boolean = false;
  @Prop({ mutable: true, reflect: true }) valid: boolean;
  @Prop() novalidate: boolean = false;
  @Prop() items: {id: number, name: string}[] = [];
  
  @Prop() minChars: number;
  @Prop() disabled: boolean;
  @Prop() readonly: boolean = false;
  @Prop() autofocus: boolean = false;

  @Prop() customValidations: CustomFunction;

  @Prop() export: boolean;
  
  @State() status: FormResult;

  @Event() update: EventEmitter;
  @Event() focusing: EventEmitter;
  @Event() bluring: EventEmitter;

  input!: HTMLInputElement;
  tokenfield!: any;
  validator!: HTMLMidwestValidateElement

  componentWillLoad(){
    darkMode(this)
  }

  componentDidLoad () {
    this.tokenfield = new Tokens({
      el: this.input,
      delimiters: [","],
      addItemsOnPaste: true,
      addItemOnBlur: true,
      minChars: this.minChars,
      setItems: (typeof this.value === "string") ? this.value.split(",").map(i => {return {id: i, name: i}}) : this.value,
      newItems: this.allowNewItems,
      items: this.items,
      placeholder: this.placeholder
    });

    this.tokenfield.on('addedToken', () => {
      this.value = this.tokenfield.getItems().map((token: any) => { return { id: token.id, name: token.name } });
      this.validator.validate();
      this.handleChange();
    });

    this.tokenfield.on('removedToken', () => {
      this.value = this.tokenfield.getItems().map((token: any) => { return { id: token.id, name: token.name } });
      this.validator.validate();
      this.handleChange();
    });

    this.tokenfield.on('focus', () => {
      this.handleFocus()
    });

    this.tokenfield.on('blur', () => {
      this.handleBlur()
    });
  }

  disconnectedCallback() {
    this.tokenfield.remove();
  }

  handleFocus() {
    this.focused = true;
    this.focusing.emit({})
  }

  handleBlur() {
    this.focused = false;
    this.validator.validate();
    this.bluring.emit({})
  }

  async handleInput() {
    this.value = this.tokenfield.getItems()
  }

  handleChange() {
    this.update.emit(this.value)
  }

  handleInputKeyDown(event: KeyboardEvent) {
    this.handleKeyDownEnter(event);
  }

  handleKeyDownEnter(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      const form: HTMLMidwestFormElement = this.element.closest('midwest-form');
      form.submitForm();
    }
  }

  renderInputElement() {
    return <input
      class="input"
      ref={(el) => this.input = el as HTMLInputElement}
      id={"input"}
      tabIndex={this.inputTabIndex}
      type={"text"}
      name={this.name}
      placeholder={this.placeholder}
      required={this.required}
      autofocus={this.autofocus}
      readonly={this.readonly}
      disabled={this.disabled}
      value={this.value}
      onInput={() => this.handleInput()}
      onChange={() => this.handleChange()}
      onFocus={() => this.handleFocus()}
      onBlur={() => this.handleBlur()}
      onKeyDown={(event) => { this.handleInputKeyDown(event) }}
    />
  }

  renderLabel() {
    if (this.label) {
      return <midwest-label for="input" size={this.size}>{this.label}{this.required && <span class="star">*</span>}</midwest-label>
    }
  }

  @Method()
  async validate(set = true) {
    const results = await this.validator.validate(set);

    if (set) {
      this.status = results;
    }
    return results;
  }

  render() {
    return <Host class={`${this.status ? (this.valid ? "valid" : "invalid") : ""}`}>
        <div class="wrapper">
        <label>
          {this.renderLabel()}

          <div class="content">
            {this.renderInputElement()}

            {this.tooltip && <midwest-tooltip align="bottom-left">{this.tooltip}</midwest-tooltip>}
          </div>

          <midwest-validate 
            ref={(el) => { this.validator = el; }}
            element={this.element}
            size={this.size}
            check={this.customValidations}
            onIncorrect={() => { this.valid = false }}
            onCorrect={() => { this.valid = true }}
          />

          {this.description && <midwest-label size="small" underneath>{this.description}</midwest-label>}
        </label>
      </div>
      
      {this.export && <export-to-figma />}
      </Host>
  }

}
