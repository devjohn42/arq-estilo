import React from 'react';

const Service = ({ title, description, img }) => {
  return (
    <div className="section-service-content">
      <div className="w-[320px] sm:w-[450px] md:w-[480px]">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <div className={img + ' section-service-content-image'}></div>
    </div>
  );
};

export default Service;
