import "ionicons";
export declare class Slides {
    el: HTMLElement;
    /**
     * Show or hide the pager
     */
    pager: boolean;
    /**
     * Show or hide the pager
     */
    padding: string;
    /**
     * Show or hide the pager
     */
    active: number[];
    /**
     * Show or hide the pager
     */
    first: boolean;
    /**
     * Show or hide the pager
     */
    last: boolean;
    slides: NodeListOf<HTMLMidwestSlideElement>;
    componentWillLoad(): void;
    scrollToSlide(element: any): void;
    next(): void;
    previous(): void;
    handleSwitched(e: any): void;
    render(): any;
}
//# sourceMappingURL=slides.d.ts.map