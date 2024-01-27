import React from 'react';
import { motion } from 'framer-motion';
import { animations } from '../../data/animations';

const Project = ({ img }) => {
  return (
    <motion.div
      className={img + ' section-project-box section-project-box-effect'}
      {...animations.growUp}
    >
      <div className="w-full h-full section-project-box-glass-effect">
        <h5 className="section-project-title section-project-title-effect">
          Ver Projeto
        </h5>
      </div>
    </motion.div>
  );
};

export default Project;
