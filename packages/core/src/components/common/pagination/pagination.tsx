import { Component, Prop, State, Watch, Element, Event, EventEmitter, h, Host, Listen, Method } from '@stencil/core';
import { format, darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-pagination',
  styleUrl: 'pagination.css',
  shadow: true
})
export class Pagination {
  @Element() element: HTMLElement;

  /**
   * Public: Sets the max cap of pages you can skip through
   */
  @Prop({ reflect: true, mutable: true }) pages: number = 1;
  @Prop({ reflect: true, mutable: true }) type: "full" | "compact" = "full";
  @Prop({ reflect: true, mutable: true }) current: number = 1;
  @Prop({ reflect: true, mutable: true }) padding: number = 2;
  @Prop({ reflect: true }) dark: boolean = false;

  @Prop() url: any = "#page-{0}";

  @State() surroundingPagesPrivate: any;

  @State() currentPrivate: number = 1;
  @State() firstPrivate: number = 1;
  @State() previousPrivate: number | boolean = false;
  @State() nextPrivate: number | boolean = false;
  @State() lastPrivate: number;

  @State() distance: any;

  firstPrivatePageUrl() { return ""; }
  previousPrivatePageUrl() { return ""; }
  nextPrivatePageUrl() { return ""; }
  lastPrivatePageUrl() { return ""; }


  /**
   * Instance of the next element
   */
 nextEl!: HTMLAnchorElement

  /**
   * Instance of the previous element
   */
 previousEl!: HTMLAnchorElement

  /**
   * Instance of the first element
   */
 firstEl!: HTMLAnchorElement

  /**
   * Instance of the last element
   */
 lastEl!: HTMLAnchorElement

  @Event() changed: EventEmitter;

  @Watch('currentPrivate')
  currentObserver(current: number) {
    this.current = current;
    this.previousPrivate = (current > this.firstPrivate) ? current - 1 : false;
    this.nextPrivate = (current < this.pages) ? current + 1 : false;

    this.changed.emit(current);

    if (this.type === "full") {
      this.updateSurroundingPages();
    }
  }

  componentWillLoad() {
    darkMode(this);
    this.firstPrivate = 1;
    this.currentPrivate = this.current;
    this.previousPrivate = (this.current > this.firstPrivate) ? this.current - 1 : false;
    this.nextPrivate = (this.current < this.pages) ? this.current + 1 : false;
    this.lastPrivate = this.pages;

    this.updateSurroundingPages();
  }

  componentDidLoad() {
    setTimeout(() => {
      this.affixDistance()
    }, 300)
  }

  @Method()
  async next() {
    if (typeof this.nextPrivate === "number" || this.currentPrivate < this.pages) {
      this.nextEl.click()
    }
  }

  @Method()
  async previous() {
    if (typeof this.previousPrivate === "number" && this.currentPrivate > 1) {
      this.previousEl.click()
    }
  }

  @Method()
  async first() {
    if (this.currentPrivate > 1) {
      this.firstEl.click()
    }
  }

  @Method()
  async last() {
    if (this.currentPrivate < this.pages) {
      this.lastEl.click()
    }
  }

  @Listen('keydown', { capture: true })
  handleKeyDown(ev: KeyboardEvent) {
    if (this.type === "full") {
      if (ev.key === 'ArrowLeft') {
        if (ev.shiftKey) {
          this.first();
        } else {
          this.previous();
        }
      }

      if (ev.key === 'ArrowRight') {
        if (ev.shiftKey) {
          this.last();
        } else {
          this.next();
        }
      }
    }
  }

  affixDistance() {
    const distance: HTMLElement = this.element.shadowRoot.querySelector('.current-number');

    if (distance) {
      this.distance = `${distance.offsetLeft}px`;
    }
  }

  updateSurroundingPages() {
    const pages = Array(this.pages).fill(0).map((_, index) => {
      const pageNumber = index + 1
      return {
        pageNumber,
        url: this.formatUrl(pageNumber),
        visible: this.isVisible(pageNumber),
        current: pageNumber === this.current
      }
    });

    this.surroundingPagesPrivate = pages;
  }

  isVisible(pageNumber: number) {
    let minPad = this.currentPrivate - this.padding;
    let maxPad = this.currentPrivate + this.padding;

    if (maxPad >= this.pages) {
      maxPad = this.pages;
    }

    if (minPad < 1) {
      minPad = 1;
    }

    return pageNumber >= minPad && pageNumber <= maxPad
  }

  handleChange(event: Event) {
    event.preventDefault();

    const target: any = event.currentTarget;
    this.currentPrivate = parseInt(target.value, 10);
  }

  handleClick(event: UIEvent) {
    event.preventDefault();

    const target: any = event.currentTarget;
    this.currentPrivate = parseInt(target.dataset.page, 10);
  }

  formatUrl(pageNumber: number) {
    return format([this.url, pageNumber])
  }

  renderFirstPageButton() {
    const hidden = (this.currentPrivate > 1) ? "no" : "yes";

    return <a
      href={this.firstPrivatePageUrl()}
      ref={(el) => this.firstEl = el as HTMLAnchorElement}
      data-page={this.firstPrivate}
      onClick={(event: UIEvent) => this.handleClick(event)}
      class="icon first"
      data-hidden={hidden}
    >
      <ion-icon name="arrow-previous" />
    </a>
  }

  renderPreviousPageButton() {
    const hidden = (typeof this.previousPrivate === "number" && this.currentPrivate > 1) ? "no" : "yes";

    return <a
      href={this.previousPrivatePageUrl()}
      ref={(el) => this.previousEl = el as HTMLAnchorElement}
      data-page={this.previousPrivate}
      onClick={(event: UIEvent) => this.handleClick(event)}
      class="icon previous"
      data-hidden={hidden}
    >
      <ion-icon name="arrow-left" />
    </a>
  }

  renderNextPageButton() {
    const hidden = (typeof this.nextPrivate === "number" || this.currentPrivate < this.pages) ? "no" : "yes";

    return <a
      href={this.nextPrivatePageUrl()}
      ref={(el) => this.nextEl = el as HTMLAnchorElement}
      data-page={this.nextPrivate}
      onClick={(event: UIEvent) => this.handleClick(event)}
      class="icon next"
      data-hidden={hidden}
    >
      <ion-icon name="arrow-right" />
    </a>
  }

  renderLastPageButton() {
    const hidden = (this.currentPrivate < this.pages) ? "no" : "yes";

    return <a
      href={this.lastPrivatePageUrl()}
      ref={(el) => this.lastEl = el as HTMLAnchorElement}
      data-page={this.lastPrivate}
      onClick={(event: UIEvent) => this.handleClick(event)}
      class="icon last"
      data-hidden={hidden}>
      <ion-icon name="arrow-next" />
    </a>
  }

  renderPagesList() {
    return this.surroundingPagesPrivate.map((page: any) => {
      return <a href={page.url} data-page={page.number} data-visible={page.visible} data-current={page.current} onClick={(event: UIEvent) => this.handleClick(event)} class={(page.number === this.currentPrivate || page.number === this.current) ? 'current-number number' : 'number'}>
        {page.number}
      </a>
    });
  }

  renderPagesPreviousEllipsis() {
    const hidden = ((this.currentPrivate - this.padding) > 1) ? "no" : "yes";

    return (
      <div class="ellipsis previous" data-hidden={hidden}>
        &hellip;
        </div>
    );
  }

  renderPagesNextEllipsis() {
    const hidden = ((this.currentPrivate + this.padding + 1) < this.pages) ? "no" : "yes";

    return (
      <div class="ellipsis next" data-hidden={hidden}>
        &hellip;
        </div>
    );
  }

  render() {
    return <Host style={{"--indicator-left": this.distance}}>
      {this.type === "full" && <span class="pagination-container">
        <div class="pagination-wrap">
          {this.renderFirstPageButton()}
          {this.renderPreviousPageButton()}

          <div class="pages">
            {this.renderPagesPreviousEllipsis()}
            {this.renderPagesList()}
            {this.renderPagesNextEllipsis()}
          </div>

          {this.renderNextPageButton()}
          {this.renderLastPageButton()}
        </div>
      </span>}

      {this.type === "compact" && <span class="compact-pagination-container">
        <p>Page</p>
        <midwest-input type="number" size="small" name="page" max={this.pages} value={this.currentPrivate.toString()} min={1} onChange={(e: any) => { this.handleChange(e) }} />
        of {this.pages}
      </span>}
    </Host>;
  }
}
