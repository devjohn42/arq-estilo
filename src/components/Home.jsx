import React from 'react';
import { motion } from 'framer-motion';
import { animations } from '../data/animations';

const Home = () => {
  return (
    <section className="section-home" id="home">
      <div className="section-home-glass"></div>
      <motion.div className="section-home-container" {...animations.downToUp}>
        <h1 className="font-primary leading-[120%]">ArqEstilo</h1>
        <h4 className="font-primary w-[80%] leading-[120%] text-center">
          Transformamos Sonhos em Espaços Extraordinários
        </h4>
        <a
          href="#"
          className="section-home-button lg:section-home-button-effect"
        >
          Conheça nossos Projetos
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
