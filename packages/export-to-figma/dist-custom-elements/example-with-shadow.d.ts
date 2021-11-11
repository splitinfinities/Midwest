import type { Components, JSX } from "../dist/types/components";

interface ExampleWithShadow extends Components.ExampleWithShadow, HTMLElement {}
export const ExampleWithShadow: {
  prototype: ExampleWithShadow;
  new (): ExampleWithShadow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
