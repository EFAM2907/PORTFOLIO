import { CV_URL } from "../config";
import { GithubIcon, LinkedinIcon } from "./icons";
import s from "./css/Contact.module.css";

const Contact = () => (
  <section id="contact" className={s.contact}>
    <h1 className={s.title}>Contact</h1>
    <p className={s.text}>
      Open to AI Engineer opportunities, remote or in Medellín. Have a role or a
      project in mind? Reach out on LinkedIn or take a look at my CV.
    </p>

    <div className={s.actions}>
      <a
        className={s.primary}
        href={CV_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        View CV
      </a>
      <a
        className={s.secondary}
        href="https://www.linkedin.com/in/edwinfer2907/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon className={s.icon} />
        LinkedIn
      </a>
      <a
        className={s.secondary}
        href="https://github.com/EFAM2907"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon className={s.icon} />
        GitHub
      </a>
    </div>

    <p className={s.copy}>© {new Date().getFullYear()} Edwin Arias</p>
  </section>
);

export default Contact;
