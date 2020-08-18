import { Component, Host, h, Prop, Event, EventEmitter, Method } from '@stencil/core';
import { Calendar, EventDef } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import dayjs from 'dayjs';
import delay from 'async-delay';
import { darkMode } from '@midwest-design/common';

@Component({
  tag: 'midwest-calendar',
  styleUrl: 'calendar.css'
})
export class MidwestCalendar {

  @Prop({ reflect: true }) dark: boolean = false;

  @Prop() noToolbar: boolean;
  @Prop() selectable: boolean;
  @Prop() selectRange: boolean;
  @Prop() header: boolean|object = false;
  @Prop() events: any[];
  @Prop() backgroundEvents: any[];
  @Prop({reflect: true}) size: "medium"|"small" = "medium";

  @Prop() value: string|Date; 

  @Event() dateClick: EventEmitter;
  
  pjax: any = document.querySelector("midwest-pjax");
  calendar: Calendar;
  calendarEl: HTMLDivElement;

  options: any = {
    plugins: [ interactionPlugin, dayGridPlugin ].filter(Boolean),
    defaultView: 'dayGridMonth',
    header: this.header ? this.header : this.noToolbar ? false : {
      left: 'today',
      center: 'title',
      right: 'prevYear,prev,next,nextYear'
    },
    navLinks: false,
    editable: true,
    selectable: true,
    selectOverlap: false,
    selectAllow: (a) => this.selectRange || dayjs(a.end).diff(a.start, "day") === 1,
    dateClick: (info) => {
      this.dateClick.emit({
        date: info.date,
        value: info.dateStr
      });
    },
    eventClick: (info) => {
      if (this.pjax) {
        info.jsEvent.preventDefault();
        this.pjax.loadUrl(info.event.url)
      }
    },
    events: []
  }

  get normalizedOpts (): any {
    return {
      ...this.options,
      ...{
        defaultDate: this.value,
        events: this.events,
      },
    }
  }

  componentWillLoad() {
    darkMode(this)
  }

  async componentDidLoad() {
    this.calendar = new Calendar(this.calendarEl, this.normalizedOpts);
    await delay(200);
    this.calendar.render();
    this.calendar.gotoDate(dayjs(this.value).toDate());
    this.calendar.select({
      start: dayjs(this.value).toDate(),
      end: dayjs(this.value).add(1, "day").toDate()
    })
  }

  @Method()
  async getCalendar() {
    return this.calendar
  }

  @Method()
  async addEvent(event: EventDef) {
    this.calendar.addEvent(event);
  }

  @Method()
  async select(date: Date) {
    this.calendar.gotoDate(date);
    this.calendar.select({
      start: dayjs(date).toDate(),
      end: dayjs(date).add(1, "day").toDate()
    });

    this.dateClick.emit({
      date,
      value: date.toString()
    });
  }

  render() {
    return <Host>
      <div ref={(e) => { this.calendarEl = e; }} />
    </Host>
  }

}
