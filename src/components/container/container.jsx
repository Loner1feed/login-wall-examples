import React from 'react';
import './container.style.scss';

export const Container = ({ children, styles = {} }) => (
  <div className='container' style={{ ...styles }}>
    {children}
  </div>
)
