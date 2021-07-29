import deepmerge from "deepmerge";
import { convert } from "./convert";

declare interface Form2JsType {
  name: string;
  value: any;
  valid?: boolean;
  errors?: string[];
}

export function form2js(data: Form2JsType[]) {
  let object = {};

  data.forEach((item) => {
    if (item.name && item.value && item.value !== "") {
      const result = convert(item.name, item.value);
      object = deepmerge.all([object, result]);
    } else {
      return;
    }
  });

  return object;
}
