import { Component, Prop, Element, Method, h, Host} from '@stencil/core';

@Component({
  tag: 'midwest-grid',
  styleUrl: 'grid.css'
})
export class Grid {
  @Element() element: HTMLElement;

  @Prop({ reflect: true }) cols: number | string = "auto";
  @Prop({ reflect: true }) padding: boolean = false;
  @Prop({ reflect: true }) noresponsive: boolean = false;

  @Prop({ reflect: true }) columnWidth = 200;
  @Prop({ reflect: true }) columnGap = 2;

  @Method()
  async refresh() {
    const resizeEvent = window.document.createEvent('UIEvents');
    resizeEvent.initEvent('resize', true, false);
    window.dispatchEvent(resizeEvent);
  }

  render() {
    return <Host style={{"--grid-width": `${this.columnWidth}px`, "--grid-gap":`${this.columnGap}rem`}}>
      <slot></slot>
    </Host>
  }
}
