import { Component, Element, Prop, h, Host } from '@stencil/core';

@Component({
	tag: 'skeleton-img',
	styleUrl: 'skeleton-img.css'
})
export class SkeletonImg {
	@Element() element: HTMLElement;

	@Prop({ reflect: true }) width: number = 600;
	@Prop({ reflect: true }) height: number = 300;
	@Prop({ reflect: true }) block: boolean = false;
	@Prop({ reflect: true }) loading: boolean = false;
	@Prop({ reflect: true }) icon: boolean = false;

	in() {
		this.element.classList.add('visible')
	}

	out() {
		this.element.classList.remove('visible')
	}

	render() {
		return <Host style={!this.block && { '--width': `${this.width}px`, '--height': `${this.height}px` }}>
			{this.loading && this.icon && <midwest-progress indeterminate />}
			<svg width={this.width} height={this.height} viewBox={`0 0 ${this.width} ${this.height}`}>
				<rect width={this.width} height={this.height} />
			</svg>
			<midwest-intersection element={this.element} multiple in={this.in.bind(this)} out={this.out.bind(this)} />
		</Host>;
	}
}
