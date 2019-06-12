import React from 'react';
import {
  Input,
  Form,
  Select,
  Button,
} from 'antd';
import WrappedForm from '@/components/WrappedForm';
import PropTypes from 'prop-types';

const { renderOptions } = WrappedForm;
const options = [{ title: 'option1', key: 'option1' }, { title: 'option2', key: 'option2' }];
const meta = {
  columns: 1,
  formItemLayout: {
    labelCol: {
      span: 2,
    },
    wrapperCol: {
      span: 22,
    },
  },
  formItems: [
    {
      label: 'key1',
      field: 'key1',
      key: 'key1',
      required: true,
      component: Input,
    },
    {
      label: 'key2',
      key: 'key2',
      field: 'key2',
      component: Input,
    },
    {
      label: 'key4',
      field: 'key4',
      key: 'key4',
      component: Input,
    },
    {
      label: 'key5',
      key: 'key5',
      field: 'key5',
      component: Input,
    },
    {
      label: 'key6',
      key: 'key6',
      field: 'key6',
      component: Input,
    },
    {
      label: 'key7',
      field: 'key7',
      key: 'key7',
      component: Input,
    },
    {
      label: 'key8',
      key: 'key8',
      field: 'key8',
      component: Input,
    },
    {
      label: 'key9',
      field: 'key9',
      key: 'key9',
      component: Input,
    },
    {
      label: 'key10',
      key: 'key10',
      field: 'key10',
      component: Input,
    },
    {
      label: 'key11',
      field: 'key11',
      key: 'key11',
      component: Input,
    },
    {
      label: 'key12',
      key: 'key12',
      field: 'key12',
      component: Input,
    },
    {
      label: 'key13',
      field: 'key13',
      key: 'key13',
      component: Input,
    },
    {
      label: 'key14',
      key: 'key14',
      field: 'key14',
      component: Input,
    },
    {
      label: 'key15',
      key: 'key15',
      field: 'key15',
      component: Input,
    },
    {
      label: 'key3',
      key: 'key3',
      field: 'key3',
      component: Select,
      componentProps: {
        children: renderOptions(options),
      },
    },
    {
      field: 'operation',
      component: Button,
      componentProps: {
        type: 'primary',
        htmlType: 'submit',
        children: '查询',
      },
    },
  ],
};
const Component = ({ form }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { validateFieldsAndScroll } = form;
    validateFieldsAndScroll((error, values) => {
      if (error) return null;
      return values;
      // console.log(values);
    });
  };

  return (
    <section style={{ width: '100%' }}>
      <Form onSubmit={handleSubmit}>
        <WrappedForm form={form} meta={meta} />
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
