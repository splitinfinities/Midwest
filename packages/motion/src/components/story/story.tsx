import { Component, Prop } from '@stencil/core';
import parallaxis from 'parallaxis';

@Component({
  tag: 'midwest-story'
})

export class Story {
  @Prop() target: string = "story";

  componentWillLoad() {
    parallaxis({ className: this.target })
  }
}
