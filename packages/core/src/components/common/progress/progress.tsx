import { Component, Prop, Element, Event, EventEmitter, h, Host } from '@stencil/core'

@Component({
  tag: 'midwest-progress',
  styleUrl: 'progress.css',
  shadow: true
})
export class Progress {
  @Element() element: HTMLElement;

  /**
   * Renders if this element is slender or not
   */
  @Prop({ reflect: true }) slender: boolean = false;

  /**
   * Sets the maximum cap for steps in the progress bar
   */
  @Prop({ reflect: true }) max: number = 100;


  /**
   * Sets the maximum cap for steps in the progress bar
   */
  @Prop({ reflect: true }) indeterminate: boolean = false;

  /**
   * Sets the button or link as an outlined button.
   */
  @Prop({ reflect: true }) dark: boolean = false;

  /**
   * Allows the progress bar to be clicked on, to help the user to navigate through the progressing content.
   */
  @Prop({ reflect: true }) editable: boolean = false;

  /**
   * eliminates the easing in the css so you can apply value updates without jitter.
   */
  @Prop({ reflect: true }) noease: boolean = false;

  /**
   * eliminates the easing in the css so you can apply value updates without jitter.
   */
  @Prop({ reflect: true }) rounded: boolean = false;

  /**
   * Sets the value of the progress bar
   */
  @Prop({ reflect: true, mutable: true }) value: number = 0;

  /**
   * Sets the value of the progress bar
   */
  @Prop({ reflect: true, mutable: true }) secondary: number = 0;

  @Event() update: EventEmitter;

  handleClick(e: MouseEvent) {
    if (this.editable) {
      const bounding = this.element.getBoundingClientRect()
      const widthClicked = e.pageX - bounding.left;
      const totalWidth = bounding.width;
      const calc = (widthClicked / totalWidth * this.max);
      let rounded = Math.round(calc * 1e2) / 1e2;

      if (this.rounded) {
        rounded = Math.ceil(rounded);
      }

      this.value = rounded;

      this.update.emit({
        value: this.value
      })
    }
  }

  progress(secondary: boolean = false) {
    if (secondary) {
      let progress = (this.secondary / this.max) * 100
      progress = progress < 100 ? progress : 100
      progress = progress > 0 ? progress : 0
      return progress
    } else {
      let progress = (this.value / this.max) * 100
      progress = progress < 100 ? progress : 100
      progress = progress > 0 ? progress : 0
      return progress
    }
  }

  render() {
    return <Host>
      {this.indeterminate && <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="20" stroke-width="4" fill="none" stroke-linecap="round" />
      </svg>}

      {!this.indeterminate && <div class="progress" onClick={(e) => { this.handleClick(e); }}>
        <div class="status" style={{ transform: `translate(${this.progress()}%, 0)` }}></div>
        {this.secondary ? <div class="secondary" style={{ transform: `translate(${this.progress(true)}%, 0)` }}></div> : ""}
      </div>}
    </Host>

  }
}
