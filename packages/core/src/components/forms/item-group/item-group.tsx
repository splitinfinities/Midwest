import { Component, Host, h, Prop, Listen, Element, State } from '@stencil/core';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-item-group',
  styleUrl: 'item-group.css',
  shadow: true
})
export class ItemGroup {
  @Element() element: HTMLElement;
  @Prop() name: string = "group";
  @Prop() supplement: string;
  @Prop({ reflect: true }) dark: boolean = false;

  @State() visible: boolean = true;

  componentWillLoad() {
    darkMode(this)
    const select = this.element.closest('midwest-select, midwest-remote-select');
    
    if (select) {
      select.addEventListener('update', this.handleUpdate.bind(this))
    }
  }

  @Listen('update')
  handleUpdate() {
    this.visible = Array.from(this.element.querySelectorAll('midwest-item')).map((item) => !item.classList.contains('hidden')).some(i => i)
  }

  render() {
    return <Host class={this.visible ? "" : "hidden"}>
      { this.name && <midwest-label size="small">
        <span innerHTML={this.name} />
        { this.supplement && <span class="supplement" innerHTML={this.supplement} />}
      </midwest-label> }
      <div class="list">
        <slot></slot>
      </div>
    </Host>
  }
}