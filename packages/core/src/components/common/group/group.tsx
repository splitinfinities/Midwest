import { Component, Prop, State, Element, h, Host } from '@stencil/core'
import pluralize from 'pluralize';
import { darkMode } from '@midwest-design/common';

@Component({
	tag: 'midwest-group',
  styleUrl: 'group.css',
	shadow: true
})
export class Group {
	@Element() element: HTMLElement

	@Prop({ mutable: true, reflect: true }) size: string;
	@Prop({reflect: true}) choice: boolean;
	@Prop() extras: number;
	@Prop() overflow: boolean = false
	@Prop() count: number = 4
	@Prop() verbiage: string;
	@Prop({mutable: true, reflect: true}) buttons: boolean;
	@Prop({mutable: true, reflect: true}) avatars: boolean;

  /**
   * Sets the button or link as an outlined button.
   */
  @Prop({ reflect: true }) dark: boolean = false;

	@State() toSlot: Element[] = []

	componentWillLoad() {
		darkMode(this)
		this.sizes()

		this.element.querySelectorAll('midwest-button').forEach((el) => el.block = true);

		if (this.overflow) {
			if (this.element.children.length > this.count) {
				const children = Array.from(this.element.children) as HTMLMidwestAvatarElement[]
				children.forEach((element: HTMLMidwestAvatarElement, index: number) => {
					if ((index + 1) > this.count) {
						this.size = element.size
						this.toSlot.push(element)
						this.element.removeChild(element)
					}
				})
			}
		}
	}

	sizes() {
		const kids = Array.from(this.element.children)

		if (kids) {
			kids.forEach((kid: any) => {
				kid.size = this.size;
			})
		}
	}

	resultantExtras() {
		return this.toSlot.map((element) => {
			const attributes: any = {};
			Array.prototype.slice.call(element.attributes).forEach(function (item: any) {
				attributes[item.name] = item.value
			})
			return <element.tagName {...attributes} />
		})
	}

	render() {
		return <Host>
			{this.choice && <midwest-tag class="choice" size="small">OR</midwest-tag>}
			<slot />
			{this.overflow && <midwest-group-overflow count={this.extras} verbiage={pluralize(this.verbiage, this.count)}><slot name="overflow" /></midwest-group-overflow>}
		</Host>
	}
}