/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@midwest-design/audio';


export declare interface WebAudio extends Components.WebAudio {}

@ProxyCmp({
  inputs: ['autoplay', 'midi', 'name'],
  methods: ['source', 'get_context', 'is_prepared', 'stop', 'connect_the_world']
})
@Component({
  selector: 'web-audio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoplay', 'midi', 'name']
})
export class WebAudio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WebAudioDebugger extends Components.WebAudioDebugger {}

@ProxyCmp({
  inputs: ['count'],
  methods: ['addHistory']
})
@Component({
  selector: 'web-audio-debugger',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['count']
})
export class WebAudioDebugger {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WebAudioEffect extends Components.WebAudioEffect {}

@ProxyCmp({
  inputs: ['axis', 'method', 'midicontroller', 'responds', 'type', 'use', 'value'],
  methods: ['attachEffect']
})
@Component({
  selector: 'web-audio-effect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['axis', 'method', 'midicontroller', 'responds', 'type', 'use', 'value']
})
export class WebAudioEffect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WebAudioSequencer extends Components.WebAudioSequencer {}

@ProxyCmp({
  inputs: ['autoplay', 'custom', 'name', 'taps', 'tempo'],
  methods: ['play', 'stop']
})
@Component({
  selector: 'web-audio-sequencer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoplay', 'custom', 'name', 'taps', 'tempo']
})
export class WebAudioSequencer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WebAudioSource extends Components.WebAudioSource {
  /**
   *  
   */
  update: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['effectsvolume', 'inert', 'midichannel', 'midikey', 'name', 'playing', 'prepared', 'src'],
  methods: ['getBuffer', 'webAudio', 'gain', 'getDuration', 'prepare', 'play', 'skipTo', 'pause', 'toggle', 'stop', 'assignBuffer']
})
@Component({
  selector: 'web-audio-source',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['effectsvolume', 'inert', 'midichannel', 'midikey', 'name', 'playing', 'prepared', 'src']
})
export class WebAudioSource {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['update']);
  }
}


export declare interface WebAudioVisualizer extends Components.WebAudioVisualizer {}

@ProxyCmp({
  inputs: ['_color', 'analyser', 'color', 'for', 'height', 'renderer', 'size', 'smoothing', 'type', 'width'],
  methods: ['connect']
})
@Component({
  selector: 'web-audio-visualizer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['_color', 'analyser', 'color', 'for', 'height', 'renderer', 'size', 'smoothing', 'type', 'width']
})
export class WebAudioVisualizer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WebAudioVisualizerShader extends Components.WebAudioVisualizerShader {}

@ProxyCmp({
  inputs: ['type']
})
@Component({
  selector: 'web-audio-visualizer-shader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['type']
})
export class WebAudioVisualizerShader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
