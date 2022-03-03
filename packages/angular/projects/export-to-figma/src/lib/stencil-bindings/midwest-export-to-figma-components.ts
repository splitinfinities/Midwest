/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@midwest-design/export-to-figma';




export declare interface ExampleNoShadow extends Components.ExampleNoShadow {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'example-no-shadow',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ExampleNoShadow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ExampleWithShadow extends Components.ExampleWithShadow {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'example-with-shadow',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class ExampleWithShadow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ExportToFigma extends Components.ExportToFigma {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['element', 'noKey'],
  methods: ['export']
})
@Component({
  selector: 'export-to-figma',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['element', 'noKey']
})
export class ExportToFigma {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
