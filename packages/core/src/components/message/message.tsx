import { Component, Prop, State, Element, h, Host, Watch } from '@stencil/core';
import Base64 from 'base-64';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-message',
  styleUrl: 'message.css',
  shadow: true
})
export class Message {
  @Element() element: HTMLElement;
  @Prop({ reflect: true }) type: "alert" | "error" | "info" | "success" | "default" = "default";

  @Prop({ reflect: true }) size: "full" | "default";
  @Prop() closable: boolean = true;
  @Prop() autoHide: boolean;
  @Prop() remember: boolean;
  @Prop() height: number|boolean = 60;
  @Prop({ mutable: true, reflect: true }) name: string = "midwest-design";
  @Prop({ mutable: true, reflect: true }) shown: boolean;
  @Prop({ reflect: true }) striped: boolean = false;
  @Prop({ reflect: true }) dark: boolean = false;
  @State() color: string = "gray";
  @Prop({ mutable: true, reflect: true }) opening: boolean;
  @Prop({ mutable: true, reflect: true }) closing: boolean;

  componentWillLoad() {
    darkMode(this);

    if (this.remember) {
      const messageString = this.element.innerHTML;
      this.name = this.name + "_" + Base64.encode(unescape(encodeURIComponent(messageString)));

      if (localStorage.getItem(this.name)) {
        this.shown = !(localStorage.getItem(this.name) === "hidden");
      }
    }

    this.setColor();
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

  @Watch("type")
  setColor() {
    this.color = {
      "alert": "yellow",
      "error": "red",
      "info": "cyan",
      "success": "green",
      "default": "blue",
    }[this.type]
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
    return <Host class={`theme-${this.color}`} style={this.height && {"--height": `${this.height}px`}}>
      <div class="wrap">
        <slot></slot>
        {this.closable && <button aria-label="Close" onClick={() => { this.handleClose() }}>
          <ion-icon name="close" />
        </button>}
      </div>
    </Host>
  }
}