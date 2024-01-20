import React from 'react';

const Home = () => {
  return (
    <section className="section-home">
      <div className="section-home-glass"></div>
      <div className="section-home-container">
        <h1 className="font-primary leading-[120%]">ArqEstilo</h1>
        <h4 className="font-primary w-[80%] leading-[120%] text-center">
          Transformamos Sonhos em Espaços Extraordinários
        </h4>
        <p
          href="#"
          className="section-home-button lg:section-home-button-effect"
        >
          Conheça nossos Projetos
        </p>
      </div>
    </section>
  );
};

export default Home;
