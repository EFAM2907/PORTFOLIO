import type { CSSProperties } from "react";
import s from "./css/RobotBanner.module.css";

const PHRASE = "SOFTWARE ENGINEERING";
// One bit per slot, so the digits on the ground look random but stay stable.
const BITS = "10110100111010010110";

const VIEW_W = 860;
const VIEW_H = 220;
const GROUND_Y = 196;
const LETTER_Y = 78;
const SLOT_W = 36;
const FIRST_SLOT_X = 70; // leaves room for the fixed rocket on the left

const SPEED = 80; // robot speed, svg units per second
const ROBOT_START_X = -50;
const ROBOT_END_X = VIEW_W + 50;
const START_DELAY = 2.8; // wait for the header intro before the robot enters
const KICK_REACH = 20; // distance in front of the robot where it hits a digit
const FLIGHT = 0.5;

const walkSeconds = (ROBOT_END_X - ROBOT_START_X) / SPEED;

type Slot = { char: string; x: number; bit: string; kickAt: number };

const slots: Slot[] = PHRASE.split("").map((char, i) => {
  const x = FIRST_SLOT_X + i * SLOT_W + SLOT_W / 2;
  return {
    char,
    x,
    bit: BITS[i % BITS.length],
    kickAt: START_DELAY + (x - KICK_REACH - ROBOT_START_X) / SPEED,
  };
});

const RobotBanner = () => (
  <div className={s.banner}>
    <svg
      className={s.scene}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      role="img"
      aria-label="A small robot walks along and builds the words Software Engineering out of ones and zeros"
    >
      <line
        className={s.ground}
        x1="0"
        y1={GROUND_Y}
        x2={VIEW_W}
        y2={GROUND_Y}
      />

      <g
        className={s.phrase}
        style={{ animationDelay: `${START_DELAY + walkSeconds}s` } as CSSProperties}
      >
        {slots.map(
          (slot, i) =>
            slot.char !== " " && (
              <text
                key={`letter-${i}`}
                className={s.letter}
                x={slot.x}
                y={LETTER_Y}
                style={{ animationDelay: `${slot.kickAt + FLIGHT * 0.7}s` } as CSSProperties}
              >
                {slot.char}
              </text>
            ),
        )}
      </g>

      {slots.map(
        (slot, i) =>
          slot.char !== " " && (
            <text
              key={`digit-${i}`}
              className={s.digit}
              x={slot.x}
              y={GROUND_Y - 6}
              style={
                {
                  animationDelay: `${slot.kickAt}s`,
                  animationDuration: `${FLIGHT}s`,
                  "--rise": `${GROUND_Y - 6 - LETTER_Y}px`,
                } as CSSProperties
              }
            >
              {slot.bit}
            </text>
          ),
      )}

      <g
        className={s.robot}
        style={
          {
            animationDelay: `${START_DELAY}s`,
            animationDuration: `${walkSeconds}s`,
            "--x0": `${ROBOT_START_X}px`,
            "--x1": `${ROBOT_END_X}px`,
            transform: `translate(${ROBOT_START_X}px, ${GROUND_Y}px)`,
          } as CSSProperties
        }
      >
        <g className={s.bob}>
          {/* back arm and legs */}
          <g className={`${s.limb} ${s.armBack}`}>
            <rect x="-17" y="-40" width="5" height="18" rx="2.5" fill="#164a99" />
          </g>
          <g className={`${s.limb} ${s.legA}`}>
            <rect x="-9" y="-16" width="7" height="12" rx="2" fill="#164a99" />
            <rect x="-10" y="-5" width="12" height="5" rx="2.5" fill="#0f3470" />
          </g>
          <g className={`${s.limb} ${s.legB}`}>
            <rect x="2" y="-16" width="7" height="12" rx="2" fill="#2b6fd6" />
            <rect x="1" y="-5" width="12" height="5" rx="2.5" fill="#164a99" />
          </g>

          {/* body */}
          <rect x="-13" y="-42" width="26" height="28" rx="6" fill="#2b6fd6" />
          <circle cx="0" cy="-30" r="3.5" fill="#7fe0ff" className={s.chest} />

          {/* head */}
          <line x1="0" y1="-64" x2="0" y2="-72" stroke="#9fb4d6" strokeWidth="2" />
          <circle cx="0" cy="-74" r="3" fill="#ffd43b" className={s.antenna} />
          <rect x="-15" y="-64" width="30" height="22" rx="7" fill="#3a82f0" />
          <rect x="-11" y="-60" width="22" height="13" rx="5" fill="#0b1f3d" />
          <g className={s.eyes}>
            <circle cx="-4.5" cy="-53.5" r="2.8" fill="#7fe0ff" />
            <circle cx="5.5" cy="-53.5" r="2.8" fill="#7fe0ff" />
          </g>

          {/* front arm: flicks the digits up */}
          <g className={`${s.limb} ${s.armFront}`}>
            <rect x="12" y="-40" width="5" height="18" rx="2.5" fill="#3a82f0" />
          </g>
        </g>
      </g>
    </svg>
  </div>
);

export default RobotBanner;
