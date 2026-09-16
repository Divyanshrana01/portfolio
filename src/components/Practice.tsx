import "./styles/Practice.css";

// Only tools that appear in a public repo. Anything claimed but unevidenced is
// deliberately absent — an interviewer will check.
const groups = [
  {
    area: "Agent orchestration",
    items: [
      "LangGraph",
      "LangChain",
      "MCP servers",
      "Human-in-the-loop interrupts",
      "TensorZero gateway",
      "State checkpointing",
    ],
  },
  {
    area: "Retrieval",
    items: [
      "Hybrid BM25 and dense",
      "Reciprocal rank fusion",
      "Cross-encoder reranking",
      "HyDE",
      "CRAG",
      "Self-RAG",
      "Qdrant",
      "pgvector",
      "BGE-M3",
    ],
  },
  {
    area: "Evaluation and safety",
    items: [
      "RAGAS",
      "Golden sets",
      "LLM-as-judge",
      "nDCG, MRR, precision@k",
      "ROUGE-L, BERTScore",
      "LangSmith",
      "PyRIT red teaming",
      "llm-guard",
    ],
  },
  {
    area: "Training",
    items: [
      "QLoRA",
      "Unsloth",
      "TRL",
      "DPO",
      "Hugging Face Hub",
      "MLflow",
    ],
  },
  {
    area: "Systems",
    items: [
      "Python",
      "TypeScript",
      "FastAPI",
      "SSE streaming",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Terraform",
      "AWS",
      "pytest",
    ],
  },
];

const Practice = () => (
  <section className="practice-section section" id="practice">
    <div className="shell">
      <div className="section-head">
        <h2>Tools I have actually shipped with</h2>
        <p className="section-note">
          Each one appears in a public repository, so it is fair game in an
          interview.
        </p>
      </div>

      <dl className="practice-grid">
        {groups.map((g) => (
          <div className="practice-group" key={g.area}>
            <dt>{g.area}</dt>
            <dd>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Practice;
