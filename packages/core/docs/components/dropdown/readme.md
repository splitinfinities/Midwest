# midwest-dropdown



<!-- Auto Generated Below -->


## Usage

### Default

<midwest-dropdown>
	<midwest-button ghost slot="handle">Account</midwest-button>
	<midwest-item>
		<midwest-avatar name="William M. Riley" size="small" notooltip></midwest-avatar>
		Your Account
	</midwest-item>
	<midwest-item>Billing</midwest-item>
	<midwest-item selectable="false" slot="footer">
		<midwest-button pill outline block size="tiny" padding="small">Sign out</midwest-button>
	</midwest-item>
</midwest-dropdown>


### Positioning

<midwest-dropdown position="left">
	<midwest-button ghost slot="handle">Account</midwest-button>
	<midwest-item>
		<midwest-avatar name="William M. Riley" size="small" notooltip></midwest-avatar>
		Your Account
	</midwest-item>
	<midwest-item>Billing</midwest-item>
	<midwest-item>Settings</midwest-item>
	<midwest-item selectable="false" slot="footer">
		<midwest-button pill outline block size="tiny" padding="small">Sign out</midwest-button>
	</midwest-item>
</midwest-dropdown>

<br />

<midwest-dropdown position="right">
	<midwest-button ghost slot="handle">Account</midwest-button>
	<midwest-item>
		<midwest-avatar name="William M. Riley" size="small" notooltip></midwest-avatar>
		Your Account
	</midwest-item>
	<midwest-item>Billing</midwest-item>
	<midwest-item>Settings</midwest-item>
	<midwest-item selectable="false" slot="footer">
		<midwest-button pill outline block size="tiny" padding="small">Sign out</midwest-button>
	</midwest-item>
</midwest-dropdown>



## Properties

| Property   | Attribute   | Description | Type                            | Default        |
| ---------- | ----------- | ----------- | ------------------------------- | -------------- |
| `dark`     | `dark`      |             | `boolean`                       | `false`        |
| `icon`     | `icon`      |             | `boolean`                       | `false`        |
| `iconName` | `icon-name` |             | `string`                        | `"arrow-down"` |
| `label`    | `label`     |             | `string`                        | `"Dropdown"`   |
| `open`     | `open`      |             | `boolean`                       | `false`        |
| `position` | `position`  |             | `"center" \| "left" \| "right"` | `"center"`     |


## Dependencies

### Depends on

- ion-icon

### Graph
```mermaid
graph TD;
  midwest-dropdown --> ion-icon
  style midwest-dropdown fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
