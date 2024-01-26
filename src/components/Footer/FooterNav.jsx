import React from 'react';

const FooterNav = () => {
  return (
    <div className="flex flex-col items-start gap-y-1">
      <h5>Navegação</h5>
      <div className="flex flex-col items- gap-y-1">
        <a href="" className="w-fit">
          Início
        </a>
        <a href="" className="w-fit">
          Sobre
        </a>
        <a href="" className="w-fit">
          Serviços
        </a>
        <a href="" className="w-fit">
          Projetos
        </a>
      </div>
    </div>
  );
};

export default FooterNav;
