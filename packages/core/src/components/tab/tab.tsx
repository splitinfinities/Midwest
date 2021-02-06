import { Component, Prop, State, Element, Listen, Event, EventEmitter, h, Method, Host } from '@stencil/core'
import delay from 'async-delay';
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
  @Prop() tag: "button" | "link" | "stencil-route" = "button";
  @Prop() href: string = '#';
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

      if (this.tag === "button" || this.tag === "stencil-route") {
        this.contentChange.emit({
          parent: this.parent,
          name: this.name.replace(/[#]/g, "")
        });

        if (this.pjaxElement) {
          window.history.pushState({}, "", this.href);
        }
      } else if (this.tag === "link") {
        if (this.pjaxElement) {
          await this.pjaxElement.loadUrl(this.href)
        } else {
          await delay(350)
          window.location.href = this.href;
        }
      }
    }
  }

  async sectionIsOnScreen() {
    if (this.parent.payAttention) {
      this.disabled = true;
      await this.handleClick();
      this.disabled = false;
    }
  }

  handleIndicatorPosition() {
    if (this.open && this.parent && this.parent.nodeName === "MIDWEST-TABS" && !this.element.hidden) {
      this.element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
      this.parent.hiddenTabActive = false;
      if (this.parent.vertical) {
        this.parent.tabTop = this.element.offsetTop;
        this.parent.tabHeight = this.element.offsetHeight;
        this.parent.tabOpacity = 1;
      } else {
        this.parent.tabLeft = this.element.offsetLeft;
        this.parent.tabWidth = this.element.offsetWidth;
        this.parent.tabOpacity = 1;
      }
    }
  }

  removeIndicator() {
    if (this.parent && this.parent.nodeName === "SA-TABS") {
      if (this.parent.vertical) {
        this.parent.tabHeight = 0;
        this.parent.tabOpacity = 0;
      } else {
        this.parent.tabWidth = 0;
        this.parent.tabOpacity = 0;
      }
    }
  }

  renderNotifications() {
    const style = { "--background-color": "var(--red--6)", "--color": "var(--white)" };

    return <midwest-tag
      pill
      class="notifications"
      size="tiny"
      style={style}>
      {this.notifications}
    </midwest-tag>
  }

  renderTitle() {
    return <midwest-label size={this.size} class="title cursor-pointer">
      <slot></slot>
    </midwest-label>
  }

  renderButton() {
    return <button 
        role="tab" 
        type="button" 
        disabled={this.disabled} 
        aria-selected={this.open ? "true" : "false"}
        aria-setsize={this.tabCount}
        aria-posinset={this.order}
        tabindex="0"
        class="tab-button"
        onClick={(e) => this.handleClick(e)}
      >
      {this.notifications && this.renderNotifications()}
      {this.renderTitle()}
    </button>
  }

  renderLink() {
    return <a 
        role="tab" 
        href={this.href} 
        target={this.target} 
        class="tab-button" 
        data-disabled={this.disabled} 
        onClick={(e) => { this.handleClick(e) }}
      >
      {this.notifications && this.renderNotifications()}
      {this.renderTitle()}
    </a>
  }  
  
  renderStencilRoute() {
    return <stencil-route-link
      role="tab"
      url={this.href}
      anchorClass="tab-button"
      data-disabled={this.disabled}
      onClick={(e) => { this.handleClick(e) }}
    >
      {this.notifications && this.renderNotifications()}
      {this.renderTitle()}
    </stencil-route-link>
  }

  render() {
    return <Host>
      <div class="tab-wrap">
        {this.tag === "button" && this.renderButton()}
        {this.tag === "link" && this.renderLink()}
        {this.tag === "stencil-route" && this.renderStencilRoute()}
      </div>
      {this.parent?.payAttention && <intersection-observer
        in={this.sectionIsOnScreen.bind(this)}
        element={this.href}
        multiple
        margin="-50%"
      />}
    </Host>
  }
}