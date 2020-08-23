import { Component, Host, h, Prop, Element, Method, Event, EventEmitter, Watch } from '@stencil/core';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-item',
  styleUrl: 'item.css',
  shadow: true
})
export class Item {
  @Element() element: HTMLElement;
  
  @Prop({ reflect: true, mutable: true }) tag: "a" | "button" | "span" | "checkbox" | "radio" | "stencil-route" = "button";
  @Prop({ reflect: true, mutable: true }) name: string = "item";
  @Prop({ reflect: true, mutable: true }) value: string;
  @Prop({ reflect: true, mutable: true }) disabled: boolean = false;
  @Prop({ reflect: true, mutable: true }) default: any = undefined;

  @Prop({ reflect: true, mutable: true }) avatar: string;
  @Prop({ reflect: true, mutable: true }) avatarSize: "small" | "medium" = "small";
  @Prop({ reflect: true, mutable: true }) avatarSrc: string;
  @Prop({ reflect: true, mutable: true }) avatarIcon: string;
  @Prop({ reflect: true, mutable: true }) avatarShape: "circle" | "square" | "rectangle" | "diamond" | "hexagon" | "message" = "square";

  @Prop({ reflect: true, mutable: true }) icon: string;
  @Prop({ reflect: true, mutable: true }) quiet: boolean;

  @Prop({ reflect: true, mutable: true }) href: string = "#";
  @Prop({ reflect: true, mutable: true }) target: string = "_self";

  @Prop({ reflect: true }) group: string;
  @Prop({ reflect: true, mutable: true }) hasSelected: boolean;
  
  @Prop({ reflect: true }) dark: boolean = false;
  @Prop({ reflect: true }) block: boolean = false;
  @Prop({ reflect: true }) required: boolean = false;
  @Prop({ reflect: true }) inline: boolean = false;
  @Prop({ reflect: true, mutable: true }) checked: boolean = false;
  @Prop({ reflect: true, mutable: true }) focused: boolean = false;
  @Prop() tooltip: string;
  @Prop({mutable: true}) content: string;
  @Prop({mutable: true}) settableParent: any;

  pjaxElement: any = document.querySelector('midwest-pjax');

  /**
   * Makes sure this element cannot be exported.
   */
  @Prop() export: boolean;

  @Event() selectionChanged: EventEmitter;

  parent!: HTMLMidwestSelectElement|HTMLMidwestToggleElement;
  form!: HTMLMidwestFormElement;
  clickable!: HTMLLabelElement|HTMLAnchorElement|HTMLButtonElement|HTMLSpanElement;
  input!: HTMLInputElement;

  componentWillLoad() {
    darkMode(this)
    this.handleTagChange();

    this.hasSelected = (this.element.querySelectorAll("*[slot='selected']").length !== 0);
    this.parent = this.settableParent ? this.settableParent : this.element.closest('midwest-select, midwest-dropdown, midwest-toggle, midwest-autocomplete') ;
    this.form = this.element.closest('midwest-form');
    
    this.element.querySelectorAll('midwest-button').forEach((el) => {
      el.stopPropagation = true
    })

    if (!this.value) {
      this.value = this.element.innerHTML
    }
  }

  @Watch('tag')
  handleTagChange() {
    if (this.tag === "checkbox" && !this.name.includes("[]")) {
      this.name = `${this.name}[]`;
    }

    if (this.tag === "radio" && this.name.includes("[]")) {
      this.name = this.name.replace("[]", "");
    }
  }

  @Method()
  async validate() {
    const status: FormResult = {
      name: `${this.name}`,
      value: this.checked ? this.value : this.default,
      valid: true,
      errors: [],
    };

    return status;
  }

  async siblings() {
    const options = await this.parent.optionEls();
    return options;
  }

  async radioCanChange() {
    const siblings = await this.siblings();

    siblings.forEach((el) => {
      el.checked = false;
    });

    return true;
  }

  async onKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      this.onClick(e)
    }
  }

  @Watch('checked')
  handleCheckedChange() {
    if (!this.quiet) {
      this.selectionChanged.emit({element: this.element})
    }
  }

  async onClick(e: Event) {
    if (!this.disabled) {
      if (["checkbox", "radio"].includes(this.tag)) {
        e.preventDefault();
        e.stopPropagation();
        
        if (this.tag === "checkbox") {
          this.checked = !this.checked;
        }

        if (this.tag === "radio") {
          this.checked = await this.radioCanChange()
        }

        this.parent.validate();
      } else {
        if (this.tag === "a" && this.pjaxElement) {
          e.preventDefault();
          this.pjaxElement.loadUrl(this.href);
          if (this.parent.nodeName === "MIDWEST-SELECT") {
            // @ts-ignore
            this.parent.close()
          }
        } else {
          e.preventDefault();
          e.stopPropagation();
          this.clickable.click();
        }
      }
    }
  }

  renderAvatar() {
    return this.avatar && !["", "false"].includes(this.avatar) && <midwest-avatar size={ this.avatarSize } name={this.avatar || this.value} src={this.avatarSrc} icon={this.avatarIcon} shape={this.avatarShape} noTooltip tabIndex={-1} />
  }

  renderIcon() {
    return this.icon && !["", "false"].includes(this.avatar) && <ion-icon name={this.icon || this.value} tabIndex={-1} class="supplementalIcon" />
  }

  renderRadioBlock() {
    return <div class="wrapper">
      <midwest-box radio focused={this.focused} checked={this.checked} disabled={this.disabled} dark={this.dark} />
      <div class="block-content">
        <slot></slot>
      </div>
    </div>
  }

  renderCheckBlock() {
    return <div class="wrapper">
      <midwest-box focused={this.focused} checked={this.checked} disabled={this.disabled} dark={this.dark} />
      <div class="block-content">
        <slot></slot>
      </div>
    </div>
  }

  renderToggle () {
    return <label 
      htmlFor="input" 
      class="clickable" 
      onClick={this.onClick.bind(this)} 
      onKeyDown={this.onKeyDown.bind(this)} 
      tabIndex={-1}
      ref={(el) => { this.clickable = el as HTMLLabelElement }}
    >
      {this.default && <input type="hidden" name={this.name} value={this.default} />}

      <input 
        ref={(el) => this.input = el as HTMLInputElement}
        type={this.tag} 
        name={this.name} 
        id="input" 
        class="input" 
        value={this.value} 
        checked={this.checked} 
        required={this.required}
        disabled={this.disabled}
      />

      {(this.block && this.tag === "radio") && this.renderRadioBlock()}
      {(this.block && this.tag === "checkbox") && this.renderCheckBlock()}
      {this.inline && !this.block && <midwest-box radio={this.tag === "radio"} focused={this.focused} checked={this.checked} disabled={this.disabled} dark={this.dark} />}
      {this.inline && !this.block && <midwest-label for={"input"}>
        <slot>{this.checked ? "Selected" : "Not selected"}</slot>
      </midwest-label>}

      {!this.inline && !this.block && this.renderAvatar()}
      {!this.inline && !this.block && <midwest-label for={"input"}>
        <slot>{this.checked ? "Selected" : "Not selected"}</slot>
      </midwest-label>}
      {!this.inline && !this.block && <midwest-box radio={this.tag === "radio"} checked={this.checked} disabled={this.disabled} dark={this.dark} />}

      {(["radio", "checkbox"].includes(this.tag) && this.block) && this.hasSelected && <div class={this.checked ? "selected active" : "selected"} onClick={e => { e.preventDefault(); e.stopPropagation(); }} onKeyDown={e => { e.preventDefault(); e.stopPropagation(); }}>
        <div class="selected-wrapper"><slot name="selected"></slot></div>
      </div>}

      {this.tooltip && <midwest-tooltip align="bottom-left">{this.tooltip}</midwest-tooltip>}
    </label>
  }

  renderLink () {
    return <a 
        href={this.href} 
        target={this.target} 
        class="clickable" 
        tabIndex={-1}
        onClick={this.onClick.bind(this)} 
        ref={(el) => { this.clickable = el }}
      >
      {this.renderAvatar()}
      {this.renderIcon()}
      <midwest-label>
        <slot>{this.checked ? "Selected" : "Not selected"}</slot>
      </midwest-label>
    </a>
  }

  renderButton () {
    return <button 
        type="button" 
        class="clickable" 
        tabIndex={-1}
        disabled={this.disabled}
        ref={(el) => { this.clickable = el }}
      >
      {this.renderAvatar()}
      {this.renderIcon()}
      <midwest-label>
        <slot>{this.checked ? "Selected" : "Not selected"}</slot>
      </midwest-label>
    </button>
  }

  renderSpan () {
    return <span 
      class="clickable" 
      tabIndex={-1}
      ref={(el) => { this.clickable = el }}
    >
      {this.renderAvatar()}
      {this.renderIcon()}
      <midwest-label>
        <slot>{this.checked ? "Selected" : "Not selected"}</slot>
      </midwest-label>
    </span>
  }

  renderStencilRoute () {
    return <stencil-route-link
      url={this.href} 
      class="clickable" 
      tabIndex={-1}
      ref={(el) => { this.clickable = el }}
    >
      {this.renderAvatar()}
      {this.renderIcon()}
      <midwest-label>
        <slot>{this.checked ? "Selected" : "Not selected"}</slot>
      </midwest-label>
    </stencil-route-link>
  }


  render() {
    return <Host tabIndex={0} onKeyDown={this.onKeyDown.bind(this)}>
      {this.tag === "a" && this.renderLink()}
      {this.tag === "button" && this.renderButton()}
      {this.tag === "span" && this.renderSpan()}
      {this.tag === "stencil-route" && this.renderStencilRoute()}
      {["radio", "checkbox"].includes(this.tag) && this.renderToggle()}
      {this.export && <export-to-figma />}
    </Host>
  }

}
