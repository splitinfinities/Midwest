import { Component, Prop, State, Watch, h } from '@stencil/core';
import { fetchHackerNews, fetchDribbble, fetchGithub, fetchDesignerNews } from './lib';
import '@midwest-design/core';

@Component({
  tag: 'display-feed',
  styleUrl: 'display-feed.css'
})
export class DisplayFeed {
  @Prop() type: string = "midwest";
  @Prop() filter: string|"latest"|"popular" = "popular";
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
    return <midwest-grid columnGap={1} class="text-center">
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
    if (item.image) {
      return <midwest-card tag="a" href={item.link} class="hover:bg-base-1 bg-base-0 dm:bg-base-11 hover:dm:bg-base-10" style={{"--background": "transparent", "--background-active": "rgba(0, 0, 0, 0.1)"}}>
        <header class="mb-2 flush p-0 flex">
          { this.renderImage(item) }
        </header>
        <section>
          <midwest-tag class="mb-2 inline-block bg-base-4 dm:bg-base-10">
            <midwest-time value={item.date} relative />
          </midwest-tag>
          <h3 class="text-black dm:text-white">{item.title}</h3>
        </section>
      </midwest-card>
    } else {
      return <midwest-card tag="a" href={item.link} class="hover:bg-base-1 bg-base-0 dm:bg-base-11 hover:dm:bg-base-10" style={{"--background": "transparent", "--background-active": "rgba(0, 0, 0, 0.1)"}}>
        <section>
          <copy-wrap>
            <midwest-tag class="mb-2 inline-block bg-base-4 dm:bg-base-10">
              <midwest-time value={item.date} relative />
            </midwest-tag>
            <h3 class="text-black dm:text-white">{item.title}</h3>
            {item.description && <p class="text-black dm:text-white">{item.description}</p>}
          </copy-wrap>
        </section>
        <footer class="dm:bg-base-12 bg-base-1">
          {this.renderStats(item)}
        </footer>
      </midwest-card>
    }
  }

  renderList () {
    return (
      <section class="list bg-base-0 bg-opacity-50 dm:bg-base-10 p-4">
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
    return <midwest-card padding="none" class="overflow-hidden">
      <header class={`${this.type} py-4 px-3 flex items-between bg-base-2 dm:bg-base-12`}>
        <ion-icon name={this.icon} class="text-4xl text-black dm:text-white mr-4" />
        <h2 class="text-black dm:text-white uppercase">{this.title}</h2>
      </header>
      {this.renderList()}
    </midwest-card>
  }
}
