import { CV_URL } from "../config";
import Avatar from "./Avatar";
import { GithubIcon, LinkedinIcon } from "./icons";
import RobotBanner from "./RobotBanner";
import s from "./css/Hero.module.css";

const Hero = () => (
  <section className={s.hero}>
    <div className={s.main}>
      <div className={s.text}>
        <h1 className={s.title}>Hi, I'm Edwin</h1>
        <p className={s.role}>AI Engineer</p>
        <p className={s.lead}>
          I build production-ready agents and LLM systems: RAG, tool-calling,
          evaluation and observability on top of Python backends. I come from
          full stack, so I cover everything from the API to the interface.
        </p>
        <p className={s.meta}>Medellín, Colombia · Spanish (native) · English (B2)</p>

        <div className={s.actions}>
          <a className={s.primary} href="#projects">
            View projects
          </a>
          <a
            className={s.secondary}
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
        </div>

        <div className={s.socials}>
          <a
            className={s.social}
            href="https://github.com/EFAM2907"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className={s.socialIcon} label="GitHub" />
          </a>
          <a
            className={s.social}
            href="https://www.linkedin.com/in/edwinfer2907/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className={s.socialIcon} label="LinkedIn" />
          </a>
        </div>
      </div>

      <Avatar className={s.avatar} />
    </div>

    <RobotBanner />
  </section>
);

export default Hero;
