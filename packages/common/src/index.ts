export * from "./lib/Model";
export * from "./lib/asyncForEach";
export * from "./lib/form2js";
export * from "./lib/titleCase";
export * from "./lib/convert";
export * from "./lib/extractHostname";
export * from "./lib/humanize";
export * from "./lib/shuffle";
export * from "./lib/addDataToForm";
export * from "./lib/simulate";
export * from "./lib/colors";
export * from "./lib/format";
export * from "./lib/generateID";
export * from "./lib/onFocusOutsideOf";
export * from "./lib/customElementDocGenerator";
export * from "./lib/storyTemplate";
export * from "./lib/typicalStencilConfig";
export * from "./lib/asTime";
export * from "./lib/leadingZeroIndex";
export * from "./lib/relPathAsAbs";
export * from "./lib/darkMode";

declare global {
  type ThemeableColors = "red"|"orange"|"gold"|"yellow"|"lime"|"green"|"teal"|"cyan"|"blue"|"indigo"|"violet"|"magenta"|"pink"|"gray";
  type ValidatableElements = any;

  interface String {
    // tslint:disable-next-line: no-method-signature
    format(args: any): () => string;
  }

  interface StringMap {
    [key: string]: any;
  }

  interface FormResult {
    valid: boolean;
    errors: Array<{ message?: string, method?: string }>;
    value: any;
    name: string;
    strength?: any;
  }

  interface FormState {
    els: any;
    json: any;
    results: FormResult[];
    formData: any;
    valid: boolean;
  }

  interface CustomFunction {
    [key: string]: {
      message: string,
      // tslint:disable-next-line: ban-types
      test: Function,
    // tslint:disable-next-line: ban-types
    } | Function;
  }

  interface EaseParams {
    tick?: ({ start, end, duration, progress, ease, value }) => void;
    complete?: ({ start, end, duration, progress, ease, value }) => void;
    start?: number;
    end?: number;
    duration?: number;
    delay?: number;
    ease?: string;
  }

  interface TweenInstance {
    start: () => void;
    stop: () => void;
    on: (name: string, callback: () => void) => void;
    progress: number;
  }

  interface MentionObject {
    id: string;
    value: string;
    startPosition: number;
    endPosition: number;
    length: number;
  }

  interface MentionOperation {
    mention: {
      index: number;
      denotationChar: "@";
      id: string;
      value: string;
    };
  }

  interface Quill {
    getModule: any;
    on: any;
    getSelection: any;
    setContents: any;
    setSelection: any;
    setText: any;
    getContents: any;
    root: any;
  }

  interface DeltaOperation {
    insert: string | MentionOperation;
  }

  interface QuillOptions {
      debug?: string | boolean;
      modules?: StringMap;
      placeholder?: string;
      readOnly?: boolean;
      theme?: string;
      formats?: string[];
      bounds?: HTMLElement | string;
      scrollingContainer?: HTMLElement | string;
      strict?: boolean;
      sanitizeHtml?: boolean;
  }
}
