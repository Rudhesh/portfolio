import { Link } from "react-router-dom";
import { config } from "../config";
import "./styles/CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-container">
        <span className="cta-eyebrow">// COLLABORATION &amp; INQUIRIES</span>
        <h2 className="cta-title">READY TO BUILD SOMETHING EXTRAORDINARY?</h2>
        <p className="cta-subtitle">Available for software engineering roles, Generative AI application development, and high-impact projects.</p>
        <div className="cta-buttons">
          <a
            href={config.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn-hire"
            data-cursor="disable"
          >
            <span>CONNECT ON LINKEDIN</span>
            <span className="cta-arrow">↗</span>
          </a>

          <Link to="/play" className="cta-btn cta-btn-play" data-cursor="disable">
            <span>AI AGENT &amp; CHESS</span>
            <span className="cta-arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
