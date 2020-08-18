# app-home



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- stellar-layout
- [stellar-docs](../docs)
- stellar-grid
- [display-feed](../display-feed)
- stellar-starscape

### Graph
```mermaid
graph TD;
  app-home --> stellar-layout
  app-home --> stellar-docs
  app-home --> stellar-grid
  app-home --> display-feed
  app-home --> stellar-starscape
  stellar-docs --> stellar-theme
  stellar-docs --> stellar-input
  stellar-docs --> stellar-color-picker
  stellar-docs --> stellar-item
  stellar-input --> stellar-label
  stellar-input --> copy-wrap
  stellar-input --> ion-icon
  stellar-input --> stellar-unit
  stellar-input --> stellar-tooltip
  stellar-item --> ion-icon
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
  stellar-starscape --> stellar-parallax
  stellar-starscape --> stellar-parallax-section
  style app-home fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
