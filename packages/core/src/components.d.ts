/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CopyWrap {
        "align": string;
        "clamp": number;
        "full": boolean;
    }
    interface MidwestAccordion {
        "compact": boolean;
        "dark": boolean;
        "label": string;
        "maxHeight": number;
        "name": string;
        "open": boolean;
        "tight": boolean;
    }
    interface MidwestAvatar {
        "color": string;
        "dark": boolean;
        "icon": string;
        "initials": string;
        "name": string;
        "noTooltip": boolean;
        "processing": boolean;
        "shape": 'circle' | 'square' | 'rectangle' | 'diamond' | 'hexagon' | 'star' | 'message' | 'squircle';
        "size": 'tiny' | 'small' | 'medium-small' | 'medium' | 'large' | 'xlarge' | 'huge';
        "src": string;
    }
    interface MidwestBreadcrumb {
        "color": string;
        "dark": boolean;
        "disabled": boolean;
        "first": boolean;
        "href": string;
        "label": string;
        "last": boolean;
        "tag": "link" | "route" | "button";
        "target": string;
    }
    interface MidwestBreadcrumbs {
        "dark": boolean;
        "size": "tiny" | "small" | "medium" | "large";
    }
    interface MidwestButton {
        "activate": string;
        "active": boolean;
        "authenticityToken": string;
        "block": boolean;
        "buttonTabIndex": number;
        "circle": boolean;
        "confirm": string;
        "contrast": boolean;
        "dark": boolean;
        "disabled": boolean;
        "export": boolean;
        "for": string;
        "ghost": boolean;
        "href": string;
        "icon": boolean;
        "iconOnly": boolean;
        "invert": boolean;
        "label": string;
        "method": 'get' | 'post' | 'patch' | 'put' | 'delete';
        "modalHref": string;
        "name": string;
        "outline": boolean;
        "padding": 'tiny' | 'small' | 'default' | 'large';
        "pill": boolean;
        "pjaxSelector": string;
        "processable": boolean;
        "processing": boolean;
        "sideEffect": 'copy' | 'close-modal';
        "sidebar": boolean;
        "size": 'tiny' | 'small' | 'default' | 'large';
        "stopPropagation": boolean;
        "tag": 'button' | 'submit' | 'link' | 'span' | 'modal' | 'onboarding' | 'stencil-route';
        "target": string;
        "usePjax": boolean;
        "value": string;
    }
    interface MidwestCalendarDate {
        "clock": boolean;
        "dark": boolean;
        "end": string;
        "start": string;
        "time": boolean;
    }
    interface MidwestCallout {
        "dark": boolean;
        "type": "alert" | "error" | "info" | "success" | "default";
    }
    interface MidwestCard {
        "backHeight": number;
        "block": boolean;
        "compact": boolean;
        "dark": boolean;
        "export": boolean;
        "flipIcon": string;
        "flipReady": boolean;
        "flip_card": () => Promise<void>;
        "flippable": boolean;
        "flipped": boolean;
        "for": string;
        "horizontal": boolean;
        "href": string;
        "modalHref": string;
        "name": string;
        "originalHeight": number;
        "padding": 'none' | 'tiny' | 'small' | 'medium' | 'large';
        "small": boolean;
        "smallSize": number;
        "tag": 'a' | 'button' | 'div' | 'modal';
        "type": string;
        "value": string;
    }
    interface MidwestContent {
        "behavior": string;
        "for": string;
        "open": boolean;
        "scrollWhenActive": boolean;
    }
    interface MidwestDropdown {
        "dark": boolean;
        "icon": boolean;
        "iconName": string;
        "label": string;
        "open": boolean;
        "position": "left" | "center" | "right";
    }
    interface MidwestGrid {
        "cols": number | string;
        "columnGap": number;
        "columnWidth": number;
        "padding": boolean;
        "refresh": () => Promise<void>;
        "responsive": boolean;
    }
    interface MidwestGroup {
        "avatars": boolean;
        "buttons": boolean;
        "choice": boolean;
        "count": number;
        /**
          * Sets the button or link as an outlined button.
         */
        "dark": boolean;
        "extras": number;
        "overflow": boolean;
        "size": string;
        "verbiage": string;
    }
    interface MidwestGroupOverflow {
        "count": number;
        "tooltip": boolean;
        "verbiage": string;
    }
    interface MidwestLabel {
        "dark": boolean;
        "for": string;
        "size": string;
        "underneath": boolean;
    }
    interface MidwestLayout {
        "align": 'baseline' | 'center' | 'top' | 'bottom';
        "content": 'baseline' | 'center' | 'top' | 'bottom';
        "hasNav": boolean;
        "height": 'fill';
        "padding": 'none' | 'tiny' | 'small' | 'medium' | 'large';
        "size": 'tiny' | 'small' | 'medium' | 'large' | 'xlarge' | 'full' | 'flush';
        "small": boolean;
        "smallSize": number;
        "type": string;
    }
    interface MidwestMessage {
        "autoHide": boolean;
        "closable": boolean;
        "closing": boolean;
        "dark": boolean;
        "height": number|boolean;
        "name": string;
        "opening": boolean;
        "remember": boolean;
        "shown": boolean;
        "size": "full" | "default";
        "striped": boolean;
        "type": "alert" | "error" | "info" | "success" | "default";
    }
    interface MidwestPagination {
        "current": number;
        "dark": boolean;
        "first": () => Promise<void>;
        "last": () => Promise<void>;
        "next": () => Promise<void>;
        "padding": number;
        /**
          * Public: Sets the max cap of pages you can skip through
         */
        "pages": number;
        "previous": () => Promise<void>;
        "type": "full" | "compact";
        "url": any;
    }
    interface MidwestPanel {
        "closeOnBlur": boolean;
        "hideClose": boolean;
    }
    interface MidwestProgress {
        "dark": boolean;
        "ease": boolean;
        "editable": boolean;
        "indeterminate": boolean;
        "max": number;
        "rounded": boolean;
        "secondary": number;
        "slender": boolean;
        "value": number;
    }
    interface MidwestSidebar {
    }
    interface MidwestStep {
        "activate": () => Promise<void>;
        "complete": boolean;
        "current": boolean;
        "dark": boolean;
        "disabled": boolean;
        "href": string;
        "open": boolean;
        "order": number;
        "past": boolean;
        "tabCount": number;
    }
    interface MidwestSteps {
        "advance": () => Promise<void>;
        "contents": () => Promise<HTMLMidwestContentElement[]>;
        "dark": boolean;
        "name": string;
        "steps": () => Promise<HTMLMidwestStepElement[]>;
        "switch": (step: HTMLMidwestStepElement) => Promise<void>;
    }
    interface MidwestTab {
        "activate": () => Promise<void>;
        "dark": boolean;
        "disabled": boolean;
        "href": string;
        "name": string;
        "notifications": boolean | number;
        "notificationsColor": string;
        "open": boolean;
        "order": number;
        "size": 'tiny' | 'small' | 'medium' | 'large';
        "tabCount": number;
        "tag": 'button' | 'link' | 'stencil-route';
        "target": string;
        "vertical": boolean;
    }
    interface MidwestTabs {
        "behavior": string;
        "block": boolean;
        "blockIndicator": boolean;
        "collapse": boolean;
        "contents": () => Promise<HTMLMidwestContentElement[]>;
        "dark": boolean;
        "flipIndicator": boolean;
        "height": string;
        "hiddenActive": boolean;
        "name": string;
        "open": (index: number, overflow?: boolean) => Promise<void>;
        "payAttention": boolean;
        "ready": boolean;
        "size": 'tiny' | 'small' | 'medium' | 'large';
        "tabHeight": number;
        "tabLeft": number;
        "tabOpacity": number;
        "tabTop": number;
        "tabWidth": number;
        "tabs": () => Promise<HTMLMidwestTabElement[]>;
        "vertical": boolean;
    }
    interface MidwestTag {
        "color": ThemeableColors;
        "dark": boolean;
        "outline": boolean;
        "pill": boolean;
        "size": "tiny" | "small" | "large";
    }
    interface MidwestTheme {
        "base": ThemeableColors;
        "body": boolean;
        "colors": string[];
        "complement": ThemeableColors;
        "dark": boolean;
        "inert": boolean;
        "size": number;
        "store": any;
        "system": boolean;
    }
    interface MidwestTime {
        "format": string;
        "relative": boolean;
        "unix": number;
        "value": string;
    }
    interface MidwestTooltip {
        "align": "left" | "center" | "right" | "middle-left" | "middle-center" | "middle-right" | "bottom-left" | "bottom-center" | "bottom-right";
        "dark": boolean;
        "focused": boolean;
        "hover": boolean;
    }
    interface MidwestUnit {
        "decimals": number;
        "from": any;
        "money": boolean;
        "round": boolean;
        "to": any;
        "value": number;
    }
}
declare global {
    interface HTMLCopyWrapElement extends Components.CopyWrap, HTMLStencilElement {
    }
    var HTMLCopyWrapElement: {
        prototype: HTMLCopyWrapElement;
        new (): HTMLCopyWrapElement;
    };
    interface HTMLMidwestAccordionElement extends Components.MidwestAccordion, HTMLStencilElement {
    }
    var HTMLMidwestAccordionElement: {
        prototype: HTMLMidwestAccordionElement;
        new (): HTMLMidwestAccordionElement;
    };
    interface HTMLMidwestAvatarElement extends Components.MidwestAvatar, HTMLStencilElement {
    }
    var HTMLMidwestAvatarElement: {
        prototype: HTMLMidwestAvatarElement;
        new (): HTMLMidwestAvatarElement;
    };
    interface HTMLMidwestBreadcrumbElement extends Components.MidwestBreadcrumb, HTMLStencilElement {
    }
    var HTMLMidwestBreadcrumbElement: {
        prototype: HTMLMidwestBreadcrumbElement;
        new (): HTMLMidwestBreadcrumbElement;
    };
    interface HTMLMidwestBreadcrumbsElement extends Components.MidwestBreadcrumbs, HTMLStencilElement {
    }
    var HTMLMidwestBreadcrumbsElement: {
        prototype: HTMLMidwestBreadcrumbsElement;
        new (): HTMLMidwestBreadcrumbsElement;
    };
    interface HTMLMidwestButtonElement extends Components.MidwestButton, HTMLStencilElement {
    }
    var HTMLMidwestButtonElement: {
        prototype: HTMLMidwestButtonElement;
        new (): HTMLMidwestButtonElement;
    };
    interface HTMLMidwestCalendarDateElement extends Components.MidwestCalendarDate, HTMLStencilElement {
    }
    var HTMLMidwestCalendarDateElement: {
        prototype: HTMLMidwestCalendarDateElement;
        new (): HTMLMidwestCalendarDateElement;
    };
    interface HTMLMidwestCalloutElement extends Components.MidwestCallout, HTMLStencilElement {
    }
    var HTMLMidwestCalloutElement: {
        prototype: HTMLMidwestCalloutElement;
        new (): HTMLMidwestCalloutElement;
    };
    interface HTMLMidwestCardElement extends Components.MidwestCard, HTMLStencilElement {
    }
    var HTMLMidwestCardElement: {
        prototype: HTMLMidwestCardElement;
        new (): HTMLMidwestCardElement;
    };
    interface HTMLMidwestContentElement extends Components.MidwestContent, HTMLStencilElement {
    }
    var HTMLMidwestContentElement: {
        prototype: HTMLMidwestContentElement;
        new (): HTMLMidwestContentElement;
    };
    interface HTMLMidwestDropdownElement extends Components.MidwestDropdown, HTMLStencilElement {
    }
    var HTMLMidwestDropdownElement: {
        prototype: HTMLMidwestDropdownElement;
        new (): HTMLMidwestDropdownElement;
    };
    interface HTMLMidwestGridElement extends Components.MidwestGrid, HTMLStencilElement {
    }
    var HTMLMidwestGridElement: {
        prototype: HTMLMidwestGridElement;
        new (): HTMLMidwestGridElement;
    };
    interface HTMLMidwestGroupElement extends Components.MidwestGroup, HTMLStencilElement {
    }
    var HTMLMidwestGroupElement: {
        prototype: HTMLMidwestGroupElement;
        new (): HTMLMidwestGroupElement;
    };
    interface HTMLMidwestGroupOverflowElement extends Components.MidwestGroupOverflow, HTMLStencilElement {
    }
    var HTMLMidwestGroupOverflowElement: {
        prototype: HTMLMidwestGroupOverflowElement;
        new (): HTMLMidwestGroupOverflowElement;
    };
    interface HTMLMidwestLabelElement extends Components.MidwestLabel, HTMLStencilElement {
    }
    var HTMLMidwestLabelElement: {
        prototype: HTMLMidwestLabelElement;
        new (): HTMLMidwestLabelElement;
    };
    interface HTMLMidwestLayoutElement extends Components.MidwestLayout, HTMLStencilElement {
    }
    var HTMLMidwestLayoutElement: {
        prototype: HTMLMidwestLayoutElement;
        new (): HTMLMidwestLayoutElement;
    };
    interface HTMLMidwestMessageElement extends Components.MidwestMessage, HTMLStencilElement {
    }
    var HTMLMidwestMessageElement: {
        prototype: HTMLMidwestMessageElement;
        new (): HTMLMidwestMessageElement;
    };
    interface HTMLMidwestPaginationElement extends Components.MidwestPagination, HTMLStencilElement {
    }
    var HTMLMidwestPaginationElement: {
        prototype: HTMLMidwestPaginationElement;
        new (): HTMLMidwestPaginationElement;
    };
    interface HTMLMidwestPanelElement extends Components.MidwestPanel, HTMLStencilElement {
    }
    var HTMLMidwestPanelElement: {
        prototype: HTMLMidwestPanelElement;
        new (): HTMLMidwestPanelElement;
    };
    interface HTMLMidwestProgressElement extends Components.MidwestProgress, HTMLStencilElement {
    }
    var HTMLMidwestProgressElement: {
        prototype: HTMLMidwestProgressElement;
        new (): HTMLMidwestProgressElement;
    };
    interface HTMLMidwestSidebarElement extends Components.MidwestSidebar, HTMLStencilElement {
    }
    var HTMLMidwestSidebarElement: {
        prototype: HTMLMidwestSidebarElement;
        new (): HTMLMidwestSidebarElement;
    };
    interface HTMLMidwestStepElement extends Components.MidwestStep, HTMLStencilElement {
    }
    var HTMLMidwestStepElement: {
        prototype: HTMLMidwestStepElement;
        new (): HTMLMidwestStepElement;
    };
    interface HTMLMidwestStepsElement extends Components.MidwestSteps, HTMLStencilElement {
    }
    var HTMLMidwestStepsElement: {
        prototype: HTMLMidwestStepsElement;
        new (): HTMLMidwestStepsElement;
    };
    interface HTMLMidwestTabElement extends Components.MidwestTab, HTMLStencilElement {
    }
    var HTMLMidwestTabElement: {
        prototype: HTMLMidwestTabElement;
        new (): HTMLMidwestTabElement;
    };
    interface HTMLMidwestTabsElement extends Components.MidwestTabs, HTMLStencilElement {
    }
    var HTMLMidwestTabsElement: {
        prototype: HTMLMidwestTabsElement;
        new (): HTMLMidwestTabsElement;
    };
    interface HTMLMidwestTagElement extends Components.MidwestTag, HTMLStencilElement {
    }
    var HTMLMidwestTagElement: {
        prototype: HTMLMidwestTagElement;
        new (): HTMLMidwestTagElement;
    };
    interface HTMLMidwestThemeElement extends Components.MidwestTheme, HTMLStencilElement {
    }
    var HTMLMidwestThemeElement: {
        prototype: HTMLMidwestThemeElement;
        new (): HTMLMidwestThemeElement;
    };
    interface HTMLMidwestTimeElement extends Components.MidwestTime, HTMLStencilElement {
    }
    var HTMLMidwestTimeElement: {
        prototype: HTMLMidwestTimeElement;
        new (): HTMLMidwestTimeElement;
    };
    interface HTMLMidwestTooltipElement extends Components.MidwestTooltip, HTMLStencilElement {
    }
    var HTMLMidwestTooltipElement: {
        prototype: HTMLMidwestTooltipElement;
        new (): HTMLMidwestTooltipElement;
    };
    interface HTMLMidwestUnitElement extends Components.MidwestUnit, HTMLStencilElement {
    }
    var HTMLMidwestUnitElement: {
        prototype: HTMLMidwestUnitElement;
        new (): HTMLMidwestUnitElement;
    };
    interface HTMLElementTagNameMap {
        "copy-wrap": HTMLCopyWrapElement;
        "midwest-accordion": HTMLMidwestAccordionElement;
        "midwest-avatar": HTMLMidwestAvatarElement;
        "midwest-breadcrumb": HTMLMidwestBreadcrumbElement;
        "midwest-breadcrumbs": HTMLMidwestBreadcrumbsElement;
        "midwest-button": HTMLMidwestButtonElement;
        "midwest-calendar-date": HTMLMidwestCalendarDateElement;
        "midwest-callout": HTMLMidwestCalloutElement;
        "midwest-card": HTMLMidwestCardElement;
        "midwest-content": HTMLMidwestContentElement;
        "midwest-dropdown": HTMLMidwestDropdownElement;
        "midwest-grid": HTMLMidwestGridElement;
        "midwest-group": HTMLMidwestGroupElement;
        "midwest-group-overflow": HTMLMidwestGroupOverflowElement;
        "midwest-label": HTMLMidwestLabelElement;
        "midwest-layout": HTMLMidwestLayoutElement;
        "midwest-message": HTMLMidwestMessageElement;
        "midwest-pagination": HTMLMidwestPaginationElement;
        "midwest-panel": HTMLMidwestPanelElement;
        "midwest-progress": HTMLMidwestProgressElement;
        "midwest-sidebar": HTMLMidwestSidebarElement;
        "midwest-step": HTMLMidwestStepElement;
        "midwest-steps": HTMLMidwestStepsElement;
        "midwest-tab": HTMLMidwestTabElement;
        "midwest-tabs": HTMLMidwestTabsElement;
        "midwest-tag": HTMLMidwestTagElement;
        "midwest-theme": HTMLMidwestThemeElement;
        "midwest-time": HTMLMidwestTimeElement;
        "midwest-tooltip": HTMLMidwestTooltipElement;
        "midwest-unit": HTMLMidwestUnitElement;
    }
}
declare namespace LocalJSX {
    interface CopyWrap {
        "align"?: string;
        "clamp"?: number;
        "full"?: boolean;
    }
    interface MidwestAccordion {
        "compact"?: boolean;
        "dark"?: boolean;
        "label"?: string;
        "maxHeight"?: number;
        "name"?: string;
        "onClosed"?: (event: CustomEvent<any>) => void;
        "onOpened"?: (event: CustomEvent<any>) => void;
        "open"?: boolean;
        "tight"?: boolean;
    }
    interface MidwestAvatar {
        "color"?: string;
        "dark"?: boolean;
        "icon"?: string;
        "initials"?: string;
        "name"?: string;
        "noTooltip"?: boolean;
        "processing"?: boolean;
        "shape"?: 'circle' | 'square' | 'rectangle' | 'diamond' | 'hexagon' | 'star' | 'message' | 'squircle';
        "size"?: 'tiny' | 'small' | 'medium-small' | 'medium' | 'large' | 'xlarge' | 'huge';
        "src"?: string;
    }
    interface MidwestBreadcrumb {
        "color"?: string;
        "dark"?: boolean;
        "disabled"?: boolean;
        "first"?: boolean;
        "href"?: string;
        "label"?: string;
        "last"?: boolean;
        "tag"?: "link" | "route" | "button";
        "target"?: string;
    }
    interface MidwestBreadcrumbs {
        "dark"?: boolean;
        "size"?: "tiny" | "small" | "medium" | "large";
    }
    interface MidwestButton {
        "activate"?: string;
        "active"?: boolean;
        "authenticityToken"?: string;
        "block"?: boolean;
        "buttonTabIndex"?: number;
        "circle"?: boolean;
        "confirm"?: string;
        "contrast"?: boolean;
        "dark"?: boolean;
        "disabled"?: boolean;
        "export"?: boolean;
        "for"?: string;
        "ghost"?: boolean;
        "href"?: string;
        "icon"?: boolean;
        "iconOnly"?: boolean;
        "invert"?: boolean;
        "label"?: string;
        "method"?: 'get' | 'post' | 'patch' | 'put' | 'delete';
        "modalHref"?: string;
        "name"?: string;
        "onConfirmed"?: (event: CustomEvent<any>) => void;
        "onModalClose"?: (event: CustomEvent<any>) => void;
        "onModalOpen"?: (event: CustomEvent<any>) => void;
        "onOnboardingClose"?: (event: CustomEvent<any>) => void;
        "onOnboardingOpen"?: (event: CustomEvent<any>) => void;
        "outline"?: boolean;
        "padding"?: 'tiny' | 'small' | 'default' | 'large';
        "pill"?: boolean;
        "pjaxSelector"?: string;
        "processable"?: boolean;
        "processing"?: boolean;
        "sideEffect"?: 'copy' | 'close-modal';
        "sidebar"?: boolean;
        "size"?: 'tiny' | 'small' | 'default' | 'large';
        "stopPropagation"?: boolean;
        "tag"?: 'button' | 'submit' | 'link' | 'span' | 'modal' | 'onboarding' | 'stencil-route';
        "target"?: string;
        "usePjax"?: boolean;
        "value"?: string;
    }
    interface MidwestCalendarDate {
        "clock"?: boolean;
        "dark"?: boolean;
        "end"?: string;
        "start"?: string;
        "time"?: boolean;
    }
    interface MidwestCallout {
        "dark"?: boolean;
        "type"?: "alert" | "error" | "info" | "success" | "default";
    }
    interface MidwestCard {
        "backHeight"?: number;
        "block"?: boolean;
        "compact"?: boolean;
        "dark"?: boolean;
        "export"?: boolean;
        "flipIcon"?: string;
        "flipReady"?: boolean;
        "flippable"?: boolean;
        "flipped"?: boolean;
        "for"?: string;
        "horizontal"?: boolean;
        "href"?: string;
        "modalHref"?: string;
        "name"?: string;
        "onFlip"?: (event: CustomEvent<any>) => void;
        "onModalClose"?: (event: CustomEvent<any>) => void;
        "onModalOpen"?: (event: CustomEvent<any>) => void;
        "originalHeight"?: number;
        "padding"?: 'none' | 'tiny' | 'small' | 'medium' | 'large';
        "small"?: boolean;
        "smallSize"?: number;
        "tag"?: 'a' | 'button' | 'div' | 'modal';
        "type"?: string;
        "value"?: string;
    }
    interface MidwestContent {
        "behavior"?: string;
        "for"?: string;
        "open"?: boolean;
        "scrollWhenActive"?: boolean;
    }
    interface MidwestDropdown {
        "dark"?: boolean;
        "icon"?: boolean;
        "iconName"?: string;
        "label"?: string;
        "open"?: boolean;
        "position"?: "left" | "center" | "right";
    }
    interface MidwestGrid {
        "cols"?: number | string;
        "columnGap"?: number;
        "columnWidth"?: number;
        "padding"?: boolean;
        "responsive"?: boolean;
    }
    interface MidwestGroup {
        "avatars"?: boolean;
        "buttons"?: boolean;
        "choice"?: boolean;
        "count"?: number;
        /**
          * Sets the button or link as an outlined button.
         */
        "dark"?: boolean;
        "extras"?: number;
        "overflow"?: boolean;
        "size"?: string;
        "verbiage"?: string;
    }
    interface MidwestGroupOverflow {
        "count"?: number;
        "tooltip"?: boolean;
        "verbiage"?: string;
    }
    interface MidwestLabel {
        "dark"?: boolean;
        "for"?: string;
        "size"?: string;
        "underneath"?: boolean;
    }
    interface MidwestLayout {
        "align"?: 'baseline' | 'center' | 'top' | 'bottom';
        "content"?: 'baseline' | 'center' | 'top' | 'bottom';
        "hasNav"?: boolean;
        "height"?: 'fill';
        "padding"?: 'none' | 'tiny' | 'small' | 'medium' | 'large';
        "size"?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge' | 'full' | 'flush';
        "small"?: boolean;
        "smallSize"?: number;
        "type"?: string;
    }
    interface MidwestMessage {
        "autoHide"?: boolean;
        "closable"?: boolean;
        "closing"?: boolean;
        "dark"?: boolean;
        "height"?: number|boolean;
        "name"?: string;
        "opening"?: boolean;
        "remember"?: boolean;
        "shown"?: boolean;
        "size"?: "full" | "default";
        "striped"?: boolean;
        "type"?: "alert" | "error" | "info" | "success" | "default";
    }
    interface MidwestPagination {
        "current"?: number;
        "dark"?: boolean;
        "onChanged"?: (event: CustomEvent<any>) => void;
        "padding"?: number;
        /**
          * Public: Sets the max cap of pages you can skip through
         */
        "pages"?: number;
        "type"?: "full" | "compact";
        "url"?: any;
    }
    interface MidwestPanel {
        "closeOnBlur"?: boolean;
        "hideClose"?: boolean;
    }
    interface MidwestProgress {
        "dark"?: boolean;
        "ease"?: boolean;
        "editable"?: boolean;
        "indeterminate"?: boolean;
        "max"?: number;
        "onUpdate"?: (event: CustomEvent<any>) => void;
        "rounded"?: boolean;
        "secondary"?: number;
        "slender"?: boolean;
        "value"?: number;
    }
    interface MidwestSidebar {
    }
    interface MidwestStep {
        "complete"?: boolean;
        "current"?: boolean;
        "dark"?: boolean;
        "disabled"?: boolean;
        "href"?: string;
        "onContentChange"?: (event: CustomEvent<any>) => void;
        "open"?: boolean;
        "order"?: number;
        "past"?: boolean;
        "tabCount"?: number;
    }
    interface MidwestSteps {
        "dark"?: boolean;
        "name"?: string;
    }
    interface MidwestTab {
        "dark"?: boolean;
        "disabled"?: boolean;
        "href"?: string;
        "name"?: string;
        "notifications"?: boolean | number;
        "notificationsColor"?: string;
        "onContentOpen"?: (event: CustomEvent<any>) => void;
        "open"?: boolean;
        "order"?: number;
        "size"?: 'tiny' | 'small' | 'medium' | 'large';
        "tabCount"?: number;
        "tag"?: 'button' | 'link' | 'stencil-route';
        "target"?: string;
        "vertical"?: boolean;
    }
    interface MidwestTabs {
        "behavior"?: string;
        "block"?: boolean;
        "blockIndicator"?: boolean;
        "collapse"?: boolean;
        "dark"?: boolean;
        "flipIndicator"?: boolean;
        "height"?: string;
        "hiddenActive"?: boolean;
        "name"?: string;
        "payAttention"?: boolean;
        "ready"?: boolean;
        "size"?: 'tiny' | 'small' | 'medium' | 'large';
        "tabHeight"?: number;
        "tabLeft"?: number;
        "tabOpacity"?: number;
        "tabTop"?: number;
        "tabWidth"?: number;
        "vertical"?: boolean;
    }
    interface MidwestTag {
        "color"?: ThemeableColors;
        "dark"?: boolean;
        "outline"?: boolean;
        "pill"?: boolean;
        "size"?: "tiny" | "small" | "large";
    }
    interface MidwestTheme {
        "base"?: ThemeableColors;
        "body"?: boolean;
        "colors"?: string[];
        "complement"?: ThemeableColors;
        "dark"?: boolean;
        "inert"?: boolean;
        "size"?: number;
        "store"?: any;
        "system"?: boolean;
    }
    interface MidwestTime {
        "format"?: string;
        "relative"?: boolean;
        "unix"?: number;
        "value"?: string;
    }
    interface MidwestTooltip {
        "align"?: "left" | "center" | "right" | "middle-left" | "middle-center" | "middle-right" | "bottom-left" | "bottom-center" | "bottom-right";
        "dark"?: boolean;
        "focused"?: boolean;
        "hover"?: boolean;
    }
    interface MidwestUnit {
        "decimals"?: number;
        "from"?: any;
        "money"?: boolean;
        "round"?: boolean;
        "to"?: any;
        "value"?: number;
    }
    interface IntrinsicElements {
        "copy-wrap": CopyWrap;
        "midwest-accordion": MidwestAccordion;
        "midwest-avatar": MidwestAvatar;
        "midwest-breadcrumb": MidwestBreadcrumb;
        "midwest-breadcrumbs": MidwestBreadcrumbs;
        "midwest-button": MidwestButton;
        "midwest-calendar-date": MidwestCalendarDate;
        "midwest-callout": MidwestCallout;
        "midwest-card": MidwestCard;
        "midwest-content": MidwestContent;
        "midwest-dropdown": MidwestDropdown;
        "midwest-grid": MidwestGrid;
        "midwest-group": MidwestGroup;
        "midwest-group-overflow": MidwestGroupOverflow;
        "midwest-label": MidwestLabel;
        "midwest-layout": MidwestLayout;
        "midwest-message": MidwestMessage;
        "midwest-pagination": MidwestPagination;
        "midwest-panel": MidwestPanel;
        "midwest-progress": MidwestProgress;
        "midwest-sidebar": MidwestSidebar;
        "midwest-step": MidwestStep;
        "midwest-steps": MidwestSteps;
        "midwest-tab": MidwestTab;
        "midwest-tabs": MidwestTabs;
        "midwest-tag": MidwestTag;
        "midwest-theme": MidwestTheme;
        "midwest-time": MidwestTime;
        "midwest-tooltip": MidwestTooltip;
        "midwest-unit": MidwestUnit;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "copy-wrap": LocalJSX.CopyWrap & JSXBase.HTMLAttributes<HTMLCopyWrapElement>;
            "midwest-accordion": LocalJSX.MidwestAccordion & JSXBase.HTMLAttributes<HTMLMidwestAccordionElement>;
            "midwest-avatar": LocalJSX.MidwestAvatar & JSXBase.HTMLAttributes<HTMLMidwestAvatarElement>;
            "midwest-breadcrumb": LocalJSX.MidwestBreadcrumb & JSXBase.HTMLAttributes<HTMLMidwestBreadcrumbElement>;
            "midwest-breadcrumbs": LocalJSX.MidwestBreadcrumbs & JSXBase.HTMLAttributes<HTMLMidwestBreadcrumbsElement>;
            "midwest-button": LocalJSX.MidwestButton & JSXBase.HTMLAttributes<HTMLMidwestButtonElement>;
            "midwest-calendar-date": LocalJSX.MidwestCalendarDate & JSXBase.HTMLAttributes<HTMLMidwestCalendarDateElement>;
            "midwest-callout": LocalJSX.MidwestCallout & JSXBase.HTMLAttributes<HTMLMidwestCalloutElement>;
            "midwest-card": LocalJSX.MidwestCard & JSXBase.HTMLAttributes<HTMLMidwestCardElement>;
            "midwest-content": LocalJSX.MidwestContent & JSXBase.HTMLAttributes<HTMLMidwestContentElement>;
            "midwest-dropdown": LocalJSX.MidwestDropdown & JSXBase.HTMLAttributes<HTMLMidwestDropdownElement>;
            "midwest-grid": LocalJSX.MidwestGrid & JSXBase.HTMLAttributes<HTMLMidwestGridElement>;
            "midwest-group": LocalJSX.MidwestGroup & JSXBase.HTMLAttributes<HTMLMidwestGroupElement>;
            "midwest-group-overflow": LocalJSX.MidwestGroupOverflow & JSXBase.HTMLAttributes<HTMLMidwestGroupOverflowElement>;
            "midwest-label": LocalJSX.MidwestLabel & JSXBase.HTMLAttributes<HTMLMidwestLabelElement>;
            "midwest-layout": LocalJSX.MidwestLayout & JSXBase.HTMLAttributes<HTMLMidwestLayoutElement>;
            "midwest-message": LocalJSX.MidwestMessage & JSXBase.HTMLAttributes<HTMLMidwestMessageElement>;
            "midwest-pagination": LocalJSX.MidwestPagination & JSXBase.HTMLAttributes<HTMLMidwestPaginationElement>;
            "midwest-panel": LocalJSX.MidwestPanel & JSXBase.HTMLAttributes<HTMLMidwestPanelElement>;
            "midwest-progress": LocalJSX.MidwestProgress & JSXBase.HTMLAttributes<HTMLMidwestProgressElement>;
            "midwest-sidebar": LocalJSX.MidwestSidebar & JSXBase.HTMLAttributes<HTMLMidwestSidebarElement>;
            "midwest-step": LocalJSX.MidwestStep & JSXBase.HTMLAttributes<HTMLMidwestStepElement>;
            "midwest-steps": LocalJSX.MidwestSteps & JSXBase.HTMLAttributes<HTMLMidwestStepsElement>;
            "midwest-tab": LocalJSX.MidwestTab & JSXBase.HTMLAttributes<HTMLMidwestTabElement>;
            "midwest-tabs": LocalJSX.MidwestTabs & JSXBase.HTMLAttributes<HTMLMidwestTabsElement>;
            "midwest-tag": LocalJSX.MidwestTag & JSXBase.HTMLAttributes<HTMLMidwestTagElement>;
            "midwest-theme": LocalJSX.MidwestTheme & JSXBase.HTMLAttributes<HTMLMidwestThemeElement>;
            "midwest-time": LocalJSX.MidwestTime & JSXBase.HTMLAttributes<HTMLMidwestTimeElement>;
            "midwest-tooltip": LocalJSX.MidwestTooltip & JSXBase.HTMLAttributes<HTMLMidwestTooltipElement>;
            "midwest-unit": LocalJSX.MidwestUnit & JSXBase.HTMLAttributes<HTMLMidwestUnitElement>;
        }
    }
}
