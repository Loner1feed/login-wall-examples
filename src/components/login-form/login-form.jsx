import { Button, Form, Input } from 'antd'
import React, { useState } from 'react';

export const LoginForm = ({ form, onFinish }) => {

  const [loading, setLoading] = useState(false);

  // simulate form finish
  const finishHandler = (values) => {
    setLoading(true);
    setTimeout(() => {
      onFinish(values);
      setLoading(false);
    }, 2000);
  }

  return (
    <Form
      form={form}
      name="login-form"
      className='login-form'
      onFinish={finishHandler}
      autoComplete="off"
      layout='vertical'
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },

          {
            min: 6,
            message: "password needs to be at least 6 characrets!"
          }
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item className='login-btn'>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
