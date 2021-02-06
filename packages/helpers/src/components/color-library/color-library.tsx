import { Component, h, Prop, Host } from '@stencil/core';
import { colors } from '@midwest-design/common';

@Component({
  tag: 'midwest-color-library',
  styleUrl: 'color-library.css'
})
export class ColorLibrary {

  @Prop() colors: string;
  @Prop() shape: string;

  _colors: {
    "white": string,
    "black": string,
    "gray": string[],
    "red": string[],
    "orange": string[],
    "yellow": string[],
    "lime": string[],
    "green": string[],
    "teal": string[],
    "cyan": string[],
    "blue": string[],
    "indigo": string[],
    "violet": string[],
    "magenta": string[],
    "pink": string[]
  } = colors

  componentWillLoad() {
    if (typeof this.colors === "string" && this.colors.constructor.name === "String") {
      this._colors = JSON.parse(this.colors);
    }
  }

  hexStyle = color => `fw6 ttu tc ${color === "base" ? "black" : "base"} aspect-ratio--object flex items-center justify-center`;

  renderColorPallette(color) {
    const range = this._colors[color];

    return [
      <midwest-grid cols="6" class="pa4">
        {range.map((code, index) => {
          return (
            <midwest-card padding="tiny" class={`theme-${color} s-${this.shape}`} style={{ "--background": `var(--theme-${index})`, "--border": "none" }}>
              <section class="aspect-ratio aspect-ratio--1x1">
                <h6 class={this.hexStyle(`theme-${index}`)}>{code}</h6>
              </section>
            </midwest-card>
          )
        })
        }
      </midwest-grid>
    ]
  }

  render() {
    return (
      <Host>
        <midwest-grid class="pa4">
          {this._colors.white && <midwest-card padding="tiny" class={`s-${this.shape}`} style={{ "--background": `var(--white)`, "--border": "none" }}>
            <section class="aspect-ratio aspect-ratio--1x1 flex items-center">
              <h6 class={this.hexStyle(`white`)}>{this._colors.white}</h6>
            </section>
          </midwest-card>}
          {this._colors.black && <midwest-card padding="tiny" class={`s-${this.shape}`} style={{ "--background": `var(--black)`, "--border": "none" }}>
            <section class="aspect-ratio aspect-ratio--1x1 flex items-center">
              <h6 class={this.hexStyle(`black`)}>{this._colors.black}</h6>
            </section>
          </midwest-card>}
        </midwest-grid>
        {this._colors.gray && this.renderColorPallette("gray")}
        {this._colors.red && this.renderColorPallette("red")}
        {this._colors.orange && this.renderColorPallette("orange")}
        {this._colors.yellow && this.renderColorPallette("yellow")}
        {this._colors.lime && this.renderColorPallette("lime")}
        {this._colors.green && this.renderColorPallette("green")}
        {this._colors.teal && this.renderColorPallette("teal")}
        {this._colors.cyan && this.renderColorPallette("cyan")}
        {this._colors.blue && this.renderColorPallette("blue")}
        {this._colors.indigo && this.renderColorPallette("indigo")}
        {this._colors.violet && this.renderColorPallette("violet")}
        {this._colors.magenta && this.renderColorPallette("magenta")}
        {this._colors.pink && this.renderColorPallette("pink")}
      </Host>
    );
  }
}
