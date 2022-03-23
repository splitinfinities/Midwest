import { Component, Prop, Element, h, Host, Event, EventEmitter, State, Method } from '@stencil/core';
import ezClipboard from 'ez-clipboard';
import delay from 'async-delay';

@Component({
  tag: 'midwest-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class Button {
  @Element() element: HTMLElement;

  @Prop() tag: 'button' | 'submit' | 'link' | 'span' | 'modal' | 'onboarding' | 'stencil-route' = 'link';
  @Prop() sideEffect: 'copy' | 'close-modal';
  @Prop({ mutable: true }) label: string = 'Submit';
  @Prop() name: string;
  @Prop() export: boolean;
  @Prop() value: string;
  @Prop() href: string = '#';
  @Prop() modalHref: string;
  @Prop() for: string;
  @Prop() target: string = '_self';
  @Prop({ reflect: true }) size: 'tiny' | 'small' | 'default' | 'large' = 'default';
  @Prop({ reflect: true }) padding: 'tiny' | 'small' | 'default' | 'large' = 'default';
  @Prop({ reflect: true, mutable: true }) icon: boolean = false;
  @Prop({ reflect: true, mutable: true }) iconOnly: boolean = false;
  @Prop({ reflect: true, mutable: true }) active: boolean = false;
  @Prop({ reflect: true, mutable: true }) activate: string;
  @Prop({ reflect: true }) method: 'get' | 'post' | 'patch' | 'put' | 'delete';
  @Prop({ reflect: true }) authenticityToken: string;
  @Prop({ reflect: true }) sidebar: boolean;
  @Prop({ reflect: true }) stopPropagation: boolean;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) pill: boolean = false;
  @Prop({ reflect: true }) circle: boolean = false;
  @Prop({ reflect: true }) block: boolean = false;
  @Prop({ reflect: true }) outline: boolean = false;
  @Prop({ reflect: true }) invert: boolean = false;
  @Prop({ reflect: true }) contrast: boolean = false;
  @Prop({ reflect: true }) dark: boolean = false;
  @Prop() processable: boolean = false;
  @Prop({ mutable: true }) processing: boolean = false;
  @Prop() buttonTabIndex: number = 0;
  @Prop() pjaxSelector: string;
  @Prop({ reflect: true }) ghost: boolean = false;
  @Prop() usePjax: boolean = true;
  @Prop() confirm: string;

  @State() copied: boolean = false;

  @Event({ bubbles: true, composed: true, eventName: 'confirmed' }) confirmed: EventEmitter;

  @Event({ bubbles: true, composed: true, eventName: 'modalOpen' }) openModal: EventEmitter;
  @Event({ bubbles: true, composed: true, eventName: 'modalClose' }) closeModal: EventEmitter;

  @Event({ bubbles: true, composed: true, eventName: 'onboardingOpen' }) openOnboarding: EventEmitter;
  @Event({ bubbles: true, composed: true, eventName: 'onboardingClose' }) closeOnboarding: EventEmitter;

  pjaxElement: any = document.querySelector('midwest-pjax');

  componentWillLoad() {
    this.label = !this.element.getAttribute('title') ? this.element.innerText : this.element.getAttribute('title');
    this.icon = this.element.querySelectorAll('midwest-icon').length > 0;

    // Should eliminate the need for manually setting usePjax to false
    if (this.href && this.usePjax) {
      let linkURL;

      try {
        linkURL = new URL('', this.href);
      } catch (e) {
        linkURL = false;
      }

      if (linkURL && window.location.hostname !== linkURL.hostname) {
        this.usePjax = false;
      }
    }
  }

  get hrefIsFullUrl() {
    const pattern = new RegExp('^(?:https?:)?(?://)?([^/?]+)', 'i'); // fragment locator
    return !!pattern.test(this.href);
  }

  async copySideEffect() {
    ezClipboard.copyPlain(this.value);
    this.copied = true;
    await delay(2000);
    this.copied = false;
  }

  async closeModalSideEffect() {
    this.closeModal.emit({});
  }

  async performSideEffects() {
    if (this.sideEffect && this.sideEffect.includes('copy')) {
      await this.copySideEffect();
    }

    if (this.sideEffect && this.sideEffect.includes('modalClose')) {
      await this.closeModalSideEffect();
    }
  }

  @Method()
  async fireClick() {
    await this.click();
  }

  async click() {
    if (this.processable) {
      this.processing = true;
    }

    if (this.tag === 'modal') {
      if (this.for) {
        if (this.for === 'modalClose') {
          this.closeModal.emit({});
        } else if (this.for.startsWith('modalOpen:')) {
          const target = this.for.split(':');

          this.openModal.emit({
            href: this.href,
            modalHref: this.modalHref,
            for: target[1],
          });
        }
      } else {
        this.openModal.emit({
          href: this.href,
          modalHref: this.modalHref,
          for: false,
        });
      }
    }

    if (this.tag === 'onboarding') {
      if (this.for) {
        if (this.for === 'onboardingClose') {
          this.closeOnboarding.emit({});
        } else if (this.for.startsWith('onboardingOpen:')) {
          const target = this.for.split(':');

          this.openOnboarding.emit({
            href: this.href,
            for: target[1],
          });
        }
      } else {
        this.openOnboarding.emit({
          href: this.href,
          for: false,
        });
      }
    }

    if (this.tag === 'submit') {
      // @ts-ignore
      this.element.closest('midwest-form').submitForm(this.element);
    }

    if (this.tag === 'button' && this.for === 'field-group') {
      // @ts-ignore
      this.element.closest('midwest-field-group').submitForm();
    }

    if (this.tag === 'button' && this.method) {
      const form = document.createElement('form');
      const method = document.createElement('input');
      const token = document.createElement('input');
      const nameValue = document.createElement('input');

      token.hidden = true;
      token.name = 'authenticity_token';
      token.value = this.authenticityToken;

      method.hidden = true;
      method.name = '_method';
      method.value = this.method;

      if (this.name && this.value) {
        nameValue.hidden = true;
        nameValue.name = this.name;
        nameValue.value = this.value;
      }

      form.method = ['patch', 'put', 'delete'].includes(this.method) ? 'post' : this.method;
      form.action = this.href;
      form.appendChild(token);
      form.appendChild(method);

      if (this.name && this.value) {
        form.appendChild(nameValue);
      }

      document.body.appendChild(form);
      form.submit();
    }

    if (this.tag === 'link') {
      if (this.usePjax && this.pjaxElement) {
        if (this.pjaxSelector) {
          this.pjaxElement.replace(this.pjaxSelector, this.href);
        } else {
          this.pjaxElement.loadUrl(this.href);
        }
      } else {
        window.open(this.href, this.target);
      }
    }

    this.performSideEffects();

    return true;
  }

  handleClick(e) {
    if (this.disabled) {
      e.stopPropagation();
    } else {
      if (this.stopPropagation) {
        e.stopPropagation();
      }
    }

    if (this.tag === 'button' && this.activate) {
      e.stopPropagation();
      const elements = document.querySelectorAll(this.activate);
      elements.forEach(element => {
        element.classList.toggle('active');
      });
    }

    if (this.tag === 'link' && this.pjaxElement && !e.metaKey) {
      e.preventDefault();
    }

    if (!this.disabled) {
      if (this.confirm) {
        if (confirm(this.confirm)) {
          this.confirmed.emit();
          this.click();
        }
      } else {
        if (!e.metaKey) {
          this.click();
        }
      }
    }
  }

  onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.active = true;
      this.handleClick(e);
    }
  }

  onKeyUp(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.active = false;
    }
  }

  renderSVG() {
    return <midwest-progress indeterminate />;
  }

  renderSlot() {
    return this.copied ? '👍 Copied' : <slot>{!this.iconOnly && this.label}</slot>;
  }

  renderButton() {
    return (
      <button
        type="button"
        class="button"
        title={this.label}
        data-disabled={this.disabled}
        onClick={this.handleClick.bind(this)}
        onKeyDown={this.onKeyDown.bind(this)}
        onKeyUp={this.onKeyUp.bind(this)}
        tabIndex={this.buttonTabIndex}
      >
        <slot name="icon" />
        <midwest-label class="content" size={this.size}>
          {this.renderSlot()}
        </midwest-label>
        {this.processing && <div class="processing">{this.renderSVG()}</div>}
      </button>
    );
  }

  renderSubmit() {
    return (
      <button
        type="submit"
        class="button"
        title={this.label}
        data-disabled={this.disabled}
        name={this.name}
        value={this.value}
        onClick={this.handleClick.bind(this)}
        onKeyDown={this.onKeyDown.bind(this)}
        onKeyUp={this.onKeyUp.bind(this)}
        tabIndex={this.buttonTabIndex}
      >
        <slot name="icon" />
        <midwest-label class="content" size={this.size}>
          {this.renderSlot()}
        </midwest-label>
        {this.processing && <div class="processing">{this.renderSVG()}</div>}
      </button>
    );
  }

  renderLink() {
    return (
      <a
        href={this.href}
        target={this.target}
        class="button"
        data-disabled={this.disabled}
        title={this.label}
        onClick={this.handleClick.bind(this)}
        onKeyDown={this.onKeyDown.bind(this)}
        onKeyUp={this.onKeyUp.bind(this)}
        tabIndex={this.buttonTabIndex}
      >
        <slot name="icon" />
        <midwest-label class="content" size={this.size}>
          {this.renderSlot()}
        </midwest-label>
        {this.processing && <div class="processing">{this.renderSVG()}</div>}
      </a>
    );
  }

  renderStencilRoute() {
    return (
      <stencil-route-link
        url={this.href}
        anchorClass="button"
        data-disabled={this.disabled}
        title={this.label}
        onClick={this.handleClick.bind(this)}
        onKeyDown={this.onKeyDown.bind(this)}
        onKeyUp={this.onKeyUp.bind(this)}
        tabIndex={this.buttonTabIndex}
      >
        <slot name="icon" />
        <midwest-label class="content" size={this.size}>
          {this.renderSlot()}
        </midwest-label>
        {this.processing && <div class="processing">{this.renderSVG()}</div>}
      </stencil-route-link>
    );
  }

  renderSpan() {
    return (
      <span
        class="button"
        title={this.label}
        data-disabled={this.disabled}
        aria-label={`Button ${this.label} ${this.element.textContent}`}
        tabIndex={this.buttonTabIndex}
        onClick={this.handleClick.bind(this)}
        onKeyDown={this.onKeyDown.bind(this)}
        onKeyUp={this.onKeyUp.bind(this)}
      >
        <slot name="icon" />
        <midwest-label class="content" size={this.size}>
          {this.renderSlot()}
        </midwest-label>
        {this.processing && <div class="processing">{this.renderSVG()}</div>}
      </span>
    );
  }

  render() {
    return (
      <Host>
        {['button', 'modal', 'onboarding'].includes(this.tag) && this.renderButton()}
        {this.tag === 'submit' && this.renderSubmit()}
        {this.tag === 'link' && this.renderLink()}
        {this.tag === 'span' && this.renderSpan()}
        {this.tag === 'stencil-route' && this.renderStencilRoute()}

        {this.export && <export-to-figma />}
      </Host>
    );
  }
}
