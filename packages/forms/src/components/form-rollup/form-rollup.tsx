import { Component, Host, h, Prop, State, Method, Watch, Event, EventEmitter, Fragment } from '@stencil/core';
import pluralize from 'pluralize';

@Component({
  tag: 'midwest-form-rollup',
  styleUrl: 'form-rollup.css',
})
export class FormRollup {
  @Prop() for: string;
  @Prop() verbiage: string = 'item';

  @Prop() fallback: string = 'Choose something';
  @Prop() placeholder: string;
  @Prop() appendCopy: string;
  @Prop() count: number = 3;
  @Prop() show: boolean = true;
  @Prop() noAvatars: boolean;
  @Prop() view: string;

  @Prop() options: HTMLMidwestItemElement[];
  @State() items: HTMLMidwestItemElement[];
  @State() checked: HTMLMidwestItemElement[];

  @Event() removeItem: EventEmitter;

  boundUpdate: any;

  get tagView() {
    return this.view === 'tags';
  }

  componentWillLoad() {
    if (this.options) {
      this.handleOptions();
    } else {
      this.items = Array.from(document.querySelectorAll(`midwest-item[name="${this.for}"]`));
    }

    this.boundUpdate = this.update.bind(this);
    this.update();
  }

  @Watch('options')
  handleOptions() {
    this.items = this.options;
    this.update();
  }

  @Method()
  async update() {
    this.items.forEach(item => {
      item.removeEventListener('selectionChanged', this.boundUpdate);
      item.addEventListener('selectionChanged', this.boundUpdate);
    });

    this.checked = [...this.items.filter(e => e.checked)];
  }

  showCheckedContent(index = 0) {
    const fallback = this.checked[index];
    return this.checked[index].content || fallback.textContent.replace('Selected', '').replace('Not selected', '');
  }

  renderEmpty() {
    return <midwest-label class="empty cursor-pointer">{!this.placeholder ? this.fallback : this.placeholder}</midwest-label>;
  }

  renderSingleAvatar() {
    const checked = this.checked[0];

    return <midwest-avatar name={checked.avatar} src={checked.avatarSrc} shape={checked.avatarShape} size={'small'} noTooltip tabIndex={-1} />;
  }

  renderMultipleAvatars() {
    return (
      <midwest-group
        overflow={this.checked.length > this.count && this.show}
        count={this.count}
        size={'small'}
        extras={this.checked.length - this.count}
        class={`count-${this.checked.length}`}
        verbiage={this.verbiage}
        avatars
      >
        {this.checked.map(
          (checked, index) => index < 3 && <midwest-avatar name={checked.avatar} src={checked.avatarSrc} shape={checked.avatarShape} size={'small'} noTooltip tabIndex={-1} />,
        )}
      </midwest-group>
    );
  }

  remove(item) {
    this.removeItem.emit({ item });
  }

  renderTags() {
    return (
      <div class="tags">
        {this.checked.map(checked => (
          <midwest-tag pill color="gray">
            <midwest-avatar slot="avatar" shape="circle" size="small" src={checked.avatarSrc} name={checked.content} noTooltip tabIndex={-1} />
            {checked.content}
            <midwest-button
              slot="action"
              tag="span"
              onClick={() => this.remove(checked)}
              ghost
              invert
              style={{ '--color': 'var(--gray-10)', '--active-color': 'var(--black)' }}
              iconOnly
            >
              <ion-icon name="close-circle-bold" slot="icon" />
            </midwest-button>
          </midwest-tag>
        ))}
      </div>
    );
  }

  renderLabels() {
    return (
      <Fragment>
        {this.checked.length >= 1 && !this.noAvatars && this.renderMultipleAvatars()}

        {!this.show && this.checked.length >= 1 && (
          <midwest-label class="multiple cursor-pointer">
            {this.checked.length} {pluralize(this.verbiage, this.checked.length)}
          </midwest-label>
        )}

        {this.show && this.checked.length === 1 && <midwest-label class="multiple cursor-pointer" innerHTML={this.showCheckedContent()} />}

        {this.show && this.checked.length === this.count - 1 && (
          <midwest-label class="multiple cursor-pointer" innerHTML={`${this.showCheckedContent()} and ${this.showCheckedContent(1)}`} />
        )}

        {this.show && this.checked.length === this.count && (
          <midwest-label class="multiple cursor-pointer" innerHTML={`${this.showCheckedContent()}, ${this.showCheckedContent(1)}, and ${this.showCheckedContent(2)}`} />
        )}
      </Fragment>
    );
  }

  render() {
    return (
      <Host>
        {this.tagView && this.checked.length > 0 && this.renderTags()}
        {!this.tagView && this.renderLabels()}
        {!this.tagView && this.checked.length === 0 && this.renderEmpty()}
        {this.appendCopy && <midwest-label class="append cursor-pointer">{this.appendCopy}</midwest-label>}
      </Host>
    );
  }
}
