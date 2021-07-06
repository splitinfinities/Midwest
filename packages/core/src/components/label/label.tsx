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
  @Prop({ reflect: true, mutable: true }) dark: boolean = false;

  componentWillLoad() {
    darkMode(this)
  }

  render() {
    return <Host>
      <label htmlFor={this.for}><slot /></label>
    </Host>
  }
}
