import React from 'react';
import Project from './Project';
import { projects } from '../../data/projects';

const SectionProjects = () => {
  return (
    <div className="section-projects-container">
      {projects.map((img, index) => {
        return <Project img={img} key={index} />;
      })}
    </div>
  );
};

export default SectionProjects;
