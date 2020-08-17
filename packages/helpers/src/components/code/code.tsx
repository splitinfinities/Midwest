import { Component, Element, State, Prop, Method, h, Watch } from '@stencil/core';
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import ezClipboard from 'ez-clipboard';

@Component({
  tag: 'midwest-code',
  styleUrl: 'code.css'
})
export class Code {
  @Element() element: HTMLElement;
  @Prop({ reflect: true, mutable: true }) language: string = "html";
  @Prop() simple: boolean = false;
  @Prop() codeString: string;
  @Prop() copy: boolean = true;
  @State() copied: boolean = false;
  @Prop({ mutable: true }) expanded: boolean = false;
  @Prop() expandable: boolean = false;
  @State() randomName: number = Math.round((Math.random() * 10000));
  @State() observer: MutationObserver;

  @Prop() preview: boolean = true;
  @Prop() feature: boolean = false;
  @Prop({ reflect: true }) dark: boolean = false;

  @State() code: string;
  @State() raw: string;

  componentWillLoad() {
    this.getCode()
  }

  componentDidLoad() {
    this.highlight();

    if (window && window.MutationObserver) {
      var observer = new MutationObserver((mutations) => {
        mutations.forEach(() => {
          this.getCode()
        });
      });

      observer.observe(this.element, { attributes: true, childList: true, subtree: true });
    }
  }

  componentWillUpdate() {
    this.getCode()
  }

  componentDidUpdate() {
    this.highlight();
  }

  @Watch('codeString')
  handleCodeStringUpdate() {
    this.getCode()
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  @Method()
  async highlight() {
    var block = this.element.querySelector('code');
    Prism.highlightElement(block, false);
  }

  @Method()
  async result() {
    function htmlDecode(input) {
      var doc = new DOMParser().parseFromString(input, "text/html");
      return doc.documentElement.textContent;
    }
    return htmlDecode(this.code);
  }

  @Method()
  async clipboard() {
    const copyText = await this.result();
    ezClipboard.copyPlain(copyText);
  }

  @Method()
  async setCode(code) {
    this.code = code
  }

  getCode() {
    if (this.codeString) {
      this.raw = this.codeString
      this.code = this.codeString.replace(/(?:\r\n|\r|\n)/g, '').replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    } else {
      let code: any = this.element.querySelector('template');

      if (code) {
        const language: any = Array.from(code.classList).filter((s: any) => s.includes('language-'))

        if (language.length === 1) {
          this.language = language[0].substr(9)
        }


        if (!code.innerHTML) {
          code = Array.from(code.children).map((node: any) => {
            return node.outerHTML
          }).join()
        } else {
          code = code.innerHTML
        }

        this.raw = code;

        this.code = code.replace(/(?:\r\n|\r|\n)/g, '<br />').replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
      }
    }
  }

  renderPreview() {
    return <section class="preview flush">
      <div class="result" innerHTML={this.raw} />
    </section>
  }

  renderCode() {
    return <pre aria-label={`The ${this.language} code`} tabindex={0}>
      <code class={`language-${this.language}`} innerHTML={this.code}></code>
      <div class="hidden"><slot><template><p>There's no code here!</p></template></slot></div>
    </pre>;
  }

  render() {
    if (this.simple) {
      return this.renderCode();
    } else {
      return <midwest-card>
        {this.feature && <header><slot name="feature" /><slot name="property" /></header>}
        {this.preview && this.renderPreview()}
        <footer class="code">
          {this.renderCode()}
        </footer>
      </midwest-card>
    }
  }
}