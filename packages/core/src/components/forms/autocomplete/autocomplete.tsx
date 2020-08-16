import { Component, Host, h, Prop, Watch, Method, Element, State, Event, Listen, forceUpdate, EventEmitter } from '@stencil/core';
import { Item } from '../item/item';
import faker from 'faker';
import * as JsSearch from 'js-search';
import Debounce from 'debounce-decorator';
import delay from 'async-delay';

@Component({
  tag: 'midwest-autocomplete',
  styleUrl: 'autocomplete.css',
  shadow: true,
})
export class Autocomplete {
  @Element() element: HTMLElement;

  @Prop({reflect: true}) dark: boolean;

  @Prop({ reflect: true }) open: boolean;

  @Prop() url: string;
  @Prop() results: number = 12;
  @Prop() name: string;
  @Prop() verbiage: string = "User";
  @Prop() label: string = "Choose a user";
  @Prop() placeholder: string = "Search for a User...";
  @Prop() dummy: boolean;
  @Prop() required: boolean;
  @Prop({ reflect: true }) inline: boolean;
  @Prop() options: Item[] = [];
  @Prop() groups: string[] = [];
  @Prop({ mutable: true, reflect: true }) valid: boolean;
  @Prop() noAvatars: boolean;

  @Prop() freeTextField: string;

  @Prop({ reflect: true, mutable: true }) position: "up"|"down" = "down";

  @Prop({ mutable: true }) value: string[]|string;

  @Prop() tag: "radio"|"checkbox"|"a"|"button" = "radio";

  @Prop() selected: Item[] = [];

  @Prop() ready: boolean;

  @State() searchedItems: Item[] = [];
  @State() searchedGroups: string[] = [];
  @State() query: string = "";
  @State() formOptions: HTMLMidwestItemElement[];
  @State() quiet: boolean = false;
  @State() status: FormResult;

  @Event() selectionChanged: EventEmitter;
  @Event() custom: EventEmitter;
  @Event() predefined: EventEmitter;

  list!: HTMLDivElement;
  freeTextElement: HTMLMidwestInputElement;
  freeText: string;
  selectedEl!: HTMLDivElement;
  dictionary!: any;
  localDictionary: {} = {};
  validator: HTMLMidwestValidateElement;

  componentWillLoad() {
    if (this.freeTextField) {
      this.initializeFreeText()
    }
  }

  componentDidLoad() {
    this.initializeSelected();
  }

  initializeFreeText() {
    const form = this.element.closest('midwest-form');
    this.freeTextElement = form.querySelector(`[name='${this.freeTextField}']`);

    // @ts-ignore
    this.freeText = this.freeTextElement.value;
  }

  async initializeSelected() {
    let items = [];

    if (this.freeText) {
      const option = {
        value: this.freeText,
        name: "free-text",
        content: this.freeText,
        checked: true
      }
      items = [option];
    } else {
      items = await this.itemsLookup(Array.isArray(this.value) ? this.value : [this.value]);
    }

    this.selected = items.map(item => (item.checked || item.value === this.value) && item).filter(Boolean);
  }

  async itemsLookup(ids: string[]) {
    if (this.url) {
      return this.fetchResults({ids});
    } else {
      // @ts-ignore
      return this.options.filter(o => ids.includes(o.value));
    }
  }

  @Method()
  async optionEls(): Promise<HTMLMidwestItemElement[]> {
    return Array.from(this.list.querySelectorAll('midwest-item'));
  }

  @Method()
  async validate(set = true) {
    const results = await this.validator.validate(set);

    if (set) {
       this.status = results;
    }

    return results;
  }

  @Watch("options")
  handleOptions() {
    const groups = this.options.map(option => option.group);
    this.groups = Array.from(new Set(groups));

    this.dictionary = undefined;
    this.dictionary = new JsSearch.Search('value');
    this.dictionary.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
    this.dictionary.sanitizer = new JsSearch.LowerCaseSanitizer();
    this.dictionary.addIndex('avatar');
    this.dictionary.addIndex('content');
    this.dictionary.addDocuments(this.options);
  }

  loadDummyData() {
    // @ts-ignore
    this.options = [...new Array(1000).fill("").map(() => {
      const name = faker.name.findName();

      return {
        group: (faker.random.number() % 2) ? "Nice" : "Cool",
        content: name,
        avatar: name,
        avatarShape: "circle",
        value: faker.random.uuid()
      }
    })];
  }

  get freeTextOption() : Item {
    // @ts-ignore
    return {
      group: "",
      value: this.query,
      name: "free-text",
      content: this.query,
      checked: this.freeText === this.query
    };
  }

  updateFreeTextField(option: Item) {
    if (this.freeTextElement) { 
      if (option.name === "free-text") {
        this.freeText = option.value;
      } else {
        this.freeText = null;
      }
      this.freeTextElement.value = this.freeText;
    }
  }

  async updateOption(option: Item, element: HTMLMidwestItemElement) {
    this.updateFreeTextField(option);

    this.selected = undefined;

    if (this.tag === "checkbox") {
      if (element.checked) {
        this.selected = [...this.selected, option];
      } else if (!element.checked && this.selected.find((o) => o.value === element.value)) {
        this.selected = [...this.selected.filter((o: Item) => o.value !== element.value)];
      }
    } else if (this.tag === "radio" && element.checked) {
      this.selected = [...[option]];
    }

    const updatedSearch = this.searchedItems.map((el: Item) => {
      el.checked = this.selected.find(o => o.value === el.value) !== undefined;
      return el;
    });

    this.searchableItems = [...updatedSearch];

    this.open = false
  }

  @Listen("scroll", {target: "window"})
  handlePosition () {
    const check = (window.innerHeight - this.element.getBoundingClientRect().bottom < 400);
    this.position = check ? "up" : "down";
  }

  @Watch('open')
  async handleOpen() {
    this.ready = true;
    this.handlePosition();
    this.handleQuery();
  }

  set searchableItems(items: Item[]) {
    const groups = items.map((option: Item) => option.group);
    this.searchedGroups = Array.from(new Set(groups));
    this.searchedItems = Array.from(new Set(items));
  }

  @Watch('selected')
  @Watch('open')
  @Debounce(200)
  handleSelected() {
    this.formOptions = Array.from(this.selectedEl.querySelectorAll('midwest-item'));
  }

  @Watch('selected')
  handleOptionsUpdated () {
    if (this.ready) {
      if (this.tag === "checkbox") {
        this.value = [...this.selected.map((o) => { return o.value; })];
      } else {
        this.value = [...this.selected.map((o) => { return o.value; })][0];
      }
      this.selectionChanged.emit({ value: this.value });
      forceUpdate(this.element);
    }
  }

  @Watch('query')
  handleQueryFirst() {
    this.quiet = true;
  }

  @Watch('query')
  @Debounce(350)
  async handleQuery() {
    const items = await this.search();
    
    this.searchableItems = [
      ...this.selected.map((o) => { return { ...o, checked: true } }), 
      ...items.filter((i: Item) => !this.selected.find(s => s.value === i.value))
    ];

    await delay(10);

    this.quiet = false;
  }

  async fetchResults(params) {
    const key = JSON.stringify(params);

    if (!this.localDictionary[key]) {
      const query: {results: [], status: string} = await(await fetch(this.url, params)).json();
      this.localDictionary[key] = query.results;
    }

   return this.localDictionary[key];
  }

  async search() {
    if (this.url) {
      const results = await this.fetchResults({search: this.query});
      return [...results.slice(0, this.results).map((o) => {
        return {
          ...o,
          checked: !!this.selected.find((s) => s.value === o.value)
        }
      })];
    } else if (!this.query) {
      // @ts-ignore
      return [...this.options.slice(0, this.results).map((o) => {
        return {
          ...o,
          checked: !!this.selected.find((s) => s.value === o.value)
        }
      })];
    } else {
      return this.dictionary.search(this.query).slice(0, this.results);
    }
  }
 
  render() {
    return <Host 
      onBlur={() => { this.open = false; }} 
      onUpdate={(e: Event) => { e.stopPropagation() }}>
      {this.inline && <midwest-label>{this.label}{this.required && <span class="star">*</span>}</midwest-label>}
      <div class="relative">
        <midwest-input 
          placeholder={null}
          novalidate 
          required={this.required}
          inline={this.inline}
          type="search"
          label={this.inline ? undefined : this.label} 
          onFocusing={() => { this.open = true; }} 
          onFocus={() => { this.open = true; }} 
          onBlur={() => { this.open = false; }} 
          onUpdate={(e) => { e.stopPropagation(); this.query = e.detail;  }} 
        />
        {!this.open && <midwest-form-rollup for={this.name} verbiage={this.verbiage} noAvatars={this.noAvatars} options={this.formOptions} placeholder={this.query ? this.query : this.placeholder } ></midwest-form-rollup> }
        <div class={`list ${this.query ? "has-query" : "no-query"} ${(this.searchedItems.length > 0 || this.freeTextElement) ? "has-results" : "no-results"}`} ref={(e) => { this.list = e; }}>
          {this.open && <midwest-form-rollup show={this.tag !== "checkbox"} verbiage={this.verbiage} for={this.name} options={this.formOptions} placeholder={ "Not Selected" } />}
          {this.searchedGroups.map(group => <midwest-item-group name={group} key={group}>
            {this.searchedItems.map(option => (option.group === group) && <midwest-item 
              {...option} 
              key={option.value}
              name={this.name}
              onFocus={() => { this.open = true; }} 
              settableContent={false} 
              quiet={this.quiet}
              settableParent={this.element} 
              tag={this.tag} 
              onSelectionChanged={(e) => { e.stopPropagation(); this.updateOption(option, e.detail.element); this.predefined.emit() }}
              >
                {option.content}
              </midwest-item>) }
          </midwest-item-group>)}
          {this.query && (this.query !== this.freeText) && this.freeTextElement && <midwest-item-group class="free-text-group" name="custom">
            <midwest-item 
              {...this.freeTextOption} 
              key="free-text"
              onFocus={() => { this.open = true; }} 
              settableContent={false} 
              quiet={this.quiet}
              settableParent={this.element} 
              tag={this.tag} 
              onSelectionChanged={(e) => { e.stopPropagation(); this.updateOption(this.freeTextOption, e.detail.element); this.custom.emit() }}
              >
                Use: {this.freeTextOption.content}
            </midwest-item>
          </midwest-item-group>}
        </div>

        <div hidden ref={(e) => { this.selectedEl = e; }}>
          {this.selected.map((o) => <midwest-item 
            {...o} 
            checked 
            class="selected"
            settableContent={false} 
            tag={this.tag} 
            name={this.name}
          >
            {o.content}
          </midwest-item>)}
        </div>
        
        <midwest-validate 
          ref={(el) => { this.validator = el; }}
          element={this.element}
          onIncorrect={() => { this.valid = false }}
          onCorrect={() => { this.valid = true }}
        />

      </div>
    </Host>
  }

}
