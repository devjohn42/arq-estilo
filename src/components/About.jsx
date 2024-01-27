import React from 'react';
import SectionTitle from './global/SectionTitle';
import Line from './global/Line';
import { motion } from 'framer-motion';
import { animations } from '../data/animations';

const About = () => {
  return (
    <section className="section-about" id="about">
      <Line />
      <div className="section-about-container">
        <div className="section-about-content">
          <SectionTitle title="Sobre" />
          <motion.p
            className="section-about-content-description"
            {...animations.leftToRight}
          >
            Somos uma firma de arquitetura e design dedicada a transformar
            visões em realidade. Nossa equipe de profissionais apaixonados e
            experientes trabalha em estreita colaboração com cada cliente,
            buscando entender suas aspirações e necessidades exclusivas. Da
            concepção à implementação, guiamos projetos com criatividade,
            inovação e um compromisso inabalável com a excelência. Cada espaço
            que criamos é mais do que uma estrutura, é uma expressão de
            identidade, funcionalidade e beleza. Na ArqEstilo, acreditamos que a
            arquitetura vai além das paredes, ela molda experiências e inspira
            vida. Junte-se a nós enquanto transformamos ambientes, elevamos
            padrões e construímos o futuro, um projeto de cada vez.
          </motion.p>
        </div>
        <motion.div className="section-about-image" {...animations.rightToLeft}>
          <div className="section-about-image-glass"></div>
        </motion.div>
      </div>
      <Line />
    </section>
  );
};

export default About;
