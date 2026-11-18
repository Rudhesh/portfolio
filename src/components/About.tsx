import "./styles/About.css";
import { config } from "../config";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <span className="about-telemetry-tag">01 / BIOGRAPHY &amp; CAPABILITIES</span>
        <h3 className="title">{config.about.title}</h3>
        <p className="para">
          {config.about.description}
        </p>
        <div className="about-meta-pills">
          <span className="about-pill">BASED IN GERMANY</span>
          <span className="about-dot">·</span>
          <span className="about-pill">FULL-STACK &amp; RAG</span>
          <span className="about-dot">·</span>
          <span className="about-pill">DCI BERLIN ALUMNUS</span>
        </div>
      </div>
    </div>
  );
};

export default About;
