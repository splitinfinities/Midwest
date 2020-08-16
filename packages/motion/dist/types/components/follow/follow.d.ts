export declare class Follow {
    element: HTMLElement;
    type: "scroll" | "cursor";
    distance: number;
    padding: number;
    componentWillLoad(): void;
    componentDidLoad(): void;
    get offset(): number;
    update(): void;
    attachScroll(): void;
    attachCursor(): void;
    minmaxx(x: any): any;
    render(): any;
}
//# sourceMappingURL=follow.d.ts.map