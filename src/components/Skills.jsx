import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-12 text-center">
          My Skills
        </h2>

        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-cyan-300 mb-6 capitalize px-2 border-l-4 border-cyan-400">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillList.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800 to-slate-700/50 p-4 rounded-lg text-center border border-cyan-500/20 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300 transform hover:scale-105"
                >
                  <h3 className="font-semibold text-white hover:text-cyan-400 transition duration-300">
                    {skill}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;