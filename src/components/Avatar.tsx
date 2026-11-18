import type { CSSProperties } from "react";
import avatar from "../assets/avatar-toon.jpg";
import s from "./css/Avatar.module.css";

type Sparkle = { left: string; delay: string; duration: string; size: string };

const sparkles: Sparkle[] = [
  { left: "8%", delay: "0s", duration: "5s", size: "4px" },
  { left: "22%", delay: "1.6s", duration: "6s", size: "3px" },
  { left: "38%", delay: "3.1s", duration: "5.5s", size: "5px" },
  { left: "55%", delay: "0.8s", duration: "6.5s", size: "3px" },
  { left: "70%", delay: "2.4s", duration: "5s", size: "4px" },
  { left: "85%", delay: "4s", duration: "6s", size: "5px" },
  { left: "93%", delay: "1.2s", duration: "7s", size: "3px" },
];

type AvatarProps = {
  className?: string;
};

const Avatar = ({ className = "" }: AvatarProps) => (
  <div className={`${s.frame} ${className}`}>
    <img className={s.photo} src={avatar} alt="Cartoon portrait of Edwin Arias" />
    <span className={`${s.light} ${s.red}`} />
    <span className={`${s.light} ${s.blue}`} />
    {sparkles.map((sp) => (
      <span
        key={sp.left}
        className={s.sparkle}
        style={
          {
            left: sp.left,
            width: sp.size,
            height: sp.size,
            animationDelay: sp.delay,
            animationDuration: sp.duration,
          } as CSSProperties
        }
      />
    ))}
  </div>
);

export default Avatar;
