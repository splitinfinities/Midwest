# midwest-google-maps



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description | Type                                            | Default     |
| ------------------- | -------------------- | ----------- | ----------------------------------------------- | ----------- |
| `apiKey`            | `api-key`            |             | `string`                                        | `undefined` |
| `block`             | `block`              |             | `boolean`                                       | `true`      |
| `fullscreenControl` | `fullscreen-control` |             | `boolean`                                       | `false`     |
| `gestureHandling`   | `gesture-handling`   |             | `"auto" \| "cooperative" \| "greedy" \| "none"` | `"auto"`    |
| `height`            | `height`             |             | `number`                                        | `900`       |
| `lat`               | `lat`                |             | `number`                                        | `-34.397`   |
| `lng`               | `lng`                |             | `number`                                        | `150.644`   |
| `mapType`           | `map-type`           |             | `boolean`                                       | `false`     |
| `noUi`              | `no-ui`              |             | `boolean`                                       | `false`     |
| `streetView`        | `street-view`        |             | `boolean`                                       | `false`     |
| `theme`             | `theme`              |             | `string`                                        | `undefined` |
| `width`             | `width`              |             | `number`                                        | `1600`      |
| `zoom`              | `zoom`               |             | `number`                                        | `8`         |
| `zoomControls`      | `zoom-controls`      |             | `boolean`                                       | `false`     |


## Methods

### `geocodeAddress(address: string) => Promise<any>`



#### Returns

Type: `Promise<any>`




## Dependencies

### Depends on

- skeleton-img

### Graph
```mermaid
graph TD;
  midwest-map --> skeleton-img
  skeleton-img --> midwest-progress
  style midwest-map fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
