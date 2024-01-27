import React from 'react';
import Project from './Project';
import { projects } from '../../data/projects';
import { motion } from 'framer-motion';
import { animations } from '../../data/animations';

const SectionProjects = () => {
  return (
    <motion.div className="section-projects-container" {...animations.showProjects}>
      {projects.map((img, index) => {
        return <Project img={img} key={index} />;
      })}
    </motion.div>
  );
};

export default SectionProjects;
