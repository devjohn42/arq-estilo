import React from 'react';
import Bar from './Bar';
import { motion } from 'framer-motion';
import { animations } from '../../data/animations';

const SectionTitle = ({ title }) => {
  return (
    <motion.div
      className="flex items-center gap-x-[15px]"
      {...animations.leftToRight}
    >
      <Bar />
      <h3>{title}</h3>
      <Bar />
    </motion.div>
  );
};

export default SectionTitle;
