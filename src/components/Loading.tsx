import { useEffect, useRef, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import { config } from "../config";
import gsap from "gsap";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [displayPercent, setDisplayPercent] = useState(0);
  const hasTriggered = useRef(false);

  const screenRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);

  // Smooth display percent counter
  useEffect(() => {
    const target = Math.min(percent, 100);
    if (target <= displayPercent) return;
    const step = Math.ceil((target - displayPercent) / 4);
    const timer = setTimeout(() => {
      setDisplayPercent((prev) => Math.min(prev + step, target));
    }, 16);
    return () => clearTimeout(timer);
  }, [percent, displayPercent]);

  // Trigger GSAP welcome sequence when loading hits 100
  useEffect(() => {
    if (displayPercent >= 100 && !hasTriggered.current) {
      hasTriggered.current = true;
      const tl = gsap.timeline();

      // 1. Briefly pause at 100%
      tl.to({}, { duration: 0.5 });

      // 2. Fade out percent counter, status tag, and progress bar
      tl.to(
        [percentRef.current, statusRef.current, progressBarRef.current?.parentElement],
        {
          opacity: 0,
          y: -40,
          duration: 0.6,
          ease: "power2.in",
          stagger: 0.08,
        }
      );

      // 3. Reveal WELCOME text
      tl.set(welcomeRef.current, { display: "block" });
      tl.fromTo(
        welcomeRef.current,
        { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
        }
      );

      // 4. Hold WELCOME briefly
      tl.to({}, { duration: 0.7 });

      // 5. Slide entire screen upward out of view
      tl.to(screenRef.current, {
        y: "-100%",
        duration: 1.1,
        ease: "power4.inOut",
        onComplete: () => {
          import("./utils/initialFX").then((module) => {
            if (module.initialFX) {
              module.initialFX();
            }
            setIsLoading(false);
          });
        },
      });

      // Fade header out near end
      tl.to(
        headerRef.current,
        { opacity: 0, duration: 0.4 },
        "-=1.0"
      );
    }
  }, [displayPercent]);

  const getStatusText = () => {
    if (displayPercent < 20) return "INITIALIZING SYSTEMS";
    if (displayPercent < 50) return "LOADING 3D ASSETS";
    if (displayPercent < 80) return "CALIBRATING RENDERER";
    if (displayPercent < 100) return "FINALIZING";
    return "READY";
  };

  return (
    <div className="ldr-screen" ref={screenRef}>
      {/* Top header bar */}
      <div className="ldr-header" ref={headerRef}>
        <span className="ldr-brand">
          {config.developer.fullName.toUpperCase()}
        </span>
        <span className="ldr-year">PORTFOLIO {new Date().getFullYear()}</span>
      </div>

      {/* Ambient glow */}
      <div className="ldr-ambient" ref={ambientRef} />

      {/* Center content */}
      <div className="ldr-center">
        {/* Status tag */}
        <div className="ldr-status" ref={statusRef}>
          <span className="ldr-status-dot" />
          {getStatusText()}
        </div>

        {/* Large percent counter */}
        <div className="ldr-percent" ref={percentRef}>
          <span className="ldr-percent-num">{displayPercent}</span>
          <span className="ldr-percent-sign">%</span>
        </div>

        {/* WELCOME text, revealed after loading completes */}
        <div className="ldr-welcome" ref={welcomeRef}>
          WELCOME
        </div>
      </div>

      {/* Bottom progress bar */}
      <div className="ldr-bar-track">
        <div
          className="ldr-bar-fill"
          ref={progressBarRef}
          style={{ width: `${displayPercent}%` }}
        />
      </div>

      {/* Bottom label */}
      <div className="ldr-footer">
        <span>FULL-STACK · AI ENGINEER · GERMANY</span>
        <span>{displayPercent < 100 ? "LOADING..." : "COMPLETE"}</span>
      </div>
    </div>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
