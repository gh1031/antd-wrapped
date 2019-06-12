const primitiveType = Object.prototype.toString.call;

export const isFunction = fn => typeof fn === 'function';

export const recursionRewriteFields = (arr = [], key) => (
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
