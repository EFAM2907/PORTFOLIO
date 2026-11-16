import s from "./css/Tecnologias.module.css";

type TechGroup = {
  title: string;
  items: string[];
};

const techGroups: TechGroup[] = [
  {
    title: "LLMs & agents",
    items: ["RAG", "Tool-calling", "MCP", "LiteLLM", "Evals"],
  },
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Redux", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: [
      "Python",
      "FastAPI",
      "SQLAlchemy 2.0 async",
      "Node.js",
      "Express",
      "pytest",
    ],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "pgvector", "Redis"],
  },
  {
    title: "Infra & observability",
    items: ["Docker", "GCP", "Langfuse"],
  },
];

const Tecnologias = () => (
  <div className={s.container}>
    <h1 className={s.titu}>Technologies</h1>
    <div className={s.grid}>
      {techGroups.map((group) => (
        <section key={group.title} className={s.group}>
          <h2 className={s.groupTitle}>{group.title}</h2>
          <ul className={s.items}>
            {group.items.map((item) => (
              <li key={item} className={s.item}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </div>
);

export default Tecnologias;
