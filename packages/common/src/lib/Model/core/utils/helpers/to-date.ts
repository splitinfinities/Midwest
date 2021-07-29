import { isDate } from "./is-date";
import { isInteger } from "./is-integer";
import { isNull } from "./is-null";
import { isUndefined } from "./is-undefined";

/**
 * Converts the provided value to date.
 * @param v Arbitrary value.
 */
export function toDate(v?: any): Date {
  if (isDate(v) || isUndefined(v) || isNull(v)) {
    return v;
  }
  const date = new Date(v);
  return isInteger(date.getTime()) ? date : null;
}
