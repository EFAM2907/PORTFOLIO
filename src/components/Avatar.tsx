import { useEffect, useRef } from "react";
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

// The portrait is a flat image, so the eyes are faked: each eye gets a patch
// of "eye white" plus a copy of the painted iris that slides toward the mouse.
// Coordinates are in the 560x560 space of avatar-toon.jpg.
const IMAGE_SIZE = 560;
const MAX_SHIFT_X = 4.5;
const MAX_SHIFT_Y = 2;
const FOLLOW_RADIUS = 160; // screen px at which the iris reaches its max shift

type Eye = {
  id: string;
  opening: { cx: number; cy: number; rx: number; ry: number };
  iris: { cx: number; cy: number; r: number };
};

const eyes: Eye[] = [
  {
    id: "left",
    opening: { cx: 234, cy: 167, rx: 14, ry: 5 },
    iris: { cx: 236, cy: 165, r: 9.5 },
  },
  {
    id: "right",
    opening: { cx: 301, cy: 158, rx: 17, ry: 5.6 },
    iris: { cx: 300, cy: 156, r: 9.5 },
  },
];

type AvatarProps = {
  className?: string;
};

const Avatar = ({ className = "" }: AvatarProps) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const irisRefs = useRef<Record<string, SVGGElement | null>>({});

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let frame = 0;
    let pointer = { x: 0, y: 0 };

    const update = () => {
      frame = 0;
      const box = frameRef.current?.getBoundingClientRect();
      if (!box) return;
      for (const eye of eyes) {
        const g = irisRefs.current[eye.id];
        if (!g) continue;
        // Same mapping as object-fit: cover / preserveAspectRatio="slice".
        const scale = Math.max(box.width, box.height) / IMAGE_SIZE;
        const offsetX = (box.width - IMAGE_SIZE * scale) / 2;
        const offsetY = (box.height - IMAGE_SIZE * scale) / 2;
        const ex = box.left + offsetX + eye.opening.cx * scale;
        const ey = box.top + offsetY + eye.opening.cy * scale;
        const dx = pointer.x - ex;
        const dy = pointer.y - ey;
        const dist = Math.hypot(dx, dy) || 1;
        const strength = Math.min(dist / FOLLOW_RADIUS, 1);
        g.style.transform = `translate(${(dx / dist) * strength * MAX_SHIFT_X}px, ${(dy / dist) * strength * MAX_SHIFT_Y}px)`;
      }
    };

    const onMove = (e: MouseEvent) => {
      pointer = { x: e.clientX, y: e.clientY };
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={frameRef} className={`${s.frame} ${className}`}>
      <div className={s.stage}>
        <img className={s.photo} src={avatar} alt="Cartoon portrait of Edwin Arias" />
        <svg
          className={s.eyes}
          viewBox={`0 0 ${IMAGE_SIZE} ${IMAGE_SIZE}`}
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            {eyes.map((eye) => (
              <g key={eye.id}>
                <clipPath id={`opening-${eye.id}`}>
                  <ellipse {...eye.opening} />
                </clipPath>
                <clipPath id={`iris-${eye.id}`}>
                  <circle {...eye.iris} />
                </clipPath>
                {/* Darker at the top to imitate the shadow cast by the eyelid */}
                <linearGradient
                  id={`white-${eye.id}`}
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  x2="0"
                  y1={eye.opening.cy - eye.opening.ry}
                  y2={eye.opening.cy + eye.opening.ry}
                >
                  <stop offset="0" stopColor="#8f777d" />
                  <stop offset="0.5" stopColor="#c4afb4" />
                  <stop offset="1" stopColor="#d9c8cc" />
                </linearGradient>
              </g>
            ))}
          </defs>
          {eyes.map((eye) => (
            <g key={eye.id} clipPath={`url(#opening-${eye.id})`}>
              <rect x="0" y="0" width={IMAGE_SIZE} height={IMAGE_SIZE} fill={`url(#white-${eye.id})`} />
              <g
                className={s.iris}
                ref={(node) => {
                  irisRefs.current[eye.id] = node;
                }}
              >
                <image
                  href={avatar}
                  width={IMAGE_SIZE}
                  height={IMAGE_SIZE}
                  clipPath={`url(#iris-${eye.id})`}
                />
              </g>
            </g>
          ))}
        </svg>
      </div>
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
};

export default Avatar;
