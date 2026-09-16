import { MouseEvent } from "react";
import { smoother } from "./Navbar";
import "./styles/About.css";

const About = () => {
  const scrollTo =
    (target: string) => (e: MouseEvent<HTMLAnchorElement>) => {
      if (window.innerWidth > 1024 && smoother) {
        e.preventDefault();
        smoother.scrollTo(target, true, "top top");
      }
    };
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm Divyansh Rana, an MSc Artificial Intelligence student at the
          University of Salford and an aspiring AI, Machine Learning and
          Generative AI engineer. I love turning ideas into intelligent systems
          that genuinely work, whether that means training and fine tuning
          models, building retrieval augmented assistants, or designing agents
          that can reason and take action. Almost everything I know comes from
          building real projects and learning by doing. Right now I'm looking
          for AI and ML roles in the UK where I can keep growing and ship work
          that creates real impact.
        </p>
        <div className="about-cta">
          <a
            href="#work"
            className="cta-btn cta-fill"
            onClick={scrollTo("#work")}
            data-cursor="disable"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="cta-btn cta-outline"
            onClick={scrollTo("#contact")}
            data-cursor="disable"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
