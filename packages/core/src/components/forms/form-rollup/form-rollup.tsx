import { Component, Host, h, Prop, State, Method, Watch } from '@stencil/core';
import pluralize from 'pluralize';

@Component({
  tag: 'midwest-form-rollup',
  styleUrl: 'form-rollup.css'
})
export class FormRollup {

  @Prop() for: string;
  @Prop() verbiage: string = "item";

  @Prop() fallback: string = "Choose something";
  @Prop() placeholder: string;
  @Prop() appendCopy: string;
  @Prop() count: number = 3;
  @Prop() show: boolean = true;
  @Prop() noAvatars: boolean;

  @Prop() options: HTMLMidwestItemElement[];
  @State() items: HTMLMidwestItemElement[];
  @State() checked: HTMLMidwestItemElement[];

  @State() ie: boolean = (document.querySelector("html").getAttribute("mode") === "ie")

  boundUpdate: any;

  componentWillLoad() {
    if(this.options) {
      this.handleOptions();
    } else {
      this.items = Array.from(document.querySelectorAll(`midwest-item[name="${this.for}"]`));
    }

    this.boundUpdate = this.update.bind(this);
    this.update();
  }

  @Watch('options') 
  handleOptions () {
    this.items = this.options;
    this.update()
  }

  @Method()
  async update() {
    this.items.forEach((item) => {
      item.removeEventListener('selectionChanged', this.boundUpdate)
      item.addEventListener('selectionChanged', this.boundUpdate)
    });

    this.checked = [...this.items.filter((e) => e.checked)];
  }

  showCheckedContent(index = 0) {
    const fallback = (this.ie) ? this.checked[index].querySelector("midwest-label") : this.checked[index];
    return this.checked[index].content || fallback.textContent.replace('Selected', '').replace('Not selected', '');
  }

  renderEmpty() {
    return <midwest-label class="empty">
      {!this.placeholder ? this.fallback : this.placeholder}
    </midwest-label>
  } 

  renderSingleAvatar() {
    const checked = this.checked[0];

    return <midwest-avatar 
      name={checked.avatar} 
      src={checked.avatarSrc} 
      shape={checked.avatarShape} 
      size={"small"} 
      noTooltip 
      tabIndex={-1} 
    />;
  } 

  renderMultipleAvatars() {
    return <midwest-group 
      overflow={this.checked.length > this.count && this.show} 
      count={this.count} 
      size={"small"} 
      extras={this.checked.length - this.count} 
      class={`count-${this.checked.length}`}
      verbiage={this.verbiage}
      avatars
      >
      {this.checked.map((checked, index) => (index < 3) && <midwest-avatar 
        name={checked.avatar} 
        src={checked.avatarSrc} 
        shape={checked.avatarShape} 
        size={"small"} 
        noTooltip 
        tabIndex={-1} 
      />)}
    </midwest-group>;
  }

  render() {
    return <Host>
      {this.checked.length >= 1 && !this.noAvatars && this.renderMultipleAvatars()}

      {!this.show && this.checked.length >= 1 && <midwest-label class="multiple">
        {this.checked.length} {pluralize(this.verbiage, this.checked.length)}
      </midwest-label>}

      {this.show && this.checked.length === 1 && <midwest-label class="multiple">
        {this.showCheckedContent()}
      </midwest-label>}
      
      {this.show && this.checked.length === (this.count - 1) && <midwest-label class="multiple">
        {this.showCheckedContent()} and {this.showCheckedContent(1)}
      </midwest-label>}

      {this.show && this.checked.length === this.count && <midwest-label class="multiple">
        {this.showCheckedContent()}, {this.showCheckedContent(1)}, and {this.showCheckedContent(2)}
      </midwest-label>}

      {this.checked.length === 0 && this.renderEmpty()}
      
      {this.appendCopy && <midwest-label class="append">{this.appendCopy}</midwest-label>}
    </Host>
  }

}
