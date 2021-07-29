import { isBoolean } from "./is-boolean";
import { isInfinite } from "./is-infinite";
import { isNull } from "./is-null";
import { isUndefined } from "./is-undefined";

/**
 * Converts the provided value to boolean.
 * @param v Arbitrary value.
 */
export function toBoolean(v?: any) {
  if (isBoolean(v) || isUndefined(v) || isNull(v)) {
    return v;
  } else {
    return (
      parseFloat(v) > 0
      || isInfinite(v)
      || v === "1"
      || v === "true"
      || v === "yes"
      || v === "+"
    );
  }
}
