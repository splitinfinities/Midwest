import { Component, Prop, State, Watch, Element, h, Host } from '@stencil/core';
import { titleCase, colors } from '@midwest-design/common';
import Tunnel from '../../tunnels/theme';
import validate from 'validator';

@Component({
  tag: 'midwest-avatar',
  styleUrl: 'avatar.css',
  shadow: true
})
export class Avatar {
  @Element() element: HTMLElement;

  @Prop() src: string;
  @Prop() icon: string;
  @Prop() noTooltip: boolean = false;
  @Prop({ mutable: true, reflect: true }) size: "tiny" | "small" | "medium-small" | "medium" | "large" | "xlarge" | "huge";
  @Prop({ mutable: true, reflect: true }) color: string = "auto";
  @Prop({ mutable: true, reflect: true }) name: string = "Midwest Design";
  @Prop({ mutable: true, reflect: true }) initials: string = "MW";
  @Prop({ mutable: true, reflect: true }) shape: "circle" | "square" | "rectangle" | "diamond" | "hexagon" | "star" | "message" = "square";
  @Prop({ mutable: true, reflect: true }) processing: boolean = false;
  @Prop({ reflect: true }) dark: boolean = false;

  @State() colorAuto: boolean = false;
  @State() colors: string[];
  @State() focus: boolean;

  componentWillLoad() {
    this.colors = Object.keys(colors).filter((color) => {
      // @ts-ignore
      return !["base", "white", "black"].includes(color)
    });

    if (this.color === "auto") {
      this.colorAuto = true;
    }

    this.formatName()
  }

  @Watch('name')
  formatName() {
    if (this.color === "auto" || this.colorAuto) {
      this.colorAuto = true;
      this.color = this.colors[this.name.length % this.colors.length];
    }

    if (!this.name.length) {
      this.initials = "MW";
    } else {
      const theName = titleCase(this.name);
      const check = (!["small", "tiny"].includes(this.size));
      this.initials = check ? theName.replace(/[^A-Z]/g, '').substring(0, 2) :  theName.substring(0, 1) ;
    }

    if (this.shape === "star" || this.shape === "diamond") {
      this.initials = this.initials.substring(0, 1);
    }
  }

  render() {
    return <Host class={`theme-${this.color}`}>
      <button class="wrapper" title={`You tabbed on an Avatar for ${this.name}`} onFocus={() => { this.focus = true; }} onBlur={() => { this.focus = false; }}>
        {this.processing && <midwest-progress indeterminate />}
        <div class={ this.src ? "content image" : "content" }>
          <div class="spacer"></div>
          <div class="letter" title={this.name}>{this.initials}</div>
          {this.src && validate.isURL(this.src) && <img src={this.src} alt={this.name} />}
          {this.icon && <ion-icon name={this.icon} />}
        </div>
        {!this.noTooltip && <midwest-tooltip focused={this.focus}>{this.name}</midwest-tooltip>}
      </button>
    </Host>
  }
}

Tunnel.injectProps(Avatar, ['dark']);
