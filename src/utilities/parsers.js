import { isArray, isEmptyArray } from "./validators";

export const objectToURLSearchParams = (data, exception = [], only = []) => {
  let post_form_data = new URLSearchParams(),
    temp_val,
    i,
    j;
  if (!isArray(exception)) exception = [];
  if (!isArray(only)) only = [];
  Object.keys(data).forEach(function (key, index) {
    if (
      exception.indexOf(key) < 0 &&
      ((!isEmptyArray(only) && only.indexOf(key) >= 0) || isEmptyArray(only))
    ) {
      temp_val = data[key];
      if (isArray(temp_val))
        for (i = 0; i < temp_val.length; i++) {
          if (isArray(temp_val[i]))
            for (j = 0; j < temp_val[i].length; j++)
              post_form_data.append(
                key + "[" + i + "][" + j + "]",
                temp_val[i][j]
              );
          else post_form_data.append(key + "[" + i + "]", temp_val[i]);
        }
      else post_form_data.append(key, temp_val);
    }
  });
  return post_form_data;
};
