import React from 'react';
import { Select } from 'antd';
import { string } from 'prop-types';

const { Option } = Select;

export interface OptionConfig {
  label?: string;
  value?: string;
  [key: string]: any;
}
export interface OptionItem {
  [key: string]: any;
}
export const renderSelectOptions = (array: OptionItem[], options: OptionConfig = {}) => {
  if (!Array.isArray(array)) {
    throw Error('"renderOptions\'s" first argument must be an array!');
  }

  const { label = 'label', value = 'value' } = options;
  const childern = [];

  if (!array.length) return null;

  for (let i = 0; i < array.length; i++) {
    childern.push(
      <Option
        key={array[i][value]}
        value={array[i][value]}
      >
        {array[i][label]}
      </Option>,
    );
  }
  return childern;
};
