import "./styles/Career.css";

const entries = [
  {
    period: "Now",
    title: "MSc Artificial Intelligence",
    place: "University of Salford",
    note: "Current. Alongside it, the four systems above.",
  },
  {
    period: "2022–2025",
    title: "BTech Computer Science Engineering",
    place: "Veer Madho Singh Bhandari Uttarakhand Technical University",
    note: "Where the software engineering foundation came from.",
  },
  {
    period: "2024",
    title: "Google Advanced Data Analytics Certificate",
    place: "Eight-course professional certificate",
    note: "Statistics, regression and machine learning in Python.",
  },
  {
    period: "2019–2022",
    title: "Diploma in Electrical Engineering",
    place: "Uttarakhand Board of Technical Education, Roorkee",
    note: "Graduated with an 8 CGPA.",
  },
];

const Career = () => (
  <section className="career-section section" id="career">
    <div className="shell">
      <div className="section-head">
        <h2>Background</h2>
        <p className="section-note">
          An unusual route in: power systems first, software second, AI last.
        </p>
      </div>

      <ol className="career-list">
        {entries.map((e) => (
          <li className="career-entry" key={e.title}>
            <p className="career-period mono">{e.period}</p>
            <div className="career-detail">
              <h3>{e.title}</h3>
              <p className="career-place">{e.place}</p>
              <p className="career-note">{e.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Career;
