import { Component, Host, h, Prop, State, Watch, forceUpdate, Element } from '@stencil/core';
import dayjs, { Dayjs } from 'dayjs';

@Component({
  tag: 'midwest-calendar-date',
  styleUrl: 'calendar-date.css',
  shadow: true,
})
export class CalendarDate {
  @Element() element: HTMLElement;

  @Prop({reflect: true}) dark: boolean;
  
  @Prop() start: string;
  @Prop() end: string;
  @Prop() time: boolean;
  @Prop() clock: boolean;

  @State() startDayJs: Dayjs;
  @State() endDayJs: Dayjs;

  componentWillLoad () {
    this.startDayJs = dayjs(this.start);
    this.endDayJs = dayjs(this.end);
  }

  @Watch("start")
  @Watch("end")
  observeTimeChange() {
    this.startDayJs = dayjs(this.start);
    this.endDayJs = dayjs(this.end);
    forceUpdate(this.element)
  }

  hoursFormatted(time: Dayjs) {
    return time.format("mm") === "00" ? time.format("ha") : time.format("h:mm a")
  }

  render() {
    return <Host>
      <div class="date-area">
        <p class="day">{this.startDayJs.format('D')}</p>
        <p class="month">{this.startDayJs.format('MMM')}</p>
      </div>
      {this.time && <midwest-label underneath size="tiny">{this.hoursFormatted(this.startDayJs)}<br />- to -<br />{this.hoursFormatted(this.endDayJs)}</midwest-label>}
      {this.clock && <midwest-clock size={60} time={this.startDayJs.toISOString()} between={this.endDayJs.toISOString()} />}
    </Host>
  }
}
