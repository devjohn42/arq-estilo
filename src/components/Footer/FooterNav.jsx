import { Link } from 'react-scroll';

const FooterNav = () => {
  return (
    <div className="flex flex-col items-start gap-y-1">
      <h5>Navegação</h5>
      <div className="flex flex-col items- gap-y-1">
        <Link
          to="home"
          className="nav-link"
          smooth={true}
          duration={1000}
          delay={300}
        >
          Início
        </Link>
        <Link
          to="about"
          className="nav-link"
          smooth={true}
          duration={1000}
          delay={300}
          offset={-60}
        >
          Sobre
        </Link>
        <Link
          to="services"
          className="nav-link"
          smooth={true}
          duration={1000}
          delay={300}
          offset={-130}
        >
          Serviços
        </Link>
        <Link
          to="projects"
          className="nav-link"
          smooth={true}
          duration={1000}
          delay={300}
        >
          Projetos
        </Link>
      </div>
    </div>
  );
};

export default FooterNav;
