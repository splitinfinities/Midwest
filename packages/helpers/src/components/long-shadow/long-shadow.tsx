import { Component, Element, Prop, Method, State, h, Watch } from '@stencil/core';
import properties from 'css-custom-properties';

@Component({
    tag: 'midwest-long-shadow',
    styleUrl: 'long-shadow.css',
    shadow: true
})
export class LongShadow {
    @Element() element: HTMLElement

    @Prop({ reflect: true }) direction: "top-left" | "top-right" | "bottom-left" | "bottom-right" = "top-left";
    @Prop({ reflect: true }) length: number = 100;
    @Prop({ reflect: true }) delay: number = 100;
    @Prop({ reflect: true }) shade: number = 7;
    @Prop({ reflect: true }) complement: boolean;
    @Prop({ reflect: true }) timing: number = 50;
    @Prop({ reflect: true, mutable: true }) active: boolean = false;
    @State() children;

    componentWillLoad() {
        this.children = Array.from(this.element.children);
    }

    @Watch('length')
    @Watch('direction')
    handleChanges() {
        this.in();
    }

    getShadowCSS() {
        const vertical = this.direction.includes("top");
        const horizontal = this.direction.includes("left");

        // @ts-ignore
        let css = Array(this.length).fill("").map((item, index) => {
            const y = index * (horizontal ? -1 : 1);
            const x = index * (vertical ? -1 : 1);

            return `${y}px ${x}px var(--${this.complement ? "complement" : "theme"}-${this.shade})`;
        });

        return css.join()
    }

    @Method()
    async out() {
        properties.set({ "--text-shadow": "none" }, this.element)
    }

    @Method()
    async in() {
        properties.set({ "--text-shadow": this.getShadowCSS() }, this.element)
    }

    render() {
        return <midwest-intersection element={this.element} multiple in={this.in.bind(this)} out={this.out.bind(this)}>
            <slot />
        </midwest-intersection>
    }
}
