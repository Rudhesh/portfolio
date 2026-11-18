import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { config } from "../config";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    // Disable pinning on mobile to allow scrolling
    if (window.innerWidth <= 768) return;

    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Refresh ScrollTrigger after layout settles
    ScrollTrigger.refresh();

    // Clean up
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header">
          <span className="work-telemetry-tag">// 03 / PRODUCTION CODE &amp; AI WORKFLOWS</span>
          <h2>
            FEATURED <span>PROJECTS</span>
          </h2>
        </div>
        <div className="work-flex">
          {config.projects.slice(0, 5).map((project, index) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <span className="work-num">0{index + 1}</span>

                  <div className="work-title-right">
                    <span className="work-category-badge">{project.category}</span>
                    <h4>{project.title}</h4>
                  </div>
                </div>
                <div className="work-details-block">
                  <span className="work-tools-label">STACK &amp; ARCHITECTURE</span>
                  <p className="work-tools-text">{project.technologies}</p>
                  <p className="work-desc-text">{project.description}</p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-explore-btn"
                    data-cursor="disable"
                  >
                    <span>LAUNCH PROJECT</span>
                    <svg className="work-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>
              <div className="work-image-frame">
                <WorkImage image={project.image} alt={project.title} link={project.link} />
              </div>
            </div>
          ))}
          {/* See All Works Button */}
          <div className="work-box work-box-cta">
            <div className="see-all-works">
              <span className="cta-telemetry-tag">// ARCHIVE &amp; REPOSITORIES</span>
              <h3>Want to see more?</h3>
              <p>Explore all technical projects, GitHub repositories, and interactive applications</p>
              <Link to="/myworks" className="see-all-btn" data-cursor="disable">
                <span>SEE ALL WORKS</span>
                <span className="see-all-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
