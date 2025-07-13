import React, { useState } from 'react';
import { X, ExternalLink, Info, ChevronDown, ChevronUp } from 'lucide-react';

const CertificatesSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [showAllAchievements, setShowAllAchievements] = useState(false);

  const certificates = [
    {
      id: '1',
      title: 'Redhat Certified System Administrator',
      image: 'https://ik.imagekit.io/5dpa1a7ub/Certifications/Redhat-Logo.png?updatedAt=1752146302207',
      description: 'Validated proficiency in Linux system administration, including installation, configuration, and management of Red Hat Enterprise Linux (RHEL) systems. Demonstrated hands-on skills in user and group management, storage configuration, system security, firewall setup, and basic shell scripting. Gained practical experience in managing Linux firewalls and troubleshooting services using the command line.',
      url: 'https://www.credly.com/badges/3818cf80-4812-445c-9571-24befe3ca6b7/public_url',
      issuer: 'Redhat',
      skills: [
        "Linux System Administration",
        "Red Hat Linux",
        "Red Hat Enterprise Linux (RHEL)",
        "Linux Firewalls"
      ]
    },
    {
      id: '2',
      title: 'GitHub Foundations',
      image: 'https://ik.imagekit.io/5dpa1a7ub/Certifications/Github-Logo.png?updatedAt=1752146288262',
      description: 'Mastered essential Git and GitHub skills for version control and collaboration. Gained hands-on experience with repository management, branching, pull requests, conflict resolution, and GitHub CLI. Demonstrated ability to contribute effectively to open-source projects and collaborate using modern DevOps workflows.',
      url: 'https://www.credly.com/badges/3c79786f-8602-4c95-a157-a6d6856cc0f6/',
      issuer: 'GitHub',
      skills: [
        'Version Control with Git',
        'Collaborative Development',
        'Repository Management',
        'Pull Requests & Code Reviews',
        'GitHub Issues & Projects',
      ]
    },
    {
      id: '3',
      title: 'Microsoft certified Power BI certificate',
      image: 'https://ik.imagekit.io/5dpa1a7ub/Certifications/PowerBi-Logo.png?updatedAt=1752146271321',
      description: 'Developed expertise in creating interactive dashboards and data visualizations using Power BI. Gained hands-on experience in data modeling and transforming raw data into actionable insights.',
      url: 'https://www.coursera.org/account/accomplishments/verify/1P5ZLKPYC2WN',
      issuer: 'Microsoft',
      skills: [
        "Interactive Data Visualization",
        "Advanced Analytics",
        "Dashboard Development",
        "Data Storytelling",
        "Business Intelligence"
      ]
    },
    {
      id: '4',
      title: 'Web Development Bootcamp',
      image: 'https://ik.imagekit.io/5dpa1a7ub/Certifications/Web-Bootcamp.png?updatedAt=1752146262123',
      description: 'Completed a hands-on, project-driven course focused on full-stack web development. Gained a solid foundation in building modern, responsive websites and dynamic web applications from scratch. Learned both frontend and backend development through real-world projects, with an emphasis on practical implementation, deployment, and best coding practices.',
      url: 'https://www.udemy.com/certificate/UC-4a170b41-810c-4955-99df-ef32b9e21111/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com',
      issuer: 'Udemy',
      skills: [
        "HTML5",
        "JavaScript",
        "Decentralized Applications (DApps)",
        "Web3",
        "PostgreSQL",
        "Postman API",
        "GitHub",
        "Express.js with Node.js",
        "Cascading Style Sheets (CSS)",
        "Bootstrap (Framework)",
        "API",
        "React.js",
        "Git",
        "Embedded JavaScript (EJS)",
        "jQuery"
      ]
    },
    {
      id: '5',
      title: 'Supervised Machine Learning',
      image: 'https://ik.imagekit.io/5dpa1a7ub/Certifications/deeplearning-ai.png?updatedAt=1752146310721',
      description: 'Completed a foundational course on supervised machine learning covering key concepts such as linear and logistic regression. Gained hands-on experience in building and training predictive models using Python with libraries like NumPy and scikit-learn. Focused on solving real-world problems using regression and binary classification techniques.',
      url: 'https://www.coursera.org/account/accomplishments/certificate/NWS3422G9LLJ',
      issuer: 'Coursera',
      skills: [
        "Jupyter",
        "Scikit Learn (Machine Learning Library)",
        "Supervised Learning",
        "Regression Analysis",
        "Feature Engineering",
        "NumPy",
        "Machine Learning",
        "Artificial Intelligence",
        "Python Programming"
      ]
    },
    {
      id: '6',
      title: 'Java DSA Course',
      image: 'https://ik.imagekit.io/5dpa1a7ub/Certifications/scaler-java.png?updatedAt=1752146207193',
      description: 'Completed a hands-on course designed to build strong problem-solving skills using Java for technical interviews. The course emphasized understanding core algorithmic thinking, improving coding efficiency, and applying structured approaches to solve complex problems.',
      url: 'https://moonshot.scaler.com/s/li/y6Co0YHceQ',
      issuer: 'Scaler',
      skills: [
        "Arrays",
        "ArrayList",
        "Strings",
        "Sorting",
        "Recursion",
        "LinkedList",
        "Stack and Queue",
        "Tree",
        "Heap",
        "HashMap",
        "Graph",
        "Dynamic Programming"
      ]
    }
  ];

  const achievements = [
    {
      id: '1',
      title: 'Yutham Hackathon',
      image: 'https://ik.imagekit.io/5dpa1a7ub/Achievements/Yutham.png?updatedAt=1752172094691',
      description: 'Third place in Yutham - Intra-college hackathon',
      details: 'We came up with the idea of a Smart Parking System, implemented using React.js and integrated with IoT to create a complete, real-world solution. This project addressed a practical problem and secured us 3rd prize, while also providing valuable insights through various reviews and feedback.',
      url: 'https://github.com/Navaneetha-Krishnan-MV/parking'
    },
    {
      id: '2',
      title: 'Top-30 at Science Day',
      image: 'https://ik.imagekit.io/5dpa1a7ub/Achievements/Science-Project.png?updatedAt=1752171619430',
      description: 'Intra-college science fair',
      details: 'Our team at KPRIET showcased innovation on Science Day with a Temperature Based Fan Speed Control model using Arduino, DC fan, and a Temperature sensor. Honored to secure a spot in the top 30, earning meritorious recognition and certificates.',
      url: ''
    },
    {
      id: '3',
      title: 'Technical Quiz Winner',
      image: 'https://ik.imagekit.io/5dpa1a7ub/Achievements/KIT.png?updatedAt=1752172191900',
      description: 'Secured third place in Technical Quiz at KIT College',
      details: 'Participated in a Technical Quiz at KIT College and secured third place. Demonstrated strong problem-solving skills and knowledge of programming languages and frameworks.Won cash prize of Rs.1500'
    },
    {
      id: '4',
      title: 'Community Service Volunteer',
      image: 'https://ik.imagekit.io/5dpa1a7ub/Achievements/Social1.png?updatedAt=1752172770671',
      description: 'Assisted in hosting elderly and differently-abled guests.',
      details: 'Over 100 elderly and differently-abled members from the Universal Peace Foundation, Coimbatore, visited the Department of Computer Science and Engineering at KPRIET. It was a heartwarming occasion that highlighted the spirit of social responsibility among our faculty and students, who came together with compassion and dedication to support the visitors in every possible way. Beyond technical achievements, this experience reminded us that true fulfillment comes from serving others and creating a positive impact in their lives.'
    },
    {
      id: '5',
      title: 'THIRAN 2025 Tech Fest Winner',
      image: 'https://ik.imagekit.io/5dpa1a7ub/Achievements/Eswar.jpg?updatedAt=1752173888016',
      description: 'Sri Eshwar’s mega inter-college techno-cultural-sports fest.',
      details: 'Secured 1st place in J-League and 3rd place in Code Survival at Sri Eshwar’s inter-college tech fest. Demonstrated strong Java coding, debugging, blind coding, and team problem-solving skills across intense multi-round competitions.'
    },
    {
      id: '6',
      title: 'Volunteer Impact',
      image: 'https://ik.imagekit.io/5dpa1a7ub/Achievements/CS%20juniors.png?updatedAt=1752174438918',
      description: 'Empowering juniors through mentorship and community service.',
      details: 'Mentored school students in cybersecurity and problem-solving during a department event, and volunteered at a government school to organize tech activities and gift distribution.'
    },
    {
      id: '7',
      title: 'IEEE CS Madras Mega ICT Quiz',
      image: 'https://ik.imagekit.io/5dpa1a7ub/Achievements/Quiz.png?updatedAt=1752174726285',
      description: 'Secured 3rd position out of 2000+ participants in a zonal-level quiz.',
      details: 'Qualified among the top 72 from 2000+ participants for the zonal round held at KPRIET. Competed across six challenging rounds covering CS topics and secured 3rd place, winning a cash prize, books, and a special IEEE-signed memento.'
    }
  ];

  const closeModal = () => {
    setSelectedCertificate(null);
    setSelectedAchievement(null);
  };

  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, 4);
  const displayedAchievements = showAllAchievements ? achievements : achievements.slice(0, 4);

  return (
    <section id="achievements" className="py-16 px-4 bg-black relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black to-black/10 opacity-20" />
      <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Certifications & Achievements
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A showcase of my certifications and achievements across learning, competitions, and projects.
          </p>
        </div>

        {/* Two Main Boxes - Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Certificates Box */}
          <div className="group relative h-fit">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400/60 rounded-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="relative bg-black backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-500 h-full">
              <div className="flex items-center mb-6">
                {/* <div className="bg-gradient-to-r from-cyan-500/80 to-teal-500/80 rounded-lg p-3 mr-4">
                  <span className="text-2xl">📜</span>
                </div> */}
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Certifications</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {displayedCertificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="group/card relative bg-gray-800/60 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 border border-gray-700/50 hover:border-cyan-400/40 backdrop-blur-sm min-h-[180px] flex flex-col"
                    onClick={() => setSelectedCertificate(cert)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-transparent to-teal-400/5 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative overflow-hidden flex-1">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-32 object-cover transition-transform duration-300 group-hover/card:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-2 right-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                        <div className="bg-cyan-500/80 rounded-full p-1">
                          <Info className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 relative z-10">
                      <h4 className="font-semibold text-gray-200 text-sm leading-tight group-hover/card:text-cyan-300 transition-colors duration-300 line-clamp-2">{cert.title}</h4>
                      <p className="text-xs text-gray-400 mt-2">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {certificates.length > 4 && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setShowAllCertificates(!showAllCertificates)}
                    className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-300 px-6 py-3 rounded-lg border border-cyan-400/30 hover:from-cyan-500/30 hover:to-teal-500/30 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    {showAllCertificates ? 'Show Less' : 'Show More'}
                    {showAllCertificates ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Achievements Box */}
          <div className="group relative h-fit">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400/20 via-pink-500/20 to-cyan-400/20 rounded-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="relative bg-gray-900/95 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-400/60 transition-all duration-500 h-full">
              <div className="flex items-center mb-6">
                {/* <div className="bg-gradient-to-r from-purple-500/80 to-pink-500/80 rounded-lg p-3 mr-4">
                  <span className="text-2xl">🏆</span>
                </div> */}
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">Achievements</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {displayedAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="group/card relative bg-gray-800/60 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 border border-gray-700/50 hover:border-purple-400/40 backdrop-blur-sm min-h-[180px] flex flex-col"
                    onClick={() => setSelectedAchievement(achievement)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-transparent to-pink-400/5 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative overflow-hidden flex-1">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-32 object-cover transition-transform duration-300 group-hover/card:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-2 right-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                        <div className="bg-purple-500/80 rounded-full p-1">
                          <Info className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 relative z-10">
                      <h4 className="font-semibold text-gray-200 text-sm leading-tight group-hover/card:text-purple-300 transition-colors duration-300 line-clamp-2">{achievement.title}</h4>
                      <p className="text-xs text-gray-400 mt-2 line-clamp-2">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {achievements.length > 4 && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setShowAllAchievements(!showAllAchievements)}
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-6 py-3 rounded-lg border border-purple-400/30 hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-400/50 transition-all duration-300"
                  >
                    {showAllAchievements ? 'Show Less' : 'Show More'}
                    {showAllAchievements ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400/40 via-purple-500/40 to-teal-400/40 rounded-2xl"></div>
              <div className="relative bg-gray-900/95 backdrop-blur-sm rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto border border-cyan-400/20">
                <div className="relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-gray-800/80 hover:bg-cyan-500/30 rounded-full p-3 transition-all duration-300 z-10 border border-gray-700 hover:border-cyan-400/50"
                  >
                    <X className="w-6 h-6 text-gray-300 hover:text-cyan-300" />
                  </button>
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">{selectedCertificate.title}</h3>
                  <p className="text-cyan-400 font-normal mb-3 text-sm">Issued by {selectedCertificate.issuer}</p>
                  <p className="text-gray-300 leading-relaxed text-sm mb-4">{selectedCertificate.description}</p>
                  
                  {selectedCertificate.skills && (
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-cyan-300 mb-2">Skills Gained</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedCertificate.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="inline-block text-xs bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-200 px-2 py-1 rounded-full border border-cyan-400/30 backdrop-blur-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <a
                    href={selectedCertificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 text-sm"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Achievement Modal */}
        {selectedAchievement && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400/40 via-pink-500/40 to-cyan-400/40 rounded-2xl"></div>
              <div className="relative bg-gray-900/95 backdrop-blur-sm rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto border border-purple-400/20">
                <div className="relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-gray-800/80 hover:bg-purple-500/30 rounded-full p-3 transition-all duration-300 z-10 border border-gray-700 hover:border-purple-400/50"
                  >
                    <X className="w-6 h-6 text-gray-300 hover:text-purple-300" />
                  </button>
                  <img
                    src={selectedAchievement.image}
                    alt={selectedAchievement.title}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">{selectedAchievement.title}</h3>
                  <p className="text-purple-400 font-normal mb-3 text-sm">{selectedAchievement.description}</p>
                  <p className="text-gray-300 leading-relaxed text-sm mb-4">{selectedAchievement.details}</p>
                  
                  {selectedAchievement.url && (
                    <a
                      href={selectedAchievement.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 text-sm"
                    >
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificatesSection;