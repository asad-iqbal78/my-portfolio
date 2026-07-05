const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-cyan-400 text-xl mb-2">Hello, I'm</p>

          <h1 className="text-5xl font-bold mb-4">
            Asad Iqbal
          </h1>

          <h2 className="text-2xl text-gray-300 mb-6">
            MERN Stack Developer
          </h2>

          <p className="text-gray-400 leading-8 mb-8">
            Passionate MERN Stack developer currently learning
            .NET Core, C#, Java and C++. I love building
            modern, responsive and user-friendly web applications.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600"
            >
              View Projects
            </a>

            <a
              href="/cv.pdf"
              className="border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/profile.jpeg"
            alt="Profile"
            className="w-80 rounded-full border-4 border-cyan-500"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;