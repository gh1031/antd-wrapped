import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input, Select, DatePicker,
} from 'antd';
import WrappedForm from '@/components/WrappedForm';
import Operation from './Operation';

const { RangePicker } = DatePicker;

const AddDemand = ({ form }) => {
  const meta = {
    formItemLayout: {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
    },
    formItems: [{
      label: '酒店名称',
      field: 'hotel',
      component: Input,
    }, {
      label: '酒店地址',
      field: 'address',
      component: Input,
    }, {
      label: '详细地址',
      field: 'addressDetail',
      component: Input,
    }, {
      label: '房间号',
      field: 'rooms',
      component: Select,
    }, {
      label: '房间总数',
      field: 'totalRooms',
      component: Input,
    }, {
      label: '单价',
      field: 'price',
      component: Input,
    }, {
      label: '开始时间',
      field: 'price',
      component: RangePicker,
      componentProps: {
        style: {
          width: '100%',
        },
      },
    }, {
      label: ' ',
      field: 'operate',
      component: Operation,
      formItemProps: {
        colon: false,
      },
    }],
  };

  return (
    <Form>
      <WrappedForm meta={meta} form={form} />
    </Form>
  );
};

AddDemand.propTypes = {

};
AddDemand.defaultProps = {

};

export default Form.create()(AddDemand);
