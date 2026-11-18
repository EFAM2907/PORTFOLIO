import type { ReactNode } from "react";
import {
  siAnthropic,
  siCss,
  siDocker,
  siExpress,
  siFastapi,
  siGit,
  siGithub,
  siGooglecloud,
  siGooglegemini,
  siHtml5,
  siJavascript,
  siModelcontextprotocol,
  siNodedotjs,
  siPostgresql,
  siPydantic,
  siPytest,
  siPython,
  siReact,
  siRedis,
  siSqlalchemy,
  siTypescript,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import s from "./css/Tecnologias.module.css";

type Tech = {
  name: string;
  // Brand logo from simple-icons, or a generic glyph for things without one.
  icon: SimpleIcon | ReactNode;
};

type TechGroup = {
  title: string;
  items: Tech[];
};

const glyph = (children: ReactNode) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const ragGlyph = glyph(
  <>
    <ellipse cx="9" cy="5.5" rx="6" ry="2.5" />
    <path d="M3 5.5v6c0 1.4 2.7 2.5 6 2.5M15 5.5v3" />
    <path d="M3 11.5v6c0 1.4 2.7 2.5 6 2.5" />
    <circle cx="16" cy="16" r="3.5" />
    <path d="M18.6 18.6L21.5 21.5" />
  </>,
);

const toolGlyph = glyph(
  <>
    <path d="M9 4Q6 4 6 7V10Q6 12 3.5 12Q6 12 6 14V17Q6 20 9 20" />
    <path d="M15 4Q18 4 18 7V10Q18 12 20.5 12Q18 12 18 14V17Q18 20 15 20" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </>,
);

const gatewayGlyph = glyph(
  <>
    <circle cx="5" cy="6" r="1.6" />
    <circle cx="5" cy="12" r="1.6" />
    <circle cx="5" cy="18" r="1.6" />
    <path d="M6.6 6H11l3 6M6.6 12H14M6.6 18H11l3-6" />
    <path d="M14 12h6M17.5 9.5L20 12l-2.5 2.5" />
  </>,
);

const traceGlyph = glyph(<path d="M2.5 12h4l2.5-7 5 14 2.5-7h5" />);

const techGroups: TechGroup[] = [
  {
    title: "LLMs & agents",
    items: [
      { name: "Anthropic", icon: siAnthropic },
      { name: "Gemini", icon: siGooglegemini },
      { name: "MCP", icon: siModelcontextprotocol },
      { name: "RAG", icon: ragGlyph },
      { name: "Tool calling", icon: toolGlyph },
      { name: "LiteLLM", icon: gatewayGlyph },
      { name: "Langfuse", icon: traceGlyph },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Python", icon: siPython },
      { name: "FastAPI", icon: siFastapi },
      { name: "Pydantic", icon: siPydantic },
      { name: "SQLAlchemy", icon: siSqlalchemy },
      { name: "Node.js", icon: siNodedotjs },
      { name: "Express", icon: siExpress },
      { name: "pytest", icon: siPytest },
    ],
  },
  {
    title: "Data",
    items: [
      { name: "PostgreSQL + pgvector", icon: siPostgresql },
      { name: "Redis", icon: siRedis },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "Google Cloud", icon: siGooglecloud },
      { name: "Docker", icon: siDocker },
      { name: "Git", icon: siGit },
      { name: "GitHub", icon: siGithub },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: siReact },
      { name: "TypeScript", icon: siTypescript },
      { name: "JavaScript", icon: siJavascript },
      { name: "HTML5", icon: siHtml5 },
      { name: "CSS", icon: siCss },
    ],
  },
];

const isBrandIcon = (icon: Tech["icon"]): icon is SimpleIcon =>
  typeof icon === "object" && icon !== null && "path" in icon && "hex" in icon;

// Very dark brand colors (GitHub, Express...) would vanish on the dark
// background, so they fall back to white on hover.
const hoverColor = (hex: string) => {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.25 ? "#ffffff" : `#${hex}`;
};

const TechTile = ({ tech }: { tech: Tech }) => {
  const brand = isBrandIcon(tech.icon) ? tech.icon : null;
  return (
    <li
      className={s.tile}
      style={brand ? ({ "--brand": hoverColor(brand.hex) } as React.CSSProperties) : undefined}
    >
      <div className={s.icon}>
        {brand ? (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d={brand.path} />
          </svg>
        ) : (
          (tech.icon as ReactNode)
        )}
      </div>
      <span className={s.name}>{tech.name}</span>
    </li>
  );
};

const Tecnologias = () => (
  <div className={s.container}>
    <h1 className={s.titu}>Technologies</h1>
    <div className={s.groups}>
      {techGroups.map((group) => (
        <section key={group.title} className={s.group}>
          <h2 className={s.groupTitle}>{group.title}</h2>
          <ul className={s.grid}>
            {group.items.map((tech) => (
              <TechTile key={tech.name} tech={tech} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  </div>
);

export default Tecnologias;
