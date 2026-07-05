import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.id}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-5">
                  {project.description}
                </p>

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    className="bg-cyan-500 px-4 py-2 rounded"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="border border-cyan-500 px-4 py-2 rounded"
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