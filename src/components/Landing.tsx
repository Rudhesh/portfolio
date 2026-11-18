import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <div className="hero-status-badge">
              <span className="status-ping-dot" />
              <span className="status-ping-text">READY FOR BUILD · GERMANY</span>
            </div>
            <h1>
              {firstName.toUpperCase()}
              {' '}
              <br />
              {lastName && <span className="hero-name-gradient">{lastName.toUpperCase()}</span>}
            </h1>
            <p className="hero-tagline-text">
              Engineering full-stack web applications, analytics dashboards, and Generative AI RAG pipelines with modern rigor.
            </p>
          </div>

          <div className="landing-info">
            <span className="landing-category-tag">// SPECIALIZATION</span>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">AI & Full-Stack</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Software Developer</div>
            </h2>
          </div>

          {/* Bottom Telemetry Bar — Inspired by Porsche Quick Specs */}
          <div className="hero-telemetry-bar">
            <div className="telemetry-item">
              <span className="telemetry-val">4+ YRS</span>
              <span className="telemetry-lbl">ENGINEERING</span>
            </div>
            <div className="telemetry-item border-l">
              <span className="telemetry-val">MERN + PY</span>
              <span className="telemetry-lbl">CORE STACK</span>
            </div>
            <div className="telemetry-item border-l">
              <span className="telemetry-val">RAG + LLM</span>
              <span className="telemetry-lbl">AI SYSTEMS</span>
            </div>
          </div>

          {/* Mobile photo - shows only on mobile when 3D character is hidden */}
          <div className="mobile-photo">
            <img
              src="/images/mypicnbg.png"
              alt={config.developer.fullName}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
