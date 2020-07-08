import React, { useState } from 'react';
import {
  Input, Button, Select,
} from 'antd';
import WrappedForm from '@/components/wrappedForm';

function Setting() {
  const [options, setOptions] = useState([]);
  const [hasPid, setHasPid] = useState(false);
  function handleSubmit() {}

  function handleSelect(value) {
    if (value) {
      setHasPid(true);
    } else {
      setHasPid(false);
    }
  }

  const meta = {
    formItemLayout: {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 8,
      },
    },
    formItems: [
      {
        label: '父级菜单',
        field: 'pid',
        key: 'pid',
        component: Select,
        componentProps: {
          children: WrappedForm.renderSelectOptions(options),
          onSelect: handleSelect,
          style: {
            width: '100%',
          },
        },
        formItemProps: {
          initialValue: null,
        },
      },
      {
        label: '菜单标题',
        field: 'title',
        key: 'title',
        component: Input,
        componentProps: {
          disabled: hasPid,
        },
        placeholder: '请输入菜单标题',
      },
      {
        label: '菜单路径',
        field: 'path',
        key: 'path',
        component: Input,
        componentProps: {
          disabled: hasPid,
        },
        placeholder: 'String',
      },
      {
        label: '路径图标',
        field: 'icon',
        key: 'icon',
        component: Input,
        componentProps: {
          disabled: hasPid,
        },
        placeholder: 'String',
      },
      {
        label: '二级菜单标题',
        field: 'subTitle',
        key: 'subTitle',
        component: Input,
        placeholder: '请输入二级菜单标题',
      },
      {
        label: '二级菜单路径',
        field: 'subPath',
        key: 'subPath',
        component: Input,
        placeholder: 'String',
      },
      {
        label: '二级菜单图标',
        field: 'subIcon',
        key: 'subIcon',
        component: Input,
        placeholder: 'String',
      },
      {
        label: ' ',
        field: 'btn',
        key: 'btn',
        colon: false,
        component: Button,
        componentProps: {
          children: '提交',
          type: 'primary',
          htmlType: 'submit',
          onClick: handleSubmit,
        },
      },
    ],
  };
  return (
    <WrappedForm meta={meta} />
  );
}

export default Setting;
