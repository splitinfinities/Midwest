import { Component, Element, State, Prop, Method, h, Host } from '@stencil/core';
import ezClipboard from 'ez-clipboard';
import { get_interview_lines, update_interview_lines } from '../interview/vendor/helpers';
import { delay } from 'async-delay';
import "@midwest-design/audio";
import "ionicons";

@Component({
  tag: 'midwest-video-interview',
  styleUrl: 'video-interview.css',
  shadow: true
})
export class VideoInterview {
  @Element() element: HTMLElement;

  @Prop() src: string;
  @Prop() color: string = "white";
  @Prop({ mutable: true }) playing: boolean;
  @Prop({ mutable: true }) width: number = 800;
  @Prop({ mutable: true }) height: number = 800;
  @Prop({ mutable: true }) aspectRatio: number = 100;
  @Prop({ mutable: true }) visualization: "circle" | "bars" | "wave" | "bars2" = "bars2";

  @State() randomId: number = Math.floor(Math.random() * 6) + 1;
  @State() video: HTMLMidwestVideoElement;
  @State() loaded: boolean = false;
  @State() loading: boolean = false;
  @State() seekable: boolean = false;
  @State() updateFunc: Function;
  @State() duration: number = 0;
  @State() current: number = 0;
  @State() interviewLines: any;
  @State() visible: boolean = false;
  @State() context: any;
  @State() visualizer: any;

  async componentDidLoad() {
    if (!this.interviewLines) {
      this.interviewLines = get_interview_lines(this.element)
    }

    update_interview_lines(this.interviewLines, this.cache, this.time)
    this.visualizer = this.element.shadowRoot.querySelector('web-audio-visualizer');
    this.video = this.element.shadowRoot.querySelector('midwest-video');
  }

  cache = new WeakMap()

  handleUpdate(event) {
    this.playing = event.detail.playing;
    this.current = Math.abs(Math.round(event.detail.currentTime * 1000));
    this.duration = Math.round(event.detail.duration * 1000);

    update_interview_lines(this.interviewLines, this.cache, this.time)
  }

  get time() {
    return this.current
  }

  async attachContext() {
    if (!this.context) {
      // @ts-ignore
      this.context = new (window.AudioContext || window.webkitAudioContext)();
      const src = this.context.createMediaElementSource(await this.video.videoElement());

      if (!this.visualizer) {
        this.visualizer = this.element.shadowRoot.querySelector('web-audio-visualizer');
      }

      const waanalyser = await this.visualizer.connect(this.context);
      await src.connect(waanalyser.analyser);
      waanalyser.analyser.connect(this.context.destination);
    }
  }

  async in() {
    await delay(1000);
    this.visible = true;
    await delay(100);
    this.visualizer = this.element.shadowRoot.querySelector('web-audio-visualizer');
    this.video = this.element.shadowRoot.querySelector('midwest-video');
    this.video.addEventListener('canplaythrough', () => {
      this.seekable = true;
    })
  }

  async out() {
    this.pause()
  }

  @Method()
  async play() {
    if (this.video) {
      await this.video.play()
    }
  }

  @Method()
  async skipTo(time: number) {
    if (this.video) {
      await this.video.skipTo(time)
    }
  }

  @Method()
  async pause() {
    if (this.video) {
      await this.video.pause()
    }
  }

  @Method()
  async toggle() {
    this.attachContext();

    if (this.video) {
      await this.video.toggle()
    }
  }

  handleClick() {
    this.toggle();

    if (this.current === this.duration) {
      this.skipTo(0);
    }
  }

  handleCurrentClick() {
    ezClipboard.copyPlain(this.current);
  }

  render() {
    return <Host style={{ "--width": `${this.width}px`, "--height": `${this.height}px`, "--aspectRatio": `${this.aspectRatio}%` }}>
      <div class="card" onDblClick={() => { this.handleClick() }}>
        <skeleton-img width={this.width} height={this.height} loading />
        {this.visible && <section>
          <midwest-video controls={false} playsinline trackInView={false} onUpdate={(e) => { this.handleUpdate(e) }}>
            <source src={this.src} />
          </midwest-video>
          <div class="transcript">
            <slot />
          </div>
          {this.video && <web-audio-visualizer for={`interview-${this.randomId}`} type={this.visualization} width={2048} height={1024} color={this.color} />}
          <button class={this.loading ? "loading button" : (this.playing ? "playing button" : "button")} onClick={() => { this.handleClick() }}>
            <ion-icon name={this.loading ? "sync" : (this.playing ? "pause" : "play")} class={this.loading ? "animation-spin" : ""} />
          </button>
          <h3>
            <midwest-unit class="current" value={this.current} from="ms" to="s" onClick={() => { this.handleCurrentClick() }} />
          </h3>
          <h3>
            <midwest-unit class="duration" value={this.duration} from="ms" to="s" />
          </h3>
          {this.seekable && <midwest-progress value={this.current} max={this.duration} noease={true} blurable={false} slender={true} editable={true} onUpdate={(e) => { this.skipTo(e.detail.value) }} />}
        </section>}
        <midwest-intersection element={this.element} multiple in={this.in.bind(this)} out={this.out.bind(this)} />
      </div>
    </Host>
  }
}
