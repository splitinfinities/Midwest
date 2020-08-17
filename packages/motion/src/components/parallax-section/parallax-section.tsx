import { Component, Prop } from '@stencil/core';

@Component({
	tag: 'midwest-parallax-section',
	styleUrl: 'parallax-section.css'
})
export class ParallaxSection {
	@Prop({ reflect: true }) speed: number = 1;
}
