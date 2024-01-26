import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Parallax from './components/Parallax';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Parallax />
      <Services />
      <Projects />
      <Footer />
    </>
    // <h1 className="font-primary">Arq Estilo</h1>
    // <h3 className="font-secondary font-medium">Sobre</h3>
    // <h3>Arq Estilo</h3>
    // <h4 className="font-primary">
    //   Transformamos Sonhos em Espaços Extraordinários
    // </h4>
    // <h5>Consultoria em Design de Interiores</h5>
    // <h6>Ver Projeto</h6>
    // <p className="text-justify font-secondary">
    //   Somos uma firma de arquitetura e design dedicada a transformar visões em
    //   realidade. Nossa equipe de profissionais apaixonados e experientes
    //   trabalha em estreita colaboração com cada cliente, buscando entender
    //   suas aspirações e necessidades exclusivas. Da concepção à implementação,
    //   guiamos projetos com criatividade, inovação e um compromisso inabalável
    //   com a excelência. Cada espaço que criamos é mais do que uma estrutura, é
    //   uma expressão de identidade, funcionalidade e beleza. Na ArqEstilo,
    //   acreditamos que a arquitetura vai além das paredes; ela molda
    //   experiências e inspira vida. Junte-se a nós enquanto transformamos
    //   ambientes, elevamos padrões e construímos o futuro, um projeto de cada
    //   vez.
    // </p>
  );
};

export default App;
