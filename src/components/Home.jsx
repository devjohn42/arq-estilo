import React from 'react';

const Home = () => {
  return (
    <section className="section-home" id='home'>
      <div className="section-home-glass"></div>
      <div className="section-home-container">
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
      </div>
    </section>
  );
};

export default Home;
