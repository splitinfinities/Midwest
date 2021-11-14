import { Component, Host, h, Listen, State, Prop, Watch, Element, EventEmitter, Event } from '@stencil/core';
import delay from 'async-delay';

@Component({
  tag: 'midwest-modal',
  styleUrl: 'modal.css',
})
export class Modal {
  @Element() element: HTMLElement;

  @Prop() remote: boolean = false;

  @Prop({ mutable: true, reflect: true }) opening: boolean = false;
  @Prop({ mutable: true, reflect: true }) closing: boolean = false;
  @Prop({ mutable: true, reflect: true }) open: boolean = false;
  @Prop({ mutable: true, reflect: true }) loading: boolean = false;

  @State() content: string;
  @State() progress: number = 0;

  @Event({ eventName: 'modalOpened', bubbles: true }) opened: EventEmitter;
  @Event({ eventName: 'modalClosed', bubbles: true }) closed: EventEmitter;

  private originalUrl!: string;
  private modalUrl!: string;

  componentWillLoad() {
    if (!this.remote) {
      const content = this.element.querySelector('template');
      this.content = content.innerHTML;
    }

    window.onpopstate = () => {
      if (document.location.href === this.originalUrl) {
        this.open = false;
      }
    };
  }

  @Listen('modalClose', { target: 'window' })
  handleClose(e: CustomEvent) {
    if (!e.detail.el || (e.detail.el && e.detail.el === this.element)) {
      this.open = false;
    }
  }

  @Listen('modalOpen', { target: 'window' })
  async handleOpen(e: CustomEvent) {
    if (this.remote && !e.detail.for) {
      this.content = undefined;
      this.modalUrl = e.detail.modalHref;
      this.progress = 0;
      this.open = false;
      this.loading = true;
      const endpoint: string = e.detail.href;

      if (endpoint) {
        this.progress = 1;
        const result = await fetch(endpoint);
        this.progress = 2;
        this.content = await result.text();
        await delay(350);
        this.progress = 3;
        this.open = true;
        this.loading = false;
      }
    } else if (!this.remote && this.element.matches(e.detail.for)) {
      this.modalUrl = e.detail.modalHref;
      this.open = true;
    }
  }

  @Watch('open')
  async observeOpen() {
    if (this.open) {
      this.opening = true;
      document.querySelectorAll('html,body').forEach(el => {
        el.classList.add('overflow-hidden');
      });
    } else {
      this.closing = true;
      document.querySelectorAll('html,body').forEach(el => {
        el.classList.remove('overflow-hidden');
      });
    }

    if (this.modalUrl && this.open) {
      this.originalUrl = window.location.href;
      window.history.pushState({}, '', this.modalUrl);
    } else if (this.modalUrl && !this.open) {
      window.history.pushState({}, '', this.originalUrl);
      this.originalUrl = undefined;
    }

    await delay(350);

    this.opening = false;
    this.closing = false;

    if (this.open) {
      this.opened.emit({});
    } else {
      this.closed.emit({});
    }
  }

  @Listen('keydown', { target: 'window' })
  handleEscape(ev: KeyboardEvent) {
    if (ev.key === 'Escape' && this.open) {
      this.open = false;
      this.progress = 0;
    }
  }

  render() {
    return (
      <Host>
        <midwest-overlay />
        {this.loading && <midwest-loading step={this.progress} steps={3} />}
        {this.content && <div innerHTML={this.content} />}
      </Host>
    );
  }
}
