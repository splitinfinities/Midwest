# midwest-blur



<!-- Auto Generated Below -->


## Usage

### Animate-text

<copy-wrap align="center">
	<midwest-animate-text method="lettering">
		<h1>Stellar!</h1>
		<h3 alt>A Beautiful, Complete Design System</h3>
	</midwest-animate-text>
</copy-wrap>


### Default

<midwest-blur class="example mb4 db">
	<copy-wrap>
		<h1>Awesome~</h1>
		<h2 alt>Change the values below to see the blurring changes.</h2>
	</copy-wrap>
</midwest-blur>
<midwest-grid cols="1" class="theme-gray">
	<midwest-input type="number" max="50" min="0" placeholder="Vertical" onChange="document.querySelector('midwest-blur.example').vertical = this.value;"></midwest-input>
	<midwest-input type="number" max="50" min="0" placeholder="Horizontal" onChange="document.querySelector('midwest-blur.example').horizontal = this.value;"></midwest-input>
</midwest-grid>



## Properties

| Property     | Attribute    | Description | Type     | Default |
| ------------ | ------------ | ----------- | -------- | ------- |
| `horizontal` | `horizontal` |             | `number` | `0`     |
| `vertical`   | `vertical`   |             | `number` | `0`     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
