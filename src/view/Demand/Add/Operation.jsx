import React, { forwardRef } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import commonStyle from '@/src/style/common.less';

const Operation = ({ handleSubmit, handleReset }) => (
  <>
    <Button type="primary" onClick={handleSubmit} className={commonStyle.mr8}>提交</Button>
    <Button onClick={handleReset}>重置</Button>
  </>
);

Operation.propTypes = {

};

Operation.defaultProps = {

};

export default forwardRef(Operation);
