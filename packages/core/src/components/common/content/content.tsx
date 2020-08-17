import { Component, Prop, State, Element, Listen, h, Watch, Host } from '@stencil/core';

@Component({
  tag: 'midwest-content',
  styleUrl: 'content.css',
  shadow: true
})

export class Content {
  @Element() element: HTMLElement;
  @Prop({ mutable: true, reflect: true }) open: boolean = false;
  @Prop({ mutable: true, reflect: true }) for: string;
  @Prop({ mutable: true, reflect: true }) behavior: string;
  @Prop({ mutable: true, reflect: true }) scrollWhenActive: boolean;
  @State() parent: any;

  tab!: HTMLMidwestTabElement|HTMLMidwestStepElement

  componentWillLoad() {
    this.tab = document.querySelector(`midwest-tabs[name="${this.for}"] midwest-tab[href="#${this.element.id}"], midwest-steps[name="${this.for}"] midwest-step[href="#${this.element.id}"]`);

    if (window.location.hash && this.element.id.includes(window.location.hash)) {
      this.open = true;
      this.tab.activate();
    }
  }

  @Watch("open")
  handleOpen() {
    if (this.scrollWhenActive) {
    this.element.scrollIntoView(true)
    }
  }

  @Listen("contentChange", { target: 'document' })
  async handleActive(event: CustomEvent) {
    this.parent = event.detail.parent;

    const contents = await this.parent.contents()

    if (event.detail.name !== this.element.id) {
      contents.forEach((element: HTMLMidwestContentElement) => {
        element.open = element.id === event.detail.name;
      });
    }
  }

  render() {
    return <Host>
      <div class="wrap" role="tabpanel" aria-hidden={!this.open ? "true" : "false"}>
        <slot></slot>
      </div>
    </Host>
  }
}
