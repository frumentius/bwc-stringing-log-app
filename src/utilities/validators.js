export const isArray = (value) => {
  return (
    value &&
    value !== undefined &&
    typeof value === "object" &&
    value.constructor === Array
  );
};
export const isEmptyArray = (arr) => {
  let is_empty = true;
  if (isArray(arr) && arr.length > 0) is_empty = false;
  return is_empty;
};
export const isObject = (value) => {
  return (
    value &&
    value !== undefined &&
    typeof value === "object" &&
    value.constructor === Object
  );
};
export const isEmptyObject = (object) => {
  let is_empty = true;
  if (isObject(object)) {
    for (let prop in object) {
      if (object.hasOwnProperty(prop)) {
        is_empty = false;
        break;
      }
    }
  }
  return is_empty;
};
