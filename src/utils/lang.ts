
export function notEmptyArray(array: any[]): boolean {
  if (!array) return;
  return Array.isArray(array) && !!array.length;
}
