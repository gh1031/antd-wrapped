/**
 * @description 远程Select搜索组件
 * @param {function} fetchApi 获取数据接口，需已经实现请求方法，该方法接受一个属性值为optionKey的对象为参数
 * @param {string} optionKey 远程搜索入参
 * @param {function} onSelect 选中选项的回调函数
 * @param {boolean} showArrow 是否显示下拉箭头
 * @param {number} delay 搜索延迟时间
 * @returns {ReactNode}
 */

import React, { useState } from 'react';
import { Select, Spin } from 'antd';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { noop } from '../utils/lang';

const { Option } = Select;

interface IProps {
  optionKey: string;
  request: (params: { [key: string]: string}) => Promise<any>;
  onSelect: () => void;
  showArrow: boolean;
  delay: number;
  style: {};
}

function WrappedSelect({
  request,
  optionKey,
  onSelect,
  showArrow,
  delay,
  style,
}: IProps): React.ReactElement {
  const [fetching, setFetch] = useState(true);
  const [options, setOptions] = useState([]);

  async function handleSearch(value: string): Promise<any> {
    setFetch(true);
    const { list } = await request({ [optionKey]: value });
    setFetch(false);
    setOptions(list);
  }
  function renderOptions() {
    return options.map(option => <Option key={option[optionKey]}>{option[optionKey]}</Option>);
  }
  return (
    <Select
      showSearch
      style={style}
      onSelect={onSelect}
      showArrow={showArrow}
      onSearch={debounce(handleSearch, delay)}
      notFoundContent={fetching ? <Spin size="small" /> : null}
    >
      {renderOptions()}
    </Select>
  );
}

WrappedSelect.propTypes = {
  request: PropTypes.func.isRequired,
  optionKey: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  showArrow: PropTypes.bool,
  delay: PropTypes.number,
  style: PropTypes.object,
};

WrappedSelect.defaultProps = {
  onSelect: noop,
  showArrow: false,
  delay: 500,
  style: { width: 200 },
};

export default WrappedSelect;
