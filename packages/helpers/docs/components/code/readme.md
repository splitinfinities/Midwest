# midwest-code



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type      | Default     |
| ------------ | ------------- | ----------- | --------- | ----------- |
| `codeString` | `code-string` |             | `string`  | `undefined` |
| `copy`       | `copy`        |             | `boolean` | `true`      |
| `dark`       | `dark`        |             | `boolean` | `false`     |
| `expandable` | `expandable`  |             | `boolean` | `false`     |
| `expanded`   | `expanded`    |             | `boolean` | `false`     |
| `feature`    | `feature`     |             | `boolean` | `false`     |
| `language`   | `language`    |             | `string`  | `'html'`    |
| `preview`    | `preview`     |             | `boolean` | `true`      |
| `simple`     | `simple`      |             | `boolean` | `false`     |


## Methods

### `clipboard() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `highlight() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `result() => Promise<string>`



#### Returns

Type: `Promise<string>`



### `setCode(code: any) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [midwest-asset-library](../asset-library)

### Depends on

- midwest-card
- midwest-button

### Graph
```mermaid
graph TD;
  midwest-code --> midwest-card
  midwest-code --> midwest-button
  midwest-card --> midwest-button
  midwest-card --> ion-icon
  midwest-card --> resize-observer
  midwest-button --> midwest-progress
  midwest-button --> midwest-label
  midwest-asset-library --> midwest-code
  style midwest-code fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
