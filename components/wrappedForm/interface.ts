import { ColProps } from 'antd/lib/col';
import { ReactNode, ComponentType } from 'react';
import { RowProps } from 'antd/lib/row';
import { FormProps, FormItemProps } from 'antd/lib/form';

export type Layout = {
  labelCol?: ColProps;
  wrapperCol?: ColProps;
}

export interface ElementProps extends Partial<FormItemProps> {
  /**
   * 表单项字段名
   */
  name?: string;
  /**
   * `label`标签文本
   */
  label?: ReactNode;
  /**
   * 表单项校验规则
   */
  rules?: object[];
  /**
   * 表单组件
   */
  component: ComponentType<any>;
  /**
   * 表单组件属性
   */
  componentProps?: {
    disabled?: boolean;
    children?: ReactNode;
    [key: string]: any;
  };
  /**
   * 表单项属性
   */
  formItemProps?: FormProps;
  /**
   * 表单项
   */
  required?: boolean;
  /**
   * 表单组件展位文案
   */
  placeholder?: string;
  /**
   * 表单项禁止属性
   */
  disabled?: boolean;
  /**
   * 表单项子组件
   */
  children?: ReactNode;
}

export interface MetaProps {
  /**
   * 表单分列
   */
  columns?: number;
  /**
   * 是否禁用整体表单项
   */
  disabled?: boolean;
  /**
   * 表单项
   */
  formItems: Array<FormItemProps>;
  /**
   * 栅格row属性
   */
  rowProps?: RowProps;
  /**
   * 栅格col属性
   */
  colProps?: ColProps;
  /**
   * 整体表单布局
   */
  formItemsLayout?: Layout;
}
