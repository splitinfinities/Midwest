/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@midwest-design/forms';


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


export declare interface MidwestBox extends Components.MidwestBox {}

@ProxyCmp({
  inputs: ['checked', 'dark', 'disabled', 'focused', 'radio']
})
@Component({
  selector: 'midwest-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'dark', 'disabled', 'focused', 'radio']
})
export class MidwestBox {
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


export declare interface MidwestColorPicker extends Components.MidwestColorPicker {
  /**
   *  
   */
  update: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['dark', 'notransparent', 'val']
})
@Component({
  selector: 'midwest-color-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dark', 'notransparent', 'val']
})
export class MidwestColorPicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['update']);
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


export declare interface MidwestFieldGroup extends Components.MidwestFieldGroup {
  /**
   *  
   */
  fast-updates: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  updated: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  submitted: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  methods: ['addElement', 'removeElement', 'submitForm', 'state']
})
@Component({
  selector: 'midwest-field-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class MidwestFieldGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fast-updates', 'updated', 'submitted']);
  }
}


export declare interface MidwestForm extends Components.MidwestForm {
  /**
   *  
   */
  submitted: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  updated: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  fast-updates: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  open-modal: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  close-modal: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['acceptCharset', 'action', 'ajax', 'autocomplete', 'autosave', 'closeModalOnSuccess', 'enctype', 'method', 'name', 'perform', 'target', 'validate'],
  methods: ['addFieldGroup', 'removeFieldGroup', 'addElement', 'removeElement', 'get', 'state', 'submitForm']
})
@Component({
  selector: 'midwest-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['acceptCharset', 'action', 'ajax', 'autocomplete', 'autosave', 'closeModalOnSuccess', 'enctype', 'method', 'name', 'perform', 'target', 'validate']
})
export class MidwestForm {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['submitted', 'updated', 'fast-updates', 'open-modal', 'close-modal']);
  }
}


export declare interface MidwestFormRollup extends Components.MidwestFormRollup {
  /**
   *  
   */
  removeItem: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['appendCopy', 'count', 'fallback', 'for', 'noAvatars', 'options', 'placeholder', 'show', 'verbiage', 'view'],
  methods: ['update']
})
@Component({
  selector: 'midwest-form-rollup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appendCopy', 'count', 'fallback', 'for', 'noAvatars', 'options', 'placeholder', 'show', 'verbiage', 'view']
})
export class MidwestFormRollup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['removeItem']);
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


export declare interface MidwestInput extends Components.MidwestInput {
  /**
   *  
   */
  update: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  focusing: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  blurring: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['autocomplete', 'autofocus', 'autoformat', 'capsLock', 'cols', 'dark', 'default', 'description', 'disabled', 'focused', 'formatter', 'icon', 'increments', 'inline', 'inputTabIndex', 'label', 'leftIcon', 'match', 'max', 'maxlength', 'min', 'minChars', 'name', 'novalidate', 'placeholder', 'processing', 'readonly', 'required', 'requirements', 'rows', 'shift', 'showCapsLock', 'size', 'spellcheck', 'step', 'tooltip', 'type', 'valid', 'value', 'wrap'],
  methods: ['setFocus', 'validate', 'stepUp', 'stepDown', 'resetValue']
})
@Component({
  selector: 'midwest-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autocomplete', 'autofocus', 'autoformat', 'capsLock', 'cols', 'dark', 'default', 'description', 'disabled', 'focused', 'formatter', 'icon', 'increments', 'inline', 'inputTabIndex', 'label', 'leftIcon', 'match', 'max', 'maxlength', 'min', 'minChars', 'name', 'novalidate', 'placeholder', 'processing', 'readonly', 'required', 'requirements', 'rows', 'shift', 'showCapsLock', 'size', 'spellcheck', 'step', 'tooltip', 'type', 'valid', 'value', 'wrap']
})
export class MidwestInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['update', 'focusing', 'blurring']);
  }
}


export declare interface MidwestInputFile extends Components.MidwestInputFile {
  /**
   * Public: Updated event 
   */
  update: EventEmitter<CustomEvent<any>>;
  /**
   * Public: Focus event 
   */
  focusing: EventEmitter<CustomEvent<any>>;
  /**
   * Public: Blur event 
   */
  bluring: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['accept', 'dark', 'description', 'disabled', 'droppable', 'export', 'files', 'focused', 'hideState', 'inputTabIndex', 'label', 'multiple', 'multipleFileCaption', 'name', 'novalidate', 'placeholder', 'readonly', 'replacePlaceholder', 'required', 'size', 'tooltip', 'value'],
  methods: ['validate']
})
@Component({
  selector: 'midwest-input-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accept', 'dark', 'description', 'disabled', 'droppable', 'export', 'files', 'focused', 'hideState', 'inputTabIndex', 'label', 'multiple', 'multipleFileCaption', 'name', 'novalidate', 'placeholder', 'readonly', 'replacePlaceholder', 'required', 'size', 'tooltip', 'value']
})
export class MidwestInputFile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['update', 'focusing', 'bluring']);
  }
}


export declare interface MidwestInputTags extends Components.MidwestInputTags {
  /**
   *  
   */
  update: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  focusing: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  bluring: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['allowNewItems', 'autofocus', 'base', 'complement', 'customValidations', 'dark', 'description', 'disabled', 'export', 'focused', 'inputTabIndex', 'items', 'label', 'minChars', 'name', 'novalidate', 'placeholder', 'readonly', 'required', 'size', 'tooltip', 'valid', 'value'],
  methods: ['validate']
})
@Component({
  selector: 'midwest-input-tags',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['allowNewItems', 'autofocus', 'base', 'complement', 'customValidations', 'dark', 'description', 'disabled', 'export', 'focused', 'inputTabIndex', 'items', 'label', 'minChars', 'name', 'novalidate', 'placeholder', 'readonly', 'required', 'size', 'tooltip', 'valid', 'value']
})
export class MidwestInputTags {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['update', 'focusing', 'bluring']);
  }
}


export declare interface MidwestItem extends Components.MidwestItem {
  /**
   *  
   */
  selectionChanged: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['avatar', 'avatarIcon', 'avatarShape', 'avatarSize', 'avatarSrc', 'block', 'checked', 'content', 'dark', 'default', 'disabled', 'export', 'focused', 'group', 'hasSelected', 'href', 'icon', 'inline', 'name', 'quiet', 'required', 'settableParent', 'tag', 'target', 'tooltip', 'value'],
  methods: ['validate']
})
@Component({
  selector: 'midwest-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['avatar', 'avatarIcon', 'avatarShape', 'avatarSize', 'avatarSrc', 'block', 'checked', 'content', 'dark', 'default', 'disabled', 'export', 'focused', 'group', 'hasSelected', 'href', 'icon', 'inline', 'name', 'quiet', 'required', 'settableParent', 'tag', 'target', 'tooltip', 'value']
})
export class MidwestItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectionChanged']);
  }
}


export declare interface MidwestItemGroup extends Components.MidwestItemGroup {}

@ProxyCmp({
  inputs: ['dark', 'name', 'supplement']
})
@Component({
  selector: 'midwest-item-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dark', 'name', 'supplement']
})
export class MidwestItemGroup {
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


export declare interface MidwestPasswordRequirements extends Components.MidwestPasswordRequirements {}

@ProxyCmp({
  inputs: ['for', 'size']
})
@Component({
  selector: 'midwest-password-requirements',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['for', 'size']
})
export class MidwestPasswordRequirements {
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


export declare interface MidwestRepeatableFields extends Components.MidwestRepeatableFields {
  /**
   *  
   */
  update: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['addOneIfEmpty', 'custom', 'data', 'readonly', 'verbiage'],
  methods: ['removeByIndex']
})
@Component({
  selector: 'midwest-repeatable-fields',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['addOneIfEmpty', 'custom', 'data', 'readonly', 'verbiage']
})
export class MidwestRepeatableFields {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['update']);
  }
}


export declare interface MidwestSelect extends Components.MidwestSelect {
  /**
   *  
   */
  update: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['align', 'changeTheme', 'dark', 'description', 'export', 'focused', 'inline', 'invert', 'label', 'loading', 'multiple', 'name', 'noAvatars', 'noClear', 'novalidate', 'open', 'pjaxReplace', 'placeholder', 'position', 'ready', 'required', 'resize', 'search', 'size', 'tooltip', 'valid', 'value', 'verbiage', 'verbiageAn', 'wide'],
  methods: ['close', 'options', 'optionEls', 'validate']
})
@Component({
  selector: 'midwest-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['align', 'changeTheme', 'dark', 'description', 'export', 'focused', 'inline', 'invert', 'label', 'loading', 'multiple', 'name', 'noAvatars', 'noClear', 'novalidate', 'open', 'pjaxReplace', 'placeholder', 'position', 'ready', 'required', 'resize', 'search', 'size', 'tooltip', 'valid', 'value', 'verbiage', 'verbiageAn', 'wide']
})
export class MidwestSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['update']);
  }
}


export declare interface MidwestShowIf extends Components.MidwestShowIf {
  /**
   *  
   */
  update: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['equals', 'field', 'notEquals', 'present', 'property', 'selector', 'triggered']
})
@Component({
  selector: 'midwest-show-if',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['equals', 'field', 'notEquals', 'present', 'property', 'selector', 'triggered']
})
export class MidwestShowIf {
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


export declare interface MidwestSwitch extends Components.MidwestSwitch {
  /**
   *  
   */
  update: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['base', 'changeTheme', 'checked', 'checkedDefault', 'dark', 'description', 'disabled', 'export', 'label', 'name', 'noValue', 'novalidate', 'required', 'size', 'tooltip', 'value', 'yesValue'],
  methods: ['validate', 'activate']
})
@Component({
  selector: 'midwest-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['base', 'changeTheme', 'checked', 'checkedDefault', 'dark', 'description', 'disabled', 'export', 'label', 'name', 'noValue', 'novalidate', 'required', 'size', 'tooltip', 'value', 'yesValue']
})
export class MidwestSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['update']);
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


export declare interface MidwestToggle extends Components.MidwestToggle {
  /**
   *  
   */
  update: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['base', 'block', 'complement', 'dark', 'description', 'export', 'flip', 'inlineLabel', 'label', 'name', 'novalidate', 'required', 'single', 'size', 'stacked', 'type', 'value'],
  methods: ['optionEls', 'validate']
})
@Component({
  selector: 'midwest-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['base', 'block', 'complement', 'dark', 'description', 'export', 'flip', 'inlineLabel', 'label', 'name', 'novalidate', 'required', 'single', 'size', 'stacked', 'type', 'value']
})
export class MidwestToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['update']);
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


export declare interface MidwestValidate extends Components.MidwestValidate {
  /**
   *  
   */
  test: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  incorrect: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  correct: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['check', 'color', 'customRender', 'element', 'name', 'silent', 'size'],
  methods: ['validate', 'get']
})
@Component({
  selector: 'midwest-validate',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['check', 'color', 'customRender', 'element', 'name', 'silent', 'size']
})
export class MidwestValidate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['test', 'incorrect', 'correct']);
  }
}
