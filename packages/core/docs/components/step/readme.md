# midwest-step



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description | Type                 | Default     |
| ---------- | ----------- | ----------- | -------------------- | ----------- |
| `complete` | `complete`  |             | `boolean`            | `false`     |
| `current`  | `current`   |             | `boolean`            | `false`     |
| `disabled` | `disabled`  |             | `boolean`            | `false`     |
| `error`    | `error`     |             | `boolean`            | `false`     |
| `export`   | `export`    |             | `boolean`            | `false`     |
| `href`     | `href`      |             | `string`             | `'#'`       |
| `open`     | `open`      |             | `boolean`            | `false`     |
| `order`    | `order`     |             | `number`             | `undefined` |
| `past`     | `past`      |             | `boolean`            | `false`     |
| `tabCount` | `tab-count` |             | `number`             | `undefined` |
| `type`     | `type`      |             | `"button" \| "link"` | `'button'`  |
| `validate` | `validate`  |             | `boolean`            | `undefined` |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `contentChange` |             | `CustomEvent<any>` |
| `updated`       |             | `CustomEvent<any>` |


## Methods

### `activate() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `isValid() => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`



### `showValidation() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- ion-icon
- [midwest-label](../label)

### Graph
```mermaid
graph TD;
  midwest-step --> ion-icon
  midwest-step --> midwest-label
  style midwest-step fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
