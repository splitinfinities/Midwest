import { Component, State, Element, h, Host } from '@stencil/core'
import "ionicons"

@Component({
  tag: 'midwest-asset-library'
})
export class AssetLibrary {
  @Element() element: HTMLElement;

  @State() icons: any = []
  @State() kind: number = 0;

  componentWillLoad() {
    this.fetchIcons()
  }

  async fetchIcons() {
    const response = await fetch("https://unpkg.com/ionicons/dist/ionicons.json")
    const data = await response.json()

    this.icons = data.icons
  }

  render () {
    return <Host class="overflow-auto db" style={{"max-height": "75vh"}}>
      <midwest-grid style={{"--grid-width": "125px"}}>
        {this.icons.map((icon) => {
          return (
            <midwest-code codeString={`<midwest-asset name="${icon.icons[this.kind]}" class="fs4 center w-50"></midwest-asset>`} />
          )
        })}
      </midwest-grid>
    </Host>
  }
}
