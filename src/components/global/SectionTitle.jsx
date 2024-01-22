import React from 'react';
import Bar from './Bar';

const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center gap-x-[15px]">
      <Bar />
      <h3>{title}</h3>
      <Bar />
    </div>
  );
};

export default SectionTitle;
