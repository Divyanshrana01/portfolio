import "./styles/Evidence.css";

interface Row {
  system: string;
  measure: string;
  before: string;
  after: string;
  set: string;
  regression?: boolean;
}

// Every figure here is one Divyansh has published in the repo it came from.
const rows: Row[] = [
  {
    system: "KubePilot",
    measure: "RAGAS faithfulness",
    before: "0.775",
    after: "0.867",
    set: "31-question golden set",
  },
  {
    system: "KubePilot",
    measure: "Context precision",
    before: "0.370",
    after: "0.465",
    set: "same run, after HyDE and CRAG",
  },
  {
    system: "DeepEquity",
    measure: "Retrieval precision@5",
    before: "0.700",
    after: "0.864",
    set: "22-query golden set",
  },
  {
    system: "DeepEquity",
    measure: "nDCG",
    before: "0.714",
    after: "0.845",
    set: "hybrid search plus reranking",
  },
  {
    system: "MedScript-AI",
    measure: "Preference-tuned safety",
    before: "0.875",
    after: "0.650",
    set: "five DPO rounds, shipped the baseline",
    regression: true,
  },
];

const Evidence = () => (
  <section className="evidence-section section" id="evidence">
    <div className="shell">
      <div className="section-head">
        <h2>What the numbers say</h2>
        <p className="section-note">
          Each row is a measured run against a fixed question set, not an
          estimate.
        </p>
      </div>

      <table className="evidence-table">
        <thead>
          <tr>
            <th scope="col">System</th>
            <th scope="col">Measure</th>
            <th scope="col" className="num">
              Baseline
            </th>
            <th scope="col" className="num">
              Result
            </th>
            <th scope="col">How it was measured</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr
              key={`${r.system}-${r.measure}`}
              className={r.regression ? "is-regression" : undefined}
            >
              <td data-label="System" className="ev-system">
                {r.system}
              </td>
              <td data-label="Measure">{r.measure}</td>
              <td data-label="Baseline" className="num mono ev-before">
                {r.before}
              </td>
              <td data-label="Result" className="num mono ev-after">
                {r.after}
              </td>
              <td data-label="How it was measured" className="ev-set">
                {r.set}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="evidence-note">
        The last row is a regression. Five rounds of preference tuning made the
        model less safe than the checkpoint they were meant to improve, so the
        earlier model is the one that shipped.
      </p>
    </div>
  </section>
);

export default Evidence;
