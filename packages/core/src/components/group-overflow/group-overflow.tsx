import { Component, Element, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'midwest-group-overflow',
  styleUrl: 'group-overflow.css',
  shadow: true
})
export class GroupOverflow {
  @Element() element: HTMLElement;

  @Prop() tooltip: boolean;
  @Prop() count: number;
  @Prop() verbiage: string;

  render() {
    return <Host>
      <midwest-label class="count cursor-pointer">+{this.count} more {this.verbiage}</midwest-label>
      {this.tooltip && <midwest-tooltip>
        <slot></slot>
      </midwest-tooltip>}
    </Host>
  }
}
