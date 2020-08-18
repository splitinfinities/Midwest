# display-feed



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type     | Default         |
| ----------- | ------------ | ----------- | -------- | --------------- |
| `filter`    | `filter`     |             | `string` | `"popular"`     |
| `icon`      | `icon`       |             | `string` | `"logo-github"` |
| `iconColor` | `icon-color` |             | `string` | `"blue"`        |
| `type`      | `type`       |             | `string` | `"midwest"`     |


## Dependencies

### Used by

 - [app-home](../app-home)

### Depends on

- copy-wrap
- midwest-progress
- midwest-grid
- midwest-image
- midwest-card
- midwest-tag
- midwest-time
- animate-presence
- ion-icon

### Graph
```mermaid
graph TD;
  display-feed --> copy-wrap
  display-feed --> midwest-progress
  display-feed --> midwest-grid
  display-feed --> midwest-image
  display-feed --> midwest-card
  display-feed --> midwest-tag
  display-feed --> midwest-time
  display-feed --> animate-presence
  display-feed --> ion-icon
  midwest-image --> midwest-intersection
  midwest-card --> midwest-button
  midwest-card --> ion-icon
  midwest-card --> export-to-figma
  midwest-button --> midwest-progress
  midwest-button --> midwest-label
  midwest-button --> stencil-route-link
  midwest-button --> export-to-figma
  midwest-tag --> ion-icon
  midwest-tag --> midwest-label
  app-home --> display-feed
  style display-feed fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
