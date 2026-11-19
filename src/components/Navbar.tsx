import { useState } from "react";
import { CV_URL } from "../config";
import { VerifiedBadgeIcon } from "./icons";
import s from "./css/Navbar.module.css";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Technologies", href: "#technologies" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className={s.nav} aria-label="Main">
      <div className={s.inner}>
        <a className={s.logo} href="#home" onClick={close}>
          Edwin
          <VerifiedBadgeIcon className={s.badge} />
        </a>

        <button
          type="button"
          className={s.toggle}
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="nav-menu" className={open ? `${s.menu} ${s.open}` : s.menu}>
          {links.map((link) => (
            <li key={link.href}>
              <a className={s.link} href={link.href} onClick={close}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className={s.cv}
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
