# midwest-docs



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [app-home](../app-home)

### Depends on

- midwest-input
- midwest-switch
- midwest-select
- midwest-item

### Graph
```mermaid
graph TD;
  midwest-docs --> midwest-input
  midwest-docs --> midwest-switch
  midwest-docs --> midwest-select
  midwest-docs --> midwest-item
  midwest-input --> midwest-label
  midwest-input --> ion-icon
  midwest-input --> midwest-progress
  midwest-input --> midwest-tooltip
  midwest-input --> midwest-validate
  midwest-validate --> midwest-label
  midwest-switch --> midwest-label
  midwest-switch --> ion-icon
  midwest-switch --> midwest-tooltip
  midwest-switch --> midwest-validate
  midwest-switch --> export-to-figma
  midwest-select --> midwest-button
  midwest-select --> midwest-label
  midwest-select --> midwest-progress
  midwest-select --> midwest-form-rollup
  midwest-select --> ion-icon
  midwest-select --> midwest-tooltip
  midwest-select --> midwest-input
  midwest-select --> midwest-validate
  midwest-select --> export-to-figma
  midwest-button --> midwest-progress
  midwest-button --> midwest-label
  midwest-button --> stencil-route-link
  midwest-button --> export-to-figma
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
  midwest-item --> midwest-avatar
  midwest-item --> ion-icon
  midwest-item --> midwest-box
  midwest-item --> midwest-label
  midwest-item --> midwest-tooltip
  midwest-item --> export-to-figma
  midwest-box --> ion-icon
  app-home --> midwest-docs
  style midwest-docs fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
