import React, { useState, useEffect } from 'react';
import {
  Form, Input, Button, message, Select,
} from 'antd';
import PropTypes from 'prop-types';
import { updateMenus } from '@/src/api/setting';
import { fetchMenus } from '@/src/api/users';
import WrappedForm from '@/components/WrappedForm';
import { omitEmptyParams } from '@/components/utils/lang';

const { Option } = Select;

function Setting({ form }) {
  const [options, setOptions] = useState([]);
  const [hasPid, setHasPid] = useState(false);
  function handleSubmit() {
    form.validateFields(async (error, values) => {
      if (error) return;
      await updateMenus(omitEmptyParams(values));
      message.success('提交成功！');
    });
  }
  function renderOptions(options) {
    return options.map(
      option => (<Option value={option.value} key={option.value}>{option.label}</Option>),
    );
  }
  function handleSelect(value) {
    if (value) {
      setHasPid(true);
    } else {
      setHasPid(false);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const { list } = await fetchMenus();
      if (list) {
        const options = list.map(item => ({
          label: item.title,
          value: item._id,
        }));
        options.unshift({ label: '无', value: null });
        setOptions(options);
      }
    };
    fetchData();
  }, []);

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
          children: renderOptions(options),
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
    <WrappedForm meta={meta} form={form} />
  );
}

Setting.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Form.create()(Setting);
