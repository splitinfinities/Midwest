# midwest-validate



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute | Description | Type                         | Default     |
| -------------- | --------- | ----------- | ---------------------------- | ----------- |
| `check`        | --        |             | `CustomFunction`             | `undefined` |
| `color`        | `color`   |             | `string`                     | `undefined` |
| `customRender` | --        |             | `(message: string[]) => any` | `undefined` |
| `element`      | `element` |             | `any`                        | `undefined` |
| `name`         | `name`    |             | `string`                     | `undefined` |
| `silent`       | `silent`  |             | `boolean`                    | `undefined` |
| `size`         | `size`    |             | `string`                     | `undefined` |


## Events

| Event       | Description | Type               |
| ----------- | ----------- | ------------------ |
| `correct`   |             | `CustomEvent<any>` |
| `incorrect` |             | `CustomEvent<any>` |
| `test`      |             | `CustomEvent<any>` |


## Methods

### `get() => Promise<FormResult>`



#### Returns

Type: `Promise<FormResult>`



### `validate(set?: boolean) => Promise<FormResult>`



#### Returns

Type: `Promise<FormResult>`




## Dependencies

### Used by

 - [midwest-input](../input)
 - [midwest-input-date](../input-date)
 - [midwest-input-file](../input-file)
 - [midwest-input-tags](../input-tags)
 - [midwest-rich-text](../rich-text)
 - [midwest-select](../select)
 - [midwest-switch](../switch)
 - [midwest-toggle](../toggle)

### Depends on

- [midwest-label](../../common/label)

### Graph
```mermaid
graph TD;
  midwest-validate --> midwest-label
  midwest-input --> midwest-validate
  midwest-input-date --> midwest-validate
  midwest-input-file --> midwest-validate
  midwest-input-tags --> midwest-validate
  midwest-rich-text --> midwest-validate
  midwest-select --> midwest-validate
  midwest-switch --> midwest-validate
  midwest-toggle --> midwest-validate
  style midwest-validate fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
