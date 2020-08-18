import { Component, State, Prop, Watch, Element, h } from '@stencil/core';
import showdown from 'showdown';

@Component({
  tag: 'midwest-markdown',
  styleUrl: 'markdown.css'
})
export class Markdown {
  @Element() element: HTMLElement;

  /**
   * Used to reference an external markdown file
   *
   * @type string
   * @memberof Markdown
   */
  @Prop() src: string;

  /**
   * Used to set
   *
   * @type {string}
   * @memberof Markdown
   */
  @Prop({ mutable: true }) codeString: string;
  @Prop() flavor: "github" | "original" | "vanilla" = "vanilla";

  @Prop() editable: boolean = false;
  @Prop() loading: boolean = false;

  @State() converted: string;
  @State() raw: string;

  @State() showdown: any = new showdown.Converter();

  componentWillLoad() {
    this.showdown.setFlavor(this.flavor)
    this.showdown.setOption('omitExtraWLInCodeBlocks', true)
    this.showdown.setOption('ghCompatibleHeaderId', true)
    this.showdown.setOption('tables', true)
    this.showdown.setOption('tablesHeaderId', true)
    this.showdown.setOption('tasklists', true)
    this.showdown.setOption('emoji', true)
    this.convert()
  }

  @Watch('codeString')
  onCodeStringChange() {
    this.convert()
  }

  @Watch('src')
  onSrcChange() {
    this.convert()
  }

  convert() {
    if (this.src) {
      this.fetchMarkdown()
    } else if (this.codeString) {
      this.raw = this.codeString
      this.convertMarkdown();
    } else {
      this.getMarkdown();
      this.convertMarkdown();
    }
  }

  getMarkdown() {
    if (this.element.querySelector('template')) {
      const raw = this.element.querySelector('template').innerHTML;
      this.raw = raw.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    } else {
      throw new Error("Please place a template in midwest-markdown, or use the src attribute to load a markdown file from a url.")
    }
  }

  convertMarkdown() {
    let converted = this.showdown.makeHtml(this.raw)

    converted = this.replaceAll(converted, "<pre><code>", "<midwest-code><template>")
    converted = this.replaceAll(converted, "</pre></code>", "</template></midwest-code>")

    this.converted = converted;
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  async fetchMarkdown() {
    this.loading = true;
    const response = await fetch(this.src);
    const text = await response.text();

    this.raw = text;
    this.convertMarkdown();
    this.loading = false;
  }

  render() {
    if (this.loading) {
      return <midwest-progress indeterminate class="text-5xl" />
    }
    
    if (this.editable) {
      return <midwest-card>
        <section>
          <copy-wrap full class="wrap" innerHTML={this.converted} />
        </section>
        <footer class="bg-theme-base0">
          <midwest-input type="textarea" default={this.codeString} onUpdate={(e) => { this.codeString = e.detail; this.convert(); }} />
        </footer>
      </midwest-card>
    } else {
      return <copy-wrap full class="wrap" innerHTML={this.converted} />
    }
  }
}
