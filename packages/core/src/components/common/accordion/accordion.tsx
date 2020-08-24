import { Component, Element, Prop, State, Method, h, Event, EventEmitter, Watch, Host, Listen } from '@stencil/core'
import Debouncer from 'debounce-decorator';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-accordion',
  styleUrl: 'accordion.css',
  shadow: true
})
export class Accordion {
  @Element() element: HTMLElement;

  @Prop({ mutable: true, reflect: true }) open: boolean = false;
  @Prop({ reflect: true }) next: string;
  @Prop({ reflect: true }) tight: boolean;
  @Prop({ reflect: true }) compact: boolean;
  @Prop({ reflect: true }) validate: boolean;
  @Prop({ mutable: true, reflect: true }) maxHeight: number = 50;

  @Prop() name: string = "accordion"
  @Prop() label: string = "More Details"
  @Prop({ reflect: true }) dark: boolean = false;
  @Prop({ reflect: true }) valid: boolean = false;

  @Event() opened: EventEmitter;
  @Event() closed: EventEmitter;

  @State() observer: MutationObserver;
  @State() hasIcon: boolean;
  @State() accordionHeight: number;
  @State() formValid: boolean;

  expander!: HTMLElement;
  fieldGroupEl!: any;
  els: HTMLElement[] = [];

  componentWillLoad() {
    darkMode(this)
    if (window.MutationObserver) {
      const callback = (mutationsList: any) => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            this.refresh()
          }
        }
      };

      this.observer = new MutationObserver(callback);
    }

    this.hasIcon = (this.element.querySelector(":scope > *[slot='icon']") !== undefined);
    this.els = Array.from(this.element.querySelectorAll(":scope > *:not([slot='label']):not(midwest-field-group)"));
  }

  @Listen('update', { target: 'document' })
  @Listen('test', { target: 'document' })
  @Debouncer(200)
  async handleUpdate() {
    this.refresh()
  }

  componentDidLoad() {
    this.refresh();
    this.attachObserver();
    this.updateTabIndex();

    if (this.validate) {
      this.observeForm();
    }
  }

  @Watch("formValid")
  observeFormValid() {
    this.valid = this.formValid;
  }

  @Method()
  async openIfInvalid() {
    if (!this.formValid || !this.next) {
      this.open = true
    }
  }
  
  @Method()
  async validateThis() {
    const state = await this.fieldGroupEl.state(false);
    this.formValid = state.valid
  }

  async observeForm() {
    this.fieldGroupEl = this.element.querySelector("midwest-field-group");

    this.fieldGroupEl.addEventListener("submitted", (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      this.open = false;
      const nextAccordion = document.querySelector(`midwest-accordion[name='${this.next}']`) as HTMLMidwestAccordionElement;
      if (nextAccordion) {
        nextAccordion.open = true;
      }
    });

    this.fieldGroupEl.addEventListener("updated", (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      this.validateThis();
    });

    this.fieldGroupEl.addEventListener("fast-updates", (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      this.validateThis();
    });

    this.validateThis();
    
    if (this.formValid) {
      this.open = false;
      const nextAccordion = document.querySelector(`midwest-accordion[name='${this.next}']`) as HTMLMidwestAccordionElement;
      if (nextAccordion) {
        nextAccordion.openIfInvalid();
      }
    }
  }

  refresh() {
    // @ts-ignore
    this.accordionHeight = (this.expander.firstElementChild as HTMLSlotElement).assignedElements()[0].offsetHeight + 36;
  }

  @Watch("open")
  async onOpenChanged() {
    if (this.open) {
      this.opened.emit({});
    } else {
      this.closed.emit({});
    }

    this.updateTabIndex();
    this.validateThis();
  }

  attachObserver() {
    if (this.observer) {
      // Start observing the target node for configured mutations
      this.observer.observe(this.element, { childList: true, subtree: true });
    }
  }

  componentWillUnload() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  get currentClasses() {
    return `expander ${this.openClass()}`
  }

  openClass() {
    return (this.open) ? "open" : ""
  }

  updateTabIndex() {
    this.els.forEach((element) => {
      element.tabIndex = !this.open ? -1 : 0;
    })
  }

  handleClick() {
    this.open = !this.open
    this.updateTabIndex();
  }

  render() {
    return <Host style={{
      "--expander-max-height": `${this.maxHeight}vh`,
      "--accordion-height": `${this.accordionHeight}px`
    }}>
      <div class="wrap">
        <div class="button-wrap" title="Selecting this opens the content of this accordion" onClick={() => this.handleClick()}>
          <slot name="label"></slot>
          {this.hasIcon && <div id="icon"><slot name="icon"></slot></div>}
          {this.validate && <div id="icon"><ion-icon name={this.valid ? "valid" : "close" } /></div>}
          <ion-icon class="chevron" name="chevron-down"/>
        </div>

        <div class={this.currentClasses} ref={(el) => {  this.expander = el; }}>
          <slot></slot>
        </div>
      </div>
    </Host>
  }
}
