import { Component, Element, h, Host } from '@stencil/core';

@Component({
  tag: 'midwest-sidebar',
  styleUrl: 'sidebar.css',
  shadow: true,
})
export class Sidebar {
  @Element() element: HTMLElement;

  render() {
    return (
      <Host>
        <div class="sidebar-wrap">
          <slot />
        </div>
        <slot name="bottom" />
      </Host>
    );
  }
}
