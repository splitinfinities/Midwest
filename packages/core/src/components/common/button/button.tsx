import { Component, Prop, Element, h, Host, Event, EventEmitter } from '@stencil/core';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-button',
  styleUrl: 'button.css',
  shadow: true
})
export class Button {
  @Element() element: HTMLElement;

  /**
   * Allows the button to render for different tags.
   */
  @Prop() tag: "button" | "submit" | "link" | "span" | "modal" | "onboarding" = "link";

  /**
   * Sets accessibility options on the buttons
   */
  @Prop() label: string = 'Submit';

  /**
   * Sets the name on the button if the button is an input. Allows the button to act as an item in a form.
   */
  @Prop() name: string;

  /**
   * Makes sure the button cannot be exported.
   */
  @Prop() export: boolean;

  /**
   * Sets the value on the button if the button is an input.
   */
  @Prop() value: string;

  /**
   * Sets the href on the anchor tag if the button is a link.
   */
  @Prop() href: string = '#';

  /**
   * Sets the href on the anchor tag if the button is a link.
   */
  @Prop() modalHref: string;

  /**
   * Sets the href on the anchor tag if the button is a link.
   */
  @Prop() for: string;

  /**
   * Sets the target on the anchor tag if the button is a link.
   */
  @Prop() target: string = '_self';

  /**
   * Sets the size of the button. 
   */
  @Prop({ reflect: true }) size: "tiny" | "small" | "large";

  /**
   * Sets the padding inside of the button. 
   */
  @Prop({ reflect: true }) padding: "tiny" | "small" | "large";

  /**
   * Sets the button or link as a button with only an icon.
   */
  @Prop({ reflect: true, mutable: true }) icon: boolean = false;

  /**
   * Sets the button or link as a button with only an icon.
   */
  @Prop({ reflect: true, mutable: true }) iconOnly: boolean = false;

  /**
   * Sets the button or link as an active state.
   */
  @Prop({ reflect: true, mutable: true }) active: boolean = false;

  /**
   * Sets the button or link as an active state.
   */
  @Prop({ reflect: true }) method: "get"|"post"|"patch"|"put"|"delete";

  /**
   * Authenticty Token
   */
  @Prop({ reflect: true }) authenticityToken: string;

  /**
   * Sets the button or link as an active state.
   */
  @Prop({ reflect: true }) stopPropagation: boolean;

  /**
   * Sets the button or link as disabled and not-interactable.
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Sets the button or link to render as a pill.
   */
  @Prop({ reflect: true }) pill: boolean = false;

  /**
   * Sets the button or link to render at full width to the parent.
   */
  @Prop({ reflect: true }) block: boolean = false;

  /**
   * Sets the button or link as an outlined button.
   */
  @Prop({ reflect: true }) outline: boolean = false;

  /**
   * Sets the button or link as an outlined button.
   */
  @Prop({ reflect: true }) invert: boolean = false;

  /**
   * Sets the button or link as an outlined button.
   */
  @Prop({ reflect: true }) contrast: boolean = false;

  /**
   * Sets the button or link as an outlined button.
   */
  @Prop({ reflect: true }) dark: boolean = false;

  /**
   * Sets the button or link as processing when clicked.
   */
  @Prop() processable: boolean = false;
  @Prop({ mutable: true }) processing: boolean = false;

  @Prop() buttonTabIndex: number = 0;

  @Prop() pjaxSelector: string;

  @Prop({ reflect: true }) ghost: boolean = false;

  @Prop() usePjax: boolean = true;

  @Prop() confirm: string;

  @Event({ bubbles: true, composed: true, eventName: "delete-entry" }) deleteEntry: EventEmitter;
  
  @Event({ bubbles: true, composed: true, eventName: "open-modal" }) openModal: EventEmitter;
  @Event({ bubbles: true, composed: true, eventName: "close-modal" }) closeModal: EventEmitter;

  @Event({ bubbles: true, composed: true, eventName: "open-onboarding" }) openOnboarding: EventEmitter;
  @Event({ bubbles: true, composed: true, eventName: "close-onboarding" }) closeOnboarding: EventEmitter;

  pjaxElement: any = document.querySelector('midwest-pjax');

  componentWillLoad() {
    darkMode(this)
    this.label = (!this.element.getAttribute("title")) ? this.element.innerText : this.element.getAttribute("title");
    this.icon = this.element.querySelectorAll('[slot="icon"]').length > 0;
  }

  async click() {
    if (this.processable) {
      this.processing = true;
    }

    if (this.tag === "modal") {
      if (this.for) {
        if (this.for === "close-modal") {
          this.closeModal.emit({});
        } else if (this.for.startsWith("open-modal:")) {
          const target = this.for.split(":");

          this.openModal.emit({
            href: this.href,
            modalHref: this.modalHref,
            for: target[1]
          });
        }
      } else {
        this.openModal.emit({
          href: this.href,
          modalHref: this.modalHref,
          for: false
        });
      }
    }

    if (this.tag === "onboarding") {
      if (this.for) {
        if (this.for === "close-modal") {
          this.closeOnboarding.emit({});
        } else if (this.for.startsWith("open-onboarding:")) {
          const target = this.for.split(":");

          this.openOnboarding.emit({
            href: this.href,
            for: target[1]
          });
        }
      } else {
        this.openOnboarding.emit({
          href: this.href,
          for: false
        });
      }
    }

    if (this.tag === "submit") {
      // @ts-ignore
      this.element.closest('midwest-form').submitForm(this.element);
    }

    if (this.tag === "button" && this.for === "field-group") {
      // @ts-ignore
      this.element.closest('midwest-field-group').submitForm();
    }

    if (this.tag === "button" && this.method) {
      const form = document.createElement("form");
      const method = document.createElement("input");
      const token = document.createElement("input");

      token.hidden = true;
      token.name = "authenticity_token";
      token.value = this.authenticityToken;

      method.hidden = true;
      method.name = "_method";
      method.value = this.method;

      form.method = ["patch", "put", "delete"].includes(this.method) ? "post" : this.method;
      form.action = this.href;
      form.appendChild(token);
      form.appendChild(method);

      document.body.appendChild(form);
      form.submit();
    }

    if (this.tag === "button" && this.for === "delete-entry") {
      const index = this.element.closest(".repeated[data-index]").getAttribute("data-index");
      this.deleteEntry.emit({index})
    }

    if (this.tag === "link") {
      if (this.usePjax && this.pjaxElement) {
        if (this.pjaxSelector) {
          this.pjaxElement.replace(this.pjaxSelector, this.href);
        } else {
          this.pjaxElement.loadUrl(this.href)
        }
      } else {
        window.open(this.href, this.target);
      }
    }

    return true;
  }

  handleClick(e: Event) {
    if (this.disabled) {
      e.stopPropagation();
    } else {
      if (this.stopPropagation) {
        e.stopPropagation();
      }
    }

    if (this.tag === "link" && this.pjaxElement) {
      e.preventDefault();
    }

    if (!this.disabled) {
      if(this.confirm) { 
        confirm(this.confirm) && this.click();
      } else {
        this.click();
      }
    }
  }

  onKeyDown (e: KeyboardEvent) { 
    if (e.key === "Enter") {
      this.active = true;
      this.handleClick(e)
    }
  }

  onKeyUp(e: KeyboardEvent) { 
    if (e.key === "Enter") {
      this.active = false
    }
  }

  renderSVG() {
    return <midwest-progress indeterminate style={{"--theme-base-5": "currentColor"}} />
  }

  renderSlot() {
    return this.processing ? this.label : <slot>{!this.iconOnly && this.label}</slot>
  }

  renderButton() {
    return <button type="button" class="button" title={this.label} data-disabled={this.disabled} onClick={this.handleClick.bind(this)} onKeyDown={this.onKeyDown.bind(this)} onKeyUp={this.onKeyUp.bind(this)} tabIndex={this.buttonTabIndex}>
      <slot name="icon" />
      <midwest-label class="content" size={this.size}>{this.renderSlot()}</midwest-label>
      {this.processing && <div class="processing">{this.renderSVG()}</div>}
    </button>
  }

  renderSubmit() {
    return <button type="submit" class="button" title={this.label} data-disabled={this.disabled} name={this.name} value={this.value} onClick={this.handleClick.bind(this)} onKeyDown={this.onKeyDown.bind(this)} onKeyUp={this.onKeyUp.bind(this)} tabIndex={this.buttonTabIndex}>
      <slot name="icon" />
      <midwest-label class="content" size={this.size}>{this.renderSlot()}</midwest-label>
      {this.processing && <div class="processing">{this.renderSVG()}</div>}
    </button>
  }

  renderLink() {
    return <a href={this.href} target={this.target} class="button" data-disabled={this.disabled} title={this.label} onClick={this.handleClick.bind(this)} onKeyDown={this.onKeyDown.bind(this)} onKeyUp={this.onKeyUp.bind(this)} tabIndex={this.buttonTabIndex}>
      <slot name="icon" />
      <midwest-label class="content" size={this.size}>{this.renderSlot()}</midwest-label>
      {this.processing && <div class="processing">{this.renderSVG()}</div>}
    </a>
  }

  renderAppLink() {
    return <stencil-route-link url={this.href} anchorClass="button" data-disabled={this.disabled} title={this.label} onClick={this.handleClick.bind(this)} onKeyDown={this.onKeyDown.bind(this)} onKeyUp={this.onKeyUp.bind(this)} tabIndex={this.buttonTabIndex}>
      <slot name="icon" />
      <midwest-label class="content" size={this.size}>{this.renderSlot()}</midwest-label>
      {this.processing && <div class="processing">{this.renderSVG()}</div>}
    </stencil-route-link>
  }

  renderSpan() {
    return <span class="button" title={this.label} data-disabled={this.disabled} aria-label={`Button ${this.label} ${this.element.textContent}`} tabIndex={this.buttonTabIndex} onClick={this.handleClick.bind(this)} onKeyDown={this.onKeyDown.bind(this)} onKeyUp={this.onKeyUp.bind(this)}>
      <slot name="icon" />
      <midwest-label class="content" size={this.size}>{this.renderSlot()}</midwest-label>
      {this.processing && <div class="processing">{this.renderSVG()}</div>}
    </span>
  }

  render() {
    return <Host>
      {["button", "modal", "onboarding"].includes(this.tag) && this.renderButton()}
      {this.tag === "submit" && this.renderSubmit()}
      {this.tag === "link" && this.renderLink()}
      {this.tag === "span" && this.renderSpan()}

      {this.export && <export-to-figma />}
    </Host>
  }
}
