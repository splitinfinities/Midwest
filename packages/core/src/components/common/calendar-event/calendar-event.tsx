import { Component, Prop, State, Element } from '@stencil/core';
import { EventDef } from '@fullcalendar/core';

@Component({
  tag: 'midwest-calendar-event'
})
export class CalendarEvent {
  @Element() element: HTMLElement;

  @State() object: EventDef;

  @Prop() event: string;
  @Prop() eventId: string;


  async componentWillLoad() {
    if (this.event && typeof this.event === "string") {
      this.object = JSON.parse(this.event);
    }

    this.element.closest("midwest-calendar").addEvent(this.object)
  }
}
