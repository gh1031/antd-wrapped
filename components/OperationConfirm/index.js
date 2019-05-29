import React from 'react';
import { Popconfirm } from 'antd';
import PropTypes from 'prop-types';

const OperationConfirm = ({
  title, okText, cancelText, onConfirm, operationText,
}) => (
  <Popconfirm
    title={title}
    okText={okText}
    cancelText={cancelText}
    onConfirm={onConfirm}
    operationText={operationText}
  >
    <a>{operationText}</a>
  </Popconfirm>
);

OperationConfirm.propTypes = {
  title: PropTypes.string,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  operationText: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
};

OperationConfirm.defaultProps = {
  operationText: '删除',
  title: '确认删除吗？',
  cancelText: '取消',
  okText: '确定',
};

export default OperationConfirm;
