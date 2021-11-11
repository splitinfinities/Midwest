import type { Components, JSX } from "../dist/types/components";

interface ExampleNoShadow extends Components.ExampleNoShadow, HTMLElement {}
export const ExampleNoShadow: {
  prototype: ExampleNoShadow;
  new (): ExampleNoShadow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
