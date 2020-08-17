import { Component, Prop, Method } from '@stencil/core';
import Pjax from 'pjax';
import delay from 'async-delay';

@Component({
  tag: 'midwest-pjax',
  shadow: true
})
export class SaPjax {

  @Prop() pjax: any = new Pjax({
    cacheBust: false,
    scrollTo: 0,
    selectors: [
      "title",
      "meta[name=description]",
      "main",
      "meta[name='csrf-token']",
      "meta[name='csrf-param']"
    ],
    switches: {
      async "main" (oldEl, newEl, options) {
        const ie = (document.querySelector('html').getAttribute("mode") === "ie");
        
        if (ie) {
          // @ts-ignore
          oldEl.innerHTML = newEl.innerHTML
        } else {
          await oldEl.querySelector("animate-presence").exit();
          oldEl.outerHTML = newEl.outerHTML
        }

        this.onSwitch(oldEl, newEl, options)
      },
    }
  });

  loader: HTMLSaProgressElement = document.querySelector("midwest-progress");
  interval: any;

  @Method()
  async replace(selector, url) {
    const switches = {};
    switches[selector] = Pjax.switches.replaceNode;
    const pjax = new Pjax({
      selectors: [selector],
      switches 
    });
    pjax.loadUrl(url);
  }

  @Method()
  async loadUrl(url) {
    return this.pjax.loadUrl(url);
  }

  @Method()
  async loadContent(body) {
    return this.pjax.loadContent(body);
  }

  componentDidLoad() {
    document.addEventListener("pjax:send", async () => {
      this.loader.value = 0;
      this.loader.style.opacity = "1";
      this.interval = setInterval(() => {
        if (this.loader.value <= 80) {
          this.loader.value = this.loader.value + 10
        }
      }, 25)
    });

    document.addEventListener("pjax:complete", async () => {
      if (this.loader) {
        clearInterval(this.interval);
        this.loader.value = 100;
        await delay(350);
        this.loader.style.opacity = "0";
        this.loader.value = 0;
      }
    });
  }
}
