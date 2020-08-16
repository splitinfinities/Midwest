import { Component, Prop } from '@stencil/core';
import convert from 'convert-units';
import roundTo from 'round-to';

@Component({
  tag: 'midwest-unit',
  styleUrl: 'unit.css'
})
export class Unit {
  @Prop({ reflect: true }) value: number = 1000;
  @Prop({ reflect: true }) from: any = "B";
  @Prop({ reflect: true }) to: any = "KB";
  @Prop({ reflect: true }) money: boolean = false;
  @Prop({ reflect: true }) round: boolean = false;
  @Prop({ reflect: true }) decimals: number = 2;

  render() {
    if (!this.money) {
      return roundTo(convert(this.value).from(this.from).to(this.to), this.decimals) + " " + this.to;
    } else {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: this.to }).format(this.value)
    }
  }
}
