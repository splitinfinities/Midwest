import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'midwest-docs',
  styleUrl: 'docs.css'
})
export class Docs {

  @State() data: any;
  @State() matches: any;

  @State() base: ThemeableColors = localStorage.getItem("base") as ThemeableColors || "red";
  @State() complement: ThemeableColors = localStorage.getItem("complement") as ThemeableColors || "red";
  @State() dark: "true"|"false" = localStorage.getItem("dark") as "true"|"false" || "false";

  componentWillLoad() {
    this.fetchDocs()
  }

  changeBaseTheme(e) {
    this.base = e.detail;
    localStorage.setItem("base", this.base)
  }

  changeComplementTheme(e) {
    this.complement = e.detail;
    localStorage.setItem("complement", this.complement)
  }

  changeDarkTheme(e) {
    this.dark = e.detail.checked ? "true" : "false";
    localStorage.setItem("dark", this.dark)
  }
  
  async fetchDocs() {
    const docs = {
      "core": 'https://unpkg.com/@midwest-design/core/dist/docs/documentation.json'
    };

    const promises = Object.keys(docs).map(async (key) => {
      const response = await fetch(docs[key]);
      const json = await response.json();
      console.log(json);
      return json
    })

    const data = await Promise.all(promises);

    console.log(data);

    this.data = data;
  }

  search(e) {
    if (this.data && e.detail) {
      const matches = this.data.components.filter(component => {
        return component.tag.includes(e.detail)
      });

      this.matches = matches;
    } else {
      this.matches = undefined;
    }
  }

  render() {
    return <Host class="block sticky top-0 z-50 -mt-8 -mx-8 bg-black bg-opacity-75" style={{"backdrop-filter": "blur(4px)"}}>
      <div class="flex items-center justify-between p-4">
        <midwest-input type="search" size="large" required={false} autofocus onUpdate={this.search.bind(this)} placeholder="Search Midwest Documentation" class="w-full mr-4" />
        <div class="flex items-center p-4">
          
          <midwest-switch class="m-4" tabindex="-1" checked={this.dark === "true"} changeTheme onUpdate={this.changeDarkTheme.bind(this)}>
            <p slot="yes" class="text-white dm:text-white">Dark</p>
            <p slot="no" class="text-white dm:text-white">Light</p>
          </midwest-switch>

          <midwest-select class="m-4 w-48" tabindex="-1" changeTheme="base" noAvatars onUpdate={this.changeBaseTheme.bind(this)}>
            <midwest-item value="red" checked={this.base === "red"}>Red</midwest-item>
            <midwest-item value="orange" checked={this.base === "orange"}>Orange</midwest-item>
            <midwest-item value="gold" checked={this.base === "gold"}>Gold</midwest-item>
            <midwest-item value="yellow" checked={this.base === "yellow"}>Yellow</midwest-item>
            <midwest-item value="lime" checked={this.base === "lime"}>Lime</midwest-item>
            <midwest-item value="green" checked={this.base === "green"}>Green</midwest-item>
            <midwest-item value="teal" checked={this.base === "teal"}>Teal</midwest-item>
            <midwest-item value="cyan" checked={this.base === "cyan"}>Cyan</midwest-item>
            <midwest-item value="blue" checked={this.base === "blue"}>Blue</midwest-item>
            <midwest-item value="indigo" checked={this.base === "indigo"}>Indigo</midwest-item>
            <midwest-item value="violet" checked={this.base === "violet"}>Violet</midwest-item>
            <midwest-item value="magenta" checked={this.base === "magenta"}>Magenta</midwest-item>
            <midwest-item value="pink" checked={this.base === "pink"}>Pink</midwest-item>
            <midwest-item value="gray" checked={this.base === "gray"}>Gray</midwest-item>
          </midwest-select>

          <midwest-select class="m-4 w-48" tabindex="-1" changeTheme="complement" noAvatars onUpdate={this.changeComplementTheme.bind(this)}>
            <midwest-item value="red" checked={this.complement === "red"}>Red</midwest-item>
            <midwest-item value="orange" checked={this.complement === "orange"}>Orange</midwest-item>
            <midwest-item value="gold" checked={this.complement === "gold"}>Gold</midwest-item>
            <midwest-item value="yellow" checked={this.complement === "yellow"}>Yellow</midwest-item>
            <midwest-item value="lime" checked={this.complement === "lime"}>Lime</midwest-item>
            <midwest-item value="green" checked={this.complement === "green"}>Green</midwest-item>
            <midwest-item value="teal" checked={this.complement === "teal"}>Teal</midwest-item>
            <midwest-item value="cyan" checked={this.complement === "cyan"}>Cyan</midwest-item>
            <midwest-item value="blue" checked={this.complement === "blue"}>Blue</midwest-item>
            <midwest-item value="indigo" checked={this.complement === "indigo"}>Indigo</midwest-item>
            <midwest-item value="violet" checked={this.complement === "violet"}>Violet</midwest-item>
            <midwest-item value="magenta" checked={this.complement === "magenta"}>Magenta</midwest-item>
            <midwest-item value="pink" checked={this.complement === "pink"}>Pink</midwest-item>
            <midwest-item value="gray" checked={this.complement === "gray"}>Gray</midwest-item>
          </midwest-select>
        </div>
      </div>

      {this.matches && <div class="absolute w-100 db bg-black overflow-auto" style={{"max-height": "50vh"}}>
        {this.matches.map(match => <midwest-item tag="a" href={`https://github.com/splitinfinities/Stellar/tree/core/${match.filePath.substr(0, match.filePath.lastIndexOf("/"))}`} class="pb3" style={{"--item-size" : "100px"}}>
          <h3>{match.tag}</h3>
        </midwest-item>)}
      </div>}
    </Host>
  }

}
