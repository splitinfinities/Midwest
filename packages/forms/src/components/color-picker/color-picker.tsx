import { Component, Prop, Element, State, Event, EventEmitter, Watch, h, Host } from '@stencil/core';
import { colors, darkMode } from '@midwest-design/common';
import properties from 'css-custom-properties'

@Component({
    tag: 'midwest-color-picker',
    styleUrl: 'color-picker.css',
    shadow: true
})
export class ColorPicker {
    @Element() element: HTMLElement;
    @Prop({ mutable: true, reflect: true }) val: string = "none";
    @Prop() notransparent: boolean = false;
    @State() options: Array<string>;
    @Event() update: EventEmitter;

    /**
     * Sets the button or link as an outlined button.
     */
    @Prop({ reflect: true }) dark: boolean = false;

    componentWillLoad() {
        darkMode(this)
        this.options = Object.keys(colors).filter((color) => {
            // @ts-ignore
            return !["base", "white", "black", "black-alt"].includes(color)
        })

        properties.set({
            "--selected-color": `var(--${this.val}5)`
        }, this.element);
    }

    @Watch('val')
    valueUpdatedHandler(val: string) {
        this.update.emit(val);

        properties.set({
            "--selected-color": `var(--${this.val}5)`
        }, this.element);
    }

    updateValue(color) {
        this.val = color;
    }

    render() {
        return <Host>
            <div class="wrap">
                {this.options.map(option => <button
                    type="button"
                    value={option}
                    class={option}
                    style={{ "background": `var(--${option}5)` }}
                    onClick={() => { this.updateValue(option); }} />
                )}
                {!this.notransparent && <button
                    type="button"
                    value={"none"}
                    class={"none"}
                    style={{ "background": `var(--white)` }}
                    onClick={() => { this.updateValue("none"); }} />}
                <div class="placeholder" />
            </div>
        </Host>
    }
}
