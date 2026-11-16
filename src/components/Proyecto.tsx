import s from "./css/Proyecto.module.css";

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  tags?: string[];
  links: ProjectLink[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Multi-tenant AI agent platform",
    subtitle: "AI Operations / Customer Support for B2B SaaS",
    description:
      "A conversational agent with SSE streaming that answers from the company knowledge base and queries or updates shipments and users through tool-calling.",
    highlights: [
      "RAG over pgvector, with strict multi-tenant isolation and RBAC (OWNER > ADMIN > MEMBER > VIEWER) enforced in both the REST API and the chat tools.",
      "Self-hosted LLM gateway (LiteLLM) with cost-based model routing, provider fallback, retries and per-tenant budgets, traced with Langfuse.",
      "Gmail integration (OAuth per organization) that auto-answers tracking questions by email.",
      "Eval harness for model-routing decisions and ~200 pytest tests against a real Postgres database.",
    ],
    tags: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "SQLAlchemy 2.0 async",
      "Redis",
      "LiteLLM",
      "RAG",
      "Tool-calling",
      "MCP",
      "Langfuse",
      "pytest",
      "Docker",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/EFAM2907/ai-agent-platform",
      },
    ],
    featured: true,
  },
  {
    title: "Prodya",
    description:
      "My current professional work: a production product focused on scalable infrastructure and code optimization.",
    links: [{ label: "Website", href: "https://prodya.com/waitlist" }],
  },
  {
    title: "Patitas 🐾",
    description:
      "Bootcamp team project with a social goal: promote pet adoption and connect people who want to help animals in poor conditions with adopters who can give them a good home.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/FrancoG21/PF-Henry-Front",
      },
      { label: "Live demo", href: "https://pf-henry-front-three.vercel.app/" },
    ],
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <article className={project.featured ? `${s.card} ${s.featured}` : s.card}>
    <h2 className={s.title}>{project.title}</h2>
    {project.subtitle && <p className={s.subtitle}>{project.subtitle}</p>}
    <p className={s.description}>{project.description}</p>
    {project.highlights && (
      <ul className={s.highlights}>
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )}
    {project.tags && (
      <ul className={s.tags}>
        {project.tags.map((tag) => (
          <li key={tag} className={s.tag}>
            {tag}
          </li>
        ))}
      </ul>
    )}
    <div className={s.links}>
      {project.links.map((link) => (
        <a
          key={link.href}
          className={s.link}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      ))}
    </div>
  </article>
);

const Proyecto = () => (
  <div className={s.container}>
    <h1 className={s.heading}>Projects</h1>
    <div className={s.grid}>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </div>
);

export default Proyecto;
