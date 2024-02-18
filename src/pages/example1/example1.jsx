import React, { useEffect, useState } from 'react';
import { ContentBlock } from './common/content-block/content-block';
import { generateBlockStyles } from '../../utils/helpers/generate-block-styles';
import { LoginCard } from './common/login-card/login-card';
import { Button, Space } from 'antd';

import "./example1.style.scss";
import { colors } from '../../utils/constants/colors';

const Example1 = () => {

  const [activeBlock, setActiveBlock] = useState(0);

  const scrollHandler = (dir) => {
    switch (dir) {
      case "down":
        if (colors.length - 1 !== activeBlock) {
          const element = document.getElementById(`block-${activeBlock + 1}`);
          element.scrollIntoView({ behavior: "smooth", alignToTop: true });
          setActiveBlock((prev) => prev + 1);
        }
        break;

      case "up":
        if (activeBlock > 0) {
          const element = document.getElementById(`block-${activeBlock - 1}`);
          element.scrollIntoView({ behavior: "smooth", alignToTop: true });
          setActiveBlock((prev) => prev - 1);
        }
        break;
    
      default:
        break;
    }
  }

  const preventScroll = (e) => {
    e.preventDefault();
    e.stopPropagation();

    return false;
}

  useEffect(() => {
    document.querySelector('.content').addEventListener('wheel', preventScroll);

    return () => {
      document.removeEventListener("wheel", preventScroll);
    }
  }, []);

  return (
    <div className='content'>
      {colors.map((el, i) => i !== colors.length - 1 ? (
        <ContentBlock id={`block-${i}`} title={`Block ${i + 1} title`} customStyles={{ ...generateBlockStyles(el) }}>
          <Space direction='vertical'>
            <p>some content i can display</p>
            <Button type='primary' onClick={() => scrollHandler("up")}>Go up</Button>
            <Button type='primary' onClick={() => scrollHandler("down")}>Go down</Button>
          </Space>
        </ContentBlock>
      ) : (
        <ContentBlock id={`block-${i}`} title={`Block ${i + 1} has a form. Please, login`} customStyles={{ ...generateBlockStyles(el) }}>
          <LoginCard />
        </ContentBlock>
      ))}
    </div>
  )
}

export default Example1;