import { Component, Host, Prop, State, Watch, h } from '@stencil/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)

@Component({
  tag: 'midwest-time'
})
export class Time {
  @Prop() value: string = dayjs().toISOString();
  @Prop() unix: number;
  @Prop() format: string = "MMMM D YYYY, h:mm:ss a";
  @Prop() relative: boolean;
  @State() instance: any;
  @State() result: string;

  componentWillLoad() {
    this.prepareResult();
  }

  @Watch('value')
  prepareResult() {
    if (this.unix) {
      this.instance = dayjs.unix(this.unix);
    } else {
      this.instance = dayjs(this.value);
    }

    if (this.relative) {
      this.result = this.instance.fromNow();
    } else {
      this.result = this.instance.format(this.format);
    }
  }

  render() {
    const style = {
      all: "inherit",
      display: "inline !important"
    };

    return <Host style={style}>{this.result}</Host>
  }
}
