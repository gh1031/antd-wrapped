const { call } = Object.prototype.toString;

export const OBJECT = 'Object';
export const ARRAY = 'Array';
export const FUNCTION = 'Function';

export const isObject = object => call(object) === `[object ${OBJECT}]`;
export const isArray = array => call(array) === `[object ${ARRAY}]`;
