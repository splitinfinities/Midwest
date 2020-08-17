import { Component, Element, State, Prop, Method, Watch, h, Listen } from '@stencil/core';
import Highcharts from 'highcharts'
import Data from 'highcharts/modules/data';
import Exporting from 'highcharts/modules/exporting'
import OfflineExporting from 'highcharts/modules/offline-exporting'
import { theme, HighchartsModel } from './lib/options';
import { shuffledColors } from '@midwest-design/common';

@Component({
  tag: 'midwest-chart',
  styleUrl: 'chart.css',
  shadow: true
})
export class Chart {
  @Element() element: HTMLElement;

  @State() chart: HTMLElement;
  @State() optionsObject: any = {};
  @State() dataObject: any = {};
  @State() highchart: Highcharts.Chart;
  @State() informant: HTMLElement;

  @Prop() type: "area" | "areaspline" | "bar" | "bubble" | "column" | "line" | "pie" | "polygon" | "scatter" | "spline" | "waterfall";
  @Prop() data: string;
  @Prop() src: string;
  @Prop() for: string;
  @Prop() enableCredits: boolean = false;
  @Prop() chartTitle: string;
  @Prop() config: HighchartsModel = new HighchartsModel;
  @Prop({ reflect: true }) dark: boolean = false;
  @Prop() exporting: boolean = false;

  componentWillLoad() {
    Data(Highcharts);

    if (this.exporting) {
      Exporting(Highcharts);
      OfflineExporting(Highcharts);
    }

    // TODO: do better?
    if (this.data) {
      this.dataObject = JSON.parse(this.data);
      this.data = "";
    }

    // TODO: make src work
  }

  @Watch('config')
  handleConfig() {
    this.options(this.config);
  }

  @Watch('type')
  @Watch('for')
  handleAttrs() {
    this.options({})
  }

  componentDidLoad() {
    this.options(theme);
    this.refresh();
  }

  @Listen('resize', { target: "window" })
  @Listen('fullscreenchange', { target: "document" })
  handResize() {
    this.highchart.reflow();
    this.refresh();
  }

  @Listen('keyup', { target: "document" })
  handleEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.highchart.reflow();
      this.refresh();
    }
  }

  @Method()
  async options(newOptions: any) {
    this.optionsObject = {
      ...this.optionsObject,
      chart: {
        type: this.type
      },
      title: {
        text: this.chartTitle
      },
      data: {
        table: this.for
      },
      credits: {
        enabled: this.enableCredits
      },
      series: this.dataObject.series,
      plotOptions: {
        column: {
          groupPadding: 0.2,
          pointPadding: 0
        }
      },
      xAxis: this.dataObject?.xaxis || { categories: [] },
      yAxis: this.dataObject?.yaxis || { categories: [] },
    };

    this.optionsObject = { ...newOptions, ...theme, ...this.optionsObject};
    this.optionsObject = { ...this.optionsObject, ...{ colors: shuffledColors } }

    Highcharts.setOptions({
      lang: {
        thousandsSep: ','
      }
    });

    this.refresh()
  }

  @Method()
  async get_options() {
    return this.optionsObject
  }

  @Method()
  async refresh() {
    this.chart = this.element.shadowRoot.querySelector('.highchart');
    if (this.chart) {
      this.highchart = Highcharts.chart(this.chart, this.optionsObject);
    }
  }

  render() {
    return <div class="highchart" />;
  }
}
