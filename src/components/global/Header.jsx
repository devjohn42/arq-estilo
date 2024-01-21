import React, { useState } from 'react';
import { MdMenuOpen, MdClose } from 'react-icons/md';

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  // const changeNav = () => {
  //   if (window.innerWidth < 768) {
  //     setMenuOpen(!openNav);
  //   }
  // };

  return (
    <header>
      <div className="display md:hidden" onClick={() => setOpenNav(!openNav)}>
        {openNav ? (
          <MdClose className="text-white text-[1.875rem] absolute top-2 right-2" />
        ) : (
          <MdMenuOpen className="text-white text-[2rem] sm:text-[2.25rem]" />
        )}
      </div>
      <nav className={openNav ? 'mobile-nav' : 'desktop-nav'}>
        <a href="#" className="nav-link md:nav-link-pseudo-before-effect">
          Início
        </a>
        <a href="#" className="nav-link md:nav-link-pseudo-before-effect">
          Sobre
        </a>
        <a href="#" className="nav-link md:nav-link-pseudo-before-effect">
          Serviços
        </a>
        <a href="#" className="nav-link md:nav-link-pseudo-before-effect">
          Projetos
        </a>
        <a href="#" className="nav-link md:nav-link-pseudo-before-effect">
          Contato
        </a>
      </nav>
    </header>
  );
};

export default Header;
