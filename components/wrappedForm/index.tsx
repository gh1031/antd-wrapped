import React, { FC, ReactNode } from 'react';
import { Form, Col, Row } from 'antd';
import { FormProps } from 'antd/lib/form';
import { pickProps } from '../utils/lang';
import { renderSelectOptions, OptionItem, OptionConfig  } from './renderChildren';
import { MetaProps, ElementProps } from './interface';

interface ComponentProps {
  meta: MetaProps;
}

const { Item: FormItem } = Form;
const defaultFormItemLayout: FormProps = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

interface WithStaticMethodsFC extends FC<ComponentProps> {
  renderSelectOptions(array: OptionItem[], options?: OptionConfig): React.ReactNode;
}

const WrappedForm: WithStaticMethodsFC = ({ meta }) => {
  const renderFormItem = (formItemMeta): ReactNode => {
    const {
      label,
      name,
      component: Component,
      componentProps = {},
      formItemProps = {},
      required,
      disabled,
    } = formItemMeta;

    if (!name) {
      console.warn(`[${label}] has not \`name\` prop, which make component become uncontroll`);
    }

    /**
     * get final formItem layout
     */
    const finalFormItemLayout = meta.formItemsLayout || defaultFormItemLayout;
    
    const pickToFormItemProps: FormProps = pickProps(formItemMeta, [
      'name',
      'label',
      // 'colon',
      // 'extra',
    ]);
    
    /**
     * get final formItem props
     */
    const mergedFormItemProps: ElementProps = {
      ...finalFormItemLayout,
      ...pickToFormItemProps,
      ...formItemProps,
    };
    if (required) {
      mergedFormItemProps.rules = [{
        required: true,
        message: `${label}是必须的`,
      }]
    }

    const finalComponentProps = {
      ...componentProps,
      // ...pickedComponentProps,
    };

    // 禁止表单项
    finalComponentProps.disabled = disabled || meta.disabled;

    return (
      <FormItem {...mergedFormItemProps}>
        <Component {...componentProps}>
          {componentProps.children || null}
        </Component>
      </FormItem>
    );
  };

  const renderLayout = () => {
    const { formItems, columns = 1, rowProps, colProps } = meta;
    const span = Math.floor(24 / columns);
    const cols = formItems.map(formItem => (
      <Col
        span={span}
        {...colProps}
        key={formItem.name || Math.random().toFixed(4)}
      >
        {renderFormItem(formItem)}
      </Col>
    ));
    return (
      <Row {...rowProps}>{cols}</Row>
    );
  };
  return renderLayout();
};


WrappedForm.renderSelectOptions = renderSelectOptions;

export default WrappedForm;
