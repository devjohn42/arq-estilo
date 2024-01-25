import React from 'react';

const Project = ({ img }) => {
  return (
    <div className={img + ' section-project-box section-project-box-effect'}>
      <div className="w-full h-full section-project-box-glass-effect">
        <h5 className="section-project-title section-project-title-effect">
          Ver Projeto
        </h5>
      </div>
    </div>
  );
};

export default Project;
