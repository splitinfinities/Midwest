import { Component, Element, Event, EventEmitter, Method, Prop, State, Watch, h, Host } from '@stencil/core'
import { Swiper } from './vendor/swiper'

@Component({
  tag: 'midwest-slick-slides',
  styleUrl: 'slides.css',
  assetsDirs: ['vendor']
})

export class SlickSlides {
  private container!: HTMLElement
  private swiper: any

  @Element() el!: HTMLElement

  /**
   * Emitted before the active slide has changed.
   */
  @Event() ionSlideWillChange!: EventEmitter

  /**
   * Emitted after the active slide has changed.
   */
  @Event() ionSlideDidChange!: EventEmitter

  /**
   * Emitted when the next slide has started.
   */
  @Event() ionSlideNextStart!: EventEmitter

  /**
   * Emitted when the previous slide has started.
   */
  @Event() ionSlidePrevStart!: EventEmitter

  /**
   * Emitted when the next slide has ended.
   */
  @Event() ionSlideNextEnd!: EventEmitter

  /**
   * Emitted when the previous slide has ended.
   */
  @Event() ionSlidePrevEnd!: EventEmitter

  /**
   * Emitted when the slide transition has started.
   */
  @Event() ionSlideTransitionStart!: EventEmitter

  /**
   * Emitted when the slide transition has ended.
   */
  @Event() ionSlideTransitionEnd!: EventEmitter

  /**
   * Emitted when the slider is actively being moved.
   */
  @Event() ionSlideDrag!: EventEmitter

  /**
   * Emitted when the slider is at its initial position.
   */
  @Event() ionSlideReachStart!: EventEmitter

  /**
   * Emitted when the slider is at the last slide.
   */
  @Event() ionSlideReachEnd!: EventEmitter

  /**
   * Emitted when the user first touches the slider.
   */
  @Event() ionSlideTouchStart!: EventEmitter

  /**
   * Emitted when the user releases the touch.
   */
  @Event() ionSlideTouchEnd!: EventEmitter

  /**
   * Options to pass to the swiper instance.
   * See http://idangero.us/swiper/api/ for valid options
   */
  @Prop() options: any // SwiperOptions  // TODO

  @Prop({ reflect: true }) effect: "slide" | "fade" | "cube" | "coverflow" | "flip" = "slide"
  @Prop() speed: number = 300
  @Prop() direction: "horizontal" | "vertical" = "horizontal"
  @Prop() autoHeight: boolean = false
  @Prop() autoplay: boolean = false
  @Prop() nested: boolean = false
  @Prop() pagination: boolean = false
  @Prop() initialSlide: number = 0;

  @Prop() loop: boolean = false
  @Prop() responsive: boolean

  @Prop() watchSlidesProgress: boolean = false
  @Prop() watchSlidesVisibility: boolean = false

  @Prop() slidesPerView: number = 3
  @Prop() centeredSlides: boolean = true
  @Prop() spaceBetween: number = 30

  @State() slides;

  private paginationEl: HTMLDivElement;

  @Watch('options')
  @Watch('effect')
  @Watch('speed')
  @Watch('direction')
  @Watch('autoHeight')
  @Watch('pagination')
  @Watch('nested')
  @Watch('loop')
  @Watch('watchSlidesProgress')
  @Watch('watchSlidesVisibility')
  @Watch('slidesPerView')
  @Watch('centeredSlides')
  updateSwiperOptions() {
    const newOptions = this.normalizeOptions()
    this.swiper.params = {...this.swiper.params, ...newOptions}
    this.update()
  }

  @Method()
  async instance() {
    return this.swiper;
  }

  componentDidLoad() {
    setTimeout(this.initSlides.bind(this), 10)
  }

  disconnectedCallback() {
    this.swiper.destroy(true, true)
  }

  private initSlides() {
    this.container = this.el.children[0] as HTMLElement
    const finalOptions = this.normalizeOptions()
    // init swiper core
    this.swiper = new Swiper(this.container, finalOptions);

    this.startAutoplay();

    this.el!.onmouseenter = () => {
      this.swiper.keyboard.enable()
      this.stopAutoplay();
    }

    this.el!.onmouseleave = () => {
      this.swiper.keyboard.disable()
      this.startAutoplay();
    }

    this.el!.onfocus = () => {
      this.swiper.keyboard.enable()
      this.stopAutoplay();
    }

    this.el!.onblur = () => {
      this.swiper.keyboard.disable()
      this.startAutoplay();
    }
  }

  /**
   * Update the underlying slider implementation. Call this if you've added or removed
   * child slides.
   */
  @Method()
  async update() {
    this.swiper.update()
  }

  /**
   * Transition to the specified slide.
   */
  @Method()
  async slideTo(index: number, speed?: number, runCallbacks?: boolean) {
    this.swiper.slideTo(index, speed, runCallbacks)
  }

  /**
   * Transition to the next slide.
   */
  @Method()
  async slideNext(speed?: number, runCallbacks?: boolean) {
    this.swiper.slideNext(runCallbacks, speed)
  }

  /**
   * Transition to the previous slide.
   */
  @Method()
  async slidePrev(speed?: number, runCallbacks?: boolean) {
    this.swiper.slidePrev(runCallbacks, speed)
  }

  /**
   * Get the index of the active slide.
   */
  @Method()
  async getActiveIndex(): Promise<number> {
    return this.swiper.activeIndex
  }

  /**
   * Get the index of the previous slide.
   */
  @Method()
  async getPreviousIndex(): Promise<number> {
    return this.swiper.previousIndex
  }

  /**
   * Get the total number of slides.
   */
  @Method()
  async length(): Promise<number> {
    return this.swiper.slides.length
  }

  /**
   * Get whether or not the current slide is the last slide.
   *
   */
  @Method()
  async isEnd(): Promise<boolean> {
    return this.swiper.isEnd
  }

  /**
   * Get whether or not the current slide is the first slide.
   */
  @Method()
  async isBeginning(): Promise<boolean> {
    return this.swiper.isBeginning
  }

  /**
   * Start auto play.
   */
  @Method()
  async startAutoplay() {
    if (this.autoplay) {
      this.swiper.autoplay.start()
    }
  }

  /**
   * Stop auto play.
   */
  @Method()
  async stopAutoplay() {
    if (this.autoplay) {
      this.swiper.autoplay.stop()
    }
  }

  /**
   * Lock or unlock the ability to slide to the next slides.
   */
  @Method()
  async lockSwipeToNext(shouldLockSwipeToNext: boolean) {
    if (shouldLockSwipeToNext) {
      return this.swiper.lockSwipeToNext()
    }
    this.swiper.unlockSwipeToNext()
  }

  /**
   * Lock or unlock the ability to slide to the previous slides.
   */
  @Method()
  async lockSwipeToPrev(shouldLockSwipeToPrev: boolean) {
    if (shouldLockSwipeToPrev) {
      return this.swiper.lockSwipeToPrev()
    }
    this.swiper.unlockSwipeToPrev()
  }

  /**
   * Lock or unlock the ability to slide to change slides.
   */
  @Method()
  async lockSwipes(shouldLockSwipes: boolean) {
    if (shouldLockSwipes) {
      return this.swiper.lockSwipes()
    }
    this.swiper.unlockSwipes()
  }

  blurStart() {
    if (!this.slides) {
      this.slides = Array.from(this.el!.querySelectorAll('midwest-slide'))
    }
  }

  blurEnd() {
    if (!this.slides) {
      this.slides = Array.from(this.el!.querySelectorAll('midwest-slide'))
    }

    const resize = new CustomEvent('resize');
    window.dispatchEvent(resize);
  }

  private normalizeOptions() {
    // Base options, can be changed
    const swiperOptions = {
      effect: this.effect,
      direction: this.direction,
      initialSlide: this.initialSlide,
      loop: this.loop,
      pager: this.pagination,
      keyboard: {
        enabled: false,
        onlyInViewport: true,
      },
      pagination: this.paginationEl,
      paginationType: 'bullets',
      parallax: false,
      slidesPerView: Number(this.slidesPerView),
      spaceBetween: this.spaceBetween,
      speed: this.speed,
      zoom: false,
      nested: this.nested,
      slidesPerColumn: 1,
      slidesPerColumnFill: 'column',
      slidesPerGroup: 1,
      centeredSlides: this.centeredSlides,
      slidesOffsetBefore: -0,
      slidesOffsetAfter: 0,
      touchEventsTarget: 'container',
      autoplayDisableOnInteraction: true,
      autoplayStopOnLast: false,
      freeMode: false,
      freeModeMomentum: true,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: true,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: false,
      freeModeMinimumVelocity: 0.02,
      autoHeight: this.autoHeight,
      setWrapperSize: false,
      zoomMax: 3,
      zoomMin: 1,
      zoomToggle: true,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: true,
      onlyExternal: false,
      threshold: 0,
      touchMoveStopPropagation: true,
      touchReleaseOnEdges: false,
      iOSEdgeSwipeDetection: false,
      iOSEdgeSwipeThreshold: 20,
      paginationClickable: false,
      paginationHide: false,
      resistance: true,
      resistanceRatio: 0.85,
      watchSlidesProgress: this.watchSlidesProgress,
      watchSlidesVisibility: this.watchSlidesVisibility,
      preventClicks: true,
      preventClicksPropagation: true,
      slideToClickedSlide: false,
      loopAdditionalSlides: 0,
      noSwiping: true,
      runCallbacksOnInit: true,
      controlBy: 'slide',
      controlInverse: false,
      breakpoints: this.responsive ? {
        400: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 15
        },
        900: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 25
        }
      } : {},
      coverflow: {
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      flip: {
        slideShadows: true,
        limitRotation: true
      },
      cube: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
      },
      fade: {
        crossFade: false
      },
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      grabCursor: true
    }

    // Keep the event options separate, we dont want users
    // overwriting these
    const eventOptions = {
      on: {
        slideChangeStart: () => {
          this.ionSlideWillChange.emit
        },
        slideChangeEnd: () => {
          this.ionSlideDidChange.emit
        },
        slideNextStart: () => {
          this.ionSlideNextStart.emit
        },
        slidePrevStart: () => {
          this.ionSlidePrevStart.emit
        },
        slideNextEnd: () => {
          this.blurEnd()
          this.ionSlideNextEnd.emit
        },
        slidePrevEnd: () => {
          this.blurEnd()
          this.ionSlidePrevEnd.emit
        },
        transitionStart: () => {
          this.blurStart()
          this.ionSlideTransitionStart.emit
        },
        transitionEnd: () => {
          this.blurEnd()
          this.ionSlideTransitionEnd.emit
        },
        sliderMove: () => {
          this.ionSlideDrag.emit
        },
        reachBeginning: () => {
          this.ionSlideReachStart.emit
        },
        reachEnd: () => {
          this.blurEnd()
          this.ionSlideReachEnd.emit
        },
        touchStart: () => {
          this.ionSlideTouchStart.emit
        },
        touchEnd: () => {
          this.ionSlideTouchEnd.emit
        }
      }
    }

    // Merge the base, user options, and events together then pass to swiper
    return {...swiperOptions, ...this.options, ...eventOptions}
  }

  render() {
    return <Host tabIndex={0}>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <slot />
        </div>
        <div class="swiper-pagination" ref={(e) => { this.paginationEl = e}} />
      </div>
    </Host>
  }
}
