import Animacion from "./Animacion";
import Proyecto from "./Proyecto";
import Tecnologias from "./Tecnologias";
import About from "./About";
import Navbar from "./Navbar";
import { CV_URL } from "../config";
import { GithubIcon, LinkedinIcon } from "./icons";
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
      <section className={s.About}>
        <About />
      </section>
      <br/>
      <section id="projects" className={s.Proye}>
        {/* <h1 className={s.Title}>Proyectos</h1> */}
        <Proyecto />
      </section>
      <section id="technologies" className={s.tecno}>
        <Tecnologias />
      </section>
      <footer id="contact" className={s.footer}>
        <div className={s.conte_iconos}>
          <a
            href="https://www.linkedin.com/in/edwinfer2907/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className={`${s.icono} ${s.linkedin}`} label="LinkedIn" />
          </a>
          <a
            href="https://github.com/EFAM2907"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className={`${s.icono} ${s.github}`} label="GitHub" />
          </a>
         
        </div>
        <div className={s.center}>
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={s.cv}
          >
            View CV
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Principal;
