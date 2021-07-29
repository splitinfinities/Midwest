import { isInfinite } from "./is-infinite";
import { isNull } from "./is-null";
import { isNumber } from "./is-number";
import { isUndefined } from "./is-undefined";

/**
 * Returns `true` if the provided value represents a value.
 * @param v Arbitrary value.
 */
export function isValue(v?: any) {
  return (
    !isUndefined(v)
    && !isNull(v)
    && !(isNumber(v) && isNaN(v))
    && !isInfinite(v)
  );
}
