# stellar-device

This is a standalone Web Component for rendering arbitrary content inside of a device. The images have been optimized to deliver the best experience on any screen.

Disclaimer: I do not own any of the underlying product or user interface designs. By accessing these assets, you agree to obtain all necessary permissions from the underlying rights holders and/or adhere to any applicable brand use guidelines before using them. (disclaimer sourced from Facebook Design's devices resource: https://facebook.design/devices)

Apple devices have been sourced from Apple's official design resources site: https://developer.apple.com/design/resources/, and https://developer.apple.com/app-store/marketing/guidelines/#section-products

Android Devices sourced from Facebook Design's devices resource: https://facebook.design/devices


<!-- Auto Generated Below -->


## Usage

### Apple-tv

<stellar-device frame="apple-tv">
    <img src="https://placehold.it/1920x1080/ABC/FFF">
</stellar-device>


### Apple-tv-in-app

<stellar-device frame="apple-tv-in-app">
    <img src="https://placehold.it/1920x720/ABC/FFF">
    <img slot="secondary" src="https://placehold.it/740x444/ABC/FFF">
</stellar-device>


### Apple-watch

<stellar-device frame="apple-watch-42-black">
    <img src="https://placehold.it/624x780/ABC/FFF">
</stellar-device>

<stellar-device frame="apple-watch-42-white">
    <img src="https://placehold.it/624x780/ABC/FFF">
</stellar-device>

<stellar-device frame="apple-watch-44-black">
    <img src="https://placehold.it/736x896/ABC/FFF">
</stellar-device>

<stellar-device frame="apple-watch-44-white">
    <img src="https://placehold.it/736x896/ABC/FFF">
</stellar-device>


### Default

<stellar-device>
    <div style="background: rebeccapurple;"></div>
</stellar-device>


### Imac

<stellar-device frame="imac">
    <img src="https://placehold.it/2560x1440/ABC/FFF">
  </stellar-device>


### Imac-pro

<stellar-device frame="imac-pro">
    <img src="https://placehold.it/2560x1440/ABC/FFF">
  </stellar-device>


### Ipad-pro

<stellar-device frame="ipad-pro-portrait">
    <img src="https://placehold.it/2048x2732/ABC/FFF">
  </stellar-device>
  <stellar-device frame="ipad-pro-landscape">
    <img src="https://placehold.it/2732x2048/ABC/FFF">
  </stellar-device>


### Iphone-8

<stellar-device frame="iphone-8-silver">
    <img src="https://placehold.it/750x1334/ABC/FFF">
  </stellar-device>

  <stellar-device frame="iphone-8-spacegray">
    <img src="https://placehold.it/750x1334/ABC/FFF">
  </stellar-device>

  <stellar-device frame="iphone-8-plus-silver">
    <img src="https://placehold.it/828x1472/ABC/FFF">
  </stellar-device>

  <stellar-device frame="iphone-8-plus-spacegray">
    <img src="https://placehold.it/828x1472/ABC/FFF">
  </stellar-device>


### Iphone-xs

<stellar-device frame="iphone-xs">
    <img src="https://placehold.it/750x1624/ABC/FFF">
  </stellar-device>

  <stellar-device frame="iphone-xs-max">
    <img src="https://placehold.it/828x1792/ABC/FFF">
  </stellar-device>


### Ipod-touch

<stellar-device frame="ipod-touch-portrait-blue">
    <img src="https://placehold.it/640x1136/ABC/FFF">
  </stellar-device>

  <stellar-device frame="ipod-touch-landscape-blue">
    <img src="https://placehold.it/1136x640/ABC/FFF">
  </stellar-device>

  <stellar-device frame="ipod-touch-portrait-silver">
    <img src="https://placehold.it/640x1136/ABC/FFF">
  </stellar-device>

  <stellar-device frame="ipod-touch-landscape-silver">
    <img src="https://placehold.it/1136x640/ABC/FFF">
  </stellar-device>


### Macbook-air

<stellar-device frame="macbook-air">
    <img src="https://placehold.it/2880x1800/ABC/FFF">
  </stellar-device>


### Macbook-pro

<stellar-device frame="macbook-pro">
    <div style="width: 100%; height: 100%;overflow: auto;">
        <img src="https://placehold.it/2880x1800/ABC/FFF" style="display: block; width: 100%;" />
        <img src="https://placehold.it/2880x1800/999/FFF" style="display: block; width: 100%;" />
        <img src="https://placehold.it/2880x1800/444/FFF" style="display: block; width: 100%;" />
    </div>
</stellar-device>



## Properties

| Property | Attribute | Description     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Default         |
| -------- | --------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `frame`  | `frame`   | The Device Name | `"apple-tv" \| "apple-tv-in-app" \| "apple-watch-42-black" \| "apple-watch-42-white" \| "apple-watch-44-black" \| "apple-watch-44-white" \| "imac-pro" \| "imac" \| "ipad-pro-portrait" \| "ipad-pro-landscape" \| "iphone-8-silver" \| "iphone-8-spacegray" \| "iphone-8-plus-silver" \| "iphone-8-plus-spacegray" \| "iphone-xs" \| "iphone-xs-max" \| "ipod-touch-portrait-blue" \| "ipod-touch-landscape-blue" \| "ipod-touch-portrait-silver" \| "ipod-touch-landscape-silver" \| "macbook-air" \| "macbook-pro"` | `"macbook-pro"` |
| `retina` | `retina`  |                 | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `undefined`     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
