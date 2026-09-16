// Single source of truth for the work section.
//
// Claims here are deliberately limited to what is actually in each repo: no
// "deployed to" where only Terraform exists, no CI where no workflow is
// committed. Metrics are published runs, not estimates.

export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  kind: string;
  summary: string;
  detail: string;
  metrics: Metric[];
  stack: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "KubePilot",
    kind: "Agentic RAG",
    summary: "An SRE copilot for Kubernetes operations.",
    detail:
      "Each question enters a LangGraph state machine that decides whether to answer from retrieval or to write SQL against the cluster's history. Anything that touches the database stops for human approval first, and the generated query has to survive an AST check that allows nothing but SELECT.",
    metrics: [
      { label: "Faithfulness", value: "0.867" },
      { label: "Context precision", value: "0.465" },
      { label: "Guardrail layers", value: "9" },
    ],
    stack: [
      "Python",
      "LangGraph",
      "FastAPI",
      "Qdrant",
      "PostgreSQL",
      "Redis",
      "React",
    ],
    link: "https://github.com/Divyanshrana01/KubePilot",
  },
  {
    title: "MedScript-AI",
    kind: "Fine-tuning and retrieval",
    summary: "A clinical decision-support model built on UK guidance.",
    detail:
      "A QLoRA fine-tune of Llama-3.1-8B over 10,768 instructions assembled from NICE guidelines and MedQA, served behind hybrid retrieval that chunks on recommendation boundaries so a citation never straddles two pieces of advice. An MLflow sweep picked the reranker: three candidates tied on recall, so the one thirteen times faster won.",
    metrics: [
      { label: "BERTScore F1", value: "0.90" },
      { label: "Reranker recall", value: "0.975" },
      { label: "Backend tests", value: "101" },
    ],
    stack: [
      "Llama-3.1-8B",
      "Unsloth",
      "TRL",
      "QLoRA",
      "MLflow",
      "BGE-M3",
      "FastAPI",
    ],
    link: "https://github.com/Divyanshrana01/MedScript-AI",
  },
  {
    title: "DeepEquity",
    kind: "Multi-agent research",
    summary: "A bull and a bear argue a ticker; a third agent writes it up.",
    detail:
      "Two agents build opposing cases from the same evidence pool, then a synthesis agent writes a cited note with an explicit confidence breakdown. The tools reach them through an MCP server exposing SEC filings, prices, news and earnings transcripts.",
    metrics: [
      { label: "Precision@5", value: "0.864" },
      { label: "nDCG", value: "0.845" },
      { label: "Tests", value: "231" },
    ],
    stack: [
      "Python",
      "LangGraph",
      "MCP",
      "Groq",
      "pgvector",
      "Redis",
      "Docker",
    ],
    link: "https://github.com/Divyanshrana01/DeepEquity",
  },
  {
    title: "Multi-agent research platform",
    kind: "Platform and safety",
    summary: "Four agents, three serving tiers, and a standing red team.",
    detail:
      "Search, summarise, write and critique agents run behind a path that tries a semantic cache, then long-term memory in pgvector, then the full agent loop. Every model call goes through a TensorZero gateway with provider fallbacks, and the judges deliberately run a different model family from the writer. A PyRIT service attacks it on a weekly schedule.",
    metrics: [
      { label: "Terraform resources", value: "59" },
      { label: "Attack prompts", value: "30" },
      { label: "Tests", value: "132" },
    ],
    stack: [
      "LangGraph",
      "TensorZero",
      "Terraform",
      "AWS",
      "pgvector",
      "PyRIT",
      "React",
    ],
    link: "https://github.com/Divyanshrana01/multi-agent-research",
  },
];
