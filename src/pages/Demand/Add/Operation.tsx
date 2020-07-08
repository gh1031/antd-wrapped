import React, { forwardRef, FC } from 'react';
import { Button } from 'antd';
import commonStyle from '@/src/style/common.less';

interface IProps {
  onSubmit: () => void;
  handleReset?: () => void;
}
const Operation: FC<IProps> = ({ onSubmit, handleReset }) => (
  <>
    <Button type="primary" onClick={onSubmit} className={commonStyle.mr8}>提交</Button>
    <Button onClick={handleReset}>重置</Button>
  </>
);

export default forwardRef(Operation);