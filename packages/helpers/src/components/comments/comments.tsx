import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'midwest-comments',
  styleUrl: 'comments.css',
  shadow: true,
})
export class Comments {
  @State() comments: any;

  render() {
    return (
      <section>
        <slot></slot>
      </section>
    );
  }
}
