import Reveal from "./Reveal.jsx";
import { socialLinks } from "../data/portfolio.js";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path
        d="M4.5 15.5 15 5M6 5h9v9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <Reveal>
            <p className="hero-eyebrow">
              <span className="status-dot" /> COMPUTER SCIENCE UNDERGRADUATE{" "}
              <span className="eyebrow-divider">/</span> FULL-STACK DEVELOPER
            </p>
            <h1>
              Oneli
              <br />
              <span className="hero-title-accent">Premarathne</span>
            </h1>{" "}
            <p className="hero-description">
              I'm a computer science undergraduate and aspiring full-stack
              developer who enjoys turning ideas into thoughtful digital
              experiences and building applications that solve real problems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowIcon />
              </a>
              <a className="button button-quiet" href="#contact">
                Get in touch <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-socials" aria-label="Social links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-visual-wrap" delay={140}>
          <div
            className="hero-visual"
            aria-label="Portrait of Oneli Premarathne"
          >
            <div className="hero-visual-grid" aria-hidden="true" />
            <div className="portrait-frame">
              <img
                src="/images/profile.jpeg"
                alt="Oneli Premarathne"
                fetchPriority="high"
              />
            </div>
            <div className="portrait-label">
              <span className="portrait-label-dot" /> LEARNING. BUILDING.
              REPEATING.
            </div>
            <div
              className="floating-note floating-note-code"
              aria-hidden="true"
            >
              <span className="code-line">
                <i>const</i> goal =
              </span>
              <span className="code-line code-indent">'make it useful';</span>
              <span className="code-line code-comment">// always learning</span>
            </div>
            <div
              className="floating-note floating-note-stack"
              aria-hidden="true"
            >
              <span className="stack-symbol">✳</span>
              <span>
                <strong>Curiosity</strong>
                <small>drives the process</small>
              </span>
            </div>
            <span className="hero-visual-index" aria-hidden="true">
              01 <span>/</span> 05
            </span>
          </div>
        </Reveal>
      </div>
      <div className="container hero-bottomline">
        <span className="scroll-cue">
          <span className="scroll-cue-line" /> SCROLL TO EXPLORE
        </span>
        <span className="hero-bottom-note">
          A little bit of logic. A little bit of creativity.
        </span>
      </div>
    </section>
  );
}
