const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-slate-950 via-blue-950/20 to-slate-950 text-white py-20 px-6 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
          Get In Touch
        </h2>

        <p className="text-gray-300 text-lg mb-12">
          Have a project in mind? Let's connect and create something amazing!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Email</h3>
            <a href="mailto:asad@example.com" className="text-gray-300 hover:text-cyan-400 transition duration-300 break-all">
              iasad0235@gmail.com
            </a>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-700/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Phone</h3>
            <a href="tel:+923231569196" className="text-gray-300 hover:text-cyan-400 transition duration-300">
              +92 323 1569196
            </a>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-700/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/asad-iqbal-637268272/" className="text-gray-300 hover:text-cyan-400 transition duration-300">
              View Profile
            </a>
          </div>
        </div>

        <form className="max-w-2xl mx-auto bg-gradient-to-br from-slate-800 to-slate-700/50 p-8 rounded-lg border border-cyan-500/20">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-500 transition duration-300"
            />
          </div>

          <div className="mb-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-500 transition duration-300"
            />
          </div>

          <div className="mb-6">
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-500 transition duration-300 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;