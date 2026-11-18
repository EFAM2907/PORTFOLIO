import Animacion from "./Animacion";
import Proyecto from "./Proyecto";
import Tecnologias from "./Tecnologias";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Fade from "react-reveal/Fade";
import s from "./css/Principal.module.css";

const Principal = () => {
  return (
    <div>
      <Navbar />
      <Fade>
        <header id="home">
          <Animacion />
        </header>
      </Fade>
      <section id="projects" className={s.Proye}>
        <Proyecto />
      </section>
      <section id="technologies" className={s.tecno}>
        <Tecnologias />
      </section>
      <Contact />
    </div>
  );
};

export default Principal;
