import { Component, Prop, State, Element, h, Host, Watch } from '@stencil/core';
import Base64 from 'base-64';
import Tunnel from '../../../tunnels/theme';

@Component({
  tag: 'midwest-message',
  styleUrl: 'message.css',
  shadow: true
})
export class Message {
  @Element() element: HTMLElement;
  @Prop({ reflect: true }) type: "alert" | "error" | "info" | "success";

  @Prop({ reflect: true }) size: "full" | "default";
  @Prop() closable: boolean = true;
  @Prop() autoHide: boolean;
  @Prop() remember: boolean;
  @Prop() height: number|boolean = 60;
  @Prop({ mutable: true, reflect: true }) name: string = "social-assurance";
  @Prop({ mutable: true, reflect: true }) shown: boolean;
  @Prop({ reflect: true }) striped: boolean = false;
  @Prop({ reflect: true }) dark: boolean = false;
  @State() theme: string = "gray";
  @Prop({ mutable: true, reflect: true }) opening: boolean;
  @Prop({ mutable: true, reflect: true }) closing: boolean;

  componentWillLoad() {
    if (this.remember) {
      const messageString = this.element.innerHTML;
      this.name = this.name + "_" + Base64.encode(unescape(encodeURIComponent(messageString)));

      if (localStorage.getItem(this.name)) {
        this.shown = !(localStorage.getItem(this.name) === "hidden");
      }
    }

    switch (this.type) {
      case "alert":
        this.theme = "yellow"
        break;
      case "error":
        this.theme = "red"
        break;
      case "info":
        this.theme = "cyan"
        break;
      case "success":
        this.theme = "green"
        break;
    }

    this.observeShown();

    if (this.autoHide) {
      setTimeout(() => {
        this.handleClose()
      }, 10000)
    }
  }

  componentDidLoad() {
    setTimeout(() => {
      this.shown = true;

      if (this.autoHide) {
        setTimeout(() => {
          this.handleClose()
        }, 5000)
      };
    }, 1000)
  }

  @Watch('shown')
  observeShown() {
    if (this.shown) {
      this.opening = true;
    } else {
      this.closing = true;
    }

    setTimeout(() => {
      this.closing = false;
      this.opening = false;
    }, 400)
  }

  handleClose() {
    this.shown = false;

    if (this.remember) {
      localStorage.setItem(this.name, "hidden")
    }
  }

  render() {
    return <Host class={`theme-${this.theme}`} style={this.height && {"--height": `${this.height}px`}}>
      <div class="wrap">
        <slot></slot>
        {this.closable && <button aria-label="Close" onClick={() => { this.handleClose() }}>
          <ion-icon name="close" />
        </button>}
      </div>
    </Host>
  }
}

Tunnel.injectProps(Message, ['dark']);
