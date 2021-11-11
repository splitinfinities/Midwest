/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@midwest-design/helpers';


export declare interface AnimatePresence extends Components.AnimatePresence {
  /**
   * Fires when all exiting nodes have completed animating out.

To simplify listener behavior, this event bubbles, but never beyond the closest `<animate-presence>` parent. 
   */
  animatePresenceExitComplete: EventEmitter<CustomEvent<void>>;
  /**
   * Dispatched on a child when it enters. `event.target` is the entering child element.

It is recommended to use an animation handler created with `createPresenceHandler` for this event. 
   */
  animatePresenceEnter: EventEmitter<CustomEvent<{ i: number }>>;
  /**
   * Dispatched on a child when it exits. `event.target` is the exiting child element.

It is recommended to use an animation handler created with `createPresenceHandler` for this event. 
   */
  animatePresenceExit: EventEmitter<CustomEvent<{ i: number }>>;

}

@ProxyCmp({
  inputs: ['observe'],
  methods: ['exit', 'enter']
})
@Component({
  selector: 'animate-presence',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['observe']
})
export class AnimatePresence {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['animatePresenceExitComplete', 'animatePresenceEnter', 'animatePresenceExit']);
  }
}


export declare interface AnimatedRouteSwitch extends Components.AnimatedRouteSwitch {}

@ProxyCmp({
  inputs: ['location', 'scrollTopOffset']
})
@Component({
  selector: 'animated-route-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['location', 'scrollTopOffset']
})
export class AnimatedRouteSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CopyWrap extends Components.CopyWrap {}

@ProxyCmp({
  inputs: ['align', 'clamp', 'full']
})
@Component({
  selector: 'copy-wrap',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['align', 'clamp', 'full']
})
export class CopyWrap {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


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


export declare interface MidwestAccordion extends Components.MidwestAccordion {
  /**
   *  
   */
  opened: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  closed: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['compact', 'dark', 'label', 'maxHeight', 'name', 'open', 'tight']
})
@Component({
  selector: 'midwest-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['compact', 'dark', 'label', 'maxHeight', 'name', 'open', 'tight']
})
export class MidwestAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['opened', 'closed']);
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


export declare interface MidwestAvatar extends Components.MidwestAvatar {}

@ProxyCmp({
  inputs: ['color', 'dark', 'icon', 'initials', 'name', 'noTooltip', 'processing', 'shape', 'size', 'src']
})
@Component({
  selector: 'midwest-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'dark', 'icon', 'initials', 'name', 'noTooltip', 'processing', 'shape', 'size', 'src']
})
export class MidwestAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestBreadcrumb extends Components.MidwestBreadcrumb {}

@ProxyCmp({
  inputs: ['color', 'dark', 'disabled', 'first', 'href', 'label', 'last', 'tag', 'target']
})
@Component({
  selector: 'midwest-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'dark', 'disabled', 'first', 'href', 'label', 'last', 'tag', 'target']
})
export class MidwestBreadcrumb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestBreadcrumbs extends Components.MidwestBreadcrumbs {}

@ProxyCmp({
  inputs: ['dark', 'size']
})
@Component({
  selector: 'midwest-breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dark', 'size']
})
export class MidwestBreadcrumbs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestButton extends Components.MidwestButton {
  /**
   *  
   */
  modal:open: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  modal:close: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  onboarding:open: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  onboarding:close: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['active', 'block', 'buttonTabIndex', 'confirm', 'contrast', 'dark', 'disabled', 'export', 'for', 'ghost', 'href', 'icon', 'iconOnly', 'invert', 'label', 'modalHref', 'name', 'outline', 'padding', 'pill', 'pjaxSelector', 'processable', 'processing', 'size', 'tag', 'target', 'usePjax', 'value']
})
@Component({
  selector: 'midwest-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'block', 'buttonTabIndex', 'confirm', 'contrast', 'dark', 'disabled', 'export', 'for', 'ghost', 'href', 'icon', 'iconOnly', 'invert', 'label', 'modalHref', 'name', 'outline', 'padding', 'pill', 'pjaxSelector', 'processable', 'processing', 'size', 'tag', 'target', 'usePjax', 'value']
})
export class MidwestButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['modal:open', 'modal:close', 'onboarding:open', 'onboarding:close']);
  }
}


export declare interface MidwestCalendarDate extends Components.MidwestCalendarDate {}

@ProxyCmp({
  inputs: ['clock', 'dark', 'end', 'start', 'time']
})
@Component({
  selector: 'midwest-calendar-date',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clock', 'dark', 'end', 'start', 'time']
})
export class MidwestCalendarDate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestCallout extends Components.MidwestCallout {}

@ProxyCmp({
  inputs: ['dark', 'type']
})
@Component({
  selector: 'midwest-callout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dark', 'type']
})
export class MidwestCallout {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestCard extends Components.MidwestCard {
  /**
   *  
   */
  flip: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  modal:open: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  modal:close: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['backHeight', 'block', 'compact', 'dark', 'export', 'flipIcon', 'flipReady', 'flippable', 'flipped', 'for', 'horizontal', 'href', 'modalHref', 'name', 'originalHeight', 'padding', 'small', 'smallSize', 'tag', 'type', 'value'],
  methods: ['flip_card']
})
@Component({
  selector: 'midwest-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['backHeight', 'block', 'compact', 'dark', 'export', 'flipIcon', 'flipReady', 'flippable', 'flipped', 'for', 'horizontal', 'href', 'modalHref', 'name', 'originalHeight', 'padding', 'small', 'smallSize', 'tag', 'type', 'value']
})
export class MidwestCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['flip', 'modal:open', 'modal:close']);
  }
}


export declare interface MidwestChart extends Components.MidwestChart {}

@ProxyCmp({
  inputs: ['chartTitle', 'config', 'dark', 'data', 'enableCredits', 'exporting', 'for', 'src', 'type'],
  methods: ['options', 'get_options', 'refresh']
})
@Component({
  selector: 'midwest-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['chartTitle', 'config', 'dark', 'data', 'enableCredits', 'exporting', 'for', 'src', 'type']
})
export class MidwestChart {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestClock extends Components.MidwestClock {}

@ProxyCmp({
  inputs: ['animated', 'between', 'size', 'time']
})
@Component({
  selector: 'midwest-clock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animated', 'between', 'size', 'time']
})
export class MidwestClock {
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


export declare interface MidwestContent extends Components.MidwestContent {}

@ProxyCmp({
  inputs: ['behavior', 'for', 'open', 'scrollWhenActive']
})
@Component({
  selector: 'midwest-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['behavior', 'for', 'open', 'scrollWhenActive']
})
export class MidwestContent {
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


export declare interface MidwestDropdown extends Components.MidwestDropdown {}

@ProxyCmp({
  inputs: ['dark', 'icon', 'iconName', 'label', 'open', 'position']
})
@Component({
  selector: 'midwest-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dark', 'icon', 'iconName', 'label', 'open', 'position']
})
export class MidwestDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestGrid extends Components.MidwestGrid {}

@ProxyCmp({
  inputs: ['cols', 'columnGap', 'columnWidth', 'padding', 'responsive'],
  methods: ['refresh']
})
@Component({
  selector: 'midwest-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cols', 'columnGap', 'columnWidth', 'padding', 'responsive']
})
export class MidwestGrid {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestGroup extends Components.MidwestGroup {}

@ProxyCmp({
  inputs: ['avatars', 'buttons', 'choice', 'count', 'dark', 'extras', 'overflow', 'size', 'verbiage']
})
@Component({
  selector: 'midwest-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['avatars', 'buttons', 'choice', 'count', 'dark', 'extras', 'overflow', 'size', 'verbiage']
})
export class MidwestGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestGroupOverflow extends Components.MidwestGroupOverflow {}

@ProxyCmp({
  inputs: ['count', 'tooltip', 'verbiage']
})
@Component({
  selector: 'midwest-group-overflow',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['count', 'tooltip', 'verbiage']
})
export class MidwestGroupOverflow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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


export declare interface MidwestLabel extends Components.MidwestLabel {}

@ProxyCmp({
  inputs: ['dark', 'for', 'size', 'underneath']
})
@Component({
  selector: 'midwest-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dark', 'for', 'size', 'underneath']
})
export class MidwestLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestLayout extends Components.MidwestLayout {}

@ProxyCmp({
  inputs: ['align', 'content', 'hasNav', 'height', 'padding', 'size', 'small', 'smallSize', 'type']
})
@Component({
  selector: 'midwest-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['align', 'content', 'hasNav', 'height', 'padding', 'size', 'small', 'smallSize', 'type']
})
export class MidwestLayout {
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


export declare interface MidwestMessage extends Components.MidwestMessage {}

@ProxyCmp({
  inputs: ['autoHide', 'closable', 'closing', 'dark', 'height', 'name', 'opening', 'remember', 'shown', 'size', 'striped', 'type']
})
@Component({
  selector: 'midwest-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoHide', 'closable', 'closing', 'dark', 'height', 'name', 'opening', 'remember', 'shown', 'size', 'striped', 'type']
})
export class MidwestMessage {
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
  modal:opened: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  modal:closed: EventEmitter<CustomEvent<any>>;

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
    proxyOutputs(this, this.el, ['modal:opened', 'modal:closed']);
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
  close-modal: EventEmitter<CustomEvent<any>>;

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
    proxyOutputs(this, this.el, ['close-modal']);
  }
}


export declare interface MidwestPagination extends Components.MidwestPagination {
  /**
   *  
   */
  changed: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['current', 'dark', 'padding', 'pages', 'type', 'url'],
  methods: ['next', 'previous', 'first', 'last']
})
@Component({
  selector: 'midwest-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['current', 'dark', 'padding', 'pages', 'type', 'url']
})
export class MidwestPagination {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['changed']);
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


export declare interface MidwestProgress extends Components.MidwestProgress {
  /**
   *  
   */
  update: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['dark', 'ease', 'editable', 'indeterminate', 'max', 'rounded', 'secondary', 'slender', 'value']
})
@Component({
  selector: 'midwest-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dark', 'ease', 'editable', 'indeterminate', 'max', 'rounded', 'secondary', 'slender', 'value']
})
export class MidwestProgress {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['update']);
  }
}


export declare interface MidwestStep extends Components.MidwestStep {
  /**
   *  
   */
  contentChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['complete', 'current', 'dark', 'disabled', 'href', 'open', 'order', 'past', 'tabCount'],
  methods: ['activate']
})
@Component({
  selector: 'midwest-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['complete', 'current', 'dark', 'disabled', 'href', 'open', 'order', 'past', 'tabCount']
})
export class MidwestStep {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['contentChange']);
  }
}


export declare interface MidwestSteps extends Components.MidwestSteps {}

@ProxyCmp({
  inputs: ['dark', 'name'],
  methods: ['advance', 'steps', 'contents', 'switch']
})
@Component({
  selector: 'midwest-steps',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dark', 'name']
})
export class MidwestSteps {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestTab extends Components.MidwestTab {
  /**
   *  
   */
  open:content: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['dark', 'disabled', 'href', 'name', 'notifications', 'notificationsColor', 'open', 'order', 'size', 'tabCount', 'tag', 'target', 'vertical'],
  methods: ['activate']
})
@Component({
  selector: 'midwest-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dark', 'disabled', 'href', 'name', 'notifications', 'notificationsColor', 'open', 'order', 'size', 'tabCount', 'tag', 'target', 'vertical']
})
export class MidwestTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['open:content']);
  }
}


export declare interface MidwestTabs extends Components.MidwestTabs {}

@ProxyCmp({
  inputs: ['behavior', 'block', 'blockIndicator', 'collapse', 'dark', 'flipIndicator', 'height', 'hiddenActive', 'name', 'payAttention', 'ready', 'size', 'tabHeight', 'tabLeft', 'tabOpacity', 'tabTop', 'tabWidth', 'vertical'],
  methods: ['tabs', 'contents', 'open']
})
@Component({
  selector: 'midwest-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['behavior', 'block', 'blockIndicator', 'collapse', 'dark', 'flipIndicator', 'height', 'hiddenActive', 'name', 'payAttention', 'ready', 'size', 'tabHeight', 'tabLeft', 'tabOpacity', 'tabTop', 'tabWidth', 'vertical']
})
export class MidwestTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestTag extends Components.MidwestTag {}

@ProxyCmp({
  inputs: ['color', 'dark', 'outline', 'pill', 'size']
})
@Component({
  selector: 'midwest-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'dark', 'outline', 'pill', 'size']
})
export class MidwestTag {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestTheme extends Components.MidwestTheme {}

@ProxyCmp({
  inputs: ['base', 'body', 'colors', 'complement', 'dark', 'inert', 'size', 'store', 'system']
})
@Component({
  selector: 'midwest-theme',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['base', 'body', 'colors', 'complement', 'dark', 'inert', 'size', 'store', 'system']
})
export class MidwestTheme {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestTime extends Components.MidwestTime {}

@ProxyCmp({
  inputs: ['format', 'relative', 'unix', 'value']
})
@Component({
  selector: 'midwest-time',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['format', 'relative', 'unix', 'value']
})
export class MidwestTime {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestTooltip extends Components.MidwestTooltip {}

@ProxyCmp({
  inputs: ['align', 'dark', 'focused', 'hover']
})
@Component({
  selector: 'midwest-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['align', 'dark', 'focused', 'hover']
})
export class MidwestTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestUnit extends Components.MidwestUnit {}

@ProxyCmp({
  inputs: ['decimals', 'from', 'money', 'round', 'to', 'value']
})
@Component({
  selector: 'midwest-unit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['decimals', 'from', 'money', 'round', 'to', 'value']
})
export class MidwestUnit {
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
