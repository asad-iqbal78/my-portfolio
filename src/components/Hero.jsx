import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaArrowRight, FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="hero section-wrap">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Software Engineering Graduate</p>
        <h1>Asad Iqbal</h1>
        <p className="hero-role">Full-Stack &amp; Backend Developer<br />AI &amp; Computer Vision</p>
        <p className="hero-description">
          I build modern web applications, backend APIs, and AI-powered solutions using React, ASP.NET Core, FastAPI, Node.js, Python, and modern AI technologies.
        </p>
        <p className="hero-location"><FaMapMarkerAlt aria-hidden="true" /> Rawalpindi, Pakistan</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View Projects <FaArrowRight aria-hidden="true" /></a>
          <a className="button button-outline" href="/CV.pdf" download="Asad-Iqbal-Resume.pdf"><FaDownload aria-hidden="true" /> Download Resume</a>
        </div>
        <div className="social-links" aria-label="Social links">
          <a href="https://github.com/asad-iqbal78" target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /> GitHub</a>
          <a href="https://linkedin.com/in/asad-iqbal-637268272" target="_blank" rel="noreferrer"><FaLinkedin aria-hidden="true" /> LinkedIn</a>
          <a href="mailto:iasad0235@gmail.com"><FaEnvelope aria-hidden="true" /> Email</a>
        </div>
      </div>
      <div className="hero-portrait-wrap">
        <div className="portrait-frame">
          <img src="/images/profile1.png" alt="Portrait of Asad Iqbal" className="hero-portrait" />
        </div>
        <p className="portrait-caption"><span>Building thoughtful software</span><span>Web · Backend · AI</span></p>
      </div>
    </section>
  );
};

export default Hero;