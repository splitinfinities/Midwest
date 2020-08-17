import { Component, Prop, State, Element, Method, Watch, h, Host } from '@stencil/core';
import delay from 'async-delay';
import mediumZoom from 'medium-zoom';
import { ColorThief } from './vendor/colorThief';

@Component({
  tag: 'midwest-image',
  styleUrl: 'image.css',
  assetsDirs: ['./vendor'],
  shadow: true
})
export class Picture {
  @Element() element: HTMLElement;

  @Prop({ mutable: true }) poster: string;
  @Prop({ mutable: true }) large: string;
  @Prop({ mutable: true, reflect: true }) type: "background" | "picture" = "picture";
  @Prop() width: number;
  @Prop() height: number;
  @Prop({ reflect: true }) nozoom: boolean = false;
  @Prop({ reflect: true }) block: boolean = false;
  @Prop({ mutable: true }) bg: string = "auto";
  @Prop({ mutable: true }) alt: string = "";

  @State() aspectRatio: number;
  @State() sources: Array<any> = [];
  @State() active: boolean = false;
  @State() zoom;
  @State() palette;
  @State() backgroundColor;

  figure: HTMLElement;

  componentWillLoad() {
    this.prepareSources();
    this.setBG();
    this.updateAspectRatio();
  }

  componentDidLoad() {
    this.figure = this.element.shadowRoot.querySelector('figure');
  }

  mountZoom() {
    let zoomable = this.element.shadowRoot.querySelector('img');

    this.zoom = mediumZoom(zoomable, {
      background: `${this.bg}`,
      scrollOffset: 1,
      margin: 30
    });
  }

  @Watch('poster')
  handlePosterChange() {
    this.setBG();
  }

  @Method()
  async medium() {
    return this.zoom
  }

  async in() {
    this.active = true;

    if (!this.nozoom) {
      await delay(200);
      this.mountZoom();
    }
  }

  getPictureColor() {
    if (window.Image) {
      const img = new Image(80, 80);

      img.addEventListener('load', () => {
        const cf = new ColorThief();
        this.palette = cf.getColor(img)

        this.bg = `rgb(${this.palette[0]}, ${this.palette[1]}, ${this.palette[2]})`;

        if (this.zoom) {
          this.zoom.update({
            background: this.bg
          })
        }
      }, false);

      img.src = this.poster;
      img.crossOrigin = "Anonymous";
    }
  }

  setBG() {
    if (this.bg === "auto") {
      this.getPictureColor();
    }
  }

  prepareSources() {
    const sources = this.element.querySelectorAll("source");

    let sourcesArray = [];

    sources.forEach((source) => {
      sourcesArray = [...sourcesArray, source];
      source.hidden = true
    });

    this.sources = sourcesArray;
    this.poster = this.poster ? this.poster : this.sources[this.sources.length - 1].srcset;
    this.large = this.sources[0].srcset;
  }

  updateAspectRatio() {
    this.aspectRatio = (this.height / this.width) * 100;
  }

  renderPicture() {
    if (this.active) {
      return [
        this.sources.map((source) =>
          <source srcSet={source.srcset} media={source.media ? source.media : false} />
        ),
        <img src={this.large} class="final_image" alt={this.alt} />
      ]
    }
  }

  get imageStyles() {
    return {
      "--aspect-ratio": `${this.aspectRatio}%`,
      "--width": `${this.width}px`,
      "--height": `${this.height}px`,
      "--background-color": `${this.bg}`, 
      "--background-image": `url('${this.active ? this.large : this.poster}')`
    }
  }

  render() {
    return <Host style={this.imageStyles}>
      {this.type === "picture" && <figure
          itemtype="http://schema.org/ImageObject"
          class={this.active ? 'loaded' : ''}
          onClick={() => { this.zoom && this.zoom.open() }}>
          <div class="overlay"></div>
          <picture>
            {this.renderPicture()}
          </picture>
          <div class="placeholder" style={{ "background-image": `url(${this.poster})` }} />
          <midwest-intersection element={this.element} in={this.in.bind(this)} />
        </figure>
      }

      {this.type === "background" && <midwest-intersection element={this.element} in={this.in.bind(this)} />}
    </Host>
  }
}
