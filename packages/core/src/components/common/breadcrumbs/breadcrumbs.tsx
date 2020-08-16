import { Component, Prop, Element, h } from '@stencil/core';
import Tunnel from '../../../tunnels/theme';
import "ionicons";

@Component({
  tag: 'midwest-breadcrumbs',
  styleUrl: 'breadcrumbs.css',
  shadow: true
})

export class Breadcrumbs {
  @Element() el: HTMLElement;
  @Prop() icon: string = 'analytics';
  @Prop() icon_src: string;
  @Prop() icon_size: number = 0.85;
  @Prop() tag: "link" | "route" = "link";
  @Prop() home: string = "/";
  @Prop() label: string = "Home";
  @Prop() description: string = "An icon that shows the main page you're on";
  @Prop({ reflect: true }) size: "tiny" | "small" | "medium" | "large";

  @Prop({ reflect: true }) dark: boolean = false;
  @Prop() color: string = "blue5";

  componentWillLoad() {
    this.updateBreadcrumbs();
  }

  updateBreadcrumbs() {
    const last_breadcrumb: HTMLMidwestBreadcrumbElement = this.el.querySelector('midwest-breadcrumb:last-of-type');
    const breadcrumbs: NodeListOf<HTMLMidwestBreadcrumbElement> = this.el.querySelectorAll('midwest-breadcrumb');

    Array.from(breadcrumbs).forEach((breadcrumb) => {
      breadcrumb.last = false;
    });

    if (last_breadcrumb) {
      last_breadcrumb.last = true
    }
  }

  render() {
    return (
      <div id="breadcumb_wrapper" class="breadcrumbs">
        <div class="flush-left"></div>
        <midwest-breadcrumb first tag={this.tag}>
          <ion-icon id="icon" name={this.icon} src={this.icon_src} color={this.color}></ion-icon>
          <midwest-label size={this.size}>{this.label}</midwest-label>
        </midwest-breadcrumb>
        <slot></slot>
        <div class="flush"></div>
      </div>
    );
  }
}
Tunnel.injectProps(Breadcrumbs, ['dark']);
