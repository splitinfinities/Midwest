import { Component, Element, Prop, State, Listen, Method, Event, EventEmitter, Watch, h, Host } from '@stencil/core';
import { shouldBeAnInput, hasIncrements, hasValue, formatters } from "./lib";
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-input',
  styleUrl: 'input.css',
  shadow: true
})
export class Input {
  @Element() element: HTMLElement
  @Prop({ reflect: true }) type: "text" | "password" | "textarea" | "email" | "hidden" | "number" | "search" | "tel" | "postal-code" | "url" | "currency" = "text";
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) increments: boolean = true;
  @Prop({ mutable: true, reflect: true }) value: string|readonly string[];
  @Prop({ mutable: true, reflect: true }) default: string|readonly string[];
  @Prop({ mutable: true, reflect: true }) requirements: boolean = false;
  @State() private previousValue: string | readonly string[];
  
  @Prop({ mutable: true, reflect: true }) size: "small" | "default" | "large" = "default";
  @Prop({ reflect: true }) dark: boolean = false;
  @Prop({ reflect: true }) leftIcon: string;
  @Prop({ reflect: true }) inline: boolean = false;
  @Prop({ reflect: true, mutable: true }) processing: boolean = false;

  // Accessibility
  @Prop({ mutable: true, reflect: true }) label: string;
  @Prop() description: string;

  @Prop() tooltip: string;
  @Prop({ mutable: true, reflect: true }) placeholder: string = "Enter a value";

  // Usability things
  @Prop() disabled: boolean;
  @Prop() readonly: boolean = false;
  @Prop() autofocus: boolean = false;
  @Prop({ reflect: true, mutable: true }) focused: boolean = false;
  @Prop() spellcheck: boolean = true;
  @Prop() maxlength: number = 1000;
  @Prop() minChars: number = 2;
  @Prop() cols: number = 30;
  @Prop() rows: number = 2;
  @Prop() wrap: string = "soft";
  @Prop() autocomplete: "name" | "honorific-prefix" | "given-name" | "additional-name" | "family-name" | "honorific-suffix" | "nickname" | "username" | "current-password" | "new-password" | "one-time-code" | "organization-title" | "organization" | "street-address" | "address-line1" | "address-line2" | "address-line3" | "address-level4" | "address-level3" | "address-level2" | "address-level1" | "country" | "country-name" | "postal-code" | "cc-name" | "cc-given-name" | "cc-additional-name" | "cc-family-name" | "cc-number" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-csc" | "cc-type" | "transaction-currency" | "transaction-amount" | "language" | "bday" | "bday-day" | "bday-month" | "bday-year" | "sex" | "url" | "photo";

  @Prop() autoformat: boolean;
  @Prop() formatter: string;

  // Range sliders
  @Prop() min: number;
  @Prop() max: number;
  @Prop() step: number = 1;

  // Validation
  @Prop() required: boolean = false;
  @Prop() novalidate: boolean = false;
  @Prop() match: string;
  @State() matchEl: HTMLElement;
  @State() status: FormResult;
  @Prop({ mutable: true, reflect: true }) valid: boolean;
  @State() level: number;
  @State() strength: object;

  @State() lightDom: HTMLInputElement;

  @Prop({ mutable: true, reflect: true }) icon: boolean = false;
  @Prop({ mutable: true, reflect: true }) shift: boolean = false;
  @Prop({ mutable: true, reflect: true }) capsLock: boolean = false;
  @Prop({ mutable: true, reflect: true }) showCapsLock: boolean = false;

  @Prop() inputTabIndex: number = 0;

  @Event() update: EventEmitter;
  @Event() focusing: EventEmitter;
  @Event() blurring: EventEmitter;

  validator: HTMLMidwestValidateElement
  input!: HTMLInputElement | HTMLTextAreaElement

  componentWillLoad() {
    darkMode(this)

    if (this.default) {
      this.value = this.default;
    }

    if (this.type === "currency" && this.value) {
      // @ts-ignore
      this.value = parseFloat(this.value).toString()
    }

    if (this.type === "password") {
      this.showCapsLock = true;
    }

    if (this.match) {
      this.matchEl = document.querySelector(`midwest-input${this.match}`);

      if (!this.matchEl) {
        console.warn(`Uh oh! Couldn't find element in DOM matching midwest-input${this.match}`);
      }
    }

    this.checkForIcon()

    if (this.type === "email" || this.type === "password") {
      this.addLightDomInput();
    }

  }

  async componentDidLoad() {
    if (this.autofocus) {
      setTimeout(() => {
        this.setFocus()
      }, 350)
    }
  }

  addLightDomInput() {
    if (!this.lightDom) {
      this.lightDom = document.createElement('input');
      this.lightDom.setAttribute("type", this.type);
      this.lightDom.tabIndex = -1;
      this.lightDom.classList.add("clip")
      this.lightDom.onchange = (e) => {
        // @ts-ignore
        this.value = e.target.value;
      };

      this.element.parentNode.insertBefore(this.lightDom, this.element);
    }
  }

  @Method()
  async setFocus() {
    this.input.focus()
  }

  @Watch('value')
  handleValueChange() {
    this.update.emit(this.value)
    
    if (this.lightDom && typeof this.value === "string") {
      this.lightDom.value = this.value;
    }
  }

  handleChange() {
    this.update.emit(this.value)
  }

  handleFocus() {
    this.focused = true;
    this.focusing.emit({});
    this.element.scrollIntoView({
      behavior: "smooth",
      block: "center"
    })
  }

  async handleBlur() {
    this.focused = false;
    if(this.autoformat) {
      this.formatValue(this.value as string);
    }
    await this.validator?.validate();
    this.blurring.emit({})
  }

  @Method()
  async validate(set = true) {
    const results = await this.validator?.validate(set);

    if (set) {
      this.status = results;
    }

    return results;
  }

  async handleInput() {
    if (this.type === "textarea") {
      this.input.style.height = "1px";
      this.input.style.height = `${this.input.scrollHeight}px`;
    }

    this.value = this.input.value;

    if (this.type === "password") {
      const results = await this.validator.get();
      this.level = results.strength.level;
    }
  }

  formatValue(event: KeyboardEvent|string) {
    if (event instanceof KeyboardEvent) {
      const target = event.target as HTMLInputElement;
      // @ts-ignore
      let value = target.value;
      const cursorStart = target.selectionStart;
      const cursorEnd = target.selectionEnd;

      const deleteKey = (event.keyCode == 8 || event.keyCode == 46);
      if (!deleteKey) {
        const {value: newValue, adjust} = formatters[this.formatter || this.type](value)
        target.value = newValue;
        if (adjust !== null) {
          target.setSelectionRange(cursorStart + adjust, cursorEnd + adjust);
        }
      }
    } else {
      // Just a simple format
      const {value: newValue} = formatters[this.formatter || this.type](event)
      this.value = newValue;
    }
  }


  @Method()
  async stepUp() {
    if (typeof this.value === "string" || typeof this.value === "number") {
      const newVal = parseFloat(this.value) + this.step;
      if (!this.max || newVal <= this.max) {
        this.value = `${newVal}`
      }
    } else if (typeof this.value === "undefined") {
      this.value = `${this.step}`;
    }
  } 

  @Method()
  async stepDown() {
    if (typeof this.value === "string" || typeof this.value === "number") {
      const newVal = parseFloat(this.value) - this.step;
      if (!this.max || newVal >= this.min) {
        this.value = `${newVal}`
      }
    } else if (typeof this.value === "undefined") {
      if (!this.max || this.step * -1 >= this.min) {
        this.value = `${this.step * -1}`;
      } else {
        this.value `0`
      }
    }
  }

  handleIncrement(event: UIEvent) {
    event.preventDefault();
    this.stepUp();
  }

  handleDecrement(event: UIEvent) {
    event.preventDefault();
    this.stepDown();
  }

  handleKeyDownIncrement(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.keyCode === 38) {
      event.preventDefault();
      this.stepUp();
    }
  }

  handleKeyDownDecrement(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.keyCode === 40) {
      event.preventDefault();
      this.stepDown();
    }
  }

  handleReset(event: UIEvent) {
    event.preventDefault();
    this.resetValue()
  }

  handleKeyDownEnter(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      if (this.element.closest('midwest-field-group')) {
        const fieldGroup: HTMLMidwestFieldGroupElement = this.element.closest('midwest-field-group');
        fieldGroup.state(true);
      } else {
        const form: HTMLMidwestFormElement = this.element.closest('midwest-form');
        form.submitForm();
      }
    }
  }

  handleInputKeyDown(event: KeyboardEvent) {
    this.handleKeyDownEnter(event);
  }

  handleKeyDownReset(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.resetValue()
    }
  }

  checkForIcon() {
    const element = this.element.querySelector('*[slot="icon"]');

    if (element) {
      this.icon = true;
    }
  }

  @Method()
  async resetValue() {
    this.previousValue = this.value;
    this.value = undefined;

    if (this.input.focus) {
      this.input.focus(); 
    }

    this.update.emit(this.value)
  }

  @Listen('keydown')
  handleKeyDown(event: KeyboardEvent) {
    if (event.code === 'KeyZ' && (event.ctrlKey || event.metaKey)) {
      if (this.value === "") {
        this.value = this.previousValue;
      }
    }

    if (event.getModifierState) {
      this.capsLock = event.getModifierState('CapsLock');
      this.shift = event.getModifierState('Shift');
    }
  }

  @Listen('mousedown')
  @Listen('mouseup')
  @Listen('keyup')
  @Listen('focus')
  handleMouseDown(event: KeyboardEvent) {
    if (event.getModifierState) {
      this.capsLock = event.getModifierState('CapsLock');
    }
  }

  renderLabel() {
    if (this.label) {
      return <midwest-label for="input" size={this.size}>{this.label}{this.required && <span class="star">*</span>}</midwest-label>
    }
  }

  renderLeftIcon() {
    if (this.type === "search" && !this.leftIcon) {
      return <ion-icon name="search" class="search" />
    } else if (this.leftIcon) {
      return <ion-icon name={this.leftIcon} class="search" />
    }
  }

  renderIncrements() {
    if (hasIncrements(this.type) && this.increments) {
      return <div class="incrementing">
        <button type="button" class="increment" tabIndex={-1} onClick={(event: UIEvent) => this.handleIncrement(event)} onKeyDown={(event: KeyboardEvent) => this.handleKeyDownIncrement(event)} onFocus={() => { this.handleFocus() }} onBlur={() => { this.handleBlur() }}>
          <ion-icon name="arrow-up"/>
        </button>
        <button type="button" class="decrement" tabIndex={-1} onClick={(event: UIEvent) => this.handleDecrement(event)} onKeyDown={(event: KeyboardEvent) => this.handleKeyDownDecrement(event)} onFocus={() => { this.handleFocus() }} onBlur={() => { this.handleBlur() }}>
          <ion-icon name="arrow-down"/>
        </button>
      </div>
    }
  }

  renderPasswordStrength() {
    if (this.type === "password") {
      return this.renderPasswordStrengthSmile()
    }
  }

  renderPasswordStrengthSmile() {
    if (this.level === 5) {
      return <ion-icon class="smile" name="happy" data-level={this.level}/>
    } 
    if (this.level === 4 || this.level === 3) {
      return <ion-icon class="smile" name="happy" data-level={this.level}/>
    } else if (this.level === 2 || this.level === 1 || this.level === 0) {
      return <ion-icon class="smile" name="sad" data-level={this.level}/>
    } else {
      return <ion-icon class="smile" name="sad" data-level="-1"/>
    }
  }

  renderSearchClearButton() {
    if (this.type === "search" && hasValue(this.value)) {
      return <ion-icon 
        name="close"
        class="close"
        onClick={(event: UIEvent) => this.handleReset(event)} 
        onKeyDown={(event: KeyboardEvent) => this.handleKeyDownReset(event)} 
        tabIndex={-1} 
        title="Reset">
      </ion-icon>
    }
  }

  renderInputElement() {
    return <input
      class="input"
      ref={(el) => this.input = el as HTMLInputElement}
      id={"input"}
      tabIndex={this.inputTabIndex}
      type={this.type}
      name={this.name}
      placeholder={this.placeholder}
      required={this.required}
      maxlength={this.maxlength}
      autofocus={this.autofocus}
      readonly={this.readonly}
      disabled={this.disabled}
      min={this.min}
      max={this.max}
      step={this.step}
      autocomplete={this.autocomplete || this.type}
      // @ts-ignore
      value={this.value}
      onKeyUp={(e) => this.autoformat && this.formatValue(e) }
      onInput={() => this.handleInput()}
      onChange={() => this.handleChange()}
      onFocus={() => this.handleFocus()}
      onBlur={() => this.handleBlur()}
      onKeyDown={(event) => { this.handleInputKeyDown(event) }}
    />
  }

  renderInput() {
    if (shouldBeAnInput(this.type)) {
      return this.renderInputElement();
    }
  }

  renderTextArea() {
    if (this.type === "textarea") {
      return <textarea
        class="input"
        ref={(el) => this.input = el as HTMLTextAreaElement}
        id={"input"}
        tabIndex={this.inputTabIndex}
        placeholder={this.placeholder}
        name={this.name}
        cols={this.cols}
        maxlength={this.maxlength}
        rows={this.rows}
        disabled={this.disabled}
        readonly={this.readonly}
        autofocus={this.autofocus}
        spellcheck={this.spellcheck ? "true" : "false"}
        required={this.required}
        onInput={() => this.handleInput()}
        onChange={() => this.handleChange()}
        onFocus={() => this.handleFocus()}
        onBlur={() => this.handleBlur()}>
        {this.value}
      </textarea>
    }
  }

  render() {
    return <Host class={`${this.status ? (this.valid ? "valid" : "invalid") : ""}`}>
      <div class="wrapper">
        <label>
          {this.renderLabel()}

          <div class="content">
            {this.icon && <div class="icon">
              <slot name="icon" />
            </div>}

            {this.renderLeftIcon()}
            {this.renderInput()}
            {this.renderTextArea()}
            {this.renderIncrements()}
            {this.renderSearchClearButton()}
            {this.renderPasswordStrength()}

            {this.processing && <div class="processing">
              <midwest-progress indeterminate />
            </div>}

            {this.showCapsLock && this.capsLock && <div class="caps-lock"><midwest-label size={this.size}>Caps Lock</midwest-label><ion-icon name="keyboard-shift" /></div>}
            {this.tooltip && <midwest-tooltip align="bottom-left">{this.tooltip}</midwest-tooltip>}
          </div>

          <midwest-validate 
            ref={(el) => { this.validator = el; }}
            element={this.element}
            size={this.size}
            onIncorrect={() => { this.valid = false }}
            onCorrect={() => { this.valid = true }}
          />

          {this.description && <midwest-label size="small" underneath>{this.description}</midwest-label>}
        </label>
      </div>
    </Host>
  }
}
