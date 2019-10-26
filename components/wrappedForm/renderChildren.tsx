import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export const renderOptions = (
  array,
  options,
) => {
  if (!Array.isArray(array)) {
    throw Error('"renderOptions\'s" first argument must be an array!');
  }

  const {
    titleKey = 'title',
    key = 'key',
  } = (options || {});
  const childern = [];

  if (!array.length) return null;

  for (let i = 0; i < array.length; i++) {
    childern.push(
      <Option
        key={array[i][key]}
        value={array[i][key]}
      >
        {array[i][titleKey]}
      </Option>,
    );
  }
  return childern;
};
