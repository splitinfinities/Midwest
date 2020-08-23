import { Component, Prop, State, Watch, h } from '@stencil/core';
import { fetchHackerNews, fetchDribbble, fetchGithub, fetchDesignerNews } from './lib';
import '@midwest-design/core';

@Component({
  tag: 'display-feed',
  styleUrl: 'display-feed.css'
})
export class DisplayFeed {
  @Prop() type: string = "midwest";
  @Prop({mutable: true}) filter: string|"latest"|"popular" = "latest";
  @Prop() icon: string = "logo-github";
  @Prop() iconColor: string = "blue";
  @State() data: { date: string; title: string; description: string; image: string; link: string; votes: number; comments: number; }[];
  @State() title: string = "Midwest";
  @State() displayAccessButton: boolean = false;

  componentWillLoad() {
    this.title = this.type.replace("-", " ")
  }

  @Watch('data')
  observeDataChange(value) {
    localStorage.setItem(`${this.type}-${this.filter}`, JSON.stringify(value))
  }

  componentDidLoad() {
    this.handleMethod()
  }

  @Watch("filter")
  handleMethod() {
    const caller = {
      "designer-news": "fetchDesignerNews",
      "github": "fetchGithub",
      "dribbble": "fetchDribbble",
      "hacker-news": "fetchHackerNews",
    }[this.type];

    this[caller]()
  }

  async fetchDesignerNews() {
    const data = await fetchDesignerNews(this.filter);
    this.data = [...data];
  }

  async fetchGithub() {
    const data = await fetchGithub(this.filter);
    this.data = [...data];
  }

  async fetchDribbble() {
    const data = await fetchDribbble(this.filter);
    this.data = [...data];
  }

  async fetchHackerNews() {
    const data = await fetchHackerNews(this.filter);
    this.data = [...data];
  }

  renderLoading () {
    return <copy-wrap class="loading">
      <midwest-progress indeterminate />
      <p>One sec...</p>
    </copy-wrap>
  }

  renderStats (item) {
    return <midwest-grid columnGap={1} columnWidth={150} class="text-center">
      { item.stars && <h6 class="text-base-11 dm:text-base-1">{item.stars} <br /> Stars</h6>}
      { item.watchers && <h6 class="text-base-11 dm:text-base-1">{item.watchers} <br /> Watchers</h6>}
      { item.forks && <h6 class="text-base-11 dm:text-base-1">{item.forks} <br /> Forks</h6>}
      { item.votes && <h6 class="text-base-11 dm:text-base-1">{item.votes} <br /> Votes</h6>}
      { item.comments && <h6 class="text-base-11 dm:text-base-1">{item.comments} <br /> Comments</h6>}
    </midwest-grid>
  }

  renderImage(item) {
    return <midwest-image bg="white" width={item.image.width || 800} height={item.image.height || 600} poster={item.image.small} nozoom>
      <source srcSet={item.image.big} media="(min-width:1023px)" />
      <source srcSet={item.image.medium} media="(min-width:640px)" />
      <source srcSet={item.image.small} media="(max-width:640px)" />
    </midwest-image>
  }

  renderItem (item) {
    const cardClass = "hover:bg-base-0 bg-white dm:bg-base-11 hover:dm:bg-base-10 overflow-hidden"
    const tagClass = "mb-2 inline-block bg-base-1 dm:bg-base-10"

    if (item.image) {
      return <midwest-card tag="a" href={item.link} class={cardClass} style={{"--background": "transparent", "--background-active": "rgba(0, 0, 0, 0.05)", "--overflow": "hidden"}}>
        <header class="mb-2 flush p-0 flex overflow-hidden">
          { this.renderImage(item) }
        </header>
        <section>
          <midwest-tag class={tagClass}>
            <midwest-time value={item.date} relative />
          </midwest-tag>
          <h3 class="text-black dm:text-white">{item.title}</h3>
        </section>
      </midwest-card>
    } else {
      return <midwest-card tag="a" href={item.link} class={cardClass} style={{"--background": "transparent", "--background-active": "rgba(0, 0, 0, 0.05)", "--overflow": "hidden"}}>
        <section>
          <copy-wrap>
            <midwest-tag class={tagClass}>
              <midwest-time value={item.date} relative />
            </midwest-tag>
            <h3 class="text-black dm:text-white">{item.title}</h3>
            {item.description && <p class="text-black dm:text-white">{item.description}</p>}
          </copy-wrap>
        </section>
        <footer class="dm:bg-base-12 bg-base-1 w-full max-w-none">
          {this.renderStats(item)}
        </footer>
      </midwest-card>
    }
  }

  renderList () {
    return (
      <section class="list bg-white dm:bg-black p-4">
        { !this.data && !this.displayAccessButton && this.renderLoading() }
        { this.data && <midwest-grid class={this.type} cols={1} noresponsive>
          <animate-presence>
            {this.data.map(item => <animate-presence>{this.renderItem(item)}</animate-presence>)}
          </animate-presence>
        </midwest-grid> }
      </section>
    )
  }

  render () {
    return <midwest-card padding="none">
      <header class={`${this.type} py-4 px-3 flex justify-between items-center bg-white dm:bg-black sticky z-20`} style={{top: "5.5rem"}}>
        <div class="flex items-center">
          <ion-icon name={this.icon} class={`text-5xl mr-4 text-${this.iconColor}-6 dm:text-${this.iconColor}-6`} />
          <h4 class="text-black dm:text-white uppercase">{this.title}</h4>
        </div>
        <midwest-button ghost onClick={() => { this.filter = this.filter === "latest" ? "popular" : "latest"; }} class="mr-2"><ion-icon name="refresh-circle" slot="icon" class="right" />{this.filter}</midwest-button>
      </header>
      {this.renderList()}
    </midwest-card>
  }
}
