import "./styles/Work.css";
import { projects } from "../data/projects";

const Work = () => (
  <section className="work-section section" id="work">
    <div className="shell">
      <div className="section-head">
        <h2>Selected work</h2>
        <p className="section-note">
          Four systems, each with its evaluation committed alongside the code.
        </p>
      </div>

      <div className="work-list">
        {projects.map((project) => (
          <article className="work-entry" key={project.title}>
            <div className="work-ident">
              <h3>{project.title}</h3>
              <p className="work-kind">{project.kind}</p>
              {project.link && (
                <a
                  className="link work-repo"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View repository
                </a>
              )}
            </div>

            <div className="work-body">
              <p className="work-summary">{project.summary}</p>
              <p className="prose work-detail">{project.detail}</p>

              <dl className="work-metrics">
                {project.metrics.map((m) => (
                  <div className="work-metric" key={m.label}>
                    <dt>{m.label}</dt>
                    <dd className="mono">{m.value}</dd>
                  </div>
                ))}
              </dl>

              <ul className="work-stack">
                {project.stack.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
