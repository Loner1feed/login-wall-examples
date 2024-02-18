import { Form, Modal } from 'antd'
import React from 'react'
import { LoginForm } from '../../../../components/login-form/login-form';

import "./login-modal.style.scss";

export const LoginModal = ({ open, onFinish }) => {

  const [form] = Form.useForm();

  

  return (
    <>
      <Modal
        footer={null}
        open={open}
        title="login wall modal"
      >
        <LoginForm form={form} onFinish={onFinish} />
      </Modal>
    </>
    
  )
}
