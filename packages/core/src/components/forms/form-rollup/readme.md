# midwest-form-rollup



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                       | Default              |
| ------------- | ------------- | ----------- | -------------------------- | -------------------- |
| `appendCopy`  | `append-copy` |             | `string`                   | `undefined`          |
| `count`       | `count`       |             | `number`                   | `3`                  |
| `fallback`    | `fallback`    |             | `string`                   | `"Choose something"` |
| `for`         | `for`         |             | `string`                   | `undefined`          |
| `noAvatars`   | `no-avatars`  |             | `boolean`                  | `undefined`          |
| `options`     | --            |             | `HTMLMidwestItemElement[]` | `undefined`          |
| `placeholder` | `placeholder` |             | `string`                   | `undefined`          |
| `show`        | `show`        |             | `boolean`                  | `true`               |
| `verbiage`    | `verbiage`    |             | `string`                   | `"item"`             |


## Methods

### `update() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [midwest-select](../select)

### Depends on

- [midwest-label](../../common/label)
- [midwest-avatar](../../common/avatar)
- [midwest-group](../../common/group)

### Graph
```mermaid
graph TD;
  midwest-form-rollup --> midwest-label
  midwest-form-rollup --> midwest-avatar
  midwest-form-rollup --> midwest-group
  midwest-avatar --> midwest-progress
  midwest-avatar --> ion-icon
  midwest-avatar --> midwest-tooltip
  midwest-group --> midwest-tag
  midwest-group --> midwest-group-overflow
  midwest-tag --> ion-icon
  midwest-tag --> midwest-label
  midwest-group-overflow --> midwest-label
  midwest-group-overflow --> midwest-tooltip
  midwest-select --> midwest-form-rollup
  style midwest-form-rollup fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
