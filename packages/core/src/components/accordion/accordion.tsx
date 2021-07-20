import { Component, Element, Prop, State, h, Event, EventEmitter, Watch, Host, Listen } from '@stencil/core';
import Debouncer from 'debounce-decorator';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-accordion',
  styleUrl: 'accordion.css',
  shadow: true,
})
export class Accordion {
  @Element() element: HTMLElement;

  @Prop({ mutable: true, reflect: true }) open: boolean = false;
  @Prop({ reflect: true }) tight: boolean;
  @Prop({ reflect: true }) compact: boolean;
  @Prop({ mutable: true, reflect: true }) maxHeight: number = 50;

  @Prop() name: string = 'accordion';
  @Prop() label: string = 'More Details';
  @Prop({ reflect: true }) dark: boolean = false;

  @Event() opened: EventEmitter;
  @Event() closed: EventEmitter;

  @State() observer: MutationObserver;
  @State() accordionHeight: number;

  expander!: HTMLElement;

  componentWillLoad() {
    darkMode(this);
    if (window.MutationObserver) {
      const callback = (mutationsList: any) => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            this.refresh();
          }
        }
      };

      this.observer = new MutationObserver(callback);
    }
  }

  @Listen('update', { target: 'document' })
  @Listen('test', { target: 'document' })
  @Debouncer(200)
  async handleUpdate() {
    this.refresh();
  }

  componentDidLoad() {
    this.refresh();
    this.attachObserver();
  }

  refresh() {
    // @ts-ignore
    this.accordionHeight = (this.expander.firstElementChild as HTMLSlotElement).assignedElements()[0].offsetHeight + 36;
  }

  @Watch('open')
  async onOpenChanged() {
    if (this.open) {
      this.opened.emit({});
    } else {
      this.closed.emit({});
    }
  }

  attachObserver() {
    if (this.observer) {
      // Start observing the target node for configured mutations
      this.observer.observe(this.element, { childList: true, subtree: true });
    }
  }

  componentWillUnload() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  get currentClasses() {
    return `expander ${this.openClass()}`;
  }

  openClass() {
    return this.open ? 'open' : '';
  }

  handleClick() {
    this.open = !this.open;
  }

  render() {
    return (
      <Host
        style={{
          '--expander-max-height': `${this.maxHeight}vh`,
          '--accordion-height': `${this.accordionHeight}px`,
        }}
      >
        <div class="wrap">
          <div class="button-wrap" title="Selecting this opens the content of this accordion" onClick={() => this.handleClick()}>
            <slot name="label"></slot>
            <ion-icon class="chevron" name="chevron-down" />
          </div>

          <div
            class={this.currentClasses}
            ref={el => {
              this.expander = el;
            }}
          >
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
