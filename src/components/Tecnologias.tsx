import s from "./css/Tecnologias.module.css";

type TechGroup = {
  title: string;
  items: string[];
};

const techGroups: TechGroup[] = [
  {
    title: "LLMs & agents",
    items: [
      "OpenAI",
      "Anthropic",
      "Gemini",
      "Tool / function calling",
      "RAG",
      "Embeddings",
      "MCP",
      "Google ADK",
      "LiteLLM",
      "Model routing",
      "Structured outputs",
      "Langfuse",
      "Evaluation harnesses",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Python",
      "FastAPI",
      "Pydantic",
      "SQLAlchemy 2.0 async",
      "REST APIs",
      "SSE streaming",
      "JWT",
      "OAuth 2.0",
      "RBAC",
      "Node.js",
      "Express",
    ],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "pgvector", "Redis", "Alembic"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Google Cloud",
      "Cloud Run",
      "Vertex AI",
      "Cloud SQL",
      "BigQuery",
      "Cloud Storage",
      "Artifact Registry",
      "Secret Manager",
      "IAM",
      "Docker",
      "Docker Compose",
      "Git",
    ],
  },
  {
    title: "Testing",
    items: [
      "pytest",
      "pytest-asyncio",
      "Integration tests against real databases",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Redux", "HTML", "CSS"],
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
