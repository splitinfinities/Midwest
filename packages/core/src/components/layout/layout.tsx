import { Component, Prop, Element, h, Host } from '@stencil/core';

@Component({
  tag: 'midwest-layout',
  styleUrl: 'layout.css',
  shadow: true,
})
export class Layout {
  @Element() element: HTMLElement;

  @Prop({ reflect: true }) type: string = 'default';
  @Prop({ reflect: true }) size: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge' | 'full' | 'flush' = 'medium';
  @Prop({ reflect: true }) padding: 'none' | 'tiny' | 'small' | 'medium' | 'large' = 'medium';
  @Prop({ reflect: true }) align: 'baseline' | 'center' | 'top' | 'bottom' = 'top';
  @Prop({ reflect: true }) content: 'baseline' | 'center' | 'top' | 'bottom' = 'baseline';
  @Prop({ reflect: true }) height: 'fill';
  @Prop({ reflect: true, mutable: true }) small: boolean = false;
  @Prop({ reflect: true }) smallSize: number = 700;

  @Prop({ reflect: true, mutable: true }) hasNav: boolean;

  componentWillLoad() {
    const navs = Array.from(this.element.querySelectorAll('*[slot="nav"]'));
    this.hasNav = navs.length > 0;
  }

  onResize(e) {
    this.small = e.detail.width <= this.smallSize;
  }

  render() {
    return (
      <Host>
        <div class="layout">
          <slot></slot>
          {this.hasNav && <slot name="nav"></slot>}
        </div>
        <resize-observer element={this.element} onResized={this.onResize.bind(this)} />
      </Host>
    );
  }
}
