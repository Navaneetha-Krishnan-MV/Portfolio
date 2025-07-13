import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Code, Wrench } from 'lucide-react';

// Enhanced Badge component with better styling
const Badge = ({ children, className = "", variant = "default", isMobile = false }) => {
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
  const mobileClasses = "bg-gray-800/60 border border-gray-600/40 text-gray-400";
  const desktopClasses = variant === "outline" 
    ? "border border-cyan-400/30 text-cyan-300 bg-black/20 backdrop-blur-sm" 
    : "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-200 backdrop-blur-sm";
  
  return (
    <span className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses} ${className}`}>
      {children}
    </span>
  );
};

const experiences = [
  {
    id: '1',
    company: 'Cisco',
    role: 'Intern',
    duration: 'May 2024 – July 2024',
    description: [
      'Get free access to Networking Essentials course',
      'Simulated 8 levels of real-world network topologies to visualize packet flow using ARP, MAC tables, routing, and OSPF.',
    ],
    techStack: ['Cisco Packet Tracer'],
    icon: Briefcase,
    color: 'cyan'
  },
  {
    id: '2',
    company: 'GS Co ltd',
    role: 'SDE Intern',
    duration: 'Oct 2024 – Nov 2024',
    description: [
      'Worked remotely to convert a C program to Python for signal processing automation using ML. Applied FFT instead of FIR for better model training.',
      'Processed different signal types and visualized results using Matplotlib. Developed dynamic code to trim incoming signals based on variability.',
      'Gained hands-on experience in ML, signal processing, and remote work culture.',
    ],
    techStack: ['Machine Learning', 'Python', 'Matplotlib', 'Signal Processing'],
    icon: Code,
    color: 'purple'
  },
  {
    id: '3',
    company: 'StudAi',
    role: 'Backend Developer',
    duration: 'Feb 2025 – May 2025',
    description: [
      'Implemented a daily streak tracking system to encourage consistent learning',
      'Helped build a reward points module that motivates users to hit milestones'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Laravel', 'MySQL', 'Git'],
    icon: Wrench,
    color: 'cyan'
  }
];

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const [highlightedCard, setHighlightedCard] = useState(null);
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Only enable scroll effects on desktop
    if (isMobile) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      
      // Enhanced scroll progress calculation
      const scrollProgress = Math.max(0, Math.min(1, 
        (viewportHeight * 0.7 - sectionTop) / (sectionHeight * 0.8)
      ));
      
      setScrollProgress(scrollProgress);
      
      // Calculate timeline height more smoothly
      if (timelineRef.current) {
        const maxHeight = sectionHeight * 0.8;
        const targetHeight = scrollProgress * maxHeight;
        setTimelineHeight(targetHeight);
      }

      // Enhanced card highlighting logic
      const cards = sectionRef.current.querySelectorAll('[data-experience-id]');
      let closestCard = null;
      let minDistance = Infinity;
      
      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardId = card.getAttribute('data-experience-id');
        
        if (cardRect.top < viewportHeight * 0.8 && cardRect.bottom > viewportHeight * 0.2 && cardId) {
          const cardCenter = cardRect.top + cardRect.height / 2;
          const viewportCenter = viewportHeight / 2;
          const distance = Math.abs(cardCenter - viewportCenter);
          
          if (distance < minDistance) {
            minDistance = distance;
            closestCard = cardId;
          }
        }
      });
      
      if (closestCard !== highlightedCard) {
        setHighlightedCard(closestCard);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [highlightedCard, isMobile]);

  const getColorClasses = (experience, isHighlighted) => {
    const colors = {
      cyan: {
        border: isHighlighted ? 'border-cyan-400/60' : 'border-cyan-400/20',
        bg: isHighlighted ? 'bg-cyan-500/10' : 'bg-cyan-500/5',
        text: isHighlighted ? 'text-cyan-300' : 'text-cyan-400',
        glow: isHighlighted ? 'shadow-cyan-400/30' : 'shadow-cyan-400/10'
      },
      purple: {
        border: isHighlighted ? 'border-purple-400/60' : 'border-purple-400/20',
        bg: isHighlighted ? 'bg-purple-500/10' : 'bg-purple-500/5',
        text: isHighlighted ? 'text-purple-300' : 'text-purple-400',
        glow: isHighlighted ? 'shadow-purple-400/30' : 'shadow-purple-400/10'
      },
      teal: {
        border: isHighlighted ? 'border-teal-400/60' : 'border-teal-400/20',
        bg: isHighlighted ? 'bg-teal-500/10' : 'bg-teal-500/5',
        text: isHighlighted ? 'text-teal-300' : 'text-teal-400',
        glow: isHighlighted ? 'shadow-teal-400/30' : 'shadow-teal-400/10'
      }
    };
    return colors[experience.color] || colors.cyan;
  };

  const renderMobileLayout = () => (
    <div className="space-y-6 py-4 px-2">
      {experiences.map((experience, index) => {
        const colors = getColorClasses(experience, false);
        return (
          <div
            key={experience.id}
            data-experience-id={experience.id}
            className="relative"
          >
            <div className="flex gap-4">
              {/* Simple timeline side */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-800/60 border border-gray-600/40 flex items-center justify-center">
                  <experience.icon className={`w-4 h-4 ${colors.text}`} />
                </div>
                
                {/* Simple timeline line */}
                {index < experiences.length - 1 && (
                  <div className="w-0.5 h-12 mt-2 bg-gray-700/40" />
                )}
              </div>

              {/* Simplified card content */}
              <div className="flex-1 pb-4">
                <div className="bg-black/80 border border-gray-700/40 rounded-lg p-4">
                  {/* Duration badge */}
                  <div className="mb-3">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${colors.bg} ${colors.border} border ${colors.text}`}>
                      {experience.duration}
                    </span>
                  </div>

                  {/* Company header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-md ${colors.bg} border ${colors.border} flex items-center justify-center text-xs font-bold ${colors.text}`}>
                      {experience.company.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {experience.company}
                      </h3>
                      <p className={`text-sm ${colors.text}`}>
                        {experience.role}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-3">
                    <ul className="space-y-1">
                      {experience.description.map((desc, idx) => (
                        <li key={idx} className="text-sm text-gray-200 flex items-start gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${colors.bg.replace('/10', '/70')}`} />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {experience.techStack.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className={`text-xs ${colors.bg} ${colors.border} border ${colors.text}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderDesktopLayout = () => (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-gray-700/30 via-gray-600/20 to-transparent rounded-full" style={{ height: '100%' }}>
        <div 
          ref={timelineRef}
          className="w-full bg-gradient-to-b from-cyan-400/60 via-purple-500/60 to-teal-400/60 rounded-full shadow-lg transition-all duration-500 ease-out"
          style={{ 
            height: `${timelineHeight}px`,
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)'
          }}
        />
      </div>

      {/* Experience items */}
      <div className="space-y-32 py-12">
        {experiences.map((experience, index) => {
          const isHighlighted = highlightedCard === experience.id;
          const isLeft = index % 2 === 0;
          const colors = getColorClasses(experience, isHighlighted);

          return (
            <div
              key={experience.id}
              data-experience-id={experience.id}
              className="relative flex items-center"
            >
              {/* Timeline icon - always centered */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                <div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-700 ${
                    isHighlighted 
                      ? `scale-110 bg-gradient-to-br from-${experience.color}-400 to-${experience.color}-600 ${colors.glow} shadow-xl` 
                      : `scale-100 bg-gray-900/90 border-2 ${colors.border} backdrop-blur-sm`
                  }`}
                >
                  <experience.icon className={`w-7 h-7 transition-colors duration-700 ${
                    isHighlighted ? 'text-white' : colors.text
                  }`} />
                  {isHighlighted && (
                    <div className={`absolute inset-0 rounded-full blur-xl bg-gradient-to-br from-${experience.color}-400 to-${experience.color}-600 opacity-50 animate-pulse`} />
                  )}
                </div>
              </div>

              {isLeft ? (
                <>
                  {/* Card left side */}
                  <div className="w-1/2 pr-16">
                    <div className="flex justify-end">
                      <div
                        className={`max-w-md transform transition-all duration-700 ${
                          isHighlighted
                            ? 'translate-y-0 scale-[1.02]'
                            : 'translate-y-2 scale-[0.98]'
                        }`}
                      >
                        {/* Animated border */}
                        <div className={`absolute -inset-1 rounded-xl blur transition-all duration-700 ${
                          isHighlighted 
                            ? `bg-gradient-to-r from-${experience.color}-400/40 via-${experience.color}-500/40 to-${experience.color}-400/40 opacity-80` 
                            : 'bg-gradient-to-r from-gray-600/20 via-gray-500/20 to-gray-600/20 opacity-30'
                        }`} />
                        
                        {/* Card */}
                        <div className={`relative backdrop-blur-md rounded-xl p-6 transition-all duration-700 ${
                          isHighlighted
                            ? `bg-black/95 border ${colors.border} ${colors.glow} shadow-xl`
                            : 'bg-black/80 border border-gray-700/40'
                        }`}>
                          {/* Company header */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold transition-all duration-700 ${
                              isHighlighted 
                                ? `${colors.bg} ${colors.border} border ${colors.text}` 
                                : 'bg-gray-800/60 border border-gray-600/40 text-gray-400'
                            }`}>
                              {experience.company.charAt(0)}
                            </div>
                            <div>
                              <h3 className={`text-xl font-semibold transition-colors duration-700 ${
                                isHighlighted ? 'text-white' : 'text-gray-300'
                              }`}>
                                {experience.company}
                              </h3>
                              <p className={`text-sm transition-colors duration-700 ${
                                isHighlighted ? colors.text : 'text-gray-500'
                              }`}>
                                {experience.role}
                              </p>
                            </div>
                          </div>

                          {/* Description */}
                          <div className="mb-4">
                            <ul className="space-y-2">
                              {experience.description.map((desc, idx) => (
                                <li key={idx} className={`text-sm flex items-start gap-2 transition-colors duration-700 ${
                                  isHighlighted ? 'text-gray-200' : 'text-gray-400'
                                }`}>
                                  <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-colors duration-700 ${
                                    isHighlighted ? colors.bg.replace('/10', '/70') : 'bg-gray-600/50'
                                  }`} />
                                  {desc}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tech stack */}
                          <div className="flex flex-wrap gap-1.5">
                            {experience.techStack.map((tech, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className={`text-xs transition-all duration-700 ${
                                  isHighlighted 
                                    ? `${colors.bg} ${colors.border} border ${colors.text}` 
                                    : 'bg-gray-800/40 border-gray-600/30 text-gray-400'
                                }`}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Duration right side */}
                  <div className="w-1/2 pl-16">
                    <div className={`transition-all duration-700 ${
                      isHighlighted ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-80'
                    }`}>
                      <div className={`inline-block px-4 py-2 backdrop-blur-sm rounded-full transition-all duration-700 ${
                        isHighlighted 
                          ? `${colors.bg} ${colors.border} border` 
                          : 'bg-gray-800/60 border border-gray-600/40'
                      }`}>
                        <span className={`text-sm font-medium transition-colors duration-700 ${
                          isHighlighted ? colors.text : 'text-gray-400'
                        }`}>
                          {experience.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Duration left side */}
                  <div className="w-1/2 pr-16">
                    <div className="flex justify-end">
                      <div className={`transition-all duration-700 ${
                        isHighlighted ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-80'
                      }`}>
                        <div className={`inline-block px-4 py-2 backdrop-blur-sm rounded-full transition-all duration-700 ${
                          isHighlighted 
                            ? `${colors.bg} ${colors.border} border` 
                            : 'bg-gray-800/60 border border-gray-600/40'
                        }`}>
                          <span className={`text-sm font-medium transition-colors duration-700 ${
                            isHighlighted ? colors.text : 'text-gray-400'
                          }`}>
                            {experience.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card right side */}
                  <div className="w-1/2 pl-16">
                    <div
                      className={`max-w-md transform transition-all duration-700 ${
                        isHighlighted
                          ? 'translate-y-0 scale-[1.02]'
                          : 'translate-y-2 scale-[0.98]'
                      }`}
                    >
                      {/* Animated border */}
                      <div className={`absolute -inset-1 rounded-xl blur transition-all duration-700 ${
                        isHighlighted 
                          ? `bg-gradient-to-r from-${experience.color}-400/40 via-${experience.color}-500/40 to-${experience.color}-400/40 opacity-80` 
                          : 'bg-gradient-to-r from-gray-600/20 via-gray-500/20 to-gray-600/20 opacity-30'
                      }`} />
                      
                      {/* Card */}
                      <div className={`relative backdrop-blur-md rounded-xl p-6 transition-all duration-700 ${
                        isHighlighted
                          ? `bg-black/95 border ${colors.border} ${colors.glow} shadow-xl`
                          : 'bg-black/80 border border-gray-700/40'
                      }`}>
                        {/* Company header */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold transition-all duration-700 ${
                            isHighlighted 
                              ? `${colors.bg} ${colors.border} border ${colors.text}` 
                              : 'bg-gray-800/60 border border-gray-600/40 text-gray-400'
                          }`}>
                            {experience.company.charAt(0)}
                          </div>
                          <div>
                            <h3 className={`text-xl font-semibold transition-colors duration-700 ${
                              isHighlighted ? 'text-white' : 'text-gray-300'
                            }`}>
                              {experience.company}
                            </h3>
                            <p className={`text-sm transition-colors duration-700 ${
                              isHighlighted ? colors.text : 'text-gray-500'
                            }`}>
                              {experience.role}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="mb-4">
                          <ul className="space-y-2">
                            {experience.description.map((desc, idx) => (
                              <li key={idx} className={`text-sm flex items-start gap-2 transition-colors duration-700 ${
                                isHighlighted ? 'text-gray-200' : 'text-gray-400'
                              }`}>
                                <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-colors duration-700 ${
                                  isHighlighted ? colors.bg.replace('/10', '/70') : 'bg-gray-600/50'
                                }`} />
                                {desc}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-1.5">
                          {experience.techStack.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className={`text-xs transition-all duration-700 ${
                                isHighlighted 
                                  ? `${colors.bg} ${colors.border} border ${colors.text}` 
                                  : 'bg-gray-800/40 border-gray-600/30 text-gray-400'
                              }`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="min-h-screen py-16 px-4 bg-black relative overflow-hidden">
      
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Simplified section header */}
        <div className="text-center mb-16">
          <h2 className={`font-bold mb-6 text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent`}>
            Experience
          </h2>
          <p className={`text-gray-400 max-w-3xl mx-auto leading-relaxed ${
            isMobile ? 'text-base' : 'text-lg'
          }`}>
            A journey through innovative roles and impactful contributions in the tech industry
          </p>
        </div>

        {/* Timeline container */}
        <div className={`relative ${isMobile ? 'max-w-2xl' : 'max-w-7xl'} mx-auto`}>
          {/* Experience items */}
          {isMobile ? renderMobileLayout() : renderDesktopLayout()}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;