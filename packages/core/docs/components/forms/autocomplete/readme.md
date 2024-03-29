# midwest-autocomplete



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description | Type                                       | Default                  |
| --------------- | ----------------- | ----------- | ------------------------------------------ | ------------------------ |
| `dark`          | `dark`            |             | `boolean`                                  | `undefined`              |
| `dummy`         | `dummy`           |             | `boolean`                                  | `undefined`              |
| `freeTextField` | `free-text-field` |             | `string`                                   | `undefined`              |
| `groups`        | --                |             | `string[]`                                 | `[]`                     |
| `inline`        | `inline`          |             | `boolean`                                  | `undefined`              |
| `label`         | `label`           |             | `string`                                   | `"Choose a user"`        |
| `name`          | `name`            |             | `string`                                   | `undefined`              |
| `noAvatars`     | `no-avatars`      |             | `boolean`                                  | `undefined`              |
| `open`          | `open`            |             | `boolean`                                  | `undefined`              |
| `options`       | --                |             | `Item[]`                                   | `[]`                     |
| `placeholder`   | `placeholder`     |             | `string`                                   | `"Search for a User..."` |
| `position`      | `position`        |             | `"down" \| "up"`                           | `"down"`                 |
| `ready`         | `ready`           |             | `boolean`                                  | `undefined`              |
| `required`      | `required`        |             | `boolean`                                  | `undefined`              |
| `results`       | `results`         |             | `number`                                   | `12`                     |
| `selected`      | --                |             | `Item[]`                                   | `[]`                     |
| `tag`           | `tag`             |             | `"a" \| "button" \| "checkbox" \| "radio"` | `"radio"`                |
| `url`           | `url`             |             | `string`                                   | `undefined`              |
| `valid`         | `valid`           |             | `boolean`                                  | `undefined`              |
| `value`         | `value`           |             | `string \| string[]`                       | `undefined`              |
| `verbiage`      | `verbiage`        |             | `string`                                   | `"User"`                 |


## Events

| Event              | Description | Type               |
| ------------------ | ----------- | ------------------ |
| `custom`           |             | `CustomEvent<any>` |
| `predefined`       |             | `CustomEvent<any>` |
| `selectionChanged` |             | `CustomEvent<any>` |


## Methods

### `optionEls() => Promise<HTMLMidwestItemElement[]>`



#### Returns

Type: `Promise<HTMLMidwestItemElement[]>`



### `validate(set?: boolean) => Promise<FormResult>`



#### Returns

Type: `Promise<FormResult>`




## Dependencies

### Depends on

- [midwest-label](../../common/label)
- [midwest-input](../input)
- [midwest-form-rollup](../form-rollup)
- [midwest-item-group](../item-group)
- [midwest-item](../item)
- [midwest-validate](../validate)

### Graph
```mermaid
graph TD;
  midwest-autocomplete --> midwest-label
  midwest-autocomplete --> midwest-input
  midwest-autocomplete --> midwest-form-rollup
  midwest-autocomplete --> midwest-item-group
  midwest-autocomplete --> midwest-item
  midwest-autocomplete --> midwest-validate
  midwest-input --> midwest-label
  midwest-input --> ion-icon
  midwest-input --> midwest-progress
  midwest-input --> midwest-tooltip
  midwest-input --> midwest-validate
  midwest-validate --> midwest-label
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
  midwest-item-group --> midwest-label
  midwest-item --> midwest-avatar
  midwest-item --> ion-icon
  midwest-item --> midwest-box
  midwest-item --> midwest-label
  midwest-item --> midwest-tooltip
  midwest-item --> export-to-figma
  midwest-box --> ion-icon
  style midwest-autocomplete fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
