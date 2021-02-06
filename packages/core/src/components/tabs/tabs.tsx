import { Component, Prop, State, Element, Method, h, Watch, Host } from '@stencil/core';
import { darkMode } from '@midwest-design/common';
import delay from 'async-delay';

@Component({
  tag: 'midwest-tabs',
  styleUrl: 'tabs.css',
  shadow: true
})
export class Tabs {
  @Element() element: HTMLElement;

  @Prop() height: string;
  @Prop({ mutable: true, reflect: true }) name: string;

  @Prop({ reflect: true }) size: "tiny" | "small" | "medium" | "large";
  @Prop({ reflect: true }) block: boolean = false;
  @Prop({ reflect: true }) vertical: boolean = false;
  @Prop({ reflect: true }) dark: boolean = false;
  @Prop({ reflect: true }) behavior: string;
  @Prop({ reflect: true }) flipIndicator: boolean;
  @Prop({ reflect: true }) blockIndicator: boolean;
  @Prop({ reflect: true }) payAttention: boolean;
  @Prop({ reflect: true }) collapse: boolean;
  @Prop({ reflect: true }) hiddenActive: boolean = false;

  @Prop() ready: boolean = false;
  @Prop() tabTop: number;
  @Prop() tabLeft: number;
  @Prop() tabWidth: number;
  @Prop() tabHeight: number;
  @Prop() tabOpacity: number = 0;

  @State() overflowedTabs: HTMLMidwestTabElement[] = [];
  @State() tabsList: HTMLMidwestTabElement[];
  @State() contentsList: HTMLMidwestContentElement[];

  wrapperEl: HTMLDivElement;
  overflowSelectEl: any;
  elementWidth: number;
  activeTabIndex: number;

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

  @Method()
  async open(index: number, overflow: boolean = false) {
    this.activeTabIndex = index;
    if (overflow) {
      this.overflowedTabs[index].activate()
    } else {
      this.tabsList[index].activate()
    }
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
    if (this.collapse) {
      this.calculateOverflowedTabs();
    }

    await delay(100);

    if (typeof(Event) === 'function') {
      window.dispatchEvent(new Event('resize'));
    } else {
      const event = document.createEvent("Event");
      event.initEvent("resize", false, true); 
      window.dispatchEvent(event);
    }

    this.ready = true;
    const tabs = await this.tabs()
    const tabCount = tabs.length;

    tabs.forEach((tab, index) => {
      tab.order = index + 1;
      tab.tabCount = tabCount;
    });
  }

  // Everything for Collapsing on Overflow 
  calculateOverflowedTabs() {
    this.elementWidth = this.wrapperEl.offsetWidth - 120;

    this.tabsList.map((tab) => {
      tab.hidden = false;
    })

    const tabsOOB = this.tabsList.map((tab) => {
      const isOOB = tab.offsetLeft >= this.elementWidth;

      if (isOOB) {
        tab.hidden = true;
      }

      return isOOB && tab
    })

    this.overflowedTabs = [...tabsOOB.filter(Boolean)]
  }

  @Watch("overflowedTabs")
  placeSelect() {
    if (this.overflowedTabs.length !== 0) {
      this.placeOverflowSelectEl();
    }

    this.overflowSelectEl.refresh();

    this.overflowSelectEl?.querySelectorAll("midwest-item").forEach((el) => {
      this.overflowSelectEl?.removeChild(el);
    })

    this.overflowedTabs.forEach((tab, index) => {
      const item = document.createElement("midwest-item") as any;
      item.value = index.toString();
      item.innerHTML = tab.textContent;
      this.overflowSelectEl.appendChild(item);
    });
  }

  placeOverflowSelectEl() {
    if (this.element.querySelector("midwest-select[slot='more-select']")) {
      this.overflowSelectEl = this.element.querySelector("midwest-select[slot='more-select']");
      this.overflowSelectEl.removeEventListener("update", (e: any) => { this.updateTabPositionWithSelect(e.detail); });
      this.overflowSelectEl.addEventListener("update", (e: any) => { this.updateTabPositionWithSelect(e.detail); });
    } else {
      const selectEl = document.createElement("midwest-select") as any;
      selectEl.slot = "more-select";
      selectEl.placeholder = "More...";
      selectEl.inline = true;
      selectEl.align = "right";
      selectEl.noAvatars = true;
      selectEl.addEventListener("update", (e: any) => { this.updateTabPositionWithSelect(e.detail); });
      this.overflowSelectEl = selectEl;
      this.element.appendChild(this.overflowSelectEl);
    }
  }

  updateTabPositionWithSelect(index) {
    if (index) {
      this.open(index, true);
      setTimeout(() => {
        this.tabLeft = this.overflowSelectEl.offsetLeft;
        this.tabWidth = this.overflowSelectEl.offsetWidth;
        this.hiddenActive = true;
      }, 10)
    }
  }

  render() {
    const style = {
      "--tab-top": `${this.tabTop}px`,
      "--tab-left": `${this.tabLeft}px`,
      "--tab-width": `${this.tabWidth}px`,
      "--tab-height": `${this.tabHeight}px`,
      "--indicator-opacity": `${this.tabOpacity}`
    };

    return <Host style={style}>
      <div class="tab-wrap" ref={(el) => { this.wrapperEl = el; }}>
        <div class="tab-list" role="tablist">
          <slot />

          {this.collapse && <slot name="more-select" />}

          <div class="track">
            <div class={`indicator ${this.ready ? "ready" : ""}`}></div>
          </div>
        </div>
      </div>
    </Host>
  }
}