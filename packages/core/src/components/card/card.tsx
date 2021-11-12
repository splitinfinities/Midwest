import { Component, Prop, State, Element, Event, EventEmitter, Method, h, Watch, Listen, Host } from '@stencil/core';
import delay from 'async-delay';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-card',
  styleUrl: 'card.css',
  shadow: true,
})
export class Card {
  @Element() element: HTMLElement;
  @Prop({ reflect: true }) horizontal: boolean;
  @Prop() export: boolean;
  @Prop({ reflect: true }) flippable: boolean = false;
  @Prop({ reflect: true, mutable: true }) flipReady: boolean = false;
  @Prop({ mutable: true, reflect: true }) flipped: boolean = false;
  @Prop({ reflect: true }) padding: 'none' | 'tiny' | 'small' | 'medium' | 'large' = 'medium';
  @Prop({ reflect: true }) compact: boolean = false;
  @Prop({ reflect: true }) block: boolean = false;
  @Prop() tag: 'a' | 'button' | 'div' | 'modal' = 'div';
  @Prop() type: string;
  @Prop() href: string = '#';
  @Prop() modalHref: string;
  @Prop() name: string = '';
  @Prop() value: string = '#';
  @Prop() for: string;
  @Prop() flipIcon: string = 'create';
  @Prop({ reflect: true, mutable: true }) dark: boolean = false;
  @Prop({ reflect: true, mutable: true }) small: boolean = false;
  @Prop({ reflect: true }) smallSize: number = 350;

  ro!: ResizeObserver;
  @State() flipTimeout: any;
  @State() cardWidth: any;

  @Event() flip: EventEmitter;

  @Event({ eventName: 'modalOpen' }) openModal: EventEmitter;
  @Event({ eventName: 'modalClose' }) closeModal: EventEmitter;

  @Prop({ mutable: true }) originalHeight: number;
  @Prop({ mutable: true }) backHeight: number;

  @State() pjax: any = document.querySelector('midwest-pjax');

  front!: HTMLDivElement;
  back!: HTMLDivElement;

  componentWillLoad() {
    darkMode(this);
  }

  componentDidLoad() {
    this.updateFlippableCardHeight();
  }

  onResize(e) {
    const width = e.detail.width;
    this.cardWidth = `${width}px`;

    if (width <= this.smallSize && this.small === false) {
      this.small = true;
    } else if (width > this.smallSize && this.small === true) {
      this.small = false;
    }
  }

  @Watch('flippable')
  async updateFlippableCardHeight() {
    await delay(10);
    if (this.flippable) {
      const frontHeight = this.front.offsetHeight;
      const backHeight = this.back.offsetHeight;

      if (!this.originalHeight) {
        this.originalHeight = frontHeight;
      }

      if (!this.backHeight) {
        this.backHeight = backHeight;
      }
    } else {
      this.flipped = false;
      this.flipReady = false;
      this.originalHeight = undefined;
      this.backHeight = undefined;
    }
  }

  async updateBackCardHeight() {
    if (this.flippable) {
      this.backHeight = this.back.scrollHeight;
    }

    return true;
  }

  @Listen('resize', { target: 'window' })
  handleWindowResize() {
    this.updateBackCardHeight();
  }

  @Listen('keyup')
  async handleKeyUp() {
    this.flipReady = false;
    await this.updateBackCardHeight();
  }

  async click(e: any) {
    if (this.tag === 'a' && this.pjax) {
      e.preventDefault();
      this.pjax.loadUrl(this.href);
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

    return true;
  }

  @Watch('flipped')
  async handleFlipped() {
    await delay(350);
    this.flipReady = false;
    await this.updateBackCardHeight();
  }

  @Method()
  async flip_card() {
    if (this.flippable) {
      this.flipReady = true;
      this.flipped = !this.flipped;
      this.flip.emit();
    }
  }

  get cardStyle() {
    let styles = {
      '--card-width': this.cardWidth,
    };

    const flippableStyles = this.flippable
      ? {
          '--min-height': `${this.originalHeight}px`,
          '--flipped-min-height': `${this.backHeight}px`,
        }
      : {};

    return { ...styles, ...flippableStyles };
  }

  render() {
    const childProps = {
      href: this.href,
      url: this.href,
      name: this.name,
      value: this.value,
      type: this.type,
    };

    const Tag = this.tag === 'modal' ? 'button' : this.tag;

    return (
      <Host style={this.cardStyle}>
        <Tag
          {...childProps}
          class="wrap"
          onClick={e => {
            this.click(e);
          }}
        >
          {this.flippable && this.flipIcon && this.flipIcon !== 'false' && (
            <midwest-button
              tag="button"
              ghost
              iconOnly
              class="flip-button"
              onClick={(e: any) => {
                e.stopPropagation();
                e.preventDefault();
                this.flip_card();
              }}
            >
              <ion-icon name={this.flipped ? 'close' : this.flipIcon} />
            </midwest-button>
          )}

          {this.flippable && (
            <div
              class="front"
              ref={e => {
                this.front = e;
              }}
            >
              <slot></slot>
            </div>
          )}

          {this.flippable && (
            <div
              class="back"
              ref={e => {
                this.back = e;
              }}
            >
              <slot name="back"></slot>
            </div>
          )}

          {!this.flippable && <slot></slot>}
        </Tag>

        <resize-observer element={this.element} onResized={this.onResize.bind(this)} />

        {this.export && <export-to-figma />}
      </Host>
    );
  }
}
