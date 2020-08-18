# midwest-pjax



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type  | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------- | --------- | ----------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pjax`   | `pjax`    |             | `any` | `new Pjax({     cacheBust: false,     scrollTo: 0,     selectors: [       "title",       "meta[name=description]",       "main",       "meta[name='csrf-token']",       "meta[name='csrf-param']"     ],     switches: {       async "main" (oldEl, newEl, options) {         const ie = (document.querySelector('html').getAttribute("mode") === "ie");                  if (ie) {           // @ts-ignore           oldEl.innerHTML = newEl.innerHTML         } else {           await oldEl.querySelector("animate-presence").exit();           oldEl.outerHTML = newEl.outerHTML         }          this.onSwitch(oldEl, newEl, options)       },     }   })` |


## Methods

### `loadContent(body: any) => Promise<any>`



#### Returns

Type: `Promise<any>`



### `loadUrl(url: any) => Promise<any>`



#### Returns

Type: `Promise<any>`



### `replace(selector: any, url: any) => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
