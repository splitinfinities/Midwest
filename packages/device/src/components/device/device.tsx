import { Component, Prop, Host, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'midwest-device',
  styleUrl: 'device.css',
  assetsDirs: ["vendor"],
  shadow: true
})
export class Devices {
  /**
   * The Device Name
   */
  @Prop({reflectToAttr: true}) frame: "apple-tv"|"apple-tv-in-app"|"apple-watch-42-black"|"apple-watch-42-white"|"apple-watch-44-black"|"apple-watch-44-white"|"imac-pro"|"imac"|"ipad-pro-portrait"|"ipad-pro-landscape"|"iphone-8-silver"|"iphone-8-spacegray"|"iphone-8-plus-silver"|"iphone-8-plus-spacegray"|"iphone-xs"|"iphone-xs-max"|"ipod-touch-portrait-blue"|"ipod-touch-landscape-blue"|"ipod-touch-portrait-silver"|"ipod-touch-landscape-silver"|"macbook-air"|"macbook-pro" = "macbook-pro";

  // Render device at retina size (rarely needed)
  @Prop() retina: boolean;

  render() {
    return <Host style={{"--cutout": `url("${getAssetPath('.')}/vendor/${this.frame}-cutout.svg")`}}>
        <img src={`${getAssetPath('.')}/vendor/${this.frame}${this.retina ? "@2x" : ""}.png`} class="device" />
        <div class="device-content-1"><slot /></div>
        <div class="device-content-2"><slot name="secondary" /></div>
        <div class="device-content-3"><slot name="tertiary" /></div>
    </Host>;
  }
}
