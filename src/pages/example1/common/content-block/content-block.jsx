import React from 'react'
import { Container } from '../../../../components/container/container';

import "./content-block.style.scss";

export const ContentBlock = ({ children, title, customStyles, id }) => {
  return (
    <div id={id} className={`content-block`} style={customStyles}>
      <Container>
        {title && <h2>{title}</h2>}
        {children}
      </Container>
    </div>
  )
}
