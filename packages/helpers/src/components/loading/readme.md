# midwest-loading



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type      | Default     |
| --------- | --------- | ----------- | --------- | ----------- |
| `cta`     | `cta`     |             | `any`     | `undefined` |
| `error`   | `error`   |             | `string`  | `undefined` |
| `show`    | `show`    |             | `boolean` | `undefined` |
| `step`    | `step`    |             | `number`  | `0`         |
| `steps`   | `steps`   |             | `number`  | `3`         |
| `stretch` | `stretch` |             | `boolean` | `false`     |


## Dependencies

### Used by

 - [midwest-modal](../modal)

### Depends on

- copy-wrap
- midwest-progress

### Graph
```mermaid
graph TD;
  midwest-loading --> copy-wrap
  midwest-loading --> midwest-progress
  midwest-modal --> midwest-loading
  style midwest-loading fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
