import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'copy-wrap',
  styleUrl: 'copy-wrap.css',
  shadow: true
})
export class CopyWrap {
  @Prop({ reflect: true }) align: string = "left";
  @Prop({ reflect: true }) full: boolean = false;
  @Prop({ reflect: true }) clamp: number;

  render() {
    return <Host style={{"--clamp": `${this.clamp}`}}><slot /></Host>;
  }
}
