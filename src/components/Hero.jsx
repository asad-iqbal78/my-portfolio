const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 text-white flex items-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">

        <div className="space-y-6">
          <p className="text-cyan-400 text-xl mb-2 animate-pulse">Hello, I'm</p>

          <h1 className="text-6xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Asad Iqbal
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-semibold">
            MERN Stack Developer
          </h2>

          <p className="text-gray-300 leading-8 mb-8 text-lg">
            Passionate MERN Stack developer currently learning .NET Core, C#, Java and C++. I love building modern, responsive and user-friendly web applications.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition duration-300 font-semibold"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border-2 border-cyan-500 px-8 py-3 rounded-lg hover:bg-cyan-500/10 transition duration-300 font-semibold"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/profile.jpeg"
            alt="Asad Iqbal"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-500 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/75 transition duration-300 animate-float"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;