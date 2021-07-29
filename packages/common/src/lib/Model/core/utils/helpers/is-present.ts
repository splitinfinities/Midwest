import { isArray } from "./is-array";
import { isNull } from "./is-null";
import { isNumber } from "./is-number";
import { isObject } from "./is-object";
import { isString } from "./is-string";
import { isUndefined } from "./is-undefined";

/**
 * Returns `true` if the provided value is not empty.
 * @param v Arbitrary value.
 */
export function isPresent(v?: any) {
  return !(
    isUndefined(v)
    || isNull(v)
    || (isNumber(v) && isNaN(v))
    || isString(v) && v === ""
    || isArray(v) && v.length === 0
    || isObject(v) && Object.keys(v).length === 0
  );
}
