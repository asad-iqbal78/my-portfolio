import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl text-center hover:bg-cyan-600 transition"
            >
              <h3 className="font-semibold">
                {skill}
              </h3>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;