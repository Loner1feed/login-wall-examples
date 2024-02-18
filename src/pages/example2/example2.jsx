/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import { ContentBlock } from '../example1/common/content-block/content-block';
import { generateBlockStyles } from '../../utils/helpers/generate-block-styles';
import { colors } from '../../utils/constants/colors';
import { LoginModal } from './common/login-modal/login-modal';
import { useOnScreen } from '../../utils/hooks/useOnScreen';
import { Form, notification } from 'antd';

const Example2 = () => {

  const [form] = Form.useForm();

  const [open, setOpen] = useState(false);
  const [modalBlocked, setModalBlocked] = useState(false);
  const targetRef = useRef(null);
  const isVisible = useOnScreen(targetRef);

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
    setOpen(false);
    setModalBlocked(true);
  }

  // useEffect(() => {
  //   document.querySelector('.content').removeEventListener('wheel');
  // }, []);
  
  useEffect(() => {
    isVisible && !modalBlocked && setOpen(true);
  }, [isVisible]);

  return (
    <>
      {contextHolder}
      <div className='content2'>
        {colors.map((el, i) => (
          <ContentBlock key={i} id={`block-${i}`} title={`Block ${i + 1} title`} customStyles={{ ...generateBlockStyles(el) }}>
            <p>some content i can display</p>
          </ContentBlock>
        ))}
        <div ref={targetRef}>
          <ContentBlock id={`block-target`} title={`Block 5 title`} customStyles={{ ...generateBlockStyles(colors[0]) }}>
            <p>some content i can display</p>
          </ContentBlock>
        </div>
      </div>

      <LoginModal open={open} onFinish={onFinish} />
    </>
  )
}

export default Example2;