import { isFloat } from './is-float';
import { isInteger } from './is-integer';
import { isNull } from './is-null';
import { isUndefined } from './is-undefined';
import { toBoolean } from './to-boolean';

/**
 * Converts the provided value to integer.
 * @param v Arbitrary value.
 */
export function toInteger(v?: any) {
  if (isInteger(v)) {
    return v;
  } else if (isUndefined(v) || isNull(v)) {
    return v;
  } else if (isFloat(v)) {
    return parseInt(v, 10);
  } else {
    const pv = parseInt(v, 10);
    if (isInteger(pv)) {
      return pv;
    } else if (toBoolean(v)) {
      return 1;
    } else {
      return 0;
    }
  }
}
