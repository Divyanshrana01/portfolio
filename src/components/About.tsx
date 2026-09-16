import "./styles/About.css";

const About = () => (
  <section className="about-section section" id="about">
    <div className="shell">
      <div className="section-head">
        <h2>How I work</h2>
        <p className="section-note">
          Written for engineers who will read the repo before they read the CV.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-main">
          <p className="prose">
            I came to AI through an electrical engineering diploma and a
            computer science degree, and almost everything I can actually do
            came from building systems end to end rather than from coursework.
            I&rsquo;m finishing an MSc in Artificial Intelligence at the
            University of Salford.
          </p>
          <p className="prose">
            The part most LLM projects skip is knowing whether the thing got
            better. So I build the evaluation first: a golden set, a baseline
            run, then one change at a time. It is slower, and it is the only
            reason I can put a number next to any claim on this page.
          </p>
          <p className="prose">
            That cuts both ways. On MedScript-AI, five rounds of preference
            tuning left the model measurably less safe than the checkpoint it
            was meant to improve, 0.65 against 0.875. I shipped the earlier
            model, wrote up the three failure modes I could identify, and
            rebuilt the eval set to remove the leakage that had been flattering
            the scores.
          </p>
        </div>

        <aside className="about-side">
          <dl className="fact-list">
            <div className="fact">
              <dt>Based in</dt>
              <dd>
                United Kingdom
                <span className="fact-note">
                  Student visa, eligible for the Graduate Route
                </span>
              </dd>
            </div>
            <div className="fact">
              <dt>Working on</dt>
              <dd>
                Agentic retrieval systems
                <span className="fact-note">
                  LangGraph, hybrid search, evaluation harnesses
                </span>
              </dd>
            </div>
            <div className="fact">
              <dt>Looking for</dt>
              <dd>
                AI and ML engineering roles
                <span className="fact-note">Graduate or junior, UK-based</span>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  </section>
);

export default About;
