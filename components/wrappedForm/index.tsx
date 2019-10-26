import React, { FC } from 'react';
import { WrappedFormUtils, GetFieldDecoratorOptions, ValidationRule } from 'antd/es/form/Form';
import { FormItemProps } from 'antd/es/form/FormItem';
import { ColProps } from 'antd/es/grid/col';
import { Form, Col, Row } from 'antd';
import { pickProps } from '../utils/lang';
import { renderOptions } from './renderChildren';

type Layout = {
  labelCol?: ColProps;
  wrapperCol?: ColProps;
}

interface IFormItemProps extends FormItemProps, GetFieldDecoratorOptions {}

export interface IElement {
  key: string;
  label: React.ReactElement;
  component: React.ComponentType;
  span?: number;
  formItemLayout?: Layout;
  componentProps?: {
    disabled?: boolean;
    children?: React.ReactElement;
  };
  formItemProps?: IFormItemProps;
  rules?: Array<ValidationRule>;
  required?: boolean;
  useFieldDecorator?: boolean;
  placeholder?: string;
  disabled?: boolean;
  children?: React.ReactElement;
}

export interface IMeta {
  disabled: boolean;
  gutter?: number;
  columns?: number;
  formItemLayout?: Layout;
  formItems: Array<IElement>;
}

interface IProps {
  meta: IMeta;
  form: WrappedFormUtils;
}

const { Item: FormItem } = Form;
const defaultFormItemLayout: Layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};

interface WithStaticMethodsFC extends FC<IProps> {
  renderOptions(array: [], options: {}): React.ReactNode;
}
const WrappedForm: WithStaticMethodsFC = (props) => {
  const { form, meta } = props;
  const renderFormItem = (formItemMeta: IElement): React.ReactElement => {
    const {
      key,
      rules,
      useFieldDecorator = true,
      formItemLayout,
      component: Component,
      componentProps = {},
      formItemProps = {},
      required,
      children,
      disabled,
    } = formItemMeta;
    const { getFieldDecorator } = form;

    if (!key) {
      throw Error('Each form item must have a [key] property');
    }

    /**
     * select formItem layout
     */
    const realFormItemLayout = formItemLayout || meta.formItemLayout || defaultFormItemLayout;

    /**
     * merge formItem props
     */
    const pickToFormItemProps = pickProps(formItemMeta, [
      'label',
      'colon',
      'extra',
    ]);

    const mergedFormItemProps: IFormItemProps = {
      ...pickToFormItemProps,
      ...realFormItemLayout,
      ...formItemProps,
    };

    // no label no colon
    if (!mergedFormItemProps.label) {
      mergedFormItemProps.colon = false;
    }

    /**
     * merge component props
     */
    const pickedComponentProps = pickProps(formItemMeta, [
      'placeholder',
    ]);
    const mergedComponentProps = {
      ...componentProps,
      ...pickedComponentProps,
    };

    // 禁止表单项
    mergedComponentProps.disabled = disabled || meta.disabled;


    const comp: React.ReactElement = (
      <Component {...mergedComponentProps}>
        {children || null}
      </Component>
    );

    if (!useFieldDecorator) {
      return (
        <FormItem {...mergedFormItemProps}>
          {comp}
        </FormItem>
      );
    }

    // merge getFieldDecorator options
    const mergedFieldOptions: GetFieldDecoratorOptions = pickProps(formItemMeta, [
      'getValueFromEvent',
      'initialValue',
      'normalize',
      'preserve',
      'rules',
      'trigger',
      'validateFirst',
      'validateTrigger',
      'valuePropName',
    ]);
    if (required) {
      // if not specify rules, use default
      mergedFieldOptions.rules = [
        {
          required: true,
          message: `${mergedFormItemProps.label}是必须的！`,
        },
        ...rules,
      ];
    }

    return (
      <FormItem {...mergedFormItemProps}>
        {getFieldDecorator(key, mergedFieldOptions)(comp)}
      </FormItem>
    );
  };

  const renderLayout = () => {
    const { formItems, columns = 1, gutter = 0 } = meta;
    const span = Math.floor(24 / columns);
    const cols = formItems.map(form => (
      <Col
        span={span}
        {...(form.span || {})}
        key={form.key || Math.random().toFixed(4)}
      >
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


WrappedForm.renderOptions = renderOptions;

export default WrappedForm;
