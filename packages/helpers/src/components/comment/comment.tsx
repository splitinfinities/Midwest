import { Component, Element, State, Prop, h } from '@stencil/core';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-comment',
  styleUrl: 'comment.css',
  shadow: true,
})
export class Comment {
  @Element() element: HTMLElement;

  @Prop({ mutable: true }) content: any = 'Loading...';
  @Prop({ mutable: true }) name: any = 'Loading...';
  @Prop({ reflect: true, mutable: true }) dark: boolean = false;
  @State() empty: boolean = false;

  componentWillLoad() {
    darkMode(this);
    this.empty = this.element.querySelectorAll('midwest-comment').length === 0;

    if (this.element.querySelector('midwest-avatar')) {
      // @ts-ignore
      this.element.querySelector('midwest-avatar').tabIndex = -1;
      this.name = (this.element.querySelector('midwest-avatar') as any).name;
    }

    if (this.element.querySelector('[slot="content"]')) {
      this.content = this.element.querySelector('[slot="content"]').textContent.trim();
    }
  }

  render() {
    return (
      <div class={`comment ${this.empty ? 'empty' : ''}`} aria-label={`Comment by ${this.name}: ${this.content}`} tabindex={0}>
        <div class="content">
          <slot name="avatar" />
          <slot name="content" />
        </div>
        <div class={`thread`} aria-label={`In reply to  ${this.name} saying ${this.content}`}>
          <slot></slot>
        </div>
      </div>
    );
  }
}
