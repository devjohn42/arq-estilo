import React from 'react';
import SectionTitle from '../global/SectionTitle';
import Line from '../global/Line';
import SectionProjects from './SectionProjects';

const Projects = () => {
  return (
    <section className="section-projects">
      <SectionTitle title="Projetos" />
      <Line />
      <SectionProjects />
      <Line />
    </section>
  );
};

export default Projects;
