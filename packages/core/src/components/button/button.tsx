import { Component, Prop, Element, h, Host, Event, EventEmitter } from '@stencil/core';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-button',
  styleUrl: 'button.css',
  shadow: true
})
export class Button {
  @Element() element: HTMLElement;

  @Prop() tag: "button" | "submit" | "link" | "span" | "modal" | "onboarding" | "stencil-route" = "link";
  @Prop() label: string = 'Submit';
  @Prop() name: string;
  @Prop() export: boolean;
  @Prop() value: string;
  @Prop() href: string = '#';
  @Prop() modalHref: string;
  @Prop() for: string;
  @Prop() target: string = '_self';
  @Prop({ reflect: true }) size: "tiny" | "small" | "large";
  @Prop({ reflect: true }) padding: "tiny" | "small" | "large";
  @Prop({ reflect: true, mutable: true }) icon: boolean = false;
  @Prop({ reflect: true, mutable: true }) iconOnly: boolean = false;
  @Prop({ reflect: true, mutable: true }) active: boolean = false;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) pill: boolean = false;
  @Prop({ reflect: true }) block: boolean = false;
  @Prop({ reflect: true }) outline: boolean = false;
  @Prop({ reflect: true }) invert: boolean = false;
  @Prop({ reflect: true }) contrast: boolean = false;
  @Prop({ reflect: true }) ghost: boolean = false;
  @Prop({ reflect: true }) dark: boolean = false;
  @Prop() processable: boolean = false;
  @Prop({ mutable: true }) processing: boolean = false;
  @Prop() buttonTabIndex: number = 0;
  @Prop() pjaxSelector: string;
  @Prop() usePjax: boolean = true;
  @Prop() confirm: string;

  @Event({ eventName: "modal:open" }) openModal: EventEmitter;
  @Event({ eventName: "modal:close" }) closeModal: EventEmitter;
  @Event({ eventName: "onboarding:open" }) openOnboarding: EventEmitter;
  @Event({ eventName: "onboarding:close" }) closeOnboarding: EventEmitter;

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
        if (this.for === "modal:close") {
          this.closeModal.emit({});
        } else if (this.for.startsWith("modal:open:")) {
          const target = this.for.split(":");

          this.openModal.emit({
            href: this.href,
            modalHref: this.modalHref,
            for: target[2]
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
        if (this.for === "onboarding:close") {
          this.closeOnboarding.emit({});
        } else if (this.for.startsWith("onboarding:open:")) {
          const target = this.for.split(":");

          this.openOnboarding.emit({
            href: this.href,
            for: target[2]
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

  handleClick (e) {
    if (this.disabled) {
      e.stopPropagation();
    }
    
    if (this.tag === "link" && this.pjaxElement && !e.metaKey) {
      e.preventDefault();
    }

    if (!this.disabled) {
      if (this.confirm) { 
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
    return <midwest-progress indeterminate />
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

  renderStencilRoute() {
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
      {this.tag === "stencil-route" && this.renderStencilRoute()}

      {this.export && <export-to-figma />}
    </Host>
  }
}
