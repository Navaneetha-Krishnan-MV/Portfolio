import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const Navb = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Logo Fixed on Top-Left */}
      <div className="fixed top-6 left-12 z-[100]">
        <img 
          src="/images/NK-Logo.png" 
          alt="NK Logo"
          width={75}
          height={75}
          className="object-contain hover:scale-110 transition-transform duration-200"
        />
      </div>

      {/* Header only for large screens */}
      <header
        id="top"
        style={{
          boxShadow:
            "0px 0px 20px rgba(0, 30, 102, 0.8), inset 0px 0px 15px rgba(0, 30, 102, 0.6)",
          animation: "liquidFlow 3s infinite alternate ease-in-out",
        }}
        className="hidden lg:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[70%] max-w-6xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/20 rounded-2xl py-3 px-6 justify-between items-center"
      >
        <style>
          {`
            @keyframes liquidFlow {
              0% {
                box-shadow: 0px 0px 20px rgba(0, 30, 102, 0.8), inset 0px 0px 15px rgba(0, 30, 102, 0.6);
              }
              50% {
                box-shadow: 0px 0px 30px rgba(0, 30, 102, 1), inset 0px 0px 25px rgba(0, 30, 102, 0.8);
              }
              100% {
                box-shadow: 0px 0px 20px rgba(0, 30, 102, 0.8), inset 0px 0px 15px rgba(0, 30, 102, 0.6);
              }
            }
          `}
        </style>

        {/* Logo/Name */}
        <a
          href="#top"
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 cursor-pointer"
        >
          Navaneethakrishnan M V
        </a>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <a href="#home" className="text-gray-200 hover:text-pink-400 transition-transform transform hover:scale-110 duration-200">Home</a>
          <a href="#about" className="text-gray-200 hover:text-pink-400 transition-transform transform hover:scale-110 duration-200">About</a>
          <a href="#projects" className="text-gray-200 hover:text-pink-400 transition-transform transform hover:scale-110 duration-200">Projects</a>
          <a href="#skills" className="text-gray-200 hover:text-pink-400 transition-transform transform hover:scale-110 duration-200">Skills</a>
          <a href="#achievements" className="text-gray-200 hover:text-pink-400 transition-transform transform hover:scale-110 duration-200">Achievements</a>
          <a href="#contact" className="text-gray-200 hover:text-pink-400 transition-transform transform hover:scale-110 duration-200">Contact</a>
        </nav>
      </header>

      {/* Resume Button - Fixed on Top-Right */}
      <div className="fixed top-6 right-6 z-[100] flex items-center space-x-4">
        <a 
          href="/Navaneethakrishnan M V-Resume.pdf" 
          download="Navaneethakrishnan_Resume.pdf"
          className="hidden md:flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-purple-700 hover:to-pink-700"
        >
          <Download className="mr-2 h-4 w-4" />
          Resume
        </a>
        
        {/* Small Device Menu Icon */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden text-gray-200 bg-black/30 p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Small Device Navigation Menu */}
      {isOpen && (
        <nav className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] bg-gradient-to-br from-black via-gray-900 to-black text-white backdrop-blur-2xl shadow-2xl border border-white/20 rounded-2xl py-6 px-4 flex flex-col space-y-6 items-center animate-fadeIn z-40 lg:hidden">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-pink-400 transition-transform transform hover:scale-110 duration-200">About</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-pink-400 transition-transform transform hover:scale-110 duration-200">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-pink-400 transition-transform transform hover:scale-110 duration-200">Contact</a>
          <a href="#achievements" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-pink-400 transition-transform transform hover:scale-110 duration-200">Achievements</a>
          <a href="/Navaneethakrishnan M V-Resume.pdf" onClick={() => setIsOpen(false)} download="Navaneethakrishnan_Resume.pdf" className="text-gray-200 hover:text-pink-400 transition-transform transform hover:scale-110 duration-200">Resume</a>
        </nav>
      )}
    </>
  );
};

export default Navb;
