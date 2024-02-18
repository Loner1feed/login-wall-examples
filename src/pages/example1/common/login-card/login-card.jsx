import { Card, Form, notification } from 'antd'
import React from 'react';

import './login-card.style.scss';
import { LoginForm } from '../../../../components/login-form/login-form';

export const LoginCard = () => {


  const [form] = Form.useForm();

  const [api, contextHolder] = notification.useNotification();
  

  const openNotificationWithIcon = (type, values = {}) => {
    api[type]({
      message: 'Form data sent',
      description: `We got username: ${values.username} and password: ${values.password}`
    });
  };

  // form finish
  const onFinish = (values) => {
    openNotificationWithIcon('success', values);
    form.resetFields();
  }

  return (
    <Card title="Login Form" size='small' className='login-card'>
      {contextHolder}
      <LoginForm onFinish={onFinish} form={form} />
    </Card>
  )
}
