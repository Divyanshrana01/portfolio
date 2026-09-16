import { useRef, useState } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { projects } from "../data/projects";

gsap.registerPlugin(useGSAP);

// Arrow-driven slider: no scroll-jacking. The section scrolls with the page
// like any other; clicking the arrows animates the row by one card.
const Work = () => {
  const flexRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef(0);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  useGSAP(() => {
    const recalc = () => {
      const boxes = document.querySelectorAll(".work-box");
      const container = document.querySelector(".work-container");
      if (!boxes.length || !container) return;
      const step = boxes[0].getBoundingClientRect().width;
      const containerWidth = container.getBoundingClientRect().width;
      stepRef.current = step;
      const visibleCount = Math.max(1, Math.floor(containerWidth / step));
      setMaxIndex(Math.max(0, boxes.length - visibleCount));
      setIndex((i) => Math.min(i, Math.max(0, boxes.length - visibleCount)));
    };

    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, []);

  useGSAP(
    () => {
      if (!flexRef.current) return;
      gsap.to(flexRef.current, {
        x: -index * stepRef.current,
        duration: 0.7,
        ease: "power3.out",
      });
    },
    { dependencies: [index], revertOnUpdate: false }
  );

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header">
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-nav">
            <button
              className="work-nav-btn"
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous project"
              data-cursor="disable"
            >
              <MdArrowBackIosNew />
            </button>
            <button
              className="work-nav-btn"
              onClick={next}
              disabled={index === maxIndex}
              aria-label="Next project"
              data-cursor="disable"
            >
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
        <div className="work-flex" ref={flexRef}>
          {projects.map((project, i) => (
            <div className="work-box" key={i}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{i + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                {project.description && (
                  <p className="work-desc">{project.description}</p>
                )}
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
