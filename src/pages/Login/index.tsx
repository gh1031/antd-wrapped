import React, { forwardRef, FC } from 'react';
import { Button, Form, Input } from 'antd';
import { Link, RouteComponentProps } from 'react-router-dom';
import { login } from '@/src/api/users';
import WrappedForm from '@/components/wrappedForm';
import { omitEmptyParams } from '@/components/utils/lang';
import { MetaProps } from '@/components/wrappedForm/interface';
import styles from './index.css';

const { useForm } = Form;
const LoginBtnGroup: FC<{ onLogin: (p: any) => void }> = ({
  onLogin,
}) => (
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
);


const Login: FC<RouteComponentProps> = ({ history }) => {
  const [form] = useForm();
  const handleLogin = (values) => {
    
  };
  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      // handleLogin();
    }
  };

  const meta: MetaProps = {
    formItems: [
      {
        label: '用户名',
        name: 'username',
        required: true,
        component: Input,
        componentProps: {
          placeholder: '请输入用户名',
        },
      },
      {
        label: '密码',
        name: 'password',
        required: true,
        component: Input.Password,
        componentProps: {
          placeholder: '请输入密码',
          type: 'password',
          onKeyUp: handleEnter,
        },
      },
      {
        component: LoginBtnGroup,
        formItemProps: {
          wrapperCol: { offset: 6 }
        },
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

export default Login;
