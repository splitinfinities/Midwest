/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ExampleNoShadow {
    }
    interface ExampleWithShadow {
    }
    interface ExportToFigma {
        "element": HTMLElement;
        "noKey": boolean;
    }
}
declare global {
    interface HTMLExampleNoShadowElement extends Components.ExampleNoShadow, HTMLStencilElement {
    }
    var HTMLExampleNoShadowElement: {
        prototype: HTMLExampleNoShadowElement;
        new (): HTMLExampleNoShadowElement;
    };
    interface HTMLExampleWithShadowElement extends Components.ExampleWithShadow, HTMLStencilElement {
    }
    var HTMLExampleWithShadowElement: {
        prototype: HTMLExampleWithShadowElement;
        new (): HTMLExampleWithShadowElement;
    };
    interface HTMLExportToFigmaElement extends Components.ExportToFigma, HTMLStencilElement {
    }
    var HTMLExportToFigmaElement: {
        prototype: HTMLExportToFigmaElement;
        new (): HTMLExportToFigmaElement;
    };
    interface HTMLElementTagNameMap {
        "example-no-shadow": HTMLExampleNoShadowElement;
        "example-with-shadow": HTMLExampleWithShadowElement;
        "export-to-figma": HTMLExportToFigmaElement;
    }
}
declare namespace LocalJSX {
    interface ExampleNoShadow {
    }
    interface ExampleWithShadow {
    }
    interface ExportToFigma {
        "element"?: HTMLElement;
        "noKey"?: boolean;
    }
    interface IntrinsicElements {
        "example-no-shadow": ExampleNoShadow;
        "example-with-shadow": ExampleWithShadow;
        "export-to-figma": ExportToFigma;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "example-no-shadow": LocalJSX.ExampleNoShadow & JSXBase.HTMLAttributes<HTMLExampleNoShadowElement>;
            "example-with-shadow": LocalJSX.ExampleWithShadow & JSXBase.HTMLAttributes<HTMLExampleWithShadowElement>;
            "export-to-figma": LocalJSX.ExportToFigma & JSXBase.HTMLAttributes<HTMLExportToFigmaElement>;
        }
    }
}