/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@midwest-design/helpers';


export declare interface HorizontalScroll extends Components.HorizontalScroll {}


@Component({
  selector: 'horizontal-scroll',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class HorizontalScroll {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestAssetLibrary extends Components.MidwestAssetLibrary {}


@Component({
  selector: 'midwest-asset-library',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class MidwestAssetLibrary {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestCode extends Components.MidwestCode {}

@ProxyCmp({
  inputs: ['codeString', 'copy', 'dark', 'expandable', 'expanded', 'feature', 'language', 'preview', 'simple'],
  methods: ['highlight', 'result', 'clipboard', 'setCode']
})
@Component({
  selector: 'midwest-code',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['codeString', 'copy', 'dark', 'expandable', 'expanded', 'feature', 'language', 'preview', 'simple']
})
export class MidwestCode {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestColorLibrary extends Components.MidwestColorLibrary {}

@ProxyCmp({
  inputs: ['colors', 'shape']
})
@Component({
  selector: 'midwest-color-library',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['colors', 'shape']
})
export class MidwestColorLibrary {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestComment extends Components.MidwestComment {}

@ProxyCmp({
  inputs: ['content', 'dark', 'name']
})
@Component({
  selector: 'midwest-comment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['content', 'dark', 'name']
})
export class MidwestComment {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestComments extends Components.MidwestComments {}


@Component({
  selector: 'midwest-comments',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class MidwestComments {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestContext extends Components.MidwestContext {
  /**
   *  
   */
  timeChange: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  weatherChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['apikey', 'time', 'weather']
})
@Component({
  selector: 'midwest-context',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['apikey', 'time', 'weather']
})
export class MidwestContext {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['timeChange', 'weatherChange']);
  }
}


export declare interface MidwestIntersection extends Components.MidwestIntersection {}

@ProxyCmp({
  inputs: ['element', 'in', 'margin', 'multiple', 'out']
})
@Component({
  selector: 'midwest-intersection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['element', 'in', 'margin', 'multiple', 'out']
})
export class MidwestIntersection {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestInterstitial extends Components.MidwestInterstitial {}

@ProxyCmp({
  inputs: ['fullscreen', 'remember', 'shown']
})
@Component({
  selector: 'midwest-interstitial',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['fullscreen', 'remember', 'shown']
})
export class MidwestInterstitial {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestLoading extends Components.MidwestLoading {}

@ProxyCmp({
  inputs: ['cta', 'error', 'show', 'step', 'steps', 'stretch']
})
@Component({
  selector: 'midwest-loading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cta', 'error', 'show', 'step', 'steps', 'stretch']
})
export class MidwestLoading {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestLongShadow extends Components.MidwestLongShadow {}

@ProxyCmp({
  inputs: ['active', 'complement', 'darkShade', 'delay', 'direction', 'length', 'shade', 'timing'],
  methods: ['out', 'in']
})
@Component({
  selector: 'midwest-long-shadow',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'complement', 'darkShade', 'delay', 'direction', 'length', 'shade', 'timing']
})
export class MidwestLongShadow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestMap extends Components.MidwestMap {}

@ProxyCmp({
  inputs: ['apiKey', 'block', 'fullscreenControl', 'gestureHandling', 'height', 'lat', 'lng', 'mapType', 'noUi', 'streetView', 'theme', 'width', 'zoom', 'zoomControls'],
  methods: ['geocodeAddress']
})
@Component({
  selector: 'midwest-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['apiKey', 'block', 'fullscreenControl', 'gestureHandling', 'height', 'lat', 'lng', 'mapType', 'noUi', 'streetView', 'theme', 'width', 'zoom', 'zoomControls']
})
export class MidwestMap {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestMapMarker extends Components.MidwestMapMarker {}

@ProxyCmp({
  inputs: ['address', 'icon', 'iconHeight', 'iconWidth', 'lat', 'lng', 'markerTitle'],
  methods: ['geocodeAddress', 'configuration']
})
@Component({
  selector: 'midwest-map-marker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['address', 'icon', 'iconHeight', 'iconWidth', 'lat', 'lng', 'markerTitle']
})
export class MidwestMapMarker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestMarkdown extends Components.MidwestMarkdown {}

@ProxyCmp({
  inputs: ['codeString', 'editable', 'flavor', 'loading', 'src']
})
@Component({
  selector: 'midwest-markdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['codeString', 'editable', 'flavor', 'loading', 'src']
})
export class MidwestMarkdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestModal extends Components.MidwestModal {
  /**
   *  
   */
  modalOpened: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  modalClosed: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['closing', 'loading', 'open', 'opening', 'remote']
})
@Component({
  selector: 'midwest-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closing', 'loading', 'open', 'opening', 'remote']
})
export class MidwestModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['modalOpened', 'modalClosed']);
  }
}


export declare interface MidwestMouseTrail extends Components.MidwestMouseTrail {}

@ProxyCmp({
  inputs: ['count', 'speed', 'threedee']
})
@Component({
  selector: 'midwest-mouse-trail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['count', 'speed', 'threedee']
})
export class MidwestMouseTrail {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestOnboarding extends Components.MidwestOnboarding {}

@ProxyCmp({
  inputs: ['autoOpen', 'returnsTo', 'returnsToStep'],
  methods: ['show', 'start']
})
@Component({
  selector: 'midwest-onboarding',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoOpen', 'returnsTo', 'returnsToStep']
})
export class MidwestOnboarding {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestOnboardingStep extends Components.MidwestOnboardingStep {
  /**
   *  
   */
  modalClose: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['awaitModal', 'back', 'canClickTarget', 'chainTo', 'closeModalAfterward', 'completeText', 'delay', 'forceAction', 'name', 'navigateTo', 'next', 'nextText', 'position', 'selector', 'stepTitle'],
  methods: ['details']
})
@Component({
  selector: 'midwest-onboarding-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['awaitModal', 'back', 'canClickTarget', 'chainTo', 'closeModalAfterward', 'completeText', 'delay', 'forceAction', 'name', 'navigateTo', 'next', 'nextText', 'position', 'selector', 'stepTitle']
})
export class MidwestOnboardingStep {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['modalClose']);
  }
}


export declare interface MidwestPjax extends Components.MidwestPjax {}

@ProxyCmp({
  inputs: ['pjax'],
  methods: ['replace', 'loadUrl', 'loadContent']
})
@Component({
  selector: 'midwest-pjax',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['pjax']
})
export class MidwestPjax {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ResizeObserver extends Components.ResizeObserver {
  /**
   *  
   */
  resized: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['element']
})
@Component({
  selector: 'resize-observer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['element']
})
export class ResizeObserver {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['resized']);
  }
}
