import React from 'react';
import { Popconfirm } from 'antd';
import PropTypes from 'prop-types';

const DelPopconfirm = ({ 
  title,
  okText,
  cancelText,
  onCancel,
  onConfirm,
  placement,
}) => (
    <Popconfirm
      title={title}
      okText={okText}
      placement={placement}
      cancelText={cancelText}
      onCancel={onCancel}
      onConfirm={onConfirm}
    >
      <a>删除</a>
    </Popconfirm>
  )

DelPopconfirm.propTypes = {
  title: PropTypes.string,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
}

DelPopconfirm.defaultProps = {
  placement: 'top',
  title: '确认删除吗？',
  cancelText: '取消',
  okText: '确定',
}

export default DelPopconfirm;