import { siGithub } from "simple-icons";
import s from "./css/icons.module.css";

type IconProps = {
  className?: string;
  // Without a label the icon is decorative (its link already has text).
  label?: string;
};

const a11y = (label?: string) =>
  label ? { role: "img", "aria-label": label } : { "aria-hidden": true };

export const GithubIcon = ({ className, label }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...a11y(label)}
  >
    <path d={siGithub.path} />
  </svg>
);

// LinkedIn is no longer shipped by simple-icons, so this is a simple "in" badge
// drawn here: a rounded square with the letters cut out (even-odd fill).
export const LinkedinIcon = ({ className, label }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    fillRule="evenodd"
    {...a11y(label)}
  >
    <path d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3z M7.2 4.9a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4z M5.7 9.6h3v8.6h-3z M10.5 9.6h2.9v1.2c.5-.9 1.6-1.4 2.9-1.4 2.5 0 3.3 1.6 3.3 3.9v4.9h-3v-4.4c0-1.1-.3-1.8-1.3-1.8-1.1 0-1.7.8-1.7 1.9v4.3h-3.1z" />
  </svg>
);

export const RocketIcon = ({ className, label }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" {...a11y(label)}>
    <path d="M22 34 L10 50 L23 45 Z" fill="#ff4d5e" />
    <path d="M42 34 L54 50 L41 45 Z" fill="#ff4d5e" />
    <path
      d="M32 3C45 14 47 31 43 46H21C17 31 19 14 32 3Z"
      fill="#e8eef7"
    />
    <path d="M32 3C45 14 47 31 43 46H32Z" fill="#c7d3e6" />
    <circle cx="32" cy="25" r="6" fill="#3aa0ff" stroke="#9b9fb0" strokeWidth="2" />
    <g className={s.flame}>
      <path d="M26 46Q32 66 38 46Z" fill="#ffa53a" />
      <path d="M29 46Q32 58 35 46Z" fill="#ffe27a" />
    </g>
  </svg>
);
