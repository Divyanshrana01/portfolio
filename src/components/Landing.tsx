import { MouseEvent, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { smoother } from "./Navbar";
import "./styles/Landing.css";

// The stages are KubePilot's real pipeline, in the order the graph runs them.
const QUERY = "why is checkout-api crashlooping?";

const stages = [
  { name: "route", detail: "intent → rag" },
  { name: "retrieve", detail: "bm25 + dense, rrf k=60" },
  { name: "rerank", detail: "cross-encoder, top 20 → 6" },
  { name: "reflect", detail: "self-rag, re-query below 0.8" },
];

const Landing = () => {
  const root = useRef<HTMLDivElement>(null);

  const scrollTo = (target: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth > 1024 && smoother) {
      e.preventDefault();
      smoother.scrollTo(target, true, "top top");
    }
  };

  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // The query is real text in the markup, so it is present without JS and
      // under reduced motion; the timeline only types over it.
      if (reduced) {
        gsap.set(".trace-stage, .trace-answer", { opacity: 1 });
        gsap.set(".trace-caret", { opacity: 0 });
        return;
      }

      const queryEl = root.current?.querySelector(".trace-query-text");
      if (queryEl) queryEl.textContent = "";

      const tl = gsap.timeline({ delay: 0.35 });

      tl.from(".hero-line", {
        yPercent: 108,
        duration: 1.05,
        stagger: 0.08,
        ease: "power3.out",
      })
        .from(
          ".hero-sub, .hero-actions, .hero-status",
          { opacity: 0, y: 14, duration: 0.7, stagger: 0.08, ease: "power2.out" },
          "-=0.55"
        )
        .from(
          ".trace-panel",
          { opacity: 0, y: 26, duration: 0.9, ease: "power3.out" },
          "-=0.9"
        )
        // Type the query one character at a time, the way the real UI streams.
        .to(
          { i: 0 },
          {
            i: QUERY.length,
            duration: QUERY.length * 0.021,
            ease: "none",
            onUpdate() {
              const n = Math.round(this.progress() * QUERY.length);
              if (queryEl) queryEl.textContent = QUERY.slice(0, n);
            },
          },
          "-=0.35"
        )
        .to(".trace-stage", {
          opacity: 1,
          duration: 0.3,
          stagger: 0.12,
          ease: "power2.out",
        })
        .to(
          ".trace-answer",
          { opacity: 1, duration: 0.5, ease: "power2.out" },
          "+=0.1"
        )
        .to(".trace-caret", { opacity: 0, duration: 0.2 });
    },
    { scope: root }
  );

  return (
    <header className="landing-section" id="landingDiv" ref={root}>
      <div className="shell landing-grid">
        <div className="hero-copy">
          <h1 className="hero-title">
            <span className="hero-mask">
              <span className="hero-line">I build retrieval</span>
            </span>
            <span className="hero-mask">
              <span className="hero-line">and agent systems,</span>
            </span>
            <span className="hero-mask">
              <span className="hero-line">then measure</span>
            </span>
            <span className="hero-mask">
              <span className="hero-line">whether they work.</span>
            </span>
          </h1>

          <p className="hero-sub prose">
            Divyansh Rana. MSc Artificial Intelligence at Salford. Every project
            below ships with a golden set, an evaluation run, and the number it
            moved &mdash; including the one that moved the wrong way.
          </p>

          <div className="hero-actions">
            <a
              href="#work"
              className="btn btn-solid"
              onClick={scrollTo("#work")}
              data-cursor="disable"
            >
              Read the work
            </a>
            <a
              href="#contact"
              className="btn btn-quiet"
              onClick={scrollTo("#contact")}
              data-cursor="disable"
            >
              Get in touch
            </a>
          </div>

          <p className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            Open to AI and ML roles in the UK
          </p>
        </div>

        <figure className="trace-panel" aria-labelledby="trace-cap">
          <div className="trace-bar">
            <span className="mono trace-bar-name">trace</span>
            <span className="mono trace-bar-src">kubepilot</span>
          </div>

          <div className="trace-body">
            <p className="trace-query mono">
              <span className="trace-prompt" aria-hidden="true">
                &gt;
              </span>
              <span className="trace-query-text">{QUERY}</span>
              <span className="trace-caret" aria-hidden="true" />
            </p>

            <ul className="trace-stages">
              {stages.map((s) => (
                <li className="trace-stage mono" key={s.name}>
                  <span className="trace-stage-name">{s.name}</span>
                  <span className="trace-stage-detail">{s.detail}</span>
                </li>
              ))}
            </ul>

            <div className="trace-answer">
              <p>
                Exit code 137 on restart means the container was OOM-killed, not
                crashed by the app. The memory limit is below the working set
                under load.
              </p>
              <p className="trace-cites mono">
                <span>k8s/troubleshooting</span>
                <span>limits-and-requests</span>
              </p>
            </div>
          </div>

          <figcaption className="trace-foot mono" id="trace-cap">
            <span>RAGAS faithfulness</span>
            <span className="trace-delta">
              <span className="trace-before">0.775</span>
              <span className="trace-arrow" aria-hidden="true">
                &rarr;
              </span>
              <span className="trace-after">0.867</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </header>
  );
};

export default Landing;
