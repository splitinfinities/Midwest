import { Component, Prop, State, Method, Element } from '@stencil/core'
import { WebAudioVisualizer } from '../web-audio-visualizer/web-audio-visualizer'
import { WebAudioSource } from '../web-audio-source/web-audio-source'
import '../web-audio-debugger/web-audio-debugger'
import { BufferLoader } from '../bufferloader'
import { delay } from '../helpers'
import webmidi, {InputEventNoteon} from 'webmidi';
import { asyncForEach } from '@midwest-design/common';

@Component({
  tag: 'web-audio'
})
export class WebAudio {
  // This instance of the element
  @Element() element: HTMLElement
  @State() debugger: any

  @Prop() name: string = "web_audio"

  @State() prepared: Boolean = false

  @Prop() autoplay: Boolean
  @Prop() midi: Boolean = false

  @State() context: AudioContext
  @State() gain: GainNode

  @State() sources: Array<HTMLWebAudioSourceElement> = []
  @State() _sources: Array<Node>
  @State() _currentSource: WebAudioSource

  @State() keys: Object = {}

  @State() externalFiles: Array<string>

  @State() visualizers: Array<WebAudioVisualizer>
  @State() previousVisualizer: WebAudioVisualizer
  @State() visualizerNodes: Array<string>

  @Method()
  async source (name) {
    if (this.sources.length === 0) {
      await this.connect_the_world()
    }

    return this.sources[name];
  }

  @Method()
  async get_context () {
    return this.context;
  }

  @Method()
  async is_prepared () {
    return this.prepared;
  }

  @Method()
  async stop () {
    return await asyncForEach(this.sources, async (source) => {
      await source.stop()
    })
  }

  /******************
   * Private behavior
   **/
  componentDidLoad() {
    this.connect_debugger()
  }

  @Method()
  async connect_the_world() {
    this.connect_context()

    this.gain = this.context.createGain()

    await this.connect_visualizers();
    await this.connect_sources();
    await this.connect_midi();

    this.prepared = true;

    await delay(500);

    return true
  }

  connect_context () {
    // @ts-ignore
    this.context = new (window.AudioContext || window.webkitAudioContext)();;
    this.log("Connected to this.context")
  }

  async connect_sources () {
    await this.build_sources();
  }

  async build_sources () {
    this.log("Building sources")

    this._sources = Array.from(this.element.querySelectorAll('web-audio-source'))

    this.externalFiles = []

    await asyncForEach(this._sources, async (source, index) => {
      // @ts-ignore
      this.log(`(${index}) Preparing ${source.name}`)

      // @ts-ignore
      this.sources[source.name] = source

      // @ts-ignore
      let bufferLoader = new BufferLoader( this.context, [source.src], async (bufferList) => {
        await this.cache_sources(bufferList, source)
      })

      await bufferLoader.load();
    })

  }

  async cache_sources (bufferList, source) {

    await asyncForEach(bufferList, async (item) => {
      this.log(`Caching ${source.name}`);

      if (this.midi) {
        this.log(`Assigned ${source.name} to midi key ${source.midikey}, channel ${source.midichannel}`)
        if (this.keys[source.midichannel] == undefined) {
          this.keys[source.midichannel] = [];
        }

        this.keys[source.midichannel][source.midikey] = source
      }

      this._currentSource = source
      await this._currentSource.assignBuffer(this, item);

      this.log(`Source ${source.name} is ready`)
    })

    this._currentSource = null
  }

  async connect_visualizers () {
    await delay(20)

    // @ts-ignore
    this.visualizers = Array.from(document.querySelectorAll(`web-audio-visualizer[for="${this.name}"]`))

    if (this.visualizers) {
      this.log(`Attaching visualizers`);

      await asyncForEach(this.visualizers, async (visualizer: WebAudioVisualizer, index) => {
        if (index === 0) {
          visualizer = await visualizer.connect(this.context, this.context.destination)
        } else {
          visualizer = await visualizer.connect(this.context, this.previousVisualizer.analyser)
        }

        this.previousVisualizer = visualizer
      })
    } else {
      this.log(`No visualizers for ${this.name}`)
    }

    if (this.visualizers.length >= 1) {
      await this.gain.connect(this.previousVisualizer.analyser)
    } else {
      await this.gain.connect(this.context.destination)
    }
  }

  connect_debugger () {
    this.debugger = document.querySelector(`web-audio-debugger[for="${this.name}"]`);

    this.log("Connected debugger")
  }

  log (string) {
    if (this.debugger) {
      this.debugger.addHistory(string);
    }
  }

  connect_midi () {
    if (this.midi) {
      webmidi.enable((err) => {
        if (err) {
          this.log("Midi couldn't be enabled." + err);
        } else {
          this.log("Midi is enabled")
        }

        var input = webmidi.inputs[0];

        if (input) {
          input.addListener('noteon', 'all', (e: InputEventNoteon) => {
            this.log(`KEY: Channel: ${e.channel}, Note: ${e.note.number}, Name: ${e.note.name}, Oct: ${e.note.octave}`)

            if (this.keys[e.channel]) {
              this.keys[e.channel][e.note.number].gain().value = (e.data[2] / 175);
              this.keys[e.channel][e.note.number].play();
            }
          });

          input.addListener('pitchbend', 'all', (e) => {
            this.log(`PITCH: Channel: ${e.channel}, Value: ${e.value}`)
          });

          // Listen to control change message on all channels
          input.addListener('controlchange', 'all', (e) => {
            this.log(`CTRL: Channel: ${e.channel}, controller: ${e.controller.number}, Value: ${e.value}`)
            var event = new CustomEvent('midi-controller-update', { detail: e })
            document.dispatchEvent(event)
          });

          this.log("Listeners added for notes, pitch bend, and controllers.")
        }
      });
    }
  }
}
