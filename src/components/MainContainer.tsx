import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Evidence from "./Evidence";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Practice from "./Practice";
import Work from "./Work";

const MainContainer = () => (
  <div className="container-main">
    <Navbar />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Landing />
        <main>
          <About />
          <Evidence />
          <Work />
          <Practice />
          <Career />
        </main>
        <Contact />
      </div>
    </div>
  </div>
);

export default MainContainer;
