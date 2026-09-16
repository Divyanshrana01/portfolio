import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import "./styles/TechStack.css";

// Clear, legible tech-stack marquee (replaces the old 3D physics balls).
// Logos live in /public/logos as SVGs; each sits on a white card with its name.
const techs = [
  { slug: "python", name: "Python" },
  { slug: "pytorch", name: "PyTorch" },
  { slug: "tensorflow", name: "TensorFlow" },
  { slug: "scikitlearn", name: "scikit-learn" },
  { slug: "numpy", name: "NumPy" },
  { slug: "huggingface", name: "Hugging Face" },
  { slug: "openai", name: "OpenAI" },
  { slug: "langchain", name: "LangChain" },
  { slug: "pandas", name: "pandas" },
  { slug: "keras", name: "Keras" },
];

type Tech = (typeof techs)[number];

const TechCard = ({ slug, name }: Tech) => (
  <div className="tech-card">
    <div className="tech-card-logo">
      <img src={`/logos/${slug}.svg`} alt={`${name} logo`} loading="lazy" />
    </div>
    <span className="tech-card-name">{name}</span>
  </div>
);

const TechStack = () => {
  const row1 = techs.slice(0, 5);
  const row2 = techs.slice(5);

  // The marquee measures itself after mount and can change the page height, which
  // would leave the pinned Work section's scroll spacing stale (Work/TechStack
  // overlap). Refresh ScrollTrigger once the marquee has settled.
  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="techstack-section" id="techstack">
      <h2 className="techstack-title">
        My <span>Tech Stack</span>
      </h2>
      <div className="techstack-rows">
        <Marquee
          gradient
          gradientColor="#0b080c"
          gradientWidth={120}
          speed={45}
          pauseOnHover
          autoFill
        >
          {row1.map((t) => (
            <TechCard key={t.slug} {...t} />
          ))}
        </Marquee>
        <Marquee
          gradient
          gradientColor="#0b080c"
          gradientWidth={120}
          speed={45}
          direction="right"
          pauseOnHover
          autoFill
        >
          {row2.map((t) => (
            <TechCard key={t.slug} {...t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TechStack;
