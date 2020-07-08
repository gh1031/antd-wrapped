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
import WrappedForm from '@/components/wrappedForm';
import WrappedCard from '@/components/wrappedCard';
import { MetaProps } from '@/components/wrappedForm/interface';
import { statusList } from './constant';

const { renderSelectOptions } = WrappedForm;
const { RangePicker } = DatePicker;
const { useForm } = Form;

const metaH: MetaProps = {
  columns: 3,
  formItemsLayout: {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 18,
    },
  },
  formItems: [
    {
      label: '状态',
      name: 'status',
      component: Select,
      componentProps: {
        children: renderSelectOptions(statusList),
      },
    },
    {
      label: '订单时间',
      name: 'orderTime',
      component: RangePicker,
      componentProps: {
        style: {
          width: '100%',
        },
      },
    },
    {
      label: '订单号',
      name: 'orderNumber',
      component: Input,
    },
    {
      label: <span>入住时间<div>aaa</div></span>,
      // name: 'checkIn',
      component: RangePicker,
      componentProps: {
        style: {
          width: '100%',
        },
      },
    },
    {
      component: Button,
      formItemLayout: {
        wrapperCol: {
          offset: 6,
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
  name: 'mode',
  component: Checkbox.Group,
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
}, {
  label: '类型',
  name: 'type',
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
});

const Component = () => {
  const [form] = useForm();

  const handleSubmit = (value) => {
    console.log(value);
  };
  return (
    <section>
      <Form onFinish={handleSubmit}>
        <WrappedCard title="横行布局">
          <WrappedForm meta={metaH} />
        </WrappedCard>
        {/* <WrappedCard title="纵向布局">
          <WrappedForm form={form} meta={metaV} />
        </WrappedCard> */}
      </Form>
    </section>
  );
};

export default Component;
