import { Component, Prop, State, Element, Event, EventEmitter, Method, h, Watch, Listen, Host } from '@stencil/core';
import ResizeObserver from 'resize-observer-polyfill';
import delay from 'async-delay';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-card',
  styleUrl: 'card.css',
  shadow: true
})
export class Card {
  @Element() element: HTMLElement;

  /**
   * Renders the hard horizontally
   */
  @Prop({reflect: true}) horizontal: boolean; 

  /**
   * disallows this component from exporting to figma
   */
  @Prop() export: boolean; 

  /**
   * Let's a card be flippable
   */
  @Prop({ reflect: true }) flippable: boolean = false;

  /**
   * Let's a card be flippable
   */
  @Prop({ reflect: true, mutable: true }) flipReady: boolean = false;

  /**
   * Renders a flipped card
   */
  @Prop({ mutable: true, reflect: true }) flipped: boolean = false;

  /**
   * Sets the padding inside of the button. Can be small, medium, or large.
   */
  @Prop({ reflect: true }) padding: "none" | "tiny" | "small" | "medium" | "large" = "medium";

  /**
   * Sets the minimum height of the card to 0 when true.
   */
  @Prop({ reflect: true }) compact: boolean = false;

  /**
   * Renders as a block in certain scenarios
   */
  @Prop({ reflect: true }) block: boolean = false;

  /**
   * Sets the element to render the card as - an anchor tag, a button, or a div.
   */
  @Prop() tag: "a" | "button" | "div" | "modal" = "div";

  /**
   * Sets the type on a button
   */
  @Prop() type: string;

  /**
   * Sets the href if the card is a link.
   */
  @Prop() href: string = "#";

  /**
   * Sets the href if the card is a link.
   */
  @Prop() modalHref: string;

  /**
   * Sets the name if the card is a button.
   */
  @Prop() name: string = "";

  /**
   * Sets the value if the card is a button.
   */
  @Prop() value: string = "#";

  /**
   * Sets the href on the anchor tag if the button is a link.
   */
  @Prop() for: string;

  /**
   * Sets the href on the anchor tag if the button is a link.
   */
  @Prop() flipIcon: string = "create";

  @Prop({ reflect: true }) dark: boolean = false;

  ro!: ResizeObserver;
  @State() flipTimeout: any;
  @State() cardWidth: any;

  @Event() flip: EventEmitter;

  @Event({ bubbles: true, composed: true, eventName: "open-modal" }) openModal: EventEmitter;
  @Event({ bubbles: true, composed: true, eventName: "close-modal" }) closeModal: EventEmitter;

  @Prop({ mutable: true }) originalHeight: number;
  @Prop({ mutable: true }) backHeight: number;

  @State() pjax: any = document.querySelector('midwest-pjax');

  front!: HTMLDivElement;
  back!: HTMLDivElement;

  componentWillLoad() {
    darkMode(this)
  }

  componentDidLoad() {
    this.updateFlippableCardHeight();
    this.addResizeObserver();
  }

  addResizeObserver() {
    if (this.element && this.element instanceof window.Element) {
      this.ro = new ResizeObserver(async (entries: any) => {
        for (const entry of entries) {
          const { width } = entry.contentRect;
          this.cardWidth = `${width}px`
        }
      });

      this.ro.observe(this.element);
    }
  }

  @Watch('flippable')
  async updateFlippableCardHeight() {
    await delay(10)
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
      this.backHeight =  this.back.scrollHeight;
    }

    return true;
  }

  @Listen("resize", {target: "window"})
  handleWindowResize() {
    this.updateBackCardHeight()
  }

  @Listen("keyup")
  async handleKeyUp() {
    this.flipReady = false;
    await this.updateBackCardHeight();
  }

  async click(e: any) {

    if (this.tag === "a" && this.pjax) {
      e.preventDefault();
      this.pjax.loadUrl(this.href)
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
      this.flipped = !this.flipped
      this.flip.emit();
    }
  }

  get cardStyle() {
    let styles = {
      "--card-width": this.cardWidth
    };

    const flippableStyles = this.flippable ? {
      '--min-height': `${this.originalHeight}px`,
      '--flipped-min-height': `${this.backHeight}px`
    } : {};


    return {...styles, ...flippableStyles}
  }

  render() {
    const childProps = {
      href: this.href,
      url: this.href,
      name: this.name,
      value: this.value,
      type: this.type
    };

    const Tag = this.tag === "modal" ? "button" : this.tag

    return <Host style={this.cardStyle}>
      <Tag {...childProps} class="wrap" onClick={(e) => { this.click(e) }}>
        {this.flippable && this.flipIcon && this.flipIcon !== "false" && <midwest-button tag="button" ghost iconOnly class="flip-button" onClick={(e: any) => { e.stopPropagation(); e.preventDefault(); this.flip_card() }}>
          <ion-icon name={this.flipped ? "close" : this.flipIcon} />
        </midwest-button>}

        {this.flippable && <div class="front" ref={(e) => { this.front = e; }}>
          <slot></slot>
        </div>}

        {this.flippable && <div class="back" ref={(e) => { this.back = e; }}>
          <slot name="back"></slot>
        </div>}

        {!this.flippable && <slot></slot>}
      </Tag>

      {this.export && <export-to-figma />}
    </Host>
  }
}
