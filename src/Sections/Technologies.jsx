import React, { useRef, useState, useCallback, useEffect } from 'react';
import { RiReactjsLine, RiJavascriptFill } from "react-icons/ri";
import { FaNodeJs, FaJava, FaBrain, FaCloud, FaDocker, FaAws, FaPython } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiTailwindcss,SiGit } from "react-icons/si";

const techStack = [
  { Icon: RiJavascriptFill, color: "text-yellow-400", name: "JavaScript" },
  { Icon: FaNodeJs, color: "text-green-500", name: "Node.js" },
  { Icon: BiLogoMongodb, color: "text-green-600", name: "MongoDB" },
  { Icon: SiExpress, color: "text-gray-300", name: "Express" },
  { Icon: RiReactjsLine, color: "text-cyan-400", name: "React" },
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
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile on component mount
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Throttle mousemove event (desktop only)
  const handleMouseMove = useCallback((e) => {
    if (isMobile || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  }, [isMobile]);

  // Desktop-only background style
  const backgroundStyle = !isMobile ? {
    background: `radial-gradient(500px circle at ${mousePosition.x}% ${mousePosition.y}%, 
      rgba(255, 255, 255, 0.25) 0%, 
      rgba(6, 182, 212, 0.08) 35%, 
      rgba(168, 85, 247, 0.05) 50%, 
      transparent 60%)`
  } : {};

  return (
    <section id="skills" className="bg-black w-full py-16 md:py-24 relative overflow-hidden">
      {/* Simplified background - reduced complexity for mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black to-black/10 opacity-20" />
      {!isMobile && (
        <>
          <div className="absolute top-10 left-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        </>
      )}
      
      <div className="max-w-7xl mx-auto relative z-1 px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">
            Technical Skills
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I constantly try to improve my skills and knowledge in cutting-edge technologies
          </p>
        </div>

        {/* Tech Grid */}
        <div 
          ref={containerRef}
          className="relative"
          onMouseMove={!isMobile ? handleMouseMove : undefined}
          style={backgroundStyle}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 py-4 md:py-8">
            {techStack.map(({ Icon, color, name }, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center justify-center p-4 md:p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-gray-800/50 
                  ${isMobile 
                    ? 'active:bg-white/5 active:border-white/30 active:scale-95' 
                    : 'transition-all duration-300 hover:duration-200 hover:bg-white/5 hover:border-white/30 hover:shadow-lg hover:shadow-white/10 hover:-translate-y-1'
                  }`}
                style={isMobile ? {
                  // Simplified styles for mobile
                  willChange: 'auto',
                  animation: `fadeInUp 0.6s ease-out ${index * 0.03}s both`
                } : { 
                  willChange: 'transform, box-shadow',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  animation: `fadeInUp 0.8s ease-out ${index * 0.05}s both`
                }}
              >
                <div className="relative z-10 flex flex-col items-center">
                  <Icon 
                    className={`text-5xl md:text-6xl ${color} ${
                      isMobile ? '' : 'transition-transform duration-300 hover:scale-110'
                    }`} 
                    style={isMobile ? {
                      willChange: 'auto'
                    } : {
                      willChange: 'transform',
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden'
                    }}
                  />
                  <span className="mt-2 text-xs md:text-sm text-center text-gray-300">
                    {name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          /* Disable hardware acceleration properties that can cause lag */
          .backdrop-blur-sm {
            backdrop-filter: none !important;
          }
          
          /* Reduce animation complexity */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          /* Optimize for touch devices */
          * {
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
        }
        
        /* Optimize animations for mobile and reduced motion */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default React.memo(Technologies);