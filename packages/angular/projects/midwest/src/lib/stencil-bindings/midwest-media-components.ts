/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@midwest-design/media';


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


export declare interface Midwest360Image extends Components.Midwest360Image {}

@ProxyCmp({
  inputs: ['height', 'nolazyload', 'poster', 'src', 'width']
})
@Component({
  selector: 'midwest-360-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['height', 'nolazyload', 'poster', 'src', 'width']
})
export class Midwest360Image {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface Midwest360Video extends Components.Midwest360Video {}

@ProxyCmp({
  inputs: ['height', 'poster', 'src', 'width']
})
@Component({
  selector: 'midwest-360-video',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['height', 'poster', 'src', 'width']
})
export class Midwest360Video {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestImage extends Components.MidwestImage {}

@ProxyCmp({
  inputs: ['alt', 'bg', 'block', 'height', 'large', 'nozoom', 'poster', 'type', 'width'],
  methods: ['medium']
})
@Component({
  selector: 'midwest-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alt', 'bg', 'block', 'height', 'large', 'nozoom', 'poster', 'type', 'width']
})
export class MidwestImage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestInterview extends Components.MidwestInterview {}

@ProxyCmp({
  inputs: ['aspectRatio', 'color', 'height', 'playing', 'src', 'visualization', 'width'],
  methods: ['play', 'skipTo', 'pause', 'toggle']
})
@Component({
  selector: 'midwest-interview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['aspectRatio', 'color', 'height', 'playing', 'src', 'visualization', 'width']
})
export class MidwestInterview {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestInterviewLine extends Components.MidwestInterviewLine {}

@ProxyCmp({
  inputs: ['complement', 'in', 'out']
})
@Component({
  selector: 'midwest-interview-line',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['complement', 'in', 'out']
})
export class MidwestInterviewLine {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MidwestPlaylist extends Components.MidwestPlaylist {
  /**
   *  
   */
  load_songs: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['artwork', 'autoplay', 'dark', 'load', 'loading', 'name', 'playing', 'playlist', 'remember', 'view', 'visualizationColor', 'visualizationType'],
  methods: ['prepare', 'play', 'pause', 'next', 'previous']
})
@Component({
  selector: 'midwest-playlist',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['artwork', 'autoplay', 'dark', 'load', 'loading', 'name', 'playing', 'playlist', 'remember', 'view', 'visualizationColor', 'visualizationType']
})
export class MidwestPlaylist {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['load_songs']);
  }
}


export declare interface MidwestSong extends Components.MidwestSong {
  /**
   *  
   */
  songChanged: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  loaded: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['artwork', 'playing', 'src'],
  methods: ['load', 'details', 'preload', 'play', 'switching', 'getIndex', 'setIndex']
})
@Component({
  selector: 'midwest-song',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['artwork', 'playing', 'src']
})
export class MidwestSong {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['songChanged', 'loaded']);
  }
}


export declare interface MidwestVideo extends Components.MidwestVideo {
  /**
   *  
   */
  update: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  played: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  paused: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  loaded: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['autoplay', 'controls', 'height', 'muted', 'overlay', 'playing', 'playsinline', 'poster', 'preload', 'trackInView', 'width'],
  methods: ['videoElement', 'getDuration', 'play', 'pause', 'toggle', 'stop', 'skipTo']
})
@Component({
  selector: 'midwest-video',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoplay', 'controls', 'height', 'muted', 'overlay', 'playing', 'playsinline', 'poster', 'preload', 'trackInView', 'width']
})
export class MidwestVideo {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['update', 'played', 'paused', 'loaded']);
  }
}


export declare interface MidwestVideoInterview extends Components.MidwestVideoInterview {}

@ProxyCmp({
  inputs: ['aspectRatio', 'color', 'height', 'playing', 'src', 'visualization', 'width'],
  methods: ['play', 'skipTo', 'pause', 'toggle']
})
@Component({
  selector: 'midwest-video-interview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['aspectRatio', 'color', 'height', 'playing', 'src', 'visualization', 'width']
})
export class MidwestVideoInterview {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SkeletonImg extends Components.SkeletonImg {}

@ProxyCmp({
  inputs: ['block', 'height', 'icon', 'loading', 'width']
})
@Component({
  selector: 'skeleton-img',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['block', 'height', 'icon', 'loading', 'width']
})
export class SkeletonImg {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SkeletonText extends Components.SkeletonText {}

@ProxyCmp({
  inputs: ['as', 'loading', 'width']
})
@Component({
  selector: 'skeleton-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['as', 'loading', 'width']
})
export class SkeletonText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


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
