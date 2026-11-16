import style from "./css/About.module.css";
import Fade from "react-reveal/Fade";
import edwin from "../assets/edwin.jpg";

const CV_URL =
  "https://drive.google.com/file/d/1FfQzdt0EKR_lrrWofcvPxi8wKauSYYiT/view?usp=sharing";

const About = () => {
  return (
    <div className={style.contenedor}>
      <div className={style.conten}>
        <Fade right>
          <img id="about" className={style.img} src={edwin} alt="Edwin Arias" />
          <div className={style.info}>
            <p className={style.parrafo}>
              👋 Hi, I'm Edwin, an AI Engineer based in Medellín. I build
              production-ready agents and LLM systems: RAG, tool-calling,
              evaluation and observability on top of Python backends. I come
              from full stack, so I cover everything from the API to the
              interface.
            </p>
            <a
              className={style.boton}
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV 🚀
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
