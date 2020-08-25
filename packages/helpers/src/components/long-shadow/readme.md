# midwest-long-shadow



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type                                                           | Default      |
| ----------- | ----------- | ----------- | -------------------------------------------------------------- | ------------ |
| `active`    | `active`    |             | `boolean`                                                      | `false`      |
| `delay`     | `delay`     |             | `number`                                                       | `100`        |
| `direction` | `direction` |             | `"bottom-left" \| "bottom-right" \| "top-left" \| "top-right"` | `"top-left"` |
| `length`    | `length`    |             | `number`                                                       | `100`        |
| `timing`    | `timing`    |             | `number`                                                       | `50`         |


## Methods

### `in() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `out() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [midwest-intersection](../intersection)

### Graph
```mermaid
graph TD;
  midwest-long-shadow --> midwest-intersection
  style midwest-long-shadow fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
