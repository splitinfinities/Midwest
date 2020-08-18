import { Component, Prop, State, Element, Method, h, Watch, Host } from '@stencil/core';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-tabs',
  styleUrl: 'tabs.css',
  shadow: true
})
export class Tabs {
  @Element() element: HTMLElement;

  @Prop() height: string;
  @Prop({ mutable: true, reflect: true }) name: string;
  @Prop({ mutable: true, reflect: true }) noanimation: boolean = false;

  @Prop({ reflect: true }) size: "tiny" | "small" | "medium" | "large";
  @Prop({ reflect: true }) block: boolean = false;
  @Prop({ reflect: true }) vertical: boolean = false;
  @Prop({ reflect: true }) dark: boolean = false;
  @Prop({ reflect: true }) behavior: string;
  @Prop({ reflect: true }) flipIndicator: boolean;
  @Prop({ reflect: true }) blockIndicator: boolean;

  @Prop() ready: boolean = false;
  @Prop() tabTop: number;
  @Prop() tabLeft: number;
  @Prop() tabWidth: number;
  @Prop() tabHeight: number;
  @Prop() tabOpacity: number = 0;

  @State() tabsList: HTMLMidwestTabElement[];
  @State() contentsList: HTMLMidwestContentElement[];

  @Method()
  async tabs() {
    if (!this.tabsList || this.tabsList.length === 0) {
      this.tabsList = Array.from(this.element.querySelectorAll('midwest-tab'));
    }

    return this.tabsList;
  }

  @Method()
  async contents() {
    this.contentsList = Array.from(document.querySelectorAll(`midwest-content[for='${this.name}']`));
    return this.contentsList;
  }

  async componentWillLoad() {
    darkMode(this);
    await this.tabs();
    await this.contents();

    this.tabsList.forEach((tab) => {
      if (this.dark) {
        tab.dark = this.dark;
      }
      if (this.vertical) {
        tab.vertical = this.vertical;
      }
    })
  }

  @Watch('dark')
  handleDark() {
    if (!this.tabsList || this.tabsList.length === 0) {
      this.tabsList = Array.from(this.element.querySelectorAll('midwest-tab'));
    }

    this.tabsList.forEach((tab) => {
      tab.dark = this.dark;
    })
  }

  async componentDidLoad() {
    if (!this.noanimation) {
      setTimeout(() => {
        if(typeof(Event) === 'function') {
          window.dispatchEvent(new Event('resize'));
        } else {
          const event = document.createEvent("Event");
          event.initEvent("resize", false, true); 
          window.dispatchEvent(event);
        }
          
        this.ready = true;
      }, 100)
    }

    const tabs = await this.tabs()
    const tabCount = tabs.length;

    tabs.forEach((tab, index) => {
      tab.order = index + 1;
      tab.tabCount = tabCount;
    })
  }

  render() {
    return <Host>
      <div class="tab-wrap">
        <div class="tab-list" role="tablist">
          <slot></slot>
          <div class="track">
            <div class={`indicator ${this.ready ? "ready" : ""}`} />
          </div>
        </div>
      </div>
    </Host>
  }
}