import { Component, Host, h, Prop, Element, State, Event, EventEmitter, Method, Listen, Watch } from '@stencil/core';
import pluralize from 'pluralize';
import delay from 'async-delay';

@Component({
  tag: 'midwest-select',
  styleUrl: 'select.css',
  shadow: true
})
export class Select {
  @Element() element: HTMLElement;

  // Form things
  @Prop({ reflect: true }) name: string = "select";
  @Prop() required: boolean = false;
  @Prop() novalidate: boolean;
  
  // Rendering + Styling things
  @Prop({ reflect: true }) ready: boolean = false;
  @Prop({ reflect: true }) size: "tiny" | "small" | "large";
  @Prop({ reflect: true }) inline: boolean;
  @Prop({ reflect: true }) wide: boolean;
  @Prop({ reflect: true }) invert: boolean;
  @Prop({ reflect: true }) multiple: boolean;
  @Prop({ reflect: true }) search: boolean = false;
  @Prop() loading: boolean;
  @Prop() noAvatars: boolean;
  @Prop({ mutable: true, reflect: true }) focused: boolean;
  @Prop({ mutable: true, reflect: true }) open: boolean = false;
  @Prop({ reflect: true, mutable: true }) position: "up"|"down";
  @Prop({ reflect: true, mutable: true }) align: "left"|"right" = "left";
  @Prop({ reflect: true }) resize: boolean | "full" = false;
  @Prop({ reflect: true }) dark: boolean = false;
  @Prop({ reflect: true }) noClear: boolean;
  @Prop() export: boolean;
  @Prop() changeTheme: boolean;

  // Copy things
  @Prop() verbiage: string = "item";  
  @Prop() verbiageAn: boolean;

  // Accessiblity things
  @Prop() label: string;
  @Prop() placeholder: string = "Choose something...";
  @Prop() description: string;
  @Prop() tooltip: string;

  // Pjax
  @Prop({ reflect: true }) pjaxReplace: string;

  @State() clearConfirm: boolean = false;

  @Prop({ mutable: true }) value: string[]|string;
  @State() status: FormResult;
  @Prop({ mutable: true, reflect: true }) valid: boolean;

  @Event() update: EventEmitter;

  validator: HTMLMidwestValidateElement
  searchEl!: HTMLMidwestInputElement;

  title!: HTMLButtonElement;
  rollup!: HTMLMidwestFormRollupElement;
  manualPosition: boolean;
  pjaxElement: any = document.querySelector('midwest-pjax');
  valueInitialized: boolean = false;

  componentWillLoad() {
    if (this.position) {
      this.manualPosition = true;
    }
  }

  componentDidLoad () {
    this.setTabIndexes();
    this.handleMultiple()
    this.ready = true;
    this.initializeValue();
  }

  async initializeValue() {
    if (!this.value) {
      await this.selectionChangedHandler()
    }
    this.valueInitialized = true;
  }

  async setTabIndexes () {
    await (await this.optionEls()).forEach((el) => {
      el.tabIndex = this.open ? 0 : -1;
    });
  }

  @Watch('multiple')
  async handleMultiple() {
    const options = await this.optionEls();

    options.forEach((element) => {
      if (element.tag !== "a") {
        element.name = this.name;
        element.tag = this.multiple ? "checkbox" : "radio";
      }
    });

    if (this.multiple && typeof this.value === "string") {
      this.value = [this.value];
    }

    if (!this.multiple && typeof this.value === "object" && this.value.length >= 2) {
      options.forEach((opt) => {
        if (opt.checked && opt.value !== this.value[0]) {
          opt.checked = false;
        } else if (opt.checked && opt.value === this.value[0]) {
          this.value = this.value[0]
        }
      })
    }

    this.rollup.options = options;
    await this.rollup.update();
  }

  @Watch('open')
  handleOpenChange() {
    this.handlePosition();
    this.setTabIndexes();
    this.closeOthers();
    
    if (!this.open) {
      this.validate()
      this.focused = false;
    }

    if (this.open && this.search) {
      this.searchEl.setFocus()
    } 
  }

  @Watch('value')
  handleValue() {
    if(this.pjaxReplace && this.valueInitialized) {
      this.pjaxElement.replace(this.pjaxReplace, this.value);
    }
  }


  @Method()
  async close() {
    this.title.focus()
    this.open = false
  }

  @Method()
  async options(): Promise<string[]> {
    const elements = await this.optionEls()
    const options: any[] = []

    elements.forEach((option: HTMLMidwestItemElement) => {
      options.push(option.value);
    })

    return options
  }

  @Method()
  async optionEls(): Promise<HTMLMidwestItemElement[]> {
    return Array.from(this.element.querySelectorAll('midwest-item'));
  }

  @Method()
  async validate(set = true) {
    const results = await this.validator.validate(set);

    if (set) {
       this.status = results;
    }

    return results;
  }

  @Listen("scroll", {target: "window"})
  handlePosition () {
    if(!this.manualPosition) {
      const check = (window.innerHeight - this.element.getBoundingClientRect().bottom < 400);
      this.position = check ? "up" : "down";
    }
  }

  @Listen('click', { target: 'window' })
  handleNotClick(e: MouseEvent) {
    // @ts-ignore
    if (e.target !== this.element && !this.element.contains(e.target)) {
      if (this.open) {
        this.open = false;
      }
    }
  }

  @Listen('blur')
  handleBlur() {
    this.focused = false;
  }

  @Listen('keydown')
  handleKeys(event: KeyboardEvent) {
    if (event.key === "Space" && this.open) {
      event.preventDefault();
      event.stopPropagation();
      this.open = false;
    } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      if (this.open) {
        event.preventDefault();
        event.stopPropagation();

        if (event.key === "ArrowDown") {
          this.focusNextOption();
        } else {
          this.focusPreviousOption();
        }
      }
    } else if (event.key === "Escape") {
      this.close();
    } else if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      this.open = !this.open
    }
  }

  @Listen('selectionChanged')
  async selectionChangedHandler() {
    if (this.ready) {
      const values: {value: string, checked: boolean}[] = await this.optionEls();
      
      const newValues = values.map(({value, checked}) => {
        return checked && value;
      }).filter(Boolean);

      this.value = this.multiple ? newValues : newValues[0];

      this.update.emit(this.value);

      if (!this.multiple) {
        this.close()
      }

      if (this.changeTheme && typeof this.value === "string") {
        document.querySelector("midwest-theme").base = (this.value as ThemeableColors)
      }  
    }
  }

  handleTitleClick() { 
    this.closeOthers();
    this.open = !this.open;
  }

  handleTitleFocus() { 
    this.focused = true;
  }

  handleTitleBlur() { 
    this.focused = false;
  }

  async clearValue() {
    if (this.clearConfirm) {
      await delay(100);

      this.clearConfirm = false;
      this.value = [];

      const options = await this.optionEls();

      Array.from(options).forEach((element) => {
        element.checked = false;
      });

      this.update.emit(this.value);
    } else {
      this.clearConfirm = true;
    }
  }

  async focusPaths() {
    let current: HTMLElement;
    let next: HTMLElement;
    let previous: HTMLElement;
    const elements = await this.optionEls();

    elements.forEach((element, index) => {
      if (element === document.activeElement) {
        previous = elements[index - 1];
        current = element;
        next = elements[index + 1];
      }
    })

    if (!current) {
      const first = elements[0];
      this.focusElement(first);
      current = first;
    }

    return { previous, current, next };
  }

  async focusNextOption() {
    const elements = await this.focusPaths();

    if (elements.next) {
      this.focusElement(elements.next);
    }
  }

  async focusPreviousOption() {
    const elements = await this.focusPaths();

    if (elements.previous) {
      this.focusElement(elements.previous);
    }
  }

  focusElement(element: HTMLElement) {
    element.focus();
  }

  focusFirstItem() {
    // @ts-ignore
    this.element.querySelector('midwest-item:first-of-type').focus()
  }

  closeOthers() {
    const selects = document.querySelectorAll('midwest-select[open]') as NodeListOf<HTMLMidwestSelectElement>;

    Array.from(selects).forEach((s) => {
      if (s !== this.element) {
        if (s.open) {
          s.open = false;
        }
      }
    })
  }

  handleSearch(e: CustomEvent) {
    const query = e.detail;
    const elements = this.element.querySelectorAll('midwest-item');

    if (query && query.length !== 0) {
      elements.forEach((item) => {
        if (!item.hidden) {
          if (item.textContent.toLowerCase().includes(query.toLowerCase())) {
            item.classList.remove("hidden")
          } else {
            item.classList.add("hidden")
          }
        }
      })
    } else {
      elements.forEach((item) => {
        if (!item.hidden) {
          item.classList.remove("hidden")
        }
      })
    }
  }

  renderEmptyButton() {
    return !this.noClear && this.multiple && this.value && this.value.length >= 1 && <midwest-button 
      class="clear-button" 
      tag="button" 
      size={this.size} 
      ghost 
      onClick={(e) => { e.stopPropagation(); this.clearValue() }}>
      {this.clearConfirm ? `Clear ${this.value && this.value.length} ${pluralize(this.verbiage, this.value.length)}?` : `Clear`}
    </midwest-button>
  }

  renderLabel () {
    if (this.label) {
      return <div class="label">
        <midwest-label 
          size={this.size} 
          onClick={() => { this.focusFirstItem() }}
          >
          {this.label}
          {this.required && <span class="star">*</span>}
        </midwest-label>
        {this.renderEmptyButton()}
      </div>
    }
  }

  render() {
    return <Host class="wrapper">
      {this.renderLabel()}

      <div class="select">
        {this.loading && <div class="loading">
          <midwest-progress indeterminate />
          <p>One sec...</p>
        </div>}

        <button 
          type="button" 
          class="title" 
          ref={(el: HTMLButtonElement) => {this.title = el;}}
          onClick={this.handleTitleClick.bind(this)} 
          onFocus={this.handleTitleFocus.bind(this)} 
          onBlur={this.handleTitleBlur.bind(this)}
        >
          <midwest-form-rollup ref={(el: HTMLMidwestFormRollupElement) => {this.rollup = el;}} noAvatars={this.noAvatars} for={this.name} placeholder={this.placeholder} fallback={`Choose ${this.multiple ? "some " : " "}${pluralize(this.verbiage, 2)}`} verbiage={this.verbiage} />
          <slot name="avatar" />
          <midwest-icon name="chevron-down" />
        </button>

        {this.tooltip && <midwest-tooltip align="bottom-left">{this.tooltip}</midwest-tooltip>}

        {!this.loading && <div class="list">
            {this.search && <div class="header">
              <midwest-input 
                ref={(el) => this.searchEl = el}
                type="search" 
                placeholder="Search for something..." 
                inline 
                novalidate  
                inputTabIndex={this.open ? 0 : -1}
                onUpdate={this.handleSearch.bind(this)} 
              />
            </div>}

            <div class="body">
              <slot></slot>
            </div>

            {this.multiple && <div class="footer">
              <midwest-button tag="button" block ghost onClick={this.close.bind(this)} buttonTabIndex={this.open ? 0 : -1}>Done</midwest-button>
              <slot name="footer"></slot>
            </div>}
          </div>}
      </div>

      <midwest-validate 
        ref={(el) => { this.validator = el; }}
        element={this.element}
        size={this.size}
        onIncorrect={() => { this.valid = false }}
        onCorrect={() => { this.valid = true }}
      />

      <midwest-label size="small" underneath>{this.description}</midwest-label>

      {this.export && <export-to-figma />}
    </Host>
  }
}

