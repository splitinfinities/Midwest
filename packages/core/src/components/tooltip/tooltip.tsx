import { Component, Element, Prop, h, Host } from '@stencil/core';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-tooltip',
  styleUrl: 'tooltip.css',
  shadow: true
})
export class Tooltip {
  @Element() element: HTMLElement;

  @Prop({ reflect: true }) align: "left" | "center" | "right" | "middle-left" | "middle-center" | "middle-right" | "bottom-left" | "bottom-center" | "bottom-right" = "center";
  @Prop({ reflect: true }) dark: boolean = false;
  @Prop({ reflect: true }) hover: boolean = false;
  @Prop({ reflect: true }) focused: boolean = false;

  componentWillLoad() {
    darkMode(this);
  }

  render() {
    return <Host>
      <div class="wrap">
        <div class="after"></div>
        <slot></slot>
      </div>
    </Host>
  }
}
