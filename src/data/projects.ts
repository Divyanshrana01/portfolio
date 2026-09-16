// Single source of truth for projects (used by the Work gallery).
//
// TODO: Replace these placeholder projects with your own.
// Add or remove entries freely. The horizontal gallery adapts to the count.
// Drop project images in /public/images and point `image` at them (e.g. "/images/myproject.webp").
// Set `link` to a GitHub repo or live demo to make the card clickable,
// and use `description` for a one-line outcome ("what it does + result").

export interface Project {
  title: string;
  category: string;
  tools: string;
  description?: string;
  link?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "KubePilot",
    category: "Agentic AI",
    tools:
      "Python, LangGraph, FastAPI, Qdrant, PostgreSQL, Redis, React, TypeScript",
    description:
      "Production-grade Agentic RAG platform for Kubernetes SRE operations, with hybrid search, HyDE, CRAG, Self-RAG, Text2SQL and multi-layer guardrails.",
    link: "https://github.com/Divyanshrana01/KubePilot",
    image: "/images/placeholder.webp",
  },
  {
    title: "MedScript-AI",
    category: "Generative AI",
    tools:
      "Python, Llama-3.1-8B, Unsloth, TRL, QLoRA, FastAPI, React, TypeScript",
    description:
      "Clinical decision-support LLM: QLoRA-tuned Llama-3.1-8B on 10.7k NICE/MedQA examples (BERTScore F1 0.90), served behind hybrid RAG over NICE guidelines.",
    link: "https://github.com/Divyanshrana01/MedScript-AI",
    image: "/images/placeholder.webp",
  },
  {
    title: "DeepEquity",
    category: "Agentic AI",
    tools: "Python, LangGraph, Groq, PostgreSQL, pgvector, Redis, FastAPI",
    description:
      "Multi-agent equity research desk where bull/bear agents debate a ticker; hybrid search + reranking lifted retrieval precision@5 from 0.70 to 0.86.",
    link: "https://github.com/Divyanshrana01/DeepEquity",
    image: "/images/placeholder.webp",
  },
  {
    title: "Multi-Agent Research Platform",
    category: "Agentic AI",
    tools: "Python, LangGraph, TensorZero, AWS (ECS, RDS, Terraform), React",
    description:
      "Research platform with LangGraph agents, TensorZero provider routing, LLM-as-judge scoring, and a scheduled PyRIT red-team service, provisioned via Terraform on AWS.",
    link: "https://github.com/Divyanshrana01/multi-agent-research",
    image: "/images/placeholder.webp",
  },
];
