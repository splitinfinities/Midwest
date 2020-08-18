import { Component, Element, Prop, State, Listen, Method, Event, EventEmitter, Watch, h, Host } from '@stencil/core';
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import { getDateTimeFromModal, incrementSomething, decrementSomething } from './lib';
import { darkMode } from '@midwest-design/common';

dayjs.extend(customParseFormat)
dayjs.extend(relativeTime)
dayjs.extend(duration)
dayjs.extend(utc)

@Component({
  tag: 'midwest-input-date',
  styleUrl: 'input.css',
  shadow: true
})
export class InputDate {
  /**
   * Instance of the custom element
   */
  @Element() element: HTMLElement

  /**
   * Instance of the input or text-area element
   */
  input!: HTMLInputElement | HTMLTextAreaElement

  /**
   * Public: Updated event
   */
  @Event() update: EventEmitter;

  /**
   * Public: Focus event
   */
  @Event() focusing: EventEmitter;

  /**
   * Public: Blur event
   */
  @Event() blurring: EventEmitter;

  /**
   * The kind of element that the Input should be rendered as
   */
  @Prop({ reflect: true }) type: "time" | "date" | "datetime" = "datetime";

  /**
   * The kind of element that the Input should be rendered as
   */
  @Prop({ reflect: true }) range: "time" | "date" | "datetime";

  /**
   * The name of the input element
   */
  @Prop({ reflect: true }) name: string;

  /**
   * The pre-set value to pass to the input element
   */
  @Prop({ mutable: true, reflect: true }) value: string;

  // Aesthetic things
  @Prop({ mutable: true, reflect: true }) size: "small" | "default" | "large" = "default";

  /**
   * Sets the button to dark.
   */
  @Prop({ reflect: true }) dark: boolean = false;

  /**
   * Sets the button to dark.
   */
  @Prop({ reflect: true }) leftIcon: string;

  /**
   * Sets the display to inline
   */
  @Prop({ reflect: true }) inline: boolean = false;
  @Prop({ reflect: true, mutable: true }) processing: boolean = false;

  // Accessibility
  @Prop({ mutable: true, reflect: true }) label: string;
  @Prop() description: string;
  @Prop() tooltip: string;
  @Prop() noDuration: boolean;
  @Prop({ mutable: true, reflect: true }) placeholder: string = "Enter a date and time";

  // Usability things
  @Prop() disabled: boolean;
  @Prop() readonly: boolean = false;
  @Prop() autofocus: boolean = false;
  @Prop({ reflect: true, mutable: true }) focused: boolean = false;
  @Prop({ reflect: true, mutable: true }) dateFocus: "month"|"date"|"year"|"hour"|"minute"|"ampm";
  @Prop({ reflect: true, mutable: true }) dateRangeFocus: "from"|"to";
  @Prop() customValidations: CustomFunction;

  // Range sliders
  @Prop() min: number;
  @Prop() max: number;
  @Prop() step: number = 1;

  // Validation
  @Prop() required: boolean = false;
  @Prop() novalidate: boolean = false;
  @State() status: FormResult;
  @Prop({ mutable: true, reflect: true }) valid: boolean;

  @Prop({ mutable: true, reflect: true }) shift: boolean = false;

  @Prop() inputTabIndex: number = 0;

  @Prop() from: string;
  @Prop() to: string;

  @State() _from: Dayjs;
  @State() _to: Dayjs;
  @State() _date: Dayjs;

  @State() open: boolean;

  validator: HTMLMidwestValidateElement
  dateTimeElement: HTMLMidwestDatetimePickerElement

  componentWillLoad() {
    darkMode(this)
    this.inputTabIndex = -1;

    if (this.range && this.from && this.to) {
      this._from = dayjs(this.from);
      this._to = dayjs(this.to);
    } else if (this.range && !this.from && !this.to && this.value) {
      const array = this.value.split(",");
      this._from = dayjs(array[0]);
      this._to = dayjs(array[1]);
    } else if (this.range && !this.from && !this.to) {
      this._from = dayjs().set("hour", 8).set("minute", 0).set("second", 0);
      this._to = dayjs().set("hour", 17).set("minute", 0).set("second", 0);
    }

    if (!this.range) {
      this._date = (this.value) ? dayjs(this.value) : dayjs();
    }
  }

  @Watch("_date")
  @Watch("_to")
  @Watch("_from")
  handleDateChanges() {
    if (this.range) {
      if (this._from && this._to) {
        const from = this._from.format(this.methodFormat)
        const to = this._to.format(this.methodFormat)
        this.value = `${from},${to}`;
        this.from = from;
        this.to = from;
        if (!this.noDuration) {
          this.description = `${this._from.fromNow()} for ${dayjs.duration(this._from.diff(this._to)).humanize(false)}`
        }
      }
    } else {
      this.value = this._date.format(this.methodFormat)

      if (!this.noDuration) {
        this.description = `${this._date.fromNow()}`
      }
    }

    this.validate()
  }

  get hasDate() {
    return ["date","datetime"].includes(this.type);
  }

  get hasTime() {
    return ["time","datetime"].includes(this.type);
  }

  get hasRangeDate() {
    return ["date","datetime"].includes(this.range);
  }

  get hasRangeTime() {
    return ["time","datetime"].includes(this.range);
  }

  get methodFormat() {
    if (this.type === "time") {
      return "HH:mm"
    } else if (this.type === "date") {
      return "YYYY-MM-DD"
    } else {
      return undefined
    }
  }

  removeDateTimePicker() {
    document.body.removeChild(document.querySelector(`midwest-datetime-picker[name="${this.name}"]`));
  }

  removeOtherDateTimePickers() {
    if (document.querySelector(`body > midwest-datetime-picker, midwest-theme > midwest-datetime-picker`)) {
      document.body.removeChild(document.querySelector(`midwest-datetime-picker`));
    }
  }

  @Method()
  async setFocus() {
    this.input.focus()
  }

  @Method()
  async getDateTimeFromModal() {
    if (!this.range) {
      await getDateTimeFromModal(this)
    }
  }

  @Watch('value')
  handleValueChange() {
    if (!this.range) {
      this._date = dayjs(this.value, this.methodFormat)
    }

    this.update.emit(this.value)
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

  handleDateTimePosition() {
    if (this.dateTimeElement) {
      const bounding = this.element.getBoundingClientRect()
      this.dateTimeElement.style.top = `${bounding.top + bounding.height}px`;
      this.dateTimeElement.style.left = `${bounding.left}px`;
    }
  }

  @Listen("scroll", { target: "window" })
  @Listen("resize", { target: "window" })
  handleScroll() {
    this.handleDateTimePosition()
  }

  async handleInput(e: any) {
    e.preventDefault();
  }

  handleReset(event: UIEvent) {
    event.preventDefault();
    this.resetValue()
  }

  handleClick() {
    if (this.focused) {
      this.getDateTimeFromModal()
    }
  }

  handleKeyDownEnter(event: KeyboardEvent) {
    if (event.keyCode === 13 && this.focused) {
      this.getDateTimeFromModal()
    }
  }

  handleKeyDownArrows(event: KeyboardEvent) {
    if ([38, 40].includes(event.keyCode)) {
      event.stopPropagation();
      event.preventDefault();

      if (event.keyCode === 38) {
        this.stepUp();
      }
  
      if (event.keyCode === 40) {
        this.stepDown();
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

  @Method()
  async resetValue() {
    if (this.range) {
      this._from = dayjs();
      this._to = dayjs().add(8, "hour");
    } else {
      this._date = dayjs();
    }

    if (this.input.focus) {
      this.input.focus(); 
    }
  }

  @Method()
  async stepUp() {
    await incrementSomething(this)
  }

  @Method()
  async stepDown() {
    await decrementSomething(this)
  }

  @Listen('mousedown')
  @Listen('mouseup')
  @Listen('keyup')
  @Listen('focus')
  handleMouseDown(event: KeyboardEvent) {
    if (event.getModifierState) {
      this.shift = event.getModifierState('Shift');
    }
  }

  focusIn(name: "date" | "month" | "year" | "hour" | "minute" | "ampm", range?: "from"|"to") {
    this.dateFocus = name;

    if (range) { 
      this.dateRangeFocus = range 
    }
  }

  focusOut() {
    this.dateFocus = undefined; 
    this.dateRangeFocus = undefined;
  }

  renderLabel() {
    return this.label && <midwest-label for="input" size={this.size}>{this.label}{this.required && <span class="star">*</span>}</midwest-label>
  }

  renderMonth(date: Dayjs, range?: "from"|"to") {
    return this.hasDate && <button 
      class="month"
      onClick={(e) => e.preventDefault()}
      onKeyDown={this.handleKeyDownArrows.bind(this)}
      onFocus={() => this.focusIn("month", range)}
      onBlur={() => this.focusOut()}
    >
      {date.format("MMMM")}
    </button>
  }

  renderDate(date: Dayjs, range?: "from"|"to") {
    return this.hasDate && <button 
      class="date"
      onClick={(e) => e.preventDefault()}
      onKeyDown={this.handleKeyDownArrows.bind(this)}
      onFocus={() => this.focusIn("date", range)}
      onBlur={() => this.focusOut()}
    >
      {date.format("DD")}
    </button>
  }

  renderYear(date: Dayjs, range?: "from"|"to") {
    return this.hasDate && <button 
      class="year"
      onClick={(e) => e.preventDefault()}
      onKeyDown={this.handleKeyDownArrows.bind(this)}
      onFocus={() => this.focusIn("year", range)}
      onBlur={() => this.focusOut()}
    >
      {date.format("YYYY")}
    </button>
  }

  renderHour(date: Dayjs, range?: "from"|"to") {
    return this.hasTime && <button 
      class="hour"
      onClick={(e) => e.preventDefault()}
      onKeyDown={this.handleKeyDownArrows.bind(this)}
      onFocus={() => this.focusIn("hour", range)}
      onBlur={() => this.focusOut()}
    >
      {date.format("h")}
    </button>
  }

  renderMinute(date: Dayjs, range?: "from"|"to") {
    return this.hasTime && <button 
      class="minute"
      onClick={(e) => e.preventDefault()}
      onKeyDown={this.handleKeyDownArrows.bind(this)}
      onFocus={() => this.focusIn("minute", range)}
      onBlur={() => this.focusOut()}
    >
      {date.format("mm")}
    </button>
  }

  renderAmPm(date: Dayjs, range?: "from"|"to") {
    return this.hasTime && <button 
      class="ampm"
      onClick={(e) => e.preventDefault()}
      onKeyDown={this.handleKeyDownArrows.bind(this)}
      onFocus={() => this.focusIn("ampm", range)}
      onBlur={() => this.focusOut()}
    >
      {date.format("a")}
    </button>
  }

  renderDatePicker() {
    return !this.range && <div class="fake-input">
      {this.renderMonth(this._date)}
      {this.renderDate(this._date)}
      {this.renderYear(this._date)}
      
      {this.renderHour(this._date)}
      {this.hasTime && ":"}
      {this.renderMinute(this._date)}
      {this.renderAmPm(this._date)}
    </div>
  }

  renderDateRangePicker() {
    return this.range && this._from && this._to && <div class="fake-input">
      {this.renderMonth(this._from, "from")}
      {this.renderDate(this._from, "from")}
      {this.renderYear(this._from, "from")}
      
      {this.renderHour(this._from, "from")}
      {this.hasTime && ":"}
      {this.renderMinute(this._from, "from")}
      {this.renderAmPm(this._from, "from")}

      <div class="range-splitter">to</div>

      {this.hasRangeDate && this.renderMonth(this._to, "to")}
      {this.hasRangeDate && this.renderDate(this._to, "to")}
      {this.hasRangeDate && this.renderYear(this._to, "to")}
      
      {this.hasRangeTime && this.renderHour(this._to, "to")}
      {this.hasRangeTime && ":"}
      {this.hasRangeTime && this.renderMinute(this._to, "to")}
      {this.hasRangeTime && this.renderAmPm(this._to, "to")}
    </div>
  }

  renderInput() {
    return <input
      class="input"
      ref={(el) => this.input = el as HTMLInputElement}
      id={"input"}
      tabIndex={this.inputTabIndex}
      type={this.type === "date" ? "text" : this.type}
      name={this.name}
      placeholder={this.placeholder}
      required={this.required}
      autofocus={this.autofocus}
      readonly={this.readonly}
      disabled={this.disabled}
      min={this.min}
      max={this.max}
      step={this.step}
      // @ts-ignore
      value={this.value}
      onInput={(e) => this.handleInput(e)}
      onChange={() => this.handleChange()}
      onFocus={() => this.handleFocus()}
      onBlur={() => this.handleBlur()}
      onClick={() => this.handleClick()}
      onKeyDown={(event) => { this.handleInputKeyDown(event) }}
    />
  }

  checkRangeValid() {
    let result = true;

    if (this.range) {
      result = this._from.isBefore(this._to)
    }

    return result;
  }

  checkAboveMin() {
    let result = true;

    if (this.min) {
      if (this.range) {
        result = dayjs(this.min).isBefore(this._from) && dayjs(this.min).isBefore(this._to)
      } else {
        result = dayjs(this.min).isBefore(this._date)
      }
    }

    return result;
  }

  checkBelowMax() {
    let result = true;

    if (this.max) {
      if (this.range) {
        result = dayjs(this.max).isAfter(this._from) && dayjs(this.max).isAfter(this._to)
      } else {
        result = dayjs(this.max).isAfter(this._date)
      }
    }

    return result;
  }

  render() {
    return <Host class={`${this.status ? (this.valid ? "valid" : "invalid") : ""}`}>
      <div class="wrapper">
        <label>
          {this.renderLabel()}

          <div class="content">
            {!this.range && <button class="icon right" tabIndex={-1} onClick={(e) => { e.preventDefault(); this.getDateTimeFromModal() }}>
              <ion-icon name={this.open ? "close-circle" : "calendar"} />
            </button>}

            {this.renderDatePicker()}
            {this.renderDateRangePicker()}
            {this.renderInput()}

            {this.processing && <div class="processing">
              <midwest-progress indeterminate />
            </div>}

            {this.tooltip && <midwest-tooltip align="bottom-left">{this.tooltip}</midwest-tooltip>}
          </div>

          <midwest-validate 
            ref={(el) => { this.validator = el; }}
            element={this.element}
            size={this.size}
            check={{
              "valid_range": {
                message: "Your first date must be before your last date",
                test: () => this.checkRangeValid()
              },
              "above_min": {
                message: `This date is before ${dayjs(this.min).format(this.methodFormat)}`,
                test: () => this.checkAboveMin()
              },
              "below_max": {
                message: `This date is after ${dayjs(this.max).format(this.methodFormat)}`,
                test: () => this.checkBelowMax()
              },
            }}
            
            onIncorrect={() => { this.valid = false }}
            onCorrect={() => { this.valid = true }}
          />

          {this.description && <midwest-label size="small" underneath>{this.description}</midwest-label>}
        </label>
      </div>
    </Host>
  }
}
