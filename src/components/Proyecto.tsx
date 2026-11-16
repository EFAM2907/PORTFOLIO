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
  links: ProjectLink[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Multi-tenant AI agent platform",
    subtitle: "AI Operations / Customer Support for B2B SaaS",
    description:
      "A conversational AI agent for B2B SaaS support teams. It streams answers in real time from each company's own knowledge base and can look up or update shipments and users on request.",
    highlights: [
      "Every organization's data is fully isolated, with role-based access (owner, admin, member, viewer) enforced across the API and the chat.",
      "Each request is routed to the best-fit model by cost, with provider fallback, retries and per-organization budgets.",
      "Tracking questions are answered automatically by email through each organization's Gmail.",
      "Model-routing decisions are backed by an eval harness and ~200 automated tests against a real database.",
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
      "A web app that connects people who want to adopt with animals in need of a home. It promotes adoption over buying and helps animals living in poor conditions find a good life.",
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
