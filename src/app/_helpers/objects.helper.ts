import { isValidDate } from './time.helper'

export function isObject(obj) {
    return typeof(obj) === 'object';
}

export function isNumber(obj) {
    return typeof(obj) === 'number';
}

export function objectify(obj) {
    if (isValidDate(obj)){
      return new Date(obj);
    }
    return obj;
}