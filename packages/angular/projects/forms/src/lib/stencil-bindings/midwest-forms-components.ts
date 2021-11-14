/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@midwest-design/forms';


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


export declare interface MidwestFieldGroup extends Components.MidwestFieldGroup {
  /**
   *  
   */
  fastUpdates: EventEmitter<CustomEvent<any>>;
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
    proxyOutputs(this, this.el, ['fastUpdates', 'updated', 'submitted']);
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
  fastUpdates: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  modalOpen: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  modalClose: EventEmitter<CustomEvent<any>>;

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
    proxyOutputs(this, this.el, ['submitted', 'updated', 'fastUpdates', 'modalOpen', 'modalClose']);
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
