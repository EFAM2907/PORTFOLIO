import Animacion from "./Animacion";
import Proyecto from "./Proyecto";
import Tecnologias from "./Tecnologias";
import About from "./About";
import { CV_URL } from "../config";
import Fade from "react-reveal/Fade";
import s from "./css/Principal.module.css";

const Principal = () => {
  return (
    <div>
      <Fade>
        <header>
          <Animacion />
        </header>
      </Fade>
      <section className={s.About}>
        <About />
      </section>
      <br/>
      <section className={s.Proye}>
        {/* <h1 className={s.Title}>Proyectos</h1> */}
        <Proyecto />
      </section>
      <section className={s.tecno}>
        <Tecnologias />
      </section>
      <footer className={s.footer}>
        <div className={s.conte_iconos}>
          <a
            href="https://www.linkedin.com/in/edwinfer2907/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={s.icono}
              src="https://img.icons8.com/color/344/linkedin.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/EFAM2907"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={s.icono}
              src="https://img.icons8.com/fluency/344/github.png"
              alt="GitHub"
            />
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
