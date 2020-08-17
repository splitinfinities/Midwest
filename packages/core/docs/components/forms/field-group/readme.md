# midwest-field-group



<!-- Auto Generated Below -->


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `fast-updates` |             | `CustomEvent<any>` |
| `submitted`    |             | `CustomEvent<any>` |
| `updated`      |             | `CustomEvent<any>` |


## Methods

### `addElement(el: HTMLElement) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `removeElement(el: HTMLElement) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `state(validate?: boolean) => Promise<{ els: any; json: any; results: FormResult[]; namedResults: { [name: string]: string; }; formData: any; valid: boolean; }>`



#### Returns

Type: `Promise<{ els: any; json: any; results: FormResult[]; namedResults: { [name: string]: string; }; formData: any; valid: boolean; }>`



### `submitForm() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [midwest-callout](../../common/callout)
- [copy-wrap](../../common/copy-wrap)

### Graph
```mermaid
graph TD;
  midwest-field-group --> midwest-callout
  midwest-field-group --> copy-wrap
  midwest-callout --> context-consumer
  style midwest-field-group fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
