import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma, Electrical Engineering</h4>
                <h5>Uttarakhand Board of Technical Education, Roorkee</h5>
              </div>
              <h3>2019-22</h3>
            </div>
            <p>Graduated with an 8 CGPA.</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, Computer Science Engineering</h4>
                <h5>Veer Madho Singh Bhandari Uttarakhand Technical University</h5>
              </div>
              <h3>2022-25</h3>
            </div>
            <p>
              Built a foundation in software engineering and data structures,
              then moved into machine learning and AI systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MSc Artificial Intelligence</h4>
                <h5>University of Salford</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Focused on agentic AI, retrieval-augmented generation and LLM
              fine-tuning, shipping full-stack production-grade projects
              alongside the coursework.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
