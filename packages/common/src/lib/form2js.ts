import { convert } from './convert';
import deepmerge from 'deepmerge';

declare type Form2JsType = {
  name: string,
  value: any,
  valid?: boolean,
  errors?: string[],
}

export function form2js(data: Form2JsType[]) {
  let object = {};

  data.forEach(item => {
    if (item.name && item.value && item.value !== "") {
      let result = convert(item.name, item.value)
      object = deepmerge.all([object, result])
    } else {
      return;
    }
  })

  return object;
}
