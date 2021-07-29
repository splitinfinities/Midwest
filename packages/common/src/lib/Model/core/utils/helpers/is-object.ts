import { isNull } from "./is-null";
import { isUndefined } from "./is-undefined";

/**
 * Returns `true` if the provided value is an object.
 * @param v Arbitrary value.
 */
export function isObject(v?: any) {
  return (
    !isUndefined(v)
    && !isNull(v)
    && v.constructor === Object
  );
}
