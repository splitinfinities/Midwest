import type { Components, JSX } from "../dist/types/components";

interface MidwestDevice extends Components.MidwestDevice, HTMLElement {}
export const MidwestDevice: {
  prototype: MidwestDevice;
  new (): MidwestDevice;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
