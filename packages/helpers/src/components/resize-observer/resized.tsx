import { Component, Prop, Element, Event, EventEmitter } from '@stencil/core';
// import ResizeObserver from 'resize-observer-polyfill';

@Component({
  tag: 'resize-observer',
})
export class Resized {
  @Element() el: HTMLElement;
  @Prop() element: HTMLElement;
  ro!: ResizeObserver;

  @Event() resized: EventEmitter;

  componentWillLoad() {
    if (!this.element) {
      this.element = this.el;
    }

    this.addResizeObserver();
  }

  disconnectedCallback() {
    this.removeResizeObserver();
  }

  addResizeObserver() {
    this.ro = new ResizeObserver(async entries => {
      for (const entry of entries) {
        const { width, height, top, right, bottom, left } = entry.contentRect;
        this.resized.emit({ width, height, top, right, bottom, left });
      }
    });

    this.ro.observe(this.element);
  }

  removeResizeObserver() {
    if (this.ro) {
      this.ro.disconnect();
      this.ro = null;
    }
  }
}
