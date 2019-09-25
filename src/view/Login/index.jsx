import React, { forwardRef } from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '@/src/api/users';
import WrappedForm from '@/components/WrappedForm';
import { omitEmptyParams } from '@/components/utils/lang';
import styles from './index.css';

const LoginBtnGroup = forwardRef(({
  onLogin,
}, ref) => (
  <>
    <Button
      type="primary"
      onClick={onLogin}
      className={`${styles['login-btn']} ${styles.btn}`}
    >
登陆
    </Button>
    <Link to="/registry"><Button className={`${styles['register-btn']} ${styles.btn}`}>注册</Button></Link>
  </>
));

LoginBtnGroup.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const Login = ({ form, history }) => {
  const handleLogin = () => {
    form.validateFields(async (err, values) => {
      if (err) return;
      await login(omitEmptyParams(values));
      history.replace('/');
    });
  };
  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      handleLogin();
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
          onLogin: handleLogin,
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
