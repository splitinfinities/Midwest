import { Component, Prop, Element, h } from '@stencil/core';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-breadcrumbs',
  styleUrl: 'breadcrumbs.css',
  shadow: true
})

export class Breadcrumbs {
  @Element() el: HTMLElement;
  @Prop({ reflect: true }) size: "tiny" | "small" | "medium" | "large";

  @Prop({ reflect: true }) dark: boolean = false;

  componentWillLoad() {
    darkMode(this)
    this.updateBreadcrumbs();
  }

  updateBreadcrumbs() {
    const first_breadcrumb: HTMLMidwestBreadcrumbElement = this.el.querySelector('midwest-breadcrumb:first-of-type');
    const last_breadcrumb: HTMLMidwestBreadcrumbElement = this.el.querySelector('midwest-breadcrumb:last-of-type');
    const breadcrumbs: NodeListOf<HTMLMidwestBreadcrumbElement> = this.el.querySelectorAll('midwest-breadcrumb');

    Array.from(breadcrumbs).forEach((breadcrumb) => {
      breadcrumb.first = false;
      breadcrumb.last = false;
    });

    if (first_breadcrumb) {
      first_breadcrumb.first = true
    }

    if (last_breadcrumb) {
      last_breadcrumb.last = true
    }
  }

  render() {
    return (
      <div id="breadcumb_wrapper" class="breadcrumbs">
        <div class="flush-left"></div>
        <slot></slot>
        <div class="flush-right"></div>
      </div>
    );
  }
}
