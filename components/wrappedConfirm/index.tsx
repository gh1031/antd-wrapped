import React, { FC } from 'react';
import { Popconfirm } from 'antd';
import { PopconfirmProps } from 'antd/es/popconfirm';
import PropTypes from 'prop-types';

export interface IProps extends PopconfirmProps{
  btnText: string;
}

const WrappedConfirm: FC = ({
  title,
  okText,
  cancelText,
  onConfirm,
  btnText,
}: IProps) => (
  <Popconfirm
    title={title}
    okText={okText}
    cancelText={cancelText}
    onConfirm={onConfirm}
  >
    <a>{btnText}</a>
  </Popconfirm>
);

WrappedConfirm.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  btnText: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
};

WrappedConfirm.defaultProps = {
  btnText: '删除',
  title: '确认删除吗？',
  cancelText: '取消',
  okText: '确定',
};

export default WrappedConfirm;
