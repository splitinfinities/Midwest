import { Component, h, Host, Prop, Element, State, Event, Watch, EventEmitter } from '@stencil/core';

@Component({
  tag: 'midwest-slide',
  styleUrl: 'slide.css'
})
export class Slide {
  @Element() el: HTMLElement;
  @Prop() slideId: number;
  @Prop() width: string = "auto";
  @State() swiper: boolean = false;
  @State() visible: boolean = false;

  @Event() switched: EventEmitter;

  componentWillLoad() {
    if (this.el.closest('midwest-slides')) {
      this.swiper = (this.el.closest('midwest-slides').nodeName === "STELLAR-SLIDES");
    }
  }

  @Watch('visible')
  onVisible() {
    this.switched.emit({ slideId: this.slideId, visible: this.visible });
  }

  in() {
    this.visible = true;
  }

  out() {
    this.visible = false;
  }

  render() {
    return <Host style={{ '--width': this.width }} class={{
      'slide-zoom': this.swiper,
      'swiper-slide': this.swiper,
    }}>
      <slot />
      <midwest-intersection element={this.el} multiple in={this.in.bind(this)} out={this.out.bind(this)} />
    </Host>
  }
}
