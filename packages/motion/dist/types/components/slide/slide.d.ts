import { EventEmitter } from '../../stencil-public-runtime';
export declare class Slide {
    el: HTMLElement;
    slideId: number;
    width: string;
    swiper: boolean;
    visible: boolean;
    switched: EventEmitter;
    componentWillLoad(): void;
    onVisible(): void;
    in(): void;
    out(): void;
    render(): any;
}
//# sourceMappingURL=slide.d.ts.map