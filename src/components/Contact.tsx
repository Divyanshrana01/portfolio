import "./styles/Contact.css";

const Contact = () => (
  <footer className="contact-section" id="contact">
    <div className="shell contact-inner">
      <div className="contact-lead">
        <h2>
          If you are hiring for retrieval, agents or evaluation, I would like to
          talk.
        </h2>
        <a className="contact-email" href="mailto:divyanshr141@gmail.com">
          divyanshr141@gmail.com
        </a>
      </div>

      <div className="contact-meta">
        <div className="contact-block">
          <h3>Elsewhere</h3>
          <ul>
            <li>
              <a
                href="https://github.com/Divyanshrana01"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/divyanshrana991"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-block">
          <h3>Availability</h3>
          <p>
            Open to AI and ML engineering roles in the UK. Student visa, and
            eligible for the Graduate Route.
          </p>
        </div>
      </div>

      <p className="contact-fine">
        <span>Divyansh Rana</span>
        <span>Built and designed in the open</span>
      </p>
    </div>
  </footer>
);

export default Contact;
