import { Component, h } from '@stencil/core';
import '@midwest-design/core';

@Component({
  tag: 'app-home'
})
export class AppHome {

  render() {
    return (
      <midwest-layout size="flush" class="p-8" padding="none">
        <midwest-docs class="mb-8 block" />

        <midwest-grid columnGap={1} columnWidth={250}>
          <display-feed type="designer-news" />
          <display-feed type="hacker-news" />
          <display-feed type="github" />
          <display-feed type="dribbble" />
        </midwest-grid>
        <midwest-starscape />
      </midwest-layout>
    );
  }
}
