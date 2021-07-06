import { Component, h, Prop, Watch, Host } from '@stencil/core';
import { createStore } from "@stencil/store";
import { colors } from '@midwest-design/common';
import { styleContents } from './styleContents';

@Component({
    tag: 'midwest-theme'
})
export class Theme {
    @Prop() dark: boolean = false;
    @Prop() body: boolean = false;
    @Prop() size: number = 16;
    @Prop() system: boolean = false;
    @Prop() inert: boolean = false;
    @Prop() base: ThemeableColors = "red";
    @Prop() complement: ThemeableColors = "indigo";
    @Prop() colors: string[] = Object.keys(colors);

    @Prop() store: any = createStore({
        base: "red",
        complement: "indigo",
        dark: false
    });

    htmlEl: HTMLHtmlElement = document.querySelector('html');
    bodyEl: HTMLBodyElement = document.querySelector('body');

    componentWillLoad() {
        if (!this.inert) {
            if (this.system) {
                this.dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                this.store.set("dark", this.dark);
            }

            this.observeSize();
            this.observeDark();
            this.observeColors();
        } else {
            document.querySelector("midwest-theme").base = this.base;
            document.querySelector("midwest-theme").complement = this.complement;
            document.querySelector("midwest-theme").dark = this.dark;
        }
    }

    @Watch('base')
    @Watch('complement')
    observeColors() {
        if (!this.inert) {
            this.store.set("base", this.base);
            this.store.set("complement", this.complement);

            if (this.body) {
                this.colors.forEach((color) => {
                    this.htmlEl.classList.remove(`theme-${color}`)
                    this.htmlEl.classList.remove(`complement-${color}`)
                    this.bodyEl.classList.remove(`theme-${color}`)
                    this.bodyEl.classList.remove(`complement-${color}`)
                })

                this.bodyEl.classList.add(`theme-${this.base}`)
                this.bodyEl.classList.add(`complement-${this.complement}`)
            }
        }
    }

    @Watch('dark')
    observeDark() {
        if (!this.inert) {
            this.store.set("dark", this.dark);

            if (this.body) {
                if (this.dark) {
                    this.htmlEl.classList.add('dark-mode');
                    this.bodyEl.classList.add('dark-mode');
                } else {
                    this.htmlEl.classList.remove('dark-mode');
                    this.bodyEl.classList.remove('dark-mode');
                }
            }
        }
    }

    @Watch('size')
    observeSize() {
        if (!this.inert) {
            const style = document.createElement("style");
            style.id = "midwest-responsive";

            style.innerHTML = styleContents(this.size);

            const head = document.querySelector("head");
            if (head.querySelector("style#sa-responsive-sizes")) { head.removeChild(head.querySelector("style#sa-responsive-sizes")); }
            head.appendChild(style);
        }
    }


    render() {
        return <Host class={`${this.dark ? "dark-mode" : "light-mode"} theme-${this.base} block complement-${this.complement}`}><slot /></Host>
    }
}
