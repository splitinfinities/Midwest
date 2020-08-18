# display-feed



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type     | Default         |
| ----------- | ------------ | ----------- | -------- | --------------- |
| `filter`    | `filter`     |             | `string` | `"popular"`     |
| `icon`      | `icon`       |             | `string` | `"logo-github"` |
| `iconColor` | `icon-color` |             | `string` | `"blue"`        |
| `type`      | `type`       |             | `string` | `"stellar"`     |


## Dependencies

### Used by

 - [app-home](../app-home)

### Depends on

- copy-wrap
- stellar-image
- stellar-card
- stellar-tag
- stellar-time
- stellar-button
- stellar-grid

### Graph
```mermaid
graph TD;
  display-feed --> copy-wrap
  display-feed --> stellar-image
  display-feed --> stellar-card
  display-feed --> stellar-tag
  display-feed --> stellar-time
  display-feed --> stellar-button
  display-feed --> stellar-grid
  stellar-image --> stellar-intersection
  stellar-card --> stellar-button
  stellar-card --> ion-icon
  stellar-button --> ion-icon
  stellar-button --> stencil-route-link
  stellar-tag --> stellar-label
  app-home --> display-feed
  style display-feed fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
