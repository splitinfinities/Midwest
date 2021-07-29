import { isNull } from "./is-null";
import { isString } from "./is-string";
import { isUndefined } from "./is-undefined";

/**
 * Converts the provided value to string.
 * @param v Arbitrary value.
 */
export function toString(v?: any) {
  if (isString(v)) {
    return v;
  } else if (isUndefined(v) || isNull(v)) {
    return v;
  } else {
    return toString(v.toString());
  }
}
