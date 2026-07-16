import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white shadow-lg z-50 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-cyan-400">
          Asad Iqbal
        </h1>

        <ul className="hidden md:flex gap-8 font-medium">
          <li><a href="#home" className="hover:text-cyan-400 transition duration-300 relative group">Home<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span></a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition duration-300 relative group">About<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span></a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition duration-300 relative group">Skills<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span></a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition duration-300 relative group">Projects<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span></a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition duration-300 relative group">Contact<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span></a></li>
        </ul>

        <button
          className="md:hidden text-2xl hover:text-cyan-400 transition duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden bg-slate-800/95 backdrop-blur px-6 py-4 space-y-3 border-t border-cyan-500/20">
          <li><a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition duration-300 block">Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition duration-300 block">About</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition duration-300 block">Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition duration-300 block">Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition duration-300 block">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;