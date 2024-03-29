# midwest-tooltip



<!-- Auto Generated Below -->


## Usage

### Align

<midwest-grid style="--grid-width: 270px">
	<midwest-button block>
		Hover over me...
		<midwest-tooltip align="top-left">
			<midwest-avatar name="William M. Riley" size="tiny" class="mr2"></midwest-avatar>
			<span>
				William M. Riley
				<small class="db o-70">Joined Feb. 2nd</small>
			</span>
		</midwest-tooltip>
	</midwest-button>
	<midwest-button block>
		Hover over me...
		<midwest-tooltip align="top-center">
			<midwest-avatar name="William M. Riley" size="tiny" class="mr2"></midwest-avatar>
			<span>
				William M. Riley
				<small class="db o-70">Joined Feb. 2nd</small>
			</span>
		</midwest-tooltip>
	</midwest-button>
	<midwest-button block>
		Hover over me...
		<midwest-tooltip align="top-right">
			<midwest-avatar name="William M. Riley" size="tiny" class="mr2"></midwest-avatar>
			<span>
				William M. Riley
				<small class="db o-70">Joined Feb. 2nd</small>
			</span>
		</midwest-tooltip>
	</midwest-button>
	<midwest-button block>
		Hover over me...
		<midwest-tooltip align="middle-left">
			<midwest-avatar name="William M. Riley" size="tiny" class="mr2"></midwest-avatar>
			<span>
				William M. Riley
				<small class="db o-70">Joined Feb. 2nd</small>
			</span>
		</midwest-tooltip>
	</midwest-button>
	<midwest-button block>
		Hover over me...
		<midwest-tooltip align="middle-right">
			<midwest-avatar name="William M. Riley" size="tiny" class="mr2"></midwest-avatar>
			<span>
				William M. Riley
				<small class="db o-70">Joined Feb. 2nd</small>
			</span>
		</midwest-tooltip>
	</midwest-button>
	<midwest-button block>
		Hover over me...
		<midwest-tooltip align="bottom-left">
			<midwest-avatar name="William M. Riley" size="tiny" class="mr2"></midwest-avatar>
			<span>
				William M. Riley
				<small class="db o-70">Joined Feb. 2nd</small>
			</span>
		</midwest-tooltip>
	</midwest-button>
	<midwest-button block>
		Hover over me...
		<midwest-tooltip align="bottom-center">
			<midwest-avatar name="William M. Riley" size="tiny" class="mr2"></midwest-avatar>
			<span>
				William M. Riley
				<small class="db o-70">Joined Feb. 2nd</small>
			</span>
		</midwest-tooltip>
	</midwest-button>
	<midwest-button block>
		Hover over me...
		<midwest-tooltip align="bottom-right">
			<midwest-avatar name="William M. Riley" size="tiny" class="mr2"></midwest-avatar>
			<span>
				William M. Riley
				<small class="db o-70">Joined Feb. 2nd</small>
			</span>
		</midwest-tooltip>
	</midwest-button>
</midwest-grid>


### Default

<midwest-button block>
	Hover over me...
	<midwest-tooltip>
		<midwest-avatar name="William M. Riley" size="tiny" class="mr2"></midwest-avatar>
		<span>
			William M. Riley
			<small class="db o-70">Joined Feb. 2nd</small>
		</span>
	</midwest-tooltip>
</midwest-button>



## Properties

| Property  | Attribute | Description | Type                                                                                                                                        | Default    |
| --------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `align`   | `align`   |             | `"bottom-center" \| "bottom-left" \| "bottom-right" \| "center" \| "left" \| "middle-center" \| "middle-left" \| "middle-right" \| "right"` | `"center"` |
| `dark`    | `dark`    |             | `boolean`                                                                                                                                   | `false`    |
| `focused` | `focused` |             | `boolean`                                                                                                                                   | `false`    |


## Dependencies

### Used by

 - [midwest-avatar](../avatar)
 - [midwest-group-overflow](../group-overflow)
 - [midwest-input](../../forms/input)
 - [midwest-input-date](../../forms/input-date)
 - [midwest-input-file](../../forms/input-file)
 - [midwest-input-tags](../../forms/input-tags)
 - [midwest-item](../../forms/item)
 - [midwest-rich-text](../../forms/rich-text)
 - [midwest-select](../../forms/select)
 - [midwest-switch](../../forms/switch)

### Graph
```mermaid
graph TD;
  midwest-avatar --> midwest-tooltip
  midwest-group-overflow --> midwest-tooltip
  midwest-input --> midwest-tooltip
  midwest-input-date --> midwest-tooltip
  midwest-input-file --> midwest-tooltip
  midwest-input-tags --> midwest-tooltip
  midwest-item --> midwest-tooltip
  midwest-rich-text --> midwest-tooltip
  midwest-select --> midwest-tooltip
  midwest-switch --> midwest-tooltip
  style midwest-tooltip fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
