import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.title}
              className="bg-gradient-to-br from-slate-800 to-slate-700/50 rounded-xl overflow-hidden shadow-lg border border-cyan-500/20 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/30 transition duration-300 transform hover:scale-105 flex flex-col"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-40 sm:h-48 w-full object-cover hover:scale-110 transition duration-300"
              />

              <div className="p-6 flex-1 flex flex-col">

                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-cyan-400">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition duration-300 text-center"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="flex-1 border-2 border-cyan-500 px-4 py-2 rounded font-semibold hover:bg-cyan-500/10 transition duration-300 text-center"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;