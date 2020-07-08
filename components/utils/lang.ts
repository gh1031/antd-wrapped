import omitBy from 'lodash.omitby';
import isNil from 'lodash.isnil';


const { toString } = Object.prototype.toString;

export const isFunction = fn => typeof fn === 'function';
export const isObject = obj => toString.call(obj) === '[object Object]';
export const isArray = arr => toString.call(arr) === '[object Array]';
export const isString = str => toString.call(str) === '[object String]';

export const recursionRewriteFields = (arr: any[] = [], key?: string) => (
  arr.map((item, index) => {
    item.key = !key ? `${index}` : `${key}-${index}`; // eslint-disable-line
    if (item.children) {
      item.children = recursionRewriteFields(item.children, item.key); // eslint-disable-line
    }
    return item;
  })
);

export const pickProps = (object = {}, array = []) => {
  const temp = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] in object) {
      temp[array[i]] = object[array[i]];
    }
  }
  return temp;
};

export const noop = () => {};

export const omitEmptyParams = (params) => omitBy(params, value => isNil(value) || !`${value}`.trim());
// if (!object) return;
// if (!isObject(object)) {
//   throw Error(`omitEmptyParams require Object, got ${typeof object}`);
// }
// Object.keys((key) => {
//   if (
//     object[key] === null
//     || object[key] === undefined
//     || object[key] === ''
//   ) {
//     delete object[key];
//   }
//   if (object[key] && isString(object[key])) {
//     object[key].trim();
//   }
// });
// return object;
