import { isFloat } from "./is-float";
import { isNull } from "./is-null";
import { isUndefined } from "./is-undefined";
import { toBoolean } from "./to-boolean";

/**
 * Converts the provided value to number.
 * @param v Arbitrary value.
 */
export function toFloat(v?: any) {
  if (isFloat(v), isUndefined(v) || isNull(v)) {
    return v;
  }

  const pv = parseFloat(v);
  if (isFloat(pv)) {
    return pv;
  } else if (toBoolean(v)) {
    return 1;
  } else {
    return 0;
  }
}
