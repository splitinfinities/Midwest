import type { Components, JSX } from "../dist/types/components";

interface ExportToFigma extends Components.ExportToFigma, HTMLElement {}
export const ExportToFigma: {
  prototype: ExportToFigma;
  new (): ExportToFigma;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
