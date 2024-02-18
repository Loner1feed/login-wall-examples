import React from 'react';
import { motion } from "framer-motion";
import { Spin } from 'antd';

export const PageLoader = ({ visible }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Spin fullscreen size='large' />
  </motion.div>
)
