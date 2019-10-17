import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Col,
  Row,
  Select,
} from 'antd';
import { pickProps } from '@/components/utils/lang';

const { Option } = Select;
const { Item: FormItem } = Form;
const defaultFormItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};

const WrappedForm = (props) => {
  const { form, meta } = props;
  const renderFormItem = (formItemMeta) => {
    const {
      field,
      useFieldDecorator = true,
      formItemLayout,
      component: Component,
      componentProps = {},
      formItemProps = {},
      required,
    } = formItemMeta;
    const { getFieldDecorator } = form;

    /**
     * select formItem layout
     */
    const realFormItemLayout = formItemLayout || meta.formItemLayout || defaultFormItemLayout;

    /**
     * merge formitem props
     */
    const pickToFormItemProps = pickProps(formItemMeta, [
      'field',
      'label',
      'colon',
      'extra',
    ]);
    const mergedFormItemProps = {
      ...pickToFormItemProps,
      ...realFormItemLayout,
      ...formItemProps,
    };

    if (!mergedFormItemProps.field) {
      mergedFormItemProps.field = ' ';
    }

    const { rules = [] } = formItemProps;
    if (required) {
      formItemProps.rules = [
        ...rules,
        {
          required: true,
          message: `${field}是必须的！`,
        },
      ];
    }
    const mergedFieldOptions = {
      ...formItemProps,
    };

    /**
     * merge component props
     */
    const pickedComponentProps = pickProps(formItemMeta, [
      'children',
      'disabled',
      'placeholder',
    ]);
    const mergedComponentProps = {
      ...componentProps,
      ...pickedComponentProps,
    };


    const comp = (
      <Component {...mergedComponentProps}>
        {mergedComponentProps.children || null}
      </Component>
    );
    if (!useFieldDecorator) {
      return (
        <FormItem {...mergedFormItemProps}>
          {comp}
        </FormItem>
      );
    }

    return (
      <FormItem {...mergedFormItemProps}>
        {getFieldDecorator(field, mergedFieldOptions)(comp)}
      </FormItem>
    );
  };

  const renderLayout = () => {
    const { formItems, columns = 1, gutter = 0 } = meta;
    const span = Math.floor(24 / columns);
    const cols = formItems.map(form => (
      <Col span={span} key={form.key || Math.random().toFixed(4)} {...(form.colSpan || {})}>
        {renderFormItem(form)}
      </Col>
    ));
    return (
      <Row gutter={gutter}>{cols}</Row>
    );
  };
  const render = renderLayout();
  return render;
};

WrappedForm.propTypes = {
  meta: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
};

WrappedForm.defaultProps = {
  meta: {},
};

WrappedForm.renderOptions = (
  array,
  options,
) => {
  if (!Array.isArray(array)) {
    throw Error('The first argument must be an array!');
  }
  const {
    titleKey = 'title',
    key = 'key',
  } = (options || {});
  const childern = [];
  if (!array.length) return null;
  for (let i = 0; i < array.length; i++) {
    childern.push(
      <Option
        key={array[i][key]}
        value={array[i][key]}
      >
        {array[i][titleKey]}
      </Option>,
    );
  }
  return childern;
};

export default WrappedForm;
