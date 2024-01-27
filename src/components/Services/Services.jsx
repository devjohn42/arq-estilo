import React, { useState } from 'react';
import SectionTitle from '../global/SectionTitle';
import Line from '../global/Line';
import Service from './Service';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import { animations } from '../../data/animations';

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
          <motion.nav
            className="section-services-nav"
            {...animations.rotateToLeft}
          >
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
          </motion.nav>
        </div>
        <Line />
      </div>
    </section>
  );
};

export default Services;
