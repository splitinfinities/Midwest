import { Component, Prop, State, Element, Listen, Event, EventEmitter, h, Method, Host } from '@stencil/core'
import delay from 'async-delay';
import properties from 'css-custom-properties';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-tab',
  styleUrl: 'tab.css',
  shadow: true
})

export class Tab {
  @Element() element: HTMLElement

  @Prop({ mutable: true, reflect: true }) name: string;
  @Prop({ reflect: true }) size: "tiny" | "small" | "medium" | "large" = "medium";
  @Prop() disabled: boolean = false
  @Prop({ mutable: true, reflect: true }) open: boolean = false
  @Prop({ mutable: true, reflect: true }) dark: boolean = false
  @Prop() notifications: boolean | number = false
  @Prop() notificationsColor: string = "cyan";
  @Prop() tag: "button" | "link" = "button";

  /**
   * Sets the href on the anchor tag if the button is a link.
   */
  @Prop() href: string = '#';

  /**
   * Sets the target on the anchor tag if the button is a link.
   */
  @Prop() target: string = '_self';

  @Prop({ reflect: true }) order: number
  @Prop({ reflect: true }) tabCount: number
  @Prop({ reflect: true }) vertical: boolean = false

  @State() parent: any
  pjaxElement: any = document.querySelector('midwest-pjax');

  @Event() contentChange: EventEmitter;

  componentWillLoad() {
    darkMode(this);
    this.parent = this.element.closest('midwest-tabs');
    if (window.location.hash && this.href.includes(window.location.hash)) {
      this.handleClick()
    }
  }

  @Listen("resize", { target: 'window' })
  handleResize() {
    this.handleIndicatorPosition()
  }

  componentDidLoad() {
    this.handleIndicatorPosition();

    setTimeout(() => {
      this.handleIndicatorPosition();
    }, 1000)
  }

  @Method()
  async activate() {
    await this.handleClick();
  }

  async handleClick(e?: Event) {
    const tabs = await this.parent.tabs() as HTMLMidwestTabElement[]

    tabs.forEach((element) => {
      element.open = false
    })

    this.open = true;

    this.handleIndicatorPosition()

    if (!this.disabled) {
      e && e.preventDefault();

      if (this.tag === "button") {
        this.contentChange.emit({
          parent: this.parent,
          name: this.name.replace(/[#]/g, "")
        });

        if (this.pjaxElement) {
          window.history.pushState({}, "", this.href);
        } 
      } else if (this.tag === "link") {
        await delay(350)
        window.location.href = this.href;
      }
    }
  }

  handleIndicatorPosition() {
    if (this.open && this.parent && this.parent.nodeName === "MIDWEST-TABS") {
      if (this.parent.vertical) {
        properties.set({
          "--tab-top": `${this.element.offsetTop}px`,
          "--tab-height": `${this.element.offsetHeight}px`,
          "--indicator-opacity": `1`
        }, this.parent)
      } else {
        properties.set({
          "--tab-left": `${this.element.offsetLeft}px`,
          "--tab-width": `${this.element.offsetWidth}px`,
          "--indicator-opacity": `1`
        }, this.parent)
      }
    }
  }

  removeIndicator() {
    if (this.parent && this.parent.nodeName === "MIDWEST-TABS") {
      if (this.parent.vertical) {
        properties.set({
          "--tab-height": `0px`,
          "--indicator-opacity": `0`
        }, this.parent)
      } else {
        properties.set({
          "--tab-width": `0px`,
          "--indicator-opacity": `0`
        }, this.parent)
      }
    }
  }

  renderNotifications() {
    return <midwest-tag pill class="notifications" size="tiny" style={{"--background-color": "var(--red6)", "--color": "var(--white)"}}>{this.notifications}</midwest-tag>
  }

  renderTitle() {
    return <midwest-label size={this.size} class="title">
      <slot></slot>
    </midwest-label>
  }

  renderButton() {
    return <button role="tab" type="button" disabled={this.disabled} aria-selected={this.open ? "true" : "false"} aria-setsize={this.tabCount} aria-posinset={this.order} tabindex="0" class="tab-button" onClick={(e) => this.handleClick(e)}>
      {this.notifications && this.renderNotifications()}
      {this.renderTitle()}
    </button>
  }

  renderLink() {
    return <a role="tab" href={this.href} target={this.target} class="tab-button" data-disabled={this.disabled} onClick={(e) => { this.handleClick(e) }}>
      {this.notifications && this.renderNotifications()}
      {this.renderTitle()}
    </a>
  }

  render() {
    return <Host>
      <div class="tab-wrap">
        {this.tag === "button" && this.renderButton()}
        {this.tag === "link" && this.renderLink()}
      </div>
    </Host>
  }
}