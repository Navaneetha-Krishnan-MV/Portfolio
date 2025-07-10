import React, { useRef, useState } from 'react';
import { RiReactjsLine, RiJavascriptFill } from "react-icons/ri";
import { FaNodeJs, FaJava, FaBrain, FaCloud, FaDocker, FaAws, FaPython } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiTailwindcss, SiNextdotjs, SiGit } from "react-icons/si";

const techStack = [
  { Icon: RiJavascriptFill, color: "text-yellow-400", name: "JavaScript" },
  { Icon: FaNodeJs, color: "text-green-500", name: "Node.js" },
  { Icon: BiLogoMongodb, color: "text-green-600", name: "MongoDB" },
  { Icon: SiExpress, color: "text-gray-300", name: "Express" },
  { Icon: RiReactjsLine, color: "text-cyan-400", name: "React" },
  { Icon: SiNextdotjs, color: "text-white", name: "Next.js" },
  { Icon: SiTailwindcss, color: "text-cyan-400", name: "Tailwind CSS" },
  { Icon: FaPython, color: "text-blue-500", name: "Python" },
  { Icon: FaJava, color: "text-orange-600", name: "Java" },
  { Icon: FaAws, color: "text-yellow-500", name: "AWS" },
  { Icon: FaDocker, color: "text-blue-400", name: "Docker" },
  { Icon: SiGit, color: "text-orange-600", name: "Git" },
  { Icon: FaBrain, color: "text-teal-500", name: "AI/ML" },
  { Icon: FaCloud, color: "text-blue-300", name: "Cloud Computing" },
  { Icon: BiLogoPostgresql, color: "text-sky-700", name: "PostgreSQL" },
];

const Technologies = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  return (
    <section id="skills" className="bg-black  w-full py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black to-black/10 opacity-20" />
      <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-7xl mx-auto relative z-1">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I constantly try to improve my skills and knowledge in cutting-edge technologies
          </p>
        </div>

        {/* Tech Grid with Mouse Tracking */}
        <div 
          ref={containerRef}
          className="relative px-8"
          onMouseMove={handleMouseMove}
          style={{
            background: `radial-gradient(500px circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(255, 255, 255, 0.15) 0%, 
              rgba(6, 182, 212, 0.12) 25%, 
              rgba(168, 85, 247, 0.08) 40%, 
              transparent 60%)`
          }}
        >
          {/* Intense Mouse Following Spotlight */}
          <div 
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(350px circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(255, 255, 255, 0.08) 0%, 
                rgba(255, 255, 255, 0.04) 30%, 
                rgba(6, 182, 212, 0.06) 50%, 
                transparent 70%)`
            }}
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 py-12">
            {techStack.map(({ Icon, color, name }, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-gray-800/50 transition-all duration-500 hover:duration-200 hover:bg-white/10 hover:border-white/40 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-2 hover:scale-105"
                style={{ 
                  animation: `fadeInUp 0.8s ease-out ${index * 0.08}s both`,
                }}
              >
                {/* Intense Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/30 via-cyan-400/25 to-white/30 p-[1px]">
                  <div className="w-full h-full rounded-2xl bg-black/90"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <Icon className={`text-6xl ${color} transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-lg filter group-hover:brightness-125 group-hover:saturate-110`} />
                  <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-white text-sm font-medium whitespace-nowrap bg-black/90 px-3 py-1 rounded-lg ">
                    {name}
                  </span>
                </div>

                {/* Intense Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/10 via-cyan-400/8 to-white/10 blur-xl"></div>
                
                {/* Additional White Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-white/5 blur-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Technologies;