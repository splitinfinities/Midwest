import { Component, Host, h, Prop, Event, EventEmitter, State, Listen, Element, Method } from '@stencil/core';
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { simulate, onFocusOutsideOf } from '@midwest-design/common';

dayjs.extend(customParseFormat)

@Component({
  tag: 'midwest-datetime-picker',
  styleUrl: 'datetime-picker.scss',
  shadow: true,
})
export class DateTimePicker {

  @Element() element: HTMLElement;

  @Prop() method: "date"|"time"|"datetime" = 'datetime';

  @Prop() value: 'now'|string|string[] = 'now';
  @Prop({mutable: true, reflect: true}) view: "minutes"|"hours"|"years"|"months"|"days" = "hours";

  @Prop() dialRadius: number = 135;
  @Prop() outerRadius: number = 105;
  @Prop() innerRadius: number = 70;
  @Prop() tickRadius: number = 20;
  @Prop() duration: number = 350;
  @Prop() showClear: boolean = false;

  /**
   * auto close when minute is selected
   */
  @Prop() autoClose: boolean = true;

  @Prop({ reflect: true }) dark: boolean = false;

  @State() date: Dayjs;

  @State() year: string;
  @State() month: string;
  @State() day: string;

  @State() hours: string;
  @State() minutes: string;
  @State() pm: boolean = true;

  @State() x0: number = 0;
  @State() y0: number = 0;
  @State() dx: number = 0;
  @State() dy: number = 0;
  @State() moved: boolean = false;

  @Event({ bubbles: true, composed: true, eventName: "micro-update" }) microUpdate: EventEmitter;
  @Event({ bubbles: true, composed: true }) blurred: EventEmitter;
  @Event({ bubbles: true, composed: true }) update: EventEmitter;
  @Event({ bubbles: true, composed: true }) cancel: EventEmitter;
  @Event({ bubbles: true, composed: true, eventName: "close-modal" }) closeModal: EventEmitter;

  private hand: SVGElement;
  private bg: SVGElement;
  private plate: HTMLDivElement;
  private hourEl: HTMLButtonElement;
  private monthEl: HTMLButtonElement;
  private calendarEl: HTMLMidwestCalendarElement;

  componentWillLoad() {
    if (this.method === "date") {
      this.view = "months";
    }

    if (this.value === "now") {
      if (["datetime", "date"].includes(this.method)) {
        this.year = dayjs().format("YYYY");
        this.month = dayjs().format("MM");
        this.day = dayjs().format("DD");
        this.date = dayjs()
      }

      if (["datetime", "time"].includes(this.method)) {
        this.hours = dayjs().format("hh");
        this.minutes = dayjs().format("mm");
        this.pm = dayjs().hour() >= 12;
      }

    } else if (typeof this.value === "string" || dayjs.isDayjs(this.value)) {
      if (this.method === "datetime") {
        this.year = dayjs(this.value).format("YYYY");
        this.month = dayjs(this.value).format("MM");
        this.day = dayjs(this.value).format("DD");
        this.hours = dayjs(this.value).format("h");
        this.minutes = dayjs(this.value).format("mm");
        this.pm = dayjs(this.value).hour() >= 12;
        this.date = dayjs(this.value)
      } else if (this.method === "time") {
        this.hours = dayjs(this.value, "HH:mm").format("h");
        this.minutes = dayjs(this.value, "HH:mm").format("mm");
        this.pm = dayjs(this.value, "HH:mm").hour() >= 12;
      } else if (this.method === "date") {
        this.year = dayjs(this.value).format("YYYY");
        this.month = dayjs(this.value).format("MM");
        this.day = dayjs(this.value).format("DD");
        this.date = dayjs(this.value)
      }
    }

  }

  componentDidLoad() {
    onFocusOutsideOf(this.element, () => {
      this.blurred.emit();
    })

    if (this.method === "time") {
      this.hourEl.focus();
      this.hourEl.click();
      this.updateHand();
    } else {
      this.monthEl?.focus();
      this.monthEl?.click();
    }
  }

  static _addLeadingZero(num: number) {
    return (num < 10 ? '0' : '') + num;
  }

  /**
   * Get x position of mouse or touch event
   * @param {Event} e
   * @return {Point} x and y location
   */
  static _Pos(e: MouseEvent) {
    
    // @ts-ignore
    if (e.targetTouches && e.targetTouches.length >= 1) {
      // @ts-ignore
      return { x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY };
    }
    
    // mouse event
    return { x: e.clientX, y: e.clientY };
  }

  handleCancel() {
    this.cancel.emit({});

    this.closeModal.emit({
      el: this.element.closest("midwest-modal")
    })
  }

  handleMicroUpdate () {
    if (this.method === "time") {
      this.date = dayjs(`${this.pm ? parseInt(this.hours, 10) + 12 : this.hours }:${this.minutes}`, "HH:mm")
      this.value = this.date.format("HH:mm")
    } else if (this.method === "date") {
      this.value = this.date.format("YYYY-MM-DD")
    } else {
      let hours = this.pm ? parseInt(this.hours, 10) + 12 : parseInt(this.hours, 10);
      hours = hours === 12 ? 0 : hours;
      hours = hours === 24 ? 12 : hours;
      this.date = this.date.set("hour", hours).set("minute", parseInt(this.minutes, 10)).set("millisecond", 0)
      this.value = this.date.format()
    }

    this.microUpdate.emit({
      value: this.value,
      date: this.date
    });
  }

  handleDone() {
    if (this.method === "time") {
      this.date = dayjs(`${this.pm ? parseInt(this.hours, 10) + 12 : this.hours }:${this.minutes}`, "HH:mm")
      this.value = this.date.format("HH:mm")
    } else if (this.method === "date") {
      this.value = this.date.format("YYYY-MM-DD")
    } else {
      let hours = this.pm ? parseInt(this.hours, 10) + 12 : parseInt(this.hours, 10);
      hours = hours === 12 ? 0 : hours;
      hours = hours === 24 ? 12 : hours;
      this.date = this.date.set("hour", hours).set("minute", parseInt(this.minutes, 10)).set("millisecond", 0)
      this.value = this.date.format()
    }

    this.update.emit({
      value: this.value,
      date: this.date
    });

    this.closeModal.emit({
      el: this.element.closest("midwest-modal")
    })
  }

  handleAmPmClick (pm: boolean) {
    this.pm = pm;
    this.handleMicroUpdate()
  }

  handleClockClickStart(e: MouseEvent) {
    e.preventDefault();
    const clockPlateBR = this.plate.getBoundingClientRect();
    const offset = { x: clockPlateBR.left, y: clockPlateBR.top };

    this.x0 = offset.x + this.dialRadius;
    this.y0 = offset.y + this.dialRadius;
    this.moved = false;
    const clickPos = DateTimePicker._Pos(e);
    this.dx = clickPos.x - this.x0;
    this.dy = clickPos.y - this.y0;

    // Set clock hands
    this.setHand(this.dx, this.dy, false);
  }

  handleClockClickMove(e: MouseEvent) {
    if (this.moved) {
      e.preventDefault();
      const clockPlateBR = this.plate.getBoundingClientRect();
      const offset = { x: clockPlateBR.left, y: clockPlateBR.top };

      this.x0 = offset.x + this.dialRadius;
      this.y0 = offset.y + this.dialRadius;
      const clickPos = DateTimePicker._Pos(e);
      this.dx = clickPos.x - this.x0;
      this.dy = clickPos.y - this.y0;

      // Set clock hands
      this.setHand(this.dx, this.dy, false);
    }
  }

  handleDocumentClickMove(e: MouseEvent) {
    e.preventDefault();
    const clickPos = DateTimePicker._Pos(e);
    const x = clickPos.x - this.x0;
    const y = clickPos.y - this.y0;
    this.moved = true;
    this.setHand(x, y, false);
  }

  handleDocumentClickEnd(e: MouseEvent) {
    e.preventDefault();
    const clickPos = DateTimePicker._Pos(e);
    const x = clickPos.x - this.x0;
    const y = clickPos.y - this.y0;

    if (this.moved && x === this.dx && y === this.dy) {
      this.setHand(x, y, false);
    }

    this.handleMicroUpdate()

    this.update.emit({
      hours: this.hours,
      minutes: this.minutes
    })
  }

  handleDateChange(e: CustomEvent) {
    this.date = dayjs(e.detail.date);
    this.handleMicroUpdate()
  }

  setHand(x: number, y: number, roundBy5: boolean) {
    const isHours = this.view === 'hours';
    const unit = Math.PI / (isHours || roundBy5 ? 6 : 30);
    const z = Math.sqrt(x * x + y * y);
    const inner = isHours && z < (this.outerRadius + this.innerRadius) / 2;
    let radian = Math.atan2(x, -y);
    let radius = inner ? this.innerRadius : this.outerRadius;

    radius = this.outerRadius;

    // Radian should in range [0, 2PI]
    if (radian < 0) {
      radian = Math.PI * 2 + radian;
    }

    // Get the round value
    let value = Math.round(radian / unit);

    // Get the round radian
    radian = value * unit;

    // Correct the hours or minutes
    if (isHours) {
      if (value === 0) value = 12;
    } else {
      if (roundBy5) value *= 5;
      if (value === 60) value = 0;
    }

    if (this.view === "minutes") {
      this.minutes = DateTimePicker._addLeadingZero(value);
    } else if (this.view === "hours") {
      this.hours = DateTimePicker._addLeadingZero(value);
    }

    // Set clock hand and others' position
    const cx1 = Math.sin(radian) * (radius - this.tickRadius);
    const cy1 = -Math.cos(radian) * (radius - this.tickRadius);
    const cx2 = Math.sin(radian) * radius;
    const cy2 = -Math.cos(radian) * radius;

    this.hand.setAttribute('x2', `${cx1}`);
    this.hand.setAttribute('y2', `${cy1}`);
    this.bg.setAttribute('cx', `${cx2}`);
    this.bg.setAttribute('cy', `${cy2}`);

    this.handleMicroUpdate()
  }

  @Method()
  async updateHand(value?: number|string) {
    const selector = (this.view === "hours") ? `.${this.view} .tick[data-number="${value ?? parseInt(this.hours, 10)}"]` : `.${this.view} .tick[data-number="${value ?? this.minutes}"]`
    const tick = this.element.shadowRoot.querySelector(selector);
    const bound = tick.getBoundingClientRect();
    simulate(tick, 'click', { pointerX: bound.left + (bound.width / 2), pointerY: bound.top + (bound.height / 2) });
    
    this.handleMicroUpdate()
  }

  @Method()
  async increment() {
    if (this.view === "hours") {
      let hours = parseInt(this.hours, 10) + 1;
      hours = hours === 13 ? 1 : hours;
      this.updateHand(hours);
    } else if (this.view === "minutes") {
      let minutes = parseInt(this.minutes, 10) + 1;
      minutes = minutes === 60 ? 0 : minutes;
      this.updateHand(DateTimePicker._addLeadingZero(minutes));
    } else if (this.view === "days") {
      this.calendarEl.select(this.date.add(1, "day").toDate())
    } else if (this.view === "months") {
      this.calendarEl.select(this.date.add(1, "month").toDate())
    } else if (this.view === "years") {
      this.calendarEl.select(this.date.add(1, "year").toDate())
    }

    this.handleMicroUpdate()
  }

  @Method()
  async decrement() {
    if (this.view === "hours") {
      let hours = parseInt(this.hours, 10) - 1;
      hours = hours === 0 ? 12 : hours;
      this.updateHand(hours);
    } else if (this.view === "minutes") {
      let minutes = parseInt(this.minutes, 10) - 1;
      minutes = minutes === -1 ? 59 : minutes;
      this.updateHand(DateTimePicker._addLeadingZero(minutes));
    } else if (this.view === "days") {
      this.calendarEl.select(this.date.subtract(1, "day").toDate())
    } else if (this.view === "months") {
      this.calendarEl.select(this.date.subtract(1, "month").toDate())
    } else if (this.view === "years") {
      this.calendarEl.select(this.date.subtract(1, "year").toDate())
    }

    this.handleMicroUpdate()
  }

  @Listen('keydown')
  handleKeydown(e: KeyboardEvent) {
    if (["ArrowUp", "ArrowDown", "Up", "Down"].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (["ArrowUp", "Up"].includes(e.key)) {
      this.increment()
    } else if (["ArrowDown", "Down"].includes(e.key)) {
      this.decrement()
    }
  }

  renderClock() {
    const dialRadius = this.dialRadius;
    const tickRadius = this.tickRadius;
    const diameter = dialRadius * 2;

    return <svg width={diameter} height={diameter}>
      <g transform={`translate(${dialRadius},${dialRadius})`}>
        <circle class="canvas-bearing" cx="0" cy="0" r="4" />
        <line class="hand" x1="0" y1="0" ref={(e) => { this.hand = e; }} />
        <circle class="canvas-bg" r={tickRadius} ref={(e) => { this.bg = e; }} />
      </g>
    </svg>
  }

  renderCalendar() {
    return <midwest-calendar 
      header={{
        start: false,
        center: false,
        end: "today prev,next"
      }}
      size="small"
      ref={(e)=>{ this.calendarEl = e; }}
      value={this.date.toDate()}
      onDateClick={this.handleDateChange.bind(this)}
    />;
  }

  renderHours () {
    const ticks = new Array(12).fill("");

    return ticks.map((_, i) => {
      const radian = i / 6 * Math.PI;
      const radius = this.outerRadius;

      const style = {
        left: this.dialRadius + Math.sin(radian) * radius - this.tickRadius + 'px',
        top: this.dialRadius - Math.cos(radian) * radius - this.tickRadius + 'px'
      }

      return <midwest-button tag="button" ghost class="tick" buttonTabIndex={-1} data-number={i === 0 ? 12 : i} size="large" style={style}>{i === 0 ? 12 : i}</midwest-button>
    }); 
  }

  renderMinutes () {
    const ticks = new Array(60).fill("");

    return ticks.map((_, i) => {
      const radian = i / 30 * Math.PI;

      const style = {
        left: this.dialRadius +  Math.sin(radian) * this.outerRadius - this.tickRadius + 'px',
        top: this.dialRadius - Math.cos(radian) * this.outerRadius - this.tickRadius + 'px'
      }

      return <midwest-button tag="button" ghost class="tick" buttonTabIndex={-1} data-number={DateTimePicker._addLeadingZero(i)} hidden={i % 5 !== 0} size="large" style={style}>{DateTimePicker._addLeadingZero(i)}</midwest-button>
    }).filter(Boolean); 
  }

  render() {
    return <Host>
      <midwest-card>
        <section class="flush">
          <div class="layout">
            { <div class={`digital-display ${["date"].includes(this.method) ? "hidden" : ""}`}>
              <div class="text-container">
                <div class="display-column">
                  {this.method !== "time" && <div class="display-date">
                    <button ref={(e) => { this.monthEl = e; }} onClick={() => { this.view = "months"; }} onFocus={() => { this.view = "months"; }} class={`display-months ${this.view === "months" ? "open" : ""}`}>{this.date.format("MMM")}</button>
                    <button onClick={() => { this.view = "days"; }} onFocus={() => { this.view = "days"; }} class={`display-days ${this.view === "days" ? "open" : ""}`}>{this.date.format("D")}</button>,
                    <button onClick={() => { this.view = "years"; }} onFocus={() => { this.view = "years"; }} class={`display-years ${this.view === "years" ? "open" : ""}`}>{this.date.format("YYYY")}</button>
                  </div>}
                  {this.method !== "date" && <div class="display-time">
                    <button ref={(e) => { this.hourEl = e; }} onClick={() => { this.view = "hours"; this.updateHand() }} onFocus={() => { this.view = "hours"; this.updateHand() }} class={`display-hours ${this.view === "hours" ? "open" : ""}`}>{this.hours}</button>
                    :
                    <button onClick={() => { this.view = "minutes"; this.updateHand() }} onFocus={() => { this.view = "minutes"; this.updateHand() }} class={`display-minutes ${this.view === "minutes" ? "open" : ""}`}>{this.minutes}</button>
                  </div>}
                </div>
                {this.method !== "date" && <div class="display-column display-am-pm">
                  <div class="span-am-pm">
                    <midwest-switch value={this.pm} novalidate checked={this.pm} tabIndex={0} onUpdate={(e) => { e.stopPropagation(); this.handleAmPmClick(e.detail.checked) }}>
                      <midwest-label slot="yes">PM</midwest-label>
                      <midwest-label slot="no">AM</midwest-label>
                    </midwest-switch>
                  </div>
                </div>}

                <midwest-button 
                  tag="button" 
                  onClick={this.handleDone.bind(this)}>
                    Done
                </midwest-button>
              </div>
            </div>}
            {this.method !== "time" && <div class={`calendar-display ${!["days", "months", "years"].includes(this.view) && "out"}`}>
              {this.renderCalendar()}
            </div>}
            {this.method !== "date" && <div class={`analog-display ${["days", "months", "years"].includes(this.view) && "out"}`}>
              <div class="plate" ref={(e) => { this.plate = e; }} onClick={this.handleClockClickStart.bind(this)} onMouseDown={(_) => { this.moved = true }} onMouseMove={this.handleClockClickMove.bind(this)} onMouseUp={(_) => { this.moved = false }}>
                <div class="canvas">
                  {this.renderClock()}
                </div>
                <div class={`dial hours ${this.view !== "hours" && "dial-out"}`}>{this.renderHours()}</div>
                <div class={`dial minutes ${this.view !== "minutes" && "dial-out"}`}>{this.renderMinutes()}</div>
              </div>
            </div>}
          </div>
        </section>
      </midwest-card>
    </Host>
  }
}