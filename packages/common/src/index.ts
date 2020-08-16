export * from './lib/Model';
export * from './lib/asyncForEach';
export * from './lib/form2js';
export * from './lib/titleCase';
export * from './lib/convert';
export * from './lib/extractHostname';
export * from './lib/humanize';
export * from './lib/shuffle';
export * from './lib/addDataToForm';
export * from './lib/simulate';
export * from './lib/colors';
export * from './lib/format';
export * from './lib/generateID';
export * from './lib/onFocusOutsideOf';
export * from './lib/customElementDocGenerator';

declare global {
  type ThemeableColors = "red"|"orange"|"gold"|"yellow"|"lime"|"green"|"teal"|"cyan"|"blue"|"indigo"|"violet"|"magenta"|"pink"|"gray";
  type ValidatableElements = any

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
    valid: boolean
  }

  interface CustomFunction {
    [key: string]: {
      message: string,
      // tslint:disable-next-line: ban-types
      test: Function
    // tslint:disable-next-line: ban-types
    } | Function 
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
    start: () => void
    stop: () => void
    on: (name: string, callback: () => void) => void
    progress: number
  }
}