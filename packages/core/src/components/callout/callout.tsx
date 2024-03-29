import { Component, Prop, State, Element, Watch, h, Host } from '@stencil/core';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-callout',
  styleUrl: 'callout.css',
  shadow: true
})
export class Callout {
  @Element() element: HTMLElement;

  @Prop({ reflect: true }) dark: boolean = false;
  @Prop() type: "alert" | "error" | "info" | "success" | "default" = "default";
  @State() theme: string = "gray";

  componentDidLoad() {
    darkMode(this)
    this.element.setAttribute('aria-label', `An ${this.type} message. ${this.element.textContent}`);
    this.element.setAttribute('aria-role', "status");
    
    if (!this.element.getAttribute('tabindex')) {
      this.element.setAttribute('tabindex', `0`);
    }

    this.handleType();
    this.handleTheme();
  }

  @Watch('theme')
  handleTheme() {
    if (this.element.classList.length !== 0) {
      this.element.classList.forEach((c: string) => {
        if (c.startsWith('theme-')) {
          this.element.classList.remove(c);
        }
      });
    }

    this.element.classList.add(`theme-${this.theme}`)
  }

  @Watch('type')
  handleType() {
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
      case "default":
      case undefined:
        this.theme = "gray"
        break;
      default:
        this.theme = "gray"
        break;
    }
  }

  render() {
    return <Host>
      <div class="callout-wrap">
        <slot />
      </div>
    </Host>
  }
}