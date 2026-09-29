import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-inner">
        <div>
          <a className="footer-name" href="#home">Asad Iqbal</a>
          <p>Full-Stack &amp; Backend Developer | AI &amp; Computer Vision</p>
        </div>
        <div className="footer-right">
          <div className="footer-socials">
            <a href="https://github.com/asad-iqbal78" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com/in/asad-iqbal-637268272" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:iasad0235@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </div>
          <p className="copyright">© {currentYear} Asad Iqbal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
