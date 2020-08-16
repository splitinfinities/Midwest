import { isArray } from './is-array';
import { isUndefined } from './is-undefined';
import { isNull } from './is-null';

/**
 * Converts the provided value to array.
 * @param v Arbitrary value.
 */
export function toArray(v?: any): Array<any> {
  if (isArray(v) || isUndefined(v) || isNull(v)) {
    return v;
  }
  // TODO - This seems a little hacky but I need a way of getting around 
  // the form2js arrays being returned as objects. -APC  
  // @ts-ignore 
  else if (Object.keys(v).length > 0 && !isNaN(Object.keys(v)[0])) {
    return Object.values(v);
  }
  else {
    return [v];
  }
}
