export declare class AnimateText {
    element: HTMLElement;
    letters: NodeListOf<HTMLElement>;
    originalText: string;
    incomingHTML: string;
    delay: number;
    duration: number;
    method: string;
    words: boolean;
    phrase: boolean;
    onlyIn: boolean;
    componentWillLoad(): void;
    in(): Promise<void>;
    out(): Promise<void>;
    render(): any;
}
//# sourceMappingURL=animate-text.d.ts.map