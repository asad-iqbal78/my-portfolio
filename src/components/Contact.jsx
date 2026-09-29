import { FaEnvelope, FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-wrap contact-layout">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s Build Something Together</h2>
          <p className="contact-copy">I&apos;m open to opportunities in software development, backend engineering, full-stack development, and AI.</p>
        </div>
        <div className="contact-links">
          <a href="mailto:iasad0235@gmail.com"><FaEnvelope aria-hidden="true" /><span><small>Email</small>iasad0235@gmail.com</span><FaExternalLinkAlt className="contact-arrow" aria-hidden="true" /></a>
          <a href="https://linkedin.com/in/asad-iqbal-637268272" target="_blank" rel="noreferrer"><FaLinkedin aria-hidden="true" /><span><small>LinkedIn</small>Connect with me</span><FaExternalLinkAlt className="contact-arrow" aria-hidden="true" /></a>
          <a href="https://github.com/asad-iqbal78" target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /><span><small>GitHub</small>See my code</span><FaExternalLinkAlt className="contact-arrow" aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;