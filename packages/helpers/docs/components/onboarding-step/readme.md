# midwest-onboarding-step



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description | Type                                                                                                                                                                                                         | Default     |
| --------------------- | ----------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `awaitModal`          | `await-modal`           |             | `boolean`                                                                                                                                                                                                    | `undefined` |
| `back`                | `back`                  |             | `string`                                                                                                                                                                                                     | `undefined` |
| `canClickTarget`      | `can-click-target`      |             | `boolean`                                                                                                                                                                                                    | `undefined` |
| `chainTo`             | `chain-to`              |             | `string`                                                                                                                                                                                                     | `undefined` |
| `closeModalAfterward` | `close-modal-afterward` |             | `boolean`                                                                                                                                                                                                    | `undefined` |
| `completeText`        | `complete-text`         |             | `string`                                                                                                                                                                                                     | `undefined` |
| `delay`               | `delay`                 |             | `number`                                                                                                                                                                                                     | `undefined` |
| `forceAction`         | `force-action`          |             | `boolean`                                                                                                                                                                                                    | `undefined` |
| `name`                | `name`                  |             | `string`                                                                                                                                                                                                     | `undefined` |
| `navigateTo`          | `navigate-to`           |             | `string`                                                                                                                                                                                                     | `undefined` |
| `next`                | `next`                  |             | `string`                                                                                                                                                                                                     | `undefined` |
| `nextText`            | `next-text`             |             | `string`                                                                                                                                                                                                     | `"next"`    |
| `position`            | `position`              |             | `"auto" \| "auto-end" \| "auto-start" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `"auto"`    |
| `selector`            | `selector`              |             | `string`                                                                                                                                                                                                     | `undefined` |
| `stepTitle`           | `step-title`            |             | `string`                                                                                                                                                                                                     | `undefined` |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `close-modal` |             | `CustomEvent<any>` |


## Methods

### `details(tour: any, id: any) => Promise<{ id: string; text: string; title: string; beforeShowPromise: any; canClickTarget: boolean; advanceOn: { selector: string; event: string; }; when: { hide: () => void; }; attachTo: { element: string; on: "auto" | "auto-start" | "auto-end" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "right" | "right-start" | "right-end" | "left" | "left-start" | "left-end"; }; buttons: { text: string; action: () => void; }[]; }>`



#### Returns

Type: `Promise<{ id: string; text: string; title: string; beforeShowPromise: any; canClickTarget: boolean; advanceOn: { selector: string; event: string; }; when: { hide: () => void; }; attachTo: { element: string; on: "auto" | "auto-start" | "auto-end" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "right" | "right-start" | "right-end" | "left" | "left-start" | "left-end"; }; buttons: { text: string; action: () => void; }[]; }>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
