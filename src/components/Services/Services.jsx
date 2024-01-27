import React, { useState } from 'react';
import SectionTitle from '../global/SectionTitle';
import Line from '../global/Line';
import Service from './Service';
import { services } from '../../data/services';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeService = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="section-services" id="services">
      <Line />
      <SectionTitle title="Nossos Serviços" />
      <div className="w-full flex flex-col items-center">
        <div className="section-services-container">
          <Service
            title={services[activeIndex].title}
            description={services[activeIndex].description}
            img={services[activeIndex].image}
          />
          <nav className="section-services-nav">
            {services.map((element) => {
              return (
                <p
                  key={element.index}
                  onClick={() => changeService(element.index)}
                  className={
                    activeIndex === element.index
                      ? 'text-[#fff]'
                      : 'text-dim hover:text-[#fff] duration-100 cursor-pointer'
                  }
                >
                  {element.index + 1}
                </p>
              );
            })}
          </nav>
        </div>
        <Line />
      </div>
    </section>
  );
};

export default Services;
