/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MidwestBox {
        "checked": boolean;
        "dark": boolean;
        "disabled": boolean;
        "focused": boolean;
        "radio": boolean;
    }
    interface MidwestColorPicker {
        /**
          * Sets the button or link as an outlined button.
         */
        "dark": boolean;
        "notransparent": boolean;
        "val": string;
    }
    interface MidwestFieldGroup {
        "addElement": (el: HTMLElement) => Promise<void>;
        "removeElement": (el: HTMLElement) => Promise<void>;
        "state": (validate?: boolean) => Promise<{ els: any; json: any; results: FormResult[]; namedResults: { [name: string]: string; }; formData: any; valid: boolean; }>;
        "submitForm": () => Promise<void>;
    }
    interface MidwestForm {
        "acceptCharset": string;
        "action": string;
        "addElement": (el: HTMLElement) => Promise<void>;
        "addFieldGroup": (el: any) => Promise<void>;
        "ajax": boolean;
        "autocomplete": string;
        "autosave": boolean;
        "closeModalOnSuccess": boolean;
        "enctype": string;
        "focusScroll": boolean;
        "get": (name?: string, validate?: boolean) => Promise<{ els: any; json: any; results: FormResult[]; namedResults: { [name: string]: string; }; formData: any; valid: boolean; }>;
        "inert": boolean;
        "method": string;
        "name": string;
        "perform": boolean;
        "removeElement": (el: HTMLElement) => Promise<void>;
        "removeFieldGroup": (el: any) => Promise<void>;
        "state": (validate?: boolean) => Promise<{ els: any; json: any; results: FormResult[]; namedResults: { [name: string]: string; }; formData: any; valid: boolean; }>;
        "submitForm": (button?: any) => Promise<void>;
        "target": string;
        "validate": boolean;
    }
    interface MidwestFormRollup {
        "appendCopy": string;
        "count": number;
        "fallback": string;
        "for": string;
        "noAvatars": boolean;
        "options": HTMLMidwestItemElement[];
        "placeholder": string;
        "show": boolean;
        "update": () => Promise<void>;
        "verbiage": string;
        "view": string;
    }
    interface MidwestInput {
        "autocomplete": "name" | "honorific-prefix" | "given-name" | "additional-name" | "family-name" | "honorific-suffix" | "nickname" | "username" | "current-password" | "new-password" | "one-time-code" | "organization-title" | "organization" | "street-address" | "address-line1" | "address-line2" | "address-line3" | "address-level4" | "address-level3" | "address-level2" | "address-level1" | "country" | "country-name" | "postal-code" | "cc-name" | "cc-given-name" | "cc-additional-name" | "cc-family-name" | "cc-number" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-csc" | "cc-type" | "transaction-currency" | "transaction-amount" | "language" | "bday" | "bday-day" | "bday-month" | "bday-year" | "sex" | "url" | "photo";
        "autofocus": boolean;
        "autoformat": boolean;
        "capsLock": boolean;
        "cols": number;
        "dark": boolean;
        "default": string|readonly string[];
        "description": string;
        "disabled": boolean;
        "focused": boolean;
        "formatter": string;
        "icon": boolean;
        "increments": boolean;
        "inline": boolean;
        "inputTabIndex": number;
        "label": string;
        "leftIcon": string;
        "match": string;
        "max": number;
        "maxlength": number;
        "min": number;
        "minChars": number;
        "name": string;
        "novalidate": boolean;
        "placeholder": string;
        "processing": boolean;
        "readonly": boolean;
        "required": boolean;
        "requirements": boolean;
        "resetValue": () => Promise<void>;
        "rows": number;
        "setFocus": () => Promise<void>;
        "shift": boolean;
        "showCapsLock": boolean;
        "size": "small" | "default" | "large";
        "spellcheck": boolean;
        "step": number;
        "stepDown": () => Promise<void>;
        "stepUp": () => Promise<void>;
        "tooltip": string;
        "type": "text" | "password" | "textarea" | "email" | "hidden" | "number" | "search" | "tel" | "postal-code" | "url" | "currency";
        "valid": boolean;
        "validate": (set?: boolean) => Promise<FormResult>;
        "value": string|readonly string[];
        "wrap": string;
    }
    interface MidwestInputFile {
        "accept": string;
        /**
          * Sets the button to dark.
         */
        "dark": boolean;
        "description": string;
        "disabled": boolean;
        "droppable": boolean;
        /**
          * Hides this element from exporting to figma
         */
        "export": boolean;
        "files": any[];
        "focused": boolean;
        "hideState": boolean;
        "inputTabIndex": number;
        "label": string;
        "multiple": boolean;
        "multipleFileCaption": string;
        /**
          * The name of the input element
         */
        "name": string;
        "novalidate": boolean;
        "placeholder": string;
        "readonly": boolean;
        "replacePlaceholder": string;
        "required": boolean;
        "size": "small" | "default" | "large";
        "tooltip": string;
        "validate": (set?: boolean) => Promise<FormResult>;
        "value": any;
    }
    interface MidwestInputTags {
        "allowNewItems": boolean;
        "autofocus": boolean;
        "base": ThemeableColors;
        "complement": ThemeableColors;
        "customValidations": CustomFunction;
        "dark": boolean;
        "description": string;
        "disabled": boolean;
        "export": boolean;
        "focused": boolean;
        "inputTabIndex": number;
        "items": {id: number, name: string}[];
        "label": string;
        "minChars": number;
        "name": string;
        "novalidate": boolean;
        "placeholder": string;
        "readonly": boolean;
        "required": boolean;
        "size": "small" | "default" | "large";
        "tooltip": string;
        "valid": boolean;
        "validate": (set?: boolean) => Promise<FormResult>;
        "value": any;
    }
    interface MidwestItem {
        "avatar": string;
        "avatarIcon": string;
        "avatarShape": "circle" | "square" | "rectangle" | "diamond" | "hexagon" | "message";
        "avatarSize": "small" | "medium";
        "avatarSrc": string;
        "block": boolean;
        "checked": boolean;
        "content": string;
        "dark": boolean;
        "default": any;
        "disabled": boolean;
        /**
          * Makes sure this element cannot be exported.
         */
        "export": boolean;
        "focused": boolean;
        "group": string;
        "hasSelected": boolean;
        "href": string;
        "icon": string;
        "inline": boolean;
        "name": string;
        "quiet": boolean;
        "required": boolean;
        "settableParent": any;
        "tag": "a" | "button" | "span" | "checkbox" | "radio" | "stencil-route";
        "target": string;
        "tooltip": string;
        "validate": () => Promise<FormResult>;
        "value": string;
    }
    interface MidwestItemGroup {
        "dark": boolean;
        "name": string;
        "supplement": string;
    }
    interface MidwestPasswordRequirements {
        "for": string;
        "size": "small" | "large";
    }
    interface MidwestRepeatableFields {
        "addOneIfEmpty": boolean;
        "custom": boolean;
        "data": string;
        "readonly": boolean;
        "removeByIndex": (index: number) => Promise<void>;
        "verbiage": string;
    }
    interface MidwestSelect {
        "align": "left"|"right";
        "changeTheme": boolean|"base"|"complement";
        "close": () => Promise<void>;
        "dark": boolean;
        "description": string;
        "export": boolean;
        "focused": boolean;
        "inline": boolean;
        "invert": boolean;
        "label": string;
        "loading": boolean;
        "multiple": boolean;
        "name": string;
        "noAvatars": boolean;
        "noClear": boolean;
        "novalidate": boolean;
        "open": boolean;
        "optionEls": () => Promise<HTMLMidwestItemElement[]>;
        "options": () => Promise<string[]>;
        "pjaxReplace": string;
        "placeholder": string;
        "position": "up"|"down";
        "ready": boolean;
        "required": boolean;
        "resize": boolean | "full";
        "search": boolean;
        "size": "tiny" | "small" | "large";
        "tooltip": string;
        "valid": boolean;
        "validate": (set?: boolean) => Promise<FormResult>;
        "value": string[]|string;
        "verbiage": string;
        "verbiageAn": boolean;
        "wide": boolean;
    }
    interface MidwestShowIf {
        "equals": string;
        "field": string;
        "notEquals": string;
        "present": boolean;
        "property": string;
        "selector": string;
        "triggered": string;
    }
    interface MidwestSwitch {
        "activate": (event?: any) => Promise<void>;
        "base": ThemeableColors;
        "changeTheme": boolean;
        "checked": boolean;
        "checkedDefault": boolean;
        /**
          * Sets the button or link as an outlined button.
         */
        "dark": boolean;
        "description": string;
        "disabled": boolean;
        /**
          * Hides this element from exporting to figma
         */
        "export": boolean;
        "label": string;
        "name": string;
        "noValue": string;
        "novalidate": boolean;
        "required": boolean;
        "size": "small" | "default" | "large";
        "tooltip": string;
        "validate": (set?: boolean) => Promise<FormResult>;
        "value": string | boolean;
        "yesValue": string;
    }
    interface MidwestToggle {
        "base": ThemeableColors;
        "block": boolean;
        "complement": ThemeableColors;
        /**
          * Sets the button or link as an outlined button.
         */
        "dark": boolean;
        "description": string;
        /**
          * Makes sure this element cannot be exported.
         */
        "export": boolean;
        "flip": boolean;
        "inlineLabel": boolean;
        "label": string;
        "name": string;
        "novalidate": boolean;
        "optionEls": () => Promise<HTMLMidwestItemElement[]>;
        "required": boolean;
        "single": boolean;
        "size": string;
        "stacked": boolean;
        "type": "checkbox" | "radio";
        "validate": (set?: boolean) => Promise<FormResult>;
        "value": string | string[];
    }
    interface MidwestValidate {
        "check": CustomFunction;
        "color": string;
        "customRender": (message: string[]) => any;
        "element": ValidatableElements;
        "get": () => Promise<FormResult>;
        "name": string;
        "silent": boolean;
        "size": string;
        "validate": (set?: boolean) => Promise<FormResult>;
    }
}
declare global {
    interface HTMLMidwestBoxElement extends Components.MidwestBox, HTMLStencilElement {
    }
    var HTMLMidwestBoxElement: {
        prototype: HTMLMidwestBoxElement;
        new (): HTMLMidwestBoxElement;
    };
    interface HTMLMidwestColorPickerElement extends Components.MidwestColorPicker, HTMLStencilElement {
    }
    var HTMLMidwestColorPickerElement: {
        prototype: HTMLMidwestColorPickerElement;
        new (): HTMLMidwestColorPickerElement;
    };
    interface HTMLMidwestFieldGroupElement extends Components.MidwestFieldGroup, HTMLStencilElement {
    }
    var HTMLMidwestFieldGroupElement: {
        prototype: HTMLMidwestFieldGroupElement;
        new (): HTMLMidwestFieldGroupElement;
    };
    interface HTMLMidwestFormElement extends Components.MidwestForm, HTMLStencilElement {
    }
    var HTMLMidwestFormElement: {
        prototype: HTMLMidwestFormElement;
        new (): HTMLMidwestFormElement;
    };
    interface HTMLMidwestFormRollupElement extends Components.MidwestFormRollup, HTMLStencilElement {
    }
    var HTMLMidwestFormRollupElement: {
        prototype: HTMLMidwestFormRollupElement;
        new (): HTMLMidwestFormRollupElement;
    };
    interface HTMLMidwestInputElement extends Components.MidwestInput, HTMLStencilElement {
    }
    var HTMLMidwestInputElement: {
        prototype: HTMLMidwestInputElement;
        new (): HTMLMidwestInputElement;
    };
    interface HTMLMidwestInputFileElement extends Components.MidwestInputFile, HTMLStencilElement {
    }
    var HTMLMidwestInputFileElement: {
        prototype: HTMLMidwestInputFileElement;
        new (): HTMLMidwestInputFileElement;
    };
    interface HTMLMidwestInputTagsElement extends Components.MidwestInputTags, HTMLStencilElement {
    }
    var HTMLMidwestInputTagsElement: {
        prototype: HTMLMidwestInputTagsElement;
        new (): HTMLMidwestInputTagsElement;
    };
    interface HTMLMidwestItemElement extends Components.MidwestItem, HTMLStencilElement {
    }
    var HTMLMidwestItemElement: {
        prototype: HTMLMidwestItemElement;
        new (): HTMLMidwestItemElement;
    };
    interface HTMLMidwestItemGroupElement extends Components.MidwestItemGroup, HTMLStencilElement {
    }
    var HTMLMidwestItemGroupElement: {
        prototype: HTMLMidwestItemGroupElement;
        new (): HTMLMidwestItemGroupElement;
    };
    interface HTMLMidwestPasswordRequirementsElement extends Components.MidwestPasswordRequirements, HTMLStencilElement {
    }
    var HTMLMidwestPasswordRequirementsElement: {
        prototype: HTMLMidwestPasswordRequirementsElement;
        new (): HTMLMidwestPasswordRequirementsElement;
    };
    interface HTMLMidwestRepeatableFieldsElement extends Components.MidwestRepeatableFields, HTMLStencilElement {
    }
    var HTMLMidwestRepeatableFieldsElement: {
        prototype: HTMLMidwestRepeatableFieldsElement;
        new (): HTMLMidwestRepeatableFieldsElement;
    };
    interface HTMLMidwestSelectElement extends Components.MidwestSelect, HTMLStencilElement {
    }
    var HTMLMidwestSelectElement: {
        prototype: HTMLMidwestSelectElement;
        new (): HTMLMidwestSelectElement;
    };
    interface HTMLMidwestShowIfElement extends Components.MidwestShowIf, HTMLStencilElement {
    }
    var HTMLMidwestShowIfElement: {
        prototype: HTMLMidwestShowIfElement;
        new (): HTMLMidwestShowIfElement;
    };
    interface HTMLMidwestSwitchElement extends Components.MidwestSwitch, HTMLStencilElement {
    }
    var HTMLMidwestSwitchElement: {
        prototype: HTMLMidwestSwitchElement;
        new (): HTMLMidwestSwitchElement;
    };
    interface HTMLMidwestToggleElement extends Components.MidwestToggle, HTMLStencilElement {
    }
    var HTMLMidwestToggleElement: {
        prototype: HTMLMidwestToggleElement;
        new (): HTMLMidwestToggleElement;
    };
    interface HTMLMidwestValidateElement extends Components.MidwestValidate, HTMLStencilElement {
    }
    var HTMLMidwestValidateElement: {
        prototype: HTMLMidwestValidateElement;
        new (): HTMLMidwestValidateElement;
    };
    interface HTMLElementTagNameMap {
        "midwest-box": HTMLMidwestBoxElement;
        "midwest-color-picker": HTMLMidwestColorPickerElement;
        "midwest-field-group": HTMLMidwestFieldGroupElement;
        "midwest-form": HTMLMidwestFormElement;
        "midwest-form-rollup": HTMLMidwestFormRollupElement;
        "midwest-input": HTMLMidwestInputElement;
        "midwest-input-file": HTMLMidwestInputFileElement;
        "midwest-input-tags": HTMLMidwestInputTagsElement;
        "midwest-item": HTMLMidwestItemElement;
        "midwest-item-group": HTMLMidwestItemGroupElement;
        "midwest-password-requirements": HTMLMidwestPasswordRequirementsElement;
        "midwest-repeatable-fields": HTMLMidwestRepeatableFieldsElement;
        "midwest-select": HTMLMidwestSelectElement;
        "midwest-show-if": HTMLMidwestShowIfElement;
        "midwest-switch": HTMLMidwestSwitchElement;
        "midwest-toggle": HTMLMidwestToggleElement;
        "midwest-validate": HTMLMidwestValidateElement;
    }
}
declare namespace LocalJSX {
    interface MidwestBox {
        "checked"?: boolean;
        "dark"?: boolean;
        "disabled"?: boolean;
        "focused"?: boolean;
        "radio"?: boolean;
    }
    interface MidwestColorPicker {
        /**
          * Sets the button or link as an outlined button.
         */
        "dark"?: boolean;
        "notransparent"?: boolean;
        "onUpdate"?: (event: CustomEvent<any>) => void;
        "val"?: string;
    }
    interface MidwestFieldGroup {
        "onFastUpdates"?: (event: CustomEvent<any>) => void;
        "onSubmitted"?: (event: CustomEvent<any>) => void;
        "onUpdated"?: (event: CustomEvent<any>) => void;
    }
    interface MidwestForm {
        "acceptCharset"?: string;
        "action"?: string;
        "ajax"?: boolean;
        "autocomplete"?: string;
        "autosave"?: boolean;
        "closeModalOnSuccess"?: boolean;
        "enctype"?: string;
        "focusScroll"?: boolean;
        "inert"?: boolean;
        "method"?: string;
        "name"?: string;
        "onFastUpdates"?: (event: CustomEvent<any>) => void;
        "onModalClose"?: (event: CustomEvent<any>) => void;
        "onModalOpen"?: (event: CustomEvent<any>) => void;
        "onSubmitted"?: (event: CustomEvent<any>) => void;
        "onUpdated"?: (event: CustomEvent<any>) => void;
        "perform"?: boolean;
        "target"?: string;
        "validate"?: boolean;
    }
    interface MidwestFormRollup {
        "appendCopy"?: string;
        "count"?: number;
        "fallback"?: string;
        "for"?: string;
        "noAvatars"?: boolean;
        "onRemoveItem"?: (event: CustomEvent<any>) => void;
        "options"?: HTMLMidwestItemElement[];
        "placeholder"?: string;
        "show"?: boolean;
        "verbiage"?: string;
        "view"?: string;
    }
    interface MidwestInput {
        "autocomplete"?: "name" | "honorific-prefix" | "given-name" | "additional-name" | "family-name" | "honorific-suffix" | "nickname" | "username" | "current-password" | "new-password" | "one-time-code" | "organization-title" | "organization" | "street-address" | "address-line1" | "address-line2" | "address-line3" | "address-level4" | "address-level3" | "address-level2" | "address-level1" | "country" | "country-name" | "postal-code" | "cc-name" | "cc-given-name" | "cc-additional-name" | "cc-family-name" | "cc-number" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-csc" | "cc-type" | "transaction-currency" | "transaction-amount" | "language" | "bday" | "bday-day" | "bday-month" | "bday-year" | "sex" | "url" | "photo";
        "autofocus"?: boolean;
        "autoformat"?: boolean;
        "capsLock"?: boolean;
        "cols"?: number;
        "dark"?: boolean;
        "default"?: string|readonly string[];
        "description"?: string;
        "disabled"?: boolean;
        "focused"?: boolean;
        "formatter"?: string;
        "icon"?: boolean;
        "increments"?: boolean;
        "inline"?: boolean;
        "inputTabIndex"?: number;
        "label"?: string;
        "leftIcon"?: string;
        "match"?: string;
        "max"?: number;
        "maxlength"?: number;
        "min"?: number;
        "minChars"?: number;
        "name"?: string;
        "novalidate"?: boolean;
        "onBlurring"?: (event: CustomEvent<any>) => void;
        "onFocusing"?: (event: CustomEvent<any>) => void;
        "onUpdate"?: (event: CustomEvent<any>) => void;
        "placeholder"?: string;
        "processing"?: boolean;
        "readonly"?: boolean;
        "required"?: boolean;
        "requirements"?: boolean;
        "rows"?: number;
        "shift"?: boolean;
        "showCapsLock"?: boolean;
        "size"?: "small" | "default" | "large";
        "spellcheck"?: boolean;
        "step"?: number;
        "tooltip"?: string;
        "type"?: "text" | "password" | "textarea" | "email" | "hidden" | "number" | "search" | "tel" | "postal-code" | "url" | "currency";
        "valid"?: boolean;
        "value"?: string|readonly string[];
        "wrap"?: string;
    }
    interface MidwestInputFile {
        "accept"?: string;
        /**
          * Sets the button to dark.
         */
        "dark"?: boolean;
        "description"?: string;
        "disabled"?: boolean;
        "droppable"?: boolean;
        /**
          * Hides this element from exporting to figma
         */
        "export"?: boolean;
        "files"?: any[];
        "focused"?: boolean;
        "hideState"?: boolean;
        "inputTabIndex"?: number;
        "label"?: string;
        "multiple"?: boolean;
        "multipleFileCaption"?: string;
        /**
          * The name of the input element
         */
        "name"?: string;
        "novalidate"?: boolean;
        /**
          * Public: Blur event
         */
        "onBluring"?: (event: CustomEvent<any>) => void;
        /**
          * Public: Focus event
         */
        "onFocusing"?: (event: CustomEvent<any>) => void;
        /**
          * Public: Updated event
         */
        "onUpdate"?: (event: CustomEvent<any>) => void;
        "placeholder"?: string;
        "readonly"?: boolean;
        "replacePlaceholder"?: string;
        "required"?: boolean;
        "size"?: "small" | "default" | "large";
        "tooltip"?: string;
        "value"?: any;
    }
    interface MidwestInputTags {
        "allowNewItems"?: boolean;
        "autofocus"?: boolean;
        "base"?: ThemeableColors;
        "complement"?: ThemeableColors;
        "customValidations"?: CustomFunction;
        "dark"?: boolean;
        "description"?: string;
        "disabled"?: boolean;
        "export"?: boolean;
        "focused"?: boolean;
        "inputTabIndex"?: number;
        "items"?: {id: number, name: string}[];
        "label"?: string;
        "minChars"?: number;
        "name"?: string;
        "novalidate"?: boolean;
        "onBluring"?: (event: CustomEvent<any>) => void;
        "onFocusing"?: (event: CustomEvent<any>) => void;
        "onUpdate"?: (event: CustomEvent<any>) => void;
        "placeholder"?: string;
        "readonly"?: boolean;
        "required"?: boolean;
        "size"?: "small" | "default" | "large";
        "tooltip"?: string;
        "valid"?: boolean;
        "value"?: any;
    }
    interface MidwestItem {
        "avatar"?: string;
        "avatarIcon"?: string;
        "avatarShape"?: "circle" | "square" | "rectangle" | "diamond" | "hexagon" | "message";
        "avatarSize"?: "small" | "medium";
        "avatarSrc"?: string;
        "block"?: boolean;
        "checked"?: boolean;
        "content"?: string;
        "dark"?: boolean;
        "default"?: any;
        "disabled"?: boolean;
        /**
          * Makes sure this element cannot be exported.
         */
        "export"?: boolean;
        "focused"?: boolean;
        "group"?: string;
        "hasSelected"?: boolean;
        "href"?: string;
        "icon"?: string;
        "inline"?: boolean;
        "name"?: string;
        "onSelectionChanged"?: (event: CustomEvent<any>) => void;
        "quiet"?: boolean;
        "required"?: boolean;
        "settableParent"?: any;
        "tag"?: "a" | "button" | "span" | "checkbox" | "radio" | "stencil-route";
        "target"?: string;
        "tooltip"?: string;
        "value"?: string;
    }
    interface MidwestItemGroup {
        "dark"?: boolean;
        "name"?: string;
        "supplement"?: string;
    }
    interface MidwestPasswordRequirements {
        "for"?: string;
        "size"?: "small" | "large";
    }
    interface MidwestRepeatableFields {
        "addOneIfEmpty"?: boolean;
        "custom"?: boolean;
        "data"?: string;
        "onUpdate"?: (event: CustomEvent<any>) => void;
        "readonly"?: boolean;
        "verbiage"?: string;
    }
    interface MidwestSelect {
        "align"?: "left"|"right";
        "changeTheme"?: boolean|"base"|"complement";
        "dark"?: boolean;
        "description"?: string;
        "export"?: boolean;
        "focused"?: boolean;
        "inline"?: boolean;
        "invert"?: boolean;
        "label"?: string;
        "loading"?: boolean;
        "multiple"?: boolean;
        "name"?: string;
        "noAvatars"?: boolean;
        "noClear"?: boolean;
        "novalidate"?: boolean;
        "onUpdate"?: (event: CustomEvent<any>) => void;
        "open"?: boolean;
        "pjaxReplace"?: string;
        "placeholder"?: string;
        "position"?: "up"|"down";
        "ready"?: boolean;
        "required"?: boolean;
        "resize"?: boolean | "full";
        "search"?: boolean;
        "size"?: "tiny" | "small" | "large";
        "tooltip"?: string;
        "valid"?: boolean;
        "value"?: string[]|string;
        "verbiage"?: string;
        "verbiageAn"?: boolean;
        "wide"?: boolean;
    }
    interface MidwestShowIf {
        "equals"?: string;
        "field"?: string;
        "notEquals"?: string;
        "onUpdate"?: (event: CustomEvent<any>) => void;
        "present"?: boolean;
        "property"?: string;
        "selector"?: string;
        "triggered"?: string;
    }
    interface MidwestSwitch {
        "base"?: ThemeableColors;
        "changeTheme"?: boolean;
        "checked"?: boolean;
        "checkedDefault"?: boolean;
        /**
          * Sets the button or link as an outlined button.
         */
        "dark"?: boolean;
        "description"?: string;
        "disabled"?: boolean;
        /**
          * Hides this element from exporting to figma
         */
        "export"?: boolean;
        "label"?: string;
        "name"?: string;
        "noValue"?: string;
        "novalidate"?: boolean;
        "onUpdate"?: (event: CustomEvent<any>) => void;
        "required"?: boolean;
        "size"?: "small" | "default" | "large";
        "tooltip"?: string;
        "value"?: string | boolean;
        "yesValue"?: string;
    }
    interface MidwestToggle {
        "base"?: ThemeableColors;
        "block"?: boolean;
        "complement"?: ThemeableColors;
        /**
          * Sets the button or link as an outlined button.
         */
        "dark"?: boolean;
        "description"?: string;
        /**
          * Makes sure this element cannot be exported.
         */
        "export"?: boolean;
        "flip"?: boolean;
        "inlineLabel"?: boolean;
        "label"?: string;
        "name"?: string;
        "novalidate"?: boolean;
        "onUpdate"?: (event: CustomEvent<any>) => void;
        "required"?: boolean;
        "single"?: boolean;
        "size"?: string;
        "stacked"?: boolean;
        "type"?: "checkbox" | "radio";
        "value"?: string | string[];
    }
    interface MidwestValidate {
        "check"?: CustomFunction;
        "color"?: string;
        "customRender"?: (message: string[]) => any;
        "element"?: ValidatableElements;
        "name"?: string;
        "onCorrect"?: (event: CustomEvent<any>) => void;
        "onIncorrect"?: (event: CustomEvent<any>) => void;
        "onTest"?: (event: CustomEvent<any>) => void;
        "silent"?: boolean;
        "size"?: string;
    }
    interface IntrinsicElements {
        "midwest-box": MidwestBox;
        "midwest-color-picker": MidwestColorPicker;
        "midwest-field-group": MidwestFieldGroup;
        "midwest-form": MidwestForm;
        "midwest-form-rollup": MidwestFormRollup;
        "midwest-input": MidwestInput;
        "midwest-input-file": MidwestInputFile;
        "midwest-input-tags": MidwestInputTags;
        "midwest-item": MidwestItem;
        "midwest-item-group": MidwestItemGroup;
        "midwest-password-requirements": MidwestPasswordRequirements;
        "midwest-repeatable-fields": MidwestRepeatableFields;
        "midwest-select": MidwestSelect;
        "midwest-show-if": MidwestShowIf;
        "midwest-switch": MidwestSwitch;
        "midwest-toggle": MidwestToggle;
        "midwest-validate": MidwestValidate;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "midwest-box": LocalJSX.MidwestBox & JSXBase.HTMLAttributes<HTMLMidwestBoxElement>;
            "midwest-color-picker": LocalJSX.MidwestColorPicker & JSXBase.HTMLAttributes<HTMLMidwestColorPickerElement>;
            "midwest-field-group": LocalJSX.MidwestFieldGroup & JSXBase.HTMLAttributes<HTMLMidwestFieldGroupElement>;
            "midwest-form": LocalJSX.MidwestForm & JSXBase.HTMLAttributes<HTMLMidwestFormElement>;
            "midwest-form-rollup": LocalJSX.MidwestFormRollup & JSXBase.HTMLAttributes<HTMLMidwestFormRollupElement>;
            "midwest-input": LocalJSX.MidwestInput & JSXBase.HTMLAttributes<HTMLMidwestInputElement>;
            "midwest-input-file": LocalJSX.MidwestInputFile & JSXBase.HTMLAttributes<HTMLMidwestInputFileElement>;
            "midwest-input-tags": LocalJSX.MidwestInputTags & JSXBase.HTMLAttributes<HTMLMidwestInputTagsElement>;
            "midwest-item": LocalJSX.MidwestItem & JSXBase.HTMLAttributes<HTMLMidwestItemElement>;
            "midwest-item-group": LocalJSX.MidwestItemGroup & JSXBase.HTMLAttributes<HTMLMidwestItemGroupElement>;
            "midwest-password-requirements": LocalJSX.MidwestPasswordRequirements & JSXBase.HTMLAttributes<HTMLMidwestPasswordRequirementsElement>;
            "midwest-repeatable-fields": LocalJSX.MidwestRepeatableFields & JSXBase.HTMLAttributes<HTMLMidwestRepeatableFieldsElement>;
            "midwest-select": LocalJSX.MidwestSelect & JSXBase.HTMLAttributes<HTMLMidwestSelectElement>;
            "midwest-show-if": LocalJSX.MidwestShowIf & JSXBase.HTMLAttributes<HTMLMidwestShowIfElement>;
            "midwest-switch": LocalJSX.MidwestSwitch & JSXBase.HTMLAttributes<HTMLMidwestSwitchElement>;
            "midwest-toggle": LocalJSX.MidwestToggle & JSXBase.HTMLAttributes<HTMLMidwestToggleElement>;
            "midwest-validate": LocalJSX.MidwestValidate & JSXBase.HTMLAttributes<HTMLMidwestValidateElement>;
        }
    }
}
