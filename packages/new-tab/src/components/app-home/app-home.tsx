import { Component, h, State } from '@stencil/core';
import '@midwest-design/core';

@Component({
  tag: 'app-home'
})
export class AppHome {

  @State() base: ThemeableColors = localStorage.getItem("base") as ThemeableColors || "red";
  @State() complement: ThemeableColors = localStorage.getItem("complement") as ThemeableColors || "red";
  @State() dark: "true"|"false" = localStorage.getItem("dark") as "true"|"false" || "false";

  render() {
    return <midwest-theme dark={this.dark === "true"} base={this.base} complement={this.complement} body>
      <midwest-layout size="flush" class="p-4" padding="none">
        <midwest-docs class="mb-8 block" />

        <midwest-grid columnGap={1} columnWidth={250}>
          <display-feed type="designer-news" icon="logo-designernews" iconColor="blue" />
          <display-feed type="hacker-news" icon="logo-hackernews" iconColor="orange" />
          <display-feed type="github" iconColor="black" />
          <display-feed type="dribbble" icon="logo-dribbble" iconColor="pink" />
        </midwest-grid>
        <midwest-starscape />
      </midwest-layout>
    </midwest-theme>
  }
}
