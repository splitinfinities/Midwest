import { isArray } from './is-array';
import { isNull } from './is-null';
import { isUndefined } from './is-undefined';

/**
 * Converts the provided value to array.
 * @param v Arbitrary value.
 */
export function toArray(v?: any): any[] {
  if (isArray(v) || isUndefined(v) || isNull(v)) {
    return v;

    // @ts-ignore
  } else if (Object.keys(v).length > 0 && !isNaN(Object.keys(v)[0])) {
    return Object.values(v);
  } else {
    return [v];
  }
}
