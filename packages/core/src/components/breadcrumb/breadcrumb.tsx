import { Component, Prop, Element, h } from '@stencil/core';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-breadcrumb',
  styleUrl: 'breadcrumb.css',
  shadow: true
})

export class Breadcrumb {
  @Element() element: HTMLElement;

  @Prop() color: string;
  @Prop() href: string = "/";
  @Prop() tag: "link" | "route" | "button" = "link";
  @Prop() target: string = "_self";
  @Prop({ mutable: true }) label: string = "Breadcrumb link";
  @Prop() disabled: boolean = false;
  @Prop({ reflect: true }) dark: boolean = false;

  @Prop({ reflect: true }) first: boolean;
  @Prop({ reflect: true }) last: boolean;

  componentWillLoad() {
    darkMode(this)
  }

  componentDidLoad() {
    this.label += ` for ${this.element.textContent}`
  }

  getTag() {
    return {
      "link": "a",
      "route": "stencil-route-link",
      "button": "button",
    }[this.tag];
  }

  render() {
    const Tag = this.getTag();

    return <Tag
      class="button"
      href={this.href}
      url={this.href}
      arget={this.target}
      aria-label={this.label}
      title={this.label}
      data-disabled={this.disabled}
    >
      <slot name="icon"></slot>
      <sa-label><slot></slot></sa-label>
    </Tag>
  }
}
