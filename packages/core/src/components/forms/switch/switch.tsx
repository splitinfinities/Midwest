import { Component, Prop, Element, Event, EventEmitter, Method, Watch, h, State, Host } from '@stencil/core';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-switch',
  styleUrl: 'switch.css'
})
export class Switch {
  @Element() el: HTMLElement;

  @Prop({ mutable: true, reflect: true }) checked: boolean = false;
  @Prop({reflect: true}) base: ThemeableColors;
  @Prop() checkedDefault: boolean = false;
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) novalidate: boolean;
  @Prop({ reflect: true }) required: boolean;
  @Prop({ reflect: true }) yesValue: string = "true";
  @Prop({ reflect: true }) noValue: string = "false";
  @Prop({ reflect: true, mutable: true}) value: string | boolean;
  @Prop({ reflect: true, mutable: true}) changeTheme: boolean;
  
  @Prop({ mutable: true, reflect: true }) size: "small" | "default" | "large" = "default";

  @Prop() label: string;
  @Prop() description: string;
  @Prop() tooltip: string;

  @State() valid: boolean = true;
  @State() error: string;
  @State() status: FormResult;
  @Event() update: EventEmitter;

  /**
   * Hides this element from exporting to figma
   */
  @Prop() export: boolean;

  /**
   * Sets the button or link as an outlined button.
   */
  @Prop({ reflect: true }) dark: boolean = false;

  validator: HTMLMidwestValidateElement

  componentWillLoad() {
    darkMode(this)
  }

  componentDidLoad() {
    if (this.checkedDefault) {
      this.checked = this.checkedDefault
    }

    this.updateValue();
  }

  get onValue () {
    return this.yesValue ? this.yesValue : this.checked;
  }

  get offValue () {
    return this.noValue ? this.noValue : this.checked;
  }

  updateValue() {
    this.value = this.checked ? this.onValue : this.offValue;
  }

  @Method()
  async validate(set = true) {
    const results = await this.validator.validate(set);
    
    if (set) {
      this.status = results;
    }
    return results;
  }

  @Method()
  async activate(event?) {
    if (!this.disabled) {
      event.stopPropagation();
      event.preventDefault();
      this.checked = !this.checked
      this.updateValue();
    }
  }

  @Watch('checked')
  handleChecked() {
    if (this.changeTheme) {
      document.querySelector("midwest-theme").dark = this.checked
    }

    this.update.emit({
      checked: this.checked
    });
  }

  render() {
    return <Host tabIndex={0} onClick={ (e: Event) => this.activate(e) } onKeyDown={(e: KeyboardEvent) => { if (e.key === "Enter") { this.activate(e) }}}>
      <label class="label" htmlFor={this.name} onClick={ (e) => this.activate(e)}>
      {this.label && <midwest-label size={this.size}>{this.label}</midwest-label>}
      <div class="flex">
        <input type="hidden" name={this.name} value={this.noValue} tabindex="-1" onClick={ (e) => this.activate(e)} />
        <input type="checkbox" disabled={this.disabled} name={this.name} id={this.name} checked={this.checked} value={this.yesValue} tabindex="-1" onClick={(e) => this.activate(e)} />
        <span class="button">
          <span>
            <ion-icon name={this.checked ? "checkmark" : "close"} />
          </span>
        </span>
        <div class={this.checked ? "show yes" : "hide yes"}  onClick={(e) => { e.stopPropagation() }} onKeyDown={(e) => { if (e.key === "Enter") { e.stopPropagation() }}}><slot name="yes" /></div>
        <div class={!this.checked ? "show no" : "hide no"}  onClick={(e) => { e.stopPropagation() }} onKeyDown={(e) => { if (e.key === "Enter") { e.stopPropagation() }}}><slot name="no" /></div>
        <slot />
      </div>
      {this.tooltip && <midwest-tooltip align="bottom-left">{this.tooltip}</midwest-tooltip>}
      {this.description && <midwest-label size="small" underneath>{this.description}</midwest-label>}
      <midwest-validate
        ref={(el) => { this.validator = el; } }
        name={this.name}
        element={this.el}
        silent={this.novalidate}
        onIncorrect={() => {this.valid = false}}
        onCorrect={() => {this.valid = true}}
      />
    </label>

    {this.export && <export-to-figma />}
    </Host>
  }
}