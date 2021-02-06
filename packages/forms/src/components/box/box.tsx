import { Component, Host, h, Prop } from '@stencil/core';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-box',
  styleUrl: 'box.css',
  shadow: true
})
export class Box {
  @Prop({ reflect: true }) radio: boolean = false;
  @Prop({ reflect: true }) checked: boolean = false;
  @Prop({ reflect: true }) focused: boolean = false;
  @Prop({ reflect: true }) dark: boolean = false;
  @Prop({ reflect: true }) disabled: boolean = false;

  componentWillLoad() {
    darkMode(this)
  }

  render() {
    return (
      <Host class={`${this.focused ? "box focused" : "box"}`}>
        <div class={this.checked ? "indicator active" : "indicator"}>
          {!this.radio && <ion-icon name="checkmark" />}
        </div>
      </Host>
    );
  }

}
