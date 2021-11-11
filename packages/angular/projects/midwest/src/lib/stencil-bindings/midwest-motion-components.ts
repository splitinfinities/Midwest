/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@midwest-design/motion';


export declare interface IonIcon extends Components.IonIcon {}

@ProxyCmp({
  inputs: ['ariaHidden', 'ariaLabel', 'color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'sanitize', 'size', 'src']
})
@Component({
  selector: 'ion-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['ariaHidden', 'ariaLabel', 'color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'sanitize', 'size', 'src']
})
export class IonIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestAnimateText extends Components.MidwestAnimateText {}

@ProxyCmp({
  inputs: ['delay', 'duration', 'method', 'onlyIn', 'phrase', 'words'],
  methods: ['in', 'out']
})
@Component({
  selector: 'midwest-animate-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['delay', 'duration', 'method', 'onlyIn', 'phrase', 'words']
})
export class MidwestAnimateText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestAutoScroll extends Components.MidwestAutoScroll {}

@ProxyCmp({
  inputs: ['autoplay', 'loop', 'speed', 'startPosition'],
  methods: ['play', 'stop']
})
@Component({
  selector: 'midwest-auto-scroll',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoplay', 'loop', 'speed', 'startPosition']
})
export class MidwestAutoScroll {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestBlur extends Components.MidwestBlur {}

@ProxyCmp({
  inputs: ['horizontal', 'vertical']
})
@Component({
  selector: 'midwest-blur',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['horizontal', 'vertical']
})
export class MidwestBlur {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestFollow extends Components.MidwestFollow {}

@ProxyCmp({
  inputs: ['distance', 'padding', 'type']
})
@Component({
  selector: 'midwest-follow',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['distance', 'padding', 'type']
})
export class MidwestFollow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestKeyframes extends Components.MidwestKeyframes {}

@ProxyCmp({
  inputs: ['frame', 'height', 'src', 'width']
})
@Component({
  selector: 'midwest-keyframes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['frame', 'height', 'src', 'width']
})
export class MidwestKeyframes {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestParallax extends Components.MidwestParallax {}

@ProxyCmp({
  inputs: ['center', 'horizontal']
})
@Component({
  selector: 'midwest-parallax',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['center', 'horizontal']
})
export class MidwestParallax {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestParallaxSection extends Components.MidwestParallaxSection {}

@ProxyCmp({
  inputs: ['speed']
})
@Component({
  selector: 'midwest-parallax-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['speed']
})
export class MidwestParallaxSection {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestScatter extends Components.MidwestScatter {}

@ProxyCmp({
  inputs: ['colors', 'float', 'max', 'min', 'sizes']
})
@Component({
  selector: 'midwest-scatter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['colors', 'float', 'max', 'min', 'sizes']
})
export class MidwestScatter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestScrollZRoot extends Components.MidwestScrollZRoot {}

@ProxyCmp({
  inputs: ['cameraSpeed', 'cameraZ', 'initialOriginX', 'initialOriginY', 'itemZ', 'scenePerspective'],
  methods: ['scatter']
})
@Component({
  selector: 'midwest-scroll-z-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cameraSpeed', 'cameraZ', 'initialOriginX', 'initialOriginY', 'itemZ', 'scenePerspective']
})
export class MidwestScrollZRoot {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestScrollZSection extends Components.MidwestScrollZSection {}


@Component({
  selector: 'midwest-scroll-z-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class MidwestScrollZSection {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestSlickSlides extends Components.MidwestSlickSlides {
  /**
   * Emitted before the active slide has changed. 
   */
  ionSlideWillChange: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted after the active slide has changed. 
   */
  ionSlideDidChange: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the next slide has started. 
   */
  ionSlideNextStart: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the previous slide has started. 
   */
  ionSlidePrevStart: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the next slide has ended. 
   */
  ionSlideNextEnd: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the previous slide has ended. 
   */
  ionSlidePrevEnd: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the slide transition has started. 
   */
  ionSlideTransitionStart: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the slide transition has ended. 
   */
  ionSlideTransitionEnd: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the slider is actively being moved. 
   */
  ionSlideDrag: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the slider is at its initial position. 
   */
  ionSlideReachStart: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the slider is at the last slide. 
   */
  ionSlideReachEnd: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the user first touches the slider. 
   */
  ionSlideTouchStart: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the user releases the touch. 
   */
  ionSlideTouchEnd: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['autoHeight', 'autoplay', 'centeredSlides', 'direction', 'effect', 'initialSlide', 'loop', 'nested', 'options', 'pagination', 'responsive', 'slidesPerView', 'spaceBetween', 'speed', 'watchSlidesProgress', 'watchSlidesVisibility'],
  methods: ['instance', 'update', 'slideTo', 'slideNext', 'slidePrev', 'getActiveIndex', 'getPreviousIndex', 'length', 'isEnd', 'isBeginning', 'startAutoplay', 'stopAutoplay', 'lockSwipeToNext', 'lockSwipeToPrev', 'lockSwipes']
})
@Component({
  selector: 'midwest-slick-slides',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoHeight', 'autoplay', 'centeredSlides', 'direction', 'effect', 'initialSlide', 'loop', 'nested', 'options', 'pagination', 'responsive', 'slidesPerView', 'spaceBetween', 'speed', 'watchSlidesProgress', 'watchSlidesVisibility']
})
export class MidwestSlickSlides {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSlideWillChange', 'ionSlideDidChange', 'ionSlideNextStart', 'ionSlidePrevStart', 'ionSlideNextEnd', 'ionSlidePrevEnd', 'ionSlideTransitionStart', 'ionSlideTransitionEnd', 'ionSlideDrag', 'ionSlideReachStart', 'ionSlideReachEnd', 'ionSlideTouchStart', 'ionSlideTouchEnd']);
  }
}


export declare interface MidwestSlide extends Components.MidwestSlide {
  /**
   *  
   */
  switched: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['slideId', 'width']
})
@Component({
  selector: 'midwest-slide',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['slideId', 'width']
})
export class MidwestSlide {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['switched']);
  }
}


export declare interface MidwestSlides extends Components.MidwestSlides {}

@ProxyCmp({
  inputs: ['padding', 'pager']
})
@Component({
  selector: 'midwest-slides',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['padding', 'pager']
})
export class MidwestSlides {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestStarscape extends Components.MidwestStarscape {}


@Component({
  selector: 'midwest-starscape',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class MidwestStarscape {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestStory extends Components.MidwestStory {}

@ProxyCmp({
  inputs: ['target']
})
@Component({
  selector: 'midwest-story',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['target']
})
export class MidwestStory {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
