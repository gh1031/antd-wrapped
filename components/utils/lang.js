export const isFunction = fn => typeof fn === 'function';

export function recursionRewriteFields(arr = [], key) {
  return arr.map((item, index) => {
    item.key = !key ? `${index}` : `${key}-${index}`; // eslint-disable-line
    if (item.children) {
      item.children = recursionRewriteFields(item.children, item.key); // eslint-disable-line
    }
    return item;
  });
}

export const noop = () => {};
