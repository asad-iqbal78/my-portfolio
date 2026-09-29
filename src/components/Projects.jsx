import { projects } from "../data/projects";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectArtwork = ({ project }) => {
  if (project.image) {
    return (
      <div className="project-art project-art-image">
        <img className="project-image" src={project.image} alt={`${project.title} dashboard preview`} />
      </div>
    );
  }

  return (
    <div className={`project-art project-art-${project.art}`} aria-hidden="true">
      {project.art === "anpr" && <><span className="art-kicker">VISION SYSTEM / 01</span><span className="art-plate">ANPR <i>·</i> OCR</span><span className="art-foot">DETECT · RECOGNIZE</span></>}
      {project.art === "mifra" && <><span className="art-kicker">BUSINESS PLATFORM</span><span className="art-title">MIFRA<br />ENTERPRISES</span><span className="art-foot">API · AUTH · FIRESTORE</span></>}
      {project.art === "sports" && <><span className="art-kicker">BIIT SPORTS SOCIETY</span><span className="art-score"><b>LIVE</b><i>TOURNAMENT<br />&amp; SCORING</i></span><span className="art-foot">MULTI-SPORT PLATFORM</span></>}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section section-tint">
      <div className="section-wrap">
        <div className="section-heading section-heading-center">
          <p className="eyebrow">Selected work</p>
          <h2>Projects built to solve real problems</h2>
          <p className="section-intro">A selection across AI, backend engineering, and full-stack development.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <ProjectArtwork project={project} />
              <div className="project-content">
                <p className="project-subtitle">{project.subtitle}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="technology-tags" aria-label="Technologies">
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <details className="project-details">
                  <summary>Project details</summary>
                  <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </details>
                {project.links.length > 0 && (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a href={link.url} key={link.url} target="_blank" rel="noreferrer">
                        {link.label} <FaArrowUpRightFromSquare aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;