import { Component, Prop, Element, h, Method, State, Host } from '@stencil/core'
import { animations } from "./lib/animations";
import properties from 'css-custom-properties';

@Component({
  tag: 'midwest-animate-text',
  styleUrl: 'animate-text.css'
})
export class AnimateText {
  @Element() element: HTMLElement;
  @State() letters: NodeListOf<HTMLElement>;
  @State() originalText: string;
  @State() incomingHTML: string;
  @Prop() delay: number = 50;
  @Prop() duration: number = 1000;
  @Prop() method: string = "lettering";
  @Prop() words: boolean = false;
  @Prop() phrase: boolean = false;
  @Prop() onlyIn: boolean = false;

  componentWillLoad() {
    this.originalText = this.element.textContent;

    if (this.words) {
      this.incomingHTML = this.originalText.replace(/[^, ]+/g, "<span class='letter' aria-hidden='true'>$&</span>");
    } else if (this.phrase) {
      this.incomingHTML = `<span class='letter' aria-hidden='true'>${this.originalText}</span>`;
    } else {
      this.incomingHTML = this.originalText.replace(/([^\x00-\x80]|\w)/g, "<span class='letter' aria-hidden='true'>$&</span>");
    }

    if (this.method === "retro") {
      this.element.innerHTML = this.incomingHTML.repeat(11);
    } else {
      this.element.innerHTML = this.incomingHTML;
    }

    this.letters = this.element.querySelectorAll('.letter');

    this.letters.forEach((e, i) => {
      properties.set({ "--iteration": ((i - 1) <= 0) ? 0 : (i - 2) }, e)
    });
  }

  @Method()
  async in() {
    animations[this.method]?.in(this.letters, this.delay, this.duration)
  }

  @Method()
  async out() {
    if (!this.onlyIn) {
      animations[this.method]?.out(this.letters, this.delay, this.duration)
    }
  }

  render() {
    return <Host role="text" ariaLabel={this.originalText}>
      <midwest-intersection element={this.element} multiple in={this.in.bind(this)} out={this.out.bind(this)} />
    </Host>
  }
}
