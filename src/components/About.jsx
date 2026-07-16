const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 px-6 relative"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8">
          About Me
        </h2>

        <div className="bg-slate-800/50 backdrop-blur border border-cyan-500/20 rounded-lg p-8">
        <p className="text-gray-300 leading-8 text-lg">
          I'm Asad Iqbal, a passionate MERN Stack Developer. I enjoy creating responsive, modern and user-friendly web applications using React, Node.js, Express and MongoDB.
        </p>
        <p className="text-gray-300 leading-8 text-lg mt-4">
          I'm continuously learning new technologies including .NET Core, C#, Java and C++ to become a better software engineer.
        </p>
        </div>

      </div>
    </section>
  );
};

export default About;