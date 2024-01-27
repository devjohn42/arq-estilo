import React from 'react';
import { motion } from 'framer-motion';
import { animations } from '../../data/animations';

const Service = ({ title, description, img }) => {
  return (
    <div className="section-service-content">
      <motion.div
        className="w-[320px] sm:w-[450px] md:w-[480px]"
        {...animations.leftToRight}
      >
        <h5>{title}</h5>
        <p>{description}</p>
      </motion.div>
      <motion.div
        className={img + ' section-service-content-image'}
        {...animations.rightToLeft}
      ></motion.div>
    </div>
  );
};

export default Service;
