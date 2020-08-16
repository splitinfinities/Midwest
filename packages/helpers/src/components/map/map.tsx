import { Component, Host, h, Prop, Element, getAssetPath, Watch, Method } from '@stencil/core';
import { asyncForEach } from '@midwest-design/common';
import { } from 'googlemaps';

@Component({
  tag: 'midwest-map',
  styleUrl: 'map.css',
  assetsDirs: ["themes"]
})
export class Map {
  @Element() el: HTMLElement;

  @Prop() apiKey: string;
  @Prop() lat: number = -34.397;
  @Prop() lng: number = 150.644;
  @Prop() zoom: number = 8;
  @Prop() width: number = 1600;
  @Prop() height: number = 900;
  @Prop() noUi: boolean = false;
  @Prop({ reflect: true }) block: boolean = true;
  @Prop() theme: string;
  @Prop() gestureHandling: "greedy" | "cooperative" | "none" | "auto" = "auto";
  @Prop() zoomControls: boolean = false;
  @Prop() streetView: boolean = false;
  @Prop() mapType: boolean = false;
  @Prop() fullscreenControl: boolean = false;

  loaded: boolean = false;

  mapRef: google.maps.Map;
  bounds: google.maps.LatLngBounds;
  latLng: google.maps.LatLng;

  map: google.maps.Map;
  infowindow: google.maps.InfoWindow;

  markers = [];

  componentDidLoad() {
    this.loadGoogleMaps();
  }

  @Watch('theme')
  async handleTheme() {
    let styles = [];

    if (this.theme) {
      styles = await (await fetch(getAssetPath(`./themes/${this.theme}.json`))).json();
    }

    this.map.setOptions({ styles })
  }

  @Method()
  async geocodeAddress(address: string): Promise<any> {
    const geocoder = new google.maps.Geocoder()
    const result = await new Promise((resolve, reject) => {
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK') {
          resolve(results[0]);
        } else {
          reject('Cannot find that address');
        }
      });
    });

    return result;
  }

  loadGoogleMaps() {
    const googleMapsUrl = `https://maps.google.com/maps/api/js?key=${this.apiKey}&callback=initializeGoogleMap`;

    window["initializeGoogleMap"] = () => { this.initMap() };

    if (!window["loadingGoogleMaps"] && (typeof google !== 'object' || typeof google.maps !== 'object')) {
      window["loadingGoogleMaps"] = true;
      document.body.appendChild(Object.assign(
        document.createElement('script'), {
        type: 'text/javascript',
        src: googleMapsUrl,
        onload: () => this.initMap()
      }));
    } else if (typeof google === 'object' && typeof google.maps === 'object') {
      this.initMap();
    }
  }

  async initMap() {
    if (this.apiKey) {
      let styles: any = [];

      if (this.theme) {
        styles = await (await fetch(getAssetPath(`./themes/${this.theme}.json`))).json();
      }

      this.map = new google.maps.Map(this.el.querySelector('#map'), {
        center: { lat: this.lat, lng: this.lng },
        zoom: this.zoom,
        disableDefaultUI: this.noUi,
        gestureHandling: this.gestureHandling,
        zoomControl: this.zoomControls,
        streetViewControl: this.streetView,
        mapTypeControl: this.mapType,
        fullscreenControl: this.fullscreenControl,
        styles
      });

      this.infowindow = new google.maps.InfoWindow();

      this.initMarkers();
      this.hideLoader();
    }
  }

  async initMarkers() {
    const markerEls = this.el.querySelectorAll('midwest-map-marker');

    await asyncForEach(markerEls, async (markerEl) => {
      const marker = new google.maps.Marker(await markerEl.configuration(this.map));

      marker.addListener('click', () => {
        this.infowindow.setContent(markerEl.querySelector('template').innerHTML);
        this.infowindow.open(this.map, marker);
      });

      this.markers.push(marker);
    })
  }

  hideLoader() {
    this.loaded = true;
  }

  render() {
    return <Host intrinsicsize={`${this.width} x ${this.height}`} style={{
      "--width": `${this.width}px`,
      "--height": `${this.height}px`,
      "--aspect-ratio": `${this.height / this.width}`
    }} >
      <skeleton-img width={this.width} height={this.height} loading style={{ "opacity": `${this.loaded ? 0 : 1}` }} />
      <div id="map" />
    </ Host>
  }
}
