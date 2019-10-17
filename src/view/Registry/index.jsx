import React, { forwardRef } from 'react';
import {
  Button, Form, Input, message,
} from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { registry } from '@/src/api/users';
import WrappedForm from '@/components/wrappedForm';
import { omitEmptyParams } from '@/components/utils/lang';
import styles from './index.css';


const LoginBtnGroup = forwardRef(({
  onRegistry,
}, ref) => (
  <>
    <Button type="primary" onClick={onRegistry} className={`${styles['login-btn']} ${styles.btn}`}>注册</Button>
    <Link to="/login"><Button className={`${styles['register-btn']} ${styles.btn}`}>去登录</Button></Link>
  </>
));

LoginBtnGroup.propTypes = {
  onRegistry: PropTypes.func.isRequired,
};

const Login = ({ form, history }) => {
  const handleRegistry = () => {
    form.validateFields(async (err, values) => {
      if (err) return;
      await registry(omitEmptyParams(values));
      message.success('注册成功');
      setTimeout(() => {
        history.push('/login');
      }, 500);
    });
  };
  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      handleRegistry();
    }
  };
  const meta = {
    formItems: [
      {
        label: '用户名',
        field: 'username',
        key: 'username',
        required: true,
        component: Input,
        componentProps: {
          placeholder: '请输入用户名',
        },
      },
      {
        label: '密码',
        field: 'password',
        key: 'password',
        required: true,
        component: Input.Password,
        componentProps: {
          placeholder: '请输入密码',
          type: 'password',
          onKeyUp: handleEnter,
        },
      },
      {
        label: ' ',
        field: 'btn',
        key: 'btn',
        colon: false,
        component: LoginBtnGroup,
        componentProps: {
          onRegistry: handleRegistry,
        },
      },
    ],
  };
  return (
    <div className={styles['login-wrapper']}>
      <div className={styles['login-box']}>
        <WrappedForm meta={meta} form={form} />
      </div>
    </div>
  );
};

Login.propTypes = {
  form: PropTypes.object.isRequired,
  // eslint-disable-next-line react/require-default-props
  history: PropTypes.object,
};

export default Form.create()(Login);
