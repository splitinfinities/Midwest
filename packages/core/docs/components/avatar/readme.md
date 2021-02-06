# midwest-avatar



<!-- Auto Generated Below -->


## Usage

### Colors

<midwest-code>
      <template>
            <midwest-avatar name="William M. Riley" color="red"></midwest-avatar>
      </template>
</midwest-code>


### Default

<midwest-code>
      <template>
            <midwest-avatar name="William M. Riley"></midwest-avatar>
      </template>
</midwest-code>


### Shape

<midwest-code>
      <template>
            <midwest-avatar name="William M. Riley" shape="circle"></midwest-avatar>
            <midwest-avatar name="William M. Riley" shape="rectangle"></midwest-avatar>
            <midwest-avatar name="William M. Riley" shape="diamond"></midwest-avatar>
            <midwest-avatar name="William M. Riley" shape="star"></midwest-avatar>
            <midwest-avatar name="William M. Riley" shape="message"></midwest-avatar>
      </template>
</midwest-code>


### Sizes

<midwest-avatar name="William M. Riley" size="tiny"></midwest-avatar>
<midwest-avatar name="William M. Riley" size="small"></midwest-avatar>
<midwest-avatar name="William M. Riley" size="medium"></midwest-avatar>
<midwest-avatar name="William M. Riley" size="large"></midwest-avatar>



## Properties

| Property     | Attribute    | Description | Type                                                                                   | Default            |
| ------------ | ------------ | ----------- | -------------------------------------------------------------------------------------- | ------------------ |
| `color`      | `color`      |             | `string`                                                                               | `"auto"`           |
| `dark`       | `dark`       |             | `boolean`                                                                              | `false`            |
| `icon`       | `icon`       |             | `string`                                                                               | `undefined`        |
| `initials`   | `initials`   |             | `string`                                                                               | `"MW"`             |
| `name`       | `name`       |             | `string`                                                                               | `"Midwest Design"` |
| `noTooltip`  | `no-tooltip` |             | `boolean`                                                                              | `false`            |
| `processing` | `processing` |             | `boolean`                                                                              | `false`            |
| `shape`      | `shape`      |             | `"circle" \| "diamond" \| "hexagon" \| "message" \| "rectangle" \| "square" \| "star"` | `"square"`         |
| `size`       | `size`       |             | `"huge" \| "large" \| "medium" \| "medium-small" \| "small" \| "tiny" \| "xlarge"`     | `undefined`        |
| `src`        | `src`        |             | `string`                                                                               | `undefined`        |


## Dependencies

### Depends on

- [midwest-progress](../progress)
- ion-icon
- [midwest-tooltip](../tooltip)

### Graph
```mermaid
graph TD;
  midwest-avatar --> midwest-progress
  midwest-avatar --> ion-icon
  midwest-avatar --> midwest-tooltip
  style midwest-avatar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
