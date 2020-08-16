import dayjs from 'dayjs';
import 'dayjs/plugin/isSameOrAfter';

/**
 * Returns a function for detecting if a date is before or after
 */
export function dateBeforeAfterValidator(value?: any) {
    const start = dayjs(value[0]);
    const end = dayjs(value[1]);
    return end.isSameOrAfter(start);
};
