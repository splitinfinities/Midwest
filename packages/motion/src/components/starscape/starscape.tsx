import { Component, Element, h, Host } from '@stencil/core';

@Component({
  tag: 'midwest-starscape',
  styleUrl: 'starscape.css'
})
export class Starscape {
  @Element() element: HTMLElement;

  render() {
    return <Host>
      <midwest-parallax horizontal>
        <midwest-parallax-section speed={5}>
          <div class="stars" />
        </midwest-parallax-section>

        <midwest-parallax-section speed={-10}>
          <div class="stars" />
        </midwest-parallax-section>

        <midwest-parallax-section speed={-4}>
          <div class="stars" />
        </midwest-parallax-section>
      </midwest-parallax>
    </Host>
  }
}
