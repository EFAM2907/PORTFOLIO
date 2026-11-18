import type { CSSProperties } from "react";
import s from "./css/RobotBanner.module.css";

const PHRASE = "SOFTWARE ENGINEER";
// One bit per slot, so the digits on the ground look random but stay stable.
const BITS = "10110100111010010110";

const VIEW_W = 860;
const VIEW_H = 220;
const GROUND_Y = 196;
const LETTER_Y = 78;
const SLOT_W = 36;
// Center the phrase in the scene.
const FIRST_SLOT_X = (VIEW_W - PHRASE.length * SLOT_W) / 2;

const SPEED = 80; // walking speed while kicking digits, svg units per second
const BACK_SPEED = 110; // walking speed on the way back to sit down
const ROBOT_START_X = -50;
const START_DELAY = 2.8; // wait for the header intro before the robot enters
const KICK_REACH = 20; // distance in front of the robot where it hits a digit
const FLIGHT = 0.5;
const TURN = 0.35; // seconds spent turning around
const FADE = 0.05; // hand-off between the walking and the sitting robot

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

// The robot sits centered under the gap between the two words.
const GAP_X = FIRST_SLOT_X + PHRASE.indexOf(" ") * SLOT_W + SLOT_W / 2;
// It walks a bit past the last digit, turns around and comes back.
const TURN_X = slots[slots.length - 1].x + 70;

const outSeconds = (TURN_X - ROBOT_START_X) / SPEED;
const backSeconds = (TURN_X - GAP_X) / BACK_SPEED;
const walkSeconds = outSeconds + TURN + backSeconds + FADE;
const sitAt = START_DELAY + walkSeconds - FADE;

const pct = (seconds: number) => ((seconds / walkSeconds) * 100).toFixed(3);

// Keyframes depend on the layout constants above, so they are generated here.
const walkKeyframes = `
@keyframes robotWalk {
  0%   { transform: translate(${ROBOT_START_X}px, ${GROUND_Y}px) scaleX(1); opacity: 1; }
  ${pct(outSeconds)}% { transform: translate(${TURN_X}px, ${GROUND_Y}px) scaleX(1); opacity: 1; }
  ${pct(outSeconds + TURN)}% { transform: translate(${TURN_X}px, ${GROUND_Y}px) scaleX(-1); opacity: 1; }
  ${pct(walkSeconds - FADE)}% { transform: translate(${GAP_X}px, ${GROUND_Y}px) scaleX(-1); opacity: 1; }
  100% { transform: translate(${GAP_X}px, ${GROUND_Y}px) scaleX(-1); opacity: 0; }
}`;

const RobotBanner = () => (
  <div className={s.banner}>
    <style>{walkKeyframes}</style>
    <svg
      className={s.scene}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      role="img"
      aria-label="A small robot walks along and builds the words Software Engineer out of ones and zeros, then sits down between them"
    >
      <line
        className={s.ground}
        x1="0"
        y1={GROUND_Y}
        x2={VIEW_W}
        y2={GROUND_Y}
        style={{ animationDelay: `${sitAt}s` } as CSSProperties}
      />

      <g
        className={s.phrase}
        style={{ animationDelay: `${sitAt}s` } as CSSProperties}
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

      {/* Walking robot: out to the right, turn around, back to the gap. */}
      <g
        className={s.robot}
        style={
          {
            animation: `robotWalk ${walkSeconds}s linear ${START_DELAY}s both`,
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

      {/* Sitting robot: appears when the walking one arrives. */}
      <g transform={`translate(${GAP_X} ${GROUND_Y})`}>
        <g
          className={s.sitting}
          style={{ animationDelay: `${sitAt}s` } as CSSProperties}
        >
          {/* legs stretched forward */}
          <rect x="-4" y="-9" width="24" height="9" rx="4" fill="#164a99" />
          <rect x="16" y="-11" width="10" height="11" rx="3" fill="#0f3470" />
          {/* body resting on the ground */}
          <rect x="-13" y="-38" width="26" height="30" rx="6" fill="#2b6fd6" />
          <circle cx="0" cy="-26" r="3.5" fill="#7fe0ff" className={s.chest} />
          {/* arm resting on the knee */}
          <rect
            x="10"
            y="-33"
            width="5"
            height="17"
            rx="2.5"
            fill="#3a82f0"
            transform="rotate(-38 12.5 -33)"
          />
          {/* head */}
          <g className={s.nod}>
            <line x1="0" y1="-60" x2="0" y2="-68" stroke="#9fb4d6" strokeWidth="2" />
            <circle cx="0" cy="-70" r="3" fill="#ffd43b" className={s.antenna} />
            <rect x="-15" y="-60" width="30" height="22" rx="7" fill="#3a82f0" />
            <rect x="-11" y="-56" width="22" height="13" rx="5" fill="#0b1f3d" />
            <g className={s.eyes}>
              <circle cx="-4.5" cy="-49.5" r="2.8" fill="#7fe0ff" />
              <circle cx="5.5" cy="-49.5" r="2.8" fill="#7fe0ff" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>
);

export default RobotBanner;
