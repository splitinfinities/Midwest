# midwest-markdown



<!-- Auto Generated Below -->


## Usage

### Default

<midwest-markdown src="https://raw.githubusercontent.com/ionic-team/stencil/master/readme.md"></midwest-markdown>


### Template

<midwest-markdown>
  <template>
# Heading
## Very cool!
- item one
- item two
- item three
  </template>
</midwest-markdown>



## Properties

| Property     | Attribute     | Description                                 | Type                                  | Default     |
| ------------ | ------------- | ------------------------------------------- | ------------------------------------- | ----------- |
| `codeString` | `code-string` | Used to set                                 | `string`                              | `undefined` |
| `editable`   | `editable`    |                                             | `boolean`                             | `false`     |
| `flavor`     | `flavor`      |                                             | `"github" \| "original" \| "vanilla"` | `"vanilla"` |
| `src`        | `src`         | Used to reference an external markdown file | `string`                              | `undefined` |


## Dependencies

### Depends on

- midwest-card
- copy-wrap
- midwest-input

### Graph
```mermaid
graph TD;
  midwest-markdown --> midwest-card
  midwest-markdown --> copy-wrap
  midwest-markdown --> midwest-input
  midwest-card --> midwest-button
  midwest-card --> ion-icon
  midwest-card --> export-to-figma
  midwest-button --> midwest-progress
  midwest-button --> midwest-label
  midwest-button --> export-to-figma
  midwest-input --> midwest-label
  midwest-input --> ion-icon
  midwest-input --> midwest-progress
  midwest-input --> midwest-tooltip
  midwest-input --> midwest-validate
  midwest-validate --> midwest-label
  style midwest-markdown fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
