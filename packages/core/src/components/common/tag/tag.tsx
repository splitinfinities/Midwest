import { Component, Prop, Element, h, Host } from '@stencil/core';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-tag',
  styleUrl: 'tag.css',
  shadow: true
})
export class Tag {
  @Element() element: HTMLElement;

  @Prop({reflect: true}) base: ThemeableColors;
  @Prop({reflect: true}) complement: ThemeableColors;

  @Prop({ reflect: true }) size: "tiny" | "small" | "large";
  @Prop({ reflect: true }) pill: boolean = false;
  @Prop({ reflect: true }) outline: boolean = false;
  @Prop({ reflect: true }) color: ThemeableColors = "gray";
  @Prop({ reflect: true }) dark: boolean = false;
  @Prop() icon: string;

  componentWillLoad() {
    darkMode(this);
  }

  render() {
    return <Host>
      { this.icon && <span style={ {"margin-right": "0.5em"} }><ion-icon name={ this.icon } /></span> }
      <slot name="avatar" />
      <midwest-label class="tag" size={this.size}>
        <slot />
      </midwest-label>
    </Host>
  }
}