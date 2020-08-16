export declare class ScrollZRoot {
    element: HTMLElement;
    initialOriginX: number;
    initialOriginY: number;
    itemZ: number;
    cameraSpeed: number;
    cameraZ: number;
    scenePerspective: number;
    distanceFromTop: number;
    distanceFromBottom: number;
    sections: HTMLElement[];
    perspectiveOrigin: {
        x: number;
        y: number;
        maxGap: number;
    };
    randomFloat(min: any, max: any): any;
    componentWillLoad(): void;
    prepare(): void;
    scatter(): Promise<void>;
    setSceneHeight(): void;
    moveCamera(): void;
    moveCameraAngle(event: any): void;
    render(): any;
}
//# sourceMappingURL=scroll-z-root.d.ts.map