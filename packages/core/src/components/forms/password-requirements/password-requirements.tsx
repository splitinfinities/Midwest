import { Component, Prop, Watch, Element, State, h, Host } from '@stencil/core';
import zxcvbn from "zxcvbn";

@Component({
    tag: 'midwest-password-requirements'
})
export class PasswordRequirements {
    @Element() element: HTMLElement;

    @Prop({ reflect: true }) for: string;
    @Prop() size: "small" | "large";

    @State() input: HTMLMidwestInputElement;
    @State() value: any;

    @State() length: boolean = false;
    @State() uppercase: boolean = false;
    @State() number: boolean = false;
    @State() symbol: boolean = false;
    @State() commonPasswords: boolean = true;
    @State() commonNames: boolean = true;
    @State() repeated: boolean = true;

    componentDidLoad() {
        setTimeout(() => {
            this.input = document.querySelector(`midwest-input[name="${this.for}"]`);
            this.input.addEventListener('update', (e) => {
                // @ts-ignore
                this.value = e.detail;
            })
        }, 1000)
    }

    get fontSize() {
        if (this.size === "small") {
            return "text-base";
        } else if (this.size === "large") {
            return "text-lg";
        } else {
            return "text-xl";
        }
    }

    get allPass() {
        return this.length && this.uppercase && this.number && this.symbol && this.commonNames && this.commonPasswords && this.repeated
    }

    @Watch('value')
    handleValueChange() {
        const result = zxcvbn(this.value);
        this.length = this.value.length >= 10;
        this.uppercase = (/[A-Z]/.test(this.value));
        this.number = (/[0-9]/.test(this.value));
        this.symbol = (/[^A-Za-z0-9]/.test(this.value));
        this.commonPasswords = result.feedback.warning !== "This is a very common password";
        this.commonNames = result.feedback.warning !== "Names and surnames by themselves are easy to guess";
        this.repeated = result.feedback.warning !== 'Repeats like "abcabcabc" are only slightly harder to guess than "abc"';
    }

    renderItem(test: boolean, copy: string) {
        return <midwest-grid style={{ "grid-template-columns": "1.25rem 1fr", "--grid-gap": "0.5rem" }} class={`items-center ${test ? 'text-green-6' : 'text-red-6'}`}>
            <midwest-icon class={`${this.fontSize} text-2xl`} name={test ? "valid" : "close"} />
            <p class={`${this.fontSize} ${test ? 'text-green-5' : 'text-red-5'}`}>{copy}</p>
        </midwest-grid>
    }

    render() {
        return <Host>
            {!this.allPass && this.renderItem(this.length, "10 characters or longer")}
            {!this.allPass && this.renderItem(this.uppercase, "At least 1 uppercase character")}
            {!this.allPass && this.renderItem(this.number, "At least 1 number")}
            {!this.allPass && this.renderItem(this.symbol, "At least 1 symbol")}
            {!this.allPass && this.renderItem(this.commonPasswords, "Cannot be common passwords ('password123 is bad')")}
            {!this.allPass && this.renderItem(this.commonNames, "Cannot be a name ('andrew')")}
            {!this.allPass && this.renderItem(this.repeated, "Cannot be repeated keys ('asdfasdfasdf')")}
            {this.allPass && <h3 class="text-green-5">This password is great!</h3>}
        </Host>
    }
}
