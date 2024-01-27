import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { MdMenuOpen, MdClose } from 'react-icons/md';

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const watchingResize = () => {
    if (window.innerWidth >= 768) {
      setOpenNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', watchingResize);
    // console.log(window.innerWidth)
  }, []);

  const changeNav = () => {
    if (window.innerWidth < 768) {
      setOpenNav(!openNav);
    }
  };

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
        <Link
          to="home"
          className="nav-link md:nav-link-pseudo-before-effect"
          smooth={true}
          duration={1000}
          delay={300}
          onClick={() => changeNav()}
        >
          Início
        </Link>
        <Link
          to="about"
          className="nav-link md:nav-link-pseudo-before-effect"
          smooth={true}
          duration={1000}
          delay={300}
          offset={-60}
          onClick={() => changeNav()}
        >
          Sobre
        </Link>
        <Link
          to="services"
          className="nav-link md:nav-link-pseudo-before-effect"
          smooth={true}
          duration={1000}
          delay={300}
          offset={-130}
          onClick={() => changeNav()}
        >
          Serviços
        </Link>
        <Link
          to="projects"
          className="nav-link md:nav-link-pseudo-before-effect"
          smooth={true}
          duration={1000}
          delay={300}
          onClick={() => changeNav()}
        >
          Projetos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
