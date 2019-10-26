import React from 'react';
import {
  Input,
  Form,
  Select,
  Button,
  DatePicker,
  Radio,
  Checkbox,
} from 'antd';
import cloneDeep from 'lodash/cloneDeep';
import PropTypes from 'prop-types';
import WrappedForm from '@/components/wrappedForm';
import WrappedCard from '@/components/wrappedCard';
import { statusList } from './constant';

const { renderOptions } = WrappedForm;
const { RangePicker } = DatePicker;
const metaH = {
  columns: 3,
  formItemLayout: {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  },
  formItems: [
    {
      label: '状态',
      field: 'status',
      key: 'status',
      component: Select,
      componentProps: {
        children: renderOptions(statusList, { key: 'status' }),
      },
      formItemProps: {
        initialValue: 0,
      },
    },
    {
      label: '订单时间',
      key: 'orderTime',
      field: 'orderTime',
      component: DatePicker,
      componentProps: {
        style: {
          width: '100%',
        },
      },
    },
    {
      label: '订单号',
      key: 'orderNumber',
      field: 'orderNumber',
      component: Input,
    },
    {
      label: '入住时间',
      key: 'checkIn',
      field: 'checkIn',
      component: RangePicker,
      componentProps: {
        style: {
          width: '100%',
        },
      },
    },
    {
      field: 'operation',
      key: 'operation',
      component: Button,
      formItemLayout: {
        wrapperCol: {
          offset: 4,
        },
      },
      componentProps: {
        type: 'primary',
        htmlType: 'submit',
        children: '查询',
      },
    },
  ],
};

const metaV = cloneDeep(metaH);
metaV.columns = 1;
metaV.formItems.splice(-1, 0, {
  label: '配套',
  field: 'mode',
  key: 'mode',
  component: Checkbox.Group,
  componentProps: {
    options: [
      {
        label: '早餐',
        value: 'mode1',
      },
      {
        label: '窗户',
        value: 'mode2',
      },
      {
        label: '无线',
        value: 'wifi',
      },
    ],
  },
  formItemProps: {
    initialValue: ['mode1', 'mode2', 'wifi'],
  },
}, {
  label: '类型',
  field: 'type',
  key: 'type',
  component: Radio.Group,
  componentProps: {
    options: [
      {
        label: '单间',
        value: 'mode1',
      },
      {
        label: '标间',
        value: 'mode2',
      },
    ],
  },
  formItemProps: {
    initialValue: 'mode1',
  },
});

const Component = ({ form }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { validateFieldsAndScroll } = form;
    validateFieldsAndScroll((error, values) => {
      if (error) return null;
      console.log(values); // eslint-disable-line
      return values;
    });
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <WrappedCard title="横行布局">
          <WrappedForm form={form} meta={metaH} />
        </WrappedCard>
        <WrappedCard title="纵向布局">
          <WrappedForm form={form} meta={metaV} />
        </WrappedCard>
      </Form>
    </section>
  );
};
Component.propTypes = {
  form: PropTypes.object.isRequired,
};

Component.defaultProps = {
};

export default Form.create()(Component);
