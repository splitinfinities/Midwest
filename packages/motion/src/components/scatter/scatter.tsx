import { Component, Element, Prop, h } from '@stencil/core'

@Component({
  tag: 'midwest-scatter',
  styleUrl: 'scatter.css',
  shadow: true
})
export class Scatter {
  @Element() element: HTMLElement

  @Prop({ reflect: true }) float: boolean = false;
  @Prop() min: number = 0
  @Prop() max: number = 100

  @Prop() sizes: boolean = false
  @Prop() colors: boolean = false

  componentWillLoad() {
    const particles = this.element.querySelectorAll('*');

    Array.from(particles).forEach((element) => {
      const top = this.randomFloat()
      const left = this.randomFloat();
      element.setAttribute('style', `top: ${top}%; left: ${left}%`)

      if (this.sizes) {
        element.classList.add(`text-${this.fontScale()}`)
      }

      if (this.colors) {
        element.classList.add(`text-${this.colorSwatch()}-${this.colorScale()}`)
      }
    })
  }

  randomFloat() {
    return this.min + Math.random() * (this.max + 1 - this.min)
  }

  randomNumberPlus(max = 2) {
    return this.randomNumber(max) + 1
  }

  randomNumber(max = 2) {
    return Math.floor(Math.random() * max)
  }

  fontScale() {
    const options = ["sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"];
    return options[this.randomNumber(9)]
  }

  colorScale() {
    return this.randomNumber(10)
  }

  colorSwatch() {
    return this.randomNumber() === 1 ? "theme" : "complement"
  }

  render() {
    return <slot/>
  }
}
