const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-8 text-center border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-gray-400 mb-4">
          © {currentYear} Asad Iqbal. All rights reserved.
        </p>
        
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="https://github.com/asad-iqbal78" className="text-gray-400 hover:text-cyan-400 transition duration-300 font-semibold">
            GitHub
          </a>
          <a href="https://linkedin.com/in/asadiqbal" className="text-gray-400 hover:text-cyan-400 transition duration-300 font-semibold">
            LinkedIn
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-cyan-400 transition duration-300 font-semibold">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
