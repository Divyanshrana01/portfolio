import { PropsWithChildren, MouseEvent } from "react";
import { smoother } from "./Navbar";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const scrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth > 1024 && smoother) {
      e.preventDefault();
      smoother.scrollTo("#contact", true, "top top");
    }
  };
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              DIVYANSH
              <br />
              <span>RANA</span>
            </h1>
            <a
              className="landing-badge"
              href="#contact"
              onClick={scrollToContact}
              data-cursor="disable"
            >
              <span className="badge-dot"></span>
              Open to AI &amp; ML roles
            </a>
          </div>
          <div className="landing-info">
            <h3>An aspiring</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">AI Engineer</div>
              <div className="landing-h2-2">ML Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">ML Engineer</div>
              <div className="landing-h2-info-1">AI Engineer</div>
            </h2>
          </div>
        </div>
        <div className="landing-scroll-hint" aria-hidden="true">
          <span>SCROLL</span>
          <div className="scroll-line"></div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
