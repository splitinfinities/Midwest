import { Component, Host, h, State, Watch } from '@stencil/core';

@Component({
  tag: 'midwest-docs',
  styleUrl: 'docs.css'
})
export class Docs {

  @State() data: any;
  @State() query: string;
  @State() matches: any;
  @State() groups: string[];
  @State() readmeUrl: string;

  @State() base: ThemeableColors = localStorage.getItem("base") as ThemeableColors || "red";
  @State() complement: ThemeableColors = localStorage.getItem("complement") as ThemeableColors || "red";
  @State() dark: "true"|"false" = localStorage.getItem("dark") as "true"|"false" || "false";

  inputEl!: HTMLMidwestInputElement;

  componentWillLoad() {
    this.fetchDocs()
  }

  @Watch("matches")
  handleMatches() {
    if (this.matches && this.matches.length > 0) {
      document.querySelector("html").classList.add("overflow-hidden")
      document.querySelector("body").classList.add("overflow-hidden")
    } else {
      document.querySelector("html").classList.remove("overflow-hidden")
      document.querySelector("body").classList.remove("overflow-hidden")
    }
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
      "@midwest-design/core": 'https://unpkg.com/@midwest-design/core/docs/documentation.json',
      "@midwest-design/audio": 'https://unpkg.com/@midwest-design/audio/docs/documentation.json',
      "@midwest-design/helpers": 'https://unpkg.com/@midwest-design/helpers/docs/documentation.json',
      "@midwest-design/device": 'https://unpkg.com/@midwest-design/device/docs/documentation.json',
      "@midwest-design/media": 'https://unpkg.com/@midwest-design/media/docs/documentation.json',
      "@midwest-design/motion": 'https://unpkg.com/@midwest-design/motion/docs/documentation.json',
      "@midwest-design/export-to-figma": 'https://unpkg.com/@midwest-design/export-to-figma/docs/documentation.json'
    };

    const promises = Object.keys(docs).map(async (key) => {
      const response = await fetch(docs[key]);
      let json = await response.json();
      json = {...json, "package": key}
      return json
    })

    const data = await Promise.all(promises);

    this.data = data;
  }

  search(e) {
    this.query = e.detail;

    if (this.data && this.query && this.query.length >= 1) {
      const matches = this.data.map((npmPackage) => {
        return npmPackage.components.filter(component => {
          return component.tag.includes(this.query)
        }).map(component => {
          // `https://unpkg.com/${npmPackage.package}/docs/components/${component.tag}/readme.md`
          const relativePath = component.filePath.replace("./src/components/", "").replace(/[^/]*$/.exec(component.filePath)[0], "");
          component["relativePath"] = relativePath;
          component["readme"] = `https://unpkg.com/${npmPackage.package}/docs/components/${relativePath}/readme.md`;
          component["package"] = npmPackage.package;
          return component;
        });
      }).filter(Boolean).filter(e => e.length !== 0).flat().slice(0, 30)

      this.matches = matches;
      this.groups = [...new Set(this.matches.map(e => e.package).filter(Boolean))] as string[]
      if (this.matches && this.matches[0].readme) {
        this.readmeUrl = this.matches[0].readme
      } else {
        this.readmeUrl = undefined;
      }
    } else {
      this.matches = undefined;
      this.groups = undefined;
      this.readmeUrl = undefined;
    }
  }

  get isEmpty() {
    return (!this.groups || this.groups.length === 0) && (!this.matches || this.matches.length === 0)
  }

  render() {
    return <Host class="block sticky top-0 z-50 -mt-4 -mx-4 bg-white dm:bg-black bg-opacity-75" style={{"backdrop-filter": "blur(4px)"}}>
      <div class="flex items-center justify-between p-4">
        <midwest-input type="search" size="large" inline required={false} autofocus onUpdate={this.search.bind(this)} placeholder="Search Midwest Documentation" class="w-full mr-4" ref={e => { this.inputEl = e; }} />
        <div class="flex items-center">
          
          <midwest-switch class="ml-4" tabindex="-1" tabIndex={-1} checked={this.dark === "true"} changeTheme onUpdate={this.changeDarkTheme.bind(this)}>
            <p slot="yes" class="text-black dm:text-white">Dark</p>
            <p slot="no" class="text-black dm:text-white">Light</p>
          </midwest-switch>

          <midwest-select class="ml-4 w-48" tabindex="-1" changeTheme="base" noAvatars onUpdate={this.changeBaseTheme.bind(this)}>
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

          <midwest-select class="ml-4 w-48" tabindex="-1" changeTheme="complement" noAvatars onUpdate={this.changeComplementTheme.bind(this)}>
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

      {this.matches && this.groups && <div class="absolute w-full db bg-white dm:bg-black overflow-auto flex border-t border-b border-base-1 dm:border-base-10 bg-white" style={{"max-height": "calc(100vh - 4rem)", "height": "100vh"}}>
        <div class="w-96 h-full sticky top-0 border-r border-base-1 dm:border-base-10 overflow-auto" style={{"min-width": "24rem"}}>
          <animate-presence>
            {this.isEmpty && <div class="flex w-full h-full items-center justify-center">
              <ion-icon name="sad" class="text-base-4 dm:text-base-11 mb-24" style={{"font-size": "10rem"}} />
            </div>}
            {this.groups.map((group) => <midwest-item-group title={group} name={group}>
              {this.matches.map(match => (group === match.package) && <midwest-item 
                onFocus={() => { this.readmeUrl = match.readme }}
                tag="button"
                class="p-4">
                <h4 class="mb-0">{match.tag}</h4>
              </midwest-item>
              )}
            </midwest-item-group>)}
          </animate-presence>
        </div>
        <div class="text-black dm:text-white overflow-auto h-full p-12 bg-base-1 dm:bg-base-12 w-full flex items-center justify-center">
          {this.isEmpty && <copy-wrap align="center" class="mb-24">
            <h1 class="mb-4 text-base-6"><midwest-long-shadow>Oops! We couldn't find anything matching "{this.query}"</midwest-long-shadow></h1>
            <h3 class="text-base-4 dm:text-base-8">Maybe refine your search?</h3>
          </copy-wrap>}
          {!this.isEmpty && this.readmeUrl && <div class="text-black dm:text-white overflow-auto h-full p-12 bg-base-1 dm:bg-base-12 w-full">
            <animate-presence>
              <midwest-card>
                <header class="flex justify-between">
                  <h2>Documentation</h2>
                  <midwest-button tag="button" onClick={() => { this.readmeUrl = undefined; this.matches = undefined; this.inputEl.resetValue(); }}>Close</midwest-button>
                </header>
                <section>
                  <midwest-markdown src={this.readmeUrl} />
                </section>
              </midwest-card>
            </animate-presence>
          </div>}
        </div>
      </div>}
    </Host>
  }

}
