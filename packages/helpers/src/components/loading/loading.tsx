import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'midwest-loading'
})
export class Loading {
    @Prop() step: number = 0;
    @Prop() steps: number = 3;
    @Prop() error: string;
    @Prop() show: boolean;
    @Prop() stretch: boolean = false;
    @Prop() cta: any;

    render() {
        return <div class={`${this.stretch ? "absolute top-0 left-0 right-0 bottom-0 w-100 h-100 z-50 b--gray1 dm-b--gray8 ba br3 bg-white dm-bg-gray9" : ""} pa4 items-center justify-center ${(this.step === this.steps || this.step === -1) ? 'dn' : ''} ${(this.step < this.steps && this.step >= 0 || this.error) ? 'flex' : ''}`}>
        <copy-wrap align="center">
            <h3 class="ttc mt-0 mb-3 px-4">{ this.error ? "Uh oh! Something went wrong." : "One sec..." }</h3>
            {this.error && <p class="ttc mb-3 px-4 text-gray8" innerHTML={this.error} />}
            <div class={`flex items-center justify-between max-w-xs ${this.error ? "theme-red" : "theme-green"}`}>
                { this.error && <midwest-icon name="alert" class="text-3xl text-base-5 mr-2" /> }
                <midwest-progress max={this.steps - 1} value={this.step} class="w-full" />
                <div class="flex">{ this.error && this.cta }</div>
            </div>
        </copy-wrap>
        </div>
    }
}
