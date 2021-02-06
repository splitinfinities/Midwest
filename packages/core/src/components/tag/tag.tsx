import { Component, Prop, Element, h, Host } from '@stencil/core';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-tag',
  styleUrl: 'tag.css',
  shadow: true
})
export class Tag {
  @Element() element: HTMLElement;

  @Prop({ reflect: true }) size: "tiny" | "small" | "large";
  @Prop({ reflect: true }) pill: boolean = false;
  @Prop({ reflect: true }) outline: boolean = false;
  @Prop({ reflect: true }) color: ThemeableColors = "gray";
  @Prop({ reflect: true }) dark: boolean = false;

  componentWillLoad() {
    darkMode(this);
  }

  render() {
    return <Host>
      <slot name="icon" />
      <slot name="avatar" />
      <midwest-label class="tag" size={this.size}>
        <slot />
      </midwest-label>
      <slot name="action" />
    </Host>
  }
}