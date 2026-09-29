import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section-wrap">
        <div className="section-heading section-heading-center">
          <p className="eyebrow">Technical toolkit</p>
          <h2>Skills &amp; technologies</h2>
          <p className="section-intro">Tools I&apos;ve used across web development, backend systems, and applied AI.</p>
        </div>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <section className="skill-group" key={category} aria-label={category}>
              <h3>{category}</h3>
              <ul className="skill-tags">
                {skillList.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;