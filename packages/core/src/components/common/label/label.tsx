import { Component, Prop, h, Host, Element } from '@stencil/core';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-label',
  styleUrl: 'label.css',
  shadow: true
})
export class Label {
  @Element() element: HTMLElement;
  
  @Prop() for: string;
  @Prop({ reflect: true }) underneath: boolean;
  @Prop({ reflect: true }) size: string;
  @Prop({ reflect: true }) italicized: boolean;
  @Prop({ reflect: true }) textTransformation: "capitalize" | "uppercase" | "lowercase" | "none" | "full-width" | "full-size-kana" = "uppercase";
  @Prop() color: string = "black";
  @Prop() colorIntensity: number = 5;

  /**
   * Sets the button or link as an outlined button.
   */
  @Prop({ reflect: true }) dark: boolean = false;

  componentWillLoad() {
    darkMode(this)
  }

  get labelColor() {
    const check = (["white", "black"].includes(this.color));
    const color = check ? this.color : `${this.color}${this.colorIntensity}`;
    return color;
  }

  render() {
    return <Host style={{ "--color": `var(--${this.labelColor})` }}><label htmlFor={this.for}><slot /></label></Host>
  }
}
