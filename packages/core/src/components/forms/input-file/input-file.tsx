import { Component, ComponentInterface, Host, h, Prop, State, Method, Element, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'midwest-input-file',
  styleUrl: 'midwest-input-file.css',
  shadow: true,
})
export class InputFile implements ComponentInterface {
  /**
   * Instance of the custom element
   */
  @Element() element: HTMLElement

  /**
   * The pre-set value to pass to the input element
   */
  @Prop({ mutable: true, reflect: true }) value: any;

  @Prop({ mutable: true, reflect: true }) label: string;
  @Prop() description: string;
  @Prop() tooltip: string;
  @Prop({ mutable: true, reflect: true }) placeholder: string = "Enter a value";
  @State() status: FormResult;
  @State() valid: boolean;
  @Prop() required: boolean = false;  
  @Prop() novalidate: boolean = false;

  /**
   * The name of the input element
   */
  @Prop({ reflect: true }) name: string;

  // Files
  @Prop() multipleFileCaption: string = '{count} files'
  @Prop() replacePlaceholder: string = "Replace file"
  @State() filePlaceholder: string;
  @Prop({ mutable: true }) files: any[] = []
  @State() _multipleFileUploadsLabel: string
  @State() _fileLabel: string
  @Prop() multiple: boolean = false
  @Prop() droppable: boolean = false
  @Prop() accept: string;
  @Prop({ reflect: true }) hideState: boolean = false;
  @Prop({ reflect: true, mutable: true }) focused: boolean = false;
  @Prop() inputTabIndex: number = 0;
  @Prop() disabled: boolean;
  @Prop() readonly: boolean = false;

  @Prop({ mutable: true, reflect: true }) size: "small" | "default" | "large" = "default";

  /**
   * Sets the button to dark.
   */
  @Prop({ reflect: true }) dark: boolean = false;

  /**
   * Hides this element from exporting to figma
   */
  @Prop() export: boolean;

  /**
   * Public: Updated event
   */
  @Event() update: EventEmitter;

  /**
   * Public: Focus event
   */
  @Event() focusing: EventEmitter;

  /**
   * Public: Blur event
   */
  @Event() bluring: EventEmitter;

  /**
   * Instance of the input or text-area element
   */
  input!: HTMLInputElement | HTMLTextAreaElement
  validator: HTMLMidwestValidateElement

  componentWillLoad() {
    this._prepareFileLabels();
  }

  componentDidLoad() {
    this.attachDragDrop();
  }

  updateFilesArray() {
    let files: any = [];

    if (this.multiple) {
      // @ts-ignore
      Array.from(this.input.files).forEach((file: File) => {
        files.push(file);
      });
    } else {
      // @ts-ignore
      files = this.input.files[0]
    }

    this.files = files;
  }

  updateFileLabel() {
    let fileName = '';
    const lengthCheck = (this.files && this.files.length > 1);
    
    fileName = lengthCheck ? this.multipleFileCaption.replace('{count}', this.files.length.toString()) : this.input.value.split('\\').pop() ;

    this._fileLabel = fileName ?? undefined;

    this.value = this.input.value;

    this._prepareFileLabels()

    this.validator.validate();
  }

  _prepareFileLabels() {
    if (this.multiple) {
      this.replacePlaceholder = (this.replacePlaceholder === "Replace file") ? "Replace files" : this.replacePlaceholder;
    }

    this.filePlaceholder = (!this.value) ? this.placeholder : this.replacePlaceholder;
  }

  @Method()
  async validate(set = true) {
    const results = await this.validator.validate(set);

    if (set) {
      this.status = results;
    }

    return results;
  }

  handleChange() {
    this.updateFilesArray();
    this.updateFileLabel();

    this.update.emit(this.value)
  }

  handleFocus() {
    this.focused = true;
    this.focusing.emit({})
  }

  handleBlur() {
    this.focused = false;
    this.validator.validate();
    this.bluring.emit({})
  }

  attachDragDrop() {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      this.element.addEventListener(eventName, (e) => {
        e.preventDefault()
        e.stopPropagation()
      }, false)
    });

    ['dragenter', 'dragover'].forEach(eventName => {
      this.element.addEventListener(eventName, () => {
        this.focused = true;
      }, false)
    });

    ['dragleave', 'drop'].forEach(eventName => {
      this.element.addEventListener(eventName, () => {
        this.focused = false;
      }, false)
    })

    this.element.addEventListener('drop', (e) => {
      // @ts-ignore
      this.input.files = e.dataTransfer.files
      this.handleChange()
    }, false)

  }

  async handleInput() {
    this.value = this.input.value;
  }

  renderMultipleFileUploads() {
    if (this.multiple && this.files && this.files.length > 1) {
      return <ul class="file-list">
        {this.files.map((file) => <li>
          <p>{file.name} | <midwest-unit value={file.size} /></p>
        </li>)}
      </ul>
    }
  }

  renderFileUpload() {
    return <div class="file-wrapper">
      <div class="upload-card">
        <section>
          {this.renderInputElement()}

          {!this.hideState && this._fileLabel && <h3>{this._fileLabel}</h3>}

          <h4>
            <midwest-icon name={(!this.hideState && this._fileLabel) ? "create" : "add-circle"}  />
            {!this.hideState && this.filePlaceholder}
            {this.hideState && this.placeholder}
          </h4>

          {!this.hideState && this.renderMultipleFileUploads()}
        </section>
      </div>
    </div>
  }

  renderInputElement() {
    return <input
      class="input"
      ref={(el) => this.input = el as HTMLInputElement}
      id={"input"}
      tabIndex={this.inputTabIndex}
      type={"file"}
      name={this.name}
      placeholder={this.placeholder}
      required={this.required}
      readonly={this.readonly}
      disabled={this.disabled}
      multiple={ this.multiple}
      accept={this.accept}
      value={this.value}
      onClick={(e) => { e.stopPropagation(); }}
      onInput={() => this.handleInput()}
      onChange={() => this.handleChange()}
      onFocus={() => this.handleFocus()}
      onBlur={() => this.handleBlur()}
    />
  }

  renderLabel() {
    if (this.label) {
    return <midwest-label for="input" size={this.size}>{this.label}{this.required && <span class="star">*</span>}</midwest-label>
    }
  }

  render() {
    return <Host class={`${this.status ? (this.valid ? "valid" : "invalid") : ""}`}>
      <div class="wrapper">
        <label>
          {this.renderLabel()}

          <div class="content">
            {this.renderFileUpload()}

            {this.tooltip && <midwest-tooltip align="bottom-left">{this.tooltip}</midwest-tooltip>}
          </div>

          <midwest-validate 
            ref={(el) => { this.validator = el;}}
            element={this.element}
            size={this.size}
            onIncorrect={() => this.valid = true }
            onCorrect={() => this.valid = false }
          />

          {this.description && <midwest-label size="small" underneath>{this.description}</midwest-label>}
        </label>
      </div>
      
      {this.export && <export-to-figma />}
    </Host>
  }
}