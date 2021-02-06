import { Component, Host, h, Element, State, Prop, Listen, Event, EventEmitter, Method } from '@stencil/core';
import delay from 'async-delay';


@Component({
  tag: 'midwest-repeatable-fields',
  styleUrl: 'repeatable-fields.css'
})
export class RepeatableFields {
  @Element() element: HTMLElement;
  @Prop({mutable: true, reflect: true}) data: string;
  @Prop() custom: boolean;
  @Prop() verbiage: string = "Item";
  @Prop() addOneIfEmpty: boolean;
  @Prop({ reflect: true }) readonly: boolean = false;

  @State() content: {[key: string]: any}[];
  @State() count: number = 0;

  @Event() update: EventEmitter;  

  templateContent: string;
  latestIndex: number = 0;
  template: HTMLTemplateElement;
  gridEl: HTMLMidwestGridElement;

  componentWillLoad() {
    this.content = JSON.parse(this.data);
    this.data = "";
    this.template = this.element.querySelector("template");
    this.templateContent = this.template.innerHTML;
  }

  async appendEmptyTemplate() {
    const form = this.element.closest('midwest-form,midwest-field-group') as HTMLMidwestFormElement|HTMLMidwestFieldGroupElement;
    const state = await form.state(false); 
    
    if (state.valid) {
      const index = this.gridEl.querySelectorAll('.repeated').length ?? 0;
      this.latestIndex = index + 1;
      const row = document.createRange().createContextualFragment(`<div class="repeated" style="order: ${index}" data-index="${this.latestIndex}">${this.templateContent.replace(new RegExp('{index}', 'g'), `${this.latestIndex}`)}</div>`);
      this.count = this.count + 1;
      this.gridEl.appendChild(row);
      await delay(350);
      const latest = this.gridEl.querySelector(`[data-index="${this.latestIndex}"]`)
      
      latest.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })

      latest.querySelector(`midwest-input`).setFocus()

      this.update.emit({})
    }
  }

  @Method()
  async removeByIndex(index: number) {
    const el = this.element.querySelector(`.repeated[data-index='${index}']`);
    
    if (el) {
      this.count = this.count - 1
      this.gridEl.removeChild(el);
    }

    this.update.emit({})
  }

  @Listen("delete-entry")
  handleDeleteEntry (e) {
    const index = e.detail.index;
    const el = this.element.querySelector(`.repeated[data-index='${index}']`);
    
    if (el) {
      this.count = this.count - 1
      this.gridEl.removeChild(el);
    }
    
    this.update.emit({})
  }

  setInitialContent() {
    this.content.forEach((item, index) => {
      const keys = Object.keys(item);
      const row = document.createRange().createContextualFragment(`<div class="repeated" style="order: ${index}" data-index="${index}">${this.templateContent.replace(new RegExp('{index}', 'g'), `${index}`)}</div>`);

      keys.forEach((key) => {
        this.latestIndex = parseInt(key, 10);

        if (this.custom) {
          const element = row?.querySelector(".repeated > *");
          element.setAttribute("data", JSON.stringify(item))
        } else {
          const element = row?.querySelector(`[name*="${key}"]`);

          if (element.nodeName === "MIDWEST-INPUT" && !!item[key]) {
            (element as HTMLMidwestInputElement).setAttribute("value", item[key]);
          }

          if (element.nodeName === "MIDWEST-TOGGLE" && !!item[key]) {
            //@ts-ignore
            if (element.type === "radio") {
              (element as HTMLMidwestToggleElement).setAttribute("value", item[key]);
              const itemEl: HTMLMidwestItemElement = element.querySelector(`midwest-item[value="${item[key]}"]`);
              itemEl.setAttribute("checked", "true");
            //@ts-ignore
            } else if(element.type === "checkbox") {              
              (element as HTMLMidwestToggleElement).setAttribute("value", item[key]);
              const itemEl: HTMLMidwestItemElement = element.querySelector("midwest-item");
              itemEl.setAttribute("value", item[key]);
              itemEl.setAttribute("checked", item[key]);
            }
          }
        }
      });

      this.count = this.count + 1;
      this.gridEl.appendChild(row);
    });
  }

  componentDidLoad() {
    this.setInitialContent();

    if (this.addOneIfEmpty && this.count === 0) {
      this.appendEmptyTemplate();
    }
  }

  handleKeyDown(e: KeyboardEvent) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
      this.appendEmptyTemplate();
    }
  }

  render() {
    return <Host>
      <midwest-grid cols={1} responsive={false} ref={(el) => { this.gridEl = el}} />
      <midwest-empty class={`${this.count > 0 ? "hidden" : "block"}`}><slot name="empty" /></midwest-empty>
      {!this.readonly && <midwest-button outline tag="button" class="mt-6" onClick={() => this.appendEmptyTemplate()} onKeyDown={(e) => {this.handleKeyDown(e)}}>
        <ion-icon name="add" slot="icon"/>
        Add Another {this.verbiage}
      </midwest-button>}
    </Host>
  }

}
