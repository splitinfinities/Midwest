import { Component, Host, h, Element, Prop, State, Watch, EventEmitter, Event, Method, getAssetPath } from '@stencil/core';
import { EditorValue } from './lib/EditorValue';
import "quill-mention";
import "quill-emoji";
import QuillEditor from 'quill';
// @ts-ignore
import parseTweet from 'twitter-text/dist/parseTweet.js';
import { validateMentionsData, validateHasValue } from './lib/helpers';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-rich-text',
  styleUrl: 'rich-text.css',
  assetsDir: "assets"
})

export class RichText {
  @Element() element: HTMLElement;

  @Prop() enableRich: boolean;
  @Prop() enableRicher: boolean;
  @Prop() enableMentions: boolean;
  @Prop() enableEmojis: boolean;
  @Prop() enableLinks: boolean;
  @Prop() enableAlignment: boolean;
  @Prop() enableImages: boolean;
  @Prop() novalidate: boolean;
  @Prop() required: boolean;
  @Prop() name: string = "rich-text";
  @Prop({ mutable: true, reflect: true }) label: string;
  @Prop({ reflect: true }) inline: boolean;
  @Prop() description: string;
  @Prop() tooltip: string;
  @Prop() max: number;
  @Prop() twitterBased: boolean;
  @Prop() readonly: boolean;
  @Prop() size: string;
  @Prop({ mutable: true, reflect: true }) placeholder: string = "Enter a value";
  @Prop({ mutable: true, reflect: true }) valid: boolean;

  // Convert to State?
  @Prop({ mutable: true }) value: string;

  @State() message: string;
  @State() links: Set<string>;
  @State() mentions: MentionObject[] = [];
  @State() contents: {ops: DeltaOperation[], html: string, text: string };


  /**
   * Hides this element from exporting to figma
   */
  @Prop() export: boolean;
  
  @Prop() mentionDataFunction: () => void;

  /**
   * Public: Updated event
   */
  @Event() update: EventEmitter;

  /** Public: Bluring event */
  @Event() bluring: EventEmitter;

  /** Public: Bluring event */
  @Event() focusing: EventEmitter;

  /**
   * Sets the button or link as an outlined button.
   */
  @Prop({ reflect: true }) dark: boolean = false;

  @Prop() mentionsData: {id: string, value: string}[] = [];
  _mentionsData: any = [];

  @State() status: FormResult;
  @State() twitterResult: any;
  @State() currentCount: number = 0;

  @State() maxState: "red"|"gold"|"gray" = "gray";

  currentLinks: Set<string>;
  editor!: Quill;
  mount!: HTMLDivElement;
  counter!: HTMLMidwestLabelElement;
  validator: HTMLMidwestValidateElement

  componentWillLoad() {
    darkMode(this)
    // Allow rich text to act as a textarea element by passing content into the element.
    if (!this.value && this.element.textContent !== "") {
      this.value = JSON.stringify({ 
        ops: [
          { insert: this.element.textContent }
        ]
      });
    }
  }

  componentDidLoad() {
    this.observeMentionsDataUpdates();

    if (!this.mount.classList.contains("ql-container") && window.DOMTokenList) {
      this.editor = new QuillEditor(this.mount, this.options);
      this.editor.on('text-change', this.onChange.bind(this));
      this.editor.on('selection-change', this.onSelectionChange.bind(this))

      const keyboard = this.editor.getModule('keyboard');
      delete keyboard.bindings[9];

      if (typeof this.value === "string") {
        this.setContents(this.value)
      }
    }
  }

  @Watch("contents")
  async observeContentsChange() {
    this.updateCurrentCount();
    this.validate();
    this.update.emit(this.value)
  }

  @Watch('mentionsData')
  observeMentionsDataUpdates() {
    if (this.enableMentions) {
      try {
        this._mentionsData = validateMentionsData(this.mentionsData);
      } catch (_) {
        this.validate();
      }
    }
  }

  cascadeChanges(delta: any) {
    const text = this.editor.root.innerText.trim()

    const value = new EditorValue(this.contents.ops, text);
    const linksEstablished = this.canSearchForLinks(delta); 

    this.links = linksEstablished ? value.links : this.currentLinks;
    this.mentions = value.mentions;
    this.message = value.message;

    this.currentLinks = linksEstablished ? value.links : this.currentLinks

    this.mentions = value.mentions;
  }

  @Method()
  async getEditor() {
    return this.editor;
  }

  @Method()
  async getStringifiedContents(): Promise<string> {
    const delta = this.contents;
    return JSON.stringify(delta);
  }

  @Method()
  async getContents(): Promise<{ops: DeltaOperation[], html: string, text: string}> {
    const contents = await this.editor.getContents()
    return {
      ...contents,
      html: this.htmlValue,
      text: this.textValue
    };
  }

  get htmlValue () {
    return this.mount.querySelector(".ql-editor").innerHTML
  }

  get textValue () {
    return this.mount.querySelector(".ql-editor").textContent
  }

  @Method()
  async setContents(json: string) {
    const results = JSON.parse(json) as { ops: any[], html: string, text: string };
    
    if (results?.ops) {
      await this.editor.setContents(results.ops);
      results.html = this.htmlValue;
      results.text = this.textValue;
      this.contents = {...results};
    }
  }

  @Method()
  async replace(needle: string, becomes: string) {
    EditorValue.replace(this.editor, needle, becomes);
  }

  // Check if we can store new links based
  // Anything but a single non-whitespace character 
  // typed should be ok with searching for links
  canSearchForLinks(delta: any) {
    let ok = false;

    // Check to see if not a simple typing event
    ok = delta.changeLength() !== 1     || // More than one char
         delta.ops.length !== 2         || // Not standard 2 ops
         /\s/.test(delta.ops[1].insert);   // Whitespace

    return ok
  }

  async onSelectionChange(range: any, oldRange: any) {
    // basicly an onBlur check -- currently not an event quiljs editor emits.
    if (range === null && oldRange !== null) {
      this.onBlur()
    } else if (range !== null && oldRange === null) {
      this.onFocus()
    }
  }

  async onBlur() {
    await this.validate();
    this.bluring.emit(this);
  }

  async onFocus() {
    this.element.scrollIntoView({
      behavior: "smooth",
      block: "center"
    })
    this.focusing.emit(this);
  }

  async onChange(delta: any, _: any, source: any) {
    if (source === 'user') {
      const contents = await this.getContents();
      this.value = JSON.stringify(contents);
      this.contents = {...contents};
      this.cascadeChanges(delta);
    }
  }

  updateCurrentCount() {
    if (this.max > 0) {
      let text = this.mount.querySelector(".ql-editor").textContent;
      text = text.trim();

      if (this.twitterBased) {
        this.twitterResult = parseTweet(text);
        this.currentCount = this.twitterResult.weightedLength;
      } else {
        this.currentCount = text.length > 0 ? text.length : 0;
      }

      if (this.currentCount > this.max) {
        this.maxState = "red";
      } else if (this.currentCount >= Math.round(this.max * 0.75)) {
        this.maxState = "gold";
      } else {
        this.maxState = "gray";
      }

      this.validate();
    }
  }

  @Method()
  async validate(set = true) {
    const results = await this.validator.validate(set);

    if (set) {
      this.status = results;
    }
    return results;
  }

  satisfiesMaxLength() {
    return this.max ? this.currentCount <= this.max : true;
  }

  availableMentions() {
    return this._mentionsData.filter((option: any) => !(this.mentions.find(mention => mention.id === option.id)))
  }

  get options(): QuillOptions {
    return {
      modules: {
        toolbar: (this.toolbar.length !== 0) ? this.toolbar : false,
        mention: this.mention,
        "emoji-toolbar": this.enableRicher && this.enableEmojis,
        "emoji-textarea": this.enableEmojis,
        "emoji-shortname": this.enableEmojis,
      },
      formats: this.formats,
      placeholder: this.placeholder,
      readOnly: this.readonly,
      theme: !this.inline ? 'snow' : undefined,
      sanitizeHtml: true,
    };
  }

  async localSearch(term: string) {
    const values = this.availableMentions();
    let matches: any[] = [];

    return new Promise((resolve, _) => {
      if (term.length === 0) {
        matches = values;
      } else {
        for (let i = 0; i < values.length; i++) {
          if (~values[i].value.toLowerCase().indexOf(term.toLowerCase())) {
            matches.push(values[i]);
          }
        }
      }

      resolve(matches);
    });
  }

  get mention() {
    return this.enableMentions ? {
      allowedChars: /^[A-Za-z\s]*$/,
      mentionDenotationChars: ["@"],
      showDenotationChar: false, // this.twitterBased,
      renderItem(item: any) {
        return `${item.value}`;
      },
      onSelect: (item: any, insertItem: any) => {
        insertItem(item)
      },
      source: async (searchTerm: string, renderList: any, mentionChar: any) => {
        const search = this.mentionDataFunction ? this.mentionDataFunction.bind(this) : this.localSearch.bind(this);

        if (mentionChar !== "@") {
          return false;
        }

        const matches = await search(searchTerm);

        renderList(matches, searchTerm);

        return matches;
      }
    } : false;
  }

  get toolbar () {
    return [...[...this.formats].filter(format => !["align", "emoji", "mention"].includes(format)), ...this.alignmentsToolbar];
  }

  get formats () {
    const formats: string[] = [...this.richFormats, ...this.emojiFormats, ...this.richerFormats, ...this.alignmentsFormats, ...this.imageUpload, ...this.mentionFormats]
    return formats.length > 0 ? formats : [];
  }

  get richFormats() { return (this.enableRich || this.enableRicher) ? ["bold", "italic", "underline"] : [] }
  get richerFormats() { return this.enableRicher ? ["header", "list"] : [] }
  get emojiFormats() { return this.enableEmojis ? ["emoji"] : [] }
  get mentionFormats() { return this.enableMentions ? ["mention"] : [] }
  get imageUpload() { return this.enableImages ? ['image'] : [] }
  get alignmentsToolbar() { return this.enableAlignment ? [{'align' : ['', 'center', 'right', 'justify']}] : [] }
  get alignmentsFormats() { return this.enableAlignment ? ['align'] : [] }

  renderLabel() {
    return this.label &&<midwest-label size={this.size}>{this.label}{this.required && <span class="star">*</span>}</midwest-label>
  }

  render() {
    return <Host>
      <style innerHTML={`.ap { background-image: url(${getAssetPath("./assets/emojis.png")}); }`}></style>
      {this.renderLabel()}
      <div class={`input ${`${this.status ? (this.valid ? "valid" : "invalid") : ""}`}`}>
        <div ref={el => this.mount = el as HTMLDivElement} />
        {this.tooltip && <midwest-tooltip align="bottom-left">{this.tooltip}</midwest-tooltip>}
        {(this.max && this.max > 0) ? <midwest-label size="tiny" class={`count whitespace-no-wrap text-${this.maxState}-5 text-right ml-auto text-xs pr-1`}>{this.currentCount} / {this.max}</midwest-label> : ""}
      </div>

      <midwest-validate 
        ref={(el) => { this.validator = el; }}
        element={this.element}
        size={this.size}
        onIncorrect={() => { this.valid = false }}
        onCorrect={() => { this.valid = true }}
        check={{
          maxLength: { message: `Your message must be under ${this.max} characters.`, test: this.satisfiesMaxLength.bind(this) },
          hasValue: () => (!this.novalidate || this.required) ? validateHasValue(this.value) : { test: true }
        }}
      />

      {this.description && <midwest-label size="small" underneath>{this.description}</midwest-label>}
      <div class="reference-content hidden" style={{"display": "none"}}><slot /></div>
      {this.export && <export-to-figma />}
    </Host>
  }
}