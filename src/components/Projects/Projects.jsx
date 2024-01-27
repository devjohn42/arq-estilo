import React from 'react';
import SectionTitle from '../global/SectionTitle';
import Line from '../global/Line';
import SectionProjects from './SectionProjects';

const Projects = () => {
  return (
    <section className="section-projects" id="projects">
      <Line />
      <SectionTitle title="Projetos" />
      <SectionProjects />
      <Line />
    </section>
  );
};

export default Projects;
